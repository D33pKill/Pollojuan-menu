"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlus, FaCheck } from "react-icons/fa";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);
    const [wantTapioca, setWantTapioca] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

    const handleAdd = () => {
        addItem(product, product.tapiocaOption ? wantTapioca : false);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="group flex gap-3 items-start rounded-2xl p-3 hover:shadow-md transition-shadow duration-300"
            style={{
                backgroundColor: "#fff",
                border: "1.5px solid #FFE0C0",
            }}
        >
            {/* Image with parallax */}
            <div
                className="flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: "100px", height: "100px", position: "relative" }}
            >
                <motion.div
                    style={{ y: imageY, height: "140%", width: "100%", position: "absolute", top: "-20%" }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="100px"
                    />
                </motion.div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                    <h3
                        className="font-black text-sm leading-tight"
                        style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
                    >
                        {product.name}
                    </h3>
                    {product.badge && (
                        <span
                            className="flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded-full"
                            style={{
                                backgroundColor: "#FFF3CD",
                                color: "#CC0000",
                                border: "1px solid #FFD700",
                                fontSize: "10px",
                            }}
                        >
                            {product.badge}
                        </span>
                    )}
                </div>

                <p className="text-xs text-gray-400 leading-snug mb-2 line-clamp-2">{product.description}</p>

                {/* Tapioca toggle for boba */}
                {product.tapiocaOption && (
                    <label className="flex items-center gap-1.5 mb-2 cursor-pointer">
                        <div
                            className="w-4 h-4 rounded flex items-center justify-center transition-all"
                            style={{ backgroundColor: wantTapioca ? "#9333EA" : "#F3E8FF", border: `1.5px solid ${wantTapioca ? "#9333EA" : "#D8B4FE"}` }}
                            onClick={() => setWantTapioca(!wantTapioca)}
                        >
                            {wantTapioca && <FaCheck size={8} color="#fff" />}
                        </div>
                        <span className="text-xs font-semibold" style={{ color: "#9333EA" }}>
                            + Tapioca (+$500)
                        </span>
                    </label>
                )}

                <div className="flex items-center justify-between">
                    <div>
                        <span
                            className="text-base font-black"
                            style={{ color: "#CC0000", fontFamily: "'Outfit', sans-serif" }}
                        >
                            {formatPrice(product.price)}
                        </span>
                        {product.price2 && (
                            <span className="text-xs text-gray-400 ml-1">/ {formatPrice(product.price2)}</span>
                        )}
                    </div>
                    <motion.button
                        onClick={handleAdd}
                        whileTap={{ scale: 0.85 }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black transition-all"
                        style={{
                            backgroundColor: added ? "#25D366" : "#FF6600",
                            color: "#fff",
                            fontFamily: "'Outfit', sans-serif",
                            minWidth: "72px",
                            justifyContent: "center",
                        }}
                    >
                        {added ? <><FaCheck size={10} /> Listo</> : <><FaPlus size={10} /> Agregar</>}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
