import { useCallback, useState } from 'react';
import produce, { Draft } from 'immer';

/**
 * useState集成immer功能，返回值同useState，但是useState的setState中操作的是draftState对象
 * @param initialState
 * @return {*}
 */
function useImmer<T = any>(initialState: T | (() => T)): [T, (f: (draft: Draft<T>) => void | T) => void];
function useImmer(initialState: any) {
  const [state, updateState] = useState(initialState);

  return [
    state,
    useCallback((updater) => {
      updateState(produce(updater));
    }, []),
  ];
}

export default useImmer;
