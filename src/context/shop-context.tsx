import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext: any = createContext(null);

const getDefaultCart = () => {
    return PRODUCTS.reduce((cart: any, product: any, index: number) => ({ ...cart, [index + 1]: 0 }), {});
};

export const ShopContextProvider = (props: { children: any }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, item) => {
            if (cartItems[item] > 0) {
                const itemInfo = PRODUCTS.find((product: { id: number }) => product.id === Number(item));
                return totalAmount + cartItems[item] * (itemInfo ? itemInfo.price : 1);
            }
            return totalAmount;
        }, 0);
    };

    const addToCart = (itemId: string | number) => {
        setCartItems((prev: { [x: string]: number }) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId: string | number) => {
        setCartItems((prev: { [x: string]: number }) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount: any, itemId: any) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
