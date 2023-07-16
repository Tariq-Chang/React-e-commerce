import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.products.cart);
  let totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0)
  return (
    <div className="cart__container">
      <ArrowBackIcon onClick={() => navigate(-1)}/>
      <h1>Cart</h1>
      <p>Total: {totalAmount.toFixed(2)}</p>
      <hr></hr>
      {
        cartItems.map((cartItem, index) => <CartItem data={cartItem} key={index}/>)
      }
    </div>
  )
}

export default Cart