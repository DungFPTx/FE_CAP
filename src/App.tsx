import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import Account from "./components/Account";
import ProductDetail from "./components/ProductDetail";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useTimeoutWhen} from "rooks";
import ProductSearch from "./components/ProductSearch";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* 404 Error Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const NotFound = () => {
  const navigate = useNavigate();
  useTimeoutWhen(() => navigate("/"), 1000, true);
  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="text-center-404">404</h1>
    </>
  );
};

export default App;
