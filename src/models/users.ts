import { z } from "zod";

const userBaseSchema = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string().email(),
});

export const userLoginSchema = z.object({
  email: z.string(),
  contrasenia: z.string(),
});

export const userSchema = userBaseSchema.extend({
  id: z.number(),
});

export const userLoginResponseSchema = userSchema.extend({
  token: z.string(),
});

export const userRegisterSchema = userBaseSchema.extend({
  contrasenia: z.string().min(8),
});

export type UserRegister = z.infer<typeof userRegisterSchema>;

export type UserLogin = z.infer<typeof userLoginSchema>;

export type User = z.infer<typeof userSchema>;

export type UserLoginResponse = z.infer<typeof userLoginResponseSchema>;
