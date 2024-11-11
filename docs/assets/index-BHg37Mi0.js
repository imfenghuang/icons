(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yr(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const rn={},Xt=[],tt=()=>{},cc=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xr=n=>n.startsWith("onUpdate:"),wn=Object.assign,Ur=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},uc=Object.prototype.hasOwnProperty,tn=(n,t)=>uc.call(n,t),Y=Array.isArray,Ut=n=>_o(n)==="[object Map]",Bi=n=>_o(n)==="[object Set]",X=n=>typeof n=="function",gn=n=>typeof n=="string",ft=n=>typeof n=="symbol",dn=n=>n!==null&&typeof n=="object",Di=n=>(dn(n)||X(n))&&X(n.then)&&X(n.catch),Vi=Object.prototype.toString,_o=n=>Vi.call(n),fc=n=>_o(n).slice(8,-1),zi=n=>_o(n)==="[object Object]",Wr=n=>gn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,le=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},dc=/-(\w)/g,Vn=bo(n=>n.replace(dc,(t,e)=>e?e.toUpperCase():"")),pc=/\B([A-Z])/g,Ct=bo(n=>n.replace(pc,"-$1").toLowerCase()),Mo=bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xo=bo(n=>n?`on${Mo(n)}`:""),wt=(n,t)=>!Object.is(n,t),Uo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Yi=(n,t,e,o=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:o,value:e})},mc=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Es;const ko=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xt(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++){const o=n[e],r=gn(o)?yc(o):xt(o);if(r)for(const s in r)t[s]=r[s]}return t}else if(gn(n)||dn(n))return n}const hc=/;(?![^(]*\))/g,gc=/:([^]+)/,vc=/\/\*[^]*?\*\//g;function yc(n){const t={};return n.replace(vc,"").split(hc).forEach(e=>{if(e){const o=e.split(gc);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Xn(n){let t="";if(gn(n))t=n;else if(Y(n))for(let e=0;e<n.length;e++){const o=Xn(n[e]);o&&(t+=o+" ")}else if(dn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function wc(n){if(!n)return null;let{class:t,style:e}=n;return t&&!gn(t)&&(n.class=Xn(t)),e&&(n.style=xt(e)),n}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_c=Yr(xc);function Xi(n){return!!n||n===""}const Ui=n=>!!(n&&n.__v_isRef===!0),be=n=>gn(n)?n:n==null?"":Y(n)||dn(n)&&(n.toString===Vi||!X(n.toString))?Ui(n)?be(n.value):JSON.stringify(n,Wi,2):String(n),Wi=(n,t)=>Ui(t)?Wi(n,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[o,r],s)=>(e[Wo(o,s)+" =>"]=r,e),{})}:Bi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Wo(e))}:ft(t)?Wo(t):dn(t)&&!Y(t)&&!zi(t)?String(t):t,Wo=(n,t="")=>{var e;return ft(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;class bc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Hn,!t&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Hn;try{return Hn=this,t()}finally{Hn=e}}}on(){Hn=this}off(){Hn=this.parent}stop(t){if(this._active){let e,o;for(e=0,o=this.effects.length;e<o;e++)this.effects[e].stop();for(e=0,o=this.cleanups.length;e<o;e++)this.cleanups[e]();if(this.scopes)for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Gr(){return Hn}function Gi(n,t=!1){Hn&&Hn.cleanups.push(n)}let ln;const Go=new WeakSet;class qi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Hn&&Hn.active&&Hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,As(this),Ji(this);const t=ln,e=Un;ln=this,Un=!0;try{return this.fn()}finally{Qi(this),ln=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zr(t);this.deps=this.depsTail=void 0,As(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pr(this)&&this.run()}get dirty(){return pr(this)}}let Ki=0,ce,ue;function Zi(n,t=!1){if(n.flags|=8,t){n.next=ue,ue=n;return}n.next=ce,ce=n}function qr(){Ki++}function Kr(){if(--Ki>0)return;if(ue){let t=ue;for(ue=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ce;){let t=ce;for(ce=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){n||(n=o)}t=e}}if(n)throw n}function Ji(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qi(n){let t,e=n.depsTail,o=e;for(;o;){const r=o.prevDep;o.version===-1?(o===e&&(e=r),Zr(o),Mc(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}n.deps=t,n.depsTail=e}function pr(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(na(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function na(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Me))return;n.globalVersion=Me;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!pr(n)){n.flags&=-3;return}const e=ln,o=Un;ln=n,Un=!0;try{Ji(n);const r=n.fn(n._value);(t.version===0||wt(r,n._value))&&(n._value=r,t.version++)}catch(r){throw t.version++,r}finally{ln=e,Un=o,Qi(n),n.flags&=-3}}function Zr(n,t=!1){const{dep:e,prevSub:o,nextSub:r}=n;if(o&&(o.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=o,n.nextSub=void 0),e.subs===n&&(e.subs=o,!o&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Zr(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Mc(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Un=!0;const ta=[];function It(){ta.push(Un),Un=!1}function Lt(){const n=ta.pop();Un=n===void 0?!0:n}function As(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ln;ln=void 0;try{t()}finally{ln=e}}}let Me=0;class kc{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ln||!Un||ln===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ln)e=this.activeLink=new kc(ln,this),ln.deps?(e.prevDep=ln.depsTail,ln.depsTail.nextDep=e,ln.depsTail=e):ln.deps=ln.depsTail=e,ea(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const o=e.nextDep;o.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=o),e.prevDep=ln.depsTail,e.nextDep=void 0,ln.depsTail.nextDep=e,ln.depsTail=e,ln.deps===e&&(ln.deps=o)}return e}trigger(t){this.version++,Me++,this.notify(t)}notify(t){qr();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Kr()}}}function ea(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)ea(o)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const mr=new WeakMap,Pt=Symbol(""),hr=Symbol(""),ke=Symbol("");function kn(n,t,e){if(Un&&ln){let o=mr.get(n);o||mr.set(n,o=new Map);let r=o.get(e);r||(o.set(e,r=new Jr),r.map=o,r.key=e),r.track()}}function ct(n,t,e,o,r,s){const i=mr.get(n);if(!i){Me++;return}const a=l=>{l&&l.trigger()};if(qr(),t==="clear")i.forEach(a);else{const l=Y(n),c=l&&Wr(e);if(l&&e==="length"){const u=Number(o);i.forEach((f,d)=>{(d==="length"||d===ke||!ft(d)&&d>=u)&&a(f)})}else switch((e!==void 0||i.has(void 0))&&a(i.get(e)),c&&a(i.get(ke)),t){case"add":l?c&&a(i.get("length")):(a(i.get(Pt)),Ut(n)&&a(i.get(hr)));break;case"delete":l||(a(i.get(Pt)),Ut(n)&&a(i.get(hr)));break;case"set":Ut(n)&&a(i.get(Pt));break}}Kr()}function zt(n){const t=nn(n);return t===n?t:(kn(t,"iterate",ke),Bn(n)?t:t.map(Cn))}function Co(n){return kn(n=nn(n),"iterate",ke),n}const Cc={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,Cn)},concat(...n){return zt(this).concat(...n.map(t=>Y(t)?zt(t):t))},entries(){return qo(this,"entries",n=>(n[1]=Cn(n[1]),n))},every(n,t){return at(this,"every",n,t,void 0,arguments)},filter(n,t){return at(this,"filter",n,t,e=>e.map(Cn),arguments)},find(n,t){return at(this,"find",n,t,Cn,arguments)},findIndex(n,t){return at(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return at(this,"findLast",n,t,Cn,arguments)},findLastIndex(n,t){return at(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return at(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return zt(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,t){return at(this,"map",n,t,void 0,arguments)},pop(){return re(this,"pop")},push(...n){return re(this,"push",n)},reduce(n,...t){return Fs(this,"reduce",n,t)},reduceRight(n,...t){return Fs(this,"reduceRight",n,t)},shift(){return re(this,"shift")},some(n,t){return at(this,"some",n,t,void 0,arguments)},splice(...n){return re(this,"splice",n)},toReversed(){return zt(this).toReversed()},toSorted(n){return zt(this).toSorted(n)},toSpliced(...n){return zt(this).toSpliced(...n)},unshift(...n){return re(this,"unshift",n)},values(){return qo(this,"values",Cn)}};function qo(n,t,e){const o=Co(n),r=o[t]();return o!==n&&!Bn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=e(s.value)),s}),r}const Ic=Array.prototype;function at(n,t,e,o,r,s){const i=Co(n),a=i!==n&&!Bn(n),l=i[t];if(l!==Ic[t]){const f=l.apply(n,s);return a?Cn(f):f}let c=e;i!==n&&(a?c=function(f,d){return e.call(this,Cn(f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(i,c,o);return a&&r?r(u):u}function Fs(n,t,e,o){const r=Co(n);let s=e;return r!==n&&(Bn(n)?e.length>3&&(s=function(i,a,l){return e.call(this,i,a,l,n)}):s=function(i,a,l){return e.call(this,i,Cn(a),l,n)}),r[t](s,...o)}function Ko(n,t,e){const o=nn(n);kn(o,"iterate",ke);const r=o[t](...e);return(r===-1||r===!1)&&es(e[0])?(e[0]=nn(e[0]),o[t](...e)):r}function re(n,t,e=[]){It(),qr();const o=nn(n)[t].apply(n,e);return Kr(),Lt(),o}const Lc=Yr("__proto__,__v_isRef,__isVue"),oa=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ft));function Tc(n){ft(n)||(n=String(n));const t=nn(this);return kn(t,"has",n),t.hasOwnProperty(n)}class ra{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,o){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return o===(r?s?Rc:la:s?aa:ia).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=Y(t);if(!r){let l;if(i&&(l=Cc[e]))return l;if(e==="hasOwnProperty")return Tc}const a=Reflect.get(t,e,In(t)?t:o);return(ft(e)?oa.has(e):Lc(e))||(r||kn(t,"get",e),s)?a:In(a)?i&&Wr(e)?a:a.value:dn(a)?r?ns(a):sn(a):a}}class sa extends ra{constructor(t=!1){super(!1,t)}set(t,e,o,r){let s=t[e];if(!this._isShallow){const l=Nt(s);if(!Bn(o)&&!Nt(o)&&(s=nn(s),o=nn(o)),!Y(t)&&In(s)&&!In(o))return l?!1:(s.value=o,!0)}const i=Y(t)&&Wr(e)?Number(e)<t.length:tn(t,e),a=Reflect.set(t,e,o,In(t)?t:r);return t===nn(r)&&(i?wt(o,s)&&ct(t,"set",e,o):ct(t,"add",e,o)),a}deleteProperty(t,e){const o=tn(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&o&&ct(t,"delete",e,void 0),r}has(t,e){const o=Reflect.has(t,e);return(!ft(e)||!oa.has(e))&&kn(t,"has",e),o}ownKeys(t){return kn(t,"iterate",Y(t)?"length":Pt),Reflect.ownKeys(t)}}class Hc extends ra{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Oc=new sa,$c=new Hc,Sc=new sa(!0);const gr=n=>n,We=n=>Reflect.getPrototypeOf(n);function jc(n,t,e){return function(...o){const r=this.__v_raw,s=nn(r),i=Ut(s),a=n==="entries"||n===Symbol.iterator&&i,l=n==="keys"&&i,c=r[n](...o),u=e?gr:t?vr:Cn;return!t&&kn(s,"iterate",l?hr:Pt),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ge(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ec(n,t){const e={get(r){const s=this.__v_raw,i=nn(s),a=nn(r);n||(wt(r,a)&&kn(i,"get",r),kn(i,"get",a));const{has:l}=We(i),c=t?gr:n?vr:Cn;if(l.call(i,r))return c(s.get(r));if(l.call(i,a))return c(s.get(a));s!==i&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kn(nn(r),"iterate",Pt),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,i=nn(s),a=nn(r);return n||(wt(r,a)&&kn(i,"has",r),kn(i,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const i=this,a=i.__v_raw,l=nn(a),c=t?gr:n?vr:Cn;return!n&&kn(l,"iterate",Pt),a.forEach((u,f)=>r.call(s,c(u),c(f),i))}};return wn(e,n?{add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear")}:{add(r){!t&&!Bn(r)&&!Nt(r)&&(r=nn(r));const s=nn(this);return We(s).has.call(s,r)||(s.add(r),ct(s,"add",r,r)),this},set(r,s){!t&&!Bn(s)&&!Nt(s)&&(s=nn(s));const i=nn(this),{has:a,get:l}=We(i);let c=a.call(i,r);c||(r=nn(r),c=a.call(i,r));const u=l.call(i,r);return i.set(r,s),c?wt(s,u)&&ct(i,"set",r,s):ct(i,"add",r,s),this},delete(r){const s=nn(this),{has:i,get:a}=We(s);let l=i.call(s,r);l||(r=nn(r),l=i.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ct(s,"delete",r,void 0),c},clear(){const r=nn(this),s=r.size!==0,i=r.clear();return s&&ct(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=jc(r,n,t)}),e}function Qr(n,t){const e=Ec(n,t);return(o,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?o:Reflect.get(tn(e,r)&&r in o?e:o,r,s)}const Ac={get:Qr(!1,!1)},Fc={get:Qr(!1,!0)},Pc={get:Qr(!0,!1)};const ia=new WeakMap,aa=new WeakMap,la=new WeakMap,Rc=new WeakMap;function Nc(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bc(n){return n.__v_skip||!Object.isExtensible(n)?0:Nc(fc(n))}function sn(n){return Nt(n)?n:ts(n,!1,Oc,Ac,ia)}function Dc(n){return ts(n,!1,Sc,Fc,aa)}function ns(n){return ts(n,!0,$c,Pc,la)}function ts(n,t,e,o,r){if(!dn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const i=Bc(n);if(i===0)return n;const a=new Proxy(n,i===2?o:e);return r.set(n,a),a}function Wt(n){return Nt(n)?Wt(n.__v_raw):!!(n&&n.__v_isReactive)}function Nt(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function es(n){return n?!!n.__v_raw:!1}function nn(n){const t=n&&n.__v_raw;return t?nn(t):n}function Vc(n){return!tn(n,"__v_skip")&&Object.isExtensible(n)&&Yi(n,"__v_skip",!0),n}const Cn=n=>dn(n)?sn(n):n,vr=n=>dn(n)?ns(n):n;function In(n){return n?n.__v_isRef===!0:!1}function b(n){return ca(n,!1)}function yr(n){return ca(n,!0)}function ca(n,t){return In(n)?n:new zc(n,t)}class zc{constructor(t,e){this.dep=new Jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:nn(t),this._value=e?t:Cn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,o=this.__v_isShallow||Bn(t)||Nt(t);t=o?t:nn(t),wt(t,e)&&(this._rawValue=t,this._value=o?t:Cn(t),this.dep.trigger())}}function v(n){return In(n)?n.value:n}const Yc={get:(n,t,e)=>t==="__v_raw"?n:v(Reflect.get(n,t,e)),set:(n,t,e,o)=>{const r=n[t];return In(r)&&!In(e)?(r.value=e,!0):Reflect.set(n,t,e,o)}};function ua(n){return Wt(n)?n:new Proxy(n,Yc)}class Xc{constructor(t,e,o){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Me-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ln!==this)return Zi(this,!0),!0}get value(){const t=this.dep.track();return na(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Uc(n,t,e=!1){let o,r;return X(n)?o=n:(o=n.get,r=n.set),new Xc(o,r,e)}const qe={},lo=new WeakMap;let Et;function Wc(n,t=!1,e=Et){if(e){let o=lo.get(e);o||lo.set(e,o=[]),o.push(n)}}function Gc(n,t,e=rn){const{immediate:o,deep:r,once:s,scheduler:i,augmentJob:a,call:l}=e,c=H=>r?H:Bn(H)||r===!1||r===0?ut(H,1):ut(H);let u,f,d,m,g=!1,_=!1;if(In(n)?(f=()=>n.value,g=Bn(n)):Wt(n)?(f=()=>c(n),g=!0):Y(n)?(_=!0,g=n.some(H=>Wt(H)||Bn(H)),f=()=>n.map(H=>{if(In(H))return H.value;if(Wt(H))return c(H);if(X(H))return l?l(H,2):H()})):X(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){It();try{d()}finally{Lt()}}const H=Et;Et=u;try{return l?l(n,3,[m]):n(m)}finally{Et=H}}:f=tt,t&&r){const H=f,N=r===!0?1/0:r;f=()=>ut(H(),N)}const j=Gr(),C=()=>{u.stop(),j&&Ur(j.effects,u)};if(s&&t){const H=t;t=(...N)=>{H(...N),C()}}let L=_?new Array(n.length).fill(qe):qe;const T=H=>{if(!(!(u.flags&1)||!u.dirty&&!H))if(t){const N=u.run();if(r||g||(_?N.some((W,G)=>wt(W,L[G])):wt(N,L))){d&&d();const W=Et;Et=u;try{const G=[N,L===qe?void 0:_&&L[0]===qe?[]:L,m];l?l(t,3,G):t(...G),L=N}finally{Et=W}}}else u.run()};return a&&a(T),u=new qi(f),u.scheduler=i?()=>i(T,!1):T,m=H=>Wc(H,!1,u),d=u.onStop=()=>{const H=lo.get(u);if(H){if(l)l(H,4);else for(const N of H)N();lo.delete(u)}},t?o?T(!0):L=u.run():i?i(T.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function ut(n,t=1/0,e){if(t<=0||!dn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,In(n))ut(n.value,t,e);else if(Y(n))for(let o=0;o<n.length;o++)ut(n[o],t,e);else if(Bi(n)||Ut(n))n.forEach(o=>{ut(o,t,e)});else if(zi(n)){for(const o in n)ut(n[o],t,e);for(const o of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,o)&&ut(n[o],t,e)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Be(n,t,e,o){try{return o?n(...o):n()}catch(r){Io(r,t,e)}}function rt(n,t,e,o){if(X(n)){const r=Be(n,t,e,o);return r&&Di(r)&&r.catch(s=>{Io(s,t,e)}),r}if(Y(n)){const r=[];for(let s=0;s<n.length;s++)r.push(rt(n[s],t,e,o));return r}}function Io(n,t,e,o=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||rn;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){It(),Be(s,null,10,[n,l,c]),Lt();return}}qc(n,e,r,o,i)}function qc(n,t,e,o=!0,r=!1){if(r)throw n;console.error(n)}const On=[];let Qn=-1;const Gt=[];let gt=null,Yt=0;const fa=Promise.resolve();let co=null;function Lo(n){const t=co||fa;return n?t.then(this?n.bind(this):n):t}function Kc(n){let t=Qn+1,e=On.length;for(;t<e;){const o=t+e>>>1,r=On[o],s=Ce(r);s<n||s===n&&r.flags&2?t=o+1:e=o}return t}function os(n){if(!(n.flags&1)){const t=Ce(n),e=On[On.length-1];!e||!(n.flags&2)&&t>=Ce(e)?On.push(n):On.splice(Kc(t),0,n),n.flags|=1,da()}}function da(){co||(co=fa.then(ma))}function Zc(n){Y(n)?Gt.push(...n):gt&&n.id===-1?gt.splice(Yt+1,0,n):n.flags&1||(Gt.push(n),n.flags|=1),da()}function Ps(n,t,e=Qn+1){for(;e<On.length;e++){const o=On[e];if(o&&o.flags&2){if(n&&o.id!==n.uid)continue;On.splice(e,1),e--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function pa(n){if(Gt.length){const t=[...new Set(Gt)].sort((e,o)=>Ce(e)-Ce(o));if(Gt.length=0,gt){gt.push(...t);return}for(gt=t,Yt=0;Yt<gt.length;Yt++){const e=gt[Yt];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gt=null,Yt=0}}const Ce=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ma(n){try{for(Qn=0;Qn<On.length;Qn++){const t=On[Qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Be(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qn<On.length;Qn++){const t=On[Qn];t&&(t.flags&=-2)}Qn=-1,On.length=0,pa(),co=null,(On.length||Gt.length)&&ma()}}let yn=null,To=null;function uo(n){const t=yn;return yn=n,To=n&&n.type.__scopeId||null,t}function Jc(n){To=n}function Qc(){To=null}const nu=n=>cn;function cn(n,t=yn,e){if(!t||n._n)return n;const o=(...r)=>{o._d&&Us(-1);const s=uo(t);let i;try{i=n(...r)}finally{uo(s),o._d&&Us(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Zo(n,t){if(yn===null)return n;const e=Eo(yn),o=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,i,a,l=rn]=t[r];s&&(X(s)&&(s={mounted:s,updated:s}),s.deep&&ut(i),o.push({dir:s,instance:e,value:i,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ht(n,t,e,o){const r=n.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let l=a.dir[o];l&&(It(),rt(l,e,8,[n.el,a,n,t]),Lt())}}const tu=Symbol("_vte"),eu=n=>n.__isTeleport;function rs(n,t){n.shapeFlag&6&&n.component?(n.transition=t,rs(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ne(n,t){return X(n)?wn({name:n.name},t,{setup:n}):n}function ha(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wr(n,t,e,o,r=!1){if(Y(n)){n.forEach((g,_)=>wr(g,t&&(Y(t)?t[_]:t),e,o,r));return}if(qt(o)&&!r)return;const s=o.shapeFlag&4?Eo(o.component):o.el,i=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===rn?a.refs={}:a.refs,f=a.setupState,d=nn(f),m=f===rn?()=>!1:g=>tn(d,g);if(c!=null&&c!==l&&(gn(c)?(u[c]=null,m(c)&&(f[c]=null)):In(c)&&(c.value=null)),X(l))Be(l,a,12,[i,u]);else{const g=gn(l),_=In(l);if(g||_){const j=()=>{if(n.f){const C=g?m(l)?f[l]:u[l]:l.value;r?Y(C)&&Ur(C,s):Y(C)?C.includes(s)||C.push(s):g?(u[l]=[s],m(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=i,m(l)&&(f[l]=i)):_&&(l.value=i,n.k&&(u[n.k]=i))};i?(j.id=-1,Fn(j,e)):j()}}}ko().requestIdleCallback;ko().cancelIdleCallback;const qt=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function ou(n,t){va(n,"a",t)}function ru(n,t){va(n,"da",t)}function va(n,t,e=_n){const o=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ho(t,o,e),e){let r=e.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&su(o,t,e,r),r=r.parent}}function su(n,t,e,o){const r=Ho(t,n,o,!0);Oo(()=>{Ur(o[t],r)},e)}function Ho(n,t,e=_n,o=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...i)=>{It();const a=De(e),l=rt(t,e,n,i);return a(),Lt(),l});return o?r.unshift(s):r.push(s),s}}const dt=n=>(t,e=_n)=>{(!Oe||n==="sp")&&Ho(n,(...o)=>t(...o),e)},iu=dt("bm"),$n=dt("m"),au=dt("bu"),ya=dt("u"),lu=dt("bum"),Oo=dt("um"),cu=dt("sp"),uu=dt("rtg"),fu=dt("rtc");function du(n,t=_n){Ho("ec",n,t)}const ss="components",pu="directives";function Ie(n,t){return is(ss,n,!0,t)||n}const wa=Symbol.for("v-ndc");function mu(n){return gn(n)?is(ss,n,!1)||n:n||wa}function hu(n){return is(pu,n)}function is(n,t,e=!0,o=!1){const r=yn||_n;if(r){const s=r.type;if(n===ss){const a=tf(s,!1);if(a&&(a===t||a===Vn(t)||a===Mo(Vn(t))))return s}const i=Rs(r[n]||s[n],t)||Rs(r.appContext[n],t);return!i&&o?s:i}}function Rs(n,t){return n&&(n[t]||n[Vn(t)]||n[Mo(Vn(t))])}function pt(n,t,e,o){let r;const s=e,i=Y(n);if(i||gn(n)){const a=i&&Wt(n);let l=!1;a&&(l=!Bn(n),n=Co(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=t(l?Cn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(dn(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}function Le(n,t,e={},o,r){if(yn.ce||yn.parent&&qt(yn.parent)&&yn.parent.ce)return t!=="default"&&(e.name=t),y(),st(mn,null,[k("slot",e,o)],64);let s=n[t];s&&s._c&&(s._d=!1),y();const i=s&&xa(s(e)),a=e.key||i&&i.key,l=st(mn,{key:(a&&!ft(a)?a:`_${t}`)+(!i&&o?"_fb":"")},i||[],i&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function xa(n){return n.some(t=>He(t)?!(t.type===Mt||t.type===mn&&!xa(t.children)):!0)?n:null}const xr=n=>n?Da(n)?Eo(n):xr(n.parent):null,fe=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xr(n.parent),$root:n=>xr(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>as(n),$forceUpdate:n=>n.f||(n.f=()=>{os(n.update)}),$nextTick:n=>n.n||(n.n=Lo.bind(n.proxy)),$watch:n=>Nu.bind(n)}),Jo=(n,t)=>n!==rn&&!n.__isScriptSetup&&tn(n,t),gu={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:o,data:r,props:s,accessCache:i,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Jo(o,t))return i[t]=1,o[t];if(r!==rn&&tn(r,t))return i[t]=2,r[t];if((c=n.propsOptions[0])&&tn(c,t))return i[t]=3,s[t];if(e!==rn&&tn(e,t))return i[t]=4,e[t];_r&&(i[t]=0)}}const u=fe[t];let f,d;if(u)return t==="$attrs"&&kn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==rn&&tn(e,t))return i[t]=4,e[t];if(d=l.config.globalProperties,tn(d,t))return d[t]},set({_:n},t,e){const{data:o,setupState:r,ctx:s}=n;return Jo(r,t)?(r[t]=e,!0):o!==rn&&tn(o,t)?(o[t]=e,!0):tn(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:o,appContext:r,propsOptions:s}},i){let a;return!!e[i]||n!==rn&&tn(n,i)||Jo(t,i)||(a=s[0])&&tn(a,i)||tn(o,i)||tn(fe,i)||tn(r.config.globalProperties,i)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:tn(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function vu(){return yu().slots}function yu(){const n=jo();return n.setupContext||(n.setupContext=za(n))}function Ns(n){return Y(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let _r=!0;function wu(n){const t=as(n),e=n.proxy,o=n.ctx;_r=!1,t.beforeCreate&&Bs(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:j,beforeDestroy:C,beforeUnmount:L,destroyed:T,unmounted:H,render:N,renderTracked:W,renderTriggered:G,errorCaptured:fn,serverPrefetch:on,expose:Q,inheritAttrs:hn,components:vn,directives:xn,filters:pn}=t;if(c&&xu(c,o,null),i)for(const K in i){const q=i[K];X(q)&&(o[K]=q.bind(e))}if(r){const K=r.call(e,e);dn(K)&&(n.data=sn(K))}if(_r=!0,s)for(const K in s){const q=s[K],bn=X(q)?q.bind(e,e):X(q.get)?q.get.bind(e,e):tt,Vt=!X(q)&&X(q.set)?q.set.bind(e):tt,Tt=Dn({get:bn,set:Vt});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Gn=>Tt.value=Gn})}if(a)for(const K in a)_a(a[K],o,e,K);if(l){const K=X(l)?l.call(e):l;Reflect.ownKeys(K).forEach(q=>{Iu(q,K[q])})}u&&Bs(u,n,"c");function un(K,q){Y(q)?q.forEach(bn=>K(bn.bind(e))):q&&K(q.bind(e))}if(un(iu,f),un($n,d),un(au,m),un(ya,g),un(ou,_),un(ru,j),un(du,fn),un(fu,W),un(uu,G),un(lu,L),un(Oo,H),un(cu,on),Y(Q))if(Q.length){const K=n.exposed||(n.exposed={});Q.forEach(q=>{Object.defineProperty(K,q,{get:()=>e[q],set:bn=>e[q]=bn})})}else n.exposed||(n.exposed={});N&&n.render===tt&&(n.render=N),hn!=null&&(n.inheritAttrs=hn),vn&&(n.components=vn),xn&&(n.directives=xn),on&&ha(n)}function xu(n,t,e=tt){Y(n)&&(n=br(n));for(const o in n){const r=n[o];let s;dn(r)?"default"in r?s=de(r.from||o,r.default,!0):s=de(r.from||o):s=de(r),In(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[o]=s}}function Bs(n,t,e){rt(Y(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,e)}function _a(n,t,e,o){let r=o.includes(".")?Aa(e,o):()=>e[o];if(gn(n)){const s=t[n];X(s)&&Ln(r,s)}else if(X(n))Ln(r,n.bind(e));else if(dn(n))if(Y(n))n.forEach(s=>_a(s,t,e,o));else{const s=X(n.handler)?n.handler.bind(e):t[n.handler];X(s)&&Ln(r,s,n)}}function as(n){const t=n.type,{mixins:e,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!o?l=t:(l={},r.length&&r.forEach(c=>fo(l,c,i,!0)),fo(l,t,i)),dn(t)&&s.set(t,l),l}function fo(n,t,e,o=!1){const{mixins:r,extends:s}=t;s&&fo(n,s,e,!0),r&&r.forEach(i=>fo(n,i,e,!0));for(const i in t)if(!(o&&i==="expose")){const a=_u[i]||e&&e[i];n[i]=a?a(n[i],t[i]):t[i]}return n}const _u={data:Ds,props:Vs,emits:Vs,methods:ae,computed:ae,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:ae,directives:ae,watch:Mu,provide:Ds,inject:bu};function Ds(n,t){return t?n?function(){return wn(X(n)?n.call(this,this):n,X(t)?t.call(this,this):t)}:t:n}function bu(n,t){return ae(br(n),br(t))}function br(n){if(Y(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Tn(n,t){return n?[...new Set([].concat(n,t))]:t}function ae(n,t){return n?wn(Object.create(null),n,t):t}function Vs(n,t){return n?Y(n)&&Y(t)?[...new Set([...n,...t])]:wn(Object.create(null),Ns(n),Ns(t??{})):t}function Mu(n,t){if(!n)return t;if(!t)return n;const e=wn(Object.create(null),n);for(const o in t)e[o]=Tn(n[o],t[o]);return e}function ba(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ku=0;function Cu(n,t){return function(o,r=null){X(o)||(o=wn({},o)),r!=null&&!dn(r)&&(r=null);const s=ba(),i=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ku++,_component:o,_props:r,_container:null,_context:s,_instance:null,version:of,get config(){return s.config},set config(u){},use(u,...f){return i.has(u)||(u&&X(u.install)?(i.add(u),u.install(c,...f)):X(u)&&(i.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||k(o,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(m,u):n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Eo(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(rt(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Kt;Kt=c;try{return u()}finally{Kt=f}}};return c}}let Kt=null;function Iu(n,t){if(_n){let e=_n.provides;const o=_n.parent&&_n.parent.provides;o===e&&(e=_n.provides=Object.create(o)),e[n]=t}}function de(n,t,e=!1){const o=_n||yn;if(o||Kt){const r=Kt?Kt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&X(t)?t.call(o&&o.proxy):t}}const Ma={},ka=()=>Object.create(Ma),Ca=n=>Object.getPrototypeOf(n)===Ma;function Lu(n,t,e,o=!1){const r={},s=ka();n.propsDefaults=Object.create(null),Ia(n,t,r,s);for(const i in n.propsOptions[0])i in r||(r[i]=void 0);e?n.props=o?r:Dc(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Tu(n,t,e,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=n,a=nn(r),[l]=n.propsOptions;let c=!1;if((o||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($o(n.emitsOptions,d))continue;const m=t[d];if(l)if(tn(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=Vn(d);r[g]=Mr(l,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Ia(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!tn(t,f)&&((u=Ct(f))===f||!tn(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Mr(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!tn(t,f))&&(delete s[f],c=!0)}c&&ct(n.attrs,"set","")}function Ia(n,t,e,o){const[r,s]=n.propsOptions;let i=!1,a;if(t)for(let l in t){if(le(l))continue;const c=t[l];let u;r&&tn(r,u=Vn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:$o(n.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,i=!0)}if(s){const l=nn(e),c=a||rn;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Mr(r,l,f,c[f],n,!tn(c,f))}}return i}function Mr(n,t,e,o,r,s){const i=n[e];if(i!=null){const a=tn(i,"default");if(a&&o===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&X(l)){const{propsDefaults:c}=r;if(e in c)o=c[e];else{const u=De(r);o=c[e]=l.call(null,t),u()}}else o=l;r.ce&&r.ce._setProp(e,o)}i[0]&&(s&&!a?o=!1:i[1]&&(o===""||o===Ct(e))&&(o=!0))}return o}const Hu=new WeakMap;function La(n,t,e=!1){const o=e?Hu:t.propsCache,r=o.get(n);if(r)return r;const s=n.props,i={},a=[];let l=!1;if(!X(n)){const u=f=>{l=!0;const[d,m]=La(f,t,!0);wn(i,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dn(n)&&o.set(n,Xt),Xt;if(Y(s))for(let u=0;u<s.length;u++){const f=Vn(s[u]);zs(f)&&(i[f]=rn)}else if(s)for(const u in s){const f=Vn(u);if(zs(f)){const d=s[u],m=i[f]=Y(d)||X(d)?{type:d}:wn({},d),g=m.type;let _=!1,j=!0;if(Y(g))for(let C=0;C<g.length;++C){const L=g[C],T=X(L)&&L.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(j=!1)}else _=X(g)&&g.name==="Boolean";m[0]=_,m[1]=j,(_||tn(m,"default"))&&a.push(f)}}const c=[i,a];return dn(n)&&o.set(n,c),c}function zs(n){return n[0]!=="$"&&!le(n)}const Ta=n=>n[0]==="_"||n==="$stable",ls=n=>Y(n)?n.map(nt):[nt(n)],Ou=(n,t,e)=>{if(t._n)return t;const o=cn((...r)=>ls(t(...r)),e);return o._c=!1,o},Ha=(n,t,e)=>{const o=n._ctx;for(const r in n){if(Ta(r))continue;const s=n[r];if(X(s))t[r]=Ou(r,s,o);else if(s!=null){const i=ls(s);t[r]=()=>i}}},Oa=(n,t)=>{const e=ls(t);n.slots.default=()=>e},$a=(n,t,e)=>{for(const o in t)(e||o!=="_")&&(n[o]=t[o])},$u=(n,t,e)=>{const o=n.slots=ka();if(n.vnode.shapeFlag&32){const r=t._;r?($a(o,t,e),e&&Yi(o,"_",r,!0)):Ha(t,o)}else t&&Oa(n,t)},Su=(n,t,e)=>{const{vnode:o,slots:r}=n;let s=!0,i=rn;if(o.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:$a(r,t,e):(s=!t.$stable,Ha(t,r)),i=t}else t&&(Oa(n,t),i={default:1});if(s)for(const a in r)!Ta(a)&&i[a]==null&&delete r[a]},Fn=Uu;function ju(n){return Eu(n)}function Eu(n,t){const e=ko();e.__VUE__=!0;const{insert:o,remove:r,patchProp:s,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=tt,insertStaticContent:g}=n,_=(p,h,w,$=null,I=null,O=null,P=void 0,F=null,E=!!h.dynamicChildren)=>{if(p===h)return;p&&!se(p,h)&&($=Ue(p),Gn(p,I,O,!0),p=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:S,ref:V,shapeFlag:R}=h;switch(S){case So:j(p,h,w,$);break;case Mt:C(p,h,w,$);break;case tr:p==null&&L(h,w,$,P);break;case mn:vn(p,h,w,$,I,O,P,F,E);break;default:R&1?N(p,h,w,$,I,O,P,F,E):R&6?xn(p,h,w,$,I,O,P,F,E):(R&64||R&128)&&S.process(p,h,w,$,I,O,P,F,E,ee)}V!=null&&I&&wr(V,p&&p.ref,O,h||p,!h)},j=(p,h,w,$)=>{if(p==null)o(h.el=a(h.children),w,$);else{const I=h.el=p.el;h.children!==p.children&&c(I,h.children)}},C=(p,h,w,$)=>{p==null?o(h.el=l(h.children||""),w,$):h.el=p.el},L=(p,h,w,$)=>{[p.el,p.anchor]=g(p.children,h,w,$,p.el,p.anchor)},T=({el:p,anchor:h},w,$)=>{let I;for(;p&&p!==h;)I=d(p),o(p,w,$),p=I;o(h,w,$)},H=({el:p,anchor:h})=>{let w;for(;p&&p!==h;)w=d(p),r(p),p=w;r(h)},N=(p,h,w,$,I,O,P,F,E)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),p==null?W(h,w,$,I,O,P,F,E):on(p,h,I,O,P,F,E)},W=(p,h,w,$,I,O,P,F)=>{let E,S;const{props:V,shapeFlag:R,transition:D,dirs:z}=p;if(E=p.el=i(p.type,O,V&&V.is,V),R&8?u(E,p.children):R&16&&fn(p.children,E,null,$,I,Qo(p,O),P,F),z&&Ht(p,null,$,"created"),G(E,p,p.scopeId,P,$),V){for(const an in V)an!=="value"&&!le(an)&&s(E,an,null,V[an],O,$);"value"in V&&s(E,"value",null,V.value,O),(S=V.onVnodeBeforeMount)&&Kn(S,$,p)}z&&Ht(p,null,$,"beforeMount");const Z=Au(I,D);Z&&D.beforeEnter(E),o(E,h,w),((S=V&&V.onVnodeMounted)||Z||z)&&Fn(()=>{S&&Kn(S,$,p),Z&&D.enter(E),z&&Ht(p,null,$,"mounted")},I)},G=(p,h,w,$,I)=>{if(w&&m(p,w),$)for(let O=0;O<$.length;O++)m(p,$[O]);if(I){let O=I.subTree;if(h===O||Pa(O.type)&&(O.ssContent===h||O.ssFallback===h)){const P=I.vnode;G(p,P,P.scopeId,P.slotScopeIds,I.parent)}}},fn=(p,h,w,$,I,O,P,F,E=0)=>{for(let S=E;S<p.length;S++){const V=p[S]=F?vt(p[S]):nt(p[S]);_(null,V,h,w,$,I,O,P,F)}},on=(p,h,w,$,I,O,P)=>{const F=h.el=p.el;let{patchFlag:E,dynamicChildren:S,dirs:V}=h;E|=p.patchFlag&16;const R=p.props||rn,D=h.props||rn;let z;if(w&&Ot(w,!1),(z=D.onVnodeBeforeUpdate)&&Kn(z,w,h,p),V&&Ht(h,p,w,"beforeUpdate"),w&&Ot(w,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&u(F,""),S?Q(p.dynamicChildren,S,F,w,$,Qo(h,I),O):P||q(p,h,F,null,w,$,Qo(h,I),O,!1),E>0){if(E&16)hn(F,R,D,w,I);else if(E&2&&R.class!==D.class&&s(F,"class",null,D.class,I),E&4&&s(F,"style",R.style,D.style,I),E&8){const Z=h.dynamicProps;for(let an=0;an<Z.length;an++){const en=Z[an],jn=R[en],Mn=D[en];(Mn!==jn||en==="value")&&s(F,en,jn,Mn,I,w)}}E&1&&p.children!==h.children&&u(F,h.children)}else!P&&S==null&&hn(F,R,D,w,I);((z=D.onVnodeUpdated)||V)&&Fn(()=>{z&&Kn(z,w,h,p),V&&Ht(h,p,w,"updated")},$)},Q=(p,h,w,$,I,O,P)=>{for(let F=0;F<h.length;F++){const E=p[F],S=h[F],V=E.el&&(E.type===mn||!se(E,S)||E.shapeFlag&70)?f(E.el):w;_(E,S,V,null,$,I,O,P,!0)}},hn=(p,h,w,$,I)=>{if(h!==w){if(h!==rn)for(const O in h)!le(O)&&!(O in w)&&s(p,O,h[O],null,I,$);for(const O in w){if(le(O))continue;const P=w[O],F=h[O];P!==F&&O!=="value"&&s(p,O,F,P,I,$)}"value"in w&&s(p,"value",h.value,w.value,I)}},vn=(p,h,w,$,I,O,P,F,E)=>{const S=h.el=p?p.el:a(""),V=h.anchor=p?p.anchor:a("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:z}=h;z&&(F=F?F.concat(z):z),p==null?(o(S,w,$),o(V,w,$),fn(h.children||[],w,V,I,O,P,F,E)):R>0&&R&64&&D&&p.dynamicChildren?(Q(p.dynamicChildren,D,w,I,O,P,F),(h.key!=null||I&&h===I.subTree)&&Sa(p,h,!0)):q(p,h,w,V,I,O,P,F,E)},xn=(p,h,w,$,I,O,P,F,E)=>{h.slotScopeIds=F,p==null?h.shapeFlag&512?I.ctx.activate(h,w,$,P,E):pn(h,w,$,I,O,P,E):Rn(p,h,E)},pn=(p,h,w,$,I,O,P)=>{const F=p.component=Zu(p,$,I);if(ga(p)&&(F.ctx.renderer=ee),Ju(F,!1,P),F.asyncDep){if(I&&I.registerDep(F,un,P),!p.el){const E=F.subTree=k(Mt);C(null,E,h,w)}}else un(F,p,h,w,I,O,P)},Rn=(p,h,w)=>{const $=h.component=p.component;if(Yu(p,h,w))if($.asyncDep&&!$.asyncResolved){K($,h,w);return}else $.next=h,$.update();else h.el=p.el,$.vnode=h},un=(p,h,w,$,I,O,P)=>{const F=()=>{if(p.isMounted){let{next:R,bu:D,u:z,parent:Z,vnode:an}=p;{const En=ja(p);if(En){R&&(R.el=an.el,K(p,R,P)),En.asyncDep.then(()=>{p.isUnmounted||F()});return}}let en=R,jn;Ot(p,!1),R?(R.el=an.el,K(p,R,P)):R=an,D&&Uo(D),(jn=R.props&&R.props.onVnodeBeforeUpdate)&&Kn(jn,Z,R,an),Ot(p,!0);const Mn=nr(p),zn=p.subTree;p.subTree=Mn,_(zn,Mn,f(zn.el),Ue(zn),p,I,O),R.el=Mn.el,en===null&&Xu(p,Mn.el),z&&Fn(z,I),(jn=R.props&&R.props.onVnodeUpdated)&&Fn(()=>Kn(jn,Z,R,an),I)}else{let R;const{el:D,props:z}=h,{bm:Z,m:an,parent:en,root:jn,type:Mn}=p,zn=qt(h);if(Ot(p,!1),Z&&Uo(Z),!zn&&(R=z&&z.onVnodeBeforeMount)&&Kn(R,en,h),Ot(p,!0),D&&$s){const En=()=>{p.subTree=nr(p),$s(D,p.subTree,p,I,null)};zn&&Mn.__asyncHydrate?Mn.__asyncHydrate(D,p,En):En()}else{jn.ce&&jn.ce._injectChildStyle(Mn);const En=p.subTree=nr(p);_(null,En,w,$,p,I,O),h.el=En.el}if(an&&Fn(an,I),!zn&&(R=z&&z.onVnodeMounted)){const En=h;Fn(()=>Kn(R,en,En),I)}(h.shapeFlag&256||en&&qt(en.vnode)&&en.vnode.shapeFlag&256)&&p.a&&Fn(p.a,I),p.isMounted=!0,h=w=$=null}};p.scope.on();const E=p.effect=new qi(F);p.scope.off();const S=p.update=E.run.bind(E),V=p.job=E.runIfDirty.bind(E);V.i=p,V.id=p.uid,E.scheduler=()=>os(V),Ot(p,!0),S()},K=(p,h,w)=>{h.component=p;const $=p.vnode.props;p.vnode=h,p.next=null,Tu(p,h.props,$,w),Su(p,h.children,w),It(),Ps(p),Lt()},q=(p,h,w,$,I,O,P,F,E=!1)=>{const S=p&&p.children,V=p?p.shapeFlag:0,R=h.children,{patchFlag:D,shapeFlag:z}=h;if(D>0){if(D&128){Vt(S,R,w,$,I,O,P,F,E);return}else if(D&256){bn(S,R,w,$,I,O,P,F,E);return}}z&8?(V&16&&te(S,I,O),R!==S&&u(w,R)):V&16?z&16?Vt(S,R,w,$,I,O,P,F,E):te(S,I,O,!0):(V&8&&u(w,""),z&16&&fn(R,w,$,I,O,P,F,E))},bn=(p,h,w,$,I,O,P,F,E)=>{p=p||Xt,h=h||Xt;const S=p.length,V=h.length,R=Math.min(S,V);let D;for(D=0;D<R;D++){const z=h[D]=E?vt(h[D]):nt(h[D]);_(p[D],z,w,null,I,O,P,F,E)}S>V?te(p,I,O,!0,!1,R):fn(h,w,$,I,O,P,F,E,R)},Vt=(p,h,w,$,I,O,P,F,E)=>{let S=0;const V=h.length;let R=p.length-1,D=V-1;for(;S<=R&&S<=D;){const z=p[S],Z=h[S]=E?vt(h[S]):nt(h[S]);if(se(z,Z))_(z,Z,w,null,I,O,P,F,E);else break;S++}for(;S<=R&&S<=D;){const z=p[R],Z=h[D]=E?vt(h[D]):nt(h[D]);if(se(z,Z))_(z,Z,w,null,I,O,P,F,E);else break;R--,D--}if(S>R){if(S<=D){const z=D+1,Z=z<V?h[z].el:$;for(;S<=D;)_(null,h[S]=E?vt(h[S]):nt(h[S]),w,Z,I,O,P,F,E),S++}}else if(S>D)for(;S<=R;)Gn(p[S],I,O,!0),S++;else{const z=S,Z=S,an=new Map;for(S=Z;S<=D;S++){const An=h[S]=E?vt(h[S]):nt(h[S]);An.key!=null&&an.set(An.key,S)}let en,jn=0;const Mn=D-Z+1;let zn=!1,En=0;const oe=new Array(Mn);for(S=0;S<Mn;S++)oe[S]=0;for(S=z;S<=R;S++){const An=p[S];if(jn>=Mn){Gn(An,I,O,!0);continue}let qn;if(An.key!=null)qn=an.get(An.key);else for(en=Z;en<=D;en++)if(oe[en-Z]===0&&se(An,h[en])){qn=en;break}qn===void 0?Gn(An,I,O,!0):(oe[qn-Z]=S+1,qn>=En?En=qn:zn=!0,_(An,h[qn],w,null,I,O,P,F,E),jn++)}const Ss=zn?Fu(oe):Xt;for(en=Ss.length-1,S=Mn-1;S>=0;S--){const An=Z+S,qn=h[An],js=An+1<V?h[An+1].el:$;oe[S]===0?_(null,qn,w,js,I,O,P,F,E):zn&&(en<0||S!==Ss[en]?Tt(qn,w,js,2):en--)}}},Tt=(p,h,w,$,I=null)=>{const{el:O,type:P,transition:F,children:E,shapeFlag:S}=p;if(S&6){Tt(p.component.subTree,h,w,$);return}if(S&128){p.suspense.move(h,w,$);return}if(S&64){P.move(p,h,w,ee);return}if(P===mn){o(O,h,w);for(let R=0;R<E.length;R++)Tt(E[R],h,w,$);o(p.anchor,h,w);return}if(P===tr){T(p,h,w);return}if($!==2&&S&1&&F)if($===0)F.beforeEnter(O),o(O,h,w),Fn(()=>F.enter(O),I);else{const{leave:R,delayLeave:D,afterLeave:z}=F,Z=()=>o(O,h,w),an=()=>{R(O,()=>{Z(),z&&z()})};D?D(O,Z,an):an()}else o(O,h,w)},Gn=(p,h,w,$=!1,I=!1)=>{const{type:O,props:P,ref:F,children:E,dynamicChildren:S,shapeFlag:V,patchFlag:R,dirs:D,cacheIndex:z}=p;if(R===-2&&(I=!1),F!=null&&wr(F,null,w,p,!0),z!=null&&(h.renderCache[z]=void 0),V&256){h.ctx.deactivate(p);return}const Z=V&1&&D,an=!qt(p);let en;if(an&&(en=P&&P.onVnodeBeforeUnmount)&&Kn(en,h,p),V&6)lc(p.component,w,$);else{if(V&128){p.suspense.unmount(w,$);return}Z&&Ht(p,null,h,"beforeUnmount"),V&64?p.type.remove(p,h,w,ee,$):S&&!S.hasOnce&&(O!==mn||R>0&&R&64)?te(S,h,w,!1,!0):(O===mn&&R&384||!I&&V&16)&&te(E,h,w),$&&Ts(p)}(an&&(en=P&&P.onVnodeUnmounted)||Z)&&Fn(()=>{en&&Kn(en,h,p),Z&&Ht(p,null,h,"unmounted")},w)},Ts=p=>{const{type:h,el:w,anchor:$,transition:I}=p;if(h===mn){ac(w,$);return}if(h===tr){H(p);return}const O=()=>{r(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:F}=I,E=()=>P(w,O);F?F(p.el,O,E):E()}else O()},ac=(p,h)=>{let w;for(;p!==h;)w=d(p),r(p),p=w;r(h)},lc=(p,h,w)=>{const{bum:$,scope:I,job:O,subTree:P,um:F,m:E,a:S}=p;Ys(E),Ys(S),$&&Uo($),I.stop(),O&&(O.flags|=8,Gn(P,p,h,w)),F&&Fn(F,h),Fn(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},te=(p,h,w,$=!1,I=!1,O=0)=>{for(let P=O;P<p.length;P++)Gn(p[P],h,w,$,I)},Ue=p=>{if(p.shapeFlag&6)return Ue(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=d(p.anchor||p.el),w=h&&h[tu];return w?d(w):h};let Yo=!1;const Hs=(p,h,w)=>{p==null?h._vnode&&Gn(h._vnode,null,null,!0):_(h._vnode||null,p,h,null,null,null,w),h._vnode=p,Yo||(Yo=!0,Ps(),pa(),Yo=!1)},ee={p:_,um:Gn,m:Tt,r:Ts,mt:pn,mc:fn,pc:q,pbc:Q,n:Ue,o:n};let Os,$s;return{render:Hs,hydrate:Os,createApp:Cu(Hs,Os)}}function Qo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ot({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Au(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Sa(n,t,e=!1){const o=n.children,r=t.children;if(Y(o)&&Y(r))for(let s=0;s<o.length;s++){const i=o[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=vt(r[s]),a.el=i.el),!e&&a.patchFlag!==-2&&Sa(i,a)),a.type===So&&(a.el=i.el)}}function Fu(n){const t=n.slice(),e=[0];let o,r,s,i,a;const l=n.length;for(o=0;o<l;o++){const c=n[o];if(c!==0){if(r=e[e.length-1],n[r]<c){t[o]=r,e.push(o);continue}for(s=0,i=e.length-1;s<i;)a=s+i>>1,n[e[a]]<c?s=a+1:i=a;c<n[e[s]]&&(s>0&&(t[o]=e[s-1]),e[s]=o)}}for(s=e.length,i=e[s-1];s-- >0;)e[s]=i,i=t[i];return e}function ja(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ja(t)}function Ys(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Pu=Symbol.for("v-scx"),Ru=()=>de(Pu);function Ln(n,t,e){return Ea(n,t,e)}function Ea(n,t,e=rn){const{immediate:o,deep:r,flush:s,once:i}=e,a=wn({},e),l=t&&o||!t&&s!=="post";let c;if(Oe){if(s==="sync"){const m=Ru();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=_n;a.call=(m,g,_)=>rt(m,u,g,_);let f=!1;s==="post"?a.scheduler=m=>{Fn(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():os(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Gc(n,t,a);return Oe&&(c?c.push(d):l&&d()),d}function Nu(n,t,e){const o=this.proxy,r=gn(n)?n.includes(".")?Aa(o,n):()=>o[n]:n.bind(o,o);let s;X(t)?s=t:(s=t.handler,e=t);const i=De(this),a=Ea(r,s.bind(o),e);return i(),a}function Aa(n,t){const e=t.split(".");return()=>{let o=n;for(let r=0;r<e.length&&o;r++)o=o[e[r]];return o}}const Bu=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Vn(t)}Modifiers`]||n[`${Ct(t)}Modifiers`];function Du(n,t,...e){if(n.isUnmounted)return;const o=n.vnode.props||rn;let r=e;const s=t.startsWith("update:"),i=s&&Bu(o,t.slice(7));i&&(i.trim&&(r=e.map(u=>gn(u)?u.trim():u)),i.number&&(r=e.map(mc)));let a,l=o[a=Xo(t)]||o[a=Xo(Vn(t))];!l&&s&&(l=o[a=Xo(Ct(t))]),l&&rt(l,n,6,r);const c=o[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rt(c,n,6,r)}}function Fa(n,t,e=!1){const o=t.emitsCache,r=o.get(n);if(r!==void 0)return r;const s=n.emits;let i={},a=!1;if(!X(n)){const l=c=>{const u=Fa(c,t,!0);u&&(a=!0,wn(i,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(dn(n)&&o.set(n,null),null):(Y(s)?s.forEach(l=>i[l]=null):wn(i,s),dn(n)&&o.set(n,i),i)}function $o(n,t){return!n||!xo(t)?!1:(t=t.slice(2).replace(/Once$/,""),tn(n,t[0].toLowerCase()+t.slice(1))||tn(n,Ct(t))||tn(n,t))}function nr(n){const{type:t,vnode:e,proxy:o,withProxy:r,propsOptions:[s],slots:i,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=n,j=uo(n);let C,L;try{if(e.shapeFlag&4){const H=r||o,N=H;C=nt(c.call(N,H,u,f,m,d,g)),L=a}else{const H=t;C=nt(H.length>1?H(f,{attrs:a,slots:i,emit:l}):H(f,null)),L=t.props?a:Vu(a)}}catch(H){pe.length=0,Io(H,n,1),C=k(Mt)}let T=C;if(L&&_!==!1){const H=Object.keys(L),{shapeFlag:N}=T;H.length&&N&7&&(s&&H.some(Xr)&&(L=zu(L,s)),T=Qt(T,L,!1,!0))}return e.dirs&&(T=Qt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&rs(T,e.transition),C=T,uo(j),C}const Vu=n=>{let t;for(const e in n)(e==="class"||e==="style"||xo(e))&&((t||(t={}))[e]=n[e]);return t},zu=(n,t)=>{const e={};for(const o in n)(!Xr(o)||!(o.slice(9)in t))&&(e[o]=n[o]);return e};function Yu(n,t,e){const{props:o,children:r,component:s}=n,{props:i,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return o?Xs(o,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(i[d]!==o[d]&&!$o(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Xs(o,i,c):!0:!!i;return!1}function Xs(n,t,e){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==n[s]&&!$o(e,s))return!0}return!1}function Xu({vnode:n,parent:t},e){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===n&&(o.el=n.el),o===n)(n=t.vnode).el=e,t=t.parent;else break}}const Pa=n=>n.__isSuspense;function Uu(n,t){t&&t.pendingBranch?Y(n)?t.effects.push(...n):t.effects.push(n):Zc(n)}const mn=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),pe=[];let Pn=null;function y(n=!1){pe.push(Pn=n?null:[])}function Wu(){pe.pop(),Pn=pe[pe.length-1]||null}let Te=1;function Us(n){Te+=n,n<0&&Pn&&(Pn.hasOnce=!0)}function Ra(n){return n.dynamicChildren=Te>0?Pn||Xt:null,Wu(),Te>0&&Pn&&Pn.push(n),n}function x(n,t,e,o,r,s){return Ra(M(n,t,e,o,r,s,!0))}function st(n,t,e,o,r){return Ra(k(n,t,e,o,r,!0))}function He(n){return n?n.__v_isVNode===!0:!1}function se(n,t){return n.type===t.type&&n.key===t.key}const Na=({key:n})=>n??null,to=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?gn(n)||In(n)||X(n)?{i:yn,r:n,k:t,f:!!e}:n:null);function M(n,t=null,e=null,o=0,r=null,s=n===mn?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Na(t),ref:t&&to(t),scopeId:To,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(cs(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=gn(e)?8:16),Te>0&&!i&&Pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pn.push(l),l}const k=Gu;function Gu(n,t=null,e=null,o=0,r=null,s=!1){if((!n||n===wa)&&(n=Mt),He(n)){const a=Qt(n,t,!0);return e&&cs(a,e),Te>0&&!s&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(ef(n)&&(n=n.__vccOpts),t){t=Ba(t);let{class:a,style:l}=t;a&&!gn(a)&&(t.class=Xn(a)),dn(l)&&(es(l)&&!Y(l)&&(l=wn({},l)),t.style=xt(l))}const i=gn(n)?1:Pa(n)?128:eu(n)?64:dn(n)?4:X(n)?2:0;return M(n,t,e,o,r,i,s,!0)}function Ba(n){return n?es(n)||Ca(n)?wn({},n):n:null}function Qt(n,t,e=!1,o=!1){const{props:r,ref:s,patchFlag:i,children:a,transition:l}=n,c=t?us(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Na(c),ref:t&&t.ref?e&&s?Y(s)?s.concat(to(t)):[s,to(t)]:to(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==mn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qt(n.ssContent),ssFallback:n.ssFallback&&Qt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&o&&rs(u,l.clone(u)),u}function eo(n=" ",t=0){return k(So,null,n,t)}function kr(n="",t=!1){return t?(y(),st(Mt,null,n)):k(Mt,null,n)}function nt(n){return n==null||typeof n=="boolean"?k(Mt):Y(n)?k(mn,null,n.slice()):He(n)?vt(n):k(So,null,String(n))}function vt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qt(n)}function cs(n,t){let e=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(Y(t))e=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),cs(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Ca(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:yn},e=32):(t=String(t),o&64?(e=16,t=[eo(t)]):e=8);n.children=t,n.shapeFlag|=e}function us(...n){const t={};for(let e=0;e<n.length;e++){const o=n[e];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Xn([t.class,o.class]));else if(r==="style")t.style=xt([t.style,o.style]);else if(xo(r)){const s=t[r],i=o[r];i&&s!==i&&!(Y(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}function Kn(n,t,e,o=null){rt(n,t,7,[e,o])}const qu=ba();let Ku=0;function Zu(n,t,e){const o=n.type,r=(t?t.appContext:n.appContext)||qu,s={uid:Ku++,vnode:n,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:La(o,r),emitsOptions:Fa(o,r),emit:null,emitted:null,propsDefaults:rn,inheritAttrs:o.inheritAttrs,ctx:rn,data:rn,props:rn,attrs:rn,slots:rn,refs:rn,setupState:rn,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Du.bind(null,s),n.ce&&n.ce(s),s}let _n=null;const jo=()=>_n||yn;let po,Cr;{const n=ko(),t=(e,o)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(o),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};po=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),Cr=t("__VUE_SSR_SETTERS__",e=>Oe=e)}const De=n=>{const t=_n;return po(n),n.scope.on(),()=>{n.scope.off(),po(t)}},Ws=()=>{_n&&_n.scope.off(),po(null)};function Da(n){return n.vnode.shapeFlag&4}let Oe=!1;function Ju(n,t=!1,e=!1){t&&Cr(t);const{props:o,children:r}=n.vnode,s=Da(n);Lu(n,o,s,t),$u(n,r,e);const i=s?Qu(n,t):void 0;return t&&Cr(!1),i}function Qu(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gu);const{setup:o}=e;if(o){It();const r=n.setupContext=o.length>1?za(n):null,s=De(n),i=Be(o,n,0,[n.props,r]),a=Di(i);if(Lt(),s(),(a||n.sp)&&!qt(n)&&ha(n),a){if(i.then(Ws,Ws),t)return i.then(l=>{Gs(n,l,t)}).catch(l=>{Io(l,n,0)});n.asyncDep=i}else Gs(n,i,t)}else Va(n,t)}function Gs(n,t,e){X(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:dn(t)&&(n.setupState=ua(t)),Va(n,e)}let qs;function Va(n,t,e){const o=n.type;if(!n.render){if(!t&&qs&&!o.render){const r=o.template||as(n).template;if(r){const{isCustomElement:s,compilerOptions:i}=n.appContext.config,{delimiters:a,compilerOptions:l}=o,c=wn(wn({isCustomElement:s,delimiters:a},i),l);o.render=qs(r,c)}}n.render=o.render||tt}{const r=De(n);It();try{wu(n)}finally{Lt(),r()}}}const nf={get(n,t){return kn(n,"get",""),n[t]}};function za(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,nf),slots:n.slots,emit:n.emit,expose:t}}function Eo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ua(Vc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in fe)return fe[e](n)},has(t,e){return e in t||e in fe}})):n.proxy}function tf(n,t=!0){return X(n)?n.displayName||n.name:n.name||t&&n.__name}function ef(n){return X(n)&&"__vccOpts"in n}const Dn=(n,t)=>Uc(n,t,Oe);function $e(n,t,e){const o=arguments.length;return o===2?dn(t)&&!Y(t)?He(t)?k(n,null,[t]):k(n,t):k(n,null,t):(o>3?e=Array.prototype.slice.call(arguments,2):o===3&&He(e)&&(e=[e]),k(n,t,e))}const of="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ir;const Ks=typeof window<"u"&&window.trustedTypes;if(Ks)try{Ir=Ks.createPolicy("vue",{createHTML:n=>n})}catch{}const Ya=Ir?n=>Ir.createHTML(n):n=>n,rf="http://www.w3.org/2000/svg",sf="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Zs=lt&&lt.createElement("template"),af={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,o)=>{const r=t==="svg"?lt.createElementNS(rf,n):t==="mathml"?lt.createElementNS(sf,n):e?lt.createElement(n,{is:e}):lt.createElement(n);return n==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:n=>lt.createTextNode(n),createComment:n=>lt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>lt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,o,r,s){const i=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Zs.innerHTML=Ya(o==="svg"?`<svg>${n}</svg>`:o==="mathml"?`<math>${n}</math>`:n);const a=Zs.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[i?i.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},lf=Symbol("_vtc");function cf(n,t,e){const o=n[lf];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Js=Symbol("_vod"),uf=Symbol("_vsh"),ff=Symbol(""),df=/(^|;)\s*display\s*:/;function pf(n,t,e){const o=n.style,r=gn(e);let s=!1;if(e&&!r){if(t)if(gn(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();e[a]==null&&oo(o,a,"")}else for(const i in t)e[i]==null&&oo(o,i,"");for(const i in e)i==="display"&&(s=!0),oo(o,i,e[i])}else if(r){if(t!==e){const i=o[ff];i&&(e+=";"+i),o.cssText=e,s=df.test(e)}}else t&&n.removeAttribute("style");Js in n&&(n[Js]=s?o.display:"",n[uf]&&(o.display="none"))}const Qs=/\s*!important$/;function oo(n,t,e){if(Y(e))e.forEach(o=>oo(n,t,o));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const o=mf(n,t);Qs.test(e)?n.setProperty(Ct(o),e.replace(Qs,""),"important"):n[o]=e}}const ni=["Webkit","Moz","ms"],er={};function mf(n,t){const e=er[t];if(e)return e;let o=Vn(t);if(o!=="filter"&&o in n)return er[t]=o;o=Mo(o);for(let r=0;r<ni.length;r++){const s=ni[r]+o;if(s in n)return er[t]=s}return t}const ti="http://www.w3.org/1999/xlink";function ei(n,t,e,o,r,s=_c(t)){o&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ti,t.slice(6,t.length)):n.setAttributeNS(ti,t,e):e==null||s&&!Xi(e)?n.removeAttribute(t):n.setAttribute(t,s?"":ft(e)?String(e):e)}function oi(n,t,e,o,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ya(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let i=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Xi(e):e==null&&a==="string"?(e="",i=!0):a==="number"&&(e=0,i=!0)}try{n[t]=e}catch{}i&&n.removeAttribute(r||t)}function hf(n,t,e,o){n.addEventListener(t,e,o)}function gf(n,t,e,o){n.removeEventListener(t,e,o)}const ri=Symbol("_vei");function vf(n,t,e,o,r=null){const s=n[ri]||(n[ri]={}),i=s[t];if(o&&i)i.value=o;else{const[a,l]=yf(t);if(o){const c=s[t]=_f(o,r);hf(n,a,c,l)}else i&&(gf(n,a,i,l),s[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function yf(n){let t;if(si.test(n)){t={};let o;for(;o=n.match(si);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ct(n.slice(2)),t]}let or=0;const wf=Promise.resolve(),xf=()=>or||(wf.then(()=>or=0),or=Date.now());function _f(n,t){const e=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=e.attached)return;rt(bf(o,e.value),t,5,[o])};return e.value=n,e.attached=xf(),e}function bf(n,t){if(Y(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const ii=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mf=(n,t,e,o,r,s)=>{const i=r==="svg";t==="class"?cf(n,o,i):t==="style"?pf(n,e,o):xo(t)?Xr(t)||vf(n,t,e,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(n,t,o,i))?(oi(n,t,o),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ei(n,t,o,i,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!gn(o))?oi(n,Vn(t),o,s,t):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),ei(n,t,o,i))};function kf(n,t,e,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in n&&ii(t)&&X(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ii(t)&&gn(e)?!1:t in n}const Cf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},If=(n,t)=>{const e=n._withKeys||(n._withKeys={}),o=t.join(".");return e[o]||(e[o]=r=>{if(!("key"in r))return;const s=Ct(r.key);if(t.some(i=>i===s||Cf[i]===s))return n(r)})},Lf=wn({patchProp:Mf},af);let ai;function Tf(){return ai||(ai=ju(Lf))}const Xa=(...n)=>{const t=Tf().createApp(...n),{mount:e}=t;return t.mount=o=>{const r=Of(o);if(!r)return;const s=t._component;!X(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=e(r,!1,Hf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Hf(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Of(n){return gn(n)?document.querySelector(n):n}/**
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
 */const Sf=({size:n,strokeWidth:t=2,absoluteStrokeWidth:e,color:o,iconNode:r,name:s,class:i,...a},{slots:l})=>$e("svg",{...Ke,width:n||Ke.width,height:n||Ke.height,stroke:o||Ke.stroke,"stroke-width":e?Number(t)*24/Number(n):t,class:["lucide",`lucide-${$f(s??"icon")}`],...a},[...r.map(c=>$e(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=(n,t)=>(e,{slots:o})=>$e(Sf,{...e,iconNode:t,name:n},o);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Ao("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Ao("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Ao("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=Ao("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);function Ua(n){return Gr()?(Gi(n),!0):!1}function Fo(n){return typeof n=="function"?n():v(n)}const fs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pf=Object.prototype.toString,Rf=n=>Pf.call(n)==="[object Object]",Nf=()=>{};function Bf(n){let t;function e(){return t||(t=n()),t}return e.reset=async()=>{const o=t;t=void 0,o&&await o},e}function Df(n,t,e={}){const{immediate:o=!0}=e,r=b(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function a(){r.value=!1,i()}function l(...c){i(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,n(...c)},Fo(t))}return o&&(r.value=!0,fs&&l()),Ua(a),{isPending:ns(r),start:l,stop:a}}const Vf=fs?window:void 0,Wa=fs?window.navigator:void 0;function zf(n){var t;const e=Fo(n);return(t=e==null?void 0:e.$el)!=null?t:e}function Ga(...n){let t,e,o,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,o,r]=n,t=Vf):[t,e,o,r]=n,!t)return Nf;Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,d,m)=>(u.addEventListener(f,d,m),()=>u.removeEventListener(f,d,m)),l=Ln(()=>[zf(t),Fo(r)],([u,f])=>{if(i(),!u)return;const d=Rf(f)?{...f}:f;s.push(...e.flatMap(m=>o.map(g=>a(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return Ua(c),c}function Yf(){const n=b(!1),t=jo();return t&&$n(()=>{n.value=!0},t),n}function qa(n){const t=Yf();return Dn(()=>(t.value,!!n()))}function li(n,t={}){const{controls:e=!1,navigator:o=Wa}=t,r=qa(()=>o&&"permissions"in o),s=yr(),i=typeof n=="string"?{name:n}:n,a=yr(),l=()=>{var u,f;a.value=(f=(u=s.value)==null?void 0:u.state)!=null?f:"prompt"};Ga(s,"change",l);const c=Bf(async()=>{if(r.value){if(!s.value)try{s.value=await o.permissions.query(i)}catch{s.value=void 0}finally{l()}if(e)return nn(s.value)}});return c(),e?{state:a,isSupported:r,query:c}:a}function Xf(n={}){const{navigator:t=Wa,read:e=!1,source:o,copiedDuring:r=1500,legacy:s=!1}=n,i=qa(()=>t&&"clipboard"in t),a=li("clipboard-read"),l=li("clipboard-write"),c=Dn(()=>i.value||s),u=b(""),f=b(!1),d=Df(()=>f.value=!1,r);function m(){i.value&&C(a.value)?t.clipboard.readText().then(L=>{u.value=L}):u.value=j()}c.value&&e&&Ga(["copy","cut"],m);async function g(L=Fo(o)){c.value&&L!=null&&(i.value&&C(l.value)?await t.clipboard.writeText(L):_(L),u.value=L,f.value=!0,d.start())}function _(L){const T=document.createElement("textarea");T.value=L??"",T.style.position="absolute",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),T.remove()}function j(){var L,T,H;return(H=(T=(L=document==null?void 0:document.getSelection)==null?void 0:L.call(document))==null?void 0:T.toString())!=null?H:""}function C(L){return L==="granted"||L==="prompt"}return{isSupported:c,text:u,copied:f,copy:g}}const Uf=`<template>
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
`,Qf=`<template>
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
`,nd=`<template>
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
`,ld=`<template>
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
`,cd=`<template>
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
`,dd=`<template>
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
`,pd=`<template>
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
`,vd=`<template>
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
`,yd=`<template>
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
`,Td=`<template>
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
`,Hd=`<template>
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
`,jd=`<template>
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
`,Ad=`<template>
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
`,Fd=`<template>
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
`,Pd=`<template>
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
`,Rd=`<template>
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
`,Nd=`<template>
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
`,Bd=`<template>
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
`,Dd=`<template>
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
`,Vd=`<template>
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
`,zd=`<template>
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
`;function rr(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Lr(n,t,e=".",o){if(!rr(t))return Lr(n,{},e,o);const r=Object.assign({},t);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const i=n[s];i!=null&&(o&&o(r,s,i,e)||(Array.isArray(i)&&Array.isArray(r[s])?r[s]=[...i,...r[s]]:rr(i)&&rr(r[s])?r[s]=Lr(i,r[s],(e?`${e}.`:"")+s.toString(),o):r[s]=i))}return r}function Yd(n){return(...t)=>t.reduce((e,o)=>Lr(e,o,"",n),{})}const Xd=Yd();function Ka(n){return Gr()?(Gi(n),!0):!1}function ds(n){return typeof n=="function"?n():v(n)}const Ud=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Wd=n=>n!=null,Gd=Object.prototype.toString,Za=n=>Gd.call(n)==="[object Object]",ro=()=>{};function qd(n){return jo()}function Kd(n,t){qd()&&Oo(n,t)}function me(n){var t;const e=ds(n);return(t=e==null?void 0:e.$el)!=null?t:e}const Ja=Ud?window:void 0;function Zn(...n){let t,e,o,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,o,r]=n,t=Ja):[t,e,o,r]=n,!t)return ro;Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,d,m)=>(u.addEventListener(f,d,m),()=>u.removeEventListener(f,d,m)),l=Ln(()=>[me(t),ds(r)],([u,f])=>{if(i(),!u)return;const d=Za(f)?{...f}:f;s.push(...e.flatMap(m=>o.map(g=>a(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return Ka(c),c}function Zd(){const n=b(!1),t=jo();return t&&$n(()=>{n.value=!0},t),n}function Jd(n){const t=Zd();return Dn(()=>(t.value,!!n()))}function Qd(n,t,e={}){const{root:o,rootMargin:r="0px",threshold:s=.1,window:i=Ja,immediate:a=!0}=e,l=Jd(()=>i&&"IntersectionObserver"in i),c=Dn(()=>{const g=ds(n);return(Array.isArray(g)?g:[g]).map(me).filter(Wd)});let u=ro;const f=b(a),d=l.value?Ln(()=>[c.value,me(o),f.value],([g,_])=>{if(u(),!f.value||!g.length)return;const j=new IntersectionObserver(t,{root:me(_),rootMargin:r,threshold:s});g.forEach(C=>C&&j.observe(C)),u=()=>{j.disconnect(),u=ro}},{immediate:a,flush:"post"}):ro,m=()=>{u(),d(),f.value=!1};return Ka(m),{isSupported:l,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:m}}const Qa=1/60*1e3,np=typeof performance<"u"?()=>performance.now():()=>Date.now(),nl=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(np()),Qa);function tp(n){let t=[],e=[],o=0,r=!1,s=!1;const i=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?t:e;return c&&i.add(l),d.indexOf(l)===-1&&(d.push(l),f&&r&&(o=t.length)),l},cancel:l=>{const c=e.indexOf(l);c!==-1&&e.splice(c,1),i.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[t,e]=[e,t],e.length=0,o=t.length,o)for(let c=0;c<o;c++){const u=t[c];u(l),i.has(u)&&(a.schedule(u),n())}r=!1,s&&(s=!1,a.process(l))}};return a}const ep=40;let Tr=!0,Se=!1,Hr=!1;const Zt={delta:0,timestamp:0},Ve=["read","update","preRender","render","postRender"],Po=Ve.reduce((n,t)=>(n[t]=tp(()=>Se=!0),n),{}),Or=Ve.reduce((n,t)=>{const e=Po[t];return n[t]=(o,r=!1,s=!1)=>(Se||sp(),e.schedule(o,r,s)),n},{}),op=Ve.reduce((n,t)=>(n[t]=Po[t].cancel,n),{});Ve.reduce((n,t)=>(n[t]=()=>Po[t].process(Zt),n),{});const rp=n=>Po[n].process(Zt),tl=n=>{Se=!1,Zt.delta=Tr?Qa:Math.max(Math.min(n-Zt.timestamp,ep),1),Zt.timestamp=n,Hr=!0,Ve.forEach(rp),Hr=!1,Se&&(Tr=!1,nl(tl))},sp=()=>{Se=!0,Tr=!0,Hr||nl(tl)},el=()=>Zt;function ol(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e}var ci=function(){};const $r=(n,t,e)=>Math.min(Math.max(e,n),t),sr=.001,ip=.01,ap=10,lp=.05,cp=1;function up({duration:n=800,bounce:t=.25,velocity:e=0,mass:o=1}){let r,s,i=1-t;i=$r(lp,cp,i),n=$r(ip,ap,n/1e3),i<1?(r=c=>{const u=c*i,f=u*n,d=u-e,m=Sr(c,i),g=Math.exp(-f);return sr-d/m*g},s=c=>{const f=c*i*n,d=f*e+e,m=Math.pow(i,2)*Math.pow(c,2)*n,g=Math.exp(-f),_=Sr(Math.pow(c,2),i);return(-r(c)+sr>0?-1:1)*((d-m)*g)/_}):(r=c=>{const u=Math.exp(-c*n),f=(c-e)*n+1;return-sr+u*f},s=c=>{const u=Math.exp(-c*n),f=(e-c)*(n*n);return u*f});const a=5/n,l=dp(r,s,a);if(n=n*1e3,isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*o;return{stiffness:c,damping:i*2*Math.sqrt(o*c),duration:n}}}const fp=12;function dp(n,t,e){let o=e;for(let r=1;r<fp;r++)o=o-n(o)/t(o);return o}function Sr(n,t){return n*Math.sqrt(1-t*t)}const pp=["duration","bounce"],mp=["stiffness","damping","mass"];function ui(n,t){return t.some(e=>n[e]!==void 0)}function hp(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!ui(n,mp)&&ui(n,pp)){const e=up(n);t=Object.assign(Object.assign(Object.assign({},t),e),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ps(n){var{from:t=0,to:e=1,restSpeed:o=2,restDelta:r}=n,s=ol(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:d}=hp(s),m=fi,g=fi;function _(){const j=u?-(u/1e3):0,C=e-t,L=l/(2*Math.sqrt(a*c)),T=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(e-t)/100,.4)),L<1){const H=Sr(T,L);m=N=>{const W=Math.exp(-L*T*N);return e-W*((j+L*T*C)/H*Math.sin(H*N)+C*Math.cos(H*N))},g=N=>{const W=Math.exp(-L*T*N);return L*T*W*(Math.sin(H*N)*(j+L*T*C)/H+C*Math.cos(H*N))-W*(Math.cos(H*N)*(j+L*T*C)-H*C*Math.sin(H*N))}}else if(L===1)m=H=>e-Math.exp(-T*H)*(C+(j+T*C)*H);else{const H=T*Math.sqrt(L*L-1);m=N=>{const W=Math.exp(-L*T*N),G=Math.min(H*N,300);return e-W*((j+L*T*C)*Math.sinh(G)+H*C*Math.cosh(G))/H}}}return _(),{next:j=>{const C=m(j);if(d)i.done=j>=f;else{const L=g(j)*1e3,T=Math.abs(L)<=o,H=Math.abs(e-C)<=r;i.done=T&&H}return i.value=i.done?e:C,i},flipTarget:()=>{u=-u,[t,e]=[e,t],_()}}}ps.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const fi=n=>0,rl=(n,t,e)=>{const o=t-n;return o===0?1:(e-n)/o},ms=(n,t,e)=>-e*n+e*t+n,sl=(n,t)=>e=>Math.max(Math.min(e,t),n),he=n=>n%1?Number(n.toFixed(5)):n,je=/(-)?([\d]*\.?[\d])+/g,jr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,gp=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ze(n){return typeof n=="string"}const Ye={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ge=Object.assign(Object.assign({},Ye),{transform:sl(0,1)}),Ze=Object.assign(Object.assign({},Ye),{default:1}),hs=n=>({test:t=>ze(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),$t=hs("deg"),ve=hs("%"),U=hs("px"),di=Object.assign(Object.assign({},ve),{parse:n=>ve.parse(n)/100,transform:n=>ve.transform(n*100)}),gs=(n,t)=>e=>!!(ze(e)&&gp.test(e)&&e.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(e,t)),il=(n,t,e)=>o=>{if(!ze(o))return o;const[r,s,i,a]=o.match(je);return{[n]:parseFloat(r),[t]:parseFloat(s),[e]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Ft={test:gs("hsl","hue"),parse:il("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:o=1})=>"hsla("+Math.round(n)+", "+ve.transform(he(t))+", "+ve.transform(he(e))+", "+he(ge.transform(o))+")"},vp=sl(0,255),ir=Object.assign(Object.assign({},Ye),{transform:n=>Math.round(vp(n))}),yt={test:gs("rgb","red"),parse:il("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:o=1})=>"rgba("+ir.transform(n)+", "+ir.transform(t)+", "+ir.transform(e)+", "+he(ge.transform(o))+")"};function yp(n){let t="",e="",o="",r="";return n.length>5?(t=n.substr(1,2),e=n.substr(3,2),o=n.substr(5,2),r=n.substr(7,2)):(t=n.substr(1,1),e=n.substr(2,1),o=n.substr(3,1),r=n.substr(4,1),t+=t,e+=e,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Er={test:gs("#"),parse:yp,transform:yt.transform},Sn={test:n=>yt.test(n)||Er.test(n)||Ft.test(n),parse:n=>yt.test(n)?yt.parse(n):Ft.test(n)?Ft.parse(n):Er.parse(n),transform:n=>ze(n)?n:n.hasOwnProperty("red")?yt.transform(n):Ft.transform(n)},al="${c}",ll="${n}";function wp(n){var t,e,o,r;return isNaN(n)&&ze(n)&&((e=(t=n.match(je))===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0)+((r=(o=n.match(jr))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function cl(n){typeof n=="number"&&(n=`${n}`);const t=[];let e=0;const o=n.match(jr);o&&(e=o.length,n=n.replace(jr,al),t.push(...o.map(Sn.parse)));const r=n.match(je);return r&&(n=n.replace(je,ll),t.push(...r.map(Ye.parse))),{values:t,numColors:e,tokenised:n}}function ul(n){return cl(n).values}function fl(n){const{values:t,numColors:e,tokenised:o}=cl(n),r=t.length;return s=>{let i=o;for(let a=0;a<r;a++)i=i.replace(a<e?al:ll,a<e?Sn.transform(s[a]):he(s[a]));return i}}const xp=n=>typeof n=="number"?0:n;function _p(n){const t=ul(n);return fl(n)(t.map(xp))}const Xe={test:wp,parse:ul,createTransformer:fl,getAnimatableNone:_p},bp=new Set(["brightness","contrast","saturate","opacity"]);function Mp(n){let[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=e.match(je)||[];if(!o)return n;const r=e.replace(o,"");let s=bp.has(t)?1:0;return o!==e&&(s*=100),t+"("+s+r+")"}const kp=/([a-z-]*)\(.*?\)/g,Ar=Object.assign(Object.assign({},Xe),{getAnimatableNone:n=>{const t=n.match(kp);return t?t.map(Mp).join(" "):n}});function ar(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function pi({hue:n,saturation:t,lightness:e,alpha:o}){n/=360,t/=100,e/=100;let r=0,s=0,i=0;if(!t)r=s=i=e;else{const a=e<.5?e*(1+t):e+t-e*t,l=2*e-a;r=ar(l,a,n+1/3),s=ar(l,a,n),i=ar(l,a,n-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(i*255),alpha:o}}const Cp=(n,t,e)=>{const o=n*n,r=t*t;return Math.sqrt(Math.max(0,e*(r-o)+o))},Ip=[Er,yt,Ft],mi=n=>Ip.find(t=>t.test(n)),dl=(n,t)=>{let e=mi(n),o=mi(t),r=e.parse(n),s=o.parse(t);e===Ft&&(r=pi(r),e=yt),o===Ft&&(s=pi(s),o=yt);const i=Object.assign({},r);return a=>{for(const l in i)l!=="alpha"&&(i[l]=Cp(r[l],s[l],a));return i.alpha=ms(r.alpha,s.alpha,a),e.transform(i)}},Lp=n=>typeof n=="number",Tp=(n,t)=>e=>t(n(e)),pl=(...n)=>n.reduce(Tp);function ml(n,t){return Lp(n)?e=>ms(n,t,e):Sn.test(n)?dl(n,t):gl(n,t)}const hl=(n,t)=>{const e=[...n],o=e.length,r=n.map((s,i)=>ml(s,t[i]));return s=>{for(let i=0;i<o;i++)e[i]=r[i](s);return e}},Hp=(n,t)=>{const e=Object.assign(Object.assign({},n),t),o={};for(const r in e)n[r]!==void 0&&t[r]!==void 0&&(o[r]=ml(n[r],t[r]));return r=>{for(const s in o)e[s]=o[s](r);return e}};function hi(n){const t=Xe.parse(n),e=t.length;let o=0,r=0,s=0;for(let i=0;i<e;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?s++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:s}}const gl=(n,t)=>{const e=Xe.createTransformer(t),o=hi(n),r=hi(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?pl(hl(o.parsed,r.parsed),e):i=>`${i>0?t:n}`},Op=(n,t)=>e=>ms(n,t,e);function $p(n){if(typeof n=="number")return Op;if(typeof n=="string")return Sn.test(n)?dl:gl;if(Array.isArray(n))return hl;if(typeof n=="object")return Hp}function Sp(n,t,e){const o=[],r=e||$p(n[0]),s=n.length-1;for(let i=0;i<s;i++){let a=r(n[i],n[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;a=pl(l,a)}o.push(a)}return o}function jp([n,t],[e]){return o=>e(rl(n,t,o))}function Ep(n,t){const e=n.length,o=e-1;return r=>{let s=0,i=!1;if(r<=n[0]?i=!0:r>=n[o]&&(s=o-1,i=!0),!i){let l=1;for(;l<e&&!(n[l]>r||l===o);l++);s=l-1}const a=rl(n[s],n[s+1],r);return t[s](a)}}function vl(n,t,{clamp:e=!0,ease:o,mixer:r}={}){const s=n.length;ci(s===t.length),ci(!o||!Array.isArray(o)||o.length===s-1),n[0]>n[s-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const i=Sp(t,o,r),a=s===2?jp(n,i):Ep(n,i);return e?l=>a($r(n[0],n[s-1],l)):a}const Ro=n=>t=>1-n(1-t),vs=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,Ap=n=>t=>Math.pow(t,n),yl=n=>t=>t*t*((n+1)*t-n),Fp=n=>{const t=yl(n);return e=>(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))},wl=1.525,Pp=4/11,Rp=8/11,Np=9/10,xl=n=>n,ys=Ap(2),Bp=Ro(ys),_l=vs(ys),bl=n=>1-Math.sin(Math.acos(n)),Ml=Ro(bl),Dp=vs(Ml),ws=yl(wl),Vp=Ro(ws),zp=vs(ws),Yp=Fp(wl),Xp=4356/361,Up=35442/1805,Wp=16061/1805,mo=n=>{if(n===1||n===0)return n;const t=n*n;return n<Pp?7.5625*t:n<Rp?9.075*t-9.9*n+3.4:n<Np?Xp*t-Up*n+Wp:10.8*n*n-20.52*n+10.72},Gp=Ro(mo),qp=n=>n<.5?.5*(1-mo(1-n*2)):.5*mo(n*2-1)+.5;function Kp(n,t){return n.map(()=>t||_l).splice(0,n.length-1)}function Zp(n){const t=n.length;return n.map((e,o)=>o!==0?o/(t-1):0)}function Jp(n,t){return n.map(e=>e*t)}function so({from:n=0,to:t=1,ease:e,offset:o,duration:r=300}){const s={done:!1,value:n},i=Array.isArray(t)?t:[n,t],a=Jp(o&&o.length===i.length?o:Zp(i),r);function l(){return vl(a,i,{ease:Array.isArray(e)?e:Kp(i,e)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{i.reverse(),c=l()}}}function Qp({velocity:n=0,from:t=0,power:e=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:s}){const i={done:!1,value:t};let a=e*n;const l=t+a,c=s===void 0?l:s(l);return c!==l&&(a=c-t),{next:u=>{const f=-a*Math.exp(-u/o);return i.done=!(f>r||f<-r),i.value=i.done?c:c+f,i},flipTarget:()=>{}}}const gi={keyframes:so,spring:ps,decay:Qp};function nm(n){if(Array.isArray(n.to))return so;if(gi[n.type])return gi[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?so:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ps:so}function kl(n,t,e=0){return n-t-e}function tm(n,t,e=0,o=!0){return o?kl(t+-n,t,e):t-(n-t)+e}function em(n,t,e,o){return o?n>=t+e:n<=-e}const om=n=>{const t=({delta:e})=>n(e);return{start:()=>Or.update(t,!0),stop:()=>op.update(t)}};function Cl(n){var t,e,{from:o,autoplay:r=!0,driver:s=om,elapsed:i=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:d,onRepeat:m,onUpdate:g}=n,_=ol(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:j}=_,C,L=0,T=_.duration,H,N=!1,W=!0,G;const fn=nm(_);!((e=(t=fn).needsInterpolation)===null||e===void 0)&&e.call(t,o,j)&&(G=vl([0,100],[o,j],{clamp:!1}),o=0,j=100);const on=fn(Object.assign(Object.assign({},_),{from:o,to:j}));function Q(){L++,l==="reverse"?(W=L%2===0,i=tm(i,T,c,W)):(i=kl(i,T,c),l==="mirror"&&on.flipTarget()),N=!1,m&&m()}function hn(){C.stop(),d&&d()}function vn(pn){if(W||(pn=-pn),i+=pn,!N){const Rn=on.next(Math.max(0,i));H=Rn.value,G&&(H=G(H)),N=W?Rn.done:i<=0}g==null||g(H),N&&(L===0&&(T??(T=i)),L<a?em(i,T,c,W)&&Q():hn())}function xn(){u==null||u(),C=s(vn),C.start()}return r&&xn(),{stop:()=>{f==null||f(),C.stop()}}}function Il(n,t){return t?n*(1e3/t):0}function rm({from:n=0,velocity:t=0,min:e,max:o,power:r=.8,timeConstant:s=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:d,onStop:m}){let g;function _(T){return e!==void 0&&T<e||o!==void 0&&T>o}function j(T){return e===void 0?o:o===void 0||Math.abs(e-T)<Math.abs(o-T)?e:o}function C(T){g==null||g.stop(),g=Cl(Object.assign(Object.assign({},T),{driver:u,onUpdate:H=>{var N;f==null||f(H),(N=T.onUpdate)===null||N===void 0||N.call(T,H)},onComplete:d,onStop:m}))}function L(T){C(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:l},T))}if(_(n))L({from:n,velocity:t,to:j(n)});else{let T=r*t+n;typeof c<"u"&&(T=c(T));const H=j(T),N=H===e?-1:1;let W,G;const fn=on=>{W=G,G=on,t=Il(on-W,el().delta),(N===1&&on>H||N===-1&&on<H)&&L({from:on,to:H,velocity:t})};C({type:"decay",from:n,velocity:t,timeConstant:s,power:r,restDelta:l,modifyTarget:c,onUpdate:_(T)?fn:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Ll=(n,t)=>1-3*t+3*n,Tl=(n,t)=>3*t-6*n,Hl=n=>3*n,ho=(n,t,e)=>((Ll(t,e)*n+Tl(t,e))*n+Hl(t))*n,Ol=(n,t,e)=>3*Ll(t,e)*n*n+2*Tl(t,e)*n+Hl(t),sm=1e-7,im=10;function am(n,t,e,o,r){let s,i,a=0;do i=t+(e-t)/2,s=ho(i,o,r)-n,s>0?e=i:t=i;while(Math.abs(s)>sm&&++a<im);return i}const lm=8,cm=.001;function um(n,t,e,o){for(let r=0;r<lm;++r){const s=Ol(t,e,o);if(s===0)return t;const i=ho(t,e,o)-n;t-=i/s}return t}const io=11,Je=1/(io-1);function fm(n,t,e,o){if(n===t&&e===o)return xl;const r=new Float32Array(io);for(let i=0;i<io;++i)r[i]=ho(i*Je,n,e);function s(i){let a=0,l=1;const c=io-1;for(;l!==c&&r[l]<=i;++l)a+=Je;--l;const u=(i-r[l])/(r[l+1]-r[l]),f=a+u*Je,d=Ol(f,n,e);return d>=cm?um(i,f,n,e):d===0?f:am(i,a,a+Je,n,e)}return i=>i===0||i===1?i:ho(s(i),t,o)}var dm=Object.defineProperty,pm=(n,t,e)=>t in n?dm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,mm=(n,t,e)=>(pm(n,t+"",e),e);class hm{constructor(){mm(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,e,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,e,o)}clear(){this.subscriptions.clear()}}var gm=Object.defineProperty,vm=(n,t,e)=>t in n?gm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jn=(n,t,e)=>(vm(n,typeof t!="symbol"?t+"":t,e),e);function vi(n){return!Number.isNaN(Number.parseFloat(n))}class ym{constructor(t){Jn(this,"current"),Jn(this,"prev"),Jn(this,"timeDelta",0),Jn(this,"lastUpdated",0),Jn(this,"updateSubscribers",new hm),Jn(this,"stopAnimation"),Jn(this,"canTrackVelocity",!1),Jn(this,"updateAndNotify",e=>{this.prev=this.current,this.current=e;const{delta:o,timestamp:r}=el();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Or.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Jn(this,"scheduleVelocityCheck",()=>Or.postRender(this.velocityCheck)),Jn(this,"velocityCheck",({timestamp:e})=>{this.canTrackVelocity||(this.canTrackVelocity=vi(this.current)),e!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=vi(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Il(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(e=>{const{stop:o}=t(e);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function wm(n){return new ym(n)}const{isArray:xm}=Array;function _m(){const n=b({}),t=o=>{const r=s=>{n.value[s]&&(n.value[s].stop(),n.value[s].destroy(),delete n.value[s])};o?xm(o)?o.forEach(r):r(o):Object.keys(n.value).forEach(r)},e=(o,r,s)=>{if(n.value[o])return n.value[o];const i=wm(r);return i.onChange(a=>s[o]=a),n.value[o]=i,i};return Kd(t),{motionValues:n,get:e,stop:t}}function bm(n){return Array.isArray(n)}function St(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function lr(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function Mm(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function cr(){return{type:"keyframes",ease:"linear",duration:300}}function km(n){return{type:"keyframes",duration:800,values:n}}const yi={default:Mm,x:St,y:St,z:St,rotate:St,rotateX:St,rotateY:St,rotateZ:St,scaleX:lr,scaleY:lr,scale:lr,backgroundColor:cr,color:cr,opacity:cr};function $l(n,t){let e;return bm(t)?e=km:e=yi[n]||yi.default,{to:t,...e(t)}}const wi={...Ye,transform:Math.round},Sl={color:Sn,backgroundColor:Sn,outlineColor:Sn,fill:Sn,stroke:Sn,borderColor:Sn,borderTopColor:Sn,borderRightColor:Sn,borderBottomColor:Sn,borderLeftColor:Sn,borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:$t,rotateX:$t,rotateY:$t,rotateZ:$t,scale:Ze,scaleX:Ze,scaleY:Ze,scaleZ:Ze,skew:$t,skewX:$t,skewY:$t,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:ge,originX:di,originY:di,originZ:U,zIndex:wi,filter:Ar,WebkitFilter:Ar,fillOpacity:ge,strokeOpacity:ge,numOctaves:wi},xs=n=>Sl[n];function Fr(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function Cm(n,t){let e=xs(n);return e!==Ar&&(e=Xe),e.getAnimatableNone?e.getAnimatableNone(t):void 0}const Im={linear:xl,easeIn:ys,easeInOut:_l,easeOut:Bp,circIn:bl,circInOut:Dp,circOut:Ml,backIn:ws,backInOut:zp,backOut:Vp,anticipate:Yp,bounceIn:Gp,bounceInOut:qp,bounceOut:mo};function xi(n){if(Array.isArray(n)){const[t,e,o,r]=n;return fm(t,e,o,r)}else if(typeof n=="string")return Im[n];return n}function Lm(n){return Array.isArray(n)&&typeof n[0]!="number"}function _i(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Xe.test(t)&&!t.startsWith("url("))}function Tm(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function Hm({ease:n,times:t,delay:e,...o}){const r={...o};return t&&(r.offset=t),n&&(r.ease=Lm(n)?n.map(xi):xi(n)),e&&(r.elapsed=-e),r}function Om(n,t,e){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),Tm(t),$m(n)||(n={...n,...$l(e,t.to)}),{...t,...Hm(n)}}function $m({delay:n,repeat:t,repeatType:e,repeatDelay:o,from:r,...s}){return!!Object.keys(s).length}function Sm(n,t){return n[t]||n.default||n}function jm(n,t,e,o,r){const s=Sm(o,n);let i=s.from===null||s.from===void 0?t.get():s.from;const a=_i(n,e);i==="none"&&a&&typeof e=="string"&&(i=Cm(n,e));const l=_i(n,i);function c(f){const d={from:i,to:e,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return s.type==="inertia"||s.type==="decay"?rm({...d,...s}):Cl({...Om(s,d,n),onUpdate:m=>{d.onUpdate(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r&&r(),f&&f()}})}function u(f){return t.set(e),r&&r(),f&&f(),{stop:()=>{}}}return!l||!a||s.type===!1?u:c}function Em(){const{motionValues:n,stop:t,get:e}=_m();return{motionValues:n,stop:t,push:(r,s,i,a={},l)=>{const c=i[r],u=e(r,c,i);if(a&&a.immediate){u.set(s);return}const f=jm(r,u,s,a,l);u.start(f)}}}function Am(n,t={},{motionValues:e,push:o,stop:r}=Em()){const s=v(t),i=b(!1);Ln(e,f=>{i.value=Object.values(f).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!s||!s[f])throw new Error(`The variant ${f} does not exist.`);return s[f]},l=f=>{typeof f=="string"&&(f=a(f));const d=Object.entries(f).map(([g,_])=>{if(g!=="transition")return new Promise(j=>o(g,_,n,f.transition||$l(g,f[g]),j))}).filter(Boolean);async function m(){var g,_;await Promise.all(d),(_=(g=f.transition)==null?void 0:g.onComplete)==null||_.call(g)}return Promise.all([m()])};return{isAnimating:i,apply:l,set:f=>{const d=Za(f)?f:a(f);Object.entries(d).forEach(([m,g])=>{m!=="transition"&&o(m,g,n,{immediate:!0})})},leave:async f=>{let d;if(s&&(s.leave&&(d=s.leave),!s.leave&&s.initial&&(d=s.initial)),!d){f();return}await l(d),f()},stop:r}}const _s=typeof window<"u",Fm=()=>_s&&(window.onpointerdown===null||void 0),Pm=()=>_s&&(window.ontouchstart===null||void 0),Rm=()=>_s&&(window.onmousedown===null||void 0);function Nm({target:n,state:t,variants:e,apply:o}){const r=v(e),s=b(!1),i=b(!1),a=b(!1),l=Dn(()=>{let u=[...Object.keys(t.value||{})];return r&&(r.hovered&&(u=[...u,...Object.keys(r.hovered)]),r.tapped&&(u=[...u,...Object.keys(r.tapped)]),r.focused&&(u=[...u,...Object.keys(r.focused)])),u}),c=Dn(()=>{const u={};Object.assign(u,t.value),s.value&&r.hovered&&Object.assign(u,r.hovered),i.value&&r.tapped&&Object.assign(u,r.tapped),a.value&&r.focused&&Object.assign(u,r.focused);for(const f in u)l.value.includes(f)||delete u[f];return u});r.hovered&&(Zn(n,"mouseenter",()=>s.value=!0),Zn(n,"mouseleave",()=>{s.value=!1,i.value=!1})),r.tapped&&(Rm()&&(Zn(n,"mousedown",()=>i.value=!0),Zn(n,"mouseup",()=>i.value=!1)),Fm()&&(Zn(n,"pointerdown",()=>i.value=!0),Zn(n,"pointerup",()=>i.value=!1)),Pm()&&(Zn(n,"touchstart",()=>i.value=!0),Zn(n,"touchend",()=>i.value=!1))),r.focused&&(Zn(n,"focus",()=>a.value=!0),Zn(n,"blur",()=>a.value=!1)),Ln([s,i,a],()=>{o(c.value)})}function Bm({set:n,target:t,variants:e,variant:o}){const r=v(e);Ln(()=>t,()=>{r&&(r.initial&&(n("initial"),o.value="initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function Dm({state:n,apply:t}){Ln(n,e=>{e&&t(e)},{immediate:!0})}function Vm({target:n,variants:t,variant:e}){const o=v(t);o&&(o.visible||o.visibleOnce)&&Qd(n,([{isIntersecting:r}])=>{o.visible?r?e.value="visible":e.value="initial":o.visibleOnce&&(r&&e.value!=="visibleOnce"?e.value="visibleOnce":e.value||(e.value="initial"))})}function zm(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&Bm(n),t.syncVariants&&Dm(n),t.visibilityHooks&&Vm(n),t.eventListeners&&Nm(n)}function jl(n={}){const t=sn({...n}),e=b({});return Ln(t,()=>{const o={};for(const[r,s]of Object.entries(t)){const i=xs(r),a=Fr(s,i);o[r]=a}e.value=o},{immediate:!0,deep:!0}),{state:t,style:e}}function bs(n,t){Ln(()=>me(n),e=>{e&&t(e)},{immediate:!0})}const Ym={x:"translateX",y:"translateY",z:"translateZ"};function El(n={},t=!0){const e=sn({...n}),o=b("");return Ln(e,r=>{let s="",i=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(l=>Fr(l,U)).join(",");s+=`translate3d(${a}) `,i=!0}for(const[a,l]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const c=xs(a),u=Fr(l,c);s+=`${Ym[a]||a}(${u}) `}t&&!i&&(s+="translateZ(0px) "),o.value=s.trim()},{immediate:!0,deep:!0}),{state:e,transform:o}}const Xm=["","X","Y","Z"],Um=["perspective","translate","scale","rotate","skew"],Al=["transformPerspective","x","y","z"];Um.forEach(n=>{Xm.forEach(t=>{const e=n+t;Al.push(e)})});const Wm=new Set(Al);function Ms(n){return Wm.has(n)}const Gm=new Set(["originX","originY","originZ"]);function Fl(n){return Gm.has(n)}function qm(n){const t={},e={};return Object.entries(n).forEach(([o,r])=>{Ms(o)||Fl(o)?t[o]=r:e[o]=r}),{transform:t,style:e}}function Pl(n){const{transform:t,style:e}=qm(n),{transform:o}=El(t),{style:r}=jl(e);return o.value&&(r.value.transform=o.value),r.value}function Km(n,t){let e,o;const{state:r,style:s}=jl();return bs(n,i=>{o=i;for(const a of Object.keys(Sl))i.style[a]===null||i.style[a]===""||Ms(a)||Fl(a)||(r[a]=i.style[a]);e&&Object.entries(e).forEach(([a,l])=>i.style[a]=l),t&&t(r)}),Ln(s,i=>{if(!o){e=i;return}for(const a in i)o.style[a]=i[a]},{immediate:!0}),{style:r}}function Zm(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const e=o=>o.endsWith("px")||o.endsWith("deg")?Number.parseFloat(o):Number.isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[s,i]=r.split("("),l=i.split(",").map(u=>e(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...o,[s]:c}},{})}function Jm(n,t){Object.entries(Zm(t)).forEach(([e,o])=>{const r=["x","y","z"];if(e==="translate3d"){if(o===0){r.forEach(s=>n[s]=0);return}o.forEach((s,i)=>n[r[i]]=s);return}if(o=Number.parseFloat(`${o}`),e==="translateX"){n.x=o;return}if(e==="translateY"){n.y=o;return}if(e==="translateZ"){n.z=o;return}n[e]=o})}function Qm(n,t){let e,o;const{state:r,transform:s}=El();return bs(n,i=>{o=i,i.style.transform&&Jm(r,i.style.transform),e&&(i.style.transform=e),t&&t(r)}),Ln(s,i=>{if(!o){e=i;return}o.style.transform=i},{immediate:!0}),{transform:r}}function n0(n){return Object.entries(n)}function t0(n,t){const e=sn({}),o=i=>Object.entries(i).forEach(([a,l])=>e[a]=l),{style:r}=Km(n,o),{transform:s}=Qm(n,o);return Ln(e,i=>{n0(i).forEach(([a,l])=>{const c=Ms(a)?s:r;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),bs(n,()=>t),{motionProperties:e,style:r,transform:s}}function e0(n={}){const t=v(n),e=b();return{state:Dn(()=>{if(e.value)return t[e.value]}),variant:e}}function B(n,t={},e){const{motionProperties:o}=t0(n),{variant:r,state:s}=e0(t),i=Am(o,t),a={target:n,variant:r,variants:t,state:s,motionProperties:o,...i};return zm(a,e),a}const o0={initial:{opacity:0},enter:{opacity:1}},r0={initial:{opacity:0},visible:{opacity:1}},s0={initial:{opacity:0},visibleOnce:{opacity:1}},i0={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},a0={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},l0={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},c0={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},u0={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},f0={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d0={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},p0={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},m0={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},h0={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},g0={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},v0={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},y0={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},w0={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},x0={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},_0={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},b0={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},M0={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},k0={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},C0={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},I0={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},L0={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},T0={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},H0={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},O0={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},$0={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},S0={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ie={__proto__:null,fade:o0,fadeVisible:r0,fadeVisibleOnce:s0,pop:i0,popVisible:a0,popVisibleOnce:l0,rollBottom:y0,rollLeft:c0,rollRight:d0,rollTop:h0,rollVisibleBottom:w0,rollVisibleLeft:u0,rollVisibleOnceBottom:x0,rollVisibleOnceLeft:f0,rollVisibleOnceRight:m0,rollVisibleOnceTop:v0,rollVisibleRight:p0,rollVisibleTop:g0,slideBottom:O0,slideLeft:_0,slideRight:k0,slideTop:L0,slideVisibleBottom:$0,slideVisibleLeft:b0,slideVisibleOnceBottom:S0,slideVisibleOnceLeft:M0,slideVisibleOnceRight:I0,slideVisibleOnceTop:H0,slideVisibleRight:C0,slideVisibleTop:T0},j0=Symbol(import.meta.dev?"motionCustomPresets":""),E0={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function A0(n){return Object.prototype.toString.call(n)==="[object Object]"}function Pr(n){if(Array.isArray(n))return n.map(Pr);if(A0(n)){const t={};for(const e in n)t[e]=Pr(n[e]);return t}return n}function F0(n){const t=sn({}),e=de(j0,{}),o=Dn(()=>n.preset==null?{}:e!=null&&n.preset in e?structuredClone(nn(e)[n.preset]):n.preset in ie?structuredClone(ie[n.preset]):{}),r=Dn(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused}));function s(l,c){for(const u of["delay","duration"]){if(c[u]==null)continue;const f=Number.parseInt(c[u]);for(const d of["enter","visible","visibleOnce"]){const m=l[d];m!=null&&(m.transition??(m.transition={}),m.transition[u]=f)}}return l}const i=Dn(()=>{const l=Xd({},r.value,o.value,n.variants||{});return s({...l},n)});if(import.meta.dev){n.preset!=null&&(ie==null?void 0:ie[n.preset])==null&&(e==null?void 0:e[n.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${n.preset}\` not found.`);const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),Lo(()=>{var f,d,m;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(d=c.variants)!=null&&d.visible&&c.apply("visible"),(m=c.variants)!=null&&m.visibleOnce&&c.apply("visibleOnce")})};ya(()=>{for(const c in t)l(t[c])})}function a(l,c,u){var f;l.props??(l.props={}),(f=l.props).style??(f.style={}),l.props.style={...l.props.style,...u};const d=s(Pr(i.value),l.props);return l.props.onVnodeMounted=({el:m})=>{t[c]=B(m,d)},l.props.onVnodeUpdated=({el:m})=>{const g=Pl(t[c].state);for(const[_,j]of Object.entries(g))m.style[_]=j},l}return{motionConfig:i,setNodeInstance:a}}const A=ne({name:"Motion",props:{...E0,is:{type:[String,Object],default:"div"}},setup(n){const t=vu(),{motionConfig:e,setNodeInstance:o}=F0(n);return()=>{const r=Pl(e.value.initial||{}),s=$e(n.is,void 0,t);return o(s,0,r),s}}}),P0={name:"SearchIcon"},R0=Object.assign(P0,{setup(n){const t=b(),e={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{type:"spring",duration:1e3,bounce:.3}}},o=B(t,{initial:e.normal,enter:e.normal});async function r(){await o.apply(e.animate)}async function s(){await o.apply(e.normal)}return(i,a)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center overflow-hidden",onMouseenter:r,onMouseleave:s},[k(v(A),{ref_key:"target",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>a[0]||(a[0]=[M("circle",{cx:"11",cy:"11",r:"8"},null,-1),M("path",{d:"m21 21-4.3-4.3"},null,-1)])),_:1},512)],32))}}),N0={name:"CartIcon"},B0=Object.assign(N0,{setup(n){const t=b(),e=b(),o=B(t,{initial:{scale:1},enter:{scale:1,y:[0,0,0]}}),r=B(e,{initial:{y:0},enter:{y:0}}),s={normal:{y:0},animate:{y:-1.1,transition:{type:"spring",stiffness:500,damping:30}}},i={normal:{scale:1},animate:{scale:1.1,transition:{duration:200}},hover:{y:[0,-5,0],transition:{duration:300,ease:"easeInOut"}},repeat:{y:[0,-5,0],transition:{duration:400,delay:100,ease:"easeInOut"}}};async function a(){o.apply(i.animate),o.apply(i.hover).then(()=>{o.apply(i.repeat)}),r.apply(s.animate)}async function l(){o.apply(i.normal),r.apply(s.normal)}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[k(v(A),{ref_key:"targetSvg",ref:t,is:"svg",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>[k(v(A),{ref_key:"targetPath",ref:e,is:"path",d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"},null,512)]),_:1},512)],32))}}),D0={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},V0={name:"LayersIcon"},z0=Object.assign(V0,{setup(n){const t={type:"spring",stiffness:100,damping:14,mass:1},e={normal:{y:0,transition:t},animate:{y:-9,transition:t}},o={normal:{y:0,transition:t},animate:{y:-5,transition:t}},r=b(),s=B(r,{initial:e.normal,enter:e.normal}),i=b(),a=B(i,{initial:o.normal,enter:o.normal});function l(){s.apply(e.animate).then(()=>s.apply(e.normal)),a.apply(o.animate).then(()=>a.apply(o.normal))}function c(){s.apply(e.normal),a.apply(o.normal)}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",D0,[f[0]||(f[0]=M("path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"},null,-1)),k(v(A),{is:"path",ref_key:"pathOneTarget",ref:r,d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"},null,512),k(v(A),{is:"path",ref_key:"pathTwoTarget",ref:i,d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"},null,512)]))],32))}}),Y0={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},X0={name:"GripIcon"},U0=Object.assign(X0,{setup(n){const t=[{cx:19,cy:5},{cx:12,cy:5},{cx:19,cy:12},{cx:5,cy:5},{cx:12,cy:12},{cx:19,cy:19},{cx:5,cy:12},{cx:12,cy:19},{cx:5,cy:19}],e=t.length,o=b(new Array(e).fill(0).map(()=>b())),r=sn([]);for(let u=0;u<e;u++)r[u]=B(o.value[u],{initial:{opacity:1},enter:{opacity:1}});$n(()=>{for(let u=0;u<e;u++)r[u].target=o.value[u]});const s=u=>({transition:{delay:u*100,duration:200}}),i=u=>{for(let f=0;f<e;f++)r[f].apply({opacity:u,...s(f)})},a=async(u=!0)=>{if(!u){i(1);return}for(let f=0;f<e;f++){const d=r[f];f<e-1?d.apply({opacity:.3,...s(f)}):(await d.apply({opacity:.3,...s(f)}),i(1))}};async function l(){a(!0)}async function c(){a(!1)}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",Y0,[(y(),x(mn,null,pt(t,(d,m)=>k(v(A),{is:"circle",key:`${d.cx}_${d.cy}`,ref_for:!0,ref:g=>v(o)[m]=g,cx:d.cx,cy:d.cy,r:"1"},null,8,["cx","cy"])),64))]))],32))}}),W0={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},G0={name:"FrameIcon"},q0=Object.assign(G0,{setup(n){const t=[{x1:22,x2:2,y1:6,y2:6},{x1:22,x2:2,y1:18,y2:18},{x1:6,x2:6,y1:2,y2:22},{x1:18,x2:18,y1:2,y2:22}],e={type:"spring",stiffness:160,damping:17,mass:1},o={normal:{translateX:0,rotate:0,translateY:0},animate:[{translateY:-4},{translateY:4},{translateX:-4},{translateX:4}]},r=t.length,s=b(new Array(r).fill(0).map(()=>b())),i=sn([]);for(let u=0;u<r;u++)i[u]=B(s.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<r;f++){const d=u==="animate"?o.animate[f]:o.normal;i[f].apply({...d,transition:e})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",W0,[(y(),x(mn,null,pt(t,(d,m)=>k(v(A),{is:"line",key:`${d.x1}_${d.x2}_${d.y1}_${d.y2}`,ref_for:!0,ref:g=>v(s)[m]=g,stroke:"currentColor",x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2},null,8,["x1","y1","x2","y2"])),64))]))],32))}}),K0={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Z0={name:"SunIcon"},J0=Object.assign(Z0,{setup(n){const t=["M12 2v2","m19.07 4.93-1.41 1.41","M20 12h2","m17.66 17.66 1.41 1.41","M12 20v2","m6.34 17.66-1.41 1.41","M2 12h2","m4.93 4.93 1.41 1.41"],e={normal:{opacity:1},animate:c=>({opacity:[0,1],transition:{delay:c*100,duration:300}})},o=t.length,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});$n(()=>{for(let c=0;c<o;c++)s[c].target=r.value[c]});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e.animate(u):e.normal;s[u].apply({transition:{duration:300},...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",K0,[u[0]||(u[0]=M("circle",{cx:"12",cy:"12",r:"4"},null,-1)),(y(),x(mn,null,pt(t,(f,d)=>k(v(A),{is:"path",key:f,ref_for:!0,ref:m=>v(r)[d]=m,d:f},null,8,["d"])),64))]))],32))}}),Q0={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},nh={name:"DeleteIcon"},th=Object.assign(nh,{setup(n){const t={g:{normal:{y:0},animate:{y:-1.1}},path:{normal:{y:0},animate:{y:1}},g2:{normal:{y:0},animate:{y:.5}}},e={transition:{type:"spring",stiffness:500,damping:30}},o=b(),r=B(o,{initial:t.g.normal,enter:t.g.normal}),s=b(),i=B(s,{initial:t.g2.normal,enter:t.g2.normal}),a=b(),l=B(a,{initial:t.path.normal,enter:t.path.normal}),c={g:r,g2:i,path:l},u=m=>{Object.keys(c).forEach(g=>{const _=t[g][m];c[g].apply({..._,...e})})};function f(){u("animate")}function d(){u("normal")}return(m,g)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:f,onMouseleave:d},[(y(),x("svg",Q0,[k(v(A),{is:"g",ref_key:"targetG",ref:o},{default:cn(()=>g[0]||(g[0]=[M("path",{d:"M3 6h18"},null,-1),M("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},null,-1)])),_:1},512),k(v(A),{is:"path",ref_key:"targetPath",ref:a,d:"M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"},null,512),k(v(A),{is:"g",ref_key:"targetG2",ref:s},{default:cn(()=>g[1]||(g[1]=[M("line",{x1:"10",x2:"10",y1:"11",y2:"17"},null,-1),M("line",{x1:"14",x2:"14",y1:"11",y2:"17"},null,-1)])),_:1},512)]))],32))}}),eh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},oh={name:"FileStackIcon"},rh=Object.assign(oh,{setup(n){const t={normal:{translateX:0,translateY:0},animate:[{translateX:-4,translateY:4},{translateX:-4,translateY:4},{translateX:4,translateY:-4}]},e=["M21 7h-3a2 2 0 0 1-2-2V2","M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z","M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"],o=e.length,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:t.normal,enter:t.normal});$n(()=>{for(let c=0;c<o;c++)s[c].target=r.value[c]});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?t.animate[u]:t.normal;s[u].apply({transition:{delay:0,duration:300},...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",eh,[(y(),x(mn,null,pt(e,(f,d)=>k(v(A),{is:"path",key:f,ref_for:!0,ref:m=>v(r)[d]=m,d:f},null,8,["d"])),64)),u[0]||(u[0]=M("path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"},null,-1))]))],32))}}),sh={name:"SettingGearIcon"},ih=Object.assign(sh,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},o=b(),r=B(o,{initial:t.normal,enter:t.normal}),s=l=>{const c=t[l];r.apply({...c,...e})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"},null,-1),M("circle",{cx:"12",cy:"12",r:"3"},null,-1)])),_:1},512)],32))}}),ah={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},lh={name:"CalendarCogIcon"},ch=Object.assign(lh,{setup(n){const t={normal:{rotate:0},animate:{rotate:180}},e={transition:{type:"spring",stiffness:50,damping:10}},o=b(),r=B(o,{initial:t.normal,enter:t.normal}),s=l=>{const c=t[l];r.apply({...c,...e})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",ah,[c[1]||(c[1]=M("path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"},null,-1)),c[2]||(c[2]=M("path",{d:"M16 2v4"},null,-1)),c[3]||(c[3]=M("path",{d:"M3 10h18"},null,-1)),c[4]||(c[4]=M("path",{d:"M8 2v4"},null,-1)),k(v(A),{is:"g",ref_key:"target",ref:o,"transform-origin":"18 18"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"m15.2 16.9-.9-.4"},null,-1),M("path",{d:"m15.2 19.1-.9.4"},null,-1),M("path",{d:"m16.9 15.2-.4-.9"},null,-1),M("path",{d:"m16.9 20.8-.4.9"},null,-1),M("path",{d:"m19.5 14.3-.4.9"},null,-1),M("path",{d:"m19.5 21.7-.4-.9"},null,-1),M("path",{d:"m21.7 16.5-.9.4"},null,-1),M("path",{d:"m21.7 19.5-.9-.4"},null,-1),M("circle",{cx:"18",cy:"18",r:"3"},null,-1)])),_:1},512)]))],32))}}),uh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},fh={name:"MenuIcon"},dh=Object.assign(fh,{setup(n){const t=[{x1:4,y1:6,x2:20,y2:6},{x1:4,y1:12,x2:20,y2:12},{x1:4,y1:18,x2:20,y2:18}],e={type:"spring",stiffness:260,damping:20},o={normal:{rotate:0,y:0,opacity:1},animate:u=>({rotate:u===0?45:u===2?-45:0,y:u===0?6:u===2?-6:0,opacity:u===1?0:1,transition:e}),transformOrigin:["12 6","0 0","12 18"]},r=t.length,s=b(new Array(r).fill(0).map(()=>b())),i=sn([]);for(let u=0;u<r;u++)i[u]=B(s.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<r;f++){const d=u==="animate"?o.animate(f):o.normal;i[f].apply({transition:e,...d})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",uh,[(y(),x(mn,null,pt(t,(d,m)=>k(v(A),{is:"line",key:`${d.x1}_${d.x2}_${d.y1}_${d.y2}`,ref_for:!0,ref:g=>v(s)[m]=g,stroke:"currentColor",x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,"transform-origin":o.transformOrigin[m]},null,8,["x1","y1","x2","y2","transform-origin"])),64))]))],32))}}),ph={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},mh={name:"CopyIcon"},hh=Object.assign(mh,{setup(n){const t={rect:{normal:{translateY:0,translateX:0},animate:{translateY:-3,translateX:-3}},path:{normal:{x:0,y:0},animate:{x:3,y:3}}},e={type:"spring",stiffness:160,damping:17,mass:1},o=b(),r=B(o,{initial:t.rect.normal,enter:t.rect.normal}),s=b(),i=B(s,{initial:t.path.normal,enter:t.path.normal}),a={rect:r,path:i},l=f=>{Object.keys(a).forEach(d=>{const m=t[d][f];a[d].apply({...m,...e})})};function c(){l("animate")}function u(){l("normal")}return(f,d)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u},[(y(),x("svg",ph,[k(v(A),{is:"rect",ref_key:"targetRect",ref:o,width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},null,512),k(v(A),{is:"path",ref_key:"targetPath",ref:s,d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},null,512)]))],32))}}),gh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},vh={name:"AudioLinesIcon"},yh=Object.assign(vh,{setup(n){const t=["M6 6v11","M10 3v18","M14 8v7","M18 5v13"],e=[1500,1e3,800,1500],o=[[1.5,.5,1.5,1],[1.3,.2,1.2,1],[1.2,.1,1.2,1],[1.2,.1,1.2,1]],r={normal:{scaleY:1},animate:f=>({scaleY:o[f],transition:{duration:e[f],repeat:1/0,repeatType:"reverse",ease:"linear"}})},s=t.length,i=b(new Array(s).fill(0).map(()=>b())),a=sn([]);for(let f=0;f<s;f++)a[f]=B(i.value[f],{initial:r.normal,enter:r.normal});$n(()=>{for(let f=0;f<s;f++)a[f].target=i.value[f]});const l=f=>{for(let d=0;d<s;d++){const m=f==="animate"?r.animate(d):r.normal;a[d].apply({...m})}};function c(){l("animate")}function u(){l("normal")}return(f,d)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:c,onMouseleave:u},[(y(),x("svg",gh,[d[0]||(d[0]=M("path",{d:"M2 10v3"},null,-1)),(y(),x(mn,null,pt(t,(m,g)=>k(v(A),{is:"path",key:m,ref_for:!0,ref:_=>v(i)[g]=_,d:m,"transform-origin":"0 12"},null,8,["d"])),64)),d[1]||(d[1]=M("path",{d:"M22 10v3"},null,-1))]))],32))}}),wh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},xh={name:"ArchiveIcon"},_h=Object.assign(xh,{setup(n){const t={rect:{normal:{y:0},animate:{y:-1.5}},path:{normal:{y:0},animate:{y:2}},path2:{normal:{y:0},animate:{y:1.25}}},e={transition:{type:"spring",stiffness:200,damping:25}},o=b(),r=B(o,{initial:t.rect.normal,enter:t.rect.normal}),s=b(),i=B(s,{initial:t.path.normal,enter:t.path.normal}),a=b(),l=B(a,{initial:t.path2.normal,enter:t.path2.normal}),c={rect:r,path:i,path2:l},u=m=>{Object.keys(c).forEach(_=>{const j=t[_][m];c[_].apply({...j,...e})})};function f(){u("animate")}function d(){u("normal")}return(m,g)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:f,onMouseleave:d},[(y(),x("svg",wh,[k(v(A),{is:"rect",ref_key:"targetRect",ref:o,width:"20",height:"5",x:"2",y:"3",rx:"1"},null,512),k(v(A),{is:"path",ref_key:"targetPath",ref:s,d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"},null,512),k(v(A),{is:"path",ref_key:"targetPath2",ref:a,d:"M10 12h4"},null,512)]))],32))}}),bh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Mh={name:"LogoutIcon"},kh=Object.assign(Mh,{setup(n){const t={transition:{duration:400}},e={normal:{x:0,translateX:0},animate:{x:2,translateX:[0,-3,0]}},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e.animate:e.normal;s[u].apply({...t,...f})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",bh,[u[0]||(u[0]=M("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},null,-1)),k(v(A),{is:"polyline",ref:v(r)[0],points:"16 17 21 12 16 7"},null,512),k(v(A),{is:"line",ref:v(r)[1],x1:"21",x2:"9",y1:"12",y2:"12"},null,512)]))],32))}}),Ch={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ih={name:"CircleHelpIcon"},Lh=Object.assign(Ih,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]},transformOrigin:"12 12"},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...t,...c})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",Ch,[c[1]||(c[1]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"g",ref_key:"target",ref:o,"transform-origin":e.transformOrigin},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},null,-1),M("path",{d:"M12 17h.01"},null,-1)])),_:1},8,["transform-origin"])]))],32))}}),Th={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Hh={name:"SquareStackIcon"},Oh=Object.assign(Hh,{setup(n){const t={normal:{scale:1},animate:[{scale:[1,.9,1],transition:{delay:300,duration:400}},{scale:[1,.9,1],transition:{delay:200,duration:200}},{scale:[1,.8,1],transition:{duration:400}}],transformOrigin:["6 6","12 12","18 18"]},e=3,o=b(new Array(e).fill(0).map(()=>b())),r=sn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal,enter:t.normal});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal;r[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",Th,[k(v(A),{is:"path",ref:v(o)[0],"transform-origin":t.transformOrigin[0],d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),k(v(A),{is:"path",ref:v(o)[1],"transform-origin":t.transformOrigin[1],d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"},null,8,["transform-origin"]),k(v(A),{is:"rect",ref:v(o)[2],"transform-origin":t.transformOrigin[2],width:"8",height:"8",x:"14",y:"14",rx:"2"},null,8,["transform-origin"])]))],32))}}),$h={name:"MessageCircleIcon"},Sh=Object.assign($h,{setup(n){const t={normal:{scale:1,rotate:0},animate:{scale:1.05,rotate:[0,-7,7,0],transition:{rotate:{duration:500,ease:"easeInOut"},scale:{type:"spring",stiffness:400,damping:10}}}},e=b(),o=B(e,{initial:t.normal,enter:t.animate}),r=a=>{const l=t[a];o.apply(l)};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[k(v(A),{is:"svg",ref_key:"target",ref:e,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>l[0]||(l[0]=[M("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)])),_:1},512)],32))}}),jh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Eh={name:"MessageCircleMoreIcon"},Ah=Object.assign(Eh,{setup(n){const t={normal:{opacity:1},animate:l=>({opacity:[1,0,0,1,1,0,0,1],transition:{opacity:{repeat:[0,.1,.1+l*.1,.1+l*.1+.1,.5,.6,.6+l*.1,.6+l*.1+.1].map(c=>c*1e3),delay:l*200,duration:1500}}})},e=3,o=b(new Array(e).fill(0).map(()=>b())),r=sn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal,enter:t.normal});$n(()=>{for(let l=0;l<e;l++)r[l].target=o.value[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate(c):t.normal;r[c].apply(u)}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",jh,[c[0]||(c[0]=M("path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"},null,-1)),k(v(A),{is:"path",ref:v(o)[0],d:"M8 12h.01"},null,512),k(v(A),{is:"path",ref:v(o)[1],d:"M12 12h.01"},null,512),k(v(A),{is:"path",ref:v(o)[2],d:"M16 12h.01"},null,512)]))],32))}}),Fh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ph={name:"ArrowLeftIcon"},Rh=Object.assign(Ph,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"19 12"},e=2,o=b(new Array(e).fill(0).map(()=>b())),r=sn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal[l],enter:t.normal[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];r[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",Fh,[k(v(A),{is:"path",ref:v(o)[0],d:"m12 19-7-7 7-7"},null,512),k(v(A),{is:"path",ref:v(o)[1],d:"M19 12H5","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),Nh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Bh={name:"ArrowRightIcon"},Dh=Object.assign(Bh,{setup(n){const t={normal:[{translateX:0},{scaleX:1}],animate:[{translateX:[0,-3,0],transition:{duration:400}},{scaleX:[1,.8,1],transition:{duration:400}}],transformOrigin:"5 12"},e=2,o=b(new Array(e).fill(0).map(()=>b())),r=sn([]);for(let l=0;l<e;l++)r[l]=B(o.value[l],{initial:t.normal[l],enter:t.normal[l]});const s=l=>{for(let c=0;c<e;c++){const u=l==="animate"?t.animate[c]:t.normal[c];r[c].apply({...u})}};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",Nh,[k(v(A),{is:"path",ref:v(o)[0],d:"m12 5 7 7-7 7"},null,512),k(v(A),{is:"path",ref:v(o)[1],d:"M5 12h14","transform-origin":t.transformOrigin},null,8,["transform-origin"])]))],32))}}),Vh={name:"RefreshIcon"},zh=Object.assign(Vh,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{rotate:0},animate:{rotate:-50}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),M("path",{d:"M3 3v5h5"},null,-1),M("path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"},null,-1),M("path",{d:"M16 16h5v5"},null,-1)])),_:1},512)],32))}}),Yh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Xh={name:"DownloadIcon"},Uh=Object.assign(Xh,{setup(n){const t={normal:{y:0},animate:{y:2,transition:{type:"spring",stiffness:200,damping:10,mass:1}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(y(),x("svg",Yh,[l[1]||(l[1]=M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1)),k(v(A),{is:"g",ref_key:"target",ref:e},{default:cn(()=>l[0]||(l[0]=[M("polyline",{points:"7 10 12 15 17 10"},null,-1),M("line",{x1:"12",x2:"12",y1:"15",y2:"3"},null,-1)])),_:1},512)]))],32))}}),Wh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Gh={name:"SquarePenIcon"},qh=Object.assign(Gh,{setup(n){const t={transition:{duration:500,repeat:1,ease:"easeInOut"}},e={normal:{rotate:0,x:0,y:0},animate:{rotate:[-.5,.5,-.5],x:[0,-1,1.5,0],y:[0,1.5,-1,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",Wh,[c[0]||(c[0]=M("path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},null,-1)),k(v(A),{is:"path",ref_key:"target",ref:o,d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"},null,512)]))],32))}}),Kh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Zh={name:"CursorClickIcon"},Jh=Object.assign(Zh,{setup(n){const t=[{d:"M14 4.1 12 6",x:1,y:-1},{d:"m5.1 8-2.9-.8",x:-1,y:0},{d:"m6 12-1.9 2",x:-1,y:1},{d:"M7.2 2.2 8 5.1",x:0,y:-1}],e={normal:{opacity:1,x:0,y:0},animate:({x:d,y:m})=>({opacity:[0,1,0,0,0,0,1],x:[0,d,0,0],y:[0,m,0,0],transition:{delay:1300,duration:800,type:"spring",stiffness:70,damping:10,mass:.4}})},o={normal:{x:0,y:0},animate:{x:[0,0,-3,0],y:[0,-4,0,0],transition:{duration:1e3,bounce:.3}}},r=t.length,s=b(),i=B(s,{initial:o.normal,enter:o.normal}),a=b(new Array(r).fill(0).map(()=>b())),l=sn([]);for(let d=0;d<r;d++)l[d]=B(a.value[d],{initial:e.normal,enter:e.normal});$n(()=>{for(let d=0;d<r;d++)l[d].target=a.value[d]});const c=d=>{const m=o[d];i.apply(m);for(let g=0;g<r;g++){const{x:_,y:j}=t[g],C=d==="animate"?e.animate({x:_,y:j}):e.normal;l[g].apply(C)}};function u(){c("animate")}function f(){c("normal")}return(d,m)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:u,onMouseleave:f},[(y(),x("svg",Kh,[k(v(A),{is:"path",ref_key:"targetCursor",ref:s,d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"},null,512),(y(),x(mn,null,pt(t,(g,_)=>k(v(A),{is:"path",key:g.d,ref_for:!0,ref:j=>v(a)[_]=j,d:g.d},null,8,["d"])),64))]))],32))}}),Qh={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},n1={name:"ClockIcon"},t1=Object.assign(n1,{setup(n){const t={normal:{rotate:0},animate:{minute:{rotate:45,transition:{duration:500,ease:"easeInOut"}},hour:{rotate:360,transition:{duration:600,ease:[.4,0,.2,1]}}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=b(),s=B(r,{initial:t.normal,enter:t.normal}),i=c=>{let u=c==="animate"?t[c].hour:t[c];o.apply({...u,transition:{duration:600,...u.transition}}),u=c==="animate"?t[c].minute:t[c],s.apply({...u,transition:{duration:500,...u.transition}})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",Qh,[u[0]||(u[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"line",ref_key:"targetHour",ref:e,x1:"12",y1:"12",x2:"12",y2:"6","transform-origin":"center center"},null,512),k(v(A),{is:"line",ref_key:"targetMinute",ref:r,x1:"12",y1:"12",x2:"16",y2:"12","transform-origin":"center center"},null,512)]))],32))}}),e1={name:"BadgeAlertIcon"},o1=Object.assign(e1,{setup(n){const t={duration:500,ease:"easeInOut"},e={normal:{scale:1,rotate:0},animate:{scale:[1,1.1,1.1,1.1,1],rotate:[0,-3,3,-2,2,0],transition:{times:[0,.2,.4,.6,1]}}},o=b(),r=B(o,{initial:e.normal,enter:e.animate}),s=l=>{const c=e[l];r.apply({...c,transition:{...t,...c.transition}})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,-1),M("line",{x1:"12",x2:"12",y1:"8",y2:"12"},null,-1),M("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"},null,-1)])),_:1},512)],32))}}),r1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},s1={name:"BadgePercentIcon"},i1=Object.assign(s1,{setup(n){const t={normal:{rotate:0,transition:{type:"spring",stiffness:60,damping:10,duration:500}},animate:{rotate:180,transition:{delay:100,type:"spring",stiffness:80,damping:13}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(y(),x("svg",r1,[k(v(A),{is:"path",ref_key:"target",ref:e,"transform-origin":"12 12",d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},null,512),l[0]||(l[0]=M("path",{d:"m15 9-6 6"},null,-1)),l[1]||(l[1]=M("path",{d:"M9 9h.01"},null,-1)),l[2]||(l[2]=M("path",{d:"M15 15h.01"},null,-1))]))],32))}}),a1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},l1={name:"ChartPieIcon"},c1=Object.assign(l1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:15,bounce:.6}},e={normal:{translateX:0,translateY:0},animate:{translateX:1.1,translateY:-1.1}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",a1,[k(v(A),{is:"path",ref_key:"target",ref:o,d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"},null,512),c[0]||(c[0]=M("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},null,-1))]))],32))}}),u1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},f1={name:"CompassIcon"},d1=Object.assign(f1,{setup(n){const t={transition:{type:"spring",stiffness:120,damping:15}},e={normal:{rotate:0},animate:{rotate:360}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",u1,[c[0]||(c[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"polygon",ref_key:"target",ref:o,points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76","transform-origin":"center center"},null,512)]))],32))}}),p1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m1={name:"TimerIcon"},h1=Object.assign(m1,{setup(n){const t={timer:{duration:600,ease:[.4,0,.2,1]},button:{duration:300,ease:[.4,0,.2,1]}},e={timer:{normal:{rotate:0},animate:{rotate:315,transition:{deley:100}}},button:{normal:{scale:1,y:0},animate:{scale:[.9,1],y:[0,1,0]}}},o=b(),r=B(o,{initial:e.timer.normal,enter:e.timer.normal}),s=b(),i=B(s,{initial:e.button.normal,enter:e.button.normal}),a=u=>{let f=e.timer[u];r.apply({...f,transition:{...f==null?void 0:f.transition,...t.timer}}),f=e.button[u],i.apply({...f,transition:{...f==null?void 0:f.transition,...t.button}})};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",p1,[k(v(A),{is:"line",ref_key:"targetButton",ref:s,x1:"10",x2:"14",y1:"2",y2:"2","transform-origin":"12 2"},null,512),k(v(A),{is:"line",ref_key:"targetTimer",ref:o,x1:"12",x2:"15",y1:"14",y2:"11","transform-origin":"12 14"},null,512),f[0]||(f[0]=M("circle",{cx:"12",cy:"14",r:"8"},null,-1))]))],32))}}),g1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},v1={name:"ExpandIcon"},y1=Object.assign(v1,{setup(n){const t=["m21 21-6-6m6 6v-4.8m0 4.8h-4.8","M3 16.2V21m0 0h4.8M3 21l6-6","M21 7.8V3m0 0h-4.8M21 3l-6 6","M3 7.8V3m0 0h4.8M3 3l6 6"],e={transition:{duration:100,type:"spring",stiffness:250,damping:25}},o={normal:{translateX:"0px",translateY:"0px"},animate:[{translateX:"2px",translateY:"2px"},{translateX:"-2px",translateY:"2px"},{translateX:"2px",translateY:"-2px"},{translateX:"-2px",translateY:"-2px"}]},r=t.length,s=b(new Array(r).fill(0).map(()=>b())),i=sn([]);for(let u=0;u<r;u++)i[u]=B(s.value[u],{initial:o.normal,enter:o.normal});$n(()=>{for(let u=0;u<r;u++)i[u].target=s.value[u]});const a=u=>{for(let f=0;f<r;f++){const d=u==="animate"?o.animate[f]:o.normal;i[f].apply({...d,...e})}};function l(){a("animate")}function c(){a("normal")}return(u,f)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:l,onMouseleave:c},[(y(),x("svg",g1,[(y(),x(mn,null,pt(t,(d,m)=>k(v(A),{is:"path",key:d,ref_for:!0,ref:g=>v(s)[m]=g,d},null,8,["d"])),64))]))],32))}}),w1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},x1={name:"GaugeIcon"},_1=Object.assign(x1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{translateX:0,rotate:0,translateY:0},animate:{translateX:.5,translateY:.5,rotate:72},transformOrigin:"12 14"},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",w1,[k(v(A),{is:"path",ref_key:"target",ref:o,d:"m12 14 4-4","transform-origin":e.transformOrigin},null,8,["transform-origin"]),c[0]||(c[0]=M("path",{d:"M3.34 19a10 10 0 1 1 17.32 0"},null,-1))]))],32))}}),b1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},M1={name:"BoneIcon"},k1=Object.assign(M1,{setup(n){const t={normal:{rotate:0},animate:{rotate:[0,-8,8,-6,0],transition:{ease:"circIn",rotate:{duration:500}}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply({...l})};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(y(),x("svg",b1,[k(v(A),{is:"path",ref_key:"target",ref:e,d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z","transform-origin":"center center"},null,512)]))],32))}}),C1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},I1={name:"AlignHorizontalIcon"},L1=Object.assign(I1,{setup(n){const t={normal:{translateX:0},animate:{translateX:[0,3,-3,2,-2,0],transition:{ease:"linear",translateX:{duration:1e3}}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(y(),x("svg",C1,[k(v(A),{is:"path",ref_key:"target",ref:e,d:"M17 12H7"},null,512),l[0]||(l[0]=M("path",{d:"M19 18H5"},null,-1)),l[1]||(l[1]=M("path",{d:"M21 6H3"},null,-1))]))],32))}}),T1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},H1={name:"AlignHorizontalIcon"},O1=Object.assign(H1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={rect:{normal:{scaleX:1},animate:{scaleX:.85}},pathLeft:{normal:{translateX:0,scaleY:1},animate:{translateX:2,scaleY:.9}},pathRight:{normal:{translateX:0,scaleY:1},animate:{translateX:-2,scaleY:.9}},transformOrigin:["12 12","4 12","20 12"]},o=["rect","pathLeft","pathRight"],r=b(new Array(o.length).fill(0).map(()=>b())),s=sn([]);o.forEach((c,u)=>{s[u]=B(r.value[u],{initial:e[c].normal,enter:e[c].normal})}),$n(()=>{o.forEach((c,u)=>{s[u].target=r.value[u]})});const i=c=>{o.forEach((u,f)=>{const d=e[u][c];s[f].apply({...d,...t})})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",T1,[k(v(A),{is:"rect",ref:v(r)[0],width:"6",height:"10",x:"9",y:"7",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),k(v(A),{is:"path",ref:v(r)[1],d:"M4 22V2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),k(v(A),{is:"path",ref:v(r)[2],d:"M20 22V2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),$1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},S1={name:"AlignVerticalIcon"},j1=Object.assign(S1,{setup(n){const t={transition:{type:"spring",stiffness:160,damping:17,mass:1}},e={normal:{rect:{scaleY:1},pathOne:{translateY:0,scaleX:1},pathTwo:{translateY:0,scaleX:1}},animate:{rect:{scaleY:.85},pathOne:{translateY:-2,scaleX:.9},pathTwo:{translateY:2,scaleX:.9}},transformOrigin:["12 12","12 20","12 4"]},o=["rect","pathOne","pathTwo"],r=b(new Array(o.length).fill(0).map(()=>b())),s=sn([]);o.forEach((c,u)=>{s[u]=B(r.value[u],{initial:e.normal[c],enter:e.normal[c]})}),$n(()=>{o.forEach((c,u)=>{s[u].target=r.value[u]})});const i=c=>{o.forEach((u,f)=>{const d=e[c][u];s[f].apply({...d,...t})})};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",$1,[k(v(A),{is:"rect",ref:v(r)[0],width:"10",height:"6",x:"7",y:"9",rx:"2","transform-origin":e.transformOrigin[0]},null,8,["transform-origin"]),k(v(A),{is:"path",ref:v(r)[1],d:"M22 20H2","transform-origin":e.transformOrigin[1]},null,8,["transform-origin"]),k(v(A),{is:"path",ref:v(r)[2],d:"M22 4H2","transform-origin":e.transformOrigin[2]},null,8,["transform-origin"])]))],32))}}),E1={name:"BellIcon"},A1=Object.assign(E1,{setup(n){const t={transition:{duration:500,ease:"easeInOut"}},e={normal:{rotate:0},animate:{rotate:[0,-10,10,-10,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},null,-1),M("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},null,-1)])),_:1},512)],32))}}),F1={name:"UpvoteIcon"},P1=Object.assign(F1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:-2,rotate:-12}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M7 10v12"},null,-1),M("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"},null,-1)])),_:1},512)],32))}}),R1={name:"DownvoteIcon"},N1=Object.assign(R1,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-1,translateY:2,rotate:-12}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M17 14V2"},null,-1),M("path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"},null,-1)])),_:1},512)],32))}}),B1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},D1={name:"UsersIcon"},V1=Object.assign(D1,{setup(n){const t={normal:{translateX:0,transition:{duration:300,type:"spring",stiffness:200,damping:13}},animate:{translateX:[-6,0],transition:{duration:300,delay:100,type:"spring",stiffness:200,damping:13}}},e=b(),o=B(e,{initial:t.normal,enter:t.normal}),r=a=>{const l=t[a];o.apply(l)};function s(){r("animate")}function i(){r("normal")}return(a,l)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:s,onMouseleave:i},[(y(),x("svg",B1,[l[1]||(l[1]=M("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},null,-1)),l[2]||(l[2]=M("circle",{cx:"9",cy:"7",r:"4"},null,-1)),k(v(A),{is:"g",ref_key:"target",ref:e,"transform-origin":"center center"},{default:cn(()=>l[0]||(l[0]=[M("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"},null,-1),M("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"},null,-1)])),_:1},512)]))],32))}}),z1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Y1={name:"HandCoinsIcon"},X1=Object.assign(Y1,{setup(n){const t={duration:300,opacity:{duration:200},type:"spring",stiffness:150,damping:15,bounce:.8},e={normal:[{translateY:0,opacity:1},{translateY:0,opacity:1,transition:{delay:150}}],animate:[{opacity:[0,1],translateY:[-20,0]},{opacity:[0,1],translateY:[-20,0],transition:{delay:150}}]},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal[c],enter:e.normal[c]});const i=c=>{for(let u=0;u<o;u++){const f=e[c][u];s[u].apply({...f,transition:{...t,...f.transition}})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",z1,[u[0]||(u[0]=M("path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"},null,-1)),u[1]||(u[1]=M("path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"},null,-1)),u[2]||(u[2]=M("path",{d:"m2 16 6 6"},null,-1)),k(v(A),{is:"circle",ref:v(r)[0],cx:"16",cy:"9",r:"2.9"},null,512),k(v(A),{is:"circle",ref:v(r)[1],cx:"6",cy:"5",r:"3"},null,512)]))],32))}}),U1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},W1={name:"CircleChevronUpIcon"},G1=Object.assign(W1,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{y:0},animate:{y:[0,-2,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",U1,[c[0]||(c[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"path",ref_key:"target",ref:o,d:"m8 14 4-4 4 4"},null,512)]))],32))}}),q1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},K1={name:"CircleChevronDownIcon"},Z1=Object.assign(K1,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{y:0},animate:{y:[0,2,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",q1,[c[0]||(c[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"path",ref_key:"target",ref:o,d:"m16 10-4 4-4-4"},null,512)]))],32))}}),J1={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Q1={name:"CircleChevronLeftIcon"},n2=Object.assign(Q1,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{x:0},animate:{x:[0,-2,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",J1,[c[0]||(c[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"path",ref_key:"target",ref:o,d:"m14 16-4-4 4-4"},null,512)]))],32))}}),t2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e2={name:"CircleChevronRightIcon"},o2=Object.assign(e2,{setup(n){const t={transtion:{times:[0,.4,1],duration:500}},e={normal:{x:0},animate:{x:[0,2,0]}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[(y(),x("svg",t2,[c[0]||(c[0]=M("circle",{cx:"12",cy:"12",r:"10"},null,-1)),k(v(A),{is:"path",ref_key:"target",ref:o,d:"m10 8 4 4-4 4"},null,512)]))],32))}}),r2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},s2={name:"ChevronsUpDownIcon"},i2=Object.assign(s2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateY:0},animate:[{translateY:2},{translateY:-2}]},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e[c][u]:e[c];s[u].apply({...f,...t})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",r2,[k(v(A),{is:"path",ref:v(r)[0],d:"m7 15 5 5 5-5"},null,512),k(v(A),{is:"path",ref:v(r)[1],d:"m7 9 5-5 5 5"},null,512)]))],32))}}),a2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},l2={name:"ChevronsDownUpIcon"},c2=Object.assign(l2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateY:0},animate:[{translateY:-2},{translateY:2}]},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e[c][u]:e[c];s[u].apply({...f,...t})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",a2,[k(v(A),{is:"path",ref:v(r)[0],d:"m7 20 5-5 5 5"},null,512),k(v(A),{is:"path",ref:v(r)[1],d:"m7 4 5 5 5-5"},null,512)]))],32))}}),u2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},f2={name:"ChevronsLeftRightIcon"},d2=Object.assign(f2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0},animate:[{translateX:-2},{translateX:2}]},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e[c][u]:e[c];s[u].apply({...f,...t})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",u2,[k(v(A),{is:"path",ref:v(r)[0],d:"m9 7-5 5 5 5"},null,512),k(v(A),{is:"path",ref:v(r)[1],d:"m15 7 5 5-5 5"},null,512)]))],32))}}),p2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m2={name:"ChevronsRightLeftIcon"},h2=Object.assign(m2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0},animate:[{translateX:-2},{translateX:2}]},o=2,r=b(new Array(o).fill(0).map(()=>b())),s=sn([]);for(let c=0;c<o;c++)s[c]=B(r.value[c],{initial:e.normal,enter:e.normal});const i=c=>{for(let u=0;u<o;u++){const f=c==="animate"?e[c][u]:e[c];s[u].apply({...f,...t})}};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",p2,[k(v(A),{is:"path",ref:v(r)[0],d:"m20 17-5-5 5-5"},null,512),k(v(A),{is:"path",ref:v(r)[1],d:"m4 17 5-5-5-5"},null,512)]))],32))}}),g2={name:"SyringeIcon"},v2=Object.assign(g2,{setup(n){const t={transition:{type:"spring",stiffness:250,damping:25}},e={normal:{translateX:0,translateY:0,rotate:0},animate:{translateX:-3,translateY:3,rotate:1}},o=b(),r=B(o,{initial:e.normal,enter:e.normal}),s=l=>{const c=e[l];r.apply({...c,...t})};function i(){s("animate")}function a(){s("normal")}return(l,c)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:i,onMouseleave:a},[k(v(A),{is:"svg",ref_key:"target",ref:o,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 512 512",fill:"currentColor",stroke:"currentColor","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},{default:cn(()=>c[0]||(c[0]=[M("path",{d:"M450.327,224.582l-46.545-46.545c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l15.127,15.127L205.964,406.109c-4.655,4.655-11.636,4.655-16.291,0l-18.618-18.618c-4.655-4.655-11.636-4.655-16.291,0l-18.618,18.618c-4.655,4.655-11.636,4.655-16.291,0l-13.964-13.964c-2.327-2.327-3.491-4.655-3.491-8.145s1.164-5.818,3.491-8.145l18.618-18.618c4.655-4.655,4.655-11.636,0-16.291l-18.618-18.618c-2.327-2.327-3.491-4.655-3.491-8.145c0-3.491,1.164-5.818,3.491-8.146l169.891-169.891c4.655-4.655,4.655-11.636,0-16.291s-11.636-4.655-16.291,0L89.6,289.745c-6.982,6.982-10.473,15.127-10.473,24.436S82.618,332.8,89.6,338.618l10.473,10.473L89.6,359.564c-6.982,6.982-10.473,15.127-10.473,24.436c0,8.145,3.491,16.291,9.309,23.273L3.491,492.218c-4.655,4.655-4.655,11.636,0,16.291C5.818,510.836,8.145,512,11.636,512s5.818-1.164,8.145-3.491l84.945-84.945c13.964,11.636,34.909,11.636,47.709-1.164l10.473-10.473l10.473,10.473c6.982,6.982,16.291,10.473,24.436,10.473c9.309,0,17.455-3.491,24.436-10.473l196.655-196.655l15.127,15.127c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C454.982,236.218,454.982,229.236,450.327,224.582z"},null,-1),M("path",{d:"M508.509,119.855L392.145,3.491c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l39.564,39.564c2.327,2.327,3.491,6.982,3.491,10.473s-1.164,8.145-4.655,10.473l-53.527,54.691l-73.309-73.309c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l73.309,73.309L244.364,251.345L217.6,224.582c-4.655-4.655-11.636-4.655-16.291,0s-4.655,11.636,0,16.291l69.818,69.818c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491c4.655-4.655,4.655-11.636,0-16.291l-26.764-26.764L431.709,97.745c6.982-5.818,15.127-5.818,22.109,0l38.4,38.4c2.327,2.327,5.818,3.491,8.145,3.491s5.818-1.164,8.145-3.491C513.164,131.491,513.164,124.509,508.509,119.855z"},null,-1)])),_:1},512)],32))}}),y2={xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",viewBox:"0 0 512 512","stroke-width":"5.632","stroke-linecap":"round","stroke-linejoin":"round"},w2={name:"FlaskIcon"},x2=Object.assign(w2,{setup(n){const t={g:{normal:{rotate:0,translateY:0},animate:{translateY:-12,rotate:[0,5,-5,3,-3,0],transition:{ease:"linear",rotate:{duration:800}}}},path:{normal:{rotate:0,scale:1},animate:{scale:.9,rotate:[0,6,-6,3,-3,0],transition:{duration:800,scale:{duration:300,type:"spring",bounce:.4,stiffness:150,damping:10}}}}},e=b(),o=B(e,{initial:t.g.normal,enter:t.g.normal}),r=b(),s=B(r,{initial:t.path.normal,enter:t.path.normal}),i=c=>{let u=t.g[c];o.apply(u),u=t.path[c],s.apply(u)};function a(){i("animate")}function l(){i("normal")}return(c,u)=>(y(),x("div",{className:"cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center",onMouseenter:a,onMouseleave:l},[(y(),x("svg",y2,[k(v(A),{is:"g",ref_key:"targetG",ref:e,"transform-origin":"center center"},{default:cn(()=>u[0]||(u[0]=[M("circle",{cx:"151.273",cy:"407.273",r:"11.636"},null,-1),M("circle",{cx:"244.364",cy:"372.364",r:"11.636"},null,-1),M("circle",{cx:"290.909",cy:"418.909",r:"11.636"},null,-1),M("circle",{cx:"221.091",cy:"453.818",r:"11.636"},null,-1),M("circle",{cx:"372.364",cy:"430.545",r:"11.636"},null,-1)])),_:1},512),k(v(A),{is:"path",ref_key:"targetPath",ref:r,"transform-origin":"center center",d:"M456.145,436.364l-79.127-124.509c0-2.327-2.327-4.655-3.491-5.818l-34.909-55.855c-8.146-13.964-12.8-29.091-12.8-44.218 V67.491c13.964-4.655,23.273-17.455,23.273-32.582C349.091,15.127,333.964,0,314.182,0H197.818 c-19.782,0-34.909,15.127-34.909,34.909c0,19.782,15.127,34.909,34.909,34.909h69.818c6.982,0,11.636-4.655,11.636-11.636 s-4.655-11.636-11.636-11.636h-69.818c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h116.364 c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636v147.782 c0,19.782,5.818,39.564,16.291,55.855l19.782,31.418c-30.255-5.818-64-2.327-88.436,10.473 c-23.273,11.636-60.509,13.964-87.273,4.655l30.255-46.545c10.473-16.291,16.291-36.073,16.291-55.855V104.727 c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v101.236c0,15.127-4.655,30.255-12.8,43.055l-34.909,55.855 c-1.164,1.164-2.327,2.327-3.491,3.491c0,1.164,0,1.164-1.164,2.327L55.855,436.364c-5.818,9.309-9.309,19.782-9.309,31.418v9.309 c0,19.782,15.127,34.909,34.909,34.909h349.091c19.782,0,34.909-15.127,34.909-34.909v-9.309 C465.455,456.145,461.964,445.673,456.145,436.364z M443.345,477.091h-1.164c0,6.982-4.655,11.636-11.636,11.636H81.455 c-6.982,0-11.636-4.655-11.636-11.636v-9.309c0-6.982,2.327-12.8,5.818-18.618l75.636-119.855 c15.127,5.818,32.582,8.145,50.036,8.145c22.109,0,43.055-4.655,60.509-12.8c25.6-12.8,68.655-13.964,96.582-1.164l79.127,125.673 c3.491,5.818,5.818,11.636,5.818,18.618V477.091z"},null,512)]))],32))}}),Rl=[{name:"SearchIcon",icon:R0,raw:Uf,keywords:["find","scan","magnifier","magnifying glass"]},{name:"CartIcon",icon:B0,raw:Wf,keywords:["trolley","cart","basket","e-commerce","store","purchase","products","items","ingredients"]},{name:"LayersIcon",icon:z0,raw:Gf,keywords:["stack","pile","pages","sheets","paperwork","copies","copy"]},{name:"GripIcon",icon:U0,raw:qf,keywords:["grab","dots","handle","move","drag"]},{name:"FrameIcon",icon:q0,raw:Kf,keywords:["logo","design","tool"]},{name:"SunIcon",icon:J0,raw:Zf,keywords:[]},{name:"DeleteIcon",icon:th,raw:Jf,keywords:[]},{name:"FileStackIcon",icon:rh,raw:Qf,keywords:[]},{name:"SettingGearIcon",icon:ih,raw:nd,keywords:[]},{name:"CalendarCogIcon",icon:ch,raw:td,keywords:[]},{name:"MenuIcon",icon:dh,raw:ed,keywords:[]},{name:"CopyIcon",icon:hh,raw:od,keywords:[]},{name:"AudioLinesIcon",icon:yh,raw:rd,keywords:[]},{name:"ArchiveIcon",icon:_h,raw:sd,keywords:[]},{name:"LogoutIcon",icon:kh,raw:id,keywords:[]},{name:"CircleHelpIcon",icon:Lh,raw:ad,keywords:[]},{name:"SquareStackIcon",icon:Oh,raw:ld,keywords:[]},{name:"MessageCircleIcon",icon:Sh,raw:cd,keywords:[]},{name:"MessageCircleMoreIcon",icon:Ah,raw:ud,keywords:[]},{name:"ArrowLeftIcon",icon:Rh,raw:fd,keywords:[]},{name:"ArrowRightIcon",icon:Dh,raw:dd,keywords:[]},{name:"RefreshIcon",icon:zh,raw:pd,keywords:[]},{name:"DownloadIcon",icon:Uh,raw:md,keywords:[]},{name:"SquarePenIcon",icon:qh,raw:hd,keywords:[]},{name:"CursorClickIcon",icon:Jh,raw:gd,keywords:[]},{name:"ClockIcon",icon:t1,raw:vd,keywords:[]},{name:"BadgeAlertIcon",icon:o1,raw:yd,keywords:[]},{name:"BadgePercentIcon",icon:i1,raw:wd,keywords:[]},{name:"ChartPieIcon",icon:c1,raw:xd,keywords:[]},{name:"CompassIcon",icon:d1,raw:_d,keywords:["direction","navigation","north","south","east","west","compass"]},{name:"TimerIcon",icon:h1,raw:bd,keywords:["time","watch","alarm","stopwatch","stopwatch"]},{name:"ExpandIcon",icon:y1,raw:Md,keywords:["scale","fullscreen"]},{name:"GaugeIcon",icon:_1,raw:kd,keywords:["dashboard","dial","meter","speed","pressure","measure","level"]},{name:"BoneIcon",icon:k1,raw:Cd,keywords:["health","skeleton","skull","death","pets","dog"]},{name:"AlignCenterIcon",icon:L1,raw:Id,keywords:["text","alignment","center"]},{name:"AlignHorizontalIcon",icon:O1,raw:Ld,keywords:["center","items","flex","justify","distribute","between"]},{name:"AlignVerticalIcon",icon:j1,raw:Td,keywords:["center","items","flex","justify","distribute","between"]},{name:"BellIcon",icon:A1,raw:Hd,keywords:["alarm","notification","sound","reminder"]},{name:"UpvoteIcon",icon:P1,raw:Od,keywords:["like","good","emotion"]},{name:"DownvoteIcon",icon:N1,raw:$d,keywords:["dislike","bad","emotion"]},{name:"UsersIcon",icon:V1,raw:Sd,keywords:["group","people"]},{name:"HandCoinsIcon",icon:X1,raw:jd,keywords:["savings","banking","money","finance","offers","mortgage","payment","received","wage","payroll","allowance","pocket money","handout","pennies"]},{name:"CircleChevronUpIcon",icon:G1,raw:Ed,keywords:["caret","ahead","forward","menu","chevron"]},{name:"CircleChevronDownIcon",icon:Z1,raw:Ad,keywords:["back","menu","chevron"]},{name:"CircleChevronLeftIcon",icon:n2,raw:Fd,keywords:["back","previous","less than","fewer","menu","<","chevron"]},{name:"CircleChevronRightIcon",icon:o2,raw:Pd,keywords:["next","forward","more than","greater","menu",">","chevron"]},{name:"ChevronsUpDownIcon",icon:i2,raw:Rd,keywords:["expand","unfold","vertical","chevron"]},{name:"ChevronsDownUpIcon",icon:c2,raw:Nd,keywords:["collapse","fold","vertical","chevron"]},{name:"ChevronsLeftRightIcon",icon:d2,raw:Bd,keywords:["expand","unfold","horizontal","chevron"]},{name:"ChevronsRightLeftIcon",icon:h2,raw:Dd,keywords:["collapse","fold","horizontal","chevron"]},{name:"SyringeIcon",icon:v2,raw:Vd,keywords:["medicine","medical","needle","pump","plunger","nozzle","blood"]},{name:"FlaskIcon",icon:x2,raw:zd,keywords:["beaker","erlenmeyer","lab","chemistry","experiment","test"]}],Rr="https://github.com/imfenghuang/icons",_2="imfenghuang/icons",b2="https://imfenghuang.github.io/icons/",M2=Object.fromEntries(Rl.map(n=>[n.name,n.raw])),k2=n=>M2[n]||"",C2=(n,t)=>{const e=new Blob([t],{type:"text/plain"}),o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(e),document.body.appendChild(o),o.click(),document.body.removeChild(o)},I2=n=>n===""?Rr:`${Rr}/blob/main/src/icons/${n}.vue`,L2={class:"flex justify-center items-center gap-2 mt-2"},T2=["href"],H2={__name:"OperationComp",props:{name:{default:"",type:String}},setup(n){const t=n,e=Dn(()=>I2(t.name)),o=b("cursor-pointer hover:bg-accent rounded-md p-2 transition-colors duration-200"),r=b(k2(t.name)),{copy:s,copied:i}=Xf({source:r}),a=()=>{s(r.value)},l=()=>{C2(`${t.name}.vue`,r.value)};return(c,u)=>{const f=hu("tooltip");return y(),x("div",L2,[Zo((y(),x("div",{class:Xn(v(o)),onClick:a},[v(i)?(y(),st(v(jf),{key:1,"stroke-width":1,size:14})):(y(),st(v(Ef),{key:0,"stroke-width":2,size:14}))],2)),[[f,"copy",void 0,{bottom:!0}]]),Zo((y(),x("div",{class:Xn(v(o)),onClick:l},[k(v(Af),{"stroke-width":2,size:14})],2)),[[f,"download .vue file",void 0,{bottom:!0}]]),Zo((y(),x("a",{href:v(e),target:"_blank",class:Xn(v(o))},[k(v(Ff),{"stroke-width":2,size:14})],10,T2)),[[f,"view on Github",void 0,{bottom:!0}]])])}}},O2={class:"flex flex-col sm:my-20 my-10 gap-6"},$2={class:"relative"},S2=["placeholder","value"],j2={class:"pointer-events-none absolute right-2 top-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100 -translate-y-1/2"},E2={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-3"},A2={class:"text-xs mt-2"},F2={key:0,class:"text-center"},P2=ne({__name:"CompListComp",setup(n){const t=Rl,e=b(),o=b(""),r=yr(t.map(c=>c.icon)),s=b(!!/iPhone|iPad|iPod|Mac\sOS/.test(navigator.userAgent)),i=c=>{o.value=c.trim(),r.value=o.value===""?t.map(u=>u.icon):t.filter(u=>!!(u.name.toLowerCase().includes(o.value.toLowerCase())||u.keywords.includes(o.value.toLowerCase()))).map(u=>u.icon)};function a(c){if(!document.startViewTransition){i(c.target.value);return}document.startViewTransition(()=>i(c.target.value))}const l=c=>{(c.ctrlKey||c.metaKey)&&(c.key==="k"||c.key==="K")&&(c.preventDefault(),Lo(()=>e.value.focus()))};return $n(()=>{document.addEventListener("keydown",l)}),Oo(()=>{document.removeEventListener("keydown",l)}),(c,u)=>{const f=H2;return y(),x("div",O2,[M("div",$2,[M("input",{ref_key:"inputRef",ref:e,class:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50",placeholder:`Search ${v(t).length} icons`,value:v(o),onInput:a},null,40,S2),M("kbd",j2,be(v(s)?"⌘":"Ctrl")+" + K",1)]),M("div",E2,[(y(!0),x(mn,null,pt(v(r),d=>(y(),x("div",{key:d.name,class:"p-3 border w-full h-full border-input rounded-md flex items-center justify-center flex-col"},[(y(),st(mu(d))),M("p",A2,be(d.name),1),k(f,{name:d.name},null,8,["name"])]))),128))]),v(r).length===0?(y(),x("div",F2,u[0]||(u[0]=[M("p",{class:"text-xl"},"No icons found",-1),M("p",{class:"text-muted-foreground"},"Try other keywords.",-1)]))):kr("",!0)])}}}),R2=["href","target","rel"],N2={__name:"LinkComp",props:{href:String,target:String,rel:String,class:String||Object||Array,style:String||Object||Array},setup(n){const t=n;return(e,o)=>(y(),x("a",{href:t.href,target:t.target,rel:t.rel||"noreferrer",class:Xn(["inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] text-xs font-medium text-muted-foreground opacity-100",t.class]),style:xt(t.style)},[Le(e.$slots,"default")],14,R2))}},Nl=(n,t)=>{const e=n.__vccOpts||n;for(const[o,r]of t)e[o]=r;return e},B2={},D2={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"},V2={class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty"};function z2(n,t){const e=N2;return y(),x(mn,null,[t[6]||(t[6]=M("h1",{class:"sm:text-3xl text-2xl mt-3 text-balance"},"beautifully crafted animated icons for Vue",-1)),t[7]||(t[7]=M("p",{class:"sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground text-pretty max-w-lg"}," an open-source collection of smooth, animated icons for your projects. feel free to use them, share your feedback, and let's make this library awesome together! ",-1)),M("p",D2,[t[1]||(t[1]=eo(" Thanks to ")),k(e,{href:"https://icons.pqoqubbw.dev/",target:"_blank"},{default:cn(()=>t[0]||(t[0]=[M("kbd",null,"pqoqubbw/icons",-1)])),_:1})]),M("p",V2,[t[4]||(t[4]=eo(" Built with ")),k(e,{href:"https://motion.vueuse.org//",target:"_blank"},{default:cn(()=>t[2]||(t[2]=[M("kbd",null,"@vueuse/motion",-1)])),_:1}),t[5]||(t[5]=eo(" and ")),k(e,{href:"https://lucide.dev/",target:"_blank"},{default:cn(()=>t[3]||(t[3]=[M("kbd",null,"lucide",-1)])),_:1})])],64)}const Y2=Nl(B2,[["render",z2]]),X2={BASE_URL:"./",DEV:!1,MODE:"pages",PROD:!0,SSR:!1},U2={class:"py-4"},W2={class:"w-full flex items-center justify-between h-full"},G2=["href"],q2={class:"text-base hover:underline"},K2=["href"],Z2={__name:"HeaderComp",setup(n){const t=b(_2),e=b(Rr),{MODE:o}=X2,r=b(o==="pages"?b2:"/");return(s,i)=>(y(),x("header",U2,[M("div",W2,[M("a",{href:v(r)},[M("h1",q2,be(v(t)),1)],8,G2),M("div",null,[M("a",{href:v(e),target:"_blank",class:"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-none hover:bg-accent hover:text-accent-foreground h-9 px-2 py-2 flex items-center justify-between"},i[0]||(i[0]=[M("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[M("path",{d:"M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})],-1)]),8,K2)])])]))}},J2={},Q2={class:"container"};function ng(n,t){const e=Z2,o=Y2,r=P2;return y(),x("div",Q2,[k(e),k(o),k(r)])}const tg=Nl(J2,[["render",ng]]),eg=["top","right","bottom","left"],bi=["start","end"],Mi=eg.reduce((n,t)=>n.concat(t,t+"-"+bi[0],t+"-"+bi[1]),[]),Ee=Math.min,At=Math.max,og={left:"right",right:"left",bottom:"top",top:"bottom"},rg={start:"end",end:"start"};function Nr(n,t,e){return At(n,Ee(t,e))}function Dt(n,t){return typeof n=="function"?n(t):n}function it(n){return n.split("-")[0]}function Wn(n){return n.split("-")[1]}function Bl(n){return n==="x"?"y":"x"}function ks(n){return n==="y"?"height":"width"}function Bt(n){return["top","bottom"].includes(it(n))?"y":"x"}function Cs(n){return Bl(Bt(n))}function Dl(n,t,e){e===void 0&&(e=!1);const o=Wn(n),r=Cs(n),s=ks(r);let i=r==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=vo(i)),[i,vo(i)]}function sg(n){const t=vo(n);return[go(n),t,go(t)]}function go(n){return n.replace(/start|end/g,t=>rg[t])}function ig(n,t,e){const o=["left","right"],r=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(n){case"top":case"bottom":return e?t?r:o:t?o:r;case"left":case"right":return t?s:i;default:return[]}}function ag(n,t,e,o){const r=Wn(n);let s=ig(it(n),e==="start",o);return r&&(s=s.map(i=>i+"-"+r),t&&(s=s.concat(s.map(go)))),s}function vo(n){return n.replace(/left|right|bottom|top/g,t=>og[t])}function lg(n){return{top:0,right:0,bottom:0,left:0,...n}}function Vl(n){return typeof n!="number"?lg(n):{top:n,right:n,bottom:n,left:n}}function ye(n){const{x:t,y:e,width:o,height:r}=n;return{width:o,height:r,top:e,left:t,right:t+o,bottom:e+r,x:t,y:e}}function ki(n,t,e){let{reference:o,floating:r}=n;const s=Bt(t),i=Cs(t),a=ks(i),l=it(t),c=s==="y",u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,d=o[a]/2-r[a]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:f};break;case"left":m={x:o.x-r.width,y:f};break;default:m={x:o.x,y:o.y}}switch(Wn(t)){case"start":m[i]-=d*(e&&c?-1:1);break;case"end":m[i]+=d*(e&&c?-1:1);break}return m}const cg=async(n,t,e)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=e,a=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let c=await i.getElementRects({reference:n,floating:t,strategy:r}),{x:u,y:f}=ki(c,o,l),d=o,m={},g=0;for(let _=0;_<a.length;_++){const{name:j,fn:C}=a[_],{x:L,y:T,data:H,reset:N}=await C({x:u,y:f,initialPlacement:o,placement:d,strategy:r,middlewareData:m,rects:c,platform:i,elements:{reference:n,floating:t}});u=L??u,f=T??f,m={...m,[j]:{...m[j],...H}},N&&g<=50&&(g++,typeof N=="object"&&(N.placement&&(d=N.placement),N.rects&&(c=N.rects===!0?await i.getElementRects({reference:n,floating:t,strategy:r}):N.rects),{x:u,y:f}=ki(c,d,l)),_=-1)}return{x:u,y:f,placement:d,strategy:r,middlewareData:m}};async function No(n,t){var e;t===void 0&&(t={});const{x:o,y:r,platform:s,rects:i,elements:a,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:m=0}=Dt(t,n),g=Vl(m),j=a[d?f==="floating"?"reference":"floating":f],C=ye(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(j)))==null||e?j:j.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),L=f==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),H=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},N=ye(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:L,offsetParent:T,strategy:l}):L);return{top:(C.top-N.top+g.top)/H.y,bottom:(N.bottom-C.bottom+g.bottom)/H.y,left:(C.left-N.left+g.left)/H.x,right:(N.right-C.right+g.right)/H.x}}const ug=n=>({name:"arrow",options:n,async fn(t){const{x:e,y:o,placement:r,rects:s,platform:i,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Dt(n,t)||{};if(c==null)return{};const f=Vl(u),d={x:e,y:o},m=Cs(r),g=ks(m),_=await i.getDimensions(c),j=m==="y",C=j?"top":"left",L=j?"bottom":"right",T=j?"clientHeight":"clientWidth",H=s.reference[g]+s.reference[m]-d[m]-s.floating[g],N=d[m]-s.reference[m],W=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c));let G=W?W[T]:0;(!G||!await(i.isElement==null?void 0:i.isElement(W)))&&(G=a.floating[T]||s.floating[g]);const fn=H/2-N/2,on=G/2-_[g]/2-1,Q=Ee(f[C],on),hn=Ee(f[L],on),vn=Q,xn=G-_[g]-hn,pn=G/2-_[g]/2+fn,Rn=Nr(vn,pn,xn),un=!l.arrow&&Wn(r)!=null&&pn!==Rn&&s.reference[g]/2-(pn<vn?Q:hn)-_[g]/2<0,K=un?pn<vn?pn-vn:pn-xn:0;return{[m]:d[m]+K,data:{[m]:Rn,centerOffset:pn-Rn-K,...un&&{alignmentOffset:K}},reset:un}}});function fg(n,t,e){return(n?[...e.filter(r=>Wn(r)===n),...e.filter(r=>Wn(r)!==n)]:e.filter(r=>it(r)===r)).filter(r=>n?Wn(r)===n||(t?go(r)!==r:!1):!0)}const dg=function(n){return n===void 0&&(n={}),{name:"autoPlacement",options:n,async fn(t){var e,o,r;const{rects:s,middlewareData:i,placement:a,platform:l,elements:c}=t,{crossAxis:u=!1,alignment:f,allowedPlacements:d=Mi,autoAlignment:m=!0,...g}=Dt(n,t),_=f!==void 0||d===Mi?fg(f||null,m,d):d,j=await No(t,g),C=((e=i.autoPlacement)==null?void 0:e.index)||0,L=_[C];if(L==null)return{};const T=Dl(L,s,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==L)return{reset:{placement:_[0]}};const H=[j[it(L)],j[T[0]],j[T[1]]],N=[...((o=i.autoPlacement)==null?void 0:o.overflows)||[],{placement:L,overflows:H}],W=_[C+1];if(W)return{data:{index:C+1,overflows:N},reset:{placement:W}};const G=N.map(Q=>{const hn=Wn(Q.placement);return[Q.placement,hn&&u?Q.overflows.slice(0,2).reduce((vn,xn)=>vn+xn,0):Q.overflows[0],Q.overflows]}).sort((Q,hn)=>Q[1]-hn[1]),on=((r=G.filter(Q=>Q[2].slice(0,Wn(Q[0])?2:3).every(hn=>hn<=0))[0])==null?void 0:r[0])||G[0][0];return on!==a?{data:{index:C+1,overflows:N},reset:{placement:on}}:{}}}},pg=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(t){var e,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:_=!0,...j}=Dt(n,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const C=it(r),L=Bt(a),T=it(a)===a,H=await(l.isRTL==null?void 0:l.isRTL(c.floating)),N=d||(T||!_?[vo(a)]:sg(a)),W=g!=="none";!d&&W&&N.push(...ag(a,_,g,H));const G=[a,...N],fn=await No(t,j),on=[];let Q=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&on.push(fn[C]),f){const pn=Dl(r,i,H);on.push(fn[pn[0]],fn[pn[1]])}if(Q=[...Q,{placement:r,overflows:on}],!on.every(pn=>pn<=0)){var hn,vn;const pn=(((hn=s.flip)==null?void 0:hn.index)||0)+1,Rn=G[pn];if(Rn)return{data:{index:pn,overflows:Q},reset:{placement:Rn}};let un=(vn=Q.filter(K=>K.overflows[0]<=0).sort((K,q)=>K.overflows[1]-q.overflows[1])[0])==null?void 0:vn.placement;if(!un)switch(m){case"bestFit":{var xn;const K=(xn=Q.filter(q=>{if(W){const bn=Bt(q.placement);return bn===L||bn==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(bn=>bn>0).reduce((bn,Vt)=>bn+Vt,0)]).sort((q,bn)=>q[1]-bn[1])[0])==null?void 0:xn[0];K&&(un=K);break}case"initialPlacement":un=a;break}if(r!==un)return{reset:{placement:un}}}return{}}}};async function mg(n,t){const{placement:e,platform:o,elements:r}=n,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=it(e),a=Wn(e),l=Bt(e)==="y",c=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,f=Dt(t,n);let{mainAxis:d,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*u,y:d*c}:{x:d*c,y:m*u}}const hg=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(t){var e,o;const{x:r,y:s,placement:i,middlewareData:a}=t,l=await mg(t,n);return i===((e=a.offset)==null?void 0:e.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:i}}}}},gg=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(t){const{x:e,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:a={fn:j=>{let{x:C,y:L}=j;return{x:C,y:L}}},...l}=Dt(n,t),c={x:e,y:o},u=await No(t,l),f=Bt(it(r)),d=Bl(f);let m=c[d],g=c[f];if(s){const j=d==="y"?"top":"left",C=d==="y"?"bottom":"right",L=m+u[j],T=m-u[C];m=Nr(L,m,T)}if(i){const j=f==="y"?"top":"left",C=f==="y"?"bottom":"right",L=g+u[j],T=g-u[C];g=Nr(L,g,T)}const _=a.fn({...t,[d]:m,[f]:g});return{..._,data:{x:_.x-e,y:_.y-o,enabled:{[d]:s,[f]:i}}}}}},vg=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(t){var e,o;const{placement:r,rects:s,platform:i,elements:a}=t,{apply:l=()=>{},...c}=Dt(n,t),u=await No(t,c),f=it(r),d=Wn(r),m=Bt(r)==="y",{width:g,height:_}=s.floating;let j,C;f==="top"||f==="bottom"?(j=f,C=d===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(C=f,j=d==="end"?"top":"bottom");const L=_-u.top-u.bottom,T=g-u.left-u.right,H=Ee(_-u[j],L),N=Ee(g-u[C],T),W=!t.middlewareData.shift;let G=H,fn=N;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(fn=T),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(G=L),W&&!d){const Q=At(u.left,0),hn=At(u.right,0),vn=At(u.top,0),xn=At(u.bottom,0);m?fn=g-2*(Q!==0||hn!==0?Q+hn:At(u.left,u.right)):G=_-2*(vn!==0||xn!==0?vn+xn:At(u.top,u.bottom))}await l({...t,availableWidth:fn,availableHeight:G});const on=await i.getDimensions(a.floating);return g!==on.width||_!==on.height?{reset:{rects:!0}}:{}}}};function Nn(n){var t;return((t=n.ownerDocument)==null?void 0:t.defaultView)||window}function et(n){return Nn(n).getComputedStyle(n)}const Ci=Math.min,we=Math.max,yo=Math.round;function zl(n){const t=et(n);let e=parseFloat(t.width),o=parseFloat(t.height);const r=n.offsetWidth,s=n.offsetHeight,i=yo(e)!==r||yo(o)!==s;return i&&(e=r,o=s),{width:e,height:o,fallback:i}}function kt(n){return Xl(n)?(n.nodeName||"").toLowerCase():""}let Qe;function Yl(){if(Qe)return Qe;const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?(Qe=n.brands.map(t=>t.brand+"/"+t.version).join(" "),Qe):navigator.userAgent}function ot(n){return n instanceof Nn(n).HTMLElement}function _t(n){return n instanceof Nn(n).Element}function Xl(n){return n instanceof Nn(n).Node}function Ii(n){return typeof ShadowRoot>"u"?!1:n instanceof Nn(n).ShadowRoot||n instanceof ShadowRoot}function Bo(n){const{overflow:t,overflowX:e,overflowY:o,display:r}=et(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+e)&&!["inline","contents"].includes(r)}function yg(n){return["table","td","th"].includes(kt(n))}function Br(n){const t=/firefox/i.test(Yl()),e=et(n),o=e.backdropFilter||e.WebkitBackdropFilter;return e.transform!=="none"||e.perspective!=="none"||!!o&&o!=="none"||t&&e.willChange==="filter"||t&&!!e.filter&&e.filter!=="none"||["transform","perspective"].some(r=>e.willChange.includes(r))||["paint","layout","strict","content"].some(r=>{const s=e.contain;return s!=null&&s.includes(r)})}function Ul(){return!/^((?!chrome|android).)*safari/i.test(Yl())}function Is(n){return["html","body","#document"].includes(kt(n))}function Wl(n){return _t(n)?n:n.contextElement}const Gl={x:1,y:1};function Jt(n){const t=Wl(n);if(!ot(t))return Gl;const e=t.getBoundingClientRect(),{width:o,height:r,fallback:s}=zl(t);let i=(s?yo(e.width):e.width)/o,a=(s?yo(e.height):e.height)/r;return i&&Number.isFinite(i)||(i=1),a&&Number.isFinite(a)||(a=1),{x:i,y:a}}function Ae(n,t,e,o){var r,s;t===void 0&&(t=!1),e===void 0&&(e=!1);const i=n.getBoundingClientRect(),a=Wl(n);let l=Gl;t&&(o?_t(o)&&(l=Jt(o)):l=Jt(n));const c=a?Nn(a):window,u=!Ul()&&e;let f=(i.left+(u&&((r=c.visualViewport)==null?void 0:r.offsetLeft)||0))/l.x,d=(i.top+(u&&((s=c.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,m=i.width/l.x,g=i.height/l.y;if(a){const _=Nn(a),j=o&&_t(o)?Nn(o):o;let C=_.frameElement;for(;C&&o&&j!==_;){const L=Jt(C),T=C.getBoundingClientRect(),H=getComputedStyle(C);T.x+=(C.clientLeft+parseFloat(H.paddingLeft))*L.x,T.y+=(C.clientTop+parseFloat(H.paddingTop))*L.y,f*=L.x,d*=L.y,m*=L.x,g*=L.y,f+=T.x,d+=T.y,C=Nn(C).frameElement}}return{width:m,height:g,top:d,right:f+m,bottom:d+g,left:f,x:f,y:d}}function bt(n){return((Xl(n)?n.ownerDocument:n.document)||window.document).documentElement}function Do(n){return _t(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function ql(n){return Ae(bt(n)).left+Do(n).scrollLeft}function Fe(n){if(kt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ii(n)&&n.host||bt(n);return Ii(t)?t.host:t}function Kl(n){const t=Fe(n);return Is(t)?t.ownerDocument.body:ot(t)&&Bo(t)?t:Kl(t)}function wo(n,t){var e;t===void 0&&(t=[]);const o=Kl(n),r=o===((e=n.ownerDocument)==null?void 0:e.body),s=Nn(o);return r?t.concat(s,s.visualViewport||[],Bo(o)?o:[]):t.concat(o,wo(o))}function Li(n,t,e){return t==="viewport"?ye(function(o,r){const s=Nn(o),i=bt(o),a=s.visualViewport;let l=i.clientWidth,c=i.clientHeight,u=0,f=0;if(a){l=a.width,c=a.height;const d=Ul();(d||!d&&r==="fixed")&&(u=a.offsetLeft,f=a.offsetTop)}return{width:l,height:c,x:u,y:f}}(n,e)):_t(t)?ye(function(o,r){const s=Ae(o,!0,r==="fixed"),i=s.top+o.clientTop,a=s.left+o.clientLeft,l=ot(o)?Jt(o):{x:1,y:1};return{width:o.clientWidth*l.x,height:o.clientHeight*l.y,x:a*l.x,y:i*l.y}}(t,e)):ye(function(o){const r=bt(o),s=Do(o),i=o.ownerDocument.body,a=we(r.scrollWidth,r.clientWidth,i.scrollWidth,i.clientWidth),l=we(r.scrollHeight,r.clientHeight,i.scrollHeight,i.clientHeight);let c=-s.scrollLeft+ql(o);const u=-s.scrollTop;return et(i).direction==="rtl"&&(c+=we(r.clientWidth,i.clientWidth)-a),{width:a,height:l,x:c,y:u}}(bt(n)))}function Ti(n){return ot(n)&&et(n).position!=="fixed"?n.offsetParent:null}function Hi(n){const t=Nn(n);let e=Ti(n);for(;e&&yg(e)&&et(e).position==="static";)e=Ti(e);return e&&(kt(e)==="html"||kt(e)==="body"&&et(e).position==="static"&&!Br(e))?t:e||function(o){let r=Fe(o);for(;ot(r)&&!Is(r);){if(Br(r))return r;r=Fe(r)}return null}(n)||t}function wg(n,t,e){const o=ot(t),r=bt(t),s=Ae(n,!0,e==="fixed",t);let i={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(o||!o&&e!=="fixed")if((kt(t)!=="body"||Bo(r))&&(i=Do(t)),ot(t)){const l=Ae(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}else r&&(a.x=ql(r));return{x:s.left+i.scrollLeft-a.x,y:s.top+i.scrollTop-a.y,width:s.width,height:s.height}}const xg={getClippingRect:function(n){let{element:t,boundary:e,rootBoundary:o,strategy:r}=n;const s=e==="clippingAncestors"?function(c,u){const f=u.get(c);if(f)return f;let d=wo(c).filter(j=>_t(j)&&kt(j)!=="body"),m=null;const g=et(c).position==="fixed";let _=g?Fe(c):c;for(;_t(_)&&!Is(_);){const j=et(_),C=Br(_);(g?C||m:C||j.position!=="static"||!m||!["absolute","fixed"].includes(m.position))?m=j:d=d.filter(L=>L!==_),_=Fe(_)}return u.set(c,d),d}(t,this._c):[].concat(e),i=[...s,o],a=i[0],l=i.reduce((c,u)=>{const f=Li(t,u,r);return c.top=we(f.top,c.top),c.right=Ci(f.right,c.right),c.bottom=Ci(f.bottom,c.bottom),c.left=we(f.left,c.left),c},Li(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(n){let{rect:t,offsetParent:e,strategy:o}=n;const r=ot(e),s=bt(e);if(e===s)return t;let i={scrollLeft:0,scrollTop:0},a={x:1,y:1};const l={x:0,y:0};if((r||!r&&o!=="fixed")&&((kt(e)!=="body"||Bo(s))&&(i=Do(e)),ot(e))){const c=Ae(e);a=Jt(e),l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-i.scrollLeft*a.x+l.x,y:t.y*a.y-i.scrollTop*a.y+l.y}},isElement:_t,getDimensions:function(n){return ot(n)?zl(n):n.getBoundingClientRect()},getOffsetParent:Hi,getDocumentElement:bt,getScale:Jt,async getElementRects(n){let{reference:t,floating:e,strategy:o}=n;const r=this.getOffsetParent||Hi,s=this.getDimensions;return{reference:wg(t,await r(e),o),floating:{x:0,y:0,...await s(e)}}},getClientRects:n=>Array.from(n.getClientRects()),isRTL:n=>et(n).direction==="rtl"},_g=(n,t,e)=>{const o=new Map,r={platform:xg,...e},s={...r.platform,_c:o};return cg(n,t,{...r,platform:s})},Rt={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:150,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,autoHideOnMousedown:!1,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:n=>[...n,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover"],delay:{show:0,hide:400}}}};function Pe(n,t){let e=Rt.themes[n]||{},o;do o=e[t],typeof o>"u"?e.$extend?e=Rt.themes[e.$extend]||{}:(e=null,o=Rt[t]):e=null;while(e);return o}function bg(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend&&!e.$resetCss?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t.map(o=>`v-popper--theme-${o}`)}function Oi(n){const t=[n];let e=Rt.themes[n]||{};do e.$extend?(t.push(e.$extend),e=Rt.themes[e.$extend]||{}):e=null;while(e);return t}let Re=!1;if(typeof window<"u"){Re=!1;try{const n=Object.defineProperty({},"passive",{get(){Re=!0}});window.addEventListener("test",null,n)}catch{}}let Zl=!1;typeof window<"u"&&typeof navigator<"u"&&(Zl=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Jl=["auto","top","bottom","left","right"].reduce((n,t)=>n.concat([t,`${t}-start`,`${t}-end`]),[]),$i={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart",pointer:"pointerdown"},Si={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend",pointer:"pointerup"};function ji(n,t){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}function ur(){return new Promise(n=>requestAnimationFrame(()=>{requestAnimationFrame(n)}))}const Yn=[];let jt=null;const Ei={};function Ai(n){let t=Ei[n];return t||(t=Ei[n]=[]),t}let Dr=function(){};typeof window<"u"&&(Dr=window.Element);function J(n){return function(t){return Pe(t.theme,n)}}const fr="__floating-vue__popper",Ql=()=>ne({name:"VPopper",provide(){return{[fr]:{parentPopper:this}}},inject:{[fr]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:J("disabled")},positioningDisabled:{type:Boolean,default:J("positioningDisabled")},placement:{type:String,default:J("placement"),validator:n=>Jl.includes(n)},delay:{type:[String,Number,Object],default:J("delay")},distance:{type:[Number,String],default:J("distance")},skidding:{type:[Number,String],default:J("skidding")},triggers:{type:Array,default:J("triggers")},showTriggers:{type:[Array,Function],default:J("showTriggers")},hideTriggers:{type:[Array,Function],default:J("hideTriggers")},popperTriggers:{type:Array,default:J("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:J("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:J("popperHideTriggers")},container:{type:[String,Object,Dr,Boolean],default:J("container")},boundary:{type:[String,Dr],default:J("boundary")},strategy:{type:String,validator:n=>["absolute","fixed"].includes(n),default:J("strategy")},autoHide:{type:[Boolean,Function],default:J("autoHide")},handleResize:{type:Boolean,default:J("handleResize")},instantMove:{type:Boolean,default:J("instantMove")},eagerMount:{type:Boolean,default:J("eagerMount")},popperClass:{type:[String,Array,Object],default:J("popperClass")},computeTransformOrigin:{type:Boolean,default:J("computeTransformOrigin")},autoMinSize:{type:Boolean,default:J("autoMinSize")},autoSize:{type:[Boolean,String],default:J("autoSize")},autoMaxSize:{type:Boolean,default:J("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:J("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:J("preventOverflow")},overflowPadding:{type:[Number,String],default:J("overflowPadding")},arrowPadding:{type:[Number,String],default:J("arrowPadding")},arrowOverflow:{type:Boolean,default:J("arrowOverflow")},flip:{type:Boolean,default:J("flip")},shift:{type:Boolean,default:J("shift")},shiftCrossAxis:{type:Boolean,default:J("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:J("noAutoFocus")},disposeTimeout:{type:Number,default:J("disposeTimeout")}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},randomId:`popper_${[Math.random(),Date.now()].map(n=>n.toString(36).substring(2,10)).join("_")}`,shownChildren:new Set,lastAutoHide:!0,pendingHide:!1,containsGlobalTarget:!1,isDisposed:!0,mouseDownContains:!1}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:{...this.classes,popperClass:this.popperClass},result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var n;return(n=this[fr])==null?void 0:n.parentPopper},hasPopperShowTriggerHover(){var n,t;return((n=this.popperTriggers)==null?void 0:n.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:{shown:"$_autoShowHide",disabled(n){n?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())},triggers:{handler:"$_refreshListeners",deep:!0},positioningDisabled:"$_refreshListeners",...["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((n,t)=>(n[t]="$_computePosition",n),{})},created(){this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:n=null,skipDelay:t=!1,force:e=!1}={}){var o,r;(o=this.parentPopper)!=null&&o.lockedChild&&this.parentPopper.lockedChild!==this||(this.pendingHide=!1,(e||!this.disabled)&&(((r=this.parentPopper)==null?void 0:r.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(n,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:n=null,skipDelay:t=!1}={}){var e;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((e=this.parentPopper)==null?void 0:e.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.pendingHide=!1,this.$_scheduleHide(n,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var n;this.isDisposed&&(this.isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=((n=this.referenceNode)==null?void 0:n.call(this))??this.$el,this.$_targetNodes=this.targetNodes().filter(t=>t.nodeType===t.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.isDisposed||(this.isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){if(this.isDisposed||this.positioningDisabled)return;const n={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&n.middleware.push(hg({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");if(t?n.middleware.push(dg({alignment:this.placement.split("-")[1]??""})):n.placement=this.placement,this.preventOverflow&&(this.shift&&n.middleware.push(gg({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&n.middleware.push(pg({padding:this.overflowPadding,boundary:this.boundary}))),n.middleware.push(ug({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&n.middleware.push({name:"arrowOverflow",fn:({placement:o,rects:r,middlewareData:s})=>{let i;const{centerOffset:a}=s.arrow;return o.startsWith("top")||o.startsWith("bottom")?i=Math.abs(a)>r.reference.width/2:i=Math.abs(a)>r.reference.height/2,{data:{overflow:i}}}}),this.autoMinSize||this.autoSize){const o=this.autoSize?this.autoSize:this.autoMinSize?"min":null;n.middleware.push({name:"autoSize",fn:({rects:r,placement:s,middlewareData:i})=>{var a;if((a=i.autoSize)!=null&&a.skip)return{};let l,c;return s.startsWith("top")||s.startsWith("bottom")?l=r.reference.width:c=r.reference.height,this.$_innerNode.style[o==="min"?"minWidth":o==="max"?"maxWidth":"width"]=l!=null?`${l}px`:null,this.$_innerNode.style[o==="min"?"minHeight":o==="max"?"maxHeight":"height"]=c!=null?`${c}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,n.middleware.push(vg({boundary:this.boundary,padding:this.overflowPadding,apply:({availableWidth:o,availableHeight:r})=>{this.$_innerNode.style.maxWidth=o!=null?`${o}px`:null,this.$_innerNode.style.maxHeight=r!=null?`${r}px`:null}})));const e=await _g(this.$_referenceNode,this.$_popperNode,n);Object.assign(this.result,{x:e.x,y:e.y,placement:e.placement,strategy:e.strategy,arrow:{...e.middlewareData.arrow,...e.middlewareData.arrowOverflow}})},$_scheduleShow(n,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),jt&&this.instantMove&&jt.instantMove&&jt!==this.parentPopper){jt.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(n,t=!1){if(this.shownChildren.size>0){this.pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(jt=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(n){const t=this.delay;return parseInt(t&&t[n]||t||0)},async $_applyShow(n=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=n,!this.isShown&&(this.$_ensureTeleport(),await ur(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...wo(this.$_referenceNode),...wo(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),e=this.$_popperNode.querySelector(".v-popper__wrapper"),o=e.parentNode.getBoundingClientRect(),r=t.x+t.width/2-(o.left+e.offsetLeft),s=t.y+t.height/2-(o.top+e.offsetTop);this.result.transformOrigin=`${r}px ${s}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const n=this.showGroup;if(n){let t;for(let e=0;e<Yn.length;e++)t=Yn[e],t.showGroup!==n&&(t.hide(),t.$emit("close-group"))}Yn.push(this),document.body.classList.add("v-popper--some-open");for(const t of Oi(this.theme))Ai(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await ur(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(n=!1){if(this.shownChildren.size>0){this.pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=n,ji(Yn,this),Yn.length===0&&document.body.classList.remove("v-popper--some-open");for(const e of Oi(this.theme)){const o=Ai(e);ji(o,this),o.length===0&&document.body.classList.remove(`v-popper--some-open--${e}`)}jt===this&&(jt=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=this.disposeTimeout;t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await ur(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.isDisposed)return;let n=this.container;if(typeof n=="string"?n=window.document.querySelector(n):n===!1&&(n=this.$_targetNodes[0].parentNode),!n)throw new Error("No container for popover: "+this.container);n.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const n=e=>{this.isShown&&!this.$_hideInProgress||(e.usedByTooltip=!0,!this.$_preventShow&&this.show({event:e}))};this.$_registerTriggerListeners(this.$_targetNodes,$i,this.triggers,this.showTriggers,n),this.$_registerTriggerListeners([this.$_popperNode],$i,this.popperTriggers,this.popperShowTriggers,n);const t=e=>{e.usedByTooltip||this.hide({event:e})};this.$_registerTriggerListeners(this.$_targetNodes,Si,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],Si,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(n,t,e){this.$_events.push({targetNodes:n,eventType:t,handler:e}),n.forEach(o=>o.addEventListener(t,e,Re?{passive:!0}:void 0))},$_registerTriggerListeners(n,t,e,o,r){let s=e;o!=null&&(s=typeof o=="function"?o(s):o),s.forEach(i=>{const a=t[i];a&&this.$_registerEventListeners(n,a,r)})},$_removeEventListeners(n){const t=[];this.$_events.forEach(e=>{const{targetNodes:o,eventType:r,handler:s}=e;!n||n===r?o.forEach(i=>i.removeEventListener(r,s)):t.push(e)}),this.$_events=t},$_refreshListeners(){this.isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(n,t=!1){this.$_showFrameLocked||(this.hide({event:n}),n.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(n,t){for(const e of this.$_targetNodes){const o=e.getAttribute(n);o&&(e.removeAttribute(n),e.setAttribute(t,o))}},$_applyAttrsToTarget(n){for(const t of this.$_targetNodes)for(const e in n){const o=n[e];o==null?t.removeAttribute(e):t.setAttribute(e,o)}},$_updateParentShownChildren(n){let t=this.parentPopper;for(;t;)n?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const n=this.$_referenceNode.getBoundingClientRect();if(xe>=n.left&&xe<=n.right&&_e>=n.top&&_e<=n.bottom){const t=this.$_popperNode.getBoundingClientRect(),e=xe-mt,o=_e-ht,r=t.left+t.width/2-mt+(t.top+t.height/2)-ht+t.width+t.height,s=mt+e*r,i=ht+o*r;return no(mt,ht,s,i,t.left,t.top,t.left,t.bottom)||no(mt,ht,s,i,t.left,t.top,t.right,t.top)||no(mt,ht,s,i,t.right,t.top,t.right,t.bottom)||no(mt,ht,s,i,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});if(typeof document<"u"&&typeof window<"u"){if(Zl){const n=Re?{passive:!0,capture:!0}:!0;document.addEventListener("touchstart",t=>Fi(t),n),document.addEventListener("touchend",t=>Pi(t,!0),n)}else window.addEventListener("mousedown",n=>Fi(n),!0),window.addEventListener("click",n=>Pi(n,!1),!0);window.addEventListener("resize",Cg)}function Fi(n,t){for(let e=0;e<Yn.length;e++){const o=Yn[e];try{o.mouseDownContains=o.popperNode().contains(n.target)}catch{}}}function Pi(n,t){Mg(n,t)}function Mg(n,t){const e={};for(let o=Yn.length-1;o>=0;o--){const r=Yn[o];try{const s=r.containsGlobalTarget=r.mouseDownContains||r.popperNode().contains(n.target);r.pendingHide=!1,requestAnimationFrame(()=>{if(r.pendingHide=!1,!e[r.randomId]&&Ri(r,s,n)){if(r.$_handleGlobalClose(n,t),!n.closeAllPopover&&n.closePopover&&s){let a=r.parentPopper;for(;a;)e[a.randomId]=!0,a=a.parentPopper;return}let i=r.parentPopper;for(;i&&Ri(i,i.containsGlobalTarget,n);)i.$_handleGlobalClose(n,t),i=i.parentPopper}})}catch{}}}function Ri(n,t,e){return e.closeAllPopover||e.closePopover&&t||kg(n,e)&&!t}function kg(n,t){if(typeof n.autoHide=="function"){const e=n.autoHide(t);return n.lastAutoHide=e,e}return n.autoHide}function Cg(){for(let n=0;n<Yn.length;n++)Yn[n].$_computePosition()}let mt=0,ht=0,xe=0,_e=0;typeof window<"u"&&window.addEventListener("mousemove",n=>{mt=xe,ht=_e,xe=n.clientX,_e=n.clientY},Re?{passive:!0}:void 0);function no(n,t,e,o,r,s,i,a){const l=((i-r)*(t-s)-(a-s)*(n-r))/((a-s)*(e-n)-(i-r)*(o-t)),c=((e-n)*(t-s)-(o-t)*(n-r))/((a-s)*(e-n)-(i-r)*(o-t));return l>=0&&l<=1&&c>=0&&c<=1}const Ig={extends:Ql()},Vo=(n,t)=>{const e=n.__vccOpts||n;for(const[o,r]of t)e[o]=r;return e};function Lg(n,t,e,o,r,s){return y(),x("div",{ref:"reference",class:Xn(["v-popper",{"v-popper--shown":n.slotData.isShown}])},[Le(n.$slots,"default",wc(Ba(n.slotData)))],2)}const Tg=Vo(Ig,[["render",Lg]]);function Hg(){var n=window.navigator.userAgent,t=n.indexOf("MSIE ");if(t>0)return parseInt(n.substring(t+5,n.indexOf(".",t)),10);var e=n.indexOf("Trident/");if(e>0){var o=n.indexOf("rv:");return parseInt(n.substring(o+3,n.indexOf(".",o)),10)}var r=n.indexOf("Edge/");return r>0?parseInt(n.substring(r+5,n.indexOf(".",r)),10):-1}let ao;function Vr(){Vr.init||(Vr.init=!0,ao=Hg()!==-1)}var zo={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){Vr(),Lo(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const n=document.createElement("object");this._resizeObject=n,n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex",-1),n.onload=this.addResizeHandlers,n.type="text/html",ao&&this.$el.appendChild(n),n.data="about:blank",ao||this.$el.appendChild(n)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!ao&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Og=nu();Jc("data-v-b329ee4c");const $g={class:"resize-observer",tabindex:"-1"};Qc();const Sg=Og((n,t,e,o,r,s)=>(y(),st("div",$g)));zo.render=Sg;zo.__scopeId="data-v-b329ee4c";zo.__file="src/components/ResizeObserver.vue";const nc=(n="theme")=>({computed:{themeClass(){return bg(this[n])}}}),jg=ne({name:"VPopperContent",components:{ResizeObserver:zo},mixins:[nc()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(n){return n!=null&&!isNaN(n)?`${n}px`:null}}}),Eg=["id","aria-hidden","tabindex","data-popper-placement"],Ag={ref:"inner",class:"v-popper__inner"},Fg=M("div",{class:"v-popper__arrow-outer"},null,-1),Pg=M("div",{class:"v-popper__arrow-inner"},null,-1),Rg=[Fg,Pg];function Ng(n,t,e,o,r,s){const i=Ie("ResizeObserver");return y(),x("div",{id:n.popperId,ref:"popover",class:Xn(["v-popper__popper",[n.themeClass,n.classes.popperClass,{"v-popper__popper--shown":n.shown,"v-popper__popper--hidden":!n.shown,"v-popper__popper--show-from":n.classes.showFrom,"v-popper__popper--show-to":n.classes.showTo,"v-popper__popper--hide-from":n.classes.hideFrom,"v-popper__popper--hide-to":n.classes.hideTo,"v-popper__popper--skip-transition":n.skipTransition,"v-popper__popper--arrow-overflow":n.result&&n.result.arrow.overflow,"v-popper__popper--no-positioning":!n.result}]]),style:xt(n.result?{position:n.result.strategy,transform:`translate3d(${Math.round(n.result.x)}px,${Math.round(n.result.y)}px,0)`}:void 0),"aria-hidden":n.shown?"false":"true",tabindex:n.autoHide?0:void 0,"data-popper-placement":n.result?n.result.placement:void 0,onKeyup:t[2]||(t[2]=If(a=>n.autoHide&&n.$emit("hide"),["esc"]))},[M("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=a=>n.autoHide&&n.$emit("hide"))}),M("div",{class:"v-popper__wrapper",style:xt(n.result?{transformOrigin:n.result.transformOrigin}:void 0)},[M("div",Ag,[n.mounted?(y(),x(mn,{key:0},[M("div",null,[Le(n.$slots,"default")]),n.handleResize?(y(),st(i,{key:0,onNotify:t[1]||(t[1]=a=>n.$emit("resize",a))})):kr("",!0)],64)):kr("",!0)],512),M("div",{ref:"arrow",class:"v-popper__arrow-container",style:xt(n.result?{left:n.toPx(n.result.arrow.x),top:n.toPx(n.result.arrow.y)}:void 0)},Rg,4)],4)],46,Eg)}const tc=Vo(jg,[["render",Ng]]),ec={methods:{show(...n){return this.$refs.popper.show(...n)},hide(...n){return this.$refs.popper.hide(...n)},dispose(...n){return this.$refs.popper.dispose(...n)},onResize(...n){return this.$refs.popper.onResize(...n)}}};let zr=function(){};typeof window<"u"&&(zr=window.Element);const Bg=ne({name:"VPopperWrapper",components:{Popper:Tg,PopperContent:tc},mixins:[ec,nc("finalTheme")],props:{theme:{type:String,default:null},referenceNode:{type:Function,default:null},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:void 0},positioningDisabled:{type:Boolean,default:void 0},placement:{type:String,default:void 0},delay:{type:[String,Number,Object],default:void 0},distance:{type:[Number,String],default:void 0},skidding:{type:[Number,String],default:void 0},triggers:{type:Array,default:void 0},showTriggers:{type:[Array,Function],default:void 0},hideTriggers:{type:[Array,Function],default:void 0},popperTriggers:{type:Array,default:void 0},popperShowTriggers:{type:[Array,Function],default:void 0},popperHideTriggers:{type:[Array,Function],default:void 0},container:{type:[String,Object,zr,Boolean],default:void 0},boundary:{type:[String,zr],default:void 0},strategy:{type:String,default:void 0},autoHide:{type:[Boolean,Function],default:void 0},handleResize:{type:Boolean,default:void 0},instantMove:{type:Boolean,default:void 0},eagerMount:{type:Boolean,default:void 0},popperClass:{type:[String,Array,Object],default:void 0},computeTransformOrigin:{type:Boolean,default:void 0},autoMinSize:{type:Boolean,default:void 0},autoSize:{type:[Boolean,String],default:void 0},autoMaxSize:{type:Boolean,default:void 0},autoBoundaryMaxSize:{type:Boolean,default:void 0},preventOverflow:{type:Boolean,default:void 0},overflowPadding:{type:[Number,String],default:void 0},arrowPadding:{type:[Number,String],default:void 0},arrowOverflow:{type:Boolean,default:void 0},flip:{type:Boolean,default:void 0},shift:{type:Boolean,default:void 0},shiftCrossAxis:{type:Boolean,default:void 0},noAutoFocus:{type:Boolean,default:void 0},disposeTimeout:{type:Number,default:void 0}},emits:{show:()=>!0,hide:()=>!0,"update:shown":n=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},computed:{finalTheme(){return this.theme??this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(n=>n!==this.$refs.popperContent.$el)}}});function Dg(n,t,e,o,r,s){const i=Ie("PopperContent"),a=Ie("Popper");return y(),st(a,us({ref:"popper"},n.$props,{theme:n.finalTheme,"target-nodes":n.getTargetNodes,"popper-node":()=>n.$refs.popperContent.$el,class:[n.themeClass],onShow:t[0]||(t[0]=()=>n.$emit("show")),onHide:t[1]||(t[1]=()=>n.$emit("hide")),"onUpdate:shown":t[2]||(t[2]=l=>n.$emit("update:shown",l)),onApplyShow:t[3]||(t[3]=()=>n.$emit("apply-show")),onApplyHide:t[4]||(t[4]=()=>n.$emit("apply-hide")),onCloseGroup:t[5]||(t[5]=()=>n.$emit("close-group")),onCloseDirective:t[6]||(t[6]=()=>n.$emit("close-directive")),onAutoHide:t[7]||(t[7]=()=>n.$emit("auto-hide")),onResize:t[8]||(t[8]=()=>n.$emit("resize"))}),{default:cn(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:d,show:m,hide:g,handleResize:_,onResize:j,classes:C,result:L})=>[Le(n.$slots,"default",{shown:c,show:m,hide:g}),k(i,{ref:"popperContent","popper-id":l,theme:n.finalTheme,shown:c,mounted:u,"skip-transition":f,"auto-hide":d,"handle-resize":_,classes:C,result:L,onHide:g,onResize:j},{default:cn(()=>[Le(n.$slots,"popper",{shown:c,hide:g})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},16,["theme","target-nodes","popper-node","class"])}const Ls=Vo(Bg,[["render",Dg]]);({...Ls});({...Ls});({...Ls});const Vg=ne({name:"VTooltipDirective",components:{Popper:Ql(),PopperContent:tc},mixins:[ec],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:n=>Pe(n.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:n=>Pe(n.theme,"loadingContent")},targetNodes:{type:Function,required:!0}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(n){if(typeof this.content=="function"&&this.$_isShown&&(n||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,e=this.content(this);e.then?e.then(o=>this.onResult(t,o)):this.onResult(t,e)}},onResult(n,t){n===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),zg=["innerHTML"],Yg=["textContent"];function Xg(n,t,e,o,r,s){const i=Ie("PopperContent"),a=Ie("Popper");return y(),st(a,us({ref:"popper"},n.$attrs,{theme:n.theme,"target-nodes":n.targetNodes,"popper-node":()=>n.$refs.popperContent.$el,onApplyShow:n.onShow,onApplyHide:n.onHide}),{default:cn(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:d,hide:m,handleResize:g,onResize:_,classes:j,result:C})=>[k(i,{ref:"popperContent",class:Xn({"v-popper--tooltip-loading":n.loading}),"popper-id":l,theme:n.theme,shown:c,mounted:u,"skip-transition":f,"auto-hide":d,"handle-resize":g,classes:j,result:C,onHide:m,onResize:_},{default:cn(()=>[n.html?(y(),x("div",{key:0,innerHTML:n.finalContent},null,8,zg)):(y(),x("div",{key:1,textContent:be(n.finalContent)},null,8,Yg))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","target-nodes","popper-node","onApplyShow","onApplyHide"])}const Ug=Vo(Vg,[["render",Xg]]),oc="v-popper--has-tooltip";function Wg(n,t){let e=n.placement;if(!e&&t)for(const o of Jl)t[o]&&(e=o);return e||(e=Pe(n.theme||"tooltip","placement")),e}function rc(n,t,e){let o;const r=typeof t;return r==="string"?o={content:t}:t&&r==="object"?o=t:o={content:!1},o.placement=Wg(o,e),o.targetNodes=()=>[n],o.referenceNode=()=>n,o}let dr,Ne,Gg=0;function qg(){if(dr)return;Ne=b([]),dr=Xa({name:"VTooltipDirectiveApp",setup(){return{directives:Ne}},render(){return this.directives.map(t=>$e(Ug,{...t.options,shown:t.shown||t.options.shown,key:t.id}))},devtools:{hide:!0}});const n=document.createElement("div");document.body.appendChild(n),dr.mount(n)}function Kg(n,t,e){qg();const o=b(rc(n,t,e)),r=b(!1),s={id:Gg++,options:o,shown:r};return Ne.value.push(s),n.classList&&n.classList.add(oc),n.$_popper={options:o,item:s,show(){r.value=!0},hide(){r.value=!1}}}function sc(n){if(n.$_popper){const t=Ne.value.indexOf(n.$_popper.item);t!==-1&&Ne.value.splice(t,1),delete n.$_popper,delete n.$_popperOldShown,delete n.$_popperMountTarget}n.classList&&n.classList.remove(oc)}function Ni(n,{value:t,modifiers:e}){const o=rc(n,t,e);if(!o.content||Pe(o.theme||"tooltip","disabled"))sc(n);else{let r;n.$_popper?(r=n.$_popper,r.options.value=o):r=Kg(n,t,e),typeof t.shown<"u"&&t.shown!==n.$_popperOldShown&&(n.$_popperOldShown=t.shown,t.shown?r.show():r.hide())}}const Zg={beforeMount:Ni,updated:Ni,beforeUnmount(n){sc(n)}},Jg=Zg,ic=Xa(tg);ic.directive("tooltip",Jg);ic.mount("#app");
