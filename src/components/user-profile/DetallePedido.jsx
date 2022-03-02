import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { formatter } from '../../helpers/moneda';

export const DetallePedido = () => {
    const pedidos = useSelector(state => state.pedidos) || [];
    const [precioFinal, setprecioFinal] = useState()
    const { id } = useParams();
    const [seleccion] = pedidos.filter(pedido => pedido.id === id);
    const Ptotal = seleccion.pedido.pedidos.map(({ acumulado }) => (parseInt(acumulado)))
    useEffect(() => {
        setprecioFinal(Ptotal.reduce((partialSum, a) => partialSum + a, 0));
    }, [seleccion])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <h3 className='text-center text-muted m-3'>Pedido con el id: {seleccion.id}</h3>
                            <div className="row m-4">
                                <div className="col">
                                    {seleccion.pedido.pedidos.map(pedido => (
                                        <div className="card mb-3" key={pedido.id}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={pedido.fileURl} className="img-fluid h-100 w-100" alt={pedido.nombre} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{pedido.nombre}</h5>
                                                        <p className="card-text">Cantidad: {pedido.cantidad} </p>
                                                        <p className="card-text"><small className="text-muted">Valor Unidad: {formatter(pedido.precio)}  |  Valor Total por {pedido.cantidad} : {formatter(pedido.acumulado)}  </small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className='text-center'>Total Pedido: <span className='text-danger'>{formatter(precioFinal)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
