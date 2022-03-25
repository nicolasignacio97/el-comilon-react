import React from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { createUser } from '../../actions/auth'

export const Register = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.UI);

  const [formValue, handleInputChange] = useForm({
    nombre: '',
    correo: '',
    contrasena: '',
    contrasena2: ''
  });

  const { nombre, correo, contrasena, contrasena2 } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(createUser(correo, contrasena, nombre))
    }
  }

  const isFormValid = () => {
    if (nombre.trim().length <= 0) {
      dispatch(setError('El nombre es requerido'))
      return false;
    } else if (!validator.isEmail(correo)) {

      dispatch(setError('El correo no es valido'))
      return false;
    }
    else if (contrasena !== contrasena2 || contrasena.length <= 5) {

      dispatch(setError('La contrasena debe tener 6 o mas caracteres y ser iguales'))
      return false;
    }
    dispatch(removeError());
    return true;
  }


  return (
    <div className='auth-card-login shadow animate__animated animate__fadeIn'>
      <div className="auth-form-login card-color">
        <div className="m-5 h-75">
          <div className="mb-5 text-center">
            <h2 className='color-letras-rojo '>¡Registrate en nuesra página!</h2>
          </div>
          {msgError &&
            <div className="row">
              <div className="col">
                <div className="alert alert-danger" role="alert">
                  {msgError}
                </div>
              </div>
            </div>
          }
          <form className='row' onSubmit={handleSubmit}>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type='text'
                  className='form-control'
                  placeholder=" "
                  name='nombre'
                  value={nombre}
                  onChange={handleInputChange}
                />
                <label>Nombre</label>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className='form-control'
                  placeholder="name@example.com"
                  name='correo'
                  value={correo}
                  onChange={handleInputChange}
                />
                <label>Correo Electrónico</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type='password'
                  className='form-control'
                  placeholder=" "
                  name='contrasena'
                  value={contrasena}
                  onChange={handleInputChange}
                />
                <label>Contraseña</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type='password'
                  className='form-control'
                  placeholder=" "
                  name='contrasena2'
                  value={contrasena2}
                  onChange={handleInputChange}
                />
                <label>Confirmar Contraseña</label>
              </div>
              <div className="row d-flex ">
                <div className="col">
                  <button
                    type='submit'
                    className="btn btn-danger mt-4 w-25"
                  >Registro</button>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <p>¿Tienes cuenta? <Link to="/auth/login" className='fs-6 text-danger link'> Inicia Sesión</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div >
      <div className="auth-img-login card-color">
        <h3 className='titulo'>El Cólimlon</h3>
        <h3 className='info '>Registrate en nuestra página y comienza a disfrutar de los mejores platos que tenemos disponibles</h3>
        <img className='img-login' src="/assets/img/registo.jpg" alt='img-login' />
      </div>
    </div >
  )
}
