import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/home/Home";
import { NavBar } from "../components/home/NavBar";
import { ProfileUser } from "../components/user-profile/ProfileUser";


export const HomeRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<ProfileUser />} />
                <Route path='/*' element={<Navigate to="/" />} /> 
            </Routes>
        </>
    )
}
