import { types } from "../types/types"
const producto = [];
let cantidad = 1

// console.log(seleccion.cantidad = seleccion.cantidad + 1)

export const AgregarAlCarro = (id, nombre, precio, fileURl) => {
    const existente = producto.find(producto => producto.id === id)
    return (dispatch) => {
        if (existente) {
            dispatch(Cantidad(existente.cantidad++, existente.precio = existente.precio * existente.cantidad))
        } else {
            producto.push({
                id, nombre, precio, fileURl, cantidad
            })
            dispatch(AgregarProducto(producto))
        }
    }
}

export const sumProducto = (id) => {
    return (dispatch) => {
        const existente = producto.find(producto => producto.id === id)
        if (existente) {
            dispatch(Cantidad(existente.cantidad++, existente.precio = existente.precio * existente.cantidad))
        } else {
            return
        }

    }
}
export const subProducto = (id) => {
    return (dispatch) => {
        const existente = producto.find(producto => producto.id === id)
        if (existente) {
            dispatch(Cantidad(existente.precio = existente.precio / existente.cantidad, existente.cantidad--,))
            if (existente.cantidad === 0) {
                dispatch(Eliminar(existente.id))
            }
        } else {
            return
        }
    }
}

export const Cantidad = () => {
    return {
        type: types.Cantidad,
        payload: [...producto]
    }
}


export const Eliminar = (id) => {
    return (dispatch) => {
        dispatch(EliminarProducto(id))
    }
}

export const AgregarProducto = (producto) => {
    return {
        type: types.AgregarProducto,
        payload: [...producto]
    }
}

export const EliminarProducto = (id) => {
    return {
        type: types.EliminarProducto,
        payload: id
    }
}