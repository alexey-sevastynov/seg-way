import { cn } from "@/lib/utils";
import Link from "next/link";

interface SwLinkProps {
  children: string;
  href?: string;
  className?: string;
}

export function SwLink({ href = "/", className, children }: SwLinkProps) {
  return (
    <Link
      href={href}
      className={cn("cursor-pointer hover:underline", className)}
    >
      {children}
    </Link>
  );
}
