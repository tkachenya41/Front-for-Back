import { Button } from "@/components/Button/Button";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Styles from "./Content.module.scss";

export const Content = () => {
  const { isAuth, handleLogout } = useAuth();
  const router = useRouter();
  return (
    <div className={Styles.container}>
      {isAuth ? (
        <>
          <Button
            onClick={() => {
              handleLogout();
              router.push("/");
            }}
          >
            Log Out
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
    </div>
  );
};
