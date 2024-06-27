import React from 'react'
import Visa from '../../assets/paiementlogos/visa.svg'
import AmericanExpress from '../../assets/paiementlogos/american_express.svg'
import ApplePay from '../../assets/paiementlogos/apple_pay.svg'
import Paypal from '../../assets/paiementlogos/paypal.svg'
import Mastercard from '../../assets/paiementlogos/mastercard.svg'

const Paiement_method = () => {
  return (
    <div> 
        
        < div className="mt-4 space-y-3 pt-2 flex flex-col items-start">
    
        
    <ul className='flex space-x-4 w-[200px]'>
        <li><img src={Visa} alt="" /></li>
        <li><img src={AmericanExpress} alt="" /></li>
        <li><img src={Mastercard} alt="" /></li>
        <li><img src={ApplePay} alt="" /></li>
        <li><img src={Paypal} alt="" /></li>
      

      </ul>
    </div></div>
  )
}

export default Paiement_method