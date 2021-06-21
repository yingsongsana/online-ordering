import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './page/homepage/homepage.component';
import AdminDashboard from './page/admin-dashboard/admin-dashboard.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/admin-dashboard' component={AdminDashboard} />
      </Switch>
    </div>   
  )
}

export default App;
