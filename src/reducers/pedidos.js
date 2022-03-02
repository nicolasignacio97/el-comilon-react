import { types } from "../types/types";

export const pedidos = (state = {}, action) => {

    switch (action.type) {
        case types.leerPedidos:
            return [...action.payload]

        default: return state;
    }

}