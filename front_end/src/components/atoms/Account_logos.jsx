import React from 'react'
import AccountLogo from '../../assets/accountLogos/account_logo.svg'
import CartLogo from '../../assets/accountLogos/cart_logo.svg'
import FavoriteLogo from '../../assets/accountLogos/favorite_logo.svg'

const Account_logos = () => {
  return (
    <div>

      <ul className="lg:flex hidden space-x-4">
        <li><a href="#"><img className="h-8 w-auto" src={AccountLogo} alt="logo_account" /></a></li>
        <li><a href="#"><img className="h-8 w-auto" src={FavoriteLogo} alt="logo_favorite" /></a></li>
        <li><a href="#"><img className="h-8 w-auto" src={CartLogo} alt="logo_cart" /></a></li>
        
      </ul>
    </div>
  )
}

export default Account_logos
