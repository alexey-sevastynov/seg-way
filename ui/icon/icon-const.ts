export const iconSizes = {
  medium: 24,
} as const;

export type SizeIcon = (typeof iconSizes)[keyof typeof iconSizes];

export const iconNames = {
  instagram: "instagram",
  cart: "cart",
  phone: "phone",
};

export type IconName = (typeof iconNames)[keyof typeof iconNames];
