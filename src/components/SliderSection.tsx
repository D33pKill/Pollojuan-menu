"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlus, FaCheck } from "react-icons/fa";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface SliderSectionProps {
    products: Product[];
}

const CARD_WIDTH = 270;
const CARD_GAP = 16;

export default function SliderSection({ products }: SliderSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const maxIndex = Math.max(0, products.length - 1);

    const scrollTo = useCallback((index: number) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
        trackRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
    }, [maxIndex]);

    return (
        <section id="combos" className="py-10 overflow-hidden" style={{ backgroundColor: "#FFF7ED" }}>
            {/* Header */}
            <div className="px-4 max-w-7xl mx-auto mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-black" style={{ fontFamily: "'Outfit', sans-serif", color: "#FF6600" }}>
                            Combos Favoritos
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-black uppercase" style={{ backgroundColor: "#CC0000", color: "#FFD700" }}>
                            🔥 Top ventas
                        </span>
                    </div>
                    <p className="text-gray-400 text-xs">
                        <span className="hidden md:inline">Usá las flechas o arrastrá para ver más →</span>
                        <span className="md:hidden">Arrastrá para ver más →</span>
                    </p>
                </div>
                {/* Desktop arrows */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => scrollTo(currentIndex - 1)} disabled={currentIndex === 0}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 shadow-md"
                        style={{ backgroundColor: "#FF6600", color: "#fff" }} aria-label="Anterior"
                    ><FaChevronLeft size={14} /></button>
                    <button
                        onClick={() => scrollTo(currentIndex + 1)} disabled={currentIndex >= maxIndex}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 shadow-md"
                        style={{ backgroundColor: "#FF6600", color: "#fff" }} aria-label="Siguiente"
                    ><FaChevronRight size={14} /></button>
                </div>
            </div>

            {/* Scrollable track */}
            <div
                ref={trackRef}
                className="flex gap-4 px-4 overflow-x-auto"
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none", paddingBottom: "12px" }}
            >
                {products.map((product, i) => (
                    <SliderCard key={product.id} product={product} index={i} />
                ))}
                <div className="flex-shrink-0 w-4" />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {products.map((_, i) => (
                    <button
                        key={i} onClick={() => scrollTo(i)}
                        className="rounded-full transition-all"
                        style={{ width: i === currentIndex ? "24px" : "8px", height: "8px", backgroundColor: i === currentIndex ? "#FF6600" : "#FFD7B0" }}
                        aria-label={`Ir al combo ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

function SliderCard({ product, index }: { product: Product; index: number }) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <motion.div
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md select-none"
            style={{ width: `${CARD_WIDTH}px`, backgroundColor: "#fff", border: "2px solid #FFE0C0", scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(255,102,0,0.2)" }}
        >
            <div className="relative w-full h-44 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 hover:scale-110" draggable={false} />
                {product.badge && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-black" style={{ backgroundColor: "#FF6600", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                        {product.badge}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-black text-sm leading-tight mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                    {product.name}
                </h3>
                <p className="text-xs text-gray-400 leading-snug mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-black" style={{ color: "#CC0000", fontFamily: "'Outfit', sans-serif" }}>{formatPrice(product.price)}</span>
                    <motion.button
                        onClick={handleAdd} whileTap={{ scale: 0.85 }}
                        className="px-3 py-1.5 rounded-full text-xs font-black transition-all flex items-center gap-1"
                        style={{ backgroundColor: added ? "#25D366" : "#FF6600", color: "#fff", fontFamily: "'Outfit', sans-serif" }}
                    >
                        {added ? <><FaCheck size={10} /> Listo</> : <><FaPlus size={10} /> Agregar</>}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
