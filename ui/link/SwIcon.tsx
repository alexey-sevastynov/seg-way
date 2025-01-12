import Image from "next/image";
import { cn } from "@/lib/utils";
import CartIconWhite from "@/assets/images/cart.svg";
import CartIconBlack from "@/assets/images/cart-black.svg";
import InstagramIconWhite from "@/assets/images/instagram.svg";
import InstagramIconBlack from "@/assets/images/instagram-black.svg";
import logoBlack from "@/assets/images/logo-black.svg";
import PhoneIconBlack from "@/assets/images/phone-black.svg";

interface SwIconProps {
  name: string;
  id?: string;
  size?: number;
  alt?: string;
  color?: string;
  className?: string;
}

export const iconNames = {
  cartWhite: "cartWhite",
  instagramWhite: "instagramWhite",
  logoBlack: "logoBlack",
  cartBlack: "cartBlack",
  instagramBlack: "instagramBlack",
  phoneBlack: "phoneBlack",
};

export type IconName = (typeof iconNames)[keyof typeof iconNames];

const iconMap: Record<IconName, string> = {
  cartWhite: CartIconWhite,
  instagramWhite: InstagramIconWhite,
  logoBlack: logoBlack,
  cartBlack: CartIconBlack,
  instagramBlack: InstagramIconBlack,
  phoneBlack: PhoneIconBlack,
};

export function SwIcon({
  id = "",
  name,
  alt = "icon",
  size = 24,
  className,
}: SwIconProps) {
  if (name in iconMap) {
    const src = iconMap[name];

    return (
      <Image
        id={id}
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={cn(className)}
      />
    );
  } else {
    return null;
  }
}
