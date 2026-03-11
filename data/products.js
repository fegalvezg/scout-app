// ═══════════════════════════════════════════════════════════
// SKAUT — BASE DE DATOS DE PRODUCTOS
// ═══════════════════════════════════════════════════════════
// Tiendas: Falabella, Paris, MercadoLibre, PCFactory, SPDigital,
//          Mac Online, Amazon (envío Chile), AliExpress, Ripley
// Precios en CLP (pesos chilenos)
// ═══════════════════════════════════════════════════════════

export const DATA = {
  laptops: {
    icon: "💻", label: "Laptops",
    subcategories: {
      gaming: {
        icon: "🎮", label: "Gaming", desc: "Jugar sin compromisos",
        axes: ["GPU","CPU","Pantalla","Refrigeración","Precio/Valor","Build Quality","Teclado"],
        bestValue: {
          name: "ASUS ROG Strix G16", brand: "ASUS", price: "$1.099.990",
          oneLiner: "El 95% del rendimiento del mejor, por la mitad del precio.",
          why: "RTX 4070, 165Hz, refrigeración para sesiones de 8h. Plástico sí, pero las entrañas son bestiales.",
          scores: {GPU:88,CPU:85,Pantalla:82,"Refrigeración":80,"Precio/Valor":90,"Build Quality":65,Teclado:72},
          specs: [{label:"GPU",value:"RTX 4070 8GB"},{label:"CPU",value:"i9-14900HX"},{label:"RAM",value:"16GB DDR5"},{label:"Pantalla",value:'16" FHD+ 165Hz'},{label:"Storage",value:"1TB NVMe"},{label:"Peso",value:"2.5 kg"}],
          pros: ["RTX 4070 rinde casi como 4080 en 1080p","Refrigeración silenciosa en modo Silent","165Hz sin ghosting"],
          cons: ["Chassis de plástico","Batería mediocre","Webcam 720p"],
          stores: [{name:"PCFactory",price:"$1.099.990",url:"#",best:true,tag:"Mejor precio"},{name:"Falabella",price:"$1.149.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$1.079.990",url:"#",best:false,tag:"Vendedor destacado"}],
        },
        theBest: {
          name: "Razer Blade 16", brand: "Razer", price: "$2.499.990",
          oneLiner: "El único laptop gamer que no da vergüenza en una reunión.",
          why: "RTX 4080, OLED 240Hz, aluminio CNC. Se ve como MacBook, corre como desktop.",
          scores: {GPU:95,CPU:92,Pantalla:96,"Refrigeración":78,"Precio/Valor":42,"Build Quality":95,Teclado:85},
          specs: [{label:"GPU",value:"RTX 4080 12GB"},{label:"CPU",value:"i9-14900HX"},{label:"RAM",value:"32GB DDR5"},{label:"Pantalla",value:'16" 4K OLED 240Hz'},{label:"Storage",value:"1TB NVMe"},{label:"Peso",value:"2.45 kg"}],
          pros: ["Aluminio CNC unibody","OLED 240Hz es otra dimensión","Perfil delgado, no parece gamer"],
          cons: ["$2.499.990 es mucho","Throttlea en sesiones largas AAA","Sin servicio técnico oficial en Chile"],
          stores: [{name:"Amazon",price:"$2.499.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$2.599.990",url:"#",best:false,tag:null}],
        },
      },
      oficina: {
        icon: "🏢", label: "Oficina", desc: "Productividad y confiabilidad",
        axes: ["Batería","Portabilidad","Teclado","Pantalla","Durabilidad","Precio/Valor","Rendimiento"],
        bestValue: {
          name: "ThinkPad X1 Carbon Gen 12", brand: "Lenovo", price: "$1.249.990",
          oneLiner: "El tanque silencioso. Lo compras, te olvidas 5 años.",
          why: "1.1kg, mejor teclado del mercado, MIL-STD-810H. No es lindo — es indestructible.",
          scores: {"Batería":88,Portabilidad:93,Teclado:97,Pantalla:75,Durabilidad:96,"Precio/Valor":80,Rendimiento:68},
          specs: [{label:"CPU",value:"Core Ultra 7 155U"},{label:"RAM",value:"16GB LPDDR5x"},{label:"Pantalla",value:'14" 2.8K OLED'},{label:"Batería",value:"~12h real"},{label:"Peso",value:"1.08 kg"},{label:"Cert.",value:"MIL-STD-810H"}],
          pros: ["Mejor teclado del mercado","1.08kg ultraliviano","12h batería real"],
          cons: ["GPU integrada solamente","Puerto USB-A solo uno","Pantalla base mediocre"],
          stores: [{name:"Falabella",price:"$1.249.990",url:"#",best:true,tag:"Despacho gratis"},{name:"Paris",price:"$1.279.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$1.199.990",url:"#",best:false,tag:"Vendedor destacado"}],
        },
        theBest: {
          name: 'MacBook Pro 14" M4 Pro', brand: "Apple", price: "$2.099.990",
          oneLiner: "La máquina que nunca falla en una presentación.",
          why: "Pantalla XDR, 18h batería real, silencio absoluto, trackpad de otro planeta.",
          scores: {"Batería":92,Portabilidad:82,Teclado:85,Pantalla:96,Durabilidad:93,"Precio/Valor":55,Rendimiento:88},
          specs: [{label:"CPU",value:"Apple M4 Pro 14-core"},{label:"RAM",value:"24GB Unificada"},{label:"Pantalla",value:'14.2" Liquid Retina XDR'},{label:"Batería",value:"~18h real"},{label:"Peso",value:"1.55 kg"},{label:"Puertos",value:"3x TB4, HDMI, SD"}],
          pros: ["18h batería real","Silencio total bajo carga","Mejor trackpad de la industria"],
          cons: ["$2.099.990 por config que vale la pena","macOS no es para todos","No upgradeable"],
          stores: [{name:"Mac Online",price:"$2.099.990",url:"#",best:true,tag:"Apple Authorized"},{name:"Falabella",price:"$2.149.990",url:"#",best:false,tag:"6 cuotas s/i"},{name:"iShop",price:"$2.099.990",url:"#",best:false,tag:null}],
        },
      },
      creativo: {
        icon: "🎨", label: "Creativo", desc: "Diseño, video, fotografía",
        axes: ["Pantalla","Color","GPU","RAM","Portabilidad","Precio/Valor","Rendimiento"],
        bestValue: {
          name: 'MacBook Air 15" M4', brand: "Apple", price: "$1.299.990",
          oneLiner: "Photoshop, Figma, Premiere Light — todo sin ventilador.",
          why: "P3 wide color, 16GB unificada, fanless. Para el 80% de los creativos es más que suficiente.",
          scores: {Pantalla:85,Color:88,GPU:72,RAM:70,Portabilidad:92,"Precio/Valor":88,Rendimiento:75},
          specs: [{label:"CPU",value:"Apple M4"},{label:"RAM",value:"16GB Unificada"},{label:"Pantalla",value:'15.3" Liquid Retina'},{label:"Color",value:"P3 Wide"},{label:"Peso",value:"1.51 kg"},{label:"Ventilador",value:"Fanless"}],
          pros: ["Fanless = silencio total","P3 wide color de fábrica","Batería para un día completo"],
          cons: ["Solo 16GB en modelo base","GPU limitada para 3D pesado","Un solo puerto externo"],
          stores: [{name:"Mac Online",price:"$1.299.990",url:"#",best:true,tag:"Apple Authorized"},{name:"Falabella",price:"$1.349.990",url:"#",best:false,tag:null},{name:"Paris",price:"$1.329.990",url:"#",best:false,tag:"3 cuotas s/i"}],
        },
        theBest: {
          name: 'MacBook Pro 16" M4 Max', brand: "Apple", price: "$3.199.990",
          oneLiner: "Renders 8K, exports en minutos, colores imposibles.",
          why: "36GB unificada, mini-LED 1600 nits, GPU 40 cores. La inversión se paga en meses.",
          scores: {Pantalla:98,Color:97,GPU:96,RAM:95,Portabilidad:62,"Precio/Valor":40,Rendimiento:97},
          specs: [{label:"CPU",value:"Apple M4 Max"},{label:"RAM",value:"36GB Unificada"},{label:"GPU",value:"40-core"},{label:"Pantalla",value:'16.2" mini-LED XDR'},{label:"Brillo",value:"1600 nits HDR"},{label:"Peso",value:"2.14 kg"}],
          pros: ["Pantalla mini-LED 1600 nits","Renders que humillan desktops","36GB unificada sin swap"],
          cons: ["$3.199.990 de entrada","2.14kg no es liviano","Overkill para diseño 2D"],
          stores: [{name:"Mac Online",price:"$3.199.990",url:"#",best:true,tag:null},{name:"iShop",price:"$3.199.990",url:"#",best:false,tag:null}],
        },
      },
    },
  },
  pc: {
    icon: "🖥️", label: "PC Desktop",
    subcategories: {
      gaming: {
        icon: "🎮", label: "Gaming", desc: "Máximo rendimiento",
        axes: ["GPU","CPU","Refrigeración","Upgradabilidad","Precio/Valor","Ruido","Storage"],
        bestValue: { name:"NZXT Player: One",brand:"NZXT",price:"$1.149.990",oneLiner:"El PC gamer prearmado que no te roba en el markup.",why:"RTX 4070 Super + i5-14400F. Sin bloatware, buen airflow.",scores:{GPU:85,CPU:78,Refrigeración:80,Upgradabilidad:88,"Precio/Valor":92,Ruido:75,Storage:70},specs:[{label:"GPU",value:"RTX 4070 Super"},{label:"CPU",value:"i5-14400F"},{label:"RAM",value:"16GB DDR5"},{label:"Storage",value:"1TB NVMe"},{label:"PSU",value:"650W 80+ Gold"},{label:"Case",value:"NZXT H5 Flow"}],pros:["Precio casi igual a armarlo tú","Sin bloatware","Case con buen airflow"],cons:["Solo 16GB RAM","i5 puede bottleneck en 2-3 años","WiFi no incluido"],stores:[{name:"SPDigital",price:"$1.149.990",url:"#",best:true,tag:"Mejor precio"},{name:"PCFactory",price:"$1.199.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Corsair One i500",brand:"Corsair",price:"$3.499.990",oneLiner:"PC gamer del tamaño de una consola con poder de workstation.",why:"RTX 4090, i9-14900K, refrigeración líquida en 12 litros.",scores:{GPU:98,CPU:96,Refrigeración:92,Upgradabilidad:40,"Precio/Valor":35,Ruido:90,Storage:85},specs:[{label:"GPU",value:"RTX 4090 24GB"},{label:"CPU",value:"i9-14900K"},{label:"RAM",value:"64GB DDR5"},{label:"Storage",value:"2TB NVMe"},{label:"Volumen",value:"12L"},{label:"Refrig.",value:"Líquida custom"}],pros:["RTX 4090 en 12 litros","Silencioso para su potencia","Diseño de sala de estar"],cons:["$3.499.990 premium extremo","Casi no upgradeable","Propietario en todo"],stores:[{name:"Amazon",price:"$3.499.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$3.649.990",url:"#",best:false,tag:null}]},
      },
      oficina: {
        icon: "🏢", label: "Oficina", desc: "Confiable, silencioso",
        axes: ["Rendimiento","Ruido","Tamaño","Precio/Valor","Puertos","Garantía","Consumo"],
        bestValue: { name:"Mac Mini M4",brand:"Apple",price:"$549.990",oneLiner:"El mejor computador de oficina por $549.990. No es discutible.",why:"M4, 16GB, Thunderbolt 4, del tamaño de un libro.",scores:{Rendimiento:82,Ruido:98,Tamaño:97,"Precio/Valor":96,Puertos:85,Garantía:85,Consumo:95},specs:[{label:"CPU",value:"Apple M4"},{label:"RAM",value:"16GB"},{label:"Storage",value:"256GB SSD"},{label:"Puertos",value:"2x TB4, USB-C, HDMI"},{label:"Tamaño",value:"12.7 x 12.7 cm"},{label:"Consumo",value:"~15W idle"}],pros:["$549.990 por un M4 con 16GB","Del tamaño de tu mano","Silencio total"],cons:["256GB base es justo","No upgradeable","macOS obligatorio"],stores:[{name:"Mac Online",price:"$549.990",url:"#",best:true,tag:"Apple Authorized"},{name:"Falabella",price:"$579.990",url:"#",best:false,tag:"6 cuotas s/i"},{name:"iShop",price:"$549.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Mac Studio M4 Max",brand:"Apple",price:"$1.849.990",oneLiner:"Poder de Mac Pro en una caja que cabe en tu escritorio.",why:"M4 Max, 36GB, Thunderbolt 5. Potencia seria sin tamaño torre.",scores:{Rendimiento:95,Ruido:88,Tamaño:85,"Precio/Valor":65,Puertos:95,Garantía:85,Consumo:75},specs:[{label:"CPU",value:"Apple M4 Max"},{label:"RAM",value:"36GB Unificada"},{label:"Storage",value:"512GB SSD"},{label:"Puertos",value:"3x TB5, USB-C, HDMI, SD"},{label:"Tamaño",value:"19.7 x 19.7 cm"},{label:"GPU",value:"40-core"}],pros:["Thunderbolt 5 futureproof","Silencioso bajo carga","Poder de workstation"],cons:["$1.849.990 sin monitor","512GB debería ser 1TB","Solo ecosistema Apple"],stores:[{name:"Mac Online",price:"$1.849.990",url:"#",best:true,tag:null},{name:"iShop",price:"$1.849.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  allinone: {
    icon: "🖥", label: "All-in-One",
    subcategories: {
      hogar: {
        icon: "🏠", label: "Hogar", desc: "Familia, streaming, tareas",
        axes: ["Pantalla","Rendimiento","Diseño","Precio/Valor","Sonido","Webcam","Storage"],
        bestValue: { name:'Lenovo IdeaCentre AIO 27"',brand:"Lenovo",price:"$699.990",oneLiner:"27 pulgadas, teclado y mouse incluidos, listo para usar.",why:"Ryzen 5, 16GB, FHD 27\". Para la familia que necesita un PC sin dramas.",scores:{Pantalla:75,Rendimiento:68,Diseño:72,"Precio/Valor":88,Sonido:65,Webcam:70,Storage:75},specs:[{label:"CPU",value:"Ryzen 5 7530U"},{label:"RAM",value:"16GB"},{label:"Pantalla",value:'27" FHD IPS'},{label:"Storage",value:"512GB SSD"},{label:"Webcam",value:"1080p IR"},{label:"Incluye",value:"Teclado + Mouse"}],pros:["Listo out-of-the-box","27\" suficiente para hogar","Webcam 1080p"],cons:["Pantalla no es QHD","GPU integrada","Sonido mediocre"],stores:[{name:"Falabella",price:"$699.990",url:"#",best:true,tag:"Despacho gratis"},{name:"Paris",price:"$719.990",url:"#",best:false,tag:null},{name:"Ripley",price:"$709.990",url:"#",best:false,tag:null}]},
        theBest: { name:'iMac 24" M4',brand:"Apple",price:"$1.149.990",oneLiner:"El computador más lindo que vas a tener en tu casa.",why:"4.5K Retina, M4, 6 altavoces, 11.5mm grosor. Arte que funciona.",scores:{Pantalla:95,Rendimiento:85,Diseño:98,"Precio/Valor":72,Sonido:90,Webcam:92,Storage:65},specs:[{label:"CPU",value:"Apple M4"},{label:"RAM",value:"16GB"},{label:"Pantalla",value:'24" 4.5K Retina P3'},{label:"Sonido",value:"6 altavoces Spatial Audio"},{label:"Webcam",value:"12MP Center Stage"},{label:"Grosor",value:"11.5mm"}],pros:["4.5K Retina espectacular","6 altavoces sorprendentes","Center Stage videollamadas"],cons:["$1.149.990 con 256GB","24\" puede ser chico","No upgradeable"],stores:[{name:"Mac Online",price:"$1.149.990",url:"#",best:true,tag:"7 colores"},{name:"Falabella",price:"$1.199.990",url:"#",best:false,tag:"6 cuotas s/i"},{name:"iShop",price:"$1.149.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  telefonos: {
    icon: "📱", label: "Teléfonos",
    subcategories: {
      flagship: {
        icon: "👑", label: "Flagship", desc: "Lo mejor sin importar precio",
        axes: ["Cámara","Rendimiento","Pantalla","Batería","Precio/Valor","Build Quality","Software"],
        bestValue: { name:"Samsung Galaxy S25",brand:"Samsung",price:"$749.990",oneLiner:"El flagship compacto que hace todo bien sin cobrar de más.",why:"Snapdragon 8 Elite, 6.2\" AMOLED 120Hz, 7 años updates.",scores:{Cámara:85,Rendimiento:90,Pantalla:88,Batería:78,"Precio/Valor":85,"Build Quality":88,Software:82},specs:[{label:"Chip",value:"Snapdragon 8 Elite"},{label:"Pantalla",value:'6.2" AMOLED 120Hz'},{label:"Cámara",value:"50MP + 12MP + 10MP"},{label:"Batería",value:"4,000 mAh"},{label:"Updates",value:"7 años"},{label:"Storage",value:"256GB"}],pros:["Snapdragon 8 Elite brutal","7 años actualizaciones","Tamaño compacto"],cons:["4,000mAh justo","Sin cargador en caja","Zoom solo 3x"],stores:[{name:"Falabella",price:"$749.990",url:"#",best:true,tag:"6 cuotas s/i"},{name:"Paris",price:"$759.990",url:"#",best:false,tag:null},{name:"Entel",price:"$749.990",url:"#",best:false,tag:"Con plan"}]},
        theBest: { name:"iPhone 16 Pro Max",brand:"Apple",price:"$1.149.990",oneLiner:"El teléfono más completo que existe. Punto.",why:"A18 Pro, 5x zoom, titanio, ProRes 4K 120fps. Sin equivalente real.",scores:{Cámara:96,Rendimiento:95,Pantalla:94,Batería:90,"Precio/Valor":55,"Build Quality":97,Software:95},specs:[{label:"Chip",value:"A18 Pro"},{label:"Pantalla",value:'6.9" OLED ProMotion'},{label:"Cámara",value:"48MP + 12MP + 12MP 5x"},{label:"Batería",value:"4,685 mAh"},{label:"Material",value:"Titanio"},{label:"Video",value:"ProRes 4K 120fps"}],pros:["Titanio premium real","5x zoom óptico","Mejor video de cualquier teléfono"],cons:["$1.149.990 de entrada","USB-C sin USB 3 en base","iOS limitado en personalización"],stores:[{name:"Mac Online",price:"$1.149.990",url:"#",best:true,tag:"Apple Authorized"},{name:"Falabella",price:"$1.179.990",url:"#",best:false,tag:null},{name:"iShop",price:"$1.149.990",url:"#",best:false,tag:null}]},
      },
      gamamedia: {
        icon: "💰", label: "Gama Media", desc: "El 90% al 40% del precio",
        axes: ["Cámara","Rendimiento","Batería","Pantalla","Precio/Valor","Durabilidad","Carga"],
        bestValue: { name:"Samsung Galaxy A55",brand:"Samsung",price:"$299.990",oneLiner:"El teléfono que tu mamá, tu hermano y tú deberían tener.",why:"AMOLED 120Hz, IP67, 5000mAh, 4 años updates.",scores:{Cámara:72,Rendimiento:68,Batería:88,Pantalla:82,"Precio/Valor":95,Durabilidad:80,Carga:65},specs:[{label:"Chip",value:"Exynos 1480"},{label:"Pantalla",value:'6.6" AMOLED 120Hz'},{label:"Batería",value:"5,000 mAh"},{label:"IP",value:"IP67"},{label:"Updates",value:"4 años"},{label:"Cámara",value:"50MP + 12MP + 5MP"}],pros:["IP67 a este precio","AMOLED 120Hz real","5000mAh todo el día"],cons:["Carga lenta 25W","Exynos no Snapdragon","Fotos nocturnas mediocres"],stores:[{name:"Falabella",price:"$299.990",url:"#",best:true,tag:"Despacho gratis"},{name:"Paris",price:"$309.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$279.990",url:"#",best:false,tag:"Vendedor destacado"}]},
        theBest: { name:"Google Pixel 8a",brand:"Google",price:"$449.990",oneLiner:"La mejor cámara de gama media. No es opinión, es math.",why:"Tensor G3, 7 años updates, fotografía computacional que compite con flagships.",scores:{Cámara:90,Rendimiento:75,Batería:80,Pantalla:82,"Precio/Valor":88,Durabilidad:75,Carga:72},specs:[{label:"Chip",value:"Google Tensor G3"},{label:"Pantalla",value:'6.1" OLED 120Hz'},{label:"Cámara",value:"64MP + 13MP"},{label:"Batería",value:"4,492 mAh"},{label:"Updates",value:"7 años"},{label:"IA",value:"Magic Eraser, Best Take"}],pros:["Cámara nivel flagship","7 años actualizaciones","IA fotográfica imbatible"],cons:["Tensor G3 se calienta","Sin zoom óptico","Garantía compleja en Chile"],stores:[{name:"Amazon",price:"$449.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$469.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  accesorios: {
    icon: "⌨️", label: "Accesorios",
    subcategories: {
      teclados: {
        icon: "⌨️", label: "Teclados", desc: "Externos para productividad",
        axes: ["Tipeo","Build Quality","Conectividad","Batería","Precio/Valor","Ruido","Retroiluminación"],
        bestValue: { name:"Keychron K2 V2",brand:"Keychron",price:"$79.990",oneLiner:"El teclado que convierte gente en keyboard nerd.",why:"Hot-swap, BT 5.1, Mac/Win, 3 semanas batería.",scores:{Tipeo:88,"Build Quality":80,Conectividad:85,Batería:82,"Precio/Valor":92,Ruido:65,Retroiluminación:78},specs:[{label:"Switch",value:"Gateron Brown (hot-swap)"},{label:"Layout",value:"75%"},{label:"Conexión",value:"BT 5.1 + USB-C"},{label:"Batería",value:"4000mAh (~3 sem)"},{label:"Compat.",value:"Mac + Windows"},{label:"RGB",value:"Sí"}],pros:["Hot-swap cambiar switches","Triple BT","3 semanas batería"],cons:["Keycaps mediocres","Estabilizadores rattly","Grueso sin wrist rest"],stores:[{name:"AliExpress",price:"$79.990",url:"#",best:true,tag:"Envío gratis"},{name:"MercadoLibre",price:"$94.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Logitech MX Keys S",brand:"Logitech",price:"$99.990",oneLiner:"Para gente que escribe 8 horas y no quiere pensar en ello.",why:"Low profile, retroiluminación inteligente, Flow entre 3 dispositivos.",scores:{Tipeo:92,"Build Quality":90,Conectividad:95,Batería:90,"Precio/Valor":82,Ruido:95,Retroiluminación:92},specs:[{label:"Tipo",value:"Low profile membrana"},{label:"Conexión",value:"BT + Bolt USB"},{label:"Batería",value:"10 días retroilum."},{label:"Flow",value:"3 dispositivos"},{label:"Retroilum.",value:"Auto proximity"},{label:"Carga",value:"USB-C"}],pros:["Flow entre 3 PCs es magia","Sensor de proximidad","Silencioso ideal oficina"],cons:["No es mecánico","$99.990 por membrana","Sin customización"],stores:[{name:"Falabella",price:"$99.990",url:"#",best:true,tag:null},{name:"PCFactory",price:"$104.990",url:"#",best:false,tag:null},{name:"Paris",price:"$99.990",url:"#",best:false,tag:null}]},
      },
      mouse: {
        icon: "🖱️", label: "Mouse", desc: "Precisión y ergonomía",
        axes: ["Ergonomía","Precisión","Batería","Peso","Precio/Valor","Conectividad","Software"],
        bestValue: { name:"Logitech MX Master 3S",brand:"Logitech",price:"$89.990",oneLiner:"El mouse que usan los que saben de mouse.",why:"8000 DPI, scroll electromagnético, ergonomía perfecta, Flow entre dispositivos.",scores:{Ergonomía:95,Precisión:88,Batería:92,Peso:70,"Precio/Valor":88,Conectividad:95,Software:90},specs:[{label:"Sensor",value:"8000 DPI"},{label:"Batería",value:"70 días"},{label:"Conexión",value:"BT + Bolt USB"},{label:"Scroll",value:"MagSpeed"},{label:"Peso",value:"141g"},{label:"Carga",value:"USB-C"}],pros:["MagSpeed scroll adictivo","70 días batería","Flow 3 dispositivos"],cons:["141g pesado para algunos","No para gaming","Plástico se mancha"],stores:[{name:"Falabella",price:"$89.990",url:"#",best:true,tag:"Despacho gratis"},{name:"PCFactory",price:"$94.990",url:"#",best:false,tag:null},{name:"Paris",price:"$89.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Apple Magic Trackpad",brand:"Apple",price:"$119.990",oneLiner:"No es un mouse. Es mejor que un mouse.",why:"Multi-touch, Force Touch, gestos nativos macOS.",scores:{Ergonomía:85,Precisión:92,Batería:85,Peso:88,"Precio/Valor":68,Conectividad:80,Software:98},specs:[{label:"Superficie",value:"Multi-Touch completa"},{label:"Force Touch",value:"Sí"},{label:"Batería",value:"~1 mes"},{label:"Conexión",value:"BT + USB-C"},{label:"Gestos",value:"Nativos macOS"},{label:"Peso",value:"230g"}],pros:["Gestos macOS insuperables","Force Touch acciones rápidas","Superficie enorme"],cons:["Solo funciona bien con Mac","$119.990 por un trackpad","Carga por abajo (v1)"],stores:[{name:"Mac Online",price:"$119.990",url:"#",best:true,tag:null},{name:"Falabella",price:"$124.990",url:"#",best:false,tag:null},{name:"iShop",price:"$119.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  componentes: {
    icon: "🔧", label: "Componentes PC",
    subcategories: {
      gpu: {
        icon: "🎴", label: "GPUs", desc: "El corazón del gaming",
        axes: ["Rendimiento","VRAM","Consumo","Ruido","Precio/Valor","Ray Tracing","Drivers"],
        bestValue: { name:"RTX 4070 Super",brand:"NVIDIA",price:"$529.990",oneLiner:"1440p a 60+ fps en todo. El sweet spot.",why:"12GB, DLSS 3.5, ray tracing real. Ultra a 1440p sin vender un riñón.",scores:{Rendimiento:82,VRAM:78,Consumo:85,Ruido:80,"Precio/Valor":90,"Ray Tracing":82,Drivers:92},specs:[{label:"VRAM",value:"12GB GDDR6X"},{label:"TDP",value:"220W"},{label:"DLSS",value:"3.5 Frame Gen"},{label:"Proceso",value:"TSMC 5nm"},{label:"RT Cores",value:"3rd Gen"},{label:"Conector",value:"12VHPWR"}],pros:["1440p Ultra en todo","DLSS 3.5 game changer","220W razonable"],cons:["12GB corto en 2-3 años","No para 4K native","1 gen antes de RTX 50"],stores:[{name:"PCFactory",price:"$529.990",url:"#",best:true,tag:"Mejor precio"},{name:"SPDigital",price:"$539.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$519.990",url:"#",best:false,tag:"Vendedor destacado"}]},
        theBest: { name:"RTX 4090",brand:"NVIDIA",price:"$1.449.990",oneLiner:"4K Ultra a 100+ fps. No hay nada más rápido.",why:"24GB, 16384 CUDA cores. Absurdamente potente.",scores:{Rendimiento:99,VRAM:98,Consumo:45,Ruido:60,"Precio/Valor":40,"Ray Tracing":98,Drivers:92},specs:[{label:"VRAM",value:"24GB GDDR6X"},{label:"TDP",value:"450W"},{label:"CUDA",value:"16384 cores"},{label:"DLSS",value:"3.5"},{label:"Proceso",value:"TSMC 5nm"},{label:"Conector",value:"12VHPWR"}],pros:["4K Ultra sin despeinarse","24GB futureproof","También workstation GPU"],cons:["$1.449.990+","450W necesita PSU 850W+","Enorme"],stores:[{name:"SPDigital",price:"$1.449.990",url:"#",best:true,tag:null},{name:"PCFactory",price:"$1.499.990",url:"#",best:false,tag:null},{name:"Amazon",price:"$1.399.990",url:"#",best:false,tag:"Envío a Chile"}]},
      },
      cpu: {
        icon: "🧠", label: "CPUs", desc: "El cerebro de tu build",
        axes: ["Multi-core","Single-core","Consumo","Temperatura","Precio/Valor","iGPU","OC"],
        bestValue: { name:"Ryzen 7 7800X3D",brand:"AMD",price:"$329.990",oneLiner:"El mejor CPU para gaming. Sin discusión.",why:"V-Cache 3D = fps más altos que i9. 8 cores, bajo consumo, AM5.",scores:{"Multi-core":78,"Single-core":92,Consumo:90,Temperatura:85,"Precio/Valor":95,iGPU:60,OC:40},specs:[{label:"Cores",value:"8C/16T"},{label:"Cache",value:"96MB 3D V-Cache"},{label:"TDP",value:"120W"},{label:"Socket",value:"AM5"},{label:"Boost",value:"5.0 GHz"},{label:"iGPU",value:"Radeon (básica)"}],pros:["#1 en gaming puro","120W TDP razonable","AM5 largo futuro"],cons:["Solo 8 cores productividad","Sin OC","iGPU básica"],stores:[{name:"PCFactory",price:"$329.990",url:"#",best:true,tag:"Mejor precio"},{name:"SPDigital",price:"$339.990",url:"#",best:false,tag:null},{name:"AliExpress",price:"$309.990",url:"#",best:false,tag:"Envío 15 días"}]},
        theBest: { name:"Ryzen 9 9950X",brand:"AMD",price:"$549.990",oneLiner:"16 cores Zen 5. Gaming + productividad sin elegir.",why:"Zen 5, 16C/32T, 5.7GHz. Todo-terreno definitivo.",scores:{"Multi-core":98,"Single-core":95,Consumo:70,Temperatura:65,"Precio/Valor":72,iGPU:62,OC:90},specs:[{label:"Cores",value:"16C/32T"},{label:"Boost",value:"5.7 GHz"},{label:"TDP",value:"170W"},{label:"Socket",value:"AM5"},{label:"Cache",value:"64MB L3"},{label:"Arch",value:"Zen 5"}],pros:["16 cores productividad seria","Zen 5 IPC","AM5 largo plazo"],cons:["$549.990 sin cooler","170W necesita refrig.","Para puro gaming 7800X3D gana"],stores:[{name:"SPDigital",price:"$549.990",url:"#",best:true,tag:null},{name:"PCFactory",price:"$559.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  impresoras: {
    icon: "🖨️", label: "Impresoras",
    subcategories: {
      hogar: {
        icon: "🏠", label: "Hogar", desc: "Documentos y tareas",
        axes: ["Costo/Página","Velocidad","WiFi","Escáner","Precio/Valor","Tamaño","Calidad"],
        bestValue: { name:"Epson EcoTank L3250",brand:"Epson",price:"$169.990",oneLiner:"Olvídate de comprar cartuchos para siempre.",why:"Tanque de tinta ~4,500 páginas incluidas. Se paga sola en 6 meses.",scores:{"Costo/Página":98,Velocidad:65,WiFi:85,Escáner:78,"Precio/Valor":90,Tamaño:72,Calidad:78},specs:[{label:"Tipo",value:"Tinta continua color"},{label:"Rendimiento",value:"~4,500 pág B&N"},{label:"WiFi",value:"Direct + AirPrint"},{label:"Escáner",value:"Flatbed"},{label:"Costo/pág",value:"~$2 CLP"},{label:"Velocidad",value:"15.5 ppm"}],pros:["$2 por página es casi gratis","Tinta para ~2 años","WiFi Direct"],cons:["Lenta vs láser","Foto no profesional","Tamaño considerable"],stores:[{name:"Falabella",price:"$169.990",url:"#",best:true,tag:"Despacho gratis"},{name:"Paris",price:"$174.990",url:"#",best:false,tag:null},{name:"Ripley",price:"$169.990",url:"#",best:false,tag:null}]},
        theBest: { name:"HP LaserJet Pro M234dwe",brand:"HP",price:"$189.990",oneLiner:"Láser. Rápida. Nítida. Nunca se seca.",why:"Tinta láser no se seca. 30ppm, auto-dúplex, WiFi.",scores:{"Costo/Página":75,Velocidad:90,WiFi:85,Escáner:82,"Precio/Valor":82,Tamaño:78,Calidad:88},specs:[{label:"Tipo",value:"Láser B&N"},{label:"Velocidad",value:"30 ppm"},{label:"Dúplex",value:"Automático"},{label:"WiFi",value:"Direct + AirPrint"},{label:"Escáner",value:"ADF 40 hojas"},{label:"Tóner",value:"~1,000 pág"}],pros:["30ppm oficina-speed","Tóner no se seca","ADF escaneo rápido"],cons:["Solo blanco y negro","HP+ requiere cuenta","Tóner caro"],stores:[{name:"Falabella",price:"$189.990",url:"#",best:true,tag:null},{name:"PCFactory",price:"$194.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  televisores: {
    icon: "📺", label: "Televisores",
    subcategories: {
      cine: {
        icon: "🎬", label: "Cine en Casa", desc: "Películas como en el cine",
        axes: ["Imagen","HDR","Sonido","Smart TV","Precio/Valor","Tamaño","Ángulos"],
        bestValue: { name:'LG C4 OLED 55"',brand:"LG",price:"$899.990",oneLiner:"OLED de verdad a precio de LED premium.",why:"OLED evo, Dolby Vision, 4x HDMI 2.1. El TV que cinéfilos compran.",scores:{Imagen:92,HDR:90,Sonido:72,"Smart TV":88,"Precio/Valor":85,Tamaño:78,"Ángulos":98},specs:[{label:"Panel",value:"OLED evo"},{label:"Resolución",value:"4K 120Hz"},{label:"HDR",value:"Dolby Vision + HDR10"},{label:"HDMI",value:"4x HDMI 2.1"},{label:"Procesador",value:"α9 Gen7 AI"},{label:"Smart",value:"webOS 24"}],pros:["OLED evo negros perfectos","4x HDMI 2.1","Dolby Vision + Atmos"],cons:["Sonido mediocre","55\" puede ser chico","Burn-in (mínimo)"],stores:[{name:"Falabella",price:"$899.990",url:"#",best:true,tag:"6 cuotas s/i"},{name:"Paris",price:"$929.990",url:"#",best:false,tag:null},{name:"Ripley",price:"$909.990",url:"#",best:false,tag:null}]},
        theBest: { name:'Samsung S95D OLED 65"',brand:"Samsung",price:"$1.999.990",oneLiner:"El televisor con mejor imagen del planeta.",why:"QD-OLED, anti-reflejo, 2000 nits HDR. Cada pixel perfecto.",scores:{Imagen:99,HDR:98,Sonido:82,"Smart TV":85,"Precio/Valor":60,Tamaño:88,"Ángulos":97},specs:[{label:"Panel",value:"QD-OLED"},{label:"Brillo",value:"2,000 nits HDR"},{label:"Anti-reflejo",value:"Matte display"},{label:"Procesador",value:"Neural Quantum 4K"},{label:"HDMI",value:"4x HDMI 2.1"},{label:"Sonido",value:"OTS+ Dolby Atmos"}],pros:["QD-OLED colores imposibles","Anti-reflejo","2000 nits HDR"],cons:["$1.999.990 inversión seria","Tizen no el mejor","Sin Dolby Vision"],stores:[{name:"Falabella",price:"$1.999.990",url:"#",best:true,tag:"12 cuotas s/i"},{name:"Paris",price:"$2.049.990",url:"#",best:false,tag:null},{name:"Samsung.com/cl",price:"$1.999.990",url:"#",best:false,tag:"Trade-in"}]},
      },
      gaming: {
        icon: "🎮", label: "Gaming", desc: "Input lag mínimo, 120Hz",
        axes: ["Input Lag","Refresh Rate","HDMI 2.1","VRR","Precio/Valor","Imagen","Tamaño"],
        bestValue: { name:'LG C4 OLED 42"',brand:"LG",price:"$699.990",oneLiner:"Monitor gamer OLED de 42\" disfrazado de televisor.",why:"OLED 120Hz, <1ms, G-Sync, FreeSync, 4x HDMI 2.1.",scores:{"Input Lag":95,"Refresh Rate":90,"HDMI 2.1":95,VRR:95,"Precio/Valor":88,Imagen:92,Tamaño:85},specs:[{label:"Panel",value:"OLED evo"},{label:"Input Lag",value:"<1ms"},{label:"VRR",value:"G-Sync + FreeSync"},{label:"HDMI",value:"4x HDMI 2.1"},{label:"Tamaño",value:'42"'},{label:"Refresh",value:"120Hz"}],pros:["<1ms input lag","4x HDMI 2.1","42\" perfecto escritorio"],cons:["42\" grande para monitor","Burn-in con HUD","Sonido TV malo"],stores:[{name:"Falabella",price:"$699.990",url:"#",best:true,tag:null},{name:"Paris",price:"$719.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$679.990",url:"#",best:false,tag:null}]},
        theBest: { name:'Samsung S90D OLED 55"',brand:"Samsung",price:"$1.299.990",oneLiner:"4K OLED 144Hz con Game Hub integrado.",why:"QD-OLED, 144Hz, FreeSync Premium Pro, cloud gaming.",scores:{"Input Lag":92,"Refresh Rate":96,"HDMI 2.1":95,VRR:95,"Precio/Valor":75,Imagen:95,Tamaño:88},specs:[{label:"Panel",value:"QD-OLED"},{label:"Refresh",value:"144Hz"},{label:"VRR",value:"FreeSync Premium Pro"},{label:"Game Hub",value:"Cloud gaming"},{label:"HDMI",value:"4x HDMI 2.1"},{label:"Input Lag",value:"<1ms"}],pros:["144Hz > 120Hz para PC","QD-OLED espectaculares","Game Hub Xbox Cloud"],cons:["$1.299.990","55\" requiere distancia","Sin Dolby Vision"],stores:[{name:"Samsung.com/cl",price:"$1.299.990",url:"#",best:true,tag:"Trade-in"},{name:"Falabella",price:"$1.349.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  monitores: {
    icon: "🖥️", label: "Monitores",
    subcategories: {
      gaming: {
        icon: "🎮", label: "Gaming", desc: "Frames y respuesta",
        axes: ["Refresh Rate","Response Time","Resolución","Panel","Precio/Valor","Ergonomía","HDR"],
        bestValue: { name:'LG 27GP850-B 27"',brand:"LG",price:"$289.990",oneLiner:"165Hz Nano IPS. El sweet spot gamer.",why:"1ms, colores precisos, G-Sync + FreeSync.",scores:{"Refresh Rate":90,"Response Time":92,Resolución:70,Panel:85,"Precio/Valor":92,Ergonomía:78,HDR:55},specs:[{label:"Panel",value:"Nano IPS"},{label:"Resolución",value:"2560x1440 165Hz"},{label:"Response",value:"1ms GtG"},{label:"VRR",value:"G-Sync + FreeSync"},{label:"Color",value:"98% DCI-P3"},{label:"HDR",value:"HDR 400"}],pros:["Nano IPS precisos","1ms real","165Hz suave"],cons:["QHD no 4K","HDR 400 básico","Sin USB hub"],stores:[{name:"PCFactory",price:"$289.990",url:"#",best:true,tag:"Mejor precio"},{name:"SPDigital",price:"$299.990",url:"#",best:false,tag:null},{name:"Falabella",price:"$309.990",url:"#",best:false,tag:null}]},
        theBest: { name:'Samsung Odyssey OLED G8 32"',brand:"Samsung",price:"$899.990",oneLiner:"OLED 240Hz. Game over.",why:"4K OLED, 0.03ms, HDR True Black, 240Hz.",scores:{"Refresh Rate":97,"Response Time":99,Resolución:92,Panel:98,"Precio/Valor":52,Ergonomía:75,HDR:96},specs:[{label:"Panel",value:"QD-OLED"},{label:"Resolución",value:"3840x2160 240Hz"},{label:"Response",value:"0.03ms"},{label:"HDR",value:"True Black 400"},{label:"Tamaño",value:'32"'},{label:"Curva",value:"1800R"}],pros:["0.03ms instantáneo","4K 240Hz OLED endgame","QD-OLED espectaculares"],cons:["$899.990 premium","Burn-in risk","1800R no para todos"],stores:[{name:"Samsung.com/cl",price:"$899.990",url:"#",best:true,tag:null},{name:"Falabella",price:"$949.990",url:"#",best:false,tag:null},{name:"PCFactory",price:"$919.990",url:"#",best:false,tag:null}]},
      },
      oficina: {
        icon: "🏢", label: "Oficina", desc: "Sin fatiga visual",
        axes: ["Resolución","Ergonomía","Conectividad","Flicker-Free","Precio/Valor","Color","Tamaño"],
        bestValue: { name:'Dell S2722QC 27"',brand:"Dell",price:"$249.990",oneLiner:"4K + USB-C + 65W carga. Reemplaza tu dock.",why:"Un cable: pantalla + carga + datos.",scores:{Resolución:90,Ergonomía:85,Conectividad:92,"Flicker-Free":88,"Precio/Valor":95,Color:78,Tamaño:75},specs:[{label:"Resolución",value:"4K UHD"},{label:"Panel",value:"IPS"},{label:"USB-C",value:"65W PD"},{label:"Ergonomía",value:"Altura, tilt, pivot"},{label:"Altavoces",value:"2x 3W"},{label:"Tamaño",value:'27"'}],pros:["USB-C 65W un cable","4K por $249.990","Ergonomía completa"],cons:["60Hz only","Altavoces mediocres","Colores no P3"],stores:[{name:"Falabella",price:"$249.990",url:"#",best:true,tag:"Despacho gratis"},{name:"PCFactory",price:"$259.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$239.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Apple Studio Display",brand:"Apple",price:"$1.499.990",oneLiner:"5K. P3 Wide Color. Texto como papel.",why:"218 PPI, 600 nits, webcam 12MP.",scores:{Resolución:98,Ergonomía:65,Conectividad:72,"Flicker-Free":90,"Precio/Valor":35,Color:98,Tamaño:78},specs:[{label:"Resolución",value:"5K 5120x2880"},{label:"PPI",value:"218"},{label:"Color",value:"P3 Wide"},{label:"Brillo",value:"600 nits"},{label:"Webcam",value:"12MP Center Stage"},{label:"Altavoces",value:"6 Spatial Audio"}],pros:["218 PPI otra dimensión","P3 Wide Color","Center Stage"],cons:["$1.499.990 sin soporte ajustable","Solo TB3","VESA extra"],stores:[{name:"Mac Online",price:"$1.499.990",url:"#",best:true,tag:null},{name:"iShop",price:"$1.499.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  parlantes: {
    icon: "🔊", label: "Parlantes",
    subcategories: {
      portatil: {
        icon: "🎒", label: "Portátil", desc: "Resistente, a todo lado",
        axes: ["Sonido","Batería","Resistencia","Portabilidad","Precio/Valor","Bluetooth","Bajos"],
        bestValue: { name:"JBL Flip 6",brand:"JBL",price:"$79.990",oneLiner:"IP67, 12 horas. El estándar portátil.",why:"Sumergible, 12h, PartyBoost. Suena grande para su tamaño.",scores:{Sonido:80,Batería:85,Resistencia:92,Portabilidad:90,"Precio/Valor":90,Bluetooth:82,Bajos:75},specs:[{label:"IP",value:"IP67"},{label:"Batería",value:"12 horas"},{label:"BT",value:"5.1"},{label:"Peso",value:"550g"},{label:"Driver",value:"Racetrack + tweeter"},{label:"Feature",value:"PartyBoost"}],pros:["IP67 playa/ducha/pool","12h batería real","PartyBoost emparejar"],cons:["Sin AUX input","Bajos no compiten con UE Boom","App innecesaria"],stores:[{name:"Falabella",price:"$79.990",url:"#",best:true,tag:null},{name:"Paris",price:"$84.990",url:"#",best:false,tag:null},{name:"Ripley",price:"$79.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Sonos Roam 2",brand:"Sonos",price:"$149.990",oneLiner:"WiFi + Bluetooth + Sonos ecosystem en tu bolsillo.",why:"Único portátil que suena bien afuera Y se integra con Sonos en casa.",scores:{Sonido:88,Batería:78,Resistencia:85,Portabilidad:88,"Precio/Valor":72,Bluetooth:90,Bajos:82},specs:[{label:"IP",value:"IP67"},{label:"Batería",value:"10 horas"},{label:"Conexión",value:"WiFi + BT 5.2"},{label:"Peso",value:"430g"},{label:"Trueplay",value:"Auto-EQ"},{label:"Ecosistema",value:"Sonos"}],pros:["WiFi + BT dos mundos","Trueplay auto-EQ","Integra con Sonos"],cons:["$149.990 portátil","10h < JBL Flip","Sonos app problemas"],stores:[{name:"Amazon",price:"$149.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$159.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  camarasfoto: {
    icon: "📷", label: "Cámaras Foto",
    subcategories: {
      principiante: {
        icon: "🌱", label: "Principiante", desc: "Tu primera cámara real",
        axes: ["Facilidad","Calidad Foto","Video","Autofocus","Precio/Valor","Peso","Lentes"],
        bestValue: { name:"Fujifilm X-T50",brand:"Fujifilm",price:"$1.199.990",oneLiner:"Film simulations que hacen fotos pro sin Lightroom.",why:"40MP, IBIS, dial de film simulations. La más intuitiva para aprender.",scores:{Facilidad:90,"Calidad Foto":88,Video:78,Autofocus:82,"Precio/Valor":80,Peso:88,Lentes:85},specs:[{label:"Sensor",value:"40.2MP APS-C"},{label:"IBIS",value:"7 stops"},{label:"Film Sim",value:"20 presets"},{label:"Video",value:"6.2K 30fps"},{label:"Peso",value:"438g"},{label:"AF",value:"Phase + face/eye"}],pros:["Film sim = fotos lindas sin editar","40MP para crop","Dial film sim genial"],cons:["$1.199.990 solo cuerpo","Single SD","~300 disparos batería"],stores:[{name:"Amazon",price:"$1.199.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$1.249.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Sony a6700",brand:"Sony",price:"$1.199.990",oneLiner:"El AF más avanzado en APS-C.",why:"26MP, AI AF, 4K 120fps, 5-axis IBIS. Tecnología de a7 en cuerpo compacto.",scores:{Facilidad:75,"Calidad Foto":85,Video:92,Autofocus:96,"Precio/Valor":78,Peso:85,Lentes:98},specs:[{label:"Sensor",value:"26.1MP APS-C"},{label:"AF",value:"AI subject recognition"},{label:"Video",value:"4K 120fps"},{label:"IBIS",value:"5-axis"},{label:"Peso",value:"493g"},{label:"Montura",value:"Sony E"}],pros:["AI AF nunca pierde sujeto","4K 120fps slow-mo","Catálogo Sony E infinito"],cons:["Menú Sony curva aprendizaje","Colores clínicos","$1.199.990 solo cuerpo"],stores:[{name:"Amazon",price:"$1.199.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$1.259.990",url:"#",best:false,tag:null}]},
      },
      profesional: {
        icon: "🏆", label: "Profesional", desc: "Full frame, sin compromisos",
        axes: ["Calidad Foto","Autofocus","Dinámico","Build Quality","Video","Batería","Lentes"],
        bestValue: { name:"Sony a7 IV",brand:"Sony",price:"$2.149.990",oneLiner:"Full frame más completo bajo $2.200.000.",why:"33MP, 4K 60fps, AI AF, dual SD. El workhorse.",scores:{"Calidad Foto":88,Autofocus:92,"Dinámico":88,"Build Quality":82,Video:85,Batería:85,Lentes:98},specs:[{label:"Sensor",value:"33MP Full Frame"},{label:"AF",value:"AI real-time"},{label:"Video",value:"4K 60fps 10-bit"},{label:"Slots",value:"Dual SD UHS-II"},{label:"Batería",value:"~580 disparos"},{label:"Montura",value:"Sony FE"}],pros:["33MP sweet spot","AI AF de a7R V","Dual slot backup"],cons:["$2.149.990 solo cuerpo","Pantalla no articulated","Menús Sony"],stores:[{name:"Amazon",price:"$2.149.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$2.249.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Sony a7R V",brand:"Sony",price:"$3.499.990",oneLiner:"61MP. AI AF dedicado. La cámara definitiva.",why:"61MP, chip AI dedicado, 8-stop IBIS.",scores:{"Calidad Foto":99,Autofocus:96,"Dinámico":95,"Build Quality":90,Video:82,Batería:82,Lentes:98},specs:[{label:"Sensor",value:"61MP Full Frame BSI"},{label:"AF",value:"AI chip dedicado"},{label:"IBIS",value:"8 stops"},{label:"Video",value:"8K 24fps / 4K 60fps"},{label:"Batería",value:"~530 disparos"},{label:"EVF",value:"9.44M dots OLED"}],pros:["61MP impresión y crop infinitos","AI AF dedicado","8-stop IBIS baja luz"],cons:["$3.499.990 inversión","Archivos 120MB","8K calor"],stores:[{name:"Amazon",price:"$3.499.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$3.649.990",url:"#",best:false,tag:null}]},
      },
    },
  },
  camarasvideo: {
    icon: "🎥", label: "Cámaras Video",
    subcategories: {
      youtube: {
        icon: "▶️", label: "YouTube", desc: "Contenido, vlogs, streaming",
        axes: ["Autofocus","Estabilización","Pantalla","Audio","Precio/Valor","Video","Peso"],
        bestValue: { name:"Sony ZV-E10 II",brand:"Sony",price:"$749.990",oneLiner:"Sony diseñó esta escuchando a YouTubers.",why:"AI AF, product showcase mode, mic direccional, pantalla flip.",scores:{Autofocus:90,Estabilización:78,Pantalla:92,Audio:85,"Precio/Valor":88,Video:82,Peso:90},specs:[{label:"Sensor",value:"26MP APS-C"},{label:"Video",value:"4K 60fps"},{label:"AF",value:"AI tracking"},{label:"Pantalla",value:"Flip-out touch"},{label:"Mic",value:"3-capsule"},{label:"Peso",value:"377g"}],pros:["Product showcase para reviews","Pantalla flip vlogear","Mic integrado bueno"],cons:["Sin IBIS","Crop en 4K 60fps","Rolling shutter"],stores:[{name:"Amazon",price:"$749.990",url:"#",best:true,tag:"Kit 16-50mm"},{name:"MercadoLibre",price:"$799.990",url:"#",best:false,tag:null}]},
        theBest: { name:"Sony a7C II",brand:"Sony",price:"$1.899.990",oneLiner:"Full frame en cuerpo de vlogger.",why:"33MP full frame, 5-axis IBIS, AI AF, 4K 60fps.",scores:{Autofocus:95,Estabilización:90,Pantalla:88,Audio:78,"Precio/Valor":72,Video:90,Peso:80},specs:[{label:"Sensor",value:"33MP Full Frame"},{label:"Video",value:"4K 60fps 10-bit"},{label:"IBIS",value:"5-axis 7 stops"},{label:"AF",value:"AI subject"},{label:"Pantalla",value:"Articulating"},{label:"Peso",value:"514g"}],pros:["Full frame compacto","5-axis IBIS smooth","AI AF nunca pierde"],cons:["$1.899.990 solo cuerpo","Single SD","Pantalla no full flip"],stores:[{name:"Amazon",price:"$1.899.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$1.999.990",url:"#",best:false,tag:null}]},
      },
      accion: {
        icon: "🏔️", label: "Acción", desc: "Aventura, deportes extremos",
        axes: ["Estabilización","Resistencia","Video","Facilidad","Precio/Valor","Batería","Tamaño"],
        bestValue: { name:"GoPro Hero 13 Black",brand:"GoPro",price:"$349.990",oneLiner:"La cámara de acción que definió la categoría.",why:"HyperSmooth 6.0, 5.3K 60fps, waterproof 10m.",scores:{Estabilización:95,Resistencia:95,Video:85,Facilidad:88,"Precio/Valor":82,Batería:68,Tamaño:90},specs:[{label:"Video",value:"5.3K 60fps"},{label:"Estab.",value:"HyperSmooth 6.0"},{label:"Waterproof",value:"10m"},{label:"GPS",value:"Integrado"},{label:"Peso",value:"154g"},{label:"Pantalla",value:"Frontal + trasera"}],pros:["HyperSmooth 6.0 absurdo","5.3K crop/reframe","Mounts enorme"],cons:["~1.5h batería 5.3K","Sobrecalentamiento","Suscripción GoPro"],stores:[{name:"Falabella",price:"$349.990",url:"#",best:true,tag:null},{name:"Paris",price:"$359.990",url:"#",best:false,tag:null},{name:"MercadoLibre",price:"$339.990",url:"#",best:false,tag:"Vendedor destacado"}]},
        theBest: { name:"DJI Osmo Action 5 Pro",brand:"DJI",price:"$399.990",oneLiner:"GoPro killer. Mejor batería, mejor low-light.",why:'Sensor 1/1.3", 1950mAh, waterproof 20m.',scores:{Estabilización:96,Resistencia:98,Video:90,Facilidad:85,"Precio/Valor":78,Batería:88,Tamaño:85},specs:[{label:"Sensor",value:'1/1.3" CMOS'},{label:"Video",value:"4K 120fps"},{label:"Waterproof",value:"20m"},{label:"Batería",value:"1950mAh (~3h)"},{label:"Estab.",value:"RockSteady 3.0+"},{label:"Peso",value:"145g"}],pros:["1950mAh doble de GoPro","20m waterproof","Sensor grande low light"],cons:["Mounts menor ecosistema","4K max no 5.3K","App DJI buggy"],stores:[{name:"Amazon",price:"$399.990",url:"#",best:true,tag:"Envío a Chile"},{name:"MercadoLibre",price:"$419.990",url:"#",best:false,tag:null}]},
      },
    },
  },
};
