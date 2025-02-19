import { Link } from "@tanstack/react-router";
import { links } from "./constants";
import { Profile } from "./profile";
import { Logout } from "./logout";

function Sidebar() {
  return (
    <div
      className="bg-background w-[156px] flex flex-col rounded-[5px]"
    >
      <Profile />
      {links.map((option) => (
        <Link
          key={option.to + option.label}
          className="[&.active]:bg-primary [&.active]:text-white flex items-center text-wrap gap-[8px] px-[9px] py-[3px] text-sm font-normal h-[48px]"
          to={option.to}
        >
          {({ isActive }) => (
            <>
              <option.icon
                className="flex-shrink-0"
                width={22}
                height={22}
                fill={isActive ? 'white' : 'none'}
              />
              <span className="flex-grow leading-[21px]">{option.label}</span>
            </>
          )}
        </Link>
      ))
      }
      <Logout />
    </div>
  );
}

export { Sidebar };
