import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
    const cartItems = useSelector(state => state.products.cart);
    let count = cartItems.reduce((acc, item) => {return acc + item.quantity}, 0)
    return (
        <div className="navbar__container">
            <div className="navbar__main">
                <h1>E-COMMERCE</h1>
                <Link to="/cart" className="navbar__shoppingCart">
                <ShoppingCartIcon style={{width:"50px",height:"40px"}}/>
                <span className="cart__count">{count}</span>
                </Link>
            </div>
        </div>

    )
}

export default Navbar