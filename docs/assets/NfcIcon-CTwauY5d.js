import{u as _,M as w}from"./index-BDim0dzv.js";import{r as p,d as M,e as k,o as u,c as f,F as x,f as I,a as b,u as g}from"./index-C2o_ES75.js";const F={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},L={name:"NfcIcon"},O=Object.assign(L,{setup(j){const i=[{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",delay:0},{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",delay:150},{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",delay:300},{d:"M16.37 2a20.16 20.16 0 0 1 0 20",delay:450}],o={normal:{opacity:1},fadeIn:n=>({opacity:1,transition:{type:"spring",stiffness:300,damping:20,delay:i[n].delay}}),fadeOut:n=>({opacity:n===0?1:0,transition:{duration:200}})},r=i.length,l=p(new Array(r).fill(0).map(()=>p())),c=M([]);for(let n=0;n<r;n++)c[n]=_(l.value[n],{initial:o.normal,enter:o.normal});k(()=>{for(let n=0;n<r;n++)c[n].target=l.value[n]});const m=async(n,t)=>{const a=[];for(let e=0;e<r;e++){const d=n==="animate"?o[t](e,n):o.normal,y=c[e];a.push(y.apply(d))}return await Promise.all(a)},s=async(n,t=1/0)=>{if(await m(n,"fadeOut"),n==="animate"){if(await m(n,"fadeIn"),t===1/0){s(n,t);return}t--,t&&s(n,t)}};function h(){s("animate")}function v(){s("normal")}return(n,t)=>(u(),f("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:h,onMouseleave:v,role:"button",tabindex:"0"},[(u(),f("svg",F,[(u(),f(x,null,I(i,(a,e)=>b(g(w),{is:"path",key:a.d,ref_for:!0,ref:d=>g(l)[e]=d,d:a.d},null,8,["d"])),64))]))],32))}});export{O as default};