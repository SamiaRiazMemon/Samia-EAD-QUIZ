// Welcome.js

import React from 'react'
import welcomeImage from './barfi-welcome.jpeg' // Import your welcome image

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-content'>
        <h1>Welcome to Our Bakery</h1>
        <p>
          Indulge in a symphony of flavors at our artisanal bakery. Welcome to a
          world where the aroma of freshly baked wonders captivates your senses.
          Our master bakers craft each creation with passion, using only the
          finest ingredients to ensure every bite is pure delight. From flaky
          croissants to decadent cakes, experience the epitome of taste and
          craftsmanship. Whether it's a special occasion or a craving for the
          extraordinary, our bakery offers a haven for your palate. Elevate your
          moments with the magic of our oven-fresh delights. Your journey to
          exceptional taste begins here.
        </p>
      </div>
      <div className='welcome-image'>
        <img src={welcomeImage} alt='Welcome' />
      </div>
    </div>
  )
}

export default Welcome
