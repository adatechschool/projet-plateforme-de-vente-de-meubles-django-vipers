import React from 'react'
import Chairs from '../../assets/chairs_sofas.jpg'
import Add2cart from "../atoms/Add2cart";
import Add2favourite from '../atoms/Add2favourite'
import Price from '../atoms/Price'

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
    <Price/>
    <div className="card-actions flex">
      <Add2favourite/>
      <Add2cart/>
    </div>
  </div>
</div>
    </div>

    
  )
}

export default Product_card