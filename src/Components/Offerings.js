// Offerings.js

import React from 'react'
import barfiImage from './barfi1.jfif'

const Offerings = () => {
  const offeringsData = [
    { id: 1, name: 'Barfi', price: 'Rs 900', image: barfiImage },
    { id: 2, name: 'Barfi', price: 'Rs 900', image: barfiImage },
    { id: 3, name: 'Barfi', price: 'Rs 900', image: barfiImage },
    { id: 4, name: 'Barfi', price: 'Rs 900', image: barfiImage },
    { id: 5, name: 'Barfi', price: 'Rs 900', image: barfiImage },
    { id: 6, name: 'Barfi', price: 'Rs 900', image: barfiImage },
  ]

  return (
    <div className='offerings-container'>
      <h1>Our Offerings</h1>
      <div className='offerings-row'>
        {offeringsData.slice(0, 3).map((item) => (
          <div key={item.id} className='offering-item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className='offerings-row'>
        {offeringsData.slice(3, 6).map((item) => (
          <div key={item.id} className='offering-item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offerings
