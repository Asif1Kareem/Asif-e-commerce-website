import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../category";
import { dummydata } from "../../dummydata";
import Product from "../../components/product/Product";
import { FaShopify } from "react-icons/fa6";

function Shop() {
  const [cate, setCate] = useState(dummydata);

  function filterProducts(categoryName) {
    if (categoryName === "All") {
      setCate(dummydata);
    } else {
      const updateData = dummydata.filter(
        (item) => item.category === categoryName,
      );

      setCate(updateData);
    }
  }

  return (
    <div className="shop">
      <div className="category-section">
        <div className="heading">
          <span>Shop</span>
          <FaShopify />
        </div>
        {category.map((item) => (
          <div
            key={item.id}
            className="category-card"
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="product-section">
        {cate.map((item) => (
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

export default Shop;
