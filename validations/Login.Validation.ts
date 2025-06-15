import { z } from "zod";

export type LoginForm = z.infer<typeof LoginSchema>;
export type RecoverPasswordForm = z.infer<typeof RecoverPasswordSchema>;

export const LoginSchema = z.object({
  email: z.string({required_error: "E-mail é obrigatório"}).email("E-mail Inválido"),
  password: z.string({required_error: "Senha é obrigatória"}).min(6, "Senha deve ter pelo menos 6 caracteres"),
  rememberMe: z.boolean().optional(),
});

export const RecoverPasswordSchema = z.object({
  email: z.string({required_error: "E-mail é obrigatório"}).email("E-mail Inválido"),
});
