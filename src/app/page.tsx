"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import CartDrawer from "@/components/CartDrawer";
import {
  combosPersonal,
  combosDoble,
  combosFamiliar,
  principales,
  coreano,
  snacks,
  aperitivos,
  bobaLeche,
  bobaJugo,
  bobaQueso,
} from "@/data/products";
import { motion } from "framer-motion";

type MenuView = "food" | "boba";

export default function HomePage() {
  const [menuView, setMenuView] = useState<MenuView>("food");

  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Slider with personal combos as featured */}
      <SliderSection products={[...combosPersonal, ...combosDoble.slice(0, 2)]} />

      {/* Menu toggle: Comida vs Jugos & Boba */}
      <div id="menu" className="sticky top-16 z-30 py-3 px-4" style={{ backgroundColor: "#fff", borderBottom: "1px solid #FFE0C0" }}>
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <h2 className="font-black text-lg shrink-0" style={{ fontFamily: "'Outfit', sans-serif", color: "#FF6600" }}>
            🍽️ Nuestro Menú
          </h2>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setMenuView("food")}
              className="px-4 py-1.5 rounded-full text-sm font-black transition-all"
              style={{
                backgroundColor: menuView === "food" ? "#FF6600" : "#FFF0E8",
                color: menuView === "food" ? "#fff" : "#FF6600",
                border: "2px solid #FF6600",
              }}
            >
              🍗 Comidas
            </button>
            <button
              onClick={() => setMenuView("boba")}
              className="px-4 py-1.5 rounded-full text-sm font-black transition-all"
              style={{
                backgroundColor: menuView === "boba" ? "#9333EA" : "#F5F0FF",
                color: menuView === "boba" ? "#fff" : "#9333EA",
                border: "2px solid #9333EA",
              }}
            >
              🧋 Jugos & Boba
            </button>
          </div>
        </div>
      </div>

      {/* FOOD MENU */}
      {menuView === "food" && (
        <motion.div
          key="food"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CategorySection id="combos-personal" title="Combos Personales" emoji="🍗" accentColor="#FF6600" products={combosPersonal} />
          <CategorySection id="combos-doble" title="Combos Doble Personal" emoji="🔥" accentColor="#E05500" products={combosDoble} />
          <CategorySection id="combos-familiar" title="Combos Familiares" emoji="👨‍👩‍👧" accentColor="#CC0000" products={combosFamiliar} />
          <CategorySection id="principales" title="Platos Principales" emoji="🍔" accentColor="#CC0000" products={principales} />
          <CategorySection id="coreano" title="Estilo Coreano 韩式" emoji="🇰🇷" accentColor="#FF6600" products={coreano} />
          <CategorySection id="snacks" title="Snacks Especiales" emoji="⭐" accentColor="#E05500" products={snacks} />
          <CategorySection id="aperitivos" title="Aperitivos" emoji="🥢" accentColor="#FF6600" products={aperitivos} />
        </motion.div>
      )}

      {/* BOBA / JUGOS MENU */}
      {menuView === "boba" && (
        <motion.div
          key="boba"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tapioca banner */}
          <div className="py-3 px-4">
            <div className="max-w-7xl mx-auto">
              <div
                className="flex items-center justify-between px-5 py-3 rounded-2xl"
                style={{ backgroundColor: "#9333EA", color: "#fff" }}
              >
                <div>
                  <p className="font-black text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    🧋 Agrega Tapioca a cualquier bebida
                  </p>
                  <p className="text-xs opacity-80">Solo +$500 — marcá la opción al agregar</p>
                </div>
                <span className="text-2xl font-black" style={{ fontFamily: "'Outfit', sans-serif" }}>+$500</span>
              </div>
            </div>
          </div>

          <CategorySection id="boba-leche" title="Sobre de Leche 奶茶系列" emoji="🥛" accentColor="#9333EA" products={bobaLeche} />
          <CategorySection id="boba-jugo" title="Sobre Jugo 果茶系列" emoji="🍊" accentColor="#F59E0B" products={bobaJugo} />
          <CategorySection id="boba-queso" title="Jugo Con Queso y Malteada 芝士系列" emoji="🧀" accentColor="#EC4899" products={bobaQueso} />
        </motion.div>
      )}

      <Footer />
      <FloatingCart />
      <CartDrawer />
    </main>
  );
}
