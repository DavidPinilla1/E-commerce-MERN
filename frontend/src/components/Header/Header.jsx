import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import { connect } from 'react-redux'
const Header = props => {
    //en JSX siempre devolvemos un solo HTML tag
    return (
        <header className="header">
            <Link to='/'>Home</Link>
            <Link to='/carrito'>Carrito</Link>
            {props.user ?
                <div className="loggedIn">
                    <Link to='/product/add'>Añadir Producto</Link>
                    <Link to='/profile'>profile</Link>
                    <Link to='/logout'>logout</Link>
                </div>
                :
                <div className="notLoggedIn">
                    <Link to='/login'>Login</Link>
                    <Link to='/registro'>Registro</Link>
                </div>

            }
        </header>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Header);