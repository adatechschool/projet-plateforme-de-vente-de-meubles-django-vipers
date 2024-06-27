import React from 'react'
import Chairs from '../../assets/chairs_sofas.jpg'
import Lamps from '../../assets/lamps.jpg'
import Object from '../../assets/objects.jpg'
import Tables from '../../assets/tables.jpg'


const Recommandations = () => {
  return (
    <>
    <div className='pt-16 pb-16' >
      <h1 className='text-4xl font-thin text-center'>just for you</h1>
      <div className="carousel space-x-4 w-full pt-5">
        <div className="carousel-item w-64">
          <img
            src={Chairs}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-64">
          <img
            src={Lamps}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-64">
          <img
            src={Object}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-64">
          <img
            src={Chairs}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-64">
          <img
            src={Tables}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-64">
          <img
            src={Object}
            className="object-cover rounded-box"
            alt="Tailwind CSS Carousel component" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Recommandations