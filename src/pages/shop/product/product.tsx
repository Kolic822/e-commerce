import { useContext } from 'react';
import { ShopContext } from '../../../context/shop-context';
import { IProduct } from './pruduct.interface';
import './product.scss';

export const Product = (props: any) => {
    const { id, image, title, price }: IProduct = props.data;
    const { addToCart, cartItems } = useContext(ShopContext) as any;
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <div className="image-wrapper">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <div className="description">
                    <p>
                        <b>{title}</b>
                    </p>
                    <span>{price}</span>
                    <span> €</span>
                </div>
                <button onClick={() => addToCart(id)}>
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    );
};
