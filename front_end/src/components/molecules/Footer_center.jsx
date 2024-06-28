import React from "react";
import Social_medias from "../../components/atoms/Social_medias.jsx";
import Contact_us from "../atoms/Contact_us.jsx";


const Footer_center = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="lowercase text-4xl">Follow Us</h1>

      <Social_medias />

      <h1 className=" mt-4 lowercase text-1xl ">Contacts</h1>
          <Contact_us />  
    </div>
    
  );
};

export default Footer_center;
