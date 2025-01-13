import { cn } from "@/lib/utils";
import { FaInstagram } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import { RefAttributes } from "react";
import { colors } from "@/constants/colors";

interface SwIconProps {
  name: string;
  id?: string;
  size?: number;
  alt?: string;
  color?: string;
  className?: string;
}

export const iconNames = {
  instagram: "instagram",
};

export type IconName = (typeof iconNames)[keyof typeof iconNames];

const iconMap: Record<
  IconName,
  React.ComponentType<IconBaseProps & RefAttributes<SVGSVGElement>>
> = {
  instagram: FaInstagram,
};

export function SwIcon({
  name,
  color = colors.grey,
  size = 24,
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
