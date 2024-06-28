import React from 'react'

const Search_bar = () => {
  return (
    <div className='pr-12'>
      <input
        type="text"
        placeholder="search"
        className="bg-white border border-black text-gray-700 py-1 px-4 rounded-2xl w-48 transition-all ease-in-out duration-500 mr-[-2rem] hover:shadow-md focus:outline-none  placeholder-gray-400 placeholder-opacity-75 font-thin text-sm" />

    </div>
  )
}

export default Search_bar
