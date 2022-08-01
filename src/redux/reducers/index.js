import { combineReducers } from "redux";
import auth from './auth';
import data from './data';

const allReducers = combineReducers({ auth, data });

export default allReducers;