import React from 'react';
import axios from 'axios';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/products/')
            .then(res => this.setState({ products: res.data }))
    }
    render() {
        return <div className="home">
            {this.state.products.map(product => (
                <div className="product" key={product.id}>
                    <span className="name">{product.name}</span>
                    <img src={"http://localhost:3001/images/"+product.imagePath} alt="" width="200px" height="200px"/>
                    <br/>
                    <span className="priceBefore">{product.price*product.iva}</span>
                    <div className="priceAfter">{(product.price*product.iva/(product.discount/100)).toFixed(2)}</div>
                </div>
            ))}
        </div>
    }
}
export default Home;