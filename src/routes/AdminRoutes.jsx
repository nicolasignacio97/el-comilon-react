import { Routes, Route, Navigate } from "react-router-dom";
import { InicioAdmin } from "../components/administracion/InicioAdmin";



export const AuthRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/incio" element={<InicioAdmin />} />
                <Route path='/*' element={<Navigate to="/admin/incio" />} />
            </Routes>
        </div>
    )
}
