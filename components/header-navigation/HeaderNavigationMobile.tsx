import Link from "next/link";
import { SwIcon } from "@/ui/icon/SwIcon";

import { ClickNumberPhone } from "@/components/click-number-phone/ClickNumberPhone";
import { routes } from "@/constants/routes";
import { iconNames } from "@/ui/icon/icon-const";
import { Logo } from "@/components/logo/logo";

export function HeaderNavigationMobile() {
  return (
    <nav className="flex justify-between gap-6 md:hidden">
      <div className="relative">
        <button className="flex flex-col space-y-2 items-center">
          <span className="block w-6 h-0.5 bg-grey" />
          <span className="block w-6 h-0.5 bg-grey" />
          <span className="block w-6 h-0.5 bg-grey" />
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
