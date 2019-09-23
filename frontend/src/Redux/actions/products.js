import axios from 'axios';
import store from '../store.js';

export const getAllProducts = async () => {
    const res = await axios.get( 'http://localhost:3001/products/' )
    console.log( res );
    store.dispatch( {
        type: 'GET_ALL_PRODUCTS',
        payload:res.data
    } )
}
export const addItemToCarrito=(product)=>{

    store.dispatch({
        type:'ADD_ITEM',
        payload:product
    })
}