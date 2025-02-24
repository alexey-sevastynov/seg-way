interface BannerProps {
    text: string;
    className?: string;
}

export function Banner({ text }: BannerProps) {
    return (
        <div className="flex h-12 items-center justify-center bg-blue text-white max-md:bg-inherit max-md:text-black">
            <p className="uppercase">{text}</p>
        </div>
    );
}
