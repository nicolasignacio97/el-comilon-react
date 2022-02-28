import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { subProducto, sumProducto } from '../../actions/carrito';
import { FinalizarPedidoBD } from '../../actions/finalizarPedido';
import { formatter } from '../../helpers/moneda';

export const FinalizarCompra = () => {

  const dispatch = useDispatch();
  const productos = useSelector(state => state.carrito.carro) || [];
  const [precioFinal, setprecioFinal] = useState()
  const Ptotal = productos.map(({ acomulado }) => (parseInt(acomulado)))

  const handleSum = (id) => {
    dispatch(sumProducto(id))
  }
  const handleSub = (id) => {
    dispatch(subProducto(id))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FinalizarPedidoBD('Quilpue', precioFinal))
  }

  useEffect(() => {
    setprecioFinal(Ptotal.reduce((partialSum, a) => partialSum + a, 0));
  }, [productos])

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className='auth-card-login shadow animate__animated animate__fadeIn'>
          <div className="auth-form-login card-color">
            <div className="m-4">
              <div className="mb-5 text-center">
                <h2 className='color-letras-rojo'>¡Finaliza tu pedido!</h2>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className='form-control'
                      placeholder=" "
                    />
                    <label>Dirección</label>
                  </div>
                </div>
                <hr />
                <h3 className='text-muted'>Tu orden</h3>
                <div className="row over">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody >
                      {
                        productos.map(producto => (
                          <tr key={producto.id}>
                            <th scope="row ">
                              <div className="row">
                                <div className="col-6 d-flex justify-content-evenly ">
                                  <img className='img-fluid w-50' src={producto.fileURl} alt={producto.nombre} />
                                  <p> Precio : <span className='text-danger'>{formatter(producto.acomulado)}</span></p>
                                </div>
                                <div className="col-6">
                                  <p>{producto.nombre}</p>
                                  <div className="row">
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
                            </th>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
              <div className="row d-flex justify-content-center">
                <div className="col-6">
                  <p className='text-center mt-1 fs-4'>Total:  <span className='text-danger'>{formatter(precioFinal)}</span> </p>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-outline-danger " type="submit">Finalizar</button>
                  </div>
                </div>
              </div>
            </div>
          </div >
          <div className="auth-img-login card-color">
            <img className='img-login' src="/assets/img/img-login.jpg" alt='img-login' />
          </div>
        </div>
      </div>
    </form>
  )
}
