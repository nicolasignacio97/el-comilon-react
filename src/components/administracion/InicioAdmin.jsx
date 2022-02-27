import React from 'react'
import { useSelector } from 'react-redux';
import { FormPlatillo } from './FormPlatillo';
import { ListaDePlatos } from './ListaDePlatos';
import { ModalActualizar } from './ModalActualizar';

export const InicioAdmin = () => {
  const state = useSelector(state => state.platos.actualizar) || false;

  return (
    <div className="container  animate__animated animate__fadeIn">
      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 mb-4">
          <div className="card shadow">
            <h2 className='text-center text-secondary mt-1'>Subir Plato</h2>
            <FormPlatillo />
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="card shadow">
            <ListaDePlatos />
          </div>
          <div>
            <ModalActualizar state={state} />
          </div>
        </div>
      </div>
    </div >
  )
}

