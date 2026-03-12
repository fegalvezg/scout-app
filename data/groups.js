// ═══════════════════════════════════════════════════════════
// SKAUT — Grupos de categorías
// Para agregar una nueva categoría: añadir su key al array
// del grupo correspondiente. El orden dentro del array
// determina el orden de aparición en la pantalla de inicio.
// ═══════════════════════════════════════════════════════════

export const GROUPS = [
  {
    id: "computacion",
    icon: "🖥️",
    label: "Computación",
    desc: "Equipos y componentes para trabajar o jugar",
    // Futuros: perifericos, redes, almacenamiento
    categories: ["laptops", "pcescritorios", "componentespc", "monitores", "accesorioslaptops"],
  },
  {
    id: "movil",
    icon: "📱",
    label: "Móvil",
    desc: "Todo lo que llevas contigo",
    // Futuros: smartwatches, audifonos, tablets, accesoriostelefono
    categories: ["telefonos"],
  },
  {
    id: "imagensonido",
    icon: "🎵",
    label: "Imagen y Sonido",
    desc: "Lo que ves, escuchas y capturas",
    // Futuros: microfonos, accesoriosTv, drones, proyectores, homecinema
    categories: ["televisores", "parlantes", "camaras"],
  },
  {
    id: "accesorios",
    icon: "🔌",
    label: "Accesorios y Complementos",
    desc: "Lo que mejora lo que ya tienes",
    // Futuros: energia, escritorio, proteccion
    categories: ["impresoras"],
  },
  {
    id: "herramientas",
    icon: "🔨",
    label: "Herramientas",
    desc: "Para construir, reparar y crear",
    // Futuros: herramientasElectricas, herramientasManuales, impresoras3d, soldadura
    categories: [],
  },
];
