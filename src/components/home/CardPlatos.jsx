import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { AgregarAlCarro } from '../../actions/carrito'
import { formatter } from '../../helpers/moneda';

export const CardPlatos = ({ id, nombre, precio, fileURl }) => {
    const dispatch = useDispatch();

    const handleCarrito = (id, nombre, precio, fileURl) => {
        dispatch(AgregarAlCarro(id, nombre, precio, fileURl));
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: `${nombre}, Añadido al carro`,
            showConfirmButton: false,
            timer: 1200
        })
    }

    return (
        <div
            className="card p-0 mb-5 " style={{ 'width': '18rem' }}>
            <img src={fileURl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title ">{nombre}</h5>
                <p className="card-text text-danger">{formatter(precio)}</p>
                <div className="d-grid gap-2">
                    <button className='btn btn-danger'
                        onClick={() => handleCarrito(id, nombre, precio, fileURl)}>Agregar al Carro <i className="fa-solid fa-cart-arrow-down"></i></button>
                </div>
            </div>
        </div>

    )
}
