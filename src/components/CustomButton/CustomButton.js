import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleButton, ...otherProps}) => (
    <button className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;