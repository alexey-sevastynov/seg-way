"use client";
import { useState } from "react";
import { ProductItem } from "@/components/shared/product-item/ProductItem";
import { Product } from "@/interfaces/Product";

interface ProductListProps {
    items: Product[];
}

export function ProductList({ items }: ProductListProps) {
    const firstProductId = items[0].id;
    const [selectedProduct, setSelectedProduct] = useState<string>(firstProductId);

    return items.map((product: Product) => (
        <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            className="h-36 w-36 cursor-pointer"
            model={product.model}
            textColor="text-white"
            isSelected={selectedProduct === product.id}
            onClick={() => setSelectedProduct(product.id)}
        />
    ));
}
