import Link from "next/link";
import Styles from "./SideBar.module.scss";
import { Button } from "@/components/Button/Button";
import { ButtonAppearance } from "@/components/Button/Button.types";
import Image from "next/image";

export function SideBar() {
  return (
    <aside className={Styles.container}>
      <Link className={Styles.btn} href={"/"}>
        {<Image src={"./home.svg"} alt="profile" width={25} height={25} />}
        <span>Home</span>
      </Link>

      <Link className={Styles.btn} href={"/profile"}>
        {<Image src={"./profile.svg"} alt="profile" width={25} height={25} />}
        <span>Profile</span>
      </Link>
      <Link className={Styles.btn} href={"/post"}>
        {<Image src={"./post.svg"} alt="post" width={25} height={25} />}
        <span>Post</span>
      </Link>
      <Link className={Styles.btn} href={"/more"}>
        {<Image src={"./more.svg"} alt="more" width={25} height={25} />}
        <span>More</span>
      </Link>
    </aside>
  );
}
