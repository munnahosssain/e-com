import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTen = fakeData.slice(10, 20);
    const [product, setProduct] = useState(firstTen)

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("button clicked", product);
        const newCard = [...cart, product];
        setCart(newCard);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(prdct =>
                        <Product
                            key={prdct.key}
                            product={prdct}
                            handleProduct={handleAddProduct}
                        />)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;