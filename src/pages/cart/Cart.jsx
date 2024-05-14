import React, { useState } from 'react';
import Empty from '../../components/empty/Empty';
import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Delete from "../../../public/Delete.png";

const Cart = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.value) || [];
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation, itemId) => {
    if (operation === 'plus') {
      setQuantity(prevQuantity => prevQuantity < 100 ? prevQuantity + 1 : 100);
      // Update the quantity in the Redux store for the item with the given itemId
    } else {
      setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 0);
      // Update the quantity in the Redux store for the item with the given itemId
    }
  };

  const carts = useSelector(s => s.cart.value);
  console.log(carts);

  let cartItems = carts?.map(item => (
    <div key={item.id}>
      <div className="item">
        <div className="image">
          <img src={item.images[0]} alt="" width={100} />
        </div>
        <div className="description">
          <p>{item.title}</p>
        </div>
        <div className="total-price">${item.price}</div>
        <div className="quantity">
          <button
            className="btn minus-btn"
            onClick={() => handleQuantityChange('minus', item.id)}
          >
            -
          </button>
          <input type="text" name="name" value={item.quantity} readOnly />
          <button
            className="btn plus-btn"
            onClick={() => handleQuantityChange('plus', item.id)}
          >
            +
          </button>
        </div>

        <div className="buttons">
          <span className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>
            <img src={Delete} alt="" />
          </span>
          <button
            className="card__btn-img"
            onClick={() => dispatch(toggleLike(item))}
          >
            {wishlist?.some(wishlistItem => wishlistItem.id === item.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {carts.length ? (
        <div>{cartItems}</div>
      ) : (
        <Empty text="Shoping" />
      )}
    </div>
  );
};

export default Cart;