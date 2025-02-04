import { Navbar } from "./components/layouts/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      {/* <DarkModeContext> */}
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CartContextProvider>
      {/* </DarkModeContext> */}
    </BrowserRouter>
  );
}

export default App;
