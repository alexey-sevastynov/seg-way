"use client";
import { SwCarousel } from "@/ui/slider/SwCarousel";
import { ProductList } from "@/components/product-display-panel/product-list/ProductList";
import data from "@/assets/data.json";
import { useState } from "react";
import { Product } from "@/interfaces/Product";

export function ProductDisplayPanel() {
    const firstProductId = data[0].id;
    const [selectedProduct, setSelectedProduct] = useState<string>(firstProductId);

    return (
        <div className="flex items-center bg-grey">
            <div className="container">
                <div className="grid grid-cols-5 justify-items-center gap-4 max-lg:hidden">
                    <ProductList
                        items={data}
                        selectedProduct={selectedProduct}
                        onClick={(product: Product) => setSelectedProduct(product.id)}
                    />
                </div>

                <div className="lg:hidden">
                    <SwCarousel
                        items={data}
                        selectedProduct={selectedProduct}
                        onClick={(product: Product) => setSelectedProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}
