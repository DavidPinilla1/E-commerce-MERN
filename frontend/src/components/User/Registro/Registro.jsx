import React from 'react';
import '../User.scss';
import { registro } from '../../../Redux/actions/users'
class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            email: '',
            password: '',
            passwordConfirm: '',
            terms: false,
            error: ''
        }
    }
    handleChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirm && this.state.terms) {
            try {
                registro(this.state)
            } catch (error) {
                this.setState({ error: error.message })
            }
        }
    }
    render() {
        return (
            <div className="bgregister">
                <form className="register" onSubmit={this.handleSubmit}>
                    {/* <input type="text" name="name" className="name" placeholder="Introduce your name" /> */}
                    <input type="text" name="usuario" className="lastname" placeholder="Introduce your usuario"
                        onChange={this.handleChange} value={this.state.usuario} required />
                    <input type="email" name="email" className="email" placeholder="Introduce your email*" required
                        onChange={this.handleChange} value={this.state.email} />
                    <input type="password" name="password" className="password" placeholder="Enter your password*"
                        onChange={this.handleChange} value={this.state.password}
                        minLength="8" required />
                    <label className="passwordRule">Password must contain at least 8 characters.</label>
                    <input type="password" name="passwordConfirm" className="passwordConfirm" placeholder="Confirm your password*"
                        onChange={this.handleChange} value={this.state.passwordConfirm} minLength="8"
                        required />
                    <label className="passwordRule2">Both password should match.</label><label className="terms">
                        <input type="checkbox" required name="terms" checked={this.state.terms}
                            onChange={this.handleChange} /> By clicking on Sign up, you agree to David
        Travel Agency's Terms and Conditions of Use.*
                <span className="checkmark"></span></label>
                    <button type="submit" className="submit" value="Submit"> SIGN UP</button>
                </form>
            </div >
        )
    }
}
export default Registro;