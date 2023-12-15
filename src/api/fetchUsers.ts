import axios from "axios";
import { API_URL, ResponseAPI, config } from "./constants";

export async function fetchUsers(): Promise<ResponseAPI> {
  const url = `${API_URL}/users`;
  const { data } = await axios<ResponseAPI>(url, config);

  return data;
}
