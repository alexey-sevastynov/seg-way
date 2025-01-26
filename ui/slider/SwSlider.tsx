import Slider from "react-slick";
import Image from "next/image";
import { ProductItem } from "@/components/shared/product-item/ProductItem";
import { Product } from "@/interfaces/Product";
import { sizeProductItem } from "@/components/shared/product-item/product-item-constants";
import { carouselBreakpoints } from "./constants";
import ArrowRight from "@/assets/images/arrow-right.png";
import ArrowLeft from "@/assets/images/arrow-left.png";

interface SwSliderProps {
    items: Product[];
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    infinite?: boolean;
    dots?: boolean;
    selectedProduct?: string;
    onClick?: (product: Product) => void;
}

interface ArrowProps {
    onClick?: () => void;
}

export function SwSlider({
    items,
    slidesToShow = 3,
    slidesToScroll = 1,
    speed = 500,
    infinite = true,
    dots = false,
    selectedProduct,
    onClick,
}: SwSliderProps) {
    return (
        <Slider
            infinite={infinite}
            speed={speed}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            dots={dots}
            responsive={carouselBreakpoints}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
        >
            {items.map((item) => (
                <div key={item.id} className="p-4">
                    <div>
                        <ProductItem
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            model={item.model}
                            size={sizeProductItem.s}
                            className="cursor-pointer"
                            textColor="text-white"
                            isSelected={selectedProduct === item.id}
                            onClick={() => onClick?.(item)}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
}

const CustomPrevArrow = (props: ArrowProps) => {
    return (
        <button style={{ position: "absolute", top: "50%", left: 0, zIndex: 1 }} onClick={props.onClick}>
            <Image
                src={ArrowLeft}
                width={6}
                height={27}
                alt="arrow"
                style={{ transform: "translateY(-50%)" }}
            />
        </button>
    );
};

const CustomNextArrow = (props: ArrowProps) => {
    return (
        <button style={{ position: "absolute", top: "50%", right: 0, zIndex: 1 }} onClick={props.onClick}>
            <Image
                src={ArrowRight}
                width={6}
                height={27}
                alt="arrow"
                style={{ transform: "translateY(-50%)" }}
            />
        </button>
    );
};
