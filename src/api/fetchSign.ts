import axios, { AxiosResponse } from "axios";

import { API_URL } from "./constants";
import { SignAPI } from "./User";

export async function fetchSign(user: SignAPI): Promise<string> {
  const url = `${API_URL}/auth/sign`;
  const { data } = await axios.post<string, AxiosResponse<string>, SignAPI>(
    url,
    user
  );
  return data;
}
