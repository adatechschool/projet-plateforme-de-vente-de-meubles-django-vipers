import React from 'react'
import { Link } from "react-router-dom";

const Profil_form = () => {
  return (
    <div className="flex flex-col mx-auto my-8 w-fit">
      <div><h1 className='text-gray-700 font-thin px-8 py-4 text-3xl'>Profil</h1></div>
      <div className="bg-[#beaa7c] text-white text-left p-8 rounded space-y-4">
        <p>Pseudo : -Django-Vipers-75010-</p>
        <p>Email : django_vipers@adatech.com</p>
        <p>Password : ********</p>
        <p>Adress : 116 Rue du Faubourd Saint Martin, Paris, France</p>
        <p>Phone number : +33 6 50 48 65 54</p>
        <div><Link to="../edit"><button className="btn bg-[rgb(198 182 150)] mx-auto">Modifier</button></Link></div>

      </div>
    </div>
  )
}

export default Profil_form