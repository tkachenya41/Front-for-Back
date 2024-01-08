import axios, { AxiosResponse } from "axios";

import { API_URL } from "./constants";
import { RegisterAPI } from "./User";

export async function fetchRegister(user: RegisterAPI): Promise<string> {
  const url = `${API_URL}/auth/register`;
  const { data } = await axios.post<string, AxiosResponse<string>, RegisterAPI>(
    url,
    user
  );
  return data;
}
