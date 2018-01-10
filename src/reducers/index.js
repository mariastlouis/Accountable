import { combineReducers } from 'redux';
import lawmakerReducer from './lawmakerReducer/lawmakerReducer.js';
import billReducer from './billReducer.js';


const rootReducer = combineReducers({
  lawmakers: lawmakerReducer,
  bills: billReducer
});

export default rootReducer;