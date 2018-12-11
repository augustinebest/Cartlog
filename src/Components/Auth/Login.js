import React from 'react';
import { NavLink } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Loader from '../Loader/Loader';
import { Url } from '../Factories';
import validate from '../validate';
import axios from 'axios';
import './Auth.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            visible: true,
            color: 'danger',
            error: null
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.canSubmit();
    }

    onDismiss = () => {
        this.setState({ visible: false });
    }

    canSubmit = () => {
        const { email, password } = this.state;
        console.log(email, password);
        this.setState({
            loading: true
        })
        if(!validate('email', email)) {
            this.setState({
                error: 'Please use a valid email',
                visible: true,
                loading: false,
            })
        } else if(!validate('password', password)) {
            this.setState({
                error: 'Please use a valid password',
                visible: true,
                loading: false,
            })
        } else  {
            axios.post(`${Url}/login`, {
                email: email,
                password: password
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
                var result = res.data;
                if (result.res === true) {
                    this.setState({
                        error: 'Successfully logged in',
                        visible: true,
                        loading: false,
                        color: 'success'
                    })

                    if(result.user_data.store_activated === 'true') {
                        // the user has setup his store
                        sessionStorage.setItem('user', JSON.stringify(result.user_data));
                        // this.$router.push('/store/category')
                    }
                    else {
                        // take the user to create a store for his account
                        sessionStorage.setItem('user', JSON.stringify(result.token));
                        // this.$session.set("nextPage", '/store/create')
                        // this.$router.push('/store/create')
                    }

                } else if(result.message === 'failed') {
                    this.setState({
                        error: 'Your email or Password is incorrect',
                        visible: true,
                        loading: false,
                    })
                } else if (result.message === 'non_active') {
                    this.setState({
                        error: 'Your email or Password is incorrect',
                        visible: true,
                        loading: false,
                    })
                } else {
                    this.setState({
                        error: 'Sorry an error occured',
                        visible: true,
                        loading: false,
                    })
                }
            })
        }
    }

    render() {
        const { loading, error, visible, color } = this.state;
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
                    {
                            error &&
                            <Alert color={color} isOpen={visible} toggle={this.onDismiss}>
                                {error}
                            </Alert>
                        }
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
                            <button type='submit' className={loading ? 'login__button1' : 'login__button'}>SIGN IN
                            {
                                    loading &&
                                    <Loader />
                                }
                            </button> <NavLink to='/forgot-password'>Forgot password?</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;