import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import useImmer from './useImmer'
import { Draft } from 'immer';
import PubSub from 'pubsub-js'
import { isEqual } from 'lodash'
import { useMemoizedFn } from 'ahooks'

const useForceUpdate = () => {
  const [, setState] = useState(false);
  return () => setState((val) => !val);
};

function createMiniStore<T>(defaultState: T){
  const PUBSUB_MINI_REDUX_SYMBOL = Symbol('PUBSUB_MINI_REDUX_SYMBOL')
  type Dispatch = (f: (draft: Draft<T>) => void | T) => void;

  const defaultDispatch: Dispatch = () => {};

  const ctx = createContext({
    getState: () => defaultState,
    dispatch: defaultDispatch,
  });

  function Provider({ children }) {
    const [state, dispatch] = useImmer(defaultState);

    useEffect(() => {
      // 发布更新通知
      PubSub.publish(PUBSUB_MINI_REDUX_SYMBOL)
    }, [state])

    const getState = useMemoizedFn(() => state)

    // store始终保持不变，所以需要我们手动去发布更新通知
    const store = useMemo(() => ({
      getState,
      dispatch
    }), [])

    return <ctx.Provider value={store}>{children}</ctx.Provider>;
  }

  /** 
   * @description 功能类似react-redux的useSelector
   * @example const count = useSelector(state => state.count)
   * @returns 返回状态
   */
  function useSelector<K>(selector: (state: T) => K) {
    const store = useContext(ctx);
    if (store === undefined) throw new Error('useSelector使用必须在Provider内部');
    const forceUpdate = useForceUpdate();
    const selectorRef = useRef(selector)
    const prevStateRef = useRef(selector(store.getState()))

    selectorRef.current = selector;

    useEffect(() => {
      const checkUpdate = () => {
        const nextState = selectorRef.current(store.getState())
        // 判断selector返回的值有没有发生变化，要是发生变化，强制刷新
        if(!isEqual(nextState, prevStateRef.current)){
          prevStateRef.current = nextState
          forceUpdate()
        }
      }
      // 接受订阅信息
      const token = PubSub.subscribe(PUBSUB_MINI_REDUX_SYMBOL, checkUpdate)
      return () => {
        PubSub.unsubscribe(token)
      } 
    }, [store])

    return prevStateRef.current;
  }

  /** 
   * @description 返回一个dispatch，和useImmer的update功能一样
   */
  function useDispatch(): Dispatch{
    const store = useContext(ctx);
    if (store === undefined) throw new Error('useDispatch使用必须在Provider内部');
    return store.dispatch
  }

  return { Provider, useSelector, useDispatch } as const
}

export default createMiniStore
