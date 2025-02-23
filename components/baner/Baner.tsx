interface BanerProps {
    text: string;
    className?: string;
}

export function Baner({ className, text }: BanerProps) {
    return (
        <div className="flex h-12 items-center justify-center text-black max-md:bg-blue">
            <p>{text}</p>
        </div>
    );
}
