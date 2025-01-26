import { breakpoints } from "@/constants/sizes";

export const carouselBreakpoints = [
    {
        breakpoint: breakpoints.desktop,
        settings: {
            slidesToShow: 5,
        },
    },
    {
        breakpoint: breakpoints.tablet,
        settings: {
            slidesToShow: 4,
        },
    },
    {
        breakpoint: breakpoints.mobile,
        settings: {
            slidesToShow: 3,
        },
    },
];
