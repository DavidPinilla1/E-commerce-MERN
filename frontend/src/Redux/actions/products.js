import axios from 'axios';
import store from '../store.js';
import BackendHost from '../../api-config'
export const getAllProducts = async () => {
    const res = await axios.get(BackendHost+ 'products/' )
    console.log( res );
    store.dispatch( {
        type: 'GET_ALL_PRODUCTS',
        payload:res.data
    } )
}
export const getOneProduct = async (id) => {
    const res = await axios.get(BackendHost+ 'products/'+id )
    store.dispatch( {
        type: 'GET_PRODUCT',
        payload:res.data
    } )
}
export const addItemToCarrito=(product)=>{

    store.dispatch({
        type:'ADD_ITEM',
        payload:product
    })
}