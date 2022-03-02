import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { subProducto, sumProducto } from '../../actions/carrito';
import { formatter } from '../../helpers/moneda';

export const Carrito = () => {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.carrito.carro) || [];
    const [precioFinal, setprecioFinal] = useState()
    const Ptotal = productos.map(({ acumulado }) => (parseInt(acumulado)))
    const handleSum = (id) => {
        dispatch(sumProducto(id))
    }
    const handleSub = (id) => {
        dispatch(subProducto(id))
    }

    useEffect(() => {
        setprecioFinal(Ptotal.reduce((partialSum, a) => partialSum + a, 0));
    }, [productos])


    return (
        <>
            <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Tu Carrito</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        productos.map(producto => (
                            <div className="row d-flex  m-3" key={producto.id}>
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <img className='w-100 h-100 rounded' src={producto.fileURl} alt={producto.nombre} />
                                    </div>
                                    <div className="col-6">
                                        <div className="row d-flex flex-column justify-content-between h-100">
                                            <div className="col-6 w-100">
                                                <h4 className='fs-6'>{producto.nombre}</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-6"><p>Precio: </p></div>
                                                <div className="col-6"><p className='text-center text-danger'>{formatter(producto.acumulado)}</p></div>
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
                            </div>
                        ))
                    }

                </div>
                <div className="offcanvas-footer">
                    <div className="row d-flex flex-column">
                        <div className="col">
                            <p className='text-center'>Total: <span className='text-danger'>{formatter(precioFinal)}</span></p>
                        </div>
                        <div className="col">
                            <div className="d-grid m-3">
                                <button type="button" className="btn-close btnFinalizar"
                                    data-bs-dismiss="offcanvas" aria-label="Close">
                                    <Link to={'finalizar_compra'} className='btn btn-danger finalizar'>Finalizar Pedido</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
