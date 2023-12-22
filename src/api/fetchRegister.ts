import axios, { AxiosError } from "axios";

import { API_URL } from "./constants";
import { RegisterAPI } from "./User";

export async function fetchRegister(): Promise<RegisterAPI> {
  try {
    const url = `${API_URL}/register`;
    const { data } = await axios<RegisterAPI>(url);
    return data;
  } catch (err) {
    throw err instanceof AxiosError ? err.response?.data : err;
  }
}
