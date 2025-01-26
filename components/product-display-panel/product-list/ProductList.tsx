"use client";
import { ProductItem } from "@/components/shared/product-item/ProductItem";
import { Product } from "@/interfaces/Product";

interface ProductListProps {
    items: Product[];
    selectedProduct: string;
    onClick?: (product: Product) => void;
}

export function ProductList({ items, selectedProduct, onClick }: ProductListProps) {
    return items.map((product: Product) => (
        <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            className="h-36 w-36 cursor-pointer"
            model={product.model}
            textColor="text-white"
            isSelected={selectedProduct === product.id}
            onClick={() => onClick?.(product)}
        />
    ));
}
