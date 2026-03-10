"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
            style={{ backgroundColor: "#FF6600" }}
        >
            {/* Checkered overlay */}
            <div className="absolute inset-0 bg-checker pointer-events-none" />

            {/* Decorative circles */}
            <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
                style={{ backgroundColor: "#FFD700" }}
            />
            <div
                className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
                style={{ backgroundColor: "#CC0000" }}
            />

            {/* Two-column layout on desktop, stacked on mobile */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left: Text content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-xl">
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
                            opacity: contentOpacity,
                            fontFamily: "'Outfit', sans-serif",
                            color: "#FFD700",
                            WebkitTextStroke: "2px #CC0000",
                            lineHeight: 1.05,
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-black mb-4 text-5xl md:text-6xl lg:text-7xl"
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
                        className="text-white text-lg md:text-xl font-medium mb-8 max-w-md"
                        style={{ fontFamily: "'Inter', sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                    >
                        Crujiente por afuera, jugoso por dentro. Combos, alitas, burgers y el mejor bubble tea.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <a
                            href="#combos"
                            className="px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-lg text-center"
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
                            className="px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 text-center"
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

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start"
                    >
                        {["🚚 Delivery disponible", "⏱ 30 min promedio", "💳 Tarjeta aceptada"].map(pill => (
                            <span
                                key={pill}
                                className="px-3 py-1 rounded-full text-xs font-semibold"
                                style={{ backgroundColor: "rgba(0,0,0,0.18)", color: "#fff", fontFamily: "'Inter', sans-serif" }}
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right: Product image */}
                <motion.div
                    style={{ y: imageY }}
                    initial={{ opacity: 0, scale: 0.9, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="relative w-full max-w-sm lg:max-w-lg xl:max-w-xl flex-shrink-0"
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
                            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=560&fit=crop&auto=format"
                            alt="Combo familiar Pollo Juan: balde de pollo, papas fritas y bebida"
                            width={800}
                            height={560}
                            className="w-full object-cover"
                            priority
                        />
                        {/* Price tag overlay */}
                        <div
                            className="absolute top-4 right-4 px-4 py-2 rounded-2xl font-black text-base shadow-lg"
                            style={{
                                backgroundColor: "#CC0000",
                                color: "#FFD700",
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            Desde $2.990
                        </div>
                        {/* Bottom gradient overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white font-black text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            🍗 Combo Familiar Supreme — $8.990
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
                <span className="text-white/70 text-xs font-medium">Ver el menú</span>
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
