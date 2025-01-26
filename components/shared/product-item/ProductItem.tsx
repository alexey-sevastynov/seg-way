import { cn } from "@/lib/utils";
import Image from "next/image";
import { sizeMap, sizeProductItem, SizeProductItem } from "./product-item-constants";

interface ProductItemProps {
    image: string;
    name: string;
    className?: string;
    model?: string;
    textColor?: string;
    isSelected?: boolean;
    onClick?: () => void;
    isNameOnTop?: boolean;
    size?: SizeProductItem;
}

export function ProductItem({
    image,
    name,
    model,
    className,
    textColor = "text-grey",
    isSelected,
    onClick,
    isNameOnTop = false,
    size = sizeProductItem.s,
}: ProductItemProps) {
    const imageSize = sizeMap[size];

    return (
        <div
            className={cn("flex flex-col items-center gap-2 p-2", className, isSelected ? "bg-blue" : "")}
            onClick={onClick}
        >
            {isNameOnTop && <p className={cn("text-xl font-semibold", textColor)}>{model}</p>}

            <div
                style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }}
                className="flex items-center justify-center"
            >
                <Image
                    className="object-cover"
                    src={image}
                    alt={name}
                    width={imageSize.width}
                    height={imageSize.height}
                />
            </div>

            {!isNameOnTop && <p className={cn("text-sm font-semibold", textColor)}>{name}</p>}
        </div>
    );
}
