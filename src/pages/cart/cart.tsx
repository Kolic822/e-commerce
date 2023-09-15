import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './cart-item';
import './cart.scss';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext) as any;
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((Product) => {
                    if (cartItems[Product.id] !== 0) {
                        return <CartItem key={Product.id} data={Product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: {totalAmount} $</p>
                    <button onClick={() => navigate('/')}>Continue shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (
                <h1>Your cart is empty</h1>
            )}
        </div>
    );
};
