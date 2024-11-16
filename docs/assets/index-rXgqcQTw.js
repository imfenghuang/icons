(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const an={},Xt=[],tt=()=>{},cc=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xr=n=>n.startsWith("onUpdate:"),wn=Object.assign,Ur=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},uc=Object.prototype.hasOwnProperty,tn=(n,t)=>uc.call(n,t),Y=Array.isArray,Ut=n=>_o(n)==="[object Map]",Bs=n=>_o(n)==="[object Set]",X=n=>typeof n=="function",gn=n=>typeof n=="string",dt=n=>typeof n=="symbol",fn=n=>n!==null&&typeof n=="object",Ds=n=>(fn(n)||X(n))&&X(n.then)&&X(n.catch),Vs=Object.prototype.toString,_o=n=>Vs.call(n),dc=n=>_o(n).slice(8,-1),zs=n=>_o(n)==="[object Object]",Wr=n=>gn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,le=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},fc=/-(\w)/g,Vn=bo(n=>n.replace(fc,(t,e)=>e?e.toUpperCase():"")),pc=/\B([A-Z])/g,Ct=bo(n=>n.replace(pc,"-$1").toLowerCase()),Mo=bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xo=bo(n=>n?`on${Mo(n)}`:""),wt=(n,t)=>!Object.is(n,t),Uo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ys=(n,t,e,o=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:o,value:e})},mc=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ei;const ko=()=>Ei||(Ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xt(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++){const o=n[e],r=gn(o)?yc(o):xt(o);if(r)for(const i in r)t[i]=r[i]}return t}else if(gn(n)||fn(n))return n}const hc=/;(?![^(]*\))/g,gc=/:([^]+)/,vc=/\/\*[^]*?\*\//g;function yc(n){const t={};return n.replace(vc,"").split(hc).forEach(e=>{if(e){const o=e.split(gc);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Xn(n){let t="";if(gn(n))t=n;else if(Y(n))for(let e=0;e<n.length;e++){const o=Xn(n[e]);o&&(t+=o+" ")}else if(fn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function wc(n){if(!n)return null;let{class:t,style:e}=n;return t&&!gn(t)&&(n.class=Xn(t)),e&&(n.style=xt(e)),n}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_c=Yr(xc);function Xs(n){return!!n||n===""}const Us=n=>!!(n&&n.__v_isRef===!0),be=n=>gn(n)?n:n==null?"":Y(n)||fn(n)&&(n.toString===Vs||!X(n.toString))?Us(n)?be(n.value):JSON.stringify(n,Ws,2):String(n),Ws=(n,t)=>Us(t)?Ws(n,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[o,r],i)=>(e[Wo(o,i)+" =>"]=r,e),{})}:Bs(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Wo(e))}:dt(t)?Wo(t):fn(t)&&!Y(t)&&!zs(t)?String(t):t,Wo=(n,t="")=>{var e;return dt(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class bc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tn,!t&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Tn;try{return Tn=this,t()}finally{Tn=e}}}on(){Tn=this}off(){Tn=this.parent}stop(t){if(this._active){let e,o;for(e=0,o=this.effects.length;e<o;e++)this.effects[e].stop();for(e=0,o=this.cleanups.length;e<o;e++)this.cleanups[e]();if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Gr(){return Tn}function Gs(n,t=!1){Tn&&Tn.cleanups.push(n)}let cn;const Go=new WeakSet;class qs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ai(this),Js(this);const t=cn,e=Un;cn=this,Un=!0;try{return this.fn()}finally{Qs(this),cn=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zr(t);this.deps=this.depsTail=void 0,Ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pr(this)&&this.run()}get dirty(){return pr(this)}}let Ks=0,ce,ue;function Zs(n,t=!1){if(n.flags|=8,t){n.next=ue,ue=n;return}n.next=ce,ce=n}function qr(){Ks++}function Kr(){if(--Ks>0)return;if(ue){let t=ue;for(ue=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ce;){let t=ce;for(ce=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){n||(n=o)}t=e}}if(n)throw n}function Js(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qs(n){let t,e=n.depsTail,o=e;for(;o;){const r=o.prevDep;o.version===-1?(o===e&&(e=r),Zr(o),Mc(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}n.deps=t,n.depsTail=e}function pr(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(na(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function na(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Me))return;n.globalVersion=Me;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!pr(n)){n.flags&=-3;return}const e=cn,o=Un;cn=n,Un=!0;try{Js(n);const r=n.fn(n._value);(t.version===0||wt(r,n._value))&&(n._value=r,t.version++)}catch(r){throw t.version++,r}finally{cn=e,Un=o,Qs(n),n.flags&=-3}}function Zr(n,t=!1){const{dep:e,prevSub:o,nextSub:r}=n;if(o&&(o.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=o,n.nextSub=void 0),e.subs===n&&(e.subs=o,!o&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)Zr(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Mc(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Un=!0;const ta=[];function It(){ta.push(Un),Un=!1}function Lt(){const n=ta.pop();Un=n===void 0?!0:n}function Ai(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=cn;cn=void 0;try{t()}finally{cn=e}}}let Me=0;class kc{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!cn||!Un||cn===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==cn)e=this.activeLink=new kc(cn,this),cn.deps?(e.prevDep=cn.depsTail,cn.depsTail.nextDep=e,cn.depsTail=e):cn.deps=cn.depsTail=e,ea(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const o=e.nextDep;o.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=o),e.prevDep=cn.depsTail,e.nextDep=void 0,cn.depsTail.nextDep=e,cn.depsTail=e,cn.deps===e&&(cn.deps=o)}return e}trigger(t){this.version++,Me++,this.notify(t)}notify(t){qr();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Kr()}}}function ea(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)ea(o)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const mr=new WeakMap,Pt=Symbol(""),hr=Symbol(""),ke=Symbol("");function kn(n,t,e){if(Un&&cn){let o=mr.get(n);o||mr.set(n,o=new Map);let r=o.get(e);r||(o.set(e,r=new Jr),r.map=o,r.key=e),r.track()}}function ct(n,t,e,o,r,i){const s=mr.get(n);if(!s){Me++;return}const a=l=>{l&&l.trigger()};if(qr(),t==="clear")s.forEach(a);else{const l=Y(n),c=l&&Wr(e);if(l&&e==="length"){const u=Number(o);s.forEach((d,f)=>{(f==="length"||f===ke||!dt(f)&&f>=u)&&a(d)})}else switch((e!==void 0||s.has(void 0))&&a(s.get(e)),c&&a(s.get(ke)),t){case"add":l?c&&a(s.get("length")):(a(s.get(Pt)),Ut(n)&&a(s.get(hr)));break;case"delete":l||(a(s.get(Pt)),Ut(n)&&a(s.get(hr)));break;case"set":Ut(n)&&a(s.get(Pt));break}}Kr()}function zt(n){const t=nn(n);return t===n?t:(kn(t,"iterate",ke),Bn(n)?t:t.map(Cn))}function Co(n){return kn(n=nn(n),"iterate",ke),n}const Cc={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,Cn)},concat(...n){return zt(this).concat(...n.map(t=>Y(t)?zt(t):t))},entries(){return qo(this,"entries",n=>(n[1]=Cn(n[1]),n))},every(n,t){return at(this,"every",n,t,void 0,arguments)},filter(n,t){return at(this,"filter",n,t,e=>e.map(Cn),arguments)},find(n,t){return at(this,"find",n,t,Cn,arguments)},findIndex(n,t){return at(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return at(this,"findLast",n,t,Cn,arguments)},findLastIndex(n,t){return at(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return at(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return zt(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,t){return at(this,"map",n,t,void 0,arguments)},pop(){return re(this,"pop")},push(...n){return re(this,"push",n)},reduce(n,...t){return Fi(this,"reduce",n,t)},reduceRight(n,...t){return Fi(this,"reduceRight",n,t)},shift(){return re(this,"shift")},some(n,t){return at(this,"some",n,t,void 0,arguments)},splice(...n){return re(this,"splice",n)},toReversed(){return zt(this).toReversed()},toSorted(n){return zt(this).toSorted(n)},toSpliced(...n){return zt(this).toSpliced(...n)},unshift(...n){return re(this,"unshift",n)},values(){return qo(this,"values",Cn)}};function qo(n,t,e){const o=Co(n),r=o[t]();return o!==n&&!Bn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=e(i.value)),i}),r}const Ic=Array.prototype;function at(n,t,e,o,r,i){const s=Co(n),a=s!==n&&!Bn(n),l=s[t];if(l!==Ic[t]){const d=l.apply(n,i);return a?Cn(d):d}let c=e;s!==n&&(a?c=function(d,f){return e.call(this,Cn(d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(s,c,o);return a&&r?r(u):u}function Fi(n,t,e,o){const r=Co(n);let i=e;return r!==n&&(Bn(n)?e.length>3&&(i=function(s,a,l){return e.call(this,s,a,l,n)}):i=function(s,a,l){return e.call(this,s,Cn(a),l,n)}),r[t](i,...o)}function Ko(n,t,e){const o=nn(n);kn(o,"iterate",ke);const r=o[t](...e);return(r===-1||r===!1)&&ei(e[0])?(e[0]=nn(e[0]),o[t](...e)):r}function re(n,t,e=[]){It(),qr();const o=nn(n)[t].apply(n,e);return Kr(),Lt(),o}const Lc=Yr("__proto__,__v_isRef,__isVue"),oa=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(dt));function Hc(n){dt(n)||(n=String(n));const t=nn(this);return kn(t,"has",n),t.hasOwnProperty(n)}class ra{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,o){const r=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return i;if(e==="__v_raw")return o===(r?i?Rc:la:i?aa:sa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const s=Y(t);if(!r){let l;if(s&&(l=Cc[e]))return l;if(e==="hasOwnProperty")return Hc}const a=Reflect.get(t,e,In(t)?t:o);return(dt(e)?oa.has(e):Lc(e))||(r||kn(t,"get",e),i)?a:In(a)?s&&Wr(e)?a:a.value:fn(a)?r?ni(a):rn(a):a}}class ia extends ra{constructor(t=!1){super(!1,t)}set(t,e,o,r){let i=t[e];if(!this._isShallow){const l=Nt(i);if(!Bn(o)&&!Nt(o)&&(i=nn(i),o=nn(o)),!Y(t)&&In(i)&&!In(o))return l?!1:(i.value=o,!0)}const s=Y(t)&&Wr(e)?Number(e)<t.length:tn(t,e),a=Reflect.set(t,e,o,In(t)?t:r);return t===nn(r)&&(s?wt(o,i)&&ct(t,"set",e,o):ct(t,"add",e,o)),a}deleteProperty(t,e){const o=tn(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&o&&ct(t,"delete",e,void 0),r}has(t,e){const o=Reflect.has(t,e);return(!dt(e)||!oa.has(e))&&kn(t,"has",e),o}ownKeys(t){return kn(t,"iterate",Y(t)?"length":Pt),Reflect.ownKeys(t)}}class Tc extends ra{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Oc=new ia,$c=new Tc,Sc=new ia(!0);const gr=n=>n,We=n=>Reflect.getPrototypeOf(n);function jc(n,t,e){return function(...o){const r=this.__v_raw,i=nn(r),s=Ut(i),a=n==="entries"||n===Symbol.iterator&&s,l=n==="keys"&&s,c=r[n](...o),u=e?gr:t?vr:Cn;return!t&&kn(i,"iterate",l?hr:Pt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ge(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ec(n,t){const e={get(r){const i=this.__v_raw,s=nn(i),a=nn(r);n||(wt(r,a)&&kn(s,"get",r),kn(s,"get",a));const{has:l}=We(s),c=t?gr:n?vr:Cn;if(l.call(s,r))return c(i.get(r));if(l.call(s,a))return c(i.get(a));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!n&&kn(nn(r),"iterate",Pt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,s=nn(i),a=nn(r);return n||(wt(r,a)&&kn(s,"has",r),kn(s,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const s=this,a=s.__v_raw,l=nn(a),c=t?gr:n?vr:Cn;return!n&&kn(l,"iterate",Pt),a.forEach((u,d)=>r.call(i,c(u),c(d),s))}};return wn(e,n?{add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear")}:{add(r){!t&&!Bn(r)&&!Nt(r)&&(r=nn(r));const i=nn(this);return We(i).has.call(i,r)||(i.add(r),ct(i,"add",r,r)),this},set(r,i){!t&&!Bn(i)&&!Nt(i)&&(i=nn(i));const s=nn(this),{has:a,get:l}=We(s);let c=a.call(s,r);c||(r=nn(r),c=a.call(s,r));const u=l.call(s,r);return s.set(r,i),c?wt(i,u)&&ct(s,"set",r,i):ct(s,"add",r,i),this},delete(r){const i=nn(this),{has:s,get:a}=We(i);let l=s.call(i,r);l||(r=nn(r),l=s.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&ct(i,"delete",r,void 0),c},clear(){const r=nn(this),i=r.size!==0,s=r.clear();return i&&ct(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=jc(r,n,t)}),e}function Qr(n,t){const e=Ec(n,t);return(o,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?o:Reflect.get(tn(e,r)&&r in o?e:o,r,i)}const Ac={get:Qr(!1,!1)},Fc={get:Qr(!1,!0)},Pc={get:Qr(!0,!1)};const sa=new WeakMap,aa=new WeakMap,la=new WeakMap,Rc=new WeakMap;function Nc(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bc(n){return n.__v_skip||!Object.isExtensible(n)?0:Nc(dc(n))}function rn(n){return Nt(n)?n:ti(n,!1,Oc,Ac,sa)}function Dc(n){return ti(n,!1,Sc,Fc,aa)}function ni(n){return ti(n,!0,$c,Pc,la)}function ti(n,t,e,o,r){if(!fn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=r.get(n);if(i)return i;const s=Bc(n);if(s===0)return n;const a=new Proxy(n,s===2?o:e);return r.set(n,a),a}function Wt(n){return Nt(n)?Wt(n.__v_raw):!!(n&&n.__v_isReactive)}function Nt(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function ei(n){return n?!!n.__v_raw:!1}function nn(n){const t=n&&n.__v_raw;return t?nn(t):n}function Vc(n){return!tn(n,"__v_skip")&&Object.isExtensible(n)&&Ys(n,"__v_skip",!0),n}const Cn=n=>fn(n)?rn(n):n,vr=n=>fn(n)?ni(n):n;function In(n){return n?n.__v_isRef===!0:!1}function M(n){return ca(n,!1)}function yr(n){return ca(n,!0)}function ca(n,t){return In(n)?n:new zc(n,t)}class zc{constructor(t,e){this.dep=new Jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:nn(t),this._value=e?t:Cn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,o=this.__v_isShallow||Bn(t)||Nt(t);t=o?t:nn(t),wt(t,e)&&(this._rawValue=t,this._value=o?t:Cn(t),this.dep.trigger())}}function v(n){return In(n)?n.value:n}const Yc={get:(n,t,e)=>t==="__v_raw"?n:v(Reflect.get(n,t,e)),set:(n,t,e,o)=>{const r=n[t];return In(r)&&!In(e)?(r.value=e,!0):Reflect.set(n,t,e,o)}};function ua(n){return Wt(n)?n:new Proxy(n,Yc)}class Xc{constructor(t,e,o){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Me-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&cn!==this)return Zs(this,!0),!0}get value(){const t=this.dep.track();return na(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Uc(n,t,e=!1){let o,r;return X(n)?o=n:(o=n.get,r=n.set),new Xc(o,r,e)}const qe={},lo=new WeakMap;let Et;function Wc(n,t=!1,e=Et){if(e){let o=lo.get(e);o||lo.set(e,o=[]),o.push(n)}}function Gc(n,t,e=an){const{immediate:o,deep:r,once:i,scheduler:s,augmentJob:a,call:l}=e,c=T=>r?T:Bn(T)||r===!1||r===0?ut(T,1):ut(T);let u,d,f,m,g=!1,k=!1;if(In(n)?(d=()=>n.value,g=Bn(n)):Wt(n)?(d=()=>c(n),g=!0):Y(n)?(k=!0,g=n.some(T=>Wt(T)||Bn(T)),d=()=>n.map(T=>{if(In(T))return T.value;if(Wt(T))return c(T);if(X(T))return l?l(T,2):T()})):X(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){It();try{f()}finally{Lt()}}const T=Et;Et=u;try{return l?l(n,3,[m]):n(m)}finally{Et=T}}:d=tt,t&&r){const T=d,N=r===!0?1/0:r;d=()=>ut(T(),N)}const j=Gr(),C=()=>{u.stop(),j&&Ur(j.effects,u)};if(i&&t){const T=t;t=(...N)=>{T(...N),C()}}let L=k?new Array(n.length).fill(qe):qe;const H=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(t){const N=u.run();if(r||g||(k?N.some((W,G)=>wt(W,L[G])):wt(N,L))){f&&f();const W=Et;Et=u;try{const G=[N,L===qe?void 0:k&&L[0]===qe?[]:L,m];l?l(t,3,G):t(...G),L=N}finally{Et=W}}}else u.run()};return a&&a(H),u=new qs(d),u.scheduler=s?()=>s(H,!1):H,m=T=>Wc(T,!1,u),f=u.onStop=()=>{const T=lo.get(u);if(T){if(l)l(T,4);else for(const N of T)N();lo.delete(u)}},t?o?H(!0):L=u.run():s?s(H.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function ut(n,t=1/0,e){if(t<=0||!fn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,In(n))ut(n.value,t,e);else if(Y(n))for(let o=0;o<n.length;o++)ut(n[o],t,e);else if(Bs(n)||Ut(n))n.forEach(o=>{ut(o,t,e)});else if(zs(n)){for(const o in n)ut(n[o],t,e);for(const o of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,o)&&ut(n[o],t,e)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Be(n,t,e,o){try{return o?n(...o):n()}catch(r){Io(r,t,e)}}function rt(n,t,e,o){if(X(n)){const r=Be(n,t,e,o);return r&&Ds(r)&&r.catch(i=>{Io(i,t,e)}),r}if(Y(n)){const r=[];for(let i=0;i<n.length;i++)r.push(rt(n[i],t,e,o));return r}}function Io(n,t,e,o=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||an;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(i){It(),Be(i,null,10,[n,l,c]),Lt();return}}qc(n,e,r,o,s)}function qc(n,t,e,o=!0,r=!1){if(r)throw n;console.error(n)}const On=[];let Qn=-1;const Gt=[];let gt=null,Yt=0;const da=Promise.resolve();let co=null;function Lo(n){const t=co||da;return n?t.then(this?n.bind(this):n):t}function Kc(n){let t=Qn+1,e=On.length;for(;t<e;){const o=t+e>>>1,r=On[o],i=Ce(r);i<n||i===n&&r.flags&2?t=o+1:e=o}return t}function oi(n){if(!(n.flags&1)){const t=Ce(n),e=On[On.length-1];!e||!(n.flags&2)&&t>=Ce(e)?On.push(n):On.splice(Kc(t),0,n),n.flags|=1,fa()}}function fa(){co||(co=da.then(ma))}function Zc(n){Y(n)?Gt.push(...n):gt&&n.id===-1?gt.splice(Yt+1,0,n):n.flags&1||(Gt.push(n),n.flags|=1),fa()}function Pi(n,t,e=Qn+1){for(;e<On.length;e++){const o=On[e];if(o&&o.flags&2){if(n&&o.id!==n.uid)continue;On.splice(e,1),e--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function pa(n){if(Gt.length){const t=[...new Set(Gt)].sort((e,o)=>Ce(e)-Ce(o));if(Gt.length=0,gt){gt.push(...t);return}for(gt=t,Yt=0;Yt<gt.length;Yt++){const e=gt[Yt];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gt=null,Yt=0}}const Ce=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ma(n){try{for(Qn=0;Qn<On.length;Qn++){const t=On[Qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Be(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qn<On.length;Qn++){const t=On[Qn];t&&(t.flags&=-2)}Qn=-1,On.length=0,pa(),co=null,(On.length||Gt.length)&&ma()}}let yn=null,Ho=null;function uo(n){const t=yn;return yn=n,Ho=n&&n.type.__scopeId||null,t}function Jc(n){Ho=n}function Qc(){Ho=null}const nu=n=>on;function on(n,t=yn,e){if(!t||n._n)return n;const o=(...r)=>{o._d&&Ui(-1);const i=uo(t);let s;try{s=n(...r)}finally{uo(i),o._d&&Ui(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function Zo(n,t){if(yn===null)return n;const e=Eo(yn),o=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[i,s,a,l=an]=t[r];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&ut(s),o.push({dir:i,instance:e,value:s,oldValue:void 0,arg:a,modifiers:l}))}return n}function Tt(n,t,e,o){const r=n.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){const a=r[s];i&&(a.oldValue=i[s].value);let l=a.dir[o];l&&(It(),rt(l,e,8,[n.el,a,n,t]),Lt())}}const tu=Symbol("_vte"),eu=n=>n.__isTeleport;function ri(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ri(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ne(n,t){return X(n)?wn({name:n.name},t,{setup:n}):n}function ha(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wr(n,t,e,o,r=!1){if(Y(n)){n.forEach((g,k)=>wr(g,t&&(Y(t)?t[k]:t),e,o,r));return}if(qt(o)&&!r)return;const i=o.shapeFlag&4?Eo(o.component):o.el,s=r?null:i,{i:a,r:l}=n,c=t&&t.r,u=a.refs===an?a.refs={}:a.refs,d=a.setupState,f=nn(d),m=d===an?()=>!1:g=>tn(f,g);if(c!=null&&c!==l&&(gn(c)?(u[c]=null,m(c)&&(d[c]=null)):In(c)&&(c.value=null)),X(l))Be(l,a,12,[s,u]);else{const g=gn(l),k=In(l);if(g||k){const j=()=>{if(n.f){const C=g?m(l)?d[l]:u[l]:l.value;r?Y(C)&&Ur(C,i):Y(C)?C.includes(i)||C.push(i):g?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],n.k&&(u[n.k]=l.value))}else g?(u[l]=s,m(l)&&(d[l]=s)):k&&(l.value=s,n.k&&(u[n.k]=s))};s?(j.id=-1,Fn(j,e)):j()}}}ko().requestIdleCallback;ko().cancelIdleCallback;const qt=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function ou(n,t){va(n,"a",t)}function ru(n,t){va(n,"da",t)}function va(n,t,e=_n){const o=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(To(t,o,e),e){let r=e.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&iu(o,t,e,r),r=r.parent}}function iu(n,t,e,o){const r=To(t,n,o,!0);Oo(()=>{Ur(o[t],r)},e)}function To(n,t,e=_n,o=!1){if(e){const r=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...s)=>{It();const a=De(e),l=rt(t,e,n,s);return a(),Lt(),l});return o?r.unshift(i):r.push(i),i}}const ft=n=>(t,e=_n)=>{(!Oe||n==="sp")&&To(n,(...o)=>t(...o),e)},su=ft("bm"),$n=ft("m"),au=ft("bu"),ya=ft("u"),lu=ft("bum"),Oo=ft("um"),cu=ft("sp"),uu=ft("rtg"),du=ft("rtc");function fu(n,t=_n){To("ec",n,t)}const ii="components",pu="directives";function Ie(n,t){return si(ii,n,!0,t)||n}const wa=Symbol.for("v-ndc");function mu(n){return gn(n)?si(ii,n,!1)||n:n||wa}function hu(n){return si(pu,n)}function si(n,t,e=!0,o=!1){const r=yn||_n;if(r){const i=r.type;if(n===ii){const a=td(i,!1);if(a&&(a===t||a===Vn(t)||a===Mo(Vn(t))))return i}const s=Ri(r[n]||i[n],t)||Ri(r.appContext[n],t);return!s&&o?i:s}}function Ri(n,t){return n&&(n[t]||n[Vn(t)]||n[Mo(Vn(t))])}function pt(n,t,e,o){let r;const i=e,s=Y(n);if(s||gn(n)){const a=s&&Wt(n);let l=!1;a&&(l=!Bn(n),n=Co(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=t(l?Cn(n[c]):n[c],c,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,i)}else if(fn(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,i)}}else r=[];return r}function Le(n,t,e={},o,r){if(yn.ce||yn.parent&&qt(yn.parent)&&yn.parent.ce)return t!=="default"&&(e.name=t),y(),it(mn,null,[b("slot",e,o)],64);let i=n[t];i&&i._c&&(i._d=!1),y();const s=i&&xa(i(e)),a=e.key||s&&s.key,l=it(mn,{key:(a&&!dt(a)?a:`_${t}`)+(!s&&o?"_fb":"")},s||[],s&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function xa(n){return n.some(t=>Te(t)?!(t.type===Mt||t.type===mn&&!xa(t.children)):!0)?n:null}const xr=n=>n?Da(n)?Eo(n):xr(n.parent):null,de=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xr(n.parent),$root:n=>xr(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ai(n),$forceUpdate:n=>n.f||(n.f=()=>{oi(n.update)}),$nextTick:n=>n.n||(n.n=Lo.bind(n.proxy)),$watch:n=>Nu.bind(n)}),Jo=(n,t)=>n!==an&&!n.__isScriptSetup&&tn(n,t),gu={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:o,data:r,props:i,accessCache:s,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return e[t];case 3:return i[t]}else{if(Jo(o,t))return s[t]=1,o[t];if(r!==an&&tn(r,t))return s[t]=2,r[t];if((c=n.propsOptions[0])&&tn(c,t))return s[t]=3,i[t];if(e!==an&&tn(e,t))return s[t]=4,e[t];_r&&(s[t]=0)}}const u=de[t];let d,f;if(u)return t==="$attrs"&&kn(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[t]))return d;if(e!==an&&tn(e,t))return s[t]=4,e[t];if(f=l.config.globalProperties,tn(f,t))return f[t]},set({_:n},t,e){const{data:o,setupState:r,ctx:i}=n;return Jo(r,t)?(r[t]=e,!0):o!==an&&tn(o,t)?(o[t]=e,!0):tn(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:o,appContext:r,propsOptions:i}},s){let a;return!!e[s]||n!==an&&tn(n,s)||Jo(t,s)||(a=i[0])&&tn(a,s)||tn(o,s)||tn(de,s)||tn(r.config.globalProperties,s)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:tn(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function vu(){return yu().slots}function yu(){const n=jo();return n.setupContext||(n.setupContext=za(n))}function Ni(n){return Y(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let _r=!0;function wu(n){const t=ai(n),e=n.proxy,o=n.ctx;_r=!1,t.beforeCreate&&Bi(t.beforeCreate,n,"bc");const{data:r,computed:i,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:k,deactivated:j,beforeDestroy:C,beforeUnmount:L,destroyed:H,unmounted:T,render:N,renderTracked:W,renderTriggered:G,errorCaptured:dn,serverPrefetch:sn,expose:Q,inheritAttrs:hn,components:vn,directives:xn,filters:pn}=t;if(c&&xu(c,o,null),s)for(const K in s){const q=s[K];X(q)&&(o[K]=q.bind(e))}if(r){const K=r.call(e,e);fn(K)&&(n.data=rn(K))}if(_r=!0,i)for(const K in i){const q=i[K],bn=X(q)?q.bind(e,e):X(q.get)?q.get.bind(e,e):tt,Vt=!X(q)&&X(q.set)?q.set.bind(e):tt,Ht=Dn({get:bn,set:Vt});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Gn=>Ht.value=Gn})}if(a)for(const K in a)_a(a[K],o,e,K);if(l){const K=X(l)?l.call(e):l;Reflect.ownKeys(K).forEach(q=>{Iu(q,K[q])})}u&&Bi(u,n,"c");function un(K,q){Y(q)?q.forEach(bn=>K(bn.bind(e))):q&&K(q.bind(e))}if(un(su,d),un($n,f),un(au,m),un(ya,g),un(ou,k),un(ru,j),un(fu,dn),un(du,W),un(uu,G),un(lu,L),un(Oo,T),un(cu,sn),Y(Q))if(Q.length){const K=n.exposed||(n.exposed={});Q.forEach(q=>{Object.defineProperty(K,q,{get:()=>e[q],set:bn=>e[q]=bn})})}else n.exposed||(n.exposed={});N&&n.render===tt&&(n.render=N),hn!=null&&(n.inheritAttrs=hn),vn&&(n.components=vn),xn&&(n.directives=xn),sn&&ha(n)}function xu(n,t,e=tt){Y(n)&&(n=br(n));for(const o in n){const r=n[o];let i;fn(r)?"default"in r?i=fe(r.from||o,r.default,!0):i=fe(r.from||o):i=fe(r),In(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[o]=i}}function Bi(n,t,e){rt(Y(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,e)}function _a(n,t,e,o){let r=o.includes(".")?Aa(e,o):()=>e[o];if(gn(n)){const i=t[n];X(i)&&Ln(r,i)}else if(X(n))Ln(r,n.bind(e));else if(fn(n))if(Y(n))n.forEach(i=>_a(i,t,e,o));else{const i=X(n.handler)?n.handler.bind(e):t[n.handler];X(i)&&Ln(r,i,n)}}function ai(n){const t=n.type,{mixins:e,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!e&&!o?l=t:(l={},r.length&&r.forEach(c=>fo(l,c,s,!0)),fo(l,t,s)),fn(t)&&i.set(t,l),l}function fo(n,t,e,o=!1){const{mixins:r,extends:i}=t;i&&fo(n,i,e,!0),r&&r.forEach(s=>fo(n,s,e,!0));for(const s in t)if(!(o&&s==="expose")){const a=_u[s]||e&&e[s];n[s]=a?a(n[s],t[s]):t[s]}return n}const _u={data:Di,props:Vi,emits:Vi,methods:ae,computed:ae,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:ae,directives:ae,watch:Mu,provide:Di,inject:bu};function Di(n,t){return t?n?function(){return wn(X(n)?n.call(this,this):n,X(t)?t.call(this,this):t)}:t:n}function bu(n,t){return ae(br(n),br(t))}function br(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Hn(n,t){return n?[...new Set([].concat(n,t))]:t}function ae(n,t){return n?wn(Object.create(null),n,t):t}function Vi(n,t){return n?Y(n)&&Y(t)?[...new Set([...n,...t])]:wn(Object.create(null),Ni(n),Ni(t??{})):t}function Mu(n,t){if(!n)return t;if(!t)return n;const e=wn(Object.create(null),n);for(const o in t)e[o]=Hn(n[o],t[o]);return e}function ba(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ku=0;function Cu(n,t){return function(o,r=null){X(o)||(o=wn({},o)),r!=null&&!fn(r)&&(r=null);const i=ba(),s=new WeakSet,a=[];let l=!1;const c=i.app={_uid:ku++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:od,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&X(u.install)?(s.add(u),u.install(c,...d)):X(u)&&(s.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!l){const m=c._ceVNode||b(o,r);return m.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(m,u):n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,Eo(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(rt(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Kt;Kt=c;try{return u()}finally{Kt=d}}};return c}}let Kt=null;function Iu(n,t){if(_n){let e=_n.provides;const o=_n.parent&&_n.parent.provides;o===e&&(e=_n.provides=Object.create(o)),e[n]=t}}function fe(n,t,e=!1){const o=_n||yn;if(o||Kt){const r=Kt?Kt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&X(t)?t.call(o&&o.proxy):t}}const Ma={},ka=()=>Object.create(Ma),Ca=n=>Object.getPrototypeOf(n)===Ma;function Lu(n,t,e,o=!1){const r={},i=ka();n.propsDefaults=Object.create(null),Ia(n,t,r,i);for(const s in n.propsOptions[0])s in r||(r[s]=void 0);e?n.props=o?r:Dc(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function Hu(n,t,e,o){const{props:r,attrs:i,vnode:{patchFlag:s}}=n,a=nn(r),[l]=n.propsOptions;let c=!1;if((o||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if($o(n.emitsOptions,f))continue;const m=t[f];if(l)if(tn(i,f))m!==i[f]&&(i[f]=m,c=!0);else{const g=Vn(f);r[g]=Mr(l,a,g,m,n,!1)}else m!==i[f]&&(i[f]=m,c=!0)}}}else{Ia(n,t,r,i)&&(c=!0);let u;for(const d in a)(!t||!tn(t,d)&&((u=Ct(d))===d||!tn(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(r[d]=Mr(l,a,d,void 0,n,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!tn(t,d))&&(delete i[d],c=!0)}c&&ct(n.attrs,"set","")}function Ia(n,t,e,o){const[r,i]=n.propsOptions;let s=!1,a;if(t)for(let l in t){if(le(l))continue;const c=t[l];let u;r&&tn(r,u=Vn(l))?!i||!i.includes(u)?e[u]=c:(a||(a={}))[u]=c:$o(n.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,s=!0)}if(i){const l=nn(e),c=a||an;for(let u=0;u<i.length;u++){const d=i[u];e[d]=Mr(r,l,d,c[d],n,!tn(c,d))}}return s}function Mr(n,t,e,o,r,i){const s=n[e];if(s!=null){const a=tn(s,"default");if(a&&o===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&X(l)){const{propsDefaults:c}=r;if(e in c)o=c[e];else{const u=De(r);o=c[e]=l.call(null,t),u()}}else o=l;r.ce&&r.ce._setProp(e,o)}s[0]&&(i&&!a?o=!1:s[1]&&(o===""||o===Ct(e))&&(o=!0))}return o}const Tu=new WeakMap;function La(n,t,e=!1){const o=e?Tu:t.propsCache,r=o.get(n);if(r)return r;const i=n.props,s={},a=[];let l=!1;if(!X(n)){const u=d=>{l=!0;const[f,m]=La(d,t,!0);wn(s,f),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!i&&!l)return fn(n)&&o.set(n,Xt),Xt;if(Y(i))for(let u=0;u<i.length;u++){const d=Vn(i[u]);zi(d)&&(s[d]=an)}else if(i)for(const u in i){const d=Vn(u);if(zi(d)){const f=i[u],m=s[d]=Y(f)||X(f)?{type:f}:wn({},f),g=m.type;let k=!1,j=!0;if(Y(g))for(let C=0;C<g.length;++C){const L=g[C],H=X(L)&&L.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(j=!1)}else k=X(g)&&g.name==="Boolean";m[0]=k,m[1]=j,(k||tn(m,"default"))&&a.push(d)}}const c=[s,a];return fn(n)&&o.set(n,c),c}function zi(n){return n[0]!=="$"&&!le(n)}const Ha=n=>n[0]==="_"||n==="$stable",li=n=>Y(n)?n.map(nt):[nt(n)],Ou=(n,t,e)=>{if(t._n)return t;const o=on((...r)=>li(t(...r)),e);return o._c=!1,o},Ta=(n,t,e)=>{const o=n._ctx;for(const r in n){if(Ha(r))continue;const i=n[r];if(X(i))t[r]=Ou(r,i,o);else if(i!=null){const s=li(i);t[r]=()=>s}}},Oa=(n,t)=>{const e=li(t);n.slots.default=()=>e},$a=(n,t,e)=>{for(const o in t)(e||o!=="_")&&(n[o]=t[o])},$u=(n,t,e)=>{const o=n.slots=ka();if(n.vnode.shapeFlag&32){const r=t._;r?($a(o,t,e),e&&Ys(o,"_",r,!0)):Ta(t,o)}else t&&Oa(n,t)},Su=(n,t,e)=>{const{vnode:o,slots:r}=n;let i=!0,s=an;if(o.shapeFlag&32){const a=t._;a?e&&a===1?i=!1:$a(r,t,e):(i=!t.$stable,Ta(t,r)),s=t}else t&&(Oa(n,t),s={default:1});if(i)for(const a in r)!Ha(a)&&s[a]==null&&delete r[a]},Fn=Uu;function ju(n){return Eu(n)}function Eu(n,t){const e=ko();e.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=tt,insertStaticContent:g}=n,k=(p,h,x,$=null,I=null,O=null,P=void 0,F=null,A=!!h.dynamicChildren)=>{if(p===h)return;p&&!ie(p,h)&&($=Ue(p),Gn(p,I,O,!0),p=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:S,ref:V,shapeFlag:R}=h;switch(S){case So:j(p,h,x,$);break;case Mt:C(p,h,x,$);break;case tr:p==null&&L(h,x,$,P);break;case mn:vn(p,h,x,$,I,O,P,F,A);break;default:R&1?N(p,h,x,$,I,O,P,F,A):R&6?xn(p,h,x,$,I,O,P,F,A):(R&64||R&128)&&S.process(p,h,x,$,I,O,P,F,A,ee)}V!=null&&I&&wr(V,p&&p.ref,O,h||p,!h)},j=(p,h,x,$)=>{if(p==null)o(h.el=a(h.children),x,$);else{const I=h.el=p.el;h.children!==p.children&&c(I,h.children)}},C=(p,h,x,$)=>{p==null?o(h.el=l(h.children||""),x,$):h.el=p.el},L=(p,h,x,$)=>{[p.el,p.anchor]=g(p.children,h,x,$,p.el,p.anchor)},H=({el:p,anchor:h},x,$)=>{let I;for(;p&&p!==h;)I=f(p),o(p,x,$),p=I;o(h,x,$)},T=({el:p,anchor:h})=>{let x;for(;p&&p!==h;)x=f(p),r(p),p=x;r(h)},N=(p,h,x,$,I,O,P,F,A)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),p==null?W(h,x,$,I,O,P,F,A):sn(p,h,I,O,P,F,A)},W=(p,h,x,$,I,O,P,F)=>{let A,S;const{props:V,shapeFlag:R,transition:D,dirs:z}=p;if(A=p.el=s(p.type,O,V&&V.is,V),R&8?u(A,p.children):R&16&&dn(p.children,A,null,$,I,Qo(p,O),P,F),z&&Tt(p,null,$,"created"),G(A,p,p.scopeId,P,$),V){for(const ln in V)ln!=="value"&&!le(ln)&&i(A,ln,null,V[ln],O,$);"value"in V&&i(A,"value",null,V.value,O),(S=V.onVnodeBeforeMount)&&Kn(S,$,p)}z&&Tt(p,null,$,"beforeMount");const Z=Au(I,D);Z&&D.beforeEnter(A),o(A,h,x),((S=V&&V.onVnodeMounted)||Z||z)&&Fn(()=>{S&&Kn(S,$,p),Z&&D.enter(A),z&&Tt(p,null,$,"mounted")},I)},G=(p,h,x,$,I)=>{if(x&&m(p,x),$)for(let O=0;O<$.length;O++)m(p,$[O]);if(I){let O=I.subTree;if(h===O||Pa(O.type)&&(O.ssContent===h||O.ssFallback===h)){const P=I.vnode;G(p,P,P.scopeId,P.slotScopeIds,I.parent)}}},dn=(p,h,x,$,I,O,P,F,A=0)=>{for(let S=A;S<p.length;S++){const V=p[S]=F?vt(p[S]):nt(p[S]);k(null,V,h,x,$,I,O,P,F)}},sn=(p,h,x,$,I,O,P)=>{const F=h.el=p.el;let{patchFlag:A,dynamicChildren:S,dirs:V}=h;A|=p.patchFlag&16;const R=p.props||an,D=h.props||an;let z;if(x&&Ot(x,!1),(z=D.onVnodeBeforeUpdate)&&Kn(z,x,h,p),V&&Tt(h,p,x,"beforeUpdate"),x&&Ot(x,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&u(F,""),S?Q(p.dynamicChildren,S,F,x,$,Qo(h,I),O):P||q(p,h,F,null,x,$,Qo(h,I),O,!1),A>0){if(A&16)hn(F,R,D,x,I);else if(A&2&&R.class!==D.class&&i(F,"class",null,D.class,I),A&4&&i(F,"style",R.style,D.style,I),A&8){const Z=h.dynamicProps;for(let ln=0;ln<Z.length;ln++){const en=Z[ln],jn=R[en],Mn=D[en];(Mn!==jn||en==="value")&&i(F,en,jn,Mn,I,x)}}A&1&&p.children!==h.children&&u(F,h.children)}else!P&&S==null&&hn(F,R,D,x,I);((z=D.onVnodeUpdated)||V)&&Fn(()=>{z&&Kn(z,x,h,p),V&&Tt(h,p,x,"updated")},$)},Q=(p,h,x,$,I,O,P)=>{for(let F=0;F<h.length;F++){const A=p[F],S=h[F],V=A.el&&(A.type===mn||!ie(A,S)||A.shapeFlag&70)?d(A.el):x;k(A,S,V,null,$,I,O,P,!0)}},hn=(p,h,x,$,I)=>{if(h!==x){if(h!==an)for(const O in h)!le(O)&&!(O in x)&&i(p,O,h[O],null,I,$);for(const O in x){if(le(O))continue;const P=x[O],F=h[O];P!==F&&O!=="value"&&i(p,O,F,P,I,$)}"value"in x&&i(p,"value",h.value,x.value,I)}},vn=(p,h,x,$,I,O,P,F,A)=>{const S=h.el=p?p.el:a(""),V=h.anchor=p?p.anchor:a("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:z}=h;z&&(F=F?F.concat(z):z),p==null?(o(S,x,$),o(V,x,$),dn(h.children||[],x,V,I,O,P,F,A)):R>0&&R&64&&D&&p.dynamicChildren?(Q(p.dynamicChildren,D,x,I,O,P,F),(h.key!=null||I&&h===I.subTree)&&Sa(p,h,!0)):q(p,h,x,V,I,O,P,F,A)},xn=(p,h,x,$,I,O,P,F,A)=>{h.slotScopeIds=F,p==null?h.shapeFlag&512?I.ctx.activate(h,x,$,P,A):pn(h,x,$,I,O,P,A):Rn(p,h,A)},pn=(p,h,x,$,I,O,P)=>{const F=p.component=Zu(p,$,I);if(ga(p)&&(F.ctx.renderer=ee),Ju(F,!1,P),F.asyncDep){if(I&&I.registerDep(F,un,P),!p.el){const A=F.subTree=b(Mt);C(null,A,h,x)}}else un(F,p,h,x,I,O,P)},Rn=(p,h,x)=>{const $=h.component=p.component;if(Yu(p,h,x))if($.asyncDep&&!$.asyncResolved){K($,h,x);return}else $.next=h,$.update();else h.el=p.el,$.vnode=h},un=(p,h,x,$,I,O,P)=>{const F=()=>{if(p.isMounted){let{next:R,bu:D,u:z,parent:Z,vnode:ln}=p;{const En=ja(p);if(En){R&&(R.el=ln.el,K(p,R,P)),En.asyncDep.then(()=>{p.isUnmounted||F()});return}}let en=R,jn;Ot(p,!1),R?(R.el=ln.el,K(p,R,P)):R=ln,D&&Uo(D),(jn=R.props&&R.props.onVnodeBeforeUpdate)&&Kn(jn,Z,R,ln),Ot(p,!0);const Mn=nr(p),zn=p.subTree;p.subTree=Mn,k(zn,Mn,d(zn.el),Ue(zn),p,I,O),R.el=Mn.el,en===null&&Xu(p,Mn.el),z&&Fn(z,I),(jn=R.props&&R.props.onVnodeUpdated)&&Fn(()=>Kn(jn,Z,R,ln),I)}else{let R;const{el:D,props:z}=h,{bm:Z,m:ln,parent:en,root:jn,type:Mn}=p,zn=qt(h);if(Ot(p,!1),Z&&Uo(Z),!zn&&(R=z&&z.onVnodeBeforeMount)&&Kn(R,en,h),Ot(p,!0),D&&$i){const En=()=>{p.subTree=nr(p),$i(D,p.subTree,p,I,null)};zn&&Mn.__asyncHydrate?Mn.__asyncHydrate(D,p,En):En()}else{jn.ce&&jn.ce._injectChildStyle(Mn);const En=p.subTree=nr(p);k(null,En,x,$,p,I,O),h.el=En.el}if(ln&&Fn(ln,I),!zn&&(R=z&&z.onVnodeMounted)){const En=h;Fn(()=>Kn(R,en,En),I)}(h.shapeFlag&256||en&&qt(en.vnode)&&en.vnode.shapeFlag&256)&&p.a&&Fn(p.a,I),p.isMounted=!0,h=x=$=null}};p.scope.on();const A=p.effect=new qs(F);p.scope.off();const S=p.update=A.run.bind(A),V=p.job=A.runIfDirty.bind(A);V.i=p,V.id=p.uid,A.scheduler=()=>oi(V),Ot(p,!0),S()},K=(p,h,x)=>{h.component=p;const $=p.vnode.props;p.vnode=h,p.next=null,Hu(p,h.props,$,x),Su(p,h.children,x),It(),Pi(p),Lt()},q=(p,h,x,$,I,O,P,F,A=!1)=>{const S=p&&p.children,V=p?p.shapeFlag:0,R=h.children,{patchFlag:D,shapeFlag:z}=h;if(D>0){if(D&128){Vt(S,R,x,$,I,O,P,F,A);return}else if(D&256){bn(S,R,x,$,I,O,P,F,A);return}}z&8?(V&16&&te(S,I,O),R!==S&&u(x,R)):V&16?z&16?Vt(S,R,x,$,I,O,P,F,A):te(S,I,O,!0):(V&8&&u(x,""),z&16&&dn(R,x,$,I,O,P,F,A))},bn=(p,h,x,$,I,O,P,F,A)=>{p=p||Xt,h=h||Xt;const S=p.length,V=h.length,R=Math.min(S,V);let D;for(D=0;D<R;D++){const z=h[D]=A?vt(h[D]):nt(h[D]);k(p[D],z,x,null,I,O,P,F,A)}S>V?te(p,I,O,!0,!1,R):dn(h,x,$,I,O,P,F,A,R)},Vt=(p,h,x,$,I,O,P,F,A)=>{let S=0;const V=h.length;let R=p.length-1,D=V-1;for(;S<=R&&S<=D;){const z=p[S],Z=h[S]=A?vt(h[S]):nt(h[S]);if(ie(z,Z))k(z,Z,x,null,I,O,P,F,A);else break;S++}for(;S<=R&&S<=D;){const z=p[R],Z=h[D]=A?vt(h[D]):nt(h[D]);if(ie(z,Z))k(z,Z,x,null,I,O,P,F,A);else break;R--,D--}if(S>R){if(S<=D){const z=D+1,Z=z<V?h[z].el:$;for(;S<=D;)k(null,h[S]=A?vt(h[S]):nt(h[S]),x,Z,I,O,P,F,A),S++}}else if(S>D)for(;S<=R;)Gn(p[S],I,O,!0),S++;else{const z=S,Z=S,ln=new Map;for(S=Z;S<=D;S++){const An=h[S]=A?vt(h[S]):nt(h[S]);An.key!=null&&ln.set(An.key,S)}let en,jn=0;const Mn=D-Z+1;let zn=!1,En=0;const oe=new Array(Mn);for(S=0;S<Mn;S++)oe[S]=0;for(S=z;S<=R;S++){const An=p[S];if(jn>=Mn){Gn(An,I,O,!0);continue}let qn;if(An.key!=null)qn=ln.get(An.key);else for(en=Z;en<=D;en++)if(oe[en-Z]===0&&ie(An,h[en])){qn=en;break}qn===void 0?Gn(An,I,O,!0):(oe[qn-Z]=S+1,qn>=En?En=qn:zn=!0,k(An,h[qn],x,null,I,O,P,F,A),jn++)}const Si=zn?Fu(oe):Xt;for(en=Si.length-1,S=Mn-1;S>=0;S--){const An=Z+S,qn=h[An],ji=An+1<V?h[An+1].el:$;oe[S]===0?k(null,qn,x,ji,I,O,P,F,A):zn&&(en<0||S!==Si[en]?Ht(qn,x,ji,2):en--)}}},Ht=(p,h,x,$,I=null)=>{const{el:O,type:P,transition:F,children:A,shapeFlag:S}=p;if(S&6){Ht(p.component.subTree,h,x,$);return}if(S&128){p.suspense.move(h,x,$);return}if(S&64){P.move(p,h,x,ee);return}if(P===mn){o(O,h,x);for(let R=0;R<A.length;R++)Ht(A[R],h,x,$);o(p.anchor,h,x);return}if(P===tr){H(p,h,x);return}if($!==2&&S&1&&F)if($===0)F.beforeEnter(O),o(O,h,x),Fn(()=>F.enter(O),I);else{const{leave:R,delayLeave:D,afterLeave:z}=F,Z=()=>o(O,h,x),ln=()=>{R(O,()=>{Z(),z&&z()})};D?D(O,Z,ln):ln()}else o(O,h,x)},Gn=(p,h,x,$=!1,I=!1)=>{const{type:O,props:P,ref:F,children:A,dynamicChildren:S,shapeFlag:V,patchFlag:R,dirs:D,cacheIndex:z}=p;if(R===-2&&(I=!1),F!=null&&wr(F,null,x,p,!0),z!=null&&(h.renderCache[z]=void 0),V&256){h.ctx.deactivate(p);return}const Z=V&1&&D,ln=!qt(p);let en;if(ln&&(en=P&&P.onVnodeBeforeUnmount)&&Kn(en,h,p),V&6)lc(p.component,x,$);else{if(V&128){p.suspense.unmount(x,$);return}Z&&Tt(p,null,h,"beforeUnmount"),V&64?p.type.remove(p,h,x,ee,$):S&&!S.hasOnce&&(O!==mn||R>0&&R&64)?te(S,h,x,!1,!0):(O===mn&&R&384||!I&&V&16)&&te(A,h,x),$&&Hi(p)}(ln&&(en=P&&P.onVnodeUnmounted)||Z)&&Fn(()=>{en&&Kn(en,h,p),Z&&Tt(p,null,h,"unmounted")},x)},Hi=p=>{const{type:h,el:x,anchor:$,transition:I}=p;if(h===mn){ac(x,$);return}if(h===tr){T(p);return}const O=()=>{r(x),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:F}=I,A=()=>P(x,O);F?F(p.el,O,A):A()}else O()},ac=(p,h)=>{let x;for(;p!==h;)x=f(p),r(p),p=x;r(h)},lc=(p,h,x)=>{const{bum:$,scope:I,job:O,subTree:P,um:F,m:A,a:S}=p;Yi(A),Yi(S),$&&Uo($),I.stop(),O&&(O.flags|=8,Gn(P,p,h,x)),F&&Fn(F,h),Fn(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},te=(p,h,x,$=!1,I=!1,O=0)=>{for(let P=O;P<p.length;P++)Gn(p[P],h,x,$,I)},Ue=p=>{if(p.shapeFlag&6)return Ue(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=f(p.anchor||p.el),x=h&&h[tu];return x?f(x):h};let Yo=!1;const Ti=(p,h,x)=>{p==null?h._vnode&&Gn(h._vnode,null,null,!0):k(h._vnode||null,p,h,null,null,null,x),h._vnode=p,Yo||(Yo=!0,Pi(),pa(),Yo=!1)},ee={p:k,um:Gn,m:Ht,r:Hi,mt:pn,mc:dn,pc:q,pbc:Q,n:Ue,o:n};let Oi,$i;return{render:Ti,hydrate:Oi,createApp:Cu(Ti,Oi)}}function Qo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ot({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Au(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sa(n,t,e=!1){const o=n.children,r=t.children;if(Y(o)&&Y(r))for(let i=0;i<o.length;i++){const s=o[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vt(r[i]),a.el=s.el),!e&&a.patchFlag!==-2&&Sa(s,a)),a.type===So&&(a.el=s.el)}}function Fu(n){const t=n.slice(),e=[0];let o,r,i,s,a;const l=n.length;for(o=0;o<l;o++){const c=n[o];if(c!==0){if(r=e[e.length-1],n[r]<c){t[o]=r,e.push(o);continue}for(i=0,s=e.length-1;i<s;)a=i+s>>1,n[e[a]]<c?i=a+1:s=a;c<n[e[i]]&&(i>0&&(t[o]=e[i-1]),e[i]=o)}}for(i=e.length,s=e[i-1];i-- >0;)e[i]=s,s=t[s];return e}function ja(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ja(t)}function Yi(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Pu=Symbol.for("v-scx"),Ru=()=>fe(Pu);function Ln(n,t,e){return Ea(n,t,e)}function Ea(n,t,e=an){const{immediate:o,deep:r,flush:i,once:s}=e,a=wn({},e),l=t&&o||!t&&i!=="post";let c;if(Oe){if(i==="sync"){const m=Ru();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=_n;a.call=(m,g,k)=>rt(m,u,g,k);let d=!1;i==="post"?a.scheduler=m=>{Fn(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,g)=>{g?m():oi(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=Gc(n,t,a);return Oe&&(c?c.push(f):l&&f()),f}function Nu(n,t,e){const o=this.proxy,r=gn(n)?n.includes(".")?Aa(o,n):()=>o[n]:n.bind(o,o);let i;X(t)?i=t:(i=t.handler,e=t);const s=De(this),a=Ea(r,i.bind(o),e);return s(),a}function Aa(n,t){const e=t.split(".");return()=>{let o=n;for(let r=0;r<e.length&&o;r++)o=o[e[r]];return o}}const Bu=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Vn(t)}Modifiers`]||n[`${Ct(t)}Modifiers`];function Du(n,t,...e){if(n.isUnmounted)return;const o=n.vnode.props||an;let r=e;const i=t.startsWith("update:"),s=i&&Bu(o,t.slice(7));s&&(s.trim&&(r=e.map(u=>gn(u)?u.trim():u)),s.number&&(r=e.map(mc)));let a,l=o[a=Xo(t)]||o[a=Xo(Vn(t))];!l&&i&&(l=o[a=Xo(Ct(t))]),l&&rt(l,n,6,r);const c=o[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rt(c,n,6,r)}}function Fa(n,t,e=!1){const o=t.emitsCache,r=o.get(n);if(r!==void 0)return r;const i=n.emits;let s={},a=!1;if(!X(n)){const l=c=>{const u=Fa(c,t,!0);u&&(a=!0,wn(s,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!a?(fn(n)&&o.set(n,null),null):(Y(i)?i.forEach(l=>s[l]=null):wn(s,i),fn(n)&&o.set(n,s),s)}function $o(n,t){return!n||!xo(t)?!1:(t=t.slice(2).replace(/Once$/,""),tn(n,t[0].toLowerCase()+t.slice(1))||tn(n,Ct(t))||tn(n,t))}function nr(n){const{type:t,vnode:e,proxy:o,withProxy:r,propsOptions:[i],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:m,ctx:g,inheritAttrs:k}=n,j=uo(n);let C,L;try{if(e.shapeFlag&4){const T=r||o,N=T;C=nt(c.call(N,T,u,d,m,f,g)),L=a}else{const T=t;C=nt(T.length>1?T(d,{attrs:a,slots:s,emit:l}):T(d,null)),L=t.props?a:Vu(a)}}catch(T){pe.length=0,Io(T,n,1),C=b(Mt)}let H=C;if(L&&k!==!1){const T=Object.keys(L),{shapeFlag:N}=H;T.length&&N&7&&(i&&T.some(Xr)&&(L=zu(L,i)),H=Qt(H,L,!1,!0))}return e.dirs&&(H=Qt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(e.dirs):e.dirs),e.transition&&ri(H,e.transition),C=H,uo(j),C}const Vu=n=>{let t;for(const e in n)(e==="class"||e==="style"||xo(e))&&((t||(t={}))[e]=n[e]);return t},zu=(n,t)=>{const e={};for(const o in n)(!Xr(o)||!(o.slice(9)in t))&&(e[o]=n[o]);return e};function Yu(n,t,e){const{props:o,children:r,component:i}=n,{props:s,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return o?Xi(o,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==o[f]&&!$o(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===s?!1:o?s?Xi(o,s,c):!0:!!s;return!1}function Xi(n,t,e){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(t[i]!==n[i]&&!$o(e,i))return!0}return!1}function Xu({vnode:n,parent:t},e){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===n&&(o.el=n.el),o===n)(n=t.vnode).el=e,t=t.parent;else break}}const Pa=n=>n.__isSuspense;function Uu(n,t){t&&t.pendingBranch?Y(n)?t.effects.push(...n):t.effects.push(n):Zc(n)}const mn=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),pe=[];let Pn=null;function y(n=!1){pe.push(Pn=n?null:[])}function Wu(){pe.pop(),Pn=pe[pe.length-1]||null}let He=1;function Ui(n){He+=n,n<0&&Pn&&(Pn.hasOnce=!0)}function Ra(n){return n.dynamicChildren=He>0?Pn||Xt:null,Wu(),He>0&&Pn&&Pn.push(n),n}function _(n,t,e,o,r,i){return Ra(w(n,t,e,o,r,i,!0))}function it(n,t,e,o,r){return Ra(b(n,t,e,o,r,!0))}function Te(n){return n?n.__v_isVNode===!0:!1}function ie(n,t){return n.type===t.type&&n.key===t.key}const Na=({key:n})=>n??null,to=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?gn(n)||In(n)||X(n)?{i:yn,r:n,k:t,f:!!e}:n:null);function w(n,t=null,e=null,o=0,r=null,i=n===mn?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Na(t),ref:t&&to(t),scopeId:Ho,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(ci(l,e),i&128&&n.normalize(l)):e&&(l.shapeFlag|=gn(e)?8:16),He>0&&!s&&Pn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pn.push(l),l}const b=Gu;function Gu(n,t=null,e=null,o=0,r=null,i=!1){if((!n||n===wa)&&(n=Mt),Te(n)){const a=Qt(n,t,!0);return e&&ci(a,e),He>0&&!i&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(ed(n)&&(n=n.__vccOpts),t){t=Ba(t);let{class:a,style:l}=t;a&&!gn(a)&&(t.class=Xn(a)),fn(l)&&(ei(l)&&!Y(l)&&(l=wn({},l)),t.style=xt(l))}const s=gn(n)?1:Pa(n)?128:eu(n)?64:fn(n)?4:X(n)?2:0;return w(n,t,e,o,r,s,i,!0)}function Ba(n){return n?ei(n)||Ca(n)?wn({},n):n:null}function Qt(n,t,e=!1,o=!1){const{props:r,ref:i,patchFlag:s,children:a,transition:l}=n,c=t?ui(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Na(c),ref:t&&t.ref?e&&i?Y(i)?i.concat(to(t)):[i,to(t)]:to(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==mn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qt(n.ssContent),ssFallback:n.ssFallback&&Qt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&o&&ri(u,l.clone(u)),u}function eo(n=" ",t=0){return b(So,null,n,t)}function kr(n="",t=!1){return t?(y(),it(Mt,null,n)):b(Mt,null,n)}function nt(n){return n==null||typeof n=="boolean"?b(Mt):Y(n)?b(mn,null,n.slice()):Te(n)?vt(n):b(So,null,String(n))}function vt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qt(n)}function ci(n,t){let e=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(Y(t))e=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),ci(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Ca(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:yn},e=32):(t=String(t),o&64?(e=16,t=[eo(t)]):e=8);n.children=t,n.shapeFlag|=e}function ui(...n){const t={};for(let e=0;e<n.length;e++){const o=n[e];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Xn([t.class,o.class]));else if(r==="style")t.style=xt([t.style,o.style]);else if(xo(r)){const i=t[r],s=o[r];s&&i!==s&&!(Y(i)&&i.includes(s))&&(t[r]=i?[].concat(i,s):s)}else r!==""&&(t[r]=o[r])}return t}function Kn(n,t,e,o=null){rt(n,t,7,[e,o])}const qu=ba();let Ku=0;function Zu(n,t,e){const o=n.type,r=(t?t.appContext:n.appContext)||qu,i={uid:Ku++,vnode:n,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:La(o,r),emitsOptions:Fa(o,r),emit:null,emitted:null,propsDefaults:an,inheritAttrs:o.inheritAttrs,ctx:an,data:an,props:an,attrs:an,slots:an,refs:an,setupState:an,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Du.bind(null,i),n.ce&&n.ce(i),i}let _n=null;const jo=()=>_n||yn;let po,Cr;{const n=ko(),t=(e,o)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(o),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};po=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),Cr=t("__VUE_SSR_SETTERS__",e=>Oe=e)}const De=n=>{const t=_n;return po(n),n.scope.on(),()=>{n.scope.off(),po(t)}},Wi=()=>{_n&&_n.scope.off(),po(null)};function Da(n){return n.vnode.shapeFlag&4}let Oe=!1;function Ju(n,t=!1,e=!1){t&&Cr(t);const{props:o,children:r}=n.vnode,i=Da(n);Lu(n,o,i,t),$u(n,r,e);const s=i?Qu(n,t):void 0;return t&&Cr(!1),s}function Qu(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gu);const{setup:o}=e;if(o){It();const r=n.setupContext=o.length>1?za(n):null,i=De(n),s=Be(o,n,0,[n.props,r]),a=Ds(s);if(Lt(),i(),(a||n.sp)&&!qt(n)&&ha(n),a){if(s.then(Wi,Wi),t)return s.then(l=>{Gi(n,l,t)}).catch(l=>{Io(l,n,0)});n.asyncDep=s}else Gi(n,s,t)}else Va(n,t)}function Gi(n,t,e){X(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fn(t)&&(n.setupState=ua(t)),Va(n,e)}let qi;function Va(n,t,e){const o=n.type;if(!n.render){if(!t&&qi&&!o.render){const r=o.template||ai(n).template;if(r){const{isCustomElement:i,compilerOptions:s}=n.appContext.config,{delimiters:a,compilerOptions:l}=o,c=wn(wn({isCustomElement:i,delimiters:a},s),l);o.render=qi(r,c)}}n.render=o.render||tt}{const r=De(n);It();try{wu(n)}finally{Lt(),r()}}}const nd={get(n,t){return kn(n,"get",""),n[t]}};function za(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,nd),slots:n.slots,emit:n.emit,expose:t}}function Eo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ua(Vc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in de)return de[e](n)},has(t,e){return e in t||e in de}})):n.proxy}function td(n,t=!0){return X(n)?n.displayName||n.name:n.name||t&&n.__name}function ed(n){return X(n)&&"__vccOpts"in n}const Dn=(n,t)=>Uc(n,t,Oe);function $e(n,t,e){const o=arguments.length;return o===2?fn(t)&&!Y(t)?Te(t)?b(n,null,[t]):b(n,t):b(n,null,t):(o>3?e=Array.prototype.slice.call(arguments,2):o===3&&Te(e)&&(e=[e]),b(n,t,e))}const od="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ir;const Ki=typeof window<"u"&&window.trustedTypes;if(Ki)try{Ir=Ki.createPolicy("vue",{createHTML:n=>n})}catch{}const Ya=Ir?n=>Ir.createHTML(n):n=>n,rd="http://www.w3.org/2000/svg",id="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Zi=lt&&lt.createElement("template"),sd={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,o)=>{const r=t==="svg"?lt.createElementNS(rd,n):t==="mathml"?lt.createElementNS(id,n):e?lt.createElement(n,{is:e}):lt.createElement(n);return n==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:n=>lt.createTextNode(n),createComment:n=>lt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>lt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,o,r,i){const s=e?e.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{Zi.innerHTML=Ya(o==="svg"?`<svg>${n}</svg>`:o==="mathml"?`<math>${n}</math>`:n);const a=Zi.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[s?s.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ad=Symbol("_vtc");function ld(n,t,e){const o=n[ad];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ji=Symbol("_vod"),cd=Symbol("_vsh"),ud=Symbol(""),dd=/(^|;)\s*display\s*:/;function fd(n,t,e){const o=n.style,r=gn(e);let i=!1;if(e&&!r){if(t)if(gn(t))for(const s of t.split(";")){const a=s.slice(0,s.indexOf(":")).trim();e[a]==null&&oo(o,a,"")}else for(const s in t)e[s]==null&&oo(o,s,"");for(const s in e)s==="display"&&(i=!0),oo(o,s,e[s])}else if(r){if(t!==e){const s=o[ud];s&&(e+=";"+s),o.cssText=e,i=dd.test(e)}}else t&&n.removeAttribute("style");Ji in n&&(n[Ji]=i?o.display:"",n[cd]&&(o.display="none"))}const Qi=/\s*!important$/;function oo(n,t,e){if(Y(e))e.forEach(o=>oo(n,t,o));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const o=pd(n,t);Qi.test(e)?n.setProperty(Ct(o),e.replace(Qi,""),"important"):n[o]=e}}const ns=["Webkit","Moz","ms"],er={};function pd(n,t){const e=er[t];if(e)return e;let o=Vn(t);if(o!=="filter"&&o in n)return er[t]=o;o=Mo(o);for(let r=0;r<ns.length;r++){const i=ns[r]+o;if(i in n)return er[t]=i}return t}const ts="http://www.w3.org/1999/xlink";function es(n,t,e,o,r,i=_c(t)){o&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ts,t.slice(6,t.length)):n.setAttributeNS(ts,t,e):e==null||i&&!Xs(e)?n.removeAttribute(t):n.setAttribute(t,i?"":dt(e)?String(e):e)}function os(n,t,e,o,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ya(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let s=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Xs(e):e==null&&a==="string"?(e="",s=!0):a==="number"&&(e=0,s=!0)}try{n[t]=e}catch{}s&&n.removeAttribute(r||t)}function md(n,t,e,o){n.addEventListener(t,e,o)}function hd(n,t,e,o){n.removeEventListener(t,e,o)}const rs=Symbol("_vei");function gd(n,t,e,o,r=null){const i=n[rs]||(n[rs]={}),s=i[t];if(o&&s)s.value=o;else{const[a,l]=vd(t);if(o){const c=i[t]=xd(o,r);md(n,a,c,l)}else s&&(hd(n,a,s,l),i[t]=void 0)}}const is=/(?:Once|Passive|Capture)$/;function vd(n){let t;if(is.test(n)){t={};let o;for(;o=n.match(is);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ct(n.slice(2)),t]}let or=0;const yd=Promise.resolve(),wd=()=>or||(yd.then(()=>or=0),or=Date.now());function xd(n,t){const e=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=e.attached)return;rt(_d(o,e.value),t,5,[o])};return e.value=n,e.attached=wd(),e}function _d(n,t){if(Y(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const ss=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,bd=(n,t,e,o,r,i)=>{const s=r==="svg";t==="class"?ld(n,o,s):t==="style"?fd(n,e,o):xo(t)?Xr(t)||gd(n,t,e,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Md(n,t,o,s))?(os(n,t,o),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&es(n,t,o,s,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!gn(o))?os(n,Vn(t),o,i,t):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),es(n,t,o,s))};function Md(n,t,e,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in n&&ss(t)&&X(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ss(t)&&gn(e)?!1:t in n}const kd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cd=(n,t)=>{const e=n._withKeys||(n._withKeys={}),o=t.join(".");return e[o]||(e[o]=r=>{if(!("key"in r))return;const i=Ct(r.key);if(t.some(s=>s===i||kd[s]===i))return n(r)})},Id=wn({patchProp:bd},sd);let as;function Ld(){return as||(as=ju(Id))}const Xa=(...n)=>{const t=Ld().createApp(...n),{mount:e}=t;return t.mount=o=>{const r=Td(o);if(!r)return;const i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=e(r,!1,Hd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function Hd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Td(n){return gn(n)?document.querySelector(n):n}/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ke={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=({size:n,strokeWidth:t=2,absoluteStrokeWidth:e,color:o,iconNode:r,name:i,class:s,...a},{slots:l})=>$e("svg",{...Ke,width:n||Ke.width,height:n||Ke.height,stroke:o||Ke.stroke,"stroke-width":e?Number(t)*24/Number(n):t,class:["lucide",`lucide-${Od(i??"icon")}`],...a},[...r.map(c=>$e(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=(n,t)=>(e,{slots:o})=>$e($d,{...e,iconNode:t,name:n},o);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=Ao("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ao("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=Ao("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Ao("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);function Ua(n){return Gr()?(Gs(n),!0):!1}function Fo(n){return typeof n=="function"?n():v(n)}const di=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Fd=Object.prototype.toString,Pd=n=>Fd.call(n)==="[object Object]",Rd=()=>{};function Nd(n){let t;function e(){return t||(t=n()),t}return e.reset=async()=>{const o=t;t=void 0,o&&await o},e}function Bd(n,t,e={}){const{immediate:o=!0}=e,r=M(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function a(){r.value=!1,s()}function l(...c){s(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,n(...c)},Fo(t))}return o&&(r.value=!0,di&&l()),Ua(a),{isPending:ni(r),start:l,stop:a}}const Dd=di?window:void 0,Wa=di?window.navigator:void 0;function Vd(n){var t;const e=Fo(n);return(t=e==null?void 0:e.$el)!=null?t:e}function Ga(...n){let t,e,o,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,o,r]=n,t=Dd):[t,e,o,r]=n,!t)return Rd;Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);const i=[],s=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,m)=>(u.addEventListener(d,f,m),()=>u.removeEventListener(d,f,m)),l=Ln(()=>[Vd(t),Fo(r)],([u,d])=>{if(s(),!u)return;const f=Pd(d)?{...d}:d;i.push(...e.flatMap(m=>o.map(g=>a(u,m,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ua(c),c}function zd(){const n=M(!1),t=jo();return t&&$n(()=>{n.value=!0},t),n}function qa(n){const t=zd();return Dn(()=>(t.value,!!n()))}function ls(n,t={}){const{controls:e=!1,navigator:o=Wa}=t,r=qa(()=>o&&"permissions"in o),i=yr(),s=typeof n=="string"?{name:n}:n,a=yr(),l=()=>{var u,d;a.value=(d=(u=i.value)==null?void 0:u.state)!=null?d:"prompt"};Ga(i,"change",l);const c=Nd(async()=>{if(r.value){if(!i.value)try{i.value=await o.permissions.query(s)}catch{i.value=void 0}finally{l()}if(e)return nn(i.value)}});return c(),e?{state:a,isSupported:r,query:c}:a}function Yd(n={}){const{navigator:t=Wa,read:e=!1,source:o,copiedDuring:r=1500,legacy:i=!1}=n,s=qa(()=>t&&"clipboard"in t),a=ls("clipboard-read"),l=ls("clipboard-write"),c=Dn(()=>s.value||i),u=M(""),d=M(!1),f=Bd(()=>d.value=!1,r);function m(){s.value&&C(a.value)?t.clipboard.readText().then(L=>{u.value=L}):u.value=j()}c.value&&e&&Ga(["copy","cut"],m);async function g(L=Fo(o)){c.value&&L!=null&&(s.value&&C(l.value)?await t.clipboard.writeText(L):k(L),u.value=L,d.value=!0,f.start())}function k(L){const H=document.createElement("textarea");H.value=L??"",H.style.position="absolute",H.style.opacity="0",document.body.appendChild(H),H.select(),document.execCommand("copy"),H.remove()}function j(){var L,H,T;return(T=(H=(L=document==null?void 0:document.getSelection)==null?void 0:L.call(document))==null?void 0:H.toString())!=null?T:""}function C(L){return L==="granted"||L==="prompt"}return{isSupported:c,text:u,copied:d,copy:g}}const Xd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center overflow-hidden"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      ref="target"
      is="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'SearchIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const target = ref();

const variants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: {
      type: 'spring',
      duration: 1000,
      bounce: 0.3,
    },
  },
};
const motionInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

function mouseEnterHandler() {
  motionInstance.apply(variants.animate);
}

function mouseLeaveHandler() {
  motionInstance.apply(variants.normal);
}
<\/script>
`,Ud=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      ref="targetSvg"
      is="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        ref="targetPath"
        is="path"
        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
      />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const targetSvg = ref();
const targetPath = ref();

const motionSvgInstance = useMotion(targetSvg, {
  initial: {
    scale: 1,
  },
  enter: {
    scale: 1,
    y: [0, 0, 0],
  },
});

const motionPathInstance = useMotion(targetPath, {
  initial: {
    y: 0,
  },
  enter: {
    y: 0,
  },
});

const lidVariants = {
  normal: { y: 0 },
  animate: {
    y: -1.1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
};

const cartVariants = {
  normal: { scale: 1 },
  animate: {
    scale: 1.1,
    transition: {
      duration: 200,
    },
  },
  hover: {
    y: [0, -5, 0],
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
  },
  repeat: {
    y: [0, -5, 0],
    transition: {
      duration: 400,
      delay: 100,
      ease: 'easeInOut',
    },
  },
};

function mouseEnterHandler() {
  motionSvgInstance.apply(cartVariants.animate);
  motionSvgInstance.apply(cartVariants.hover).then(() => {
    motionSvgInstance.apply(cartVariants.repeat);
  });
  motionPathInstance.apply(lidVariants.animate);
}

function mouseLeaveHandler() {
  motionSvgInstance.apply(cartVariants.normal);
  motionPathInstance.apply(lidVariants.normal);
}
<\/script>
`,Wd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      />
      <Motion is="path" ref="pathOneTarget" d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <Motion is="path" ref="pathTwoTarget" d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'LayersIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 14,
  mass: 1,
};

const pathOneVariants = {
  normal: { y: 0, transition: defaultTransition },
  animate: { y: -9, transition: defaultTransition },
};

const pathTwoVariants = {
  normal: { y: 0, transition: defaultTransition },
  animate: { y: -5, transition: defaultTransition },
};

const pathOneTarget = ref();
const pathOneInstance = useMotion(pathOneTarget, {
  initial: pathOneVariants.normal,
  enter: pathOneVariants.normal,
});

const pathTwoTarget = ref();
const pathTwoInstance = useMotion(pathTwoTarget, {
  initial: pathTwoVariants.normal,
  enter: pathTwoVariants.normal,
});

function mouseEnterHandler() {
  pathOneInstance.apply(pathOneVariants.animate).then(() => pathOneInstance.apply(pathOneVariants.normal));
  pathTwoInstance.apply(pathTwoVariants.animate).then(() => pathTwoInstance.apply(pathTwoVariants.normal));
}

function mouseLeaveHandler() {
  pathOneInstance.apply(pathOneVariants.normal);
  pathTwoInstance.apply(pathTwoVariants.normal);
}
<\/script>
`,Gd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="circle"
        v-for="(circle, index) in circles"
        :key="\`\${circle.cx}_\${circle.cy}\`"
        :ref="el => (targetList[index] = el)"
        :cx="circle.cx"
        :cy="circle.cy"
        r="1"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'GripIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const circles = [
  { cx: 19, cy: 5 }, // Top right
  { cx: 12, cy: 5 }, // Top middle
  { cx: 19, cy: 12 }, // Middle right
  { cx: 5, cy: 5 }, // Top left
  { cx: 12, cy: 12 }, // Center
  { cx: 19, cy: 19 }, // Bottom right
  { cx: 5, cy: 12 }, // Middle left
  { cx: 12, cy: 19 }, // Bottom middle
  { cx: 5, cy: 19 }, // Bottom left
];
const len = circles.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: { opacity: 1 },
    enter: { opacity: 1 },
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const calculateTransition = i => {
  return {
    transition: {
      delay: i * 100,
      duration: 200,
    },
  };
};
const updateOpacity = opacity => {
  for (let i = 0; i < len; i++) {
    const instance = targetInstanceList[i];
    instance.apply({
      opacity,
      ...calculateTransition(i),
    });
  }
};
const hoverFn = async (isHover = true) => {
  if (!isHover) {
    updateOpacity(1);
    return;
  }
  for (let i = 0; i < len; i++) {
    const instance = targetInstanceList[i];
    if (i < len - 1) {
      instance.apply({
        opacity: 0.3,
        ...calculateTransition(i),
      });
    } else {
      await instance.apply({
        opacity: 0.3,
        ...calculateTransition(i),
      });
      updateOpacity(1);
    }
  }
};

function mouseEnterHandler() {
  hoverFn(true);
}

function mouseLeaveHandler() {
  hoverFn(false);
}
<\/script>
`,qd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="line"
        v-for="(line, index) in lines"
        :key="\`\${line.x1}_\${line.x2}_\${line.y1}_\${line.y2}\`"
        :ref="el => (targetList[index] = el)"
        stroke="currentColor"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FrameIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const lines = [
  { x1: 22, x2: 2, y1: 6, y2: 6 },
  { x1: 22, x2: 2, y1: 18, y2: 18 },
  { x1: 6, x2: 6, y1: 2, y2: 22 },
  { x1: 18, x2: 18, y1: 2, y2: 22 },
];

const defaultTransition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const variants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: [{ translateY: -4 }, { translateY: 4 }, { translateX: -4 }, { translateX: 4 }],
};

const len = lines.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      transition: defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Kd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <Motion is="path" v-for="(item, index) in paths" :key="item" :ref="el => (targetList[index] = el)" :d="item" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SunIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  'M12 2v2',
  'm19.07 4.93-1.41 1.41',
  'M20 12h2',
  'm17.66 17.66 1.41 1.41',
  'M12 20v2',
  'm6.34 17.66-1.41 1.41',
  'M2 12h2',
  'm4.93 4.93 1.41 1.41',
];

const variants = {
  normal: { opacity: 1 },
  animate: i => ({
    opacity: [0, 1],
    transition: { delay: i * 100, duration: 300 },
  }),
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      transition: {
        duration: 300,
      },
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Zd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="g" ref="targetG">
        <path d="M3 6h18" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </Motion>

      <Motion is="path" ref="targetPath" d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" />
      <Motion is="g" ref="targetG2">
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DeleteIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  g: {
    normal: { y: 0 },
    animate: { y: -1.1 },
  },
  path: {
    normal: { y: 0 },
    animate: { y: 1 },
  },
  g2: {
    normal: { y: 0 },
    animate: { y: 0.5 },
  },
};

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  },
};

// TODO
const targetG = ref();
const targetInstanceG = useMotion(targetG, {
  initial: variants.g.normal,
  enter: variants.g.normal,
});

const targetG2 = ref();
const targetInstanceG2 = useMotion(targetG2, {
  initial: variants.g2.normal,
  enter: variants.g2.normal,
});

const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const targetInstance = {
  g: targetInstanceG,
  g2: targetInstanceG2,
  path: targetInstancePath,
};

const hoverFn = type => {
  Object.keys(targetInstance).forEach(target => {
    const variant = variants[target][type];
    const instance = targetInstance[target];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Jd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" v-for="(path, index) in paths" :key="path" :ref="el => (targetList[index] = el)" :d="path" />
      <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FileStackIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: [
    { translateX: -4, translateY: 4 },
    { translateX: -4, translateY: 4 },
    { translateX: 4, translateY: -4 },
  ],
};

const paths = [
  'M21 7h-3a2 2 0 0 1-2-2V2',
  'M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z',
  'M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11',
];

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      transition: {
        delay: 0,
        duration: 300,
      },
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Qd=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'SettingGearIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};
const defaultTransition = {
  transition: { type: 'spring', stiffness: 50, damping: 10 },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,nf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
      <Motion is="g" ref="target" transform-origin="18 18">
        <path d="m15.2 16.9-.9-.4" />
        <path d="m15.2 19.1-.9.4" />
        <path d="m16.9 15.2-.4-.9" />
        <path d="m16.9 20.8-.4.9" />
        <path d="m19.5 14.3-.4.9" />
        <path d="m19.5 21.7-.4-.9" />
        <path d="m21.7 16.5-.9.4" />
        <path d="m21.7 19.5-.9-.4" />
        <circle cx="18" cy="18" r="3" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CalendarCogIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};
const defaultTransition = {
  transition: { type: 'spring', stiffness: 50, damping: 10 },
};

// TODO transform-origin="18 18" calculate
const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,tf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="line"
        v-for="(line, index) in lines"
        :key="\`\${line.x1}_\${line.x2}_\${line.y1}_\${line.y2}\`"
        :ref="el => (targetList[index] = el)"
        stroke="currentColor"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        :transform-origin="variants.transformOrigin[index]"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MenuIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const lines = [
  { x1: 4, y1: 6, x2: 20, y2: 6 },
  { x1: 4, y1: 12, x2: 20, y2: 12 },
  { x1: 4, y1: 18, x2: 20, y2: 18 },
];

const defaultTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

const variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  animate: i => ({
    rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
    y: i === 0 ? 6 : i === 2 ? -6 : 0,
    opacity: i === 1 ? 0 : 1,
    transition: defaultTransition,
  }),
  // TODO transform-origin calculate
  transformOrigin: ['12 6', '0 0', '12 18'],
};

const len = lines.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      transition: defaultTransition,
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,ef=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="rect" ref="targetRect" width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <Motion is="path" ref="targetPath" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CopyIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  rect: {
    normal: { translateY: 0, translateX: 0 },
    animate: { translateY: -3, translateX: -3 },
  },
  path: {
    normal: { x: 0, y: 0 },
    animate: { x: 3, y: 3 },
  },
};
const defaultTransition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const targetRect = ref();
const targetInstanceRect = useMotion(targetRect, {
  initial: variants.rect.normal,
  enter: variants.rect.normal,
});

const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const targetInstance = {
  rect: targetInstanceRect,
  path: targetInstancePath,
};

const hoverFn = type => {
  Object.keys(targetInstance).forEach(target => {
    const variant = variants[target][type];
    const instance = targetInstance[target];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,of=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M2 10v3" />

      <Motion
        is="path"
        v-for="(path, index) in paths"
        :key="path"
        :ref="el => (targetList[index] = el)"
        :d="path"
        transform-origin="0 12"
      />

      <path d="M22 10v3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AudioLinesIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = ['M6 6v11', 'M10 3v18', 'M14 8v7', 'M18 5v13'];
const duration = [1500, 1000, 800, 1500];
const scaleY = [
  [1.5, 0.5, 1.5, 1],
  [1.3, 0.2, 1.2, 1],
  [1.2, 0.1, 1.2, 1],
  [1.2, 0.1, 1.2, 1],
];
const variants = {
  normal: { scaleY: 1 },
  animate: i => {
    return {
      scaleY: scaleY[i],
      transition: {
        duration: duration[i],
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      },
    };
  },
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,rf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="rect" ref="targetRect" width="20" height="5" x="2" y="3" rx="1" />

      <Motion is="path" ref="targetPath" d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />

      <Motion is="path" ref="targetPath2" d="M10 12h4" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArchiveIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  rect: {
    normal: { y: 0 },
    animate: { y: -1.5 },
  },
  path: {
    normal: { y: 0 },
    animate: { y: 2 },
  },
  path2: {
    normal: { y: 0 },
    animate: { y: 1.25 },
  },
};

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 25,
  },
};

// TODO
const targetRect = ref();
const targetInstanceRect = useMotion(targetRect, {
  initial: variants.rect.normal,
  enter: variants.rect.normal,
});

const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const targetPath2 = ref();
const targetInstancePath2 = useMotion(targetPath2, {
  initial: variants.path2.normal,
  enter: variants.path2.normal,
});

const targetInstance = {
  rect: targetInstanceRect,
  path: targetInstancePath,
  path2: targetInstancePath2,
};

const hoverFn = type => {
  const keys = Object.keys(targetInstance);
  keys.forEach(target => {
    const variant = variants[target][type];
    const instance = targetInstance[target];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,sf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <Motion is="polyline" :ref="targetList[0]" points="16 17 21 12 16 7" />
      <Motion is="line" :ref="targetList[1]" x1="21" x2="9" y1="12" y2="12" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LogoutIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    duration: 400,
  },
};

const variants = {
  normal: {
    x: 0,
    translateX: 0,
  },
  animate: {
    x: 2,
    translateX: [0, -3, 0],
  },
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      ...defaultTransition,
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,af=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="g" ref="target" :transform-origin="variants.transformOrigin">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleHelpIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    duration: 500,
    ease: 'easeInOut',
  },
};

const variants = {
  normal: { rotate: 0 },
  animate: { rotate: [0, -10, 10, -10, 0] },
  transformOrigin: '12 12',
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...defaultTransition,
    ...variant,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,lf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="path"
        :ref="targetList[0]"
        :transform-origin="variants.transformOrigin[0]"
        d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
      />
      <Motion
        is="path"
        :ref="targetList[1]"
        :transform-origin="variants.transformOrigin[1]"
        d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
      />
      <Motion
        is="rect"
        :ref="targetList[2]"
        :transform-origin="variants.transformOrigin[2]"
        width="8"
        height="8"
        x="14"
        y="14"
        rx="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SquareStackIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { scale: 1 },
  animate: [
    // path
    {
      scale: [1, 0.9, 1],
      transition: {
        delay: 300,
        duration: 400,
      },
    },
    {
      scale: [1, 0.9, 1],
      transition: {
        delay: 200,
        duration: 200,
      },
    },
    // react
    {
      scale: [1, 0.8, 1],
      transition: {
        duration: 400,
      },
    },
  ],
  transformOrigin: ['6 6', '12 12', '18 18'],
};

const len = 3;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,cf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'MessageCircleIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { scale: 1, rotate: 0 },
  animate: {
    scale: 1.05,
    rotate: [0, -7, 7, 0],
    transition: {
      rotate: {
        duration: 500,
        ease: 'easeInOut',
      },
      scale: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  },
};
const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.animate,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,uf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <Motion is="path" :ref="targetList[0]" d="M8 12h.01" />
      <Motion is="path" :ref="targetList[1]" d="M12 12h.01" />
      <Motion is="path" :ref="targetList[2]" d="M16 12h.01" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MessageCircleMoreIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    opacity: 1,
  },
  // TODO different animation
  animate: i => ({
    opacity: [1, 0, 0, 1, 1, 0, 0, 1],
    transition: {
      opacity: {
        repeat: [0, 0.1, 0.1 + i * 0.1, 0.1 + i * 0.1 + 0.1, 0.5, 0.6, 0.6 + i * 0.1, 0.6 + i * 0.1 + 0.1].map(
          v => v * 1000,
        ),
        delay: i * 200,
        duration: 1500,
      },
    },
  }),
};

const len = 3;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,df=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m12 19-7-7 7-7" />
      <Motion is="path" :ref="targetList[1]" d="M19 12H5" :transform-origin="variants.transformOrigin" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowLeftIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: [
    {
      translateX: 0,
    },
    {
      scaleX: 1,
    },
  ],
  animate: [
    {
      translateX: [0, 3, 0],
      transition: {
        duration: 400,
      },
    },
    // TODO different d
    {
      scaleX: [1, 0.8, 1],
      transition: {
        duration: 400,
      },
    },
  ],
  transformOrigin: '19 12',
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[i],
    enter: variants.normal[i],
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal[i];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,ff=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m12 5 7 7-7 7" />
      <Motion is="path" :ref="targetList[1]" d="M5 12h14" :transform-origin="variants.transformOrigin" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowRightIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: [
    {
      translateX: 0,
    },
    {
      scaleX: 1,
    },
  ],
  animate: [
    {
      translateX: [0, -3, 0],
      transition: {
        duration: 400,
      },
    },
    // TODO different d
    {
      scaleX: [1, 0.8, 1],
      transition: {
        duration: 400,
      },
    },
  ],
  transformOrigin: '5 12',
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[i],
    enter: variants.normal[i],
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal[i];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,pf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'RefreshIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 250, damping: 25 },
};

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: -50,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({ ...variant, ...defaultTransition });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,mf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <Motion is="g" ref="target">
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DownloadIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { y: 0 },
  animate: {
    y: 2,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      mass: 1,
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,hf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <Motion
        is="path"
        ref="target"
        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SquarePenIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { duration: 500, repeat: 1, ease: 'easeInOut' },
};
const variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [-0.5, 0.5, -0.5],
    x: [0, -1, 1.5, 0],
    y: [0, 1.5, -1, 0],
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({ ...variant, ...defaultTransition });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,gf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="path"
        ref="targetCursor"
        d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
      />
      <Motion
        is="path"
        v-for="(path, index) in paths"
        :key="path.d"
        :ref="el => (targetList[index] = el)"
        :d="path.d"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CursorClickIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  { d: 'M14 4.1 12 6', x: 1, y: -1 },
  { d: 'm5.1 8-2.9-.8', x: -1, y: 0 },
  { d: 'm6 12-1.9 2', x: -1, y: 1 },
  { d: 'M7.2 2.2 8 5.1', x: 0, y: -1 },
];

const variants = {
  normal: { opacity: 1, x: 0, y: 0 },
  animate: ({ x, y }) => ({
    opacity: [0, 1, 0, 0, 0, 0, 1],
    x: [0, x, 0, 0],
    y: [0, y, 0, 0],
    transition: {
      delay: 1300,
      duration: 800,
      type: 'spring',
      stiffness: 70,
      damping: 10,
      mass: 0.4,
    },
  }),
};

const cursorVariants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: {
      duration: 1000,
      bounce: 0.3,
    },
  },
};

const len = paths.length;
const targetCursor = ref();
const targetInstanceCursor = useMotion(targetCursor, {
  initial: cursorVariants.normal,
  enter: cursorVariants.normal,
});
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  const variantCursor = cursorVariants[type];
  targetInstanceCursor.apply(variantCursor);
  for (let i = 0; i < len; i++) {
    const { x, y } = paths[i];
    const variant = type === 'animate' ? variants.animate({ x, y }) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,vf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="line" ref="targetHour" x1="12" y1="12" x2="12" y2="6" transform-origin="center center" />
      <Motion is="line" ref="targetMinute" x1="12" y1="12" x2="16" y2="12" transform-origin="center center" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ClockIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    minute: {
      rotate: 45,
      transition: {
        duration: 500,
        ease: 'easeInOut',
      },
    },
    hour: {
      rotate: 360,
      transition: {
        duration: 600,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
};

const targetHour = ref();
const targetInstanceHour = useMotion(targetHour, {
  initial: variants.normal,
  enter: variants.normal,
});
const targetMinute = ref();
const targetInstanceMintue = useMotion(targetMinute, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  let variant = type === 'animate' ? variants[type].hour : variants[type];
  targetInstanceHour.apply({
    ...variant,
    transition: {
      duration: 600,
      ...variant.transition,
    },
  });

  variant = type === 'animate' ? variants[type].minute : variants[type];
  targetInstanceMintue.apply({
    ...variant,
    transition: {
      duration: 500,
      ...variant.transition,
    },
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,yf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'BadgeAlertIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  duration: 500,
  ease: 'easeInOut',
};

const variants = {
  normal: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.1, 1.1, 1.1, 1],
    rotate: [0, -3, 3, -2, 2, 0],
    transition: {
      times: [0, 0.2, 0.4, 0.6, 1],
    },
  },
};
const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.animate,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    transition: {
      ...defaultTransition,
      ...variant.transition,
    },
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,wf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="path"
        ref="target"
        transform-origin="12 12"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BadgePercentIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
      duration: 500,
    },
  },
  animate: {
    rotate: 180,
    transition: {
      delay: 100,
      type: 'spring',
      stiffness: 80,
      damping: 13,
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,xf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="path"
        ref="target"
        d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
      />
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChartPieIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 15,
    bounce: 0.6,
  },
};

const variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: { translateX: 1.1, translateY: -1.1 },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,_f=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion
        is="polygon"
        ref="target"
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        transform-origin="center center"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CompassIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 120,
    damping: 15,
  },
};

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,bf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="line" ref="targetButton" x1="10" x2="14" y1="2" y2="2" transform-origin="12 2" />
      <Motion is="line" ref="targetTimer" x1="12" x2="15" y1="14" y2="11" transform-origin="12 14" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TimerIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  timer: {
    duration: 600,
    ease: [0.4, 0, 0.2, 1],
  },
  button: {
    duration: 300,
    ease: [0.4, 0, 0.2, 1],
  },
};

const variants = {
  timer: {
    normal: {
      rotate: 0,
    },
    animate: {
      rotate: 315,
      transition: {
        deley: 100,
      },
    },
  },
  button: {
    normal: {
      scale: 1,
      y: 0,
    },
    animate: {
      scale: [0.9, 1],
      y: [0, 1, 0],
    },
  },
};

const targetTimer = ref();
const targetInstanceTimer = useMotion(targetTimer, {
  initial: variants.timer.normal,
  enter: variants.timer.normal,
});
const targetButton = ref();
const targetInstanceButton = useMotion(targetButton, {
  initial: variants.button.normal,
  enter: variants.button.normal,
});

const hoverFn = type => {
  let variant = variants.timer[type];
  targetInstanceTimer.apply({
    ...variant,
    transition: {
      ...variant?.transition,
      ...defaultTransition.timer,
    },
  });

  variant = variants.button[type];
  targetInstanceButton.apply({
    ...variant,
    transition: {
      ...variant?.transition,
      ...defaultTransition.button,
    },
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Mf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" v-for="(path, index) in paths" :key="path" :ref="el => (targetList[index] = el)" :d="path" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ExpandIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  'm21 21-6-6m6 6v-4.8m0 4.8h-4.8',
  'M3 16.2V21m0 0h4.8M3 21l6-6',
  'M21 7.8V3m0 0h-4.8M21 3l-6 6',
  'M3 7.8V3m0 0h4.8M3 3l6 6',
];

const defaultTransition = {
  transition: {
    duration: 100,
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: { translateX: '0px', translateY: '0px' },
  animate: [
    { translateX: 2 + 'px', translateY: 2 + 'px' },
    { translateX: -2 + 'px', translateY: 2 + 'px' },
    { translateX: 2 + 'px', translateY: -2 + 'px' },
    { translateX: -2 + 'px', translateY: -2 + 'px' },
  ],
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,kf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" ref="target" d="m12 14 4-4" :transform-origin="variants.transformOrigin" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'GaugeIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 160,
    damping: 17,
    mass: 1,
  },
};

const variants = {
  normal: {
    translateX: 0,
    rotate: 0,
    translateY: 0,
  },
  animate: { translateX: 0.5, translateY: 0.5, rotate: 72 },
  transformOrigin: '12 14',
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});
const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Cf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="path"
        ref="target"
        d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
        transform-origin="center center"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BoneIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -8, 8, -6, 0],
    transition: {
      ease: 'circIn',
      rotate: {
        duration: 500,
      },
    },
  },
};
const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({ ...variant });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,If=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" ref="target" d="M17 12H7" />
      <path d="M19 18H5" />
      <path d="M21 6H3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlignCenterIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 3, -3, 2, -2, 0],
    transition: {
      ease: 'linear',
      translateX: {
        duration: 1000,
      },
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Lf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="rect"
        :ref="targetList[0]"
        width="6"
        height="10"
        x="9"
        y="7"
        rx="2"
        :transform-origin="variants.transformOrigin[0]"
      />
      <Motion is="path" :ref="targetList[1]" d="M4 22V2" :transform-origin="variants.transformOrigin[1]" />
      <Motion is="path" :ref="targetList[2]" d="M20 22V2" :transform-origin="variants.transformOrigin[2]" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlignHorizontalIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 160,
    damping: 17,
    mass: 1,
  },
};

const variants = {
  rect: {
    normal: { scaleX: 1 },
    animate: { scaleX: 0.85 },
  },
  pathLeft: {
    normal: { translateX: 0, scaleY: 1 },
    animate: {
      translateX: 2,
      scaleY: 0.9,
    },
  },
  pathRight: {
    normal: { translateX: 0, scaleY: 1 },
    animate: {
      translateX: -2,
      scaleY: 0.9,
    },
  },
  transformOrigin: ['12 12', '4 12', '20 12'],
};

const keys = ['rect', 'pathLeft', 'pathRight'];
const targetList = ref(new Array(keys.length).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

keys.forEach((key, i) => {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[key].normal,
    enter: variants[key].normal,
  });
});

onMounted(() => {
  keys.forEach((_, i) => {
    targetInstanceList[i].target = targetList.value[i];
  });
});

const hoverFn = type => {
  keys.forEach((key, i) => {
    const variant = variants[key][type];
    targetInstanceList[i].apply({
      ...variant,
      ...defaultTransition,
    });
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Hf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion
        is="rect"
        :ref="targetList[0]"
        width="10"
        height="6"
        x="7"
        y="9"
        rx="2"
        :transform-origin="variants.transformOrigin[0]"
      />
      <Motion is="path" :ref="targetList[1]" d="M22 20H2" :transform-origin="variants.transformOrigin[1]" />
      <Motion is="path" :ref="targetList[2]" d="M22 4H2" :transform-origin="variants.transformOrigin[2]" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlignVerticalIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 160,
    damping: 17,
    mass: 1,
  },
};

const variants = {
  normal: {
    rect: { scaleY: 1 },
    pathOne: { translateY: 0, scaleX: 1 },
    pathTwo: { translateY: 0, scaleX: 1 },
  },
  animate: {
    rect: { scaleY: 0.85 },
    pathOne: {
      translateY: -2,
      scaleX: 0.9,
    },
    pathTwo: {
      translateY: 2,
      scaleX: 0.9,
    },
  },
  transformOrigin: ['12 12', '12 20', '12 4'],
};
const keys = ['rect', 'pathOne', 'pathTwo'];
const targetList = ref(new Array(keys.length).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

keys.forEach((key, i) => {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[key],
    enter: variants.normal[key],
  });
});

onMounted(() => {
  keys.forEach((_, i) => {
    targetInstanceList[i].target = targetList.value[i];
  });
});

const hoverFn = type => {
  keys.forEach((key, i) => {
    const variant = variants[type][key];
    targetInstanceList[i].apply({
      ...variant,
      ...defaultTransition,
    });
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Tf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'BellIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    duration: 500,
    ease: 'easeInOut',
  },
};

const variants = {
  normal: { rotate: 0 },
  animate: { rotate: [0, -10, 10, -10, 0] },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Of=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7 10v12" />
      <path
        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'UpvoteIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 250, damping: 25 },
};

const variants = {
  normal: {
    translateX: 0,
    translateY: 0,
    rotate: 0,
  },
  animate: {
    translateX: -1,
    translateY: -2,
    rotate: -12,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,$f=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M17 14V2" />
      <path
        d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'DownvoteIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 250, damping: 25 },
};

const variants = {
  normal: {
    translateX: 0,
    translateY: 0,
    rotate: 0,
  },
  animate: {
    translateX: -1,
    translateY: 2,
    rotate: -12,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Sf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <Motion is="g" ref="target" transform-origin="center center">
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'UsersIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    translateX: 0,
    transition: {
      duration: 300,
      type: 'spring',
      stiffness: 200,
      damping: 13,
    },
  },
  animate: {
    translateX: [-6, 0],
    transition: {
      duration: 300,
      delay: 100,
      type: 'spring',
      stiffness: 200,
      damping: 13,
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,jf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <Motion is="circle" :ref="targetList[0]" cx="16" cy="9" r="2.9" />
      <Motion is="circle" :ref="targetList[1]" cx="6" cy="5" r="3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HandCoinsIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  duration: 300,
  opacity: { duration: 200 },
  type: 'spring',
  stiffness: 150,
  damping: 15,
  bounce: 0.8,
};

// TODO hover bounce
const variants = {
  normal: [
    {
      translateY: 0,
      opacity: 1,
    },
    {
      translateY: 0,
      opacity: 1,
      transition: {
        delay: 150,
      },
    },
  ],
  animate: [
    {
      opacity: [0, 1],
      translateY: [-20, 0],
    },
    {
      opacity: [0, 1],
      translateY: [-20, 0],
      transition: {
        delay: 150,
      },
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[i],
    enter: variants.normal[i],
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = variants[type][i];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      transition: {
        ...defaultTransition,
        ...variant.transition,
      },
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Ef=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="path" ref="target" d="m8 14 4-4 4 4" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleChevronUpIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transtion: {
    times: [0, 0.4, 1],
    duration: 500,
  },
};

const variants = {
  normal: { y: 0 },
  animate: {
    y: [0, -2, 0],
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Af=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="path" ref="target" d="m16 10-4 4-4-4" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleChevronDownIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transtion: {
    times: [0, 0.4, 1],
    duration: 500,
  },
};

const variants = {
  normal: { y: 0 },
  animate: {
    y: [0, 2, 0],
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Ff=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="path" ref="target" d="m14 16-4-4 4-4" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleChevronLeftIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transtion: {
    times: [0, 0.4, 1],
    duration: 500,
  },
};

const variants = {
  normal: { x: 0 },
  animate: { x: [0, -2, 0] },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Pf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <Motion is="path" ref="target" d="m10 8 4 4-4 4" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleChevronRightIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transtion: {
    times: [0, 0.4, 1],
    duration: 500,
  },
};

const variants = {
  normal: { x: 0 },
  animate: { x: [0, 2, 0] },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Rf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m7 15 5 5 5-5" />
      <Motion is="path" :ref="targetList[1]" d="m7 9 5-5 5 5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronsUpDownIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: {
    translateY: 0,
  },
  animate: [
    {
      translateY: 2,
    },
    {
      translateY: -2,
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[type][i] : variants[type];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Nf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m7 20 5-5 5 5" />
      <Motion is="path" :ref="targetList[1]" d="m7 4 5 5 5-5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronsDownUpIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: {
    translateY: 0,
  },
  animate: [
    {
      translateY: -2,
    },
    {
      translateY: 2,
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[type][i] : variants[type];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Bf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m9 7-5 5 5 5" />
      <Motion is="path" :ref="targetList[1]" d="m15 7 5 5-5 5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronsLeftRightIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: {
    translateX: 0,
  },
  animate: [
    {
      translateX: -2,
    },
    {
      translateX: 2,
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[type][i] : variants[type];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Df=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="m20 17-5-5 5-5" />
      <Motion is="path" :ref="targetList[1]" d="m4 17 5-5-5-5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronsRightLeftIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: {
    translateX: 0,
  },
  animate: [
    {
      translateX: -2,
    },
    {
      translateX: 2,
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[type][i] : variants[type];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Vf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'CogIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 50, damping: 10 },
};

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,zf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
      <path d="M13 16a3 3 0 0 1 2.24 5" />
      <path d="M18 12h.01" />
      <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
      <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'RabbitIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const transition = {
  duration: 600,
  ease: [0.42, 0, 0.58, 1],
};

const variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [0, 5, -5, 3, -3, 0],
    x: [0, 3, -3, 2, -2, 0],
    y: [0, 1.5, -1.5, 1, -1, 0],
    transition,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Yf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="path" :ref="targetList[0]" d="M18 20.5L19.5 22" />
      <Motion is="path" :ref="targetList[1]" d="M6 20.5L4.5 22" />
      <Motion
        is="path"
        :ref="targetList[2]"
        d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
      />
      <Motion
        is="path"
        :ref="targetList[3]"
        d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
      />
      <!--  -->
      <Motion is="path" :ref="targetList[4]" d="M18 2L21.747 5.31064" />
      <Motion is="path" :ref="targetList[5]" d="M6 2L2.25304 5.31064" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlarmClockIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const pathOne = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 200,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -1.5,
    x: [-1, 1, -1, 1, -1, 0],
    transition: {
      y: {
        duration: 200,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 300,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const pathTwo = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 200,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -2.5,
    x: [-2, 2, -2, 2, -2, 0],
    transition: {
      y: {
        duration: 200,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 300,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const len = 6;
const variants = Array.from({ length: len }, i => (i < 4 ? pathOne : pathTwo));
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[i].normal,
    enter: variants[i].normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[i].animate : variants[i].normal;
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Xf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="g" ref="target" :transform-origin="transformOrigion">
        <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
        <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
        <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      </Motion>
      <circle cx="12" cy="12" r="10" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoaderPinwheelIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
    transitin: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  },
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 1000,
      ease: 'linear',
    },
  },
};

const transformOrigion = '12 12';

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Uf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      ref="target"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 512 512"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="5.632"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M450.327,224.582l-46.545-46.545c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l15.127,15.127L205.964,406.109c-4.655,4.655-11.636,4.655-16.291,0l-18.618-18.618c-4.655-4.655-11.636-4.655-16.291,0l-18.618,18.618c-4.655,4.655-11.636,4.655-16.291,0l-13.964-13.964c-2.327-2.327-3.491-4.655-3.491-8.145s1.164-5.818,3.491-8.145l18.618-18.618c4.655-4.655,4.655-11.636,0-16.291l-18.618-18.618c-2.327-2.327-3.491-4.655-3.491-8.145c0-3.491,1.164-5.818,3.491-8.146l169.891-169.891c4.655-4.655,4.655-11.636,0-16.291s-11.636-4.655-16.291,0L89.6,289.745c-6.982,6.982-10.473,15.127-10.473,24.436S82.618,332.8,89.6,338.618l10.473,10.473L89.6,359.564c-6.982,6.982-10.473,15.127-10.473,24.436c0,8.145,3.491,16.291,9.309,23.273L3.491,492.218c-4.655,4.655-4.655,11.636,0,16.291C5.818,510.836,8.145,512,11.636,512s5.818-1.164,8.145-3.491l84.945-84.945c13.964,11.636,34.909,11.636,47.709-1.164l10.473-10.473l10.473,10.473c6.982,6.982,16.291,10.473,24.436,10.473c9.309,0,17.455-3.491,24.436-10.473l196.655-196.655l15.127,15.127c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C454.982,236.218,454.982,229.236,450.327,224.582z"
      ></path>
      <path
        d="M508.509,119.855L392.145,3.491c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l39.564,39.564c2.327,2.327,3.491,6.982,3.491,10.473s-1.164,8.145-4.655,10.473l-53.527,54.691l-73.309-73.309c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l73.309,73.309L244.364,251.345L217.6,224.582c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l69.818,69.818c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491c4.655-4.655,4.655-11.636,0-16.291l-26.764-26.764L431.709,97.745c6.982-5.818,15.127-5.818,22.109,0l38.4,38.4c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C513.164,131.491,513.164,124.509,508.509,119.855z"
      ></path>
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'SyringeIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 250, damping: 25 },
};
const variants = {
  normal: {
    translateX: 0,
    translateY: 0,
    rotate: 0,
  },
  animate: {
    translateX: -3,
    translateY: 3,
    rotate: 1,
  },
};
const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({
    ...variant,
    ...defaultTransition,
  });
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`,Wf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke-width="5.632"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="g" ref="targetG" transform-origin="center center">
        <circle cx="151.273" cy="407.273" r="11.636" />
        <circle cx="244.364" cy="372.364" r="11.636" />
        <circle cx="290.909" cy="418.909" r="11.636" />
        <circle cx="221.091" cy="453.818" r="11.636" />
        <circle cx="372.364" cy="430.545" r="11.636" />
      </Motion>
      <Motion
        is="path"
        ref="targetPath"
        transform-origin="center center"
        d="M456.145,436.364l-79.127-124.509c0-2.327-2.327-4.655-3.491-5.818l-34.909-55.855c-8.146-13.964-12.8-29.091-12.8-44.218 V67.491c13.964-4.655,23.273-17.455,23.273-32.582C349.091,15.127,333.964,0,314.182,0H197.818 c-19.782,0-34.909,15.127-34.909,34.909c0,19.782,15.127,34.909,34.909,34.909h69.818c6.982,0,11.636-4.655,11.636-11.636 s-4.655-11.636-11.636-11.636h-69.818c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h116.364 c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636v147.782 c0,19.782,5.818,39.564,16.291,55.855l19.782,31.418c-30.255-5.818-64-2.327-88.436,10.473 c-23.273,11.636-60.509,13.964-87.273,4.655l30.255-46.545c10.473-16.291,16.291-36.073,16.291-55.855V104.727 c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v101.236c0,15.127-4.655,30.255-12.8,43.055l-34.909,55.855 c-1.164,1.164-2.327,2.327-3.491,3.491c0,1.164,0,1.164-1.164,2.327L55.855,436.364c-5.818,9.309-9.309,19.782-9.309,31.418v9.309 c0,19.782,15.127,34.909,34.909,34.909h349.091c19.782,0,34.909-15.127,34.909-34.909v-9.309 C465.455,456.145,461.964,445.673,456.145,436.364z M443.345,477.091h-1.164c0,6.982-4.655,11.636-11.636,11.636H81.455 c-6.982,0-11.636-4.655-11.636-11.636v-9.309c0-6.982,2.327-12.8,5.818-18.618l75.636-119.855 c15.127,5.818,32.582,8.145,50.036,8.145c22.109,0,43.055-4.655,60.509-12.8c25.6-12.8,68.655-13.964,96.582-1.164l79.127,125.673 c3.491,5.818,5.818,11.636,5.818,18.618V477.091z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FlaskIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  g: {
    normal: { rotate: 0, translateY: 0 },
    animate: {
      translateY: -12,
      rotate: [0, 5, -5, 3, -3, 0],
      transition: {
        ease: 'linear',
        rotate: { duration: 800 },
      },
    },
  },
  path: {
    normal: { rotate: 0, scale: 1 },
    animate: {
      scale: 0.9,
      rotate: [0, 6, -6, 3, -3, 0],
      transition: {
        duration: 800,
        scale: {
          duration: 300,
          type: 'spring',
          bounce: 0.4,
          stiffness: 150,
          damping: 10,
        },
      },
    },
  },
};

const targetG = ref();
const targetInstanceG = useMotion(targetG, {
  initial: variants.g.normal,
  enter: variants.g.normal,
});
const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const hoverFn = type => {
  let variant = variants.g[type];
  targetInstanceG.apply(variant);

  variant = variants.path[type];
  targetInstancePath.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`;function rr(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Lr(n,t,e=".",o){if(!rr(t))return Lr(n,{},e,o);const r=Object.assign({},t);for(const i in n){if(i==="__proto__"||i==="constructor")continue;const s=n[i];s!=null&&(o&&o(r,i,s,e)||(Array.isArray(s)&&Array.isArray(r[i])?r[i]=[...s,...r[i]]:rr(s)&&rr(r[i])?r[i]=Lr(s,r[i],(e?`${e}.`:"")+i.toString(),o):r[i]=s))}return r}function Gf(n){return(...t)=>t.reduce((e,o)=>Lr(e,o,"",n),{})}const qf=Gf();function Ka(n){return Gr()?(Gs(n),!0):!1}function fi(n){return typeof n=="function"?n():v(n)}const Kf=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Zf=n=>n!=null,Jf=Object.prototype.toString,Za=n=>Jf.call(n)==="[object Object]",ro=()=>{};function Qf(n){return jo()}function np(n,t){Qf()&&Oo(n,t)}function me(n){var t;const e=fi(n);return(t=e==null?void 0:e.$el)!=null?t:e}const Ja=Kf?window:void 0;function Zn(...n){let t,e,o,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,o,r]=n,t=Ja):[t,e,o,r]=n,!t)return ro;Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);const i=[],s=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,m)=>(u.addEventListener(d,f,m),()=>u.removeEventListener(d,f,m)),l=Ln(()=>[me(t),fi(r)],([u,d])=>{if(s(),!u)return;const f=Za(d)?{...d}:d;i.push(...e.flatMap(m=>o.map(g=>a(u,m,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ka(c),c}function tp(){const n=M(!1),t=jo();return t&&$n(()=>{n.value=!0},t),n}function ep(n){const t=tp();return Dn(()=>(t.value,!!n()))}function op(n,t,e={}){const{root:o,rootMargin:r="0px",threshold:i=.1,window:s=Ja,immediate:a=!0}=e,l=ep(()=>s&&"IntersectionObserver"in s),c=Dn(()=>{const g=fi(n);return(Array.isArray(g)?g:[g]).map(me).filter(Zf)});let u=ro;const d=M(a),f=l.value?Ln(()=>[c.value,me(o),d.value],([g,k])=>{if(u(),!d.value||!g.length)return;const j=new IntersectionObserver(t,{root:me(k),rootMargin:r,threshold:i});g.forEach(C=>C&&j.observe(C)),u=()=>{j.disconnect(),u=ro}},{immediate:a,flush:"post"}):ro,m=()=>{u(),f(),d.value=!1};return Ka(m),{isSupported:l,isActive:d,pause(){u(),d.value=!1},resume(){d.value=!0},stop:m}}const Qa=1/60*1e3,rp=typeof performance<"u"?()=>performance.now():()=>Date.now(),nl=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(rp()),Qa);function ip(n){let t=[],e=[],o=0,r=!1,i=!1;const s=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&r,f=d?t:e;return c&&s.add(l),f.indexOf(l)===-1&&(f.push(l),d&&r&&(o=t.length)),l},cancel:l=>{const c=e.indexOf(l);c!==-1&&e.splice(c,1),s.delete(l)},process:l=>{if(r){i=!0;return}if(r=!0,[t,e]=[e,t],e.length=0,o=t.length,o)for(let c=0;c<o;c++){const u=t[c];u(l),s.has(u)&&(a.schedule(u),n())}r=!1,i&&(i=!1,a.process(l))}};return a}const sp=40;let Hr=!0,Se=!1,Tr=!1;const Zt={delta:0,timestamp:0},Ve=["read","update","preRender","render","postRender"],Po=Ve.reduce((n,t)=>(n[t]=ip(()=>Se=!0),n),{}),Or=Ve.reduce((n,t)=>{const e=Po[t];return n[t]=(o,r=!1,i=!1)=>(Se||cp(),e.schedule(o,r,i)),n},{}),ap=Ve.reduce((n,t)=>(n[t]=Po[t].cancel,n),{});Ve.reduce((n,t)=>(n[t]=()=>Po[t].process(Zt),n),{});const lp=n=>Po[n].process(Zt),tl=n=>{Se=!1,Zt.delta=Hr?Qa:Math.max(Math.min(n-Zt.timestamp,sp),1),Zt.timestamp=n,Tr=!0,Ve.forEach(lp),Tr=!1,Se&&(Hr=!1,nl(tl))},cp=()=>{Se=!0,Hr=!0,Tr||nl(tl)},el=()=>Zt;function ol(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e}var cs=function(){};const $r=(n,t,e)=>Math.min(Math.max(e,n),t),ir=.001,up=.01,dp=10,fp=.05,pp=1;function mp({duration:n=800,bounce:t=.25,velocity:e=0,mass:o=1}){let r,i,s=1-t;s=$r(fp,pp,s),n=$r(up,dp,n/1e3),s<1?(r=c=>{const u=c*s,d=u*n,f=u-e,m=Sr(c,s),g=Math.exp(-d);return ir-f/m*g},i=c=>{const d=c*s*n,f=d*e+e,m=Math.pow(s,2)*Math.pow(c,2)*n,g=Math.exp(-d),k=Sr(Math.pow(c,2),s);return(-r(c)+ir>0?-1:1)*((f-m)*g)/k}):(r=c=>{const u=Math.exp(-c*n),d=(c-e)*n+1;return-ir+u*d},i=c=>{const u=Math.exp(-c*n),d=(e-c)*(n*n);return u*d});const a=5/n,l=gp(r,i,a);if(n=n*1e3,isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*o;return{stiffness:c,damping:s*2*Math.sqrt(o*c),duration:n}}}const hp=12;function gp(n,t,e){let o=e;for(let r=1;r<hp;r++)o=o-n(o)/t(o);return o}function Sr(n,t){return n*Math.sqrt(1-t*t)}const vp=["duration","bounce"],yp=["stiffness","damping","mass"];function us(n,t){return t.some(e=>n[e]!==void 0)}function wp(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!us(n,yp)&&us(n,vp)){const e=mp(n);t=Object.assign(Object.assign(Object.assign({},t),e),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function pi(n){var{from:t=0,to:e=1,restSpeed:o=2,restDelta:r}=n,i=ol(n,["from","to","restSpeed","restDelta"]);const s={done:!1,value:t};let{stiffness:a,damping:l,mass:c,velocity:u,duration:d,isResolvedFromDuration:f}=wp(i),m=ds,g=ds;function k(){const j=u?-(u/1e3):0,C=e-t,L=l/(2*Math.sqrt(a*c)),H=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(e-t)/100,.4)),L<1){const T=Sr(H,L);m=N=>{const W=Math.exp(-L*H*N);return e-W*((j+L*H*C)/T*Math.sin(T*N)+C*Math.cos(T*N))},g=N=>{const W=Math.exp(-L*H*N);return L*H*W*(Math.sin(T*N)*(j+L*H*C)/T+C*Math.cos(T*N))-W*(Math.cos(T*N)*(j+L*H*C)-T*C*Math.sin(T*N))}}else if(L===1)m=T=>e-Math.exp(-H*T)*(C+(j+H*C)*T);else{const T=H*Math.sqrt(L*L-1);m=N=>{const W=Math.exp(-L*H*N),G=Math.min(T*N,300);return e-W*((j+L*H*C)*Math.sinh(G)+T*C*Math.cosh(G))/T}}}return k(),{next:j=>{const C=m(j);if(f)s.done=j>=d;else{const L=g(j)*1e3,H=Math.abs(L)<=o,T=Math.abs(e-C)<=r;s.done=H&&T}return s.value=s.done?e:C,s},flipTarget:()=>{u=-u,[t,e]=[e,t],k()}}}pi.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const ds=n=>0,rl=(n,t,e)=>{const o=t-n;return o===0?1:(e-n)/o},mi=(n,t,e)=>-e*n+e*t+n,il=(n,t)=>e=>Math.max(Math.min(e,t),n),he=n=>n%1?Number(n.toFixed(5)):n,je=/(-)?([\d]*\.?[\d])+/g,jr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,xp=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ze(n){return typeof n=="string"}const Ye={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ge=Object.assign(Object.assign({},Ye),{transform:il(0,1)}),Ze=Object.assign(Object.assign({},Ye),{default:1}),hi=n=>({test:t=>ze(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),$t=hi("deg"),ve=hi("%"),U=hi("px"),fs=Object.assign(Object.assign({},ve),{parse:n=>ve.parse(n)/100,transform:n=>ve.transform(n*100)}),gi=(n,t)=>e=>!!(ze(e)&&xp.test(e)&&e.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(e,t)),sl=(n,t,e)=>o=>{if(!ze(o))return o;const[r,i,s,a]=o.match(je);return{[n]:parseFloat(r),[t]:parseFloat(i),[e]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Ft={test:gi("hsl","hue"),parse:sl("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:o=1})=>"hsla("+Math.round(n)+", "+ve.transform(he(t))+", "+ve.transform(he(e))+", "+he(ge.transform(o))+")"},_p=il(0,255),sr=Object.assign(Object.assign({},Ye),{transform:n=>Math.round(_p(n))}),yt={test:gi("rgb","red"),parse:sl("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:o=1})=>"rgba("+sr.transform(n)+", "+sr.transform(t)+", "+sr.transform(e)+", "+he(ge.transform(o))+")"};function bp(n){let t="",e="",o="",r="";return n.length>5?(t=n.substr(1,2),e=n.substr(3,2),o=n.substr(5,2),r=n.substr(7,2)):(t=n.substr(1,1),e=n.substr(2,1),o=n.substr(3,1),r=n.substr(4,1),t+=t,e+=e,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Er={test:gi("#"),parse:bp,transform:yt.transform},Sn={test:n=>yt.test(n)||Er.test(n)||Ft.test(n),parse:n=>yt.test(n)?yt.parse(n):Ft.test(n)?Ft.parse(n):Er.parse(n),transform:n=>ze(n)?n:n.hasOwnProperty("red")?yt.transform(n):Ft.transform(n)},al="${c}",ll="${n}";function Mp(n){var t,e,o,r;return isNaN(n)&&ze(n)&&((e=(t=n.match(je))===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0)+((r=(o=n.match(jr))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function cl(n){typeof n=="number"&&(n=`${n}`);const t=[];let e=0;const o=n.match(jr);o&&(e=o.length,n=n.replace(jr,al),t.push(...o.map(Sn.parse)));const r=n.match(je);return r&&(n=n.replace(je,ll),t.push(...r.map(Ye.parse))),{values:t,numColors:e,tokenised:n}}function ul(n){return cl(n).values}function dl(n){const{values:t,numColors:e,tokenised:o}=cl(n),r=t.length;return i=>{let s=o;for(let a=0;a<r;a++)s=s.replace(a<e?al:ll,a<e?Sn.transform(i[a]):he(i[a]));return s}}const kp=n=>typeof n=="number"?0:n;function Cp(n){const t=ul(n);return dl(n)(t.map(kp))}const Xe={test:Mp,parse:ul,createTransformer:dl,getAnimatableNone:Cp},Ip=new Set(["brightness","contrast","saturate","opacity"]);function Lp(n){let[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=e.match(je)||[];if(!o)return n;const r=e.replace(o,"");let i=Ip.has(t)?1:0;return o!==e&&(i*=100),t+"("+i+r+")"}const Hp=/([a-z-]*)\(.*?\)/g,Ar=Object.assign(Object.assign({},Xe),{getAnimatableNone:n=>{const t=n.match(Hp);return t?t.map(Lp).join(" "):n}});function ar(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function ps({hue:n,saturation:t,lightness:e,alpha:o}){n/=360,t/=100,e/=100;let r=0,i=0,s=0;if(!t)r=i=s=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;r=ar(l,a,n+1/3),i=ar(l,a,n),s=ar(l,a,n-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:o}}const Tp=(n,t,e)=>{const o=n*n,r=t*t;return Math.sqrt(Math.max(0,e*(r-o)+o))},Op=[Er,yt,Ft],ms=n=>Op.find(t=>t.test(n)),fl=(n,t)=>{let e=ms(n),o=ms(t),r=e.parse(n),i=o.parse(t);e===Ft&&(r=ps(r),e=yt),o===Ft&&(i=ps(i),o=yt);const s=Object.assign({},r);return a=>{for(const l in s)l!=="alpha"&&(s[l]=Tp(r[l],i[l],a));return s.alpha=mi(r.alpha,i.alpha,a),e.transform(s)}},$p=n=>typeof n=="number",Sp=(n,t)=>e=>t(n(e)),pl=(...n)=>n.reduce(Sp);function ml(n,t){return $p(n)?e=>mi(n,t,e):Sn.test(n)?fl(n,t):gl(n,t)}const hl=(n,t)=>{const e=[...n],o=e.length,r=n.map((i,s)=>ml(i,t[s]));return i=>{for(let s=0;s<o;s++)e[s]=r[s](i);return e}},jp=(n,t)=>{const e=Object.assign(Object.assign({},n),t),o={};for(const r in e)n[r]!==void 0&&t[r]!==void 0&&(o[r]=ml(n[r],t[r]));return r=>{for(const i in o)e[i]=o[i](r);return e}};function hs(n){const t=Xe.parse(n),e=t.length;let o=0,r=0,i=0;for(let s=0;s<e;s++)o||typeof t[s]=="number"?o++:t[s].hue!==void 0?i++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:i}}const gl=(n,t)=>{const e=Xe.createTransformer(t),o=hs(n),r=hs(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?pl(hl(o.parsed,r.parsed),e):s=>`${s>0?t:n}`},Ep=(n,t)=>e=>mi(n,t,e);function Ap(n){if(typeof n=="number")return Ep;if(typeof n=="string")return Sn.test(n)?fl:gl;if(Array.isArray(n))return hl;if(typeof n=="object")return jp}function Fp(n,t,e){const o=[],r=e||Ap(n[0]),i=n.length-1;for(let s=0;s<i;s++){let a=r(n[s],n[s+1]);if(t){const l=Array.isArray(t)?t[s]:t;a=pl(l,a)}o.push(a)}return o}function Pp([n,t],[e]){return o=>e(rl(n,t,o))}function Rp(n,t){const e=n.length,o=e-1;return r=>{let i=0,s=!1;if(r<=n[0]?s=!0:r>=n[o]&&(i=o-1,s=!0),!s){let l=1;for(;l<e&&!(n[l]>r||l===o);l++);i=l-1}const a=rl(n[i],n[i+1],r);return t[i](a)}}function vl(n,t,{clamp:e=!0,ease:o,mixer:r}={}){const i=n.length;cs(i===t.length),cs(!o||!Array.isArray(o)||o.length===i-1),n[0]>n[i-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const s=Fp(t,o,r),a=i===2?Pp(n,s):Rp(n,s);return e?l=>a($r(n[0],n[i-1],l)):a}const Ro=n=>t=>1-n(1-t),vi=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,Np=n=>t=>Math.pow(t,n),yl=n=>t=>t*t*((n+1)*t-n),Bp=n=>{const t=yl(n);return e=>(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))},wl=1.525,Dp=4/11,Vp=8/11,zp=9/10,xl=n=>n,yi=Np(2),Yp=Ro(yi),_l=vi(yi),bl=n=>1-Math.sin(Math.acos(n)),Ml=Ro(bl),Xp=vi(Ml),wi=yl(wl),Up=Ro(wi),Wp=vi(wi),Gp=Bp(wl),qp=4356/361,Kp=35442/1805,Zp=16061/1805,mo=n=>{if(n===1||n===0)return n;const t=n*n;return n<Dp?7.5625*t:n<Vp?9.075*t-9.9*n+3.4:n<zp?qp*t-Kp*n+Zp:10.8*n*n-20.52*n+10.72},Jp=Ro(mo),Qp=n=>n<.5?.5*(1-mo(1-n*2)):.5*mo(n*2-1)+.5;function n0(n,t){return n.map(()=>t||_l).splice(0,n.length-1)}function t0(n){const t=n.length;return n.map((e,o)=>o!==0?o/(t-1):0)}function e0(n,t){return n.map(e=>e*t)}function io({from:n=0,to:t=1,ease:e,offset:o,duration:r=300}){const i={done:!1,value:n},s=Array.isArray(t)?t:[n,t],a=e0(o&&o.length===s.length?o:t0(s),r);function l(){return vl(a,s,{ease:Array.isArray(e)?e:n0(s,e)})}let c=l();return{next:u=>(i.value=c(u),i.done=u>=r,i),flipTarget:()=>{s.reverse(),c=l()}}}function o0({velocity:n=0,from:t=0,power:e=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:i}){const s={done:!1,value:t};let a=e*n;const l=t+a,c=i===void 0?l:i(l);return c!==l&&(a=c-t),{next:u=>{const d=-a*Math.exp(-u/o);return s.done=!(d>r||d<-r),s.value=s.done?c:c+d,s},flipTarget:()=>{}}}const gs={keyframes:io,spring:pi,decay:o0};function r0(n){if(Array.isArray(n.to))return io;if(gs[n.type])return gs[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?io:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?pi:io}function kl(n,t,e=0){return n-t-e}function i0(n,t,e=0,o=!0){return o?kl(t+-n,t,e):t-(n-t)+e}function s0(n,t,e,o){return o?n>=t+e:n<=-e}const a0=n=>{const t=({delta:e})=>n(e);return{start:()=>Or.update(t,!0),stop:()=>ap.update(t)}};function Cl(n){var t,e,{from:o,autoplay:r=!0,driver:i=a0,elapsed:s=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:d,onComplete:f,onRepeat:m,onUpdate:g}=n,k=ol(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:j}=k,C,L=0,H=k.duration,T,N=!1,W=!0,G;const dn=r0(k);!((e=(t=dn).needsInterpolation)===null||e===void 0)&&e.call(t,o,j)&&(G=vl([0,100],[o,j],{clamp:!1}),o=0,j=100);const sn=dn(Object.assign(Object.assign({},k),{from:o,to:j}));function Q(){L++,l==="reverse"?(W=L%2===0,s=i0(s,H,c,W)):(s=kl(s,H,c),l==="mirror"&&sn.flipTarget()),N=!1,m&&m()}function hn(){C.stop(),f&&f()}function vn(pn){if(W||(pn=-pn),s+=pn,!N){const Rn=sn.next(Math.max(0,s));T=Rn.value,G&&(T=G(T)),N=W?Rn.done:s<=0}g==null||g(T),N&&(L===0&&(H??(H=s)),L<a?s0(s,H,c,W)&&Q():hn())}function xn(){u==null||u(),C=i(vn),C.start()}return r&&xn(),{stop:()=>{d==null||d(),C.stop()}}}function Il(n,t){return t?n*(1e3/t):0}function l0({from:n=0,velocity:t=0,min:e,max:o,power:r=.8,timeConstant:i=750,bounceStiffness:s=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:d,onComplete:f,onStop:m}){let g;function k(H){return e!==void 0&&H<e||o!==void 0&&H>o}function j(H){return e===void 0?o:o===void 0||Math.abs(e-H)<Math.abs(o-H)?e:o}function C(H){g==null||g.stop(),g=Cl(Object.assign(Object.assign({},H),{driver:u,onUpdate:T=>{var N;d==null||d(T),(N=H.onUpdate)===null||N===void 0||N.call(H,T)},onComplete:f,onStop:m}))}function L(H){C(Object.assign({type:"spring",stiffness:s,damping:a,restDelta:l},H))}if(k(n))L({from:n,velocity:t,to:j(n)});else{let H=r*t+n;typeof c<"u"&&(H=c(H));const T=j(H),N=T===e?-1:1;let W,G;const dn=sn=>{W=G,G=sn,t=Il(sn-W,el().delta),(N===1&&sn>T||N===-1&&sn<T)&&L({from:sn,to:T,velocity:t})};C({type:"decay",from:n,velocity:t,timeConstant:i,power:r,restDelta:l,modifyTarget:c,onUpdate:k(H)?dn:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Ll=(n,t)=>1-3*t+3*n,Hl=(n,t)=>3*t-6*n,Tl=n=>3*n,ho=(n,t,e)=>((Ll(t,e)*n+Hl(t,e))*n+Tl(t))*n,Ol=(n,t,e)=>3*Ll(t,e)*n*n+2*Hl(t,e)*n+Tl(t),c0=1e-7,u0=10;function d0(n,t,e,o,r){let i,s,a=0;do s=t+(e-t)/2,i=ho(s,o,r)-n,i>0?e=s:t=s;while(Math.abs(i)>c0&&++a<u0);return s}const f0=8,p0=.001;function m0(n,t,e,o){for(let r=0;r<f0;++r){const i=Ol(t,e,o);if(i===0)return t;const s=ho(t,e,o)-n;t-=s/i}return t}const so=11,Je=1/(so-1);function h0(n,t,e,o){if(n===t&&e===o)return xl;const r=new Float32Array(so);for(let s=0;s<so;++s)r[s]=ho(s*Je,n,e);function i(s){let a=0,l=1;const c=so-1;for(;l!==c&&r[l]<=s;++l)a+=Je;--l;const u=(s-r[l])/(r[l+1]-r[l]),d=a+u*Je,f=Ol(d,n,e);return f>=p0?m0(s,d,n,e):f===0?d:d0(s,a,a+Je,n,e)}return s=>s===0||s===1?s:ho(i(s),t,o)}var g0=Object.defineProperty,v0=(n,t,e)=>t in n?g0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,y0=(n,t,e)=>(v0(n,t+"",e),e);class w0{constructor(){y0(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,e,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,e,o)}clear(){this.subscriptions.clear()}}var x0=Object.defineProperty,_0=(n,t,e)=>t in n?x0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jn=(n,t,e)=>(_0(n,typeof t!="symbol"?t+"":t,e),e);function vs(n){return!Number.isNaN(Number.parseFloat(n))}class b0{constructor(t){Jn(this,"current"),Jn(this,"prev"),Jn(this,"timeDelta",0),Jn(this,"lastUpdated",0),Jn(this,"updateSubscribers",new w0),Jn(this,"stopAnimation"),Jn(this,"canTrackVelocity",!1),Jn(this,"updateAndNotify",e=>{this.prev=this.current,this.current=e;const{delta:o,timestamp:r}=el();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Or.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Jn(this,"scheduleVelocityCheck",()=>Or.postRender(this.velocityCheck)),Jn(this,"velocityCheck",({timestamp:e})=>{this.canTrackVelocity||(this.canTrackVelocity=vs(this.current)),e!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=vs(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Il(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(e=>{const{stop:o}=t(e);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function M0(n){return new b0(n)}const{isArray:k0}=Array;function C0(){const n=M({}),t=o=>{const r=i=>{n.value[i]&&(n.value[i].stop(),n.value[i].destroy(),delete n.value[i])};o?k0(o)?o.forEach(r):r(o):Object.keys(n.value).forEach(r)},e=(o,r,i)=>{if(n.value[o])return n.value[o];const s=M0(r);return s.onChange(a=>i[o]=a),n.value[o]=s,s};return np(t),{motionValues:n,get:e,stop:t}}function I0(n){return Array.isArray(n)}function St(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function lr(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function L0(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function cr(){return{type:"keyframes",ease:"linear",duration:300}}function H0(n){return{type:"keyframes",duration:800,values:n}}const ys={default:L0,x:St,y:St,z:St,rotate:St,rotateX:St,rotateY:St,rotateZ:St,scaleX:lr,scaleY:lr,scale:lr,backgroundColor:cr,color:cr,opacity:cr};function $l(n,t){let e;return I0(t)?e=H0:e=ys[n]||ys.default,{to:t,...e(t)}}const ws={...Ye,transform:Math.round},Sl={color:Sn,backgroundColor:Sn,outlineColor:Sn,fill:Sn,stroke:Sn,borderColor:Sn,borderTopColor:Sn,borderRightColor:Sn,borderBottomColor:Sn,borderLeftColor:Sn,borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:$t,rotateX:$t,rotateY:$t,rotateZ:$t,scale:Ze,scaleX:Ze,scaleY:Ze,scaleZ:Ze,skew:$t,skewX:$t,skewY:$t,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:ge,originX:fs,originY:fs,originZ:U,zIndex:ws,filter:Ar,WebkitFilter:Ar,fillOpacity:ge,strokeOpacity:ge,numOctaves:ws},xi=n=>Sl[n];function Fr(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function T0(n,t){let e=xi(n);return e!==Ar&&(e=Xe),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const O0={linear:xl,easeIn:yi,easeInOut:_l,easeOut:Yp,circIn:bl,circInOut:Xp,circOut:Ml,backIn:wi,backInOut:Wp,backOut:Up,anticipate:Gp,bounceIn:Jp,bounceInOut:Qp,bounceOut:mo};function xs(n){if(Array.isArray(n)){const[t,e,o,r]=n;return h0(t,e,o,r)}else if(typeof n=="string")return O0[n];return n}function $0(n){return Array.isArray(n)&&typeof n[0]!="number"}function _s(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Xe.test(t)&&!t.startsWith("url("))}function S0(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function j0({ease:n,times:t,delay:e,...o}){const r={...o};return t&&(r.offset=t),n&&(r.ease=$0(n)?n.map(xs):xs(n)),e&&(r.elapsed=-e),r}function E0(n,t,e){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),S0(t),A0(n)||(n={...n,...$l(e,t.to)}),{...t,...j0(n)}}function A0({delay:n,repeat:t,repeatType:e,repeatDelay:o,from:r,...i}){return!!Object.keys(i).length}function F0(n,t){return n[t]||n.default||n}function P0(n,t,e,o,r){const i=F0(o,n);let s=i.from===null||i.from===void 0?t.get():i.from;const a=_s(n,e);s==="none"&&a&&typeof e=="string"&&(s=T0(n,e));const l=_s(n,s);function c(d){const f={from:s,to:e,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?l0({...f,...i}):Cl({...E0(i,f,n),onUpdate:m=>{f.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{r&&r(),d&&d()}})}function u(d){return t.set(e),r&&r(),d&&d(),{stop:()=>{}}}return!l||!a||i.type===!1?u:c}function R0(){const{motionValues:n,stop:t,get:e}=C0();return{motionValues:n,stop:t,push:(r,i,s,a={},l)=>{const c=s[r],u=e(r,c,s);if(a&&a.immediate){u.set(i);return}const d=P0(r,u,i,a,l);u.start(d)}}}function N0(n,t={},{motionValues:e,push:o,stop:r}=R0()){const i=v(t),s=M(!1);Ln(e,d=>{s.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=d=>{if(!i||!i[d])throw new Error(`The variant ${d} does not exist.`);return i[d]},l=d=>{typeof d=="string"&&(d=a(d));const f=Object.entries(d).map(([g,k])=>{if(g!=="transition")return new Promise(j=>o(g,k,n,d.transition||$l(g,d[g]),j))}).filter(Boolean);async function m(){var g,k;await Promise.all(f),(k=(g=d.transition)==null?void 0:g.onComplete)==null||k.call(g)}return Promise.all([m()])};return{isAnimating:s,apply:l,set:d=>{const f=Za(d)?d:a(d);Object.entries(f).forEach(([m,g])=>{m!=="transition"&&o(m,g,n,{immediate:!0})})},leave:async d=>{let f;if(i&&(i.leave&&(f=i.leave),!i.leave&&i.initial&&(f=i.initial)),!f){d();return}await l(f),d()},stop:r}}const _i=typeof window<"u",B0=()=>_i&&(window.onpointerdown===null||void 0),D0=()=>_i&&(window.ontouchstart===null||void 0),V0=()=>_i&&(window.onmousedown===null||void 0);function z0({target:n,state:t,variants:e,apply:o}){const r=v(e),i=M(!1),s=M(!1),a=M(!1),l=Dn(()=>{let u=[...Object.keys(t.value||{})];return r&&(r.hovered&&(u=[...u,...Object.keys(r.hovered)]),r.tapped&&(u=[...u,...Object.keys(r.tapped)]),r.focused&&(u=[...u,...Object.keys(r.focused)])),u}),c=Dn(()=>{const u={};Object.assign(u,t.value),i.value&&r.hovered&&Object.assign(u,r.hovered),s.value&&r.tapped&&Object.assign(u,r.tapped),a.value&&r.focused&&Object.assign(u,r.focused);for(const d in u)l.value.includes(d)||delete u[d];return u});r.hovered&&(Zn(n,"mouseenter",()=>i.value=!0),Zn(n,"mouseleave",()=>{i.value=!1,s.value=!1})),r.tapped&&(V0()&&(Zn(n,"mousedown",()=>s.value=!0),Zn(n,"mouseup",()=>s.value=!1)),B0()&&(Zn(n,"pointerdown",()=>s.value=!0),Zn(n,"pointerup",()=>s.value=!1)),D0()&&(Zn(n,"touchstart",()=>s.value=!0),Zn(n,"touchend",()=>s.value=!1))),r.focused&&(Zn(n,"focus",()=>a.value=!0),Zn(n,"blur",()=>a.value=!1)),Ln([i,s,a],()=>{o(c.value)})}function Y0({set:n,target:t,variants:e,variant:o}){const r=v(e);Ln(()=>t,()=>{r&&(r.initial&&(n("initial"),o.value="initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function X0({state:n,apply:t}){Ln(n,e=>{e&&t(e)},{immediate:!0})}function U0({target:n,variants:t,variant:e}){const o=v(t);o&&(o.visible||o.visibleOnce)&&op(n,([{isIntersecting:r}])=>{o.visible?r?e.value="visible":e.value="initial":o.visibleOnce&&(r&&e.value!=="visibleOnce"?e.value="visibleOnce":e.value||(e.value="initial"))})}function W0(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&Y0(n),t.syncVariants&&X0(n),t.visibilityHooks&&U0(n),t.eventListeners&&z0(n)}function jl(n={}){const t=rn({...n}),e=M({});return Ln(t,()=>{const o={};for(const[r,i]of Object.entries(t)){const s=xi(r),a=Fr(i,s);o[r]=a}e.value=o},{immediate:!0,deep:!0}),{state:t,style:e}}function bi(n,t){Ln(()=>me(n),e=>{e&&t(e)},{immediate:!0})}const G0={x:"translateX",y:"translateY",z:"translateZ"};function El(n={},t=!0){const e=rn({...n}),o=M("");return Ln(e,r=>{let i="",s=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(l=>Fr(l,U)).join(",");i+=`translate3d(${a}) `,s=!0}for(const[a,l]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const c=xi(a),u=Fr(l,c);i+=`${G0[a]||a}(${u}) `}t&&!s&&(i+="translateZ(0px) "),o.value=i.trim()},{immediate:!0,deep:!0}),{state:e,transform:o}}const q0=["","X","Y","Z"],K0=["perspective","translate","scale","rotate","skew"],Al=["transformPerspective","x","y","z"];K0.forEach(n=>{q0.forEach(t=>{const e=n+t;Al.push(e)})});const Z0=new Set(Al);function Mi(n){return Z0.has(n)}const J0=new Set(["originX","originY","originZ"]);function Fl(n){return J0.has(n)}function Q0(n){const t={},e={};return Object.entries(n).forEach(([o,r])=>{Mi(o)||Fl(o)?t[o]=r:e[o]=r}),{transform:t,style:e}}function Pl(n){const{transform:t,style:e}=Q0(n),{transform:o}=El(t),{style:r}=jl(e);return o.value&&(r.value.transform=o.value),r.value}function nm(n,t){let e,o;const{state:r,style:i}=jl();return bi(n,s=>{o=s;for(const a of Object.keys(Sl))s.style[a]===null||s.style[a]===""||Mi(a)||Fl(a)||(r[a]=s.style[a]);e&&Object.entries(e).forEach(([a,l])=>s.style[a]=l),t&&t(r)}),Ln(i,s=>{if(!o){e=s;return}for(const a in s)o.style[a]=s[a]},{immediate:!0}),{style:r}}function tm(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const e=o=>o.endsWith("px")||o.endsWith("deg")?Number.parseFloat(o):Number.isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[i,s]=r.split("("),l=s.split(",").map(u=>e(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...o,[i]:c}},{})}function em(n,t){Object.entries(tm(t)).forEach(([e,o])=>{const r=["x","y","z"];if(e==="translate3d"){if(o===0){r.forEach(i=>n[i]=0);return}o.forEach((i,s)=>n[r[s]]=i);return}if(o=Number.parseFloat(`${o}`),e==="translateX"){n.x=o;return}if(e==="translateY"){n.y=o;return}if(e==="translateZ"){n.z=o;return}n[e]=o})}function om(n,t){let e,o;const{state:r,transform:i}=El();return bi(n,s=>{o=s,s.style.transform&&em(r,s.style.transform),e&&(s.style.transform=e),t&&t(r)}),Ln(i,s=>{if(!o){e=s;return}o.style.transform=s},{immediate:!0}),{transform:r}}function rm(n){return Object.entries(n)}function im(n,t){const e=rn({}),o=s=>Object.entries(s).forEach(([a,l])=>e[a]=l),{style:r}=nm(n,o),{transform:i}=om(n,o);return Ln(e,s=>{rm(s).forEach(([a,l])=>{const c=Mi(a)?i:r;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),bi(n,()=>t),{motionProperties:e,style:r,transform:i}}function sm(n={}){const t=v(n),e=M();return{state:Dn(()=>{if(e.value)return t[e.value]}),variant:e}}function B(n,t={},e){const{motionProperties:o}=im(n),{variant:r,state:i}=sm(t),s=N0(o,t),a={target:n,variant:r,variants:t,state:i,motionProperties:o,...s};return W0(a,e),a}const am={initial:{opacity:0},enter:{opacity:1}},lm={initial:{opacity:0},visible:{opacity:1}},cm={initial:{opacity:0},visibleOnce:{opacity:1}},um={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},dm={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},fm={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},pm={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},mm={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},hm={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},gm={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},vm={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},ym={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},wm={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xm={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_m={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},bm={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Mm={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},km={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Cm={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Im={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Lm={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Hm={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Tm={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Om={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},$m={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Sm={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},jm={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Em={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Am={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Fm={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},se={__proto__:null,fade:am,fadeVisible:lm,fadeVisibleOnce:cm,pop:um,popVisible:dm,popVisibleOnce:fm,rollBottom:bm,rollLeft:pm,rollRight:gm,rollTop:wm,rollVisibleBottom:Mm,rollVisibleLeft:mm,rollVisibleOnceBottom:km,rollVisibleOnceLeft:hm,rollVisibleOnceRight:ym,rollVisibleOnceTop:_m,rollVisibleRight:vm,rollVisibleTop:xm,slideBottom:Em,slideLeft:Cm,slideRight:Hm,slideTop:$m,slideVisibleBottom:Am,slideVisibleLeft:Im,slideVisibleOnceBottom:Fm,slideVisibleOnceLeft:Lm,slideVisibleOnceRight:Om,slideVisibleOnceTop:jm,slideVisibleRight:Tm,slideVisibleTop:Sm},Pm=Symbol(import.meta.dev?"motionCustomPresets":""),Rm={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Nm(n){return Object.prototype.toString.call(n)==="[object Object]"}function Pr(n){if(Array.isArray(n))return n.map(Pr);if(Nm(n)){const t={};for(const e in n)t[e]=Pr(n[e]);return t}return n}function Bm(n){const t=rn({}),e=fe(Pm,{}),o=Dn(()=>n.preset==null?{}:e!=null&&n.preset in e?structuredClone(nn(e)[n.preset]):n.preset in se?structuredClone(se[n.preset]):{}),r=Dn(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused}));function i(l,c){for(const u of["delay","duration"]){if(c[u]==null)continue;const d=Number.parseInt(c[u]);for(const f of["enter","visible","visibleOnce"]){const m=l[f];m!=null&&(m.transition??(m.transition={}),m.transition[u]=d)}}return l}const s=Dn(()=>{const l=qf({},r.value,o.value,n.variants||{});return i({...l},n)});if(import.meta.dev){n.preset!=null&&(se==null?void 0:se[n.preset])==null&&(e==null?void 0:e[n.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${n.preset}\` not found.`);const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),Lo(()=>{var d,f,m;(d=c.variants)!=null&&d.enter&&c.apply("enter"),(f=c.variants)!=null&&f.visible&&c.apply("visible"),(m=c.variants)!=null&&m.visibleOnce&&c.apply("visibleOnce")})};ya(()=>{for(const c in t)l(t[c])})}function a(l,c,u){var d;l.props??(l.props={}),(d=l.props).style??(d.style={}),l.props.style={...l.props.style,...u};const f=i(Pr(s.value),l.props);return l.props.onVnodeMounted=({el:m})=>{t[c]=B(m,f)},l.props.onVnodeUpdated=({el:m})=>{const g=Pl(t[c].state);for(const[k,j]of Object.entries(g))m.style[k]=j},l}return{motionConfig:s,setNodeInstance:a}}const E=ne({name:"Motion",props:{...Rm,is:{type:[String,Object],default:"div"}},setup(n){const t=vu(),{motionConfig:e,setNodeInstance:o}=Bm(n);return()=>{const r=Pl(e.value.initial||{}),i=$e(n.is,void 0,t);return o(i,0,r),i}}}),Dm={name:"SearchIcon"},Vm=Object.assign(Dm,{setup(n){const t=M(),e={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{type:"spring",duration:1e3,bounce:.3}}},o=B(t,{initial:e.normal,enter:e.normal});function r(){o.apply(e.animate)}function i(){o.apply(e.normal)}return(s,a)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center overflow-hidden",onMouseenter:r,onMouseleave:i,role:"button",tabindex:"0"},[b(v(E),{ref_key:"target",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>a[0]||(a[0]=[w("circle",{cx:"11",cy:"11",r:"8"},null,-1),w("path",{d:"m21 21-4.3-4.3"},null,-1)])),_:1},512)],32))}}),zm={name:"CartIcon"},Ym=Object.assign(zm,{setup(n){const t=M(),e=M(),o=B(t,{initial:{scale:1},enter:{scale:1,y:[0,0,0]}}),r=B(e,{initial:{y:0},enter:{y:0}}),i={normal:{y:0},animate:{y:-1.1,transition:{type:"spring",stiffness:500,damping:30}}},s={normal:{scale:1},animate:{scale:1.1,transition:{duration:200}},hover:{y:[0,-5,0],transition:{duration:300,ease:"easeInOut"}},repeat:{y:[0,-5,0],transition:{duration:400,delay:100,ease:"easeInOut"}}};function a(){o.apply(s.animate),o.apply(s.hover).then(()=>{o.apply(s.repeat)}),r.apply(i.animate)}function l(){o.apply(s.normal),r.apply(i.normal)}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[b(v(E),{ref_key:"targetSvg",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>[b(v(E),{ref_key:"targetPath",ref:e,is:"path",d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"},null,512)]),_:1},512)],32))}}),Xm={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Um={name:"LayersIcon"},Wm=Object.assign(Um,{setup(n){const t={type:"spring",stiffness:100,damping:14,mass:1},e={normal:{y:0,transition:t},animate:{y:-9,transition:t}},o={normal:{y:0,transition:t},animate:{y:-5,transition:t}},r=M(),i=B(r,{initial:e.normal,enter:e.normal}),s=M(),a=B(s,{initial:o.normal,enter:o.normal});function l(){i.apply(e.animate).then(()=>i.apply(e.normal)),a.apply(o.animate).then(()=>a.apply(o.normal))}function c(){i.apply(e.normal),a.apply(o.normal)}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",Xm,[d[0]||(d[0]=w("path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"},null,-1)),b(v(E),{is:"path",ref_key:"pathOneTarget",ref:r,d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"},null,512),b(v(E),{is:"path",ref_key:"pathTwoTarget",ref:s,d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"},null,512)]))],32))}}),Gm={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},qm={name:"GripIcon"},Km=Object.assign(qm,{setup(n){const t=[{cx:19,cy:5},{cx:12,cy:5},{cx:19,cy:12},{cx:5,cy:5},{cx:12,cy:12},{cx:19,cy:19},{cx:5,cy:12},{cx:12,cy:19},{cx:5,cy:19}],e=t.length,o=M(new Array(e).fill(0).map(()=>M())),r=rn([]);for(let u=0;u<e;u++)r[u]=B(o.value[u],{initial:{opacity:1},enter:{opacity:1}});$n(()=>{for(let u=0;u<e;u++)r[u].target=o.value[u]});const i=u=>({transition:{delay:u*100,duration:200}}),s=u=>{for(let d=0;d<e;d++)r[d].apply({opacity:u,...i(d)})},a=async(u=!0)=>{if(!u){s(1);return}for(let d=0;d<e;d++){const f=r[d];d<e-1?f.apply({opacity:.3,...i(d)}):(await f.apply({opacity:.3,...i(d)}),s(1))}};function l(){a(!0)}function c(){a(!1)}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",Gm,[(y(),_(mn,null,pt(t,(f,m)=>b(v(E),{is:"circle",key:`${f.cx}_${f.cy}`,ref_for:!0,ref:g=>v(o)[m]=g,cx:f.cx,cy:f.cy,r:"1"},null,8,["cx","cy"])),64))]))],32))}}),Zm={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Jm={name:"FrameIcon"},Qm=Object.assign(Jm,{setup(n){const t=[{x1:22,x2:2,y1:6,y2:6},{x1:22,x2:2,y1:18,y2:18},{x1:6,x2:6,y1:2,y2:22},{x1:18,x2:18,y1:2,y2:22}],e={type:"spring",stiffness:160,damping:17,mass:1},o={normal:{translateX:0,rotate:0,translateY:0},animate:[{translateY:-4},{translateY:4},{translateX:-4},{translateX:4}]},r=t.length,i=M(new Array(r).fill(0).map(()=>M())),s=rn([]);for(let u=0;u<r;u++)s[u]=B(i.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)s[u].target=i.value[u]});const a=u=>{for(let d=0;d<r;d++){const f=u==="animate"?o.animate[d]:o.normal;s[d].apply({...f,transition:e})}};function l(){a("animate")}function c(){a("normal")}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",Zm,[(y(),_(mn,null,pt(t,(f,m)=>b(v(E),{is:"line",key:`${f.x1}_${f.x2}_${f.y1}_${f.y2}`,ref_for:!0,ref:g=>v(i)[m]=g,stroke:"currentColor",x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2},null,8,["x1","y1","x2","y2"])),64))]))],32))}}),nh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},th={name:"SunIcon"},eh=Object.assign(th,{setup(n){const t=["M12 2v2","m19.07 4.93-1.41 1.41","M20 12h2","m17.66 17.66 1.41 1.41","M12 20v2","m6.34 17.66-1.41 1.41","M2 12h2","m4.93 4.93 1.41 1.41"],e={normal:{opacity:1},animate:c=>({opacity:[0,1],transition:{delay:c*100,duration:300}})},o=t.length,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});$n(()=>{for(let c=0;c<o;c++)i[c].target=r.value[c]});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e.animate(u):e.normal;i[u].apply({transition:{duration:300},...d})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",nh,[u[0]||(u[0]=w("circle",{cx:"12",cy:"12",r:"4"},null,-1)),(y(),_(mn,null,pt(t,(d,f)=>b(v(E),{is:"path",key:d,ref_for:!0,ref:m=>v(r)[f]=m,d},null,8,["d"])),64))]))],32))}}),oh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},rh={name:"DeleteIcon"},ih=Object.assign(rh,{setup(n){const t={g:{normal:{y:0},animate:{y:-1.1}},path:{normal:{y:0},animate:{y:1}},g2:{normal:{y:0},animate:{y:.5}}},e={transition:{type:"spring",stiffness:500,damping:30}},o=M(),r=B(o,{initial:t.g.normal,enter:t.g.normal}),i=M(),s=B(i,{initial:t.g2.normal,enter:t.g2.normal}),a=M(),l=B(a,{initial:t.path.normal,enter:t.path.normal}),c={g:r,g2:s,path:l},u=m=>{Object.keys(c).forEach(g=>{const k=t[g][m];c[g].apply({...k,...e})})};function d(){u("animate")}function f(){u("normal")}return(m,g)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:d,onMouseleave:f,role:"button",tabindex:"0"},[(y(),_("svg",oh,[b(v(E),{is:"g",ref_key:"targetG",ref:o},{default:on(()=>g[0]||(g[0]=[w("path",{d:"M3 6h18"},null,-1),w("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},null,-1)])),_:1},512),b(v(E),{is:"path",ref_key:"targetPath",ref:a,d:"M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"},null,512),b(v(E),{is:"g",ref_key:"targetG2",ref:i},{default:on(()=>g[1]||(g[1]=[w("line",{x1:"10",x2:"10",y1:"11",y2:"17"},null,-1),w("line",{x1:"14",x2:"14",y1:"11",y2:"17"},null,-1)])),_:1},512)]))],32))}}),sh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ah={name:"FileStackIcon"},lh=Object.assign(ah,{setup(n){const t={normal:{translateX:0,translateY:0},animate:[{translateX:-4,translateY:4},{translateX:-4,translateY:4},{translateX:4,translateY:-4}]},e=["M21 7h-3a2 2 0 0 1-2-2V2","M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z","M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"],o=e.length,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:t.normal,enter:t.normal});$n(()=>{for(let c=0;c<o;c++)i[c].target=r.value[c]});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?t.animate[u]:t.normal;i[u].apply({transition:{delay:0,duration:300},...d})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",sh,[(y(),_(mn,null,pt(e,(d,f)=>b(v(E),{is:"path",key:d,ref_for:!0,ref:m=>v(r)[f]=m,d},null,8,["d"])),64)),u[0]||(u[0]=w("path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"},null,-1))]))],32))}}),ch={name:"SettingGearIcon"},uh=Object.assign(ch,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},o=M(),r=B(o,{initial:t.normal,enter:t.normal}),i=l=>{const c=t[l];r.apply({...c,...e})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"},null,-1),w("circle",{cx:"12",cy:"12",r:"3"},null,-1)])),_:1},512)],32))}}),dh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},fh={name:"CalendarCogIcon"},ph=Object.assign(fh,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},o=M(),r=B(o,{initial:t.normal,enter:t.normal}),i=l=>{const c=t[l];r.apply({...c,...e})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",dh,[c[1]||(c[1]=w("path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"},null,-1)),c[2]||(c[2]=w("path",{d:"M16 2v4"},null,-1)),c[3]||(c[3]=w("path",{d:"M3 10h18"},null,-1)),c[4]||(c[4]=w("path",{d:"M8 2v4"},null,-1)),b(v(E),{is:"g",ref_key:"target",ref:o,"transform-origin":"18 18"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"m15.2 16.9-.9-.4"},null,-1),w("path",{d:"m15.2 19.1-.9.4"},null,-1),w("path",{d:"m16.9 15.2-.4-.9"},null,-1),w("path",{d:"m16.9 20.8-.4.9"},null,-1),w("path",{d:"m19.5 14.3-.4.9"},null,-1),w("path",{d:"m19.5 21.7-.4-.9"},null,-1),w("path",{d:"m21.7 16.5-.9.4"},null,-1),w("path",{d:"m21.7 19.5-.9-.4"},null,-1),w("circle",{cx:"18",cy:"18",r:"3"},null,-1)])),_:1},512)]))],32))}}),mh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},hh={name:"MenuIcon"},gh=Object.assign(hh,{setup(n){const t=[{x1:4,y1:6,x2:20,y2:6},{x1:4,y1:12,x2:20,y2:12},{x1:4,y1:18,x2:20,y2:18}],e={type:"spring",stiffness:260,damping:20},o={normal:{rotate:0,y:0,opacity:1},animate:u=>({rotate:u===0?45:u===2?-45:0,y:u===0?6:u===2?-6:0,opacity:u===1?0:1,transition:e}),transformOrigin:["12 6","0 0","12 18"]},r=t.length,i=M(new Array(r).fill(0).map(()=>M())),s=rn([]);for(let u=0;u<r;u++)s[u]=B(i.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)s[u].target=i.value[u]});const a=u=>{for(let d=0;d<r;d++){const f=u==="animate"?o.animate(d):o.normal;s[d].apply({transition:e,...f})}};function l(){a("animate")}function c(){a("normal")}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",mh,[(y(),_(mn,null,pt(t,(f,m)=>b(v(E),{is:"line",key:`${f.x1}_${f.x2}_${f.y1}_${f.y2}`,ref_for:!0,ref:g=>v(i)[m]=g,stroke:"currentColor",x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,"transform-origin":o.transformOrigin[m]},null,8,["x1","y1","x2","y2","transform-origin"])),64))]))],32))}}),vh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},yh={name:"CopyIcon"},wh=Object.assign(yh,{setup(n){const t={rect:{normal:{translateY:0,translateX:0},animate:{translateY:-3,translateX:-3}},path:{normal:{x:0,y:0},animate:{x:3,y:3}}},e={type:"spring",stiffness:160,damping:17,mass:1},o=M(),r=B(o,{initial:t.rect.normal,enter:t.rect.normal}),i=M(),s=B(i,{initial:t.path.normal,enter:t.path.normal}),a={rect:r,path:s},l=d=>{Object.keys(a).forEach(f=>{const m=t[f][d];a[f].apply({...m,...e})})};function c(){l("animate")}function u(){l("normal")}return(d,f)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u,role:"button",tabindex:"0"},[(y(),_("svg",vh,[b(v(E),{is:"rect",ref_key:"targetRect",ref:o,width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},null,512),b(v(E),{is:"path",ref_key:"targetPath",ref:i,d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},null,512)]))],32))}}),xh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_h={name:"AudioLinesIcon"},bh=Object.assign(_h,{setup(n){const t=["M6 6v11","M10 3v18","M14 8v7","M18 5v13"],e=[1500,1e3,800,1500],o=[[1.5,.5,1.5,1],[1.3,.2,1.2,1],[1.2,.1,1.2,1],[1.2,.1,1.2,1]],r={normal:{scaleY:1},animate:d=>({scaleY:o[d],transition:{duration:e[d],repeat:1/0,repeatType:"reverse",ease:"linear"}})},i=t.length,s=M(new Array(i).fill(0).map(()=>M())),a=rn([]);for(let d=0;d<i;d++)a[d]=B(s.value[d],{initial:r.normal,enter:r.normal});$n(()=>{for(let d=0;d<i;d++)a[d].target=s.value[d]});const l=d=>{for(let f=0;f<i;f++){const m=d==="animate"?r.animate(f):r.normal;a[f].apply({...m})}};function c(){l("animate")}function u(){l("normal")}return(d,f)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u,role:"button",tabindex:"0"},[(y(),_("svg",xh,[f[0]||(f[0]=w("path",{d:"M2 10v3"},null,-1)),(y(),_(mn,null,pt(t,(m,g)=>b(v(E),{is:"path",key:m,ref_for:!0,ref:k=>v(s)[g]=k,d:m,"transform-origin":"0 12"},null,8,["d"])),64)),f[1]||(f[1]=w("path",{d:"M22 10v3"},null,-1))]))],32))}}),Mh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},kh={name:"ArchiveIcon"},Ch=Object.assign(kh,{setup(n){const t={rect:{normal:{y:0},animate:{y:-1.5}},path:{normal:{y:0},animate:{y:2}},path2:{normal:{y:0},animate:{y:1.25}}},e={transition:{type:"spring",stiffness:200,damping:25}},o=M(),r=B(o,{initial:t.rect.normal,enter:t.rect.normal}),i=M(),s=B(i,{initial:t.path.normal,enter:t.path.normal}),a=M(),l=B(a,{initial:t.path2.normal,enter:t.path2.normal}),c={rect:r,path:s,path2:l},u=m=>{Object.keys(c).forEach(k=>{const j=t[k][m];c[k].apply({...j,...e})})};function d(){u("animate")}function f(){u("normal")}return(m,g)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:d,onMouseleave:f,role:"button",tabindex:"0"},[(y(),_("svg",Mh,[b(v(E),{is:"rect",ref_key:"targetRect",ref:o,width:"20",height:"5",x:"2",y:"3",rx:"1"},null,512),b(v(E),{is:"path",ref_key:"targetPath",ref:i,d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},null,512),b(v(E),{is:"path",ref_key:"targetPath2",ref:a,d:"M10 12h4"},null,512)]))],32))}}),Ih={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Lh={name:"LogoutIcon"},Hh=Object.assign(Lh,{setup(n){const t={transition:{duration:400}},e={normal:{x:0,translateX:0},animate:{x:2,translateX:[0,-3,0]}},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e.animate:e.normal;i[u].apply({...t,...d})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",Ih,[u[0]||(u[0]=w("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},null,-1)),b(v(E),{is:"polyline",ref:v(r)[0],points:"16 17 21 12 16 7"},null,512),b(v(E),{is:"line",ref:v(r)[1],x1:"21",x2:"9",y1:"12",y2:"12"},null,512)]))],32))}}),Th={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Oh={name:"CircleHelpIcon"},$h=Object.assign(Oh,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]},transformOrigin:"12 12"},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...t,...c})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Th,[c[1]||(c[1]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"g",ref_key:"target",ref:o,"transform-origin":e.transformOrigin},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},null,-1),w("path",{d:"M12 17h.01"},null,-1)])),_:1},8,["transform-origin"])]))],32))}}),Sh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},jh={name:"SquareStackIcon"},Eh=Object.assign(jh,{setup(n){const t={normal:{scale:1},animate:[{scale:[1,.9,1],transition:{delay:300,duration:400}},{scale:[1,.9,1],transition:{delay:200,duration:200}},{scale:[1,.8,1],transition:{duration:400}}],transformOrigin:["6 6","12 12","18 18"]},e=3,o=M(new Array(e).fill(0).map(()=>M())),r=rn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal,enter:t.normal});const i=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal;r[c].apply({...u})}};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Sh,[b(v(E),{is:"path",ref:v(o)[0],"transform-origin":t.transformOrigin[0],d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),b(v(E),{is:"path",ref:v(o)[1],"transform-origin":t.transformOrigin[1],d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),b(v(E),{is:"rect",ref:v(o)[2],"transform-origin":t.transformOrigin[2],width:"8",height:"8",x:"14",y:"14",rx:"2"},null,8,["transform-origin"])]))],32))}}),Ah={name:"MessageCircleIcon"},Fh=Object.assign(Ah,{setup(n){const t={normal:{scale:1,rotate:0},animate:{scale:1.05,rotate:[0,-7,7,0],transition:{rotate:{duration:500,ease:"easeInOut"},scale:{type:"spring",stiffness:400,damping:10}}}},e=M(),o=B(e,{initial:t.normal,enter:t.animate}),r=a=>{const l=t[a];o.apply(l)};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:e,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>l[0]||(l[0]=[w("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)])),_:1},512)],32))}}),Ph={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Rh={name:"MessageCircleMoreIcon"},Nh=Object.assign(Rh,{setup(n){const t={normal:{opacity:1},animate:l=>({opacity:[1,0,0,1,1,0,0,1],transition:{opacity:{repeat:[0,.1,.1+l*.1,.1+l*.1+.1,.5,.6,.6+l*.1,.6+l*.1+.1].map(c=>c*1e3),delay:l*200,duration:1500}}})},e=3,o=M(new Array(e).fill(0).map(()=>M())),r=rn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal,enter:t.normal});$n(()=>{for(let l=0;l<e;l++)r[l].target=o.value[l]});const i=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate(c):t.normal;r[c].apply(u)}};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Ph,[c[0]||(c[0]=w("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)),b(v(E),{is:"path",ref:v(o)[0],d:"M8 12h.01"},null,512),b(v(E),{is:"path",ref:v(o)[1],d:"M12 12h.01"},null,512),b(v(E),{is:"path",ref:v(o)[2],d:"M16 12h.01"},null,512)]))],32))}}),Bh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Dh={name:"ArrowLeftIcon"},Vh=Object.assign(Dh,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"19 12"},e=2,o=M(new Array(e).fill(0).map(()=>M())),r=rn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal[l],enter:t.normal[l]});const i=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];r[c].apply({...u})}};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Bh,[b(v(E),{is:"path",ref:v(o)[0],d:"m12 19-7-7 7-7"},null,512),b(v(E),{is:"path",ref:v(o)[1],d:"M19 12H5","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),zh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Yh={name:"ArrowRightIcon"},Xh=Object.assign(Yh,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,-3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"5 12"},e=2,o=M(new Array(e).fill(0).map(()=>M())),r=rn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal[l],enter:t.normal[l]});const i=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];r[c].apply({...u})}};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",zh,[b(v(E),{is:"path",ref:v(o)[0],d:"m12 5 7 7-7 7"},null,512),b(v(E),{is:"path",ref:v(o)[1],d:"M5 12h14","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),Uh={name:"RefreshIcon"},Wh=Object.assign(Uh,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{rotate:0},animate:{rotate:-50}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),w("path",{d:"M3 3v5h5"},null,-1),w("path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"},null,-1),w("path",{d:"M16 16h5v5"},null,-1)])),_:1},512)],32))}}),Gh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},qh={name:"DownloadIcon"},Kh=Object.assign(qh,{setup(n){const t={normal:{y:0},animate:{y:2,transition:{type:"spring",stiffness:200,damping:10,mass:1}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[(y(),_("svg",Gh,[l[1]||(l[1]=w("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1)),b(v(E),{is:"g",ref_key:"target",ref:e},{default:on(()=>l[0]||(l[0]=[w("polyline",{points:"7 10 12 15 17 10"},null,-1),w("line",{x1:"12",x2:"12",y1:"15",y2:"3"},null,-1)])),_:1},512)]))],32))}}),Zh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Jh={name:"SquarePenIcon"},Qh=Object.assign(Jh,{setup(n){const t={transition:{duration:500,repeat:1,ease:"easeInOut"}},e={normal:{rotate:0,x:0,y:0},animate:{rotate:[-.5,.5,-.5],x:[0,-1,1.5,0],y:[0,1.5,-1,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Zh,[c[0]||(c[0]=w("path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},null,-1)),b(v(E),{is:"path",ref_key:"target",ref:o,d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"},null,512)]))],32))}}),n1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t1={name:"CursorClickIcon"},e1=Object.assign(t1,{setup(n){const t=[{d:"M14 4.1 12 6",x:1,y:-1},{d:"m5.1 8-2.9-.8",x:-1,y:0},{d:"m6 12-1.9 2",x:-1,y:1},{d:"M7.2 2.2 8 5.1",x:0,y:-1}],e={normal:{opacity:1,x:0,y:0},animate:({x:f,y:m})=>({opacity:[0,1,0,0,0,0,1],x:[0,f,0,0],y:[0,m,0,0],transition:{delay:1300,duration:800,type:"spring",stiffness:70,damping:10,mass:.4}})},o={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{duration:1e3,bounce:.3}}},r=t.length,i=M(),s=B(i,{initial:o.normal,enter:o.normal}),a=M(new Array(r).fill(0).map(()=>M())),l=rn([]);for(let f=0;f<r;f++)l[f]=B(a.value[f],{initial:e.normal,enter:e.normal});$n(()=>{for(let f=0;f<r;f++)l[f].target=a.value[f]});const c=f=>{const m=o[f];s.apply(m);for(let g=0;g<r;g++){const{x:k,y:j}=t[g],C=f==="animate"?e.animate({x:k,y:j}):e.normal;l[g].apply(C)}};function u(){c("animate")}function d(){c("normal")}return(f,m)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:u,onMouseleave:d,role:"button",tabindex:"0"},[(y(),_("svg",n1,[b(v(E),{is:"path",ref_key:"targetCursor",ref:i,d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"},null,512),(y(),_(mn,null,pt(t,(g,k)=>b(v(E),{is:"path",key:g.d,ref_for:!0,ref:j=>v(a)[k]=j,d:g.d},null,8,["d"])),64))]))],32))}}),o1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r1={name:"ClockIcon"},i1=Object.assign(r1,{setup(n){const t={normal:{rotate:0},animate:{minute:{rotate:45,transition:{duration:500,ease:"easeInOut"}},hour:{rotate:360,transition:{duration:600,ease:[.4,0,.2,1]}}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=M(),i=B(r,{initial:t.normal,enter:t.normal}),s=c=>{let u=c==="animate"?t[c].hour:t[c];o.apply({...u,transition:{duration:600,...u.transition}}),u=c==="animate"?t[c].minute:t[c],i.apply({...u,transition:{duration:500,...u.transition}})};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",o1,[u[0]||(u[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"line",ref_key:"targetHour",ref:e,x1:"12",y1:"12",x2:"12",y2:"6","transform-origin":"center center"},null,512),b(v(E),{is:"line",ref_key:"targetMinute",ref:r,x1:"12",y1:"12",x2:"16",y2:"12","transform-origin":"center center"},null,512)]))],32))}}),s1={name:"BadgeAlertIcon"},a1=Object.assign(s1,{setup(n){const t={duration:500,ease:"easeInOut"},e={normal:{scale:1,rotate:0},animate:{scale:[1,1.1,1.1,1.1,1],rotate:[0,-3,3,-2,2,0],transition:{times:[0,.2,.4,.6,1]}}},o=M(),r=B(o,{initial:e.normal,enter:e.animate}),i=l=>{const c=e[l];r.apply({...c,transition:{...t,...c.transition}})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,-1),w("line",{x1:"12",x2:"12",y1:"8",y2:"12"},null,-1),w("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"},null,-1)])),_:1},512)],32))}}),l1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c1={name:"BadgePercentIcon"},u1=Object.assign(c1,{setup(n){const t={normal:{rotate:0,transition:{type:"spring",stiffness:60,damping:10,duration:500}},animate:{rotate:180,transition:{delay:100,type:"spring",stiffness:80,damping:13}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[(y(),_("svg",l1,[b(v(E),{is:"path",ref_key:"target",ref:e,"transform-origin":"12 12",d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,512),l[0]||(l[0]=w("path",{d:"m15 9-6 6"},null,-1)),l[1]||(l[1]=w("path",{d:"M9 9h.01"},null,-1)),l[2]||(l[2]=w("path",{d:"M15 15h.01"},null,-1))]))],32))}}),d1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},f1={name:"ChartPieIcon"},p1=Object.assign(f1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:15,bounce:.6}},e={normal:{translateX:0,translateY:0},animate:{translateX:1.1,translateY:-1.1}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",d1,[b(v(E),{is:"path",ref_key:"target",ref:o,d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"},null,512),c[0]||(c[0]=w("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},null,-1))]))],32))}}),m1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h1={name:"CompassIcon"},g1=Object.assign(h1,{setup(n){const t={transition:{type:"spring",stiffness:120,damping:15}},e={normal:{rotate:0},animate:{rotate:360}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",m1,[c[0]||(c[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"polygon",ref_key:"target",ref:o,points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76","transform-origin":"center center"},null,512)]))],32))}}),v1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y1={name:"TimerIcon"},w1=Object.assign(y1,{setup(n){const t={timer:{duration:600,ease:[.4,0,.2,1]},button:{duration:300,ease:[.4,0,.2,1]}},e={timer:{normal:{rotate:0},animate:{rotate:315,transition:{deley:100}}},button:{normal:{scale:1,y:0},animate:{scale:[.9,1],y:[0,1,0]}}},o=M(),r=B(o,{initial:e.timer.normal,enter:e.timer.normal}),i=M(),s=B(i,{initial:e.button.normal,enter:e.button.normal}),a=u=>{let d=e.timer[u];r.apply({...d,transition:{...d==null?void 0:d.transition,...t.timer}}),d=e.button[u],s.apply({...d,transition:{...d==null?void 0:d.transition,...t.button}})};function l(){a("animate")}function c(){a("normal")}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",v1,[b(v(E),{is:"line",ref_key:"targetButton",ref:i,x1:"10",x2:"14",y1:"2",y2:"2","transform-origin":"12 2"},null,512),b(v(E),{is:"line",ref_key:"targetTimer",ref:o,x1:"12",x2:"15",y1:"14",y2:"11","transform-origin":"12 14"},null,512),d[0]||(d[0]=w("circle",{cx:"12",cy:"14",r:"8"},null,-1))]))],32))}}),x1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_1={name:"ExpandIcon"},b1=Object.assign(_1,{setup(n){const t=["m21 21-6-6m6 6v-4.8m0 4.8h-4.8","M3 16.2V21m0 0h4.8M3 21l6-6","M21 7.8V3m0 0h-4.8M21 3l-6 6","M3 7.8V3m0 0h4.8M3 3l6 6"],e={transition:{duration:100,type:"spring",stiffness:250,damping:25}},o={normal:{translateX:"0px",translateY:"0px"},animate:[{translateX:"2px",translateY:"2px"},{translateX:"-2px",translateY:"2px"},{translateX:"2px",translateY:"-2px"},{translateX:"-2px",translateY:"-2px"}]},r=t.length,i=M(new Array(r).fill(0).map(()=>M())),s=rn([]);for(let u=0;u<r;u++)s[u]=B(i.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)s[u].target=i.value[u]});const a=u=>{for(let d=0;d<r;d++){const f=u==="animate"?o.animate[d]:o.normal;s[d].apply({...f,...e})}};function l(){a("animate")}function c(){a("normal")}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c,role:"button",tabindex:"0"},[(y(),_("svg",x1,[(y(),_(mn,null,pt(t,(f,m)=>b(v(E),{is:"path",key:f,ref_for:!0,ref:g=>v(i)[m]=g,d:f},null,8,["d"])),64))]))],32))}}),M1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},k1={name:"GaugeIcon"},C1=Object.assign(k1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{translateX:0,rotate:0,translateY:0},animate:{translateX:.5,translateY:.5,rotate:72},transformOrigin:"12 14"},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",M1,[b(v(E),{is:"path",ref_key:"target",ref:o,d:"m12 14 4-4","transform-origin":e.transformOrigin},null,8,["transform-origin"]),c[0]||(c[0]=w("path",{d:"M3.34 19a10 10 0 1 1 17.32 0"},null,-1))]))],32))}}),I1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},L1={name:"BoneIcon"},H1=Object.assign(L1,{setup(n){const t={normal:{rotate:0},animate:{rotate:[0,-8,8,-6,0],transition:{ease:"circIn",rotate:{duration:500}}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply({...l})};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[(y(),_("svg",I1,[b(v(E),{is:"path",ref_key:"target",ref:e,d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z","transform-origin":"center center"},null,512)]))],32))}}),T1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},O1={name:"AlignCenterIcon"},$1=Object.assign(O1,{setup(n){const t={normal:{translateX:0},animate:{translateX:[0,3,-3,2,-2,0],transition:{ease:"linear",translateX:{duration:1e3}}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[(y(),_("svg",T1,[b(v(E),{is:"path",ref_key:"target",ref:e,d:"M17 12H7"},null,512),l[0]||(l[0]=w("path",{d:"M19 18H5"},null,-1)),l[1]||(l[1]=w("path",{d:"M21 6H3"},null,-1))]))],32))}}),S1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},j1={name:"AlignHorizontalIcon"},E1=Object.assign(j1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={rect:{normal:{scaleX:1},animate:{scaleX:.85}},pathLeft:{normal:{translateX:0,scaleY:1},animate:{translateX:2,scaleY:.9}},pathRight:{normal:{translateX:0,scaleY:1},animate:{translateX:-2,scaleY:.9}},transformOrigin:["12 12","4 12","20 12"]},o=["rect","pathLeft","pathRight"],r=M(new Array(o.length).fill(0).map(()=>M())),i=rn([]);o.forEach((c,u)=>{i[u]=B(r.value[u],{initial:e[c].normal,enter:e[c].normal})}),$n(()=>{o.forEach((c,u)=>{i[u].target=r.value[u]})});const s=c=>{o.forEach((u,d)=>{const f=e[u][c];i[d].apply({...f,...t})})};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",S1,[b(v(E),{is:"rect",ref:v(r)[0],width:"6",height:"10",x:"9",y:"7",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),b(v(E),{is:"path",ref:v(r)[1],d:"M4 22V2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),b(v(E),{is:"path",ref:v(r)[2],d:"M20 22V2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),A1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},F1={name:"AlignVerticalIcon"},P1=Object.assign(F1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{rect:{scaleY:1},pathOne:{translateY:0,scaleX:1},pathTwo:{translateY:0,scaleX:1}},animate:{rect:{scaleY:.85},pathOne:{translateY:-2,scaleX:.9},pathTwo:{translateY:2,scaleX:.9}},transformOrigin:["12 12","12 20","12 4"]},o=["rect","pathOne","pathTwo"],r=M(new Array(o.length).fill(0).map(()=>M())),i=rn([]);o.forEach((c,u)=>{i[u]=B(r.value[u],{initial:e.normal[c],enter:e.normal[c]})}),$n(()=>{o.forEach((c,u)=>{i[u].target=r.value[u]})});const s=c=>{o.forEach((u,d)=>{const f=e[c][u];i[d].apply({...f,...t})})};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",A1,[b(v(E),{is:"rect",ref:v(r)[0],width:"10",height:"6",x:"7",y:"9",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),b(v(E),{is:"path",ref:v(r)[1],d:"M22 20H2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),b(v(E),{is:"path",ref:v(r)[2],d:"M22 4H2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),R1={name:"BellIcon"},N1=Object.assign(R1,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},null,-1),w("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},null,-1)])),_:1},512)],32))}}),B1={name:"UpvoteIcon"},D1=Object.assign(B1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:-2,rotate:-12}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M7 10v12"},null,-1),w("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"},null,-1)])),_:1},512)],32))}}),V1={name:"DownvoteIcon"},z1=Object.assign(V1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:2,rotate:-12}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M17 14V2"},null,-1),w("path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"},null,-1)])),_:1},512)],32))}}),Y1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},X1={name:"UsersIcon"},U1=Object.assign(X1,{setup(n){const t={normal:{translateX:0,transition:{duration:300,type:"spring",stiffness:200,damping:13}},animate:{translateX:[-6,0],transition:{duration:300,delay:100,type:"spring",stiffness:200,damping:13}}},e=M(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function i(){r("animate")}function s(){r("normal")}return(a,l)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:s,role:"button",tabindex:"0"},[(y(),_("svg",Y1,[l[1]||(l[1]=w("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},null,-1)),l[2]||(l[2]=w("circle",{cx:"9",cy:"7",r:"4"},null,-1)),b(v(E),{is:"g",ref_key:"target",ref:e,"transform-origin":"center center"},{default:on(()=>l[0]||(l[0]=[w("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"},null,-1),w("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"},null,-1)])),_:1},512)]))],32))}}),W1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},G1={name:"HandCoinsIcon"},q1=Object.assign(G1,{setup(n){const t={duration:300,opacity:{duration:200},type:"spring",stiffness:150,damping:15,bounce:.8},e={normal:[{translateY:0,opacity:1},{translateY:0,opacity:1,transition:{delay:150}}],animate:[{opacity:[0,1],translateY:[-20,0]},{opacity:[0,1],translateY:[-20,0],transition:{delay:150}}]},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal[c],enter:e.normal[c]});const s=c=>{for(let u=0;u<o;u++){const d=e[c][u];i[u].apply({...d,transition:{...t,...d.transition}})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",W1,[u[0]||(u[0]=w("path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"},null,-1)),u[1]||(u[1]=w("path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},null,-1)),u[2]||(u[2]=w("path",{d:"m2 16 6 6"},null,-1)),b(v(E),{is:"circle",ref:v(r)[0],cx:"16",cy:"9",r:"2.9"},null,512),b(v(E),{is:"circle",ref:v(r)[1],cx:"6",cy:"5",r:"3"},null,512)]))],32))}}),K1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Z1={name:"CircleChevronUpIcon"},J1=Object.assign(Z1,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{y:0},animate:{y:[0,-2,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",K1,[c[0]||(c[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"path",ref_key:"target",ref:o,d:"m8 14 4-4 4 4"},null,512)]))],32))}}),Q1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n2={name:"CircleChevronDownIcon"},t2=Object.assign(n2,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{y:0},animate:{y:[0,2,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",Q1,[c[0]||(c[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"path",ref_key:"target",ref:o,d:"m16 10-4 4-4-4"},null,512)]))],32))}}),e2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},o2={name:"CircleChevronLeftIcon"},r2=Object.assign(o2,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{x:0},animate:{x:[0,-2,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",e2,[c[0]||(c[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"path",ref_key:"target",ref:o,d:"m14 16-4-4 4-4"},null,512)]))],32))}}),i2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},s2={name:"CircleChevronRightIcon"},a2=Object.assign(s2,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{x:0},animate:{x:[0,2,0]}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[(y(),_("svg",i2,[c[0]||(c[0]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1)),b(v(E),{is:"path",ref_key:"target",ref:o,d:"m10 8 4 4-4 4"},null,512)]))],32))}}),l2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c2={name:"ChevronsUpDownIcon"},u2=Object.assign(c2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateY:0},animate:[{translateY:2},{translateY:-2}]},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e[c][u]:e[c];i[u].apply({...d,...t})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",l2,[b(v(E),{is:"path",ref:v(r)[0],d:"m7 15 5 5 5-5"},null,512),b(v(E),{is:"path",ref:v(r)[1],d:"m7 9 5-5 5 5"},null,512)]))],32))}}),d2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},f2={name:"ChevronsDownUpIcon"},p2=Object.assign(f2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateY:0},animate:[{translateY:-2},{translateY:2}]},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e[c][u]:e[c];i[u].apply({...d,...t})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",d2,[b(v(E),{is:"path",ref:v(r)[0],d:"m7 20 5-5 5 5"},null,512),b(v(E),{is:"path",ref:v(r)[1],d:"m7 4 5 5 5-5"},null,512)]))],32))}}),m2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h2={name:"ChevronsLeftRightIcon"},g2=Object.assign(h2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0},animate:[{translateX:-2},{translateX:2}]},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e[c][u]:e[c];i[u].apply({...d,...t})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",m2,[b(v(E),{is:"path",ref:v(r)[0],d:"m9 7-5 5 5 5"},null,512),b(v(E),{is:"path",ref:v(r)[1],d:"m15 7 5 5-5 5"},null,512)]))],32))}}),v2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y2={name:"ChevronsRightLeftIcon"},w2=Object.assign(y2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0},animate:[{translateX:-2},{translateX:2}]},o=2,r=M(new Array(o).fill(0).map(()=>M())),i=rn([]);for(let c=0;c<o;c++)i[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const s=c=>{for(let u=0;u<o;u++){const d=c==="animate"?e[c][u]:e[c];i[u].apply({...d,...t})}};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",v2,[b(v(E),{is:"path",ref:v(r)[0],d:"m20 17-5-5 5-5"},null,512),b(v(E),{is:"path",ref:v(r)[1],d:"m4 17 5-5-5-5"},null,512)]))],32))}}),x2={name:"CogIcon"},_2=Object.assign(x2,{setup(n){const t={transition:{type:"spring",stiffness:50,damping:10}},e={normal:{rotate:0},animate:{rotate:180}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"},null,-1),w("path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"},null,-1),w("path",{d:"M12 2v2"},null,-1),w("path",{d:"M12 22v-2"},null,-1),w("path",{d:"m17 20.66-1-1.73"},null,-1),w("path",{d:"M11 10.27 7 3.34"},null,-1),w("path",{d:"m20.66 17-1.73-1"},null,-1),w("path",{d:"m3.34 7 1.73 1"},null,-1),w("path",{d:"M14 12h8"},null,-1),w("path",{d:"M2 12h2"},null,-1),w("path",{d:"m20.66 7-1.73 1"},null,-1),w("path",{d:"m3.34 17 1.73-1"},null,-1),w("path",{d:"m17 3.34-1 1.73"},null,-1),w("path",{d:"m11 13.73-4 6.93"},null,-1)])),_:1},512)],32))}}),b2={name:"RabbitIcon"},M2=Object.assign(b2,{setup(n){const e={normal:{rotate:0,x:0,y:0},animate:{rotate:[0,5,-5,3,-3,0],x:[0,3,-3,2,-2,0],y:[0,1.5,-1.5,1,-1,0],transition:{duration:600,ease:[.42,0,.58,1]}}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply(c)};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"},null,-1),w("path",{d:"M13 16a3 3 0 0 1 2.24 5"},null,-1),w("path",{d:"M18 12h.01"},null,-1),w("path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"},null,-1),w("path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"},null,-1)])),_:1},512)],32))}}),k2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},C2={name:"AlarmClockIcon"},I2=Object.assign(C2,{setup(n){const t={normal:{y:0,x:0,transition:{duration:200,type:"spring",stiffness:200,damping:25}},animate:{y:-1.5,x:[-1,1,-1,1,-1,0],transition:{y:{duration:200,type:"spring",stiffness:200,damping:25},x:{duration:300,repeat:1/0,ease:"linear"}}}},e={normal:{y:0,x:0,transition:{duration:200,type:"spring",stiffness:200,damping:25}},animate:{y:-2.5,x:[-2,2,-2,2,-2,0],transition:{y:{duration:200,type:"spring",stiffness:200,damping:25},x:{duration:300,repeat:1/0,ease:"linear"}}}},o=6,r=Array.from({length:o},u=>u<4?t:e),i=M(new Array(o).fill(0).map(()=>M())),s=rn([]);for(let u=0;u<o;u++)s[u]=B(i.value[u],{initial:r[u].normal,enter:r[u].normal});const a=u=>{for(let d=0;d<o;d++){const f=u==="animate"?r[d].animate:r[d].normal;s[d].apply(f)}};function l(){a("animate")}function c(){a("normal")}return(u,d)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),_("svg",k2,[b(v(E),{is:"path",ref:v(i)[0],d:"M18 20.5L19.5 22"},null,512),b(v(E),{is:"path",ref:v(i)[1],d:"M6 20.5L4.5 22"},null,512),b(v(E),{is:"path",ref:v(i)[2],d:"M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"},null,512),b(v(E),{is:"path",ref:v(i)[3],d:"M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"},null,512),b(v(E),{is:"path",ref:v(i)[4],d:"M18 2L21.747 5.31064"},null,512),b(v(E),{is:"path",ref:v(i)[5],d:"M6 2L2.25304 5.31064"},null,512)]))],32))}}),L2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},H2={name:"LoaderPinwheelIcon"},T2=Object.assign(H2,{setup(n){const t={normal:{rotate:0,transitin:{type:"spring",stiffness:50,damping:10}},animate:{rotate:360,transition:{repeat:1/0,repeatType:"loop",duration:1e3,ease:"linear"}}},e="12 12",o=M(),r=B(o,{initial:t.normal,enter:t.normal}),i=l=>{const c=t[l];r.apply(c)};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a},[(y(),_("svg",L2,[b(v(E),{is:"g",ref_key:"target",ref:o,"transform-origin":e},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"},null,-1),w("path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"},null,-1),w("path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"},null,-1)])),_:1},512),c[1]||(c[1]=w("circle",{cx:"12",cy:"12",r:"10"},null,-1))]))],32))}}),O2={name:"SyringeIcon"},$2=Object.assign(O2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-3,translateY:3,rotate:1}},o=M(),r=B(o,{initial:e.normal,enter:e.normal}),i=l=>{const c=e[l];r.apply({...c,...t})};function s(){i("animate")}function a(){i("normal")}return(l,c)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:a,role:"button",tabindex:"0"},[b(v(E),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 512 512",fill:"currentColor",stroke:"currentColor","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},{default:on(()=>c[0]||(c[0]=[w("path",{d:"M450.327,224.582l-46.545-46.545c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l15.127,15.127L205.964,406.109c-4.655,4.655-11.636,4.655-16.291,0l-18.618-18.618c-4.655-4.655-11.636-4.655-16.291,0l-18.618,18.618c-4.655,4.655-11.636,4.655-16.291,0l-13.964-13.964c-2.327-2.327-3.491-4.655-3.491-8.145s1.164-5.818,3.491-8.145l18.618-18.618c4.655-4.655,4.655-11.636,0-16.291l-18.618-18.618c-2.327-2.327-3.491-4.655-3.491-8.145c0-3.491,1.164-5.818,3.491-8.146l169.891-169.891c4.655-4.655,4.655-11.636,0-16.291s-11.636-4.655-16.291,0L89.6,289.745c-6.982,6.982-10.473,15.127-10.473,24.436S82.618,332.8,89.6,338.618l10.473,10.473L89.6,359.564c-6.982,6.982-10.473,15.127-10.473,24.436c0,8.145,3.491,16.291,9.309,23.273L3.491,492.218c-4.655,4.655-4.655,11.636,0,16.291C5.818,510.836,8.145,512,11.636,512s5.818-1.164,8.145-3.491l84.945-84.945c13.964,11.636,34.909,11.636,47.709-1.164l10.473-10.473l10.473,10.473c6.982,6.982,16.291,10.473,24.436,10.473c9.309,0,17.455-3.491,24.436-10.473l196.655-196.655l15.127,15.127c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C454.982,236.218,454.982,229.236,450.327,224.582z"},null,-1),w("path",{d:"M508.509,119.855L392.145,3.491c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l39.564,39.564c2.327,2.327,3.491,6.982,3.491,10.473s-1.164,8.145-4.655,10.473l-53.527,54.691l-73.309-73.309c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l73.309,73.309L244.364,251.345L217.6,224.582c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l69.818,69.818c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491c4.655-4.655,4.655-11.636,0-16.291l-26.764-26.764L431.709,97.745c6.982-5.818,15.127-5.818,22.109,0l38.4,38.4c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C513.164,131.491,513.164,124.509,508.509,119.855z"},null,-1)])),_:1},512)],32))}}),S2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",viewBox:"0 0 512 512","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},j2={name:"FlaskIcon"},E2=Object.assign(j2,{setup(n){const t={g:{normal:{rotate:0,translateY:0},animate:{translateY:-12,rotate:[0,5,-5,3,-3,0],transition:{ease:"linear",rotate:{duration:800}}}},path:{normal:{rotate:0,scale:1},animate:{scale:.9,rotate:[0,6,-6,3,-3,0],transition:{duration:800,scale:{duration:300,type:"spring",bounce:.4,stiffness:150,damping:10}}}}},e=M(),o=B(e,{initial:t.g.normal,enter:t.g.normal}),r=M(),i=B(r,{initial:t.path.normal,enter:t.path.normal}),s=c=>{let u=t.g[c];o.apply(u),u=t.path[c],i.apply(u)};function a(){s("animate")}function l(){s("normal")}return(c,u)=>(y(),_("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l,role:"button",tabindex:"0"},[(y(),_("svg",S2,[b(v(E),{is:"g",ref_key:"targetG",ref:e,"transform-origin":"center center"},{default:on(()=>u[0]||(u[0]=[w("circle",{cx:"151.273",cy:"407.273",r:"11.636"},null,-1),w("circle",{cx:"244.364",cy:"372.364",r:"11.636"},null,-1),w("circle",{cx:"290.909",cy:"418.909",r:"11.636"},null,-1),w("circle",{cx:"221.091",cy:"453.818",r:"11.636"},null,-1),w("circle",{cx:"372.364",cy:"430.545",r:"11.636"},null,-1)])),_:1},512),b(v(E),{is:"path",ref_key:"targetPath",ref:r,"transform-origin":"center center",d:"M456.145,436.364l-79.127-124.509c0-2.327-2.327-4.655-3.491-5.818l-34.909-55.855c-8.146-13.964-12.8-29.091-12.8-44.218 V67.491c13.964-4.655,23.273-17.455,23.273-32.582C349.091,15.127,333.964,0,314.182,0H197.818 c-19.782,0-34.909,15.127-34.909,34.909c0,19.782,15.127,34.909,34.909,34.909h69.818c6.982,0,11.636-4.655,11.636-11.636 s-4.655-11.636-11.636-11.636h-69.818c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h116.364 c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636v147.782 c0,19.782,5.818,39.564,16.291,55.855l19.782,31.418c-30.255-5.818-64-2.327-88.436,10.473 c-23.273,11.636-60.509,13.964-87.273,4.655l30.255-46.545c10.473-16.291,16.291-36.073,16.291-55.855V104.727 c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v101.236c0,15.127-4.655,30.255-12.8,43.055l-34.909,55.855 c-1.164,1.164-2.327,2.327-3.491,3.491c0,1.164,0,1.164-1.164,2.327L55.855,436.364c-5.818,9.309-9.309,19.782-9.309,31.418v9.309 c0,19.782,15.127,34.909,34.909,34.909h349.091c19.782,0,34.909-15.127,34.909-34.909v-9.309 C465.455,456.145,461.964,445.673,456.145,436.364z M443.345,477.091h-1.164c0,6.982-4.655,11.636-11.636,11.636H81.455 c-6.982,0-11.636-4.655-11.636-11.636v-9.309c0-6.982,2.327-12.8,5.818-18.618l75.636-119.855 c15.127,5.818,32.582,8.145,50.036,8.145c22.109,0,43.055-4.655,60.509-12.8c25.6-12.8,68.655-13.964,96.582-1.164l79.127,125.673 c3.491,5.818,5.818,11.636,5.818,18.618V477.091z"},null,512)]))],32))}}),Rl=[{name:"SearchIcon",icon:Vm,raw:Xd,keywords:["find","scan","magnifier","magnifying glass"]},{name:"CartIcon",icon:Ym,raw:Ud,keywords:["trolley","cart","basket","e-commerce","store","purchase","products","items","ingredients"]},{name:"LayersIcon",icon:Wm,raw:Wd,keywords:["stack","pile","pages","sheets","paperwork","copies","copy"]},{name:"GripIcon",icon:Km,raw:Gd,keywords:["grab","dots","handle","move","drag"]},{name:"FrameIcon",icon:Qm,raw:qd,keywords:["logo","design","tool"]},{name:"SunIcon",icon:eh,raw:Kd,keywords:[]},{name:"DeleteIcon",icon:ih,raw:Zd,keywords:[]},{name:"FileStackIcon",icon:lh,raw:Jd,keywords:[]},{name:"SettingGearIcon",icon:uh,raw:Qd,keywords:[]},{name:"CalendarCogIcon",icon:ph,raw:nf,keywords:[]},{name:"MenuIcon",icon:gh,raw:tf,keywords:[]},{name:"CopyIcon",icon:wh,raw:ef,keywords:[]},{name:"AudioLinesIcon",icon:bh,raw:of,keywords:[]},{name:"ArchiveIcon",icon:Ch,raw:rf,keywords:[]},{name:"LogoutIcon",icon:Hh,raw:sf,keywords:[]},{name:"CircleHelpIcon",icon:$h,raw:af,keywords:[]},{name:"SquareStackIcon",icon:Eh,raw:lf,keywords:[]},{name:"MessageCircleIcon",icon:Fh,raw:cf,keywords:[]},{name:"MessageCircleMoreIcon",icon:Nh,raw:uf,keywords:[]},{name:"ArrowLeftIcon",icon:Vh,raw:df,keywords:[]},{name:"ArrowRightIcon",icon:Xh,raw:ff,keywords:[]},{name:"RefreshIcon",icon:Wh,raw:pf,keywords:[]},{name:"DownloadIcon",icon:Kh,raw:mf,keywords:[]},{name:"SquarePenIcon",icon:Qh,raw:hf,keywords:[]},{name:"CursorClickIcon",icon:e1,raw:gf,keywords:[]},{name:"ClockIcon",icon:i1,raw:vf,keywords:[]},{name:"BadgeAlertIcon",icon:a1,raw:yf,keywords:[]},{name:"BadgePercentIcon",icon:u1,raw:wf,keywords:[]},{name:"ChartPieIcon",icon:p1,raw:xf,keywords:[]},{name:"CompassIcon",icon:g1,raw:_f,keywords:["direction","navigation","north","south","east","west","compass"]},{name:"TimerIcon",icon:w1,raw:bf,keywords:["time","watch","alarm","stopwatch","stopwatch"]},{name:"ExpandIcon",icon:b1,raw:Mf,keywords:["scale","fullscreen"]},{name:"GaugeIcon",icon:C1,raw:kf,keywords:["dashboard","dial","meter","speed","pressure","measure","level"]},{name:"BoneIcon",icon:H1,raw:Cf,keywords:["health","skeleton","skull","death","pets","dog"]},{name:"AlignCenterIcon",icon:$1,raw:If,keywords:["text","alignment","center"]},{name:"AlignHorizontalIcon",icon:E1,raw:Lf,keywords:["center","items","flex","justify","distribute","between"]},{name:"AlignVerticalIcon",icon:P1,raw:Hf,keywords:["center","items","flex","justify","distribute","between"]},{name:"BellIcon",icon:N1,raw:Tf,keywords:["alarm","notification","sound","reminder"]},{name:"UpvoteIcon",icon:D1,raw:Of,keywords:["like","good","emotion"]},{name:"DownvoteIcon",icon:z1,raw:$f,keywords:["dislike","bad","emotion"]},{name:"UsersIcon",icon:U1,raw:Sf,keywords:["group","people"]},{name:"HandCoinsIcon",icon:q1,raw:jf,keywords:["savings","banking","money","finance","offers","mortgage","payment","received","wage","payroll","allowance","pocket money","handout","pennies"]},{name:"CircleChevronUpIcon",icon:J1,raw:Ef,keywords:["caret","ahead","forward","menu","chevron"]},{name:"CircleChevronDownIcon",icon:t2,raw:Af,keywords:["back","menu","chevron"]},{name:"CircleChevronLeftIcon",icon:r2,raw:Ff,keywords:["back","previous","less than","fewer","menu","<","chevron"]},{name:"CircleChevronRightIcon",icon:a2,raw:Pf,keywords:["next","forward","more than","greater","menu",">","chevron"]},{name:"ChevronsUpDownIcon",icon:u2,raw:Rf,keywords:["expand","unfold","vertical","chevron"]},{name:"ChevronsDownUpIcon",icon:p2,raw:Nf,keywords:["collapse","fold","vertical","chevron"]},{name:"ChevronsLeftRightIcon",icon:g2,raw:Bf,keywords:["expand","unfold","horizontal","chevron"]},{name:"ChevronsRightLeftIcon",icon:w2,raw:Df,keywords:["collapse","fold","horizontal","chevron"]},{name:"CogIcon",icon:_2,raw:Vf,keywords:[]},{name:"RabbitIcon",icon:M2,raw:zf,keywords:[]},{name:"AlarmClockIcon",icon:I2,raw:Yf,keywords:["morning"]},{name:"LoaderPinwheelIcon",icon:T2,raw:Xf,keywords:["loading","wait","busy","progress","throbber","spinner","spinning","beach ball","frozen","freeze"]},{name:"SyringeIcon",icon:$2,raw:Uf,keywords:["medicine","medical","needle","pump","plunger","nozzle","blood"]},{name:"FlaskIcon",icon:E2,raw:Wf,keywords:["beaker","erlenmeyer","lab","chemistry","experiment","test"]}],Rr="https://github.com/imfenghuang/icons",A2="imfenghuang/icons",F2="https://imfenghuang.github.io/icons/",P2=Object.fromEntries(Rl.map(n=>[n.name,n.raw])),R2=n=>P2[n]||"",N2=(n,t)=>{const e=new Blob([t],{type:"text/plain"}),o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(e),document.body.appendChild(o),o.click(),document.body.removeChild(o)},B2=n=>n===""?Rr:`${Rr}/blob/main/src/icons/${n}.vue`,D2={class:"flex justify-center items-center gap-2 mt-2"},V2=["href"],z2={__name:"OperationComp",props:{name:{default:"",type:String}},setup(n){const t=n,e=Dn(()=>B2(t.name)),o=M("cursor-pointer hover:bg-accent rounded-md p-2 transition-colors duration-200"),r=M(R2(t.name)),{copy:i,copied:s}=Yd({source:r}),a=()=>{i(r.value)},l=()=>{N2(`${t.name}.vue`,r.value)};return(c,u)=>{const d=hu("tooltip");return y(),_("div",D2,[Zo((y(),_("div",{class:Xn(v(o)),onClick:a,role:"button",tabindex:"0","aria-label":"copy"},[v(s)?(y(),it(v(Sd),{key:1,"stroke-width":1,size:14})):(y(),it(v(jd),{key:0,"stroke-width":2,size:14}))],2)),[[d,"copy",void 0,{bottom:!0}]]),Zo((y(),_("div",{class:Xn(v(o)),onClick:l,role:"button",tabindex:"0","aria-label":"download"},[b(v(Ed),{"stroke-width":2,size:14})],2)),[[d,"download .vue file",void 0,{bottom:!0}]]),Zo((y(),_("a",{href:v(e),target:"_blank",class:Xn(v(o)),"aria-label":"view on Github"},[b(v(Ad),{"stroke-width":2,size:14})],10,V2)),[[d,"view on Github",void 0,{bottom:!0}]])])}}},Y2={class:"flex flex-col sm:my-20 my-10 gap-6"},X2={class:"relative"},U2=["placeholder","value"],W2={class:"pointer-events-none absolute right-2 top-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100 -translate-y-1/2"},G2={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-3"},q2={class:"text-xs mt-2"},K2={key:0,class:"text-center"},Z2=ne({__name:"CompListComp",setup(n){const t=Rl,e=M(),o=M(""),r=yr(t.map(c=>c.icon)),i=M(!!/iPhone|iPad|iPod|Mac\sOS/.test(navigator.userAgent)),s=c=>{o.value=c.trim(),r.value=o.value===""?t.map(u=>u.icon):t.filter(u=>!!(u.name.toLowerCase().includes(o.value.toLowerCase())||u.keywords.includes(o.value.toLowerCase()))).map(u=>u.icon)};function a(c){if(!document.startViewTransition){s(c.target.value);return}document.startViewTransition(()=>s(c.target.value))}const l=c=>{(c.ctrlKey||c.metaKey)&&(c.key==="k"||c.key==="K")&&(c.preventDefault(),Lo(()=>e.value.focus()))};return $n(()=>{document.addEventListener("keydown",l)}),Oo(()=>{document.removeEventListener("keydown",l)}),(c,u)=>{const d=z2;return y(),_("div",Y2,[w("div",X2,[w("input",{ref_key:"inputRef",ref:e,class:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50",placeholder:`Search ${v(t).length} icons`,value:v(o),onInput:a},null,40,U2),w("kbd",W2,be(v(i)?"⌘":"Ctrl")+" + K",1)]),w("div",G2,[(y(!0),_(mn,null,pt(v(r),f=>(y(),_("div",{key:f.name,class:"p-3 border border-input rounded-md flex items-center justify-center flex-col"},[(y(),it(mu(f))),w("p",q2,be(f.name),1),b(d,{name:f.name},null,8,["name"])]))),128))]),v(r).length===0?(y(),_("div",K2,u[0]||(u[0]=[w("p",{class:"text-xl"},"No icons found",-1),w("p",{class:"text-muted-foreground"},"Try other keywords.",-1)]))):kr("",!0)])}}}),J2=["href","target","rel"],Q2={__name:"LinkComp",props:{href:String,target:String,rel:String,class:String||Object||Array,style:String||Object||Array},setup(n){const t=n;return(e,o)=>(y(),_("a",{href:t.href,target:t.target,rel:t.rel||"noreferrer",class:Xn(["inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] text-xs font-medium text-muted-foreground opacity-100",t.class]),style:xt(t.style)},[Le(e.$slots,"default")],14,J2))}},Nl=(n,t)=>{const e=n.__vccOpts||n;for(const[o,r]of t)e[o]=r;return e},ng={},tg={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"},eg={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty"};function og(n,t){const e=Q2;return y(),_(mn,null,[t[6]||(t[6]=w("h1",{class:"sm:text-3xl text-2xl mt-3 text-balance"},"beautifully crafted animated icons for Vue",-1)),t[7]||(t[7]=w("p",{class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"}," an open-source collection of smooth, animated icons for your projects. feel free to use them, share your feedback, and let's make this library awesome together! ",-1)),w("p",tg,[t[1]||(t[1]=eo(" Thanks to ")),b(e,{href:"https://icons.pqoqubbw.dev/",target:"_blank"},{default:on(()=>t[0]||(t[0]=[w("kbd",null,"pqoqubbw/icons",-1)])),_:1})]),w("p",eg,[t[4]||(t[4]=eo(" Built with ")),b(e,{href:"https://motion.vueuse.org//",target:"_blank"},{default:on(()=>t[2]||(t[2]=[w("kbd",null,"@vueuse/motion",-1)])),_:1}),t[5]||(t[5]=eo(" and ")),b(e,{href:"https://lucide.dev/",target:"_blank"},{default:on(()=>t[3]||(t[3]=[w("kbd",null,"lucide",-1)])),_:1})])],64)}const rg=Nl(ng,[["render",og]]),ig={BASE_URL:"./",DEV:!1,MODE:"pages",PROD:!0,SSR:!1},sg={class:"py-4"},ag={class:"w-full flex items-center justify-between h-full"},lg=["href"],cg={class:"text-base hover:underline"},ug=["href"],dg={__name:"HeaderComp",setup(n){const t=M(A2),e=M(Rr),{MODE:o}=ig,r=M(o==="pages"?F2:"/");return(i,s)=>(y(),_("header",sg,[w("div",ag,[w("a",{href:v(r)},[w("h1",cg,be(v(t)),1)],8,lg),w("div",null,[w("a",{href:v(e),target:"_blank",class:"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-none hover:bg-accent hover:text-accent-foreground h-9 px-2 py-2 flex items-center justify-between"},s[0]||(s[0]=[w("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})],-1)]),8,ug)])])]))}},fg={},pg={class:"container"};function mg(n,t){const e=dg,o=rg,r=Z2;return y(),_("div",pg,[b(e),b(o),b(r)])}const hg=Nl(fg,[["render",mg]]),gg=["top","right","bottom","left"],bs=["start","end"],Ms=gg.reduce((n,t)=>n.concat(t,t+"-"+bs[0],t+"-"+bs[1]),[]),Ee=Math.min,At=Math.max,vg={left:"right",right:"left",bottom:"top",top:"bottom"},yg={start:"end",end:"start"};function Nr(n,t,e){return At(n,Ee(t,e))}function Dt(n,t){return typeof n=="function"?n(t):n}function st(n){return n.split("-")[0]}function Wn(n){return n.split("-")[1]}function Bl(n){return n==="x"?"y":"x"}function ki(n){return n==="y"?"height":"width"}function Bt(n){return["top","bottom"].includes(st(n))?"y":"x"}function Ci(n){return Bl(Bt(n))}function Dl(n,t,e){e===void 0&&(e=!1);const o=Wn(n),r=Ci(n),i=ki(r);let s=r==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=vo(s)),[s,vo(s)]}function wg(n){const t=vo(n);return[go(n),t,go(t)]}function go(n){return n.replace(/start|end/g,t=>yg[t])}function xg(n,t,e){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(n){case"top":case"bottom":return e?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function _g(n,t,e,o){const r=Wn(n);let i=xg(st(n),e==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(go)))),i}function vo(n){return n.replace(/left|right|bottom|top/g,t=>vg[t])}function bg(n){return{top:0,right:0,bottom:0,left:0,...n}}function Vl(n){return typeof n!="number"?bg(n):{top:n,right:n,bottom:n,left:n}}function ye(n){const{x:t,y:e,width:o,height:r}=n;return{width:o,height:r,top:e,left:t,right:t+o,bottom:e+r,x:t,y:e}}function ks(n,t,e){let{reference:o,floating:r}=n;const i=Bt(t),s=Ci(t),a=ki(s),l=st(t),c=i==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[a]/2-r[a]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(Wn(t)){case"start":m[s]-=f*(e&&c?-1:1);break;case"end":m[s]+=f*(e&&c?-1:1);break}return m}const Mg=async(n,t,e)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=e,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:n,floating:t,strategy:r}),{x:u,y:d}=ks(c,o,l),f=o,m={},g=0;for(let k=0;k<a.length;k++){const{name:j,fn:C}=a[k],{x:L,y:H,data:T,reset:N}=await C({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:c,platform:s,elements:{reference:n,floating:t}});u=L??u,d=H??d,m={...m,[j]:{...m[j],...T}},N&&g<=50&&(g++,typeof N=="object"&&(N.placement&&(f=N.placement),N.rects&&(c=N.rects===!0?await s.getElementRects({reference:n,floating:t,strategy:r}):N.rects),{x:u,y:d}=ks(c,f,l)),k=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:m}};async function No(n,t){var e;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:a,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=Dt(t,n),g=Vl(m),j=a[f?d==="floating"?"reference":"floating":d],C=ye(await i.getClippingRect({element:(e=await(i.isElement==null?void 0:i.isElement(j)))==null||e?j:j.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),L=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,H=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),T=await(i.isElement==null?void 0:i.isElement(H))?await(i.getScale==null?void 0:i.getScale(H))||{x:1,y:1}:{x:1,y:1},N=ye(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:L,offsetParent:H,strategy:l}):L);return{top:(C.top-N.top+g.top)/T.y,bottom:(N.bottom-C.bottom+g.bottom)/T.y,left:(C.left-N.left+g.left)/T.x,right:(N.right-C.right+g.right)/T.x}}const kg=n=>({name:"arrow",options:n,async fn(t){const{x:e,y:o,placement:r,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Dt(n,t)||{};if(c==null)return{};const d=Vl(u),f={x:e,y:o},m=Ci(r),g=ki(m),k=await s.getDimensions(c),j=m==="y",C=j?"top":"left",L=j?"bottom":"right",H=j?"clientHeight":"clientWidth",T=i.reference[g]+i.reference[m]-f[m]-i.floating[g],N=f[m]-i.reference[m],W=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let G=W?W[H]:0;(!G||!await(s.isElement==null?void 0:s.isElement(W)))&&(G=a.floating[H]||i.floating[g]);const dn=T/2-N/2,sn=G/2-k[g]/2-1,Q=Ee(d[C],sn),hn=Ee(d[L],sn),vn=Q,xn=G-k[g]-hn,pn=G/2-k[g]/2+dn,Rn=Nr(vn,pn,xn),un=!l.arrow&&Wn(r)!=null&&pn!==Rn&&i.reference[g]/2-(pn<vn?Q:hn)-k[g]/2<0,K=un?pn<vn?pn-vn:pn-xn:0;return{[m]:f[m]+K,data:{[m]:Rn,centerOffset:pn-Rn-K,...un&&{alignmentOffset:K}},reset:un}}});function Cg(n,t,e){return(n?[...e.filter(r=>Wn(r)===n),...e.filter(r=>Wn(r)!==n)]:e.filter(r=>st(r)===r)).filter(r=>n?Wn(r)===n||(t?go(r)!==r:!1):!0)}const Ig=function(n){return n===void 0&&(n={}),{name:"autoPlacement",options:n,async fn(t){var e,o,r;const{rects:i,middlewareData:s,placement:a,platform:l,elements:c}=t,{crossAxis:u=!1,alignment:d,allowedPlacements:f=Ms,autoAlignment:m=!0,...g}=Dt(n,t),k=d!==void 0||f===Ms?Cg(d||null,m,f):f,j=await No(t,g),C=((e=s.autoPlacement)==null?void 0:e.index)||0,L=k[C];if(L==null)return{};const H=Dl(L,i,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==L)return{reset:{placement:k[0]}};const T=[j[st(L)],j[H[0]],j[H[1]]],N=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:L,overflows:T}],W=k[C+1];if(W)return{data:{index:C+1,overflows:N},reset:{placement:W}};const G=N.map(Q=>{const hn=Wn(Q.placement);return[Q.placement,hn&&u?Q.overflows.slice(0,2).reduce((vn,xn)=>vn+xn,0):Q.overflows[0],Q.overflows]}).sort((Q,hn)=>Q[1]-hn[1]),sn=((r=G.filter(Q=>Q[2].slice(0,Wn(Q[0])?2:3).every(hn=>hn<=0))[0])==null?void 0:r[0])||G[0][0];return sn!==a?{data:{index:C+1,overflows:N},reset:{placement:sn}}:{}}}},Lg=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(t){var e,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:k=!0,...j}=Dt(n,t);if((e=i.arrow)!=null&&e.alignmentOffset)return{};const C=st(r),L=Bt(a),H=st(a)===a,T=await(l.isRTL==null?void 0:l.isRTL(c.floating)),N=f||(H||!k?[vo(a)]:wg(a)),W=g!=="none";!f&&W&&N.push(..._g(a,k,g,T));const G=[a,...N],dn=await No(t,j),sn=[];let Q=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&sn.push(dn[C]),d){const pn=Dl(r,s,T);sn.push(dn[pn[0]],dn[pn[1]])}if(Q=[...Q,{placement:r,overflows:sn}],!sn.every(pn=>pn<=0)){var hn,vn;const pn=(((hn=i.flip)==null?void 0:hn.index)||0)+1,Rn=G[pn];if(Rn)return{data:{index:pn,overflows:Q},reset:{placement:Rn}};let un=(vn=Q.filter(K=>K.overflows[0]<=0).sort((K,q)=>K.overflows[1]-q.overflows[1])[0])==null?void 0:vn.placement;if(!un)switch(m){case"bestFit":{var xn;const K=(xn=Q.filter(q=>{if(W){const bn=Bt(q.placement);return bn===L||bn==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(bn=>bn>0).reduce((bn,Vt)=>bn+Vt,0)]).sort((q,bn)=>q[1]-bn[1])[0])==null?void 0:xn[0];K&&(un=K);break}case"initialPlacement":un=a;break}if(r!==un)return{reset:{placement:un}}}return{}}}};async function Hg(n,t){const{placement:e,platform:o,elements:r}=n,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=st(e),a=Wn(e),l=Bt(e)==="y",c=["left","top"].includes(s)?-1:1,u=i&&l?-1:1,d=Dt(t,n);let{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*u,y:f*c}:{x:f*c,y:m*u}}const Tg=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(t){var e,o;const{x:r,y:i,placement:s,middlewareData:a}=t,l=await Hg(t,n);return s===((e=a.offset)==null?void 0:e.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},Og=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(t){const{x:e,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:j=>{let{x:C,y:L}=j;return{x:C,y:L}}},...l}=Dt(n,t),c={x:e,y:o},u=await No(t,l),d=Bt(st(r)),f=Bl(d);let m=c[f],g=c[d];if(i){const j=f==="y"?"top":"left",C=f==="y"?"bottom":"right",L=m+u[j],H=m-u[C];m=Nr(L,m,H)}if(s){const j=d==="y"?"top":"left",C=d==="y"?"bottom":"right",L=g+u[j],H=g-u[C];g=Nr(L,g,H)}const k=a.fn({...t,[f]:m,[d]:g});return{...k,data:{x:k.x-e,y:k.y-o,enabled:{[f]:i,[d]:s}}}}}},$g=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(t){var e,o;const{placement:r,rects:i,platform:s,elements:a}=t,{apply:l=()=>{},...c}=Dt(n,t),u=await No(t,c),d=st(r),f=Wn(r),m=Bt(r)==="y",{width:g,height:k}=i.floating;let j,C;d==="top"||d==="bottom"?(j=d,C=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(C=d,j=f==="end"?"top":"bottom");const L=k-u.top-u.bottom,H=g-u.left-u.right,T=Ee(k-u[j],L),N=Ee(g-u[C],H),W=!t.middlewareData.shift;let G=T,dn=N;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(dn=H),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(G=L),W&&!f){const Q=At(u.left,0),hn=At(u.right,0),vn=At(u.top,0),xn=At(u.bottom,0);m?dn=g-2*(Q!==0||hn!==0?Q+hn:At(u.left,u.right)):G=k-2*(vn!==0||xn!==0?vn+xn:At(u.top,u.bottom))}await l({...t,availableWidth:dn,availableHeight:G});const sn=await s.getDimensions(a.floating);return g!==sn.width||k!==sn.height?{reset:{rects:!0}}:{}}}};function Nn(n){var t;return((t=n.ownerDocument)==null?void 0:t.defaultView)||window}function et(n){return Nn(n).getComputedStyle(n)}const Cs=Math.min,we=Math.max,yo=Math.round;function zl(n){const t=et(n);let e=parseFloat(t.width),o=parseFloat(t.height);const r=n.offsetWidth,i=n.offsetHeight,s=yo(e)!==r||yo(o)!==i;return s&&(e=r,o=i),{width:e,height:o,fallback:s}}function kt(n){return Xl(n)?(n.nodeName||"").toLowerCase():""}let Qe;function Yl(){if(Qe)return Qe;const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?(Qe=n.brands.map(t=>t.brand+"/"+t.version).join(" "),Qe):navigator.userAgent}function ot(n){return n instanceof Nn(n).HTMLElement}function _t(n){return n instanceof Nn(n).Element}function Xl(n){return n instanceof Nn(n).Node}function Is(n){return typeof ShadowRoot>"u"?!1:n instanceof Nn(n).ShadowRoot||n instanceof ShadowRoot}function Bo(n){const{overflow:t,overflowX:e,overflowY:o,display:r}=et(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+e)&&!["inline","contents"].includes(r)}function Sg(n){return["table","td","th"].includes(kt(n))}function Br(n){const t=/firefox/i.test(Yl()),e=et(n),o=e.backdropFilter||e.WebkitBackdropFilter;return e.transform!=="none"||e.perspective!=="none"||!!o&&o!=="none"||t&&e.willChange==="filter"||t&&!!e.filter&&e.filter!=="none"||["transform","perspective"].some(r=>e.willChange.includes(r))||["paint","layout","strict","content"].some(r=>{const i=e.contain;return i!=null&&i.includes(r)})}function Ul(){return!/^((?!chrome|android).)*safari/i.test(Yl())}function Ii(n){return["html","body","#document"].includes(kt(n))}function Wl(n){return _t(n)?n:n.contextElement}const Gl={x:1,y:1};function Jt(n){const t=Wl(n);if(!ot(t))return Gl;const e=t.getBoundingClientRect(),{width:o,height:r,fallback:i}=zl(t);let s=(i?yo(e.width):e.width)/o,a=(i?yo(e.height):e.height)/r;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}function Ae(n,t,e,o){var r,i;t===void 0&&(t=!1),e===void 0&&(e=!1);const s=n.getBoundingClientRect(),a=Wl(n);let l=Gl;t&&(o?_t(o)&&(l=Jt(o)):l=Jt(n));const c=a?Nn(a):window,u=!Ul()&&e;let d=(s.left+(u&&((r=c.visualViewport)==null?void 0:r.offsetLeft)||0))/l.x,f=(s.top+(u&&((i=c.visualViewport)==null?void 0:i.offsetTop)||0))/l.y,m=s.width/l.x,g=s.height/l.y;if(a){const k=Nn(a),j=o&&_t(o)?Nn(o):o;let C=k.frameElement;for(;C&&o&&j!==k;){const L=Jt(C),H=C.getBoundingClientRect(),T=getComputedStyle(C);H.x+=(C.clientLeft+parseFloat(T.paddingLeft))*L.x,H.y+=(C.clientTop+parseFloat(T.paddingTop))*L.y,d*=L.x,f*=L.y,m*=L.x,g*=L.y,d+=H.x,f+=H.y,C=Nn(C).frameElement}}return{width:m,height:g,top:f,right:d+m,bottom:f+g,left:d,x:d,y:f}}function bt(n){return((Xl(n)?n.ownerDocument:n.document)||window.document).documentElement}function Do(n){return _t(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function ql(n){return Ae(bt(n)).left+Do(n).scrollLeft}function Fe(n){if(kt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Is(n)&&n.host||bt(n);return Is(t)?t.host:t}function Kl(n){const t=Fe(n);return Ii(t)?t.ownerDocument.body:ot(t)&&Bo(t)?t:Kl(t)}function wo(n,t){var e;t===void 0&&(t=[]);const o=Kl(n),r=o===((e=n.ownerDocument)==null?void 0:e.body),i=Nn(o);return r?t.concat(i,i.visualViewport||[],Bo(o)?o:[]):t.concat(o,wo(o))}function Ls(n,t,e){return t==="viewport"?ye(function(o,r){const i=Nn(o),s=bt(o),a=i.visualViewport;let l=s.clientWidth,c=s.clientHeight,u=0,d=0;if(a){l=a.width,c=a.height;const f=Ul();(f||!f&&r==="fixed")&&(u=a.offsetLeft,d=a.offsetTop)}return{width:l,height:c,x:u,y:d}}(n,e)):_t(t)?ye(function(o,r){const i=Ae(o,!0,r==="fixed"),s=i.top+o.clientTop,a=i.left+o.clientLeft,l=ot(o)?Jt(o):{x:1,y:1};return{width:o.clientWidth*l.x,height:o.clientHeight*l.y,x:a*l.x,y:s*l.y}}(t,e)):ye(function(o){const r=bt(o),i=Do(o),s=o.ownerDocument.body,a=we(r.scrollWidth,r.clientWidth,s.scrollWidth,s.clientWidth),l=we(r.scrollHeight,r.clientHeight,s.scrollHeight,s.clientHeight);let c=-i.scrollLeft+ql(o);const u=-i.scrollTop;return et(s).direction==="rtl"&&(c+=we(r.clientWidth,s.clientWidth)-a),{width:a,height:l,x:c,y:u}}(bt(n)))}function Hs(n){return ot(n)&&et(n).position!=="fixed"?n.offsetParent:null}function Ts(n){const t=Nn(n);let e=Hs(n);for(;e&&Sg(e)&&et(e).position==="static";)e=Hs(e);return e&&(kt(e)==="html"||kt(e)==="body"&&et(e).position==="static"&&!Br(e))?t:e||function(o){let r=Fe(o);for(;ot(r)&&!Ii(r);){if(Br(r))return r;r=Fe(r)}return null}(n)||t}function jg(n,t,e){const o=ot(t),r=bt(t),i=Ae(n,!0,e==="fixed",t);let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(o||!o&&e!=="fixed")if((kt(t)!=="body"||Bo(r))&&(s=Do(t)),ot(t)){const l=Ae(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}else r&&(a.x=ql(r));return{x:i.left+s.scrollLeft-a.x,y:i.top+s.scrollTop-a.y,width:i.width,height:i.height}}const Eg={getClippingRect:function(n){let{element:t,boundary:e,rootBoundary:o,strategy:r}=n;const i=e==="clippingAncestors"?function(c,u){const d=u.get(c);if(d)return d;let f=wo(c).filter(j=>_t(j)&&kt(j)!=="body"),m=null;const g=et(c).position==="fixed";let k=g?Fe(c):c;for(;_t(k)&&!Ii(k);){const j=et(k),C=Br(k);(g?C||m:C||j.position!=="static"||!m||!["absolute","fixed"].includes(m.position))?m=j:f=f.filter(L=>L!==k),k=Fe(k)}return u.set(c,f),f}(t,this._c):[].concat(e),s=[...i,o],a=s[0],l=s.reduce((c,u)=>{const d=Ls(t,u,r);return c.top=we(d.top,c.top),c.right=Cs(d.right,c.right),c.bottom=Cs(d.bottom,c.bottom),c.left=we(d.left,c.left),c},Ls(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(n){let{rect:t,offsetParent:e,strategy:o}=n;const r=ot(e),i=bt(e);if(e===i)return t;let s={scrollLeft:0,scrollTop:0},a={x:1,y:1};const l={x:0,y:0};if((r||!r&&o!=="fixed")&&((kt(e)!=="body"||Bo(i))&&(s=Do(e)),ot(e))){const c=Ae(e);a=Jt(e),l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}},isElement:_t,getDimensions:function(n){return ot(n)?zl(n):n.getBoundingClientRect()},getOffsetParent:Ts,getDocumentElement:bt,getScale:Jt,async getElementRects(n){let{reference:t,floating:e,strategy:o}=n;const r=this.getOffsetParent||Ts,i=this.getDimensions;return{reference:jg(t,await r(e),o),floating:{x:0,y:0,...await i(e)}}},getClientRects:n=>Array.from(n.getClientRects()),isRTL:n=>et(n).direction==="rtl"},Ag=(n,t,e)=>{const o=new Map,r={platform:Eg,...e},i={...r.platform,_c:o};return Mg(n,t,{...r,platform:i})},Rt={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:150,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,autoHideOnMousedown:!1,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:n=>[...n,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover"],delay:{show:0,hide:400}}}};function Pe(n,t){let e=Rt.themes[n]||{},o;do o=e[t],typeof o>"u"?e.$extend?e=Rt.themes[e.$extend]||{}:(e=null,o=Rt[t]):e=null;while(e);return o}function Fg(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend&&!e.$resetCss?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t.map(o=>`v-popper--theme-${o}`)}function Os(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t}let Re=!1;if(typeof window<"u"){Re=!1;try{const n=Object.defineProperty({},"passive",{get(){Re=!0}});window.addEventListener("test",null,n)}catch{}}let Zl=!1;typeof window<"u"&&typeof navigator<"u"&&(Zl=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Jl=["auto","top","bottom","left","right"].reduce((n,t)=>n.concat([t,`${t}-start`,`${t}-end`]),[]),$s={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart",pointer:"pointerdown"},Ss={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend",pointer:"pointerup"};function js(n,t){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}function ur(){return new Promise(n=>requestAnimationFrame(()=>{requestAnimationFrame(n)}))}const Yn=[];let jt=null;const Es={};function As(n){let t=Es[n];return t||(t=Es[n]=[]),t}let Dr=function(){};typeof window<"u"&&(Dr=window.Element);function J(n){return function(t){return Pe(t.theme,n)}}const dr="__floating-vue__popper",Ql=()=>ne({name:"VPopper",provide(){return{[dr]:{parentPopper:this}}},inject:{[dr]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:J("disabled")},positioningDisabled:{type:Boolean,default:J("positioningDisabled")},placement:{type:String,default:J("placement"),validator:n=>Jl.includes(n)},delay:{type:[String,Number,Object],default:J("delay")},distance:{type:[Number,String],default:J("distance")},skidding:{type:[Number,String],default:J("skidding")},triggers:{type:Array,default:J("triggers")},showTriggers:{type:[Array,Function],default:J("showTriggers")},hideTriggers:{type:[Array,Function],default:J("hideTriggers")},popperTriggers:{type:Array,default:J("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:J("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:J("popperHideTriggers")},container:{type:[String,Object,Dr,Boolean],default:J("container")},boundary:{type:[String,Dr],default:J("boundary")},strategy:{type:String,validator:n=>["absolute","fixed"].includes(n),default:J("strategy")},autoHide:{type:[Boolean,Function],default:J("autoHide")},handleResize:{type:Boolean,default:J("handleResize")},instantMove:{type:Boolean,default:J("instantMove")},eagerMount:{type:Boolean,default:J("eagerMount")},popperClass:{type:[String,Array,Object],default:J("popperClass")},computeTransformOrigin:{type:Boolean,default:J("computeTransformOrigin")},autoMinSize:{type:Boolean,default:J("autoMinSize")},autoSize:{type:[Boolean,String],default:J("autoSize")},autoMaxSize:{type:Boolean,default:J("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:J("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:J("preventOverflow")},overflowPadding:{type:[Number,String],default:J("overflowPadding")},arrowPadding:{type:[Number,String],default:J("arrowPadding")},arrowOverflow:{type:Boolean,default:J("arrowOverflow")},flip:{type:Boolean,default:J("flip")},shift:{type:Boolean,default:J("shift")},shiftCrossAxis:{type:Boolean,default:J("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:J("noAutoFocus")},disposeTimeout:{type:Number,default:J("disposeTimeout")}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},randomId:`popper_${[Math.random(),Date.now()].map(n=>n.toString(36).substring(2,10)).join("_")}`,shownChildren:new Set,lastAutoHide:!0,pendingHide:!1,containsGlobalTarget:!1,isDisposed:!0,mouseDownContains:!1}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:{...this.classes,popperClass:this.popperClass},result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var n;return(n=this[dr])==null?void 0:n.parentPopper},hasPopperShowTriggerHover(){var n,t;return((n=this.popperTriggers)==null?void 0:n.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:{shown:"$_autoShowHide",disabled(n){n?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())},triggers:{handler:"$_refreshListeners",deep:!0},positioningDisabled:"$_refreshListeners",...["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((n,t)=>(n[t]="$_computePosition",n),{})},created(){this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:n=null,skipDelay:t=!1,force:e=!1}={}){var o,r;(o=this.parentPopper)!=null&&o.lockedChild&&this.parentPopper.lockedChild!==this||(this.pendingHide=!1,(e||!this.disabled)&&(((r=this.parentPopper)==null?void 0:r.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(n,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:n=null,skipDelay:t=!1}={}){var e;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((e=this.parentPopper)==null?void 0:e.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.pendingHide=!1,this.$_scheduleHide(n,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var n;this.isDisposed&&(this.isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=((n=this.referenceNode)==null?void 0:n.call(this))??this.$el,this.$_targetNodes=this.targetNodes().filter(t=>t.nodeType===t.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.isDisposed||(this.isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){if(this.isDisposed||this.positioningDisabled)return;const n={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&n.middleware.push(Tg({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");if(t?n.middleware.push(Ig({alignment:this.placement.split("-")[1]??""})):n.placement=this.placement,this.preventOverflow&&(this.shift&&n.middleware.push(Og({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&n.middleware.push(Lg({padding:this.overflowPadding,boundary:this.boundary}))),n.middleware.push(kg({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&n.middleware.push({name:"arrowOverflow",fn:({placement:o,rects:r,middlewareData:i})=>{let s;const{centerOffset:a}=i.arrow;return o.startsWith("top")||o.startsWith("bottom")?s=Math.abs(a)>r.reference.width/2:s=Math.abs(a)>r.reference.height/2,{data:{overflow:s}}}}),this.autoMinSize||this.autoSize){const o=this.autoSize?this.autoSize:this.autoMinSize?"min":null;n.middleware.push({name:"autoSize",fn:({rects:r,placement:i,middlewareData:s})=>{var a;if((a=s.autoSize)!=null&&a.skip)return{};let l,c;return i.startsWith("top")||i.startsWith("bottom")?l=r.reference.width:c=r.reference.height,this.$_innerNode.style[o==="min"?"minWidth":o==="max"?"maxWidth":"width"]=l!=null?`${l}px`:null,this.$_innerNode.style[o==="min"?"minHeight":o==="max"?"maxHeight":"height"]=c!=null?`${c}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,n.middleware.push($g({boundary:this.boundary,padding:this.overflowPadding,apply:({availableWidth:o,availableHeight:r})=>{this.$_innerNode.style.maxWidth=o!=null?`${o}px`:null,this.$_innerNode.style.maxHeight=r!=null?`${r}px`:null}})));const e=await Ag(this.$_referenceNode,this.$_popperNode,n);Object.assign(this.result,{x:e.x,y:e.y,placement:e.placement,strategy:e.strategy,arrow:{...e.middlewareData.arrow,...e.middlewareData.arrowOverflow}})},$_scheduleShow(n,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),jt&&this.instantMove&&jt.instantMove&&jt!==this.parentPopper){jt.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(n,t=!1){if(this.shownChildren.size>0){this.pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(jt=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(n){const t=this.delay;return parseInt(t&&t[n]||t||0)},async $_applyShow(n=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=n,!this.isShown&&(this.$_ensureTeleport(),await ur(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...wo(this.$_referenceNode),...wo(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),e=this.$_popperNode.querySelector(".v-popper__wrapper"),o=e.parentNode.getBoundingClientRect(),r=t.x+t.width/2-(o.left+e.offsetLeft),i=t.y+t.height/2-(o.top+e.offsetTop);this.result.transformOrigin=`${r}px ${i}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const n=this.showGroup;if(n){let t;for(let e=0;e<Yn.length;e++)t=Yn[e],t.showGroup!==n&&(t.hide(),t.$emit("close-group"))}Yn.push(this),document.body.classList.add("v-popper--some-open");for(const t of Os(this.theme))As(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await ur(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(n=!1){if(this.shownChildren.size>0){this.pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=n,js(Yn,this),Yn.length===0&&document.body.classList.remove("v-popper--some-open");for(const e of Os(this.theme)){const o=As(e);js(o,this),o.length===0&&document.body.classList.remove(`v-popper--some-open--${e}`)}jt===this&&(jt=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=this.disposeTimeout;t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await ur(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.isDisposed)return;let n=this.container;if(typeof n=="string"?n=window.document.querySelector(n):n===!1&&(n=this.$_targetNodes[0].parentNode),!n)throw new Error("No container for popover: "+this.container);n.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const n=e=>{this.isShown&&!this.$_hideInProgress||(e.usedByTooltip=!0,!this.$_preventShow&&this.show({event:e}))};this.$_registerTriggerListeners(this.$_targetNodes,$s,this.triggers,this.showTriggers,n),this.$_registerTriggerListeners([this.$_popperNode],$s,this.popperTriggers,this.popperShowTriggers,n);const t=e=>{e.usedByTooltip||this.hide({event:e})};this.$_registerTriggerListeners(this.$_targetNodes,Ss,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],Ss,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(n,t,e){this.$_events.push({targetNodes:n,eventType:t,handler:e}),n.forEach(o=>o.addEventListener(t,e,Re?{passive:!0}:void 0))},$_registerTriggerListeners(n,t,e,o,r){let i=e;o!=null&&(i=typeof o=="function"?o(i):o),i.forEach(s=>{const a=t[s];a&&this.$_registerEventListeners(n,a,r)})},$_removeEventListeners(n){const t=[];this.$_events.forEach(e=>{const{targetNodes:o,eventType:r,handler:i}=e;!n||n===r?o.forEach(s=>s.removeEventListener(r,i)):t.push(e)}),this.$_events=t},$_refreshListeners(){this.isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(n,t=!1){this.$_showFrameLocked||(this.hide({event:n}),n.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(n,t){for(const e of this.$_targetNodes){const o=e.getAttribute(n);o&&(e.removeAttribute(n),e.setAttribute(t,o))}},$_applyAttrsToTarget(n){for(const t of this.$_targetNodes)for(const e in n){const o=n[e];o==null?t.removeAttribute(e):t.setAttribute(e,o)}},$_updateParentShownChildren(n){let t=this.parentPopper;for(;t;)n?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const n=this.$_referenceNode.getBoundingClientRect();if(xe>=n.left&&xe<=n.right&&_e>=n.top&&_e<=n.bottom){const t=this.$_popperNode.getBoundingClientRect(),e=xe-mt,o=_e-ht,r=t.left+t.width/2-mt+(t.top+t.height/2)-ht+t.width+t.height,i=mt+e*r,s=ht+o*r;return no(mt,ht,i,s,t.left,t.top,t.left,t.bottom)||no(mt,ht,i,s,t.left,t.top,t.right,t.top)||no(mt,ht,i,s,t.right,t.top,t.right,t.bottom)||no(mt,ht,i,s,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});if(typeof document<"u"&&typeof window<"u"){if(Zl){const n=Re?{passive:!0,capture:!0}:!0;document.addEventListener("touchstart",t=>Fs(t),n),document.addEventListener("touchend",t=>Ps(t,!0),n)}else window.addEventListener("mousedown",n=>Fs(n),!0),window.addEventListener("click",n=>Ps(n,!1),!0);window.addEventListener("resize",Ng)}function Fs(n,t){for(let e=0;e<Yn.length;e++){const o=Yn[e];try{o.mouseDownContains=o.popperNode().contains(n.target)}catch{}}}function Ps(n,t){Pg(n,t)}function Pg(n,t){const e={};for(let o=Yn.length-1;o>=0;o--){const r=Yn[o];try{const i=r.containsGlobalTarget=r.mouseDownContains||r.popperNode().contains(n.target);r.pendingHide=!1,requestAnimationFrame(()=>{if(r.pendingHide=!1,!e[r.randomId]&&Rs(r,i,n)){if(r.$_handleGlobalClose(n,t),!n.closeAllPopover&&n.closePopover&&i){let a=r.parentPopper;for(;a;)e[a.randomId]=!0,a=a.parentPopper;return}let s=r.parentPopper;for(;s&&Rs(s,s.containsGlobalTarget,n);)s.$_handleGlobalClose(n,t),s=s.parentPopper}})}catch{}}}function Rs(n,t,e){return e.closeAllPopover||e.closePopover&&t||Rg(n,e)&&!t}function Rg(n,t){if(typeof n.autoHide=="function"){const e=n.autoHide(t);return n.lastAutoHide=e,e}return n.autoHide}function Ng(){for(let n=0;n<Yn.length;n++)Yn[n].$_computePosition()}let mt=0,ht=0,xe=0,_e=0;typeof window<"u"&&window.addEventListener("mousemove",n=>{mt=xe,ht=_e,xe=n.clientX,_e=n.clientY},Re?{passive:!0}:void 0);function no(n,t,e,o,r,i,s,a){const l=((s-r)*(t-i)-(a-i)*(n-r))/((a-i)*(e-n)-(s-r)*(o-t)),c=((e-n)*(t-i)-(o-t)*(n-r))/((a-i)*(e-n)-(s-r)*(o-t));return l>=0&&l<=1&&c>=0&&c<=1}const Bg={extends:Ql()},Vo=(n,t)=>{const e=n.__vccOpts||n;for(const[o,r]of t)e[o]=r;return e};function Dg(n,t,e,o,r,i){return y(),_("div",{ref:"reference",class:Xn(["v-popper",{"v-popper--shown":n.slotData.isShown}])},[Le(n.$slots,"default",wc(Ba(n.slotData)))],2)}const Vg=Vo(Bg,[["render",Dg]]);function zg(){var n=window.navigator.userAgent,t=n.indexOf("MSIE ");if(t>0)return parseInt(n.substring(t+5,n.indexOf(".",t)),10);var e=n.indexOf("Trident/");if(e>0){var o=n.indexOf("rv:");return parseInt(n.substring(o+3,n.indexOf(".",o)),10)}var r=n.indexOf("Edge/");return r>0?parseInt(n.substring(r+5,n.indexOf(".",r)),10):-1}let ao;function Vr(){Vr.init||(Vr.init=!0,ao=zg()!==-1)}var zo={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Vr(),Lo(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const n=document.createElement("object");this._resizeObject=n,n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex",-1),n.onload=this.addResizeHandlers,n.type="text/html",ao&&this.$el.appendChild(n),n.data="about:blank",ao||this.$el.appendChild(n)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!ao&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Yg=nu();Jc("data-v-b329ee4c");const Xg={class:"resize-observer",tabindex:"-1"};Qc();const Ug=Yg((n,t,e,o,r,i)=>(y(),it("div",Xg)));zo.render=Ug;zo.__scopeId="data-v-b329ee4c";zo.__file="src/components/ResizeObserver.vue";const nc=(n="theme")=>({computed:{themeClass(){return Fg(this[n])}}}),Wg=ne({name:"VPopperContent",components:{ResizeObserver:zo},mixins:[nc()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(n){return n!=null&&!isNaN(n)?`${n}px`:null}}}),Gg=["id","aria-hidden","tabindex","data-popper-placement"],qg={ref:"inner",class:"v-popper__inner"},Kg=w("div",{class:"v-popper__arrow-outer"},null,-1),Zg=w("div",{class:"v-popper__arrow-inner"},null,-1),Jg=[Kg,Zg];function Qg(n,t,e,o,r,i){const s=Ie("ResizeObserver");return y(),_("div",{id:n.popperId,ref:"popover",class:Xn(["v-popper__popper",[n.themeClass,n.classes.popperClass,{"v-popper__popper--shown":n.shown,"v-popper__popper--hidden":!n.shown,"v-popper__popper--show-from":n.classes.showFrom,"v-popper__popper--show-to":n.classes.showTo,"v-popper__popper--hide-from":n.classes.hideFrom,"v-popper__popper--hide-to":n.classes.hideTo,"v-popper__popper--skip-transition":n.skipTransition,"v-popper__popper--arrow-overflow":n.result&&n.result.arrow.overflow,"v-popper__popper--no-positioning":!n.result}]]),style:xt(n.result?{position:n.result.strategy,transform:`translate3d(${Math.round(n.result.x)}px,${Math.round(n.result.y)}px,0)`}:void 0),"aria-hidden":n.shown?"false":"true",tabindex:n.autoHide?0:void 0,"data-popper-placement":n.result?n.result.placement:void 0,onKeyup:t[2]||(t[2]=Cd(a=>n.autoHide&&n.$emit("hide"),["esc"]))},[w("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=a=>n.autoHide&&n.$emit("hide"))}),w("div",{class:"v-popper__wrapper",style:xt(n.result?{transformOrigin:n.result.transformOrigin}:void 0)},[w("div",qg,[n.mounted?(y(),_(mn,{key:0},[w("div",null,[Le(n.$slots,"default")]),n.handleResize?(y(),it(s,{key:0,onNotify:t[1]||(t[1]=a=>n.$emit("resize",a))})):kr("",!0)],64)):kr("",!0)],512),w("div",{ref:"arrow",class:"v-popper__arrow-container",style:xt(n.result?{left:n.toPx(n.result.arrow.x),top:n.toPx(n.result.arrow.y)}:void 0)},Jg,4)],4)],46,Gg)}const tc=Vo(Wg,[["render",Qg]]),ec={methods:{show(...n){return this.$refs.popper.show(...n)},hide(...n){return this.$refs.popper.hide(...n)},dispose(...n){return this.$refs.popper.dispose(...n)},onResize(...n){return this.$refs.popper.onResize(...n)}}};let zr=function(){};typeof window<"u"&&(zr=window.Element);const nv=ne({name:"VPopperWrapper",components:{Popper:Vg,PopperContent:tc},mixins:[ec,nc("finalTheme")],props:{theme:{type:String,default:null},referenceNode:{type:Function,default:null},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:void 0},positioningDisabled:{type:Boolean,default:void 0},placement:{type:String,default:void 0},delay:{type:[String,Number,Object],default:void 0},distance:{type:[Number,String],default:void 0},skidding:{type:[Number,String],default:void 0},triggers:{type:Array,default:void 0},showTriggers:{type:[Array,Function],default:void 0},hideTriggers:{type:[Array,Function],default:void 0},popperTriggers:{type:Array,default:void 0},popperShowTriggers:{type:[Array,Function],default:void 0},popperHideTriggers:{type:[Array,Function],default:void 0},container:{type:[String,Object,zr,Boolean],default:void 0},boundary:{type:[String,zr],default:void 0},strategy:{type:String,default:void 0},autoHide:{type:[Boolean,Function],default:void 0},handleResize:{type:Boolean,default:void 0},instantMove:{type:Boolean,default:void 0},eagerMount:{type:Boolean,default:void 0},popperClass:{type:[String,Array,Object],default:void 0},computeTransformOrigin:{type:Boolean,default:void 0},autoMinSize:{type:Boolean,default:void 0},autoSize:{type:[Boolean,String],default:void 0},autoMaxSize:{type:Boolean,default:void 0},autoBoundaryMaxSize:{type:Boolean,default:void 0},preventOverflow:{type:Boolean,default:void 0},overflowPadding:{type:[Number,String],default:void 0},arrowPadding:{type:[Number,String],default:void 0},arrowOverflow:{type:Boolean,default:void 0},flip:{type:Boolean,default:void 0},shift:{type:Boolean,default:void 0},shiftCrossAxis:{type:Boolean,default:void 0},noAutoFocus:{type:Boolean,default:void 0},disposeTimeout:{type:Number,default:void 0}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},computed:{finalTheme(){return this.theme??this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(n=>n!==this.$refs.popperContent.$el)}}});function tv(n,t,e,o,r,i){const s=Ie("PopperContent"),a=Ie("Popper");return y(),it(a,ui({ref:"popper"},n.$props,{theme:n.finalTheme,"target-nodes":n.getTargetNodes,"popper-node":()=>n.$refs.popperContent.$el,class:[n.themeClass],onShow:t[0]||(t[0]=()=>n.$emit("show")),onHide:t[1]||(t[1]=()=>n.$emit("hide")),"onUpdate:shown":t[2]||(t[2]=l=>n.$emit("update:shown",l)),onApplyShow:t[3]||(t[3]=()=>n.$emit("apply-show")),onApplyHide:t[4]||(t[4]=()=>n.$emit("apply-hide")),onCloseGroup:t[5]||(t[5]=()=>n.$emit("close-group")),onCloseDirective:t[6]||(t[6]=()=>n.$emit("close-directive")),onAutoHide:t[7]||(t[7]=()=>n.$emit("auto-hide")),onResize:t[8]||(t[8]=()=>n.$emit("resize"))}),{default:on(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:d,autoHide:f,show:m,hide:g,handleResize:k,onResize:j,classes:C,result:L})=>[Le(n.$slots,"default",{shown:c,show:m,hide:g}),b(s,{ref:"popperContent","popper-id":l,theme:n.finalTheme,shown:c,mounted:u,"skip-transition":d,"auto-hide":f,"handle-resize":k,classes:C,result:L,onHide:g,onResize:j},{default:on(()=>[Le(n.$slots,"popper",{shown:c,hide:g})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},16,["theme","target-nodes","popper-node","class"])}const Li=Vo(nv,[["render",tv]]);({...Li});({...Li});({...Li});const ev=ne({name:"VTooltipDirective",components:{Popper:Ql(),PopperContent:tc},mixins:[ec],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:n=>Pe(n.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:n=>Pe(n.theme,"loadingContent")},targetNodes:{type:Function,required:!0}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(n){if(typeof this.content=="function"&&this.$_isShown&&(n||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,e=this.content(this);e.then?e.then(o=>this.onResult(t,o)):this.onResult(t,e)}},onResult(n,t){n===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),ov=["innerHTML"],rv=["textContent"];function iv(n,t,e,o,r,i){const s=Ie("PopperContent"),a=Ie("Popper");return y(),it(a,ui({ref:"popper"},n.$attrs,{theme:n.theme,"target-nodes":n.targetNodes,"popper-node":()=>n.$refs.popperContent.$el,onApplyShow:n.onShow,onApplyHide:n.onHide}),{default:on(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:d,autoHide:f,hide:m,handleResize:g,onResize:k,classes:j,result:C})=>[b(s,{ref:"popperContent",class:Xn({"v-popper--tooltip-loading":n.loading}),"popper-id":l,theme:n.theme,shown:c,mounted:u,"skip-transition":d,"auto-hide":f,"handle-resize":g,classes:j,result:C,onHide:m,onResize:k},{default:on(()=>[n.html?(y(),_("div",{key:0,innerHTML:n.finalContent},null,8,ov)):(y(),_("div",{key:1,textContent:be(n.finalContent)},null,8,rv))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","target-nodes","popper-node","onApplyShow","onApplyHide"])}const sv=Vo(ev,[["render",iv]]),oc="v-popper--has-tooltip";function av(n,t){let e=n.placement;if(!e&&t)for(const o of Jl)t[o]&&(e=o);return e||(e=Pe(n.theme||"tooltip","placement")),e}function rc(n,t,e){let o;const r=typeof t;return r==="string"?o={content:t}:t&&r==="object"?o=t:o={content:!1},o.placement=av(o,e),o.targetNodes=()=>[n],o.referenceNode=()=>n,o}let fr,Ne,lv=0;function cv(){if(fr)return;Ne=M([]),fr=Xa({name:"VTooltipDirectiveApp",setup(){return{directives:Ne}},render(){return this.directives.map(t=>$e(sv,{...t.options,shown:t.shown||t.options.shown,key:t.id}))},devtools:{hide:!0}});const n=document.createElement("div");document.body.appendChild(n),fr.mount(n)}function uv(n,t,e){cv();const o=M(rc(n,t,e)),r=M(!1),i={id:lv++,options:o,shown:r};return Ne.value.push(i),n.classList&&n.classList.add(oc),n.$_popper={options:o,item:i,show(){r.value=!0},hide(){r.value=!1}}}function ic(n){if(n.$_popper){const t=Ne.value.indexOf(n.$_popper.item);t!==-1&&Ne.value.splice(t,1),delete n.$_popper,delete n.$_popperOldShown,delete n.$_popperMountTarget}n.classList&&n.classList.remove(oc)}function Ns(n,{value:t,modifiers:e}){const o=rc(n,t,e);if(!o.content||Pe(o.theme||"tooltip","disabled"))ic(n);else{let r;n.$_popper?(r=n.$_popper,r.options.value=o):r=uv(n,t,e),typeof t.shown<"u"&&t.shown!==n.$_popperOldShown&&(n.$_popperOldShown=t.shown,t.shown?r.show():r.hide())}}const dv={beforeMount:Ns,updated:Ns,beforeUnmount(n){ic(n)}},fv=dv,sc=Xa(hg);sc.directive("tooltip",fv);sc.mount("#app");
