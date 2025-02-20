import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-opt/input-otp"

export function OtpInputVerification() {
  return (
    <InputOTP
      maxLength={6}
      inputMode='numeric'
    >
      <InputOTPGroup className='font-medium text-md gap-[11px]' >
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}


