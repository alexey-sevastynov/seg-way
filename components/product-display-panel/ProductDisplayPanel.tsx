import { SwCarousel } from "@/ui/slider/SwCarousel";
import { ProductList } from "./product-list/ProductList";
import data from "@/assets/data.json";

export function ProductDisplayPanel() {
    return (
        <>
            <div className="grid grid-cols-5 justify-items-center gap-4 max-lg:hidden">
                <ProductList items={data} />
            </div>
            <SwCarousel items={data} className="lg:hidden" />;
        </>
    );
}
