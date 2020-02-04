import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className='header__back'>
        <a href='https://www.javeriana.edu.co/dir-servicios-universitarios/oficina-de-suministros' target='blank'> Suministros </a>
        <a href=''> Articulos </a>
      </div>
    );
  }
}
