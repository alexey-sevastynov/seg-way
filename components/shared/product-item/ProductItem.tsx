import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductItemProps {
    image: string;
    name: string;
    className?: string;
    model?: string;
    textColor?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export function ProductItem({
    image,
    name,
    className,
    textColor = "text-grey",
    isSelected,
    onClick,
}: ProductItemProps) {
    return (
        <div
            className={cn("flex flex-col items-center gap-2 p-2", className, isSelected ? "bg-blue" : "")}
            onClick={onClick}
        >
            <div className="h-20 w-20">
                <Image className="h-full w-full object-cover" src={image} alt={name} width={80} height={80} />
            </div>

            <p className={cn("text-sm font-semibold", textColor)}>{name}</p>
        </div>
    );
}
