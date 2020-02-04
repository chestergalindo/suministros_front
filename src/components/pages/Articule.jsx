import React, { Component } from 'react';
import Header from '../atoms/Header/Header';
import Products from '../atoms/Products/Products';

export default class Articule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '000000000000064101',
          name: 'caballo 1tb',
          // image: 'images/30.jpg',
          um: 'unidad',
          concept: 'si',
        },
        {
          id: '000000000000064102',
          name: 'papel 2tb',
          // image: 'images/30.jpg',
          um: 'unidad',
          concept: 'si',
        },
        {
          id: '000000000000064103',
          name: 'carne 3tb',
          // image: 'images/30.jpg',
          um: 'unidad',
          concept: 'si',
        },
        {
          id: '000000000000064104',
          name: 'disco duro externo 4tb',
          // image: 'images/30.jpg',
          um: 'unidad',
          concept: 'si',
        },
        {
          id: '000000000000064105',
          name: 'disco duro externo 4tb',
          // image: 'images/30.jpg',
          um: 'unidad',
          concept: 'si',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Search /> */}
        <Products data={this.state.data} />
      </div>
    );
  }
}
