import { doc, getDoc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const LeerDatos = (uid = 'asd') => {
    return async (dispath) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        dispath(obtenerDatos(data.nombre, data.correo, data.direccion))
    }
}
export const ActualizarDatos = (nombre, correo, direccion) => {
    return async (dispath, getState) => {
        const { uid, rol } = getState().auth;
        await setDoc(doc(db, "users", uid), {
            nombre,
            correo,
            direccion,
            role: rol
        });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Perfil Actualizado',
            showConfirmButton: false,
            timer: 1500
        })
        dispath(actializarDatos(nombre, correo, direccion))
    }
}



export const obtenerDatos = (nombre, correo, direccion) => {
    return {
        type: types.leerDatos,
        payload: {
            nombre,
            correo,
            direccion
        }
    }
}
export const actializarDatos = (nombre, correo, direccion) => {
    return {
        type: types.ActDatos,
        payload: {
            nombre,
            correo,
            direccion
        }
    }
}


export const LimpiarSesion = () => ({ type: types.cerrarSesion })