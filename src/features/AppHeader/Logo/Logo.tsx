import Image from "next/image";
import Styles from "./Logo.module.scss";
import Link from "next/link";

export function Logo() {
  return (
    <div className={Styles.logo}>
      <Link className={Styles.link} href={"/"}>
        <Image src={"/twitter.svg"} alt="Twitter Logo" width={30} height={30} />
      </Link>
    </div>
  );
}
