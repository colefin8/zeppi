import authReducer from './authReducer';
import msgReducer from './messageReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    authReducer,
    msgReducer
})

export default createStore(rootReducer);