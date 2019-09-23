const reducer = ( state = {
    carrito: []
}, action ) => {
    switch ( action.type ) {
    case 'GET_ALL_PRODUCTS':
        return {
            ...state,
            products: action.payload,
        };

    case 'ADD_ITEM':
        return {
            ...state,
            carrito: [
                ...state.carrito,
                action.payload,
            ]
        }
        default:
            return state
    }
}
export default reducer;
