import React from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';
import { Alert } from 'reactstrap';
import Loader from '../Loader/Loader';
import { Url } from '../Factories';
import validate from '../validate';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            fullname: '',
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

    canSubmit = () => {
        const { email, fullname, password } = this.state;
        this.setState({
            loading: true
        })
        if(!validate('fullname', fullname)) {
            this.setState({
                error: 'Please provide us with your first and last name',
                visible: true,
                loading: false,
            })
        } else if(!validate('email', email)) {
            this.setState({
                error: 'Please use a valid email',
                visible: true,
                loading: false,
            })
        } else if (!validate('password', password)) {
            this.setState({
                error: 'Please use a valid password',
                visible: true,
                loading: false,
            })
        } else {
            axios.post(`${Url}/join`, {
                name: fullname,
                email: email,
                password: password
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                
                var result = res.data;
                if (result.res === true) {
                    this.setState({
                        error: 'Your account has been successfully created, An activation link has been sent to your mail',
                        visible: true,
                        loading: false,
                        color: 'success'
                    })
                    setTimeout(() => {
                        this.props.history.push('/login')
                    }, 3000)
                } else if (result.message === 'exist') {
                        this.setState({
                            error: 'This email has already been registered',
                            loading: false,
                            visible: true
                        })
                } else {
                    this.setState({
                        error: 'Sorry an error occured',
                        loading: false,
                        visible: true
                    })
                }


            }).catch(err => {
                this.setState({
                    error: err,
                    loading: false,
                    visible: true
                })
            })
        }
    }

    onDismiss = () => {
        this.setState({ visible: false });
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
                    <div className='login_auth_page'>
                        <h3>Hello, let's scale together</h3>
                        <p>Fill the form to join CartLog.</p>
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
                            <div style={style} className='ui labeled input box'>
                                <div className='ui label label'><i className="fa fa-user"></i></div>
                                <input type='text'
                                    placeholder='Full name'
                                    name='fullname'
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
                            <button type='submit' className={loading ? 'login__button1' : 'login__button'}>SIGN UP
                            {
                                    loading &&
                                    <Loader />
                                }
                            </button>
                        </form><br />
                        <p>Already registered? <NavLink to='/login'>SIGN IN</NavLink></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;