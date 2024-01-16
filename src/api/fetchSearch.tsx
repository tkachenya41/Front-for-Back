import { AxiosError, AxiosInstance } from "axios";
import { API_URL, ResponseAPI } from "./constants";

export async function fetchSearch(
  axiosInstance: AxiosInstance,
  query: string
): Promise<ResponseAPI> {
  const url = `${API_URL}/?name=${query}`;
  const { data } = await axiosInstance.get<ResponseAPI>(url);
  return data;
}
