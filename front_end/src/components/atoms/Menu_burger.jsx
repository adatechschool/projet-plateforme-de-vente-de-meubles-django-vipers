import React, { useState } from 'react';

const Menu_burger = () => {
  let [isMenuClicked, setIsMenuClicked] = useState(false);
  
  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className='relative pl-8 pb-5 z-1'>
      
      {/* BOUTON BURGER */}
      <button className="btn btn-square btn-ghost" onClick={handleIsMenuClicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-10 w-10 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* MENU LISTE */}
      <div className={`pl-10 z-50 absolute left-0 top-12 bg-white p-4 shadow-lg ${isMenuClicked ? '' : 'hidden'}`}>
        <ul>
          <li>Chairs</li>
          <li>Lamps</li>
          <li>Tables</li>
          <li>Objects</li>
          <li>Favoris</li>
          <li>Admins</li>
          <li>Espace vendeur</li>
          <li>Mon compte</li>
          <li>Inscription</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu_burger;
