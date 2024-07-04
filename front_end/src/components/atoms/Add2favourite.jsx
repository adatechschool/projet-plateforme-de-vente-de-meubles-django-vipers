import React from 'react';

const Add2favourite = ({ item, onAddToFavourites }) => {
  const handleAddToFavourites = () => {
    onAddToFavourites(item);
  };

  return (
    <div>
      <button className="btn btn-Add to favorite bg-[rgb(198 182 150)]" onClick={handleAddToFavourites}>
        Add to ❤️
      </button>
    </div>
  );
};

export default Add2favourite;
