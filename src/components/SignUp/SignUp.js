import React, { Component } from 'react';

import  FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

import {
    SignUpContainer,
    SignUpTitle
} from './SignUp.styles';


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '', 
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log('sign up')
            await createUserProfileDocument(user, { displayName })
        
            this.setState({
                displayName: '',
                email: '',
                password: '', 
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value})
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                               name='displayName' 
                               type='text'
                               label='Display Name'
                               value={displayName}
                               required/>
                    <FormInput handleChange={this.handleChange}
                               name='email' 
                               type='email'
                               label='Email'
                               value={email}
                               required/>
                    <FormInput handleChange={this.handleChange}
                               name='password' 
                               type='password'
                               label='Password'
                               value={password}
                               required/>
                    <FormInput handleChange={this.handleChange}
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
}

export default SignUp;