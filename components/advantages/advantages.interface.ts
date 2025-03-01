import { StaticImageData } from "next/image";
import { AdvantageButtons } from "@/components/advantages/advantages-constants";

export interface Advantage {
    id: number;
    label: string;
    title: string;
    icon: StaticImageData;
    description: string;
    image: StaticImageData;
    buttonId: AdvantageButtons;
}
