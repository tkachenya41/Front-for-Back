import axios, { AxiosResponse } from "axios";

import { API_URL } from "./constants";
import { SignAPI, SignResponse } from "./User";

export async function fetchSign(user: SignAPI): Promise<SignResponse> {
  const url = `${API_URL}/auth/sign`;
  const { data } = await axios.post<
    SignResponse,
    AxiosResponse<SignResponse>,
    SignAPI
  >(url, user);
  return data;
}
