import { Advantage } from "@/components/advantages/advantages.interface";
import advantageIcon1 from "@/assets/icons/advantage-1.png";
import advantageIcon2 from "@/assets/icons/advantage-2.png";
import advantageIcon3 from "@/assets/icons/advantage-3.png";
import advantageIcon4 from "@/assets/icons/advantage-4.png";
import advantageImage1 from "@/assets/images/advantage-map-usa.png";
import advantageImage2 from "@/assets/images/advantage-repair.png";
import advantageImage3 from "@/assets/images/advantage-first.png";
import advantageImage4 from "@/assets/images/advantage-40-miles.png";

export const advantageButton = {
    speed: 0,
    reliability: 1,
    flexibility: 2,
    security: 3,
} as const;

export type AdvantageButtons = (typeof advantageButton)[keyof typeof advantageButton];

export const advantagesData: Advantage[] = [
    {
        id: 1,
        label: "Delivery within 1 business day",
        title: "We are in Los Angeles, CA",
        icon: advantageIcon1,
        description: "Get your product delivered within 1 business day for fast convenience.",
        image: advantageImage1,
        buttonId: advantageButton.speed,
    },
    {
        id: 2,
        label: "Basic 1-year warranty",
        title: "Basic 1-year warranty",
        icon: advantageIcon2,
        description: "Enjoy a 1-year basic warranty for peace of mind.",
        image: advantageImage2,
        buttonId: advantageButton.reliability,
    },
    {
        id: 3,
        label: "After Sales Support",
        title: "After Sales Support",
        icon: advantageIcon3,
        description: `If you have any difficulties with your kickScooter, our specialists will contact you 
        within 15 minutes.`,
        image: advantageImage3,
        buttonId: advantageButton.flexibility,
    },
    {
        id: 4,
        label: "Up to 40 miles per charge",
        title: "Up to 40 miles of range on a single charge",
        icon: advantageIcon4,
        description: `With a range of up to 40 miles, the longest range on the market, 
        and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco 
        Bay Area to Palo Alto on a single charge.`,
        image: advantageImage4,
        buttonId: advantageButton.security,
    },
];
