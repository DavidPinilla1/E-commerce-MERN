import React from 'react';
import { NavLink,NavNavLink } from 'react-router-dom'
import './Header.scss';
import { connect } from 'react-redux'
export const Header = props => {
    //en JSX siempre devolvemos un solo HTML tag
    return (
        <header className="header">
                <NavLink activeClassName="activado" exact to='/'>Home</NavLink>
                <NavLink activeClassName="activado" exact to='/carrito'>Carrito</NavLink>
                {props.user ?
                <div className="loggedIn">
                    <NavLink  activeClassName="activado" to='/product/add'>Añadir Producto</NavLink>
                    <NavLink activeClassName="activado" to='/profile'>profile</NavLink>
                    <NavLink activeClassName="activado" to='/logout'>logout</NavLink>
                </div>
                :
                <div className="notLoggedIn">
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/registro'>Registro</NavLink>
                </div>

            }
        </header>
    )
}
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Header);
