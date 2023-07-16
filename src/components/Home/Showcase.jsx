import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import "./Showcase.css";

function Showcase() {
    const products = useSelector(state => state.products.products);
const handleCategoryFilter = () => {}
  return (
    <>
    <div className="products__container">
    <div className="products__categories">
      <button onClick={handleCategoryFilter} value="all">all</button>
      <button onClick={handleCategoryFilter} value="electronics">electronics</button>
      <button onClick={handleCategoryFilter} value="jewelry">jewelry</button>
      <button onClick={handleCategoryFilter} value="men">men's</button>
      <button onClick={handleCategoryFilter} value="women">women's</button>
    </div>
    <div className="products__main">
    {
      products.map(item => <Product key={item.id} data={item}/>)
    }
    </div>

    </div>
    </>
  )
}

export default Showcase;