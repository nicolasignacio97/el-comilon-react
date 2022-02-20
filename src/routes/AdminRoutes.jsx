import { Routes, Route, Navigate } from "react-router-dom";
import { InicioAdmin } from "../components/administracion/InicioAdmin";
import { NavBar } from "../components/home/NavBar";



export const AdminRoutes = () => {
    return (
        <div >
            <NavBar />
            <Routes>
                <Route path="/inicio" element={<InicioAdmin />} />
                <Route path='/*' element={<Navigate to="/admin/inicio" />} />
            </Routes>
        </div>
    )
}
