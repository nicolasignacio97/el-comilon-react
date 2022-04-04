import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate, } from "react-router-dom";
import { login } from "../actions/auth";
import { LeerPedidos } from "../actions/pedidos";
import { LeerDatos } from "../actions/perfil";
import { Loading } from "../components/home/Loading";
import { rolAdmin } from "../helpers/existeUser";

import { AdminRoutes } from "./AdminRoutes";

import { AuthRoutes } from "./AuthRoutes";
import { HomeRouter } from "./HomeRouter";
import { PrivateAdmin } from "./PrivateAdmin";
import { PrivateRote } from "./PrivateRote";
import { PublicRoute } from "./PublicRoute";

export const MainRoutes = () => {

    const dispatch = useDispatch();
    const [cheking, setcheking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const { rol } = useSelector(state => state.auth);
    const { uid } = useSelector(state => state.auth);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                await rolAdmin(user?.uid)
                    .then((rol) => {
                        dispatch(login(user.uid, user.displayName, rol));
                  
                        dispatch(LeerPedidos(user.uid))
                        dispatch(LeerDatos(uid))
                    })
                setisLoggedIn(true);

            } else {
                setisLoggedIn(false);
            }
            setTimeout(() => {
                setcheking(false);
            }, 1500);
        })
    }, [dispatch, uid])




    if (cheking) {
        return (
            <Loading />
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoute isAuth={isLoggedIn}>
                        <AuthRoutes />
                    </PublicRoute>
                } />

                <Route path='/admin/*' element={
                    <PrivateAdmin isAuth={isLoggedIn} rol={rol}>
                        <AdminRoutes />
                    </PrivateAdmin>
                } />

                <Route path='/*' element={
                    <PrivateRote isAuth={isLoggedIn}>
                        <HomeRouter />
                    </PrivateRote>
                } />

                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

