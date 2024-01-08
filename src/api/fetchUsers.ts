"use server";
import axios, { AxiosError } from "axios";
import { API_URL, ResponseAPI } from "./constants";
import { cookies } from "next/headers";

export async function fetchUsers(): Promise<ResponseAPI> {
  try {
    const url = `${API_URL}/users`;
    cookies().set(
      "token",
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQURNSU4iLCJlbWFpbCI6ImFkbWluaXVAZ21haWwuY29tIn0.iBAs48TX-td6JOwQzsT8xm4jxZ2oxmMNrvacQxvxbo0`
    );
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookies().get(
      "token"
    )?.value}`;
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
