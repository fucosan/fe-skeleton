import { WasteNotIcon, NotificationIcon } from "@/assets/icons";

export function Header() {
  return (
    <div
      className="w-full pl-[14px] pr-[30px] py-[8px] flex justify-between items-center "
    >
      <WasteNotIcon />
      <NotificationIcon />
    </div>
  );
}
