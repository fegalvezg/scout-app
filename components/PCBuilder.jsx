"use client";
import { useState } from "react";

const C = {
  bg:"#FFFFFF", card:"#F7F7F8", cardHover:"#F0F0F2", border:"#E2E2E6", borderLight:"#ECECEF",
  primary:"#1A1A1A", accent:"#2563EB", entry:"#16A34A", balanced:"#2563EB", pro:"#EA580C",
  text:"#1A1A1A", textSec:"#6B6B73", textMuted:"#9D9DA5",
};

// ── Orden de pasos ─────────────────────────────────────────
const BUILD_ORDER = ["cpu","motherboard","ram","gpu","psu","case","cooler","storage"];

const COMP_META = {
  cpu:         { icon:"🧠", label:"Procesador (CPU)",      short:"CPU"      },
  motherboard: { icon:"🖥️", label:"Tarjeta Madre",         short:"Mobo"     },
  ram:         { icon:"💾", label:"Memoria RAM",            short:"RAM"      },
  gpu:         { icon:"🎮", label:"Tarjeta Gráfica (GPU)", short:"GPU"      },
  psu:         { icon:"⚡", label:"Fuente de Poder (PSU)", short:"PSU"      },
  case:        { icon:"📦", label:"Gabinete",               short:"Gabinete" },
  cooler:      { icon:"❄️", label:"Refrigeración",          short:"Cooler"   },
  storage:     { icon:"💿", label:"Almacenamiento",         short:"Storage"  },
};

// ── Preguntas de dependencia para Flujo 2 ──────────────────
const FIND_DEPS = {
  cpu: [
    { key:"mobo_socket", label:"Socket de tu Mobo", question:"¿Qué socket tiene tu motherboard actual?",
      options:{ LGA1700:{label:"LGA 1700",desc:"Intel 12va-14va Gen"}, LGA1851:{label:"LGA 1851",desc:"Intel 15va Gen"}, AM5:{label:"AM5",desc:"AMD Ryzen 7000/9000"}, AM4:{label:"AM4",desc:"AMD Ryzen 5000 y ant."} }
    },
    { key:"ram_type", label:"Tipo de RAM", question:"¿Qué tipo de RAM tienes?",
      options:{ DDR4:{label:"DDR4",desc:"Intel 12va gen o AMD AM4"}, DDR5:{label:"DDR5",desc:"Intel 13va+ gen o AMD AM5"} }
    },
  ],
  motherboard: [
    { key:"cpu_platform", label:"Tu CPU", question:"¿Qué CPU tienes o planeas comprar?",
      options:{ intel_14:{label:"Intel 12va-14va Gen",desc:"LGA 1700"}, intel_15:{label:"Intel 15va Gen",desc:"LGA 1851"}, amd_7000:{label:"AMD Ryzen 7000/9000",desc:"AM5"}, amd_5000:{label:"AMD Ryzen 5000",desc:"AM4"} }
    },
    { key:"case_size", label:"Tu Gabinete", question:"¿Qué tamaño de gabinete tienes?",
      options:{ full:{label:"Full Tower",desc:"Cabe ATX, mATX, ITX"}, mid:{label:"Mid Tower",desc:"Cabe ATX, mATX, ITX"}, mini:{label:"Mini Tower",desc:"Solo mATX e ITX"}, sff:{label:"SFF",desc:"Solo Mini-ITX"} }
    },
  ],
  ram: [
    { key:"cpu_platform", label:"Tu CPU", question:"¿Qué CPU tienes? (determina DDR4 o DDR5)",
      options:{ intel_14:{label:"Intel 12va-14va Gen",desc:"Compatible DDR4 y DDR5"}, intel_15:{label:"Intel 15va Gen",desc:"Solo DDR5"}, amd_7000:{label:"AMD Ryzen 7000/9000",desc:"Solo DDR5"}, amd_5000:{label:"AMD Ryzen 5000 y ant.",desc:"Solo DDR4"} }
    },
  ],
  gpu: [
    { key:"psu_watts", label:"Tu Fuente de Poder", question:"¿Cuántos watts tiene tu fuente de poder?",
      options:{ w400:{label:"Menos de 400W",desc:"Solo GPUs de entrada"}, w550:{label:"400W – 549W",desc:"GPUs entrada y media baja"}, w700:{label:"550W – 699W",desc:"Hasta gama media"}, w850:{label:"700W – 849W",desc:"Hasta gama alta"}, w1000:{label:"850W o más",desc:"Incluye entusiastas"} }
    },
    { key:"case_gpu", label:"Tu Gabinete", question:"¿Qué tamaño de gabinete tienes?",
      options:{ full:{label:"Full Tower",desc:"Cabe GPU hasta 420mm"}, mid:{label:"Mid Tower",desc:"GPU hasta ~360mm"}, mini:{label:"Mini Tower",desc:"GPU hasta ~290mm"}, sff:{label:"SFF",desc:"GPU hasta ~200mm"} }
    },
  ],
  psu: [
    { key:"gpu_level", label:"Tu GPU", question:"¿Qué nivel de GPU tienes o planeas comprar?",
      options:{ entry:{label:"Entrada",desc:"RX 6600, RTX 4060 · <150W"}, mid:{label:"Gama Media",desc:"RX 7700 XT, RTX 4060 Ti · ~200W"}, high:{label:"Gama Alta",desc:"RTX 4070 Super, RX 7900 XT · ~250W"}, enthusiast:{label:"Entusiasta",desc:"RTX 4090, RX 7900 XTX · ~400W"} }
    },
    { key:"mobo_ff", label:"Form Factor Mobo", question:"¿Qué form factor tiene tu motherboard?",
      options:{ atx:{label:"ATX",desc:"Usa PSU ATX estándar"}, matx:{label:"Micro-ATX",desc:"Usa PSU ATX o SFX"}, itx:{label:"Mini-ITX",desc:"Puede necesitar PSU SFX"} }
    },
  ],
  case: [
    { key:"mobo_ff", label:"Form Factor Mobo", question:"¿Qué form factor tiene tu motherboard?",
      options:{ atx:{label:"ATX",desc:"Requiere Full o Mid Tower"}, matx:{label:"Micro-ATX",desc:"Mid Tower o Mini Tower"}, itx:{label:"Mini-ITX",desc:"Mini Tower o SFF"} }
    },
  ],
  cooler: [
    { key:"cpu_platform", label:"Tu CPU", question:"¿Qué CPU tienes? (para verificar socket)",
      options:{ intel_14:{label:"Intel 12va-14va Gen",desc:"Socket LGA 1700"}, intel_15:{label:"Intel 15va Gen",desc:"Socket LGA 1851"}, amd_7000:{label:"AMD Ryzen 7000/9000",desc:"Socket AM5"}, amd_5000:{label:"AMD Ryzen 5000 y ant.",desc:"Socket AM4"} }
    },
  ],
  storage: [
    { key:"has_m2", label:"Slots M.2 disponibles", question:"¿Tu motherboard tiene slots M.2 disponibles?",
      options:{ yes:{label:"Sí, tiene M.2",desc:"Compatible con NVMe y SATA M.2"}, no:{label:"No tiene M.2",desc:"Solo puertos SATA disponibles"} }
    },
  ],
};

// ── Helpers de compatibilidad ──────────────────────────────
function getDDRForCPU(cpuPlatform) {
  if (!cpuPlatform) return null;
  if (cpuPlatform === "amd_5000") return "DDR4";
  if (cpuPlatform === "intel_14") return null; // soporta ambas
  return "DDR5"; // intel_15, amd_7000
}

function getSocketForCPU(cpuPlatform) {
  const map = { intel_14:"LGA1700", intel_15:"LGA1851", amd_7000:"AM5", amd_5000:"AM4" };
  return map[cpuPlatform] || null;
}

// Resuelve qué entry/balanced/proRef mostrar para cada componente según las selecciones del Flujo 1
function resolveProducts(components, compKey, selections) {
  const comp = components[compKey];
  const sel = selections[compKey];
  if (!comp || !sel) return null;
  const opt = comp.options[sel];
  if (!opt) return null;

  const axes = comp.axes;

  if (compKey === "cpu") {
    return { entry:opt.entry, balanced:opt.balanced, proRef:opt.proRef, axes };
  }
  if (compKey === "motherboard") {
    const cpu = selections.cpu;
    const bp = opt.byPlatform?.[cpu];
    if (!bp) return { entry:opt.byPlatform?.intel_14?.entry||null, balanced:opt.byPlatform?.intel_14?.balanced||null, proRef:null, axes };
    return { entry:bp.entry, balanced:bp.balanced, proRef:bp.proRef, axes };
  }
  if (compKey === "ram") {
    const cpu = selections.cpu;
    let ddr = getDDRForCPU(cpu);
    // intel_14 soporta ambas — usar DDR5 como default (más futuro)
    if (!ddr) ddr = "DDR5";
    const byDDR = opt.byDDR?.[ddr];
    if (!byDDR) return null;
    return { entry:byDDR.entry, balanced:byDDR.balanced, proRef:byDDR.proRef, axes, ddrNote: ddr };
  }
  if (compKey === "psu") {
    const gpu = selections.gpu;
    const byGPU = opt.byGPU?.[gpu];
    if (!byGPU) return null;
    return { entry:byGPU.entry, balanced:byGPU.balanced, proRef:byGPU.proRef, axes, watts:byGPU.watts };
  }
  // case, cooler, gpu, storage — directo
  return { entry:opt.entry, balanced:opt.balanced, proRef:opt.proRef, axes };
}

// Filtro de opciones para Flujo 2
function filterOptions(compKey, opts, depAnswers) {
  const compatible = {};
  Object.entries(opts).forEach(([k, v]) => {
    let ok = true;
    if (compKey === "cpu") {
      const socket = depAnswers.mobo_socket;
      const ramType = depAnswers.ram_type;
      if (socket) {
        const socketMap = { intel_14:"LGA1700", intel_15:"LGA1851", amd_7000:"AM5", amd_5000:"AM4" };
        if (socketMap[k] !== socket) ok = false;
      }
      if (ramType && ok) {
        const ramMap = { intel_14:["DDR4","DDR5"], intel_15:["DDR5"], amd_7000:["DDR5"], amd_5000:["DDR4"] };
        if (!ramMap[k]?.includes(ramType)) ok = false;
      }
    }
    if (compKey === "motherboard") {
      const cpu = depAnswers.cpu_platform;
      const caseSize = depAnswers.case_size;
      const caseCompat = { atx:["full","mid"], matx:["mid","mini"], itx:["mini","sff"] };
      if (cpu) {
        const socketMap = { intel_14:"LGA1700", intel_15:"LGA1851", amd_7000:"AM5", amd_5000:"AM4" };
        // Check if this mobo form factor has support for the CPU platform
        if (!v.byPlatform?.[cpu]) ok = false;
      }
      if (caseSize && ok) {
        if (!caseCompat[k]?.includes(caseSize)) ok = false;
      }
    }
    if (compKey === "gpu") {
      const watts = depAnswers.psu_watts;
      const caseSize = depAnswers.case_gpu;
      const minWatts = { entry:400, mid:550, high:700, enthusiast:850 };
      const maxLen = { full:420, mid:360, mini:290, sff:200 };
      const wattMap = { w400:400, w550:550, w700:700, w850:850, w1000:1000 };
      if (watts && wattMap[watts] < (minWatts[k] || 0)) ok = false;
      if (caseSize && v.maxLength > (maxLen[caseSize] || 9999)) ok = false;
    }
    if (compKey === "case") {
      const ff = depAnswers.mobo_ff;
      const ffCompat = { atx:["full","mid"], matx:["full","mid","mini"], itx:["full","mid","mini","sff"] };
      if (ff && !ffCompat[ff]?.includes(k)) ok = false;
    }
    if (compKey === "psu") {
      const gpu = depAnswers.gpu_level;
      // Todas las certificaciones son válidas para cualquier GPU; solo filtrar si queremos SFX
      // No filtrar PSU options (bronze/gold/platinum), son elección de calidad
    }
    if (ok) compatible[k] = v;
  });
  return compatible;
}

// ── Mini card de producto ──────────────────────────────────
function MiniProductCard({ product, tier, axes, onDetail }) {
  const color = tier === "entry" ? C.entry : tier === "balanced" ? C.balanced : C.pro;
  const badge = tier === "entry" ? "BUENO, BONITO Y BARATO" : tier === "balanced" ? "EL RECOMENDADO" : "REFERENCIA PRO";
  const sub = tier === "entry" ? "Gasta poco, llévate algo bueno" : tier === "balanced" ? "Lo que Skaut elegiría" : "Si el dinero no importa";

  return (
    <div style={{ flex:"1 1 200px", background:"#FFF", borderRadius:"12px", border:`1.5px solid ${color}25`, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
      <div style={{ background:`${color}08`, borderBottom:`1px solid ${color}15`, padding:"10px 14px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontSize:"8px", fontWeight:800, letterSpacing:"2px", color, fontFamily:"'JetBrains Mono',monospace" }}>{badge}</div>
          <div style={{ fontSize:"9px", color:C.textMuted, marginTop:"1px" }}>{sub}</div>
        </div>
        <div style={{ background:color, color:"#FFF", fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", fontWeight:800, padding:"4px 10px", borderRadius:"6px", whiteSpace:"nowrap" }}>{product.price}</div>
      </div>
      <div style={{ padding:"12px 14px" }}>
        <div style={{ fontSize:"9px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", marginBottom:"2px" }}>{product.brand}</div>
        <div style={{ fontSize:"13px", fontWeight:700, color:C.text, lineHeight:1.3, marginBottom:"6px" }}>{product.name}</div>
        <div style={{ fontSize:"11px", color:C.textSec, lineHeight:1.5, marginBottom:"10px" }}>{product.oneLiner}</div>
        <div style={{ display:"flex", flexDirection:"column", gap:"4px", marginBottom:"10px" }}>
          {product.pros?.slice(0,2).map((p,i) => (
            <div key={i} style={{ display:"flex", gap:"6px", alignItems:"flex-start" }}>
              <span style={{ color:C.entry, fontSize:"9px", marginTop:"2px", flexShrink:0 }}>✓</span>
              <span style={{ fontSize:"10px", color:C.textSec, lineHeight:1.4 }}>{p}</span>
            </div>
          ))}
        </div>
        <button onClick={() => onDetail({ product, tier, axes })} style={{ width:"100%", padding:"8px", background:`${color}08`, border:`1.5px solid ${color}20`, borderRadius:"8px", cursor:"pointer", fontSize:"10px", fontWeight:700, color, fontFamily:"'Space Grotesk',sans-serif", transition:"all 0.15s" }}>
          Ver specs y tiendas →
        </button>
      </div>
    </div>
  );
}

// ── Modal de detalle ───────────────────────────────────────
function DetailModal({ data, onClose }) {
  if (!data) return null;
  const { product, tier, axes } = data;
  const color = tier === "entry" ? C.entry : tier === "balanced" ? C.balanced : C.pro;
  const badge = tier === "entry" ? "BUENO, BONITO Y BARATO" : tier === "balanced" ? "EL RECOMENDADO" : "REFERENCIA PRO";

  return (
    <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(8px)", zIndex:1000, overflowY:"auto", animation:"fadeIn 0.25s ease" }} onClick={onClose}>
      <div style={{ maxWidth:"680px", margin:"20px auto", padding:"0 16px" }} onClick={e => e.stopPropagation()}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:color }} />
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px", color, fontFamily:"'JetBrains Mono',monospace" }}>{badge}</span>
          </div>
          <button onClick={onClose} style={{ background:"#FFF", border:`1px solid ${C.border}`, borderRadius:"8px", padding:"6px 14px", color:C.textSec, fontSize:"12px", cursor:"pointer", fontFamily:"'Space Grotesk',sans-serif" }}>✕ Cerrar</button>
        </div>
        <div style={{ background:"#FFF", borderRadius:"16px", border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.12)" }}>
          <div style={{ padding:"22px 24px 16px", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"12px" }}>
              <div>
                <div style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", marginBottom:"4px" }}>{product.brand}</div>
                <h2 style={{ margin:"0 0 6px", fontSize:"20px", fontWeight:700, letterSpacing:"-0.5px", color:C.text }}>{product.name}</h2>
                <p style={{ margin:0, fontSize:"13px", color:C.textSec, lineHeight:1.5, maxWidth:"360px" }}>{product.oneLiner}</p>
              </div>
              <div style={{ background:color, color:"#FFF", fontFamily:"'JetBrains Mono',monospace", fontSize:"17px", fontWeight:800, padding:"7px 18px", borderRadius:"10px" }}>{product.price}</div>
            </div>
          </div>
          <div style={{ padding:"18px 24px", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", marginBottom:"10px" }}>ESPECIFICACIONES</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px" }}>
              {product.specs?.map((s,i) => (
                <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:`1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>{s.label}</span>
                  <span style={{ fontSize:"10px", color:C.text, fontWeight:600, textAlign:"right", maxWidth:"55%" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ padding:"16px 20px", borderRight:`1px solid ${C.border}` }}>
              <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:"#16A34A", fontFamily:"'JetBrains Mono',monospace", marginBottom:"8px" }}>✓ POR QUÉ SÍ</div>
              {product.pros?.map((p,i) => (
                <div key={i} style={{ display:"flex", gap:"7px", marginBottom:"7px" }}>
                  <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"#16A34A", marginTop:"6px", flexShrink:0 }} />
                  <span style={{ fontSize:"11px", color:C.textSec, lineHeight:1.5 }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ padding:"16px 20px" }}>
              <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:"#DC2626", fontFamily:"'JetBrains Mono',monospace", marginBottom:"8px" }}>✗ POR QUÉ NO</div>
              {product.cons?.map((c,i) => (
                <div key={i} style={{ display:"flex", gap:"7px", marginBottom:"7px" }}>
                  <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"#DC2626", marginTop:"6px", flexShrink:0 }} />
                  <span style={{ fontSize:"11px", color:C.textSec, lineHeight:1.5 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:"16px 24px", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color, fontFamily:"'JetBrains Mono',monospace", marginBottom:"10px" }}>DÓNDE COMPRARLO</div>
            {product.stores?.map((s,i) => (
              <a key={i} href={s.url} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:s.best?`${color}08`:"#FAFAFA", border:`1.5px solid ${s.best?color+"33":C.border}`, borderRadius:"9px", padding:"10px 14px", marginBottom:"6px", textDecoration:"none", cursor:"pointer", transition:"all 0.15s" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ fontSize:"13px", fontWeight:700, color:C.text }}>{s.name}</span>
                  {s.tag && <span style={{ fontSize:"9px", fontWeight:700, color:s.best?color:C.textMuted, background:s.best?`${color}12`:`${C.textMuted}12`, padding:"2px 7px", borderRadius:"4px", fontFamily:"'JetBrains Mono',monospace" }}>{s.tag}</span>}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                  <span style={{ fontSize:"14px", fontWeight:800, color:s.best?color:C.text, fontFamily:"'JetBrains Mono',monospace" }}>{s.price}</span>
                  <span style={{ color:C.textMuted }}>→</span>
                </div>
              </a>
            ))}
            <div style={{ marginTop:"8px", fontSize:"9px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", textAlign:"center" }}>Skaut puede recibir comisión — esto no afecta nuestras recomendaciones.</div>
          </div>
          <div style={{ padding:"16px 24px", background:`${color}05` }}>
            <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color, fontFamily:"'JetBrains Mono',monospace", marginBottom:"6px" }}>VEREDICTO SKAUT</div>
            <p style={{ margin:0, fontSize:"12px", lineHeight:1.7, color:C.textSec }}>{product.why}</p>
          </div>
        </div>
        <div style={{ height:"28px" }} />
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────
export default function PCBuilder({ data, onBack }) {
  const components = data.components;

  // Estado flujo
  const [flow, setFlow] = useState(null); // null | 'build' | 'find'

  // Flujo 1: Armar PC
  const [buildStep, setBuildStep] = useState(0);
  const [buildSelections, setBuildSelections] = useState({});
  const [buildResults, setBuildResults] = useState(false);

  // Flujo 2: Buscar componente
  const [findTarget, setFindTarget] = useState(null);
  const [findDepIdx, setFindDepIdx] = useState(0);
  const [findAnswers, setFindAnswers] = useState({});
  const [findResults, setFindResults] = useState(false);

  // Modal de detalle
  const [detail, setDetail] = useState(null);

  // ── Handlers Flujo 1 ────────────────────────────────────
  function selectBuildOption(optKey) {
    const compKey = BUILD_ORDER[buildStep];
    const newSel = { ...buildSelections, [compKey]: optKey };
    setBuildSelections(newSel);
    if (buildStep < BUILD_ORDER.length - 1) {
      setBuildStep(buildStep + 1);
    } else {
      setBuildResults(true);
    }
  }

  function resetBuild() {
    setBuildStep(0);
    setBuildSelections({});
    setBuildResults(false);
    setFlow(null);
  }

  function backBuild() {
    if (buildResults) { setBuildResults(false); return; }
    if (buildStep > 0) { setBuildStep(buildStep - 1); } else { setFlow(null); }
  }

  // ── Handlers Flujo 2 ────────────────────────────────────
  function selectFindTarget(compKey) {
    setFindTarget(compKey);
    setFindDepIdx(0);
    setFindAnswers({});
    setFindResults(false);
  }

  function answerDep(key, value) {
    const newAnswers = { ...findAnswers, [key]: value };
    setFindAnswers(newAnswers);
    const deps = FIND_DEPS[findTarget] || [];
    if (findDepIdx < deps.length - 1) {
      setFindDepIdx(findDepIdx + 1);
    } else {
      setFindResults(true);
    }
  }

  function skipDep() {
    const deps = FIND_DEPS[findTarget] || [];
    if (findDepIdx < deps.length - 1) {
      setFindDepIdx(findDepIdx + 1);
    } else {
      setFindResults(true);
    }
  }

  function resetFind() {
    setFindTarget(null);
    setFindDepIdx(0);
    setFindAnswers({});
    setFindResults(false);
    setFlow(null);
  }

  function backFind() {
    if (findResults) { setFindResults(false); return; }
    if (findDepIdx > 0) { setFindDepIdx(findDepIdx - 1); } else if (findTarget) { setFindTarget(null); } else { setFlow(null); }
  }

  // ── Derivados ────────────────────────────────────────────
  const canGoBack = flow !== null;

  function handleBack() {
    if (flow === "build") backBuild();
    else if (flow === "find") backFind();
    else onBack();
  }

  // ── Render: Selección de Flujo ───────────────────────────
  if (!flow) {
    return (
      <div style={{ animation:"fadeIn 0.4s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />
        <div style={{ textAlign:"center", marginBottom:"32px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", fontSize:"26px", fontWeight:700, letterSpacing:"-0.8px", color:C.text }}>
            <span>🔧</span> Componentes PC
          </div>
          <p style={{ fontSize:"14px", color:C.textSec, margin:"8px 0 0" }}>¿Qué necesitas hacer hoy?</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"16px", maxWidth:"700px", margin:"0 auto" }}>
          <button onClick={() => setFlow("build")} style={{ background:"#FFF", border:`2px solid ${C.accent}20`, borderRadius:"16px", padding:"28px 24px", cursor:"pointer", textAlign:"left", transition:"all 0.15s", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize:"36px", marginBottom:"12px" }}>🛠️</div>
            <div style={{ fontSize:"18px", fontWeight:700, color:C.text, marginBottom:"6px" }}>Armar PC desde cero</div>
            <div style={{ fontSize:"13px", color:C.textSec, lineHeight:1.5, marginBottom:"14px" }}>Elige cada componente paso a paso. Al final ves las recomendaciones Skaut para cada parte de tu build.</div>
            <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
              {["8 pasos guiados","Compatibilidad automática","Lista completa"].map(t => (
                <span key={t} style={{ fontSize:"9px", fontWeight:700, color:C.accent, background:`${C.accent}10`, padding:"3px 8px", borderRadius:"5px", fontFamily:"'JetBrains Mono',monospace" }}>{t}</span>
              ))}
            </div>
          </button>
          <button onClick={() => setFlow("find")} style={{ background:"#FFF", border:`2px solid ${C.entry}20`, borderRadius:"16px", padding:"28px 24px", cursor:"pointer", textAlign:"left", transition:"all 0.15s", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize:"36px", marginBottom:"12px" }}>🔍</div>
            <div style={{ fontSize:"18px", fontWeight:700, color:C.text, marginBottom:"6px" }}>Busco un componente</div>
            <div style={{ fontSize:"13px", color:C.textSec, lineHeight:1.5, marginBottom:"14px" }}>Ya tienes PC y necesitas una pieza compatible. Te mostramos solo lo que calza con tu build actual.</div>
            <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
              {["Filtrado por compatibilidad","Solo preguntas relevantes","Resultado directo"].map(t => (
                <span key={t} style={{ fontSize:"9px", fontWeight:700, color:C.entry, background:`${C.entry}10`, padding:"3px 8px", borderRadius:"5px", fontFamily:"'JetBrains Mono',monospace" }}>{t}</span>
              ))}
            </div>
          </button>
        </div>
      </div>
    );
  }

  // ── Render: Flujo 1 — Paso a paso ───────────────────────
  if (flow === "build" && !buildResults) {
    const compKey = BUILD_ORDER[buildStep];
    const comp = components[compKey];
    const meta = COMP_META[compKey];
    const opts = comp.options;
    const progress = ((buildStep) / BUILD_ORDER.length) * 100;

    // Chips de selecciones ya hechas
    const prevSelections = BUILD_ORDER.slice(0, buildStep).filter(k => buildSelections[k]);

    return (
      <div style={{ animation:"fadeIn 0.35s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />
        {/* Progreso */}
        <div style={{ marginBottom:"24px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>PASO {buildStep + 1} DE {BUILD_ORDER.length}</span>
            <span style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>{Math.round(progress)}% completado</span>
          </div>
          <div style={{ height:"4px", background:C.card, borderRadius:"4px", overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${progress}%`, background:C.accent, borderRadius:"4px", transition:"width 0.4s ease" }} />
          </div>
        </div>

        {/* Chips de selecciones previas */}
        {prevSelections.length > 0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"20px" }}>
            {prevSelections.map(k => {
              const optKey = buildSelections[k];
              const optLabel = components[k].options[optKey]?.label || optKey;
              return (
                <span key={k} style={{ fontSize:"10px", background:`${C.accent}10`, color:C.accent, border:`1px solid ${C.accent}20`, padding:"4px 10px", borderRadius:"6px", fontFamily:"'JetBrains Mono',monospace", fontWeight:600 }}>
                  {COMP_META[k].icon} {COMP_META[k].short}: {optLabel}
                </span>
              );
            })}
          </div>
        )}

        {/* Pregunta */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"6px" }}>
          <span style={{ fontSize:"28px" }}>{meta.icon}</span>
          <h2 style={{ fontSize:"24px", fontWeight:700, margin:0, letterSpacing:"-0.7px" }}>{meta.label}</h2>
        </div>
        <p style={{ fontSize:"14px", color:C.textSec, margin:"0 0 24px" }}>{comp.question}</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"10px" }}>
          {Object.entries(opts).map(([k, v], i) => (
            <button key={k} onClick={() => selectBuildOption(k)} style={{ background:"#FFF", border:`1.5px solid ${C.border}`, borderRadius:"12px", padding:"20px 18px", cursor:"pointer", textAlign:"left", display:"flex", flexDirection:"column", gap:"6px", transition:"all 0.15s", boxShadow:"0 1px 4px rgba(0,0,0,0.04)", animation:`fadeIn 0.3s ease ${i * 0.05}s both` }}>
              {v.badge && <span style={{ fontSize:"9px", fontWeight:700, color:C.accent, background:`${C.accent}10`, padding:"2px 8px", borderRadius:"4px", fontFamily:"'JetBrains Mono',monospace", alignSelf:"flex-start" }}>{v.badge}</span>}
              <span style={{ fontSize:"15px", fontWeight:700, color:C.text }}>{v.label}</span>
              <span style={{ fontSize:"12px", color:C.textSec, lineHeight:1.4 }}>{v.desc}</span>
              {v.watts && <span style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>Watts recomendados: {v.watts}</span>}
              <span style={{ fontSize:"11px", color:C.accent, marginTop:"4px" }}>Seleccionar →</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Render: Flujo 1 — Resultados ────────────────────────
  if (flow === "build" && buildResults) {
    return (
      <div style={{ animation:"fadeIn 0.4s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />
        <div style={{ textAlign:"center", marginBottom:"28px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:`${C.entry}10`, border:`1px solid ${C.entry}20`, borderRadius:"8px", padding:"5px 14px", marginBottom:"10px" }}>
            <span style={{ fontSize:"12px", fontWeight:700, color:C.entry, fontFamily:"'JetBrains Mono',monospace" }}>✓ BUILD COMPLETO — {BUILD_ORDER.length} COMPONENTES</span>
          </div>
          <h2 style={{ fontSize:"24px", fontWeight:700, margin:"0 0 4px", letterSpacing:"-0.7px" }}>Recomendaciones Skaut para tu PC</h2>
          <p style={{ fontSize:"13px", color:C.textSec, margin:0 }}>Haz clic en cualquier producto para ver specs, pros/contras y dónde comprarlo.</p>
        </div>

        {/* Resumen de selecciones */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"28px", padding:"14px", background:C.card, borderRadius:"12px", border:`1px solid ${C.border}` }}>
          {BUILD_ORDER.map(k => {
            const optKey = buildSelections[k];
            const opt = components[k].options[optKey];
            return (
              <span key={k} style={{ fontSize:"10px", background:"#FFF", color:C.text, border:`1px solid ${C.border}`, padding:"4px 10px", borderRadius:"6px", fontFamily:"'JetBrains Mono',monospace" }}>
                {COMP_META[k].icon} {opt?.label || optKey}
              </span>
            );
          })}
        </div>

        {/* Secciones por componente */}
        {BUILD_ORDER.map(compKey => {
          const comp = components[compKey];
          const meta = COMP_META[compKey];
          const optKey = buildSelections[compKey];
          const opt = comp.options[optKey];
          const resolved = resolveProducts(components, compKey, buildSelections);
          if (!resolved) return null;

          return (
            <div key={compKey} style={{ marginBottom:"28px", background:"#FFF", borderRadius:"14px", border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ padding:"14px 20px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:"10px", background:C.card }}>
                <span style={{ fontSize:"22px" }}>{meta.icon}</span>
                <div>
                  <div style={{ fontSize:"13px", fontWeight:700, color:C.text }}>{meta.label}</div>
                  <div style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>
                    {opt?.label}
                    {resolved.ddrNote && ` · ${resolved.ddrNote}`}
                    {resolved.watts && ` · ${resolved.watts} recomendados`}
                  </div>
                </div>
              </div>
              <div style={{ padding:"16px", display:"flex", gap:"12px", flexWrap:"wrap" }}>
                {["entry","balanced","proRef"].map(tier => {
                  const product = resolved[tier];
                  if (!product) return null;
                  return <MiniProductCard key={tier} product={product} tier={tier} axes={resolved.axes} onDetail={setDetail} />;
                })}
              </div>
            </div>
          );
        })}

        <div style={{ textAlign:"center", marginTop:"8px" }}>
          <button onClick={resetBuild} style={{ padding:"10px 24px", background:C.accent, color:"#FFF", border:"none", borderRadius:"9px", cursor:"pointer", fontSize:"13px", fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>
            Armar otro PC →
          </button>
        </div>
      </div>
    );
  }

  // ── Render: Flujo 2 — Selección de componente objetivo ──
  if (flow === "find" && !findTarget) {
    return (
      <div style={{ animation:"fadeIn 0.4s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />
        <div style={{ marginBottom:"24px" }}>
          <h2 style={{ fontSize:"24px", fontWeight:700, margin:"0 0 6px", letterSpacing:"-0.7px" }}>¿Qué componente necesitas?</h2>
          <p style={{ fontSize:"14px", color:C.textSec, margin:0 }}>Elige el componente que quieres comprar. Te preguntaremos solo lo necesario para filtrar opciones compatibles.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"10px" }}>
          {BUILD_ORDER.map((k, i) => {
            const meta = COMP_META[k];
            const deps = FIND_DEPS[k] || [];
            const depLabels = deps.map(d => d.label);
            return (
              <button key={k} onClick={() => selectFindTarget(k)} style={{ background:"#FFF", border:`1.5px solid ${C.border}`, borderRadius:"12px", padding:"18px 16px", cursor:"pointer", textAlign:"left", display:"flex", flexDirection:"column", gap:"8px", transition:"all 0.15s", boxShadow:"0 1px 4px rgba(0,0,0,0.04)", animation:`fadeIn 0.3s ease ${i * 0.05}s both` }}>
                <span style={{ fontSize:"26px" }}>{meta.icon}</span>
                <span style={{ fontSize:"14px", fontWeight:700, color:C.text }}>{meta.label}</span>
                {depLabels.length > 0 && (
                  <div>
                    <div style={{ fontSize:"9px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", marginBottom:"4px" }}>PREGUNTAS:</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
                      {depLabels.map(d => (
                        <span key={d} style={{ fontSize:"9px", color:C.textMuted, background:C.card, border:`1px solid ${C.border}`, padding:"2px 7px", borderRadius:"4px", fontFamily:"'JetBrains Mono',monospace" }}>{d}</span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Render: Flujo 2 — Preguntas de dependencia ──────────
  if (flow === "find" && findTarget && !findResults) {
    const deps = FIND_DEPS[findTarget] || [];
    if (deps.length === 0) { setFindResults(true); return null; }
    const dep = deps[findDepIdx];
    const meta = COMP_META[findTarget];
    const totalDeps = deps.length;
    const progress = (findDepIdx / totalDeps) * 100;

    return (
      <div style={{ animation:"fadeIn 0.35s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px" }}>
          <div style={{ background:`${C.entry}10`, border:`1px solid ${C.entry}20`, borderRadius:"8px", padding:"4px 12px" }}>
            <span style={{ fontSize:"10px", fontWeight:700, color:C.entry, fontFamily:"'JetBrains Mono',monospace" }}>BUSCANDO: {meta.icon} {meta.label.toUpperCase()}</span>
          </div>
        </div>

        {/* Progreso */}
        <div style={{ marginBottom:"24px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
            <span style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>Pregunta {findDepIdx + 1} de {totalDeps}</span>
            <span style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height:"4px", background:C.card, borderRadius:"4px", overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${progress}%`, background:C.entry, borderRadius:"4px", transition:"width 0.4s ease" }} />
          </div>
        </div>

        {/* Respuestas previas */}
        {Object.entries(findAnswers).length > 0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"18px" }}>
            {Object.entries(findAnswers).map(([k, v]) => (
              <span key={k} style={{ fontSize:"10px", background:`${C.entry}10`, color:C.entry, border:`1px solid ${C.entry}20`, padding:"4px 10px", borderRadius:"6px", fontFamily:"'JetBrains Mono',monospace", fontWeight:600 }}>✓ {v}</span>
            ))}
          </div>
        )}

        {/* Pregunta */}
        <h2 style={{ fontSize:"22px", fontWeight:700, margin:"0 0 6px", letterSpacing:"-0.6px" }}>{dep.question}</h2>
        <p style={{ fontSize:"13px", color:C.textSec, margin:"0 0 22px" }}>Esto nos ayuda a filtrar opciones compatibles para tu {meta.label.toLowerCase()}.</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"10px", marginBottom:"16px" }}>
          {Object.entries(dep.options).map(([k, v], i) => (
            <button key={k} onClick={() => answerDep(dep.key, k)} style={{ background:"#FFF", border:`1.5px solid ${C.border}`, borderRadius:"11px", padding:"16px", cursor:"pointer", textAlign:"left", transition:"all 0.15s", animation:`fadeIn 0.3s ease ${i * 0.05}s both` }}>
              <div style={{ fontSize:"14px", fontWeight:700, color:C.text, marginBottom:"4px" }}>{v.label}</div>
              <div style={{ fontSize:"12px", color:C.textSec }}>{v.desc}</div>
            </button>
          ))}
        </div>
        <button onClick={skipDep} style={{ background:"transparent", border:`1px solid ${C.border}`, borderRadius:"8px", padding:"8px 18px", cursor:"pointer", fontSize:"11px", color:C.textMuted, fontFamily:"'Space Grotesk',sans-serif" }}>
          No sé / Omitir →
        </button>
      </div>
    );
  }

  // ── Render: Flujo 2 — Resultados ────────────────────────
  if (flow === "find" && findTarget && findResults) {
    const comp = components[findTarget];
    const meta = COMP_META[findTarget];
    const opts = comp.options;

    // Filtrar opciones compatibles
    const compatibleOpts = filterOptions(findTarget, opts, findAnswers);

    // Restricciones derivadas para mostrar al usuario
    const constraints = [];
    if (findTarget === "cpu") {
      if (findAnswers.mobo_socket) constraints.push(`Socket: ${findAnswers.mobo_socket}`);
      if (findAnswers.ram_type) constraints.push(`RAM: ${findAnswers.ram_type} compatible`);
    }
    if (findTarget === "motherboard") {
      if (findAnswers.cpu_platform) {
        const socketMap = { intel_14:"LGA 1700", intel_15:"LGA 1851", amd_7000:"AM5", amd_5000:"AM4" };
        constraints.push(`Socket: ${socketMap[findAnswers.cpu_platform] || findAnswers.cpu_platform}`);
      }
      if (findAnswers.case_size) constraints.push(`Gabinete: ${findAnswers.case_size}`);
    }
    if (findTarget === "ram") {
      if (findAnswers.cpu_platform) {
        const ddr = getDDRForCPU(findAnswers.cpu_platform);
        if (ddr) constraints.push(`Tipo: ${ddr}`);
        else constraints.push("Tipo: DDR4 o DDR5 (elige según presupuesto)");
      }
    }
    if (findTarget === "gpu") {
      if (findAnswers.psu_watts) constraints.push(`PSU: ${findAnswers.psu_watts}`);
      if (findAnswers.case_gpu) constraints.push(`Gabinete: ${findAnswers.case_gpu}`);
    }
    if (findTarget === "case") {
      if (findAnswers.mobo_ff) {
        const ffMap = { atx:"ATX → Full o Mid Tower", matx:"mATX → Mid o Mini Tower", itx:"ITX → Mini Tower o SFF" };
        constraints.push(ffMap[findAnswers.mobo_ff] || findAnswers.mobo_ff);
      }
    }

    return (
      <div style={{ animation:"fadeIn 0.4s ease" }}>
        <DetailModal data={detail} onClose={() => setDetail(null)} />

        {/* Header */}
        <div style={{ marginBottom:"24px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:`${C.entry}10`, border:`1px solid ${C.entry}20`, borderRadius:"8px", padding:"5px 14px", marginBottom:"10px" }}>
            <span style={{ fontSize:"12px", fontWeight:700, color:C.entry, fontFamily:"'JetBrains Mono',monospace" }}>{meta.icon} {meta.label.toUpperCase()} — OPCIONES COMPATIBLES</span>
          </div>
          <h2 style={{ fontSize:"22px", fontWeight:700, margin:"0 0 4px", letterSpacing:"-0.6px" }}>Recomendaciones Skaut</h2>
        </div>

        {/* Tu PC actual */}
        {Object.entries(findAnswers).length > 0 && (
          <div style={{ padding:"14px 18px", background:C.card, borderRadius:"10px", border:`1px solid ${C.border}`, marginBottom:"16px" }}>
            <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace", marginBottom:"8px" }}>TU PC ACTUAL</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
              {Object.entries(findAnswers).map(([k, v]) => {
                const dep = (FIND_DEPS[findTarget] || []).find(d => d.key === k);
                const label = dep?.options[v]?.label || v;
                return (
                  <span key={k} style={{ fontSize:"10px", background:"#FFF", color:C.text, border:`1px solid ${C.border}`, padding:"4px 10px", borderRadius:"6px", fontFamily:"'JetBrains Mono',monospace" }}>
                    {dep?.label}: {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Restricciones */}
        {constraints.length > 0 && (
          <div style={{ padding:"12px 18px", background:`${C.balanced}05`, borderRadius:"10px", border:`1px solid ${C.balanced}15`, marginBottom:"20px" }}>
            <div style={{ fontSize:"9px", fontWeight:700, letterSpacing:"2px", color:C.balanced, fontFamily:"'JetBrains Mono',monospace", marginBottom:"6px" }}>TU {meta.label.toUpperCase()} DEBE CUMPLIR</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {constraints.map((c, i) => (
                <span key={i} style={{ fontSize:"11px", color:C.balanced, background:`${C.balanced}10`, padding:"3px 10px", borderRadius:"6px", fontWeight:600 }}>{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Opciones compatibles */}
        {Object.keys(compatibleOpts).length === 0 ? (
          <div style={{ padding:"24px", textAlign:"center", background:C.card, borderRadius:"12px", border:`1px solid ${C.border}` }}>
            <p style={{ color:C.textMuted, fontSize:"14px" }}>No hay opciones compatibles con los filtros aplicados. Intenta omitir algunas restricciones.</p>
            <button onClick={() => { setFindAnswers({}); setFindDepIdx(0); setFindResults(false); }} style={{ marginTop:"12px", padding:"8px 20px", background:C.accent, color:"#FFF", border:"none", borderRadius:"8px", cursor:"pointer", fontSize:"12px", fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>Reintentar sin filtros</button>
          </div>
        ) : (
          Object.entries(compatibleOpts).map(([optKey, opt]) => {
            // Determinar productos a mostrar
            let prods = { axes: comp.axes };
            if (findTarget === "motherboard") {
              const cpu = findAnswers.cpu_platform;
              if (cpu && opt.byPlatform?.[cpu]) {
                prods = { ...opt.byPlatform[cpu], axes: comp.axes };
              } else {
                const firstPlatform = Object.values(opt.byPlatform || {})[0];
                if (firstPlatform) prods = { ...firstPlatform, axes: comp.axes };
              }
            } else if (findTarget === "ram") {
              const cpu = findAnswers.cpu_platform;
              let ddr = getDDRForCPU(cpu);
              if (!ddr) ddr = "DDR5";
              const byDDR = opt.byDDR?.[ddr];
              if (byDDR) prods = { ...byDDR, axes: comp.axes, ddrNote: ddr };
            } else if (findTarget === "psu") {
              // Show all wattages? Just show mid-level as default
              const gpuLevel = findAnswers.gpu_level || "mid";
              const byGPU = opt.byGPU?.[gpuLevel];
              if (byGPU) prods = { ...byGPU, axes: comp.axes, watts: byGPU.watts };
            } else {
              prods = { entry: opt.entry, balanced: opt.balanced, proRef: opt.proRef, axes: comp.axes };
            }

            return (
              <div key={optKey} style={{ marginBottom:"24px", background:"#FFF", borderRadius:"14px", border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ padding:"14px 20px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between", background:C.card }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <span style={{ fontSize:"20px" }}>{meta.icon}</span>
                    <div>
                      <div style={{ fontSize:"13px", fontWeight:700, color:C.text }}>{opt.label}</div>
                      <div style={{ fontSize:"10px", color:C.textMuted, fontFamily:"'JetBrains Mono',monospace" }}>
                        {opt.desc}
                        {prods.ddrNote && ` · ${prods.ddrNote}`}
                        {prods.watts && ` · ${prods.watts}`}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize:"9px", fontWeight:700, color:C.entry, background:`${C.entry}10`, border:`1px solid ${C.entry}20`, padding:"3px 8px", borderRadius:"5px", fontFamily:"'JetBrains Mono',monospace" }}>COMPATIBLE ✓</span>
                </div>
                <div style={{ padding:"16px", display:"flex", gap:"12px", flexWrap:"wrap" }}>
                  {["entry","balanced","proRef"].map(tier => {
                    const product = prods[tier];
                    if (!product) return null;
                    return <MiniProductCard key={tier} product={product} tier={tier} axes={prods.axes} onDetail={setDetail} />;
                  })}
                </div>
              </div>
            );
          })
        )}

        <div style={{ textAlign:"center", marginTop:"8px" }}>
          <button onClick={resetFind} style={{ padding:"10px 24px", background:C.entry, color:"#FFF", border:"none", borderRadius:"9px", cursor:"pointer", fontSize:"13px", fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>
            Buscar otro componente →
          </button>
        </div>
      </div>
    );
  }

  return null;
}
