import { createStore, applyMiddleware, compose } from 'redux'
/*import createLogger from 'redux-logger'*/
import rootReducer from '../reducers'

export default (initialState) => {
    /*const logger = createLogger()*/


    const finalCreateStore = compose(
        applyMiddleware( /*logger*/ ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(
        rootReducer, //root reducer
        initialState, //default state
    );

    /*const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));*/

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
};