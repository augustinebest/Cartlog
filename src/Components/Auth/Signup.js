import React from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
        }

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    onSubmit = () => {

    }
    render() {
        const { email, username, password } = this.state;
        console.log(email, username, password)
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
                    <div className='login_auth_page'>
                        <form style={{ marginTop: '80px' }} onSubmit={this.onSubmit}>
                            <div style={style} className='ui labeled input box'>
                                <div className='ui label label'><i className="fa fa-envelope"></i></div>
                                <input type='email'
                                    placeholder='Email'
                                    name='email'
                                    onChange={this.handleChange}
                                    required />
                            </div><br />
                            <div style={style} className='ui labeled input box'>
                                <div className='ui label label'><i className="fa fa-user"></i></div>
                                <input type='text'
                                    placeholder='Full name'
                                    name='username'
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
                            <button type='submit' className='login__button'>SIGN UP</button>
                        </form><br />
                        <p>Already registered? <NavLink to='/login'>SIGN IN</NavLink></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;