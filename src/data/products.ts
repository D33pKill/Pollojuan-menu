export type Category =
    | "combos-personal"
    | "combos-doble"
    | "combos-familiar"
    | "principales"
    | "coreano"
    | "snacks"
    | "aperitivos"
    | "boba-leche"
    | "boba-jugo"
    | "boba-queso";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // en pesos CLP
    price2?: number; // segunda opción de tamaño (700ml)
    category: Category;
    image: string;
    badge?: string;
    isCombo?: boolean;
    tapiocaOption?: boolean; // para bebidas que pueden agregar tapioca
}

const UNSPLASH = {
    chicken: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&auto=format",
    chickenCrispy: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&h=400&fit=crop&auto=format",
    chickenWings: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&h=400&fit=crop&auto=format",
    chickenBucket: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop&auto=format",
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&auto=format",
    burgerCheese: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&h=400&fit=crop&auto=format",
    fish: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop&auto=format",
    fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop&auto=format",
    hotdog: "https://images.unsplash.com/photo-1612392061787-2d597e9e8438?w=600&h=400&fit=crop&auto=format",
    dumplings: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=400&fit=crop&auto=format",
    springroll: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop&auto=format",
    milktea: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    fruittea: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop&auto=format",
    milkteaPurple: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&auto=format",
    milkteaStrawberry: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&auto=format",
    fruitjuice: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop&auto=format",
    mango: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=400&fit=crop&auto=format",
    korean: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop&auto=format",
    nuggets: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&h=400&fit=crop&auto=format",
    onionrings: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&fit=crop&auto=format",
};

// ─── Combos Personales A / B / C ─────────────────────────────────────────────
export const combosPersonal: Product[] = [
    {
        id: "cp-a",
        name: "Combo A",
        description: "2 Trutros Ala + 1 Papa 薯条 + 1 Bebida 350ml",
        price: 5990,
        category: "combos-personal",
        image: UNSPLASH.chicken,
        badge: "🔥 El más pedido",
        isCombo: true,
    },
    {
        id: "cp-b",
        name: "Combo B",
        description: "2 Trutros Ala Media Picante + 1 Papa + 1 Bebida 350ml",
        price: 5990,
        category: "combos-personal",
        image: UNSPLASH.chickenCrispy,
        badge: "🌶 Picante",
        isCombo: true,
    },
    {
        id: "cp-c",
        name: "Combo C",
        description: "2 Trutros Largo + 1 Papa + 1 Bebida 350ml",
        price: 6490,
        category: "combos-personal",
        image: UNSPLASH.chickenWings,
        isCombo: true,
    },
    {
        id: "cp-d",
        name: "Combo D",
        description: "1 Trutro Largo + 1 Trutro Ala + 1 Papa + 1 Bebida 350ml",
        price: 6490,
        category: "combos-personal",
        image: UNSPLASH.chicken,
        isCombo: true,
    },
    {
        id: "cp-e",
        name: "Combo E — Burger",
        description: "1 Burger de Pollo + 1 Papa + 1 Bebida 350ml",
        price: 6490,
        category: "combos-personal",
        image: UNSPLASH.burger,
        isCombo: true,
    },
];

// ─── Combos Doble Personal ───────────────────────────────────────────────────
export const combosDoble: Product[] = [
    {
        id: "cd-1",
        name: "Combo Doble Personal 1",
        description: "4 Trutro Ala + 4 Ala Media Picante + 2 Trutro Largo + 8 Pop De Pollo Pechuga + 2 Coca Lata 350ml",
        price: 18500,
        category: "combos-doble",
        image: UNSPLASH.chickenBucket,
        badge: "💥 NUEVO",
        isCombo: true,
    },
    {
        id: "cd-2",
        name: "Combo Doble Personal 2",
        description: "2 Trutro Largo + 4 Trutro Ala + 16 Pop De Pollo Pechuga + 2 Coca Lata 350ml",
        price: 18500,
        category: "combos-doble",
        image: UNSPLASH.chicken,
        badge: "💥 NUEVO",
        isCombo: true,
    },
    {
        id: "cd-3",
        name: "Combo Doble Personal 3",
        description: "4 Trutro Largo + 8 Trutro Ala + 2 Coca Lata 350ml",
        price: 17500,
        category: "combos-doble",
        image: UNSPLASH.chickenWings,
        badge: "💥 NUEVO",
        isCombo: true,
    },
];

// ─── Combos Familiares ────────────────────────────────────────────────────────
export const combosFamiliar: Product[] = [
    {
        id: "cf-1",
        name: "Familiar 1",
        description: "8 Pollos + Harina De Arroz Glutinoso + 5 Sz St Año Rico",
        price: 6000,
        category: "combos-familiar",
        image: UNSPLASH.chickenBucket,
        badge: "👨‍👩‍👧 Familiar",
        isCombo: true,
    },
    {
        id: "cf-2",
        name: "Familiar 2",
        description: "8 Pollos + Harina De Arroz Glutinoso + Relleno",
        price: 6000,
        category: "combos-familiar",
        image: UNSPLASH.chicken,
        badge: "👨‍👩‍👧 Familiar",
        isCombo: true,
    },
    {
        id: "cf-3",
        name: "Familiar 3 — Trutro Ala + Papa",
        description: "4 Pollo Trutro Ala + Harina De Arroz Glutinoso + 5 Sz St Año Rico",
        price: 5500,
        category: "combos-familiar",
        image: UNSPLASH.chickenCrispy,
        isCombo: true,
    },
    {
        id: "cf-4",
        name: "Familiar 4 — Trutro Alaxpapa",
        description: "4 Trutro Ala + Papa + Relleno + Relleno (100% Pechuga De Pollo)",
        price: 5500,
        category: "combos-familiar",
        image: UNSPLASH.fries,
        isCombo: true,
    },
];

// ─── Platos Principales ───────────────────────────────────────────────────────
export const principales: Product[] = [
    {
        id: "pr-1",
        name: "Carne Con Tocino",
        description: "Burger de carne con tocino ahumado, lechuga, tomate y salsa especial",
        price: 3700,
        category: "principales",
        image: UNSPLASH.burger,
    },
    {
        id: "pr-2",
        name: "Italiano",
        description: "Burger de pollo estilo italiano, mozzarella fundida y salsa italiana",
        price: 2500,
        category: "principales",
        image: UNSPLASH.burgerCheese,
    },
    {
        id: "pr-3",
        name: "Carne Doble",
        description: "Doble posta de carne 牛油星堡 con queso fundido y pepinillos",
        price: 4100,
        category: "principales",
        image: UNSPLASH.burger,
    },
    {
        id: "pr-4",
        name: "Doble Carne Sz Año Rico",
        description: "Doble burger de carne con queso sz año rico, cebolla caramelizada",
        price: 4500,
        category: "principales",
        image: UNSPLASH.burgerCheese,
        badge: "⭐ Popular",
    },
    {
        id: "pr-5",
        name: "Pescado Doble Con Queso",
        description: "Doble filete de pescado crujiente con queso y salsa tártara",
        price: 4100,
        category: "principales",
        image: UNSPLASH.fish,
    },
    {
        id: "pr-6",
        name: "Burger Camarón",
        description: "Burger de camarones crispy, tomate y mayonesa de ajo",
        price: 4000,
        category: "principales",
        image: UNSPLASH.burgerCheese,
    },
    {
        id: "pr-7",
        name: "Burrito De Pechuga",
        description: "Burrito de pechuga de pollo crispy con vegetales frescos y salsa especial",
        price: 4000,
        category: "principales",
        image: UNSPLASH.chickenCrispy,
    },
    {
        id: "pr-8",
        name: "Hamburguesa Pechuga",
        description: "Pechuga de pollo crispy, lechuga, tomate y mayo especial",
        price: 4000,
        category: "principales",
        image: UNSPLASH.burger,
        badge: "🍗 Crispy",
    },
];

// ─── Estilo Coreano ───────────────────────────────────────────────────────────
export const coreano: Product[] = [
    {
        id: "cor-1",
        name: "8 Pollos + Arroz Glutinoso",
        description: "8 piezas de pollo coreano + Harina De Arroz Glutinoso + 5 Sz St Año Rico",
        price: 6000,
        category: "coreano",
        image: UNSPLASH.korean,
        badge: "🇰🇷 Coreano",
    },
    {
        id: "cor-2",
        name: "8 Pollos + Relleno",
        description: "8 pollos estilo coreano con relleno especial y salsa",
        price: 6000,
        category: "coreano",
        image: UNSPLASH.korean,
        badge: "🇰🇷 Coreano",
    },
    {
        id: "cor-3",
        name: "4 Trutro Ala + Arroz Glutinoso",
        description: "4 trutros ala + Harina De Arroz Glutinoso + 5 Sz St Año Rico",
        price: 5500,
        category: "coreano",
        image: UNSPLASH.chickenWings,
    },
    {
        id: "cor-4",
        name: "4 Trutro Ala + Papa Crispy",
        description: "4 trutros ala coreanos + papa crispy + relleno",
        price: 5500,
        category: "coreano",
        image: UNSPLASH.chickenCrispy,
    },
];

// ─── Snacks Especiales ─────────────────────────────────────────────────────────
export const snacks: Product[] = [
    {
        id: "sn-1",
        name: "Nuggets (5 pzas)",
        description: "Nuggets 鸡 米花 dorados y crujientes, 5 piezas",
        price: 1600,
        category: "snacks",
        image: UNSPLASH.nuggets,
    },
    {
        id: "sn-2",
        name: "Pop Corn Pollo (8 pzas)",
        description: "Popcorn de pollo crocante estilo asiático, 8 piezas",
        price: 2400,
        category: "snacks",
        image: UNSPLASH.chickenCrispy,
        badge: "🍿 Favorito",
    },
    {
        id: "sn-3",
        name: "Palito 卡蛋鸡排棒",
        description: "Palito de pollo crocante con salsa especial",
        price: 2000,
        category: "snacks",
        image: UNSPLASH.chickenCrispy,
    },
    {
        id: "sn-4",
        name: "Pechuga 鸡排",
        description: "Pechuga de pollo crispy entera, jugosa y crujiente",
        price: 3500,
        category: "snacks",
        image: UNSPLASH.chickenCrispy,
    },
    {
        id: "sn-5",
        name: "Trutro Largo (1 pza)",
        description: "Trutro largo de pollo crujiente, receta original",
        price: 1800,
        category: "snacks",
        image: UNSPLASH.chicken,
    },
    {
        id: "sn-6",
        name: "Palito 简单鸡 (1 pza)",
        description: "Palito sencillo de pollo, masa fina y crujiente",
        price: 2000,
        category: "snacks",
        image: UNSPLASH.chickenCrispy,
    },
    {
        id: "sn-7",
        name: "Brocheta Pollo (2 pzas)",
        description: "2 brochetas de pollo a la brasa estilo coreano",
        price: 1800,
        category: "snacks",
        image: UNSPLASH.chickenWings,
    },
    {
        id: "sn-8",
        name: "Pierna De Pollo Orleans (4 pzas)",
        description: "4 piernas de pollo estilo Orleans, crujientes y sabrosas",
        price: 4500,
        category: "snacks",
        image: UNSPLASH.chickenWings,
        badge: "🔥 Especial",
    },
    {
        id: "sn-9",
        name: "Ala Media (2 pzas)",
        description: "2 alas medias de pollo, masa crocante",
        price: 2300,
        category: "snacks",
        image: UNSPLASH.chickenWings,
    },
    {
        id: "sn-10",
        name: "Pastel Arroz Coreano Con Queso",
        description: "Pastel de arroz coreano con queso original, 10 pzas",
        price: 3900,
        category: "snacks",
        image: UNSPLASH.korean,
    },
    {
        id: "sn-11",
        name: "Ala Media Con Queso (5 pzas)",
        description: "5 alas medias con queso derretido, estilo coreano",
        price: 4000,
        category: "snacks",
        image: UNSPLASH.chickenWings,
    },
    {
        id: "sn-12",
        name: "Trutro Con Queso (4 pzas)",
        description: "4 trutros coreanos con queso fundido encima",
        price: 5000,
        category: "snacks",
        image: UNSPLASH.chicken,
        badge: "🧀 Con Queso",
    },
];

// ─── Aperitivos ───────────────────────────────────────────────────────────────
export const aperitivos: Product[] = [
    {
        id: "ap-1",
        name: "Completo 热狗 (16cm)",
        description: "Hot dog clásico de 16cm con mayo, mostaza y salsas",
        price: 1800,
        category: "aperitivos",
        image: UNSPLASH.hotdog,
    },
    {
        id: "ap-2",
        name: "Salchi Papa",
        description: "Papas fritas con salchichas troceadas y salsas",
        price: 2100,
        category: "aperitivos",
        image: UNSPLASH.fries,
        badge: "⭐ Favorito",
    },
    {
        id: "ap-3",
        name: "Pescado 鳕鱼排 (2 pzas)",
        description: "2 filetes de pescado crujiente al estilo asiático",
        price: 2500,
        category: "aperitivos",
        image: UNSPLASH.fish,
    },
    {
        id: "ap-4",
        name: "Papa Familia 薯条家庭",
        description: "Porción familiar de papas fritas crujientes",
        price: 3900,
        category: "aperitivos",
        image: UNSPLASH.fries,
        badge: "👨‍👩‍👧 Familiar",
    },
    {
        id: "ap-5",
        name: "Tofu De Pescado (5 pzas)",
        description: "5 piezas de tofu de pescado 鱼豆腐, crujiente por fuera",
        price: 1600,
        category: "aperitivos",
        image: UNSPLASH.fish,
    },
    {
        id: "ap-6",
        name: "Pop Dulce 香芋 (4 pzas)",
        description: "4 bolitas dulces de taro fritas, suaves y esponjosas",
        price: 2100,
        category: "aperitivos",
        image: UNSPLASH.nuggets,
    },
    {
        id: "ap-7",
        name: "Mini Salchicha 亲嘴肠 (5 pzas)",
        description: "5 mini salchichas crujientes tipo coreano",
        price: 2400,
        category: "aperitivos",
        image: UNSPLASH.hotdog,
    },
    {
        id: "ap-8",
        name: "Primavera 春卷 (4 pzas)",
        description: "4 rollitos primavera crujientes con relleno de vegetales",
        price: 1900,
        category: "aperitivos",
        image: UNSPLASH.springroll,
    },
    {
        id: "ap-9",
        name: "Empana Queso (5 pzas)",
        description: "5 empanaditas de queso fundido, masa crocante",
        price: 1600,
        category: "aperitivos",
        image: UNSPLASH.nuggets,
    },
    {
        id: "ap-10",
        name: "Aros De Cebolla (5 pzas)",
        description: "5 aros de cebolla rebozados y crujientes",
        price: 1400,
        category: "aperitivos",
        image: UNSPLASH.onionrings,
    },
    {
        id: "ap-11",
        name: "Gyosa De Cerdo 炸饺子 (4 pzas)",
        description: "4 gyosas de cerdo fritas, doradas y jugosas",
        price: 1600,
        category: "aperitivos",
        image: UNSPLASH.dumplings,
    },
    {
        id: "ap-12",
        name: "Papa 薯条",
        description: "Porción personal de papas fritas crujientes",
        price: 1500,
        category: "aperitivos",
        image: UNSPLASH.fries,
    },
    {
        id: "ap-13",
        name: "Wantán (5 pzas)",
        description: "5 wantanes fritos, crujientes y rellenos",
        price: 1100,
        category: "aperitivos",
        image: UNSPLASH.dumplings,
    },
];

// ─── Bebidas: Sobre de Leche (Bubble Tea) ─────────────────────────────────────
export const bobaLeche: Product[] = [
    {
        id: "bl-1",
        name: "Tapioca Clásico",
        description: "Té de leche clásico con perlas de tapioca — 500ml / 700ml",
        price: 2800,
        price2: 3200,
        category: "boba-leche",
        image: UNSPLASH.milktea,
        badge: "⭐ Clásico",
        tapiocaOption: true,
    },
    {
        id: "bl-2",
        name: "Coco 椰果奶茶",
        description: "Té de leche con coco y tapioca — 500ml / 700ml",
        price: 2800,
        price2: 3200,
        category: "boba-leche",
        image: UNSPLASH.milkteaStrawberry,
        tapiocaOption: true,
    },
    {
        id: "bl-3",
        name: "Poroto 红豆奶茶",
        description: "Té de leche con poroto rojo (red bean) — 500ml / 700ml",
        price: 2800,
        price2: 3200,
        category: "boba-leche",
        image: UNSPLASH.milkteaPurple,
        tapiocaOption: true,
    },
    {
        id: "bl-4",
        name: "Menta Con Leche",
        description: "Té de leche con menta fresca — 500ml (OFERTA)",
        price: 2500,
        category: "boba-leche",
        image: UNSPLASH.milktea,
        badge: "🟢 Oferta",
        tapiocaOption: true,
    },
    {
        id: "bl-5",
        name: "Chocolate Con Leche",
        description: "Té de leche con chocolate suizo — 700ml",
        price: 3500,
        category: "boba-leche",
        image: UNSPLASH.milktea,
        tapiocaOption: true,
    },
    {
        id: "bl-6",
        name: "Mango Con Leche",
        description: "Té de leche con mango y jazmín — 700ml",
        price: 4000,
        category: "boba-leche",
        image: UNSPLASH.mango,
        badge: "🥭 Tropical",
        tapiocaOption: true,
    },
    {
        id: "bl-7",
        name: "Uva Con Leche",
        description: "Té de leche con uva y coco 葡萄椰乳 — 700ml",
        price: 4000,
        category: "boba-leche",
        image: UNSPLASH.milkteaPurple,
        tapiocaOption: true,
    },
    {
        id: "bl-8",
        name: "Leche Familiar 1000ml",
        description: "Té de leche clásico en tamaño familiar — 1000ml",
        price: 6000,
        category: "boba-leche",
        image: UNSPLASH.milktea,
        badge: "👨‍👩‍👧 1 Litro",
        tapiocaOption: true,
    },
];

// ─── Bebidas: Sobre Jugo (Té de frutas) ──────────────────────────────────────
export const bobaJugo: Product[] = [
    {
        id: "bj-1",
        name: "Maracuyá",
        description: "Té de maracuyá fresco con perlas de tapioca — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.fruittea,
        badge: "🌟 Popular",
        tapiocaOption: true,
    },
    {
        id: "bj-2",
        name: "Limonada",
        description: "Té de limón helado, refrescante y ácido — 700ml",
        price: 2500,
        category: "boba-jugo",
        image: UNSPLASH.fruitjuice,
        tapiocaOption: true,
    },
    {
        id: "bj-3",
        name: "Piña (Vitamina C)",
        description: "Té de piña con vitamina C y frutas — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.fruittea,
        tapiocaOption: true,
    },
    {
        id: "bj-4",
        name: "Mango",
        description: "Té de mango tropical refrescante — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.mango,
        badge: "🥭 Tropical",
        tapiocaOption: true,
    },
    {
        id: "bj-5",
        name: "Mango Con Pomelo",
        description: "Té de mango y pomelo, sabor cítrico dulce — 700ml",
        price: 4300,
        category: "boba-jugo",
        image: UNSPLASH.mango,
        tapiocaOption: true,
    },
    {
        id: "bj-6",
        name: "Fruta Familiar 1000ml",
        description: "Té de frutas variadas en tamaño familiar — 1000ml",
        price: 6000,
        category: "boba-jugo",
        image: UNSPLASH.fruittea,
        badge: "👨‍👩‍👧 1 Litro",
        tapiocaOption: true,
    },
    {
        id: "bj-7",
        name: "Uva Púrpura",
        description: "Té de uva purpura 香柠红葡萄 con hielo — 700ml",
        price: 4200,
        category: "boba-jugo",
        image: UNSPLASH.milkteaPurple,
        tapiocaOption: true,
    },
    {
        id: "bj-8",
        name: "Sandía",
        description: "Té de sandía fría, dulce y refrescante — 700ml",
        price: 3700,
        category: "boba-jugo",
        image: UNSPLASH.fruittea,
        tapiocaOption: true,
    },
    {
        id: "bj-9",
        name: "Naranja",
        description: "Té de naranja fresca con hielo 霸气橙 — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.fruitjuice,
        tapiocaOption: true,
    },
    {
        id: "bj-10",
        name: "Menta Con Limón",
        description: "Té de menta y limón helado, super refrescante — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.fruitjuice,
        tapiocaOption: true,
    },
    {
        id: "bj-11",
        name: "Frutilla",
        description: "Té de frutilla (strawberry) fresco — 700ml",
        price: 4000,
        category: "boba-jugo",
        image: UNSPLASH.milkteaStrawberry,
        badge: "🍓 Frutilla",
        tapiocaOption: true,
    },
    {
        id: "bj-12",
        name: "Miel Con Pomelo",
        description: "Té de miel y pomelo 蜂蜜柚子茶 — 700ml",
        price: 3500,
        category: "boba-jugo",
        image: UNSPLASH.fruitjuice,
        tapiocaOption: true,
    },
];

// ─── Bebidas: Sobre Jugo Con Queso y Malteada ────────────────────────────────
export const bobaQueso: Product[] = [
    {
        id: "bq-1",
        name: "Piña Queso",
        description: "Té de piña con espuma de queso cremoso encima — 700ml",
        price: 4500,
        category: "boba-queso",
        image: UNSPLASH.fruittea,
        badge: "🧀 Con Queso",
        tapiocaOption: true,
    },
    {
        id: "bq-2",
        name: "Uva Queso",
        description: "Té de uva con espuma de queso — 700ml",
        price: 4500,
        category: "boba-queso",
        image: UNSPLASH.milkteaPurple,
        tapiocaOption: true,
    },
    {
        id: "bq-3",
        name: "Frutilla Queso",
        description: "Té de frutilla con espuma de queso suave — 700ml",
        price: 4500,
        category: "boba-queso",
        image: UNSPLASH.milkteaStrawberry,
        badge: "🍓 Frutilla",
        tapiocaOption: true,
    },
    {
        id: "bq-4",
        name: "Mango Queso",
        description: "Té de mango tropical con espuma de queso — 700ml",
        price: 4500,
        category: "boba-queso",
        image: UNSPLASH.mango,
        tapiocaOption: true,
    },
    {
        id: "bq-5",
        name: "Chocolate Queso",
        description: "Té de chocolate con queso suave cremoso encima — 700ml",
        price: 4000,
        category: "boba-queso",
        image: UNSPLASH.milktea,
        badge: "🍫 Chocolate",
        tapiocaOption: true,
    },
    {
        id: "bq-6",
        name: "Mora Queso",
        description: "Té de mora con espuma de queso 桑葚冰沙 — 700ml",
        price: 4000,
        category: "boba-queso",
        image: UNSPLASH.milkteaPurple,
        tapiocaOption: true,
    },
    {
        id: "bq-7",
        name: "Mochi (2x)",
        description: "2 mochis de sabor frutilla, mango o chocolate — una dupla perfecta",
        price: 3500,
        category: "boba-queso",
        image: UNSPLASH.milkteaStrawberry,
        badge: "🍡 Mochi",
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const allCombos: Product[] = [
    ...combosPersonal,
    ...combosDoble,
    ...combosFamiliar,
];

export const allBoba: Product[] = [
    ...bobaLeche,
    ...bobaJugo,
    ...bobaQueso,
];

export const allProducts: Product[] = [
    ...allCombos,
    ...principales,
    ...coreano,
    ...snacks,
    ...aperitivos,
    ...allBoba,
];

// Formato de precio en pesos chilenos
export function formatPrice(amount: number): string {
    return `$${amount.toLocaleString("es-CL")}`;
}
