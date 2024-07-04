import React from "react";
import { Link } from "react-router-dom";

const Footer_menu = () => {
  return (
    <div className="lowercase font-extralight text-sm leading-3">
      <ul className="space-y-2">
        <li>
          <Link to="/admin">admin</Link>
        </li>
        <li>
        <Link to="/reseller">re-seller platform</Link>
        </li>
        <li>
          <Link to="/account/profil">my account</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer_menu;
