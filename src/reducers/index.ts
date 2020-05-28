import { combineReducers } from 'redux';
import { item } from './item';
import { discount } from './discount';

export const rootReducer = combineReducers({
  item,
  discount,
});

export type RootState = ReturnType<typeof rootReducer>
