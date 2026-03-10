"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

export interface CartItem {
    product: Product;
    quantity: number;
    addTapioca?: boolean; // +$500 para bebidas boba
}

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, addTapioca?: boolean) => void;
    removeItem: (productId: string) => void;
    updateQty: (productId: string, qty: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((product: Product, addTapioca = false) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.product.id === product.id && i.addTapioca === addTapioca);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id && i.addTapioca === addTapioca
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { product, quantity: 1, addTapioca }];
        });
        setIsOpen(true);
    }, []);

    const removeItem = useCallback((productId: string) => {
        setItems((prev) => prev.filter((i) => i.product.id !== productId));
    }, []);

    const updateQty = useCallback((productId: string, qty: number) => {
        if (qty <= 0) {
            setItems((prev) => prev.filter((i) => i.product.id !== productId));
        } else {
            setItems((prev) =>
                prev.map((i) => (i.product.id === productId ? { ...i, quantity: qty } : i))
            );
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const total = items.reduce((sum, i) => {
        const basePrice = i.product.price;
        const tapiocaExtra = i.addTapioca ? 500 : 0;
        return sum + (basePrice + tapiocaExtra) * i.quantity;
    }, 0);

    const itemCount = items.reduce((s, i) => s + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQty, clearCart, total, itemCount, isOpen, setIsOpen }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}
