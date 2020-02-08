import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isFtechingSelector } from '../../redux/shop/shop-selectors';


import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: isFtechingSelector
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;


