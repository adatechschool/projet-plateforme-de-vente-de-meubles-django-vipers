import React from "react";
import { useState, useEffect } from "react";
import AdminAllProducts from "../organisms/AdminAllProducts";

const Admin = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      try {
          async function fetchFurniture() {
              const furnitureData = await fetch(
                  "http://127.0.0.1:8000/api/furniture"
              );
              const parseFurnitureData = await furnitureData.json();
              setProducts(parseFurnitureData);
              console.log(parseFurnitureData);
          }
          fetchFurniture();
      } catch (error) {
          console.log(error);
      }
  }, []);

    return (
        <div className="m-5">
            <h1>Administration</h1>
            <AdminAllProducts products={products} />
        </div>
    );
};

export default Admin;
