"use client";

import { Content } from "./Content/Content";
import Styles from "./AppHeader.module.scss";
import { Logo } from "./Logo/Logo";
import { SearchPanel } from "./SearchPanel/SearchPanel";

export function AppHeader() {
  return (
    <header className={Styles.header}>
      <Logo />
      <Content />
      <SearchPanel />
    </header>
  );
}
