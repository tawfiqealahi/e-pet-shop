import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const[products, setProduct]= useState([]);

    // use product on cart
    const[cart, setCart]=useState([])
    // add event handler
    const handleAddProduct=(product)=>{
        const newCart=[...cart,product]
        // console.log(products);
        // console.log(newCart);
        setCart(newCart)  
    }

    useEffect(() => {
        fetch('./productsData.json')
        .then(res => res.json() )
        .then(data =>setProduct(data))
    } ,[])

    return (
            <div className="row m-2">
                <div className=" col-md-9">
        <div className="row">

        {
            products.map((product)=>
                <Product product={product} handleAddProduct={handleAddProduct}></Product>
              )
        }
        </div>

                
               </div>
                <div className="col-md-3">
        <Cart cart={cart}></Cart>
        

                </div>
            
        </div>
    );
};

export default Shop;