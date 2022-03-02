import { Routes, Route, Navigate } from "react-router-dom";
import { Carrito } from "../components/home/Carrito";
import { FinalizarCompra } from "../components/home/FinalizarCompra";
import { Home } from "../components/home/Home";
import { NavBar } from "../components/home/NavBar";
import { PerfilRoutes } from "./PerfilRoutes";


export const HomeRouter = () => {

    return (
        <>
            <NavBar />
            <Carrito />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil/*" element={<PerfilRoutes />} />
                <Route path="/finalizar_compra" element={<FinalizarCompra />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
