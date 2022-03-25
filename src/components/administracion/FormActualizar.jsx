import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { ActualizarPlatoDB } from '../../actions/platos';

import { useForm } from '../../hooks/useForms';

const inicialState = {
    nombre: '',
    des: '',
    precio: '',
}
export const FormActualizar = ({ state }) => {

    const { id, fileURl } = state
    const dispatch = useDispatch();
    const [imge, setImg] = useState('')
    const [blockeo, setblockeo] = useState(false)
    const [formValue, handleInputChange, setValues] = useForm(inicialState)
    const { nombre, des, precio } = formValue;

    const handleUpdate = (e) => {
        e.preventDefault();
        let file
        if (e.target.form[0].files[0]) {
            file = e.target.form[0].files[0];
        } else {
            file = fileURl
        }

        dispatch(ActualizarPlatoDB(id, nombre, des, precio, file))
    }

    useEffect(() => {
        if (!nombre || !des || !precio) {
            setblockeo(true)
        } else {
            setblockeo(false)
        }
    }, [formValue])

    useEffect(() => {
        setImg(fileURl)
        setValues(state)
    }, [fileURl, setValues])

    const handleImg = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setImg(imageUrl)
    }
    return (
        <div className=' animate__animated animate__fadeIn'>
            <form onSubmit={handleUpdate}>
                <div className="row m-3">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                {imge &&
                                    <img src={imge} className='img-fluid img-thumbnail shadow mb-3' alt="comida" />
                                }
                                <input type="file" id="inputFile" accept="image/*" className='mb-4 form-control'
                                    onChange={handleImg}
                                />
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder=" "
                                name='nombre'
                                value={nombre}
                                onChange={handleInputChange}
                            />
                            <label>Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder=" "
                                name='des'
                                value={des}
                                onChange={handleInputChange}
                            />
                            <label>Descripción</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="numeber"
                                className="form-control"
                                id="floatingPassword"
                                placeholder=" "
                                name='precio'
                                value={precio}
                                onChange={handleInputChange}
                            />
                            <label>Precio</label>
                        </div>
                        <div className="row">
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger"
                                    onClick={handleUpdate} data-bs-dismiss="modal" disabled={blockeo}>Guardar Cambios</button>
                            </div>
                        </div>
                        {   blockeo&&
                            <div className="alert alert-danger text-center" role="alert">
                                Todos los campos son obligatorios
                            </div>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}
