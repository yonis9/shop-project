import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, i) => i < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;