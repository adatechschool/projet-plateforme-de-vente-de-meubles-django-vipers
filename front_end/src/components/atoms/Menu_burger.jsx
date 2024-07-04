import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from "react-router-dom";

const Menu_burger = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menuRef = useRef(null); 

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => { 
    const handleClickOutside = (event) => { 
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative pl-8 pb-5' ref={menuRef}>

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
bg-[#beaa7c] ${isMenuClicked ? '' : 'hidden'}`}>
        <ul className='text-2xl lowercase font-bold'>
          <li className="whitespace-nowrap"><Link to="/showproducts/1">Chairs</Link></li> 
          <li className="whitespace-nowrap"><Link to="/showproducts/3">Lamps</Link></li>        
          <li className="whitespace-nowrap"><Link to="/showproducts/2">Tables</Link></li>
          <li className="whitespace-nowrap"><Link to="/showproducts/4">Objects</Link></li>
        </ul>

        <ul className='text-sm leading-tight pt-44 lowercase font-extralight'>
          <li className="whitespace-nowrap"><Link to="/admin">admin</Link></li>
          <li className="whitespace-nowrap"><Link to="/reseller">re-seller platform</Link></li>
          <li className="whitespace-nowrap"><Link to="/account/profil">My account</Link></li>
          <li className="whitespace-nowrap"><Link to="/connexion/signup">Sign Up</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Menu_burger;
