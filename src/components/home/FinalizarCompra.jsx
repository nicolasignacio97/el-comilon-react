import React from 'react'

export const FinalizarCompra = () => {
  return (
    <div className="container">
      <div className='auth-card-login shadow animate__animated animate__fadeIn'>
        <div className="auth-form-login card-color">
          <div className="m-5 h-75">
            <div className="mb-5 text-center">
              <h2 className='color-letras-rojo'>¡Finaliza tu pedido!</h2>
            </div>

          </div>
        </div >
        <div className="auth-img-login card-color">
          <img className='img-login' src="/assets/img/img-login.jpg" alt='img-login' />
        </div>
      </div>
    </div>
  )
}
