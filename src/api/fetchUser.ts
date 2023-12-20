import axios, { AxiosError } from "axios";

import { API_URL } from "./constants";
import { UserAPI } from "./User";

export async function fetchUser(id: number): Promise<UserAPI> {
  try {
    const url = `${API_URL}/users/${id}`;
    const { data } = await axios<UserAPI>(url);
    return data;
  } catch (err) {
    throw err instanceof AxiosError ? err.response?.data : err;
  }
}
