import React, { Component } from 'react';

import './SignIn.scss';

import FormInput from  '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase';

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return(
            <div className ='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange}
                               name='email'
                               type='email'
                               label='email'
                               value={email}
                               required />
                    <FormInput handleChange={this.handleChange}
                               name='password'
                               label='password'
                               type='password'
                               value={password}
                               required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleButton>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;