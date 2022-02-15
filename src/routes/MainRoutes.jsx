import { Routes, Route, BrowserRouter, Navigate,  } from "react-router-dom";
import { Home } from "../components/home/Home";
import { ProfileUser } from "../components/user-profile/ProfileUser";

import { AuthRoutes } from "./AuthRoutes";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<ProfileUser />} />
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path='*' element={ <Navigate to="/"/> } />
            </Routes>
        </BrowserRouter>
    )
}
