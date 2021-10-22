import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [product, setProduct] = useState(firstTen)
    console.log("set product: ", setProduct);

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(prdct => <Product key={prdct.key} product={prdct} />)
                }
            </div>
            <div className="card-container">
                <h1>This is Card</h1>
            </div>

        </div>
    );
};

export default Shop;