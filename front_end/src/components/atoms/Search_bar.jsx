import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search_bar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.toLowerCase()}`);
      setSearchTerm(''); // Clear the search bar
    }
  };

  return (
    <div className='pr-12'>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="search                           " 
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-white border border-black text-gray-700 py-1 px-4 rounded-2xl w-48 transition-all ease-in-out duration-500 mr-[-2rem] hover:shadow-md focus:outline-none placeholder-gray-400 placeholder-opacity-75 font-thin text-sm"
        />
      </form>
    </div>
  );
};

export default Search_bar;
