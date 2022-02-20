import { Navigate } from 'react-router-dom';

export const PrivateAdmin = ({ isAuth, children, rol }) => {
    return isAuth && rol === 'admin' ? children : <Navigate to='/auth/login' />
};
