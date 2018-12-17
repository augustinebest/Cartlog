import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  
  render() {
    return (
       <div>
           <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo">
        <NavLink to='/' className="simple-text logo-normal">
          Cartlog
        </NavLink>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className='nav-item' onClick={() => this.addClass(1)}>
            <NavLink to='/store/orders' className="nav-link">
              <i className="material-icons">dashboard</i>
              <p>ORDER</p>
            </NavLink>
          </li>
          <li className='nav-item' onClick={() => this.addClass(2)}>
            <NavLink to='/store/sales' className="nav-link">
              <i className="material-icons">dashboard</i>
              <p>SALES</p>
            </NavLink>
          </li>
          <li className='nav-item' onClick={() => this.addClass(3)}>
            <NavLink to='/store/category' className="nav-link">
              <i className="material-icons">dashboard</i>
              <p>CATEGORIES</p>
            </NavLink>
          </li>
          <li className='nav-item' onClick={() => this.addClass(4)}>
            <NavLink to='/store/products' className="nav-link">
              <i className="material-icons">dashboard</i>
              <p>PRODUCTS</p>
            </NavLink>
          </li>
          <li className='nav-item active' onClick={() => this.addClass(5)}>
            <NavLink to='/store/manager' className="nav-link" href="./user.html">
              <i className="material-icons">person</i>
              <p>MY STORE</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
       </div>
    )
  }
}

export default Sidebar;
