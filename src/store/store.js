import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducers'

const rootDeducer = combineReducers({
    auth:authReducer,
    alert:alertReducer,
});

const store = createStore(rootDeducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;