import React from 'react';
import {Link} from 'react-router-dom'
const Header =props=>{
    return(
        <header className="header">
        <Link to='/'>Home</Link>
        <Link to='/product/add'>Añadir Producto</Link>
        </header>
    )
}
export default Header;