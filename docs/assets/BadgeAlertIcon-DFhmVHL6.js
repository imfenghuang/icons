import{u,M as d}from"./index-B403mLlK.js";import{r as m,o as f,c as p,a as x,w as g,u as v,b as n}from"./index-B1IPEPJw.js";const _={name:"BadgeAlertIcon"},y=Object.assign(_,{setup(w){const s={duration:500,ease:"easeInOut"},t={normal:{scale:1,rotate:0},animate:{scale:[1,1.1,1.1,1.1,1],rotate:[0,-3,3,-2,2,0],transition:{times:[0,.2,.4,.6,1]}}},o=m(),i=u(o,{initial:t.normal,enter:t.animate}),a=r=>{const e=t[r];i.apply({...e,transition:{...s,...e.transition}})};function l(){a("animate")}function c(){a("normal")}return(r,e)=>(f(),p("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[x(v(d),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:g(()=>e[0]||(e[0]=[n("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,-1),n("line",{x1:"12",x2:"12",y1:"8",y2:"12"},null,-1),n("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"},null,-1)])),_:1},512)],32))}});export{y as default};