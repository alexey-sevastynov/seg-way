"use client";
import { useState } from "react";
import { AdvantagesNavigation } from "@/components/advantages/advantages-navigation/AdvantagesNavigation";
import { AdvantageCard } from "@/components/advantages/advantage-card/AdvantageCard";
import { advantageButton, AdvantageButtons } from "@/components/advantages/advantages-constants";

export function Advantages() {
    const [activeButton, setActiveButton] = useState<AdvantageButtons>(advantageButton.security);

    return (
        <div className="flex flex-col max-lg:flex-col-reverse">
            <AdvantagesNavigation activeButton={activeButton} setActiveButton={setActiveButton} />
            <AdvantageCard activeButton={activeButton} />
        </div>
    );
}
