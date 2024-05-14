import React from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Logo from "../../../public/Vector.png"
import Shop from "../../../public/Group.png"
import Logout from "../../../public/Logout.png"

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <>
    <div className='navbar'>
        <div>
          <NavLink className="navbar__logo" to={"/"}>
          <span className='logo'><img src={Logo} alt="" />GREENSHOP</span>
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
         <div className='navbar__btn'>
           <NavLink className="png" to={"/wishlist"}>
            <FaRegHeart/>
          </NavLink>
          <NavLink to={"/cart"}>
            <img src={Shop} alt="" />
          </NavLink>
          <button className='nav_btn'><img src={Logout} alt="" />Login</button>
         </div>
        </div>
        </>
        
  )
}

export default Navbar