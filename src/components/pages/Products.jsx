import React, { useEffect, useState, useRef } from "react";
import "../Products.css";
// import "../Styles.css"

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const selectRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        console.log(data);
      });
  }, []);

  function handleFilter(e) {
    const value = e.target.value;
    console.log("it changed, ", value);
    if (value === "all") {
      setFilteredProducts(products);
    }
    if (value === "low") {
      const lowPrice = products.filter((product) => product.price < 400);
      setFilteredProducts(lowPrice);
    } else if (value === "high") {
      const highPrice = products.filter((product) => product.price > 400);
      setFilteredProducts(highPrice);
    }
  }

  return (
    <div className="products-container">
      {/* <div id="hero">
        <video autoPlay muted loop>
          <source src="src/assets/hero.mp4" type="video/mp4" />
        </video>
      </div> */}
      <h1 className="products-title">Services</h1>

      <select className="price-filter" onChange={handleFilter} ref={selectRef} name="" id="price-filter">
        <option value="all">Select your price range</option>
        <option value="low">$110-$400</option>
        <option value="high">Over $400</option>
      </select>

      <div className="products-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img className="product-image" src={product.image} alt={product.description} />
          <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">$ {product.price}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
