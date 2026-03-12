export const componentespc = {
  icon: "🔧",
  label: "Componentes PC",
  isBuilderFlow: true,
  subcategories: { build: {}, find: {} },
  components: {
    cpu: {
      icon: "🧠",
      label: "Procesador (CPU)",
      question: "¿Qué procesador quieres?",
      axes: ["Rendimiento", "Eficiencia", "Gaming", "Productividad", "Multitarea", "Térmico", "Precio/Valor"],
      options: {
        intel_14: {
          label: "Intel 12va-14va Gen",
          desc: "LGA 1700 · Compatible DDR4 y DDR5",
          badge: "Más compatible",
          socket: "LGA1700",
          ramTypes: ["DDR4", "DDR5"],
          entry: {
            name: "Intel Core i3-12100F",
            brand: "Intel",
            price: "$69.990",
            oneLiner: "El punto de entrada perfecto para gaming con GPU dedicada.",
            why: "El i3-12100F ofrece 4 núcleos reales con Hyper-Threading a un precio imbatible. Sin iGPU pero con rendimiento gaming sorprendente, es ideal para quienes ya tienen o planean una GPU dedicada y quieren gastar lo mínimo en CPU.",
            specs: [
              { label: "Núcleos", value: "4P (sin E-cores)" },
              { label: "Hilos", value: "8" },
              { label: "TDP", value: "58W / 89W boost" },
              { label: "Socket", value: "LGA 1700" },
              { label: "Cache", value: "12 MB L3" },
              { label: "iGPU", value: "No (requiere GPU)" }
            ],
            pros: ["Precio imbatible para gaming", "Bajo consumo en carga normal", "Compatible con DDR4 y DDR5"],
            cons: ["Sin iGPU integrada", "Solo 4 núcleos físicos limita futuro"],
            stores: [
              { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$71.490", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 52, "Eficiencia": 60, "Gaming": 55, "Productividad": 45, "Multitarea": 42, "Térmico": 75, "Precio/Valor": 92 }
          },
          balanced: {
            name: "Intel Core i5-14400F",
            brand: "Intel",
            price: "$149.990",
            oneLiner: "10 núcleos, gaming sólido, precio razonable — el i5 de siempre.",
            why: "El i5-14400F combina 6 núcleos de rendimiento con 4 de eficiencia para un total de 10 núcleos a un precio muy competitivo. Es la mejor relación precio-desempeño en la plataforma Intel LGA1700, ideal para gaming y multitarea cotidiana.",
            specs: [
              { label: "Núcleos", value: "6P + 4E = 10" },
              { label: "Hilos", value: "16" },
              { label: "TDP", value: "65W / 148W boost" },
              { label: "Socket", value: "LGA 1700" },
              { label: "Cache", value: "20 MB L3" },
              { label: "iGPU", value: "No" }
            ],
            pros: ["Excelente relación precio-desempeño", "10 núcleos para multitarea fluida", "Compatible con DDR4 y DDR5"],
            cons: ["Sin iGPU integrada", "Consume bastante en boost"],
            stores: [
              { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$151.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 72, "Eficiencia": 68, "Gaming": 73, "Productividad": 68, "Multitarea": 66, "Térmico": 65, "Precio/Valor": 88 }
          },
          proRef: {
            name: "Intel Core i9-14900K",
            brand: "Intel",
            price: "$449.990",
            oneLiner: "El flagship Intel LGA1700: 24 núcleos para quien no acepta límites.",
            why: "El i9-14900K es el CPU más poderoso de la plataforma LGA1700, con 24 núcleos y frecuencias altísimas. Aunque consume mucho y requiere refrigeración seria, su desempeño en workstation y gaming de alta frecuencia es excepcional antes de que agote stock.",
            specs: [
              { label: "Núcleos", value: "8P + 16E = 24" },
              { label: "Hilos", value: "32" },
              { label: "TDP", value: "125W / 253W boost" },
              { label: "Socket", value: "LGA 1700" },
              { label: "Cache", value: "36 MB L3" },
              { label: "iGPU", value: "Intel UHD 770" }
            ],
            pros: ["Desempeño workstation brutal", "Frecuencias boost líderes en la industria", "iGPU integrada de emergencia"],
            cons: ["Consumo muy alto en boost", "Requiere refrigeración premium", "Alto precio para gaming puro"],
            stores: [
              { name: "MercadoLibre", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$459.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$452.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 93, "Eficiencia": 55, "Gaming": 88, "Productividad": 91, "Multitarea": 93, "Térmico": 45, "Precio/Valor": 62 }
          }
        },
        intel_15: {
          label: "Intel 15va Gen",
          desc: "LGA 1851 · Solo DDR5",
          socket: "LGA1851",
          ramTypes: ["DDR5"],
          entry: {
            name: "Intel Core i5-15400F",
            brand: "Intel",
            price: "$189.990",
            oneLiner: "La nueva gen Intel de entrada, más eficiente y lista para el futuro.",
            why: "El i5-15400F trae la arquitectura Arrow Lake de Intel con mejoras de eficiencia sobre la generación anterior. Aunque requiere DDR5, la plataforma LGA1851 tiene largo recorrido y ofrece un punto de entrada razonable para quienes quieren construir para durar.",
            specs: [
              { label: "Núcleos", value: "6P + 4E = 10" },
              { label: "Hilos", value: "14" },
              { label: "TDP", value: "65W / 115W boost" },
              { label: "Socket", value: "LGA 1851" },
              { label: "Cache", value: "20 MB L3" },
              { label: "iGPU", value: "No" }
            ],
            pros: ["Plataforma LGA1851 con largo recorrido", "Mejor eficiencia que gen anterior", "Solo DDR5 de alta velocidad"],
            cons: ["Sin iGPU", "Más caro que equivalente 14va gen", "Solo DDR5 encarece el build"],
            stores: [
              { name: "MercadoLibre", price: "$189.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$194.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$191.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 70, "Eficiencia": 72, "Gaming": 70, "Productividad": 67, "Multitarea": 65, "Térmico": 70, "Precio/Valor": 75 }
          },
          balanced: {
            name: "Intel Core i7-15700K",
            brand: "Intel",
            price: "$329.990",
            oneLiner: "El i7 de nueva generación: potente, eficiente y con headroom de sobra.",
            why: "El i7-15700K ofrece un balance excelente entre rendimiento gaming y productividad en la nueva plataforma Arrow Lake. Con multiplicador desbloqueado y buena eficiencia energética mejorada, es el CPU ideal para una build premium que durará varios años.",
            specs: [
              { label: "Núcleos", value: "8P + 12E = 20" },
              { label: "Hilos", value: "28" },
              { label: "TDP", value: "125W / 200W boost" },
              { label: "Socket", value: "LGA 1851" },
              { label: "Cache", value: "33 MB L3" },
              { label: "iGPU", value: "Intel UHD 770" }
            ],
            pros: ["20 núcleos con multiplicador libre", "Mejor eficiencia que 14va gen", "iGPU integrada de emergencia"],
            cons: ["Precio elevado vs 14va gen", "Requiere solo DDR5", "Necesita buena refrigeración"],
            stores: [
              { name: "MercadoLibre", price: "$329.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$339.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$333.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 85, "Eficiencia": 73, "Gaming": 83, "Productividad": 83, "Multitarea": 82, "Térmico": 60, "Precio/Valor": 70 }
          },
          proRef: {
            name: "Intel Core i9-15900K",
            brand: "Intel",
            price: "$599.990",
            oneLiner: "El flagship Arrow Lake: rendimiento absoluto sin concesiones.",
            why: "El i9-15900K representa lo mejor de Intel en la nueva plataforma LGA1851, con 24 núcleos y las mayores frecuencias disponibles. Para creadores de contenido, streamers y usuarios que exigen el máximo en aplicaciones con alta carga de CPU, no tiene rival en la plataforma.",
            specs: [
              { label: "Núcleos", value: "8P + 16E = 24" },
              { label: "Hilos", value: "32" },
              { label: "TDP", value: "125W / 250W boost" },
              { label: "Socket", value: "LGA 1851" },
              { label: "Cache", value: "36 MB L3" },
              { label: "iGPU", value: "Intel UHD 770" }
            ],
            pros: ["Máximo desempeño en plataforma Intel actual", "24 núcleos para cualquier workload", "Multiplicador desbloqueado"],
            cons: ["Precio muy alto", "Consumo elevado en boost", "Plataforma cara en total"],
            stores: [
              { name: "MercadoLibre", price: "$599.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$614.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$604.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 96, "Eficiencia": 60, "Gaming": 90, "Productividad": 94, "Multitarea": 95, "Térmico": 42, "Precio/Valor": 58 }
          }
        },
        amd_7000: {
          label: "AMD Ryzen 7000/9000",
          desc: "AM5 · Solo DDR5 · Futuro asegurado",
          socket: "AM5",
          ramTypes: ["DDR5"],
          entry: {
            name: "AMD Ryzen 5 7600X",
            brand: "AMD",
            price: "$179.990",
            oneLiner: "Gaming sólido en AM5 con futuro de plataforma garantizado.",
            why: "El Ryzen 5 7600X ofrece excelente rendimiento gaming en plataforma AM5, con garantía de soporte hasta 2027+. Sus 6 núcleos Zen 4 son eficientes y rápidos, ideales para gaming 1080p/1440p, y la plataforma acepta futuros CPUs más potentes.",
            specs: [
              { label: "Núcleos", value: "6" },
              { label: "Hilos", value: "12" },
              { label: "TDP", value: "105W" },
              { label: "Socket", value: "AM5" },
              { label: "Cache", value: "32 MB L3" },
              { label: "iGPU", value: "RDNA2 básica (emergencia)" }
            ],
            pros: ["Plataforma AM5 con soporte largo plazo", "Excelente IPC con arquitectura Zen 4", "iGPU básica de emergencia"],
            cons: ["Solo DDR5 encarece la build", "TDP alto para 6 núcleos", "Precio algo elevado vs AM4"],
            stores: [
              { name: "MercadoLibre", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$184.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$181.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 70, "Eficiencia": 75, "Gaming": 78, "Productividad": 65, "Multitarea": 63, "Térmico": 68, "Precio/Valor": 78 }
          },
          balanced: {
            name: "AMD Ryzen 7 7800X3D",
            brand: "AMD",
            price: "$369.990",
            oneLiner: "El mejor CPU para gaming del mundo gracias al 3D V-Cache.",
            why: "El Ryzen 7 7800X3D es, sin discusión, el CPU más rápido para gaming del mercado gracias a su enorme caché L3 de 96MB con tecnología 3D V-Cache. Mejora el rendimiento en juegos hasta un 30% vs CPUs sin esta tecnología, y su eficiencia es notable.",
            specs: [
              { label: "Núcleos", value: "8" },
              { label: "Hilos", value: "16" },
              { label: "TDP", value: "120W" },
              { label: "Socket", value: "AM5" },
              { label: "Cache", value: "96 MB L3 (3D V-Cache)" },
              { label: "iGPU", value: "RDNA2 básica" }
            ],
            pros: ["#1 mundial en gaming por amplio margen", "96MB caché L3 con 3D V-Cache", "Eficiencia sorprendente para su rendimiento"],
            cons: ["No overclockleable por limitación de V-Cache", "Solo DDR5", "Precio premium sobre el 7600X"],
            stores: [
              { name: "MercadoLibre", price: "$369.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$379.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$372.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 85, "Eficiencia": 78, "Gaming": 99, "Productividad": 80, "Multitarea": 78, "Térmico": 65, "Precio/Valor": 80 }
          },
          proRef: {
            name: "AMD Ryzen 9 9950X",
            brand: "AMD",
            price: "$799.990",
            oneLiner: "16 núcleos Zen 5 de última generación: el monstruo de productividad AMD.",
            why: "El Ryzen 9 9950X es el CPU de escritorio más avanzado de AMD, con 16 núcleos Zen 5 de nueva arquitectura. Lidera en aplicaciones de productividad, compilación, rendering y multitarea pesada, mientras mantiene una eficiencia energética superior a rivales Intel de similar nivel.",
            specs: [
              { label: "Núcleos", value: "16" },
              { label: "Hilos", value: "32" },
              { label: "TDP", value: "170W" },
              { label: "Socket", value: "AM5" },
              { label: "Cache", value: "64 MB L3" },
              { label: "iGPU", value: "RDNA2 básica" }
            ],
            pros: ["16 núcleos Zen 5 de máxima eficiencia", "Líder en workstation y productividad", "Mejor eficiencia que Intel de rango similar"],
            cons: ["Precio muy elevado", "Requiere refrigeración premium", "No V-Cache (no es el mejor para gaming)"],
            stores: [
              { name: "MercadoLibre", price: "$799.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$819.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$804.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 98, "Eficiencia": 82, "Gaming": 88, "Productividad": 97, "Multitarea": 97, "Térmico": 55, "Precio/Valor": 60 }
          }
        },
        amd_5000: {
          label: "AMD Ryzen 5000 y ant.",
          desc: "AM4 · Solo DDR4 · El más económico",
          socket: "AM4",
          ramTypes: ["DDR4"],
          entry: {
            name: "AMD Ryzen 5 5600",
            brand: "AMD",
            price: "$89.990",
            oneLiner: "El mejor CPU barato del mercado, punto.",
            why: "El Ryzen 5 5600 es la opción más inteligente para builds económicas. Con 6 núcleos Zen 3, DDR4 barata, y un ecosistema AM4 maduro con precios caídos, ofrece rendimiento gaming excelente por muy poco dinero. Es el punto de entrada ideal para quien prioriza GPU sobre CPU.",
            specs: [
              { label: "Núcleos", value: "6" },
              { label: "Hilos", value: "12" },
              { label: "TDP", value: "65W" },
              { label: "Socket", value: "AM4" },
              { label: "Cache", value: "32 MB L3" },
              { label: "iGPU", value: "No" }
            ],
            pros: ["Precio imbatible con gran rendimiento", "TDP bajo y fácil de refrigerar", "DDR4 barata y disponible"],
            cons: ["Plataforma AM4 sin upgrades futuros mayores", "Sin iGPU integrada"],
            stores: [
              { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 62, "Eficiencia": 78, "Gaming": 68, "Productividad": 58, "Multitarea": 56, "Térmico": 80, "Precio/Valor": 95 }
          },
          balanced: {
            name: "AMD Ryzen 7 5700X3D",
            brand: "AMD",
            price: "$179.990",
            oneLiner: "El 3D V-Cache más accesible: gaming excelente en AM4.",
            why: "El Ryzen 7 5700X3D trae la tecnología 3D V-Cache a la plataforma AM4, ofreciendo un salto enorme en gaming respecto al 5600 a un precio aún razonable. Es la opción perfecta para quienes tienen plataforma AM4 o quieren gaming de alto nivel sin pagar precio de AM5.",
            specs: [
              { label: "Núcleos", value: "8" },
              { label: "Hilos", value: "16" },
              { label: "TDP", value: "105W" },
              { label: "Socket", value: "AM4" },
              { label: "Cache", value: "96 MB L3 (3D V-Cache)" },
              { label: "iGPU", value: "No" }
            ],
            pros: ["3D V-Cache para gaming excelente en AM4", "8 núcleos para multitarea fluida", "Precio muy razonable para la tecnología"],
            cons: ["Plataforma AM4 sin upgrades futuros", "Sin iGPU"],
            stores: [
              { name: "MercadoLibre", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$184.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$181.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 72, "Eficiencia": 80, "Gaming": 88, "Productividad": 68, "Multitarea": 65, "Térmico": 75, "Precio/Valor": 90 }
          },
          proRef: {
            name: "AMD Ryzen 9 5950X",
            brand: "AMD",
            price: "$399.990",
            oneLiner: "16 núcleos Zen 3 en AM4: workstation a precio de remate.",
            why: "El Ryzen 9 5950X es el CPU más poderoso de la plataforma AM4, con 16 núcleos Zen 3 que siguen siendo formidables en workstation y rendering. Su precio ha bajado considerablemente, haciéndolo una opción atractiva para usuarios profesionales que no quieren pagar por AM5.",
            specs: [
              { label: "Núcleos", value: "16" },
              { label: "Hilos", value: "32" },
              { label: "TDP", value: "105W" },
              { label: "Socket", value: "AM4" },
              { label: "Cache", value: "64 MB L3" },
              { label: "iGPU", value: "No" }
            ],
            pros: ["16 núcleos Zen 3 para workstation", "Precio muy reducido vs lanzamiento", "TDP razonable para su potencia"],
            cons: ["Plataforma AM4 sin futuro de upgrades", "AM5 supera en IPC por núcleo"],
            stores: [
              { name: "MercadoLibre", price: "$399.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$409.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$402.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 88, "Eficiencia": 72, "Gaming": 75, "Productividad": 90, "Multitarea": 91, "Térmico": 58, "Precio/Valor": 72 }
          }
        }
      }
    },
    motherboard: {
      icon: "🖥️",
      label: "Tarjeta Madre",
      question: "¿Qué form factor quieres?",
      axes: ["Conectividad", "Overclocking", "Puertos", "Calidad VRM", "WiFi/BT", "Expansión", "Precio/Valor"],
      options: {
        atx: {
          label: "ATX",
          desc: "Máxima expansión · Full Tower o Mid Tower",
          formFactor: "ATX",
          psuTypes: ["ATX"],
          caseCompat: ["full", "mid"],
          byPlatform: {
            intel_14: {
              entry: {
                name: "Gigabyte B760 AORUS Elite AX",
                brand: "Gigabyte",
                price: "$149.990",
                oneLiner: "WiFi 6E y DDR4/DDR5 en plataforma LGA1700 a buen precio.",
                why: "La B760 AORUS Elite AX es la motherboard ATX de entrada más completa para Intel 12va/13va/14va gen. Incluye WiFi 6E integrado, puertos USB 3.2 Gen 2 y soporte tanto para DDR4 como DDR5, siendo extremadamente versátil para el precio.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel B760" },
                  { label: "RAM", value: "DDR4/DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E integrado sin costo adicional", "Soporte DDR4 y DDR5", "3 slots M.2 NVMe"],
                cons: ["Overclocking limitado por chipset B760", "VRM básico para CPUs de alto TDP"],
                stores: [
                  { name: "PCFactory", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$154.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$151.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 78, "Overclocking": 40, "Puertos": 72, "Calidad VRM": 62, "WiFi/BT": 82, "Expansión": 70, "Precio/Valor": 88 }
              },
              balanced: {
                name: "MSI MAG Z790 Tomahawk WiFi",
                brand: "MSI",
                price: "$269.990",
                oneLiner: "Chipset Z790, VRM potente y WiFi 6E — la base perfecta para cualquier build Intel.",
                why: "La MAG Z790 Tomahawk WiFi ofrece el chipset flagship Z790 con overclocking desbloqueado, un VRM robusto de 16+1 fases y WiFi 6E, todo a un precio razonable para su categoría. Es la placa recomendada para i5-14400F y superiores que quieran headroom.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["Chipset Z790 con overclocking completo", "VRM de 16+1 fases para CPUs exigentes", "4 slots M.2 NVMe"],
                cons: ["Solo DDR5 (no DDR4)", "Precio elevado vs B760"],
                stores: [
                  { name: "PCFactory", price: "$269.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$279.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$272.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 85, "Overclocking": 82, "Puertos": 85, "Calidad VRM": 85, "WiFi/BT": 85, "Expansión": 85, "Precio/Valor": 78 }
              },
              proRef: {
                name: "ASUS ROG Maximus Z790 Apex Encore",
                brand: "ASUS",
                price: "$799.990",
                oneLiner: "La placa máxima para overclockers e enthusiasts Intel.",
                why: "La ROG Maximus Z790 Apex Encore es la placa madre más extrema para plataforma LGA1700. Con un VRM monstruoso, soporte para memorias DDR5 a velocidades extremas y características exclusivas de overclocking, es la referencia absoluta para quienes no aceptan compromisos.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 256GB (2 slots para OC extremo)" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "5x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM extremo para máximo overclocking", "2 slots DDR5 optimizados para velocidades record", "Herramientas exclusivas ASUS OC"],
                cons: ["Precio muy elevado", "2 slots RAM limitan capacidad máxima", "Overkill para uso normal"],
                stores: [
                  { name: "PCFactory", price: "$799.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$819.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 95, "Overclocking": 99, "Puertos": 92, "Calidad VRM": 99, "WiFi/BT": 90, "Expansión": 88, "Precio/Valor": 45 }
              }
            },
            intel_15: {
              entry: {
                name: "ASRock B860 Steel Legend WiFi",
                brand: "ASRock",
                price: "$179.990",
                oneLiner: "Entrada sólida a Intel 15va gen con WiFi 6E incluido.",
                why: "La B860 Steel Legend WiFi es la placa de entrada más inteligente para Intel Arrow Lake (15va gen). Ofrece WiFi 6E, PCIe 5.0 para GPU y 3 slots M.2 a un precio accesible, con el buen historial de calidad de ASRock en la línea Steel Legend.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel B860" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E integrado", "Plataforma LGA1851 actualizable a futuro", "Buen diseño con iluminación moderada"],
                cons: ["Chipset B860 sin overclocking de CPU", "VRM básico para CPUs de alto TDP"],
                stores: [
                  { name: "PCFactory", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$184.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$181.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 75, "Overclocking": 35, "Puertos": 70, "Calidad VRM": 60, "WiFi/BT": 82, "Expansión": 68, "Precio/Valor": 85 }
              },
              balanced: {
                name: "ASUS TUF Gaming Z890-Plus WiFi",
                brand: "ASUS",
                price: "$299.990",
                oneLiner: "La Z890 más completa a precio justo: overclocking, WiFi 7 y VRM potente.",
                why: "La TUF Gaming Z890-Plus WiFi es la elección obvia para builds Intel 15va gen que quieren overclocking desbloqueado sin pagar premium extremo. Su VRM de 16 fases, WiFi 7 de última generación y 4 slots M.2 la convierten en la base perfecta para el i7-15700K.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16 + PCIe 4.0" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4" }
                ],
                pros: ["WiFi 7 de última generación", "Z890 con overclocking completo", "VRM robusto para i7/i9"],
                cons: ["Precio más alto que Z790 equivalente", "Plataforma nueva con menos accesorios"],
                stores: [
                  { name: "PCFactory", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$309.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$302.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 88, "Overclocking": 85, "Puertos": 88, "Calidad VRM": 88, "WiFi/BT": 92, "Expansión": 88, "Precio/Valor": 75 }
              },
              proRef: {
                name: "ASUS ROG Maximus Z890 Apex",
                brand: "ASUS",
                price: "$899.990",
                oneLiner: "La cima absoluta de las placas Intel 15va gen para overclockers.",
                why: "La ROG Maximus Z890 Apex establece el estándar de lo que puede lograr una placa madre LGA1851. Diseñada desde cero para overclocking extremo con 2 slots DDR5 de alta señal, VRM monstruoso y herramientas exclusivas ROG, es la referencia Pro para builds sin límites.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 256GB (2 slots)" },
                  { label: "PCIe", value: "PCIe 5.0 x16 dual" },
                  { label: "M.2", value: "5x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4" }
                ],
                pros: ["VRM de alta fase para overclocking record", "PCIe 5.0 en slots M.2", "WiFi 7 de última generación"],
                cons: ["Precio prohibitivo", "2 slots RAM para OC (no capacidad)", "Overkill total para uso diario"],
                stores: [
                  { name: "PCFactory", price: "$899.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$924.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 98, "Overclocking": 99, "Puertos": 95, "Calidad VRM": 99, "WiFi/BT": 95, "Expansión": 92, "Precio/Valor": 40 }
              }
            },
            amd_7000: {
              entry: {
                name: "MSI PRO B650-P WiFi",
                brand: "MSI",
                price: "$159.990",
                oneLiner: "Entrada razonable a AM5 con WiFi integrado.",
                why: "La MSI PRO B650-P WiFi es el punto de entrada más inteligente para la plataforma AM5. Con WiFi 6E incluido, soporte para DDR5, PCIe 5.0 y un VRM suficiente para Ryzen 5/7, permite construir en la plataforma de futuro sin gastar de más en la placa base.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD B650" },
                  { label: "RAM", value: "DDR5 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E incluido", "Plataforma AM5 con soporte hasta 2027+", "Buen VRM para Ryzen 5/7"],
                cons: ["Solo 2 slots M.2", "Overclocking limitado por B650", "VRM insuficiente para Ryzen 9"],
                stores: [
                  { name: "PCFactory", price: "$159.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$164.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$161.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 72, "Overclocking": 45, "Puertos": 65, "Calidad VRM": 60, "WiFi/BT": 82, "Expansión": 62, "Precio/Valor": 85 }
              },
              balanced: {
                name: "ASUS TUF Gaming X670E-Plus WiFi",
                brand: "ASUS",
                price: "$289.990",
                oneLiner: "X670E con overclocking pleno y WiFi 6E — la placa perfecta para el 7800X3D.",
                why: "La TUF Gaming X670E-Plus WiFi combina el chipset X670E (que habilita PCIe 5.0 en GPU y almacenamiento) con un VRM robusto y WiFi 6E. Es la compañera ideal para el Ryzen 7 7800X3D, ofreciendo todo lo necesario sin pagar premium extremo de ROG.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16 + M.2 PCIe 5.0" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["X670E con PCIe 5.0 en GPU y almacenamiento", "VRM sólido para cualquier Ryzen 7000", "4 slots M.2 NVMe"],
                cons: ["Precio elevado vs B650", "X670E consume más energía que B650"],
                stores: [
                  { name: "PCFactory", price: "$289.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$299.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$292.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 88, "Overclocking": 82, "Puertos": 85, "Calidad VRM": 85, "WiFi/BT": 85, "Expansión": 88, "Precio/Valor": 78 }
              },
              proRef: {
                name: "ASUS ROG Crosshair X670E Hero",
                brand: "ASUS",
                price: "$649.990",
                oneLiner: "La placa ROG definitiva para AM5: overclocking sin límites.",
                why: "La ROG Crosshair X670E Hero es la placa de referencia para la plataforma AM5, con VRM de alta fase para overclocking extremo del Ryzen 9, conectividad Thunderbolt 4, WiFi 6E y herramientas ROG exclusivas. Para builds workstation o gaming sin compromisos.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16 dual" },
                  { label: "M.2", value: "5x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM extremo para Ryzen 9 overclocked", "5 slots M.2 con PCIe 5.0", "Thunderbolt 4 integrado"],
                cons: ["Precio muy elevado", "Overkill para gaming puro", "Plataforma solo DDR5"],
                stores: [
                  { name: "PCFactory", price: "$649.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$664.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 96, "Overclocking": 96, "Puertos": 94, "Calidad VRM": 96, "WiFi/BT": 90, "Expansión": 95, "Precio/Valor": 50 }
              }
            },
            amd_5000: {
              entry: {
                name: "ASUS TUF Gaming B550-Plus WiFi II",
                brand: "ASUS",
                price: "$109.990",
                oneLiner: "La placa AM4 más completa a precio de entrada.",
                why: "La TUF Gaming B550-Plus WiFi II es la placa AM4 de entrada con mejor relación calidad-precio. Incluye WiFi 6, PCIe 4.0 para la GPU y un VRM suficiente para cualquier Ryzen 5 o 7, siendo la base ideal para una build económica con Ryzen 5 5600.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6 + BT 5.0" }
                ],
                pros: ["WiFi 6 incluido a precio de entrada", "PCIe 4.0 para GPU moderna", "Excelente historial de fiabilidad ASUS TUF"],
                cons: ["Solo 2 slots M.2", "Plataforma AM4 sin upgrades a AM5", "WiFi 6 (no 6E)"],
                stores: [
                  { name: "PCFactory", price: "$109.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$112.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$110.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 70, "Overclocking": 42, "Puertos": 65, "Calidad VRM": 65, "WiFi/BT": 75, "Expansión": 60, "Precio/Valor": 90 }
              },
              balanced: {
                name: "MSI MAG X570S Tomahawk Max WiFi",
                brand: "MSI",
                price: "$199.990",
                oneLiner: "Chipset X570S actualizado: overclocking AM4 sin ventilador ruidoso.",
                why: "La MAG X570S Tomahawk Max WiFi es la evolución silenciosa del legendario X570 Tomahawk, con chipset X570S (sin ventilador de chipset), WiFi 6E y un VRM robusto para Ryzen 9 5950X. Es la placa perfecta para sacar el máximo de la plataforma AM4.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD X570S (sin ventilador)" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16 dual" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["X570S sin ventilador de chipset ruidoso", "WiFi 6E integrado", "Overclocking completo para toda la gama Ryzen"],
                cons: ["Precio elevado para plataforma AM4", "Plataforma sin upgrades a futuro"],
                stores: [
                  { name: "PCFactory", price: "$199.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$204.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$201.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 82, "Overclocking": 80, "Puertos": 80, "Calidad VRM": 82, "WiFi/BT": 85, "Expansión": 82, "Precio/Valor": 72 }
              },
              proRef: {
                name: "ASUS ROG Crosshair VIII Dark Hero",
                brand: "ASUS",
                price: "$449.990",
                oneLiner: "La placa AM4 definitiva para overclockers: sin ventilador, sin límites.",
                why: "La ROG Crosshair VIII Dark Hero es la cima de la plataforma AM4, con un VRM de 16 fases de alta calidad, chipset X570 sin ventilador y herramientas de overclocking exclusivas ROG. Para quienes tienen un Ryzen 9 5950X y quieren exprimir cada MHz.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD X570 (sin ventilador)" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16 dual" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM de 16 fases premium para OC extremo", "Sin ventilador de chipset", "Herramientas ROG exclusivas de overclocking"],
                cons: ["Precio muy elevado para AM4", "Plataforma sin futuro de upgrade"],
                stores: [
                  { name: "PCFactory", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$459.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 92, "Overclocking": 94, "Puertos": 88, "Calidad VRM": 95, "WiFi/BT": 88, "Expansión": 90, "Precio/Valor": 52 }
              }
            }
          }
        },
        matx: {
          label: "Micro-ATX",
          desc: "Precio justo · Mid Tower o Mini Tower",
          formFactor: "mATX",
          psuTypes: ["ATX", "SFX"],
          caseCompat: ["mid", "mini"],
          byPlatform: {
            intel_14: {
              entry: {
                name: "MSI PRO B760M-P DDR4",
                brand: "MSI",
                price: "$79.990",
                oneLiner: "La placa mATX Intel más económica con DDR4.",
                why: "La MSI PRO B760M-P DDR4 es la opción más accesible para builds mATX con Intel 12va/13va/14va gen usando DDR4. Su formato compacto la hace ideal para gabinetes mini tower y su precio bajísimo deja presupuesto para GPU y RAM.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel B760" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "1x M.2 NVMe" },
                  { label: "WiFi", value: "No (LAN 2.5G)" }
                ],
                pros: ["Precio imbatible en mATX Intel", "DDR4 económica", "Formato compacto y compatible"],
                cons: ["Sin WiFi integrado", "Solo 1 slot M.2", "Sin overclocking de CPU"],
                stores: [
                  { name: "PCFactory", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$82.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$80.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 55, "Overclocking": 30, "Puertos": 52, "Calidad VRM": 55, "WiFi/BT": 0, "Expansión": 50, "Precio/Valor": 92 }
              },
              balanced: {
                name: "Gigabyte B760M AORUS Elite AX DDR4",
                brand: "Gigabyte",
                price: "$129.990",
                oneLiner: "mATX Intel con WiFi 6E y DDR4 — todo en formato compacto.",
                why: "La B760M AORUS Elite AX DDR4 combina lo mejor de dos mundos: formato mATX compacto con características completas incluyendo WiFi 6E, DDR4 y VRM suficiente para i5/i7. La elección perfecta para builds compactas con buen rendimiento.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel B760" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E en formato mATX", "DDR4 económica", "2 slots M.2 NVMe"],
                cons: ["Sin overclocking de CPU (B760)", "Formato limita expansión vs ATX"],
                stores: [
                  { name: "PCFactory", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$133.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$131.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 72, "Overclocking": 35, "Puertos": 65, "Calidad VRM": 65, "WiFi/BT": 82, "Expansión": 58, "Precio/Valor": 85 }
              },
              proRef: {
                name: "MSI MAG Z790M Mortar Max WiFi",
                brand: "MSI",
                price: "$259.990",
                oneLiner: "Z790 en formato mATX: el mejor chipset en el menor espacio.",
                why: "La MAG Z790M Mortar Max WiFi trae el chipset Z790 con overclocking completo a formato mATX, sin sacrificar características premium. Con VRM robusto, WiFi 6E y DDR5, es perfecta para builds compactas de alto rendimiento con i7 o i9.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["Z790 con overclocking en formato compacto", "VRM robusto para i7/i9", "WiFi 6E + 3 slots M.2"],
                cons: ["Solo DDR5", "Precio premium para mATX"],
                stores: [
                  { name: "PCFactory", price: "$259.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$267.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 82, "Overclocking": 80, "Puertos": 78, "Calidad VRM": 82, "WiFi/BT": 85, "Expansión": 68, "Precio/Valor": 72 }
              }
            },
            intel_15: {
              entry: {
                name: "MSI PRO B860M-P",
                brand: "MSI",
                price: "$99.990",
                oneLiner: "Entrada compacta a Intel 15va gen en formato mATX.",
                why: "La MSI PRO B860M-P es la forma más económica de entrar a la plataforma LGA1851 en formato mATX. Sin extras innecesarios, ofrece lo esencial: soporte DDR5, PCIe 5.0 y conectividad moderna para builds compactas económicas.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel B860" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "No (LAN 2.5G)" }
                ],
                pros: ["Precio accesible para plataforma nueva", "PCIe 5.0 para GPU futura", "Formato compacto"],
                cons: ["Sin WiFi", "Solo 2 slots M.2", "Sin overclocking"],
                stores: [
                  { name: "PCFactory", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$103.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$101.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 58, "Overclocking": 30, "Puertos": 55, "Calidad VRM": 58, "WiFi/BT": 0, "Expansión": 52, "Precio/Valor": 88 }
              },
              balanced: {
                name: "MSI MAG B860M Mortar WiFi",
                brand: "MSI",
                price: "$189.990",
                oneLiner: "La mATX Intel 15va gen más completa sin pagar Z890.",
                why: "La MAG B860M Mortar WiFi es la placa mATX ideal para Intel Arrow Lake sin necesitar overclocking. WiFi 6E, DDR5, PCIe 5.0 y un VRM suficiente para el i7-15700K en un formato compacto y confiable de la línea Mortar.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel B860" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E en formato compacto", "3 slots M.2 NVMe", "Precio razonable para la plataforma"],
                cons: ["Sin overclocking de CPU (B860)", "Solo DDR5"],
                stores: [
                  { name: "PCFactory", price: "$189.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$194.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$191.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 75, "Overclocking": 35, "Puertos": 72, "Calidad VRM": 68, "WiFi/BT": 82, "Expansión": 65, "Precio/Valor": 78 }
              },
              proRef: {
                name: "MSI MPG Z890M Edge WiFi",
                brand: "MSI",
                price: "$349.990",
                oneLiner: "Z890 compacta: overclocking completo en formato mATX.",
                why: "La MPG Z890M Edge WiFi es la placa mATX con mayor potencial para Intel 15va gen, trayendo el chipset Z890 con overclocking completo, VRM de alta fase y WiFi 7 a un formato que cabe en gabinetes compactos sin sacrificar rendimiento.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4" }
                ],
                pros: ["Z890 con OC completo en formato compacto", "WiFi 7 de última generación", "4 slots M.2 para mATX"],
                cons: ["Precio elevado", "Solo DDR5"],
                stores: [
                  { name: "PCFactory", price: "$349.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$359.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 85, "Overclocking": 82, "Puertos": 82, "Calidad VRM": 85, "WiFi/BT": 92, "Expansión": 75, "Precio/Valor": 65 }
              }
            },
            amd_7000: {
              entry: {
                name: "Gigabyte B650M Gaming X AX",
                brand: "Gigabyte",
                price: "$129.990",
                oneLiner: "AM5 mATX con WiFi 6E al precio más accesible.",
                why: "La B650M Gaming X AX es la placa mATX AM5 de mejor precio con WiFi 6E incluido. Permite construir en la plataforma de futuro de AMD con formato compacto, suficiente para el Ryzen 5 7600X con todo lo necesario para gaming.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD B650" },
                  { label: "RAM", value: "DDR5 hasta 192GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["WiFi 6E en precio accesible", "Plataforma AM5 con largo soporte", "Formato compacto y ordenado"],
                cons: ["Solo 2 slots M.2", "VRM básico para Ryzen 9", "Sin overclocking completo"],
                stores: [
                  { name: "PCFactory", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$133.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$131.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 70, "Overclocking": 40, "Puertos": 62, "Calidad VRM": 58, "WiFi/BT": 82, "Expansión": 55, "Precio/Valor": 85 }
              },
              balanced: {
                name: "ASRock B650M Pro RS WiFi",
                brand: "ASRock",
                price: "$179.990",
                oneLiner: "mATX AM5 sólida con buen VRM para el 7800X3D.",
                why: "La B650M Pro RS WiFi de ASRock ofrece un VRM más robusto que otras opciones B650M, haciéndola adecuada incluso para el Ryzen 7 7800X3D en formato compacto. Con WiFi 6E y DDR5, es la placa mATX AM5 más equilibrada.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD B650" },
                  { label: "RAM", value: "DDR5 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "3x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM suficiente para 7800X3D", "3 slots M.2 en formato compacto", "WiFi 6E integrado"],
                cons: ["Sin overclocking completo (B650)", "Solo DDR5"],
                stores: [
                  { name: "PCFactory", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$184.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$181.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 75, "Overclocking": 42, "Puertos": 70, "Calidad VRM": 70, "WiFi/BT": 82, "Expansión": 62, "Precio/Valor": 80 }
              },
              proRef: {
                name: "MSI MAG X670E Tomahawk WiFi",
                brand: "MSI",
                price: "$319.990",
                oneLiner: "X670E compacta: el chipset máximo AM5 en formato mATX.",
                why: "La MAG X670E Tomahawk WiFi lleva el chipset X670E (con PCIe 5.0 en GPU y almacenamiento) a formato mATX, siendo la opción pro para quienes quieren lo mejor de AM5 en un gabinete compacto. VRM potente para Ryzen 9 con formato reducido.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16 + M.2 PCIe 5.0" },
                  { label: "M.2", value: "4x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["X670E con PCIe 5.0 en formato compacto", "4 slots M.2 NVMe", "VRM robusto para Ryzen 9"],
                cons: ["Precio elevado", "mATX limita expansión vs ATX"],
                stores: [
                  { name: "PCFactory", price: "$319.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$329.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 85, "Overclocking": 80, "Puertos": 80, "Calidad VRM": 82, "WiFi/BT": 85, "Expansión": 72, "Precio/Valor": 68 }
              }
            },
            amd_5000: {
              entry: {
                name: "Gigabyte B550M AORUS Elite",
                brand: "Gigabyte",
                price: "$79.990",
                oneLiner: "La mATX AM4 más popular y económica del mercado.",
                why: "La B550M AORUS Elite es la placa mATX AM4 más vendida por buena razón: precio bajo, calidad Gigabyte AORUS y todo lo necesario para un Ryzen 5 5600. PCIe 4.0, DDR4 y dos slots M.2, sin gastar de más en la placa base.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "No (LAN 2.5G)" }
                ],
                pros: ["Precio muy accesible", "PCIe 4.0 para GPU moderna", "Calidad AORUS confiable"],
                cons: ["Sin WiFi integrado", "Solo 2 slots M.2"],
                stores: [
                  { name: "PCFactory", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$82.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$80.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 58, "Overclocking": 38, "Puertos": 58, "Calidad VRM": 60, "WiFi/BT": 0, "Expansión": 52, "Precio/Valor": 92 }
              },
              balanced: {
                name: "MSI MAG B550M Mortar WiFi",
                brand: "MSI",
                price: "$129.990",
                oneLiner: "La mejor mATX AM4 con WiFi — calidad Mortar en compacto.",
                why: "La MAG B550M Mortar WiFi es la versión compacta del legendario Mortar, con WiFi 6, VRM sólido y toda la calidad de construcción de la línea MAG de MSI. Es la placa perfecta para una build mATX AM4 de alto rendimiento con Ryzen 5 o 7.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6 + BT 5.1" }
                ],
                pros: ["WiFi 6 integrado", "VRM sólido para cualquier Ryzen", "Calidad construcción excelente"],
                cons: ["WiFi 6 (no 6E)", "Solo 2 slots M.2"],
                stores: [
                  { name: "PCFactory", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$133.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$131.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 72, "Overclocking": 42, "Puertos": 68, "Calidad VRM": 72, "WiFi/BT": 75, "Expansión": 58, "Precio/Valor": 82 }
              },
              proRef: {
                name: "ASRock X570M Pro4",
                brand: "ASRock",
                price: "$189.990",
                oneLiner: "X570 compacta: overclocking AM4 en formato mATX.",
                why: "La ASRock X570M Pro4 trae el chipset X570 con overclocking completo a formato mATX, siendo la opción para quienes quieren el máximo de la plataforma AM4 en un gabinete compacto. Ideal para el Ryzen 9 5950X en builds compactas de workstation.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD X570" },
                  { label: "RAM", value: "DDR4 hasta 128GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16 dual" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "No (LAN 2.5G)" }
                ],
                pros: ["X570 con overclocking completo en compacto", "PCIe 4.0 dual para configuraciones multi-GPU", "Precio razonable para X570"],
                cons: ["Sin WiFi integrado", "Solo 2 slots M.2", "Ventilador de chipset X570 presente"],
                stores: [
                  { name: "PCFactory", price: "$189.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$194.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 75, "Overclocking": 78, "Puertos": 70, "Calidad VRM": 75, "WiFi/BT": 0, "Expansión": 70, "Precio/Valor": 72 }
              }
            }
          }
        },
        itx: {
          label: "Mini-ITX",
          desc: "Ultra compacto · Mini Tower o SFF",
          formFactor: "ITX",
          psuTypes: ["SFX", "ATX"],
          caseCompat: ["mini", "sff"],
          byPlatform: {
            intel_14: {
              entry: {
                name: "ASUS ROG Strix Z790-I Gaming WiFi",
                brand: "ASUS",
                price: "$299.990",
                oneLiner: "La ITX Intel más completa: Z790 con overclocking en mini formato.",
                why: "La ROG Strix Z790-I es la referencia en placas ITX para Intel 14va gen. Con chipset Z790 desbloqueado, WiFi 6E y un diseño thermal optimizado para el formato mini, ofrece más de lo esperado en el espacio más pequeño posible.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["Z790 con overclocking en formato mini", "WiFi 6E incluido", "Calidad ROG premium"],
                cons: ["Precio elevado para entrada ITX", "Capacidad RAM limitada a 64GB", "VRM limitado por espacio físico"],
                stores: [
                  { name: "PCFactory", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$309.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 82, "Overclocking": 75, "Puertos": 68, "Calidad VRM": 72, "WiFi/BT": 85, "Expansión": 45, "Precio/Valor": 62 }
              },
              balanced: {
                name: "Gigabyte Z790I AORUS Ultra",
                brand: "Gigabyte",
                price: "$389.990",
                oneLiner: "La ITX Intel más equilibrada: VRM potente y toda la conectividad.",
                why: "La Z790I AORUS Ultra destaca en el segmento ITX por su VRM excepcionalmente potente para el formato, permitiendo usar i9-14900K en mini-ITX sin preocupaciones. Con Thunderbolt 4 y WiFi 6E, es la placa ITX Intel más capaz del mercado.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3 + Thunderbolt 4" }
                ],
                pros: ["VRM potente para i9 en formato ITX", "Thunderbolt 4 integrado", "Diseño térmico optimizado"],
                cons: ["Solo 2 slots M.2 (limitación ITX)", "Muy caro para formato compacto"],
                stores: [
                  { name: "PCFactory", price: "$389.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$399.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 88, "Overclocking": 80, "Puertos": 72, "Calidad VRM": 82, "WiFi/BT": 92, "Expansión": 45, "Precio/Valor": 55 }
              },
              proRef: {
                name: "MSI MEG Z790I Unify-X WiFi",
                brand: "MSI",
                price: "$499.990",
                oneLiner: "La ITX Intel más extrema: para overclockers que exigen mini formato.",
                why: "La MEG Z790I Unify-X es la cima de las placas ITX Intel, diseñada para los más exigentes overclockers que no quieren sacrificar formato. Con su VRM de alta fase único para ITX y 2 slots M.2 PCIe 5.0, establece lo máximo posible en el factor de forma más pequeño.",
                specs: [
                  { label: "Socket", value: "LGA 1700" },
                  { label: "Chipset", value: "Intel Z790" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["Máximo VRM posible en ITX", "M.2 PCIe 5.0 para almacenamiento extremo", "Diseño premium MEG"],
                cons: ["Precio prohibitivo", "Solo 2 slots M.2 por limitación ITX"],
                stores: [
                  { name: "PCFactory", price: "$499.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$514.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 90, "Overclocking": 88, "Puertos": 75, "Calidad VRM": 90, "WiFi/BT": 88, "Expansión": 45, "Precio/Valor": 42 }
              }
            },
            intel_15: {
              entry: {
                name: "ASUS ROG Strix Z890-I Gaming WiFi",
                brand: "ASUS",
                price: "$389.990",
                oneLiner: "La ITX Intel 15va gen de referencia con WiFi 7.",
                why: "La ROG Strix Z890-I es la primera placa ITX para Intel Arrow Lake (15va gen) con todas las características modernas: WiFi 7, PCIe 5.0 y chipset Z890 desbloqueado en el formato más compacto. La elección natural para builds ITX de última generación.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 96GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4" }
                ],
                pros: ["WiFi 7 de última generación en ITX", "M.2 PCIe 5.0", "Plataforma LGA1851 con futuro"],
                cons: ["Precio muy elevado para entrada", "Solo 2 slots M.2"],
                stores: [
                  { name: "PCFactory", price: "$389.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$399.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 85, "Overclocking": 78, "Puertos": 70, "Calidad VRM": 75, "WiFi/BT": 95, "Expansión": 45, "Precio/Valor": 55 }
              },
              balanced: {
                name: "MSI MEG Z890I Ace WiFi",
                brand: "MSI",
                price: "$449.990",
                oneLiner: "La ITX Z890 más equilibrada: potencia y conectividad sin límites.",
                why: "La MEG Z890I Ace WiFi es la placa ITX LGA1851 más equilibrada, combinando un VRM potente para i9, WiFi 7 y Thunderbolt 5 en un formato mini. Es la elección perfecta para quienes quieren la máxima conectividad en el menor espacio con Intel 15va gen.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 96GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4 + Thunderbolt 5" }
                ],
                pros: ["Thunderbolt 5 en formato ITX", "WiFi 7 + BT 5.4", "VRM potente para i9"],
                cons: ["Precio premium muy elevado", "Solo DDR5 hasta 96GB"],
                stores: [
                  { name: "PCFactory", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$462.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 92, "Overclocking": 82, "Puertos": 78, "Calidad VRM": 82, "WiFi/BT": 98, "Expansión": 45, "Precio/Valor": 48 }
              },
              proRef: {
                name: "ASUS ROG Maximus Z890I Extreme",
                brand: "ASUS",
                price: "$699.990",
                oneLiner: "La ITX más extrema jamás hecha para Intel: sin precedentes.",
                why: "La ROG Maximus Z890I Extreme rompe todos los límites del formato ITX con un VRM diseñado para overclocking extremo del i9-15900K en el menor espacio posible. Con Thunderbolt 5, WiFi 7 y herramientas ROG exclusivas, es la referencia absoluta de lo que puede ser una placa ITX.",
                specs: [
                  { label: "Socket", value: "LGA 1851" },
                  { label: "Chipset", value: "Intel Z890" },
                  { label: "RAM", value: "DDR5 hasta 96GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 7 + BT 5.4 + Thunderbolt 5" }
                ],
                pros: ["VRM extremo sin precedente en ITX", "Herramientas ROG overclocking exclusivas", "Thunderbolt 5 + WiFi 7"],
                cons: ["Precio absolutamente prohibitivo", "Overkill total", "ITX limita upgrades futuros"],
                stores: [
                  { name: "PCFactory", price: "$699.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$719.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 96, "Overclocking": 92, "Puertos": 80, "Calidad VRM": 96, "WiFi/BT": 98, "Expansión": 45, "Precio/Valor": 35 }
              }
            },
            amd_7000: {
              entry: {
                name: "ASRock X670E-ITX/TB4",
                brand: "ASRock",
                price: "$319.990",
                oneLiner: "La ITX AM5 más económica con Thunderbolt 4.",
                why: "La ASRock X670E-ITX/TB4 es única: la única placa ITX AM5 con Thunderbolt 4 a precio relativamente accesible para el formato. Con chipset X670E y soporte para todos los Ryzen 7000, es la base para builds ITX AM5 de gran conectividad.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 4.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3 + Thunderbolt 4" }
                ],
                pros: ["Thunderbolt 4 único en ITX AM5 a este precio", "X670E con overclocking completo", "WiFi 6E integrado"],
                cons: ["M.2 solo PCIe 4.0 (no 5.0)", "Precio elevado para un entry ITX"],
                stores: [
                  { name: "PCFactory", price: "$319.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$329.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 88, "Overclocking": 78, "Puertos": 72, "Calidad VRM": 72, "WiFi/BT": 90, "Expansión": 45, "Precio/Valor": 58 }
              },
              balanced: {
                name: "ASUS ROG Strix X670E-I Gaming WiFi",
                brand: "ASUS",
                price: "$449.990",
                oneLiner: "La ITX AM5 definitiva: X670E con VRM potente para el 7800X3D.",
                why: "La ROG Strix X670E-I es la mejor placa ITX para AMD Ryzen 7000, con un VRM especialmente diseñado para aguantar el Ryzen 9 7900X en formato mini y compatibilidad perfecta con el Ryzen 7 7800X3D. Con WiFi 6E y diseño ROG premium.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM potente para cualquier Ryzen 7000", "M.2 PCIe 5.0", "Calidad ROG premium"],
                cons: ["Precio muy elevado", "Solo 2 slots M.2"],
                stores: [
                  { name: "PCFactory", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$462.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 88, "Overclocking": 85, "Puertos": 72, "Calidad VRM": 85, "WiFi/BT": 88, "Expansión": 45, "Precio/Valor": 50 }
              },
              proRef: {
                name: "Gigabyte X670I AORUS Ultra",
                brand: "Gigabyte",
                price: "$529.990",
                oneLiner: "La ITX AM5 más extrema: overclocking sin límites en micro formato.",
                why: "La X670I AORUS Ultra es la cima del formato ITX en plataforma AM5, con el VRM más potente del segmento, WiFi 6E y M.2 PCIe 5.0. Diseñada para quienes quieren correr Ryzen 9 overclocked en el gabinete más compacto posible.",
                specs: [
                  { label: "Socket", value: "AM5" },
                  { label: "Chipset", value: "AMD X670E" },
                  { label: "RAM", value: "DDR5 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 5.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 5.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM máximo en ITX AM5", "M.2 PCIe 5.0 ambos slots", "Diseño térmico superior"],
                cons: ["Precio muy alto", "Solo 2 slots M.2 por limitación ITX"],
                stores: [
                  { name: "PCFactory", price: "$529.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$544.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 90, "Overclocking": 90, "Puertos": 75, "Calidad VRM": 92, "WiFi/BT": 88, "Expansión": 45, "Precio/Valor": 42 }
              }
            },
            amd_5000: {
              entry: {
                name: "ASRock B550M-ITX/ac",
                brand: "ASRock",
                price: "$89.990",
                oneLiner: "La ITX AM4 más económica del mercado.",
                why: "La B550M-ITX/ac de ASRock es la forma más barata de construir en formato ITX con plataforma AM4. Incluye WiFi (ac/5GHz), PCIe 4.0 y todo lo necesario para el Ryzen 5 5600 en el espacio más reducido posible.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "1x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 5 (802.11ac) + BT 4.2" }
                ],
                pros: ["Precio imbatible en ITX", "WiFi integrado (aunque básico)", "Compatible con toda la gama AM4"],
                cons: ["WiFi 5 (antiguo) no WiFi 6", "Solo 1 slot M.2", "VRM básico"],
                stores: [
                  { name: "PCFactory", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$92.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 60, "Overclocking": 35, "Puertos": 52, "Calidad VRM": 55, "WiFi/BT": 55, "Expansión": 42, "Precio/Valor": 88 }
              },
              balanced: {
                name: "ASUS ROG Strix B550-I Gaming",
                brand: "ASUS",
                price: "$199.990",
                oneLiner: "La ITX AM4 más popular: excelente VRM y WiFi 6.",
                why: "La ROG Strix B550-I Gaming es la placa ITX AM4 más valorada por la comunidad. Su VRM sorprendentemente potente para el formato la hace capaz de aguantar incluso el Ryzen 9 5900X, con WiFi 6 y diseño térmico optimizado para espacios reducidos.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe" },
                  { label: "WiFi", value: "WiFi 6 + BT 5.0" }
                ],
                pros: ["VRM potente para el formato ITX", "WiFi 6 integrado", "2 slots M.2 en ITX"],
                cons: ["Precio elevado para AM4 en ITX", "Plataforma sin futuro de upgrade"],
                stores: [
                  { name: "PCFactory", price: "$199.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$204.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 75, "Overclocking": 62, "Puertos": 68, "Calidad VRM": 78, "WiFi/BT": 75, "Expansión": 45, "Precio/Valor": 68 }
              },
              proRef: {
                name: "MSI MEG B550I Unify",
                brand: "MSI",
                price: "$319.990",
                oneLiner: "La ITX AM4 de referencia: overclocking extremo en formato mini.",
                why: "La MEG B550I Unify es la placa ITX AM4 más extrema, diseñada para overclockers que no aceptan compromisos de formato. Con el VRM más potente en ITX AM4 y 2 slots M.2 PCIe 4.0, permite exprimir al máximo el Ryzen 9 5950X en builds compactas.",
                specs: [
                  { label: "Socket", value: "AM4" },
                  { label: "Chipset", value: "AMD B550" },
                  { label: "RAM", value: "DDR4 hasta 64GB" },
                  { label: "PCIe", value: "PCIe 4.0 x16" },
                  { label: "M.2", value: "2x M.2 NVMe PCIe 4.0" },
                  { label: "WiFi", value: "WiFi 6E + BT 5.3" }
                ],
                pros: ["VRM máximo en ITX AM4", "WiFi 6E integrado", "2 slots M.2 PCIe 4.0"],
                cons: ["Precio muy elevado para AM4", "Plataforma sin upgrades futuros"],
                stores: [
                  { name: "PCFactory", price: "$319.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "MercadoLibre", price: "$329.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Conectividad": 82, "Overclocking": 78, "Puertos": 70, "Calidad VRM": 88, "WiFi/BT": 82, "Expansión": 45, "Precio/Valor": 55 }
              }
            }
          }
        }
      }
    },
    ram: {
      icon: "💾",
      label: "Memoria RAM",
      question: "¿Cuánta RAM necesitas?",
      axes: ["Velocidad", "Latencia", "Compatibilidad", "Overclocking", "Estabilidad", "Capacidad", "Precio/Valor"],
      options: {
        "16gb": {
          label: "16 GB",
          desc: "Gaming y uso general · La más común",
          byDDR: {
            DDR4: {
              entry: {
                name: "Kingston Fury Beast 16GB DDR4-3200",
                brand: "Kingston",
                price: "$29.990",
                oneLiner: "16GB DDR4 confiables al precio más bajo del mercado.",
                why: "La Kingston Fury Beast DDR4-3200 es el kit de RAM más popular para builds económicas. Confiable, compatible con todo y con perfil XMP 2.0, ofrece lo esencial sin pagar de más. Perfecta para el Ryzen 5 5600 o i3-12100F.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Bajo perfil" }
                ],
                pros: ["Precio imbatible", "Compatible con prácticamente todo", "Perfil bajo para coolers grandes"],
                cons: ["DDR4-3200 no es la velocidad óptima para AMD", "Sin iluminación RGB"],
                stores: [
                  { name: "MercadoLibre", price: "$29.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$31.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$32.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 95, "Overclocking": 55, "Estabilidad": 85, "Capacidad": 55, "Precio/Valor": 95 }
              },
              balanced: {
                name: "G.Skill Ripjaws V 16GB DDR4-3600",
                brand: "G.Skill",
                price: "$39.990",
                oneLiner: "DDR4-3600 CL18 — la velocidad óptima para Ryzen en AM4.",
                why: "El G.Skill Ripjaws V DDR4-3600 CL18 es el kit recomendado para Ryzen 5000 en AM4. La velocidad de 3600MHz es el punto dulce para el controlador de memoria Zen 3, maximizando el rendimiento del CPU sin pagar por velocidades innecesariamente altas.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR4-3600" },
                  { label: "Latencia", value: "CL18" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Perfil medio" }
                ],
                pros: ["Velocidad óptima para Ryzen AM4", "Buena relación velocidad-latencia", "Marca confiable G.Skill"],
                cons: ["Sin RGB (versión Ripjaws V)", "Precio algo más alto que básico"],
                stores: [
                  { name: "MercadoLibre", price: "$39.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$41.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$40.490", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 72, "Latencia": 65, "Compatibilidad": 90, "Overclocking": 68, "Estabilidad": 88, "Capacidad": 55, "Precio/Valor": 88 }
              },
              proRef: {
                name: "Corsair Dominator Platinum 16GB DDR4-4000",
                brand: "Corsair",
                price: "$79.990",
                oneLiner: "El flagship DDR4: velocidades extremas con el mejor disipador.",
                why: "El Dominator Platinum DDR4-4000 es la referencia premium para overclockers DDR4, con su icónico disipador de aluminio y chips seleccionados para velocidades extremas. Para quienes quieren exprimir cada MHz de la plataforma DDR4.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR4-4000" },
                  { label: "Latencia", value: "CL18" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Aluminio premium con LED" }
                ],
                pros: ["Velocidad DDR4 más alta del segmento", "Disipador premium icónico", "Chips seleccionados para OC"],
                cons: ["Precio elevado para 16GB", "DDR4-4000 puede necesitar ajustes en AMD"],
                stores: [
                  { name: "MercadoLibre", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$82.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 92, "Latencia": 72, "Compatibilidad": 75, "Overclocking": 90, "Estabilidad": 85, "Capacidad": 55, "Precio/Valor": 62 }
              }
            },
            DDR5: {
              entry: {
                name: "Kingston Fury Beast 16GB DDR5-5200",
                brand: "Kingston",
                price: "$39.990",
                oneLiner: "16GB DDR5 confiables para la entrada a la nueva generación.",
                why: "La Kingston Fury Beast DDR5-5200 es el punto de entrada más inteligente a DDR5. Compatible con Intel 12va-15va gen y AMD AM5, a DDR5-5200 ofrece un buen balance de precio y rendimiento para quienes migran a la nueva generación sin gastar en módulos premium.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR5-5200" },
                  { label: "Latencia", value: "CL40" },
                  { label: "Voltaje", value: "1.25V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "ECC on-die", value: "Sí (estándar DDR5)" }
                ],
                pros: ["Punto de entrada económico a DDR5", "Compatible XMP 3.0 y EXPO (Intel y AMD)", "ECC on-die para mayor estabilidad"],
                cons: ["DDR5-5200 no es la velocidad óptima", "16GB puede quedarse corto en el futuro"],
                stores: [
                  { name: "MercadoLibre", price: "$39.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$41.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$42.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 70, "Latencia": 58, "Compatibilidad": 90, "Overclocking": 62, "Estabilidad": 85, "Capacidad": 55, "Precio/Valor": 88 }
              },
              balanced: {
                name: "Corsair Vengeance 16GB DDR5-6000",
                brand: "Corsair",
                price: "$59.990",
                oneLiner: "DDR5-6000 CL30 — el punto dulce para Ryzen AM5 y Intel.",
                why: "El Corsair Vengeance DDR5-6000 CL30 es el kit recomendado para la mayoría de builds DDR5. La velocidad de 6000MHz es el punto óptimo para el controlador de memoria de Ryzen 7000 y ofrece excelente rendimiento en Intel, con latencia baja CL30 que marca diferencia.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR5-6000" },
                  { label: "Latencia", value: "CL30" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["DDR5-6000 es el punto dulce para AM5", "Latencia CL30 excelente", "Compatible XMP y EXPO"],
                cons: ["Precio más alto que DDR4 equivalente", "16GB puede ser ajustado para gaming futuro"],
                stores: [
                  { name: "MercadoLibre", price: "$59.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$61.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$60.490", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 82, "Latencia": 78, "Compatibilidad": 88, "Overclocking": 75, "Estabilidad": 88, "Capacidad": 55, "Precio/Valor": 82 }
              },
              proRef: {
                name: "G.Skill Trident Z5 16GB DDR5-7200",
                brand: "G.Skill",
                price: "$119.990",
                oneLiner: "El DDR5 más rápido: para overclockers que exigen lo máximo.",
                why: "El G.Skill Trident Z5 DDR5-7200 es la referencia en módulos DDR5 de alta velocidad. Con chips Samsung o Hynix seleccionados y disipador premium, permite velocidades que rozaron records mundiales. Para quienes quieren el máximo de su plataforma AM5 o LGA1851.",
                specs: [
                  { label: "Capacidad", value: "16GB (2x8GB)" },
                  { label: "Tipo", value: "DDR5-7200" },
                  { label: "Latencia", value: "CL34" },
                  { label: "Voltaje", value: "1.4V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "Disipador", value: "Aluminio premium Z5" }
                ],
                pros: ["Velocidades record en DDR5", "Chips seleccionados de alta calidad", "Disipador premium icónico"],
                cons: ["Precio muy alto para 16GB", "Puede requerir ajuste manual de timings"],
                stores: [
                  { name: "MercadoLibre", price: "$119.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$124.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 98, "Latencia": 78, "Compatibilidad": 78, "Overclocking": 95, "Estabilidad": 82, "Capacidad": 55, "Precio/Valor": 55 }
              }
            }
          }
        },
        "32gb": {
          label: "32 GB",
          desc: "Gaming serio + productividad · El sweet spot",
          byDDR: {
            DDR4: {
              entry: {
                name: "Kingston Fury Beast 32GB DDR4-3200",
                brand: "Kingston",
                price: "$54.990",
                oneLiner: "32GB DDR4 económicos para el sweet spot de capacidad.",
                why: "El kit Kingston Fury Beast 32GB DDR4-3200 es la forma más económica de tener 32GB para gaming y productividad. Con doble canal y 2x16GB, ofrece la capacidad necesaria para streaming, edición liviana y gaming moderno sin gastar de más.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Bajo perfil" }
                ],
                pros: ["Mejor precio en 32GB DDR4", "32GB ideales para multitarea pesada", "Perfil bajo compatible con cualquier cooler"],
                cons: ["DDR4-3200 no óptimo para Ryzen", "Sin RGB"],
                stores: [
                  { name: "MercadoLibre", price: "$54.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$57.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$58.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 95, "Overclocking": 55, "Estabilidad": 85, "Capacidad": 75, "Precio/Valor": 92 }
              },
              balanced: {
                name: "G.Skill Ripjaws V 32GB DDR4-3600",
                brand: "G.Skill",
                price: "$69.990",
                oneLiner: "32GB a la velocidad óptima Ryzen — el kit más recomendado.",
                why: "El G.Skill Ripjaws V 32GB DDR4-3600 es el kit de RAM más recomendado para builds AM4 con Ryzen. La velocidad de 3600MHz maximiza el rendimiento del controlador Zen 3 mientras mantiene latencias CL18 manejables, con la confiabilidad característica de G.Skill.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR4-3600" },
                  { label: "Latencia", value: "CL18" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Perfil medio rojo" }
                ],
                pros: ["Velocidad óptima para Ryzen 5000", "32GB ideales para cualquier uso", "Confiabilidad G.Skill comprobada"],
                cons: ["Perfil de altura media puede chocar con algunos coolers", "Sin RGB en Ripjaws V"],
                stores: [
                  { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$70.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 72, "Latencia": 65, "Compatibilidad": 90, "Overclocking": 68, "Estabilidad": 90, "Capacidad": 75, "Precio/Valor": 85 }
              },
              proRef: {
                name: "Corsair Vengeance LPX 32GB DDR4-3600",
                brand: "Corsair",
                price: "$89.990",
                oneLiner: "32GB DDR4-3600 de perfil ultra bajo para cualquier configuración.",
                why: "El Corsair Vengeance LPX 32GB DDR4-3600 es la opción premium para quienes priorizan compatibilidad con coolers de torre grandes. Su perfil ultra bajo asegura que no haya conflictos, y sus chips de calidad Corsair garantizan estabilidad a largo plazo.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR4-3600" },
                  { label: "Latencia", value: "CL18" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Ultra bajo perfil" }
                ],
                pros: ["Ultra bajo perfil para máxima compatibilidad", "Corsair garantía 5 años", "Velocidad óptima para Ryzen"],
                cons: ["Precio más alto que Ripjaws V equivalente", "Sin RGB"],
                stores: [
                  { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 72, "Latencia": 65, "Compatibilidad": 98, "Overclocking": 65, "Estabilidad": 92, "Capacidad": 75, "Precio/Valor": 75 }
              }
            },
            DDR5: {
              entry: {
                name: "Kingston Fury Beast 32GB DDR5-5600",
                brand: "Kingston",
                price: "$69.990",
                oneLiner: "32GB DDR5 económicos para la nueva generación.",
                why: "El Kingston Fury Beast 32GB DDR5-5600 es la forma más accesible de tener 32GB en plataforma DDR5. Compatible con XMP 3.0 y EXPO, permite activar el perfil automático tanto en Intel como AMD sin configuración manual.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR5-5600" },
                  { label: "Latencia", value: "CL40" },
                  { label: "Voltaje", value: "1.25V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["Precio más accesible en DDR5 32GB", "Compatible Intel y AMD", "32GB suficientes para años"],
                cons: ["CL40 latencia alta", "DDR5-5600 no óptimo para Ryzen AM5"],
                stores: [
                  { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$73.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 75, "Latencia": 58, "Compatibilidad": 90, "Overclocking": 62, "Estabilidad": 85, "Capacidad": 75, "Precio/Valor": 85 }
              },
              balanced: {
                name: "Corsair Vengeance 32GB DDR5-6000",
                brand: "Corsair",
                price: "$89.990",
                oneLiner: "32GB DDR5-6000 CL30 — el kit recomendado para AM5 e Intel.",
                why: "El Corsair Vengeance 32GB DDR5-6000 es el kit que recomendamos para la mayoría de builds DDR5. Con 32GB a 6000MHz y latencia CL30, ofrece el balance perfecto de capacidad, velocidad y precio, siendo ideal tanto para gaming como para productividad en AM5.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR5-6000" },
                  { label: "Latencia", value: "CL30" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["DDR5-6000 punto óptimo para AM5", "CL30 excelente para DDR5", "32GB cubre todo uso moderno"],
                cons: ["Precio más alto que DDR4 equivalente", "Puede necesitar activación XMP/EXPO manual"],
                stores: [
                  { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 82, "Latencia": 78, "Compatibilidad": 88, "Overclocking": 75, "Estabilidad": 88, "Capacidad": 75, "Precio/Valor": 80 }
              },
              proRef: {
                name: "G.Skill Trident Z5 Neo 32GB DDR5-6000",
                brand: "G.Skill",
                price: "$149.990",
                oneLiner: "El kit DDR5 de referencia para AM5: velocidad y latencia perfectas.",
                why: "El Trident Z5 Neo 32GB DDR5-6000 está específicamente optimizado para la plataforma AMD AM5, con timings ajustados para el controlador de memoria Zen 4 y chips Samsung seleccionados. Es el kit que usan los reviewers como referencia por su rendimiento excepcional.",
                specs: [
                  { label: "Capacidad", value: "32GB (2x16GB)" },
                  { label: "Tipo", value: "DDR5-6000" },
                  { label: "Latencia", value: "CL28" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "EXPO optimizado AM5 + XMP" },
                  { label: "Disipador", value: "Aluminio Trident Z5 con RGB" }
                ],
                pros: ["CL28 — la mejor latencia en DDR5-6000", "Optimizado específicamente para AM5", "RGB premium con diseño icónico"],
                cons: ["Precio elevado", "RGB puede ser innecesario para algunos"],
                stores: [
                  { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 85, "Latencia": 92, "Compatibilidad": 85, "Overclocking": 85, "Estabilidad": 90, "Capacidad": 75, "Precio/Valor": 68 }
              }
            }
          }
        },
        "64gb": {
          label: "64 GB",
          desc: "Edición, 3D y workstation",
          byDDR: {
            DDR4: {
              entry: {
                name: "Kingston Fury Beast 64GB DDR4-3200",
                brand: "Kingston",
                price: "$109.990",
                oneLiner: "64GB DDR4 económicos para workstation y edición.",
                why: "El Kingston Fury Beast 64GB DDR4-3200 es la manera más accesible de tener 64GB en DDR4. Ideal para edición de video, virtualización y diseño 3D que requieren mucha memoria sin necesariamente la mayor velocidad.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Bajo perfil" }
                ],
                pros: ["64GB económicos para workstation", "Confiable Kingston Fury", "Compatible con cualquier plataforma DDR4"],
                cons: ["DDR4-3200 lento para algunas aplicaciones", "2x32GB puede tener peor OC que 4x16GB"],
                stores: [
                  { name: "MercadoLibre", price: "$109.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$113.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$114.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 90, "Overclocking": 52, "Estabilidad": 82, "Capacidad": 90, "Precio/Valor": 88 }
              },
              balanced: {
                name: "G.Skill Ripjaws V 64GB DDR4-3600",
                brand: "G.Skill",
                price: "$139.990",
                oneLiner: "64GB a velocidad óptima Ryzen — workstation completo.",
                why: "El G.Skill Ripjaws V 64GB DDR4-3600 combina la capacidad necesaria para workstation con la velocidad óptima para Ryzen 5000. Es el kit para profesionales de contenido, animación 3D y virtualización que quieren rendimiento sin compromisos.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR4-3600" },
                  { label: "Latencia", value: "CL18" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Perfil medio" }
                ],
                pros: ["Velocidad óptima para Ryzen con 64GB", "G.Skill garantía lifetime", "Disponibilidad amplia"],
                cons: ["2x32GB módulos grandes pueden limitar OC", "Sin RGB"],
                stores: [
                  { name: "MercadoLibre", price: "$139.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$143.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$140.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 72, "Latencia": 65, "Compatibilidad": 88, "Overclocking": 60, "Estabilidad": 88, "Capacidad": 90, "Precio/Valor": 82 }
              },
              proRef: {
                name: "Corsair Dominator Platinum 64GB DDR4-3600",
                brand: "Corsair",
                price: "$249.990",
                oneLiner: "El flagship Corsair en 64GB: premium total para workstation.",
                why: "El Corsair Dominator Platinum 64GB DDR4-3600 es la opción sin compromisos para estaciones de trabajo que requieren 64GB con la máxima calidad. Con disipadores de aluminio masivos y los mejores chips disponibles, garantiza estabilidad absoluta en workloads continuos.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR4-3600" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Aluminio Dominator masivo con LED" }
                ],
                pros: ["CL16 latencia excelente en 64GB DDR4", "Máxima calidad de construcción", "Estabilidad comprobada en workstation"],
                cons: ["Precio muy elevado", "Disipadores muy altos pueden limitar coolers"],
                stores: [
                  { name: "MercadoLibre", price: "$249.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$257.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 75, "Latencia": 82, "Compatibilidad": 85, "Overclocking": 72, "Estabilidad": 95, "Capacidad": 90, "Precio/Valor": 55 }
              }
            },
            DDR5: {
              entry: {
                name: "Kingston Fury Beast 64GB DDR5-4800",
                brand: "Kingston",
                price: "$149.990",
                oneLiner: "64GB DDR5 económicos para la nueva generación workstation.",
                why: "El Kingston Fury Beast 64GB DDR5-4800 es el kit más accesible para tener 64GB en plataforma DDR5. A DDR5-4800, la velocidad base JEDEC, ofrece máxima compatibilidad y estabilidad para workloads de virtualización y edición que priorizan capacidad.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR5-4800" },
                  { label: "Latencia", value: "CL38" },
                  { label: "Voltaje", value: "1.1V" },
                  { label: "Perfil", value: "JEDEC / XMP 3.0 básico" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["64GB DDR5 al menor precio", "Velocidad JEDEC muy estable", "ECC on-die para workstation"],
                cons: ["DDR5-4800 lento para Ryzen AM5", "Sin perfil EXPO optimizado"],
                stores: [
                  { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" },
                  { name: "Falabella", price: "$155.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 65, "Latencia": 55, "Compatibilidad": 92, "Overclocking": 52, "Estabilidad": 90, "Capacidad": 90, "Precio/Valor": 82 }
              },
              balanced: {
                name: "Corsair Vengeance 64GB DDR5-5600",
                brand: "Corsair",
                price: "$199.990",
                oneLiner: "64GB DDR5-5600 para workstation con buen rendimiento.",
                why: "El Corsair Vengeance 64GB DDR5-5600 ofrece el balance entre capacidad y velocidad para estaciones de trabajo DDR5. Con XMP 3.0 y EXPO compatibles, y la reconocida calidad Corsair, es el kit ideal para profesionales en AM5 o LGA1851 que necesitan 64GB.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR5-5600" },
                  { label: "Latencia", value: "CL36" },
                  { label: "Voltaje", value: "1.25V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["64GB a velocidad razonable para workstation", "Compatible XMP y EXPO", "Corsair garantía lifetime"],
                cons: ["No llega a DDR5-6000 óptimo para AM5", "Precio elevado"],
                stores: [
                  { name: "MercadoLibre", price: "$199.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$204.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$201.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 75, "Latencia": 60, "Compatibilidad": 88, "Overclocking": 62, "Estabilidad": 88, "Capacidad": 90, "Precio/Valor": 75 }
              },
              proRef: {
                name: "G.Skill Trident Z5 64GB DDR5-6000",
                brand: "G.Skill",
                price: "$349.990",
                oneLiner: "64GB DDR5-6000 de referencia — workstation sin concesiones.",
                why: "El G.Skill Trident Z5 64GB DDR5-6000 es la opción de referencia para estaciones de trabajo en plataforma DDR5 que no aceptan compromisos. A DDR5-6000 con latencias ajustadas y chips de primera selección, ofrece el máximo rendimiento en workloads de renderizado, edición y virtualización.",
                specs: [
                  { label: "Capacidad", value: "64GB (2x32GB)" },
                  { label: "Tipo", value: "DDR5-6000" },
                  { label: "Latencia", value: "CL30" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "Disipador", value: "Trident Z5 aluminio premium" }
                ],
                pros: ["DDR5-6000 CL30 — rendimiento máximo en 64GB", "Chips seleccionados G.Skill", "Disipador premium con RGB"],
                cons: ["Precio muy elevado", "Overkill para gaming puro"],
                stores: [
                  { name: "MercadoLibre", price: "$349.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$359.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 85, "Latencia": 82, "Compatibilidad": 82, "Overclocking": 78, "Estabilidad": 90, "Capacidad": 90, "Precio/Valor": 58 }
              }
            }
          }
        },
        "128gb": {
          label: "128 GB",
          desc: "Servidores y virtualización",
          byDDR: {
            DDR4: {
              entry: {
                name: "Kingston Fury Beast 128GB DDR4-3200",
                brand: "Kingston",
                price: "$259.990",
                oneLiner: "128GB DDR4 para servidores y virtualización pesada.",
                why: "El Kingston Fury Beast 128GB DDR4-3200 es la forma más accesible de alcanzar 128GB en plataforma DDR4. Usando 4 módulos de 32GB para el canal quad (en placas compatibles), ofrece capacidad masiva para virtualización, bases de datos y servidores de desarrollo.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Bajo perfil" }
                ],
                pros: ["128GB para virtualización sin límites", "4 módulos activan dual/quad channel", "Kingston confiable"],
                cons: ["DDR4-3200 puede ser cuello de botella", "4 módulos pueden afectar overclocking de CPU"],
                stores: [
                  { name: "MercadoLibre", price: "$259.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$267.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 85, "Overclocking": 45, "Estabilidad": 80, "Capacidad": 100, "Precio/Valor": 82 }
              },
              balanced: {
                name: "G.Skill Ripjaws V 128GB DDR4-3200",
                brand: "G.Skill",
                price: "$299.990",
                oneLiner: "128GB G.Skill para máxima capacidad en workstation DDR4.",
                why: "El G.Skill Ripjaws V 128GB DDR4-3200 es el kit de 128GB más confiable del mercado para plataformas DDR4. Con la garantía lifetime de G.Skill y módulos 4x32GB probados exhaustivamente, es la referencia para servidores de escritorio y VMs pesadas.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Perfil medio" }
                ],
                pros: ["G.Skill garantía lifetime en 128GB", "Calidad probada para workloads 24/7", "Compatibilidad certificada amplia"],
                cons: ["DDR4-3200 limitado en velocidad", "4 módulos requieren buenas trazas"],
                stores: [
                  { name: "MercadoLibre", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$309.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 88, "Overclocking": 45, "Estabilidad": 88, "Capacidad": 100, "Precio/Valor": 75 }
              },
              proRef: {
                name: "Corsair Vengeance LPX 128GB DDR4-3200",
                brand: "Corsair",
                price: "$389.990",
                oneLiner: "128GB Corsair de ultra bajo perfil para servidores exigentes.",
                why: "El Corsair Vengeance LPX 128GB DDR4-3200 es la solución premium para servidores de escritorio con 128GB. Su perfil ultra bajo garantiza compatibilidad con cualquier cooler y su historial de confiabilidad Corsair lo hace la elección para ambientes de trabajo críticos.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR4-3200" },
                  { label: "Latencia", value: "CL16" },
                  { label: "Voltaje", value: "1.35V" },
                  { label: "Perfil", value: "XMP 2.0" },
                  { label: "Disipador", value: "Ultra bajo perfil" }
                ],
                pros: ["Ultra bajo perfil compatible con todo", "Corsair garantía lifetime", "Probado para uso 24/7"],
                cons: ["Precio premium", "DDR4-3200 no es DDR4-3600"],
                stores: [
                  { name: "MercadoLibre", price: "$389.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$399.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 62, "Latencia": 60, "Compatibilidad": 95, "Overclocking": 42, "Estabilidad": 95, "Capacidad": 100, "Precio/Valor": 60 }
              }
            },
            DDR5: {
              entry: {
                name: "Kingston Fury Beast 128GB DDR5-4800",
                brand: "Kingston",
                price: "$349.990",
                oneLiner: "128GB DDR5 JEDEC para máxima compatibilidad en workstation.",
                why: "El Kingston Fury Beast 128GB DDR5-4800 es la opción más estable para sistemas con 128GB DDR5. A velocidad JEDEC base, maximiza la compatibilidad con placas de alta capacidad y garantiza estabilidad absoluta en workloads continuos de virtualización.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR5-4800" },
                  { label: "Latencia", value: "CL38" },
                  { label: "Voltaje", value: "1.1V" },
                  { label: "Perfil", value: "JEDEC" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["128GB DDR5 al precio más bajo", "JEDEC = máxima estabilidad", "ECC on-die nativo DDR5"],
                cons: ["DDR5-4800 lento para Ryzen AM5", "Sin perfil XMP/EXPO avanzado"],
                stores: [
                  { name: "MercadoLibre", price: "$349.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$359.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 65, "Latencia": 52, "Compatibilidad": 92, "Overclocking": 42, "Estabilidad": 92, "Capacidad": 100, "Precio/Valor": 75 }
              },
              balanced: {
                name: "Corsair Vengeance 128GB DDR5-4800",
                brand: "Corsair",
                price: "$449.990",
                oneLiner: "128GB DDR5 Corsair para workstation de alta exigencia.",
                why: "El Corsair Vengeance 128GB DDR5-4800 combina la fiabilidad Corsair con la capacidad masiva para los workloads más exigentes. Ideal para renderizado, edición de video 8K y virtualización que requieren memoria abundante con calidad garantizada.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR5-4800" },
                  { label: "Latencia", value: "CL38" },
                  { label: "Voltaje", value: "1.1V" },
                  { label: "Perfil", value: "JEDEC / XMP 3.0 básico" },
                  { label: "ECC on-die", value: "Sí" }
                ],
                pros: ["Corsair calidad premium en 128GB", "Probado para workloads 24/7", "ECC on-die nativo"],
                cons: ["DDR5-4800 sin perfil EXPO óptimo", "Precio elevado"],
                stores: [
                  { name: "MercadoLibre", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$462.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 65, "Latencia": 52, "Compatibilidad": 90, "Overclocking": 42, "Estabilidad": 95, "Capacidad": 100, "Precio/Valor": 65 }
              },
              proRef: {
                name: "G.Skill Trident Z5 128GB DDR5-5600",
                brand: "G.Skill",
                price: "$699.990",
                oneLiner: "El kit 128GB DDR5 más rápido del mercado: workstation sin límites.",
                why: "El G.Skill Trident Z5 128GB DDR5-5600 es la referencia absoluta para workstations de alta capacidad en DDR5. Con módulos 32GB seleccionados para velocidades altas, es el kit para quien no acepta compromiso alguno entre capacidad masiva y velocidad máxima.",
                specs: [
                  { label: "Capacidad", value: "128GB (4x32GB)" },
                  { label: "Tipo", value: "DDR5-5600" },
                  { label: "Latencia", value: "CL36" },
                  { label: "Voltaje", value: "1.25V" },
                  { label: "Perfil", value: "XMP 3.0 / EXPO" },
                  { label: "Disipador", value: "Trident Z5 aluminio premium" }
                ],
                pros: ["El 128GB DDR5 más rápido disponible", "Chips seleccionados G.Skill", "Disipador premium"],
                cons: ["Precio absolutamente premium", "Requiere placa con buenas trazas DDR5"],
                stores: [
                  { name: "MercadoLibre", price: "$699.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$719.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Velocidad": 80, "Latencia": 65, "Compatibilidad": 82, "Overclocking": 62, "Estabilidad": 90, "Capacidad": 100, "Precio/Valor": 45 }
              }
            }
          }
        }
      }
    },
    gpu: {
      icon: "🎮",
      label: "Tarjeta Gráfica (GPU)",
      question: "¿Qué nivel de GPU buscas?",
      axes: ["Rendimiento 1080p", "Rendimiento 1440p", "Ray Tracing", "VRAM", "Eficiencia", "Temperatura", "Precio/Valor"],
      options: {
        entry: {
          label: "Entrada",
          desc: "1080p sólido · 75-150W · 400W PSU mín.",
          minPSU: 400,
          maxLength: 200,
          entry: {
            name: "AMD Radeon RX 6600 8GB",
            brand: "AMD",
            price: "$159.990",
            oneLiner: "1080p sólido al precio más económico del mercado.",
            why: "La RX 6600 es la GPU de entrada más inteligente para gaming 1080p. Con 8GB GDDR6 y excelente eficiencia, entrega fps más que suficientes en todos los juegos modernos a 1080p sin gastar de más. Es perfecta para el i3-12100F o Ryzen 5 5600.",
            specs: [
              { label: "VRAM", value: "8GB GDDR6" },
              { label: "Bus", value: "128-bit" },
              { label: "TDP", value: "132W" },
              { label: "Conector", value: "1x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 1.4" },
              { label: "Largo", value: "~196mm" }
            ],
            pros: ["1080p ultra sólido en cualquier juego", "Muy eficiente en consumo", "Cabe en cualquier gabinete"],
            cons: ["1440p limitado en títulos exigentes", "Sin Ray Tracing práctico", "Bus 128-bit limita algo el ancho de banda"],
            stores: [
              { name: "MercadoLibre", price: "$159.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$164.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$161.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 75, "Rendimiento 1440p": 52, "Ray Tracing": 38, "VRAM": 55, "Eficiencia": 72, "Temperatura": 70, "Precio/Valor": 82 }
          },
          balanced: {
            name: "NVIDIA GeForce RTX 4060 8GB",
            brand: "NVIDIA",
            price: "$259.990",
            oneLiner: "DLSS 3 y Ray Tracing en el nivel de entrada — la GPU inteligente.",
            why: "La RTX 4060 trae tecnologías exclusivas NVIDIA como DLSS 3 con Frame Generation y AV1 Encoder a un precio accesible. Aunque tiene 8GB de VRAM, su eficiencia y tecnologías de upscaling la hacen una opción mucho más completa que la competencia para el mismo precio.",
            specs: [
              { label: "VRAM", value: "8GB GDDR6" },
              { label: "Bus", value: "128-bit" },
              { label: "TDP", value: "115W" },
              { label: "Conector", value: "1x 16-pin (adapter incluido)" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 1.4a" },
              { label: "Largo", value: "~240mm" }
            ],
            pros: ["DLSS 3 con Frame Generation exclusivo", "Ray Tracing práctico en 1080p", "Consumo muy bajo (115W)"],
            cons: ["8GB VRAM puede ser justo en 2025+", "Bus 128-bit", "Precio superior a RX 6600"],
            stores: [
              { name: "MercadoLibre", price: "$259.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$264.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$261.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 85, "Rendimiento 1440p": 65, "Ray Tracing": 72, "VRAM": 55, "Eficiencia": 85, "Temperatura": 78, "Precio/Valor": 80 }
          },
          proRef: {
            name: "AMD Radeon RX 7600 XT 16GB",
            brand: "AMD",
            price: "$299.990",
            oneLiner: "16GB de VRAM en nivel de entrada — la más preparada para el futuro.",
            why: "La RX 7600 XT es la GPU de entrada más preparada para el futuro gracias a sus 16GB de VRAM, el doble que la competencia. Aunque su rendimiento raster es similar a la RTX 4060, su abundante VRAM la hace ideal para texturas altas y workloads creativos.",
            specs: [
              { label: "VRAM", value: "16GB GDDR6" },
              { label: "Bus", value: "128-bit" },
              { label: "TDP", value: "165W" },
              { label: "Conector", value: "1x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 2.1" },
              { label: "Largo", value: "~230mm" }
            ],
            pros: ["16GB VRAM — a prueba de futuro", "DisplayPort 2.1 para monitores futuros", "Buen rendimiento 1080p"],
            cons: ["Ray Tracing débil vs NVIDIA", "Sin DLSS/Frame Generation", "TDP algo alto para su rendimiento"],
            stores: [
              { name: "MercadoLibre", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$309.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$302.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 82, "Rendimiento 1440p": 60, "Ray Tracing": 40, "VRAM": 88, "Eficiencia": 76, "Temperatura": 72, "Precio/Valor": 78 }
          }
        },
        mid: {
          label: "Gama Media",
          desc: "1440p fluido · 115-200W · 550W PSU mín.",
          minPSU: 550,
          maxLength: 260,
          entry: {
            name: "AMD Radeon RX 7700 XT 12GB",
            brand: "AMD",
            price: "$349.990",
            oneLiner: "1440p sólido con 12GB VRAM y eficiencia RDNA 3.",
            why: "La RX 7700 XT es la entrada al gaming 1440p de la arquitectura RDNA 3. Con 12GB de VRAM, soporte a DisplayPort 2.1 y buen rendimiento en rasterización, es una opción atractiva para quienes quieren 1440p sin gastar en gama alta.",
            specs: [
              { label: "VRAM", value: "12GB GDDR6" },
              { label: "Bus", value: "192-bit" },
              { label: "TDP", value: "245W" },
              { label: "Conector", value: "2x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 2.1" },
              { label: "Largo", value: "~267mm" }
            ],
            pros: ["1440p fluido en la mayoría de juegos", "12GB VRAM y bus 192-bit", "DisplayPort 2.1"],
            cons: ["Ray Tracing débil vs NVIDIA equivalente", "TDP elevado para su nivel", "Sin Frame Generation"],
            stores: [
              { name: "MercadoLibre", price: "$349.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$359.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$352.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 88, "Rendimiento 1440p": 75, "Ray Tracing": 48, "VRAM": 75, "Eficiencia": 74, "Temperatura": 72, "Precio/Valor": 80 }
          },
          balanced: {
            name: "NVIDIA GeForce RTX 4060 Ti 16GB",
            brand: "NVIDIA",
            price: "$449.990",
            oneLiner: "DLSS 3, Ray Tracing y 16GB VRAM — la gama media completa.",
            why: "La RTX 4060 Ti 16GB es la GPU gama media más equilibrada: trae DLSS 3 con Frame Generation, Ray Tracing práctico a 1440p y 16GB de VRAM para durar varios años. Su eficiencia de 160W la hace fácil de alimentar y refrigerar en cualquier build.",
            specs: [
              { label: "VRAM", value: "16GB GDDR6" },
              { label: "Bus", value: "128-bit" },
              { label: "TDP", value: "160W" },
              { label: "Conector", value: "1x 16-pin (adapter)" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 1.4a" },
              { label: "Largo", value: "~240mm" }
            ],
            pros: ["16GB VRAM futuro-segura", "DLSS 3 Frame Generation exclusivo", "Eficiencia excepcional (160W)"],
            cons: ["Bus 128-bit limita algo el bandwidth", "Precio elevado vs RX 7700 XT", "Sin DP 2.1"],
            stores: [
              { name: "MercadoLibre", price: "$449.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$459.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$452.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 90, "Rendimiento 1440p": 82, "Ray Tracing": 80, "VRAM": 88, "Eficiencia": 80, "Temperatura": 75, "Precio/Valor": 72 }
          },
          proRef: {
            name: "AMD Radeon RX 7800 XT 16GB",
            brand: "AMD",
            price: "$399.990",
            oneLiner: "16GB, 256-bit y 1440p excelente — la gama media AMD de referencia.",
            why: "La RX 7800 XT es la referencia AMD en gama media: 16GB con bus 256-bit, RDNA 3 con excelente rendimiento en rasterización y un precio muy competitivo. Para gaming 1440p puro sin Ray Tracing, supera o iguala a la RTX 4060 Ti a menor precio.",
            specs: [
              { label: "VRAM", value: "16GB GDDR6" },
              { label: "Bus", value: "256-bit" },
              { label: "TDP", value: "263W" },
              { label: "Conector", value: "2x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 3x DP 2.1" },
              { label: "Largo", value: "~267mm" }
            ],
            pros: ["16GB GDDR6 con bus 256-bit excelente", "Mejor precio que RTX 4060 Ti", "1440p ultra en la mayoría de juegos"],
            cons: ["Ray Tracing mucho más débil que NVIDIA", "TDP elevado (263W)", "Sin DLSS/Frame Generation"],
            stores: [
              { name: "MercadoLibre", price: "$399.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$409.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$402.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 90, "Rendimiento 1440p": 80, "Ray Tracing": 50, "VRAM": 88, "Eficiencia": 75, "Temperatura": 73, "Precio/Valor": 82 }
          }
        },
        high: {
          label: "Gama Alta",
          desc: "4K / 1440p máximo · 200-285W · 700W mín.",
          minPSU: 700,
          maxLength: 320,
          entry: {
            name: "NVIDIA GeForce RTX 4070 Super 12GB",
            brand: "NVIDIA",
            price: "$659.990",
            oneLiner: "La GPU gama alta más equilibrada: DLSS 3, 1440p ultra y 4K decente.",
            why: "La RTX 4070 Super es el mejor punto de entrada a la gama alta NVIDIA. Con DLSS 3 Frame Generation, Ray Tracing excelente y 12GB GDDR6X, entrega 1440p ultra en todos los juegos y 4K a configuraciones altas. Su eficiencia de 220W es notable para su nivel.",
            specs: [
              { label: "VRAM", value: "12GB GDDR6X" },
              { label: "Bus", value: "192-bit" },
              { label: "TDP", value: "220W" },
              { label: "Conector", value: "1x 16-pin (adapter)" },
              { label: "Salidas", value: "1x HDMI 2.1a + 3x DP 1.4a" },
              { label: "Largo", value: "~285mm" }
            ],
            pros: ["DLSS 3 con Frame Generation excepcional", "1440p ultra en todos los juegos", "Eficiencia clase líder"],
            cons: ["12GB puede ser limitante en 4K textures altas", "Precio elevado vs AMD equivalente", "Sin DP 2.1"],
            stores: [
              { name: "MercadoLibre", price: "$659.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$674.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$664.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 95, "Rendimiento 1440p": 92, "Ray Tracing": 88, "VRAM": 75, "Eficiencia": 83, "Temperatura": 77, "Precio/Valor": 72 }
          },
          balanced: {
            name: "AMD Radeon RX 7900 XT 20GB",
            brand: "AMD",
            price: "$799.990",
            oneLiner: "20GB VRAM y 4K nativo — la AMD gama alta para creadores.",
            why: "La RX 7900 XT es la opción AMD para quienes quieren 4K nativo sin depender de upscaling y necesitan mucha VRAM para trabajo creativo. Sus 20GB GDDR6 y bus 320-bit ofrecen un ancho de banda enorme para renderizado y diseño 3D junto al gaming 4K.",
            specs: [
              { label: "VRAM", value: "20GB GDDR6" },
              { label: "Bus", value: "320-bit" },
              { label: "TDP", value: "315W" },
              { label: "Conector", value: "2x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 2x DP 2.1 + 1x USB-C" },
              { label: "Largo", value: "~276mm" }
            ],
            pros: ["20GB VRAM excepcional para 4K y creación", "Bus 320-bit enorme bandwidth", "DP 2.1 para monitores 4K 144Hz"],
            cons: ["Ray Tracing débil vs RTX equivalente", "TDP elevado (315W)", "Sin DLSS/Frame Generation"],
            stores: [
              { name: "MercadoLibre", price: "$799.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$819.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$804.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 96, "Rendimiento 1440p": 93, "Ray Tracing": 70, "VRAM": 95, "Eficiencia": 73, "Temperatura": 68, "Precio/Valor": 75 }
          },
          proRef: {
            name: "NVIDIA GeForce RTX 4080 Super 16GB",
            brand: "NVIDIA",
            price: "$1.099.990",
            oneLiner: "La GPU gama alta más completa: 4K ultra, RT excelente y DLSS 3.",
            why: "La RTX 4080 Super es la cima accesible de NVIDIA Ada Lovelace. Con 16GB GDDR6X, Ray Tracing líder y DLSS 3 Frame Generation, entrega 4K ultra en prácticamente todo y sirve como referencia Pro para quienes quieren lo mejor sin pagar por la RTX 4090.",
            specs: [
              { label: "VRAM", value: "16GB GDDR6X" },
              { label: "Bus", value: "256-bit" },
              { label: "TDP", value: "320W" },
              { label: "Conector", value: "1x 16-pin (adapter)" },
              { label: "Salidas", value: "1x HDMI 2.1a + 3x DP 1.4a" },
              { label: "Largo", value: "~310mm" }
            ],
            pros: ["4K ultra en prácticamente todo", "Ray Tracing clase líder", "DLSS 3 Frame Generation excepcional"],
            cons: ["Precio muy elevado", "Sin DP 2.1", "Tamaño y peso considerable"],
            stores: [
              { name: "MercadoLibre", price: "$1.099.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$1.124.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$1.109.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 98, "Rendimiento 1440p": 97, "Ray Tracing": 95, "VRAM": 88, "Eficiencia": 82, "Temperatura": 74, "Precio/Valor": 65 }
          }
        },
        enthusiast: {
          label: "Entusiasta",
          desc: "Sin compromisos · 300-450W · 850W mín.",
          minPSU: 850,
          maxLength: 340,
          entry: {
            name: "AMD Radeon RX 7900 XTX 24GB",
            brand: "AMD",
            price: "$999.990",
            oneLiner: "24GB VRAM y la AMD más rápida: 4K sin compromisos.",
            why: "La RX 7900 XTX es la GPU de referencia AMD, con 24GB GDDR6 y el bus más ancho (384-bit) para rendimiento 4K nativo excepcional. Para gaming 4K puro sin Ray Tracing y trabajo creativo con VRAM masiva, no hay nada mejor en el ecosistema AMD.",
            specs: [
              { label: "VRAM", value: "24GB GDDR6" },
              { label: "Bus", value: "384-bit" },
              { label: "TDP", value: "355W" },
              { label: "Conector", value: "2x 8-pin" },
              { label: "Salidas", value: "1x HDMI 2.1 + 2x DP 2.1 + 1x USB-C" },
              { label: "Largo", value: "~287mm" }
            ],
            pros: ["24GB VRAM con bus 384-bit excepcional", "4K nativo líder en AMD", "DP 2.1 para monitores 4K 144Hz+"],
            cons: ["Ray Tracing muy inferior a RTX 4090", "TDP elevado", "Sin tecnología Frame Generation competitiva"],
            stores: [
              { name: "MercadoLibre", price: "$999.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$1.024.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$1.004.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 97, "Rendimiento 1440p": 95, "Ray Tracing": 72, "VRAM": 95, "Eficiencia": 72, "Temperatura": 66, "Precio/Valor": 70 }
          },
          balanced: {
            name: "NVIDIA GeForce RTX 4080 Super 16GB",
            brand: "NVIDIA",
            price: "$1.099.990",
            oneLiner: "El flagship accesible NVIDIA: RT excepcional y DLSS 3 perfecto.",
            why: "La RTX 4080 Super en nivel entusiasta representa el punto de equilibrio entre precio extremo y rendimiento absoluto de NVIDIA. Con Ray Tracing líder, DLSS 3 y 16GB GDDR6X, es la GPU para quienes quieren la experiencia NVIDIA completa sin pagar por la RTX 4090.",
            specs: [
              { label: "VRAM", value: "16GB GDDR6X" },
              { label: "Bus", value: "256-bit" },
              { label: "TDP", value: "320W" },
              { label: "Conector", value: "1x 16-pin (adapter)" },
              { label: "Salidas", value: "1x HDMI 2.1a + 3x DP 1.4a" },
              { label: "Largo", value: "~310mm" }
            ],
            pros: ["Ray Tracing clase líder en su rango", "DLSS 3 Frame Generation excepcional", "Rendimiento 4K con cualquier juego"],
            cons: ["16GB puede ser limitante vs 24GB AMD", "Sin DP 2.1", "Precio muy elevado"],
            stores: [
              { name: "MercadoLibre", price: "$1.099.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$1.124.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$1.109.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 98, "Rendimiento 1440p": 97, "Ray Tracing": 95, "VRAM": 88, "Eficiencia": 82, "Temperatura": 74, "Precio/Valor": 65 }
          },
          proRef: {
            name: "NVIDIA GeForce RTX 4090 24GB",
            brand: "NVIDIA",
            price: "$1.999.990",
            oneLiner: "La GPU más poderosa del planeta — sin discusión posible.",
            why: "La RTX 4090 es, simplemente, la GPU más poderosa que existe. Con 24GB GDDR6X y un rendimiento hasta 50% superior a la RTX 4080 Super, establece el máximo absoluto en gaming 4K, Ray Tracing y workloads de AI/ML. Para quienes no aceptan ningún compromiso.",
            specs: [
              { label: "VRAM", value: "24GB GDDR6X" },
              { label: "Bus", value: "384-bit" },
              { label: "TDP", value: "450W" },
              { label: "Conector", value: "1x 16-pin" },
              { label: "Salidas", value: "1x HDMI 2.1a + 3x DP 1.4a" },
              { label: "Largo", value: "~336mm" }
            ],
            pros: ["#1 absoluto en todos los benchmarks", "24GB GDDR6X con bandwidth enorme", "Preparada para 8K gaming"],
            cons: ["Precio completamente desorbitado", "TDP 450W requiere PSU muy buena", "Tamaño masivo no cabe en todo"],
            stores: [
              { name: "MercadoLibre", price: "$1.999.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$2.049.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$2.009.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento 1080p": 100, "Rendimiento 1440p": 100, "Ray Tracing": 99, "VRAM": 95, "Eficiencia": 68, "Temperatura": 62, "Precio/Valor": 52 }
          }
        }
      }
    },
    psu: {
      icon: "⚡",
      label: "Fuente de Poder (PSU)",
      question: "¿Qué certificación prefieres?",
      axes: ["Estabilidad", "Eficiencia", "Modularidad", "Ruido", "Protecciones", "Calidad", "Precio/Valor"],
      options: {
        bronze: {
          label: "80+ Bronze",
          desc: "Eficiencia ~85% · Lo más económico",
          byGPU: {
            entry: {
              watts: "550W",
              entry: {
                name: "Cooler Master MWE 550W Bronze",
                brand: "Cooler Master",
                price: "$34.990",
                oneLiner: "La PSU de entrada más confiable: suficiente para la mayoría.",
                why: "La Cooler Master MWE 550W Bronze es la fuente más popular para builds de entrada. Con 550W y certificación 80+ Bronze, cubre ampliamente el consumo de una build con i5 + RTX 4060 dejando margen de seguridad, a un precio imbatible.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Bronze (~85% eficiencia)" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Precio imbatible", "Suficiente para builds entry/mid", "Marca confiable CM"],
                cons: ["No modular (cables fijos)", "Eficiencia básica 80+ Bronze", "Sin protección OPP avanzada"],
                stores: [
                  { name: "MercadoLibre", price: "$34.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$36.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$35.490", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 65, "Eficiencia": 62, "Modularidad": 0, "Ruido": 58, "Protecciones": 60, "Calidad": 62, "Precio/Valor": 95 }
              },
              balanced: {
                name: "Corsair CV550",
                brand: "Corsair",
                price: "$44.990",
                oneLiner: "Corsair confiable a precio accesible para builds entry.",
                why: "La Corsair CV550 trae la confiabilidad de la marca Corsair a un precio muy accesible. Con 550W y protecciones completas OVP/UVP/SCP/OCP, ofrece más seguridad que las fuentes blancas sin nombre a un precio razonable.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "3 años" }
                ],
                pros: ["Marca Corsair confiable", "Protecciones completas OVP/UVP/SCP", "Cables suficientemente largos"],
                cons: ["No modular", "Solo 3 años garantía (menos que MWE)", "Eficiencia básica"],
                stores: [
                  { name: "MercadoLibre", price: "$44.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$46.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$45.490", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 0, "Ruido": 60, "Protecciones": 68, "Calidad": 68, "Precio/Valor": 85 }
              },
              proRef: {
                name: "Thermaltake Smart BM2 550W",
                brand: "Thermaltake",
                price: "$54.990",
                oneLiner: "Semi-modular Bronze para builds ordenadas sin pagar Gold.",
                why: "La Thermaltake Smart BM2 550W es la única opción semi-modular a precio de Bronze, permitiendo desconectar los cables innecesarios para un interior ordenado. Es la referencia en el nivel Bronze para quienes valoran la gestión de cables.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "120mm" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Semi-modular en precio Bronze", "Cable management mejorado", "5 años garantía"],
                cons: ["Precio más alto que no-modulares", "Eficiencia Bronze, no Gold"],
                stores: [
                  { name: "MercadoLibre", price: "$54.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$57.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 62, "Protecciones": 65, "Calidad": 68, "Precio/Valor": 80 }
              }
            },
            mid: {
              watts: "650W",
              entry: {
                name: "Cooler Master MWE 650W Bronze",
                brand: "Cooler Master",
                price: "$44.990",
                oneLiner: "650W económicos para builds con GPU gama media.",
                why: "La Cooler Master MWE 650W Bronze es la PSU más accesible para builds con RX 7700 XT o RTX 4060 Ti. Con 650W tiene margen suficiente para un build completo con CPU de gama media sin pagar por Gold innecesariamente.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Precio imbatible en 650W", "Suficiente para GPU gama media + CPU", "5 años garantía"],
                cons: ["No modular", "Eficiencia básica", "Sin semi-modular"],
                stores: [
                  { name: "MercadoLibre", price: "$44.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$46.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$45.490", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 65, "Eficiencia": 62, "Modularidad": 0, "Ruido": 58, "Protecciones": 60, "Calidad": 62, "Precio/Valor": 92 }
              },
              balanced: {
                name: "Corsair CX650",
                brand: "Corsair",
                price: "$54.990",
                oneLiner: "Corsair CX en 650W — confiable para gama media.",
                why: "La Corsair CX650 es la fuente de gama media más recomendada del segmento Bronze. Con protecciones completas, ventilador de bajo ruido y la garantía de la marca Corsair, es una elección segura para cualquier build con GPU gama media.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm Thermally Controlled" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Marca Corsair con soporte local", "Ventilador controlado por temperatura", "Protecciones completas"],
                cons: ["No modular", "Eficiencia Bronze"],
                stores: [
                  { name: "MercadoLibre", price: "$54.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$57.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$55.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 0, "Ruido": 65, "Protecciones": 68, "Calidad": 68, "Precio/Valor": 82 }
              },
              proRef: {
                name: "Thermaltake Smart BM2 650W",
                brand: "Thermaltake",
                price: "$64.990",
                oneLiner: "Semi-modular 650W Bronze — la más ordenada del segmento.",
                why: "La Thermaltake Smart BM2 650W es la referencia semi-modular en el segmento Bronze 650W, permitiendo cable management limpio sin pagar Gold. Para builds gama media que priorizan el orden interno a precio contenido.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "120mm" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Semi-modular para cables limpios", "5 años garantía", "Precio razonable para semi-mod"],
                cons: ["Eficiencia Bronze", "Precio más alto que no-modulares"],
                stores: [
                  { name: "MercadoLibre", price: "$64.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$67.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 62, "Protecciones": 65, "Calidad": 68, "Precio/Valor": 78 }
              }
            },
            high: {
              watts: "850W",
              entry: {
                name: "Cooler Master MWE 850W Bronze",
                brand: "Cooler Master",
                price: "$74.990",
                oneLiner: "850W económicos para RTX 4070 Super y superiores.",
                why: "La Cooler Master MWE 850W Bronze ofrece la potencia necesaria para una build con RTX 4070 Super o RX 7900 XT a precio contenido. Con 850W bronze hay margen amplio y los 5 años de garantía de CM dan tranquilidad.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "140mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["850W a precio de Bronze", "Suficiente para gama alta", "4 conectores PCIe"],
                cons: ["No modular en 850W genera muchos cables", "Eficiencia Bronze en consumos altos"],
                stores: [
                  { name: "MercadoLibre", price: "$74.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$77.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$75.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 65, "Eficiencia": 62, "Modularidad": 0, "Ruido": 58, "Protecciones": 60, "Calidad": 62, "Precio/Valor": 88 }
              },
              balanced: {
                name: "Corsair CX850M",
                brand: "Corsair",
                price: "$89.990",
                oneLiner: "Semi-modular Corsair en 850W — el equilibrio para gama alta.",
                why: "La Corsair CX850M es la fuente semi-modular más accesible en 850W, ofreciendo el cable management necesario para builds de gama alta sin pagar certificación Gold. Con la confiabilidad Corsair y 5 años de garantía, es la elección lógica para RTX 4070 Super.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "135mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Semi-modular en 850W Bronze asequible", "Corsair confiabilidad comprobada", "5 años garantía"],
                cons: ["Eficiencia Bronze en consumos altos", "Precio cercano a Gold equivalente"],
                stores: [
                  { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 62, "Protecciones": 68, "Calidad": 70, "Precio/Valor": 78 }
              },
              proRef: {
                name: "Thermaltake Smart BM2 850W",
                brand: "Thermaltake",
                price: "$99.990",
                oneLiner: "850W semi-modular Bronze con mejor cable management.",
                why: "La Thermaltake Smart BM2 850W es la referencia en semi-modularidad Bronze para gama alta, con todos los cables necesarios para la build más compleja y la opción de desconectar los innecesarios para un interior impecable.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "140mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Semi-modular para build ordenada", "Suficiente para cualquier build gama alta", "Thermaltake sólida confiabilidad"],
                cons: ["Bronze no es lo ideal para GPU de 300W+", "Precio premium vs no-modular equivalente"],
                stores: [
                  { name: "MercadoLibre", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$103.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 62, "Protecciones": 65, "Calidad": 68, "Precio/Valor": 75 }
              }
            },
            enthusiast: {
              watts: "1000W",
              entry: {
                name: "Cooler Master MWE 1000W Bronze",
                brand: "Cooler Master",
                price: "$99.990",
                oneLiner: "1000W económicos para la RTX 4090 en Bronze.",
                why: "La Cooler Master MWE 1000W Bronze es la forma más económica de alimentar builds entusiasta con RTX 4090. Con 1000W Bronze hay margen suficiente incluso para configuraciones extremas, y los 5 años de garantía CM dan tranquilidad.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "140mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["1000W al precio más bajo", "Suficiente para RTX 4090 + CPU high-end", "5 años garantía"],
                cons: ["No modular — cables masivos en build de lujo", "Eficiencia Bronze es sub-óptima en 1000W"],
                stores: [
                  { name: "MercadoLibre", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$103.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 65, "Eficiencia": 62, "Modularidad": 0, "Ruido": 55, "Protecciones": 60, "Calidad": 62, "Precio/Valor": 85 }
              },
              balanced: {
                name: "Corsair CX1000M",
                brand: "Corsair",
                price: "$119.990",
                oneLiner: "1000W semi-modular Corsair para builds entusiasta.",
                why: "La Corsair CX1000M combina los 1000W necesarios para builds con RTX 4090 o RX 7900 XTX con semi-modularidad para mantener el interior ordenado. La confiabilidad Corsair y 5 años de garantía la hacen la elección lógica a este nivel.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "135mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Semi-modular en 1000W Bronze accesible", "Conector 16-pin nativo para RTX 4090", "Corsair confiable"],
                cons: ["Bronze en consumos entusiasta pierde más calor", "Sin Gold/Platinum para este nivel"],
                stores: [
                  { name: "MercadoLibre", price: "$119.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$124.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 58, "Protecciones": 68, "Calidad": 70, "Precio/Valor": 75 }
              },
              proRef: {
                name: "Thermaltake Smart BM2 1000W",
                brand: "Thermaltake",
                price: "$129.990",
                oneLiner: "1000W semi-modular Bronze — la referencia económica entusiasta.",
                why: "La Thermaltake Smart BM2 1000W es la PSU semi-modular de referencia para builds entusiasta que priorizan presupuesto. Con 1000W y cableado organizable, permite builds limpias con RTX 4090 sin el costo de certificaciones Gold o Platinum.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Bronze" },
                  { label: "Modularidad", value: "Semi-modular" },
                  { label: "Ventilador", value: "140mm" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["1000W semi-modular al precio más justo", "Cables organizables para build limpia", "5 años garantía Thermaltake"],
                cons: ["Bronze en 1000W no es lo ideal", "Sin modularidad completa"],
                stores: [
                  { name: "MercadoLibre", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$133.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 68, "Eficiencia": 62, "Modularidad": 55, "Ruido": 58, "Protecciones": 65, "Calidad": 68, "Precio/Valor": 72 }
              }
            }
          }
        },
        gold: {
          label: "80+ Gold",
          desc: "Eficiencia ~90% · El equilibrio ideal",
          byGPU: {
            entry: {
              watts: "550W",
              entry: {
                name: "Seasonic S12III 550W Gold",
                brand: "Seasonic",
                price: "$59.990",
                oneLiner: "Seasonic Gold en 550W — la más confiable del segmento.",
                why: "La Seasonic S12III 550W es la PSU Gold de entrada con mejor reputación. Seasonic fabrica las fuentes para Corsair, ASUS y otras marcas, y su propia línea ofrece calidad superior con 5 años de garantía y eficiencia Gold comprobada.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Gold (~90% eficiencia)" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm Fluid Dynamic" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Seasonic — el fabricante detrás de muchas marcas", "Eficiencia Gold real medida", "Ventilador Fluid Dynamic silencioso"],
                cons: ["No modular", "Precio más alto que Bronze equivalente"],
                stores: [
                  { name: "MercadoLibre", price: "$59.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$62.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$60.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 80, "Eficiencia": 78, "Modularidad": 0, "Ruido": 75, "Protecciones": 78, "Calidad": 82, "Precio/Valor": 82 }
              },
              balanced: {
                name: "Corsair RM550x",
                brand: "Corsair",
                price: "$89.990",
                oneLiner: "Totalmente modular en 550W Gold — el estándar de calidad.",
                why: "La Corsair RM550x es la referencia en PSUs Gold modulares: totalmente modular, ventilador silencioso que solo gira cuando es necesario y calidad de construcción excepcional. Para una build limpia con cable management perfecto a 550W.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop bajo carga" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Totalmente modular para máximo orden", "Fan-stop en baja carga = silencio total", "10 años garantía Corsair"],
                cons: ["Precio más alto que no-modular", "550W justo para algunas configs futuras"],
                stores: [
                  { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 85, "Eficiencia": 78, "Modularidad": 95, "Ruido": 88, "Protecciones": 85, "Calidad": 88, "Precio/Valor": 75 }
              },
              proRef: {
                name: "be quiet! Pure Power 12M 550W",
                brand: "be quiet!",
                price: "$79.990",
                oneLiner: "be quiet! Gold modular: la más silenciosa del segmento.",
                why: "La be quiet! Pure Power 12M 550W es la PSU Gold modular más silenciosa para builds de entrada. Su ventilador optimizado para ruido mínimo y la construcción premium de be quiet! hacen de esta fuente la ideal para sistemas de trabajo silenciosos.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "120mm Pure Wings silencioso" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["La más silenciosa en Gold 550W", "Totalmente modular", "be quiet! calidad alemana"],
                cons: ["5 años (menos que Corsair RM)", "Precio medio-alto"],
                stores: [
                  { name: "MercadoLibre", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$82.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 82, "Eficiencia": 78, "Modularidad": 95, "Ruido": 92, "Protecciones": 82, "Calidad": 85, "Precio/Valor": 78 }
              }
            },
            mid: {
              watts: "650W",
              entry: {
                name: "Seasonic S12III 650W Gold",
                brand: "Seasonic",
                price: "$69.990",
                oneLiner: "Seasonic 650W Gold no-modular — la más confiable a este precio.",
                why: "La Seasonic S12III 650W Gold es la fuente ideal para la mayoría de builds de gama media. Con 650W Gold y el respaldo de Seasonic, alimenta cualquier configuración con i5/i7 + RTX 4060 Ti de forma eficiente y confiable.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "No modular" },
                  { label: "Ventilador", value: "120mm Fluid Dynamic" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["Seasonic calidad premium no-modular", "Eficiencia Gold en gama media", "Ventilador FDB silencioso"],
                cons: ["No modular", "Sin Fan-stop"],
                stores: [
                  { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$70.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 80, "Eficiencia": 78, "Modularidad": 0, "Ruido": 75, "Protecciones": 78, "Calidad": 82, "Precio/Valor": 80 }
              },
              balanced: {
                name: "Corsair RM650x",
                brand: "Corsair",
                price: "$99.990",
                oneLiner: "La PSU Gold modular de referencia en 650W.",
                why: "La Corsair RM650x 650W es la PSU que recomendamos para la mayoría de builds gaming. Con certificación Gold, modularidad completa, fan-stop silencioso y 10 años de garantía, es el estándar de calidad para builds de gama media que duran años.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop bajo carga" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["10 años garantía — la mejor del mercado", "Fan-stop silencioso en baja carga", "Totalmente modular"],
                cons: ["Precio premium vs no-modular", "650W puede quedar justo con i9 + RTX 4070 Super"],
                stores: [
                  { name: "MercadoLibre", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$102.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$100.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 88, "Eficiencia": 78, "Modularidad": 95, "Ruido": 88, "Protecciones": 88, "Calidad": 90, "Precio/Valor": 78 }
              },
              proRef: {
                name: "be quiet! Pure Power 12M 650W",
                brand: "be quiet!",
                price: "$94.990",
                oneLiner: "650W Gold modular con el menor ruido del segmento.",
                why: "La be quiet! Pure Power 12M 650W es la elección para builds silenciosas en gama media. Su ventilador Pure Wings de bajo ruido garantiza operación casi inaudible en cargas típicas de gaming, con eficiencia Gold y modularidad completa.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "120mm Pure Wings ultra silencioso" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["El más silencioso en Gold 650W", "Modular completo", "be quiet! calidad garantizada"],
                cons: ["5 años garantía (vs 10 de Corsair RM)", "Precio similar a Corsair RM"],
                stores: [
                  { name: "MercadoLibre", price: "$94.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$97.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 82, "Eficiencia": 78, "Modularidad": 95, "Ruido": 95, "Protecciones": 82, "Calidad": 85, "Precio/Valor": 75 }
              }
            },
            high: {
              watts: "850W",
              entry: {
                name: "Seasonic Focus GX-850",
                brand: "Seasonic",
                price: "$139.990",
                oneLiner: "850W Gold Seasonic — el estándar para gama alta.",
                why: "La Seasonic Focus GX-850 es la PSU Gold de referencia para builds de gama alta. Con 850W Gold, modularidad completa, fan-stop y la calidad premium Seasonic, es la fuente que recomendamos para cualquier build con RTX 4070 Super o superior.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fluid Dynamic Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Seasonic calidad premium en 850W Gold", "Fan-stop silencioso total en baja carga", "10 años garantía"],
                cons: ["Precio más alto que Bronze equivalente", "Modular full puede ser complejo de cablear"],
                stores: [
                  { name: "MercadoLibre", price: "$139.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$144.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$141.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 90, "Eficiencia": 80, "Modularidad": 95, "Ruido": 88, "Protecciones": 88, "Calidad": 92, "Precio/Valor": 80 }
              },
              balanced: {
                name: "Corsair RM850x",
                brand: "Corsair",
                price: "$159.990",
                oneLiner: "La PSU Gold 850W definitiva: 10 años y silencio total.",
                why: "La Corsair RM850x 850W es la PSU de referencia para builds de gama alta. Sus 10 años de garantía, ventilador silencioso con fan-stop y modularidad completa la hacen la elección lógica para proteger una inversión de $500.000+ en componentes.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop bajo carga" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["10 años garantía — protección total", "Fan-stop silencio absoluto en idle", "Cables de alta calidad incluidos"],
                cons: ["Precio elevado vs Focus GX", "Sin certificación superior (Gold)"],
                stores: [
                  { name: "MercadoLibre", price: "$159.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$164.990", url: "#", best: false, tag: "" },
                  { name: "Solotodo", price: "$161.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 80, "Modularidad": 95, "Ruido": 90, "Protecciones": 90, "Calidad": 92, "Precio/Valor": 75 }
              },
              proRef: {
                name: "be quiet! Dark Power 12 850W",
                brand: "be quiet!",
                price: "$189.990",
                oneLiner: "850W Gold el más silencioso — el rey del silencio para gama alta.",
                why: "La be quiet! Dark Power 12 850W es la PSU más silenciosa del segmento Gold 850W, con un sistema de ventilación excepcional y construcción premium alemana. Para builds donde el ruido es inaceptable y la calidad no tiene compromiso.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm SilentWings 3" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["El más silencioso en Gold 850W", "Construcción premium alemana", "Cable management excelente"],
                cons: ["Solo 5 años (vs 10 Corsair RM)", "Precio más alto que Corsair RM"],
                stores: [
                  { name: "MercadoLibre", price: "$189.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$194.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 90, "Eficiencia": 80, "Modularidad": 95, "Ruido": 98, "Protecciones": 88, "Calidad": 94, "Precio/Valor": 68 }
              }
            },
            enthusiast: {
              watts: "1000W",
              entry: {
                name: "Seasonic Focus GX-1000",
                brand: "Seasonic",
                price: "$169.990",
                oneLiner: "1000W Gold Seasonic — la referencia para RTX 4090.",
                why: "La Seasonic Focus GX-1000 es la PSU Gold de referencia para builds entusiasta con RTX 4090. Con 1000W, modularidad completa, fan-stop y 10 años de garantía Seasonic, protege la inversión en los componentes más caros del mercado.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fluid Dynamic Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Seasonic calidad de referencia en 1000W", "10 años garantía absoluta", "Conector 16-pin nativo para RTX 4090"],
                cons: ["Precio elevado", "Gold (no Platinum) para este nivel"],
                stores: [
                  { name: "MercadoLibre", price: "$169.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$174.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 90, "Eficiencia": 80, "Modularidad": 95, "Ruido": 88, "Protecciones": 88, "Calidad": 92, "Precio/Valor": 78 }
              },
              balanced: {
                name: "Corsair RM1000x",
                brand: "Corsair",
                price: "$199.990",
                oneLiner: "1000W Gold modular Corsair — la elección segura para entusiasta.",
                why: "La Corsair RM1000x es la PSU más popular para builds entusiasta de nivel superior. Con 10 años de garantía, ventilador silencioso y modularidad completa, es la protección perfecta para una build de $1.500.000+ con RTX 4090.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["10 años garantía para builds premium", "Fan-stop silencioso en uso normal", "Corsair soporte y disponibilidad"],
                cons: ["Gold (Platinum sería mejor en 1000W)", "Precio elevado"],
                stores: [
                  { name: "MercadoLibre", price: "$199.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$204.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 80, "Modularidad": 95, "Ruido": 90, "Protecciones": 90, "Calidad": 92, "Precio/Valor": 72 }
              },
              proRef: {
                name: "be quiet! Dark Power 12 1000W",
                brand: "be quiet!",
                price: "$229.990",
                oneLiner: "1000W Gold más silencioso — para el entusiasta que exige silencio.",
                why: "La be quiet! Dark Power 12 1000W es la culminación de la ingeniería alemana en PSUs de 1000W Gold. Su sistema de ventilación SilentWings premium garantiza operación casi inaudible incluso bajo carga máxima de RTX 4090, siendo la referencia en silencio para builds entusiasta.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Gold" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm SilentWings 3 premium" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "5 años" }
                ],
                pros: ["El más silencioso en 1000W Gold", "Construcción premium be quiet!", "Sistema de ventilación excepcional"],
                cons: ["Solo 5 años (vs 10 de Corsair)", "Precio más alto que competencia"],
                stores: [
                  { name: "MercadoLibre", price: "$229.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$234.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 90, "Eficiencia": 80, "Modularidad": 95, "Ruido": 98, "Protecciones": 88, "Calidad": 95, "Precio/Valor": 62 }
              }
            }
          }
        },
        platinum: {
          label: "80+ Platinum",
          desc: "Eficiencia ~92% · Silencioso y duradero",
          byGPU: {
            entry: {
              watts: "550W",
              entry: {
                name: "Seasonic Focus PX-550",
                brand: "Seasonic",
                price: "$119.990",
                oneLiner: "550W Platinum Seasonic — la eficiencia máxima para builds eficientes.",
                why: "La Seasonic Focus PX-550 lleva la eficiencia Platinum (~92%) a 550W, reduciendo el desperdicio energético y el calor generado. Para builds con RTX 4060 donde la eficiencia energética es prioritaria, es la elección perfecta con 10 años de garantía.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Platinum (~92% eficiencia)" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fluid Dynamic Fan-stop" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Eficiencia Platinum real en carga típica", "Fan-stop silencioso absoluto", "10 años garantía Seasonic"],
                cons: ["Precio muy elevado para 550W", "Overkill para builds básicas"],
                stores: [
                  { name: "MercadoLibre", price: "$119.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$124.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 90, "Modularidad": 95, "Ruido": 92, "Protecciones": 92, "Calidad": 95, "Precio/Valor": 62 }
              },
              balanced: {
                name: "Corsair HX550",
                brand: "Corsair",
                price: "$139.990",
                oneLiner: "HX Platinum 550W — la serie premium Corsair en máxima eficiencia.",
                why: "La Corsair HX550 es la entrada a la línea premium HX de Corsair con certificación Platinum. Con 10 años de garantía, cables premium y el sello Platinum de eficiencia, es la PSU para builds donde la longevidad y calidad absoluta son lo primero.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Serie HX premium Corsair", "Cables de mayor calidad que RM", "Platinum = menos calor generado"],
                cons: ["Precio elevado para 550W", "550W limita upgrades futuros de GPU"],
                stores: [
                  { name: "MercadoLibre", price: "$139.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$144.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 95, "Eficiencia": 90, "Modularidad": 95, "Ruido": 92, "Protecciones": 95, "Calidad": 96, "Precio/Valor": 58 }
              },
              proRef: {
                name: "be quiet! Straight Power 12 550W",
                brand: "be quiet!",
                price: "$149.990",
                oneLiner: "550W Platinum más silencioso — para builds silenciosas premium.",
                why: "La be quiet! Straight Power 12 550W combina certificación Platinum con el expertise en silencio de be quiet!, resultando en la PSU 550W más silenciosa y eficiente disponible. Para setups creativos o HTPC donde el ruido es inadmisible.",
                specs: [
                  { label: "Potencia", value: "550W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Silent Wings 4" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["El más silencioso en Platinum 550W", "Silent Wings 4 — el ventilador más silencioso", "10 años garantía"],
                cons: ["Precio premium total", "Overkill para uso básico"],
                stores: [
                  { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 90, "Modularidad": 95, "Ruido": 98, "Protecciones": 92, "Calidad": 96, "Precio/Valor": 55 }
              }
            },
            mid: {
              watts: "650W",
              entry: {
                name: "Seasonic Focus PX-650",
                brand: "Seasonic",
                price: "$139.990",
                oneLiner: "650W Platinum Seasonic — eficiencia máxima para gama media.",
                why: "La Seasonic Focus PX-650 es la PSU Platinum de referencia para builds de gama media. Con 650W Gold a 92%+ de eficiencia, fan-stop y 10 años de garantía, es la mejor forma de proteger una build con RTX 4060 Ti a largo plazo.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm FDB Fan-stop" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Platinum en gama media — eficiencia real", "10 años garantía", "Fan-stop silencioso"],
                cons: ["Precio elevado vs Gold", "650W puede quedar justo en futuro"],
                stores: [
                  { name: "MercadoLibre", price: "$139.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$144.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 90, "Modularidad": 95, "Ruido": 92, "Protecciones": 92, "Calidad": 95, "Precio/Valor": 65 }
              },
              balanced: {
                name: "Corsair HX650",
                brand: "Corsair",
                price: "$169.990",
                oneLiner: "HX Platinum 650W — la serie premium Corsair para gama media.",
                why: "La Corsair HX650 combina la certificación Platinum con la serie HX premium de Corsair, ofreciendo calidad de construcción superior con 10 años de garantía. Para builds de gama media donde cada componente debe ser de primera calidad.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Serie HX de máxima calidad Corsair", "Platinum = máxima eficiencia", "10 años garantía absoluta"],
                cons: ["Precio premium elevado", "Overkill para builds básicas"],
                stores: [
                  { name: "MercadoLibre", price: "$169.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$174.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 95, "Eficiencia": 90, "Modularidad": 95, "Ruido": 92, "Protecciones": 95, "Calidad": 96, "Precio/Valor": 60 }
              },
              proRef: {
                name: "be quiet! Straight Power 12 650W",
                brand: "be quiet!",
                price: "$179.990",
                oneLiner: "650W Platinum silencioso — para el build perfecto sin ruido.",
                why: "La be quiet! Straight Power 12 650W es la PSU Platinum 650W más silenciosa del mercado. Para builds de gama media donde se quiere Platinum + silencio absoluto, no hay otra opción que iguale la combinación de eficiencia y silencio de be quiet!.",
                specs: [
                  { label: "Potencia", value: "650W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Silent Wings 4" },
                  { label: "Conectores PCIe", value: "2x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Platinum + silencio máximo — la mejor combinación", "Silent Wings 4 la más silenciosa", "10 años garantía"],
                cons: ["Precio muy elevado", "Overkill salvo en builds silenciosas"],
                stores: [
                  { name: "MercadoLibre", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$184.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 92, "Eficiencia": 90, "Modularidad": 95, "Ruido": 98, "Protecciones": 92, "Calidad": 96, "Precio/Valor": 55 }
              }
            },
            high: {
              watts: "850W",
              entry: {
                name: "Seasonic Prime TX-850",
                brand: "Seasonic",
                price: "$229.990",
                oneLiner: "850W Titanium Seasonic — la eficiencia máxima absoluta.",
                why: "La Seasonic Prime TX-850 lleva la certificación Titanium (94%+ eficiencia) a 850W, siendo la fuente de mayor eficiencia disponible para builds de gama alta. Con 12 años de garantía y la calidad Seasonic Prime, es la referencia absoluta en PSUs de alta gama.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Titanium (~94% eficiencia)" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fluid Dynamic Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "12 años" }
                ],
                pros: ["Titanium = máxima eficiencia mundial (94%)", "12 años garantía — la más larga", "Prime = mejor construcción Seasonic"],
                cons: ["Precio muy elevado", "Titanium marginal sobre Platinum en ahorro real"],
                stores: [
                  { name: "MercadoLibre", price: "$229.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$234.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 96, "Eficiencia": 96, "Modularidad": 95, "Ruido": 94, "Protecciones": 96, "Calidad": 98, "Precio/Valor": 55 }
              },
              balanced: {
                name: "Corsair HX850",
                brand: "Corsair",
                price: "$259.990",
                oneLiner: "HX Platinum 850W — la PSU de referencia para gama alta.",
                why: "La Corsair HX850 es la PSU Platinum de referencia para builds de gama alta. Con la serie HX de máxima calidad, 10 años de garantía, ventilador silencioso y Platinum para builds que trabajan duro, protege completamente una inversión en RTX 4080 Super.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Serie HX premium — la mejor de Corsair", "Platinum 850W ideal para gama alta", "10 años garantía"],
                cons: ["Precio premium significativo", "Sin Titanium"],
                stores: [
                  { name: "MercadoLibre", price: "$259.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$267.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 95, "Eficiencia": 90, "Modularidad": 95, "Ruido": 92, "Protecciones": 95, "Calidad": 96, "Precio/Valor": 60 }
              },
              proRef: {
                name: "be quiet! Dark Power Pro 12 850W",
                brand: "be quiet!",
                price: "$299.990",
                oneLiner: "La PSU Platinum gama alta más silenciosa del planeta.",
                why: "La be quiet! Dark Power Pro 12 850W es la cima del silencio en PSUs Platinum de alta gama. Con su ventilador SilentWings y construcción de primera clase alemana, establece el estándar de lo que debe ser una fuente para builds premium donde el ruido es inadmisible.",
                specs: [
                  { label: "Potencia", value: "850W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm SilentWings 4 Pro" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["La más silenciosa en Platinum 850W", "SilentWings 4 Pro ultra silencioso", "Construcción premium alemana"],
                cons: ["Precio muy elevado", "Menor garantía que Seasonic Titanium (10 vs 12)"],
                stores: [
                  { name: "MercadoLibre", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$307.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 94, "Eficiencia": 90, "Modularidad": 95, "Ruido": 99, "Protecciones": 94, "Calidad": 97, "Precio/Valor": 52 }
              }
            },
            enthusiast: {
              watts: "1000W",
              entry: {
                name: "Seasonic Prime TX-1000",
                brand: "Seasonic",
                price: "$279.990",
                oneLiner: "1000W Titanium — la eficiencia absoluta para RTX 4090.",
                why: "La Seasonic Prime TX-1000 es la PSU de referencia para builds entusiasta, con certificación Titanium (94%+ eficiencia) y 12 años de garantía. Para quienes invierten en RTX 4090 y no pueden permitirse una fuente de menor calidad.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Titanium" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm FDB Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "12 años" }
                ],
                pros: ["Titanium 1000W — eficiencia máxima absoluta", "12 años garantía — la más larga del mercado", "Conector 16-pin nativo"],
                cons: ["Precio muy elevado", "Titanium marginal sobre Platinum en costo-beneficio"],
                stores: [
                  { name: "MercadoLibre", price: "$279.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$287.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 96, "Eficiencia": 96, "Modularidad": 95, "Ruido": 94, "Protecciones": 96, "Calidad": 98, "Precio/Valor": 50 }
              },
              balanced: {
                name: "Corsair AX1000",
                brand: "Corsair",
                price: "$329.990",
                oneLiner: "AX Titanium 1000W — la línea máxima de Corsair.",
                why: "La Corsair AX1000 es la cima de la línea Corsair con certificación Titanium. Como la fuente de referencia que usa Corsair para sus laboratorios internos, ofrece la mayor calidad posible en una PSU de 1000W para la RTX 4090.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Titanium" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "140mm Fan-stop" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["La PSU de referencia Corsair internamente", "Titanium para máxima eficiencia en RTX 4090", "10 años garantía"],
                cons: ["Precio muy elevado", "10 años (vs 12 de Seasonic Prime)"],
                stores: [
                  { name: "MercadoLibre", price: "$329.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$339.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 96, "Eficiencia": 95, "Modularidad": 95, "Ruido": 92, "Protecciones": 96, "Calidad": 98, "Precio/Valor": 45 }
              },
              proRef: {
                name: "be quiet! Dark Power Pro 12 1000W",
                brand: "be quiet!",
                price: "$369.990",
                oneLiner: "1000W Platinum más silencioso del mundo — el épico final.",
                why: "La be quiet! Dark Power Pro 12 1000W es la PSU entusiasta que combina potencia masiva con el silencio absoluto característico de be quiet!. Para builds donde tanto el rendimiento como el silencio total son requisitos irremplazables.",
                specs: [
                  { label: "Potencia", value: "1000W" },
                  { label: "Certificación", value: "80+ Platinum" },
                  { label: "Modularidad", value: "Totalmente modular" },
                  { label: "Ventilador", value: "135mm SilentWings 4 Pro" },
                  { label: "Conectores PCIe", value: "4x 6+2 pin + 1x 16-pin" },
                  { label: "Garantía", value: "10 años" }
                ],
                pros: ["Silencio absoluto en 1000W — sin rival", "SilentWings 4 Pro el más silencioso", "Construcción alemana premium extrema"],
                cons: ["Precio absolutamente premium", "Platinum (no Titanium) a este precio"],
                stores: [
                  { name: "MercadoLibre", price: "$369.990", url: "#", best: true, tag: "Mejor precio" },
                  { name: "PCFactory", price: "$379.990", url: "#", best: false, tag: "" }
                ],
                scores: { "Estabilidad": 94, "Eficiencia": 90, "Modularidad": 95, "Ruido": 99, "Protecciones": 94, "Calidad": 97, "Precio/Valor": 40 }
              }
            }
          }
        }
      }
    },
    case: {
      icon: "📦",
      label: "Gabinete",
      question: "¿Qué tamaño de gabinete?",
      axes: ["Airflow", "Calidad Build", "Cable Mgmt", "Espacio", "Estética", "Compatibilidad", "Precio/Valor"],
      options: {
        full: {
          label: "Full Tower",
          desc: "Máximo espacio · Builds extremas",
          moboCompat: ["atx", "matx", "itx"],
          maxGPU: 420,
          coolerTypes: ["air", "aio120", "aio240", "aio360"],
          entry: {
            name: "Fractal Design North XL",
            brand: "Fractal Design",
            price: "$229.990",
            oneLiner: "Full tower con diseño escandinavo y airflow excepcional.",
            why: "El Fractal Design North XL combina un diseño premium con madera de fachada natural, airflow excelente y espacio para las builds más extremas. Su calidad de construcción escandinava y silencio de operación lo hacen el full tower de referencia para quien quiere estética y rendimiento.",
            specs: [
              { label: "Formato", value: "Full Tower" },
              { label: "Placas", value: "E-ATX / ATX / mATX / ITX" },
              { label: "GPU máx.", value: "420mm" },
              { label: "Cooler máx.", value: "185mm altura" },
              { label: "Radiador", value: "Hasta 360mm frontal + superior" },
              { label: "Bahías 3.5\"", value: "4x HDD" }
            ],
            pros: ["Diseño premium con paneles de madera", "Airflow excelente con filtros magnéticos", "Espacio masivo para cualquier configuración"],
            cons: ["Precio elevado para un full tower", "Tamaño grande requiere mucho escritorio"],
            stores: [
              { name: "MercadoLibre", price: "$229.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$234.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$231.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 88, "Calidad Build": 90, "Cable Mgmt": 85, "Espacio": 98, "Estética": 95, "Compatibilidad": 98, "Precio/Valor": 72 }
          },
          balanced: {
            name: "Corsair 7000D Airflow",
            brand: "Corsair",
            price: "$299.990",
            oneLiner: "El full tower rey del airflow: diseñado desde cero para flujo de aire.",
            why: "El Corsair 7000D Airflow es el gabinete full tower diseñado desde cero para maximizar el flujo de aire, con panel frontal completamente perforado y espacio para múltiples radiadores y ventiladores. Para overclockers y entusiastas que necesitan refrigerar componentes extremos.",
            specs: [
              { label: "Formato", value: "Full Tower" },
              { label: "Placas", value: "E-ATX / ATX / mATX / ITX" },
              { label: "GPU máx.", value: "420mm" },
              { label: "Cooler máx.", value: "190mm altura" },
              { label: "Radiador", value: "Hasta 360mm en 3 posiciones" },
              { label: "Bahías 3.5\"", value: "6x HDD" }
            ],
            pros: ["El airflow más alto del segmento full tower", "Panel frontal perforado de alta densidad", "Espacio para builds multi-radiador extremas"],
            cons: ["Sin panel lateral de vidrio (cristal templado lateral disponible)", "Precio muy elevado"],
            stores: [
              { name: "MercadoLibre", price: "$299.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$309.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$302.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 98, "Calidad Build": 90, "Cable Mgmt": 88, "Espacio": 99, "Estética": 85, "Compatibilidad": 99, "Precio/Valor": 65 }
          },
          proRef: {
            name: "Lian Li O11 Dynamic EVO XL",
            brand: "Lian Li",
            price: "$349.990",
            oneLiner: "El full tower de referencia: vidrio por todos lados, máximo espacio.",
            why: "El Lian Li O11 Dynamic EVO XL es el gabinete full tower más popular entre enthusiasts por su diseño dual-chamber único, paneles de vidrio templado en tres lados y soporte para kits de water cooling custom. Es la referencia visual y funcional del segmento.",
            specs: [
              { label: "Formato", value: "Full Tower" },
              { label: "Placas", value: "E-ATX / ATX / mATX / ITX" },
              { label: "GPU máx.", value: "420mm" },
              { label: "Cooler máx.", value: "167mm altura" },
              { label: "Radiador", value: "Hasta 360mm en múltiples posiciones" },
              { label: "Vidrio", value: "Triple vidrio templado" }
            ],
            pros: ["Triple vidrio templado — máxima visibilidad", "Dual-chamber para cable management perfecto", "Referencia en custom water cooling"],
            cons: ["Altura de cooler limitada (167mm)", "Precio elevado", "Instalación más compleja"],
            stores: [
              { name: "MercadoLibre", price: "$349.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$359.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$352.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 85, "Calidad Build": 95, "Cable Mgmt": 95, "Espacio": 98, "Estética": 99, "Compatibilidad": 95, "Precio/Valor": 60 }
          }
        },
        mid: {
          label: "Mid Tower",
          desc: "El más versátil · Para la mayoría",
          moboCompat: ["atx", "matx", "itx"],
          maxGPU: 360,
          coolerTypes: ["air", "aio120", "aio240", "aio360"],
          entry: {
            name: "NZXT H510",
            brand: "NZXT",
            price: "$89.990",
            oneLiner: "El mid tower más limpio y minimalista del mercado.",
            why: "El NZXT H510 es el gabinete de referencia para quienes priorizan el diseño minimalista y la facilidad de armado. Con cable management integrado y panel lateral de vidrio templado, es el punto de entrada perfecto para builds con estética cuidada.",
            specs: [
              { label: "Formato", value: "Mid Tower" },
              { label: "Placas", value: "ATX / mATX / ITX" },
              { label: "GPU máx.", value: "381mm" },
              { label: "Cooler máx.", value: "165mm altura" },
              { label: "Radiador", value: "Hasta 240mm frontal/superior" },
              { label: "Panel", value: "Vidrio templado lateral" }
            ],
            pros: ["Diseño minimalista premium a precio accesible", "Cable management excelente para el precio", "Fácil instalación para principiantes"],
            cons: ["Airflow limitado por panel frontal sólido", "Opciones de radiador restringidas"],
            stores: [
              { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 62, "Calidad Build": 78, "Cable Mgmt": 82, "Espacio": 75, "Estética": 90, "Compatibilidad": 88, "Precio/Valor": 82 }
          },
          balanced: {
            name: "Fractal Design Pop Air",
            brand: "Fractal Design",
            price: "$109.990",
            oneLiner: "Airflow excelente, diseño moderno y precio justo — el mid tower perfecto.",
            why: "El Fractal Design Pop Air combina airflow excepcional con un diseño moderno y fresco a un precio muy competitivo. Con panel frontal perforado, dos ventiladores incluidos y un interior espacioso, es el mid tower que recomendamos para la mayoría de builds.",
            specs: [
              { label: "Formato", value: "Mid Tower" },
              { label: "Placas", value: "ATX / mATX / ITX" },
              { label: "GPU máx.", value: "341mm" },
              { label: "Cooler máx.", value: "168mm altura" },
              { label: "Radiador", value: "Hasta 360mm frontal" },
              { label: "Ventiladores", value: "2x 140mm incluidos" }
            ],
            pros: ["Airflow excelente con panel frontal perforado", "2 ventiladores incluidos de calidad", "Espacio para radiador 360mm frontal"],
            cons: ["GPU limitada a 341mm (algunas GPUs grandes no caben)", "Diseño no tan minimalista como NZXT"],
            stores: [
              { name: "MercadoLibre", price: "$109.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$112.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$110.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 88, "Calidad Build": 85, "Cable Mgmt": 80, "Espacio": 82, "Estética": 82, "Compatibilidad": 90, "Precio/Valor": 85 }
          },
          proRef: {
            name: "Lian Li O11 Dynamic EVO",
            brand: "Lian Li",
            price: "$179.990",
            oneLiner: "La referencia mid tower: dual-chamber, vidrio triple, para enthusiasts.",
            why: "El Lian Li O11 Dynamic EVO es el gabinete mid tower favorito de la comunidad entusiasta. Su diseño dual-chamber separa los componentes del cableado para una instalación impecable, con triple vidrio templado y soporte masivo para water cooling custom.",
            specs: [
              { label: "Formato", value: "Mid Tower" },
              { label: "Placas", value: "ATX / mATX / ITX" },
              { label: "GPU máx.", value: "420mm" },
              { label: "Cooler máx.", value: "155mm altura" },
              { label: "Radiador", value: "Hasta 360mm en múltiples posiciones" },
              { label: "Vidrio", value: "Triple vidrio templado" }
            ],
            pros: ["Dual-chamber para instalación perfecta", "Triple vidrio templado — espectacular", "GPU hasta 420mm — admite RTX 4090"],
            cons: ["Cooler limitado a 155mm de altura", "Precio elevado para mid tower"],
            stores: [
              { name: "MercadoLibre", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$184.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$181.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 82, "Calidad Build": 92, "Cable Mgmt": 95, "Espacio": 88, "Estética": 98, "Compatibilidad": 90, "Precio/Valor": 70 }
          }
        },
        mini: {
          label: "Mini Tower",
          desc: "Compacto sin sacrificar compatibilidad",
          moboCompat: ["matx", "itx"],
          maxGPU: 290,
          coolerTypes: ["air", "aio120", "aio240"],
          entry: {
            name: "Cooler Master Q300L",
            brand: "Cooler Master",
            price: "$59.990",
            oneLiner: "El mini tower más económico del mercado con buena compatibilidad.",
            why: "El Cooler Master Q300L es la forma más económica de construir en formato compacto mATX. Con su diseño modular de acero perforado y precio imbatible, es el gabinete de entrada perfecto para builds económicas que quieren ahorrar espacio.",
            specs: [
              { label: "Formato", value: "Mini Tower (mATX)" },
              { label: "Placas", value: "mATX / ITX" },
              { label: "GPU máx.", value: "360mm" },
              { label: "Cooler máx.", value: "157mm altura" },
              { label: "Radiador", value: "Hasta 240mm" },
              { label: "Panel", value: "Acrílico lateral" }
            ],
            pros: ["Precio imbatible para gabinete compacto", "Diseño perforado para airflow decente", "GPU larga de hasta 360mm"],
            cons: ["Panel lateral de acrílico (no vidrio templado)", "Calidad de construcción básica", "Sin USB-C frontal"],
            stores: [
              { name: "MercadoLibre", price: "$59.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$62.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$60.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 65, "Calidad Build": 55, "Cable Mgmt": 58, "Espacio": 62, "Estética": 60, "Compatibilidad": 75, "Precio/Valor": 92 }
          },
          balanced: {
            name: "Fractal Design Define Nano S",
            brand: "Fractal Design",
            price: "$99.990",
            oneLiner: "Mini tower silencioso y premium con diseño escandinavo.",
            why: "El Fractal Design Define Nano S es el mini tower de referencia para quienes priorizan el silencio en formato compacto. Con paneles insonorizados, airflow controlado y la calidad característica de Fractal Design, es la opción para builds silenciosas en mATX.",
            specs: [
              { label: "Formato", value: "Mini Tower (mATX)" },
              { label: "Placas", value: "mATX / ITX" },
              { label: "GPU máx.", value: "315mm" },
              { label: "Cooler máx.", value: "160mm altura" },
              { label: "Radiador", value: "Hasta 240mm frontal" },
              { label: "Insonorización", value: "Paneles insonorizados incluidos" }
            ],
            pros: ["Paneles insonorizados para silencio", "Calidad Fractal Design premium", "Diseño escandinavo limpio"],
            cons: ["GPU limitada a 315mm (sin RTX 4080 referencia)", "Airflow sacrificado por insonorización"],
            stores: [
              { name: "MercadoLibre", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$102.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$100.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 65, "Calidad Build": 88, "Cable Mgmt": 78, "Espacio": 68, "Estética": 88, "Compatibilidad": 72, "Precio/Valor": 78 }
          },
          proRef: {
            name: "Lian Li PC-Q39",
            brand: "Lian Li",
            price: "$149.990",
            oneLiner: "Mini tower de aluminio premium: el mejor del segmento.",
            why: "El Lian Li PC-Q39 es la referencia en mini towers, con construcción de aluminio premium, excelente diseño térmico y soporte para placas mATX con GPUs y AIOs. Para quienes quieren la máxima calidad en formato compacto sin ir a ITX.",
            specs: [
              { label: "Formato", value: "Mini Tower (mATX)" },
              { label: "Placas", value: "mATX / ITX" },
              { label: "GPU máx.", value: "290mm" },
              { label: "Cooler máx.", value: "155mm altura" },
              { label: "Radiador", value: "Hasta 240mm" },
              { label: "Material", value: "Aluminio premium" }
            ],
            pros: ["Construcción de aluminio de máxima calidad", "Diseño premium sin igual en mATX compacto", "Lian Li acabados de lujo"],
            cons: ["GPU limitada a 290mm", "Precio elevado para mini tower"],
            stores: [
              { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 72, "Calidad Build": 96, "Cable Mgmt": 82, "Espacio": 65, "Estética": 95, "Compatibilidad": 70, "Precio/Valor": 65 }
          }
        },
        sff: {
          label: "SFF",
          desc: "Ultra compacto · Para ITX",
          moboCompat: ["itx"],
          maxGPU: 200,
          coolerTypes: ["air", "aio120"],
          entry: {
            name: "Cooler Master NR200",
            brand: "Cooler Master",
            price: "$89.990",
            oneLiner: "El SFF más popular del mercado: ITX sin compromisos a buen precio.",
            why: "El Cooler Master NR200 revolucionó el mercado SFF con su excelente compatibilidad, airflow sorprendente para su tamaño y precio muy accesible. Compatible con GPUs doble slot largas y AIOs, es el SFF de referencia para builds ITX accesibles.",
            specs: [
              { label: "Formato", value: "SFF (ITX)" },
              { label: "Placas", value: "Mini-ITX" },
              { label: "GPU máx.", value: "330mm (con bracket), ~200mm natural" },
              { label: "Cooler máx.", value: "155mm altura (con vidrio)" },
              { label: "PSU", value: "SFX / SFX-L" },
              { label: "Volumen", value: "~18L" }
            ],
            pros: ["El SFF más popular — comunidad enorme", "Airflow excelente para el tamaño", "Soporte para GPU larga con bracket"],
            cons: ["PSU SFX requerida (más cara)", "Instalación más compleja que mid tower"],
            stores: [
              { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 78, "Calidad Build": 75, "Cable Mgmt": 65, "Espacio": 45, "Estética": 82, "Compatibilidad": 78, "Precio/Valor": 85 }
          },
          balanced: {
            name: "Lian Li A4-H2O",
            brand: "Lian Li",
            price: "$149.990",
            oneLiner: "SFF de aluminio con soporte AIO: el build ITX serio.",
            why: "El Lian Li A4-H2O es el SFF favorito de los overclockers ITX gracias a su soporte nativo para AIOs de 240mm sin sacrificar espacio para GPU. Con construcción de aluminio y un volumen mínimo (~11L), es la referencia para builds ITX de alto rendimiento.",
            specs: [
              { label: "Formato", value: "SFF Ultra (ITX)" },
              { label: "Placas", value: "Mini-ITX" },
              { label: "GPU máx.", value: "322mm (dos slots)" },
              { label: "Cooler", value: "AIO 240mm nativo" },
              { label: "PSU", value: "SFX-L" },
              { label: "Volumen", value: "~11L" }
            ],
            pros: ["AIO 240mm en volumen de 11L — increíble", "Aluminio premium Lian Li", "Layout optimizado para builds ITX serias"],
            cons: ["Instalación muy compleja", "PSU SFX-L específica", "Sin soporte para cooler de aire alto"],
            stores: [
              { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 82, "Calidad Build": 92, "Cable Mgmt": 62, "Espacio": 38, "Estética": 90, "Compatibilidad": 72, "Precio/Valor": 72 }
          },
          proRef: {
            name: "Dan A4-SFX v4.1",
            brand: "Dan Cases",
            price: "$219.990",
            oneLiner: "El SFF más extremo: 7.2L con GPU full-size — la referencia absoluta.",
            why: "El Dan A4-SFX v4.1 es el gabinete SFF de referencia absoluta para la comunidad, con solo 7.2 litros de volumen pero capaz de alojar GPUs full-size y PSU SFX. Su construcción de aluminio y diseño ingenioso lo convierten en el Rolls-Royce de los SFF.",
            specs: [
              { label: "Formato", value: "SFF Extreme (ITX)" },
              { label: "Placas", value: "Mini-ITX" },
              { label: "GPU máx.", value: "295mm x 111mm (dual-slot)" },
              { label: "Cooler", value: "AIO 120mm o aire bajo" },
              { label: "PSU", value: "SFX" },
              { label: "Volumen", value: "~7.2L" }
            ],
            pros: ["7.2L — el más compacto con GPU full-size", "Construcción aluminio de colección", "Referencia absoluta de la comunidad SFF"],
            cons: ["Precio muy alto", "Solo AIO 120mm o aire bajo", "Instalación extremadamente compleja"],
            stores: [
              { name: "MercadoLibre", price: "$219.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$224.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Airflow": 68, "Calidad Build": 98, "Cable Mgmt": 55, "Espacio": 28, "Estética": 96, "Compatibilidad": 60, "Precio/Valor": 55 }
          }
        }
      }
    },
    cooler: {
      icon: "❄️",
      label: "Refrigeración",
      question: "¿Qué tipo de refrigeración?",
      axes: ["Rendimiento", "Ruido", "Instalación", "Calidad Build", "Compatibilidad", "Estética", "Precio/Valor"],
      sockets: ["LGA1700", "LGA1851", "AM5", "AM4"],
      options: {
        air: {
          label: "Aire (Tower)",
          desc: "Simple y duradero · Cero mantenimiento",
          maxTDP: 250,
          entry: {
            name: "DeepCool AK400",
            brand: "DeepCool",
            price: "$39.990",
            oneLiner: "El cooler de aire más popular por algo: silencioso, eficiente y barato.",
            why: "El DeepCool AK400 es el cooler de referencia para builds de entrada y gama media. Con 4 heat pipes de contacto directo, ventilador de bajo ruido y un precio increíble, supera a coolers stock y muchos coolers de precio similar en rendimiento y silencio.",
            specs: [
              { label: "Tipo", value: "Tower simple" },
              { label: "Ventiladores", value: "1x 120mm PWM" },
              { label: "Heat pipes", value: "4x 6mm contacto directo" },
              { label: "Altura", value: "155mm" },
              { label: "TDP rated", value: "220W" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Precio imbatible para su rendimiento", "Muy silencioso a cargas típicas", "Fácil instalación con buen bracket"],
            cons: ["Solo 1 ventilador (vs 2 en dual-tower)", "No suficiente para i9/Ryzen 9 en boost máximo"],
            stores: [
              { name: "MercadoLibre", price: "$39.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$41.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$40.490", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 70, "Ruido": 78, "Instalación": 82, "Calidad Build": 72, "Compatibilidad": 95, "Estética": 72, "Precio/Valor": 95 }
          },
          balanced: {
            name: "DeepCool AK620",
            brand: "DeepCool",
            price: "$69.990",
            oneLiner: "Dual-tower de alto rendimiento al mejor precio del segmento.",
            why: "El DeepCool AK620 es el mejor dual-tower a precio razonable, con 6 heat pipes y dos ventiladores para refrigerar incluso los CPUs más exigentes. Supera al Noctua NH-U12S y se acerca al NH-D15 a un tercio del precio, siendo la elección obvia para i5/i7/Ryzen 7.",
            specs: [
              { label: "Tipo", value: "Dual tower" },
              { label: "Ventiladores", value: "2x 120mm PWM" },
              { label: "Heat pipes", value: "6x 6mm contacto directo" },
              { label: "Altura", value: "160mm" },
              { label: "TDP rated", value: "260W" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Rendimiento dual-tower a precio único", "6 heat pipes para CPUs exigentes", "2 ventiladores incluidos"],
            cons: ["160mm puede chocar con RAM de perfil alto", "Estética básica vs Noctua"],
            stores: [
              { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$70.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 85, "Ruido": 80, "Instalación": 75, "Calidad Build": 80, "Compatibilidad": 90, "Estética": 68, "Precio/Valor": 90 }
          },
          proRef: {
            name: "Noctua NH-D15 chromax.black",
            brand: "Noctua",
            price: "$129.990",
            oneLiner: "El mejor cooler de aire del mundo, ahora en negro elegante.",
            why: "El Noctua NH-D15 chromax.black es, sin discusión, el mejor cooler de aire disponible. Con dos ventiladores NF-A15 de clase mundial y su estructura masiva de 6 heat pipes, iguala o supera a AIOs de 240mm en rendimiento y silencio, con cero mantenimiento.",
            specs: [
              { label: "Tipo", value: "Dual tower" },
              { label: "Ventiladores", value: "2x 150mm NF-A15 PWM" },
              { label: "Heat pipes", value: "6x 6mm premium" },
              { label: "Altura", value: "165mm" },
              { label: "TDP rated", value: "250W+" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4 (+ bracket)" }
            ],
            pros: ["El mejor rendimiento en cooler de aire", "Silencio excepcional con NF-A15", "Cero mantenimiento — dura para siempre"],
            cons: ["165mm requiere revisar compatibilidad RAM/gabinete", "Precio premium", "Tamaño muy grande"],
            stores: [
              { name: "MercadoLibre", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$134.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$131.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 96, "Ruido": 95, "Instalación": 65, "Calidad Build": 98, "Compatibilidad": 88, "Estética": 85, "Precio/Valor": 72 }
          }
        },
        aio120: {
          label: "AIO 120mm",
          desc: "Refrigeración líquida básica · Cabe en todo",
          maxTDP: 180,
          entry: {
            name: "DeepCool GAMMAXX L120",
            brand: "DeepCool",
            price: "$54.990",
            oneLiner: "AIO 120mm económico: refrigeración líquida accesible.",
            why: "El DeepCool GAMMAXX L120 es el AIO 120mm más accesible del mercado, ofreciendo la estética de refrigeración líquida con bomba silenciosa a un precio menor que muchos coolers de aire de calidad. Ideal para CPUs de gama media en builds donde la estética importa.",
            specs: [
              { label: "Radiador", value: "120mm" },
              { label: "Ventiladores", value: "1x 120mm PWM" },
              { label: "Bomba", value: "Silenciosa integrada" },
              { label: "RGB", value: "Cabezal RGB básico" },
              { label: "Garantía", value: "3 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Precio imbatible en AIO", "Estética de water cooling accesible", "RGB integrado en cabezal"],
            cons: ["120mm limita el TDP que puede manejar", "Rendimiento inferior a dual-tower de precio similar", "Garantía solo 3 años"],
            stores: [
              { name: "MercadoLibre", price: "$54.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$57.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$55.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 58, "Ruido": 72, "Instalación": 72, "Calidad Build": 60, "Compatibilidad": 95, "Estética": 75, "Precio/Valor": 82 }
          },
          balanced: {
            name: "Corsair H60x Elite",
            brand: "Corsair",
            price: "$89.990",
            oneLiner: "AIO 120mm Corsair con bomba silenciosa y cabezal LCD.",
            why: "El Corsair H60x Elite lleva la calidad Corsair a los AIOs 120mm, con una bomba más silenciosa y duradera que la competencia. Su pantalla LCD en el cabezal y ventilador de mayor calidad lo hacen el AIO 120mm de referencia para builds compactas premium.",
            specs: [
              { label: "Radiador", value: "120mm" },
              { label: "Ventiladores", value: "1x 120mm PWM Corsair" },
              { label: "Bomba", value: "Corsair Elite silenciosa" },
              { label: "Display", value: "LCD en cabezal" },
              { label: "Garantía", value: "5 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Calidad bomba superior para mayor durabilidad", "Display LCD en cabezal", "5 años garantía Corsair"],
            cons: ["120mm no es suficiente para CPUs muy exigentes", "Precio elevado para 120mm"],
            stores: [
              { name: "MercadoLibre", price: "$89.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$92.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$90.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 65, "Ruido": 78, "Instalación": 75, "Calidad Build": 80, "Compatibilidad": 95, "Estética": 85, "Precio/Valor": 72 }
          },
          proRef: {
            name: "NZXT Kraken 120",
            brand: "NZXT",
            price: "$129.990",
            oneLiner: "El AIO 120mm más premium: diseño NZXT con pantalla infinita.",
            why: "El NZXT Kraken 120 es el AIO 120mm de referencia visual, con su cabezal de pantalla circular infinita que muestra temperatura, rendimiento o imágenes personalizadas. Para builds donde la estética es tan importante como el rendimiento en gabinetes compactos.",
            specs: [
              { label: "Radiador", value: "120mm" },
              { label: "Ventiladores", value: "1x 120mm NZXT F120" },
              { label: "Display", value: "Pantalla circular LCD infinita" },
              { label: "Bomba", value: "Silenciosa de alta calidad" },
              { label: "Garantía", value: "6 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Pantalla circular LCD personalizable única", "6 años garantía — la más larga en AIOs", "Diseño premium NZXT icónico"],
            cons: ["120mm limita el TDP máximo", "Precio muy elevado para 120mm", "Software NZXT CAM requerido para pantalla"],
            stores: [
              { name: "MercadoLibre", price: "$129.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$134.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 68, "Ruido": 80, "Instalación": 72, "Calidad Build": 88, "Compatibilidad": 95, "Estética": 96, "Precio/Valor": 55 }
          }
        },
        aio240: {
          label: "AIO 240mm",
          desc: "El equilibrio ideal · Buen desempeño",
          maxTDP: 280,
          entry: {
            name: "DeepCool CASTLE 240 RGB",
            brand: "DeepCool",
            price: "$79.990",
            oneLiner: "AIO 240mm económico con RGB y buen rendimiento para i7/Ryzen 7.",
            why: "El DeepCool CASTLE 240 RGB es la forma más económica de tener un AIO 240mm de calidad. Con bomba silenciosa, dos ventiladores RGB y rendimiento suficiente para i7/Ryzen 7, ofrece el equilibrio perfecto de precio y prestaciones para la mayoría de builds gaming.",
            specs: [
              { label: "Radiador", value: "240mm" },
              { label: "Ventiladores", value: "2x 120mm RGB PWM" },
              { label: "Bomba", value: "Silenciosa integrada" },
              { label: "RGB", value: "Cabezal + ventiladores RGB" },
              { label: "Garantía", value: "3 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["AIO 240mm al precio más accesible", "RGB completo en ventiladores y cabezal", "Suficiente para i7/Ryzen 7"],
            cons: ["Garantía 3 años (corta para bomba)", "Calidad de bomba básica"],
            stores: [
              { name: "MercadoLibre", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$82.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$80.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 75, "Ruido": 72, "Instalación": 75, "Calidad Build": 65, "Compatibilidad": 90, "Estética": 82, "Precio/Valor": 88 }
          },
          balanced: {
            name: "Corsair iCUE H100i RGB Elite",
            brand: "Corsair",
            price: "$149.990",
            oneLiner: "El AIO 240mm de referencia: calidad, silencio y control total.",
            why: "El Corsair iCUE H100i RGB Elite es el AIO 240mm más recomendado por la comunidad. Con bomba de alta durabilidad, dos ventiladores LL120 RGB de calidad y el software iCUE para control total, ofrece el balance perfecto entre rendimiento, silencio y estética.",
            specs: [
              { label: "Radiador", value: "240mm" },
              { label: "Ventiladores", value: "2x 120mm LL RGB PWM" },
              { label: "Bomba", value: "Corsair Elite alta durabilidad" },
              { label: "RGB", value: "Cabezal + ventiladores LL RGB (16 LEDs c/u)" },
              { label: "Garantía", value: "5 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Calidad bomba superior para larga vida", "Ventiladores LL RGB de alta calidad", "5 años garantía + software iCUE"],
            cons: ["Requiere software iCUE para RGB avanzado", "Precio elevado vs opciones básicas"],
            stores: [
              { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$151.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 82, "Ruido": 82, "Instalación": 75, "Calidad Build": 85, "Compatibilidad": 92, "Estética": 90, "Precio/Valor": 75 }
          },
          proRef: {
            name: "NZXT Kraken 240",
            brand: "NZXT",
            price: "$179.990",
            oneLiner: "AIO 240mm premium con pantalla LCD infinita — la estética definitiva.",
            why: "El NZXT Kraken 240 combina el rendimiento de un AIO 240mm de alta calidad con la pantalla LCD circular infinita de NZXT, que puede mostrar temperatura, GIFs o información de sistema. Para builds donde la estética es parte fundamental del build.",
            specs: [
              { label: "Radiador", value: "240mm" },
              { label: "Ventiladores", value: "2x 120mm NZXT F120 RGB" },
              { label: "Display", value: "Pantalla circular LCD infinita" },
              { label: "Bomba", value: "Alta calidad con cabezal cerámico" },
              { label: "Garantía", value: "6 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Pantalla LCD circular personalizable única", "6 años garantía", "Rendimiento excelente + estética premium"],
            cons: ["Precio premium para 240mm", "Software CAM requerido para personalización"],
            stores: [
              { name: "MercadoLibre", price: "$179.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$184.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 85, "Ruido": 82, "Instalación": 72, "Calidad Build": 90, "Compatibilidad": 90, "Estética": 98, "Precio/Valor": 65 }
          }
        },
        aio360: {
          label: "AIO 360mm",
          desc: "Máximo rendimiento · Para CPUs de alto TDP",
          maxTDP: 360,
          entry: {
            name: "DeepCool LE720",
            brand: "DeepCool",
            price: "$119.990",
            oneLiner: "AIO 360mm económico con pantalla LCD — alta gama accesible.",
            why: "El DeepCool LE720 es el AIO 360mm más accesible del mercado con pantalla LCD en el cabezal. Para refrigerar i9/Ryzen 9 en overclock o builds de alta gama donde se necesita un radiador grande sin gastar en opciones premium.",
            specs: [
              { label: "Radiador", value: "360mm" },
              { label: "Ventiladores", value: "3x 120mm PWM" },
              { label: "Display", value: "Pantalla LCD básica en cabezal" },
              { label: "Bomba", value: "Silenciosa integrada" },
              { label: "Garantía", value: "3 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["AIO 360mm más económico del segmento", "Pantalla LCD en el cabezal", "3 ventiladores para máxima disipación"],
            cons: ["Garantía 3 años en componente crítico", "Calidad bomba básica para el TDP que maneja"],
            stores: [
              { name: "MercadoLibre", price: "$119.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$124.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$121.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 85, "Ruido": 75, "Instalación": 65, "Calidad Build": 65, "Compatibilidad": 78, "Estética": 82, "Precio/Valor": 85 }
          },
          balanced: {
            name: "Corsair iCUE H150i Elite LCD",
            brand: "Corsair",
            price: "$229.990",
            oneLiner: "El AIO 360mm de referencia: pantalla LCD, bomba elite y 5 años.",
            why: "El Corsair iCUE H150i Elite LCD es el AIO 360mm más recomendado: con pantalla LCD en el cabezal, bomba Elite de alta durabilidad, tres ventiladores LL RGB y 5 años de garantía, es la protección perfecta para builds con i9-14900K o Ryzen 9 9950X.",
            specs: [
              { label: "Radiador", value: "360mm" },
              { label: "Ventiladores", value: "3x 120mm LL RGB PWM" },
              { label: "Display", value: "Pantalla LCD rotatable en cabezal" },
              { label: "Bomba", value: "Corsair Elite alta durabilidad" },
              { label: "Garantía", value: "5 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["Pantalla LCD rotatable + bomba Elite superior", "5 años garantía para AIO crítico", "Rendimiento 360mm excelente para cualquier CPU"],
            cons: ["Precio elevado", "Requiere iCUE software", "Instalación compleja por cables RGB"],
            stores: [
              { name: "MercadoLibre", price: "$229.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$234.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$231.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 92, "Ruido": 82, "Instalación": 65, "Calidad Build": 88, "Compatibilidad": 82, "Estética": 92, "Precio/Valor": 68 }
          },
          proRef: {
            name: "NZXT Kraken 360",
            brand: "NZXT",
            price: "$249.990",
            oneLiner: "El AIO 360mm premium: pantalla infinita y 6 años de garantía.",
            why: "El NZXT Kraken 360 es la referencia visual en AIOs de 360mm, con su pantalla circular infinita personalizable, tres ventiladores F120 RGB y la mayor garantía de la industria (6 años). Para builds entusiasta donde el rendimiento, estética y longevidad son igualmente importantes.",
            specs: [
              { label: "Radiador", value: "360mm" },
              { label: "Ventiladores", value: "3x 120mm NZXT F120 RGB" },
              { label: "Display", value: "Pantalla circular LCD infinita customizable" },
              { label: "Bomba", value: "Premium con cabezal cerámico" },
              { label: "Garantía", value: "6 años" },
              { label: "Sockets", value: "LGA1700/1851/AM5/AM4" }
            ],
            pros: ["6 años garantía — la mejor de la industria", "Pantalla LCD circular infinita única", "Rendimiento 360mm para cualquier CPU existente"],
            cons: ["Precio muy elevado", "Software CAM para personalización completa"],
            stores: [
              { name: "MercadoLibre", price: "$249.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$257.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Rendimiento": 95, "Ruido": 85, "Instalación": 62, "Calidad Build": 92, "Compatibilidad": 82, "Estética": 98, "Precio/Valor": 60 }
          }
        }
      }
    },
    storage: {
      icon: "💿",
      label: "Almacenamiento",
      question: "¿Qué tipo de almacenamiento?",
      axes: ["Veloc. Lectura", "Veloc. Escritura", "IOPS", "Durabilidad", "Compatibilidad", "Capacidad", "Precio/Valor"],
      options: {
        nvme: {
          label: "SSD NVMe M.2",
          desc: "Hasta 7000 MB/s · El estándar actual",
          interface: "M.2 NVMe PCIe",
          entry: {
            name: "WD Blue SN580 1TB",
            brand: "Western Digital",
            price: "$69.990",
            oneLiner: "El NVMe más popular del mercado: rápido, confiable y económico.",
            why: "El WD Blue SN580 1TB es la opción NVMe más recomendada para la mayoría de usuarios. Con velocidades de lectura hasta 4150 MB/s y la confiabilidad de Western Digital, ofrece una mejora enorme vs SATA a un precio muy accesible.",
            specs: [
              { label: "Interfaz", value: "M.2 NVMe PCIe Gen 4" },
              { label: "Capacidad", value: "1TB" },
              { label: "Lectura seq.", value: "4150 MB/s" },
              { label: "Escritura seq.", value: "4150 MB/s" },
              { label: "Endurance", value: "600 TBW" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["PCIe Gen 4 en precio económico", "5 años garantía WD", "1TB suficiente para SO + juegos principales"],
            cons: ["Sin caché DRAM (puede afectar escrituras largas)", "No es el NVMe más rápido del segmento"],
            stores: [
              { name: "MercadoLibre", price: "$69.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$72.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$70.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 78, "Veloc. Escritura": 78, "IOPS": 72, "Durabilidad": 78, "Compatibilidad": 92, "Capacidad": 75, "Precio/Valor": 90 }
          },
          balanced: {
            name: "Samsung 980 Pro 1TB",
            brand: "Samsung",
            price: "$99.990",
            oneLiner: "El NVMe PCIe 4.0 de referencia: 7000 MB/s con caché DRAM.",
            why: "El Samsung 980 Pro 1TB es la referencia en NVMe PCIe Gen 4, con velocidades de lectura hasta 7000 MB/s y caché DRAM para rendimiento consistente en escrituras. Con la fiabilidad legendaria de Samsung y 5 años de garantía, es el NVMe que recomendamos para la mayoría.",
            specs: [
              { label: "Interfaz", value: "M.2 NVMe PCIe Gen 4" },
              { label: "Capacidad", value: "1TB" },
              { label: "Lectura seq.", value: "7000 MB/s" },
              { label: "Escritura seq.", value: "5000 MB/s" },
              { label: "Endurance", value: "600 TBW" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["7000 MB/s lectura — el máximo PCIe Gen 4", "Caché DRAM para escrituras consistentes", "Samsung fiabilidad comprobada"],
            cons: ["Precio más alto que WD Blue", "Calor elevado bajo carga sostenida (necesita disipador)"],
            stores: [
              { name: "MercadoLibre", price: "$99.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$102.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$100.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 96, "Veloc. Escritura": 90, "IOPS": 88, "Durabilidad": 88, "Compatibilidad": 95, "Capacidad": 75, "Precio/Valor": 80 }
          },
          proRef: {
            name: "Samsung 990 Pro 2TB",
            brand: "Samsung",
            price: "$189.990",
            oneLiner: "2TB NVMe de referencia: el mejor storage para builds premium.",
            why: "El Samsung 990 Pro 2TB es la culminación en almacenamiento NVMe para builds premium. Con 2TB de capacidad, velocidades de hasta 7450 MB/s y la mayor endurance de su clase, es el drive que nunca será el cuello de botella en ninguna tarea.",
            specs: [
              { label: "Interfaz", value: "M.2 NVMe PCIe Gen 4" },
              { label: "Capacidad", value: "2TB" },
              { label: "Lectura seq.", value: "7450 MB/s" },
              { label: "Escritura seq.", value: "6900 MB/s" },
              { label: "Endurance", value: "1200 TBW" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["7450 MB/s — el más rápido en PCIe Gen 4", "2TB para instalar todo sin preocupaciones", "1200 TBW endurance excepcional"],
            cons: ["Precio elevado", "Requiere disipador para rendimiento sostenido"],
            stores: [
              { name: "MercadoLibre", price: "$189.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$194.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$191.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 99, "Veloc. Escritura": 96, "IOPS": 95, "Durabilidad": 96, "Compatibilidad": 95, "Capacidad": 92, "Precio/Valor": 72 }
          }
        },
        sata_ssd: {
          label: "SSD SATA 2.5\"",
          desc: "Hasta 550 MB/s · Compatible con cualquier PC",
          interface: "SATA III",
          entry: {
            name: "Kingston A400 1TB",
            brand: "Kingston",
            price: "$44.990",
            oneLiner: "El SSD SATA más popular: compatible con absolutamente todo.",
            why: "El Kingston A400 1TB es el SSD SATA más vendido por razón: compatible con cualquier PC o laptop que tenga SATA, precio mínimo y fiabilidad Kingston garantizada. Ideal para actualizar un PC antiguo o como almacenamiento secundario.",
            specs: [
              { label: "Interfaz", value: "SATA III (2.5\")" },
              { label: "Capacidad", value: "1TB" },
              { label: "Lectura seq.", value: "500 MB/s" },
              { label: "Escritura seq.", value: "450 MB/s" },
              { label: "Factor forma", value: "2.5\" / 7mm" },
              { label: "Garantía", value: "3 años" }
            ],
            pros: ["Compatible con cualquier sistema que tenga SATA", "Precio mínimo en SSD", "Upgrade masivo sobre HDD"],
            cons: ["500 MB/s vs 7000 MB/s de NVMe", "Sin NVMe para builds nuevas mejor elegir M.2"],
            stores: [
              { name: "MercadoLibre", price: "$44.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$46.990", url: "#", best: false, tag: "" },
              { name: "Falabella", price: "$47.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 52, "Veloc. Escritura": 50, "IOPS": 55, "Durabilidad": 70, "Compatibilidad": 100, "Capacidad": 75, "Precio/Valor": 88 }
          },
          balanced: {
            name: "Samsung 870 EVO 1TB",
            brand: "Samsung",
            price: "$79.990",
            oneLiner: "El mejor SSD SATA del mundo: Samsung 870 EVO.",
            why: "El Samsung 870 EVO 1TB es la referencia absoluta en SSDs SATA. Con velocidades máximas del estándar SATA (560/530 MB/s), caché DRAM, y la fiabilidad legendaria de Samsung con 5 años de garantía, es el upgrade perfecto para sistemas con SATA que no tienen M.2.",
            specs: [
              { label: "Interfaz", value: "SATA III (2.5\")" },
              { label: "Capacidad", value: "1TB" },
              { label: "Lectura seq.", value: "560 MB/s" },
              { label: "Escritura seq.", value: "530 MB/s" },
              { label: "Endurance", value: "600 TBW" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["El más rápido posible en SATA", "Caché DRAM para escrituras consistentes", "Samsung fiabilidad 5 años"],
            cons: ["SATA máximo es 10x más lento que NVMe Gen 4", "Precio más alto que Kingston A400"],
            stores: [
              { name: "MercadoLibre", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$82.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$80.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 58, "Veloc. Escritura": 56, "IOPS": 72, "Durabilidad": 85, "Compatibilidad": 100, "Capacidad": 75, "Precio/Valor": 78 }
          },
          proRef: {
            name: "Samsung 870 EVO 2TB",
            brand: "Samsung",
            price: "$149.990",
            oneLiner: "2TB SATA de referencia: la máxima capacidad con máxima calidad.",
            why: "El Samsung 870 EVO 2TB es la opción para sistemas que necesitan mucho almacenamiento en SATA, sea por compatibilidad o porque se usará como drive secundario de gran capacidad. Con 2TB y la calidad Samsung, es la referencia en almacenamiento SATA masivo.",
            specs: [
              { label: "Interfaz", value: "SATA III (2.5\")" },
              { label: "Capacidad", value: "2TB" },
              { label: "Lectura seq.", value: "560 MB/s" },
              { label: "Escritura seq.", value: "530 MB/s" },
              { label: "Endurance", value: "1200 TBW" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["2TB con máxima confiabilidad Samsung", "1200 TBW endurance para uso intensivo", "5 años garantía"],
            cons: ["SATA lento vs NVMe", "Precio elevado vs NVMe 2TB equivalente"],
            stores: [
              { name: "MercadoLibre", price: "$149.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$154.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 58, "Veloc. Escritura": 56, "IOPS": 72, "Durabilidad": 90, "Compatibilidad": 100, "Capacidad": 92, "Precio/Valor": 68 }
          }
        },
        hdd: {
          label: "HDD 3.5\"",
          desc: "Almacenamiento masivo y económico",
          interface: "SATA III",
          entry: {
            name: "Seagate Barracuda 2TB",
            brand: "Seagate",
            price: "$44.990",
            oneLiner: "2TB a precio mínimo — el almacenamiento masivo más económico.",
            why: "El Seagate Barracuda 2TB es el HDD más popular del mercado por su precio imbatible y confiabilidad suficiente para almacenamiento masivo. Ideal como drive secundario para guardar juegos descargados, archivos y medios sin gastar en SSDs para todo.",
            specs: [
              { label: "Interfaz", value: "SATA III (3.5\")" },
              { label: "Capacidad", value: "2TB" },
              { label: "Velocidad", value: "7200 RPM" },
              { label: "Cache", value: "256MB" },
              { label: "Lectura seq.", value: "~220 MB/s" },
              { label: "Garantía", value: "2 años" }
            ],
            pros: ["El storage más barato por GB del mercado", "2TB para guardar todo lo que quieras", "Disponible en todas las tiendas"],
            cons: ["7200 RPM mucho más lento que SSD", "Ruidoso vs SSD", "Solo 2 años garantía"],
            stores: [
              { name: "MercadoLibre", price: "$44.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$46.990", url: "#", best: false, tag: "" },
              { name: "Falabella", price: "$47.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 28, "Veloc. Escritura": 28, "IOPS": 15, "Durabilidad": 62, "Compatibilidad": 100, "Capacidad": 75, "Precio/Valor": 95 }
          },
          balanced: {
            name: "WD Blue 4TB",
            brand: "Western Digital",
            price: "$79.990",
            oneLiner: "4TB WD Blue — el almacenamiento masivo de referencia para hogar.",
            why: "El WD Blue 4TB es el HDD de referencia para almacenamiento masivo doméstico. Con 4TB a precio muy razonable y la confiabilidad de Western Digital, es el drive para quien quiere guardar su colección completa de juegos, videos y archivos sin preocupaciones.",
            specs: [
              { label: "Interfaz", value: "SATA III (3.5\")" },
              { label: "Capacidad", value: "4TB" },
              { label: "Velocidad", value: "5400 RPM (CMR)" },
              { label: "Cache", value: "256MB" },
              { label: "Lectura seq.", value: "~180 MB/s" },
              { label: "Garantía", value: "2 años" }
            ],
            pros: ["4TB para almacenamiento sin preocupaciones", "WD confiabilidad comprobada", "CMR (no SMR) para escrituras confiables"],
            cons: ["5400 RPM algo más lento que 7200 RPM Seagate", "Solo 2 años garantía"],
            stores: [
              { name: "MercadoLibre", price: "$79.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$82.990", url: "#", best: false, tag: "" },
              { name: "Solotodo", price: "$80.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 25, "Veloc. Escritura": 25, "IOPS": 12, "Durabilidad": 68, "Compatibilidad": 100, "Capacidad": 90, "Precio/Valor": 88 }
          },
          proRef: {
            name: "WD Gold 8TB",
            brand: "Western Digital",
            price: "$249.990",
            oneLiner: "8TB clase enterprise para almacenamiento masivo sin compromisos.",
            why: "El WD Gold 8TB es el HDD de clase enterprise para uso doméstico de alta exigencia. Diseñado para workloads 24/7 en servidores NAS y workstations, ofrece la mayor confiabilidad posible en un HDD con 5 años de garantía y tecnologías enterprise como vibration compensation.",
            specs: [
              { label: "Interfaz", value: "SATA III (3.5\")" },
              { label: "Capacidad", value: "8TB" },
              { label: "Velocidad", value: "7200 RPM" },
              { label: "Cache", value: "256MB" },
              { label: "Workload", value: "550 TB/año (clase enterprise)" },
              { label: "Garantía", value: "5 años" }
            ],
            pros: ["8TB para archivos ilimitados", "5 años garantía enterprise", "Diseñado para uso 24/7 continuo"],
            cons: ["Precio elevado vs HDD desktop", "7200 RPM genera algo más de calor y ruido"],
            stores: [
              { name: "MercadoLibre", price: "$249.990", url: "#", best: true, tag: "Mejor precio" },
              { name: "PCFactory", price: "$257.990", url: "#", best: false, tag: "" }
            ],
            scores: { "Veloc. Lectura": 32, "Veloc. Escritura": 30, "IOPS": 18, "Durabilidad": 92, "Compatibilidad": 100, "Capacidad": 100, "Precio/Valor": 72 }
          }
        }
      }
    }
  }
};
