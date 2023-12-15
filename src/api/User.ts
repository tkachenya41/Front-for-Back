import { z } from "zod";

export const schemaUserAPI = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
  name: z.string(),
  role: z.string(),
});

export type UserAPI = z.infer<typeof schemaUserAPI>;
