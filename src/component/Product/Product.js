import React from 'react';

const Product = (props) => {
    console.log();
    return (
        <div className="product-container">
            <h3>{props.product.name}</h3>
        </div>
    );
};

export default Product;