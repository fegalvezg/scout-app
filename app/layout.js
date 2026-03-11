import "./globals.css";

export const metadata = {
  title: "SKAUT — Tu decisión de compra, simplificada",
  description:
    "Decide qué producto tecnológico comprar en 60 segundos. Sin ads, sin sponsors, solo criterio. Laptops, PCs, teléfonos, monitores, cámaras y más. Precios en Chile.",
  keywords: [
    "comparar productos tecnología Chile",
    "mejor laptop Chile",
    "qué computador comprar Chile",
    "reviews tecnología Chile",
    "comparador productos tech",
    "mejores productos tecnología",
    "skaut tech",
    "skaut.cl",
  ],
  openGraph: {
    title: "SKAUT — Decide en 60 segundos",
    description:
      "El sistema de decisión que te dice qué comprar y por qué. Dos opciones por categoría. Sin vueltas. Precios en tiendas chilenas.",
    type: "website",
    locale: "es_CL",
    url: "https://skaut.cl",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKAUT — Decide en 60 segundos",
    description: "Dos opciones. Sin vueltas. Solo criterio.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
