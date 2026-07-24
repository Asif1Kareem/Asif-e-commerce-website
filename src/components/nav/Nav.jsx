import React from "react";
import { FaShopify } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  let dispatch = useDispatch();
  let items = useSelector((state) => state);
  console.log(items);

  return (
    <div className="nav">
      <div className="top-nav">
        <Link to="/">
          <div className="logo">
            <span>V-Shop</span>
            <FaShopify />
          </div>
        </Link>

        <form className="search-box">
          <input type="text" placeholder="Search Items.." />
          <button>
            <IoSearchSharp />
          </button>
        </form>

        <Link to="/cart">
          <div className="cart-box">
            <IoCartOutline />
            <span>{items.cart.length}</span>
          </div>
        </Link>
      </div>

      <div className="bottom-nav">
        <ul className="bottom-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
