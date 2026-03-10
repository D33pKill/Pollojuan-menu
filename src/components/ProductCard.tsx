"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax: image moves up faster than scroll, revealing more of itself
    const imageY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            className="group flex gap-4 items-start rounded-2xl p-3 hover:shadow-lg transition-shadow duration-300"
            style={{
                backgroundColor: "#fff",
                border: "1.5px solid #FFE0C0",
            }}
        >
            {/* Image container with parallax */}
            <div
                className="flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: "110px", height: "110px", position: "relative" }}
            >
                <motion.div
                    style={{ y: imageY, height: "145%", width: "100%", position: "absolute", top: "-22.5%" }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="110px"
                    />
                </motion.div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                        className="font-black text-base leading-tight"
                        style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
                    >
                        {product.name}
                    </h3>
                    {product.badge && (
                        <span
                            className="flex-shrink-0 text-xs font-black px-2 py-0.5 rounded-full"
                            style={{
                                backgroundColor: "#FFF3CD",
                                color: "#CC0000",
                                fontFamily: "'Outfit', sans-serif",
                                border: "1px solid #FFD700",
                            }}
                        >
                            {product.badge}
                        </span>
                    )}
                </div>

                <p className="text-xs text-gray-500 leading-snug mb-3 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span
                        className="text-xl font-black"
                        style={{ color: "#CC0000", fontFamily: "'Outfit', sans-serif" }}
                    >
                        {product.price}
                    </span>
                    <a
                        href={`https://wa.me/56912345678?text=Hola!%20Quiero%20pedir%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full text-xs font-black transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                        style={{
                            backgroundColor: "#FF6600",
                            color: "#fff",
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        + Pedir
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
