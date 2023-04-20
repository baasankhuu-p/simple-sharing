import React from "react";
import { UserStore } from "./context/userContext";
import Router from "./Router";
export default function App() {
  return (
    <UserStore>
      <Router />
    </UserStore>
  );
}
