import{u as _,M as l}from"./index-C6wxZgXD.js";import{r as c,d as g,o as u,c as m,a as d,u as o}from"./index-BqfN44Ex.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},k={name:"ChevronsLeftRightIcon"},j=Object.assign(k,{setup(x){const f={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0},animate:[{translateX:-2},{translateX:2}]},a=2,r=c(new Array(a).fill(0).map(()=>c())),s=g([]);for(let n=0;n<a;n++)s[n]=_(r.value[n],{initial:e.normal,enter:e.normal});const i=n=>{for(let t=0;t<a;t++){const v=n==="animate"?e[n][t]:e[n];s[t].apply({...v,...f})}};function p(){i("animate")}function h(){i("normal")}return(n,t)=>(u(),m("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:p,onMouseleave:h,role:"button",tabindex:"0"},[(u(),m("svg",w,[d(o(l),{is:"path",ref:o(r)[0],d:"m9 7-5 5 5 5"},null,512),d(o(l),{is:"path",ref:o(r)[1],d:"m15 7 5 5-5 5"},null,512)]))],32))}});export{j as default};
