import Image from "next/image";
import { AdvantageButtons, advantagesData } from "@/components/advantages/advantages-constants";

interface AdvantageCardProps {
    activeButton: AdvantageButtons;
}

export function AdvantageCard({ activeButton }: AdvantageCardProps) {
    return (
        <div className="flex min-h-72 justify-between bg-light-grey px-6 py-7 max-lg:min-h-[500px] max-lg:flex-col-reverse max-lg:items-center max-lg:justify-end">
            <div className="flex max-w-xl flex-col gap-3 max-lg:items-center">
                <h3 className="mb-2 text-4xl font-semibold">{advantagesData[activeButton].title}</h3>
                <p className="text-lg">{advantagesData[activeButton].description}</p>
            </div>
            <div className="h-48 w-auto overflow-hidden">
                <Image
                    src={advantagesData[activeButton].image}
                    alt="advantage"
                    height={200}
                    width={0}
                    layout="responsive"
                />
            </div>
        </div>
    );
}
