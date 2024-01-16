"use client";

import Styles from "./page.module.scss";
import { useState } from "react";
import { fetchUsers } from "@/api/fetchUsers";
import { UserAPI } from "@/api/User";
import { Users } from "@/features/Users/Users";
import { useAuth } from "@/contexts/AuthContext";
import { useAsyncEffect } from "use-async-effect";
import { ViewerContent } from "@/features/ViewerContent/ViewerContent";
import { useSearchParams } from "next/navigation";
import { fetchSearch } from "@/api/fetchSearch";
import { AxiosError } from "axios";

export default function Home() {
  const [users, setUsers] = useState<UserAPI[]>([]);
  const [error, setError] = useState("");

  const { isAuth, axiosWithAuth } = useAuth();

  const query = useSearchParams();
  const currentSearchQuery = query.get("name") || "";

  useAsyncEffect(
    async (isMounted) => {
      let data;

      if (isAuth) {
        try {
          currentSearchQuery
            ? (data = await fetchSearch(axiosWithAuth, currentSearchQuery))
            : (data = await fetchUsers(axiosWithAuth));

          if (!isMounted()) return;

          setUsers(data);
        } catch (err) {
          setError(err instanceof AxiosError ? err.response?.data : err);
        }
      }
    },
    [isAuth, currentSearchQuery]
  );
  return (
    <main className={Styles.main}>
      {currentSearchQuery && (
        <h3>Results of searching '{currentSearchQuery}'</h3>
      )}
      {error && <div className={Styles.error}>{error}</div>}
      {users ? <Users users={users} /> : <ViewerContent />}
    </main>
  );
}
