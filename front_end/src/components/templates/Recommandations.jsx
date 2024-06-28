import React from 'react'
import Chairs from '../../assets/chairs_sofas.jpg'
import Lamps from '../../assets/lamps.jpg'
import Object from '../../assets/objects.jpg'
import Tables from '../../assets/tables.jpg'
import Product_card from '../molecules/Product_card'

const Recommandations = () => {
  return (
    <>
      <div className='pt-16 pb-16' >
        <h1 className='text-4xl font-thin text-center'>just for you</h1>
        <div className="carousel space-x-4 w-full pt-5 pb-5 scroll-smooth relative">
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className="carousel-item w-64 relative group">
            <Product_card />
          </div>
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <button className="btn btn-circle" onClick={e => alert('Scroll left')}>❮</button>
          <button className="btn btn-circle" onClick={e => alert('Scroll right')}>❯</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommandations