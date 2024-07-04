import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Categories from "../organisms/Categories";
import Product_grid from "../organisms/Product_grid";

const typeMapping = {
  chair: 1,chaise: 1,chaises: 1,koursi:1, silla :1,fauteuil: 1,
  chairs:1, sandaliye:1,
  sofa: 1,
  table:2,tables:2,basse : 2, salon : 2,mesa:2,tabla: 2,tawila : 2 , masa:2,
  lamp: 3,lampadaire : 3, applique :3 ,veilleuse:3,lustre:3,eclairage:3,lampe:3, lamba : 3, sidelamp : 3,
  vase: 4,vases: 4,
  mirror: 4,miroir:4 , miroirs: 4,miraat: 4, mraya: 4, doubalé : 4, ayna:4,
  object: 4,
};

const getTypeID = (searchTerm) => typeMapping[searchTerm] || null;

const Showproducts = () => {
  const { type_id, searchTerm } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (typeId) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/furniture/?type_id=${typeId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const parseFurnitureData = await response.json();
        const filteredProducts = parseFurnitureData.filter((furniture) => furniture.type == typeId);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    if (type_id) {
      fetchProducts(type_id);
    } else if (searchTerm) {
      const typeId = getTypeID(searchTerm);
      if (typeId) {
        fetchProducts(typeId);
      } else {
        setProducts([]); 
      }
    }
  }, [type_id, searchTerm]);

  return (
    <div>
      <Categories />
      <Product_grid arrivals={products} />
    </div>
  );
};

export default Showproducts;