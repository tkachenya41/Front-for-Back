import Link from "next/link";

import Styles from "./Header.module.scss";
import { Button } from "@/components/Button/Button";

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
