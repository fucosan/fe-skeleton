import { linkOptions, } from "@tanstack/react-router";
import { StoreIcon, PackageIcon } from "@/assets/icons";

export const links = linkOptions([
  { to: '/', label: 'In-Store Purchase', icon: StoreIcon },
  { to: '/about', label: 'Home delivery purchase', icon: StoreIcon },
  { to: '/about', label: 'On-site purchase', icon: StoreIcon },
  {
    to: '/about',
    label: (
      <span className="inline" >
        Reference < span className="block whitespace-nowrap" > purchase product</ span >
      </span>
    ),
    icon: PackageIcon
  },
  { to: '/about', label: 'Backorder management', icon: StoreIcon },
  { to: '/about', label: 'Store management', icon: StoreIcon },
  { to: '/about', label: 'Brand management', icon: StoreIcon },
  { to: '/about', label: 'News management', icon: StoreIcon },
  { to: '/about', label: 'Member list', icon: StoreIcon },
  { to: '/about', label: 'Coupon management', icon: StoreIcon },
  { to: '/about', label: 'Administrator list', icon: StoreIcon },
  { to: '/about', label: 'Setting', icon: StoreIcon },
]);

export type Links = typeof links;
