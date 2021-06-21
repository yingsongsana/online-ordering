import React from 'react';

import Header from '../../components/header/header.component';
import RestaurantInfo from '../../components/restaurant-info/restaurant-info.component';
import MenuNavBar from '../../components/menu-nav-bar/menu-nav-bar.component';
import MenuCategory from '../../components/menu-category/menu-category.component';

import './homepage.styles.scss';

const Homepage = () => (
  <div>
    <Header />
    <RestaurantInfo />
    <MenuNavBar />
    <MenuCategory />
    <MenuCategory />
  </div>
  
);

export default Homepage;