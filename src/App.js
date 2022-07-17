// import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Photos from "./Components/Photos";

import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Photos perPage={50} />
      <Footer />
    </>
  );
}
