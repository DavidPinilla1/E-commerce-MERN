import React,{useState} from 'react';
import {connect} from 'react-redux'
//with hooks
const Carrito = props => {
    return (
        <div className="carrito">
            {props.carrito &&
            props.carrito.map(product => (
                <div className="product" key={product.id}>
                    <span className="name">{product.name}</span>
                    <img src={"http://localhost:3001/images/" + product.imagePath} alt="" width="200px" height="200px" />
                    <br />
                    <span className="priceBefore">{product.price * product.iva}</span>
                    <div className="priceAfter">{(product.price * product.iva / (product.discount / 100))
                        .toFixed(2)}</div>
                </div>))}
        </div>
    )
}
const mapStateToProps=(state)=>({carrito:state.carrito})
export default connect(mapStateToProps) (Carrito);