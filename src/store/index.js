import {createStore,compose, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index';

const composeEnhancer = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store