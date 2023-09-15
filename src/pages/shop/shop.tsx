import { Product } from './product/product';
import { IProduct } from './product/pruduct.interface';
import { useContext, useEffect } from 'react';
import './shop.scss';
import { ShopContext } from '../../context/shop-context';

export const Shop = () => {
    const { setProducts, products } = useContext(ShopContext) as any;

    useEffect(() => {
        const fetchProducts = () => {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                });
        };
        fetchProducts();
    }, [setProducts]);

    return (
        <div className="shop">
            <div className="shop-title">
                <h1>Shop</h1>
            </div>
            <div className="products">
                {products.map((product: IProduct) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};
