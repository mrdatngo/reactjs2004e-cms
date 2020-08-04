import { combineReducers } from 'redux'
import userReducer from './userReducer'

const reducersAll = combineReducers({ user: userReducer })

export default reducersAll;
