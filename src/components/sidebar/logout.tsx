import { LogoutIcon } from "@/assets/icons";
import { useSignOutMutation } from "@/queries/sign-out-mutation";

export function Logout() {
  const useSignOut = useSignOutMutation();

  return (
    <div className="min-h-[50px] flex items-center justify-center gap-[8px] text-sm border-t border-accent">
      <div
        className="flex items-center gap-[8px] cursor-pointer"
        onClick={async () => await useSignOut.mutateAsync()}
      >
        <LogoutIcon /> Logout
      </div>
    </div>
  );
}
