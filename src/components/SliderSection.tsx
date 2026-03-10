"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface SliderSectionProps {
    products: Product[];
}

export default function SliderSection({ products }: SliderSectionProps) {
    return (
        <section id="combos" className="py-10 overflow-hidden" style={{ backgroundColor: "#FFF7ED" }}>
            {/* Section header */}
            <div className="px-4 max-w-6xl mx-auto mb-6">
                <div className="flex items-center gap-3 mb-1">
                    <span
                        className="text-3xl font-black"
                        style={{ fontFamily: "'Outfit', sans-serif", color: "#FF6600" }}
                    >
                        Combos Favoritos
                    </span>
                    <span
                        className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                        style={{ backgroundColor: "#CC0000", color: "#FFD700", fontFamily: "'Outfit', sans-serif" }}
                    >
                        🔥 Top ventas
                    </span>
                </div>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Arrastrá para ver más opciones →
                </p>
            </div>

            {/* Draggable horizontal carousel */}
            <motion.div
                className="flex gap-4 px-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ right: 0, left: -(products.length * 280 - (typeof window !== "undefined" ? window.innerWidth : 375) + 32) }}
                dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ width: "max-content", paddingBottom: "12px" }}
            >
                {products.map((product, i) => (
                    <SliderCard key={product.id} product={product} index={i} />
                ))}
            </motion.div>
        </section>
    );
}

function SliderCard({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            className="card-shine flex-shrink-0 rounded-2xl overflow-hidden shadow-md select-none"
            style={{
                width: "260px",
                backgroundColor: "#fff",
                border: "2px solid #FFE0C0",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(255,102,0,0.25)" }}
        >
            {/* Image */}
            <div className="relative w-full h-44 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    draggable={false}
                />
                {product.badge && (
                    <div
                        className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-black"
                        style={{
                            backgroundColor: "#FF6600",
                            color: "#fff",
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        {product.badge}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-4">
                <h3
                    className="font-black text-base leading-tight mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
                >
                    {product.name}
                </h3>
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
                        className="px-3 py-1.5 rounded-full text-xs font-black transition-all hover:scale-105 active:scale-95"
                        style={{
                            backgroundColor: "#FF6600",
                            color: "#fff",
                            fontFamily: "'Outfit', sans-serif",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Pedir 🍗
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
