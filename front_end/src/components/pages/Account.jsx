import React from "react";
import Profil_form from "../atoms/Profil_form";
import Profil_edit from "../atoms/Profil_edit";
import { Outlet, Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div>
        <Link to="profil"></Link>
        <Link to="edit"></Link>
        <Outlet />
      </div>
    </>
  );
};

export default Account;
