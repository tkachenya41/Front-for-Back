"use client";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { UserAPI } from "@/api/User";
import { COOKIES_TOKEN, USER_INFO } from "@/api/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setIsUser] = useState<UserAPI | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie(COOKIES_TOKEN);
    const storedUser = getCookie(USER_INFO);

    if (token) {
      setIsAuth(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (!user && storedUser) {
        const decodedUser = JSON.parse(decodeURIComponent(storedUser));
        setIsUser(decodedUser);
      }

      setIsAuth(true);
    }
  }, [user]);

  const handleSignIn = (token: string, user: UserAPI) => {
    setCookie(COOKIES_TOKEN, `${token}`);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsUser(user);
    setCookie(USER_INFO, JSON.stringify(user));
    setIsAuth(true);
    router.push("/");
  };

  const handleLogout = () => {
    deleteCookie(COOKIES_TOKEN);
    deleteCookie(USER_INFO);
    delete axios.defaults.headers.common["Authorization"];
    toast.success("You are logged out");
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
