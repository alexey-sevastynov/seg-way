import { iconNames, SwIcon } from "@/ui/icon/SwIcon";
import { ClickNumberPhone } from "@/components/click-number-phone/ClickNumberPhone";

export function NavigationExtras() {
  return (
    <ul className="flex gap-6">
      <li>
        <SwIcon
          name={iconNames.instagram}
          className="cursor-pointer"
        />
      </li>
      <li>
        <SwIcon
          name={iconNames.instagram}
          className="cursor-pointer"
        />
      </li>
      <li className="max-lg:hidden">
        <ClickNumberPhone />
      </li>
    </ul>
  );
}
