import { getAuth, signInWithPopup, updateCurrentUser, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import {
    providerFacebook,
    providerGoogle,
    providerTwitter,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "../firebase/firebase-config";
import { types } from "../types/types";



export const createUser = (email, password, name) => {

    return (dispath) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispath(login(user.uid, user.displayName))
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                })
            })
    }
}

export const loginWithEmailAndPassword = (email, password) => {
    return (dispath) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await dispath(login(user.uid, user.displayName))
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo o Contrseña Invalido',
                })
            });
    }
}

export const loginConGoogle = () => {
    return (dispath) => {
        const auth = getAuth();
        signInWithPopup(auth, providerGoogle)
            .then(({ user }) => {
                dispath(login(user.uid, user.displayName))
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                })
            })
    }
}

export const loginConFacebook = () => {
    return (dispath) => {
        const auth = getAuth();
        signInWithPopup(auth, providerFacebook)
            .then(console.log)
    }
}
export const loginConTwitter = () => {
    return (dispath) => {
        const auth = getAuth();
        signInWithPopup(auth, providerTwitter)
            .then(console.log)

    }
}



export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};
