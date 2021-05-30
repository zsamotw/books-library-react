import React, { createContext } from 'react';
import AppStore from '../../models/store.model';

export const StoreContext = createContext(
  {} as {state: AppStore, dispatch: React.Dispatch<any>},
);
