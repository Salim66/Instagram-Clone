

// create auth reducer
const AuthReducer = ( state, { type, payload } ) => {

    switch (type) {
        case 'LOGIN_USER':
            return ({
                token: payload.token,
                user: payload.user,
            });
            break;
        
        case 'LOGOUT_USER': 
            return {
                token: '',
                user: ''
            }
            break;
    
        default:
            return state;
            break;
    }

}

// export auth reducer
export default AuthReducer;