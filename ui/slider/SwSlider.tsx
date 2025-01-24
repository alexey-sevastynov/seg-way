import Slider from "react-slick";
import { ProductItem } from "@/components/shared/product-item/ProductItem";
import { Product } from "@/interfaces/Product";

interface SwSliderProps {
    items: Product[];
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    infinite?: boolean;
}

export function SwSlider({
    items,
    slidesToShow = 3,
    slidesToScroll = 1,
    speed = 500,
    infinite = true,
}: SwSliderProps) {
    return (
        <Slider infinite={infinite} speed={speed} slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}>
            {items.map((item) => (
                <div key={item.id} className="p-4">
                    <div className="rounded-md border border-gray-300 p-4 text-center">
                        <ProductItem image={item.image} name={item.name} />
                    </div>
                </div>
            ))}
        </Slider>
    );
}
