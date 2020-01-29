import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
);


export const previewCollectionSelector = createSelector(
    collectionsSelector,
    collections => collections ? Object.values(collections) : []
    )
    
    
export const collectionSelector = collectionUrlParam =>
    createSelector(
        collectionsSelector,
        collections => collections ? collections[collectionUrlParam] : null
     );