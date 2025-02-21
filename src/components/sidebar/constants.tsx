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
  { to: '/in-store-purchase', label: 'In-Store Purchase', icon: StoreIcon },
  { to: '/home-delivery-purchase', label: 'Home delivery purchase', icon: PackageIcon },
  { to: '/on-site-purchase', label: 'On-site purchase', icon: PersonIcon },
  {
    to: '/reference-purchase-product',
    label: (
      <span className="inline" >
        Reference < span className="block whitespace-nowrap" > purchase product</ span >
      </span>
    ),
    icon: WatchIcon
  },
  { to: '/backorder-management', label: 'Backorder management', icon: CartIcon },
  { to: '/store-management', label: 'Store management', icon: StoreIcon },
  { to: '/brand-management', label: 'Brand management', icon: ShoppingModeIcon },
  { to: '/news-management', label: 'News management', icon: NewsIcon },
  { to: '/members', label: 'Member list', icon: PersonIcon },
  { to: '/coupon-management', label: 'Coupon management', icon: WorkspacePremiumIcon },
  { to: '/administrators', label: 'Administrator list', icon: PersonIcon },
  { to: '/setting', label: 'Setting', icon: SettingIcon },
]);

export type Links = typeof links;
