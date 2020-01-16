import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, i) => i < 4)
                    .map(({ id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;