import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './cart-item';
import './cart.scss';
import { IProduct } from '../shop/product/pruduct.interface';

export const Cart = () => {
    const { cartItems, getTotalCartAmount, products } = useContext(ShopContext) as any;
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {products.map((product: IProduct) => {
                    if (cartItems[product.id]) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
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
