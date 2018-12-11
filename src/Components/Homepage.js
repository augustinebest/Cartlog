import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';

class Homepage extends React.Component {
    render() {
        
        return (
            <div>
                <h3><NavLink to='/'>Homepage</NavLink></h3>
                <p>CartLog is a platform built to power Africa’s eCommerce businesses and help them get online quickly while still giving them full control. We basically provide you with tools that can be plugged into your website. These tools can also be used to build, manage, and power a full fledged eCommerce software product.</p>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <Loader />
            </div>
        )
    }
}

export default Homepage;