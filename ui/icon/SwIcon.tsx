import { cn } from "@/lib/utils";
import { FaInstagram } from "react-icons/fa";
import { BsCart3, BsTelephone } from "react-icons/bs";
import { IconBaseProps } from "react-icons";
import { RefAttributes } from "react";
import { colors } from "@/constants/colors";
import { IconName, iconSizes } from "./icon-const";

interface SwIconProps {
  name: string;
  id?: string;
  size?: number;
  alt?: string;
  color?: string;
  className?: string;
}

const iconMap: Record<
  IconName,
  React.ComponentType<IconBaseProps & RefAttributes<SVGSVGElement>>
> = {
  instagram: FaInstagram,
  cart: BsCart3,
  phone: BsTelephone,
};

export function SwIcon({
  name,
  color = colors.grey,
  size = iconSizes.medium,
  className,
}: SwIconProps) {
  if (name in iconMap) {
    const IconComponent = iconMap[name];

    return (
      <IconComponent
        className={cn(className)}
        color={color}
        size={size}
      />
    );
  } else {
    return null;
  }
}
