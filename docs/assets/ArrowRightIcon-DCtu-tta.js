import{u as h,M as l}from"./index-C6wxZgXD.js";import{r as c,d as v,o as m,c as u,a as d,u as o}from"./index-BqfN44Ex.js";const _={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},w={name:"ArrowRightIcon"},X=Object.assign(w,{setup(k){const e={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,-3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"5 12"},r=2,a=c(new Array(r).fill(0).map(()=>c())),s=v([]);for(let n=0;n<r;n++)s[n]=h(a.value[n],{initial:e.normal[n],enter:e.normal[n]});const i=n=>{for(let t=0;t<r;t++){const g=n==="animate"?e.animate[t]:e.normal[t];s[t].apply({...g})}};function f(){i("animate")}function p(){i("normal")}return(n,t)=>(m(),u("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:f,onMouseleave:p,role:"button",tabindex:"0"},[(m(),u("svg",_,[d(o(l),{is:"path",ref:o(a)[0],d:"m12 5 7 7-7 7"},null,512),d(o(l),{is:"path",ref:o(a)[1],d:"M5 12h14","transform-origin":e.transformOrigin},null,8,["transform-origin"])]))],32))}});export{X as default};
