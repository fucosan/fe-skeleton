import { LogoutIcon } from "@/assets/icons";
import { Link } from "@tanstack/react-router";

export function Logout() {
  return (
    <div className="min-h-[50px] flex items-center justify-center gap-[8px] text-sm border-t border-accent">
      <Link
        to="."
        className="flex items-center gap-[8px]"
      >
        <LogoutIcon /> Logout
      </Link>
    </div>
  );
}
