import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button/button";
import { Label } from "../ui/label/label";
import { OtpBreadcrumb } from "./otp-breadcrumb";
import { OtpInputVerification } from "./otp-input-verification";
import { OtpNotes } from "./otp-notes";

export function OtpVerification() {
  return (
    <div className="bg-background flex flex-col w-[474px] h-[775px] p-[42px] gap-[36px]">
      <OtpBreadcrumb />
      <hr />
      <span className="font-bold text-sm text-left">I sent an email to user@brandrevalue.com. Please enter the verification code provided.</span>
      <div className="flex flex-col gap-[6px]">
        <Label htmlFor="email" className="font-bold text-xs">Authentication code</Label>
        <OtpInputVerification />
      </div>
      <Button size='lg'>Send</Button>
      <Link className="font-bold text-sm self-center" to="/sign-in">Edit email address</Link>
      <OtpNotes />
    </div>
  );
}
