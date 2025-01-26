import { Logo } from "@/components/shared/logo/logo";
import { logoSizes } from "@/components/shared/logo/logo-const";
import { Contact } from "@/components/logo-with-contact/contact/Contact";

export function LogoWithContact() {
    return (
        <div className="flex items-center justify-between py-5">
            <Logo size={logoSizes.large} />
            <Contact />
        </div>
    );
}
