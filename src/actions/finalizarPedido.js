import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
export const FinalizarPedidoBD = (direccion, total) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const pedidos = getState().carrito.carro;
        const nuevoPedido = {
            direccion,
            total,
            pedido: {
                pedidos
            }
        }
        try {
            await addDoc(collection(db, `users/${uid}/pedidos`), nuevoPedido);


        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}