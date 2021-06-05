import React, { ReactNode, useCallback, useReducer } from 'react';
import { StoreContext } from './store.context';
import { appReducers } from './reducers';
import { initialState } from './initial-state';

type StoreProps = {
    children: ReactNode
}

function Store({ children }: StoreProps) {
  const [state, dispatch] = useReducer(appReducers, initialState);

  const memoizedDispatch = useCallback(
    (action: any) => {
      dispatch(action);
    },
    [dispatch],
  );

  return (
    <StoreContext.Provider value={{ state, dispatch: memoizedDispatch }}>
      <div>{children}</div>
    </StoreContext.Provider>
  );
}

export default Store;
