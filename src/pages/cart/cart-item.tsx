import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props: any) => {
    const { productImage, id, price, productName } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext) as any;

    return (
        <div className="cartItem">
            <img src={productImage} alt="" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price} €</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input
                        type="number"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
};
