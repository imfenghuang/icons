import{u as _,M as c}from"./index-B403mLlK.js";import{r as m,d as x,o as d,c as f,a as p,w as g,u as o,b as a}from"./index-B1IPEPJw.js";const M={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{overflow:"visible"}},b={name:"ClapIcon"},I=Object.assign(b,{setup(k){const n={normal:{rotate:0},animate:[{rotate:[-10,-10,0],transition:{duration:800,times:[0,.5,1],ease:"easeInOut"}},{rotate:[0,-10,16,0],transition:{duration:400,times:[0,.3,.6,1],ease:"easeInOut"}}]},i=["4 20","3 11"],r=2,s=m(new Array(r).fill(0).map(()=>m())),l=x([]);for(let e=0;e<r;e++)l[e]=_(s.value[e],{initial:n.normal,enter:n.normal});const u=e=>{for(let t=0;t<r;t++){const w=e==="animate"?n.animate[t]:n.normal;l[t].apply(w)}};function v(){u("animate")}function h(){u("normal")}return(e,t)=>(d(),f("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:v,onMouseleave:h,role:"button",tabindex:"0"},[(d(),f("svg",M,[p(o(c),{is:"g",ref:o(s)[0],"transform-origin":i[0]},{default:g(()=>[p(o(c),{is:"g",ref:o(s)[1],"transform-origin":i[1]},{default:g(()=>t[0]||(t[0]=[a("path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"},null,-1),a("path",{d:"m6.2 5.3 3.1 3.9"},null,-1),a("path",{d:"m12.4 3.4 3.1 4"},null,-1)])),_:1},8,["transform-origin"]),t[1]||(t[1]=a("path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"},null,-1))]),_:1},8,["transform-origin"])]))],32))}});export{I as default};