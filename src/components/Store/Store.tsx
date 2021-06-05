import React, { ReactNode, useReducer } from 'react';
import { StoreContext } from './store.context';
import { appReducers } from './reducers';
import { initialState } from './initial-state';

type StoreProps = {
    children: ReactNode
}

function Store({ children }: StoreProps) {
  const [state, dispatch] = useReducer(appReducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </StoreContext.Provider>
  );
}

export default Store;
