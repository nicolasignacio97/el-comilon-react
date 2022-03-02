import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CreatePlatoDB } from '../../actions/platos';
import { useForm } from '../../hooks/useForms';

export const FormPlatillo = () => {

    const dispatch = useDispatch();
    const [imge, setImg] = useState('')
    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        desc: '',
        precio: 0,
    })
    const { nombre, desc, precio } = formValue;

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(CreatePlatoDB(nombre, desc, precio, e.target[0].files[0]))
        reset();
        setImg('');
    }

    const handleImg = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setImg(imageUrl)
    }

    return (
        <div>
            <form onSubmit={handleCreate}>
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
                                className="form-control h-25"
                                id="floatingPassword"
                                placeholder=" "
                                name='desc'
                                value={desc}
                                onChange={handleInputChange}
                            />
                            <label>Descripción</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                id="floatingPassword"
                                placeholder=" "
                                name='precio'
                                onChange={handleInputChange}
                            />
                            <label>Precio</label>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <button className='btn btn-outline-danger' type='submit'>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
