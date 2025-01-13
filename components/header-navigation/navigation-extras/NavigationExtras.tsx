import { SwIcon } from "@/ui/icon/SwIcon";
import { ClickNumberPhone } from "@/components/click-number-phone/ClickNumberPhone";
import { iconNames } from "@/ui/icon/icon-const";
import { colors } from "@/constants/colors";

export function NavigationExtras() {
  return (
    <ul className="flex gap-6">
      <li>
        <SwIcon
          name={iconNames.cart}
          color={colors.white}
          className="cursor-pointer"
        />
      </li>
      <li>
        <SwIcon
          name={iconNames.instagram}
          color={colors.white}
          className="cursor-pointer"
        />
      </li>
      <li className="max-lg:hidden">
        <ClickNumberPhone />
      </li>
    </ul>
  );
}
