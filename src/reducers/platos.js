import { types } from "../types/types";


export const platos = (state = {}, action) => {
    switch (action.type) {
        case types.CrearPlato:
            return {
                ...state,
                nombre: action.payload.nombre,
                desc: action.payload.descripcion,
                precio: action.payload.precio,
                url: action.payload.url,
            }
        case types.LeerPLatos:
            return {
                ...state,
                lista: [...action.payload]
            }
        case types.SeleccionPlato:
            return {
                ...state,
                actualizar: state.lista.filter(plato => plato.id === action.payload)
            }

        case types.ActualizarPlatos:
            return {
                ...state,
                actualizado: state.lista.filter(plato => plato.id === action.payload)
            }

        case types.EliminarPlatos:
            return {
                ...state,
                lista: state.lista.filter(plato => plato.id !== action.payload)
            }
        case types.Logout:
            return {}
            
        case types.limpiar:
            return {}

        default:
            return state;
    }
}

