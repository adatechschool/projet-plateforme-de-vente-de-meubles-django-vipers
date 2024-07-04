import React from "react";
import AdminAllProducts from "../organisms/AdminAllProducts";
import {useFetchFurniture} from "../../hooks/useFetch";

const Admin = ({ products }) => {
    return (
        <div className="m-5">
            <h1>Administration</h1>
            <AdminAllProducts products={products} />
        </div>
    );
};

export default Admin;
