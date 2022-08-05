import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.js';



// Create auth redirect user
const AuthRedirectUser = ({ children }) => {

    const { token } = useContext(AuthContext);

    return token ? <Navigate to="/" /> : children 

}

// export authenticate user
export default AuthRedirectUser;