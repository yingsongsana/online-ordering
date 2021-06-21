import React from 'react';

import './menu-item-form.styles.scss';

const MenuItemForm = ({ menuItem, handleChange, handleSubmit }) => (
  <form
    encType='multipart/form-data'
    className='create-menu-item-form' 
    onSubmit={handleSubmit}>
    <label htmlFor='name'>Name</label>
    <input 
      type='text' 
      id='name' 
      name='name' 
      value={menuItem.name} 
      onChange={handleChange} 
    />
    <label htmlFor='description'>Description</label>
    <textarea 
      id='description' 
      rows='5' 
      cols='3'
      name='description' 
      value={menuItem.description}    
      onChange={handleChange}
    />
    <label htmlFor='price'>Price</label>
    <input 
      type='text' 
      id='price' 
      name='price'
      placeholder='0.00'  
      value={menuItem.price} 
      onChange={handleChange} 
    />
    <label htmlFor='count'>Count</label>
    <input 
      type='text' 
      id='count' 
      name='count' 
      value={menuItem.count} 
      onChange={handleChange}
    />
    <label htmlFor='image'>Select file</label>
    <input
      type='file'
      id='imageFile'
      name='imageFile'
      value={menuItem.imageFile}
      onChange={handleChange}
      accept='image/*'
    />
    <input 
      type='submit'
      name='submit'
      value='submit'
    />
  </form>
);

export default MenuItemForm;