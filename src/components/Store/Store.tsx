import React, { ReactNode, useReducer } from 'react';
import AppStore from '../../models/store.model';
import { StoreContext } from './store.context';
import Author from '../../models/author.model';
import Publisher from '../../models/publisher.model';

type StoreProps = {
    children: ReactNode
}

const initialState: AppStore = {
  authors: [],
  publishers: [],
  books: [],
};

function Store({ children }: StoreProps) {
  function appReducers(state: AppStore, action: any): AppStore {
    switch (action.type) {
      case ('ADD_AUTHORS'): {
        const authors = Object.values(action.payload) as Author[];
        return { ...state, authors };
      }
      case ('ADD_AUTHOR'):
        return {
          ...state,
          authors: [...state.authors, action.payload],
        };
      case ('UPDATE_AUTHOR'):
        return {
          ...state,
          authors: state.authors.reduce((result: Author[], author) => {
            if (author.id === action.payload.id) {
              return [...result, action.payload];
            }
            return [...result, author];
          }, []),
        };
      case ('DELETE_AUTHOR'):
        return {
          ...state,
          authors: state
            .authors
            .filter((author) => author.id !== action.payload.id),
        };
      case ('ADD_PUBLISHERS'): {
        const publishers = Object.values(action.payload) as Publisher[];
        return { ...state, publishers };
      }
      case ('ADD_PUBLISHER'):
        return {
          ...state,
          publishers: [...state.publishers, action.payload],
        };
      case ('UPDATE_PUBLISHER'):
        return {
          ...state,
          publishers: state
            .publishers
            .reduce((result: Publisher[], publisher) => {
              if (publisher.id === action.payload.id) {
                return [...result, action.payload];
              }
              return [...result, publisher];
            }, []),
        };
      case ('DELETE_PUBLISHER'):
        return {
          ...state,
          publishers: state
            .publishers
            .filter((publisher) => publisher.id !== action.payload.id),
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(appReducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </StoreContext.Provider>
  );
}

export default Store;
