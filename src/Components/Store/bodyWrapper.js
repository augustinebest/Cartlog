import React from 'react';
// import { NavLink } from 'react-router-dom';
import NavBar from '../Navigation/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const BodyWrapper = (WrappedComponent) => {
    return (props) => {
       // console.log(props);
  
        var property =  {...props}
        console.log(property);
        return (
            <div className="">
                <div className="wrapper ">
                <Sidebar />
                <div className="main-panel">
                    <NavBar />
                    <div className="content">
                    <div className="container-fluid">
                    <WrappedComponent  {...props} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }


}

export default BodyWrapper;