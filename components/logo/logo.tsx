import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import { logoSizes } from "./logo-const";
import { routes } from "@/constants/routes";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = logoSizes.medium, className }: LogoProps) {
  return (
    <Link href={routes.home}>
      <Image
        src={logoImage}
        className={cn("cursor-pointer", className)}
        alt="Logo"
        width={size}
      />
    </Link>
  );
}
