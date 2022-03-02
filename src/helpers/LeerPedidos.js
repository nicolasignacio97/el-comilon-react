import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const pedidosDB = async (uid) => {
    const pedidos = [];
    const querySnapshot = await getDocs(collection(db, `users/${uid}/pedidos`));
    querySnapshot.forEach((doc) => {
        pedidos.push({
            id: doc.id,
            ...doc.data()
        })
    });

    return pedidos
}