import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                    <h2>This is the main Store</h2>
                    <NavLink to='/store/products'>Products</NavLink>
                    <NavLink to='/store/categories'>Categories</NavLink>
            </div>
        )
    }
}

export default Navigation;