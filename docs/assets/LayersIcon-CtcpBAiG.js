import{u as l,M as p}from"./index-CyKBJ7R-.js";import{r as m,o as c,c as u,b as g,a as d,u as f}from"./index-DQVO6Fx2.js";const _={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w={name:"LayersIcon"},b=Object.assign(w,{setup(T){const e={type:"spring",stiffness:100,damping:14,mass:1},n={normal:{y:0,transition:e},animate:{y:-9,transition:e}},t={normal:{y:0,transition:e},animate:{y:-5,transition:e}},r=m(),a=l(r,{initial:n.normal,enter:n.normal}),s=m(),o=l(s,{initial:t.normal,enter:t.normal});function h(){a.apply(n.animate).then(()=>a.apply(n.normal)),o.apply(t.animate).then(()=>o.apply(t.normal))}function y(){a.apply(n.normal),o.apply(t.normal)}return(k,i)=>(c(),u("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:h,onMouseleave:y,role:"button",tabindex:"0"},[(c(),u("svg",_,[i[0]||(i[0]=g("path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"},null,-1)),d(f(p),{is:"path",ref_key:"pathOneTarget",ref:r,d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"},null,512),d(f(p),{is:"path",ref_key:"pathTwoTarget",ref:s,d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"},null,512)]))],32))}});export{b as default};