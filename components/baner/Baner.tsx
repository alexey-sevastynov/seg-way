interface BanerProps {
    text: string;
    className?: string;
}

export function Baner({ className, text }: BanerProps) {
    return (
        <div className="flex h-12 items-center justify-center bg-blue text-white max-md:bg-inherit max-md:text-black">
            <p>{text}</p>
        </div>
    );
}
