"use client";

import Styles from "./page.module.scss";
import { useState } from "react";
import { fetchUsers } from "@/api/fetchUsers";
import { UserAPI } from "@/api/User";
import { Users } from "@/features/Users/Users";
import { useAuth } from "@/contexts/AuthContext";
import { useAsyncEffect } from "use-async-effect";
import { ViewerContent } from "@/features/ViewerContent/ViewerContent";

export default function Home() {
  const [users, setUsers] = useState<UserAPI[] | null>(null);
  const { isAuth, axiosWithAuth } = useAuth();
  useAsyncEffect(
    async (isMounted) => {
      if (isAuth) {
        const data = await fetchUsers(axiosWithAuth);
        if (!isMounted()) return;
        setUsers(data);
      }
    },
    [isAuth]
  );
  return (
    <main className={Styles.main}>
      {users ? <Users users={users} /> : <ViewerContent />}
    </main>
  );
}
