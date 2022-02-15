import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";


export const AuthRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/*' element={<Navigate to="/auth/login" />} />
            </Routes>
        </div>
    )
}
