import axios from 'axios';
import store from '../store';
import BackendHost from '../../api-config'
export const registro = async ( { usuario, email, password } ) => {
    const res = await axios.post( BackendHost + 'user/signup', { usuario, email, password } )
    return res
}
export const login = async ( usuario, password ) => {
    const res = await axios.post( BackendHost + 'user/login', { usuario, password } )
    store.dispatch( {
        type: 'LOGIN',
        payload: res.data.user
    } )
    localStorage.setItem( 'authToken', res.data.token );
}
