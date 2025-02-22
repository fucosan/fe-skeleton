import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { Label } from "@/components/ui/label/label";
import { PasswordField } from "@/components/input-field/password";
import { ForgotPassword } from "./forgot-password";
import { SignInFormSchema } from "@/schema/sign-in";
import { useSignInMutation } from "@/queries/sign-in-mutation";

export function SignIn() {

  const signInMutation = useSignInMutation();

  return (
    <div className="bg-background flex flex-col w-[474px] mih-h-[475px] p-[42px] flex flex-col gap-[36px]">
      <span className='text-[22px] font-bold'>Login</span>
      <hr />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={toFormikValidationSchema(SignInFormSchema)}
        onSubmit={async (values) => {
          await signInMutation.mutateAsync(values)
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="flex flex-col gap-[36px] w-full mx-auto text-xs">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="font-bold text-xs">Email</Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="mt-[6px] font-sm"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs mt-0.5">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="font-bold text-xs">Password</Label>
              <PasswordField
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="mt-[6px] font-sm"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-xs mt-0.5">{errors.password}</div>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              move on
            </Button>
          </Form>
        )}
      </Formik>
      <ForgotPassword />
    </div>
  );
}
