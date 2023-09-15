import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import Navbar from './components/navbar/navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';

const App = () => (
    <div className="App">
        <ShopContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </ShopContextProvider>
    </div>
);

export default App;
