import axios from 'axios';

export const login = userLogin => {
    return {
        type: 'LOGIN',
        payload: axios({
            method: 'POST',
            url:'http://localhost:8080/v1/auth/login',
            data: userLogin
          })
    }
}

export const logout = () =>{
    return{
        type: "LOGOUT_FULFILLED"
    }
}