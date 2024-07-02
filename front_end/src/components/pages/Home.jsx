import Hero from "../organisms/Hero";
import Recommandations from "../templates/Recommandations";
import Arrivals from "../templates/Arrivals";
import Categories from "../organisms/Categories";
import React, { useState, useEffect } from "react";

const Home = () => {
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
    <div>
      <Hero />
      <Recommandations recommandations = {products} />
      <Arrivals arrivals = {products} />
      <Categories />
    </div>
  );
};

export default Home;
