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
          <div className='product__selector-img'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
          </div>
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
          <div className='product__selector-img'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
          </div>
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
