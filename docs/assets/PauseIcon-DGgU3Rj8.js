import{u as _,M as l}from"./index-C6wxZgXD.js";import{r as u,d as g,o as m,c as d,a as f,u as o}from"./index-BqfN44Ex.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},x={name:"PlayIcon"},j=Object.assign(x,{setup(y){const s={transition:{times:[0,.2,.5,1],duration:500,stiffness:260,damping:20}},n={normal:{y:0},animate:[{y:[0,2,0,0],...s},{y:[0,0,2,0],...s}]},r=2,a=u(new Array(r).fill(0).map(()=>u())),i=g([]);for(let e=0;e<r;e++)i[e]=_(a.value[e],{initial:n.normal,enter:n.normal});const c=e=>{for(let t=0;t<r;t++){const v=e==="animate"?n[e][t]:n[e];i[t].apply(v)}};function h(){c("animate")}function p(){c("normal")}return(e,t)=>(m(),d("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:h,onMouseleave:p,role:"button",tabindex:"0"},[(m(),d("svg",w,[f(o(l),{is:"rect",ref:o(a)[0],x:"6",y:"4",width:"4",height:"16",rx:"1"},null,512),f(o(l),{is:"rect",ref:o(a)[1],x:"14",y:"4",width:"4",height:"16",rx:"1"},null,512)]))],32))}});export{j as default};
