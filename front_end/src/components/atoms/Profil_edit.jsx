import React from "react";

const Profil_edit = () => {

  function popup(){
    alert ("Profil update!")
  }

  return (
    <div className="flex flex-col mx-auto my-8 w-fit">
      <div>
        <h1 className="text-gray-700 font-thin px-8 py-4 text-3xl">
          Edit Profil
        </h1>
      </div>
      <div className="bg-[#beaa7c] text-white text-left p-8 rounded space-y-4">
        <div>
          <label>Pseudo : </label>
          <input type="text" className="text-black rounded float-right"/>
        </div>
        <div>
          <label>Email : </label>
          <input type="text" className="text-black rounded float-right" />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" className="text-black rounded float-right" />
        </div>
        <div>
          <label>Confirm Password : </label>
          <input type="password" className="text-black rounded float-right" />
        </div>
        <div>
          <label>Adress : </label>
          <input type="text" className="text-black rounded float-right" />
        </div>
        <div>
          <label>Phone number : </label>
          <input type="text" className="text-black rounded float-right"/>
        </div>
        <button className="btn bg-[rgb(198 182 150)] mx-auto" onClick={popup}>Edit</button>
      </div>
    </div>
  );
};

export default Profil_edit;
