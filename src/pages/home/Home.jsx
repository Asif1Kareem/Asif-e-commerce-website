import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif";
import { category } from "../../category.js";
import "./Home.css";
import Product from "../../components/product/Product.jsx";
import { dummydata } from "../../dummydata.js";

function Home() {
  let [cate, setCate] = useState(dummydata);

  function filterProducts(category) {
    const updateData = dummydata.filter((item) => item.category === category);

    setCate(updateData);
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="category-section">
        {category.slice(0, 5).map((item) => (
          <div
            className="category-card"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 7).map((item) => (
          <Product
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
