"use client";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setIsAuth(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const handleSignIn = (token: string) => {
    setCookie("token", `${token}`);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(token);
    setIsAuth(true);
  };

  const handleLogout = () => {
    deleteCookie("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuth(false);
  };

  const axiosWithAuth = axios.create({
    headers: {
      Authorization: `Bearer ${getCookie("token") || ""}`,
    },
  });

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, handleSignIn, handleLogout, axiosWithAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
