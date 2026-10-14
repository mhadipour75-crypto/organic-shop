import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { CartDrawer } from "./components/CartDrawer";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
