"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
    const { itemCount, setIsOpen, isOpen } = useCart();

    if (itemCount === 0) return null;

    return (
        <AnimatePresence>
            <motion.button
                key="floating-cart"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl"
                style={{
                    backgroundColor: "#FF6600",
                    color: "#fff",
                    fontFamily: "'Outfit', sans-serif",
                    boxShadow: "0 6px 24px rgba(255,102,0,0.5)",
                }}
                aria-label={`Abrir carrito — ${itemCount} items`}
            >
                <FaShoppingCart size={18} />
                <span className="font-black text-sm">Ver Pedido</span>
                <motion.span
                    key={itemCount}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0"
                    style={{ backgroundColor: "#FFD700", color: "#CC0000" }}
                >
                    {itemCount}
                </motion.span>
            </motion.button>
        </AnimatePresence>
    );
}
