import { createStore, /*applyMiddleware*/  } from 'redux'
import rootReducer from '../reducers'

export default (initialState) => {
    const store = createStore(
        rootReducer, //root reducer
        initialState //default state
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
};
