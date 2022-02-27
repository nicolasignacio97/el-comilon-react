import { types } from "../types/types"

let producto = [];

export const AgregarAlCarro = (id, nombre, precio, fileURl) => {
    const existente = producto.find(producto => producto.id === id)

    return (dispatch) => {
        if (existente?.id === id) {
            dispatch(Cantidad(existente.cantidad++, existente.acomulado = existente.precio * existente.cantidad))
        } else {
            producto.push({
                id, nombre, precio, fileURl, cantidad: 1, acomulado: precio
            })
        }
        dispatch(AgregarProducto(producto))
    }
}

export const sumProducto = (id) => {
    return (dispatch) => {
        const existente = producto.find(producto => producto.id === id)
        if (existente.id === id) {
            dispatch(Cantidad(existente.cantidad++, existente.acomulado = existente.precio * existente.cantidad))
        } else {
            return
        }

    }
}
export const subProducto = (id) => {
    const existente = producto.find(producto => producto.id === id)
    // const index = producto.findIndex((product) => product.id === existente.id)

    return (dispatch) => {
        if (existente.id === id) {
            dispatch(Cantidad(existente.acomulado = existente.acomulado - existente.precio, existente.cantidad--,))
        } if (existente.cantidad <= 0) {
            dispatch(EliminarProducto(existente.id))
            eliminarProductoDelArreglo(id);
        }
    }
}
export const eliminarProductoDelArreglo = (id) => {
    producto = producto.filter((product) => {
        return product.id !== id;
    });
}
export const AgregarProducto = (producto) => {
    return {
        type: types.AgregarProducto,
        payload: [...producto]
    }
}

export const Cantidad = () => {
    return {
        type: types.Cantidad
    }
}

export const EliminarProducto = (id) => {
    return {
        type: types.EliminarProducto,
        payload: id
    }

}