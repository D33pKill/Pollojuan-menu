"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
            style={{ backgroundColor: "#FF6600" }}
        >
            {/* Checkered overlay */}
            <div className="absolute inset-0 bg-checker pointer-events-none" />

            {/* Decorative circles */}
            <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
                style={{ backgroundColor: "#FFD700" }}
            />
            <div
                className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10"
                style={{ backgroundColor: "#CC0000" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase"
                    style={{
                        backgroundColor: "#CC0000",
                        color: "#FFD700",
                        fontFamily: "'Outfit', sans-serif",
                    }}
                >
                    🔥 Abierto todos los días
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    style={{
                        y: titleY,
                        opacity: contentOpacity,
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(2.2rem, 8vw, 5rem)",
                        color: "#FFD700",
                        WebkitTextStroke: "2px #CC0000",
                        lineHeight: 1.1,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="font-black leading-tight mb-4"
                >
                    ¡El Auténtico<br />
                    <span style={{ color: "#fff", WebkitTextStroke: "2px #CC0000" }}>
                        Pollo Frito
                    </span>
                    {" "}con<br />Alma Asiática!
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white text-base md:text-xl font-medium mb-8 max-w-md"
                    style={{ fontFamily: "'Inter', sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                >
                    Crujiente por afuera, jugoso por dentro. Combos, alitas, burgers y el mejor bubble tea.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 mb-10"
                >
                    <a
                        href="#combos"
                        className="px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
                        style={{
                            backgroundColor: "#FFD700",
                            color: "#CC0000",
                            fontFamily: "'Outfit', sans-serif",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                        }}
                    >
                        Ver el Menú 🍗
                    </a>
                    <a
                        href="https://wa.me/56912345678?text=Hola%20Pollo%20Juan%2C%20quiero%20hacer%20un%20pedido!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95"
                        style={{
                            backgroundColor: "#25D366",
                            color: "#fff",
                            fontFamily: "'Outfit', sans-serif",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                        }}
                    >
                        📲 Pedir Ahora
                    </a>
                </motion.div>

                {/* Hero product image */}
                <motion.div
                    style={{ y: imageY }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="relative w-full max-w-lg mx-auto"
                >
                    {/* Glow behind image */}
                    <div
                        className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                        style={{ backgroundColor: "#FFD700", transform: "scale(0.8) translateY(30px)" }}
                    />
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
                        style={{ borderColor: "#FFD700" }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=700&h=450&fit=crop&auto=format"
                            alt="Combo familiar Pollo Juan: balde de pollo, papas fritas y bebida"
                            width={700}
                            height={450}
                            className="w-full object-cover"
                            priority
                        />
                        {/* Price tag overlay */}
                        <div
                            className="absolute top-4 right-4 px-3 py-2 rounded-2xl font-black text-sm shadow-lg"
                            style={{
                                backgroundColor: "#CC0000",
                                color: "#FFD700",
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            Desde $2.990
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
                <span className="text-white/70 text-xs font-medium">Deslizá para ver el menú</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-white text-xl"
                >
                    ↓
                </motion.div>
            </motion.div>
        </section>
    );
}
