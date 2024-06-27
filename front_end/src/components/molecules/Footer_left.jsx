import React from "react";
import Footer_menu from "../atoms/Footer_menu";
import Paiement_method from "../atoms/Paiement_method";


const Footer_left = () => {
  return (
    <div>
      <div className="space-y-6">
        <h1 className="lowercase text-4xl ">Vipers Furnitures</h1>
          <Footer_menu />
      </div>

      <Paiement_method />
    </div>
  );
};

export default Footer_left;
