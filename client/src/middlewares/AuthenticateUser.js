import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.js';



// Create authenticate user
const AuthenticateUser = ({ children }) => {

    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? children : <Navigate to="/login" />

}

// export authenticate user
export default AuthenticateUser;