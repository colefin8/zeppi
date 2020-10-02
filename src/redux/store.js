import authReducer from './authReducer';
import msgReducer from './messageReducer';
import friendReducer from './friendReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    authReducer,
    msgReducer,
    friendReducer
})

export default createStore(rootReducer);
