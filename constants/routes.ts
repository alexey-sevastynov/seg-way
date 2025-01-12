export const routes = {
  home: "/",
  reviews: "/",
  shippingAndPayment: "/",
  wholesale: "/",
  blog: "/",
  contact: "/",
  cart: "/",
  instagram: "/",
} as const;

export type Routes = (typeof routes)[keyof typeof routes];
