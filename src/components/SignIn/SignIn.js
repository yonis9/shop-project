import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from  '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import { googleSignInStart } from '../../redux/user/user-actions'

import { 
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './SignIn.styles';

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
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
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

                    <ButtonsContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleButton>Sign In With Google</CustomButton>
                    </ButtonsContainer>
                    
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);