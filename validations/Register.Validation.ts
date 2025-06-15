import { number, z } from "zod";

export type RegisterForm = z.infer<typeof RegisterSchema>;
export type RegisterForm1 = z.infer<typeof RegisterSchema1>;
export type RegisterForm2 = z.infer<typeof RegisterSchema2>;
export type RegisterForm3 = z.infer<typeof RegisterSchema3>;

export const RegisterSchema = z.object({
    stateAndCity: z.string({ required_error: "Estado e cidade obrigatórios" }),
    cep: z.string({ required_error: "CEP é obrigatório" }).min(9, "CEP inválido").max(9, "CEP inválido"),
    street: z.string({ required_error: "Logradouro é obrigatório" }),
    number: z.string({ required_error: "Número é obrigatório" }),
    complement: z.string().optional(),
});

export const RegisterSchema1 = z.object({
    name: z.string({ required_error: "Nome é obrigatório" }),
    surname: z.string({ required_error: "Sobrenome é obrigatório" }),
    celphone: z.string({ required_error: "Número de celular é obrigatório" }).min(14, "Número de celular inválido").max(15, "Número de celular inválido"),
    telephone: z.string().optional().refine((value) => {
      if (!value) return true;
      return value.length >= 14 && value.length <= 15;
      }, {
      message: "Número de telefone inválido",
  }),
});

export const RegisterSchema2 = z.object({
  email: z.string({ required_error: "E-mail é obrigatório" }).email("E-mail inválido"),
  username: z.string({ required_error: "Nome de usuário é obrigatório" }),
  password: z.string({ required_error: "Senha é obrigatória" }).min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string({ required_error: "Confirmação de senha é obrigatória" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas devem ser iguais",
  path: ["confirmPassword"], 
});

export const RegisterSchema3 = z.object({
  profilePicture: z.string().optional(),
})