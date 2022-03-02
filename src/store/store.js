import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../reducers/auth';
import { iuReducer } from '../reducers/uiReduce';
import { platos } from '../reducers/platos';
import { carrito } from '../reducers/carrito';
import { perfil } from '../reducers/perfil';
import { pedidos } from '../reducers/pedidos';

const reducers = combineReducers({
    auth: authReducer,
    UI: iuReducer,
    platos: platos,
    carrito: carrito,
    perfil: perfil,
    pedidos: pedidos
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

