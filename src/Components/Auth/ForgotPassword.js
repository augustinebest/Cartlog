import React from 'react';
import { Alert } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Url } from '../Factories';
import validate from '../validate';
import axios from 'axios';
import './Auth.css'

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
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
        const { email } = this.state;
        this.setState({
            loading: true
        })
        if(!validate('email', email)) {
            this.setState({
                error: 'Please use a valid email',
                visible: true,
                loading: false,
            })
        } else {
            axios.post(`${Url}/forgot`, {
                email: email
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
                        error: 'An email has been sent to you',
                        visible: true,
                        loading: false,
                        color: 'success'
                    })
                } else if (result.message === 'failed') {
                    this.setState({
                        error: 'This account does not exist',
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
            <div className='get__started'><span>Don't have an account? </span>&nbsp;&nbsp;&nbsp;&nbsp; <span className='button'><NavLink to='/signup' >GET STARTED</NavLink></span></div>
                <div style={{marginTop: '200px'}} className='login_auth_page'>
                <h3>Retrive your account</h3>
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
                        <button type='submit'  className={loading ? 'login__button1' : 'login__button'} disabled={loading ? true : false}>Recover Password
                        {
                                loading &&
                                <Loader />
                            }
                        </button> <NavLink to='/login'>Go back</NavLink>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default ForgotPassword;