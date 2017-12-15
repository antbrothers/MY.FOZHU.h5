import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import banner from 'reducers/Banner'


export default combineReducers({
  counter,
  userInfo,
  banner
});