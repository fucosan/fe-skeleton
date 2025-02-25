import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button/button";
import { EMAIL } from "@/lib/constants";

export default function OtpError() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-2xl font-bold">Ups something went wrong</h1>
      <p className="text-xl text-(--dark-gray)">Please try to re-sign-in on this page</p>
      <Button
        onClick={() => {
          router.navigate({ to: '/sign-in' });
          sessionStorage.removeItem(EMAIL);
        }}
      > Go to Sign In Page
      </Button>
    </div>
  )
}
