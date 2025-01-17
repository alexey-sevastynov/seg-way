import Image from "next/image";
import srcAvatarImage from "@/assets/images/avatar.jpg";
import { SwLink } from "@/ui/link/SwLink";

export function Contact() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={srcAvatarImage}
        alt="avatar"
        width={63}
        height={63}
      />

      <div className="flex flex-col max-w-24 gap-1">
        <p className="font-semibold text-xs">JOHN SMITH</p>
        <SwLink className="text-blue font-normal text-xs">
          Ask a question to the director
        </SwLink>
      </div>
    </div>
  );
}
