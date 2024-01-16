import Link from "next/link";
import Styles from "./Categories.module.scss";

export function Categories() {
  return (
    <div className={Styles.container}>
      <Link href={"/sports"}>Sports</Link>
      <Link href={"/profile"}>Auto</Link>
      <Link href={"/post"}>Life</Link>
      <Link href={"/more"}>Motivation</Link>
    </div>
  );
}
