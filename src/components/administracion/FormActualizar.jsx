import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForms';

// console.log(state[0].nombre);
// console.log(state[0].des);
// console.log(state[0].fileURl);
// console.log(state[0].precio);

export const FormActualizar = ({ state }) => {

    let { nombre, des, fileURl, precio } = state

    const dispatch = useDispatch();
    const [imge, setImg] = useState('')

    useEffect(() => {
        setImg(fileURl)
    }, [fileURl])

    const [formValue, handleInputChange] = useForm({
        Actnombre: '',
        Actdesc: '',
        Actprecio: '',
    })
    let { Actnombre, Actdesc, Actprecio } = formValue;

    Actnombre = nombre
    Actdesc = des
    Actprecio = precio

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('actualizar');
    }

    const handleImg = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setImg(imageUrl)
    }
    return (
        <div>
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
                                name='Actnombre'
                                value={Actnombre}
                                onChange={handleInputChange}
                            />
                            <label>Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder=" "
                                name='Actdesc'
                                value={Actdesc}
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
                                name='Actprecio'
                                value={Actprecio}
                                onChange={handleInputChange}
                            />
                            <label>Precio</label>
                        </div>
                        <div className="row">
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger"
                                    onClick={handleUpdate} data-bs-dismiss="modal">Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
