import {combineReducers, Reducer} from 'redux';
import {RootState} from './state';
import pointReducer from './points';

export type {RootState};

export interface Action {
  type: string;
  payload: any;
}

export const reducers: Reducer<RootState> = combineReducers<RootState>({
  point: pointReducer,
});

export const rootReducer = (state: RootState, action: any) => {
  return reducers(state, action);
};

/* Axios.defaults.headers = {
  "Content-Type": "application/json",
}; */

export type Error = any;
