import Link from "next/link";
import { Button } from "../Button/Button";
import Styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={Styles.header}>
      <Button>
        <Link href={"/sign-up"}>Sign Up</Link>
      </Button>
      <Button>
        <Link href={"/sign-in"}>Sign In</Link>
      </Button>
    </header>
  );
}
