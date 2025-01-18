import { ProductList } from "./product-list/ProductList";

export function ProductDisplayPanel() {
    return (
        <div className="grid grid-cols-5 justify-items-center gap-4">
            <ProductList />
        </div>
    );
}
