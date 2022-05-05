import { configureStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';


const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = configureStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;