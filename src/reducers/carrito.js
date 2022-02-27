import { types } from "../types/types";

export const carrito = (state = {}, action) => {

    switch (action.type) {
        case types.AgregarProducto:
            return {
                carro: [...action.payload]
                // id: action.payload.id,
                // nombre: action.payload.nombre,
                // precio: action.payload.precio,
                // fileURl: action.payload.fileURl,
                // cantidad: action.payload.cantidad,
                // acomulado: action.payload.acomulado
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