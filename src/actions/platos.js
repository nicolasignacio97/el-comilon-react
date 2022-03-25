import { types } from "../types/types"
import { collection, addDoc, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";


export const CreatePlatoDB = (nombre, des, precio, url) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Subiendo Plato',
            html: 'Porfavor espere...',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        try {
            const fileURl = await fileUpload(url);

            await addDoc(collection(db, "platos"), {
                nombre, des, precio, fileURl
            });
            dispatch(crearPlato(nombre, des, precio, fileURl))
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        dispatch(startLoadingPlatos())
        Swal.close();
    }
}


export const DeletePlatoDB = (id) => {

    return (dispatch) => {
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db, "platos", id));
                dispatch(deletePlato(id))
                Swal.fire(
                    '¡Eliminado!',
                    'Su Plato ha sido eliminado.',
                    'success'
                )
            }
        })

    }
}

export const ActualizarPlatoDB = (idPlato, nombre, des, precio, fileUpd) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Actualizando Plato',
            html: 'Porfavor espere...',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        const fileURl = await fileUpload(fileUpd);
        const data = {
            nombre: nombre,
            des: des,
            fileURl: fileURl,
            precio: precio
        }
        await setDoc(doc(db, "platos", idPlato), data);
        dispatch(startLoadingPlatos())
        Swal.close();
    }
}

export const ActtualizarPLato = (idPlato) => {
    return {
        type: types.ActualizarPlatos,
        payload: idPlato
    }
}

export const SeleccionarPlato = (idPlato) => {
    return  (dispatch) => {
        dispatch(seleccion(idPlato))
    }
}

export const seleccion = (idPlato) => {
    return {
        type: types.SeleccionPlato,
        payload: idPlato
    }
}

export const deletePlato = (idPlato) => {
    return {
        type: types.EliminarPlatos,
        payload: idPlato
    }
}

export const LeerPlatosDB = async () => {

    const platosSnapshot = await getDocs(collection(db, "platos"));
    const platos = [];
    platosSnapshot.forEach(snapHijo => {
        platos.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return platos;

}

export const startLoadingPlatos = () => {
    return async (dispatch) => {
        const platos = await LeerPlatosDB();
        dispatch(leerPlatos(platos));
    }
}

export const leerPlatos = (platos) => {
    return {
        type: types.LeerPLatos,
        payload: [...platos]
    }
}

export const limpiar = () => {
    return {
        type:types.limpiar
    }
}

export const crearPlato = (nombre, des, precio, url) => {
    return {
        type: types.CrearPlato,
        payload: {
            nombre,
            des,
            precio,
            url
        }
    }
}