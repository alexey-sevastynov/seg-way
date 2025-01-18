import Image from "next/image";
import srcAvatarImage from "@/assets/images/avatar.jpg";
import { SwLink } from "@/ui/link/SwLink";

export function Contact() {
    return (
        <div className="flex items-center gap-3">
            <Image src={srcAvatarImage} alt="avatar" width={63} height={63} />

            <div className="flex max-w-24 flex-col gap-1">
                <p className="text-xs font-semibold">JOHN SMITH</p>
                <SwLink className="text-xs font-normal text-blue">Ask a question to the director</SwLink>
            </div>
        </div>
    );
}
