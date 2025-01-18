import { routes } from "@/constants/routes";

export const navigationItems = [
    { id: 1, href: routes.reviews, label: "REVIEWS" },
    { id: 2, href: routes.shippingAndPayment, label: "SHIPPING AND PAYMENT" },
    { id: 3, href: routes.wholesale, label: "WHOLESALE" },
    { id: 4, href: routes.blog, label: "BLOG" },
    { id: 5, href: routes.contact, label: "CONTACTS" },
] as const;
