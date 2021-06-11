import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as DiningLogo } from '../../assets/dining.svg';
import { ReactComponent as CartLogo } from '../../assets/shopping-cart.svg';

import './header.styles.scss';

const Header = () => (
 <div className='header'>
   <DiningLogo className='dining-logo' />
   <Link to='/cart'>
    <CartLogo className='cart-logo' />
   </Link>
   
 </div>
);

export default Header;