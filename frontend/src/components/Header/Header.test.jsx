import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header.jsx'
Enzyme.configure({ adapter: new Adapter() });

describe('How the header component should render', () => {
    it('should render Home and Carrito regardless of if the user props are provided or not', () => {
        expect(shallow(<Header />)
            .containsAnyMatchingElements([<Link to='/'>Home</Link>,
                <Link to='/carrito'>Carrito</Link>,]
            )).toEqual(true)
    })
    it('should render loggedIn section if user props are provided', () => {
        const wrapper = shallow(<Header user={{}} />)
        expect(wrapper.contains(<div className="loggedIn">
            <Link to='/product/add'>Añadir Producto</Link>
            <Link to='/profile'>profile</Link>
            <Link to='/logout'>logout</Link>
        </div>)).toEqual(true)
    })
    it('should render notLoggedIn section if no user props are provided', () => {
        const wrapper = shallow(<Header user={undefined} />)
        expect(wrapper.contains(<div className="notLoggedIn">
            <Link to='/login'>Login</Link>
            <Link to='/registro'>Registro</Link>
        </div>)).toEqual(true)
    })
})