import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { decrementCartQuantity, incrementCartQuantity } from "../../features/productSlice";
function CartItem(props) {
  const { title, description, price, category, image, quantity} = props.data;
    const dispatch = useDispatch();
  const handleIncrementCount = () => {
    dispatch(incrementCartQuantity(props.data))
  }
  const handleDecrementCount = () => {
    dispatch(decrementCartQuantity(props.data))
  }
  return (
    <>
      <div className="cartItem__container">
        <img src={image} alt={title} />
        <div className="cartItem__details">
          <p className="cartItem__category">{category}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <b>{price} $</b>
          <div className="cartItem__info">
            <div className="cartItem__actions">
              <button className="increment__quantity" onClick={handleIncrementCount}>+</button>
              <p>{quantity}</p>
              <button className="decrement__quantity" onClick={handleDecrementCount}>-</button>
            </div>
            <p className="total__itemPrice">100 $</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
