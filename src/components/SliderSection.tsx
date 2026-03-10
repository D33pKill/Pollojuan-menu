"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SliderSectionProps {
    products: Product[];
}

const CARD_WIDTH = 280;
const CARD_GAP = 16;

export default function SliderSection({ products }: SliderSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const maxIndex = products.length - 1;

    const scrollTo = (index: number) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
        if (trackRef.current) {
            trackRef.current.scrollTo({
                left: clamped * (CARD_WIDTH + CARD_GAP),
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="combos" className="py-10 overflow-hidden" style={{ backgroundColor: "#FFF7ED" }}>
            {/* Section header */}
            <div className="px-4 max-w-7xl mx-auto mb-6 flex items-center justify-between">
                <div>
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
                    <p className="text-gray-500 text-sm hidden md:block" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Nuestros combos más populares — arrastrá o usá las flechas para ver más
                    </p>
                    <p className="text-gray-500 text-sm md:hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Arrastrá para ver más opciones →
                    </p>
                </div>

                {/* Desktop nav arrows */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => scrollTo(currentIndex - 1)}
                        disabled={currentIndex === 0}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                        style={{ backgroundColor: "#FF6600", color: "#fff" }}
                        aria-label="Anterior"
                    >
                        <FaChevronLeft size={14} />
                    </button>
                    <button
                        onClick={() => scrollTo(currentIndex + 1)}
                        disabled={currentIndex >= maxIndex}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                        style={{ backgroundColor: "#FF6600", color: "#fff" }}
                        aria-label="Siguiente"
                    >
                        <FaChevronRight size={14} />
                    </button>
                </div>
            </div>

            {/* Scrollable track — drag on mobile, arrows on desktop */}
            <div
                ref={trackRef}
                className="flex gap-4 px-4 overflow-x-auto cursor-grab active:cursor-grabbing"
                style={{
                    maxWidth: "100%",
                    paddingBottom: "12px",
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {/* Left padding on large screens to align with max-w-7xl */}
                <div className="hidden xl:block flex-shrink-0" style={{ width: "calc((100vw - 80rem) / 2)" }} />

                {products.map((product, i) => (
                    <SliderCard key={product.id} product={product} index={i} />
                ))}

                {/* Right padding */}
                <div className="flex-shrink-0 w-4" />
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {products.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className="rounded-full transition-all"
                        style={{
                            width: i === currentIndex ? "24px" : "8px",
                            height: "8px",
                            backgroundColor: i === currentIndex ? "#FF6600" : "#FFD7B0",
                        }}
                        aria-label={`Ir al combo ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

function SliderCard({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            className="card-shine flex-shrink-0 rounded-2xl overflow-hidden shadow-md select-none"
            style={{
                width: `${CARD_WIDTH}px`,
                backgroundColor: "#fff",
                border: "2px solid #FFE0C0",
                scrollSnapAlign: "start",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(255,102,0,0.25)" }}
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
