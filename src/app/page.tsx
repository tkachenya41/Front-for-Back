"use client";

import Styles from "./page.module.scss";
import { useState } from "react";
import { fetchUsers } from "@/api/fetchUsers";
import { UserAPI } from "@/api/User";
import { Users } from "@/features/Users/Users";
import { useAuth } from "@/contexts/AuthContext";
import { useAsyncEffect } from "use-async-effect";

export default function Home() {
  const [users, setUsers] = useState<UserAPI[]>([]);
  const { isAuth, axiosWithAuth } = useAuth();
  useAsyncEffect(
    async (isMounted) => {
      const data = await fetchUsers(axiosWithAuth);
      if (!isMounted()) return;
      setUsers(data);
    },
    [isAuth]
  );
  return (
    <main className={Styles.main}>
      {isAuth && users && <Users users={users} />}
    </main>
  );
}
