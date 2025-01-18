import { ListNavigation } from "./list-navigation/ListNavigation";
import { NavigationExtras } from "./navigation-extras/NavigationExtras";

export function HeaderNavigation() {
    return (
        <nav className="dfd flex justify-between gap-6 max-md:hidden">
            <ListNavigation />
            <NavigationExtras />
        </nav>
    );
}
