import { createStore, /*applyMiddleware*/  } from 'redux'
import rootReducer from '../reducers'

export default (initialState) =>  {
    const store = createStore(
        rootReducer, //root reducer
        initialState //default state
    )

    return store;
};
