import { types } from "../types/types"

export const perfil = (state = {}, action) => {

    switch (action.type) {
        case types.leerDatos:
            return {
                nombre: action.payload.nombre,
                correo: action.payload.correo,
                direccion: action.payload.direccion,
            }
        case types.ActDatos:
            return {
                nombre: action.payload.nombre,
                correo: action.payload.correo,
                direccion: action.payload.direccion,
            }
        case types.cerrarSesion:
            return {
                
            }
        default:
            return state;
    }
}