import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [namaProduct, setNamaProduct] = useState("");
  const [successAdd, setSuccessAdd] = useState(false);
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const url = "https://dummyjson.com/products?limit=3";
      const response = await axios.get(url);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async () => {
    try {
      const url = "https://dummyjson.com/products/add";
      const payload = {
        title: namaProduct
      }

      const response = await axios.post(url, payload)
      setSuccessAdd(true)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Product</h1>
      <h2>ADD PRODUCT</h2>
      <input type="text" placeholder="Type here" 
        className="input input-bordered w-full max-w-xs mb-5" 
        onChange={(e) => setNamaProduct(e.target.value)}
      />

      <button className="btn btn-primary ml-5" onClick={addProduct}>Add Product</button>

      {successAdd && <p>Success Add Product</p>}

      <div class="grid gap-4 grid-cols-3">
        {products.map((product, index) => {
          return (<ProductCard {...product} />)
        })}
      </div>
      {/* <p>Count: {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment</button> */}
    </>
  );
};

export default Product;
