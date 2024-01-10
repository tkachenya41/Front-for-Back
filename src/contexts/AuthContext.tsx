"use client";
import { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

export interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: (token: boolean) => void;
  handleSignIn: (token: string) => void;
  handleLogout: () => void;
  axiosWithAuth: AxiosInstance;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
