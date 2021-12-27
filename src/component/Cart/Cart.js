import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    console.log(cart)

    // const total = cart.reduce((total, prod) => total + prod.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;

    }

    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0;
    }
    else if (total > 15) {
        shippingCost = 4.99;
    }
    else if (total > 0) {
        shippingCost = 9.99;
    }
    // const vatTax = Math.round(total / 10);
    // const TotalPrice = Math.round(total + shippingCost + Number(vatTax)).toFixed(2);

    const vatTax = (total / 10).toFixed(2);
    const TotalPrice = Math.round(total + shippingCost + Number(vatTax)).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <div>
                <p className="cart-wrapping">Price: {total}</p>
                <p>Shipping Cost: <small>{shippingCost}</small></p>
                <p>Tax + Vat: <small>{vatTax}</small></p>
                <p>Total Price: {TotalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;