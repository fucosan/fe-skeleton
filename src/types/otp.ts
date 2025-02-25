import { z } from 'zod'

export const otpSchema = z.object({
  pin: z.string().min(4, {
    message: 'OTP code must be 4 numbers.',
  }),
})

export type OtpForm = z.infer<typeof otpSchema>
