import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForms'

export const Login = () => {

  const [formValue, handleInpurtChange] = useForm({
    correo: 'nico@gmail.com',
    contraseña: '123456'
  });
  const { correo, contraseña } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValue);
  }

  return (
    <div className='auth-card-login shadow animate__animated animate__fadeIn'>
      <div className="auth-form-login card-color">
        <div className="m-5 h-75">
          <div className="mb-5 text-center">
            <h2 className='color-letras-rojo '>¡BIENVENIDO/A DE NUEVO!</h2>
          </div>
          <form className='row' onSubmit={handleLogin}>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className='form-control'
                  placeholder="name@example.com"
                  name='correo'
                  value={correo}
                  onChange={handleInpurtChange}
                />
                <label>Correo Electrónico</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type='password'
                  className='form-control'
                  placeholder=" "
                  name='contraseña'
                  value={contraseña}
                  onChange={handleInpurtChange}
                />
                <label>Contraseña</label>
              </div>
              <div className="col">
                <button
                  type='submit'
                  className="btn btn-danger mt-4 w-25"
                >Iniciar</button>
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                ¿Aún no tienes cuenta?
                <Link to="/auth/register" className='fs-6'> Registrate aquí</Link>
              </div>
            </div>
          </form>
        </div>
      </div >
      <div className="auth-img-login card-color">
        <h3 className='titulo'>El Cólimlon</h3>
        <h3 className='info'>Inicia sesión y comienza disfrutar de los mejores platos disponibles para ti</h3>
        <img className='img-login' src="/assets/img/img-login.jpg" alt='img-login' />
      </div>

    </div >
  )
}

