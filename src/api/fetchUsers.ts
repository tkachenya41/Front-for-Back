import axios, { AxiosError } from "axios";
import { API_URL, ResponseAPI } from "./constants";

export async function fetchUsers(): Promise<ResponseAPI> {
  try {
    const url = `${API_URL}/users`;
    const { data } = await axios<ResponseAPI>(url);
    return data;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      return err.response.data;
    } else {
      return [];
    }
  }
}
