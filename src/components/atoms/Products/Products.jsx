import React, { useState, useMemo } from 'react';
import './Products.scss';

export default function Products(props) {

  const { data } = props;

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useMemo(
    () => {
      const result =
      data.filter((data) => {
        return `${data.name}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredData(result);
    }, [data, query],
  );

  if (filteredData.length === 0) {
    return (
      <div className='product__title'>
        <h1>¿Qué producto desea consultar?</h1>
        <form action='' className='product-selector'>
          <input
            type='text'
            value={query}
            placeholder='ej: vaso'
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
        <h3> No hemos encontrado ningún artículo </h3>
      </div>
    );
  }

  return (
    <div>
      <div className='product__title'>
        <h1>¿Qué producto desea consultar?</h1>
        <form action='' className='product-selector'>
          <input
            type='text'
            value={query}
            placeholder='ej: vaso'
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
      </div>

      <div className='box__product'>
        {filteredData.map((data) => {
          return (
            <div className='product' key={data.id}>
              <figure className='product__pic'>
                <img src={data.image} alt='' />
              </figure>
              <div className='product__information'>
                <p className='product__id'>
                  <strong>ID: </strong>
                  {data.id}
                </p>
                <p className='product__name'>
                  <strong>NOMBRE: </strong>
                  {data.name}
                </p>
                <p className='product__um'>
                  <strong>UNIDAD DE MEDIDA: </strong>
                  {data.um}
                </p>
                <p className='product__concepto'>
                  <strong>CONCEPTO: </strong>
                  {data.concept}
                </p>
                <p className='product__concepto'>
                  <strong>PRECIO: </strong>
                  {data.concept}
                </p>
                <p className='product__concepto'>
                  <strong>T. ENTREGA: </strong>
                  {data.concept}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div> //all else
  );//return

  //final
}
