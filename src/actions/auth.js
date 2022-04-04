import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import {
    providerFacebook,
    providerGoogle,
    providerTwitter,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    db,
} from "../firebase/firebase-config";
import { existe, rolAdmin } from "../helpers/existeUser";
import { types } from "../types/types";

export const guardarUsuario = async (uid, displayName, correo) => {
    const newUser = {
        nombre: displayName,
        correo: correo,
        role: 'user'
    }
    if (await existe(uid)) {
        return;
    }
    const document = doc(db, `users/${uid}`);
    setDoc(document, newUser)
}

export const createUser = (email, password, name) => {
    return (dispath) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                guardarUsuario(user.uid, user.displayName, user.email)
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
            .then(({ user }) => {
                rolAdmin(user.uid)
                    .then(async (rol) => {
                        await dispath(login(user.uid, user.displayName, rol))
                    })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo y/o Contrseña son incorrectos',
                })
            });
    }
}

export const loginConGoogle = () => {
    return (dispath) => {
        const auth = getAuth();
        signInWithPopup(auth, providerGoogle)
            .then(async ({ user }) => {
                guardarUsuario(user.uid, user.displayName, user.email)
                dispath(login(user.uid, user.displayName))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loginConFacebook = () => {
    return () => {
        const auth = getAuth();
        signInWithPopup(auth, providerFacebook)
            .then(console.log)
    }
}
export const loginConTwitter = () => {
    return () => {
        const auth = getAuth();
        signInWithPopup(auth, providerTwitter)
            .then(console.log)
    }
}

export const login = (uid, displayName, rol) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            rol:rol.role
        }
    }
};

export const startLogout = () => {
    const auth = getAuth()
    return async (dispatch) => {
        signOut(auth);
        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.Logout,
    }
};
