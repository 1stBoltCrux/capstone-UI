import { combineReducers } from 'redux';
import FullListReducer from './FullListReducer';
import MyListReducer from './MyListReducer';
import FilteredListReducer from './FilteredListReducer';

const rootReducer = combineReducers({
  fullList: FullListReducer,
  myList: MyListReducer,
  filteredList: FilteredListReducer
})

export default rootReducer;
