import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate, } from "react-router-dom";
import { login } from "../actions/auth";

import { AuthRoutes } from "./AuthRoutes";
import { HomeRouter } from "./HomeRouter";
import { PrivateRote } from "./PrivateRote";
import { PublicRoute } from "./PublicRoute";

export const MainRoutes = () => {

    const dispatch = useDispatch();
    const [cheking, setcheking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {

                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);

            } else {
                setisLoggedIn(false);
            }
            setcheking(false);
        })
    }, [dispatch])

    if (cheking) {
        return (
            <h1>Espere...</h1>
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

                <Route path='/*' element={
                    <PrivateRote isAuth={isLoggedIn}>
                        <HomeRouter />
                    </PrivateRote>
                } />



                <Route path='/*' element={<Navigate to="/inicio" />} />
            </Routes>
        </BrowserRouter>
    )
}

