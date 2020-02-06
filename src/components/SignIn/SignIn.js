import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from  '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

import { 
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './SignIn.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ credentials, setCredentials ] = useState({ email: '', password: '' })

    const { email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailSignInStart(email, password);


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }


    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange}
                            name='email'
                            type='email'
                            label='email'
                            value={email}
                            required />
                <FormInput handleChange={handleChange}
                            name='password'
                            label='password'
                            type='password'
                            value={password}
                            required />

                <ButtonsContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleButton>Sign In With Google</CustomButton>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);