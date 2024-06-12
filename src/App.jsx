import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./components/pages/Home";

import "./App.css";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <ParallaxProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
          <Footer />
        </ParallaxProvider>
      </Router>
    </>
  );
}

export default App;
