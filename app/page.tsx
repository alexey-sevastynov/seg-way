import { Baner } from "@/components/baner/baner";
import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { HeaderNavigationMobile } from "@/components/header-navigation/HeaderNavigationMobile";
import { LogoWithContact } from "@/components/logo-with-contact/LogoWithContact";
import { ProductDisplayPanel } from "@/components/product-display-panel/ProductDisplayPanel";

export default function Home() {
    return (
        <div className="w-full">
            <div className="flex h-12 items-center bg-grey max-md:bg-white">
                <div className="container">
                    <HeaderNavigation />
                    <HeaderNavigationMobile />
                </div>
            </div>

            <div className="container max-md:hidden">
                <LogoWithContact />
            </div>

            <ProductDisplayPanel />
            <Baner text="Free 1 day shipping within California" />
        </div>
    );
}
