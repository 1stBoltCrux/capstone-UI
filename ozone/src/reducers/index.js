import { combineReducers } from 'redux';
import PrimaryReducer from './PrimaryReducer'

const rootReducer = combineReducers({
  currentState: PrimaryReducer
})

export default rootReducer;
