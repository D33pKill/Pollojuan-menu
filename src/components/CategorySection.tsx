"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface CategorySectionProps {
    id: string;
    title: string;
    emoji: string;
    accentColor?: string;
    products: Product[];
}

export default function CategorySection({
    id,
    title,
    emoji,
    accentColor = "#FF6600",
    products,
}: CategorySectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section id={id} ref={ref} className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Sticky category header */}
                <div
                    className="sticky top-16 z-30 py-3 flex items-center gap-3 mb-5"
                    style={{
                        background: "linear-gradient(to bottom, #fff 85%, transparent)",
                    }}
                >
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
                        style={{ backgroundColor: accentColor }}
                    >
                        <span className="text-xl">{emoji}</span>
                        <h2
                            className="font-black text-lg text-white"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            {title}
                        </h2>
                    </div>
                    <div
                        className="flex-1 h-0.5 rounded-full opacity-30"
                        style={{ backgroundColor: accentColor }}
                    />
                </div>

                {/* Product list */}
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4">
                    {products.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
