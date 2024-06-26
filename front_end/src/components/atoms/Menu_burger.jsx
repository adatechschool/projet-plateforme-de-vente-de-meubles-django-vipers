import React from 'react'
import {useState} from 'react';

const Menu_burger = () => {

let [isMenuClicked, setIsMenuClicked] = useState(false)
const handleIsMenuClicked = () => {
  setIsMenuClicked(!isMenuClicked)
}
  return (
    <div>
      <div className= {
        isMenuClicked? "" : "hidden"
      }>
        <ul>
          <li>Chairs</li>
          <li>Lamps</li>
          <li>Tables</li>
          <li>Ojects</li>
          <li>Favoris</li>
          <li>Admins</li>
          <li>Espace vendeur</li>
          <li>Mon compte</li>
          <li>Inscription</li>
        </ul>
       
      </div>
      <button className="btn btn-square btn-ghost" onClick={handleIsMenuClicked}>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-5 w-5 stroke-current">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>

      </div>
  )
}

export default Menu_burger