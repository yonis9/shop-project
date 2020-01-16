import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history}) => (
  
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {  console.log(match)}
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtile'>SHOP NOW</span>
        </div>
    </div>    
)

export default withRouter(MenuItem);