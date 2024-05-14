import React, { useState } from 'react';
import Empty from '../../components/empty/Empty';
import { useSelector } from "react-redux";
import "./Card.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Delete from "../../../public/Delete.png";


const Cart = () => {
  
  // const wishlist = useSelector(state => state.wishlist.value) || [];
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === 'plus') {
      setQuantity(prevQuantity => prevQuantity < 100 ? prevQuantity + 1 : 100);
    } else {
      setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 0);
    }
  };
      const carts = useSelector(s => s.cart.value)
      console.log(carts);
      let cartItems = carts?.map(item => (
        <div key={item.id}>
          
          <div className="item">
            <div className="image">
              <img src={item.images[0]} alt=""  />
            </div>
          <div className="description">
            <p>{item.title}</p>
          </div>
          <div className="total-price">${item.price}</div>
          <div className="quantity">
            <button
              className="btn minus-btn"
              type="button"
              onClick={() => handleQuantityChange('minus')}
            >
              -
            </button>
            <input type="text" name="name" value={item.quantity} readOnly />
            <button
              className="btn plus-btn"
              type="button"
              onClick={() => handleQuantityChange('plus')}
            >
              +
            </button>
            
          </div>

          <div className="buttons">
            <span className=" delete-btn"><img src={Delete} alt="" /></span>
            <button className=' card__btn-img' onClick={()=> dispatch(toggleLike(el))}>
              {
                wishlist?.some(item => item.id === el.id) ? 
                <FaHeart style={{color:"red"}}/> 
                :
                <FaRegHeart/>
              }
            </button>
            
          </div>
        </div>

          <div>

          </div>
        </div>
      ))
      

  return (
    <div>
      {
        carts.length ?
        <div>
          {cartItems}
        </div>
        :
         <Empty text="Shoping" />
      }
      <div>
        
      </div>
    </div>
  );
};

export default Cart;