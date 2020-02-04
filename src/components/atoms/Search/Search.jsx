import React, { useState } from 'react';
import './Search.scss';

export default function Search(props) {




  return (
    <div className='product__title'>
      <h1>¿Qué producto desea consultar?</h1>
      <form action='' className='product-selector'>
        <input
          type='text'
          name=''
          id=''
          placeholder='ej: vaso'
          value={}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <select>
          <option selected value='todos'>Todos</option>
          <option value='amigables'>Productos Amigables </option>
          <option value='cafeteria'>Cafeteria</option>
          <option value='aseo'>Aseo</option>
          <option value='papeleria'>Papeleria</option>
          <option value='tecnologia'>Tecnologia</option>
        </select>
      </form>
    </div>
  );
}
