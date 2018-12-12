import React from 'react';
import { NavLink } from 'react-router-dom';
// import Products from './Products';
import Categories from './Categories';

class Store extends React.Component {
    render() {
        console.log(window.location.pathname);
        return (
            <div>
                <Categories>
                    <h2>This is the main Store</h2>
                    <NavLink to='/store/products'>Products</NavLink>
                    <NavLink to='/store/categories'>Categories</NavLink>
                </Categories>
            </div>
        )
        // if(window.location.pathname === 'store/create') {
        //     return (
        //         <div>
        //             <h2>This is the main Store</h2>
        //             <NavLink to='/store/products'>Products</NavLink>
        //             <NavLink to='/store/categories'>Categories</NavLink>
        //         </div>
        //     )
        // } else if (window.location.pathname === 'store/products') {
        //     return (
        //         <div>
        //             <Products />
        //         </div>
        //     )
        // } else if (window.location.pathname === 'store/categories') {
        //     return (
        //         <div>
        //             <Categories />
        //         </div>
        //     )
        // }
    }
}

export default Store;