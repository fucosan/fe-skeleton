import { z } from 'zod'

export const OTPSchema = z.object({
  code: z.string().min(4).max(4),
})

export type OTPSchema = z.infer<typeof OTPSchema>
