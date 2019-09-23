import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
const Header = props => {
    return (
        <header className="header">
            <Link to='/'>Home</Link>
            <Link to='/product/add'>Añadir Producto</Link>
            <Link to='/carrito'>Carrito</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registro'>Registro</Link>
        </header>
    )
}
export default Header;