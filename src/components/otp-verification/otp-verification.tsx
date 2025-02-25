import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button/button";
import { Label } from "../ui/label/label";
import { OtpBreadcrumb } from "./otp-breadcrumb";
import { OtpNotes } from "./otp-notes";
import { WasteNotIcon } from "@/assets/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, OtpForm } from "@/types/otp";
import {
  Form,
  FormField,
} from "@/components/ui/form/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-opt/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp"

export interface OtpVerificationProps {
  email: string;
}
export function OtpVerification(props: OtpVerificationProps) {


  const form = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit: SubmitHandler<OtpForm> = (data) => console.log(data);

  return (
    <div className="bg-background flex flex-col w-[474px] p-[42px] gap-[36px]">
      <WasteNotIcon height={32} width={143.24} />
      <OtpBreadcrumb />
      <hr />
      <span className="font-bold text-sm text-left">I sent an email to {props.email}. Please enter the verification code provided.</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[36px] w-full mx-auto text-xs"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (

              <div className="flex flex-col gap-[6px]">
                <Label htmlFor="email" className="font-bold text-xs">Authentication code</Label>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  {...field}
                >
                  <InputOTPGroup className='font-medium text-md gap-[11px]' >
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                {form.formState.errors.pin && (<div className="text-(--error) text-xs mt-0.5">{form.formState.errors.pin.message}</div>)}
              </div>
            )}
          />
          <Button
            size='lg'
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >Send</Button>
        </form>
      </Form>
      <Link className="font-bold text-sm self-center" to="/sign-in">Edit email address</Link>
      <OtpNotes />
    </div>
  );
}
