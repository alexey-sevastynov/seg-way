import { Advantage } from "@/components/advantages/advantages.interface";
import advantageIcon1 from "@/assets/icons/advantage-1.png";
import advantageIcon2 from "@/assets/icons/advantage-2.png";
import advantageIcon3 from "@/assets/icons/advantage-3.png";
import advantageIcon4 from "@/assets/icons/advantage-4.png";

export const advantagesData: Advantage[] = [
    {
        label: "Delivery within 1 business day",
        title: "We are in Los Angeles, CA",
        icon: advantageIcon1,
        description: "Get your product delivered within 1 business day for fast convenience.",
        image: "",
    },
    {
        label: "Basic 1-year warranty",
        title: "Basic 1-year warranty",
        icon: advantageIcon2,
        description: "Enjoy a 1-year basic warranty for peace of mind.",
        image: "",
    },
    {
        label: "After Sales Support",
        title: "After Sales Support",
        icon: advantageIcon3,
        description: `If you have any difficulties with your kickScooter, our specialists will contact you 
        within 15 minutes.`,
        image: "",
    },
    {
        label: "Up to 40 miles per charge",
        title: "Up to 40 miles of range on a single charge",
        icon: advantageIcon4,
        description: `With a range of up to 40 miles, the longest range on the market, 
        and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco 
        Bay Area to Palo Alto on a single charge.`,
        image: "",
    },
];
