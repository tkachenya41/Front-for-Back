"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

import { fetchUsers } from "@/api/fetchUsers";
import { UserAPI } from "@/api/User";
import { Users } from "@/features/Users/Users";

export default function Home() {
  const [users, setUsers] = useState<UserAPI[]>([]);
  useEffect(() => {
    (async function () {
      const data = await fetchUsers();
      setUsers(data);
    })();
  }, []);
  return (
    <main className={styles.main}>{users && <Users users={users} />}</main>
  );
}
