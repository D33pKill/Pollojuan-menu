export type Category = "combos" | "pollo" | "hamburguesas" | "bebidas";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    category: Category;
    image: string;
    badge?: string;
    isCombo?: boolean;
}

// ─── Combos ──────────────────────────────────────────────────────────────────
export const combos: Product[] = [
    {
        id: "c1",
        name: "Combo Familiar Supreme",
        description: "12 pzas de pollo, 4 papas medianas, 4 bebidas y salsa picante",
        price: "$8.990",
        category: "combos",
        // Balde de pollo frito familiar – Unsplash by Thomas Marban
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&auto=format",
        badge: "🔥 El más pedido",
        isCombo: true,
    },
    {
        id: "c2",
        name: "Combo Pareja Crispy",
        description: "4 pzas de pollo crispy, 2 papas fritas grandes y 2 bebidas",
        price: "$5.490",
        category: "combos",
        // Pollo crispy estilo coreano con papas – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop&auto=format",
        badge: "❤️ Para dos",
        isCombo: true,
    },
    {
        id: "c3",
        name: "Combo Power Burger",
        description: "Burger doble + 4 alitas + papas + bebida a elección",
        price: "$4.990",
        category: "combos",
        // Hamburguesa con papas fritas – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&auto=format",
        badge: "💥 Nuevo",
        isCombo: true,
    },
    {
        id: "c4",
        name: "Combo Bubble Party",
        description: "6 piezas de pollo + 2 bubble teas sabor a elección",
        price: "$6.290",
        category: "combos",
        // Pollo frito con bubble tea – Unsplash by Mae Mu
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop&auto=format",
        badge: "🧋 Especial",
        isCombo: true,
    },
    {
        id: "c5",
        name: "Combo Solo Clásico",
        description: "2 pzas de pollo, papas medianas y bebida",
        price: "$2.990",
        category: "combos",
        // Pollo frito individual con papas – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1585325701954-8f5ac09e2c47?w=600&h=400&fit=crop&auto=format",
        isCombo: true,
    },
];

// ─── Pollo ───────────────────────────────────────────────────────────────────
export const polloItems: Product[] = [
    {
        id: "p1",
        name: "Pollo Crispy (2 pzas)",
        description: "Masa crocante estilo asiático, jugoso por dentro. Disponible en Original o Picante.",
        price: "$2.190",
        category: "pollo",
        // Piezas de pollo crispy dorado – Unsplash by Eiliv Aceron
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=500&h=350&fit=crop&auto=format",
        badge: "Original / Picante",
    },
    {
        id: "p2",
        name: "Alitas BBQ (8 pzas)",
        description: "Alitas adobadas al estilo coreano, glaseadas con salsa BBQ dulce.",
        price: "$3.490",
        category: "pollo",
        // Alitas BBQ glaseadas – Unsplash by Eiliv Aceron
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=350&fit=crop&auto=format",
    },
    {
        id: "p3",
        name: "Nuggets de Pollo (10 pzas)",
        description: "Doraditos y crujientes. Acompáñalos con dip de miel-mostaza o BBQ.",
        price: "$1.990",
        category: "pollo",
        // Nuggets dorados con salsa – Unsplash by Shaafi Ali
        image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&h=350&fit=crop&auto=format",
    },
    {
        id: "p4",
        name: "Balde Pollo Entero",
        description: "10 piezas de pollo original, extra crocante, ideal para compartir.",
        price: "$7.490",
        category: "pollo",
        // Balde grande de pollo frito – Unsplash by Thomas Marban
        image: "https://images.unsplash.com/photo-1659951093804-0aef25efe52c?w=500&h=350&fit=crop&auto=format",
        badge: "🏆 Super Tamaño",
    },
];

// ─── Hamburguesas ─────────────────────────────────────────────────────────────
export const hamburguesasItems: Product[] = [
    {
        id: "h1",
        name: "Burger Juan Clásica",
        description: "Posta de pollo crispy, lechuga, tomate, cheddar fundido y salsa especial.",
        price: "$2.790",
        category: "hamburguesas",
        // Hamburguesa de pollo clásica – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=350&fit=crop&auto=format",
    },
    {
        id: "h2",
        name: "Burger Doble Crunch",
        description: "Dos postas de pollo con queso doble, pepinillos y mayonesa sriracha.",
        price: "$3.490",
        category: "hamburguesas",
        // Burger doble extragrande – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop&crop=top&auto=format",
        badge: "💥 Doble potencia",
    },
    {
        id: "h3",
        name: "Burger BBQ Bacon",
        description: "Pollo crispy, bacon ahumado, queso suizo, cebolla caramelizada y BBQ.",
        price: "$3.290",
        category: "hamburguesas",
        // Burger con bacon – Unsplash by amirali mirhashemian
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&h=350&fit=crop&auto=format",
    },
];

// ─── Bebidas ──────────────────────────────────────────────────────────────────
export const bebidasItems: Product[] = [
    {
        id: "b1",
        name: "Bubble Tea Taro",
        description: "Té de taro cremoso con perlas de tapioca. Tamaño grande.",
        price: "$1.990",
        category: "bebidas",
        // Bubble tea morado/taro – Unsplash by Mae Mu
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&auto=format",
        badge: "🧋 Estrella",
    },
    {
        id: "b2",
        name: "Bubble Tea Maracuyá",
        description: "Té verde con pulpa de maracuyá y perlas de tapioca.",
        price: "$1.990",
        category: "bebidas",
        // Bubble tea amarillo/tropical – Unsplash by Mae Mu
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&h=350&fit=crop&auto=format",
    },
    {
        id: "b3",
        name: "Bebida Gaseosa",
        description: "Coca-Cola, Sprite o Fanta. Vaso grande con hielo.",
        price: "$990",
        category: "bebidas",
        // Vaso de refresco con hielo y straw – Unsplash
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500&h=350&fit=crop&auto=format",
    },
    {
        id: "b4",
        name: "Limonada Jengibre",
        description: "Limonada artesanal con jengibre fresco y miel. Refrescante y natural.",
        price: "$1.490",
        category: "bebidas",
        // Limonada artesanal con menta – Unsplash
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=350&fit=crop&auto=format",
    },
];

export const allProducts: Product[] = [
    ...combos,
    ...polloItems,
    ...hamburguesasItems,
    ...bebidasItems,
];
