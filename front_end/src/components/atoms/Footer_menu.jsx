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
          <a href="#">re-seller platform</a>
        </li>
        <li>
          <Link to="/account">my account</Link>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer_menu;
