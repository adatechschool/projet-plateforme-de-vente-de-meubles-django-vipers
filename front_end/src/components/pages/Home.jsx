import Hero from "../organisms/Hero";
import Recommandations from "../templates/Recommandations";
import Arrivals from "../templates/Arrivals";
import Categories from "../organisms/Categories";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    try {
      async function fetchFurniture() {
        const furnitureData = await fetch(
          "http://127.0.0.1:8000/api/furniture"
        );
        const parseFurnitureData = await furnitureData.json();
        setArrivals(parseFurnitureData);
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
      <Recommandations arrivals = {arrivals} />
      <Arrivals arrivals = {arrivals} />
      <Categories arrivals = {arrivals} />
    </div>
  );
};

export default Home;
