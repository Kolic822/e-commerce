import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { IProduct } from '../shop/product/pruduct.interface';

export const CartItem = (props: any) => {
    const { image, id, price, title }: IProduct = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext) as any;

    return (
        <div className="cartItem">
            <div className="img-wrapper">
                <img src={image} alt="" />
            </div>
            <div className="description">
                <p>
                    <b>{title}</b>
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
