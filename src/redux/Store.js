import authReducer from './AuthReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    authReducer
})

export default createStore(rootReducer);