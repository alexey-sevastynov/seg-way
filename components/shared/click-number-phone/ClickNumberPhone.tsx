import { SwIcon } from "@/ui/icon/SwIcon";
import { iconNames } from "@/ui/icon/icon-const";
import { cn } from "@/lib/utils";
import {
    phoneNumber,
    phoneNumberText,
} from "@/components/shared/click-number-phone/click-number-phone-constants";

interface ClickNumberPhoneProps {
    isIconLink?: boolean;
    className?: string;
}

export function ClickNumberPhone({ isIconLink, className }: ClickNumberPhoneProps) {
    return (
        <a href={"tel:" + phoneNumber} className={cn("text-white hover:underline", className)}>
            {isIconLink ? <SwIcon name={iconNames.phone} /> : phoneNumberText}
        </a>
    );
}
