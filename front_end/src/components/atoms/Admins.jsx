import React from 'react';
import { Link } from "react-router-dom";

const Admins = () => {
  return (
    <div className='pr-7 flex space-x-4 font-light text-2xl'>
      <Link to="/">home.</Link>
      <Link to="/admin">admins.</Link>
      <a href="#">re-seller.</a>
    </div>
  )
}

export default Admins