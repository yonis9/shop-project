import React, { Component } from 'react';

import  FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

import './SignUp.scss'

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
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
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
            </div>
        )
    }
}

export default SignUp;