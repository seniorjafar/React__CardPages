import React from 'react'
import "./Products.css"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../context/wishlistSlice';
import {addToCart} from "../../context/cardSlice"
import Arrow from "../../../public/Arrow.png"
import Shop from "../../../public/Group1.png"
import Search from "../../../public/Frame.png"


// Trust but Verify
const Products = ({data, title}) => {
  let wishlist = useSelector(state => state.wishlist.value)

  const dispatch = useDispatch()

  let productItems = data?.map(el =>(
    
      <div key={el.id} className="card">
        <div>
        <img src={el.images[0]} alt="" />
          <div className='card__btn'>
            <button className='card__btn-img' onClick={()=> dispatch(addToCart(el))}>
              <img src={Shop} alt="" />
            </button>
            <button className='card__btn-img' onClick={()=> dispatch(toggleLike(el))}>
              {
                wishlist?.some(item => item.id === el.id) ? 
                <FaHeart style={{color:"red"}}/> 
                :
                <FaRegHeart/>
              }
            </button>
            <button className='card__btn-img'><img src={Search} alt="" /></button>
          </div>
        </div>
        <div className='card__title'>
          <h4>{el.title}</h4>
          <h5 style={{color:"green"}}>${el.price}</h5>
        </div>
      </div>
  ) ) 
  return (
    <div>
        {/* <h2>{title}</h2> */}
        <div className='product__menu'>
          <div className='menu'>
            <h3>All Plants</h3>
            <h3>New Arrivals</h3>
            <h3>Sale</h3>
          </div>
          <div className='default'>
            <h3>Short by:Default sorting <img src={Arrow} alt="" /></h3>
          </div>
        </div>
        <div className="wrapper">
           {productItems}
        </div>
    </div>
  )
}

export default Products



// let arr = [ 5, 15,  20]

// console.log( arr.some(i => i > 10) ); // ||
// console.log( arr.every(i => i > 10) ); // &&


let user = {
  id: 1,
  name: "John",
  age: 32,
  gender: "male",
  profession: "Developer",
  address: "New York",
  tel: "998911234567"
}