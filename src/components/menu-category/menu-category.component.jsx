import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './menu-category.styles.scss';

const MenuCategory = () => (
 <div className='menu-category'>
   <h2 className='title'>App</h2>
   <MenuItem />
   <MenuItem />
   <MenuItem />
 </div>
);

export default MenuCategory;