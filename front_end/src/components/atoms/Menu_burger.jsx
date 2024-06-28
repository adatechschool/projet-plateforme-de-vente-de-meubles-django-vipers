import React, { useState } from 'react';

const Menu_burger = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className='relative pl-8 pb-5'>

      {/* BOUTON BURGER */}
      <div className='z-50 relative'>
        <button
          className="btn btn-square btn-ghost pt-5 hover:bg-transparent"
          onClick={handleIsMenuClicked}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-10 w-10 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* MENU LISTE */}
      <div className={`z-40  w-[224px] sm:w-[50px] md:w-[200px] lg:w-[250px] xl:w-[300px] pl-10 absolute left-0 top-0 pt-20 pb-9  
bg-[#B4A37F] ${isMenuClicked ? '' : 'hidden'}`}>
        <ul className='text-2xl lowercase font-bold'>
          <li className="whitespace-nowrap"> <a href='#'>Chairs</a></li>          
          <li className="whitespace-nowrap"><a href='#'>Tables</a></li>
          <li className="whitespace-nowrap"><a href='#'>Objects</a></li>
          <li className="whitespace-nowrap"><a href='#'>Favorites</a></li>
        </ul>

        <ul className='text-sm leading-tight pt-44 lowercase font-extralight'>
          <li className="whitespace-nowrap"><a href='#'>admin</a></li>
          <li className="whitespace-nowrap"><a href='#'>re-sell platform</a></li>
          <li className="whitespace-nowrap"><a href='#'>My account</a></li>
          <li className="whitespace-nowrap"><a href='#'>Sign Up</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Menu_burger;
