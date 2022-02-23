import React from 'react'
import { Provider } from 'react-redux'
import { MainRoutes } from './routes/MainRoutes'
import { store } from './store/store'

export const Comilon = () => {

    return (
        <Provider store={store}>
            <MainRoutes />
        </Provider>
    )
}
