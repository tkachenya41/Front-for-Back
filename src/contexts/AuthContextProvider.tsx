"use client";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { UserAPI } from "@/api/User";
import { COOKIES_TOKEN } from "@/api/constants";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setIsUser] = useState<UserAPI | null>(null);

  useEffect(() => {
    const token = getCookie(COOKIES_TOKEN);
    if (token) {
      setIsAuth(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const handleSignIn = (token: string, user: UserAPI) => {
    setCookie(COOKIES_TOKEN, `${token}`);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsUser(user);
    setIsAuth(true);
  };

  const handleLogout = () => {
    deleteCookie(COOKIES_TOKEN);
    delete axios.defaults.headers.common["Authorization"];
    setIsUser(null);
    setIsAuth(false);
  };

  const axiosWithAuth = axios.create({
    headers: {
      Authorization: `Bearer ${getCookie(COOKIES_TOKEN) || ""}`,
    },
  });

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        handleSignIn,
        handleLogout,
        axiosWithAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
