import Product_details from '../atoms/Product_details'
import { useState,useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';

const Product = () => {
  const [queryParameters] = useSearchParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
  
    try {
      const productId=queryParameters.get("id")
      async function fetchFurniture() {
        const furnitureData = await fetch(
          "http://127.0.0.1:8000/api/furniture/"+ productId
        );
        const parseFurnitureData = await furnitureData.json();
        setProduct(parseFurnitureData);
        console.log(parseFurnitureData);
      }
      fetchFurniture();
    } catch (error) {
      console.log(error);
    }
  }, []);
 
  return (
    <div>
      <Product_details product={product}/>
    </div>
     
  )
}

export default Product