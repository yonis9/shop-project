import React from 'react';

import './SigninAndSignupPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SigninAndSignupPage = () => (
    <div className='signin-and-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SigninAndSignupPage;