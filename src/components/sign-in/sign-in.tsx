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
import { Form, FormField } from "../ui/form/form";

export function SignIn() {
  const signInMutation = useSignInMutation();

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { formState: { errors, isSubmitting, isLoading } } = form;

  const onSubmit: SubmitHandler<SignInForm> = async (data) => await signInMutation.mutateAsync(data);

  const handleClearError = () => {
    if (signInMutation.isError) {
      signInMutation.reset()
    }
  }
  const loading = isSubmitting || signInMutation.isPending || isLoading;

  return (
    <div className="bg-background flex flex-col w-[474px] mih-h-[475px] p-[42px] flex flex-col gap-[36px]">
      <WasteNotIcon height={32} width={143.24} />
      <span className='text-[22px] font-bold'>Login</span>
      <hr />
      <div className="text-(--error) text-xs absolute top-50">
        {signInMutation.isError && 'Wrong email or password'}
      </div>
      <Form
        {...form}
      >
        <form
          className="flex flex-col gap-[36px] w-full mx-auto text-xs"
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={handleClearError}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div>
                <Label htmlFor="email" className="font-bold text-xs">Email</Label>
                <Input
                  errors={!!errors.email}
                  className={cn("mt-[6px] font-sm")}
                  placeholder="Enter email address"
                  autoComplete="off"
                  disabled={loading}
                  {...field}
                />
                {errors.email && (
                  <div className="text-(--error) text-xs mt-0.5">{errors.email.message}</div>
                )}
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div>
                <Label htmlFor="password" className="font-bold text-xs">Password</Label>
                <PasswordField
                  placeholder="Enter password"
                  className="mt-[6px] font-sm"
                  disabled={loading}
                  {...field}
                />
              </div>
            )}
          />
          <Button
            className="w-full"
            disabled={loading}
            type="submit"
          >
            {loading ? 'moving on....' : 'move on'}
          </Button>
        </form>
      </Form>
      <ForgotPassword />
    </div>
  );
}
