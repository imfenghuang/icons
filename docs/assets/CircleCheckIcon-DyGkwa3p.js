import{u,M as d}from"./index-Cb7bki-F.js";import{r as m,o as a,c as s,b as p,a as f,u as h}from"./index-CH_QL--E.js";const k={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_={name:"CircleCheckIcon"},w=Object.assign(_,{setup(v){const e={normal:{opacity:1,strokeDasharray:10,strokeDashoffset:[0,0],transition:{duration:300,opacity:{duration:100}}},animate:{opacity:[0,1],strokeDasharray:10,strokeDashoffset:[10,0],transition:{duration:400,opacity:{duration:100}}}},o=m(),i=u(o,{initial:e.normal,enter:e.normal}),n=r=>{const t=e[r];i.apply(t)};function c(){n("animate")}function l(){n("normal")}return(r,t)=>(a(),s("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:l,role:"button",tabindex:"0"},[(a(),s("svg",k,[t[0]||(t[0]=p("circle",{cx:"12",cy:"12",r:"10"},null,-1)),f(h(d),{is:"path",ref_key:"target",ref:o,d:"m9 12 2 2 4-4"},null,512)]))],32))}});export{w as default};