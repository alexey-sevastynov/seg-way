import { ListNavigation } from "@/components/header-navigation/list-navigation/ListNavigation";
import { NavigationExtras } from "@/components/header-navigation/navigation-extras/NavigationExtras";

export function HeaderNavigation() {
    return (
        <nav className="flex justify-between gap-6 max-md:hidden">
            <ListNavigation />
            <NavigationExtras />
        </nav>
    );
}
