import { z } from "zod";

export const schemaUserAPI = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
  name: z.string(),
  role: z.string(),
});

export const schemaRegisterAPI = schemaUserAPI.omit({ id: true, role: true });

export const schemaSignAPI = schemaRegisterAPI.omit({ role: true, name: true });

export type UserAPI = z.infer<typeof schemaUserAPI>;

export type RegisterAPI = z.infer<typeof schemaRegisterAPI>;

export type SignAPI = z.infer<typeof schemaSignAPI>;
