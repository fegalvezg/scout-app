# SCOUT — Tu decisión de compra, simplificada

Decide qué producto tecnológico comprar en 60 segundos.
Sin ads. Sin sponsors. Solo criterio.

## Estructura del proyecto

```
scout-nextjs/
├── app/
│   ├── globals.css      ← Estilos globales + animaciones
│   ├── layout.js        ← Layout raíz + metadata SEO
│   └── page.js          ← Página principal
├── components/
│   └── ScoutApp.jsx     ← Componente principal (client-side)
├── data/
│   └── products.js      ← Base de datos de productos
├── public/              ← Imágenes, favicon, etc.
├── package.json
├── next.config.js
├── tailwind.config.js
└── jsconfig.json
```

## Para correr en local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev

# 3. Abrir http://localhost:3000
```

## Deploy en Vercel (GRATIS)

### Opción A — Desde GitHub (recomendado)

1. Crea un repositorio en GitHub
2. Sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Scout v1.0"
   git remote add origin https://github.com/TU_USUARIO/scout-app.git
   git push -u origin main
   ```
3. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
4. Click "Import Project" → selecciona el repo → Deploy
5. En 60 segundos tienes Scout online con URL propia

### Opción B — Desde terminal

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Seguir las instrucciones en pantalla
```

### Dominio personalizado

En Vercel → Settings → Domains → agrega tu dominio (ej: scout.cl)
Vercel te da las DNS records para apuntar desde tu registrador.

## Cómo agregar/editar productos

Toda la data está en `data/products.js`. La estructura es:

```javascript
categoría: {
  icon: "💻",
  label: "Laptops",
  subcategories: {
    gaming: {
      icon: "🎮",
      label: "Gaming",
      desc: "Descripción corta",
      axes: ["Eje1", "Eje2", ...],  // 7 ejes para el rombo
      bestValue: {
        name: "Nombre del producto",
        brand: "Marca",
        price: "$XXX",
        oneLiner: "Frase de una línea",
        why: "Veredicto Scout",
        scores: { Eje1: 85, Eje2: 92, ... },
        specs: [{ label: "GPU", value: "RTX 4070" }, ...],
        pros: ["Pro 1", "Pro 2", "Pro 3"],
        cons: ["Con 1", "Con 2", "Con 3"],
        stores: [
          { name: "Amazon", price: "$XXX", url: "AFFILIATE_URL", best: true, tag: "Mejor precio" },
        ],
      },
      theBest: { /* misma estructura */ },
    },
  },
},
```

## Para monetizar

Reemplaza las URLs `"#"` en el campo `stores[].url` con tus links de afiliado:
- Amazon Associates
- Mercado Libre Afiliados
- Links directos de retailers con programa de afiliados

## Próximos pasos

- [ ] Comprar dominio (ej: scout.cl o scouttech.cl)
- [ ] Reemplazar productos de ejemplo con evaluaciones propias
- [ ] Agregar links de afiliado reales
- [ ] Configurar Google Analytics
- [ ] Agregar más categorías y subcategorías
- [ ] Integrar precios en tiempo real vía API de retailers
