import React from 'react';
import { NavLink } from 'react-router-dom';

import './Auth.css'

class Login extends React.Component {
    constructor(props) {
        super(props)

    }
    onSubmit = () => {

    }
    handleChange = () => {

    }

    render() {
        const style = {
            position: 'relative',
            width: '100%',
            marginBottom: '15px'
        }
        return (
            <div className='row'>
                <div className='col-md-4 login__background'>

                </div>
                <div className='col-md-8'>
                <div className='get__started'><span>Don't have an account? </span>&nbsp;&nbsp;&nbsp;&nbsp; <span className='button'><NavLink to='/signup' >GET STARTED</NavLink></span></div>
                    <div className='login_auth_page'>
                    <h3>Hello! welcome back</h3>
                    <p>Enter your details below.</p>
                        <form style={{ marginTop: '80px' }} onSubmit={this.onSubmit}>
                            <div style={style} className='ui labeled input box'>
                                <div className='ui label label'><i className="fa fa-envelope"></i></div>
                                <input type='email'
                                    placeholder='Email'
                                    name='email'
                                    onChange={this.handleChange}
                                    required />
                            </div><br />
                            <div style={style} className='ui labeled input'>
                                <div className='ui label label'><i className="fa fa-hone fa-unlock-alt"></i></div>
                                <input type='password'
                                    placeholder='******'
                                    name='password'
                                    onChange={this.handleChange}
                                    required />
                            </div>
                            <button type='submit' className='login__button'>SIGN IN</button> <NavLink to='/forgot-password'>Forgot password?</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;