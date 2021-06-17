import React from 'react';

import './menu-item.styles.scss';

const MenuItem = () => (
  <div className='menu-item'>
    <div className='content'>
      <h3 className='name'>Crispy Spring Rolls</h3>
      <span className='description'>Pork, carrot, and cabbage.</span>
      <span className='price'>$6.00</span>
    </div>
    <div className='image' />
    <img src='' alt='menu-item' />
  </div>
);

export default MenuItem;