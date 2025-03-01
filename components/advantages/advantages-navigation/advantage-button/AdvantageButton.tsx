import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { AdvantageButtons } from "@/components/advantages/advantages-constants";

interface AdvantageButtonProps {
    label: string;
    icon: StaticImageData;
    currentButton: AdvantageButtons;
    activeButton: AdvantageButtons;
    setActiveButton: (buttonId: AdvantageButtons) => void;
}

export function AdvantageButton({
    label,
    icon,
    currentButton,
    activeButton,
    setActiveButton,
}: AdvantageButtonProps) {
    return (
        <button
            onClick={() => setActiveButton(currentButton)}
            className={cn(
                activeButton === currentButton && "bg-blue text-white",
                "flex flex-1 items-center justify-center gap-3 px-5 py-2",
            )}
        >
            <div className="relative flex h-9 w-auto max-w-9 items-center">
                <Image src={icon} alt={label} layout="intrinsic" objectFit="contain" />
            </div>
            <p className="text-left text-lg max-lg:hidden">{label}</p>
        </button>
    );
}
