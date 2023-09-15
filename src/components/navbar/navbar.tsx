import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../../context/shop-context';
import './navbar.scss';

export const Navbar = () => {
    const { cartItems } = useContext(ShopContext) as any;

    const sum: number = Object.values(cartItems).reduce((acc: number, curr: any) => {
        return acc + curr;
    }, 0);

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart />
                    {sum === 0 ? '' : sum}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
