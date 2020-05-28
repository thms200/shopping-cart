import { combineReducers } from 'redux';
import { item } from './item';

export const rootReducer = combineReducers({
  item,
});

export type RootState = ReturnType<typeof rootReducer>
