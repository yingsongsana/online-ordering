import React from 'react';

import CreateMenuItem from '../../components/menu-item/create-menu-item.component';

import './admin-dashboard.styles.scss';

const AdminDashBoard = () => (
  <div className='admin-dashboard'>
    ADMIN DASHBOARD
    <CreateMenuItem />
  </div>
);

export default AdminDashBoard;