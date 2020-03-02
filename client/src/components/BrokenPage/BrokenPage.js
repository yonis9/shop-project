import React from 'react';

import { 
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './BrokenPage.styles';

const BrokenPage = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
        <ErrorImageText>This Page is Broken</ErrorImageText>
    </ErrorImageOverlay>
)


export default BrokenPage;