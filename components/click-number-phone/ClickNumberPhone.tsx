import { iconNames, SwIcon } from "@/ui/icon/SwIcon";
import { cn } from "@/lib/utils";
import { phoneNumber, phoneNumberText } from "./click-number-phone-constants";

interface ClickNumberPhoneProps {
  isIconLink?: boolean;
  className?: string;
}

export function ClickNumberPhone({
  isIconLink,
  className,
}: ClickNumberPhoneProps) {
  return (
    <a
      href={"tel:" + phoneNumber}
      className={cn("text-white hover:underline", className)}
    >
      {isIconLink ? <SwIcon name={iconNames.phoneBlack} /> : phoneNumberText}
    </a>
  );
}
