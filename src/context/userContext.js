import React, { createContext, useState } from "react";
import axios from "axios";
import { RestApiUrl } from "../constants";
import { useNavigate } from "react-router-dom";
export const UserStore = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [Overread, setOverread] = useState(false);
  const [toastMsg, setToastMsg] = useState("Түр хүлээнэ үү ...");

  const signin = (email, password) => {
    axios
      .post(`${RestApiUrl}/users/signin`, {
        email: email ? email.trim() : email,
        password: password ? password.trim() : password,
      })
      .then((result) => {
        loginUserSuccessful(result.data.token, email, password);
      })
      .catch((err) => {
        loginFailed(err.response.data.message);
      });
  };

  const signup = (username, phone, email, password) => {
    axios
      .post(`${RestApiUrl}/users/signup`, {
        username,
        phone,
        email,
        password,
      })
      .then((result) => {
        loginUserSuccessful(
          loginUserSuccessful(result.data.token, email, password)
        );
      })
      .catch((err) => {
        loginFailed(err.response.data.message);
      });
  };
  const loginUserSuccessful = async (token, email, password) => {
    localStorage.setItem("SSP-token", token);
    localStorage.setItem("SSP-email", email);
    localStorage.setItem("SSP-password", password);
    setToastMsg("Амжилттай нэвтэрлээ");
    setIsLogin(true);
    setToken(token);
    setEmail(email);
    setPassword(password);
  };
  const loginFailed = (error) => {
    setToastMsg(error);
    setIsLogin(false);
    setEmail(null);
    setToken(null);
    setPassword(null);
  };
  const logout = async () => {
    localStorage.removeItem("SSP-token");
    localStorage.removeItem("SSP-email");
    localStorage.removeItem("SSP-password");
    setToastMsg("Системээс гарлаа");
    setIsLogin(false);
    setEmail(null);
    setToken(null);
    setPassword(null);
  };
  return (
    <UserContext.Provider
      value={{
        toastMsg,
        setToastMsg,
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin,
        Overread,
        setOverread,
        logout,
        signin,
        signup,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
const UserContext = createContext();
export default UserContext;
