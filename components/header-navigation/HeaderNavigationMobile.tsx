import Link from "next/link";
import { SwIcon } from "@/ui/icon/SwIcon";

import { ClickNumberPhone } from "@/components/shared/click-number-phone/ClickNumberPhone";
import { routes } from "@/constants/routes";
import { iconNames } from "@/ui/icon/icon-const";
import { Logo } from "@/components/shared/logo/logo";

export function HeaderNavigationMobile() {
    return (
        <nav className="flex justify-between gap-6 md:hidden">
            <div className="relative">
                <button className="flex flex-col items-center space-y-2">
                    <span className="block h-0.5 w-6 bg-grey" />
                    <span className="block h-0.5 w-6 bg-grey" />
                    <span className="block h-0.5 w-6 bg-grey" />
                </button>
            </div>

            <Logo />

            <ul className="flex gap-4">
                <li>
                    <ClickNumberPhone isIconLink />
                </li>
                <li>
                    <Link href={routes.instagram}>
                        <SwIcon name={iconNames.instagram} />
                    </Link>
                </li>
                <li>
                    <Link href={routes.cart}>
                        <SwIcon name={iconNames.cart} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
