import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";


export const existe = async (uid) => {
    const docRef = doc(db, "users", `${uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return true;
    } else {
        return false;
    }
}
export const rolAdmin = async (uid = 'kjsdkjfd') => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const rol = docSnap.data();
    return rol
}


