import logo from "./logo.svg";
import "./App.css";
import Website from "./Components/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

import { Suspense } from "react";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import PropertyCard from "./Components/PropertyCard/PropertyCard";
import Admin from "./Components/Role/Admin/Admin";
import Seller from "./Components/Role/Seller/Seller";
import Cart from "./Components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/card/:id" element={<PropertyCard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/seller" element={<Seller />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
