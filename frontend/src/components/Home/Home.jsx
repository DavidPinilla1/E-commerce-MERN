import React from 'react';
import { getAllProducts, addItemToCarrito } from '../../Redux/actions/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        getAllProducts();
    }
    handleCarritoClick = (product) => {
        addItemToCarrito(product);
    }
    render() {
        return <div className="home">
            {this.props.products &&
                this.props.products.map(product => (
                    <div className="product" key={product._id}>
                        <Link to={"product/" + product._id}>
                            <span className="name">{product.name}</span>
                            {product.imagePath &&
                                <img src={"http://localhost:3001/images/" + product.imagePath} alt="" width="200px" height="200px" />
                            }
                            <br />
                            <span className="priceBefore">{product.price * product.iva}</span>
                            <div className="priceAfter">{(product.price * product.iva / (product.discount / 100))
                                .toFixed(2)}</div>
                            <button onClick={() => this.handleCarritoClick(product)}>Añadir Carrito</button>
                        </Link>
                    </div>
                ))}
        </div>
    }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Home);