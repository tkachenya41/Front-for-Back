import Link from "next/link";
import Styles from "./SideBar.module.scss";
import HomeIcon from "@/components/Icons/Home";
import ProfileIcon from "@/components/Icons/Profile";
import MoreIcon from "@/components/Icons/More";
import PostIcon from "@/components/Icons/Post";

export function SideBar() {
  return (
    <aside className={Styles.container}>
      <Link className={Styles.link} href={"/"}>
        <div className={Styles.linkWrapper}>
          <HomeIcon className={Styles.icon} />
          <p>Home</p>
        </div>
      </Link>

      <Link className={Styles.link} href={"/profile"}>
        <div className={Styles.linkWrapper}>
          <ProfileIcon className={Styles.icon} />
          <span>Profile</span>
        </div>
      </Link>
      <Link className={Styles.link} href={"/post"}>
        <div className={Styles.linkWrapper}>
          <PostIcon className={Styles.icon} />
          <span>Post</span>
        </div>
      </Link>
      <Link className={Styles.link} href={"/more"}>
        <div className={Styles.linkWrapper}>
          <MoreIcon className={Styles.icon} />
          <span>More</span>
        </div>
      </Link>
    </aside>
  );
}
