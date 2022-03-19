import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeletePlatoDB, SeleccionarPlato } from '../../actions/platos';
import { startLoadingPlatos } from '../../actions/platos';
import { formatter } from '../../helpers/moneda';


export const ListaDePlatos = () => {

    const dispatch = useDispatch();
    
    const { lista } = useSelector(state => state.platos);
    useEffect(() => {
        dispatch(startLoadingPlatos());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(DeletePlatoDB(id))
    }
    const handleDetail = (id) => {
        dispatch(SeleccionarPlato(id))
    }

    return (
        <>
            <table className="table table-hover table-borderless table-responsive overflow-scroll">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista &&
                        lista.map(plato => (
                            <tr key={plato.id} >
                                <td>{plato.nombre}</td>
                                <td>{formatter(plato.precio)}</td>
                                <td><img src={plato.fileURl} className='img-fluid img img-thumbnail' alt="img" /></td>
                                <td>
                                    <i className="fa-solid fa-magnifying-glass p-2" type="button"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        style={{ 'color': 'grey', 'cursor': 'pointer' }}
                                        onClick={() => handleDetail(plato.id)}></i>

                                    <i className="fa-solid fa-trash" style={{ 'color': 'red', 'cursor': 'pointer' }}
                                        onClick={() => handleDelete(plato.id)}></i>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>

        </>

    )
}
