import React from "react";
import { Outlet, Link } from "react-router-dom";

const Connexion = () => {
    return (
        <div className="m-5">
            <div role="tablist" className="tabs tabs-lifted">
                <Link className="tab" to="login">
                    Log In
                </Link>

                <Link className="tab" to="signup">
                    Sign up
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Connexion;
