import Link from 'next/link';
import Styles from './SideBar.module.scss';
import { Button } from '@/components/Button/Button';
import { ButtonAppearance } from '@/components/Button/Button.types';
import Image from 'next/image';

export function SideBar() {
  return (
    <aside className={Styles.container}>
      <Link className={Styles.btn} href={'/'}>
        <div className={Styles.btnWrapper}>
          {<Image src={'./home.svg'} alt="profile" width={25} height={25} />}
          <p>Home</p>
        </div>
      </Link>

      <Link className={Styles.btn} href={'/profile'}>
        <div className={Styles.btnWrapper}>
          {<Image src={'./profile.svg'} alt="profile" width={25} height={25} />}
          <span>Profile</span>
        </div>
      </Link>
      <Link className={Styles.btn} href={'/post'}>
        <div className={Styles.btnWrapper}>
          {<Image src={'./post.svg'} alt="post" width={25} height={25} />}
          <span>Post</span>
        </div>
      </Link>
      <Link className={Styles.btn} href={'/more'}>
        <div className={Styles.btnWrapper}>
          {<Image src={'./more.svg'} alt="more" width={25} height={25} />}
          <span>More</span>
        </div>
      </Link>
    </aside>
  );
}
