import Image, { StaticImageData } from "next/image";

interface FullscreenImageProps {
    src: StaticImageData;
    alt: string;
}

export function FullscreenImage({ src, alt }: FullscreenImageProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" className="absolute left-0 top-0" />
            <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-white to-transparent opacity-100 max-md:hidden" />
        </section>
    );
}
