import { z } from 'zod'

export const SignInFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type SignInFormSchema = z.infer<typeof SignInFormSchema>
