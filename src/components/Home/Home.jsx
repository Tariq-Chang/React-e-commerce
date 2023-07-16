import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../features/productSlice';
import Showcase from './Showcase';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';
import {Routes, Route} from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(await response.data))
    }

    useEffect(() => {
        fetchData();
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <Routes >
                <Route path="/" element={<Showcase />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Home