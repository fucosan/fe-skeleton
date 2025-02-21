import { z } from 'zod'

export const SignInFormSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export type SignInFormSchema = z.infer<typeof SignInFormSchema>
