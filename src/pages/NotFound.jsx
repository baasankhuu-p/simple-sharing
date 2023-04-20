import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-500 text-xl mb-8">Sorry</p>
        <Link to="/" className=" text-gray-700 hover:underline font-bold">
          Go back to homepage
        </Link>
      </div>
      <Footer />
    </>
  );
};
