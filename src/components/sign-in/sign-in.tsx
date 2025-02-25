import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { Label } from "@/components/ui/label/label";
import { PasswordField } from "@/components/input-field/password";
import { ForgotPassword } from "./forgot-password";
import { signInFormSchema, SignInForm } from "@/types/sign-in";
import { useSignInMutation } from "@/queries/sign-in-mutation";
import { WasteNotIcon } from "@/assets/icons";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from "@/lib/utils";

export function SignIn() {
  const signInMutation = useSignInMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInForm> = async (data) => await signInMutation.mutateAsync(data);

  const handleClearError = () => {
    if (signInMutation.isError) {
      signInMutation.reset()
    }
  }

  return (
    <div className="bg-background flex flex-col w-[474px] mih-h-[475px] p-[42px] flex flex-col gap-[36px]">
      <WasteNotIcon height={32} width={143.24} />
      <span className='text-[22px] font-bold'>Login</span>
      <hr />
      <div className="text-(--error) text-xs absolute top-50">
        {signInMutation.isError && 'Wrong email or password'}
      </div>
      <form
        className="flex flex-col gap-[36px] w-full mx-auto text-xs"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleClearError}
      >
        <div>
          <Label htmlFor="email" className="font-bold text-xs">Email</Label>
          <Input
            errors={!!errors.email}
            className={cn("mt-[6px] font-sm")}
            placeholder="Enter email address"
            autoComplete="off"
            {...register("email")}
          />
          {errors.email && (
            <div className="text-(--error) text-xs mt-0.5">{errors.email.message}</div>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="font-bold text-xs">Password</Label>
          <PasswordField
            placeholder="Enter password"
            className="mt-[6px] font-sm"
            {...register("password")}
          />
        </div>
        <Button
          className="w-full"
          disabled={isSubmitting || signInMutation.isError}
          type="submit"
        >
          {isSubmitting ? 'moving on....' : 'move on'}
        </Button>
      </form>
      <ForgotPassword />
    </div>
  );
}
