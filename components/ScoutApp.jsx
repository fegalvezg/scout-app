"use client";

import { useState } from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from "recharts";
import { DATA } from "@/data/products";
import PCBuilder from "./PCBuilder";

const C = {
  bg:"#FFFFFF",card:"#F7F7F8",cardHover:"#F0F0F2",border:"#E2E2E6",borderLight:"#ECECEF",
  primary:"#1A1A1A",accent:"#2563EB",entry:"#16A34A",balanced:"#2563EB",pro:"#EA580C",
  text:"#1A1A1A",textSec:"#6B6B73",textMuted:"#9D9DA5",
  green:"#16A34A",red:"#DC2626",
  logoBg:"#1A1A1A",logoText:"#FFFFFF",
};

function MiniBar({score,color}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:"8px",width:"100%"}}>
      <div style={{flex:1,height:"4px",background:`${color}15`,borderRadius:"4px",overflow:"hidden"}}>
        <div style={{width:`${score}%`,height:"100%",background:color,borderRadius:"4px",transition:"width 0.7s ease"}}/>
      </div>
      <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",fontWeight:700,color,minWidth:"22px",textAlign:"right"}}>{score}</span>
    </div>
  );
}

function ProductDetail({product,type,axes,onClose}){
  const colorMap = {entry:C.entry,balanced:C.balanced,pro:C.pro};
  const labelMap = {entry:"BUENO, BONITO Y BARATO",balanced:"EL RECOMENDADO",pro:"REFERENCIA PRO"};
  const color = colorMap[type];
  const label = labelMap[type];
  const chartData=axes.map(a=>({axis:a.length>10?a.substring(0,9)+"..":a,score:product.scores[a]}));
  return(
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",zIndex:1000,overflowY:"auto",animation:"fadeIn 0.25s ease"}} onClick={onClose}>
      <div style={{maxWidth:"740px",margin:"20px auto",padding:"0 16px"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"8px",height:"8px",borderRadius:"50%",background:color}}/>
            <span style={{fontSize:"10px",fontWeight:700,letterSpacing:"2px",color,fontFamily:"'JetBrains Mono',monospace"}}>{label}</span>
          </div>
          <button onClick={onClose} style={{background:"#FFF",border:`1px solid ${C.border}`,borderRadius:"8px",padding:"6px 14px",color:C.textSec,fontSize:"12px",cursor:"pointer",fontFamily:"'Space Grotesk',sans-serif"}}>✕ Cerrar</button>
        </div>
        <div style={{background:"#FFF",borderRadius:"16px",border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.12)"}}>
          <div style={{padding:"24px 24px 18px",borderBottom:`1px solid ${C.border}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px"}}>
              <div>
                <div style={{fontSize:"10px",fontWeight:700,letterSpacing:"2px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",marginBottom:"4px"}}>{product.brand}</div>
                <h2 style={{margin:"0 0 6px",fontSize:"22px",fontWeight:700,letterSpacing:"-0.5px",color:C.text}}>{product.name}</h2>
                <p style={{margin:0,fontSize:"14px",color:C.textSec,lineHeight:1.5,maxWidth:"380px"}}>{product.oneLiner}</p>
              </div>
              <div style={{background:color,color:"#FFF",fontFamily:"'JetBrains Mono',monospace",fontSize:"18px",fontWeight:800,padding:"8px 20px",borderRadius:"10px"}}>{product.price}</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <div style={{padding:"20px",borderRight:`1px solid ${C.border}`}}>
              <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color,fontFamily:"'JetBrains Mono',monospace",marginBottom:"12px"}}>PERFIL SKAUT</div>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={chartData} outerRadius="66%">
                  <PolarGrid stroke={C.border}/>
                  <PolarAngleAxis dataKey="axis" tick={{fill:C.textSec,fontSize:8,fontFamily:"JetBrains Mono"}}/>
                  <PolarRadiusAxis domain={[0,100]} tick={false} axisLine={false}/>
                  <Radar dataKey="score" stroke={color} fill={color} fillOpacity={0.15} strokeWidth={2} dot={{r:2.5,fill:color}}/>
                </RadarChart>
              </ResponsiveContainer>
              <div style={{display:"flex",flexDirection:"column",gap:"5px",marginTop:"6px"}}>
                {axes.map(a=>(
                  <div key={a} style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{fontSize:"10px",color:C.textSec,minWidth:"80px"}}>{a}</span>
                    <MiniBar score={product.scores[a]} color={color}/>
                  </div>
                ))}
              </div>
            </div>
            <div style={{padding:"20px"}}>
              <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",marginBottom:"12px"}}>SPECS</div>
              {product.specs.map((s,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.borderLight}`}}>
                  <span style={{fontSize:"11px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{s.label}</span>
                  <span style={{fontSize:"11px",color:C.text,fontWeight:600,textAlign:"right",maxWidth:"55%"}}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:`1px solid ${C.border}`}}>
            <div style={{padding:"18px 20px",borderRight:`1px solid ${C.border}`}}>
              <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color:C.green,fontFamily:"'JetBrains Mono',monospace",marginBottom:"10px"}}>✓ POR QUÉ SÍ</div>
              {product.pros.map((p,i)=>(
                <div key={i} style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
                  <div style={{width:"5px",height:"5px",borderRadius:"50%",background:C.green,marginTop:"6px",flexShrink:0}}/>
                  <span style={{fontSize:"12px",color:C.textSec,lineHeight:1.5}}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{padding:"18px 20px"}}>
              <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color:C.red,fontFamily:"'JetBrains Mono',monospace",marginBottom:"10px"}}>✗ POR QUÉ NO</div>
              {product.cons.map((c,i)=>(
                <div key={i} style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
                  <div style={{width:"5px",height:"5px",borderRadius:"50%",background:C.red,marginTop:"6px",flexShrink:0}}/>
                  <span style={{fontSize:"12px",color:C.textSec,lineHeight:1.5}}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{borderTop:`1px solid ${C.border}`,padding:"18px 24px"}}>
            <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color,fontFamily:"'JetBrains Mono',monospace",marginBottom:"12px"}}>DÓNDE COMPRARLO</div>
            {product.stores.map((s,i)=>(
              <a key={i} href={s.url} style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:s.best?`${color}08`:"#FAFAFA",border:`1.5px solid ${s.best?color+"33":C.border}`,borderRadius:"10px",padding:"12px 16px",marginBottom:"6px",textDecoration:"none",cursor:"pointer",transition:"all 0.15s ease"}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <span style={{fontSize:"14px",fontWeight:700,color:C.text}}>{s.name}</span>
                  {s.tag&&<span style={{fontSize:"9px",fontWeight:700,color:s.best?color:C.textMuted,background:s.best?`${color}12`:`${C.textMuted}12`,padding:"2px 8px",borderRadius:"5px",fontFamily:"'JetBrains Mono',monospace"}}>{s.tag}</span>}
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <span style={{fontSize:"15px",fontWeight:800,color:s.best?color:C.text,fontFamily:"'JetBrains Mono',monospace"}}>{s.price}</span>
                  <span style={{color:C.textMuted}}>→</span>
                </div>
              </a>
            ))}
            <div style={{marginTop:"10px",fontSize:"9px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",textAlign:"center"}}>Skaut puede recibir comisión — esto no afecta nuestras recomendaciones.</div>
          </div>
          <div style={{borderTop:`1px solid ${C.border}`,padding:"18px 24px",background:`${color}05`}}>
            <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color,fontFamily:"'JetBrains Mono',monospace",marginBottom:"6px"}}>VEREDICTO SKAUT</div>
            <p style={{margin:0,fontSize:"13px",lineHeight:1.7,color:C.textSec}}>{product.why}</p>
          </div>
        </div>
        <div style={{height:"30px"}}/>
      </div>
    </div>
  );
}

function ProductCard({product,type,axes,onClick}){
  const colorMap = {entry:C.entry,balanced:C.balanced,pro:C.pro};
  const labelMap = {entry:"BUENO, BONITO Y BARATO",balanced:"EL RECOMENDADO",pro:"REFERENCIA PRO"};
  const subMap = {entry:"Gasta poco, llévate algo bueno",balanced:"Lo que Skaut elegiría",pro:"Si el dinero no importa"};
  const color = colorMap[type];
  const label = labelMap[type];
  const sub = subMap[type];
  const chartData=axes.map(a=>({axis:a.length>10?a.substring(0,9)+"..":a,score:product.scores[a]}));
  return(
    <div style={{flex:"1 1 320px",background:"#FFF",borderRadius:"14px",border:`1.5px solid ${color}30`,overflow:"hidden",animation:"fadeIn 0.4s ease both",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
      <div style={{background:`${color}08`,borderBottom:`1px solid ${color}18`,padding:"12px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:"9px",fontWeight:800,letterSpacing:"2.5px",color,fontFamily:"'JetBrains Mono',monospace"}}>{label}</div>
          <div style={{fontSize:"10px",color:C.textMuted,marginTop:"1px"}}>{sub}</div>
        </div>
        <div style={{background:color,color:"#FFF",fontFamily:"'JetBrains Mono',monospace",fontSize:"13px",fontWeight:800,padding:"5px 12px",borderRadius:"7px"}}>{product.price}</div>
      </div>
      <div style={{padding:"18px"}}>
        <h3 style={{margin:"0 0 1px",fontSize:"16px",fontWeight:700,color:C.text,letterSpacing:"-0.3px",lineHeight:1.3}}>{product.name}</h3>
        <div style={{fontSize:"10px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",marginBottom:"10px"}}>{product.brand}</div>
        <div style={{fontSize:"13px",fontWeight:600,color:C.text,lineHeight:1.5,marginBottom:"14px"}}>{product.oneLiner}</div>
        <ResponsiveContainer width="100%" height={180}>
          <RadarChart data={chartData} outerRadius="66%">
            <PolarGrid stroke={C.border}/>
            <PolarAngleAxis dataKey="axis" tick={{fill:C.textSec,fontSize:8,fontFamily:"JetBrains Mono"}}/>
            <PolarRadiusAxis domain={[0,100]} tick={false} axisLine={false}/>
            <Radar dataKey="score" stroke={color} fill={color} fillOpacity={0.15} strokeWidth={2} dot={{r:2.5,fill:color}}/>
          </RadarChart>
        </ResponsiveContainer>
        <button onClick={onClick} style={{width:"100%",marginTop:"14px",padding:"12px",background:`${color}08`,border:`1.5px solid ${color}25`,borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.15s ease"}}>
          <span style={{fontSize:"12px",fontWeight:700,color}}>Ver detalle completo</span>
          <span style={{fontSize:"10px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>Specs · Pro/Con · Tiendas →</span>
        </button>
      </div>
    </div>
  );
}

function ProReference({product,onClick}){
  return(
    <div onClick={onClick} style={{
      maxWidth:"700px",margin:"28px auto 0",background:"#FFF",borderRadius:"12px",
      border:`1px solid ${C.pro}20`,padding:"18px 22px",cursor:"pointer",
      animation:"fadeIn 0.5s ease 0.2s both",transition:"all 0.15s ease",
      boxShadow:"0 1px 6px rgba(0,0,0,0.04)",
    }}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <div style={{width:"36px",height:"36px",borderRadius:"10px",background:`${C.pro}10`,border:`1px solid ${C.pro}25`,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontSize:"16px"}}>👑</span>
          </div>
          <div>
            <div style={{fontSize:"9px",fontWeight:700,letterSpacing:"2px",color:C.pro,fontFamily:"'JetBrains Mono',monospace",marginBottom:"2px"}}>¿Y CUÁL ES EL MEJOR DEL MUNDO?</div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"}}>
              <span style={{fontSize:"15px",fontWeight:700,color:C.text}}>{product.name}</span>
              <span style={{fontSize:"11px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{product.brand}</span>
            </div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <div style={{fontSize:"16px",fontWeight:800,color:C.pro,fontFamily:"'JetBrains Mono',monospace"}}>{product.price}</div>
          <div style={{fontSize:"10px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",padding:"6px 10px",border:`1px solid ${C.border}`,borderRadius:"6px"}}>Ver detalle →</div>
        </div>
      </div>
      <p style={{margin:"12px 0 0",fontSize:"12px",color:C.textMuted,lineHeight:1.5,maxWidth:"500px"}}>{product.oneLiner}</p>
    </div>
  );
}

function StepIndicator({step}){
  const steps=["Categoría","Tipo","Uso","Decide"];
  return(
    <div style={{display:"flex",alignItems:"center",gap:"0",marginBottom:"24px"}}>
      {steps.map((s,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
            <div style={{width:"24px",height:"24px",borderRadius:"50%",background:i<step?C.primary:i===step?"#F0F0F2":"transparent",border:`1.5px solid ${i<=step?C.primary:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:700,color:i<step?"#FFF":i===step?C.primary:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{i<step?"✓":i+1}</div>
            <span style={{fontSize:"11px",fontWeight:600,color:i<=step?C.text:C.textMuted}}>{s}</span>
          </div>
          {i<steps.length-1&&<div style={{width:"32px",height:"1px",margin:"0 10px",background:i<step?C.primary:C.border}}/>}
        </div>
      ))}
    </div>
  );
}

export default function SkautApp(){
  const [step,setStep]=useState(0);
  const [cat,setCat]=useState(null);
  const [sub,setSub]=useState(null);
  const [subSub,setSubSub]=useState(null);
  const [detail,setDetail]=useState(null);
  const [secs,setSecs]=useState(0);
  const [tRef,setTRef]=useState(null);

  const startTimer=()=>{if(tRef)clearInterval(tRef);setSecs(0);const t=setInterval(()=>setSecs(s=>s+1),1000);setTRef(t);};
  const pickCat=(k)=>{setCat(k);setSub(null);setSubSub(null);setStep(1);startTimer();};
  const pickSub=(k)=>{setSub(k);const s=DATA[cat]?.subcategories[k];if(s?.subSubcategories){setStep(2);}else{setStep(3);}};
  const pickSubSub=(k)=>{setSubSub(k);setStep(3);};
  const reset=()=>{setStep(0);setCat(null);setSub(null);setSubSub(null);setDetail(null);setSecs(0);if(tRef)clearInterval(tRef);setTRef(null);};
  const goBack=()=>{if(step===3){if(subSub){setSubSub(null);setStep(2);}else{setSub(null);setStep(1);}}else if(step===2){setSub(null);setStep(1);}else if(step===1){setCat(null);setSub(null);setStep(0);setSecs(0);if(tRef)clearInterval(tRef);setTRef(null);}};

  const catData=cat?DATA[cat]:null;
  const subCatData=cat&&sub?DATA[cat].subcategories[sub]:null;
  const subData=cat&&sub?(subSub&&DATA[cat]?.subcategories[sub]?.subSubcategories?DATA[cat].subcategories[sub].subSubcategories[subSub]:DATA[cat].subcategories[sub]):null;
  const catKeys=Object.keys(DATA);

  return(
    <div style={{background:C.bg,minHeight:"100vh",color:C.text,fontFamily:"'Space Grotesk',sans-serif"}}>
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}
      `}</style>

      {detail&&<ProductDetail product={detail.product} type={detail.type} axes={subData.axes} onClose={()=>setDetail(null)}/>}

      {/* Header */}
      <div style={{borderBottom:`1px solid ${C.border}`,padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#FFF"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          {step>0&&(
            <button onClick={goBack} style={{display:"flex",alignItems:"center",gap:"5px",background:"#F7F7F8",border:`1px solid ${C.border}`,borderRadius:"7px",padding:"5px 12px",color:C.text,fontSize:"12px",fontWeight:600,cursor:"pointer",fontFamily:"'Space Grotesk',sans-serif",transition:"all 0.15s ease"}}>
              ← Volver
            </button>
          )}
          <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}} onClick={reset}>
            <div style={{width:"30px",height:"30px",background:C.logoBg,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 32 32"><polygon points="16,3 27,11 25,25 7,25 5,11" fill="none" stroke="#CDFE04" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="16" cy="15" r="3.5" fill="#CDFE04"/></svg></div>
            <span style={{fontSize:"16px",fontWeight:700,letterSpacing:"-0.5px",color:C.text}}>SKAUT</span>
            <span style={{fontSize:"9px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",letterSpacing:"1.5px",marginLeft:"4px"}}>DECIDE EN 60s</span>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          {tRef&&(
            <div style={{display:"flex",alignItems:"center",gap:"6px",background:secs>60?"#FEF2F2":"#F0FDF4",border:`1px solid ${secs>60?"#FECACA":"#BBF7D0"}`,borderRadius:"7px",padding:"4px 12px"}}>
              <div style={{width:"5px",height:"5px",borderRadius:"50%",background:secs>60?C.pro:C.entry,animation:"blink 1s infinite"}}/>
              <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"12px",fontWeight:700,color:secs>60?C.pro:C.entry}}>{Math.floor(secs/60)}:{String(secs%60).padStart(2,"0")}</span>
            </div>
          )}
          {step>0&&<button onClick={reset} style={{background:"#FFF",border:`1px solid ${C.border}`,borderRadius:"7px",padding:"5px 12px",color:C.textSec,fontSize:"11px",fontWeight:600,cursor:"pointer",fontFamily:"'Space Grotesk',sans-serif"}}>← Inicio</button>}
        </div>
      </div>

      <div style={{maxWidth:"960px",margin:"0 auto",padding:"28px 24px"}}>
        <StepIndicator step={step}/>

        {step===0&&(
          <div style={{animation:"fadeIn 0.4s ease"}}>
            <h2 style={{fontSize:"28px",fontWeight:700,margin:"0 0 6px",letterSpacing:"-1px"}}>¿Qué estás buscando?</h2>
            <p style={{fontSize:"14px",color:C.textSec,margin:"0 0 28px"}}>Elige una categoría y te ayudamos a decidir.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"10px"}}>
              {catKeys.map((k,i)=>{
                const d=DATA[k];
                const subCount=d.isBuilderFlow?null:Object.keys(d.subcategories).length;
                return(
                  <button key={k} onClick={()=>pickCat(k)} style={{background:"#FFF",border:`1.5px solid ${C.border}`,borderRadius:"12px",padding:"20px 16px",cursor:"pointer",textAlign:"left",display:"flex",flexDirection:"column",gap:"8px",transition:"all 0.15s ease",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",animation:`fadeIn 0.3s ease ${i*0.04}s both`}}>
                    <span style={{fontSize:"26px"}}>{d.icon}</span>
                    <span style={{fontSize:"14px",fontWeight:700,color:C.text}}>{d.label}</span>
                    <span style={{fontSize:"10px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{d.isBuilderFlow?"2 flujos →":`${subCount} ${subCount===1?"uso":"usos"} →`}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step===1&&catData&&catData.isBuilderFlow&&(
          <PCBuilder data={catData} onBack={()=>{setCat(null);setSub(null);setSubSub(null);setStep(0);setSecs(0);if(tRef)clearInterval(tRef);setTRef(null);}}/>
        )}

        {step===1&&catData&&!catData.isBuilderFlow&&(
          <div style={{animation:"fadeIn 0.4s ease"}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"}}>
              <span style={{fontSize:"26px"}}>{catData.icon}</span>
              <h2 style={{fontSize:"26px",fontWeight:700,margin:0,letterSpacing:"-0.8px"}}>{catData.label}</h2>
            </div>
            <p style={{fontSize:"14px",color:C.textSec,margin:"0 0 28px"}}>¿Para qué lo necesitas?</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"10px"}}>
              {Object.entries(catData.subcategories).map(([k,v],i)=>(
                <button key={k} onClick={()=>pickSub(k)} style={{background:"#FFF",border:`1.5px solid ${C.border}`,borderRadius:"12px",padding:"20px 18px",cursor:"pointer",textAlign:"left",display:"flex",flexDirection:"column",gap:"6px",transition:"all 0.15s ease",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",animation:`fadeIn 0.3s ease ${i*0.05}s both`}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{fontSize:"20px"}}>{v.icon}</span>
                    <span style={{fontSize:"15px",fontWeight:700,color:C.text}}>{v.label}</span>
                  </div>
                  <span style={{fontSize:"12px",color:C.textSec,lineHeight:1.4}}>{v.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step===2&&subCatData&&subCatData.subSubcategories&&(
          <div style={{animation:"fadeIn 0.4s ease"}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"}}>
              <span style={{fontSize:"26px"}}>{subCatData.icon}</span>
              <h2 style={{fontSize:"26px",fontWeight:700,margin:0,letterSpacing:"-0.8px"}}>{subCatData.label}</h2>
            </div>
            <p style={{fontSize:"14px",color:C.textSec,margin:"0 0 28px"}}>¿Para qué uso lo necesitas?</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"10px"}}>
              {Object.entries(subCatData.subSubcategories).map(([k,v],i)=>(
                <button key={k} onClick={()=>pickSubSub(k)} style={{background:"#FFF",border:`1.5px solid ${C.border}`,borderRadius:"12px",padding:"20px 18px",cursor:"pointer",textAlign:"left",display:"flex",flexDirection:"column",gap:"6px",transition:"all 0.15s ease",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",animation:`fadeIn 0.3s ease ${i*0.05}s both`}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{fontSize:"20px"}}>{v.icon}</span>
                    <span style={{fontSize:"15px",fontWeight:700,color:C.text}}>{v.label}</span>
                  </div>
                  <span style={{fontSize:"12px",color:C.textSec,lineHeight:1.4}}>{v.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step===3&&subData&&(
          <div style={{animation:"fadeIn 0.4s ease"}}>
            <div style={{textAlign:"center",marginBottom:"24px"}}>
              <div style={{display:"inline-flex",alignItems:"center",gap:"6px",background:"#F7F7F8",border:`1px solid ${C.border}`,borderRadius:"7px",padding:"5px 12px",marginBottom:"10px"}}>
                <span style={{fontSize:"14px"}}>{catData.icon}</span>
                <span style={{fontSize:"10px",color:C.textSec,fontFamily:"'JetBrains Mono',monospace"}}>{catData.label}</span>
                <span style={{color:C.textMuted}}>›</span>
                <span style={{fontSize:"14px"}}>{subCatData.icon}</span>
                <span style={{fontSize:"10px",color:subSub?C.textSec:C.text,fontFamily:"'JetBrains Mono',monospace",fontWeight:subSub?400:600}}>{subCatData.label}</span>
                {subSub&&(<><span style={{color:C.textMuted}}>›</span><span style={{fontSize:"14px"}}>{subData.icon}</span><span style={{fontSize:"10px",color:C.text,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>{subData.label}</span></>)}
              </div>
              <h2 style={{fontSize:"24px",fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.8px"}}>Dos opciones. Elige.</h2>
              <p style={{fontSize:"13px",color:C.textSec,margin:0}}>Haz clic en "Ver detalle" para specs, pros/cons y dónde comprar.</p>
            </div>

            <div style={{display:"flex",gap:"14px",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start"}}>
              <ProductCard product={subData.entry} type="entry" axes={subData.axes} onClick={()=>setDetail({product:subData.entry,type:"entry"})}/>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"center",flexShrink:0}}>
                <div style={{width:"38px",height:"38px",borderRadius:"50%",background:"#F7F7F8",border:`2px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",fontWeight:800,color:C.textMuted}}>VS</div>
              </div>
              <ProductCard product={subData.balanced} type="balanced" axes={subData.axes} onClick={()=>setDetail({product:subData.balanced,type:"balanced"})}/>
            </div>

            {subData.proRef && (
              <ProReference product={subData.proRef} onClick={()=>setDetail({product:subData.proRef,type:"pro"})}/>
            )}

            {secs>60&&(
              <div style={{textAlign:"center",marginTop:"24px",padding:"10px 18px",background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:"8px",animation:"fadeIn 0.3s ease"}}>
                <span style={{fontSize:"12px",color:C.pro,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>⏱ +60s. Confía en tu instinto.</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{borderTop:`1px solid ${C.border}`,padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"32px"}}>
        <span style={{fontSize:"10px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>SKAUT © 2026 — Sin ads. Sin sponsors. Solo criterio.</span>
        <span style={{fontSize:"9px",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>skaut.cl · Pocos clics → Decide</span>
      </div>
    </div>
  );
}
