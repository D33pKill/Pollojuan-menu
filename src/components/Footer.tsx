"use client";

import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden py-12 px-4"
            style={{ backgroundColor: "#FF6600" }}
        >
            {/* Checkered overlay */}
            <div className="absolute inset-0 bg-checker pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Top: brand + social */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="text-4xl">🐔</span>
                            <div>
                                <div
                                    className="font-black text-2xl"
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        color: "#FFD700",
                                        WebkitTextStroke: "1px #CC0000",
                                    }}
                                >
                                    POLLO JUAN
                                </div>
                                <div className="text-xs font-semibold text-white/80 tracking-widest uppercase">
                                    Crispy & Asiático
                                </div>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm max-w-xs">
                            El mejor pollo frito crujiente con influencia asiática. ¡Pedí ahora y recibí en tu puerta!
                        </p>
                    </div>

                    {/* Social & CTA */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/pollojuan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                aria-label="Instagram Pollo Juan"
                            >
                                <FaInstagram size={20} color="#fff" />
                            </a>
                            <a
                                href="https://wa.me/56912345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: "#25D366" }}
                                aria-label="WhatsApp Pollo Juan"
                            >
                                <FaWhatsapp size={20} color="#fff" />
                            </a>
                        </div>
                        <a
                            href="https://wa.me/56912345678?text=Hola%20Pollo%20Juan%2C%20quiero%20hacer%20un%20pedido!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
                            style={{
                                backgroundColor: "#FFD700",
                                color: "#CC0000",
                                fontFamily: "'Outfit', sans-serif",
                            }}
                        >
                            📲 Hacer un Pedido
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mb-8" />

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt size={20} className="flex-shrink-0 mt-1" style={{ color: "#FFD700" }} />
                        <div>
                            <div className="font-black text-white text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                Dirección
                            </div>
                            <div className="text-white/80 text-sm">
                                Av. Gran Avenida 1234, San Miguel<br />
                                Santiago, Chile
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaClock size={20} className="flex-shrink-0 mt-1" style={{ color: "#FFD700" }} />
                        <div>
                            <div className="font-black text-white text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                Horario
                            </div>
                            <div className="text-white/80 text-sm">
                                Lun – Vie: 12:00 – 23:00 hrs<br />
                                Sáb – Dom: 11:00 – 00:00 hrs
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-white/60 text-xs">
                    © 2026 Pollo Juan · Todos los derechos reservados
                </div>
            </div>
        </footer>
    );
}
