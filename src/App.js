import React from 'react';

import Header from './components/header/header.component';
import RestaurantInfo from './components/restaurant-info/restaurant-info.component';
import MenuNavBar from './components/menu-nav-bar/menu-nav-bar.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <RestaurantInfo />
      <MenuNavBar />
    </div>   
  )
}

export default App;
