"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "@/interfaces/Product";
import { SwSlider } from "@/ui/slider/SwSlider";

interface SwSliderProps {
    items: Product[];
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    infinite?: boolean;
    className?: string;
    dots?: boolean;
    selectedProduct?: string;
    onClick?: (product: Product) => void;
}

export function SwCarousel({
    items,
    slidesToShow,
    slidesToScroll,
    speed,
    infinite,
    className,
    dots,
    selectedProduct,
    onClick,
}: SwSliderProps) {
    return (
        <div className={className}>
            <SwSlider
                items={items}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                speed={speed}
                infinite={infinite}
                dots={dots}
                selectedProduct={selectedProduct}
                onClick={onClick}
            />
        </div>
    );
}
