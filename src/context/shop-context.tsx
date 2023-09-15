import { createContext, useState } from 'react';
import { IProduct } from '../pages/shop/product/pruduct.interface';

export const ShopContext = createContext({});

export const ShopContextProvider = (props: { children: any }) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getDefaultCart = () => {
        const cart: any = {};
        for (const product of products) {
            cart[product.id] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, item) => {
            if (cartItems[item] > 0) {
                const itemInfo = products.find((product: IProduct) => product.id === Number(item));
                return totalAmount + cartItems[item] * (itemInfo ? itemInfo.price : 1);
            }
            return totalAmount;
        }, 0);
    };

    const addToCart = (itemId: number) => {
        setCartItems((prevCartItems: { [x: number]: number }) => {
            const updatedCart = { ...prevCartItems };
            if (!updatedCart[itemId]) {
                updatedCart[itemId] = 0; // Initialize to 0 if not already defined
            }
            updatedCart[itemId] += 1;
            return { ...updatedCart }; // Make sure to return a new object
        });
    };
    const removeFromCart = (itemId: number) => {
        setCartItems((prev: { [x: number]: number }) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount: any, itemId: any) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        products,
        setProducts,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
    };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
