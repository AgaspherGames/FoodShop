import "./App.css";

import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiSetProducts, ApiSetSortedProducts, ApiSetUserData } from "./api/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Liked from "./Components/Liked/Liked";
import Cart from "./Components/Cart/Cart";
import OrderVerify from "./Components/Order/OrderVerify/OrderVerify";
import ProductPage from "./Components/ProductPage/ProductPage";

function App() {
  const products = useSelector((state) => state.products);
  const userData = useSelector((state) => state.userData);
  const sortedProducts = useSelector((state)=> state.products.sortedProducts)

  const dispatch = useDispatch();
  useEffect(() => {
    ApiSetProducts(dispatch);
    ApiSetUserData(dispatch);
  }, []);



  if (!userData.isAuth || !userData.isProductsLoaded) return <h1>aaaaaa</h1>;
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapped">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  userData={userData}
                  products={!sortedProducts[0] ? products.products : sortedProducts}
                />
              }
            />
            <Route
              path="/liked"
              element={<Liked userData={userData.data[0]} products={products.products} />}
            />
            <Route
              path="/cart"
              element={<Cart userData={userData.data[0]} products={products.products} />}
            />
            <Route path="/order" element={<OrderVerify />} />
            <Route path="/product*" element={<ProductPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
