import React from 'react'
import { useDispatch } from 'react-redux';
import { ActualizarDatos } from '../../actions/perfil';
import { useForm } from '../../hooks/useForms';

export const MisDatos = ({ user }) => {
    const dispatch = useDispatch();
    const { nombre, correo, direccion } = user

    const [formValue, handleInputChange] = useForm({
        Inombre: nombre,
        Icorreo: correo,
        Idireccion: direccion || '',
    });
    const { Inombre, Icorreo, Idireccion } = formValue;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ActualizarDatos(Inombre, Icorreo, Idireccion))
    }
    return (
        <div className='container animate__animated animate__fadeIn'>
            <div className="row mt-4">
                <div className="col">
                    <div className="card shadow">
                        <h3 className='text-center text-secondary mt-3'>Mis Datos</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row m-3">
                                <div className="col-6">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder="name@example.com"
                                            name='Inombre'
                                            value={Inombre}
                                            onChange={handleInputChange}
                                        />
                                        <label>Nombre</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className='form-control'
                                            placeholder="name@example.com"
                                            name='Icorreo'
                                            value={Icorreo}
                                            onChange={handleInputChange}
                                        />
                                        <label>Correo</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder=" "
                                            name='Idireccion'
                                            value={Idireccion}
                                            onChange={handleInputChange}

                                        />
                                        <label>Dirección</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-outline-danger" type="submit">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

