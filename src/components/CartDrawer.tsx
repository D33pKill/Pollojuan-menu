"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaShoppingCart, FaTimes, FaTrash, FaPlus, FaMinus, FaWhatsapp, FaMotorcycle, FaStore,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const PHONE = "56912345678";

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        setIsDesktop(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return isDesktop;
}

export default function CartDrawer() {
    const { items, removeItem, updateQty, clearCart, total, isOpen, setIsOpen } = useCart();
    const [mode, setMode] = useState<"retiro" | "delivery">("retiro");
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [referencias, setReferencias] = useState("");
    const isDesktop = useIsDesktop();

    const handleOrder = () => {
        if (!items.length) return;
        let msg = "🍗 *PEDIDO POLLO JUAN*\n─────────────────────\n";
        items.forEach((item) => {
            const tapioca = item.addTapioca ? " (+Tapioca)" : "";
            const price = item.product.price + (item.addTapioca ? 500 : 0);
            msg += `• ${item.quantity}x ${item.product.name}${tapioca} — ${formatPrice(price * item.quantity)}\n`;
        });
        msg += `─────────────────────\n*TOTAL: ${formatPrice(total)}*\n\n`;
        if (mode === "delivery") {
            msg += `🚚 *DELIVERY*\nNombre: ${nombre}\nDirección: ${direccion}\n`;
            if (telefono) msg += `Teléfono: ${telefono}\n`;
            if (referencias) msg += `Referencias: ${referencias}\n`;
        } else {
            msg += `🏪 *RETIRO EN LOCAL*\n`;
            if (nombre) msg += `Nombre: ${nombre}\n`;
        }
        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const canOrder =
        items.length > 0 &&
        (mode === "retiro" || (mode === "delivery" && nombre.trim() && direccion.trim()));

    // Animation variants depending on viewport
    const drawerVariants = {
        hidden: isDesktop ? { x: "100%", opacity: 0 } : { y: "100%", opacity: 1 },
        visible: isDesktop ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 },
        exit: isDesktop ? { x: "100%", opacity: 0 } : { y: "100%", opacity: 1 },
    };

    // Desktop: right sidebar. Mobile: bottom sheet.
    const drawerStyle: React.CSSProperties = isDesktop
        ? {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "420px",
            maxWidth: "100vw",
            borderRadius: "24px 0 0 24px",
            zIndex: 51,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
            maxHeight: "100vh",
        }
        : {
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "24px 24px 0 0",
            zIndex: 51,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.18)",
            maxHeight: "92dvh",
        };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <motion.div
                        style={drawerStyle}
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    >
                        {/* Handle — mobile only */}
                        {!isDesktop && (
                            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                                <div className="w-10 h-1 rounded-full bg-gray-300" />
                            </div>
                        )}

                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
                            style={{ borderBottom: "1px solid #FFE0C0" }}
                        >
                            <div className="flex items-center gap-2">
                                <FaShoppingCart style={{ color: "#FF6600" }} />
                                <span className="font-black text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                                    Tu Pedido
                                </span>
                                {items.length > 0 && (
                                    <span className="px-2 py-0.5 rounded-full text-xs font-black" style={{ backgroundColor: "#FF6600", color: "#fff" }}>
                                        {items.reduce((s, i) => s + i.quantity, 0)}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                {items.length > 0 && (
                                    <button onClick={clearCart} className="text-xs text-gray-400 flex items-center gap-1 hover:text-red-500 transition-colors">
                                        <FaTrash size={10} /> Vaciar
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "#FFF0E8" }}
                                >
                                    <FaTimes style={{ color: "#FF6600" }} size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable body */}
                        <div className="flex-1 overflow-y-auto overscroll-contain">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-16 gap-3">
                                    <span className="text-5xl">🛒</span>
                                    <p className="text-gray-400 font-medium text-sm">Tu carrito está vacío</p>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="px-5 py-2 rounded-full text-sm font-black"
                                        style={{ backgroundColor: "#FF6600", color: "#fff" }}
                                    >
                                        Ver el Menú 🍗
                                    </button>
                                </div>
                            ) : (
                                <div className="px-4 py-3 flex flex-col gap-3">
                                    {/* Items */}
                                    {items.map((item) => {
                                        const unitPrice = item.product.price + (item.addTapioca ? 500 : 0);
                                        return (
                                            <div
                                                key={`${item.product.id}-${item.addTapioca}`}
                                                className="flex items-center gap-3 p-3 rounded-2xl"
                                                style={{ backgroundColor: "#FFF7ED", border: "1px solid #FFE0C0" }}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-black text-sm leading-tight" style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}>
                                                        {item.product.name}
                                                        {item.addTapioca && (
                                                            <span className="ml-1 text-xs font-semibold" style={{ color: "#9333EA" }}>+Tapioca</span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs font-bold mt-0.5" style={{ color: "#CC0000" }}>
                                                        {formatPrice(unitPrice)} c/u
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.quantity - 1)}
                                                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90"
                                                        style={{ backgroundColor: item.quantity === 1 ? "#FFE0C0" : "#FF6600", color: item.quantity === 1 ? "#FF6600" : "#fff" }}
                                                    >
                                                        {item.quantity === 1 ? <FaTrash size={10} /> : <FaMinus size={10} />}
                                                    </button>
                                                    <span className="w-5 text-center font-black text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.quantity + 1)}
                                                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90"
                                                        style={{ backgroundColor: "#FF6600", color: "#fff" }}
                                                    >
                                                        <FaPlus size={10} />
                                                    </button>
                                                </div>
                                                <p className="font-black text-sm flex-shrink-0 w-16 text-right" style={{ color: "#1a1a1a" }}>
                                                    {formatPrice(unitPrice * item.quantity)}
                                                </p>
                                            </div>
                                        );
                                    })}

                                    {/* Total bar */}
                                    <div className="flex items-center justify-between px-3 py-3 rounded-2xl mt-1" style={{ backgroundColor: "#FF6600" }}>
                                        <span className="font-black text-white text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>Total</span>
                                        <span className="font-black text-white text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>{formatPrice(total)}</span>
                                    </div>

                                    {/* Mode selector */}
                                    <div className="mt-1">
                                        <p className="text-xs font-black text-gray-500 mb-2 uppercase tracking-wider">¿Cómo querés recibir tu pedido?</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {(["retiro", "delivery"] as const).map((m) => (
                                                <button
                                                    key={m}
                                                    onClick={() => setMode(m)}
                                                    className="flex flex-col items-center gap-1 py-3 rounded-2xl font-black text-sm transition-all"
                                                    style={{
                                                        backgroundColor: mode === m ? "#FF6600" : "#FFF0E8",
                                                        color: mode === m ? "#fff" : "#FF6600",
                                                        border: `2px solid ${mode === m ? "#FF6600" : "#FFE0C0"}`,
                                                    }}
                                                >
                                                    {m === "retiro" ? <FaStore size={18} /> : <FaMotorcycle size={18} />}
                                                    {m === "retiro" ? "Retiro en Local" : "Delivery"}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <div className="flex flex-col gap-2 pb-2">
                                        <input
                                            type="text"
                                            placeholder={mode === "retiro" ? "Tu nombre (opcional)" : "Tu nombre *"}
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                            style={{ border: "1.5px solid #FFE0C0", backgroundColor: "#FFF7ED", fontFamily: "'Inter', sans-serif" }}
                                        />
                                        {mode === "delivery" && (
                                            <>
                                                <input
                                                    type="text"
                                                    placeholder="Dirección de entrega *"
                                                    value={direccion}
                                                    onChange={(e) => setDireccion(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                                    style={{ border: "1.5px solid #FFE0C0", backgroundColor: "#FFF7ED", fontFamily: "'Inter', sans-serif" }}
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Teléfono de contacto (opcional)"
                                                    value={telefono}
                                                    onChange={(e) => setTelefono(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                                    style={{ border: "1.5px solid #FFE0C0", backgroundColor: "#FFF7ED", fontFamily: "'Inter', sans-serif" }}
                                                />
                                                <textarea
                                                    placeholder="Referencias (piso, depto, indicaciones...)"
                                                    value={referencias}
                                                    onChange={(e) => setReferencias(e.target.value)}
                                                    rows={2}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                                    style={{ border: "1.5px solid #FFE0C0", backgroundColor: "#FFF7ED", fontFamily: "'Inter', sans-serif" }}
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="flex-shrink-0 px-4 py-4" style={{ borderTop: "1px solid #FFE0C0", backgroundColor: "#fff" }}>
                                <button
                                    onClick={handleOrder}
                                    disabled={!canOrder}
                                    className="w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                                    style={{
                                        backgroundColor: canOrder ? "#25D366" : "#ccc",
                                        color: "#fff",
                                        fontFamily: "'Outfit', sans-serif",
                                        boxShadow: canOrder ? "0 4px 20px rgba(37,211,102,0.35)" : "none",
                                    }}
                                >
                                    <FaWhatsapp size={20} />
                                    Confirmar Pedido
                                    {mode === "delivery" && !canOrder && items.length > 0 && (
                                        <span className="text-xs font-normal ml-1">(completá los datos)</span>
                                    )}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
