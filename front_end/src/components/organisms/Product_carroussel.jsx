import React from 'react'
import Chairs from '../../assets/chairs_sofas.jpg'
import Lamps from '../../assets/lamps.jpg'
import Object from '../../assets/objects.jpg'
import Tables from '../../assets/tables.jpg'

const Product_carroussel = () => {
  return (
    <>
      <div className="carousel rounded-box w-64">
        <div id="item1" className="carousel-item relative w-full">
          <img
            src={Chairs}
            className="object-cover"
            alt="Tailwind CSS Carousel component" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item4" className="btn btn-circle">❮</a>
            <a href="#item2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img
            src={Lamps}
            className="object-cover"
            alt="Tailwind CSS Carousel component" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item1" className="btn btn-circle">❮</a>
            <a href="#item3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img
            src={Object}
            className="object-cover"
            alt="Tailwind CSS Carousel component" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item2" className="btn btn-circle">❮</a>
            <a href="#item4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="item4" className="carousel-item relative w-full">
          <img
            src={Tables}
            className="object-cover"
            alt="Tailwind CSS Carousel component" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item3" className="btn btn-circle">❮</a>
            <a href="#item1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product_carroussel