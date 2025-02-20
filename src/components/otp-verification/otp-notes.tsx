import GmailError from "@/assets/icons/gmail-error";
import { Button } from "../ui/button/button";

export function OtpNotes() {
  return (
    <div className="flex flex-col bg-muted rounded-md p-[20px] space-y-[16px]">
      <div className="flex items-center gap-1">
        <GmailError />
        <span className="font-bold text-sm">
          Those who do not receive the email
        </span>
      </div>
      <hr />
      <span className="text-sm">
        メールが迷惑メールフォルダに振り分けられる場合がありますので、すべてのフォルダをご確認ください。迷惑メールフォルダにもない場合は、再送信をお願いいたします。
      </span>
      <Button variant={'outline'}>Resend email</Button>
    </div>
  );
}
