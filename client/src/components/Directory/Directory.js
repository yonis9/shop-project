import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sectionsSelector } from '../../redux/directory/directory-selectors'

import MenuItem from '../MenuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.styles';

const  Directory = ({ sections }) => (
  <DirectoryMenuContainer>
       {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
      ))}
  </DirectoryMenuContainer>
)
        
    


const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
})

export default connect(mapStateToProps)(Directory);
