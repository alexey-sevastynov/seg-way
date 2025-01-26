export const sizeProductItem = {
    s: 0,
    m: 1,
} as const;

export type SizeProductItem = (typeof sizeProductItem)[keyof typeof sizeProductItem];

export const sizeMap = {
    0: { width: 74, height: 74 },
    1: { width: 266, height: 266 },
} as const;
