import React, { useEffect } from 'react';
import { getOneProduct } from '../Redux/actions/products'
import { connect } from 'react-redux'
const ProductDetail = props => {
    useEffect(() => {//esto hace lo mismo que el componentDidMount();
        getOneProduct(props.match.params.id)
    }, [])//sin el array vacío es lo mismo que el componentDidUpdate();
    return (
        <div className="productDetail">
            {props.product &&
                <div className="product" >
                    <span className="name">{props.product.name}</span>
                    {props.product.imagePath &&
                        <img src={"http://localhost:3001/images/" + props.product.imagePath} alt="" width="200px" height="200px" />
                    }
                    <br />
                    <span className="priceBefore">{props.product.price * props.product.iva}</span>
                    <div className="priceAfter">{(props.product.price * props.product.iva / (props.product.discount / 100))
                        .toFixed(2)}</div>
                    <button onClick={() => this.handleCarritoClick(props.product)}>Añadir Carrito</button>

                </div>}
        </div>
    )
}
const mapStateToProps = ({ product }) => ({ product })
export default connect(mapStateToProps)(ProductDetail)