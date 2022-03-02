import { pedidosDB } from "../helpers/LeerPedidos";
import { types } from "../types/types";


export const LeerPedidos = (uid) => {
    return async (dispath) => {
        const pedidos = await pedidosDB(uid)
        dispath(mostrarpedidos(pedidos))
    }

}

export const mostrarpedidos = (pedidos) => {
    return {
        type: types.leerPedidos,
        payload: pedidos
    }
}