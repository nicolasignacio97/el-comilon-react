import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/auth';
import { iuReducer } from '../reducers/uiReduce';
import { platos } from '../reducers/platos';

const reducers = combineReducers({
    auth: authReducer,
    UI : iuReducer,
    platos: platos
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

