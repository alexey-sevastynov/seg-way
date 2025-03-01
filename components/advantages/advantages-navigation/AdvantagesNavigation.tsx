import { AdvantageButtons, advantagesData } from "@/components/advantages/advantages-constants";
import { AdvantageButton } from "@/components/advantages/advantages-navigation/advantage-button/AdvantageButton";

interface AdvantagesNavigationProps {
    activeButton: AdvantageButtons;
    setActiveButton: (buttonId: AdvantageButtons) => void;
}

export function AdvantagesNavigation({ activeButton, setActiveButton }: AdvantagesNavigationProps) {
    return (
        <nav className="flex">
            {advantagesData.map((item) => (
                <AdvantageButton
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    currentButton={item.buttonId}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                />
            ))}
        </nav>
    );
}
