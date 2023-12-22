import axios, { AxiosError } from "axios";

import { API_URL } from "./constants";
import { SignAPI } from "./User";

export async function fetchSign(): Promise<SignAPI> {
  try {
    const url = `${API_URL}/sign`;
    const { data } = await axios<SignAPI>(url);
    return data;
  } catch (err) {
    throw err instanceof AxiosError ? err.response?.data : err;
  }
}
