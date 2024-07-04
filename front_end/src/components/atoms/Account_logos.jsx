import React from 'react'
import AccountLogo from '../../assets/accountLogos/account_logo.svg'
import CartLogo from '../../assets/accountLogos/cart_logo.svg'
import FavoriteLogo from '../../assets/accountLogos/favorite_logo.svg'
import { Link } from "react-router-dom";

const Account_logos = () => {
  return (
    <div>

      <ul className="lg:flex hidden space-x-4">
        <li><Link to="/account/profil"><img className="h-8 w-auto" src={AccountLogo} alt="logo_account" /></Link></li>
        {/* <li><a href="#"><img className="h-8 w-auto" src={FavoriteLogo} alt="logo_favorite" /></a></li> */}
        <li><Link to="/cart"><img className="h-8 w-auto" src={CartLogo} alt="logo_cart" /></Link></li>
        
      </ul>
    </div>
  )
}

export default Account_logos
