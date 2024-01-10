import { AxiosError, AxiosInstance } from "axios";
import { API_URL, ResponseAPI } from "./constants";

export async function fetchUsers(
  axiosInstance: AxiosInstance
): Promise<ResponseAPI> {
  try {
    const url = `${API_URL}/users`;
    const { data } = await axiosInstance.get<ResponseAPI>(url);
    return data;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      return err.response.data;
    } else {
      return [];
    }
  }
}
