import { cn } from "@/lib/utils";

interface SwButtonProps {
    children: string;
    className?: string;
    disabled?: boolean;
}

export function SwButton({ children, disabled, className }: SwButtonProps) {
    return (
        <button
            className={cn(
                "max-w-96 truncate bg-blue px-5 py-2 text-lg text-white",
                "hover:bg-blue-hover",
                "active:bg-blue-active",
                "disabled:bg-grey",
                className,
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
