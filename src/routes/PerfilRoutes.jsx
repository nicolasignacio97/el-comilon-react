import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { DetallePedido } from "../components/user-profile/DetallePedido";

import { MisDatos } from "../components/user-profile/MisDatos";
import { MisPedidos } from "../components/user-profile/MisPedidos";
import { ProfileUser } from "../components/user-profile/ProfileUser";


export const PerfilRoutes = () => {

    const user = useSelector(state => state.perfil);
    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="row mt-5">
                <div className="col-lg-3 col-md-4">
                    <ProfileUser />
                </div>
                <div className="col-lg-9 col-md-8">
                    <Routes>
                        <Route path="/mis_datos" element={<MisDatos user={user} />} />
                        <Route path="/mis_pedios" element={<MisPedidos />} />
                        <Route path="/mis_pedios/detalle/:id" element={<DetallePedido />} />
                        <Route path='/*' element={<Navigate to="/perfil/mis_datos" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
