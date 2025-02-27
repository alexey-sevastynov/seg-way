import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface AdvantageButtonProps {
    label: string;
    icon: StaticImageData;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export function AdvantageButton({ label, icon, index, activeIndex, setActiveIndex }: AdvantageButtonProps) {
    return (
        <button
            onClick={() => setActiveIndex(index)}
            className={cn(
                "flex items-center justify-center gap-3 px-5 py-2",
                activeIndex === index ? "bg-blue text-white" : "",
            )}
        >
            <Image src={icon} alt={label} height={36} />
            <p>{label}</p>
        </button>
    );
}
