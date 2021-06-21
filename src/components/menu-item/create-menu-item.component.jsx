import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../apiConfig';

import MenuItemForm from './menu-item-form.component';

import './create-menu-item.styles.scss';

const CreateMenuItem = props => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    price: '',
    imageFile: '',
    count: '',
    category: ''
  });

  const handleChange = event => {
    event.persist();
    setMenuItem({ ...menuItem, [event.target.name]: event.target.value });
    // console.log(menuItem);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(menuItem)

    axios({
      url: `${apiUrl}/dishes`,
      method: 'POST',
      // headers: {
      //   'Authorization': `Bearer ${props.user.token}`
      // },
      data: { menuItem },
      processData: false,
      contentType: false
    })
    .then(res => props.history(`/dishes/${res.data.dish._id}`))
    .catch(error => console.error())
  };

  return (
    <MenuItemForm
      menuItem={menuItem}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
     />
  )
};

export default CreateMenuItem;