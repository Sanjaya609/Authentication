import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseURL } from './BaseUrl';
import { Item } from './Item';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const fetchProducts = async () => {
        const response = await axios({
            method: 'get',
            url: `${BaseURL}/product`,
            headers: { 'Authorization': 'Bearer ' + accessToken },
        });
        setProducts(response?.data?.data);
        //console.log(response?.data?.data);
    }
    useEffect(() => {
        fetchProducts()
    }, [setProducts]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {products.map((item) => {
                        <Item name={item.name}
                        detail={item.description}/>
                    })}
                </div>
            </div></div>
    )
}
