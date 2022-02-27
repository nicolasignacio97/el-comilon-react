import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { subProducto, sumProducto } from '../../actions/carrito';

export const Carrito = () => {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.carrito.carro) || [];

    const handleSum = (id) => {
        dispatch(sumProducto(id))
    }
    const handleSub = (id) => {
        dispatch(subProducto(id))
    }

    const formatter = new Intl.NumberFormat('es-CH', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    })

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Tu Carrito</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        productos.map(producto => (
                            <div className="row  m-3" key={producto.id}>
                                <div className="col-6 p-0">
                                    <img className='w-100 h-100 rounded' src={producto.fileURl} alt={producto.nombre} />
                                </div>
                                <div className="col-6">
                                    <div className="row d-flex flex-column justify-content-between h-100">
                                        <div className="col-6 w-100">
                                            <h4 className='fs-6'>{producto.nombre}</h4>
                                        </div>
                                        <div className="row">
                                            <p className='text-center'>{formatter.format(parseInt(producto.acomulado))}</p>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <button className='btn btn-danger m-1'
                                                onClick={() => handleSub(producto.id)}><i className="fa-solid fa-minus"></i></button>
                                            <button className='btn' disabled>{producto.cantidad}</button>
                                            <button className='btn btn-danger m-1'
                                                onClick={() => handleSum(producto.id)}><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
