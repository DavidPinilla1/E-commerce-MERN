import axios from 'axios';
import store from '../store';

export const registro = async ( { usuario, email, password } ) => {
    const res = await axios.post( 'http://localhost:3001/user/signup', { usuario, email, password } )
    return res
}
export const login = async ( usuario, password ) => {
    const res = await axios.post( 'http://localhost:3001/user/login', { usuario, password } )
    store.dispatch( {
        type: 'LOGIN',
        payload:res.data.user
    } )
    localStorage.setItem('authToken',res.data.token);
}
