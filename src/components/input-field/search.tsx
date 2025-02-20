import { Input } from "@/components/ui/input/input";
import { useState } from "react";
import { SearchIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

type SearchFieldProps = React.ComponentProps<typeof Input>;

export function SearchField({ className, ...props }: SearchFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <Input
        className={cn(className, "pl-10")}
        {...props}
        type="text"
        placeholder="Enter your password"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchIcon
        width={20}
        height={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        color={isFocused ? 'stroke-(--black)' : 'stroke-(--medium-gray)'}
      />
    </div>
  );
}
