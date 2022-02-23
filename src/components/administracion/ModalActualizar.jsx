import React from 'react'

import { FormActualizar } from './FormActualizar'


export const ModalActualizar = ({ state }) => {

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Actualizar Plato</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                state &&
                                <FormActualizar state={state[0]} />
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
