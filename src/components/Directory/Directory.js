import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { sectionsSelector } from '../../redux/directory/directory-selectors'

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

const  Directory = ({ sections }) => (
  <div className='directory-menu'>
       {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
      ))}
  </div>
)
        
    


const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
})

export default connect(mapStateToProps)(Directory);
