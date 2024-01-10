"use client";
import Link from "next/link";

import Styles from "./Header.module.scss";
import { Button } from "@/components/Button/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export function Header() {
  const { isAuth, handleLogout } = useAuth();
  const router = useRouter();

  return (
    <header className={Styles.header}>
      {isAuth ? (
        <>
          <Button
            onClick={() => {
              handleLogout();
              router.push("/");
            }}
          >
            LogOut
          </Button>
        </>
      ) : (
        <>
          <Button>
            <Link href={"/sign-up"}>Sign Up</Link>
          </Button>
          <Button>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </>
      )}
    </header>
  );
}
