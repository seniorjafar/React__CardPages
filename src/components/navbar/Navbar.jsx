import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <>
    <div className='navbar'>
        <div>
          <NavLink className="navbar__logo" to={"/"}>
          <span>Logo</span>
        </NavLink>
        </div>
        <ul className="navbar__carts" to={""}>
          <li>
            <NavLink className="navbar__cart" to={""}>Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar__cart" to={"/cart"}>Shop</NavLink>
          </li>
          <li>
            <NavLink className="navbar__cart" to={"/plantCare"}>Plant Care</NavLink>
          </li>
          <li>
            <NavLink className="navbar__cart" to={"/blog"}>Blogs</NavLink>
          </li>
        </ul>
         <div className='navbar__btns'>
           <NavLink to={"/wishlist"}>
            <FaRegHeart/>
          </NavLink>
          <NavLink to={"/cart"}>
            <IoCartOutline/>
          </NavLink>
         </div>
        </div>
        </>
        
  )
}

export default Navbar