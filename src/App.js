// import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Photos from "./Components/Photos";
import { Routes, Route } from "react-router-dom";

import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Photos key="house" perPage={50} category="house" />}
        />
        <Route
          exact
          path="/science"
          element={<Photos key="science" perPage={50} category="science" />}
        />
        <Route
          exact
          path="/technology"
          element={
            <Photos key="technology" perPage={50} category="technology" />
          }
        />
        <Route
          exact
          path="/business"
          element={<Photos key="business" perPage={50} category="business" />}
        />
        <Route
          exact
          path="/sports"
          element={<Photos key="sports" perPage={50} category="sports" />}
        />
        <Route
          exact
          path="/nature"
          element={<Photos key="nature" perPage={50} category="nature" />}
        />
        <Route
          exact
          path="/men"
          element={<Photos key="men" perPage={50} category="men" />}
        />
        <Route
          exact
          path="/women"
          element={<Photos key="women" perPage={50} category="women" />}
        />
        <Route
          exact
          path="/cars"
          element={<Photos key="cars" perPage={50} category="cars" />}
        />
      </Routes>
      <Footer />
    </>
  );
}
