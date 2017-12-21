import { combineReducers } from 'redux';
import lawmakerReducer from './lawmakerReducer/lawmakerReducer.js'
// import makeMoviesReducer from './makeMoviesReducer/makeMoviesReducer';
// import userReducers from './userReducers/userReducers';


const rootReducer = combineReducers({
  lawmakers: lawmakerReducer
  // movies: makeMoviesReducer,
  // user: userReducers
});

export default rootReducer;