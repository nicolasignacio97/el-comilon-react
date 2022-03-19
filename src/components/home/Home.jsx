import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingPlatos } from '../../actions/platos';
import { CardPlatos } from './CardPlatos';
import { Loading } from './Loading';


export const Home = () => {
  const dispatch = useDispatch();
  const { lista } = useSelector(state => state.platos);
  useEffect(() => {
    dispatch(startLoadingPlatos());
  }, [dispatch]);

  if (!lista) {
    return (
      < Loading />
    )
  }
  return (
    <div className='container animate__animated animate__fadeIn'>

      < div className="row mt-5 d-flex  flex-wrap justify-content-center justify-content-evenly ">
        {
          lista.map(plato => (
            <CardPlatos key={plato.id} {...plato} />
          ))
        }
      </div>
    </div >
  )
}
