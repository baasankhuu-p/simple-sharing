import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-300">
        <div>{id}</div>
      </div>
      <Footer />
    </>
  );
};
