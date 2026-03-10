"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Combos", href: "#combos" },
    { label: "Pollo Frito", href: "#pollo" },
    { label: "Hamburguesas", href: "#hamburguesas" },
    { label: "Bebidas", href: "#bebidas" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 shadow-md"
                style={{ backgroundColor: "#FF6600" }}
            >
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 select-none">
                        <span className="text-3xl">🐔</span>
                        <div className="flex flex-col leading-tight">
                            <span
                                className="font-black text-xl tracking-wide"
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    color: "#FFD700",
                                    WebkitTextStroke: "1px #CC0000",
                                }}
                            >
                                POLLO JUAN
                            </span>
                            <span
                                className="text-xs font-semibold tracking-widest uppercase"
                                style={{ color: "rgba(255,255,255,0.85)" }}
                            >
                                Crispy & Asiático
                            </span>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-bold text-white hover:text-yellow-300 transition-colors"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/56912345678?text=Hola%20Pollo%20Juan%2C%20quiero%20hacer%20un%20pedido!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: "#25D366",
                                color: "#fff",
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            <FaWhatsapp size={16} /> Pedir Ahora
                        </a>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white p-2 rounded-lg"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menú"
                    >
                        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="fixed inset-0 z-40 flex"
                    >
                        {/* Backdrop */}
                        <div
                            className="flex-1 bg-black/50"
                            onClick={() => setOpen(false)}
                        />
                        {/* Drawer panel */}
                        <div
                            className="w-72 h-full flex flex-col pt-20 px-6 shadow-2xl"
                            style={{ backgroundColor: "#FF6600" }}
                        >
                            {navLinks.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="py-4 text-lg font-black text-white border-b border-white/20 hover:text-yellow-300 transition-colors"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/56912345678?text=Hola%20Pollo%20Juan%2C%20quiero%20hacer%20un%20pedido!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm"
                                style={{
                                    backgroundColor: "#25D366",
                                    color: "#fff",
                                    fontFamily: "'Outfit', sans-serif",
                                }}
                            >
                                <FaWhatsapp size={18} /> Pedir por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
