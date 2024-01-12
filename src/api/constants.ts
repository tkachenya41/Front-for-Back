import { z } from "zod";
import { schemaUserAPI } from "./User";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const schemaResponseAPI = z.array(schemaUserAPI);

export type ResponseAPI = z.infer<typeof schemaResponseAPI>;

export const COOKIES_TOKEN = "token";
