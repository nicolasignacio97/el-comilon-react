import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatter } from '../../helpers/moneda';

export const MisPedidos = () => {
  const pedidos = useSelector(state => state.pedidos);
  const navigate = useNavigate()

  const handleDetalle = (id) => {
    navigate(`detalle/${id}`)
  }
  return (
    <div className='container animate__animated animate__fadeIn'>
      <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <h3 className='text-center text-secondary mt-3'>Mis Pedidos</h3>
            <div className="row">
              <div className="col">
                {pedidos.length ?
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Dirección</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        pedidos.map(pedido => (
                          <tr key={pedido.id} style={{ 'cursor': 'pointer' }} onClick={() => handleDetalle(pedido.id)}>
                            <td>{pedido.direccion}</td>
                            <td>{formatter(pedido.total)}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  :
                  <div className="alert alert-danger m-4" role="alert">
                    <p className='text-center p-0 m-0'>No tienes pedidos</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
