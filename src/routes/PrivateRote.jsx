import { Navigate } from 'react-router-dom';

export const PrivateRote = ({ isAuth, children }) => {
    return isAuth? children : < Navigate to='/auth/login' /> 
};
