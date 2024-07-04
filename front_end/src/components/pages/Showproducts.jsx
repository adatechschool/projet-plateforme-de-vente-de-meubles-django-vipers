import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Categories from "../organisms/Categories";
import Product_grid from "../organisms/Product_grid";

const Showproducts = () => {
  const { type_id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (type_id) {
      async function fetchFurniture() {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/furniture/?type_id=${type_id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const parseFurnitureData = await response.json();
          const filteredProducts = parseFurnitureData.filter((furniture) => furniture.type == type_id);
          setProducts(filteredProducts);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
      fetchFurniture();
    }
  }, [type_id]);

  return (
    <div>
      <Categories />
      <Product_grid arrivals={products} />
    </div>
  );
};

export default Showproducts;