import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Item from "../components/Item";
import { getPosts } from "../services/post";
import UserContext from "../context/userContext";
export default () => {
  const [items, setItems] = useState(null);
  const state = useContext(UserContext);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [state.Overread]);
  return (
    <div className="min-h-screen bg-gray-800 ">
      <Navbar />
      {items && items.length > 0 && (
        <div className="px-20 py-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {items.map((post, index) => (
            <Item key={index} {...post} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
