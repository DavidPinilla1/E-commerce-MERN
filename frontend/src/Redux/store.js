import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index.js';
import { save, load } from "redux-localstorage-simple"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(), // Saving done here
)( createStore );

const store = createStoreWithMiddleware(
    reducer,
    load({
        preloadedState:{
            carrito:[]
        }
    }), // Loading done here
    composeEnhancers(),
);

export default store;
