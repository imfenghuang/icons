import{u as _,M as l}from"./index-BNWZKEDJ.js";import{r as c,d as g,o as u,c as m,a as d,u as o}from"./index-WHaqlxaC.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},k={name:"ChevronsUpDownIcon"},B=Object.assign(k,{setup(x){const f={transition:{type:"spring",stiffness:250,damping:25}},t={normal:{translateY:0},animate:[{translateY:2},{translateY:-2}]},a=2,r=c(new Array(a).fill(0).map(()=>c())),s=g([]);for(let n=0;n<a;n++)s[n]=_(r.value[n],{initial:t.normal,enter:t.normal});const i=n=>{for(let e=0;e<a;e++){const h=n==="animate"?t[n][e]:t[n];s[e].apply({...h,...f})}};function p(){i("animate")}function v(){i("normal")}return(n,e)=>(u(),m("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:p,onMouseleave:v,role:"button",tabindex:"0"},[(u(),m("svg",w,[d(o(l),{is:"path",ref:o(r)[0],d:"m7 15 5 5 5-5"},null,512),d(o(l),{is:"path",ref:o(r)[1],d:"m7 9 5-5 5 5"},null,512)]))],32))}});export{B as default};