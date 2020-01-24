import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
);

export const collectionSelector = collectionUrlParam =>
    createSelector(
        collectionsSelector,
        collections => collections[collectionUrlParam]
    );

export const previewCollectionSelector = createSelector(
    shopSelector,
    shop => Object.values(shop.collections)
)

