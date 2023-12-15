import axios from "axios";

import { API_URL, config } from "./constants";
import { UserAPI } from "./User";

export async function fetchUser(id: number): Promise<UserAPI> {
  const { data } = await axios<UserAPI>(`${API_URL}/users/${id}`, config);

  return data;
}
