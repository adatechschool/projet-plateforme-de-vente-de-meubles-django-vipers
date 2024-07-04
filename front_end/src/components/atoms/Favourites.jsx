import React from 'react';
import PropTypes from 'prop-types';

const Favourites = ({ favouriteItems }) => {
  return (
    <div className='pr-7 flex space-x-4 font-light text-2xl'>
      <h1 className="text-2xl font-bold text-black text-center">Favourites</h1>
      <ul>
        {favouriteItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li> 
        ))}
      </ul>
    </div>
  );
};

Favourites.propTypes = {
  favouriteItems: PropTypes.array.isRequired
};

Favourites.defaultProps = {
  favouriteItems: []
};

export default Favourites;