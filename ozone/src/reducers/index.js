import { combineReducers } from 'redux';
import FullListReducer from './FullListReducer';
import MyListReducer from './MyListReducer';

const rootReducer = combineReducers({
  fullList: FullListReducer,
  myList: MyListReducer
})

export default rootReducer;
