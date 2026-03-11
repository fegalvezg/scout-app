import "./globals.css";

export const metadata = {
  title: "SCOUT — Tu decisión de compra, simplificada",
  description:
    "Decide qué producto tecnológico comprar en 60 segundos. Sin ads, sin sponsors, solo criterio. Laptops, PCs, teléfonos, monitores, cámaras y más.",
  keywords: [
    "comparar productos tecnología",
    "mejor laptop",
    "qué computador comprar",
    "reviews tecnología Chile",
    "comparador productos tech",
  ],
  openGraph: {
    title: "SCOUT — Decide en 60 segundos",
    description:
      "El sistema de decisión que te dice qué comprar y por qué. Dos opciones por categoría. Sin vueltas.",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCOUT — Decide en 60 segundos",
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
