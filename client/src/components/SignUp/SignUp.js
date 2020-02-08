import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user-actions'

import  FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';


import {
    SignUpContainer,
    SignUpTitle
} from './SignUp.styles';


const SignUp = ({ signUpStart }) => {
    const [ credentials, setCredentials ] = useState({
        displayName: '',
        email: '',
        password: '', 
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = credentials;


    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        signUpStart({ email, password, displayName });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }


    return(
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange}
                            name='displayName' 
                            type='text'
                            label='Display Name'
                            value={displayName}
                            required/>
                <FormInput handleChange={handleChange}
                            name='email' 
                            type='email'
                            label='Email'
                            value={email}
                            required/>
                <FormInput handleChange={handleChange}
                            name='password' 
                            type='password'
                            label='Password'
                            value={password}
                            required/>
                <FormInput handleChange={handleChange}
                            name='confirmPassword' 
                            type='password'
                            label='Confirm Password'
                            value={confirmPassword}
                            required/>

                            <CustomButton type='submit'>Sign Up </CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp);