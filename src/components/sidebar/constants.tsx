import { linkOptions, } from "@tanstack/react-router";
import {
  StoreIcon,
  PackageIcon,
  PersonIcon,
  WatchIcon,
  CartIcon,
  ShoppingModeIcon,
  NewsIcon,
  WorkspacePremiumIcon,
  SettingIcon
} from "@/assets/icons";

export const links = linkOptions([
  { to: '/', label: 'In-Store Purchase', icon: StoreIcon },
  { to: '/about', label: 'Home delivery purchase', icon: PackageIcon },
  { to: '/about', label: 'On-site purchase', icon: PersonIcon },
  {
    to: '/about',
    label: (
      <span className="inline" >
        Reference < span className="block whitespace-nowrap" > purchase product</ span >
      </span>
    ),
    icon: WatchIcon
  },
  { to: '/about', label: 'Backorder management', icon: CartIcon },
  { to: '/about', label: 'Store management', icon: StoreIcon },
  { to: '/about', label: 'Brand management', icon: ShoppingModeIcon },
  { to: '/about', label: 'News management', icon: NewsIcon },
  { to: '/about', label: 'Member list', icon: PersonIcon },
  { to: '/about', label: 'Coupon management', icon: WorkspacePremiumIcon },
  { to: '/about', label: 'Administrator list', icon: PersonIcon },
  { to: '/about', label: 'Setting', icon: SettingIcon },
]);

export type Links = typeof links;
