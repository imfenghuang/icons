import{u as v,M as r}from"./index-C6wxZgXD.js";import{r as p,d as x,o as u,c as d,a as o,u as n}from"./index-BqfN44Ex.js";const _={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},M={name:"AlarmClockIcon"},b=Object.assign(M,{setup(w){const f={normal:{y:0,x:0,transition:{duration:200,type:"spring",stiffness:200,damping:25}},animate:{y:-1.5,x:[-1,1,-1,1,-1,0],transition:{y:{duration:200,type:"spring",stiffness:200,damping:25},x:{duration:300,repeat:1/0,ease:"linear"}}}},m={normal:{y:0,x:0,transition:{duration:200,type:"spring",stiffness:200,damping:25}},animate:{y:-2.5,x:[-2,2,-2,2,-2,0],transition:{y:{duration:200,type:"spring",stiffness:200,damping:25},x:{duration:300,repeat:1/0,ease:"linear"}}}},i=6,s=Array.from({length:i},t=>t<4?f:m),e=p(new Array(i).fill(0).map(()=>p())),l=x([]);for(let t=0;t<i;t++)l[t]=v(e.value[t],{initial:s[t].normal,enter:s[t].normal});const c=t=>{for(let a=0;a<i;a++){const y=t==="animate"?s[a].animate:s[a].normal;l[a].apply(y)}};function h(){c("animate")}function g(){c("normal")}return(t,a)=>(u(),d("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:h,onMouseleave:g,role:"button",tabindex:"0"},[(u(),d("svg",_,[o(n(r),{is:"path",ref:n(e)[0],d:"M18 20.5L19.5 22"},null,512),o(n(r),{is:"path",ref:n(e)[1],d:"M6 20.5L4.5 22"},null,512),o(n(r),{is:"path",ref:n(e)[2],d:"M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"},null,512),o(n(r),{is:"path",ref:n(e)[3],d:"M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"},null,512),o(n(r),{is:"path",ref:n(e)[4],d:"M18 2L21.747 5.31064"},null,512),o(n(r),{is:"path",ref:n(e)[5],d:"M6 2L2.25304 5.31064"},null,512)]))],32))}});export{b as default};
