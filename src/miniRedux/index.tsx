import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import useImmer from './useImmer'
import { Draft } from 'immer';
import PubSub from 'pubsub-js'
import { isEqual } from 'lodash'

const useForceUpdate = () => {
  const [, setState] = useState(false);
  return () => setState((val) => !val);
};

function MiniRedux<T>(defaultState: T){
  const PUBSUB_TOKEN = 'PUBSUB_TOKEN'
  type Dispatch = (f: (draft: Draft<T>) => void | T) => void;

  const defaultDispatch: Dispatch = () => {};

  const _ctx = createContext({
    getState: () => defaultState,
    dispatch: defaultDispatch,
  });

  function Provider({ children }) {
    const [state, dispatch] = useImmer(defaultState);

    useEffect(() => {
      // 发布更新通知
      PubSub.publish(PUBSUB_TOKEN)
    }, [state])

    // store始终保持不变，所以需要我们手动去发布更新通知
    const store = useMemo(() => ({
      getState: () => state,
      dispatch
    }), [])

    return <_ctx.Provider value={store}>{children}</_ctx.Provider>;
  }

  /** 
   * @description 功能类似react-redux的useSelector
   * @example const count = useSelector(state => state.count)
   */
  function useSelector(selector: (state: T) => any) {
    const store = useContext(_ctx);
    if (store === undefined) throw new Error('useSelector使用必须在Provider内部');
    const forceUpdate = useForceUpdate();
    const prevSelector = useRef(selector)
    const prevState = useRef(selector(store.getState()))

    prevSelector.current = selector;
    prevState.current = selector(store.getState());

    useEffect(() => {
      const checkUpdate = () => {
        const nextState = prevSelector.current(store.getState())
        // 判断selector返回的值有没有发生变化，要是发生变化，强制刷新
        if(!isEqual(nextState, prevState.current)){
          forceUpdate()
        }
      }
      // 接受订阅信息
      PubSub.subscribe(PUBSUB_TOKEN, checkUpdate)
      return PubSub.unsubscribe(PUBSUB_TOKEN, checkUpdate)
    }, [store])

    return store;
  }

  return { Provider, useSelector }
}

export default MiniRedux
