import React from 'react'
import Chairs from '../../assets/chairs_sofas.jpg'
const Product_card = () => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={Chairs}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Meuble Card</h2>
    <p>belle chaise</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>

    
  )
}

export default Product_card