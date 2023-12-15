import axios, { AxiosError } from "axios";
import { API_URL, ResponseAPI, config } from "./constants";

export async function fetchUsers(): Promise<ResponseAPI> {
  try {
    const url = `${API_URL}/users`;
    const { data } = await axios<ResponseAPI>(url, config);
    return data;
  } catch (err) {
    throw err instanceof AxiosError ? err.response?.data : err;
  }
}
