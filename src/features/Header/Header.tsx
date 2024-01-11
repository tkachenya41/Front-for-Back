"use client";
"use client";
import Link from "next/link";

import { Content } from "./Content/Content";
import Styles from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { SearchPanel } from "./SearchPanel/SearchPanel";

export function Header() {
  return (
    <header className={Styles.header}>
      <Logo />
      <Content />
      <SearchPanel />
    </header>
  );
}
