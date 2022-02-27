import { types } from "../types/types";

export const carrito = (state = {}, action) => {

    switch (action.type) {
        case types.AgregarProducto:
            return {
                carro: [...action.payload]
            }
        case types.Cantidad:
            return {
                carro: [...state.carro]
            }
        case types.EliminarProducto:
            return {
                carro: state.carro.filter(
                plato => plato.id !== action.payload)
            }
        default: return state;
    }

}