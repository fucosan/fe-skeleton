import { useState } from "react";
import { Input } from "@/components/ui/input/input";
import { EyeIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

type PasswordFieldProps = React.ComponentProps<typeof Input>;

export function PasswordField({ className, ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        className={cn(className, "pr-10")}
        {...props}
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
      />
      <EyeIcon
        width={20}
        height={20}
        onClick={() => setShowPassword(prev => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        fill={showPassword ? "#EE5555" : "black"}
      />
    </div>
  );
}
