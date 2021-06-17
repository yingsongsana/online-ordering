import React from 'react';

import './restaurant-info.styles.scss';

const RestaurantInfo = () => (
  <div className='restaurant-info'>
    <div 
      className='background-image' 
      style={{
        background: `url(/plates.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
        }}
    />
    <div className='content'>
      <h1 className='title'>Online Ordering</h1>
      <span className='address'>Address: 1234 Creative Way, Boston, MA</span>
      <span className='hours'>Hours: 24 hrs</span>
    </div>
  </div>
);

export default RestaurantInfo;