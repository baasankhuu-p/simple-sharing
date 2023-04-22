import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

export default function Splash() {
  const state = useContext(UserContext);
  useEffect(() => {
    if (
      localStorage.getItem("SSP-token") &&
      localStorage.getItem("SSP-email") &&
      localStorage.getItem("SSP-password")
    ) {
      state.setIsLogin(true);
      state.setToken(localStorage.getItem("SSP-token"));
      state.setEmail(localStorage.getItem("SSP-email"));
      state.setPassword(localStorage.getItem("SSP-password"));
    }
  });
  return <></>;
}
