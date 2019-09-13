import React, { Component } from 'react';
import './AddProduct.scss';
import axios from 'axios';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: null,
            discount: null,
            iva: 0.21,
            description: '',
            category: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.image.files[0]);
        let productData=new FormData();
        for (const key in this.state) {
              productData.set(key,this.state[key])
        }
        if(event.target.image.files[0]) productData.append('image',event.target.image.files[0])
        axios.post('http://localhost:3001/products/', productData)
            .then(product => console.log(product))
            .catch(error => console.log(error))
    }
    handleChange = event => this.setState({ [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value })
    render() {
        console.log(typeof this.state.iva);

        return (
            <form onSubmit={this.handleSubmit} className="addProduct">
                <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
                <input type="number" placeholder="price" name="price" onChange={this.handleChange} />
                <input type="number" placeholder="discount" name="discount" onChange={this.handleChange} />
                <select placeholder="iva" name="iva" onChange={this.handleChange}>
                    <option value="0.04">Superreducido 4% </option>
                    <option value="0.10">Reducido 10% </option>
                    <option value="0.21">General 21% </option>
                </select>
                <textarea placeholder="description" name="description" cols="30" rows="10" onChange={this.handleChange}>
                </textarea>
                <input type="file" name="image" id="" /> 
                <input type="text" placeholder="category" name="category" onChange={this.handleChange} />
                <button type="submit">Añadir Producto</button>
            </form>
        )
    }
}

export default AddProduct;