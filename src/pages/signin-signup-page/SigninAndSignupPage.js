import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import { SigninAndSignupContainer } from './SigninAndSignupPage.styles';

const SigninAndSignupPage = () => (
    <SigninAndSignupContainer>
        <SignIn />
        <SignUp />
    </SigninAndSignupContainer>
)

export default SigninAndSignupPage;