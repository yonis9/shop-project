import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isCollectionsLoadedSelector } from '../../redux/shop/shop-selectors';


import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !isCollectionsLoadedSelector(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

