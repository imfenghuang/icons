import{u as i,M as s}from"./index-BNTCX4G0.js";import{r as u,o as c,c as l,b as x,a as m,u as d}from"./index-DkHMRhTS.js";const v={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h={name:"ClockIcon"},b=Object.assign(h,{setup(k){const n={normal:{rotate:0},animate:{minute:{rotate:45,transition:{duration:500,ease:"easeInOut"}},hour:{rotate:360,transition:{duration:600,ease:[.4,0,.2,1]}}}},r=u(),f=i(r,{initial:n.normal,enter:n.normal}),o=u(),g=i(o,{initial:n.normal,enter:n.normal}),a=e=>{let t=e==="animate"?n[e].hour:n[e];f.apply({...t,transition:{duration:600,...t.transition}}),t=e==="animate"?n[e].minute:n[e],g.apply({...t,transition:{duration:500,...t.transition}})};function _(){a("animate")}function p(){a("normal")}return(e,t)=>(c(),l("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:_,onMouseleave:p,role:"button",tabindex:"0"},[(c(),l("svg",v,[t[0]||(t[0]=x("circle",{cx:"12",cy:"12",r:"10"},null,-1)),m(d(s),{is:"line",ref_key:"targetHour",ref:r,x1:"12",y1:"12",x2:"12",y2:"6","transform-origin":"center center"},null,512),m(d(s),{is:"line",ref_key:"targetMinute",ref:o,x1:"12",y1:"12",x2:"16",y2:"12","transform-origin":"center center"},null,512)]))],32))}});export{b as default};