import { ListNavigation } from "./ListNavigation";
import { NavigationExtras } from "./NavigationExtras";

export function HeaderNavigation() {
  return (
    <nav className="flex justify-between gap-6 max-md:hidden">
      <ListNavigation />
      <NavigationExtras />
    </nav>
  );
}
