(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yo(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const on={},Xt=[],tt=()=>{},lc=()=>!1,wr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xo=n=>n.startsWith("onUpdate:"),wn=Object.assign,Wo=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},cc=Object.prototype.hasOwnProperty,tn=(n,t)=>cc.call(n,t),Y=Array.isArray,Wt=n=>xr(n)==="[object Map]",Bi=n=>xr(n)==="[object Set]",X=n=>typeof n=="function",gn=n=>typeof n=="string",ft=n=>typeof n=="symbol",fn=n=>n!==null&&typeof n=="object",Di=n=>(fn(n)||X(n))&&X(n.then)&&X(n.catch),Vi=Object.prototype.toString,xr=n=>Vi.call(n),uc=n=>xr(n).slice(8,-1),zi=n=>xr(n)==="[object Object]",Uo=n=>gn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,le=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},fc=/-(\w)/g,Vn=_r(n=>n.replace(fc,(t,e)=>e?e.toUpperCase():"")),dc=/\B([A-Z])/g,Ct=_r(n=>n.replace(dc,"-$1").toLowerCase()),br=_r(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yr=_r(n=>n?`on${br(n)}`:""),wt=(n,t)=>!Object.is(n,t),Xr=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Yi=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},pc=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Es;const Mr=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xt(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=gn(r)?vc(r):xt(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(gn(n)||fn(n))return n}const mc=/;(?![^(]*\))/g,hc=/:([^]+)/,gc=/\/\*[^]*?\*\//g;function vc(n){const t={};return n.replace(gc,"").split(mc).forEach(e=>{if(e){const r=e.split(hc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xn(n){let t="";if(gn(n))t=n;else if(Y(n))for(let e=0;e<n.length;e++){const r=Xn(n[e]);r&&(t+=r+" ")}else if(fn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function yc(n){if(!n)return null;let{class:t,style:e}=n;return t&&!gn(t)&&(n.class=Xn(t)),e&&(n.style=xt(e)),n}const wc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xc=Yo(wc);function Xi(n){return!!n||n===""}const Wi=n=>!!(n&&n.__v_isRef===!0),be=n=>gn(n)?n:n==null?"":Y(n)||fn(n)&&(n.toString===Vi||!X(n.toString))?Wi(n)?be(n.value):JSON.stringify(n,Ui,2):String(n),Ui=(n,t)=>Wi(t)?Ui(n,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o],s)=>(e[Wr(r,s)+" =>"]=o,e),{})}:Bi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Wr(e))}:ft(t)?Wr(t):fn(t)&&!Y(t)&&!zi(t)?String(t):t,Wr=(n,t="")=>{var e;return ft(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class _c{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tn,!t&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Tn;try{return Tn=this,t()}finally{Tn=e}}}on(){Tn=this}off(){Tn=this.parent}stop(t){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Go(){return Tn}function Gi(n,t=!1){Tn&&Tn.cleanups.push(n)}let an;const Ur=new WeakSet;class qi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ur.has(this)&&(Ur.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),Ji(this);const t=an,e=Wn;an=this,Wn=!0;try{return this.fn()}finally{Qi(this),an=t,Wn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zo(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ur.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){po(this)&&this.run()}get dirty(){return po(this)}}let Ki=0,ce,ue;function Zi(n,t=!1){if(n.flags|=8,t){n.next=ue,ue=n;return}n.next=ce,ce=n}function qo(){Ki++}function Ko(){if(--Ki>0)return;if(ue){let t=ue;for(ue=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ce;){let t=ce;for(ce=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function Ji(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qi(n){let t,e=n.depsTail,r=e;for(;r;){const o=r.prevDep;r.version===-1?(r===e&&(e=o),Zo(r),bc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=t,n.depsTail=e}function po(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(na(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function na(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Me))return;n.globalVersion=Me;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!po(n)){n.flags&=-3;return}const e=an,r=Wn;an=n,Wn=!0;try{Ji(n);const o=n.fn(n._value);(t.version===0||wt(o,n._value))&&(n._value=o,t.version++)}catch(o){throw t.version++,o}finally{an=e,Wn=r,Qi(n),n.flags&=-3}}function Zo(n,t=!1){const{dep:e,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Zo(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bc(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Wn=!0;const ta=[];function It(){ta.push(Wn),Wn=!1}function Lt(){const n=ta.pop();Wn=n===void 0?!0:n}function js(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=an;an=void 0;try{t()}finally{an=e}}}let Me=0;class Mc{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!an||!Wn||an===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==an)e=this.activeLink=new Mc(an,this),an.deps?(e.prevDep=an.depsTail,an.depsTail.nextDep=e,an.depsTail=e):an.deps=an.depsTail=e,ea(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=an.depsTail,e.nextDep=void 0,an.depsTail.nextDep=e,an.depsTail=e,an.deps===e&&(an.deps=r)}return e}trigger(t){this.version++,Me++,this.notify(t)}notify(t){qo();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ko()}}}function ea(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ea(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const mo=new WeakMap,Pt=Symbol(""),ho=Symbol(""),ke=Symbol("");function kn(n,t,e){if(Wn&&an){let r=mo.get(n);r||mo.set(n,r=new Map);let o=r.get(e);o||(r.set(e,o=new Jo),o.map=r,o.key=e),o.track()}}function ct(n,t,e,r,o,s){const i=mo.get(n);if(!i){Me++;return}const a=l=>{l&&l.trigger()};if(qo(),t==="clear")i.forEach(a);else{const l=Y(n),c=l&&Uo(e);if(l&&e==="length"){const u=Number(r);i.forEach((f,d)=>{(d==="length"||d===ke||!ft(d)&&d>=u)&&a(f)})}else switch((e!==void 0||i.has(void 0))&&a(i.get(e)),c&&a(i.get(ke)),t){case"add":l?c&&a(i.get("length")):(a(i.get(Pt)),Wt(n)&&a(i.get(ho)));break;case"delete":l||(a(i.get(Pt)),Wt(n)&&a(i.get(ho)));break;case"set":Wt(n)&&a(i.get(Pt));break}}Ko()}function zt(n){const t=nn(n);return t===n?t:(kn(t,"iterate",ke),Bn(n)?t:t.map(Cn))}function kr(n){return kn(n=nn(n),"iterate",ke),n}const kc={__proto__:null,[Symbol.iterator](){return Gr(this,Symbol.iterator,Cn)},concat(...n){return zt(this).concat(...n.map(t=>Y(t)?zt(t):t))},entries(){return Gr(this,"entries",n=>(n[1]=Cn(n[1]),n))},every(n,t){return at(this,"every",n,t,void 0,arguments)},filter(n,t){return at(this,"filter",n,t,e=>e.map(Cn),arguments)},find(n,t){return at(this,"find",n,t,Cn,arguments)},findIndex(n,t){return at(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return at(this,"findLast",n,t,Cn,arguments)},findLastIndex(n,t){return at(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return at(this,"forEach",n,t,void 0,arguments)},includes(...n){return qr(this,"includes",n)},indexOf(...n){return qr(this,"indexOf",n)},join(n){return zt(this).join(n)},lastIndexOf(...n){return qr(this,"lastIndexOf",n)},map(n,t){return at(this,"map",n,t,void 0,arguments)},pop(){return oe(this,"pop")},push(...n){return oe(this,"push",n)},reduce(n,...t){return Fs(this,"reduce",n,t)},reduceRight(n,...t){return Fs(this,"reduceRight",n,t)},shift(){return oe(this,"shift")},some(n,t){return at(this,"some",n,t,void 0,arguments)},splice(...n){return oe(this,"splice",n)},toReversed(){return zt(this).toReversed()},toSorted(n){return zt(this).toSorted(n)},toSpliced(...n){return zt(this).toSpliced(...n)},unshift(...n){return oe(this,"unshift",n)},values(){return Gr(this,"values",Cn)}};function Gr(n,t,e){const r=kr(n),o=r[t]();return r!==n&&!Bn(n)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=e(s.value)),s}),o}const Cc=Array.prototype;function at(n,t,e,r,o,s){const i=kr(n),a=i!==n&&!Bn(n),l=i[t];if(l!==Cc[t]){const f=l.apply(n,s);return a?Cn(f):f}let c=e;i!==n&&(a?c=function(f,d){return e.call(this,Cn(f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(i,c,r);return a&&o?o(u):u}function Fs(n,t,e,r){const o=kr(n);let s=e;return o!==n&&(Bn(n)?e.length>3&&(s=function(i,a,l){return e.call(this,i,a,l,n)}):s=function(i,a,l){return e.call(this,i,Cn(a),l,n)}),o[t](s,...r)}function qr(n,t,e){const r=nn(n);kn(r,"iterate",ke);const o=r[t](...e);return(o===-1||o===!1)&&es(e[0])?(e[0]=nn(e[0]),r[t](...e)):o}function oe(n,t,e=[]){It(),qo();const r=nn(n)[t].apply(n,e);return Ko(),Lt(),r}const Ic=Yo("__proto__,__v_isRef,__isVue"),ra=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ft));function Lc(n){ft(n)||(n=String(n));const t=nn(this);return kn(t,"has",n),t.hasOwnProperty(n)}class oa{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){const o=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(o?s?Pc:la:s?aa:ia).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=Y(t);if(!o){let l;if(i&&(l=kc[e]))return l;if(e==="hasOwnProperty")return Lc}const a=Reflect.get(t,e,In(t)?t:r);return(ft(e)?ra.has(e):Ic(e))||(o||kn(t,"get",e),s)?a:In(a)?i&&Uo(e)?a:a.value:fn(a)?o?ns(a):mn(a):a}}class sa extends oa{constructor(t=!1){super(!1,t)}set(t,e,r,o){let s=t[e];if(!this._isShallow){const l=Nt(s);if(!Bn(r)&&!Nt(r)&&(s=nn(s),r=nn(r)),!Y(t)&&In(s)&&!In(r))return l?!1:(s.value=r,!0)}const i=Y(t)&&Uo(e)?Number(e)<t.length:tn(t,e),a=Reflect.set(t,e,r,In(t)?t:o);return t===nn(o)&&(i?wt(r,s)&&ct(t,"set",e,r):ct(t,"add",e,r)),a}deleteProperty(t,e){const r=tn(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&r&&ct(t,"delete",e,void 0),o}has(t,e){const r=Reflect.has(t,e);return(!ft(e)||!ra.has(e))&&kn(t,"has",e),r}ownKeys(t){return kn(t,"iterate",Y(t)?"length":Pt),Reflect.ownKeys(t)}}class Oc extends oa{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Tc=new sa,$c=new Oc,Hc=new sa(!0);const go=n=>n,Ue=n=>Reflect.getPrototypeOf(n);function Sc(n,t,e){return function(...r){const o=this.__v_raw,s=nn(o),i=Wt(s),a=n==="entries"||n===Symbol.iterator&&i,l=n==="keys"&&i,c=o[n](...r),u=e?go:t?vo:Cn;return!t&&kn(s,"iterate",l?ho:Pt),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ge(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ac(n,t){const e={get(o){const s=this.__v_raw,i=nn(s),a=nn(o);n||(wt(o,a)&&kn(i,"get",o),kn(i,"get",a));const{has:l}=Ue(i),c=t?go:n?vo:Cn;if(l.call(i,o))return c(s.get(o));if(l.call(i,a))return c(s.get(a));s!==i&&s.get(o)},get size(){const o=this.__v_raw;return!n&&kn(nn(o),"iterate",Pt),Reflect.get(o,"size",o)},has(o){const s=this.__v_raw,i=nn(s),a=nn(o);return n||(wt(o,a)&&kn(i,"has",o),kn(i,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const i=this,a=i.__v_raw,l=nn(a),c=t?go:n?vo:Cn;return!n&&kn(l,"iterate",Pt),a.forEach((u,f)=>o.call(s,c(u),c(f),i))}};return wn(e,n?{add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear")}:{add(o){!t&&!Bn(o)&&!Nt(o)&&(o=nn(o));const s=nn(this);return Ue(s).has.call(s,o)||(s.add(o),ct(s,"add",o,o)),this},set(o,s){!t&&!Bn(s)&&!Nt(s)&&(s=nn(s));const i=nn(this),{has:a,get:l}=Ue(i);let c=a.call(i,o);c||(o=nn(o),c=a.call(i,o));const u=l.call(i,o);return i.set(o,s),c?wt(s,u)&&ct(i,"set",o,s):ct(i,"add",o,s),this},delete(o){const s=nn(this),{has:i,get:a}=Ue(s);let l=i.call(s,o);l||(o=nn(o),l=i.call(s,o)),a&&a.call(s,o);const c=s.delete(o);return l&&ct(s,"delete",o,void 0),c},clear(){const o=nn(this),s=o.size!==0,i=o.clear();return s&&ct(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Sc(o,n,t)}),e}function Qo(n,t){const e=Ac(n,t);return(r,o,s)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(tn(e,o)&&o in r?e:r,o,s)}const Ec={get:Qo(!1,!1)},jc={get:Qo(!1,!0)},Fc={get:Qo(!0,!1)};const ia=new WeakMap,aa=new WeakMap,la=new WeakMap,Pc=new WeakMap;function Rc(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nc(n){return n.__v_skip||!Object.isExtensible(n)?0:Rc(uc(n))}function mn(n){return Nt(n)?n:ts(n,!1,Tc,Ec,ia)}function Bc(n){return ts(n,!1,Hc,jc,aa)}function ns(n){return ts(n,!0,$c,Fc,la)}function ts(n,t,e,r,o){if(!fn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=o.get(n);if(s)return s;const i=Nc(n);if(i===0)return n;const a=new Proxy(n,i===2?r:e);return o.set(n,a),a}function Ut(n){return Nt(n)?Ut(n.__v_raw):!!(n&&n.__v_isReactive)}function Nt(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function es(n){return n?!!n.__v_raw:!1}function nn(n){const t=n&&n.__v_raw;return t?nn(t):n}function Dc(n){return!tn(n,"__v_skip")&&Object.isExtensible(n)&&Yi(n,"__v_skip",!0),n}const Cn=n=>fn(n)?mn(n):n,vo=n=>fn(n)?ns(n):n;function In(n){return n?n.__v_isRef===!0:!1}function O(n){return ca(n,!1)}function yo(n){return ca(n,!0)}function ca(n,t){return In(n)?n:new Vc(n,t)}class Vc{constructor(t,e){this.dep=new Jo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:nn(t),this._value=e?t:Cn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||Bn(t)||Nt(t);t=r?t:nn(t),wt(t,e)&&(this._rawValue=t,this._value=r?t:Cn(t),this.dep.trigger())}}function y(n){return In(n)?n.value:n}const zc={get:(n,t,e)=>t==="__v_raw"?n:y(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return In(o)&&!In(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function ua(n){return Ut(n)?n:new Proxy(n,zc)}class Yc{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Me-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&an!==this)return Zi(this,!0),!0}get value(){const t=this.dep.track();return na(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xc(n,t,e=!1){let r,o;return X(n)?r=n:(r=n.get,o=n.set),new Yc(r,o,e)}const qe={},lr=new WeakMap;let Et;function Wc(n,t=!1,e=Et){if(e){let r=lr.get(e);r||lr.set(e,r=[]),r.push(n)}}function Uc(n,t,e=on){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:a,call:l}=e,c=L=>o?L:Bn(L)||o===!1||o===0?ut(L,1):ut(L);let u,f,d,m,g=!1,x=!1;if(In(n)?(f=()=>n.value,g=Bn(n)):Ut(n)?(f=()=>c(n),g=!0):Y(n)?(x=!0,g=n.some(L=>Ut(L)||Bn(L)),f=()=>n.map(L=>{if(In(L))return L.value;if(Ut(L))return c(L);if(X(L))return l?l(L,2):L()})):X(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){It();try{d()}finally{Lt()}}const L=Et;Et=u;try{return l?l(n,3,[m]):n(m)}finally{Et=L}}:f=tt,t&&o){const L=f,R=o===!0?1/0:o;f=()=>ut(L(),R)}const A=Go(),M=()=>{u.stop(),A&&Wo(A.effects,u)};if(s&&t){const L=t;t=(...R)=>{L(...R),M()}}let C=x?new Array(n.length).fill(qe):qe;const I=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(t){const R=u.run();if(o||g||(x?R.some((U,G)=>wt(U,C[G])):wt(R,C))){d&&d();const U=Et;Et=u;try{const G=[R,C===qe?void 0:x&&C[0]===qe?[]:C,m];l?l(t,3,G):t(...G),C=R}finally{Et=U}}}else u.run()};return a&&a(I),u=new qi(f),u.scheduler=i?()=>i(I,!1):I,m=L=>Wc(L,!1,u),d=u.onStop=()=>{const L=lr.get(u);if(L){if(l)l(L,4);else for(const R of L)R();lr.delete(u)}},t?r?I(!0):C=u.run():i?i(I.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function ut(n,t=1/0,e){if(t<=0||!fn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,In(n))ut(n.value,t,e);else if(Y(n))for(let r=0;r<n.length;r++)ut(n[r],t,e);else if(Bi(n)||Wt(n))n.forEach(r=>{ut(r,t,e)});else if(zi(n)){for(const r in n)ut(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&ut(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Be(n,t,e,r){try{return r?n(...r):n()}catch(o){Cr(o,t,e)}}function ot(n,t,e,r){if(X(n)){const o=Be(n,t,e,r);return o&&Di(o)&&o.catch(s=>{Cr(s,t,e)}),o}if(Y(n)){const o=[];for(let s=0;s<n.length;s++)o.push(ot(n[s],t,e,r));return o}}function Cr(n,t,e,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||on;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){It(),Be(s,null,10,[n,l,c]),Lt();return}}Gc(n,e,o,r,i)}function Gc(n,t,e,r=!0,o=!1){if(o)throw n;console.error(n)}const $n=[];let Qn=-1;const Gt=[];let gt=null,Yt=0;const fa=Promise.resolve();let cr=null;function Ir(n){const t=cr||fa;return n?t.then(this?n.bind(this):n):t}function qc(n){let t=Qn+1,e=$n.length;for(;t<e;){const r=t+e>>>1,o=$n[r],s=Ce(o);s<n||s===n&&o.flags&2?t=r+1:e=r}return t}function rs(n){if(!(n.flags&1)){const t=Ce(n),e=$n[$n.length-1];!e||!(n.flags&2)&&t>=Ce(e)?$n.push(n):$n.splice(qc(t),0,n),n.flags|=1,da()}}function da(){cr||(cr=fa.then(ma))}function Kc(n){Y(n)?Gt.push(...n):gt&&n.id===-1?gt.splice(Yt+1,0,n):n.flags&1||(Gt.push(n),n.flags|=1),da()}function Ps(n,t,e=Qn+1){for(;e<$n.length;e++){const r=$n[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;$n.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pa(n){if(Gt.length){const t=[...new Set(Gt)].sort((e,r)=>Ce(e)-Ce(r));if(Gt.length=0,gt){gt.push(...t);return}for(gt=t,Yt=0;Yt<gt.length;Yt++){const e=gt[Yt];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gt=null,Yt=0}}const Ce=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ma(n){try{for(Qn=0;Qn<$n.length;Qn++){const t=$n[Qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Be(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qn<$n.length;Qn++){const t=$n[Qn];t&&(t.flags&=-2)}Qn=-1,$n.length=0,pa(),cr=null,($n.length||Gt.length)&&ma()}}let yn=null,Lr=null;function ur(n){const t=yn;return yn=n,Lr=n&&n.type.__scopeId||null,t}function Zc(n){Lr=n}function Jc(){Lr=null}const Qc=n=>ln;function ln(n,t=yn,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&Ws(-1);const s=ur(t);let i;try{i=n(...o)}finally{ur(s),r._d&&Ws(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Kr(n,t){if(yn===null)return n;const e=Ar(yn),r=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[s,i,a,l=on]=t[o];s&&(X(s)&&(s={mounted:s,updated:s}),s.deep&&ut(i),r.push({dir:s,instance:e,value:i,oldValue:void 0,arg:a,modifiers:l}))}return n}function Tt(n,t,e,r){const o=n.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[r];l&&(It(),ot(l,e,8,[n.el,a,n,t]),Lt())}}const nu=Symbol("_vte"),tu=n=>n.__isTeleport;function os(n,t){n.shapeFlag&6&&n.component?(n.transition=t,os(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ne(n,t){return X(n)?wn({name:n.name},t,{setup:n}):n}function ha(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wo(n,t,e,r,o=!1){if(Y(n)){n.forEach((g,x)=>wo(g,t&&(Y(t)?t[x]:t),e,r,o));return}if(qt(r)&&!o)return;const s=r.shapeFlag&4?Ar(r.component):r.el,i=o?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===on?a.refs={}:a.refs,f=a.setupState,d=nn(f),m=f===on?()=>!1:g=>tn(d,g);if(c!=null&&c!==l&&(gn(c)?(u[c]=null,m(c)&&(f[c]=null)):In(c)&&(c.value=null)),X(l))Be(l,a,12,[i,u]);else{const g=gn(l),x=In(l);if(g||x){const A=()=>{if(n.f){const M=g?m(l)?f[l]:u[l]:l.value;o?Y(M)&&Wo(M,s):Y(M)?M.includes(s)||M.push(s):g?(u[l]=[s],m(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=i,m(l)&&(f[l]=i)):x&&(l.value=i,n.k&&(u[n.k]=i))};i?(A.id=-1,Fn(A,e)):A()}}}Mr().requestIdleCallback;Mr().cancelIdleCallback;const qt=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function eu(n,t){va(n,"a",t)}function ru(n,t){va(n,"da",t)}function va(n,t,e=_n){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Or(t,r,e),e){let o=e.parent;for(;o&&o.parent;)ga(o.parent.vnode)&&ou(r,t,e,o),o=o.parent}}function ou(n,t,e,r){const o=Or(t,n,r,!0);Tr(()=>{Wo(r[t],o)},e)}function Or(n,t,e=_n,r=!1){if(e){const o=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...i)=>{It();const a=De(e),l=ot(t,e,n,i);return a(),Lt(),l});return r?o.unshift(s):o.push(s),s}}const dt=n=>(t,e=_n)=>{(!$e||n==="sp")&&Or(n,(...r)=>t(...r),e)},su=dt("bm"),Hn=dt("m"),iu=dt("bu"),ya=dt("u"),au=dt("bum"),Tr=dt("um"),lu=dt("sp"),cu=dt("rtg"),uu=dt("rtc");function fu(n,t=_n){Or("ec",n,t)}const ss="components",du="directives";function Ie(n,t){return is(ss,n,!0,t)||n}const wa=Symbol.for("v-ndc");function pu(n){return gn(n)?is(ss,n,!1)||n:n||wa}function mu(n){return is(du,n)}function is(n,t,e=!0,r=!1){const o=yn||_n;if(o){const s=o.type;if(n===ss){const a=nf(s,!1);if(a&&(a===t||a===Vn(t)||a===br(Vn(t))))return s}const i=Rs(o[n]||s[n],t)||Rs(o.appContext[n],t);return!i&&r?s:i}}function Rs(n,t){return n&&(n[t]||n[Vn(t)]||n[br(Vn(t))])}function pt(n,t,e,r){let o;const s=e,i=Y(n);if(i||gn(n)){const a=i&&Ut(n);let l=!1;a&&(l=!Bn(n),n=kr(n)),o=new Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=t(l?Cn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){o=new Array(n);for(let a=0;a<n;a++)o[a]=t(a+1,a,void 0,s)}else if(fn(n))if(n[Symbol.iterator])o=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];o[l]=t(n[u],u,l,s)}}else o=[];return o}function Le(n,t,e={},r,o){if(yn.ce||yn.parent&&qt(yn.parent)&&yn.parent.ce)return t!=="default"&&(e.name=t),w(),st(pn,null,[S("slot",e,r)],64);let s=n[t];s&&s._c&&(s._d=!1),w();const i=s&&xa(s(e)),a=e.key||i&&i.key,l=st(pn,{key:(a&&!ft(a)?a:`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function xa(n){return n.some(t=>Te(t)?!(t.type===Mt||t.type===pn&&!xa(t.children)):!0)?n:null}const xo=n=>n?Da(n)?Ar(n):xo(n.parent):null,fe=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xo(n.parent),$root:n=>xo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>as(n),$forceUpdate:n=>n.f||(n.f=()=>{rs(n.update)}),$nextTick:n=>n.n||(n.n=Ir.bind(n.proxy)),$watch:n=>Ru.bind(n)}),Zr=(n,t)=>n!==on&&!n.__isScriptSetup&&tn(n,t),hu={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return s[t]}else{if(Zr(r,t))return i[t]=1,r[t];if(o!==on&&tn(o,t))return i[t]=2,o[t];if((c=n.propsOptions[0])&&tn(c,t))return i[t]=3,s[t];if(e!==on&&tn(e,t))return i[t]=4,e[t];_o&&(i[t]=0)}}const u=fe[t];let f,d;if(u)return t==="$attrs"&&kn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==on&&tn(e,t))return i[t]=4,e[t];if(d=l.config.globalProperties,tn(d,t))return d[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:s}=n;return Zr(o,t)?(o[t]=e,!0):r!==on&&tn(r,t)?(r[t]=e,!0):tn(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!e[i]||n!==on&&tn(n,i)||Zr(t,i)||(a=s[0])&&tn(a,i)||tn(r,i)||tn(fe,i)||tn(o.config.globalProperties,i)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:tn(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function gu(){return vu().slots}function vu(){const n=Sr();return n.setupContext||(n.setupContext=za(n))}function Ns(n){return Y(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let _o=!0;function yu(n){const t=as(n),e=n.proxy,r=n.ctx;_o=!1,t.beforeCreate&&Bs(t.beforeCreate,n,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:x,deactivated:A,beforeDestroy:M,beforeUnmount:C,destroyed:I,unmounted:L,render:R,renderTracked:U,renderTriggered:G,errorCaptured:un,serverPrefetch:rn,expose:Q,inheritAttrs:hn,components:vn,directives:xn,filters:dn}=t;if(c&&wu(c,r,null),i)for(const K in i){const q=i[K];X(q)&&(r[K]=q.bind(e))}if(o){const K=o.call(e,e);fn(K)&&(n.data=mn(K))}if(_o=!0,s)for(const K in s){const q=s[K],bn=X(q)?q.bind(e,e):X(q.get)?q.get.bind(e,e):tt,Vt=!X(q)&&X(q.set)?q.set.bind(e):tt,Ot=Dn({get:bn,set:Vt});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Gn=>Ot.value=Gn})}if(a)for(const K in a)_a(a[K],r,e,K);if(l){const K=X(l)?l.call(e):l;Reflect.ownKeys(K).forEach(q=>{Cu(q,K[q])})}u&&Bs(u,n,"c");function cn(K,q){Y(q)?q.forEach(bn=>K(bn.bind(e))):q&&K(q.bind(e))}if(cn(su,f),cn(Hn,d),cn(iu,m),cn(ya,g),cn(eu,x),cn(ru,A),cn(fu,un),cn(uu,U),cn(cu,G),cn(au,C),cn(Tr,L),cn(lu,rn),Y(Q))if(Q.length){const K=n.exposed||(n.exposed={});Q.forEach(q=>{Object.defineProperty(K,q,{get:()=>e[q],set:bn=>e[q]=bn})})}else n.exposed||(n.exposed={});R&&n.render===tt&&(n.render=R),hn!=null&&(n.inheritAttrs=hn),vn&&(n.components=vn),xn&&(n.directives=xn),rn&&ha(n)}function wu(n,t,e=tt){Y(n)&&(n=bo(n));for(const r in n){const o=n[r];let s;fn(o)?"default"in o?s=de(o.from||r,o.default,!0):s=de(o.from||r):s=de(o),In(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function Bs(n,t,e){ot(Y(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function _a(n,t,e,r){let o=r.includes(".")?ja(e,r):()=>e[r];if(gn(n)){const s=t[n];X(s)&&Ln(o,s)}else if(X(n))Ln(o,n.bind(e));else if(fn(n))if(Y(n))n.forEach(s=>_a(s,t,e,r));else{const s=X(n.handler)?n.handler.bind(e):t[n.handler];X(s)&&Ln(o,s,n)}}function as(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=n.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!e&&!r?l=t:(l={},o.length&&o.forEach(c=>fr(l,c,i,!0)),fr(l,t,i)),fn(t)&&s.set(t,l),l}function fr(n,t,e,r=!1){const{mixins:o,extends:s}=t;s&&fr(n,s,e,!0),o&&o.forEach(i=>fr(n,i,e,!0));for(const i in t)if(!(r&&i==="expose")){const a=xu[i]||e&&e[i];n[i]=a?a(n[i],t[i]):t[i]}return n}const xu={data:Ds,props:Vs,emits:Vs,methods:ae,computed:ae,beforeCreate:On,created:On,beforeMount:On,mounted:On,beforeUpdate:On,updated:On,beforeDestroy:On,beforeUnmount:On,destroyed:On,unmounted:On,activated:On,deactivated:On,errorCaptured:On,serverPrefetch:On,components:ae,directives:ae,watch:bu,provide:Ds,inject:_u};function Ds(n,t){return t?n?function(){return wn(X(n)?n.call(this,this):n,X(t)?t.call(this,this):t)}:t:n}function _u(n,t){return ae(bo(n),bo(t))}function bo(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function On(n,t){return n?[...new Set([].concat(n,t))]:t}function ae(n,t){return n?wn(Object.create(null),n,t):t}function Vs(n,t){return n?Y(n)&&Y(t)?[...new Set([...n,...t])]:wn(Object.create(null),Ns(n),Ns(t??{})):t}function bu(n,t){if(!n)return t;if(!t)return n;const e=wn(Object.create(null),n);for(const r in t)e[r]=On(n[r],t[r]);return e}function ba(){return{app:null,config:{isNativeTag:lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function ku(n,t){return function(r,o=null){X(r)||(r=wn({},r)),o!=null&&!fn(o)&&(o=null);const s=ba(),i=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Mu++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:ef,get config(){return s.config},set config(u){},use(u,...f){return i.has(u)||(u&&X(u.install)?(i.add(u),u.install(c,...f)):X(u)&&(i.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||S(r,o);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(m,u):n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Ar(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ot(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Kt;Kt=c;try{return u()}finally{Kt=f}}};return c}}let Kt=null;function Cu(n,t){if(_n){let e=_n.provides;const r=_n.parent&&_n.parent.provides;r===e&&(e=_n.provides=Object.create(r)),e[n]=t}}function de(n,t,e=!1){const r=_n||yn;if(r||Kt){const o=Kt?Kt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return e&&X(t)?t.call(r&&r.proxy):t}}const Ma={},ka=()=>Object.create(Ma),Ca=n=>Object.getPrototypeOf(n)===Ma;function Iu(n,t,e,r=!1){const o={},s=ka();n.propsDefaults=Object.create(null),Ia(n,t,o,s);for(const i in n.propsOptions[0])i in o||(o[i]=void 0);e?n.props=r?o:Bc(o):n.type.props?n.props=o:n.props=s,n.attrs=s}function Lu(n,t,e,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=n,a=nn(o),[l]=n.propsOptions;let c=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($r(n.emitsOptions,d))continue;const m=t[d];if(l)if(tn(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=Vn(d);o[g]=Mo(l,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Ia(n,t,o,s)&&(c=!0);let u;for(const f in a)(!t||!tn(t,f)&&((u=Ct(f))===f||!tn(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(o[f]=Mo(l,a,f,void 0,n,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!tn(t,f))&&(delete s[f],c=!0)}c&&ct(n.attrs,"set","")}function Ia(n,t,e,r){const[o,s]=n.propsOptions;let i=!1,a;if(t)for(let l in t){if(le(l))continue;const c=t[l];let u;o&&tn(o,u=Vn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:$r(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,i=!0)}if(s){const l=nn(e),c=a||on;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Mo(o,l,f,c[f],n,!tn(c,f))}}return i}function Mo(n,t,e,r,o,s){const i=n[e];if(i!=null){const a=tn(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&X(l)){const{propsDefaults:c}=o;if(e in c)r=c[e];else{const u=De(o);r=c[e]=l.call(null,t),u()}}else r=l;o.ce&&o.ce._setProp(e,r)}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===Ct(e))&&(r=!0))}return r}const Ou=new WeakMap;function La(n,t,e=!1){const r=e?Ou:t.propsCache,o=r.get(n);if(o)return o;const s=n.props,i={},a=[];let l=!1;if(!X(n)){const u=f=>{l=!0;const[d,m]=La(f,t,!0);wn(i,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return fn(n)&&r.set(n,Xt),Xt;if(Y(s))for(let u=0;u<s.length;u++){const f=Vn(s[u]);zs(f)&&(i[f]=on)}else if(s)for(const u in s){const f=Vn(u);if(zs(f)){const d=s[u],m=i[f]=Y(d)||X(d)?{type:d}:wn({},d),g=m.type;let x=!1,A=!0;if(Y(g))for(let M=0;M<g.length;++M){const C=g[M],I=X(C)&&C.name;if(I==="Boolean"){x=!0;break}else I==="String"&&(A=!1)}else x=X(g)&&g.name==="Boolean";m[0]=x,m[1]=A,(x||tn(m,"default"))&&a.push(f)}}const c=[i,a];return fn(n)&&r.set(n,c),c}function zs(n){return n[0]!=="$"&&!le(n)}const Oa=n=>n[0]==="_"||n==="$stable",ls=n=>Y(n)?n.map(nt):[nt(n)],Tu=(n,t,e)=>{if(t._n)return t;const r=ln((...o)=>ls(t(...o)),e);return r._c=!1,r},Ta=(n,t,e)=>{const r=n._ctx;for(const o in n){if(Oa(o))continue;const s=n[o];if(X(s))t[o]=Tu(o,s,r);else if(s!=null){const i=ls(s);t[o]=()=>i}}},$a=(n,t)=>{const e=ls(t);n.slots.default=()=>e},Ha=(n,t,e)=>{for(const r in t)(e||r!=="_")&&(n[r]=t[r])},$u=(n,t,e)=>{const r=n.slots=ka();if(n.vnode.shapeFlag&32){const o=t._;o?(Ha(r,t,e),e&&Yi(r,"_",o,!0)):Ta(t,r)}else t&&$a(n,t)},Hu=(n,t,e)=>{const{vnode:r,slots:o}=n;let s=!0,i=on;if(r.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Ha(o,t,e):(s=!t.$stable,Ta(t,o)),i=t}else t&&($a(n,t),i={default:1});if(s)for(const a in o)!Oa(a)&&i[a]==null&&delete o[a]},Fn=Xu;function Su(n){return Au(n)}function Au(n,t){const e=Mr();e.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=tt,insertStaticContent:g}=n,x=(p,h,v,$=null,k=null,T=null,F=void 0,j=null,E=!!h.dynamicChildren)=>{if(p===h)return;p&&!se(p,h)&&($=We(p),Gn(p,k,T,!0),p=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:H,ref:V,shapeFlag:P}=h;switch(H){case Hr:A(p,h,v,$);break;case Mt:M(p,h,v,$);break;case no:p==null&&C(h,v,$,F);break;case pn:vn(p,h,v,$,k,T,F,j,E);break;default:P&1?R(p,h,v,$,k,T,F,j,E):P&6?xn(p,h,v,$,k,T,F,j,E):(P&64||P&128)&&H.process(p,h,v,$,k,T,F,j,E,ee)}V!=null&&k&&wo(V,p&&p.ref,T,h||p,!h)},A=(p,h,v,$)=>{if(p==null)r(h.el=a(h.children),v,$);else{const k=h.el=p.el;h.children!==p.children&&c(k,h.children)}},M=(p,h,v,$)=>{p==null?r(h.el=l(h.children||""),v,$):h.el=p.el},C=(p,h,v,$)=>{[p.el,p.anchor]=g(p.children,h,v,$,p.el,p.anchor)},I=({el:p,anchor:h},v,$)=>{let k;for(;p&&p!==h;)k=d(p),r(p,v,$),p=k;r(h,v,$)},L=({el:p,anchor:h})=>{let v;for(;p&&p!==h;)v=d(p),o(p),p=v;o(h)},R=(p,h,v,$,k,T,F,j,E)=>{h.type==="svg"?F="svg":h.type==="math"&&(F="mathml"),p==null?U(h,v,$,k,T,F,j,E):rn(p,h,k,T,F,j,E)},U=(p,h,v,$,k,T,F,j)=>{let E,H;const{props:V,shapeFlag:P,transition:D,dirs:z}=p;if(E=p.el=i(p.type,T,V&&V.is,V),P&8?u(E,p.children):P&16&&un(p.children,E,null,$,k,Jr(p,T),F,j),z&&Tt(p,null,$,"created"),G(E,p,p.scopeId,F,$),V){for(const sn in V)sn!=="value"&&!le(sn)&&s(E,sn,null,V[sn],T,$);"value"in V&&s(E,"value",null,V.value,T),(H=V.onVnodeBeforeMount)&&Kn(H,$,p)}z&&Tt(p,null,$,"beforeMount");const Z=Eu(k,D);Z&&D.beforeEnter(E),r(E,h,v),((H=V&&V.onVnodeMounted)||Z||z)&&Fn(()=>{H&&Kn(H,$,p),Z&&D.enter(E),z&&Tt(p,null,$,"mounted")},k)},G=(p,h,v,$,k)=>{if(v&&m(p,v),$)for(let T=0;T<$.length;T++)m(p,$[T]);if(k){let T=k.subTree;if(h===T||Pa(T.type)&&(T.ssContent===h||T.ssFallback===h)){const F=k.vnode;G(p,F,F.scopeId,F.slotScopeIds,k.parent)}}},un=(p,h,v,$,k,T,F,j,E=0)=>{for(let H=E;H<p.length;H++){const V=p[H]=j?vt(p[H]):nt(p[H]);x(null,V,h,v,$,k,T,F,j)}},rn=(p,h,v,$,k,T,F)=>{const j=h.el=p.el;let{patchFlag:E,dynamicChildren:H,dirs:V}=h;E|=p.patchFlag&16;const P=p.props||on,D=h.props||on;let z;if(v&&$t(v,!1),(z=D.onVnodeBeforeUpdate)&&Kn(z,v,h,p),V&&Tt(h,p,v,"beforeUpdate"),v&&$t(v,!0),(P.innerHTML&&D.innerHTML==null||P.textContent&&D.textContent==null)&&u(j,""),H?Q(p.dynamicChildren,H,j,v,$,Jr(h,k),T):F||q(p,h,j,null,v,$,Jr(h,k),T,!1),E>0){if(E&16)hn(j,P,D,v,k);else if(E&2&&P.class!==D.class&&s(j,"class",null,D.class,k),E&4&&s(j,"style",P.style,D.style,k),E&8){const Z=h.dynamicProps;for(let sn=0;sn<Z.length;sn++){const en=Z[sn],An=P[en],Mn=D[en];(Mn!==An||en==="value")&&s(j,en,An,Mn,k,v)}}E&1&&p.children!==h.children&&u(j,h.children)}else!F&&H==null&&hn(j,P,D,v,k);((z=D.onVnodeUpdated)||V)&&Fn(()=>{z&&Kn(z,v,h,p),V&&Tt(h,p,v,"updated")},$)},Q=(p,h,v,$,k,T,F)=>{for(let j=0;j<h.length;j++){const E=p[j],H=h[j],V=E.el&&(E.type===pn||!se(E,H)||E.shapeFlag&70)?f(E.el):v;x(E,H,V,null,$,k,T,F,!0)}},hn=(p,h,v,$,k)=>{if(h!==v){if(h!==on)for(const T in h)!le(T)&&!(T in v)&&s(p,T,h[T],null,k,$);for(const T in v){if(le(T))continue;const F=v[T],j=h[T];F!==j&&T!=="value"&&s(p,T,j,F,k,$)}"value"in v&&s(p,"value",h.value,v.value,k)}},vn=(p,h,v,$,k,T,F,j,E)=>{const H=h.el=p?p.el:a(""),V=h.anchor=p?p.anchor:a("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:z}=h;z&&(j=j?j.concat(z):z),p==null?(r(H,v,$),r(V,v,$),un(h.children||[],v,V,k,T,F,j,E)):P>0&&P&64&&D&&p.dynamicChildren?(Q(p.dynamicChildren,D,v,k,T,F,j),(h.key!=null||k&&h===k.subTree)&&Sa(p,h,!0)):q(p,h,v,V,k,T,F,j,E)},xn=(p,h,v,$,k,T,F,j,E)=>{h.slotScopeIds=j,p==null?h.shapeFlag&512?k.ctx.activate(h,v,$,F,E):dn(h,v,$,k,T,F,E):Rn(p,h,E)},dn=(p,h,v,$,k,T,F)=>{const j=p.component=Ku(p,$,k);if(ga(p)&&(j.ctx.renderer=ee),Zu(j,!1,F),j.asyncDep){if(k&&k.registerDep(j,cn,F),!p.el){const E=j.subTree=S(Mt);M(null,E,h,v)}}else cn(j,p,h,v,k,T,F)},Rn=(p,h,v)=>{const $=h.component=p.component;if(zu(p,h,v))if($.asyncDep&&!$.asyncResolved){K($,h,v);return}else $.next=h,$.update();else h.el=p.el,$.vnode=h},cn=(p,h,v,$,k,T,F)=>{const j=()=>{if(p.isMounted){let{next:P,bu:D,u:z,parent:Z,vnode:sn}=p;{const En=Aa(p);if(En){P&&(P.el=sn.el,K(p,P,F)),En.asyncDep.then(()=>{p.isUnmounted||j()});return}}let en=P,An;$t(p,!1),P?(P.el=sn.el,K(p,P,F)):P=sn,D&&Xr(D),(An=P.props&&P.props.onVnodeBeforeUpdate)&&Kn(An,Z,P,sn),$t(p,!0);const Mn=Qr(p),zn=p.subTree;p.subTree=Mn,x(zn,Mn,f(zn.el),We(zn),p,k,T),P.el=Mn.el,en===null&&Yu(p,Mn.el),z&&Fn(z,k),(An=P.props&&P.props.onVnodeUpdated)&&Fn(()=>Kn(An,Z,P,sn),k)}else{let P;const{el:D,props:z}=h,{bm:Z,m:sn,parent:en,root:An,type:Mn}=p,zn=qt(h);if($t(p,!1),Z&&Xr(Z),!zn&&(P=z&&z.onVnodeBeforeMount)&&Kn(P,en,h),$t(p,!0),D&&Hs){const En=()=>{p.subTree=Qr(p),Hs(D,p.subTree,p,k,null)};zn&&Mn.__asyncHydrate?Mn.__asyncHydrate(D,p,En):En()}else{An.ce&&An.ce._injectChildStyle(Mn);const En=p.subTree=Qr(p);x(null,En,v,$,p,k,T),h.el=En.el}if(sn&&Fn(sn,k),!zn&&(P=z&&z.onVnodeMounted)){const En=h;Fn(()=>Kn(P,en,En),k)}(h.shapeFlag&256||en&&qt(en.vnode)&&en.vnode.shapeFlag&256)&&p.a&&Fn(p.a,k),p.isMounted=!0,h=v=$=null}};p.scope.on();const E=p.effect=new qi(j);p.scope.off();const H=p.update=E.run.bind(E),V=p.job=E.runIfDirty.bind(E);V.i=p,V.id=p.uid,E.scheduler=()=>rs(V),$t(p,!0),H()},K=(p,h,v)=>{h.component=p;const $=p.vnode.props;p.vnode=h,p.next=null,Lu(p,h.props,$,v),Hu(p,h.children,v),It(),Ps(p),Lt()},q=(p,h,v,$,k,T,F,j,E=!1)=>{const H=p&&p.children,V=p?p.shapeFlag:0,P=h.children,{patchFlag:D,shapeFlag:z}=h;if(D>0){if(D&128){Vt(H,P,v,$,k,T,F,j,E);return}else if(D&256){bn(H,P,v,$,k,T,F,j,E);return}}z&8?(V&16&&te(H,k,T),P!==H&&u(v,P)):V&16?z&16?Vt(H,P,v,$,k,T,F,j,E):te(H,k,T,!0):(V&8&&u(v,""),z&16&&un(P,v,$,k,T,F,j,E))},bn=(p,h,v,$,k,T,F,j,E)=>{p=p||Xt,h=h||Xt;const H=p.length,V=h.length,P=Math.min(H,V);let D;for(D=0;D<P;D++){const z=h[D]=E?vt(h[D]):nt(h[D]);x(p[D],z,v,null,k,T,F,j,E)}H>V?te(p,k,T,!0,!1,P):un(h,v,$,k,T,F,j,E,P)},Vt=(p,h,v,$,k,T,F,j,E)=>{let H=0;const V=h.length;let P=p.length-1,D=V-1;for(;H<=P&&H<=D;){const z=p[H],Z=h[H]=E?vt(h[H]):nt(h[H]);if(se(z,Z))x(z,Z,v,null,k,T,F,j,E);else break;H++}for(;H<=P&&H<=D;){const z=p[P],Z=h[D]=E?vt(h[D]):nt(h[D]);if(se(z,Z))x(z,Z,v,null,k,T,F,j,E);else break;P--,D--}if(H>P){if(H<=D){const z=D+1,Z=z<V?h[z].el:$;for(;H<=D;)x(null,h[H]=E?vt(h[H]):nt(h[H]),v,Z,k,T,F,j,E),H++}}else if(H>D)for(;H<=P;)Gn(p[H],k,T,!0),H++;else{const z=H,Z=H,sn=new Map;for(H=Z;H<=D;H++){const jn=h[H]=E?vt(h[H]):nt(h[H]);jn.key!=null&&sn.set(jn.key,H)}let en,An=0;const Mn=D-Z+1;let zn=!1,En=0;const re=new Array(Mn);for(H=0;H<Mn;H++)re[H]=0;for(H=z;H<=P;H++){const jn=p[H];if(An>=Mn){Gn(jn,k,T,!0);continue}let qn;if(jn.key!=null)qn=sn.get(jn.key);else for(en=Z;en<=D;en++)if(re[en-Z]===0&&se(jn,h[en])){qn=en;break}qn===void 0?Gn(jn,k,T,!0):(re[qn-Z]=H+1,qn>=En?En=qn:zn=!0,x(jn,h[qn],v,null,k,T,F,j,E),An++)}const Ss=zn?ju(re):Xt;for(en=Ss.length-1,H=Mn-1;H>=0;H--){const jn=Z+H,qn=h[jn],As=jn+1<V?h[jn+1].el:$;re[H]===0?x(null,qn,v,As,k,T,F,j,E):zn&&(en<0||H!==Ss[en]?Ot(qn,v,As,2):en--)}}},Ot=(p,h,v,$,k=null)=>{const{el:T,type:F,transition:j,children:E,shapeFlag:H}=p;if(H&6){Ot(p.component.subTree,h,v,$);return}if(H&128){p.suspense.move(h,v,$);return}if(H&64){F.move(p,h,v,ee);return}if(F===pn){r(T,h,v);for(let P=0;P<E.length;P++)Ot(E[P],h,v,$);r(p.anchor,h,v);return}if(F===no){I(p,h,v);return}if($!==2&&H&1&&j)if($===0)j.beforeEnter(T),r(T,h,v),Fn(()=>j.enter(T),k);else{const{leave:P,delayLeave:D,afterLeave:z}=j,Z=()=>r(T,h,v),sn=()=>{P(T,()=>{Z(),z&&z()})};D?D(T,Z,sn):sn()}else r(T,h,v)},Gn=(p,h,v,$=!1,k=!1)=>{const{type:T,props:F,ref:j,children:E,dynamicChildren:H,shapeFlag:V,patchFlag:P,dirs:D,cacheIndex:z}=p;if(P===-2&&(k=!1),j!=null&&wo(j,null,v,p,!0),z!=null&&(h.renderCache[z]=void 0),V&256){h.ctx.deactivate(p);return}const Z=V&1&&D,sn=!qt(p);let en;if(sn&&(en=F&&F.onVnodeBeforeUnmount)&&Kn(en,h,p),V&6)ac(p.component,v,$);else{if(V&128){p.suspense.unmount(v,$);return}Z&&Tt(p,null,h,"beforeUnmount"),V&64?p.type.remove(p,h,v,ee,$):H&&!H.hasOnce&&(T!==pn||P>0&&P&64)?te(H,h,v,!1,!0):(T===pn&&P&384||!k&&V&16)&&te(E,h,v),$&&Os(p)}(sn&&(en=F&&F.onVnodeUnmounted)||Z)&&Fn(()=>{en&&Kn(en,h,p),Z&&Tt(p,null,h,"unmounted")},v)},Os=p=>{const{type:h,el:v,anchor:$,transition:k}=p;if(h===pn){ic(v,$);return}if(h===no){L(p);return}const T=()=>{o(v),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:F,delayLeave:j}=k,E=()=>F(v,T);j?j(p.el,T,E):E()}else T()},ic=(p,h)=>{let v;for(;p!==h;)v=d(p),o(p),p=v;o(h)},ac=(p,h,v)=>{const{bum:$,scope:k,job:T,subTree:F,um:j,m:E,a:H}=p;Ys(E),Ys(H),$&&Xr($),k.stop(),T&&(T.flags|=8,Gn(F,p,h,v)),j&&Fn(j,h),Fn(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},te=(p,h,v,$=!1,k=!1,T=0)=>{for(let F=T;F<p.length;F++)Gn(p[F],h,v,$,k)},We=p=>{if(p.shapeFlag&6)return We(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=d(p.anchor||p.el),v=h&&h[nu];return v?d(v):h};let zr=!1;const Ts=(p,h,v)=>{p==null?h._vnode&&Gn(h._vnode,null,null,!0):x(h._vnode||null,p,h,null,null,null,v),h._vnode=p,zr||(zr=!0,Ps(),pa(),zr=!1)},ee={p:x,um:Gn,m:Ot,r:Os,mt:dn,mc:un,pc:q,pbc:Q,n:We,o:n};let $s,Hs;return{render:Ts,hydrate:$s,createApp:ku(Ts,$s)}}function Jr({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function $t({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Eu(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sa(n,t,e=!1){const r=n.children,o=t.children;if(Y(r)&&Y(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=vt(o[s]),a.el=i.el),!e&&a.patchFlag!==-2&&Sa(i,a)),a.type===Hr&&(a.el=i.el)}}function ju(n){const t=n.slice(),e=[0];let r,o,s,i,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(o=e[e.length-1],n[o]<c){t[r]=o,e.push(r);continue}for(s=0,i=e.length-1;s<i;)a=s+i>>1,n[e[a]]<c?s=a+1:i=a;c<n[e[s]]&&(s>0&&(t[r]=e[s-1]),e[s]=r)}}for(s=e.length,i=e[s-1];s-- >0;)e[s]=i,i=t[i];return e}function Aa(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Aa(t)}function Ys(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Fu=Symbol.for("v-scx"),Pu=()=>de(Fu);function Ln(n,t,e){return Ea(n,t,e)}function Ea(n,t,e=on){const{immediate:r,deep:o,flush:s,once:i}=e,a=wn({},e),l=t&&r||!t&&s!=="post";let c;if($e){if(s==="sync"){const m=Pu();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=_n;a.call=(m,g,x)=>ot(m,u,g,x);let f=!1;s==="post"?a.scheduler=m=>{Fn(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():rs(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Uc(n,t,a);return $e&&(c?c.push(d):l&&d()),d}function Ru(n,t,e){const r=this.proxy,o=gn(n)?n.includes(".")?ja(r,n):()=>r[n]:n.bind(r,r);let s;X(t)?s=t:(s=t.handler,e=t);const i=De(this),a=Ea(o,s.bind(r),e);return i(),a}function ja(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}const Nu=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Vn(t)}Modifiers`]||n[`${Ct(t)}Modifiers`];function Bu(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||on;let o=e;const s=t.startsWith("update:"),i=s&&Nu(r,t.slice(7));i&&(i.trim&&(o=e.map(u=>gn(u)?u.trim():u)),i.number&&(o=e.map(pc)));let a,l=r[a=Yr(t)]||r[a=Yr(Vn(t))];!l&&s&&(l=r[a=Yr(Ct(t))]),l&&ot(l,n,6,o);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ot(c,n,6,o)}}function Fa(n,t,e=!1){const r=t.emitsCache,o=r.get(n);if(o!==void 0)return o;const s=n.emits;let i={},a=!1;if(!X(n)){const l=c=>{const u=Fa(c,t,!0);u&&(a=!0,wn(i,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(fn(n)&&r.set(n,null),null):(Y(s)?s.forEach(l=>i[l]=null):wn(i,s),fn(n)&&r.set(n,i),i)}function $r(n,t){return!n||!wr(t)?!1:(t=t.slice(2).replace(/Once$/,""),tn(n,t[0].toLowerCase()+t.slice(1))||tn(n,Ct(t))||tn(n,t))}function Qr(n){const{type:t,vnode:e,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:x}=n,A=ur(n);let M,C;try{if(e.shapeFlag&4){const L=o||r,R=L;M=nt(c.call(R,L,u,f,m,d,g)),C=a}else{const L=t;M=nt(L.length>1?L(f,{attrs:a,slots:i,emit:l}):L(f,null)),C=t.props?a:Du(a)}}catch(L){pe.length=0,Cr(L,n,1),M=S(Mt)}let I=M;if(C&&x!==!1){const L=Object.keys(C),{shapeFlag:R}=I;L.length&&R&7&&(s&&L.some(Xo)&&(C=Vu(C,s)),I=Qt(I,C,!1,!0))}return e.dirs&&(I=Qt(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(e.dirs):e.dirs),e.transition&&os(I,e.transition),M=I,ur(A),M}const Du=n=>{let t;for(const e in n)(e==="class"||e==="style"||wr(e))&&((t||(t={}))[e]=n[e]);return t},Vu=(n,t)=>{const e={};for(const r in n)(!Xo(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function zu(n,t,e){const{props:r,children:o,component:s}=n,{props:i,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?Xs(r,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(i[d]!==r[d]&&!$r(c,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Xs(r,i,c):!0:!!i;return!1}function Xs(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==n[s]&&!$r(e,s))return!0}return!1}function Yu({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const Pa=n=>n.__isSuspense;function Xu(n,t){t&&t.pendingBranch?Y(n)?t.effects.push(...n):t.effects.push(n):Kc(n)}const pn=Symbol.for("v-fgt"),Hr=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),no=Symbol.for("v-stc"),pe=[];let Pn=null;function w(n=!1){pe.push(Pn=n?null:[])}function Wu(){pe.pop(),Pn=pe[pe.length-1]||null}let Oe=1;function Ws(n){Oe+=n,n<0&&Pn&&(Pn.hasOnce=!0)}function Ra(n){return n.dynamicChildren=Oe>0?Pn||Xt:null,Wu(),Oe>0&&Pn&&Pn.push(n),n}function b(n,t,e,r,o,s){return Ra(_(n,t,e,r,o,s,!0))}function st(n,t,e,r,o){return Ra(S(n,t,e,r,o,!0))}function Te(n){return n?n.__v_isVNode===!0:!1}function se(n,t){return n.type===t.type&&n.key===t.key}const Na=({key:n})=>n??null,tr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?gn(n)||In(n)||X(n)?{i:yn,r:n,k:t,f:!!e}:n:null);function _(n,t=null,e=null,r=0,o=null,s=n===pn?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Na(t),ref:t&&tr(t),scopeId:Lr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:yn};return a?(cs(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=gn(e)?8:16),Oe>0&&!i&&Pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pn.push(l),l}const S=Uu;function Uu(n,t=null,e=null,r=0,o=null,s=!1){if((!n||n===wa)&&(n=Mt),Te(n)){const a=Qt(n,t,!0);return e&&cs(a,e),Oe>0&&!s&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(tf(n)&&(n=n.__vccOpts),t){t=Ba(t);let{class:a,style:l}=t;a&&!gn(a)&&(t.class=Xn(a)),fn(l)&&(es(l)&&!Y(l)&&(l=wn({},l)),t.style=xt(l))}const i=gn(n)?1:Pa(n)?128:tu(n)?64:fn(n)?4:X(n)?2:0;return _(n,t,e,r,o,i,s,!0)}function Ba(n){return n?es(n)||Ca(n)?wn({},n):n:null}function Qt(n,t,e=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:a,transition:l}=n,c=t?us(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Na(c),ref:t&&t.ref?e&&s?Y(s)?s.concat(tr(t)):[s,tr(t)]:tr(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==pn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qt(n.ssContent),ssFallback:n.ssFallback&&Qt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&os(u,l.clone(u)),u}function er(n=" ",t=0){return S(Hr,null,n,t)}function ko(n="",t=!1){return t?(w(),st(Mt,null,n)):S(Mt,null,n)}function nt(n){return n==null||typeof n=="boolean"?S(Mt):Y(n)?S(pn,null,n.slice()):Te(n)?vt(n):S(Hr,null,String(n))}function vt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qt(n)}function cs(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(Y(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),cs(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!Ca(t)?t._ctx=yn:o===3&&yn&&(yn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:yn},e=32):(t=String(t),r&64?(e=16,t=[er(t)]):e=8);n.children=t,n.shapeFlag|=e}function us(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Xn([t.class,r.class]));else if(o==="style")t.style=xt([t.style,r.style]);else if(wr(o)){const s=t[o],i=r[o];i&&s!==i&&!(Y(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Kn(n,t,e,r=null){ot(n,t,7,[e,r])}const Gu=ba();let qu=0;function Ku(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||Gu,s={uid:qu++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:La(r,o),emitsOptions:Fa(r,o),emit:null,emitted:null,propsDefaults:on,inheritAttrs:r.inheritAttrs,ctx:on,data:on,props:on,attrs:on,slots:on,refs:on,setupState:on,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Bu.bind(null,s),n.ce&&n.ce(s),s}let _n=null;const Sr=()=>_n||yn;let dr,Co;{const n=Mr(),t=(e,r)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};dr=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),Co=t("__VUE_SSR_SETTERS__",e=>$e=e)}const De=n=>{const t=_n;return dr(n),n.scope.on(),()=>{n.scope.off(),dr(t)}},Us=()=>{_n&&_n.scope.off(),dr(null)};function Da(n){return n.vnode.shapeFlag&4}let $e=!1;function Zu(n,t=!1,e=!1){t&&Co(t);const{props:r,children:o}=n.vnode,s=Da(n);Iu(n,r,s,t),$u(n,o,e);const i=s?Ju(n,t):void 0;return t&&Co(!1),i}function Ju(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hu);const{setup:r}=e;if(r){It();const o=n.setupContext=r.length>1?za(n):null,s=De(n),i=Be(r,n,0,[n.props,o]),a=Di(i);if(Lt(),s(),(a||n.sp)&&!qt(n)&&ha(n),a){if(i.then(Us,Us),t)return i.then(l=>{Gs(n,l,t)}).catch(l=>{Cr(l,n,0)});n.asyncDep=i}else Gs(n,i,t)}else Va(n,t)}function Gs(n,t,e){X(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fn(t)&&(n.setupState=ua(t)),Va(n,e)}let qs;function Va(n,t,e){const r=n.type;if(!n.render){if(!t&&qs&&!r.render){const o=r.template||as(n).template;if(o){const{isCustomElement:s,compilerOptions:i}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=wn(wn({isCustomElement:s,delimiters:a},i),l);r.render=qs(o,c)}}n.render=r.render||tt}{const o=De(n);It();try{yu(n)}finally{Lt(),o()}}}const Qu={get(n,t){return kn(n,"get",""),n[t]}};function za(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Qu),slots:n.slots,emit:n.emit,expose:t}}function Ar(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ua(Dc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in fe)return fe[e](n)},has(t,e){return e in t||e in fe}})):n.proxy}function nf(n,t=!0){return X(n)?n.displayName||n.name:n.name||t&&n.__name}function tf(n){return X(n)&&"__vccOpts"in n}const Dn=(n,t)=>Xc(n,t,$e);function He(n,t,e){const r=arguments.length;return r===2?fn(t)&&!Y(t)?Te(t)?S(n,null,[t]):S(n,t):S(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Te(e)&&(e=[e]),S(n,t,e))}const ef="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Io;const Ks=typeof window<"u"&&window.trustedTypes;if(Ks)try{Io=Ks.createPolicy("vue",{createHTML:n=>n})}catch{}const Ya=Io?n=>Io.createHTML(n):n=>n,rf="http://www.w3.org/2000/svg",of="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Zs=lt&&lt.createElement("template"),sf={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t==="svg"?lt.createElementNS(rf,n):t==="mathml"?lt.createElementNS(of,n):e?lt.createElement(n,{is:e}):lt.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>lt.createTextNode(n),createComment:n=>lt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>lt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,o,s){const i=e?e.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===s||!(o=o.nextSibling)););else{Zs.innerHTML=Ya(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Zs.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[i?i.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},af=Symbol("_vtc");function lf(n,t,e){const r=n[af];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Js=Symbol("_vod"),cf=Symbol("_vsh"),uf=Symbol(""),ff=/(^|;)\s*display\s*:/;function df(n,t,e){const r=n.style,o=gn(e);let s=!1;if(e&&!o){if(t)if(gn(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();e[a]==null&&rr(r,a,"")}else for(const i in t)e[i]==null&&rr(r,i,"");for(const i in e)i==="display"&&(s=!0),rr(r,i,e[i])}else if(o){if(t!==e){const i=r[uf];i&&(e+=";"+i),r.cssText=e,s=ff.test(e)}}else t&&n.removeAttribute("style");Js in n&&(n[Js]=s?r.display:"",n[cf]&&(r.display="none"))}const Qs=/\s*!important$/;function rr(n,t,e){if(Y(e))e.forEach(r=>rr(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=pf(n,t);Qs.test(e)?n.setProperty(Ct(r),e.replace(Qs,""),"important"):n[r]=e}}const ni=["Webkit","Moz","ms"],to={};function pf(n,t){const e=to[t];if(e)return e;let r=Vn(t);if(r!=="filter"&&r in n)return to[t]=r;r=br(r);for(let o=0;o<ni.length;o++){const s=ni[o]+r;if(s in n)return to[t]=s}return t}const ti="http://www.w3.org/1999/xlink";function ei(n,t,e,r,o,s=xc(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ti,t.slice(6,t.length)):n.setAttributeNS(ti,t,e):e==null||s&&!Xi(e)?n.removeAttribute(t):n.setAttribute(t,s?"":ft(e)?String(e):e)}function ri(n,t,e,r,o){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ya(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let i=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Xi(e):e==null&&a==="string"?(e="",i=!0):a==="number"&&(e=0,i=!0)}try{n[t]=e}catch{}i&&n.removeAttribute(o||t)}function mf(n,t,e,r){n.addEventListener(t,e,r)}function hf(n,t,e,r){n.removeEventListener(t,e,r)}const oi=Symbol("_vei");function gf(n,t,e,r,o=null){const s=n[oi]||(n[oi]={}),i=s[t];if(r&&i)i.value=r;else{const[a,l]=vf(t);if(r){const c=s[t]=xf(r,o);mf(n,a,c,l)}else i&&(hf(n,a,i,l),s[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function vf(n){let t;if(si.test(n)){t={};let r;for(;r=n.match(si);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ct(n.slice(2)),t]}let eo=0;const yf=Promise.resolve(),wf=()=>eo||(yf.then(()=>eo=0),eo=Date.now());function xf(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;ot(_f(r,e.value),t,5,[r])};return e.value=n,e.attached=wf(),e}function _f(n,t){if(Y(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const ii=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,bf=(n,t,e,r,o,s)=>{const i=o==="svg";t==="class"?lf(n,r,i):t==="style"?df(n,e,r):wr(t)?Xo(t)||gf(n,t,e,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mf(n,t,r,i))?(ri(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ei(n,t,r,i,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!gn(r))?ri(n,Vn(t),r,s,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),ei(n,t,r,i))};function Mf(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&ii(t)&&X(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ii(t)&&gn(e)?!1:t in n}const kf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cf=(n,t)=>{const e=n._withKeys||(n._withKeys={}),r=t.join(".");return e[r]||(e[r]=o=>{if(!("key"in o))return;const s=Ct(o.key);if(t.some(i=>i===s||kf[i]===s))return n(o)})},If=wn({patchProp:bf},sf);let ai;function Lf(){return ai||(ai=Su(If))}const Xa=(...n)=>{const t=Lf().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=Tf(r);if(!o)return;const s=t._component;!X(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=e(o,!1,Of(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Of(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tf(n){return gn(n)?document.querySelector(n):n}/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ke={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=({size:n,strokeWidth:t=2,absoluteStrokeWidth:e,color:r,iconNode:o,name:s,class:i,...a},{slots:l})=>He("svg",{...Ke,width:n||Ke.width,height:n||Ke.height,stroke:r||Ke.stroke,"stroke-width":e?Number(t)*24/Number(n):t,class:["lucide",`lucide-${$f(s??"icon")}`],...a},[...o.map(c=>He(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=(n,t)=>(e,{slots:r})=>He(Hf,{...e,iconNode:t,name:n},r);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Er("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Er("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Er("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Er("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);function Wa(n){return Go()?(Gi(n),!0):!1}function jr(n){return typeof n=="function"?n():y(n)}const fs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ff=Object.prototype.toString,Pf=n=>Ff.call(n)==="[object Object]",Rf=()=>{};function Nf(n){let t;function e(){return t||(t=n()),t}return e.reset=async()=>{const r=t;t=void 0,r&&await r},e}function Bf(n,t,e={}){const{immediate:r=!0}=e,o=O(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function a(){o.value=!1,i()}function l(...c){i(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,n(...c)},jr(t))}return r&&(o.value=!0,fs&&l()),Wa(a),{isPending:ns(o),start:l,stop:a}}const Df=fs?window:void 0,Ua=fs?window.navigator:void 0;function Vf(n){var t;const e=jr(n);return(t=e==null?void 0:e.$el)!=null?t:e}function Ga(...n){let t,e,r,o;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,r,o]=n,t=Df):[t,e,r,o]=n,!t)return Rf;Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,d,m)=>(u.addEventListener(f,d,m),()=>u.removeEventListener(f,d,m)),l=Ln(()=>[Vf(t),jr(o)],([u,f])=>{if(i(),!u)return;const d=Pf(f)?{...f}:f;s.push(...e.flatMap(m=>r.map(g=>a(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return Wa(c),c}function zf(){const n=O(!1),t=Sr();return t&&Hn(()=>{n.value=!0},t),n}function qa(n){const t=zf();return Dn(()=>(t.value,!!n()))}function li(n,t={}){const{controls:e=!1,navigator:r=Ua}=t,o=qa(()=>r&&"permissions"in r),s=yo(),i=typeof n=="string"?{name:n}:n,a=yo(),l=()=>{var u,f;a.value=(f=(u=s.value)==null?void 0:u.state)!=null?f:"prompt"};Ga(s,"change",l);const c=Nf(async()=>{if(o.value){if(!s.value)try{s.value=await r.permissions.query(i)}catch{s.value=void 0}finally{l()}if(e)return nn(s.value)}});return c(),e?{state:a,isSupported:o,query:c}:a}function Yf(n={}){const{navigator:t=Ua,read:e=!1,source:r,copiedDuring:o=1500,legacy:s=!1}=n,i=qa(()=>t&&"clipboard"in t),a=li("clipboard-read"),l=li("clipboard-write"),c=Dn(()=>i.value||s),u=O(""),f=O(!1),d=Bf(()=>f.value=!1,o);function m(){i.value&&M(a.value)?t.clipboard.readText().then(C=>{u.value=C}):u.value=A()}c.value&&e&&Ga(["copy","cut"],m);async function g(C=jr(r)){c.value&&C!=null&&(i.value&&M(l.value)?await t.clipboard.writeText(C):x(C),u.value=C,f.value=!0,d.start())}function x(C){const I=document.createElement("textarea");I.value=C??"",I.style.position="absolute",I.style.opacity="0",document.body.appendChild(I),I.select(),document.execCommand("copy"),I.remove()}function A(){var C,I,L;return(L=(I=(C=document==null?void 0:document.getSelection)==null?void 0:C.call(document))==null?void 0:I.toString())!=null?L:""}function M(C){return C==="granted"||C==="prompt"}return{isSupported:c,text:u,copied:f,copy:g}}const Xf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center overflow-hidden"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
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

async function mouseEnterHandler() {
  await motionInstance.apply(variants.animate);
}
async function mouseLeaveHandler() {
  await motionInstance.apply(variants.normal);
}
<\/script>
`,Wf=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
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

async function mouseEnterHandler() {
  motionSvgInstance.apply(cartVariants.animate);
  motionSvgInstance.apply(cartVariants.hover).then(() => {
    motionSvgInstance.apply(cartVariants.repeat);
  });
  motionPathInstance.apply(lidVariants.animate);
}
async function mouseLeaveHandler() {
  motionSvgInstance.apply(cartVariants.normal);
  motionPathInstance.apply(lidVariants.normal);
}
<\/script>
`,Uf=`<template>
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
`,Gf=`<template>
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

async function mouseEnterHandler() {
  hoverFn(true);
}

async function mouseLeaveHandler() {
  hoverFn(false);
}
<\/script>
`,qf=`<template>
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
`,Kf=`<template>
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
`,Zf=`<template>
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
`,Jf=`<template>
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
`,Qf=`<template>
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
`,nd=`<template>
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
`,td=`<template>
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
`,ed=`<template>
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
`,rd=`<template>
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
`,od=`<template>
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
`,sd=`<template>
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
`,id=`<template>
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
`,ad=`<template>
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
`,ld=`<template>
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
`,cd=`<template>
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
`,ud=`<template>
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
`,fd=`<template>
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
`,dd=`<template>
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
`,pd=`<template>
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
`,md=`<template>
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
`,hd=`<template>
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
`,gd=`<template>
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
`,vd=`<template>
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
`,yd=`<template>
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
`,wd=`<template>
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
`,xd=`<template>
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
`,_d=`<template>
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
`,bd=`<template>
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
`,Md=`<template>
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
`,kd=`<template>
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
`,Cd=`<template>
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
      <Motion is="path" ref="target" d="M17 12H7" />
      <path d="M19 18H5" />
      <path d="M21 6H3" />
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
`,Id=`<template>
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
`,Ld=`<template>
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
`,Od=`<template>
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
`,Td=`<template>
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
`,$d=`<template>
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
`,Hd=`<template>
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
`,Sd=`<template>
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
`,Ad=`<template>
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
`,Ed=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
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
`,Lo="https://github.com/imfenghuang/icons",jd="imfenghuang/icons",Fd="https://imfenghuang.github.io/icons/",Pd=n=>n===""?Lo:`${Lo}/blob/main/src/icons/${n}.vue`,Rd={SearchIcon:Xf,CartIcon:Wf,LayersIcon:Uf,GripIcon:Gf,FrameIcon:qf,SunIcon:Kf,DeleteIcon:Zf,FileStackIcon:Jf,SettingGearIcon:Qf,CalendarCogIcon:nd,MenuIcon:td,CopyIcon:ed,AudioLinesIcon:rd,ArchiveIcon:od,LogoutIcon:sd,CircleHelpIcon:id,SquareStackIcon:ad,MessageCircleIcon:ld,MessageCircleMoreIcon:cd,ArrowLeftIcon:ud,ArrowRightIcon:fd,RefreshIcon:dd,DownloadIcon:pd,SquarePenIcon:md,CursorClickIcon:hd,ClockIcon:gd,BadgeAlertIcon:vd,BadgePercentIcon:yd,ChartPieIcon:wd,CompassIcon:xd,TimerIcon:_d,ExpandIcon:bd,GaugeIcon:Md,BoneIcon:kd,AlignCenterIcon:Cd,AlignHorizontalIcon:Id,AlignVerticalIcon:Ld,BellIcon:Od,UpvoteIcon:Td,DownvoteIcon:$d,UsersIcon:Hd,HandCoinsIcon:Sd,SyringeIcon:Ad,FlaskIcon:Ed},Nd=n=>Rd[n]||"",Bd=(n,t)=>{const e=new Blob([t],{type:"text/plain"}),r=document.createElement("a");r.download=n,r.href=URL.createObjectURL(e),document.body.appendChild(r),r.click(),document.body.removeChild(r)},Dd={class:"flex justify-center items-center gap-2 mt-2"},Vd=["href"],zd={__name:"OperationComp",props:{name:{default:"",type:String}},setup(n){const t=n,e=Dn(()=>Pd(t.name)),r=O("cursor-pointer hover:bg-accent rounded-md p-2 transition-colors duration-200"),o=O(Nd(t.name)),{copy:s,copied:i}=Yf({source:o}),a=()=>{s(o.value)},l=()=>{Bd(`${t.name}.vue`,o.value)};return(c,u)=>{const f=mu("tooltip");return w(),b("div",Dd,[Kr((w(),b("div",{class:Xn(y(r)),onClick:a},[y(i)?(w(),st(y(Sf),{key:1,"stroke-width":1,size:14})):(w(),st(y(Af),{key:0,"stroke-width":2,size:14}))],2)),[[f,"copy",void 0,{bottom:!0}]]),Kr((w(),b("div",{class:Xn(y(r)),onClick:l},[S(y(Ef),{"stroke-width":2,size:14})],2)),[[f,"download .vue file",void 0,{bottom:!0}]]),Kr((w(),b("a",{href:y(e),target:"_blank",class:Xn(y(r))},[S(y(jf),{"stroke-width":2,size:14})],10,Vd)),[[f,"view on Github",void 0,{bottom:!0}]])])}}};function ro(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Oo(n,t,e=".",r){if(!ro(t))return Oo(n,{},e,r);const o=Object.assign({},t);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const i=n[s];i!=null&&(r&&r(o,s,i,e)||(Array.isArray(i)&&Array.isArray(o[s])?o[s]=[...i,...o[s]]:ro(i)&&ro(o[s])?o[s]=Oo(i,o[s],(e?`${e}.`:"")+s.toString(),r):o[s]=i))}return o}function Yd(n){return(...t)=>t.reduce((e,r)=>Oo(e,r,"",n),{})}const Xd=Yd();function Ka(n){return Go()?(Gi(n),!0):!1}function ds(n){return typeof n=="function"?n():y(n)}const Wd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ud=n=>n!=null,Gd=Object.prototype.toString,Za=n=>Gd.call(n)==="[object Object]",or=()=>{};function qd(n){return Sr()}function Kd(n,t){qd()&&Tr(n,t)}function me(n){var t;const e=ds(n);return(t=e==null?void 0:e.$el)!=null?t:e}const Ja=Wd?window:void 0;function Zn(...n){let t,e,r,o;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,r,o]=n,t=Ja):[t,e,r,o]=n,!t)return or;Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,d,m)=>(u.addEventListener(f,d,m),()=>u.removeEventListener(f,d,m)),l=Ln(()=>[me(t),ds(o)],([u,f])=>{if(i(),!u)return;const d=Za(f)?{...f}:f;s.push(...e.flatMap(m=>r.map(g=>a(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return Ka(c),c}function Zd(){const n=O(!1),t=Sr();return t&&Hn(()=>{n.value=!0},t),n}function Jd(n){const t=Zd();return Dn(()=>(t.value,!!n()))}function Qd(n,t,e={}){const{root:r,rootMargin:o="0px",threshold:s=.1,window:i=Ja,immediate:a=!0}=e,l=Jd(()=>i&&"IntersectionObserver"in i),c=Dn(()=>{const g=ds(n);return(Array.isArray(g)?g:[g]).map(me).filter(Ud)});let u=or;const f=O(a),d=l.value?Ln(()=>[c.value,me(r),f.value],([g,x])=>{if(u(),!f.value||!g.length)return;const A=new IntersectionObserver(t,{root:me(x),rootMargin:o,threshold:s});g.forEach(M=>M&&A.observe(M)),u=()=>{A.disconnect(),u=or}},{immediate:a,flush:"post"}):or,m=()=>{u(),d(),f.value=!1};return Ka(m),{isSupported:l,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:m}}const Qa=1/60*1e3,np=typeof performance<"u"?()=>performance.now():()=>Date.now(),nl=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(np()),Qa);function tp(n){let t=[],e=[],r=0,o=!1,s=!1;const i=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&o,d=f?t:e;return c&&i.add(l),d.indexOf(l)===-1&&(d.push(l),f&&o&&(r=t.length)),l},cancel:l=>{const c=e.indexOf(l);c!==-1&&e.splice(c,1),i.delete(l)},process:l=>{if(o){s=!0;return}if(o=!0,[t,e]=[e,t],e.length=0,r=t.length,r)for(let c=0;c<r;c++){const u=t[c];u(l),i.has(u)&&(a.schedule(u),n())}o=!1,s&&(s=!1,a.process(l))}};return a}const ep=40;let To=!0,Se=!1,$o=!1;const Zt={delta:0,timestamp:0},Ve=["read","update","preRender","render","postRender"],Fr=Ve.reduce((n,t)=>(n[t]=tp(()=>Se=!0),n),{}),Ho=Ve.reduce((n,t)=>{const e=Fr[t];return n[t]=(r,o=!1,s=!1)=>(Se||sp(),e.schedule(r,o,s)),n},{}),rp=Ve.reduce((n,t)=>(n[t]=Fr[t].cancel,n),{});Ve.reduce((n,t)=>(n[t]=()=>Fr[t].process(Zt),n),{});const op=n=>Fr[n].process(Zt),tl=n=>{Se=!1,Zt.delta=To?Qa:Math.max(Math.min(n-Zt.timestamp,ep),1),Zt.timestamp=n,$o=!0,Ve.forEach(op),$o=!1,Se&&(To=!1,nl(tl))},sp=()=>{Se=!0,To=!0,$o||nl(tl)},el=()=>Zt;function rl(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]]);return e}var ci=function(){};const So=(n,t,e)=>Math.min(Math.max(e,n),t),oo=.001,ip=.01,ap=10,lp=.05,cp=1;function up({duration:n=800,bounce:t=.25,velocity:e=0,mass:r=1}){let o,s,i=1-t;i=So(lp,cp,i),n=So(ip,ap,n/1e3),i<1?(o=c=>{const u=c*i,f=u*n,d=u-e,m=Ao(c,i),g=Math.exp(-f);return oo-d/m*g},s=c=>{const f=c*i*n,d=f*e+e,m=Math.pow(i,2)*Math.pow(c,2)*n,g=Math.exp(-f),x=Ao(Math.pow(c,2),i);return(-o(c)+oo>0?-1:1)*((d-m)*g)/x}):(o=c=>{const u=Math.exp(-c*n),f=(c-e)*n+1;return-oo+u*f},s=c=>{const u=Math.exp(-c*n),f=(e-c)*(n*n);return u*f});const a=5/n,l=dp(o,s,a);if(n=n*1e3,isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:i*2*Math.sqrt(r*c),duration:n}}}const fp=12;function dp(n,t,e){let r=e;for(let o=1;o<fp;o++)r=r-n(r)/t(r);return r}function Ao(n,t){return n*Math.sqrt(1-t*t)}const pp=["duration","bounce"],mp=["stiffness","damping","mass"];function ui(n,t){return t.some(e=>n[e]!==void 0)}function hp(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!ui(n,mp)&&ui(n,pp)){const e=up(n);t=Object.assign(Object.assign(Object.assign({},t),e),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ps(n){var{from:t=0,to:e=1,restSpeed:r=2,restDelta:o}=n,s=rl(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:d}=hp(s),m=fi,g=fi;function x(){const A=u?-(u/1e3):0,M=e-t,C=l/(2*Math.sqrt(a*c)),I=Math.sqrt(a/c)/1e3;if(o===void 0&&(o=Math.min(Math.abs(e-t)/100,.4)),C<1){const L=Ao(I,C);m=R=>{const U=Math.exp(-C*I*R);return e-U*((A+C*I*M)/L*Math.sin(L*R)+M*Math.cos(L*R))},g=R=>{const U=Math.exp(-C*I*R);return C*I*U*(Math.sin(L*R)*(A+C*I*M)/L+M*Math.cos(L*R))-U*(Math.cos(L*R)*(A+C*I*M)-L*M*Math.sin(L*R))}}else if(C===1)m=L=>e-Math.exp(-I*L)*(M+(A+I*M)*L);else{const L=I*Math.sqrt(C*C-1);m=R=>{const U=Math.exp(-C*I*R),G=Math.min(L*R,300);return e-U*((A+C*I*M)*Math.sinh(G)+L*M*Math.cosh(G))/L}}}return x(),{next:A=>{const M=m(A);if(d)i.done=A>=f;else{const C=g(A)*1e3,I=Math.abs(C)<=r,L=Math.abs(e-M)<=o;i.done=I&&L}return i.value=i.done?e:M,i},flipTarget:()=>{u=-u,[t,e]=[e,t],x()}}}ps.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const fi=n=>0,ol=(n,t,e)=>{const r=t-n;return r===0?1:(e-n)/r},ms=(n,t,e)=>-e*n+e*t+n,sl=(n,t)=>e=>Math.max(Math.min(e,t),n),he=n=>n%1?Number(n.toFixed(5)):n,Ae=/(-)?([\d]*\.?[\d])+/g,Eo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,gp=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ze(n){return typeof n=="string"}const Ye={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ge=Object.assign(Object.assign({},Ye),{transform:sl(0,1)}),Ze=Object.assign(Object.assign({},Ye),{default:1}),hs=n=>({test:t=>ze(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Ht=hs("deg"),ve=hs("%"),W=hs("px"),di=Object.assign(Object.assign({},ve),{parse:n=>ve.parse(n)/100,transform:n=>ve.transform(n*100)}),gs=(n,t)=>e=>!!(ze(e)&&gp.test(e)&&e.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(e,t)),il=(n,t,e)=>r=>{if(!ze(r))return r;const[o,s,i,a]=r.match(Ae);return{[n]:parseFloat(o),[t]:parseFloat(s),[e]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Ft={test:gs("hsl","hue"),parse:il("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:r=1})=>"hsla("+Math.round(n)+", "+ve.transform(he(t))+", "+ve.transform(he(e))+", "+he(ge.transform(r))+")"},vp=sl(0,255),so=Object.assign(Object.assign({},Ye),{transform:n=>Math.round(vp(n))}),yt={test:gs("rgb","red"),parse:il("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:r=1})=>"rgba("+so.transform(n)+", "+so.transform(t)+", "+so.transform(e)+", "+he(ge.transform(r))+")"};function yp(n){let t="",e="",r="",o="";return n.length>5?(t=n.substr(1,2),e=n.substr(3,2),r=n.substr(5,2),o=n.substr(7,2)):(t=n.substr(1,1),e=n.substr(2,1),r=n.substr(3,1),o=n.substr(4,1),t+=t,e+=e,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const jo={test:gs("#"),parse:yp,transform:yt.transform},Sn={test:n=>yt.test(n)||jo.test(n)||Ft.test(n),parse:n=>yt.test(n)?yt.parse(n):Ft.test(n)?Ft.parse(n):jo.parse(n),transform:n=>ze(n)?n:n.hasOwnProperty("red")?yt.transform(n):Ft.transform(n)},al="${c}",ll="${n}";function wp(n){var t,e,r,o;return isNaN(n)&&ze(n)&&((e=(t=n.match(Ae))===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0)+((o=(r=n.match(Eo))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function cl(n){typeof n=="number"&&(n=`${n}`);const t=[];let e=0;const r=n.match(Eo);r&&(e=r.length,n=n.replace(Eo,al),t.push(...r.map(Sn.parse)));const o=n.match(Ae);return o&&(n=n.replace(Ae,ll),t.push(...o.map(Ye.parse))),{values:t,numColors:e,tokenised:n}}function ul(n){return cl(n).values}function fl(n){const{values:t,numColors:e,tokenised:r}=cl(n),o=t.length;return s=>{let i=r;for(let a=0;a<o;a++)i=i.replace(a<e?al:ll,a<e?Sn.transform(s[a]):he(s[a]));return i}}const xp=n=>typeof n=="number"?0:n;function _p(n){const t=ul(n);return fl(n)(t.map(xp))}const Xe={test:wp,parse:ul,createTransformer:fl,getAnimatableNone:_p},bp=new Set(["brightness","contrast","saturate","opacity"]);function Mp(n){let[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[r]=e.match(Ae)||[];if(!r)return n;const o=e.replace(r,"");let s=bp.has(t)?1:0;return r!==e&&(s*=100),t+"("+s+o+")"}const kp=/([a-z-]*)\(.*?\)/g,Fo=Object.assign(Object.assign({},Xe),{getAnimatableNone:n=>{const t=n.match(kp);return t?t.map(Mp).join(" "):n}});function io(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function pi({hue:n,saturation:t,lightness:e,alpha:r}){n/=360,t/=100,e/=100;let o=0,s=0,i=0;if(!t)o=s=i=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;o=io(l,a,n+1/3),s=io(l,a,n),i=io(l,a,n-1/3)}return{red:Math.round(o*255),green:Math.round(s*255),blue:Math.round(i*255),alpha:r}}const Cp=(n,t,e)=>{const r=n*n,o=t*t;return Math.sqrt(Math.max(0,e*(o-r)+r))},Ip=[jo,yt,Ft],mi=n=>Ip.find(t=>t.test(n)),dl=(n,t)=>{let e=mi(n),r=mi(t),o=e.parse(n),s=r.parse(t);e===Ft&&(o=pi(o),e=yt),r===Ft&&(s=pi(s),r=yt);const i=Object.assign({},o);return a=>{for(const l in i)l!=="alpha"&&(i[l]=Cp(o[l],s[l],a));return i.alpha=ms(o.alpha,s.alpha,a),e.transform(i)}},Lp=n=>typeof n=="number",Op=(n,t)=>e=>t(n(e)),pl=(...n)=>n.reduce(Op);function ml(n,t){return Lp(n)?e=>ms(n,t,e):Sn.test(n)?dl(n,t):gl(n,t)}const hl=(n,t)=>{const e=[...n],r=e.length,o=n.map((s,i)=>ml(s,t[i]));return s=>{for(let i=0;i<r;i++)e[i]=o[i](s);return e}},Tp=(n,t)=>{const e=Object.assign(Object.assign({},n),t),r={};for(const o in e)n[o]!==void 0&&t[o]!==void 0&&(r[o]=ml(n[o],t[o]));return o=>{for(const s in r)e[s]=r[s](o);return e}};function hi(n){const t=Xe.parse(n),e=t.length;let r=0,o=0,s=0;for(let i=0;i<e;i++)r||typeof t[i]=="number"?r++:t[i].hue!==void 0?s++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:s}}const gl=(n,t)=>{const e=Xe.createTransformer(t),r=hi(n),o=hi(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?pl(hl(r.parsed,o.parsed),e):i=>`${i>0?t:n}`},$p=(n,t)=>e=>ms(n,t,e);function Hp(n){if(typeof n=="number")return $p;if(typeof n=="string")return Sn.test(n)?dl:gl;if(Array.isArray(n))return hl;if(typeof n=="object")return Tp}function Sp(n,t,e){const r=[],o=e||Hp(n[0]),s=n.length-1;for(let i=0;i<s;i++){let a=o(n[i],n[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;a=pl(l,a)}r.push(a)}return r}function Ap([n,t],[e]){return r=>e(ol(n,t,r))}function Ep(n,t){const e=n.length,r=e-1;return o=>{let s=0,i=!1;if(o<=n[0]?i=!0:o>=n[r]&&(s=r-1,i=!0),!i){let l=1;for(;l<e&&!(n[l]>o||l===r);l++);s=l-1}const a=ol(n[s],n[s+1],o);return t[s](a)}}function vl(n,t,{clamp:e=!0,ease:r,mixer:o}={}){const s=n.length;ci(s===t.length),ci(!r||!Array.isArray(r)||r.length===s-1),n[0]>n[s-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const i=Sp(t,r,o),a=s===2?Ap(n,i):Ep(n,i);return e?l=>a(So(n[0],n[s-1],l)):a}const Pr=n=>t=>1-n(1-t),vs=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,jp=n=>t=>Math.pow(t,n),yl=n=>t=>t*t*((n+1)*t-n),Fp=n=>{const t=yl(n);return e=>(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))},wl=1.525,Pp=4/11,Rp=8/11,Np=9/10,xl=n=>n,ys=jp(2),Bp=Pr(ys),_l=vs(ys),bl=n=>1-Math.sin(Math.acos(n)),Ml=Pr(bl),Dp=vs(Ml),ws=yl(wl),Vp=Pr(ws),zp=vs(ws),Yp=Fp(wl),Xp=4356/361,Wp=35442/1805,Up=16061/1805,pr=n=>{if(n===1||n===0)return n;const t=n*n;return n<Pp?7.5625*t:n<Rp?9.075*t-9.9*n+3.4:n<Np?Xp*t-Wp*n+Up:10.8*n*n-20.52*n+10.72},Gp=Pr(pr),qp=n=>n<.5?.5*(1-pr(1-n*2)):.5*pr(n*2-1)+.5;function Kp(n,t){return n.map(()=>t||_l).splice(0,n.length-1)}function Zp(n){const t=n.length;return n.map((e,r)=>r!==0?r/(t-1):0)}function Jp(n,t){return n.map(e=>e*t)}function sr({from:n=0,to:t=1,ease:e,offset:r,duration:o=300}){const s={done:!1,value:n},i=Array.isArray(t)?t:[n,t],a=Jp(r&&r.length===i.length?r:Zp(i),o);function l(){return vl(a,i,{ease:Array.isArray(e)?e:Kp(i,e)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=o,s),flipTarget:()=>{i.reverse(),c=l()}}}function Qp({velocity:n=0,from:t=0,power:e=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:s}){const i={done:!1,value:t};let a=e*n;const l=t+a,c=s===void 0?l:s(l);return c!==l&&(a=c-t),{next:u=>{const f=-a*Math.exp(-u/r);return i.done=!(f>o||f<-o),i.value=i.done?c:c+f,i},flipTarget:()=>{}}}const gi={keyframes:sr,spring:ps,decay:Qp};function n0(n){if(Array.isArray(n.to))return sr;if(gi[n.type])return gi[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?sr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ps:sr}function kl(n,t,e=0){return n-t-e}function t0(n,t,e=0,r=!0){return r?kl(t+-n,t,e):t-(n-t)+e}function e0(n,t,e,r){return r?n>=t+e:n<=-e}const r0=n=>{const t=({delta:e})=>n(e);return{start:()=>Ho.update(t,!0),stop:()=>rp.update(t)}};function Cl(n){var t,e,{from:r,autoplay:o=!0,driver:s=r0,elapsed:i=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:d,onRepeat:m,onUpdate:g}=n,x=rl(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=x,M,C=0,I=x.duration,L,R=!1,U=!0,G;const un=n0(x);!((e=(t=un).needsInterpolation)===null||e===void 0)&&e.call(t,r,A)&&(G=vl([0,100],[r,A],{clamp:!1}),r=0,A=100);const rn=un(Object.assign(Object.assign({},x),{from:r,to:A}));function Q(){C++,l==="reverse"?(U=C%2===0,i=t0(i,I,c,U)):(i=kl(i,I,c),l==="mirror"&&rn.flipTarget()),R=!1,m&&m()}function hn(){M.stop(),d&&d()}function vn(dn){if(U||(dn=-dn),i+=dn,!R){const Rn=rn.next(Math.max(0,i));L=Rn.value,G&&(L=G(L)),R=U?Rn.done:i<=0}g==null||g(L),R&&(C===0&&(I??(I=i)),C<a?e0(i,I,c,U)&&Q():hn())}function xn(){u==null||u(),M=s(vn),M.start()}return o&&xn(),{stop:()=>{f==null||f(),M.stop()}}}function Il(n,t){return t?n*(1e3/t):0}function o0({from:n=0,velocity:t=0,min:e,max:r,power:o=.8,timeConstant:s=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:d,onStop:m}){let g;function x(I){return e!==void 0&&I<e||r!==void 0&&I>r}function A(I){return e===void 0?r:r===void 0||Math.abs(e-I)<Math.abs(r-I)?e:r}function M(I){g==null||g.stop(),g=Cl(Object.assign(Object.assign({},I),{driver:u,onUpdate:L=>{var R;f==null||f(L),(R=I.onUpdate)===null||R===void 0||R.call(I,L)},onComplete:d,onStop:m}))}function C(I){M(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:l},I))}if(x(n))C({from:n,velocity:t,to:A(n)});else{let I=o*t+n;typeof c<"u"&&(I=c(I));const L=A(I),R=L===e?-1:1;let U,G;const un=rn=>{U=G,G=rn,t=Il(rn-U,el().delta),(R===1&&rn>L||R===-1&&rn<L)&&C({from:rn,to:L,velocity:t})};M({type:"decay",from:n,velocity:t,timeConstant:s,power:o,restDelta:l,modifyTarget:c,onUpdate:x(I)?un:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Ll=(n,t)=>1-3*t+3*n,Ol=(n,t)=>3*t-6*n,Tl=n=>3*n,mr=(n,t,e)=>((Ll(t,e)*n+Ol(t,e))*n+Tl(t))*n,$l=(n,t,e)=>3*Ll(t,e)*n*n+2*Ol(t,e)*n+Tl(t),s0=1e-7,i0=10;function a0(n,t,e,r,o){let s,i,a=0;do i=t+(e-t)/2,s=mr(i,r,o)-n,s>0?e=i:t=i;while(Math.abs(s)>s0&&++a<i0);return i}const l0=8,c0=.001;function u0(n,t,e,r){for(let o=0;o<l0;++o){const s=$l(t,e,r);if(s===0)return t;const i=mr(t,e,r)-n;t-=i/s}return t}const ir=11,Je=1/(ir-1);function f0(n,t,e,r){if(n===t&&e===r)return xl;const o=new Float32Array(ir);for(let i=0;i<ir;++i)o[i]=mr(i*Je,n,e);function s(i){let a=0,l=1;const c=ir-1;for(;l!==c&&o[l]<=i;++l)a+=Je;--l;const u=(i-o[l])/(o[l+1]-o[l]),f=a+u*Je,d=$l(f,n,e);return d>=c0?u0(i,f,n,e):d===0?f:a0(i,a,a+Je,n,e)}return i=>i===0||i===1?i:mr(s(i),t,r)}var d0=Object.defineProperty,p0=(n,t,e)=>t in n?d0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,m0=(n,t,e)=>(p0(n,t+"",e),e);class h0{constructor(){m0(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,e,r){if(this.subscriptions.size)for(const o of this.subscriptions)o(t,e,r)}clear(){this.subscriptions.clear()}}var g0=Object.defineProperty,v0=(n,t,e)=>t in n?g0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jn=(n,t,e)=>(v0(n,typeof t!="symbol"?t+"":t,e),e);function vi(n){return!Number.isNaN(Number.parseFloat(n))}class y0{constructor(t){Jn(this,"current"),Jn(this,"prev"),Jn(this,"timeDelta",0),Jn(this,"lastUpdated",0),Jn(this,"updateSubscribers",new h0),Jn(this,"stopAnimation"),Jn(this,"canTrackVelocity",!1),Jn(this,"updateAndNotify",e=>{this.prev=this.current,this.current=e;const{delta:r,timestamp:o}=el();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),Ho.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Jn(this,"scheduleVelocityCheck",()=>Ho.postRender(this.velocityCheck)),Jn(this,"velocityCheck",({timestamp:e})=>{this.canTrackVelocity||(this.canTrackVelocity=vi(this.current)),e!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=vi(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Il(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(e=>{const{stop:r}=t(e);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function w0(n){return new y0(n)}const{isArray:x0}=Array;function _0(){const n=O({}),t=r=>{const o=s=>{n.value[s]&&(n.value[s].stop(),n.value[s].destroy(),delete n.value[s])};r?x0(r)?r.forEach(o):o(r):Object.keys(n.value).forEach(o)},e=(r,o,s)=>{if(n.value[r])return n.value[r];const i=w0(o);return i.onChange(a=>s[r]=a),n.value[r]=i,i};return Kd(t),{motionValues:n,get:e,stop:t}}function b0(n){return Array.isArray(n)}function St(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function ao(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function M0(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function lo(){return{type:"keyframes",ease:"linear",duration:300}}function k0(n){return{type:"keyframes",duration:800,values:n}}const yi={default:M0,x:St,y:St,z:St,rotate:St,rotateX:St,rotateY:St,rotateZ:St,scaleX:ao,scaleY:ao,scale:ao,backgroundColor:lo,color:lo,opacity:lo};function Hl(n,t){let e;return b0(t)?e=k0:e=yi[n]||yi.default,{to:t,...e(t)}}const wi={...Ye,transform:Math.round},Sl={color:Sn,backgroundColor:Sn,outlineColor:Sn,fill:Sn,stroke:Sn,borderColor:Sn,borderTopColor:Sn,borderRightColor:Sn,borderBottomColor:Sn,borderLeftColor:Sn,borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:Ht,rotateX:Ht,rotateY:Ht,rotateZ:Ht,scale:Ze,scaleX:Ze,scaleY:Ze,scaleZ:Ze,skew:Ht,skewX:Ht,skewY:Ht,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:ge,originX:di,originY:di,originZ:W,zIndex:wi,filter:Fo,WebkitFilter:Fo,fillOpacity:ge,strokeOpacity:ge,numOctaves:wi},xs=n=>Sl[n];function Po(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function C0(n,t){let e=xs(n);return e!==Fo&&(e=Xe),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const I0={linear:xl,easeIn:ys,easeInOut:_l,easeOut:Bp,circIn:bl,circInOut:Dp,circOut:Ml,backIn:ws,backInOut:zp,backOut:Vp,anticipate:Yp,bounceIn:Gp,bounceInOut:qp,bounceOut:pr};function xi(n){if(Array.isArray(n)){const[t,e,r,o]=n;return f0(t,e,r,o)}else if(typeof n=="string")return I0[n];return n}function L0(n){return Array.isArray(n)&&typeof n[0]!="number"}function _i(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Xe.test(t)&&!t.startsWith("url("))}function O0(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function T0({ease:n,times:t,delay:e,...r}){const o={...r};return t&&(o.offset=t),n&&(o.ease=L0(n)?n.map(xi):xi(n)),e&&(o.elapsed=-e),o}function $0(n,t,e){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),O0(t),H0(n)||(n={...n,...Hl(e,t.to)}),{...t,...T0(n)}}function H0({delay:n,repeat:t,repeatType:e,repeatDelay:r,from:o,...s}){return!!Object.keys(s).length}function S0(n,t){return n[t]||n.default||n}function A0(n,t,e,r,o){const s=S0(r,n);let i=s.from===null||s.from===void 0?t.get():s.from;const a=_i(n,e);i==="none"&&a&&typeof e=="string"&&(i=C0(n,e));const l=_i(n,i);function c(f){const d={from:i,to:e,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return s.type==="inertia"||s.type==="decay"?o0({...d,...s}):Cl({...$0(s,d,n),onUpdate:m=>{d.onUpdate(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{o&&o(),f&&f()}})}function u(f){return t.set(e),o&&o(),f&&f(),{stop:()=>{}}}return!l||!a||s.type===!1?u:c}function E0(){const{motionValues:n,stop:t,get:e}=_0();return{motionValues:n,stop:t,push:(o,s,i,a={},l)=>{const c=i[o],u=e(o,c,i);if(a&&a.immediate){u.set(s);return}const f=A0(o,u,s,a,l);u.start(f)}}}function j0(n,t={},{motionValues:e,push:r,stop:o}=E0()){const s=y(t),i=O(!1);Ln(e,f=>{i.value=Object.values(f).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!s||!s[f])throw new Error(`The variant ${f} does not exist.`);return s[f]},l=f=>{typeof f=="string"&&(f=a(f));const d=Object.entries(f).map(([g,x])=>{if(g!=="transition")return new Promise(A=>r(g,x,n,f.transition||Hl(g,f[g]),A))}).filter(Boolean);async function m(){var g,x;await Promise.all(d),(x=(g=f.transition)==null?void 0:g.onComplete)==null||x.call(g)}return Promise.all([m()])};return{isAnimating:i,apply:l,set:f=>{const d=Za(f)?f:a(f);Object.entries(d).forEach(([m,g])=>{m!=="transition"&&r(m,g,n,{immediate:!0})})},leave:async f=>{let d;if(s&&(s.leave&&(d=s.leave),!s.leave&&s.initial&&(d=s.initial)),!d){f();return}await l(d),f()},stop:o}}const _s=typeof window<"u",F0=()=>_s&&(window.onpointerdown===null||void 0),P0=()=>_s&&(window.ontouchstart===null||void 0),R0=()=>_s&&(window.onmousedown===null||void 0);function N0({target:n,state:t,variants:e,apply:r}){const o=y(e),s=O(!1),i=O(!1),a=O(!1),l=Dn(()=>{let u=[...Object.keys(t.value||{})];return o&&(o.hovered&&(u=[...u,...Object.keys(o.hovered)]),o.tapped&&(u=[...u,...Object.keys(o.tapped)]),o.focused&&(u=[...u,...Object.keys(o.focused)])),u}),c=Dn(()=>{const u={};Object.assign(u,t.value),s.value&&o.hovered&&Object.assign(u,o.hovered),i.value&&o.tapped&&Object.assign(u,o.tapped),a.value&&o.focused&&Object.assign(u,o.focused);for(const f in u)l.value.includes(f)||delete u[f];return u});o.hovered&&(Zn(n,"mouseenter",()=>s.value=!0),Zn(n,"mouseleave",()=>{s.value=!1,i.value=!1})),o.tapped&&(R0()&&(Zn(n,"mousedown",()=>i.value=!0),Zn(n,"mouseup",()=>i.value=!1)),F0()&&(Zn(n,"pointerdown",()=>i.value=!0),Zn(n,"pointerup",()=>i.value=!1)),P0()&&(Zn(n,"touchstart",()=>i.value=!0),Zn(n,"touchend",()=>i.value=!1))),o.focused&&(Zn(n,"focus",()=>a.value=!0),Zn(n,"blur",()=>a.value=!1)),Ln([s,i,a],()=>{r(c.value)})}function B0({set:n,target:t,variants:e,variant:r}){const o=y(e);Ln(()=>t,()=>{o&&(o.initial&&(n("initial"),r.value="initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function D0({state:n,apply:t}){Ln(n,e=>{e&&t(e)},{immediate:!0})}function V0({target:n,variants:t,variant:e}){const r=y(t);r&&(r.visible||r.visibleOnce)&&Qd(n,([{isIntersecting:o}])=>{r.visible?o?e.value="visible":e.value="initial":r.visibleOnce&&(o&&e.value!=="visibleOnce"?e.value="visibleOnce":e.value||(e.value="initial"))})}function z0(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&B0(n),t.syncVariants&&D0(n),t.visibilityHooks&&V0(n),t.eventListeners&&N0(n)}function Al(n={}){const t=mn({...n}),e=O({});return Ln(t,()=>{const r={};for(const[o,s]of Object.entries(t)){const i=xs(o),a=Po(s,i);r[o]=a}e.value=r},{immediate:!0,deep:!0}),{state:t,style:e}}function bs(n,t){Ln(()=>me(n),e=>{e&&t(e)},{immediate:!0})}const Y0={x:"translateX",y:"translateY",z:"translateZ"};function El(n={},t=!0){const e=mn({...n}),r=O("");return Ln(e,o=>{let s="",i=!1;if(t&&(o.x||o.y||o.z)){const a=[o.x||0,o.y||0,o.z||0].map(l=>Po(l,W)).join(",");s+=`translate3d(${a}) `,i=!0}for(const[a,l]of Object.entries(o)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const c=xs(a),u=Po(l,c);s+=`${Y0[a]||a}(${u}) `}t&&!i&&(s+="translateZ(0px) "),r.value=s.trim()},{immediate:!0,deep:!0}),{state:e,transform:r}}const X0=["","X","Y","Z"],W0=["perspective","translate","scale","rotate","skew"],jl=["transformPerspective","x","y","z"];W0.forEach(n=>{X0.forEach(t=>{const e=n+t;jl.push(e)})});const U0=new Set(jl);function Ms(n){return U0.has(n)}const G0=new Set(["originX","originY","originZ"]);function Fl(n){return G0.has(n)}function q0(n){const t={},e={};return Object.entries(n).forEach(([r,o])=>{Ms(r)||Fl(r)?t[r]=o:e[r]=o}),{transform:t,style:e}}function Pl(n){const{transform:t,style:e}=q0(n),{transform:r}=El(t),{style:o}=Al(e);return r.value&&(o.value.transform=r.value),o.value}function K0(n,t){let e,r;const{state:o,style:s}=Al();return bs(n,i=>{r=i;for(const a of Object.keys(Sl))i.style[a]===null||i.style[a]===""||Ms(a)||Fl(a)||(o[a]=i.style[a]);e&&Object.entries(e).forEach(([a,l])=>i.style[a]=l),t&&t(o)}),Ln(s,i=>{if(!r){e=i;return}for(const a in i)r.style[a]=i[a]},{immediate:!0}),{style:o}}function Z0(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const e=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return t.reduce((r,o)=>{if(!o)return r;const[s,i]=o.split("("),l=i.split(",").map(u=>e(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...r,[s]:c}},{})}function J0(n,t){Object.entries(Z0(t)).forEach(([e,r])=>{const o=["x","y","z"];if(e==="translate3d"){if(r===0){o.forEach(s=>n[s]=0);return}r.forEach((s,i)=>n[o[i]]=s);return}if(r=Number.parseFloat(`${r}`),e==="translateX"){n.x=r;return}if(e==="translateY"){n.y=r;return}if(e==="translateZ"){n.z=r;return}n[e]=r})}function Q0(n,t){let e,r;const{state:o,transform:s}=El();return bs(n,i=>{r=i,i.style.transform&&J0(o,i.style.transform),e&&(i.style.transform=e),t&&t(o)}),Ln(s,i=>{if(!r){e=i;return}r.style.transform=i},{immediate:!0}),{transform:o}}function nm(n){return Object.entries(n)}function tm(n,t){const e=mn({}),r=i=>Object.entries(i).forEach(([a,l])=>e[a]=l),{style:o}=K0(n,r),{transform:s}=Q0(n,r);return Ln(e,i=>{nm(i).forEach(([a,l])=>{const c=Ms(a)?s:o;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),bs(n,()=>t),{motionProperties:e,style:o,transform:s}}function em(n={}){const t=y(n),e=O();return{state:Dn(()=>{if(e.value)return t[e.value]}),variant:e}}function B(n,t={},e){const{motionProperties:r}=tm(n),{variant:o,state:s}=em(t),i=j0(r,t),a={target:n,variant:o,variants:t,state:s,motionProperties:r,...i};return z0(a,e),a}const rm={initial:{opacity:0},enter:{opacity:1}},om={initial:{opacity:0},visible:{opacity:1}},sm={initial:{opacity:0},visibleOnce:{opacity:1}},im={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},am={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},lm={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},cm={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},um={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},fm={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},dm={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},pm={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},mm={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},hm={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},gm={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},vm={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ym={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},wm={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},xm={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},_m={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},bm={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Mm={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},km={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Cm={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Im={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Lm={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Om={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Tm={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},$m={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Hm={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Sm={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ie={__proto__:null,fade:rm,fadeVisible:om,fadeVisibleOnce:sm,pop:im,popVisible:am,popVisibleOnce:lm,rollBottom:ym,rollLeft:cm,rollRight:dm,rollTop:hm,rollVisibleBottom:wm,rollVisibleLeft:um,rollVisibleOnceBottom:xm,rollVisibleOnceLeft:fm,rollVisibleOnceRight:mm,rollVisibleOnceTop:vm,rollVisibleRight:pm,rollVisibleTop:gm,slideBottom:$m,slideLeft:_m,slideRight:km,slideTop:Lm,slideVisibleBottom:Hm,slideVisibleLeft:bm,slideVisibleOnceBottom:Sm,slideVisibleOnceLeft:Mm,slideVisibleOnceRight:Im,slideVisibleOnceTop:Tm,slideVisibleRight:Cm,slideVisibleTop:Om},Am=Symbol(import.meta.dev?"motionCustomPresets":""),Em={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function jm(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ro(n){if(Array.isArray(n))return n.map(Ro);if(jm(n)){const t={};for(const e in n)t[e]=Ro(n[e]);return t}return n}function Fm(n){const t=mn({}),e=de(Am,{}),r=Dn(()=>n.preset==null?{}:e!=null&&n.preset in e?structuredClone(nn(e)[n.preset]):n.preset in ie?structuredClone(ie[n.preset]):{}),o=Dn(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused}));function s(l,c){for(const u of["delay","duration"]){if(c[u]==null)continue;const f=Number.parseInt(c[u]);for(const d of["enter","visible","visibleOnce"]){const m=l[d];m!=null&&(m.transition??(m.transition={}),m.transition[u]=f)}}return l}const i=Dn(()=>{const l=Xd({},o.value,r.value,n.variants||{});return s({...l},n)});if(import.meta.dev){n.preset!=null&&(ie==null?void 0:ie[n.preset])==null&&(e==null?void 0:e[n.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${n.preset}\` not found.`);const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),Ir(()=>{var f,d,m;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(d=c.variants)!=null&&d.visible&&c.apply("visible"),(m=c.variants)!=null&&m.visibleOnce&&c.apply("visibleOnce")})};ya(()=>{for(const c in t)l(t[c])})}function a(l,c,u){var f;l.props??(l.props={}),(f=l.props).style??(f.style={}),l.props.style={...l.props.style,...u};const d=s(Ro(i.value),l.props);return l.props.onVnodeMounted=({el:m})=>{t[c]=B(m,d)},l.props.onVnodeUpdated=({el:m})=>{const g=Pl(t[c].state);for(const[x,A]of Object.entries(g))m.style[x]=A},l}return{motionConfig:i,setNodeInstance:a}}const N=ne({name:"Motion",props:{...Em,is:{type:[String,Object],default:"div"}},setup(n){const t=gu(),{motionConfig:e,setNodeInstance:r}=Fm(n);return()=>{const o=Pl(e.value.initial||{}),s=He(n.is,void 0,t);return r(s,0,o),s}}}),Pm={name:"SearchIcon"},Rm=Object.assign(Pm,{setup(n){const t=O(),e={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{type:"spring",duration:1e3,bounce:.3}}},r=B(t,{initial:e.normal,enter:e.normal});async function o(){await r.apply(e.animate)}async function s(){await r.apply(e.normal)}return(i,a)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center overflow-hidden",onMouseenter:o,onMouseleave:s},[S(y(N),{ref_key:"target",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>a[0]||(a[0]=[_("circle",{cx:"11",cy:"11",r:"8"},null,-1),_("path",{d:"m21 21-4.3-4.3"},null,-1)])),_:1},512)],32))}}),Nm={name:"CartIcon"},Bm=Object.assign(Nm,{setup(n){const t=O(),e=O(),r=B(t,{initial:{scale:1},enter:{scale:1,y:[0,0,0]}}),o=B(e,{initial:{y:0},enter:{y:0}}),s={normal:{y:0},animate:{y:-1.1,transition:{type:"spring",stiffness:500,damping:30}}},i={normal:{scale:1},animate:{scale:1.1,transition:{duration:200}},hover:{y:[0,-5,0],transition:{duration:300,ease:"easeInOut"}},repeat:{y:[0,-5,0],transition:{duration:400,delay:100,ease:"easeInOut"}}};async function a(){r.apply(i.animate),r.apply(i.hover).then(()=>{r.apply(i.repeat)}),o.apply(s.animate)}async function l(){r.apply(i.normal),o.apply(s.normal)}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[S(y(N),{ref_key:"targetSvg",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>[S(y(N),{ref_key:"targetPath",ref:e,is:"path",d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"},null,512)]),_:1},512)],32))}}),Dm={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Vm={name:"LayersIcon"},zm=Object.assign(Vm,{setup(n){const t={type:"spring",stiffness:100,damping:14,mass:1},e={normal:{y:0,transition:t},animate:{y:-9,transition:t}},r={normal:{y:0,transition:t},animate:{y:-5,transition:t}},o=O(),s=B(o,{initial:e.normal,enter:e.normal}),i=O(),a=B(i,{initial:r.normal,enter:r.normal});function l(){s.apply(e.animate).then(()=>s.apply(e.normal)),a.apply(r.animate).then(()=>a.apply(r.normal))}function c(){s.apply(e.normal),a.apply(r.normal)}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",Dm,[f[0]||(f[0]=_("path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"},null,-1)),S(y(N),{is:"path",ref_key:"pathOneTarget",ref:o,d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"},null,512),S(y(N),{is:"path",ref_key:"pathTwoTarget",ref:i,d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"},null,512)]))],32))}}),Ym={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Xm={name:"GripIcon"},Wm=Object.assign(Xm,{setup(n){const t=[{cx:19,cy:5},{cx:12,cy:5},{cx:19,cy:12},{cx:5,cy:5},{cx:12,cy:12},{cx:19,cy:19},{cx:5,cy:12},{cx:12,cy:19},{cx:5,cy:19}],e=t.length,r=O(new Array(e).fill(0).map(()=>O())),o=mn([]);for(let u=0;u<e;u++)o[u]=B(r.value[u],{initial:{opacity:1},enter:{opacity:1}});Hn(()=>{for(let u=0;u<e;u++)o[u].target=r.value[u]});const s=u=>({transition:{delay:u*100,duration:200}}),i=u=>{for(let f=0;f<e;f++)o[f].apply({opacity:u,...s(f)})},a=async(u=!0)=>{if(!u){i(1);return}for(let f=0;f<e;f++){const d=o[f];f<e-1?d.apply({opacity:.3,...s(f)}):(await d.apply({opacity:.3,...s(f)}),i(1))}};async function l(){a(!0)}async function c(){a(!1)}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",Ym,[(w(),b(pn,null,pt(t,(d,m)=>S(y(N),{is:"circle",key:`${d.cx}_${d.cy}`,ref_for:!0,ref:g=>y(r)[m]=g,cx:d.cx,cy:d.cy,r:"1"},null,8,["cx","cy"])),64))]))],32))}}),Um={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Gm={name:"FrameIcon"},qm=Object.assign(Gm,{setup(n){const t=[{x1:22,x2:2,y1:6,y2:6},{x1:22,x2:2,y1:18,y2:18},{x1:6,x2:6,y1:2,y2:22},{x1:18,x2:18,y1:2,y2:22}],e={type:"spring",stiffness:160,damping:17,mass:1},r={normal:{translateX:0,rotate:0,translateY:0},animate:[{translateY:-4},{translateY:4},{translateX:-4},{translateX:4}]},o=t.length,s=O(new Array(o).fill(0).map(()=>O())),i=mn([]);for(let u=0;u<o;u++)i[u]=B(s.value[u],{initial:r.normal,enter:r.normal});Hn(()=>{for(let u=0;u<o;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<o;f++){const d=u==="animate"?r.animate[f]:r.normal;i[f].apply({...d,transition:e})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",Um,[(w(),b(pn,null,pt(t,(d,m)=>S(y(N),{is:"line",key:`${d.x1}_${d.x2}_${d.y1}_${d.y2}`,ref_for:!0,ref:g=>y(s)[m]=g,stroke:"currentColor",x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2},null,8,["x1","y1","x2","y2"])),64))]))],32))}}),Km={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Zm={name:"SunIcon"},Jm=Object.assign(Zm,{setup(n){const t=["M12 2v2","m19.07 4.93-1.41 1.41","M20 12h2","m17.66 17.66 1.41 1.41","M12 20v2","m6.34 17.66-1.41 1.41","M2 12h2","m4.93 4.93 1.41 1.41"],e={normal:{opacity:1},animate:c=>({opacity:[0,1],transition:{delay:c*100,duration:300}})},r=t.length,o=O(new Array(r).fill(0).map(()=>O())),s=mn([]);for(let c=0;c<r;c++)s[c]=B(o.value[c],{initial:e.normal,enter:e.normal});Hn(()=>{for(let c=0;c<r;c++)s[c].target=o.value[c]});const i=c=>{for(let u=0;u<r;u++){const f=c==="animate"?e.animate(u):e.normal;s[u].apply({transition:{duration:300},...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",Km,[u[0]||(u[0]=_("circle",{cx:"12",cy:"12",r:"4"},null,-1)),(w(),b(pn,null,pt(t,(f,d)=>S(y(N),{is:"path",key:f,ref_for:!0,ref:m=>y(o)[d]=m,d:f},null,8,["d"])),64))]))],32))}}),Qm={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},nh={name:"DeleteIcon"},th=Object.assign(nh,{setup(n){const t={g:{normal:{y:0},animate:{y:-1.1}},path:{normal:{y:0},animate:{y:1}},g2:{normal:{y:0},animate:{y:.5}}},e={transition:{type:"spring",stiffness:500,damping:30}},r=O(),o=B(r,{initial:t.g.normal,enter:t.g.normal}),s=O(),i=B(s,{initial:t.g2.normal,enter:t.g2.normal}),a=O(),l=B(a,{initial:t.path.normal,enter:t.path.normal}),c={g:o,g2:i,path:l},u=m=>{Object.keys(c).forEach(g=>{const x=t[g][m];c[g].apply({...x,...e})})};function f(){u("animate")}function d(){u("normal")}return(m,g)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:f,onMouseleave:d},[(w(),b("svg",Qm,[S(y(N),{is:"g",ref_key:"targetG",ref:r},{default:ln(()=>g[0]||(g[0]=[_("path",{d:"M3 6h18"},null,-1),_("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},null,-1)])),_:1},512),S(y(N),{is:"path",ref_key:"targetPath",ref:a,d:"M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"},null,512),S(y(N),{is:"g",ref_key:"targetG2",ref:s},{default:ln(()=>g[1]||(g[1]=[_("line",{x1:"10",x2:"10",y1:"11",y2:"17"},null,-1),_("line",{x1:"14",x2:"14",y1:"11",y2:"17"},null,-1)])),_:1},512)]))],32))}}),eh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},rh={name:"FileStackIcon"},oh=Object.assign(rh,{setup(n){const t={normal:{translateX:0,translateY:0},animate:[{translateX:-4,translateY:4},{translateX:-4,translateY:4},{translateX:4,translateY:-4}]},e=["M21 7h-3a2 2 0 0 1-2-2V2","M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z","M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"],r=e.length,o=O(new Array(r).fill(0).map(()=>O())),s=mn([]);for(let c=0;c<r;c++)s[c]=B(o.value[c],{initial:t.normal,enter:t.normal});Hn(()=>{for(let c=0;c<r;c++)s[c].target=o.value[c]});const i=c=>{for(let u=0;u<r;u++){const f=c==="animate"?t.animate[u]:t.normal;s[u].apply({transition:{delay:0,duration:300},...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",eh,[(w(),b(pn,null,pt(e,(f,d)=>S(y(N),{is:"path",key:f,ref_for:!0,ref:m=>y(o)[d]=m,d:f},null,8,["d"])),64)),u[0]||(u[0]=_("path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"},null,-1))]))],32))}}),sh={name:"SettingGearIcon"},ih=Object.assign(sh,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},r=O(),o=B(r,{initial:t.normal,enter:t.normal}),s=l=>{const c=t[l];o.apply({...c,...e})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"},null,-1),_("circle",{cx:"12",cy:"12",r:"3"},null,-1)])),_:1},512)],32))}}),ah={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},lh={name:"CalendarCogIcon"},ch=Object.assign(lh,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},r=O(),o=B(r,{initial:t.normal,enter:t.normal}),s=l=>{const c=t[l];o.apply({...c,...e})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",ah,[c[1]||(c[1]=_("path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"},null,-1)),c[2]||(c[2]=_("path",{d:"M16 2v4"},null,-1)),c[3]||(c[3]=_("path",{d:"M3 10h18"},null,-1)),c[4]||(c[4]=_("path",{d:"M8 2v4"},null,-1)),S(y(N),{is:"g",ref_key:"target",ref:r,"transform-origin":"18 18"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"m15.2 16.9-.9-.4"},null,-1),_("path",{d:"m15.2 19.1-.9.4"},null,-1),_("path",{d:"m16.9 15.2-.4-.9"},null,-1),_("path",{d:"m16.9 20.8-.4.9"},null,-1),_("path",{d:"m19.5 14.3-.4.9"},null,-1),_("path",{d:"m19.5 21.7-.4-.9"},null,-1),_("path",{d:"m21.7 16.5-.9.4"},null,-1),_("path",{d:"m21.7 19.5-.9-.4"},null,-1),_("circle",{cx:"18",cy:"18",r:"3"},null,-1)])),_:1},512)]))],32))}}),uh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},fh={name:"MenuIcon"},dh=Object.assign(fh,{setup(n){const t=[{x1:4,y1:6,x2:20,y2:6},{x1:4,y1:12,x2:20,y2:12},{x1:4,y1:18,x2:20,y2:18}],e={type:"spring",stiffness:260,damping:20},r={normal:{rotate:0,y:0,opacity:1},animate:u=>({rotate:u===0?45:u===2?-45:0,y:u===0?6:u===2?-6:0,opacity:u===1?0:1,transition:e}),transformOrigin:["12 6","0 0","12 18"]},o=t.length,s=O(new Array(o).fill(0).map(()=>O())),i=mn([]);for(let u=0;u<o;u++)i[u]=B(s.value[u],{initial:r.normal,enter:r.normal});Hn(()=>{for(let u=0;u<o;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<o;f++){const d=u==="animate"?r.animate(f):r.normal;i[f].apply({transition:e,...d})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",uh,[(w(),b(pn,null,pt(t,(d,m)=>S(y(N),{is:"line",key:`${d.x1}_${d.x2}_${d.y1}_${d.y2}`,ref_for:!0,ref:g=>y(s)[m]=g,stroke:"currentColor",x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,"transform-origin":r.transformOrigin[m]},null,8,["x1","y1","x2","y2","transform-origin"])),64))]))],32))}}),ph={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},mh={name:"CopyIcon"},hh=Object.assign(mh,{setup(n){const t={rect:{normal:{translateY:0,translateX:0},animate:{translateY:-3,translateX:-3}},path:{normal:{x:0,y:0},animate:{x:3,y:3}}},e={type:"spring",stiffness:160,damping:17,mass:1},r=O(),o=B(r,{initial:t.rect.normal,enter:t.rect.normal}),s=O(),i=B(s,{initial:t.path.normal,enter:t.path.normal}),a={rect:o,path:i},l=f=>{Object.keys(a).forEach(d=>{const m=t[d][f];a[d].apply({...m,...e})})};function c(){l("animate")}function u(){l("normal")}return(f,d)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u},[(w(),b("svg",ph,[S(y(N),{is:"rect",ref_key:"targetRect",ref:r,width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},null,512),S(y(N),{is:"path",ref_key:"targetPath",ref:s,d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},null,512)]))],32))}}),gh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},vh={name:"AudioLinesIcon"},yh=Object.assign(vh,{setup(n){const t=["M6 6v11","M10 3v18","M14 8v7","M18 5v13"],e=[1500,1e3,800,1500],r=[[1.5,.5,1.5,1],[1.3,.2,1.2,1],[1.2,.1,1.2,1],[1.2,.1,1.2,1]],o={normal:{scaleY:1},animate:f=>({scaleY:r[f],transition:{duration:e[f],repeat:1/0,repeatType:"reverse",ease:"linear"}})},s=t.length,i=O(new Array(s).fill(0).map(()=>O())),a=mn([]);for(let f=0;f<s;f++)a[f]=B(i.value[f],{initial:o.normal,enter:o.normal});Hn(()=>{for(let f=0;f<s;f++)a[f].target=i.value[f]});const l=f=>{for(let d=0;d<s;d++){const m=f==="animate"?o.animate(d):o.normal;a[d].apply({...m})}};function c(){l("animate")}function u(){l("normal")}return(f,d)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u},[(w(),b("svg",gh,[d[0]||(d[0]=_("path",{d:"M2 10v3"},null,-1)),(w(),b(pn,null,pt(t,(m,g)=>S(y(N),{is:"path",key:m,ref_for:!0,ref:x=>y(i)[g]=x,d:m,"transform-origin":"0 12"},null,8,["d"])),64)),d[1]||(d[1]=_("path",{d:"M22 10v3"},null,-1))]))],32))}}),wh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},xh={name:"ArchiveIcon"},_h=Object.assign(xh,{setup(n){const t={rect:{normal:{y:0},animate:{y:-1.5}},path:{normal:{y:0},animate:{y:2}},path2:{normal:{y:0},animate:{y:1.25}}},e={transition:{type:"spring",stiffness:200,damping:25}},r=O(),o=B(r,{initial:t.rect.normal,enter:t.rect.normal}),s=O(),i=B(s,{initial:t.path.normal,enter:t.path.normal}),a=O(),l=B(a,{initial:t.path2.normal,enter:t.path2.normal}),c={rect:o,path:i,path2:l},u=m=>{Object.keys(c).forEach(x=>{const A=t[x][m];c[x].apply({...A,...e})})};function f(){u("animate")}function d(){u("normal")}return(m,g)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:f,onMouseleave:d},[(w(),b("svg",wh,[S(y(N),{is:"rect",ref_key:"targetRect",ref:r,width:"20",height:"5",x:"2",y:"3",rx:"1"},null,512),S(y(N),{is:"path",ref_key:"targetPath",ref:s,d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},null,512),S(y(N),{is:"path",ref_key:"targetPath2",ref:a,d:"M10 12h4"},null,512)]))],32))}}),bh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Mh={name:"LogoutIcon"},kh=Object.assign(Mh,{setup(n){const t={transition:{duration:400}},e={normal:{x:0,translateX:0},animate:{x:2,translateX:[0,-3,0]}},r=2,o=O(new Array(r).fill(0).map(()=>O())),s=mn([]);for(let c=0;c<r;c++)s[c]=B(o.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<r;u++){const f=c==="animate"?e.animate:e.normal;s[u].apply({...t,...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",bh,[u[0]||(u[0]=_("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},null,-1)),S(y(N),{is:"polyline",ref:y(o)[0],points:"16 17 21 12 16 7"},null,512),S(y(N),{is:"line",ref:y(o)[1],x1:"21",x2:"9",y1:"12",y2:"12"},null,512)]))],32))}}),Ch={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ih={name:"CircleHelpIcon"},Lh=Object.assign(Ih,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]},transformOrigin:"12 12"},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...t,...c})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Ch,[c[1]||(c[1]=_("circle",{cx:"12",cy:"12",r:"10"},null,-1)),S(y(N),{is:"g",ref_key:"target",ref:r,"transform-origin":e.transformOrigin},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},null,-1),_("path",{d:"M12 17h.01"},null,-1)])),_:1},8,["transform-origin"])]))],32))}}),Oh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Th={name:"SquareStackIcon"},$h=Object.assign(Th,{setup(n){const t={normal:{scale:1},animate:[{scale:[1,.9,1],transition:{delay:300,duration:400}},{scale:[1,.9,1],transition:{delay:200,duration:200}},{scale:[1,.8,1],transition:{duration:400}}],transformOrigin:["6 6","12 12","18 18"]},e=3,r=O(new Array(e).fill(0).map(()=>O())),o=mn([]);for(let l=0;l<e;l++)o[l]=B(r.value[l],{initial:t.normal,enter:t.normal});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal;o[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Oh,[S(y(N),{is:"path",ref:y(r)[0],"transform-origin":t.transformOrigin[0],d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),S(y(N),{is:"path",ref:y(r)[1],"transform-origin":t.transformOrigin[1],d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),S(y(N),{is:"rect",ref:y(r)[2],"transform-origin":t.transformOrigin[2],width:"8",height:"8",x:"14",y:"14",rx:"2"},null,8,["transform-origin"])]))],32))}}),Hh={name:"MessageCircleIcon"},Sh=Object.assign(Hh,{setup(n){const t={normal:{scale:1,rotate:0},animate:{scale:1.05,rotate:[0,-7,7,0],transition:{rotate:{duration:500,ease:"easeInOut"},scale:{type:"spring",stiffness:400,damping:10}}}},e=O(),r=B(e,{initial:t.normal,enter:t.animate}),o=a=>{const l=t[a];r.apply(l)};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[S(y(N),{is:"svg",ref_key:"target",ref:e,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>l[0]||(l[0]=[_("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)])),_:1},512)],32))}}),Ah={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Eh={name:"MessageCircleMoreIcon"},jh=Object.assign(Eh,{setup(n){const t={normal:{opacity:1},animate:l=>({opacity:[1,0,0,1,1,0,0,1],transition:{opacity:{repeat:[0,.1,.1+l*.1,.1+l*.1+.1,.5,.6,.6+l*.1,.6+l*.1+.1].map(c=>c*1e3),delay:l*200,duration:1500}}})},e=3,r=O(new Array(e).fill(0).map(()=>O())),o=mn([]);for(let l=0;l<e;l++)o[l]=B(r.value[l],{initial:t.normal,enter:t.normal});Hn(()=>{for(let l=0;l<e;l++)o[l].target=r.value[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate(c):t.normal;o[c].apply(u)}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Ah,[c[0]||(c[0]=_("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)),S(y(N),{is:"path",ref:y(r)[0],d:"M8 12h.01"},null,512),S(y(N),{is:"path",ref:y(r)[1],d:"M12 12h.01"},null,512),S(y(N),{is:"path",ref:y(r)[2],d:"M16 12h.01"},null,512)]))],32))}}),Fh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ph={name:"ArrowLeftIcon"},Rh=Object.assign(Ph,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"19 12"},e=2,r=O(new Array(e).fill(0).map(()=>O())),o=mn([]);for(let l=0;l<e;l++)o[l]=B(r.value[l],{initial:t.normal[l],enter:t.normal[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];o[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Fh,[S(y(N),{is:"path",ref:y(r)[0],d:"m12 19-7-7 7-7"},null,512),S(y(N),{is:"path",ref:y(r)[1],d:"M19 12H5","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),Nh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Bh={name:"ArrowRightIcon"},Dh=Object.assign(Bh,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,-3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"5 12"},e=2,r=O(new Array(e).fill(0).map(()=>O())),o=mn([]);for(let l=0;l<e;l++)o[l]=B(r.value[l],{initial:t.normal[l],enter:t.normal[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];o[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Nh,[S(y(N),{is:"path",ref:y(r)[0],d:"m12 5 7 7-7 7"},null,512),S(y(N),{is:"path",ref:y(r)[1],d:"M5 12h14","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),Vh={name:"RefreshIcon"},zh=Object.assign(Vh,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{rotate:0},animate:{rotate:-50}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),_("path",{d:"M3 3v5h5"},null,-1),_("path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"},null,-1),_("path",{d:"M16 16h5v5"},null,-1)])),_:1},512)],32))}}),Yh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Xh={name:"DownloadIcon"},Wh=Object.assign(Xh,{setup(n){const t={normal:{y:0},animate:{y:2,transition:{type:"spring",stiffness:200,damping:10,mass:1}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=a=>{const l=t[a];r.apply(l)};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(w(),b("svg",Yh,[l[1]||(l[1]=_("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1)),S(y(N),{is:"g",ref_key:"target",ref:e},{default:ln(()=>l[0]||(l[0]=[_("polyline",{points:"7 10 12 15 17 10"},null,-1),_("line",{x1:"12",x2:"12",y1:"15",y2:"3"},null,-1)])),_:1},512)]))],32))}}),Uh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Gh={name:"SquarePenIcon"},qh=Object.assign(Gh,{setup(n){const t={transition:{duration:500,repeat:1,ease:"easeInOut"}},e={normal:{rotate:0,x:0,y:0},animate:{rotate:[-.5,.5,-.5],x:[0,-1,1.5,0],y:[0,1.5,-1,0]}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",Uh,[c[0]||(c[0]=_("path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},null,-1)),S(y(N),{is:"path",ref_key:"target",ref:r,d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"},null,512)]))],32))}}),Kh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Zh={name:"CursorClickIcon"},Jh=Object.assign(Zh,{setup(n){const t=[{d:"M14 4.1 12 6",x:1,y:-1},{d:"m5.1 8-2.9-.8",x:-1,y:0},{d:"m6 12-1.9 2",x:-1,y:1},{d:"M7.2 2.2 8 5.1",x:0,y:-1}],e={normal:{opacity:1,x:0,y:0},animate:({x:d,y:m})=>({opacity:[0,1,0,0,0,0,1],x:[0,d,0,0],y:[0,m,0,0],transition:{delay:1300,duration:800,type:"spring",stiffness:70,damping:10,mass:.4}})},r={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{duration:1e3,bounce:.3}}},o=t.length,s=O(),i=B(s,{initial:r.normal,enter:r.normal}),a=O(new Array(o).fill(0).map(()=>O())),l=mn([]);for(let d=0;d<o;d++)l[d]=B(a.value[d],{initial:e.normal,enter:e.normal});Hn(()=>{for(let d=0;d<o;d++)l[d].target=a.value[d]});const c=d=>{const m=r[d];i.apply(m);for(let g=0;g<o;g++){const{x,y:A}=t[g],M=d==="animate"?e.animate({x,y:A}):e.normal;l[g].apply(M)}};function u(){c("animate")}function f(){c("normal")}return(d,m)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:u,onMouseleave:f},[(w(),b("svg",Kh,[S(y(N),{is:"path",ref_key:"targetCursor",ref:s,d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"},null,512),(w(),b(pn,null,pt(t,(g,x)=>S(y(N),{is:"path",key:g.d,ref_for:!0,ref:A=>y(a)[x]=A,d:g.d},null,8,["d"])),64))]))],32))}}),Qh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n1={name:"ClockIcon"},t1=Object.assign(n1,{setup(n){const t={normal:{rotate:0},animate:{minute:{rotate:45,transition:{duration:500,ease:"easeInOut"}},hour:{rotate:360,transition:{duration:600,ease:[.4,0,.2,1]}}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=O(),s=B(o,{initial:t.normal,enter:t.normal}),i=c=>{let u=c==="animate"?t[c].hour:t[c];r.apply({...u,transition:{duration:600,...u.transition}}),u=c==="animate"?t[c].minute:t[c],s.apply({...u,transition:{duration:500,...u.transition}})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",Qh,[u[0]||(u[0]=_("circle",{cx:"12",cy:"12",r:"10"},null,-1)),S(y(N),{is:"line",ref_key:"targetHour",ref:e,x1:"12",y1:"12",x2:"12",y2:"6","transform-origin":"center center"},null,512),S(y(N),{is:"line",ref_key:"targetMinute",ref:o,x1:"12",y1:"12",x2:"16",y2:"12","transform-origin":"center center"},null,512)]))],32))}}),e1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r1={name:"CompassIcon"},o1=Object.assign(r1,{setup(n){const t={transition:{type:"spring",stiffness:120,damping:15}},e={normal:{rotate:0},animate:{rotate:360}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",e1,[c[0]||(c[0]=_("circle",{cx:"12",cy:"12",r:"10"},null,-1)),S(y(N),{is:"polygon",ref_key:"target",ref:r,points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76","transform-origin":"center center"},null,512)]))],32))}}),s1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},i1={name:"TimerIcon"},a1=Object.assign(i1,{setup(n){const t={timer:{duration:600,ease:[.4,0,.2,1]},button:{duration:300,ease:[.4,0,.2,1]}},e={timer:{normal:{rotate:0},animate:{rotate:315,transition:{deley:100}}},button:{normal:{scale:1,y:0},animate:{scale:[.9,1],y:[0,1,0]}}},r=O(),o=B(r,{initial:e.timer.normal,enter:e.timer.normal}),s=O(),i=B(s,{initial:e.button.normal,enter:e.button.normal}),a=u=>{let f=e.timer[u];o.apply({...f,transition:{...f==null?void 0:f.transition,...t.timer}}),f=e.button[u],i.apply({...f,transition:{...f==null?void 0:f.transition,...t.button}})};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",s1,[S(y(N),{is:"line",ref_key:"targetButton",ref:s,x1:"10",x2:"14",y1:"2",y2:"2","transform-origin":"12 2"},null,512),S(y(N),{is:"line",ref_key:"targetTimer",ref:r,x1:"12",x2:"15",y1:"14",y2:"11","transform-origin":"12 14"},null,512),f[0]||(f[0]=_("circle",{cx:"12",cy:"14",r:"8"},null,-1))]))],32))}}),l1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c1={name:"ExpandIcon"},u1=Object.assign(c1,{setup(n){const t=["m21 21-6-6m6 6v-4.8m0 4.8h-4.8","M3 16.2V21m0 0h4.8M3 21l6-6","M21 7.8V3m0 0h-4.8M21 3l-6 6","M3 7.8V3m0 0h4.8M3 3l6 6"],e={transition:{duration:100,type:"spring",stiffness:250,damping:25}},r={normal:{translateX:"0px",translateY:"0px"},animate:[{translateX:"2px",translateY:"2px"},{translateX:"-2px",translateY:"2px"},{translateX:"2px",translateY:"-2px"},{translateX:"-2px",translateY:"-2px"}]},o=t.length,s=O(new Array(o).fill(0).map(()=>O())),i=mn([]);for(let u=0;u<o;u++)i[u]=B(s.value[u],{initial:r.normal,enter:r.normal});Hn(()=>{for(let u=0;u<o;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<o;f++){const d=u==="animate"?r.animate[f]:r.normal;i[f].apply({...d,...e})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(w(),b("svg",l1,[(w(),b(pn,null,pt(t,(d,m)=>S(y(N),{is:"path",key:d,ref_for:!0,ref:g=>y(s)[m]=g,d},null,8,["d"])),64))]))],32))}}),f1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},d1={name:"GaugeIcon"},p1=Object.assign(d1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{translateX:0,rotate:0,translateY:0},animate:{translateX:.5,translateY:.5,rotate:72},transformOrigin:"12 14"},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",f1,[S(y(N),{is:"path",ref_key:"target",ref:r,d:"m12 14 4-4","transform-origin":e.transformOrigin},null,8,["transform-origin"]),c[0]||(c[0]=_("path",{d:"M3.34 19a10 10 0 1 1 17.32 0"},null,-1))]))],32))}}),m1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h1={name:"BoneIcon"},g1=Object.assign(h1,{setup(n){const t={normal:{rotate:0},animate:{rotate:[0,-8,8,-6,0],transition:{ease:"circIn",rotate:{duration:500}}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=a=>{const l=t[a];r.apply({...l})};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(w(),b("svg",m1,[S(y(N),{is:"path",ref_key:"target",ref:e,d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z","transform-origin":"center center"},null,512)]))],32))}}),v1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y1={name:"AlignHorizontalIcon"},w1=Object.assign(y1,{setup(n){const t={normal:{translateX:0},animate:{translateX:[0,3,-3,2,-2,0],transition:{ease:"linear",translateX:{duration:1e3}}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=a=>{const l=t[a];r.apply(l)};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(w(),b("svg",v1,[S(y(N),{is:"path",ref_key:"target",ref:e,d:"M17 12H7"},null,512),l[0]||(l[0]=_("path",{d:"M19 18H5"},null,-1)),l[1]||(l[1]=_("path",{d:"M21 6H3"},null,-1))]))],32))}}),x1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_1={name:"AlignHorizontalIcon"},b1=Object.assign(_1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={rect:{normal:{scaleX:1},animate:{scaleX:.85}},pathLeft:{normal:{translateX:0,scaleY:1},animate:{translateX:2,scaleY:.9}},pathRight:{normal:{translateX:0,scaleY:1},animate:{translateX:-2,scaleY:.9}},transformOrigin:["12 12","4 12","20 12"]},r=["rect","pathLeft","pathRight"],o=O(new Array(r.length).fill(0).map(()=>O())),s=mn([]);r.forEach((c,u)=>{s[u]=B(o.value[u],{initial:e[c].normal,enter:e[c].normal})}),Hn(()=>{r.forEach((c,u)=>{s[u].target=o.value[u]})});const i=c=>{r.forEach((u,f)=>{const d=e[u][c];s[f].apply({...d,...t})})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",x1,[S(y(N),{is:"rect",ref:y(o)[0],width:"6",height:"10",x:"9",y:"7",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),S(y(N),{is:"path",ref:y(o)[1],d:"M4 22V2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),S(y(N),{is:"path",ref:y(o)[2],d:"M20 22V2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),M1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},k1={name:"AlignVerticalIcon"},C1=Object.assign(k1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{rect:{scaleY:1},pathOne:{translateY:0,scaleX:1},pathTwo:{translateY:0,scaleX:1}},animate:{rect:{scaleY:.85},pathOne:{translateY:-2,scaleX:.9},pathTwo:{translateY:2,scaleX:.9}},transformOrigin:["12 12","12 20","12 4"]},r=["rect","pathOne","pathTwo"],o=O(new Array(r.length).fill(0).map(()=>O())),s=mn([]);r.forEach((c,u)=>{s[u]=B(o.value[u],{initial:e.normal[c],enter:e.normal[c]})}),Hn(()=>{r.forEach((c,u)=>{s[u].target=o.value[u]})});const i=c=>{r.forEach((u,f)=>{const d=e[c][u];s[f].apply({...d,...t})})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",M1,[S(y(N),{is:"rect",ref:y(o)[0],width:"10",height:"6",x:"7",y:"9",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),S(y(N),{is:"path",ref:y(o)[1],d:"M22 20H2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),S(y(N),{is:"path",ref:y(o)[2],d:"M22 4H2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),I1={name:"BellIcon"},L1=Object.assign(I1,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},null,-1),_("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},null,-1)])),_:1},512)],32))}}),O1={name:"BadgeAlertIcon"},T1=Object.assign(O1,{setup(n){const t={duration:500,ease:"easeInOut"},e={normal:{scale:1,rotate:0},animate:{scale:[1,1.1,1.1,1.1,1],rotate:[0,-3,3,-2,2,0],transition:{times:[0,.2,.4,.6,1]}}},r=O(),o=B(r,{initial:e.normal,enter:e.animate}),s=l=>{const c=e[l];o.apply({...c,transition:{...t,...c.transition}})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,-1),_("line",{x1:"12",x2:"12",y1:"8",y2:"12"},null,-1),_("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"},null,-1)])),_:1},512)],32))}}),$1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},H1={name:"BadgePercentIcon"},S1=Object.assign(H1,{setup(n){const t={normal:{rotate:0,transition:{type:"spring",stiffness:60,damping:10,duration:500}},animate:{rotate:180,transition:{delay:100,type:"spring",stiffness:80,damping:13}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=a=>{const l=t[a];r.apply(l)};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(w(),b("svg",$1,[S(y(N),{is:"path",ref_key:"target",ref:e,"transform-origin":"12 12",d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,512),l[0]||(l[0]=_("path",{d:"m15 9-6 6"},null,-1)),l[1]||(l[1]=_("path",{d:"M9 9h.01"},null,-1)),l[2]||(l[2]=_("path",{d:"M15 15h.01"},null,-1))]))],32))}}),A1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},E1={name:"ChartPieIcon"},j1=Object.assign(E1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:15,bounce:.6}},e={normal:{translateX:0,translateY:0},animate:{translateX:1.1,translateY:-1.1}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(w(),b("svg",A1,[S(y(N),{is:"path",ref_key:"target",ref:r,d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"},null,512),c[0]||(c[0]=_("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},null,-1))]))],32))}}),F1={name:"UpvoteIcon"},P1=Object.assign(F1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:-2,rotate:-12}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M7 10v12"},null,-1),_("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"},null,-1)])),_:1},512)],32))}}),R1={name:"DownvoteIcon"},N1=Object.assign(R1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:2,rotate:-12}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M17 14V2"},null,-1),_("path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"},null,-1)])),_:1},512)],32))}}),B1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},D1={name:"UsersIcon"},V1=Object.assign(D1,{setup(n){const t={normal:{translateX:0,transition:{duration:300,type:"spring",stiffness:200,damping:13}},animate:{translateX:[-6,0],transition:{duration:300,delay:100,type:"spring",stiffness:200,damping:13}}},e=O(),r=B(e,{initial:t.normal,enter:t.normal}),o=a=>{const l=t[a];r.apply(l)};function s(){o("animate")}function i(){o("normal")}return(a,l)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(w(),b("svg",B1,[l[1]||(l[1]=_("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},null,-1)),l[2]||(l[2]=_("circle",{cx:"9",cy:"7",r:"4"},null,-1)),S(y(N),{is:"g",ref_key:"target",ref:e,"transform-origin":"center center"},{default:ln(()=>l[0]||(l[0]=[_("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"},null,-1),_("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"},null,-1)])),_:1},512)]))],32))}}),z1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Y1={name:"HandCoinsIcon"},X1=Object.assign(Y1,{setup(n){const t={duration:300,opacity:{duration:200},type:"spring",stiffness:150,damping:15,bounce:.8},e={normal:[{translateY:0,opacity:1},{translateY:0,opacity:1,transition:{delay:150}}],animate:[{opacity:[0,1],translateY:[-20,0]},{opacity:[0,1],translateY:[-20,0],transition:{delay:150}}]},r=2,o=O(new Array(r).fill(0).map(()=>O())),s=mn([]);for(let c=0;c<r;c++)s[c]=B(o.value[c],{initial:e.normal[c],enter:e.normal[c]});const i=c=>{for(let u=0;u<r;u++){const f=e[c][u];s[u].apply({...f,transition:{...t,...f.transition}})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",z1,[u[0]||(u[0]=_("path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"},null,-1)),u[1]||(u[1]=_("path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},null,-1)),u[2]||(u[2]=_("path",{d:"m2 16 6 6"},null,-1)),S(y(N),{is:"circle",ref:y(o)[0],cx:"16",cy:"9",r:"2.9"},null,512),S(y(N),{is:"circle",ref:y(o)[1],cx:"6",cy:"5",r:"3"},null,512)]))],32))}}),W1={name:"SyringeIcon"},U1=Object.assign(W1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-3,translateY:3,rotate:1}},r=O(),o=B(r,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];o.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[S(y(N),{is:"svg",ref_key:"target",ref:r,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 512 512",fill:"currentColor",stroke:"currentColor","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},{default:ln(()=>c[0]||(c[0]=[_("path",{d:"M450.327,224.582l-46.545-46.545c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l15.127,15.127L205.964,406.109c-4.655,4.655-11.636,4.655-16.291,0l-18.618-18.618c-4.655-4.655-11.636-4.655-16.291,0l-18.618,18.618c-4.655,4.655-11.636,4.655-16.291,0l-13.964-13.964c-2.327-2.327-3.491-4.655-3.491-8.145s1.164-5.818,3.491-8.145l18.618-18.618c4.655-4.655,4.655-11.636,0-16.291l-18.618-18.618c-2.327-2.327-3.491-4.655-3.491-8.145c0-3.491,1.164-5.818,3.491-8.146l169.891-169.891c4.655-4.655,4.655-11.636,0-16.291s-11.636-4.655-16.291,0L89.6,289.745c-6.982,6.982-10.473,15.127-10.473,24.436S82.618,332.8,89.6,338.618l10.473,10.473L89.6,359.564c-6.982,6.982-10.473,15.127-10.473,24.436c0,8.145,3.491,16.291,9.309,23.273L3.491,492.218c-4.655,4.655-4.655,11.636,0,16.291C5.818,510.836,8.145,512,11.636,512s5.818-1.164,8.145-3.491l84.945-84.945c13.964,11.636,34.909,11.636,47.709-1.164l10.473-10.473l10.473,10.473c6.982,6.982,16.291,10.473,24.436,10.473c9.309,0,17.455-3.491,24.436-10.473l196.655-196.655l15.127,15.127c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C454.982,236.218,454.982,229.236,450.327,224.582z"},null,-1),_("path",{d:"M508.509,119.855L392.145,3.491c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l39.564,39.564c2.327,2.327,3.491,6.982,3.491,10.473s-1.164,8.145-4.655,10.473l-53.527,54.691l-73.309-73.309c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l73.309,73.309L244.364,251.345L217.6,224.582c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l69.818,69.818c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491c4.655-4.655,4.655-11.636,0-16.291l-26.764-26.764L431.709,97.745c6.982-5.818,15.127-5.818,22.109,0l38.4,38.4c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C513.164,131.491,513.164,124.509,508.509,119.855z"},null,-1)])),_:1},512)],32))}}),G1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",viewBox:"0 0 512 512","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},q1={name:"FlaskIcon"},K1=Object.assign(q1,{setup(n){const t={g:{normal:{rotate:0,translateY:0},animate:{translateY:-12,rotate:[0,5,-5,3,-3,0],transition:{ease:"linear",rotate:{duration:800}}}},path:{normal:{rotate:0,scale:1},animate:{scale:.9,rotate:[0,6,-6,3,-3,0],transition:{duration:800,scale:{duration:300,type:"spring",bounce:.4,stiffness:150,damping:10}}}}},e=O(),r=B(e,{initial:t.g.normal,enter:t.g.normal}),o=O(),s=B(o,{initial:t.path.normal,enter:t.path.normal}),i=c=>{let u=t.g[c];r.apply(u),u=t.path[c],s.apply(u)};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(w(),b("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(w(),b("svg",G1,[S(y(N),{is:"g",ref_key:"targetG",ref:e,"transform-origin":"center center"},{default:ln(()=>u[0]||(u[0]=[_("circle",{cx:"151.273",cy:"407.273",r:"11.636"},null,-1),_("circle",{cx:"244.364",cy:"372.364",r:"11.636"},null,-1),_("circle",{cx:"290.909",cy:"418.909",r:"11.636"},null,-1),_("circle",{cx:"221.091",cy:"453.818",r:"11.636"},null,-1),_("circle",{cx:"372.364",cy:"430.545",r:"11.636"},null,-1)])),_:1},512),S(y(N),{is:"path",ref_key:"targetPath",ref:o,"transform-origin":"center center",d:"M456.145,436.364l-79.127-124.509c0-2.327-2.327-4.655-3.491-5.818l-34.909-55.855c-8.146-13.964-12.8-29.091-12.8-44.218 V67.491c13.964-4.655,23.273-17.455,23.273-32.582C349.091,15.127,333.964,0,314.182,0H197.818 c-19.782,0-34.909,15.127-34.909,34.909c0,19.782,15.127,34.909,34.909,34.909h69.818c6.982,0,11.636-4.655,11.636-11.636 s-4.655-11.636-11.636-11.636h-69.818c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h116.364 c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636v147.782 c0,19.782,5.818,39.564,16.291,55.855l19.782,31.418c-30.255-5.818-64-2.327-88.436,10.473 c-23.273,11.636-60.509,13.964-87.273,4.655l30.255-46.545c10.473-16.291,16.291-36.073,16.291-55.855V104.727 c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v101.236c0,15.127-4.655,30.255-12.8,43.055l-34.909,55.855 c-1.164,1.164-2.327,2.327-3.491,3.491c0,1.164,0,1.164-1.164,2.327L55.855,436.364c-5.818,9.309-9.309,19.782-9.309,31.418v9.309 c0,19.782,15.127,34.909,34.909,34.909h349.091c19.782,0,34.909-15.127,34.909-34.909v-9.309 C465.455,456.145,461.964,445.673,456.145,436.364z M443.345,477.091h-1.164c0,6.982-4.655,11.636-11.636,11.636H81.455 c-6.982,0-11.636-4.655-11.636-11.636v-9.309c0-6.982,2.327-12.8,5.818-18.618l75.636-119.855 c15.127,5.818,32.582,8.145,50.036,8.145c22.109,0,43.055-4.655,60.509-12.8c25.6-12.8,68.655-13.964,96.582-1.164l79.127,125.673 c3.491,5.818,5.818,11.636,5.818,18.618V477.091z"},null,512)]))],32))}}),Z1={class:"flex flex-col sm:my-20 my-10 gap-6"},J1={class:"relative"},Q1=["placeholder","value"],n2={class:"pointer-events-none absolute right-2 top-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100 -translate-y-1/2"},t2={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-3"},e2={class:"text-xs mt-2"},r2={key:0,class:"text-center"},o2=ne({__name:"CompListComp",setup(n){const t=[Rm,Bm,zm,Wm,qm,Jm,th,oh,ih,ch,dh,hh,yh,_h,kh,Lh,$h,Sh,jh,Rh,Dh,zh,Wh,qh,Jh,t1,o1,a1,u1,p1,g1,w1,b1,C1,L1,T1,S1,j1,P1,N1,V1,X1,U1,K1],e=O(),r=O(""),o=yo(t),s=O(!!/iPhone|iPad|iPod|Mac\sOS/.test(navigator.userAgent)),i=c=>{r.value=c.trim(),o.value=r.value===""?t:t.filter(u=>{var f,d,m,g;return(g=(m=(d=(f=u==null?void 0:u.__name)==null?void 0:f.toLowerCase)==null?void 0:d.call(f))==null?void 0:m.includes)==null?void 0:g.call(m,r.value.toLowerCase())})};function a(c){if(!document.startViewTransition){i(c.target.value);return}document.startViewTransition(()=>i(c.target.value))}const l=c=>{(c.ctrlKey||c.metaKey)&&(c.key==="k"||c.key==="K")&&(c.preventDefault(),Ir(()=>e.value.focus()))};return Hn(()=>{document.addEventListener("keydown",l)}),Tr(()=>{document.removeEventListener("keydown",l)}),(c,u)=>{const f=zd;return w(),b("div",Z1,[_("div",J1,[_("input",{ref_key:"inputRef",ref:e,class:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50",placeholder:`Search ${t.length} icons`,value:y(r),onInput:a},null,40,Q1),_("kbd",n2,be(y(s)?"⌘":"Ctrl")+" + K",1)]),_("div",t2,[(w(!0),b(pn,null,pt(y(o),d=>(w(),b("div",{key:d.name||d.__name,class:"p-3 border w-full h-full border-input rounded-md flex items-center justify-center flex-col"},[(w(),st(pu(d))),_("p",e2,be(d.name),1),S(f,{name:d.name},null,8,["name"])]))),128))]),y(o).length===0?(w(),b("div",r2,u[0]||(u[0]=[_("p",{class:"text-xl"},"No icons found",-1),_("p",{class:"text-muted-foreground"},"Try other keywords.",-1)]))):ko("",!0)])}}}),s2=["href","target","rel"],i2={__name:"LinkComp",props:{href:String,target:String,rel:String,class:String||Object||Array,style:String||Object||Array},setup(n){const t=n;return(e,r)=>(w(),b("a",{href:t.href,target:t.target,rel:t.rel||"noreferrer",class:Xn(["inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] text-xs font-medium text-muted-foreground opacity-100",t.class]),style:xt(t.style)},[Le(e.$slots,"default")],14,s2))}},Rl=(n,t)=>{const e=n.__vccOpts||n;for(const[r,o]of t)e[r]=o;return e},a2={},l2={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"},c2={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty"};function u2(n,t){const e=i2;return w(),b(pn,null,[t[6]||(t[6]=_("h1",{class:"sm:text-3xl text-2xl mt-3 text-balance"},"beautifully crafted animated icons for Vue",-1)),t[7]||(t[7]=_("p",{class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"}," an open-source collection of smooth, animated icons for your projects. feel free to use them, share your feedback, and let's make this library awesome together! ",-1)),_("p",l2,[t[1]||(t[1]=er(" Thanks to ")),S(e,{href:"https://icons.pqoqubbw.dev/",target:"_blank"},{default:ln(()=>t[0]||(t[0]=[_("kbd",null,"pqoqubbw/icons",-1)])),_:1})]),_("p",c2,[t[4]||(t[4]=er(" Built with ")),S(e,{href:"https://motion.vueuse.org//",target:"_blank"},{default:ln(()=>t[2]||(t[2]=[_("kbd",null,"@vueuse/motion",-1)])),_:1}),t[5]||(t[5]=er(" and ")),S(e,{href:"https://lucide.dev/",target:"_blank"},{default:ln(()=>t[3]||(t[3]=[_("kbd",null,"lucide",-1)])),_:1})])],64)}const f2=Rl(a2,[["render",u2]]),d2={BASE_URL:"./",DEV:!1,MODE:"pages",PROD:!0,SSR:!1},p2={class:"py-4"},m2={class:"w-full flex items-center justify-between h-full"},h2=["href"],g2={class:"text-base hover:underline"},v2=["href"],y2={__name:"HeaderComp",setup(n){const t=O(jd),e=O(Lo),{MODE:r}=d2,o=O(r==="pages"?Fd:"/");return(s,i)=>(w(),b("header",p2,[_("div",m2,[_("a",{href:y(o)},[_("h1",g2,be(y(t)),1)],8,h2),_("div",null,[_("a",{href:y(e),target:"_blank",class:"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-none hover:bg-accent hover:text-accent-foreground h-9 px-2 py-2 flex items-center justify-between"},i[0]||(i[0]=[_("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[_("path",{d:"M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})],-1)]),8,v2)])])]))}},w2={},x2={class:"container"};function _2(n,t){const e=y2,r=f2,o=o2;return w(),b("div",x2,[S(e),S(r),S(o)])}const b2=Rl(w2,[["render",_2]]),M2=["top","right","bottom","left"],bi=["start","end"],Mi=M2.reduce((n,t)=>n.concat(t,t+"-"+bi[0],t+"-"+bi[1]),[]),Ee=Math.min,jt=Math.max,k2={left:"right",right:"left",bottom:"top",top:"bottom"},C2={start:"end",end:"start"};function No(n,t,e){return jt(n,Ee(t,e))}function Dt(n,t){return typeof n=="function"?n(t):n}function it(n){return n.split("-")[0]}function Un(n){return n.split("-")[1]}function Nl(n){return n==="x"?"y":"x"}function ks(n){return n==="y"?"height":"width"}function Bt(n){return["top","bottom"].includes(it(n))?"y":"x"}function Cs(n){return Nl(Bt(n))}function Bl(n,t,e){e===void 0&&(e=!1);const r=Un(n),o=Cs(n),s=ks(o);let i=o==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=gr(i)),[i,gr(i)]}function I2(n){const t=gr(n);return[hr(n),t,hr(t)]}function hr(n){return n.replace(/start|end/g,t=>C2[t])}function L2(n,t,e){const r=["left","right"],o=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(n){case"top":case"bottom":return e?t?o:r:t?r:o;case"left":case"right":return t?s:i;default:return[]}}function O2(n,t,e,r){const o=Un(n);let s=L2(it(n),e==="start",r);return o&&(s=s.map(i=>i+"-"+o),t&&(s=s.concat(s.map(hr)))),s}function gr(n){return n.replace(/left|right|bottom|top/g,t=>k2[t])}function T2(n){return{top:0,right:0,bottom:0,left:0,...n}}function Dl(n){return typeof n!="number"?T2(n):{top:n,right:n,bottom:n,left:n}}function ye(n){const{x:t,y:e,width:r,height:o}=n;return{width:r,height:o,top:e,left:t,right:t+r,bottom:e+o,x:t,y:e}}function ki(n,t,e){let{reference:r,floating:o}=n;const s=Bt(t),i=Cs(t),a=ks(i),l=it(t),c=s==="y",u=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,d=r[a]/2-o[a]/2;let m;switch(l){case"top":m={x:u,y:r.y-o.height};break;case"bottom":m={x:u,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:f};break;case"left":m={x:r.x-o.width,y:f};break;default:m={x:r.x,y:r.y}}switch(Un(t)){case"start":m[i]-=d*(e&&c?-1:1);break;case"end":m[i]+=d*(e&&c?-1:1);break}return m}const $2=async(n,t,e)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:i}=e,a=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let c=await i.getElementRects({reference:n,floating:t,strategy:o}),{x:u,y:f}=ki(c,r,l),d=r,m={},g=0;for(let x=0;x<a.length;x++){const{name:A,fn:M}=a[x],{x:C,y:I,data:L,reset:R}=await M({x:u,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:m,rects:c,platform:i,elements:{reference:n,floating:t}});u=C??u,f=I??f,m={...m,[A]:{...m[A],...L}},R&&g<=50&&(g++,typeof R=="object"&&(R.placement&&(d=R.placement),R.rects&&(c=R.rects===!0?await i.getElementRects({reference:n,floating:t,strategy:o}):R.rects),{x:u,y:f}=ki(c,d,l)),x=-1)}return{x:u,y:f,placement:d,strategy:o,middlewareData:m}};async function Rr(n,t){var e;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:i,elements:a,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:m=0}=Dt(t,n),g=Dl(m),A=a[d?f==="floating"?"reference":"floating":f],M=ye(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(A)))==null||e?A:A.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),C=f==="floating"?{x:r,y:o,width:i.floating.width,height:i.floating.height}:i.reference,I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),L=await(s.isElement==null?void 0:s.isElement(I))?await(s.getScale==null?void 0:s.getScale(I))||{x:1,y:1}:{x:1,y:1},R=ye(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:I,strategy:l}):C);return{top:(M.top-R.top+g.top)/L.y,bottom:(R.bottom-M.bottom+g.bottom)/L.y,left:(M.left-R.left+g.left)/L.x,right:(R.right-M.right+g.right)/L.x}}const H2=n=>({name:"arrow",options:n,async fn(t){const{x:e,y:r,placement:o,rects:s,platform:i,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Dt(n,t)||{};if(c==null)return{};const f=Dl(u),d={x:e,y:r},m=Cs(o),g=ks(m),x=await i.getDimensions(c),A=m==="y",M=A?"top":"left",C=A?"bottom":"right",I=A?"clientHeight":"clientWidth",L=s.reference[g]+s.reference[m]-d[m]-s.floating[g],R=d[m]-s.reference[m],U=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c));let G=U?U[I]:0;(!G||!await(i.isElement==null?void 0:i.isElement(U)))&&(G=a.floating[I]||s.floating[g]);const un=L/2-R/2,rn=G/2-x[g]/2-1,Q=Ee(f[M],rn),hn=Ee(f[C],rn),vn=Q,xn=G-x[g]-hn,dn=G/2-x[g]/2+un,Rn=No(vn,dn,xn),cn=!l.arrow&&Un(o)!=null&&dn!==Rn&&s.reference[g]/2-(dn<vn?Q:hn)-x[g]/2<0,K=cn?dn<vn?dn-vn:dn-xn:0;return{[m]:d[m]+K,data:{[m]:Rn,centerOffset:dn-Rn-K,...cn&&{alignmentOffset:K}},reset:cn}}});function S2(n,t,e){return(n?[...e.filter(o=>Un(o)===n),...e.filter(o=>Un(o)!==n)]:e.filter(o=>it(o)===o)).filter(o=>n?Un(o)===n||(t?hr(o)!==o:!1):!0)}const A2=function(n){return n===void 0&&(n={}),{name:"autoPlacement",options:n,async fn(t){var e,r,o;const{rects:s,middlewareData:i,placement:a,platform:l,elements:c}=t,{crossAxis:u=!1,alignment:f,allowedPlacements:d=Mi,autoAlignment:m=!0,...g}=Dt(n,t),x=f!==void 0||d===Mi?S2(f||null,m,d):d,A=await Rr(t,g),M=((e=i.autoPlacement)==null?void 0:e.index)||0,C=x[M];if(C==null)return{};const I=Bl(C,s,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==C)return{reset:{placement:x[0]}};const L=[A[it(C)],A[I[0]],A[I[1]]],R=[...((r=i.autoPlacement)==null?void 0:r.overflows)||[],{placement:C,overflows:L}],U=x[M+1];if(U)return{data:{index:M+1,overflows:R},reset:{placement:U}};const G=R.map(Q=>{const hn=Un(Q.placement);return[Q.placement,hn&&u?Q.overflows.slice(0,2).reduce((vn,xn)=>vn+xn,0):Q.overflows[0],Q.overflows]}).sort((Q,hn)=>Q[1]-hn[1]),rn=((o=G.filter(Q=>Q[2].slice(0,Un(Q[0])?2:3).every(hn=>hn<=0))[0])==null?void 0:o[0])||G[0][0];return rn!==a?{data:{index:M+1,overflows:R},reset:{placement:rn}}:{}}}},E2=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(t){var e,r;const{placement:o,middlewareData:s,rects:i,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...A}=Dt(n,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const M=it(o),C=Bt(a),I=it(a)===a,L=await(l.isRTL==null?void 0:l.isRTL(c.floating)),R=d||(I||!x?[gr(a)]:I2(a)),U=g!=="none";!d&&U&&R.push(...O2(a,x,g,L));const G=[a,...R],un=await Rr(t,A),rn=[];let Q=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&rn.push(un[M]),f){const dn=Bl(o,i,L);rn.push(un[dn[0]],un[dn[1]])}if(Q=[...Q,{placement:o,overflows:rn}],!rn.every(dn=>dn<=0)){var hn,vn;const dn=(((hn=s.flip)==null?void 0:hn.index)||0)+1,Rn=G[dn];if(Rn)return{data:{index:dn,overflows:Q},reset:{placement:Rn}};let cn=(vn=Q.filter(K=>K.overflows[0]<=0).sort((K,q)=>K.overflows[1]-q.overflows[1])[0])==null?void 0:vn.placement;if(!cn)switch(m){case"bestFit":{var xn;const K=(xn=Q.filter(q=>{if(U){const bn=Bt(q.placement);return bn===C||bn==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(bn=>bn>0).reduce((bn,Vt)=>bn+Vt,0)]).sort((q,bn)=>q[1]-bn[1])[0])==null?void 0:xn[0];K&&(cn=K);break}case"initialPlacement":cn=a;break}if(o!==cn)return{reset:{placement:cn}}}return{}}}};async function j2(n,t){const{placement:e,platform:r,elements:o}=n,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),i=it(e),a=Un(e),l=Bt(e)==="y",c=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,f=Dt(t,n);let{mainAxis:d,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*u,y:d*c}:{x:d*c,y:m*u}}const F2=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(t){var e,r;const{x:o,y:s,placement:i,middlewareData:a}=t,l=await j2(t,n);return i===((e=a.offset)==null?void 0:e.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:i}}}}},P2=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(t){const{x:e,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:a={fn:A=>{let{x:M,y:C}=A;return{x:M,y:C}}},...l}=Dt(n,t),c={x:e,y:r},u=await Rr(t,l),f=Bt(it(o)),d=Nl(f);let m=c[d],g=c[f];if(s){const A=d==="y"?"top":"left",M=d==="y"?"bottom":"right",C=m+u[A],I=m-u[M];m=No(C,m,I)}if(i){const A=f==="y"?"top":"left",M=f==="y"?"bottom":"right",C=g+u[A],I=g-u[M];g=No(C,g,I)}const x=a.fn({...t,[d]:m,[f]:g});return{...x,data:{x:x.x-e,y:x.y-r,enabled:{[d]:s,[f]:i}}}}}},R2=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(t){var e,r;const{placement:o,rects:s,platform:i,elements:a}=t,{apply:l=()=>{},...c}=Dt(n,t),u=await Rr(t,c),f=it(o),d=Un(o),m=Bt(o)==="y",{width:g,height:x}=s.floating;let A,M;f==="top"||f==="bottom"?(A=f,M=d===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(M=f,A=d==="end"?"top":"bottom");const C=x-u.top-u.bottom,I=g-u.left-u.right,L=Ee(x-u[A],C),R=Ee(g-u[M],I),U=!t.middlewareData.shift;let G=L,un=R;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(un=I),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(G=C),U&&!d){const Q=jt(u.left,0),hn=jt(u.right,0),vn=jt(u.top,0),xn=jt(u.bottom,0);m?un=g-2*(Q!==0||hn!==0?Q+hn:jt(u.left,u.right)):G=x-2*(vn!==0||xn!==0?vn+xn:jt(u.top,u.bottom))}await l({...t,availableWidth:un,availableHeight:G});const rn=await i.getDimensions(a.floating);return g!==rn.width||x!==rn.height?{reset:{rects:!0}}:{}}}};function Nn(n){var t;return((t=n.ownerDocument)==null?void 0:t.defaultView)||window}function et(n){return Nn(n).getComputedStyle(n)}const Ci=Math.min,we=Math.max,vr=Math.round;function Vl(n){const t=et(n);let e=parseFloat(t.width),r=parseFloat(t.height);const o=n.offsetWidth,s=n.offsetHeight,i=vr(e)!==o||vr(r)!==s;return i&&(e=o,r=s),{width:e,height:r,fallback:i}}function kt(n){return Yl(n)?(n.nodeName||"").toLowerCase():""}let Qe;function zl(){if(Qe)return Qe;const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?(Qe=n.brands.map(t=>t.brand+"/"+t.version).join(" "),Qe):navigator.userAgent}function rt(n){return n instanceof Nn(n).HTMLElement}function _t(n){return n instanceof Nn(n).Element}function Yl(n){return n instanceof Nn(n).Node}function Ii(n){return typeof ShadowRoot>"u"?!1:n instanceof Nn(n).ShadowRoot||n instanceof ShadowRoot}function Nr(n){const{overflow:t,overflowX:e,overflowY:r,display:o}=et(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(o)}function N2(n){return["table","td","th"].includes(kt(n))}function Bo(n){const t=/firefox/i.test(zl()),e=et(n),r=e.backdropFilter||e.WebkitBackdropFilter;return e.transform!=="none"||e.perspective!=="none"||!!r&&r!=="none"||t&&e.willChange==="filter"||t&&!!e.filter&&e.filter!=="none"||["transform","perspective"].some(o=>e.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const s=e.contain;return s!=null&&s.includes(o)})}function Xl(){return!/^((?!chrome|android).)*safari/i.test(zl())}function Is(n){return["html","body","#document"].includes(kt(n))}function Wl(n){return _t(n)?n:n.contextElement}const Ul={x:1,y:1};function Jt(n){const t=Wl(n);if(!rt(t))return Ul;const e=t.getBoundingClientRect(),{width:r,height:o,fallback:s}=Vl(t);let i=(s?vr(e.width):e.width)/r,a=(s?vr(e.height):e.height)/o;return i&&Number.isFinite(i)||(i=1),a&&Number.isFinite(a)||(a=1),{x:i,y:a}}function je(n,t,e,r){var o,s;t===void 0&&(t=!1),e===void 0&&(e=!1);const i=n.getBoundingClientRect(),a=Wl(n);let l=Ul;t&&(r?_t(r)&&(l=Jt(r)):l=Jt(n));const c=a?Nn(a):window,u=!Xl()&&e;let f=(i.left+(u&&((o=c.visualViewport)==null?void 0:o.offsetLeft)||0))/l.x,d=(i.top+(u&&((s=c.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,m=i.width/l.x,g=i.height/l.y;if(a){const x=Nn(a),A=r&&_t(r)?Nn(r):r;let M=x.frameElement;for(;M&&r&&A!==x;){const C=Jt(M),I=M.getBoundingClientRect(),L=getComputedStyle(M);I.x+=(M.clientLeft+parseFloat(L.paddingLeft))*C.x,I.y+=(M.clientTop+parseFloat(L.paddingTop))*C.y,f*=C.x,d*=C.y,m*=C.x,g*=C.y,f+=I.x,d+=I.y,M=Nn(M).frameElement}}return{width:m,height:g,top:d,right:f+m,bottom:d+g,left:f,x:f,y:d}}function bt(n){return((Yl(n)?n.ownerDocument:n.document)||window.document).documentElement}function Br(n){return _t(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function Gl(n){return je(bt(n)).left+Br(n).scrollLeft}function Fe(n){if(kt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ii(n)&&n.host||bt(n);return Ii(t)?t.host:t}function ql(n){const t=Fe(n);return Is(t)?t.ownerDocument.body:rt(t)&&Nr(t)?t:ql(t)}function yr(n,t){var e;t===void 0&&(t=[]);const r=ql(n),o=r===((e=n.ownerDocument)==null?void 0:e.body),s=Nn(r);return o?t.concat(s,s.visualViewport||[],Nr(r)?r:[]):t.concat(r,yr(r))}function Li(n,t,e){return t==="viewport"?ye(function(r,o){const s=Nn(r),i=bt(r),a=s.visualViewport;let l=i.clientWidth,c=i.clientHeight,u=0,f=0;if(a){l=a.width,c=a.height;const d=Xl();(d||!d&&o==="fixed")&&(u=a.offsetLeft,f=a.offsetTop)}return{width:l,height:c,x:u,y:f}}(n,e)):_t(t)?ye(function(r,o){const s=je(r,!0,o==="fixed"),i=s.top+r.clientTop,a=s.left+r.clientLeft,l=rt(r)?Jt(r):{x:1,y:1};return{width:r.clientWidth*l.x,height:r.clientHeight*l.y,x:a*l.x,y:i*l.y}}(t,e)):ye(function(r){const o=bt(r),s=Br(r),i=r.ownerDocument.body,a=we(o.scrollWidth,o.clientWidth,i.scrollWidth,i.clientWidth),l=we(o.scrollHeight,o.clientHeight,i.scrollHeight,i.clientHeight);let c=-s.scrollLeft+Gl(r);const u=-s.scrollTop;return et(i).direction==="rtl"&&(c+=we(o.clientWidth,i.clientWidth)-a),{width:a,height:l,x:c,y:u}}(bt(n)))}function Oi(n){return rt(n)&&et(n).position!=="fixed"?n.offsetParent:null}function Ti(n){const t=Nn(n);let e=Oi(n);for(;e&&N2(e)&&et(e).position==="static";)e=Oi(e);return e&&(kt(e)==="html"||kt(e)==="body"&&et(e).position==="static"&&!Bo(e))?t:e||function(r){let o=Fe(r);for(;rt(o)&&!Is(o);){if(Bo(o))return o;o=Fe(o)}return null}(n)||t}function B2(n,t,e){const r=rt(t),o=bt(t),s=je(n,!0,e==="fixed",t);let i={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&e!=="fixed")if((kt(t)!=="body"||Nr(o))&&(i=Br(t)),rt(t)){const l=je(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}else o&&(a.x=Gl(o));return{x:s.left+i.scrollLeft-a.x,y:s.top+i.scrollTop-a.y,width:s.width,height:s.height}}const D2={getClippingRect:function(n){let{element:t,boundary:e,rootBoundary:r,strategy:o}=n;const s=e==="clippingAncestors"?function(c,u){const f=u.get(c);if(f)return f;let d=yr(c).filter(A=>_t(A)&&kt(A)!=="body"),m=null;const g=et(c).position==="fixed";let x=g?Fe(c):c;for(;_t(x)&&!Is(x);){const A=et(x),M=Bo(x);(g?M||m:M||A.position!=="static"||!m||!["absolute","fixed"].includes(m.position))?m=A:d=d.filter(C=>C!==x),x=Fe(x)}return u.set(c,d),d}(t,this._c):[].concat(e),i=[...s,r],a=i[0],l=i.reduce((c,u)=>{const f=Li(t,u,o);return c.top=we(f.top,c.top),c.right=Ci(f.right,c.right),c.bottom=Ci(f.bottom,c.bottom),c.left=we(f.left,c.left),c},Li(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(n){let{rect:t,offsetParent:e,strategy:r}=n;const o=rt(e),s=bt(e);if(e===s)return t;let i={scrollLeft:0,scrollTop:0},a={x:1,y:1};const l={x:0,y:0};if((o||!o&&r!=="fixed")&&((kt(e)!=="body"||Nr(s))&&(i=Br(e)),rt(e))){const c=je(e);a=Jt(e),l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-i.scrollLeft*a.x+l.x,y:t.y*a.y-i.scrollTop*a.y+l.y}},isElement:_t,getDimensions:function(n){return rt(n)?Vl(n):n.getBoundingClientRect()},getOffsetParent:Ti,getDocumentElement:bt,getScale:Jt,async getElementRects(n){let{reference:t,floating:e,strategy:r}=n;const o=this.getOffsetParent||Ti,s=this.getDimensions;return{reference:B2(t,await o(e),r),floating:{x:0,y:0,...await s(e)}}},getClientRects:n=>Array.from(n.getClientRects()),isRTL:n=>et(n).direction==="rtl"},V2=(n,t,e)=>{const r=new Map,o={platform:D2,...e},s={...o.platform,_c:r};return $2(n,t,{...o,platform:s})},Rt={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:150,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,autoHideOnMousedown:!1,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:n=>[...n,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover"],delay:{show:0,hide:400}}}};function Pe(n,t){let e=Rt.themes[n]||{},r;do r=e[t],typeof r>"u"?e.$extend?e=Rt.themes[e.$extend]||{}:(e=null,r=Rt[t]):e=null;while(e);return r}function z2(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend&&!e.$resetCss?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t.map(r=>`v-popper--theme-${r}`)}function $i(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t}let Re=!1;if(typeof window<"u"){Re=!1;try{const n=Object.defineProperty({},"passive",{get(){Re=!0}});window.addEventListener("test",null,n)}catch{}}let Kl=!1;typeof window<"u"&&typeof navigator<"u"&&(Kl=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Zl=["auto","top","bottom","left","right"].reduce((n,t)=>n.concat([t,`${t}-start`,`${t}-end`]),[]),Hi={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart",pointer:"pointerdown"},Si={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend",pointer:"pointerup"};function Ai(n,t){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}function co(){return new Promise(n=>requestAnimationFrame(()=>{requestAnimationFrame(n)}))}const Yn=[];let At=null;const Ei={};function ji(n){let t=Ei[n];return t||(t=Ei[n]=[]),t}let Do=function(){};typeof window<"u"&&(Do=window.Element);function J(n){return function(t){return Pe(t.theme,n)}}const uo="__floating-vue__popper",Jl=()=>ne({name:"VPopper",provide(){return{[uo]:{parentPopper:this}}},inject:{[uo]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:J("disabled")},positioningDisabled:{type:Boolean,default:J("positioningDisabled")},placement:{type:String,default:J("placement"),validator:n=>Zl.includes(n)},delay:{type:[String,Number,Object],default:J("delay")},distance:{type:[Number,String],default:J("distance")},skidding:{type:[Number,String],default:J("skidding")},triggers:{type:Array,default:J("triggers")},showTriggers:{type:[Array,Function],default:J("showTriggers")},hideTriggers:{type:[Array,Function],default:J("hideTriggers")},popperTriggers:{type:Array,default:J("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:J("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:J("popperHideTriggers")},container:{type:[String,Object,Do,Boolean],default:J("container")},boundary:{type:[String,Do],default:J("boundary")},strategy:{type:String,validator:n=>["absolute","fixed"].includes(n),default:J("strategy")},autoHide:{type:[Boolean,Function],default:J("autoHide")},handleResize:{type:Boolean,default:J("handleResize")},instantMove:{type:Boolean,default:J("instantMove")},eagerMount:{type:Boolean,default:J("eagerMount")},popperClass:{type:[String,Array,Object],default:J("popperClass")},computeTransformOrigin:{type:Boolean,default:J("computeTransformOrigin")},autoMinSize:{type:Boolean,default:J("autoMinSize")},autoSize:{type:[Boolean,String],default:J("autoSize")},autoMaxSize:{type:Boolean,default:J("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:J("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:J("preventOverflow")},overflowPadding:{type:[Number,String],default:J("overflowPadding")},arrowPadding:{type:[Number,String],default:J("arrowPadding")},arrowOverflow:{type:Boolean,default:J("arrowOverflow")},flip:{type:Boolean,default:J("flip")},shift:{type:Boolean,default:J("shift")},shiftCrossAxis:{type:Boolean,default:J("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:J("noAutoFocus")},disposeTimeout:{type:Number,default:J("disposeTimeout")}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},randomId:`popper_${[Math.random(),Date.now()].map(n=>n.toString(36).substring(2,10)).join("_")}`,shownChildren:new Set,lastAutoHide:!0,pendingHide:!1,containsGlobalTarget:!1,isDisposed:!0,mouseDownContains:!1}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:{...this.classes,popperClass:this.popperClass},result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var n;return(n=this[uo])==null?void 0:n.parentPopper},hasPopperShowTriggerHover(){var n,t;return((n=this.popperTriggers)==null?void 0:n.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:{shown:"$_autoShowHide",disabled(n){n?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())},triggers:{handler:"$_refreshListeners",deep:!0},positioningDisabled:"$_refreshListeners",...["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((n,t)=>(n[t]="$_computePosition",n),{})},created(){this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:n=null,skipDelay:t=!1,force:e=!1}={}){var r,o;(r=this.parentPopper)!=null&&r.lockedChild&&this.parentPopper.lockedChild!==this||(this.pendingHide=!1,(e||!this.disabled)&&(((o=this.parentPopper)==null?void 0:o.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(n,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:n=null,skipDelay:t=!1}={}){var e;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((e=this.parentPopper)==null?void 0:e.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.pendingHide=!1,this.$_scheduleHide(n,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var n;this.isDisposed&&(this.isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=((n=this.referenceNode)==null?void 0:n.call(this))??this.$el,this.$_targetNodes=this.targetNodes().filter(t=>t.nodeType===t.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.isDisposed||(this.isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){if(this.isDisposed||this.positioningDisabled)return;const n={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&n.middleware.push(F2({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");if(t?n.middleware.push(A2({alignment:this.placement.split("-")[1]??""})):n.placement=this.placement,this.preventOverflow&&(this.shift&&n.middleware.push(P2({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&n.middleware.push(E2({padding:this.overflowPadding,boundary:this.boundary}))),n.middleware.push(H2({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&n.middleware.push({name:"arrowOverflow",fn:({placement:r,rects:o,middlewareData:s})=>{let i;const{centerOffset:a}=s.arrow;return r.startsWith("top")||r.startsWith("bottom")?i=Math.abs(a)>o.reference.width/2:i=Math.abs(a)>o.reference.height/2,{data:{overflow:i}}}}),this.autoMinSize||this.autoSize){const r=this.autoSize?this.autoSize:this.autoMinSize?"min":null;n.middleware.push({name:"autoSize",fn:({rects:o,placement:s,middlewareData:i})=>{var a;if((a=i.autoSize)!=null&&a.skip)return{};let l,c;return s.startsWith("top")||s.startsWith("bottom")?l=o.reference.width:c=o.reference.height,this.$_innerNode.style[r==="min"?"minWidth":r==="max"?"maxWidth":"width"]=l!=null?`${l}px`:null,this.$_innerNode.style[r==="min"?"minHeight":r==="max"?"maxHeight":"height"]=c!=null?`${c}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,n.middleware.push(R2({boundary:this.boundary,padding:this.overflowPadding,apply:({availableWidth:r,availableHeight:o})=>{this.$_innerNode.style.maxWidth=r!=null?`${r}px`:null,this.$_innerNode.style.maxHeight=o!=null?`${o}px`:null}})));const e=await V2(this.$_referenceNode,this.$_popperNode,n);Object.assign(this.result,{x:e.x,y:e.y,placement:e.placement,strategy:e.strategy,arrow:{...e.middlewareData.arrow,...e.middlewareData.arrowOverflow}})},$_scheduleShow(n,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),At&&this.instantMove&&At.instantMove&&At!==this.parentPopper){At.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(n,t=!1){if(this.shownChildren.size>0){this.pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(At=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(n){const t=this.delay;return parseInt(t&&t[n]||t||0)},async $_applyShow(n=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=n,!this.isShown&&(this.$_ensureTeleport(),await co(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...yr(this.$_referenceNode),...yr(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),e=this.$_popperNode.querySelector(".v-popper__wrapper"),r=e.parentNode.getBoundingClientRect(),o=t.x+t.width/2-(r.left+e.offsetLeft),s=t.y+t.height/2-(r.top+e.offsetTop);this.result.transformOrigin=`${o}px ${s}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const n=this.showGroup;if(n){let t;for(let e=0;e<Yn.length;e++)t=Yn[e],t.showGroup!==n&&(t.hide(),t.$emit("close-group"))}Yn.push(this),document.body.classList.add("v-popper--some-open");for(const t of $i(this.theme))ji(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await co(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(n=!1){if(this.shownChildren.size>0){this.pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=n,Ai(Yn,this),Yn.length===0&&document.body.classList.remove("v-popper--some-open");for(const e of $i(this.theme)){const r=ji(e);Ai(r,this),r.length===0&&document.body.classList.remove(`v-popper--some-open--${e}`)}At===this&&(At=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=this.disposeTimeout;t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await co(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.isDisposed)return;let n=this.container;if(typeof n=="string"?n=window.document.querySelector(n):n===!1&&(n=this.$_targetNodes[0].parentNode),!n)throw new Error("No container for popover: "+this.container);n.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const n=e=>{this.isShown&&!this.$_hideInProgress||(e.usedByTooltip=!0,!this.$_preventShow&&this.show({event:e}))};this.$_registerTriggerListeners(this.$_targetNodes,Hi,this.triggers,this.showTriggers,n),this.$_registerTriggerListeners([this.$_popperNode],Hi,this.popperTriggers,this.popperShowTriggers,n);const t=e=>{e.usedByTooltip||this.hide({event:e})};this.$_registerTriggerListeners(this.$_targetNodes,Si,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],Si,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(n,t,e){this.$_events.push({targetNodes:n,eventType:t,handler:e}),n.forEach(r=>r.addEventListener(t,e,Re?{passive:!0}:void 0))},$_registerTriggerListeners(n,t,e,r,o){let s=e;r!=null&&(s=typeof r=="function"?r(s):r),s.forEach(i=>{const a=t[i];a&&this.$_registerEventListeners(n,a,o)})},$_removeEventListeners(n){const t=[];this.$_events.forEach(e=>{const{targetNodes:r,eventType:o,handler:s}=e;!n||n===o?r.forEach(i=>i.removeEventListener(o,s)):t.push(e)}),this.$_events=t},$_refreshListeners(){this.isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(n,t=!1){this.$_showFrameLocked||(this.hide({event:n}),n.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(n,t){for(const e of this.$_targetNodes){const r=e.getAttribute(n);r&&(e.removeAttribute(n),e.setAttribute(t,r))}},$_applyAttrsToTarget(n){for(const t of this.$_targetNodes)for(const e in n){const r=n[e];r==null?t.removeAttribute(e):t.setAttribute(e,r)}},$_updateParentShownChildren(n){let t=this.parentPopper;for(;t;)n?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const n=this.$_referenceNode.getBoundingClientRect();if(xe>=n.left&&xe<=n.right&&_e>=n.top&&_e<=n.bottom){const t=this.$_popperNode.getBoundingClientRect(),e=xe-mt,r=_e-ht,o=t.left+t.width/2-mt+(t.top+t.height/2)-ht+t.width+t.height,s=mt+e*o,i=ht+r*o;return nr(mt,ht,s,i,t.left,t.top,t.left,t.bottom)||nr(mt,ht,s,i,t.left,t.top,t.right,t.top)||nr(mt,ht,s,i,t.right,t.top,t.right,t.bottom)||nr(mt,ht,s,i,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});if(typeof document<"u"&&typeof window<"u"){if(Kl){const n=Re?{passive:!0,capture:!0}:!0;document.addEventListener("touchstart",t=>Fi(t),n),document.addEventListener("touchend",t=>Pi(t,!0),n)}else window.addEventListener("mousedown",n=>Fi(n),!0),window.addEventListener("click",n=>Pi(n,!1),!0);window.addEventListener("resize",W2)}function Fi(n,t){for(let e=0;e<Yn.length;e++){const r=Yn[e];try{r.mouseDownContains=r.popperNode().contains(n.target)}catch{}}}function Pi(n,t){Y2(n,t)}function Y2(n,t){const e={};for(let r=Yn.length-1;r>=0;r--){const o=Yn[r];try{const s=o.containsGlobalTarget=o.mouseDownContains||o.popperNode().contains(n.target);o.pendingHide=!1,requestAnimationFrame(()=>{if(o.pendingHide=!1,!e[o.randomId]&&Ri(o,s,n)){if(o.$_handleGlobalClose(n,t),!n.closeAllPopover&&n.closePopover&&s){let a=o.parentPopper;for(;a;)e[a.randomId]=!0,a=a.parentPopper;return}let i=o.parentPopper;for(;i&&Ri(i,i.containsGlobalTarget,n);)i.$_handleGlobalClose(n,t),i=i.parentPopper}})}catch{}}}function Ri(n,t,e){return e.closeAllPopover||e.closePopover&&t||X2(n,e)&&!t}function X2(n,t){if(typeof n.autoHide=="function"){const e=n.autoHide(t);return n.lastAutoHide=e,e}return n.autoHide}function W2(){for(let n=0;n<Yn.length;n++)Yn[n].$_computePosition()}let mt=0,ht=0,xe=0,_e=0;typeof window<"u"&&window.addEventListener("mousemove",n=>{mt=xe,ht=_e,xe=n.clientX,_e=n.clientY},Re?{passive:!0}:void 0);function nr(n,t,e,r,o,s,i,a){const l=((i-o)*(t-s)-(a-s)*(n-o))/((a-s)*(e-n)-(i-o)*(r-t)),c=((e-n)*(t-s)-(r-t)*(n-o))/((a-s)*(e-n)-(i-o)*(r-t));return l>=0&&l<=1&&c>=0&&c<=1}const U2={extends:Jl()},Dr=(n,t)=>{const e=n.__vccOpts||n;for(const[r,o]of t)e[r]=o;return e};function G2(n,t,e,r,o,s){return w(),b("div",{ref:"reference",class:Xn(["v-popper",{"v-popper--shown":n.slotData.isShown}])},[Le(n.$slots,"default",yc(Ba(n.slotData)))],2)}const q2=Dr(U2,[["render",G2]]);function K2(){var n=window.navigator.userAgent,t=n.indexOf("MSIE ");if(t>0)return parseInt(n.substring(t+5,n.indexOf(".",t)),10);var e=n.indexOf("Trident/");if(e>0){var r=n.indexOf("rv:");return parseInt(n.substring(r+3,n.indexOf(".",r)),10)}var o=n.indexOf("Edge/");return o>0?parseInt(n.substring(o+5,n.indexOf(".",o)),10):-1}let ar;function Vo(){Vo.init||(Vo.init=!0,ar=K2()!==-1)}var Vr={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Vo(),Ir(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const n=document.createElement("object");this._resizeObject=n,n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex",-1),n.onload=this.addResizeHandlers,n.type="text/html",ar&&this.$el.appendChild(n),n.data="about:blank",ar||this.$el.appendChild(n)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!ar&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Z2=Qc();Zc("data-v-b329ee4c");const J2={class:"resize-observer",tabindex:"-1"};Jc();const Q2=Z2((n,t,e,r,o,s)=>(w(),st("div",J2)));Vr.render=Q2;Vr.__scopeId="data-v-b329ee4c";Vr.__file="src/components/ResizeObserver.vue";const Ql=(n="theme")=>({computed:{themeClass(){return z2(this[n])}}}),ng=ne({name:"VPopperContent",components:{ResizeObserver:Vr},mixins:[Ql()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(n){return n!=null&&!isNaN(n)?`${n}px`:null}}}),tg=["id","aria-hidden","tabindex","data-popper-placement"],eg={ref:"inner",class:"v-popper__inner"},rg=_("div",{class:"v-popper__arrow-outer"},null,-1),og=_("div",{class:"v-popper__arrow-inner"},null,-1),sg=[rg,og];function ig(n,t,e,r,o,s){const i=Ie("ResizeObserver");return w(),b("div",{id:n.popperId,ref:"popover",class:Xn(["v-popper__popper",[n.themeClass,n.classes.popperClass,{"v-popper__popper--shown":n.shown,"v-popper__popper--hidden":!n.shown,"v-popper__popper--show-from":n.classes.showFrom,"v-popper__popper--show-to":n.classes.showTo,"v-popper__popper--hide-from":n.classes.hideFrom,"v-popper__popper--hide-to":n.classes.hideTo,"v-popper__popper--skip-transition":n.skipTransition,"v-popper__popper--arrow-overflow":n.result&&n.result.arrow.overflow,"v-popper__popper--no-positioning":!n.result}]]),style:xt(n.result?{position:n.result.strategy,transform:`translate3d(${Math.round(n.result.x)}px,${Math.round(n.result.y)}px,0)`}:void 0),"aria-hidden":n.shown?"false":"true",tabindex:n.autoHide?0:void 0,"data-popper-placement":n.result?n.result.placement:void 0,onKeyup:t[2]||(t[2]=Cf(a=>n.autoHide&&n.$emit("hide"),["esc"]))},[_("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=a=>n.autoHide&&n.$emit("hide"))}),_("div",{class:"v-popper__wrapper",style:xt(n.result?{transformOrigin:n.result.transformOrigin}:void 0)},[_("div",eg,[n.mounted?(w(),b(pn,{key:0},[_("div",null,[Le(n.$slots,"default")]),n.handleResize?(w(),st(i,{key:0,onNotify:t[1]||(t[1]=a=>n.$emit("resize",a))})):ko("",!0)],64)):ko("",!0)],512),_("div",{ref:"arrow",class:"v-popper__arrow-container",style:xt(n.result?{left:n.toPx(n.result.arrow.x),top:n.toPx(n.result.arrow.y)}:void 0)},sg,4)],4)],46,tg)}const nc=Dr(ng,[["render",ig]]),tc={methods:{show(...n){return this.$refs.popper.show(...n)},hide(...n){return this.$refs.popper.hide(...n)},dispose(...n){return this.$refs.popper.dispose(...n)},onResize(...n){return this.$refs.popper.onResize(...n)}}};let zo=function(){};typeof window<"u"&&(zo=window.Element);const ag=ne({name:"VPopperWrapper",components:{Popper:q2,PopperContent:nc},mixins:[tc,Ql("finalTheme")],props:{theme:{type:String,default:null},referenceNode:{type:Function,default:null},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:void 0},positioningDisabled:{type:Boolean,default:void 0},placement:{type:String,default:void 0},delay:{type:[String,Number,Object],default:void 0},distance:{type:[Number,String],default:void 0},skidding:{type:[Number,String],default:void 0},triggers:{type:Array,default:void 0},showTriggers:{type:[Array,Function],default:void 0},hideTriggers:{type:[Array,Function],default:void 0},popperTriggers:{type:Array,default:void 0},popperShowTriggers:{type:[Array,Function],default:void 0},popperHideTriggers:{type:[Array,Function],default:void 0},container:{type:[String,Object,zo,Boolean],default:void 0},boundary:{type:[String,zo],default:void 0},strategy:{type:String,default:void 0},autoHide:{type:[Boolean,Function],default:void 0},handleResize:{type:Boolean,default:void 0},instantMove:{type:Boolean,default:void 0},eagerMount:{type:Boolean,default:void 0},popperClass:{type:[String,Array,Object],default:void 0},computeTransformOrigin:{type:Boolean,default:void 0},autoMinSize:{type:Boolean,default:void 0},autoSize:{type:[Boolean,String],default:void 0},autoMaxSize:{type:Boolean,default:void 0},autoBoundaryMaxSize:{type:Boolean,default:void 0},preventOverflow:{type:Boolean,default:void 0},overflowPadding:{type:[Number,String],default:void 0},arrowPadding:{type:[Number,String],default:void 0},arrowOverflow:{type:Boolean,default:void 0},flip:{type:Boolean,default:void 0},shift:{type:Boolean,default:void 0},shiftCrossAxis:{type:Boolean,default:void 0},noAutoFocus:{type:Boolean,default:void 0},disposeTimeout:{type:Number,default:void 0}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},computed:{finalTheme(){return this.theme??this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(n=>n!==this.$refs.popperContent.$el)}}});function lg(n,t,e,r,o,s){const i=Ie("PopperContent"),a=Ie("Popper");return w(),st(a,us({ref:"popper"},n.$props,{theme:n.finalTheme,"target-nodes":n.getTargetNodes,"popper-node":()=>n.$refs.popperContent.$el,class:[n.themeClass],onShow:t[0]||(t[0]=()=>n.$emit("show")),onHide:t[1]||(t[1]=()=>n.$emit("hide")),"onUpdate:shown":t[2]||(t[2]=l=>n.$emit("update:shown",l)),onApplyShow:t[3]||(t[3]=()=>n.$emit("apply-show")),onApplyHide:t[4]||(t[4]=()=>n.$emit("apply-hide")),onCloseGroup:t[5]||(t[5]=()=>n.$emit("close-group")),onCloseDirective:t[6]||(t[6]=()=>n.$emit("close-directive")),onAutoHide:t[7]||(t[7]=()=>n.$emit("auto-hide")),onResize:t[8]||(t[8]=()=>n.$emit("resize"))}),{default:ln(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:d,show:m,hide:g,handleResize:x,onResize:A,classes:M,result:C})=>[Le(n.$slots,"default",{shown:c,show:m,hide:g}),S(i,{ref:"popperContent","popper-id":l,theme:n.finalTheme,shown:c,mounted:u,"skip-transition":f,"auto-hide":d,"handle-resize":x,classes:M,result:C,onHide:g,onResize:A},{default:ln(()=>[Le(n.$slots,"popper",{shown:c,hide:g})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},16,["theme","target-nodes","popper-node","class"])}const Ls=Dr(ag,[["render",lg]]);({...Ls});({...Ls});({...Ls});const cg=ne({name:"VTooltipDirective",components:{Popper:Jl(),PopperContent:nc},mixins:[tc],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:n=>Pe(n.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:n=>Pe(n.theme,"loadingContent")},targetNodes:{type:Function,required:!0}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(n){if(typeof this.content=="function"&&this.$_isShown&&(n||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,e=this.content(this);e.then?e.then(r=>this.onResult(t,r)):this.onResult(t,e)}},onResult(n,t){n===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),ug=["innerHTML"],fg=["textContent"];function dg(n,t,e,r,o,s){const i=Ie("PopperContent"),a=Ie("Popper");return w(),st(a,us({ref:"popper"},n.$attrs,{theme:n.theme,"target-nodes":n.targetNodes,"popper-node":()=>n.$refs.popperContent.$el,onApplyShow:n.onShow,onApplyHide:n.onHide}),{default:ln(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:d,hide:m,handleResize:g,onResize:x,classes:A,result:M})=>[S(i,{ref:"popperContent",class:Xn({"v-popper--tooltip-loading":n.loading}),"popper-id":l,theme:n.theme,shown:c,mounted:u,"skip-transition":f,"auto-hide":d,"handle-resize":g,classes:A,result:M,onHide:m,onResize:x},{default:ln(()=>[n.html?(w(),b("div",{key:0,innerHTML:n.finalContent},null,8,ug)):(w(),b("div",{key:1,textContent:be(n.finalContent)},null,8,fg))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","target-nodes","popper-node","onApplyShow","onApplyHide"])}const pg=Dr(cg,[["render",dg]]),ec="v-popper--has-tooltip";function mg(n,t){let e=n.placement;if(!e&&t)for(const r of Zl)t[r]&&(e=r);return e||(e=Pe(n.theme||"tooltip","placement")),e}function rc(n,t,e){let r;const o=typeof t;return o==="string"?r={content:t}:t&&o==="object"?r=t:r={content:!1},r.placement=mg(r,e),r.targetNodes=()=>[n],r.referenceNode=()=>n,r}let fo,Ne,hg=0;function gg(){if(fo)return;Ne=O([]),fo=Xa({name:"VTooltipDirectiveApp",setup(){return{directives:Ne}},render(){return this.directives.map(t=>He(pg,{...t.options,shown:t.shown||t.options.shown,key:t.id}))},devtools:{hide:!0}});const n=document.createElement("div");document.body.appendChild(n),fo.mount(n)}function vg(n,t,e){gg();const r=O(rc(n,t,e)),o=O(!1),s={id:hg++,options:r,shown:o};return Ne.value.push(s),n.classList&&n.classList.add(ec),n.$_popper={options:r,item:s,show(){o.value=!0},hide(){o.value=!1}}}function oc(n){if(n.$_popper){const t=Ne.value.indexOf(n.$_popper.item);t!==-1&&Ne.value.splice(t,1),delete n.$_popper,delete n.$_popperOldShown,delete n.$_popperMountTarget}n.classList&&n.classList.remove(ec)}function Ni(n,{value:t,modifiers:e}){const r=rc(n,t,e);if(!r.content||Pe(r.theme||"tooltip","disabled"))oc(n);else{let o;n.$_popper?(o=n.$_popper,o.options.value=r):o=vg(n,t,e),typeof t.shown<"u"&&t.shown!==n.$_popperOldShown&&(n.$_popperOldShown=t.shown,t.shown?o.show():o.hide())}}const yg={beforeMount:Ni,updated:Ni,beforeUnmount(n){oc(n)}},wg=yg,sc=Xa(b2);sc.directive("tooltip",wg);sc.mount("#app");
