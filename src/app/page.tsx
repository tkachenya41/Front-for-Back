"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

import { fetchUsers } from "@/api/fetchUsers";
import { UserAPI } from "@/api/User";
import { Users } from "@/features/Users/Users";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const [users, setUsers] = useState<UserAPI[]>([]);
  const { isAuth, axiosWithAuth } = useAuth();
  useEffect(() => {
    (async function () {
      const data = await fetchUsers(axiosWithAuth);
      setUsers(data);
    })();
  }, [isAuth]);
  return (
    <main className={styles.main}>
      {isAuth && users && <Users users={users} />}
    </main>
  );
}
