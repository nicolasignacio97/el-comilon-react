import { types } from "../types/types";

export const carrito = (state = {}, action) => {

    switch (action.type) {
        case types.AgregarProducto:
            return {
                ...state,
                carro: [...action.payload]
            }
        case types.Cantidad:
            return {
                ...state,
                carro: [...action.payload]
            }
        case types.EliminarProducto:
            return {
                ...state,
                carro: state.carro.filter(plato => plato.id !== action.payload)
            }
        default: return state;
    }

}