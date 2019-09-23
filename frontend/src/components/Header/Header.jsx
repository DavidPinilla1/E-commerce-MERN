import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
const Header = props => {
    return (
        <header className="header">
            <Link to='/'>Home</Link>
            <Link to='/product/add'>Añadir Producto</Link>
            <Link to='/carrito'>Carrito</Link>
        </header>
    )
}
export default Header;