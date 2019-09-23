import React, { useState } from 'react';
import { login } from '../../../Redux/actions/users'
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleChange = (event) => {
        if (event.target.name === 'usuario') setUsuario(event.target.value);
        if (event.target.name === 'password') setPassword(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        try {
            login(usuario, password)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="bglogin">
            <form className="login" onSubmit={handleSubmit}>
                {/* <input type="text" name="name" className="name" placeholder="Introduce your name" /> */}
                <input type="text" name="usuario" className="lastname" placeholder="Introduce your usuario"
                    onChange={handleChange} value={usuario} required />
                <input type="password" name="password" className="password" placeholder="Enter your password*"
                    onChange={handleChange} value={password}
                    minLength="8" required />
                <button type="submit" className="submit" value="Submit"> SIGN UP</button>
            </form>
        </div >
    )
}
export default Login;