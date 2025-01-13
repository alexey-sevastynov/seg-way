import Link from "next/link";
import { iconNames, SwIcon } from "@/ui/icon/SwIcon";
import { ClickNumberPhone } from "@/components/click-number-phone/ClickNumberPhone";
import { routes } from "@/constants/routes";

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

      <SwIcon name={iconNames.instagram} />

      <ul className="flex gap-4">
        <li>
          <Link href={routes.cart}>
            <SwIcon name={iconNames.instagram} />
          </Link>
        </li>
        <li>
          <Link href={routes.instagram}>
            <SwIcon name={iconNames.instagram} />
          </Link>
        </li>
        <li>
          <ClickNumberPhone isIconLink />
        </li>
      </ul>
    </nav>
  );
}
