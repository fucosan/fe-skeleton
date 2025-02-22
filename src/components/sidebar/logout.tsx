import { LogoutIcon } from "@/assets/icons";
import { useSignOutMutation } from "@/queries/sign-out-mutation";
import { Link } from "@tanstack/react-router";

export function Logout() {
  const useSignOut = useSignOutMutation();

  return (
    <div className="min-h-[50px] flex items-center justify-center gap-[8px] text-sm border-t border-accent">
      <Link
        to="."
        className="flex items-center gap-[8px]"
        onClick={async () => await useSignOut.mutateAsync()}
      >
        <LogoutIcon /> Logout
      </Link>
    </div>
  );
}
