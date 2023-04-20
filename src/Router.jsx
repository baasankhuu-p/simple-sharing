import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newposts from "./pages/Newposts";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Post from "./components/Post";
import UserContext from "./context/userContext";
import NotFound from "./pages/NotFound";
import Splash from "./components/Splash";
export default function Router() {
  const state = useContext(UserContext);
  useEffect(() => {
    toast(state.toastMsg);
  }, [state.toastMsg]);
  return (
    <>
      <Splash />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {state.isLogin && <Route path="/new-posts" element={<Newposts />} />}
          <Route path="/post/:id" element={<Post />} />
          {!state.isLogin && (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
