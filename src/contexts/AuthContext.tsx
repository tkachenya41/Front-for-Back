import { UserAPI } from "@/api/User";
import { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

export interface AuthContextProps {
  isAuth: boolean;
  user: UserAPI | null;
  setIsAuth: (token: boolean) => void;
  handleSignIn: (token: string, user: UserAPI) => void;
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
