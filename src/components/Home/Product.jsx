import React from 'react'
import "./Product.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCart } from '../../features/productSlice';

function Product(props) {
    const {image, category, title, description, price, id} = props.data;
    const dispatch = useDispatch();
    const fetchProduct = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = await response.data;
        dispatch(setCart(data))
    }

    const handleAddToCartClick = () => {
        fetchProduct();
    }
  return (
    <div className="product__container">
        <img src={image} alt={title} />
        <div className="product__detail">
            <div className="product__info">
            <p className="product__category">{category}</p>
                <b className="product__price">{price} $</b>
            </div>
                <p className="product__title">{title}</p>
            {/* <div className="product__description">
                <p>{description}</p>
            </div> */}
            <button className="add__toCart" onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product