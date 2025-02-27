"use client";
import { useState } from "react";
import { advantagesData } from "@/components/advantages/advantages-constants";
import { AdvantageButton } from "@/components/advantages/advantage/AdvantageButton";

export function Advantages() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="rounded-2xl bg-white shadow-lg">
            <div className="flex justify-between border-b">
                {advantagesData.map((item, index) => (
                    <AdvantageButton
                        key={index}
                        label={item.title}
                        icon={item.icon}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
            <div key={activeIndex} className="text-center">
                <h3 className="mb-2 text-lg font-semibold">{advantagesData[activeIndex].title}</h3>
                <p className="text-gray-600">{advantagesData[activeIndex].description}</p>
            </div>
        </div>
    );
}
