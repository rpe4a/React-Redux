import { createStore, applyMiddleware  } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default (initialState) => {
    const logger = createLogger()

    const store = createStore(
        rootReducer, //root reducer
        initialState, //default state
        applyMiddleware(logger)
    )

    /*if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }*/
 
    return store;
};
