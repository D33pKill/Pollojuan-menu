import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { combos, polloItems, hamburguesasItems, bebidasItems } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SliderSection products={combos} />

      {/* Divider */}
      <div className="py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <h2
            className="font-black text-2xl shrink-0"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#FF6600" }}
          >
            🍽️ Nuestro Menú
          </h2>
          <div className="flex-1 h-0.5 bg-orange-100 rounded-full" />
        </div>
      </div>

      <CategorySection
        id="pollo"
        title="Pollo Frito"
        emoji="🍗"
        accentColor="#FF6600"
        products={polloItems}
      />
      <CategorySection
        id="hamburguesas"
        title="Hamburguesas"
        emoji="🍔"
        accentColor="#CC0000"
        products={hamburguesasItems}
      />
      <CategorySection
        id="bebidas"
        title="Bebidas & Bubble Tea"
        emoji="🧋"
        accentColor="#9333EA"
        products={bebidasItems}
      />

      <Footer />
    </main>
  );
}
