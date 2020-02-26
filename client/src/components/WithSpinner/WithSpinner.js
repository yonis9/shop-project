import React from 'react';

import Spinner from '../Spinner/Spinner';


 const WithSpinner = WrapedComponent => ({ isLoading, ...otherProps}) => {
        return isLoading ? (
            <Spinner />
        )
        :
        <WrapedComponent {...otherProps} />
        
    }
 

 export default WithSpinner;