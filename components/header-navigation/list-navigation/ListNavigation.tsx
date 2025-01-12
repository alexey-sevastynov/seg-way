import { SwLink } from "@/ui/link/SwLink";
import { navigationItems } from "../header-navigation-constants";

export function ListNavigation() {
  return (
    <ul className="flex items-center gap-6">
      {navigationItems.map(({ id, href, label }) => (
        <li key={id}>
          <SwLink
            href={href}
            className="text-white"
          >
            {label}
          </SwLink>
        </li>
      ))}
    </ul>
  );
}
