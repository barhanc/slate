(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function cf(e,t,n,r=10){const s=new Uint8Array(t*n),i=[];for(let a=0;a<n;a++)for(let o=0;o<t;o++){const u=a*t+o;if(e[u*4+3]===0||s[u])continue;s[u]=1;const c=[],l=[[o,a]];let d=o,p=a,f=o,h=a,m=0;for(;m<l.length;){const[y,_]=l[m++];c.push([y,_]),d=Math.min(d,y),p=Math.min(p,_),f=Math.max(f,y),h=Math.max(h,_);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++){if(v===0&&g===0)continue;const w=y+v,$=_+g;if(w>=0&&w<t&&$>=0&&$<n){const x=$*t+w;e[x*4+3]>0&&!s[x]&&(s[x]=1,l.push([w,$]))}}}c.length>r&&i.push({pixels:c,minX:d,minY:p,maxX:f,maxY:h})}return i.length<=1?null:i}function lf(e){const t=e.toCanvasElement({withoutTransform:!0,withoutShadow:!0}),r=t.getContext("2d").getImageData(0,0,t.width,t.height),{width:s,height:i,data:a}=r,o=cf(a,s,i);if(!o)return null;const u=[],c=e.getCenterPoint(),l=fabric.util.degreesToRadians(e.angle),d=Math.cos(l),p=Math.sin(l);return o.forEach(f=>{const h=f.maxX-f.minX+1,m=f.maxY-f.minY+1,y=document.createElement("canvas");y.width=h,y.height=m;const _=y.getContext("2d"),g=_.createImageData(h,m);f.pixels.forEach(([b,k])=>{const R=(k*s+b)*4,O=((k-f.minY)*h+(b-f.minX))*4;for(let T=0;T<4;T++)g.data[O+T]=a[R+T]}),_.putImageData(g,0,0);const v={x:f.minX+h/2-s/2,y:f.minY+m/2-i/2},w={x:v.x*e.scaleX,y:v.y*e.scaleY},$={x:w.x*d-w.y*p,y:w.x*p+w.y*d},x=new fabric.Image(y,{left:c.x+$.x,top:c.y+$.y,angle:e.angle,scaleX:e.scaleX,scaleY:e.scaleY,flipX:e.flipX,flipY:e.flipY,originX:"center",originY:"center"});u.push(x)}),u}const df="modulepreload",pf=function(e){return"/slate/"+e},_i={},vi=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=u(n.map(c=>{if(c=pf(c),c in _i)return;_i[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":df,l||(p.as="script"),p.crossOrigin="",p.href=c,o&&p.setAttribute("nonce",o),document.head.appendChild(p),l)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};var ff=Object.create,Yu=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,Qu=Object.getOwnPropertyNames,mf=Object.getPrototypeOf,gf=Object.prototype.hasOwnProperty,Bs=(e,t)=>function(){return t||(0,e[Qu(e)[0]])((t={exports:{}}).exports,t),t.exports},yf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Qu(t))!gf.call(e,s)&&s!==n&&Yu(e,s,{get:()=>t[s],enumerable:!(r=hf(t,s))||r.enumerable});return e},ir=(e,t,n)=>(n=e!=null?ff(mf(e)):{},yf(!e||!e.__esModule?Yu(n,"default",{value:e,enumerable:!0}):n,e)),_f=Bs({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){function n(r){for(var s=new Array(r),i=0;i<r;++i)s[i]=i;return s}t.exports=n}}),vf=Bs({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(s){return s!=null&&(n(s)||r(s)||!!s._isBuffer)};function n(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function r(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&n(s.slice(0,0))}}}),ar=Bs({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var n=_f(),r=vf(),s=typeof Float64Array<"u";function i(d,p){return d[0]-p[0]}function a(){var d=this.stride,p=new Array(d.length),f;for(f=0;f<p.length;++f)p[f]=[Math.abs(d[f]),f];p.sort(i);var h=new Array(p.length);for(f=0;f<h.length;++f)h[f]=p[f][1];return h}function o(d,p){var f=["View",p,"d",d].join("");p<0&&(f="View_Nil"+d);var h=d==="generic";if(p===-1){var m="function "+f+"(a){this.data=a;};var proto="+f+".prototype;proto.dtype='"+d+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+f+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+f+"(a){return new "+f+"(a);}",O=new Function(m);return O()}else if(p===0){var m="function "+f+"(a,d) {this.data = a;this.offset = d};var proto="+f+".prototype;proto.dtype='"+d+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+f+"_copy() {return new "+f+"(this.data,this.offset)};proto.pick=function "+f+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+f+"_get(){return "+(h?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+f+"_set(v){return "+(h?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+f+"(a,b,c,d){return new "+f+"(a,d)}",O=new Function("TrivialArray",m);return O(c[d][0])}var m=["'use strict'"],y=n(p),_=y.map(function(T){return"i"+T}),g="this.offset+"+y.map(function(T){return"this.stride["+T+"]*i"+T}).join("+"),v=y.map(function(T){return"b"+T}).join(","),w=y.map(function(T){return"c"+T}).join(",");m.push("function "+f+"(a,"+v+","+w+",d){this.data=a","this.shape=["+v+"]","this.stride=["+w+"]","this.offset=d|0}","var proto="+f+".prototype","proto.dtype='"+d+"'","proto.dimension="+p),m.push("Object.defineProperty(proto,'size',{get:function "+f+"_size(){return "+y.map(function(T){return"this.shape["+T+"]"}).join("*"),"}})"),p===1?m.push("proto.order=[0]"):(m.push("Object.defineProperty(proto,'order',{get:"),p<4?(m.push("function "+f+"_order(){"),p===2?m.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):p===3&&m.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):m.push("ORDER})")),m.push("proto.set=function "+f+"_set("+_.join(",")+",v){"),h?m.push("return this.data.set("+g+",v)}"):m.push("return this.data["+g+"]=v}"),m.push("proto.get=function "+f+"_get("+_.join(",")+"){"),h?m.push("return this.data.get("+g+")}"):m.push("return this.data["+g+"]}"),m.push("proto.index=function "+f+"_index(",_.join(),"){return "+g+"}"),m.push("proto.hi=function "+f+"_hi("+_.join(",")+"){return new "+f+"(this.data,"+y.map(function(T){return["(typeof i",T,"!=='number'||i",T,"<0)?this.shape[",T,"]:i",T,"|0"].join("")}).join(",")+","+y.map(function(T){return"this.stride["+T+"]"}).join(",")+",this.offset)}");var $=y.map(function(T){return"a"+T+"=this.shape["+T+"]"}),x=y.map(function(T){return"c"+T+"=this.stride["+T+"]"});m.push("proto.lo=function "+f+"_lo("+_.join(",")+"){var b=this.offset,d=0,"+$.join(",")+","+x.join(","));for(var b=0;b<p;++b)m.push("if(typeof i"+b+"==='number'&&i"+b+">=0){d=i"+b+"|0;b+=c"+b+"*d;a"+b+"-=d}");m.push("return new "+f+"(this.data,"+y.map(function(T){return"a"+T}).join(",")+","+y.map(function(T){return"c"+T}).join(",")+",b)}"),m.push("proto.step=function "+f+"_step("+_.join(",")+"){var "+y.map(function(T){return"a"+T+"=this.shape["+T+"]"}).join(",")+","+y.map(function(T){return"b"+T+"=this.stride["+T+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var b=0;b<p;++b)m.push("if(typeof i"+b+"==='number'){d=i"+b+"|0;if(d<0){c+=b"+b+"*(a"+b+"-1);a"+b+"=ceil(-a"+b+"/d)}else{a"+b+"=ceil(a"+b+"/d)}b"+b+"*=d}");m.push("return new "+f+"(this.data,"+y.map(function(T){return"a"+T}).join(",")+","+y.map(function(T){return"b"+T}).join(",")+",c)}");for(var k=new Array(p),R=new Array(p),b=0;b<p;++b)k[b]="a[i"+b+"]",R[b]="b[i"+b+"]";m.push("proto.transpose=function "+f+"_transpose("+_+"){"+_.map(function(T,ne){return T+"=("+T+"===undefined?"+ne+":"+T+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+f+"(this.data,"+k.join(",")+","+R.join(",")+",this.offset)}"),m.push("proto.pick=function "+f+"_pick("+_+"){var a=[],b=[],c=this.offset");for(var b=0;b<p;++b)m.push("if(typeof i"+b+"==='number'&&i"+b+">=0){c=(c+this.stride["+b+"]*i"+b+")|0}else{a.push(this.shape["+b+"]);b.push(this.stride["+b+"])}");m.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),m.push("return function construct_"+f+"(data,shape,stride,offset){return new "+f+"(data,"+y.map(function(T){return"shape["+T+"]"}).join(",")+","+y.map(function(T){return"stride["+T+"]"}).join(",")+",offset)}");var O=new Function("CTOR_LIST","ORDER",m.join(`
`));return O(c[d],a)}function u(d){if(r(d))return"buffer";if(s)switch(Object.prototype.toString.call(d)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(d)?"array":"generic"}var c={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function l(d,p,f,h){if(d===void 0){var w=c.array[0];return w([])}else typeof d=="number"&&(d=[d]);p===void 0&&(p=[d.length]);var m=p.length;if(f===void 0){f=new Array(m);for(var y=m-1,_=1;y>=0;--y)f[y]=_,_*=p[y]}if(h===void 0){h=0;for(var y=0;y<m;++y)f[y]<0&&(h-=(p[y]-1)*f[y])}for(var g=u(d),v=c[g];v.length<=m+1;)v.push(o(g,v.length-1));var w=v[m+1];return w(d,p,f,h)}t.exports=l}}),wf=typeof global=="object"&&global&&global.Object===Object&&global,$f=wf,bf=typeof self=="object"&&self&&self.Object===Object&&self,xf=$f||bf||Function("return this")(),Ps=xf,Sf=Ps.Symbol,Ln=Sf,Ju=Object.prototype,kf=Ju.hasOwnProperty,If=Ju.toString,jt=Ln?Ln.toStringTag:void 0;function Ef(e){var t=kf.call(e,jt),n=e[jt];try{e[jt]=void 0;var r=!0}catch{}var s=If.call(e);return r&&(t?e[jt]=n:delete e[jt]),s}var Tf=Ef,Cf=Object.prototype,zf=Cf.toString;function Af(e){return zf.call(e)}var Of=Af,Rf="[object Null]",Bf="[object Undefined]",wi=Ln?Ln.toStringTag:void 0;function Pf(e){return e==null?e===void 0?Bf:Rf:wi&&wi in Object(e)?Tf(e):Of(e)}var Mf=Pf;function Df(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ec=Df,Nf="[object AsyncFunction]",jf="[object Function]",Uf="[object GeneratorFunction]",Lf="[object Proxy]";function Vf(e){if(!ec(e))return!1;var t=Mf(e);return t==jf||t==Uf||t==Nf||t==Lf}var qf=Vf,Wf=Ps["__core-js_shared__"],hr=Wf,$i=(function(){var e=/[^.]+$/.exec(hr&&hr.keys&&hr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function Ff(e){return!!$i&&$i in e}var Gf=Ff,Zf=Function.prototype,Hf=Zf.toString;function Kf(e){if(e!=null){try{return Hf.call(e)}catch{}try{return e+""}catch{}}return""}var Xf=Kf,Yf=/[\\^$.*+?()[\]{}|]/g,Qf=/^\[object .+?Constructor\]$/,Jf=Function.prototype,eh=Object.prototype,th=Jf.toString,nh=eh.hasOwnProperty,rh=RegExp("^"+th.call(nh).replace(Yf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function sh(e){if(!ec(e)||Gf(e))return!1;var t=qf(e)?rh:Qf;return t.test(Xf(e))}var ih=sh;function ah(e,t){return e?.[t]}var oh=ah;function uh(e,t){var n=oh(e,t);return ih(n)?n:void 0}var tc=uh,ch=tc(Object,"create"),sn=ch;function lh(){this.__data__=sn?sn(null):{},this.size=0}var dh=lh;function ph(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var fh=ph,hh="__lodash_hash_undefined__",mh=Object.prototype,gh=mh.hasOwnProperty;function yh(e){var t=this.__data__;if(sn){var n=t[e];return n===hh?void 0:n}return gh.call(t,e)?t[e]:void 0}var _h=yh,vh=Object.prototype,wh=vh.hasOwnProperty;function $h(e){var t=this.__data__;return sn?t[e]!==void 0:wh.call(t,e)}var bh=$h,xh="__lodash_hash_undefined__";function Sh(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=sn&&t===void 0?xh:t,this}var kh=Sh;function Mt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mt.prototype.clear=dh;Mt.prototype.delete=fh;Mt.prototype.get=_h;Mt.prototype.has=bh;Mt.prototype.set=kh;var bi=Mt;function Ih(){this.__data__=[],this.size=0}var Eh=Ih;function Th(e,t){return e===t||e!==e&&t!==t}var Ch=Th;function zh(e,t){for(var n=e.length;n--;)if(Ch(e[n][0],t))return n;return-1}var or=zh,Ah=Array.prototype,Oh=Ah.splice;function Rh(e){var t=this.__data__,n=or(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Oh.call(t,n,1),--this.size,!0}var Bh=Rh;function Ph(e){var t=this.__data__,n=or(t,e);return n<0?void 0:t[n][1]}var Mh=Ph;function Dh(e){return or(this.__data__,e)>-1}var Nh=Dh;function jh(e,t){var n=this.__data__,r=or(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var Uh=jh;function Dt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Dt.prototype.clear=Eh;Dt.prototype.delete=Bh;Dt.prototype.get=Mh;Dt.prototype.has=Nh;Dt.prototype.set=Uh;var Lh=Dt,Vh=tc(Ps,"Map"),qh=Vh;function Wh(){this.size=0,this.__data__={hash:new bi,map:new(qh||Lh),string:new bi}}var Fh=Wh;function Gh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Zh=Gh;function Hh(e,t){var n=e.__data__;return Zh(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ur=Hh;function Kh(e){var t=ur(this,e).delete(e);return this.size-=t?1:0,t}var Xh=Kh;function Yh(e){return ur(this,e).get(e)}var Qh=Yh;function Jh(e){return ur(this,e).has(e)}var em=Jh;function tm(e,t){var n=ur(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var nm=tm;function Nt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Nt.prototype.clear=Fh;Nt.prototype.delete=Xh;Nt.prototype.get=Qh;Nt.prototype.has=em;Nt.prototype.set=nm;var nc=Nt,rm="Expected a function";function Ms(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(rm);var n=function(){var r=arguments,s=t?t.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var a=e.apply(this,r);return n.cache=i.set(s,a)||i,a};return n.cache=new(Ms.Cache||nc),n}Ms.Cache=nc;var sm=Ms,Ds=ir(ar()),rc=class os{constructor(t,n){this.type="application/octet-stream",this.params={},this.type=t,this.params=n}toString(){const t=[];for(const n in this.params){const r=this.params[n];t.push(`${n}=${r}`)}return[this.type,...t].join(";")}static create(t,n){return new os(t,n)}isIdentical(t){return this.type===t.type&&this.params===t.params}isEqual(t){return this.type===t.type}static fromString(t){const[n,...r]=t.split(";"),s={};for(const i of r){const[a,o]=i.split("=");s[a.trim()]=o.trim()}return new os(n,s)}},mr=ir(ar());async function im(e){const t=rc.fromString(e.type);switch(t.type){case"image/x-alpha8":{const n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,mr.default)(new Uint8Array(await e.arrayBuffer()),[r,n,1])}case"image/x-rgba8":{const n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,mr.default)(new Uint8Array(await e.arrayBuffer()),[r,n,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const n=await createImageBitmap(e),r=cm(n);return(0,mr.default)(new Uint8Array(r.data),[r.height,r.width,4])}default:throw new Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function am(e,t=.8,n="image/png"){const[r,s,i]=e.shape;switch(n){case"image/x-alpha8":case"image/x-rgba8":{const u=rc.create(n,{width:s.toString(),height:r.toString()});return new Blob([e.data],{type:u.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const u=new ImageData(new Uint8ClampedArray(e.data),s,r);var a=sc(u.width,u.height),o=a.getContext("2d");return o.putImageData(u,0,0),a.convertToBlob({quality:t,type:n})}default:throw new Error(`Invalid format: ${n}`)}}function om(e){return new RegExp("^(?:[a-z+]+:)?//","i").test(e)}function um(e,t){return om(e)?e:new URL(e,t).href}function cm(e){var t=sc(e.width,e.height),n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function lm(e){if(typeof Uint8Array<"u")return new Uint8Array(e);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(e);if(typeof Uint16Array<"u")return new Uint16Array(e);if(typeof Uint32Array<"u")return new Uint32Array(e);if(typeof Float32Array<"u")return new Float32Array(e);if(typeof Float64Array<"u")return new Float64Array(e);throw new Error("TypedArray not supported")}function xi(e,t,n,r=!1){const[s,i,a]=e.shape;let o=i/t,u=s/n;r&&(o=u=Math.max(o,u)>1?Math.max(o,u):Math.min(o,u));const c=(0,Ds.default)(lm(a*t*n),[n,t,a]);for(let l=0;l<n;l++)for(let d=0;d<t;d++){const p=d*o,f=l*u,h=Math.max(Math.floor(p),0),m=Math.min(Math.ceil(p),i-1),y=Math.max(Math.floor(f),0),_=Math.min(Math.ceil(f),s-1),g=p-h,v=f-y;for(let w=0;w<a;w++){const $=e.get(y,h,w),x=e.get(y,m,w),b=e.get(_,h,w),k=e.get(_,m,w),R=(1-g)*(1-v)*$+g*(1-v)*x+(1-g)*v*b+g*v*k;c.set(l,d,w,R)}}return c}function dm(e,t=[128,128,128],n=[256,256,256]){var r=e.data;const[s,i,a]=e.shape,o=s*i,u=new Float32Array(3*o);for(let c=0,l=0;c<r.length;c+=4,l+=1)u[l]=(r[c]-t[0])/n[0],u[l+o]=(r[c+1]-t[1])/n[1],u[l+o+o]=(r[c+2]-t[2])/n[2];return(0,Ds.default)(u,[1,3,s,i])}async function pm(e,t){return typeof e=="string"&&(e=um(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await im(e)),e}function fm(e){const t=new Uint8Array(e.data.length);for(let n=0;n<e.data.length;n++)t[n]=e.data[n]*255;return(0,Ds.default)(t,e.shape)}function sc(e,t){let n;if(typeof OffscreenCanvas<"u"?n=new OffscreenCanvas(e,t):n=document.createElement("canvas"),!n)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return n}var hm=ir(ar()),ic=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,mm=()=>navigator.hardwareConcurrency??4;async function Si(e,t){return URL.createObjectURL(await ac(e,t))}async function ac(e,t){const n=new URL("resources.json",t.publicPath),r=await fetch(n);if(!r.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const i=(await r.json())[e];if(!i)throw new Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);const a=i.chunks;let o=0;const u=a.map(async d=>{const p=d.offsets[1]-d.offsets[0],f=t.publicPath?new URL(d.name,t.publicPath).toString():d.name,m=await(await fetch(f,t.fetchArgs)).blob();if(p!==m.size)throw new Error(`Failed to fetch ${e} with size ${p} but got ${m.size}`);return t.progress&&(o+=p,t.progress(`fetch:${e}`,o,i.size)),m}),c=await Promise.all(u),l=new Blob(c,{type:i.mime});if(l.size!==i.size)throw new Error(`Failed to fetch ${e} with size ${i.size} but got ${l.size}`);return l}var Ut=null,oc=async e=>(Ut!==null||(e?Ut=(await vi(async()=>{const{default:t}=await import("./ort.webgpu.bundle.min-Bq5RLFba.js");return{default:t}},[])).default:Ut=(await vi(async()=>{const{default:t}=await import("./ort.bundle.min-fR5awfUc.js");return{default:t}},[])).default),Ut);async function gm(e,t){const n=t.device==="gpu"&&await ic(),r=n&&t.proxyToWorker,s=[n?"webgpu":"wasm"],i=await oc(n);t.debug&&(console.debug("	Using WebGPU:",n),console.debug("	Proxy to Worker:",r),i.env.debug=!0,i.env.logLevel="verbose"),i.env.wasm.numThreads=mm(),i.env.wasm.proxy=r;const a=n?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",o=await Si(`${a}.wasm`,t),u=await Si(`${a}.mjs`,t);i.env.wasm.wasmPaths={mjs:u,wasm:o},t.debug&&console.debug("ort.env.wasm:",i.env.wasm);const c={executionProviders:s,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await i.InferenceSession.create(e,c).catch(d=>{throw new Error(`Failed to create session: "${d}". Please check if the publicPath is set correctly.`)})}async function ym(e,t,n,r){const s=r.device==="gpu"&&await ic(),i=await oc(s),a={};for(const[c,l]of t)a[c]=new i.Tensor("float32",new Float32Array(l.data),l.shape);const o=await e.run(a,{}),u=[];for(const c of n){const l=o[c],d=l.dims,p=l.data,f=(0,hm.default)(p,d);u.push(f)}return u}var se;(function(e){e.assertEqual=s=>s;function t(s){}e.assertIs=t;function n(s){throw new Error}e.assertNever=n,e.arrayToEnum=s=>{const i={};for(const a of s)i[a]=a;return i},e.getValidEnumValues=s=>{const i=e.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of i)a[o]=s[o];return e.objectValues(a)},e.objectValues=s=>e.objectKeys(s).map(function(i){return s[i]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},e.find=(s,i)=>{for(const a of s)if(i(a))return a},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}e.joinValues=r,e.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(se||(se={}));var us;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(us||(us={}));var P=se.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Qe=e=>{switch(typeof e){case"undefined":return P.undefined;case"string":return P.string;case"number":return isNaN(e)?P.nan:P.number;case"boolean":return P.boolean;case"function":return P.function;case"bigint":return P.bigint;case"symbol":return P.symbol;case"object":return Array.isArray(e)?P.array:e===null?P.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?P.promise:typeof Map<"u"&&e instanceof Map?P.map:typeof Set<"u"&&e instanceof Set?P.set:typeof Date<"u"&&e instanceof Date?P.date:P.object;default:return P.unknown}},z=se.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),_m=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),Le=class uc extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}format(t){const n=t||function(i){return i.message},r={_errors:[]},s=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)r._errors.push(n(a));else{let o=r,u=0;for(;u<a.path.length;){const c=a.path[u];u===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(n(a))):o[c]=o[c]||{_errors:[]},o=o[c],u++}}};return s(this),r}static assert(t){if(!(t instanceof uc))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,se.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(t(s))):r.push(t(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};Le.create=e=>new Le(e);var zt=(e,t)=>{let n;switch(e.code){case z.invalid_type:e.received===P.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case z.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,se.jsonStringifyReplacer)}`;break;case z.unrecognized_keys:n=`Unrecognized key(s) in object: ${se.joinValues(e.keys,", ")}`;break;case z.invalid_union:n="Invalid input";break;case z.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${se.joinValues(e.options)}`;break;case z.invalid_enum_value:n=`Invalid enum value. Expected ${se.joinValues(e.options)}, received '${e.received}'`;break;case z.invalid_arguments:n="Invalid function arguments";break;case z.invalid_return_type:n="Invalid function return type";break;case z.invalid_date:n="Invalid date";break;case z.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:se.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case z.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case z.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case z.custom:n="Invalid input";break;case z.invalid_intersection_types:n="Intersection results could not be merged";break;case z.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case z.not_finite:n="Number must be finite";break;default:n=t.defaultError,se.assertNever(e)}return{message:n}},cc=zt;function vm(e){cc=e}function Vn(){return cc}var qn=e=>{const{data:t,path:n,errorMaps:r,issueData:s}=e,i=[...n,...s.path||[]],a={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let o="";const u=r.filter(c=>!!c).slice().reverse();for(const c of u)o=c(a,{data:t,defaultError:o}).message;return{...s,path:i,message:o}},wm=[];function B(e,t){const n=Vn(),r=qn({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===zt?void 0:zt].filter(s=>!!s)});e.common.issues.push(r)}var Ee=class lc{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const s of n){if(s.status==="aborted")return F;s.status==="dirty"&&t.dirty(),r.push(s.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const s of n){const i=await s.key,a=await s.value;r.push({key:i,value:a})}return lc.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const s of n){const{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return F;i.status==="dirty"&&t.dirty(),a.status==="dirty"&&t.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(r[i.value]=a.value)}return{status:t.value,value:r}}},F=Object.freeze({status:"aborted"}),xt=e=>({status:"dirty",value:e}),ke=e=>({status:"valid",value:e}),cs=e=>e.status==="aborted",ls=e=>e.status==="dirty",_t=e=>e.status==="valid",an=e=>typeof Promise<"u"&&e instanceof Promise;function Wn(e,t,n,r){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function dc(e,t,n,r,s){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}var U;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(U||(U={}));var Xt,Yt,Ze=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},ki=(e,t)=>{if(_t(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Le(e.common.issues);return this._error=n,this._error}}};function Y(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:s}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(a,o)=>{var u,c;const{message:l}=e;return a.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:(u=l??r)!==null&&u!==void 0?u:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(c=l??n)!==null&&c!==void 0?c:o.defaultError}},description:s}}var J=class{get description(){return this._def.description}_getType(e){return Qe(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Qe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ee,ctx:{common:e.parent.common,data:e.data,parsedType:Qe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(an(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const r={common:{issues:[],async:(n=t?.async)!==null&&n!==void 0?n:!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Qe(e)},s=this._parseSync({data:e,path:r.path,parent:r});return ki(r,s)}"~validate"(e){var t,n;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Qe(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:r});return _t(s)?{value:s.value}:{issues:r.common.issues}}catch(s){!((n=(t=s?.message)===null||t===void 0?void 0:t.toLowerCase())===null||n===void 0)&&n.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then(s=>_t(s)?{value:s.value}:{issues:r.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Qe(e)},r=this._parse({data:e,path:n.path,parent:n}),s=await(an(r)?r:Promise.resolve(r));return ki(n,s)}refine(e,t){const n=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const i=e(r),a=()=>s.addIssue({code:z.custom,...n(r)});return typeof Promise<"u"&&i instanceof Promise?i.then(o=>o?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t=="function"?t(n,r):t),!1))}_refinement(e){return new qe({schema:this,typeName:W.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return Ge.create(this,this._def)}nullable(){return at.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return vt.create(this)}promise(){return Rt.create(this,this._def)}or(e){return fn.create([this,e],this._def)}and(e){return hn.create(this,e,this._def)}transform(e){return new qe({...Y(this._def),schema:this,typeName:W.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new _n({...Y(this._def),innerType:this,defaultValue:t,typeName:W.ZodDefault})}brand(){return new Ns({typeName:W.ZodBranded,type:this,...Y(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new vn({...Y(this._def),innerType:this,catchValue:t,typeName:W.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return js.create(this,e)}readonly(){return wn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},$m=/^c[^\s-]{8,}$/i,bm=/^[0-9a-z]+$/,xm=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Sm=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,km=/^[a-z0-9_-]{21}$/i,Im=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Em=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Tm=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Cm="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",gr,zm=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Am=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Om=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Rm=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Bm=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Pm=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,pc="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Mm=new RegExp(`^${pc}$`);function fc(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function Dm(e){return new RegExp(`^${fc(e)}$`)}function hc(e){let t=`${pc}T${fc(e)}`;const n=[];return n.push(e.local?"Z?":"Z"),e.offset&&n.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${n.join("|")})`,new RegExp(`^${t}$`)}function Nm(e,t){return!!((t==="v4"||!t)&&zm.test(e)||(t==="v6"||!t)&&Om.test(e))}function jm(e,t){if(!Im.test(e))return!1;try{const[n]=e.split("."),r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||!s.typ||!s.alg||t&&s.alg!==t)}catch{return!1}}function Um(e,t){return!!((t==="v4"||!t)&&Am.test(e)||(t==="v6"||!t)&&Rm.test(e))}var At=class Qt extends J{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==P.string){const i=this._getOrReturnCtx(t);return B(i,{code:z.invalid_type,expected:P.string,received:i.parsedType}),F}const r=new Ee;let s;for(const i of this._def.checks)if(i.kind==="min")t.data.length<i.value&&(s=this._getOrReturnCtx(t,s),B(s,{code:z.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")t.data.length>i.value&&(s=this._getOrReturnCtx(t,s),B(s,{code:z.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const a=t.data.length>i.value,o=t.data.length<i.value;(a||o)&&(s=this._getOrReturnCtx(t,s),a?B(s,{code:z.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):o&&B(s,{code:z.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Tm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"email",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")gr||(gr=new RegExp(Cm,"u")),gr.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"emoji",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Sm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"uuid",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")km.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"nanoid",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")$m.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"cuid",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")bm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"cuid2",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")xm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"ulid",code:z.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),B(s,{validation:"url",code:z.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"regex",code:z.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?t.data=t.data.trim():i.kind==="includes"?t.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?t.data=t.data.toLowerCase():i.kind==="toUpperCase"?t.data=t.data.toUpperCase():i.kind==="startsWith"?t.data.startsWith(i.value)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?t.data.endsWith(i.value)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?hc(i).test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?Mm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?Dm(i).test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{code:z.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Em.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"duration",code:z.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?Nm(t.data,i.version)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"ip",code:z.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?jm(t.data,i.alg)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"jwt",code:z.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?Um(t.data,i.version)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"cidr",code:z.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?Bm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"base64",code:z.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?Pm.test(t.data)||(s=this._getOrReturnCtx(t,s),B(s,{validation:"base64url",code:z.invalid_string,message:i.message}),r.dirty()):se.assertNever(i);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(s=>t.test(s),{validation:n,code:z.invalid_string,...U.errToObj(r)})}_addCheck(t){return new Qt({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...U.errToObj(t)})}url(t){return this._addCheck({kind:"url",...U.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...U.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...U.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...U.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...U.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...U.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...U.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...U.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...U.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...U.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...U.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...U.errToObj(t)})}datetime(t){var n,r;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,local:(r=t?.local)!==null&&r!==void 0?r:!1,...U.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...U.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...U.errToObj(t)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...U.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...U.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...U.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...U.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...U.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...U.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...U.errToObj(n)})}nonempty(t){return this.min(1,U.errToObj(t))}trim(){return new Qt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Qt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Qt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}};At.create=e=>{var t;return new At({checks:[],typeName:W.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Y(e)})};function Lm(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,s=n>r?n:r,i=parseInt(e.toFixed(s).replace(".","")),a=parseInt(t.toFixed(s).replace(".",""));return i%a/Math.pow(10,s)}var on=class ds extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==P.number){const i=this._getOrReturnCtx(t);return B(i,{code:z.invalid_type,expected:P.number,received:i.parsedType}),F}let r;const s=new Ee;for(const i of this._def.checks)i.kind==="int"?se.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),B(r,{code:z.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?Lm(t.data,i.value)!==0&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),B(r,{code:z.not_finite,message:i.message}),s.dirty()):se.assertNever(i);return{status:s.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,U.toString(n))}gt(t,n){return this.setLimit("min",t,!1,U.toString(n))}lte(t,n){return this.setLimit("max",t,!0,U.toString(n))}lt(t,n){return this.setLimit("max",t,!1,U.toString(n))}setLimit(t,n,r,s){return new ds({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:U.toString(s)}]})}_addCheck(t){return new ds({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:U.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:U.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:U.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:U.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:U.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:U.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:U.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:U.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:U.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&se.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}};on.create=e=>new on({checks:[],typeName:W.ZodNumber,coerce:e?.coerce||!1,...Y(e)});var un=class ps extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==P.bigint)return this._getInvalidInput(t);let r;const s=new Ee;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?t.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),B(r,{code:z.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):se.assertNever(i);return{status:s.value,value:t.data}}_getInvalidInput(t){const n=this._getOrReturnCtx(t);return B(n,{code:z.invalid_type,expected:P.bigint,received:n.parsedType}),F}gte(t,n){return this.setLimit("min",t,!0,U.toString(n))}gt(t,n){return this.setLimit("min",t,!1,U.toString(n))}lte(t,n){return this.setLimit("max",t,!0,U.toString(n))}lt(t,n){return this.setLimit("max",t,!1,U.toString(n))}setLimit(t,n,r,s){return new ps({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:U.toString(s)}]})}_addCheck(t){return new ps({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:U.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:U.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:U.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:U.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:U.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}};un.create=e=>{var t;return new un({checks:[],typeName:W.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Y(e)})};var cn=class extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==P.boolean){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.boolean,received:n.parsedType}),F}return ke(e.data)}};cn.create=e=>new cn({typeName:W.ZodBoolean,coerce:e?.coerce||!1,...Y(e)});var ln=class mc extends J{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==P.date){const i=this._getOrReturnCtx(t);return B(i,{code:z.invalid_type,expected:P.date,received:i.parsedType}),F}if(isNaN(t.data.getTime())){const i=this._getOrReturnCtx(t);return B(i,{code:z.invalid_date}),F}const r=new Ee;let s;for(const i of this._def.checks)i.kind==="min"?t.data.getTime()<i.value&&(s=this._getOrReturnCtx(t,s),B(s,{code:z.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?t.data.getTime()>i.value&&(s=this._getOrReturnCtx(t,s),B(s,{code:z.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):se.assertNever(i);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new mc({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:U.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:U.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}};ln.create=e=>new ln({checks:[],coerce:e?.coerce||!1,typeName:W.ZodDate,...Y(e)});var Fn=class extends J{_parse(e){if(this._getType(e)!==P.symbol){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.symbol,received:n.parsedType}),F}return ke(e.data)}};Fn.create=e=>new Fn({typeName:W.ZodSymbol,...Y(e)});var dn=class extends J{_parse(e){if(this._getType(e)!==P.undefined){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.undefined,received:n.parsedType}),F}return ke(e.data)}};dn.create=e=>new dn({typeName:W.ZodUndefined,...Y(e)});var pn=class extends J{_parse(e){if(this._getType(e)!==P.null){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.null,received:n.parsedType}),F}return ke(e.data)}};pn.create=e=>new pn({typeName:W.ZodNull,...Y(e)});var Ot=class extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return ke(e.data)}};Ot.create=e=>new Ot({typeName:W.ZodAny,...Y(e)});var yt=class extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ke(e.data)}};yt.create=e=>new yt({typeName:W.ZodUnknown,...Y(e)});var Je=class extends J{_parse(e){const t=this._getOrReturnCtx(e);return B(t,{code:z.invalid_type,expected:P.never,received:t.parsedType}),F}};Je.create=e=>new Je({typeName:W.ZodNever,...Y(e)});var Gn=class extends J{_parse(e){if(this._getType(e)!==P.undefined){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.void,received:n.parsedType}),F}return ke(e.data)}};Gn.create=e=>new Gn({typeName:W.ZodVoid,...Y(e)});var vt=class Dn extends J{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),s=this._def;if(n.parsedType!==P.array)return B(n,{code:z.invalid_type,expected:P.array,received:n.parsedType}),F;if(s.exactLength!==null){const a=n.data.length>s.exactLength.value,o=n.data.length<s.exactLength.value;(a||o)&&(B(n,{code:a?z.too_big:z.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(B(n,{code:z.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(B(n,{code:z.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((a,o)=>s.type._parseAsync(new Ze(n,a,n.path,o)))).then(a=>Ee.mergeArray(r,a));const i=[...n.data].map((a,o)=>s.type._parseSync(new Ze(n,a,n.path,o)));return Ee.mergeArray(r,i)}get element(){return this._def.type}min(t,n){return new Dn({...this._def,minLength:{value:t,message:U.toString(n)}})}max(t,n){return new Dn({...this._def,maxLength:{value:t,message:U.toString(n)}})}length(t,n){return new Dn({...this._def,exactLength:{value:t,message:U.toString(n)}})}nonempty(t){return this.min(1,t)}};vt.create=(e,t)=>new vt({type:e,minLength:null,maxLength:null,exactLength:null,typeName:W.ZodArray,...Y(t)});function bt(e){if(e instanceof Oe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Ge.create(bt(r))}return new Oe({...e._def,shape:()=>t})}else return e instanceof vt?new vt({...e._def,type:bt(e.element)}):e instanceof Ge?Ge.create(bt(e.unwrap())):e instanceof at?at.create(bt(e.unwrap())):e instanceof it?it.create(e.items.map(t=>bt(t))):e}var Oe=class je extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=se.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==P.object){const c=this._getOrReturnCtx(t);return B(c,{code:z.invalid_type,expected:P.object,received:c.parsedType}),F}const{status:r,ctx:s}=this._processInputParams(t),{shape:i,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Je&&this._def.unknownKeys==="strip"))for(const c in s.data)a.includes(c)||o.push(c);const u=[];for(const c of a){const l=i[c],d=s.data[c];u.push({key:{status:"valid",value:c},value:l._parse(new Ze(s,d,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof Je){const c=this._def.unknownKeys;if(c==="passthrough")for(const l of o)u.push({key:{status:"valid",value:l},value:{status:"valid",value:s.data[l]}});else if(c==="strict")o.length>0&&(B(s,{code:z.unrecognized_keys,keys:o}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const l of o){const d=s.data[l];u.push({key:{status:"valid",value:l},value:c._parse(new Ze(s,d,s.path,l)),alwaysSet:l in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const c=[];for(const l of u){const d=await l.key,p=await l.value;c.push({key:d,value:p,alwaysSet:l.alwaysSet})}return c}).then(c=>Ee.mergeObjectSync(r,c)):Ee.mergeObjectSync(r,u)}get shape(){return this._def.shape()}strict(t){return U.errToObj,new je({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var s,i,a,o;const u=(a=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,n,r).message)!==null&&a!==void 0?a:r.defaultError;return n.code==="unrecognized_keys"?{message:(o=U.errToObj(t).message)!==null&&o!==void 0?o:u}:{message:u}}}:{}})}strip(){return new je({...this._def,unknownKeys:"strip"})}passthrough(){return new je({...this._def,unknownKeys:"passthrough"})}extend(t){return new je({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new je({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:W.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new je({...this._def,catchall:t})}pick(t){const n={};return se.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new je({...this._def,shape:()=>n})}omit(t){const n={};return se.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new je({...this._def,shape:()=>n})}deepPartial(){return bt(this)}partial(t){const n={};return se.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];t&&!t[r]?n[r]=s:n[r]=s.optional()}),new je({...this._def,shape:()=>n})}required(t){const n={};return se.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Ge;)i=i._def.innerType;n[r]=i}}),new je({...this._def,shape:()=>n})}keyof(){return $c(se.objectKeys(this.shape))}};Oe.create=(e,t)=>new Oe({shape:()=>e,unknownKeys:"strip",catchall:Je.create(),typeName:W.ZodObject,...Y(t)});Oe.strictCreate=(e,t)=>new Oe({shape:()=>e,unknownKeys:"strict",catchall:Je.create(),typeName:W.ZodObject,...Y(t)});Oe.lazycreate=(e,t)=>new Oe({shape:e,unknownKeys:"strip",catchall:Je.create(),typeName:W.ZodObject,...Y(t)});var fn=class extends J{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function r(s){for(const a of s)if(a.result.status==="valid")return a.result;for(const a of s)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;const i=s.map(a=>new Le(a.ctx.common.issues));return B(t,{code:z.invalid_union,unionErrors:i}),F}if(t.common.async)return Promise.all(n.map(async s=>{const i={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:i}),ctx:i}})).then(r);{let s;const i=[];for(const o of n){const u={...t,common:{...t.common,issues:[]},parent:null},c=o._parseSync({data:t.data,path:t.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!s&&(s={result:c,ctx:u}),u.common.issues.length&&i.push(u.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const a=i.map(o=>new Le(o));return B(t,{code:z.invalid_union,unionErrors:a}),F}}get options(){return this._def.options}};fn.create=(e,t)=>new fn({options:e,typeName:W.ZodUnion,...Y(t)});var Ye=e=>e instanceof mn?Ye(e.schema):e instanceof qe?Ye(e.innerType()):e instanceof gn?[e.value]:e instanceof xn?e.options:e instanceof yn?se.objectValues(e.enum):e instanceof _n?Ye(e._def.innerType):e instanceof dn?[void 0]:e instanceof pn?[null]:e instanceof Ge?[void 0,...Ye(e.unwrap())]:e instanceof at?[null,...Ye(e.unwrap())]:e instanceof Ns||e instanceof wn?Ye(e.unwrap()):e instanceof vn?Ye(e._def.innerType):[],gc=class yc extends J{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==P.object)return B(n,{code:z.invalid_type,expected:P.object,received:n.parsedType}),F;const r=this.discriminator,s=n.data[r],i=this.optionsMap.get(s);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(B(n,{code:z.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),F)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const s=new Map;for(const i of n){const a=Ye(i.shape[t]);if(!a.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const o of a){if(s.has(o))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);s.set(o,i)}}return new yc({typeName:W.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:s,...Y(r)})}};function fs(e,t){const n=Qe(e),r=Qe(t);if(e===t)return{valid:!0,data:e};if(n===P.object&&r===P.object){const s=se.objectKeys(t),i=se.objectKeys(e).filter(o=>s.indexOf(o)!==-1),a={...e,...t};for(const o of i){const u=fs(e[o],t[o]);if(!u.valid)return{valid:!1};a[o]=u.data}return{valid:!0,data:a}}else if(n===P.array&&r===P.array){if(e.length!==t.length)return{valid:!1};const s=[];for(let i=0;i<e.length;i++){const a=e[i],o=t[i],u=fs(a,o);if(!u.valid)return{valid:!1};s.push(u.data)}return{valid:!0,data:s}}else return n===P.date&&r===P.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var hn=class extends J{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=(s,i)=>{if(cs(s)||cs(i))return F;const a=fs(s.value,i.value);return a.valid?((ls(s)||ls(i))&&t.dirty(),{status:t.value,value:a.data}):(B(n,{code:z.invalid_intersection_types}),F)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([s,i])=>r(s,i)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};hn.create=(e,t,n)=>new hn({left:e,right:t,typeName:W.ZodIntersection,...Y(n)});var it=class _c extends J{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==P.array)return B(r,{code:z.invalid_type,expected:P.array,received:r.parsedType}),F;if(r.data.length<this._def.items.length)return B(r,{code:z.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),F;!this._def.rest&&r.data.length>this._def.items.length&&(B(r,{code:z.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((a,o)=>{const u=this._def.items[o]||this._def.rest;return u?u._parse(new Ze(r,a,r.path,o)):null}).filter(a=>!!a);return r.common.async?Promise.all(i).then(a=>Ee.mergeArray(n,a)):Ee.mergeArray(n,i)}get items(){return this._def.items}rest(t){return new _c({...this._def,rest:t})}};it.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new it({items:e,typeName:W.ZodTuple,rest:null,...Y(t)})};var vc=class hs extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==P.object)return B(r,{code:z.invalid_type,expected:P.object,received:r.parsedType}),F;const s=[],i=this._def.keyType,a=this._def.valueType;for(const o in r.data)s.push({key:i._parse(new Ze(r,o,r.path,o)),value:a._parse(new Ze(r,r.data[o],r.path,o)),alwaysSet:o in r.data});return r.common.async?Ee.mergeObjectAsync(n,s):Ee.mergeObjectSync(n,s)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof J?new hs({keyType:t,valueType:n,typeName:W.ZodRecord,...Y(r)}):new hs({keyType:At.create(),valueType:t,typeName:W.ZodRecord,...Y(n)})}},Zn=class extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==P.map)return B(n,{code:z.invalid_type,expected:P.map,received:n.parsedType}),F;const r=this._def.keyType,s=this._def.valueType,i=[...n.data.entries()].map(([a,o],u)=>({key:r._parse(new Ze(n,a,n.path,[u,"key"])),value:s._parse(new Ze(n,o,n.path,[u,"value"]))}));if(n.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const o of i){const u=await o.key,c=await o.value;if(u.status==="aborted"||c.status==="aborted")return F;(u.status==="dirty"||c.status==="dirty")&&t.dirty(),a.set(u.value,c.value)}return{status:t.value,value:a}})}else{const a=new Map;for(const o of i){const u=o.key,c=o.value;if(u.status==="aborted"||c.status==="aborted")return F;(u.status==="dirty"||c.status==="dirty")&&t.dirty(),a.set(u.value,c.value)}return{status:t.value,value:a}}}};Zn.create=(e,t,n)=>new Zn({valueType:t,keyType:e,typeName:W.ZodMap,...Y(n)});var Hn=class ms extends J{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==P.set)return B(r,{code:z.invalid_type,expected:P.set,received:r.parsedType}),F;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(B(r,{code:z.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(B(r,{code:z.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const i=this._def.valueType;function a(u){const c=new Set;for(const l of u){if(l.status==="aborted")return F;l.status==="dirty"&&n.dirty(),c.add(l.value)}return{status:n.value,value:c}}const o=[...r.data.values()].map((u,c)=>i._parse(new Ze(r,u,r.path,c)));return r.common.async?Promise.all(o).then(u=>a(u)):a(o)}min(t,n){return new ms({...this._def,minSize:{value:t,message:U.toString(n)}})}max(t,n){return new ms({...this._def,maxSize:{value:t,message:U.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}};Hn.create=(e,t)=>new Hn({valueType:e,minSize:null,maxSize:null,typeName:W.ZodSet,...Y(t)});var wc=class Nn extends J{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==P.function)return B(n,{code:z.invalid_type,expected:P.function,received:n.parsedType}),F;function r(o,u){return qn({data:o,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Vn(),zt].filter(c=>!!c),issueData:{code:z.invalid_arguments,argumentsError:u}})}function s(o,u){return qn({data:o,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Vn(),zt].filter(c=>!!c),issueData:{code:z.invalid_return_type,returnTypeError:u}})}const i={errorMap:n.common.contextualErrorMap},a=n.data;if(this._def.returns instanceof Rt){const o=this;return ke(async function(...u){const c=new Le([]),l=await o._def.args.parseAsync(u,i).catch(f=>{throw c.addIssue(r(u,f)),c}),d=await Reflect.apply(a,this,l);return await o._def.returns._def.type.parseAsync(d,i).catch(f=>{throw c.addIssue(s(d,f)),c})})}else{const o=this;return ke(function(...u){const c=o._def.args.safeParse(u,i);if(!c.success)throw new Le([r(u,c.error)]);const l=Reflect.apply(a,this,c.data),d=o._def.returns.safeParse(l,i);if(!d.success)throw new Le([s(l,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Nn({...this._def,args:it.create(t).rest(yt.create())})}returns(t){return new Nn({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Nn({args:t||it.create([]).rest(yt.create()),returns:n||yt.create(),typeName:W.ZodFunction,...Y(r)})}},mn=class extends J{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};mn.create=(e,t)=>new mn({getter:e,typeName:W.ZodLazy,...Y(t)});var gn=class extends J{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return B(t,{received:t.data,code:z.invalid_literal,expected:this._def.value}),F}return{status:"valid",value:e.data}}get value(){return this._def.value}};gn.create=(e,t)=>new gn({value:e,typeName:W.ZodLiteral,...Y(t)});function $c(e,t){return new xn({values:e,typeName:W.ZodEnum,...Y(t)})}var xn=class gs extends J{constructor(){super(...arguments),Xt.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return B(n,{expected:se.joinValues(r),received:n.parsedType,code:z.invalid_type}),F}if(Wn(this,Xt)||dc(this,Xt,new Set(this._def.values)),!Wn(this,Xt).has(t.data)){const n=this._getOrReturnCtx(t),r=this._def.values;return B(n,{received:n.data,code:z.invalid_enum_value,options:r}),F}return ke(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t,n=this._def){return gs.create(t,{...this._def,...n})}exclude(t,n=this._def){return gs.create(this.options.filter(r=>!t.includes(r)),{...this._def,...n})}};Xt=new WeakMap;xn.create=$c;var yn=class extends J{constructor(){super(...arguments),Yt.set(this,void 0)}_parse(e){const t=se.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==P.string&&n.parsedType!==P.number){const r=se.objectValues(t);return B(n,{expected:se.joinValues(r),received:n.parsedType,code:z.invalid_type}),F}if(Wn(this,Yt)||dc(this,Yt,new Set(se.getValidEnumValues(this._def.values))),!Wn(this,Yt).has(e.data)){const r=se.objectValues(t);return B(n,{received:n.data,code:z.invalid_enum_value,options:r}),F}return ke(e.data)}get enum(){return this._def.values}};Yt=new WeakMap;yn.create=(e,t)=>new yn({values:e,typeName:W.ZodNativeEnum,...Y(t)});var Rt=class extends J{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==P.promise&&t.common.async===!1)return B(t,{code:z.invalid_type,expected:P.promise,received:t.parsedType}),F;const n=t.parsedType===P.promise?t.data:Promise.resolve(t.data);return ke(n.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Rt.create=(e,t)=>new Rt({type:e,typeName:W.ZodPromise,...Y(t)});var qe=class extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===W.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:i=>{B(n,i),i.fatal?t.abort():t.dirty()},get path(){return n.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const i=r.transform(n.data,s);if(n.common.async)return Promise.resolve(i).then(async a=>{if(t.value==="aborted")return F;const o=await this._def.schema._parseAsync({data:a,path:n.path,parent:n});return o.status==="aborted"?F:o.status==="dirty"||t.value==="dirty"?xt(o.value):o});{if(t.value==="aborted")return F;const a=this._def.schema._parseSync({data:i,path:n.path,parent:n});return a.status==="aborted"?F:a.status==="dirty"||t.value==="dirty"?xt(a.value):a}}if(r.type==="refinement"){const i=a=>{const o=r.refinement(a,s);if(n.common.async)return Promise.resolve(o);if(o instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?F:(a.status==="dirty"&&t.dirty(),i(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>a.status==="aborted"?F:(a.status==="dirty"&&t.dirty(),i(a.value).then(()=>({status:t.value,value:a.value}))))}if(r.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!_t(i))return i;const a=r.transform(i.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>_t(i)?Promise.resolve(r.transform(i.value,s)).then(a=>({status:t.value,value:a})):i);se.assertNever(r)}};qe.create=(e,t,n)=>new qe({schema:e,typeName:W.ZodEffects,effect:t,...Y(n)});qe.createWithPreprocess=(e,t,n)=>new qe({schema:t,effect:{type:"preprocess",transform:e},typeName:W.ZodEffects,...Y(n)});var Ge=class extends J{_parse(e){return this._getType(e)===P.undefined?ke(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Ge.create=(e,t)=>new Ge({innerType:e,typeName:W.ZodOptional,...Y(t)});var at=class extends J{_parse(e){return this._getType(e)===P.null?ke(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};at.create=(e,t)=>new at({innerType:e,typeName:W.ZodNullable,...Y(t)});var _n=class extends J{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===P.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};_n.create=(e,t)=>new _n({innerType:e,typeName:W.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Y(t)});var vn=class extends J{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return an(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Le(n.common.issues)},input:n.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Le(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};vn.create=(e,t)=>new vn({innerType:e,typeName:W.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Y(t)});var Kn=class extends J{_parse(e){if(this._getType(e)!==P.nan){const n=this._getOrReturnCtx(e);return B(n,{code:z.invalid_type,expected:P.nan,received:n.parsedType}),F}return{status:"valid",value:e.data}}};Kn.create=e=>new Kn({typeName:W.ZodNaN,...Y(e)});var Vm=Symbol("zod_brand"),Ns=class extends J{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},js=class bc extends J{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?F:i.status==="dirty"?(n.dirty(),xt(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?F:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(t,n){return new bc({in:t,out:n,typeName:W.ZodPipeline})}},wn=class extends J{_parse(e){const t=this._def.innerType._parse(e),n=r=>(_t(r)&&(r.value=Object.freeze(r.value)),r);return an(t)?t.then(r=>n(r)):n(t)}unwrap(){return this._def.innerType}};wn.create=(e,t)=>new wn({innerType:e,typeName:W.ZodReadonly,...Y(t)});function Ii(e,t){const n=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof n=="string"?{message:n}:n}function xc(e,t={},n){return e?Ot.create().superRefine((r,s)=>{var i,a;const o=e(r);if(o instanceof Promise)return o.then(u=>{var c,l;if(!u){const d=Ii(t,r),p=(l=(c=d.fatal)!==null&&c!==void 0?c:n)!==null&&l!==void 0?l:!0;s.addIssue({code:"custom",...d,fatal:p})}});if(!o){const u=Ii(t,r),c=(a=(i=u.fatal)!==null&&i!==void 0?i:n)!==null&&a!==void 0?a:!0;s.addIssue({code:"custom",...u,fatal:c})}}):Ot.create()}var qm={object:Oe.lazycreate},W;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(W||(W={}));var Wm=(e,t={message:`Input not instance of ${e.name}`})=>xc(n=>n instanceof e,t),Sc=At.create,kc=on.create,Fm=Kn.create,Gm=un.create,Ic=cn.create,Zm=ln.create,Hm=Fn.create,Km=dn.create,Xm=pn.create,Ym=Ot.create,Qm=yt.create,Jm=Je.create,eg=Gn.create,tg=vt.create,ng=Oe.create,rg=Oe.strictCreate,sg=fn.create,ig=gc.create,ag=hn.create,og=it.create,ug=vc.create,cg=Zn.create,lg=Hn.create,dg=wc.create,pg=mn.create,fg=gn.create,hg=xn.create,mg=yn.create,gg=Rt.create,Ei=qe.create,yg=Ge.create,_g=at.create,vg=qe.createWithPreprocess,wg=js.create,$g=()=>Sc().optional(),bg=()=>kc().optional(),xg=()=>Ic().optional(),Sg={string:e=>At.create({...e,coerce:!0}),number:e=>on.create({...e,coerce:!0}),boolean:e=>cn.create({...e,coerce:!0}),bigint:e=>un.create({...e,coerce:!0}),date:e=>ln.create({...e,coerce:!0})},kg=F,ye=Object.freeze({__proto__:null,defaultErrorMap:zt,setErrorMap:vm,getErrorMap:Vn,makeIssue:qn,EMPTY_PATH:wm,addIssueToContext:B,ParseStatus:Ee,INVALID:F,DIRTY:xt,OK:ke,isAborted:cs,isDirty:ls,isValid:_t,isAsync:an,get util(){return se},get objectUtil(){return us},ZodParsedType:P,getParsedType:Qe,ZodType:J,datetimeRegex:hc,ZodString:At,ZodNumber:on,ZodBigInt:un,ZodBoolean:cn,ZodDate:ln,ZodSymbol:Fn,ZodUndefined:dn,ZodNull:pn,ZodAny:Ot,ZodUnknown:yt,ZodNever:Je,ZodVoid:Gn,ZodArray:vt,ZodObject:Oe,ZodUnion:fn,ZodDiscriminatedUnion:gc,ZodIntersection:hn,ZodTuple:it,ZodRecord:vc,ZodMap:Zn,ZodSet:Hn,ZodFunction:wc,ZodLazy:mn,ZodLiteral:gn,ZodEnum:xn,ZodNativeEnum:yn,ZodPromise:Rt,ZodEffects:qe,ZodTransformer:qe,ZodOptional:Ge,ZodNullable:at,ZodDefault:_n,ZodCatch:vn,ZodNaN:Kn,BRAND:Vm,ZodBranded:Ns,ZodPipeline:js,ZodReadonly:wn,custom:xc,Schema:J,ZodSchema:J,late:qm,get ZodFirstPartyTypeKind(){return W},coerce:Sg,any:Ym,array:tg,bigint:Gm,boolean:Ic,date:Zm,discriminatedUnion:ig,effect:Ei,enum:hg,function:dg,instanceof:Wm,intersection:ag,lazy:pg,literal:fg,map:cg,nan:Fm,nativeEnum:mg,never:Jm,null:Xm,nullable:_g,number:kc,object:ng,oboolean:xg,onumber:bg,optional:yg,ostring:$g,pipeline:wg,preprocess:vg,promise:gg,record:ug,set:lg,strictObject:rg,string:Sc,symbol:Hm,transformer:Ei,tuple:og,undefined:Km,union:sg,unknown:Qm,void:eg,NEVER:kg,ZodIssueCode:z,quotelessJson:_m,ZodError:Le}),Ti={name:"@imgly/background-removal",version:"1.7.0"},Ig=ye.object({publicPath:ye.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",Ti.name).replace("${PACKAGE_VERSION}",Ti.version)),debug:ye.boolean().default(!1).describe("Whether to enable debug logging."),rescale:ye.boolean().default(!0).describe("Whether to rescale the image."),device:ye.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:ye.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:ye.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:ye.function().args(ye.string(),ye.number(),ye.number()).returns(ye.void()).describe("Progress callback.").optional(),model:ye.preprocess(e=>{switch(e){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return e}},ye.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:ye.object({format:ye.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:ye.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log("Config:",e),e.debug&&!e.progress&&(e.progress=e.progress??((t,n,r)=>{console.debug(`Downloading ${t}: ${n} of ${r}`)}),crossOriginIsolated||e.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),e));function Eg(e){return Ig.parse(e??{})}var Tg=ir(ar());async function Cg(e){e.debug&&console.debug("Loading model...",e.model);const t=e.model,r=await(await ac(`/models/${t}`,e)).arrayBuffer();return await gm(r,e)}async function zg(e){e=Eg(e);const t=await Cg(e);return{config:e,session:{base:t}}}async function Ag(e,t,n){const[s,i,a]=e.shape,o=!1;let u=xi(e,1024,1024,o);const c=dm(u);let l=await ym(n.base,[["input",c]],["output"],t),d=(0,Tg.default)(l[0].data,[1024,1024,1]),p=fm(d);return t.rescale?(p=xi(p,i,s,o),[p,e]):[p,u]}var Og=sm(zg,e=>JSON.stringify(e));async function Rg(e,t){const{config:n,session:r}=await Og(t);n.progress&&n.progress("compute:decode",0,4);const s=await pm(e,n);n.progress?.("compute:inference",1,4);const[i,a]=await Ag(s,n,r);n.progress?.("compute:mask",2,4);const o=a,[u,c]=o.shape,l=u*c;for(let p=0;p<l;p+=1)o.data[4*p+3]=i.data[p];n.progress?.("compute:encode",3,4);const d=await am(o,n.output.quality,n.output.format);return n.progress?.("compute:encode",4,4),d}var Us=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Ec=Object.getOwnPropertyNames,Pg=Object.prototype.hasOwnProperty,ys=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),C=(e,t)=>function(){return e&&(t=(0,e[Ec(e)[0]])(e=0)),t},cr=(e,t)=>{for(var n in t)Us(e,n,{get:t[n],enumerable:!0})},Mg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ec(t))!Pg.call(e,s)&&s!==n&&Us(e,s,{get:()=>t[s],enumerable:!(r=Bg(t,s))||r.enumerable});return e},Ls=e=>Mg(Us({},"__esModule",{value:!0}),e),Lt,tt,St,Ci,Vs,qs=C({"common/dist/esm/backend-impl.js"(){Lt=new Map,tt=[],St=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){const r=Lt.get(e);if(r===void 0)Lt.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){const s=tt.indexOf(e);s!==-1&&tt.splice(s,1);for(let i=0;i<tt.length;i++)if(Lt.get(tt[i]).priority<=n){tt.splice(i,0,e);return}tt.push(e)}return}throw new TypeError("not a valid backend")},Ci=async e=>{const t=Lt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{const n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Vs=async e=>{const t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?tt:n;let s;const i=[],a=new Set;for(const u of r){const c=await Ci(u);typeof c=="string"?i.push({name:u,err:c}):(s||(s=c),s===c&&a.add(u))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(const{name:u,err:c}of i)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${c}`);const o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[s,new Proxy(e,{get:(u,c)=>c==="executionProviders"?o:Reflect.get(u,c)})]}}}),Dg=C({"common/dist/esm/backend.js"(){qs()}}),Tc,Ng=C({"common/dist/esm/version.js"(){Tc="1.20.1"}}),yr,Ae,Cc=C({"common/dist/esm/env-impl.js"(){Ng(),yr="warning",Ae={wasm:{},webgl:{},webgpu:{},versions:{common:Tc},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);yr=e}},get logLevel(){return yr}},Object.defineProperty(Ae,"logLevel",{enumerable:!0})}}),ce,jg=C({"common/dist/esm/env.js"(){Cc(),ce=Ae}}),zc,Ac,Ug=C({"common/dist/esm/tensor-conversion-impl.js"(){zc=(e,t)=>{const n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];const r=n.getContext("2d");if(r!=null){let s,i;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);const a=t?.format!==void 0?t.format:"RGB",o=t?.norm;let u,c;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?c=[0,0,0,0]:typeof o.bias=="number"?c=[o.bias,o.bias,o.bias,o.bias]:(c=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(c[3]=o.bias[3]));const l=i*s;let d=0,p=l,f=l*2,h=-1;a==="RGBA"?(d=0,p=l,f=l*2,h=l*3):a==="RGB"?(d=0,p=l,f=l*2):a==="RBG"&&(d=0,f=l,p=l*2);for(let m=0;m<i;m++)for(let y=0;y<s;y++){const _=(e.data[d++]-c[0])*u[0],g=(e.data[p++]-c[1])*u[1],v=(e.data[f++]-c[2])*u[2],w=h===-1?255:(e.data[h++]-c[3])*u[3];r.fillStyle="rgba("+_+","+g+","+v+","+w+")",r.fillRect(y,m,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ac=(e,t)=>{const n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d");let r;if(n!=null){let s,i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],a=e.dims[3]):(s=e.dims[3],i=e.dims[2],a=e.dims[1]);const o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm;let c,l;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?l=[0,0,0,0]:typeof u.bias=="number"?l=[u.bias,u.bias,u.bias,u.bias]:(l=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(l[3]=u.bias[3]));const d=i*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");const p=4;let f=0,h=1,m=2,y=3,_=0,g=d,v=d*2,w=-1;o==="RGBA"?(_=0,g=d,v=d*2,w=d*3):o==="RGB"?(_=0,g=d,v=d*2):o==="RBG"&&(_=0,v=d,g=d*2),r=n.createImageData(s,i);for(let $=0;$<i*s;f+=p,h+=p,m+=p,y+=p,$++)r.data[f]=(e.data[_++]-l[0])*c[0],r.data[h]=(e.data[g++]-l[1])*c[1],r.data[m]=(e.data[v++]-l[2])*c[2],r.data[y]=w===-1?255:(e.data[w++]-l[3])*c[3]}else throw new Error("Can not access image data");return r}}}),kn,Oc,Rc,Bc,Pc,Mc,Lg=C({"common/dist/esm/tensor-factory-impl.js"(){Ws(),kn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");const{height:n,width:r}=t,s=t.norm??{mean:255,bias:0};let i,a;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];const o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=n*r,l=u==="RGBA"?new Float32Array(c*4):new Float32Array(c*3);let d=4,p=0,f=1,h=2,m=3,y=0,_=c,g=c*2,v=-1;o==="RGB"&&(d=3,p=0,f=1,h=2,m=-1),u==="RGBA"?v=c*3:u==="RBG"?(y=0,g=c,_=c*2):u==="BGR"&&(g=0,_=c,y=c*2);for(let $=0;$<c;$++,p+=d,h+=d,f+=d,m+=d)l[y++]=(e[p]+a[0])/i[0],l[_++]=(e[f]+a[1])/i[1],l[g++]=(e[h]+a[2])/i[2],v!==-1&&m!==-1&&(l[v++]=(e[m]+a[3])/i[3]);return u==="RGBA"?new Te("float32",l,[1,4,n,r]):new Te("float32",l,[1,3,n,r])},Oc=async(e,t)=>{const n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string";let a,o=t??{};const u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(n){const l=u();l.width=e.width,l.height=e.height;const d=c(l);if(d!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=f}else o.tensorFormat="RGBA",o.height=p,o.width=f;d.drawImage(e,0,0),a=d.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let l,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,d=t.resizedWidth):(l=e.height,d=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=l,o.width=d,t!==void 0){const p=u();p.width=d,p.height=l;const f=c(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,d,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");const l=u();l.width=e.width,l.height=e.height;const d=c(l);if(d!=null){const p=e.height,f=e.width;return d.drawImage(e,0,0,f,p),a=d.getImageData(0,0,f,p).data,o.height=p,o.width=f,kn(a,o)}else throw new Error("Can not access image data")}else{if(i)return new Promise((l,d)=>{const p=u(),f=c(p);if(!e||!f)return d();const h=new Image;h.crossOrigin="Anonymous",h.src=e,h.onload=()=>{p.width=h.width,p.height=h.height,f.drawImage(h,0,0,p.width,p.height);const m=f.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,l(kn(m.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return kn(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Rc=(e,t)=>{const{width:n,height:r,download:s,dispose:i}=t,a=[1,r,n,4];return new Te({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:i})},Bc=(e,t)=>{const{dataType:n,dims:r,download:s,dispose:i}=t;return new Te({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:s,dispose:i})},Pc=(e,t)=>{const{dataType:n,dims:r,download:s,dispose:i}=t;return new Te({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:s,dispose:i})},Mc=(e,t,n)=>new Te({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}}),mt,Jt,_r,Dc,Vg=C({"common/dist/esm/tensor-impl-type-mapping.js"(){mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Jt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),_r=!1,Dc=()=>{if(!_r){_r=!0;const e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=typeof Float16Array<"u"&&Float16Array.from;e&&(mt.set("int64",BigInt64Array),Jt.set(BigInt64Array,"int64")),t&&(mt.set("uint64",BigUint64Array),Jt.set(BigUint64Array,"uint64")),n?(mt.set("float16",Float16Array),Jt.set(Float16Array,"float16")):mt.set("float16",Uint16Array)}}}}),Nc,jc,qg=C({"common/dist/esm/tensor-utils-impl.js"(){Ws(),Nc=e=>{let t=1;for(let n=0;n<e.length;n++){const r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},jc=(e,t)=>{switch(e.location){case"cpu":return new Te(e.type,e.data,t);case"cpu-pinned":return new Te({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Te({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Te({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Te({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}}),Te,Ws=C({"common/dist/esm/tensor-impl.js"(){Ug(),Lg(),Vg(),qg(),Te=class{constructor(e,t,n){Dc();let r,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,s=e.dims,e.location){case"cpu-pinned":{const a=mt.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{const u=mt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");const u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{const u=Jt.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");s=o,this.cpuData=a,this.dataLocation="cpu"}const i=Nc(s);if(this.cpuData&&i!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=s,this.size=i}static async fromImage(e,t){return Oc(e,t)}static fromTexture(e,t){return Rc(e,t)}static fromGpuBuffer(e,t){return Bc(e,t)}static fromMLTensor(e,t){return Pc(e,t)}static fromPinnedBuffer(e,t,n){return Mc(e,t,n)}toDataURL(e){return zc(this,e)}toImageData(e){return Ac(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;const t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return jc(this,e)}}}}),ve,Fs=C({"common/dist/esm/tensor.js"(){Ws(),ve=Te}}),Xn,vr,He,Ve,Uc=C({"common/dist/esm/trace.js"(){Cc(),Xn=(e,t)=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeStamp(`${e}::ORT::${t}`)},vr=(e,t)=>{const n=new Error().stack?.split(/\r\n|\r|\n/g)||[];let r=!1;for(let s=0;s<n.length;s++){if(r&&!n[s].includes("TRACE_FUNC")){let i=`FUNC_${e}::${n[s].trim().split(" ")[1]}`;t&&(i+=`::${t}`),Xn("CPU",i);return}n[s].includes("TRACE_FUNC")&&(r=!0)}},He=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||vr("BEGIN",e)},Ve=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||vr("END",e)}}}),Lc,Wg=C({"common/dist/esm/inference-session-impl.js"(){qs(),Fs(),Uc(),Lc=class Vc{constructor(t){this.handler=t}async run(t,n,r){He();const s={};let i={};if(typeof t!="object"||t===null||t instanceof ve||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof ve)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(const c of n){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);s[c]=null}if(typeof r=="object"&&r!==null)i=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let c=!1;const l=Object.getOwnPropertyNames(n);for(const d of this.outputNames)if(l.indexOf(d)!==-1){const p=n[d];(p===null||p instanceof ve)&&(c=!0,a=!1,s[d]=p)}if(c){if(typeof r=="object"&&r!==null)i=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else i=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(const c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(a)for(const c of this.outputNames)s[c]=null;const o=await this.handler.run(t,s,i),u={};for(const c in o)if(Object.hasOwnProperty.call(o,c)){const l=o[c];l instanceof ve?u[c]=l:u[c]=new ve(l.type,l.data,l.dims)}return Ve(),u}async release(){return this.handler.dispose()}static async create(t,n,r,s){He();let i,a={};if(typeof t=="string"){if(i=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){const l=t;let d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-d}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(l,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");const[o,u]=await Vs(a),c=await o.createInferenceSessionHandler(i,u);return Ve(),new Vc(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}}),Gs,Fg=C({"common/dist/esm/inference-session.js"(){Wg(),Gs=Lc}}),Gg=C({"common/dist/esm/tensor-conversion.js"(){}}),Zg=C({"common/dist/esm/tensor-factory.js"(){}}),Hg=C({"common/dist/esm/onnx-model.js"(){}}),Kg=C({"common/dist/esm/onnx-value.js"(){}}),zi,qc,Xg=C({"common/dist/esm/training-session-impl.js"(){qs(),Fs(),zi="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",qc=class Wc{constructor(t,n,r){this.handler=t,this.hasOptimizerModel=n,this.hasEvalModel=r}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,n){const r=t.evalModel||"",s=t.optimizerModel||"",i=n||{},[a,o]=await Vs(i);if(a.createTrainingSessionHandler){const u=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,r,s,o);return new Wc(u,!!t.optimizerModel,!!t.evalModel)}else throw new Error(zi)}typeNarrowingForRunStep(t,n,r,s,i){const a={};let o={};if(typeof r!="object"||r===null||r instanceof ve||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if(typeof s=="object"){if(s===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(s instanceof ve)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(s)){if(s.length===0)throw new TypeError("'fetches' cannot be an empty array.");u=!1;for(const c of s){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(n.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);a[c]=null}if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let c=!1;const l=Object.getOwnPropertyNames(s);for(const d of n)if(l.indexOf(d)!==-1){const p=s[d];(p===null||p instanceof ve)&&(c=!0,u=!1,a[d]=p)}if(c){if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else o=s}}else if(typeof s<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(const c of t)if(typeof r[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(u)for(const c of n)a[c]=null;return[a,o]}convertHandlerReturnTypeToMapOfTensors(t){const n={};for(const r in t)if(Object.hasOwnProperty.call(t,r)){const s=t[r];s instanceof ve?n[r]=s:n[r]=new ve(s.type,s.data,s.dims)}return n}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,n,r){const[s,i]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,n,r),a=await this.handler.runTrainStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,n,r){if(this.hasEvalModel){const[s,i]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,n,r),a=await this.handler.runEvalStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,n=!0){const r=await this.getParametersSize(n);if(t.length!==4*r)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,n)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}}),Fc,Yg=C({"common/dist/esm/training-session.js"(){Xg(),Fc=qc}}),Qg={};cr(Qg,{InferenceSession:()=>Gs,TRACE:()=>Xn,TRACE_FUNC_BEGIN:()=>He,TRACE_FUNC_END:()=>Ve,Tensor:()=>ve,TrainingSession:()=>Fc,env:()=>ce,registerBackend:()=>St});var We=C({"common/dist/esm/index.js"(){Dg(),jg(),Fg(),Fs(),Gg(),Zg(),Uc(),Hg(),Kg(),Yg()}}),Et,Zs=C({"web/lib/wasm/wasm-utils-env.ts"(){Et=!1}}),Gc={};cr(Gc,{default:()=>Zc});var wr,$r,Zc,Jg=C({"web/lib/wasm/proxy-worker/main.ts"(){Lp(),wt(),lr(),wr="ort-wasm-proxy-worker",$r=globalThis.self?.name===wr,$r&&(self.onmessage=e=>{const{type:t,in:n}=e.data;try{switch(t){case"init-wasm":Hs(n.wasm).then(()=>{li(n).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{const{epName:r,env:s}=n;di(s,r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})});break}case"copy-from":{const{buffer:r}=n,s=sr(r);postMessage({type:t,out:s});break}case"create":{const{model:r,options:s}=n;pi(r,s).then(i=>{postMessage({type:t,out:i})},i=>{postMessage({type:t,err:i})});break}case"release":fi(n),postMessage({type:t});break;case"run":{const{sessionId:r,inputIndices:s,inputs:i,outputIndices:a,options:o}=n;hi(r,s,i,a,new Array(a.length).fill(null),o).then(u=>{u.some(c=>c[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},gi([...i,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":mi(n),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}}),Zc=$r?null:e=>new Worker(e??Ue,{type:"module",name:wr})}}),Ue,Ai,br,Oi,Ri,xr,Bi,Sr,Hc,Kc,lr=C({"web/lib/wasm/wasm-utils-import.ts"(){Zs(),Ue=Et?void 0:import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),Ai=Et||typeof location>"u"?void 0:location.origin,br=(e,t)=>{try{const n=t??Ue;return(n?new URL(e,n):new URL(e)).origin===Ai}catch{return!1}},Oi=(e,t)=>{const n=t??Ue;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ri=(e,t)=>`${t??"./"}${e}`,xr=async e=>{const n=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},Bi=async e=>(await import(e)).default,Sr=(Jg(),Ls(Gc)).default,Hc=async()=>{if(!Ue)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(br(Ue))return[void 0,Sr()];const e=await xr(Ue);return[e,Sr(e)]},Kc=async(e,t,n)=>{{const r="ort-wasm-simd-threaded.jsep.mjs",s=e??Oi(r,t),i=!Et&&n&&s&&!br(s,t),a=i?await xr(s):s??Ri(r,t);return[i?a:void 0,await Bi(a)]}}}}),kr,In,Vt,Ir,Pi,Mi,Hs,ge,wt=C({"web/lib/wasm/wasm-factory.ts"(){lr(),In=!1,Vt=!1,Ir=!1,Pi=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Mi=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Hs=async e=>{if(In)return Promise.resolve();if(Vt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ir)throw new Error("previous call to 'initializeWebAssembly()' failed.");Vt=!0;const t=e.initTimeout;let n=e.numThreads;if(!Mi())throw new Error("WebAssembly SIMD is not supported in the current environment.");const r=Pi();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);const s=e.wasmPaths,i=typeof s=="string"?s:void 0,a=s?.mjs,o=a?.href??a,u=s?.wasm,c=u?.href??u,l=e.wasmBinary,[d,p]=await Kc(o,i,n>1);let f=!1;const h=[];if(t>0&&h.push(new Promise(m=>{setTimeout(()=>{f=!0,m()},t)})),h.push(new Promise((m,y)=>{const _={numThreads:n};l?_.wasmBinary=l:(c||i)&&(_.locateFile=(g,v)=>c??(i??v)+g),p(_).then(g=>{Vt=!1,In=!0,kr=g,m(),d&&URL.revokeObjectURL(d)},g=>{Vt=!1,Ir=!0,y(g)})})),await Promise.race(h),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ge=()=>{if(In&&kr)return kr;throw new Error("WebAssembly is not initialized yet.")}}}),_e,Yn,pe,Ks=C({"web/lib/wasm/wasm-utils.ts"(){wt(),_e=(e,t)=>{const n=ge(),r=n.lengthBytesUTF8(e)+1,s=n._malloc(r);return n.stringToUTF8(e,s,r),t.push(s),s},Yn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([s,i])=>{const a=t?t+s:s;if(typeof i=="object")Yn(i,a+".",n,r);else if(typeof i=="string"||typeof i=="number")r(a,i.toString());else if(typeof i=="boolean")r(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},pe=e=>{const t=ge(),n=t.stackSave();try{const r=t.stackAlloc(8);t._OrtGetLastError(r,r+4);const s=t.HEAP32[r/4],i=t.HEAPU32[r/4+1],a=i?t.UTF8ToString(i):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(n)}}}}),Xc,ey=C({"web/lib/wasm/run-options.ts"(){wt(),Ks(),Xc=e=>{const t=ge();let n=0;const r=[],s=e||{};try{if(e?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(s.terminate=!1);let i=0;return e?.tag!==void 0&&(i=_e(e.tag,r)),n=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),n===0&&pe("Can't create run options."),e?.extra!==void 0&&Yn(e.extra,"",new WeakSet,(a,o)=>{const u=_e(a,r),c=_e(o,r);t._OrtAddRunConfigEntry(n,u,c)!==0&&pe(`Can't set a run config entry: ${a} - ${o}.`)}),[n,r]}catch(i){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),i}}}}),Di,Ni,ji,Ui,Yc,ty=C({"web/lib/wasm/session-options.ts"(){wt(),Ks(),Di=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ni=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ji=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});const t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Ui=(e,t,n)=>{for(const r of t){let s=typeof r=="string"?r:r.name;switch(s){case"webnn":if(s="WEBNN",typeof r!="string"){const o=r?.deviceType;if(o){const u=_e("deviceType",n),c=_e(o,n);ge()._OrtAddSessionConfigEntry(e,u,c)!==0&&pe(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(s="JS",typeof r!="string"){const a=r;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);const o=_e("preferredLayout",n),u=_e(a.preferredLayout,n);ge()._OrtAddSessionConfigEntry(e,o,u)!==0&&pe(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}const i=_e(s,n);ge()._OrtAppendExecutionProvider(e,i)!==0&&pe(`Can't append execution provider: ${s}.`)}},Yc=e=>{const t=ge();let n=0;const r=[],s=e||{};ji(s);try{const i=Di(s.graphOptimizationLevel??"all"),a=Ni(s.executionMode??"sequential"),o=typeof s.logId=="string"?_e(s.logId,r):0,u=s.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);const c=s.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);const l=typeof s.optimizedModelFilePath=="string"?_e(s.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,o,u,c,l),n===0&&pe("Can't create session options."),s.executionProviders&&Ui(n,s.executionProviders,r),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);const d=_e("enableGraphCapture",r),p=_e(s.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,d,p)!==0&&pe(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(const[d,p]of Object.entries(s.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);const f=_e(d,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&pe(`Can't set a free dimension override: ${d} - ${p}.`)}return s.extra!==void 0&&Yn(s.extra,"",new WeakSet,(d,p)=>{const f=_e(d,r),h=_e(p,r);t._OrtAddSessionConfigEntry(n,f,h)!==0&&pe(`Can't set a session config entry: ${d} - ${p}.`)}),[n,r]}catch(i){throw n!==0&&t._OrtReleaseSessionOptions(n),r.forEach(a=>t._free(a)),i}}}}),en,gt,kt,Xs,Qn,Ys,Qs,_s,q=C({"web/lib/wasm/wasm-common.ts"(){en=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},gt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},kt=(e,t)=>{const n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return n>0?Math.ceil(r*n):void 0},Xs=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Qn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ys=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Qs=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",_s=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}}),Jn,Qc=C({"web/lib/wasm/wasm-utils-load-file.ts"(){Zs(),Jn=async e=>{if(typeof e=="string")if(Et)try{const{readFile:t}=ys("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){const{createReadStream:n}=ys("node:fs"),r=n(e),s=[];for await(const i of r)s.push(i);return new Uint8Array(Buffer.concat(s))}throw t}else{const t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);const n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);const s=t.body.getReader();let i;try{i=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){const u=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){const{done:o,value:u}=await s.read();if(o)break;const c=u.byteLength;new Uint8Array(i,a,c).set(u),a+=c}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}}),Li,Vi,qi,Wi,Js,Fi,oe,Ke=C({"web/lib/wasm/jsep/log.ts"(){q(),Li=["V","I","W","E","F"],Vi=(e,t)=>{console.log(`[${Li[e]},${new Date().toISOString()}]${t}`)},Js=(e,t)=>{qi=e,Wi=t},Fi=(e,t)=>{const n=Qn(e),r=Qn(qi);n>=r&&Vi(n,typeof t=="function"?t():t)},oe=(...e)=>{Wi&&Fi(...e)}}}),ei,Jc=C({"web/lib/wasm/jsep/tensor-view.ts"(){q(),ei=(e,t)=>new(Xs(t))(e)}}),ti=C({"web/lib/wasm/jsep/webgpu/types.ts"(){}}),Er,En,Tn,Gi,Zi,Tr,vs,Hi,el,ny=C({"web/lib/wasm/jsep/webgpu/gpu-data-manager.ts"(){Ke(),ti(),Er=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),En=[],Tn=e=>Math.ceil(e/16)*16,Gi=e=>{for(let t=0;t<En.length;t++){const n=En[t];if(e<=n)return n}return Math.ceil(e/16)*16},Zi=1,Tr=()=>Zi++,vs=async(e,t,n,r)=>{const s=Tn(n),i=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{const a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,i,0,s),e.flush(),await i.mapAsync(GPUMapMode.READ);const o=i.getMappedRange();if(r){const u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{i.destroy()}},Hi=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(const[t]of Er)En.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){const n=t.buffer,r=t.byteOffset,s=t.byteLength,i=Tn(s),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(a.originalSize!==s)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${s}`);const o=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,s)),o.unmap();const c=this.backend.getCommandEncoder();this.backend.endComputePass(),c.copyBufferToBuffer(o,0,a.gpuData.buffer,0,i),oe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(o)}memcpy(e,t){const n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");const r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");const s=Tn(n.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,s)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Tr();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),oe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){const n=Gi(e);let r;const s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||i){const u=(s?this.freeBuffers:this.freeUniformBuffers).get(n);u?u.length>0?r=u.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});const a={id:Tr(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:e}),oe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){const t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return oe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){const n=this.storageCache.get(e);if(!n)throw new Error("data does not exist");await vs(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){for(const e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(const e of this.buffersPending){const t=Er.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){const n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){const n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(const t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){const t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e))}},el=(...e)=>new Hi(...e)}}),Ki,ue,he=C({"web/lib/wasm/jsep/webgpu/attribute-with-cache-key.ts"(){Ki=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ue=e=>new Ki(e)}}),Xi,Bt,S,er,tl,nl,rl,G=C({"web/lib/wasm/jsep/util.ts"(){Xi=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bt=class{static calcShape(e,t,n=!1){const r=e.length,s=t.length;if(r===0)return t;if(s===0)return e;const i=Math.max(e.length,t.length),a=new Array(i);if(n){if(r<2||s<2)return;const o=Xi.calcMatMulShape([e[r-2],e[r-1]],[t[s-2],t[s-1]]);if(o===void 0)return;[a[i-2],a[i-1]]=o}for(let o=n?3:1;o<=i;o++){const u=r-o<0?1:e[r-o],c=s-o<0?1:t[s-o];if(u!==c&&u>1&&c>1)return;const l=Math.max(u,c);if(u&&c)a[i-o]=Math.max(u,c);else{if(l>1)return;a[i-o]=0}}return a}static isValidBroadcast(e,t){const n=e.length,r=t.length;if(n>r)return!1;for(let s=1;s<=n;s++)if(e[n-s]!==1&&e[n-s]!==t[r-s])return!1;return!0}},S=class jn{static size(t){return jn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){const r=t.length;if(r===0)return[];const s=new Array(r);let i=r-1;for(;i>=0;){if(t[i]%n===0){s[i]=t[i]/n;break}if(n%t[i]!==0)throw new Error("cannot convert shape");s[i]=1,n/=t[i],i--}for(i--;i>=0;i--)s[i]=t[i];return s}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let s=1;for(let i=n;i<r;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=t[i]}return s}static computeStrides(t){const n=t.length;if(n===0)return[];if(n===1)return[1];const r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let s=n-3;s>=0;--s)r[s]=r[s+1]*t[s+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){const r=t.length;return t.map((s,i)=>s+n[i]+n[i+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,s)=>r===n[s])}},er=class tn{static adjustPoolAttributes(t,n,r,s,i,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=r[o]||a[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,s,i,a,o){if(o){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)tn.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],s[u],i,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,s,i,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");const u=[n[0],n[1]];return tn.computeShapeHelper(t,n,u,r,s,i,a,o),u}static computeConvOutputShape(t,n,r,s,i,a,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");const u=[t[0],n[0]];return tn.computeShapeHelper(!1,t,u,r,s,i,a,o),u}static computeShapeHelper(t,n,r,s,i,a,o,u){if(t)for(let c=0;c<n.length-2;c++)r.push(1);else for(let c=0;c<n.length-2;c++)r.push(tn.adjustPadAndReturnShape(n[c+2],s[c],i[c],a[c],o,c,c+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,s,i,a,o,u){const c=r*(s-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[a]=0,i[o]=0,Math.floor((t-c)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{const d=((t+n-1)/n-1)*n+s-t;return i[a]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),i[o]=d-i[a],Math.floor((t+d-s)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[a]+i[o]-c)/n+1)}},tl=class{static getShapeOfGemmResult(e,t,n,r,s){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let i,a,o;t?(i=e[1],a=e[0]):(i=e[0],a=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(i<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(s&&!Bt.isValidBroadcast(s,[i,o]))throw new Error("gemm: invalid bias shape for broadcast");return[i,o,a]}},nl=-34028234663852886e22,rl=34028234663852886e22}}),Pt,Cn,me,be,M,fe,ws,It,ot,D,zn,E,N,ni,Yi,sl,$n,Z=C({"web/lib/wasm/jsep/webgpu/ops/common.ts"(){q(),G(),Pt=64,Cn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},me=(e,t=1)=>{const n=Cn(e,t);return typeof n=="string"?n:n[0]},be=(e,t=1)=>{const n=Cn(e,t);return typeof n=="string"?n:n[1]},M=(...e)=>{const t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:S.computeStrides(n)})}),t},fe=e=>e%4===0?4:e%2===0?2:1,ws=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,It=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,ot=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,D=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,zn=(e,t,n,r,s)=>{const i=typeof n=="number",a=i?n:n.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,c=Cn(t,s),l=typeof c=="string"?c:c[1],d=typeof c=="string"?c:c[0],p={indices:u,value:l,storage:d,tensor:t},f=A=>typeof A=="string"?A:`${A}u`,h={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=i?"uniforms.":"",y=`${m}${e}_shape`,_=`${m}${e}_strides`;let g="";for(let A=0;A<a-1;A++)g+=`
    let dim${A} = current / ${D(_,A,a)};
    let rest${A} = current % ${D(_,A,a)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;g+=`indices[${a-1}] = current;`;const v=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${g}
    return indices;
  }`,w=A=>(h.offsetToIndices=!0,a<2?A:`o2i_${e}(${A})`),$=[];if(a>=2)for(let A=a-1;A>=0;A--)$.push(`${D(_,A,a)} * (indices[${A}])`);const x=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${$.join("+")};
  }`,b=A=>(h.indicesToOffset=!0,a<2?A:`i2o_${e}(${A})`),k=(...A)=>a===0?"0u":`${p.indices}(${A.map(f).join(",")})`,R=(A,j)=>a<2?`${A}`:`${D(A,j,a)}`,O=(A,j,ae)=>a<2?`${A}=${ae};`:`${D(A,j,a)}=${ae};`,T={},ne=(A,j)=>{h.broadcastedIndicesToOffset=!0;const ae=`${j.name}broadcastedIndicesTo${e}Offset`;if(ae in T)return`${ae}(${A})`;const Re=[];for(let we=a-1;we>=0;we--){const Xe=j.indicesGet("outputIndices",we+j.rank-a);Re.push(`${R(_,we)} * (${Xe} % ${R(y,we)})`)}return T[ae]=`fn ${ae}(outputIndices: ${j.type.indices}) -> u32 {
             return ${Re.length>0?Re.join("+"):"0u"};
           }`,`${ae}(${A})`},ee=(A,j)=>(()=>{if(p.storage===p.value)return`${e}[${A}]=${j};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${j}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),Q=A=>(()=>{if(p.storage===p.value)return`${e}[${A}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${A}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${A}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),de=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${l} {
    return ${Q(`i2o_${e}(indices)`)};
  }`,V=a<2?"":(()=>{const A=o.map(ae=>`d${ae}: u32`).join(", "),j=o.map(ae=>`d${ae}`).join(", ");return`
  fn get_${e}(${A}) -> ${l} {
    return get_${e}ByIndices(${k(j)});
  }`})(),ie=(...A)=>{if(A.length!==a)throw new Error(`indices length must be ${a}`);const j=A.map(f).join(",");return a===0?Q("0u"):a===1?Q(j[0]):(h.get=!0,h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}(${j})`)},le=A=>a<2?Q(A):(h.getByIndices=!0,h.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${l}) {
    ${ee(`i2o_${e}(indices)`,"value")}
  }`,te=a<2?"":(()=>{const A=o.map(ae=>`d${ae}: u32`).join(", "),j=o.map(ae=>`d${ae}`).join(", ");return`
  fn set_${e}(${A}, value: ${l}) {
    set_${e}ByIndices(${k(j)}, value);
  }`})();return{impl:()=>{const A=[];let j=!1;return h.offsetToIndices&&(A.push(v),j=!0),h.indicesToOffset&&(A.push(x),j=!0),h.broadcastedIndicesToOffset&&(Object.values(T).forEach(ae=>A.push(ae)),j=!0),h.set&&(A.push(te),j=!0),h.setByIndices&&(A.push(L),j=!0),h.get&&(A.push(V),j=!0),h.getByIndices&&(A.push(de),j=!0),!i&&j&&A.unshift(`const ${y} = ${p.indices}(${n.join(",")});`,`const ${_} = ${p.indices}(${S.computeStrides(n).join(",")});`),A.join(`
`)},type:p,offsetToIndices:w,indicesToOffset:b,broadcastedIndicesToOffset:ne,indices:k,indicesGet:R,indicesSet:O,set:(...A)=>{if(A.length!==a+1)throw new Error(`indices length must be ${a}`);const j=A[a];if(typeof j!="string")throw new Error("value must be string");const ae=A.slice(0,a).map(f).join(",");return a===0?ee("0u",j):a===1?ee(ae[0],j):(h.set=!0,h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}(${ae}, ${j})`)},setByOffset:ee,setByIndices:(A,j)=>a<2?ee(A,j):(h.setByIndices=!0,h.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${j});`),get:ie,getByOffset:Q,getByIndices:le,usage:r,name:e,strides:_,shape:y,rank:a}},E=(e,t,n,r=1)=>zn(e,t,n,"input",r),N=(e,t,n,r=1)=>zn(e,t,n,"output",r),ni=(e,t,n,r=1)=>zn(e,t,n,"internal",r),Yi=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pt){const t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);const s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);const n=e.usage==="input"?"read":"read_write",r=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";const e=[];for(const{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{const s=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;const e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},sl=(e,t)=>new Yi(e,t),$n=(e,t)=>{const n=e.length,r=[];for(let s=0;s<n;s++){const i=n-1-s,a=e[i]||1;(t[t.length-1-s]||1)>1&&a===1&&r.unshift(i)}return r}}}),Qi,Cr,Ji,ea,ta,Ce,il,al,dt=C({"web/lib/wasm/jsep/webgpu/ops/transpose.ts"(){q(),G(),he(),Z(),Qi=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},Cr=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,Ji=(e,t)=>S.sortBasedOnPerm(e,Cr(e.length,t)),ea=(e,t,n,r)=>{let s=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let i=0;i<t;++i)s+=n.indicesSet("a",e[i],`i[${i}]`);return s+="return a;}"},ta=(e,t)=>{const n=[],r=[];for(let s=0;s<e.length;++s)e[s]!==1&&n.push(e[s]),e[t[s]]!==1&&r.push(t[s]);return{newShape:n,newPerm:r}},Ce=(e,t)=>{const n=e.dataType,r=e.dims.length,s=Cr(r,t),i=Ji(e.dims,s),{newShape:a,newPerm:o}=ta(e.dims,s),u=S.areEqual(o,[2,3,1]),c=S.areEqual(o,[3,1,2]),l=a.length===2&&o[0]>o[1]||u||c;let d=l?a:e.dims,p=i;l&&(d=u?[a[0],a[1]*a[2]]:c?[a[0]*a[1],a[2]]:a,p=[d[1],d[0]]);const f=E("a",n,d.length),h=N("output",n,p.length),m=16;let y;return l?y=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(f,h)}
  var<workgroup> tile : array<array<${h.type.value}, ${m+1}>, ${m}>;
  ${_.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${f.getByIndices(`${f.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${h.setByIndices(`${h.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:y=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(f,h)}

  ${ea(s,r,f,h)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${h.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${h.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`,{name:l?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{const _=S.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:l?{x:Math.ceil(p[1]/m),y:Math.ceil(p[0]/m)}:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...M(d,p)]}},getShaderSource:y}},il=(e,t)=>{Qi(e.inputs),e.compute(Ce(e.inputs[0],t.perm))},al=e=>ue({perm:e.perm})}}),na,ra,sa,ia,aa,oa,ua,ca,la,da,Be,ol,ul,cl,ll,dl,pl,fl,hl,ml,gl,ry=C({"web/lib/wasm/jsep/webgpu/ops/reduce-shared.ts"(){q(),G(),Z(),ri(),dt(),na={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ra={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},sa={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ia={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},aa=(e,t)=>{const n=[];for(let r=t-e;r<t;++r)n.push(r);return n},oa=(e,t)=>{const n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);const s=t.map(i=>e[i]);return[n,s]},ua=(e,t)=>{const n=e.length+t.length,r=[];let s=0;for(let i=0;i<n;i++)t.indexOf(i)===-1?r.push(e[s++]):r.push(1);return r},ca=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},la=(e,t)=>{const n=[];if(!ca(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},da=(e,t,n,r,s,i,a)=>{const o=n[0].dims,u=S.size(i),c=S.size(a),l=E("_A",n[0].dataType,o),d=N("output",s,i),p=32,f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `;return{name:e,shaderCache:t,getShaderSource:m=>`
        ${m.registerUniform("reduceSize","u32").declareVariables(l,d)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${m.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${sa[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${l.getByOffset("offset + k")});
           bestValue = ${na[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ra[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${ia[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:u},programUniforms:[{type:12,data:c}]})}},Be=(e,t,n,r)=>{const s=e.inputs.length===1?n:$s(e.inputs,n);let i=s.axes;i.length===0&&!s.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((f,h)=>h));const a=S.normalizeAxes(i,e.inputs[0].dims.length);let o=a,u=e.inputs[0];const c=la(o,e.inputs[0].dims.length);c.length>0&&(u=e.compute(Ce(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],o=aa(o.length,u.dims.length));const[l,d]=oa(u.dims,o);let p=l;s.keepDims&&(p=ua(l,a)),e.compute(da(t,{hint:s.cacheKey,inputDependencies:["type"]},[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},ol=(e,t)=>{Be(e,"ReduceMeanShared",t,"mean")},ul=(e,t)=>{Be(e,"ReduceL1Shared",t,"l1")},cl=(e,t)=>{Be(e,"ReduceL2Shared",t,"l2")},ll=(e,t)=>{Be(e,"ReduceLogSumExpShared",t,"logSumExp")},dl=(e,t)=>{Be(e,"ReduceMaxShared",t,"max")},pl=(e,t)=>{Be(e,"ReduceMinShared",t,"min")},fl=(e,t)=>{Be(e,"ReduceProdShared",t,"prod")},hl=(e,t)=>{Be(e,"ReduceSumShared",t,"sum")},ml=(e,t)=>{Be(e,"ReduceSumSquareShared",t,"sumSquare")},gl=(e,t)=>{Be(e,"ReduceLogSumShared",t,"logSum")}}}),Pe,pa,tr,$s,Me,fa,ha,ma,ga,ya,_a,va,wa,$a,ba,De,yl,_l,vl,wl,$l,bl,xl,Sl,kl,Il,ri=C({"web/lib/wasm/jsep/webgpu/ops/reduce.ts"(){q(),G(),he(),Z(),ry(),Pe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},pa=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],tr=(e,t,n,r,s,i,a=!1,o=!1)=>{const u=[],c=n[0].dims,l=c.length,d=S.normalizeAxes(s,l),p=!o&&d.length===0;c.forEach((y,_)=>{p||d.indexOf(_)>=0?a&&u.push(1):u.push(y)});const f=u.length,h=S.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{const _=[],g=E("_A",n[0].dataType,l),v=N("output",i,f),w=r(g,v,d);let $=w[2];for(let x=0,b=0;x<l;x++)p||d.indexOf(x)>=0?(a&&b++,$=`for(var j${x}: u32 = 0; j${x} < ${c[x]}; j${x}++) {
                  ${w[2].includes("last_index")?`let last_index = j${x};`:""}
                  ${g.indicesSet("input_indices",x,`j${x}`)}
                  ${$}
                }`):(_.push(`${g.indicesSet("input_indices",x,v.indicesGet("output_indices",b))};`),b++);return`

        ${y.registerUniform("output_size","u32").declareVariables(g,v)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${g.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${w[0]}       // init ops for reduce max/min
          ${w[1]}
          ${$}
          ${w[3]}
          ${w.length===4?v.setByOffset("global_idx","value"):w.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...M(c,u)]})}},$s=(e,t)=>{const n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),ue({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Me=(e,t,n,r)=>{const s=e.inputs,i=s.length===1?n:$s(s,n);e.compute(tr(t,{hint:i.cacheKey,inputDependencies:["rank"]},[s[0]],i.noopWithEmptyAxes&&i.axes.length===0?pa:r,i.axes,s[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},fa=(e,t)=>{Pe(e.inputs),Me(e,"ReduceLogSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ha=(e,t)=>{Pe(e.inputs),Me(e,"ReduceL1",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ma=(e,t)=>{Pe(e.inputs),Me(e,"ReduceL2",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ga=(e,t)=>{Pe(e.inputs),Me(e,"ReduceLogSumExp",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ya=(e,t)=>{Pe(e.inputs),Me(e,"ReduceMax",t,(r,s,i)=>{const a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},_a=(e,t)=>{Pe(e.inputs),Me(e,"ReduceMean",t,(r,s,i)=>{let a=1;for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${a});`]})},va=(e,t)=>{Pe(e.inputs),Me(e,"ReduceMin",t,(r,s,i)=>{const a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},wa=(e,t)=>{Pe(e.inputs),Me(e,"ReduceProd",t,(r,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},$a=(e,t)=>{Pe(e.inputs),Me(e,"ReduceSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ba=(e,t)=>{Pe(e.inputs),Me(e,"ReduceSumSquare",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},De=(e,t,n)=>{if(t.length===0)return n;let r=1,s=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?r*=e[i]:s*=e[i];return s<32&&r>1024},yl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_a(e,t):ol(e,t)},_l=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ha(e,t):ul(e,t)},vl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ma(e,t):cl(e,t)},wl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ga(e,t):ll(e,t)},$l=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ya(e,t):dl(e,t)},bl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?va(e,t):pl(e,t)},xl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wa(e,t):fl(e,t)},Sl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$a(e,t):hl(e,t)},kl=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ba(e,t):ml(e,t)},Il=(e,t)=>{De(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fa(e,t):gl(e,t)}}}),zr,El,Tl,bs,sy=C({"web/lib/wasm/jsep/webgpu/ops/argminmax.ts"(){q(),he(),ri(),zr=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},El=(e,t)=>{zr(e.inputs);const n=(r,s,i)=>{const a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(tr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Tl=(e,t)=>{zr(e.inputs);const n=(r,s,i)=>{const a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(tr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},bs=e=>ue(e)}}),xa,Sa,ka,Ia,bn,Ea,Cl,si=C({"web/lib/wasm/jsep/webgpu/ops/attention.ts"(){q(),G(),ti(),Z(),xa=(e,t)=>{const n=e[0],r=e[1],s=e[2],i=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');const u=n.dims[0],c=n.dims[1],l=n.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==l)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=s.dims[0]/3,p=d,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(const v of t.qkvHiddenSizes)if(v%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}const h=c;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==d+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(m=a.dims[3])}const y=h+m,_=-1,g=0;if(i)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:h,totalSequenceLength:y,maxSequenceLength:_,inputHiddenSize:l,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Sa=(e,t,n)=>{const r=fe(n);let s=64;const i=n/r;i<s&&(s=32);const a=Math.ceil(n/r/s),o=[{type:1,data:1/n},{type:12,data:i},{type:12,data:a}],u=me(e.dataType,r),c=be(1,r),l=["type"],d=p=>{const f=N("x",e.dataType,e.dims,r),h=be(e.dataType),m=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${s}>;
  var<workgroup> thread_sum: array<f32, ${s}>;
  ${p.registerUniforms(m).declareVariables(f)}
  ${p.mainStart([s,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${s}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${c}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${c}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(r){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${r}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${s}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${c}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${c}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(r){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${r}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${s}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${f.type.value}(${h}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${c}(x[offset + i]);
        x[offset + i] = ${f.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${s};${u};${r}`,inputDependencies:l},getShaderSource:d,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:o})}},ka=(e,t,n,r,s,i,a,o)=>{const u=o+i.kvSequenceLength,c=[i.batchSize,i.numHeads,i.sequenceLength,u],l=i.kvNumHeads===void 0&&e>1&&r,d=l?[i.batchSize,i.numHeads,u,i.headSize]:void 0,p=a.scale===0?1/Math.sqrt(i.headSize):a.scale,f=fe(i.headSize),h=i.headSize/f,m=12,y={x:Math.ceil(u/m),y:Math.ceil(i.sequenceLength/m),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:h},{type:12,data:u},{type:12,data:i.numHeads},{type:1,data:p},{type:12,data:o},{type:12,data:i.kvSequenceLength}],g=l&&r&&S.size(r.dims)>0,v=["type","type"];g&&v.push("type"),s&&v.push("type");const w=[{dims:c,dataType:t.dataType,gpuDataType:0}];l&&w.push({dims:d,dataType:t.dataType,gpuDataType:0});const $=x=>{const b=E("q",t.dataType,t.dims,f),k=E("key",n.dataType,n.dims,f),R=[b,k];if(g){const Q=E("past_key",r.dataType,r.dims,f);R.push(Q)}s&&R.push(E("attention_bias",s.dataType,s.dims));const O=N("output",t.dataType,c),T=[O];l&&T.push(N("present_key",t.dataType,d,f));const ne=be(1,f),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${b.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${b.type.storage}, ${m*m}>;
  ${x.registerUniforms(ee).declareVariables(...R,...T)}
  ${x.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${g&&l?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${l?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${g&&l?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${l?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(f){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${f}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${f};${s!==void 0};${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:w,dispatchGroup:y,programUniforms:_}),getShaderSource:$}},Ia=(e,t,n,r,s,i)=>{const a=i+s.kvSequenceLength,o=s.nReps?s.nReps:1,u=s.vHiddenSize*o,c=s.kvNumHeads==null&&e>1&&r,l=c?[s.batchSize,s.numHeads,a,s.headSize]:void 0,d=[s.batchSize,s.sequenceLength,u],p=12,f={x:Math.ceil(s.vHeadSize/p),y:Math.ceil(s.sequenceLength/p),z:s.batchSize*s.numHeads},h=[{type:12,data:s.sequenceLength},{type:12,data:a},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:u},{type:12,data:i},{type:12,data:s.kvSequenceLength}],m=c&&r&&S.size(r.dims)>0,y=["type","type"];m&&y.push("type");const _=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&_.push({dims:l,dataType:t.dataType,gpuDataType:0});const g=v=>{const w=E("probs",t.dataType,t.dims),$=E("v",n.dataType,n.dims),x=[w,$];m&&x.push(E("past_value",r.dataType,r.dims));const k=[N("output",t.dataType,d)];c&&k.push(N("present_value",t.dataType,l));const R=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${p}u;
  var<workgroup> tileQ: array<${w.type.value}, ${p*p}>;
  var<workgroup> tileK: array<${w.type.value}, ${p*p}>;
  ${v.registerUniforms(R).declareVariables(...x,...k)}
  ${v.mainStart([p,p,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${m&&c?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${c?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${w.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&c?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${c?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:y},getRunData:()=>({outputs:_,dispatchGroup:f,programUniforms:h}),getShaderSource:g}},bn=(e,t,n,r,s,i,a,o,u,c,l)=>{const d=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),p=c.kvNumHeads!==void 0||d>1?c.pastSequenceLength:0,f=p+c.kvSequenceLength,h=u&&S.size(u.dims)>0?u:void 0,m=[t,n];c.kvNumHeads===void 0&&d>1&&a&&S.size(a.dims)>0&&m.push(a),h&&m.push(h);const y=e.compute(ka(d,t,n,a,h,c,l,p),{inputs:m,outputs:c.kvNumHeads===void 0&&d>1?[-1,1]:[-1]})[0];e.compute(Sa(y,c.batchSize*c.numHeads*c.sequenceLength,f),{inputs:[y],outputs:[]});const _=[y,r];c.kvNumHeads===void 0&&d>1&&o&&S.size(o.dims)>0&&_.push(o),e.compute(Ia(d,y,r,o,c,p),{inputs:_,outputs:c.kvNumHeads===void 0&&d>1?[0,2]:[0]})},Ea=(e,t)=>{const n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,s=t.inputHiddenSize,i=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:s},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],l=d=>{const p=N("output_q",u[0].dataType,n),f=N("output_k",u[0].dataType,n),h=N("output_v",u[0].dataType,n),m=E("input",u[0].dataType,u[0].dims),y=E("weight",u[1].dataType,u[1].dims),_=E("bias",u[2].dataType,u[2].dims),g=m.type.storage,v=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${g}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${g}, ${a*a}>;
  var<workgroup> tileWeightK: array<${g}, ${a*a}>;
  var<workgroup> tileWeightV: array<${g}, ${a*a}>;
  ${d.registerUniforms(v).declareVariables(m,y,_,p,f,h)}
  ${d.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:l},{inputs:u,outputs:[-1,-1,-1]})},Cl=(e,t)=>{const n=xa(e.inputs,t),[r,s,i]=Ea(e,n);return bn(e,r,s,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n,t)}}}),Ta,Ca,za,zl,iy=C({"web/lib/wasm/jsep/webgpu/ops/batch-norm.ts"(){We(),q(),G(),he(),Z(),Ta=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");const n=(r,s,i)=>{const a=s.length;if(a!==r.length)throw new Error(`${i}: num dimensions != ${a}`);s.forEach((o,u)=>{if(o!==r[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){const r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ca=(e,t)=>{const{epsilon:n,spatial:r,format:s}=t,i=e[0].dims,a=r?fe(i[i.length-1]):1,o=s==="NHWC"&&i.length>1?a:1,u=S.size(i)/a,c=r,l=c?i.length:i,d=E("x",e[0].dataType,e[0].dims,a),p=E("scale",e[1].dataType,e[1].dims,o),f=E("bias",e[2].dataType,e[2].dims,o),h=E("inputMean",e[3].dataType,e[3].dims,o),m=E("inputVar",e[4].dataType,e[4].dims,o),y=N("y",e[0].dataType,l,a),_=()=>{let v="";if(r)v=`let cOffset = ${i.length===1?"0u":s==="NHWC"?`outputIndices[${i.length-1}] / ${a}`:"outputIndices[1]"};`;else if(s==="NCHW")v=`
            ${y.indicesSet("outputIndices","0","0")}
            let cOffset = ${y.indicesToOffset("outputIndices")};`;else{v=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let w=1;w<p.rank;w++)v+=`cIndices[${w}] = outputIndices[${w}];`;v+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return v},g=v=>`
  const epsilon = ${n};
  ${v.registerUniform("outputSize","u32").declareVariables(d,p,f,h,m,y)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${y.offsetToIndices(`global_idx * ${a}`)};
    ${_()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${h.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${y.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c?[{type:12,data:u},...M(i)]:[{type:12,data:u}]})}},za=e=>ue(e),zl=(e,t)=>{const{inputs:n,outputCount:r}=e,s=za({...t,outputCount:r});if(ce.webgpu.validateInputContent&&Ta(n,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ca(n,s))}}}),Aa,Oa,Al,ay=C({"web/lib/wasm/jsep/webgpu/ops/bias-add.ts"(){G(),Z(),Aa=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Oa=e=>{const t=e[0].dims,n=e[0].dims[2],r=S.size(t)/4,s=e[0].dataType,i=E("input",s,t,4),a=E("bias",s,[n],4),o=E("residual",s,t,4),u=N("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(i,a,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${i.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Al=e=>{Aa(e.inputs),e.compute(Oa(e.inputs))}}}),Ra,re,Ol,Rl,Bl,Pl,Ml,Dl,Nl,jl,Ul,Ba,Ll,Vl,ql,Wl,nn,Fl,Un,Gl,Zl,Hl,Kl,Xl,Yl,Ql,Jl,ed,td,nd,rd,sd,id,ad,od,Ar,ud,xs,Ss,cd,ld,dd,Pa,Ma,pd,ii=C({"web/lib/wasm/jsep/webgpu/ops/unary-op.ts"(){q(),G(),he(),Z(),Ra=(e,t,n,r,s,i,a)=>{const o=Math.ceil(t/4);let u="";typeof s=="string"?u=`${s}(a)`:u=s("a");const c=E("inputData",n,[o],4),l=N("outputData",r,[o],4),d=[{name:"vec_size",type:"u32"}];return a&&d.push(...a),`
      ${e.registerUniforms(d).declareVariables(c,l)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${l.setByOffset("global_idx",u)}
  }`},re=(e,t,n,r,s,i=e.dataType,a,o)=>{const u=[{type:12,data:Math.ceil(S.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:c=>Ra(c,S.size(e.dims),e.dataType,i,n,r,o),getRunData:c=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(S.size(c[0].dims)/64/4)},programUniforms:u})}},Ol=e=>{e.compute(re(e.inputs[0],"Abs","abs"))},Rl=e=>{e.compute(re(e.inputs[0],"Acos","acos"))},Bl=e=>{e.compute(re(e.inputs[0],"Acosh","acosh"))},Pl=e=>{e.compute(re(e.inputs[0],"Asin","asin"))},Ml=e=>{e.compute(re(e.inputs[0],"Asinh","asinh"))},Dl=e=>{e.compute(re(e.inputs[0],"Atan","atan"))},Nl=e=>{e.compute(re(e.inputs[0],"Atanh","atanh"))},jl=e=>ue(e),Ul=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Ba=e=>{let t,n;const r=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ue({min:t,max:n})},Ll=(e,t)=>{const n=t||Ba(e.inputs),r=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Vl=e=>{e.compute(re(e.inputs[0],"Ceil","ceil"))},ql=e=>{e.compute(re(e.inputs[0],"Cos","cos"))},Wl=e=>{e.compute(re(e.inputs[0],"Cosh","cosh"))},nn=e=>ue(e),Fl=(e,t)=>{const n=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Un=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Gl=e=>{const t=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Un(t)))},Zl=e=>{e.compute(re(e.inputs[0],"Exp","exp"))},Hl=e=>{e.compute(re(e.inputs[0],"Floor","floor"))},Kl=e=>{const t=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Un(t)))},Xl=(e,t)=>{const n=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Yl=e=>{e.compute(re(e.inputs[0],"Not",t=>`!${t}`))},Ql=e=>{e.compute(re(e.inputs[0],"Neg",t=>`-${t}`))},Jl=e=>{e.compute(re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ed=e=>{const t=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},td=e=>{e.compute(re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},nd=e=>ue(e),rd=(e,t)=>{const n=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},sd=e=>{e.compute(re(e.inputs[0],"Sin","sin"))},id=e=>{e.compute(re(e.inputs[0],"Sinh","sinh"))},ad=e=>{e.compute(re(e.inputs[0],"Sqrt","sqrt"))},od=e=>{e.compute(re(e.inputs[0],"Tan","tan"))},Ar=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ud=e=>{e.compute(re(e.inputs[0],"Tanh",Ar))},xs=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ar("v")};
}
`,Ss=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,cd=e=>{const t=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"FastGelu",Ss,xs(t),void 0,e.inputs[0].dataType))},ld=(e,t)=>{const n=be(e.inputs[0].dataType);return e.compute(re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},dd=e=>{e.compute(re(e.inputs[0],"Log","log"))},Pa=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Ma=e=>`quick_gelu_impl(${e})`,pd=(e,t)=>{const n=be(e.inputs[0].dataType);e.compute(re(e.inputs[0],"QuickGelu",Ma,Pa(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}}),Da,Na,fd,oy=C({"web/lib/wasm/jsep/webgpu/ops/bias-split-gelu.ts"(){G(),Z(),ii(),Da=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Na=e=>{const t=e[0].dims.slice();t[2]=t[2]/2;const n=E("input",e[0].dataType,e[0].dims,4),r=E("bias",e[0].dataType,[e[0].dims[2]],4),s=N("output",e[0].dataType,t,4),i=S.size(t)/4,a=me(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(n,r,s)}

  ${Un(a)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fd=e=>{Da(e.inputs),e.compute(Na(e.inputs))}}}),ja,Ua,Ne,hd,md,gd,yd,_d,vd,wd,$d,bd,xd,uy=C({"web/lib/wasm/jsep/webgpu/ops/binary-op.ts"(){q(),G(),Z(),ja=(e,t,n,r,s,i,a,o,u,c,l,d)=>{let p,f;typeof o=="string"?p=f=(g,v)=>`${o}((${g}),(${v}))`:typeof o=="function"?p=f=o:(p=o.scalar,f=o.vector);const h=N("outputData",l,r.length,4),m=E("aData",u,t.length,4),y=E("bData",c,n.length,4);let _;if(s)if(i){const g=S.size(t)===1,v=S.size(n)===1,w=t.length>0&&t[t.length-1]%4===0,$=n.length>0&&n[n.length-1]%4===0;g||v?_=h.setByOffset("global_idx",f(g?`${m.type.value}(${m.getByOffset("0")}.x)`:m.getByOffset("global_idx"),v?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):_=`
            let outputIndices = ${h.offsetToIndices("global_idx * 4u")};
            let offsetA = ${m.broadcastedIndicesToOffset("outputIndices",h)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",h)};
            ${h.setByOffset("global_idx",f(a||w?m.getByOffset("offsetA / 4u"):`${m.type.value}(${m.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||$?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=h.setByOffset("global_idx",f(m.getByOffset("global_idx"),y.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");const g=(v,w,$="")=>{const x=`aData[indexA${w}][componentA${w}]`,b=`bData[indexB${w}][componentB${w}]`;return`
            let outputIndices${w} = ${h.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offsetA${w} = ${m.broadcastedIndicesToOffset(`outputIndices${w}`,h)};
            let offsetB${w} = ${y.broadcastedIndicesToOffset(`outputIndices${w}`,h)};
            let indexA${w} = offsetA${w} / 4u;
            let indexB${w} = offsetB${w} / 4u;
            let componentA${w} = offsetA${w} % 4u;
            let componentB${w} = offsetB${w} % 4u;
            ${v}[${w}] = ${$}(${p(x,b)});
          `};l===9?_=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,y,h)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Ua=(e,t,n,r,s,i,a=n.dataType)=>{const o=!S.areEqual(n.dims,r.dims);let u=n.dims,c=S.size(n.dims),l=!1,d=!1;const p=[o];if(o){const f=Bt.calcShape(n.dims,r.dims,!1);f?u=f:(console.error("override"),u=n.dims),c=S.size(u);const h=S.size(n.dims)===1,m=S.size(r.dims)===1,y=n.dims.length>0&&n.dims[n.dims.length-1]%4===0,_=r.dims.length>0&&r.dims[r.dims.length-1]%4===0;p.push(h),p.push(m),p.push(y),p.push(_);let g=1;for(let v=1;v<u.length;v++){const w=n.dims[n.dims.length-v]??1,$=r.dims[r.dims.length-v]??1;if(w===$)g*=w;else break}g%4===0?(d=!0,l=!0):(h||m||y||_)&&(l=!0)}else l=!0;return p.push(l),{name:e,shaderCache:{hint:t+p.map(f=>f.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:f=>ja(f,n.dims,r.dims,u,l,o,d,s,n.dataType,r.dataType,a,i),getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(S.size(u)/4)},...M(n.dims,r.dims,u)]})}},Ne=(e,t,n,r,s,i)=>{e.compute(Ua(t,s??"",e.inputs[0],e.inputs[1],n,r,i))},hd=e=>{Ne(e,"Add",(t,n)=>`${t}+${n}`)},md=e=>{Ne(e,"Div",(t,n)=>`${t}/${n}`)},gd=e=>{Ne(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},yd=e=>{Ne(e,"Mul",(t,n)=>`${t}*${n}`)},_d=e=>{const t=E("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ne(e,"Pow",{scalar:(r,s)=>`pow_custom(${r},${s})`,vector:(r,s)=>`pow_vector_custom(${r},${s})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},vd=e=>{Ne(e,"Sub",(t,n)=>`${t}-${n}`)},wd=e=>{Ne(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},$d=e=>{Ne(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},bd=e=>{Ne(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},xd=e=>{Ne(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}}),La,Va,qa,Wa,Sd,kd,cy=C({"web/lib/wasm/jsep/webgpu/ops/concat.ts"(){q(),G(),he(),Z(),La=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");const n=0,r=e[n],s=r.dataType,i=r.dims.length;e.forEach((a,o)=>{if(o!==n){if(a.dataType!==s)throw new Error("input tensors should be one type");if(a.dims.length!==i)throw new Error("input tensors should have the same shape");a.dims.forEach((u,c)=>{if(c!==t&&u!==r.dims[c])throw new Error("non concat dimensions must match")})}})},Va=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,qa=(e,t)=>{const n=e.length,r=[];for(let s=0;s<n;++s){const i=t.setByOffset("global_idx",e[s].getByIndices("indices"));n===1?r.push(i):s===0?r.push(`if (inputIndex == ${s}u) { ${i} }`):s===n-1?r.push(`else { ${i} }`):r.push(`else if (inputIndex == ${s}) { ${i} }`)}return r.join(`
`)},Wa=(e,t,n,r)=>{const s=S.size(n),i=new Array(e.length),a=new Array(e.length);let o=0;const u=[],c=[],l=[{type:12,data:s}];for(let m=0;m<e.length;++m)o+=e[m].dims[t],i[m]=o,c.push(e[m].dims.length),a[m]=E(`input${m}`,r,c[m]),u.push("rank"),l.push({type:12,data:i[m]});for(let m=0;m<e.length;++m)l.push(...M(e[m].dims));l.push(...M(n));const d=N("output",r,n.length),p=d.indicesGet("indices",t),f=Array.from(Array(i.length).keys()).map(m=>`uniforms.sizeInConcatAxis${m}`).join(","),h=m=>`

  ${(()=>{m.registerUniform("outputSize","u32");for(let y=0;y<e.length;y++)m.registerUniform(`sizeInConcatAxis${y}`,"u32");return m.declareVariables(...a,d)})()}

  ${Va(i.length,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${qa(a,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:h}},Sd=(e,t)=>{const n=e.inputs,r=n[0].dims,s=S.normalizeAxis(t.axis,r.length);La(n,s);const i=r.slice();i[s]=n.reduce((o,u)=>o+(u.dims.length>s?u.dims[s]:0),0);const a=n.filter(o=>S.size(o.dims)>0);e.compute(Wa(a,s,i,n[0].dataType),{inputs:a})},kd=e=>ue({axis:e.axis})}}),ut,ct,lt,ai,pt=C({"web/lib/wasm/jsep/webgpu/ops/fuse-utils.ts"(){q(),G(),ut=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},lt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ai=e=>{const t=e?.activation||"";if(t==="HardSigmoid"){const[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){const[n,r]=e?.activation_params||[nl,rl];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){const[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}}),xe,oi,dr=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/activation_util.ts"(){xe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},oi=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}}),ui,Id=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_util.ts"(){ui=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}}),Fa,Ga,nr,Or,Za,rr,Ha,ci,pr=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/matmul_packed_webgpu.ts"(){q(),G(),Z(),pt(),dr(),Fa=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ga=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,nr=(e,t,n="f32",r,s=!1,i=32,a=!1,o=32)=>{const u=t[1]*e[1],c=t[0]*e[0],l=s?u:i,d=s?i:u,p=l/t[0],f=i/t[1];if(!((s&&p===4&&e[1]===4||!s&&(p===3||p===4))&&l%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${l} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${l/p}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${c/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Fa(s,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ga(s,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Or=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Za=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",rr=(e,t,n="f32",r,s=!1,i=32,a=!1,o=32,u=!1)=>{const c=e[1]*t[1],l=e[0]*t[0],d=s?c:i,p=s?i:c;if(!(p%t[1]===0&&d%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);const f=p/t[1],h=d/t[0],m=i/t[1],y=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${l};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Or(s,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${l}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${h};
let tileRowB = i32(localId.y) * ${m};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${h}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Or(s,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Za(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${l}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${y}
  }
`},Ha=(e,t,n,r,s,i=!1)=>{const[a,o,u]=s,[c,l,d,p]=r,f=$n(a,u),h=$n(o,u),m=me(r[0].type.tensor),y=()=>{const v=l.rank,w=c.rank;let $=`var aIndices: ${l.type.indices};`;for(let x=v-2-1,b=w-1;x>=0;x--,b--)$+=`
aIndices[${x}] = ${w>1?`batchIndices[${b}]`:"batchIndices"};`;return f.forEach(x=>{$+=`
aIndices[${x}] = 0;`}),$+=`
aIndices[${v-2}] = u32(row);
                   aIndices[${v-1}] = u32(colIn);`,$},_=()=>{const v=d.rank,w=c.rank;let $=`var bIndices: ${d.type.indices};`;for(let x=v-2-1,b=w-1;x>=0;x--,b--)$+=`
bIndices[${x}] = ${w>1?`batchIndices[${b}]`:"batchIndices"};`;return h.forEach(x=>{$+=`
bIndices[${x}] = 0;`}),$+=`
bIndices[${v-2}] = u32(row);
                   bIndices[${v-1}] = u32(colIn);`,$};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${c.type.indices}) -> ${xe(e,m)} {
      var value = ${xe(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${y()}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${c.type.indices}) -> ${xe(e,m)} {
      var value = ${xe(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${_()}
        value = ${d.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${xe(e,m)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${xe(e,m)}(bias[row])`};`:""}
        ${n}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ci=(e,t,n,r,s=!1,i)=>{const a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),c=o.slice(0,-2),l=r?r.slice(0,-2):n.slice(0,-2),d=S.size(l),p=a[a.length-2],f=a[a.length-1],h=o[o.length-1],m=f%4===0&&h%4===0,y=p<=8?[4,1,1]:[4,4,1],_=[8,8,1],g=[Math.ceil(h/_[0]/y[0]),Math.ceil(p/_[1]/y[1]),Math.ceil(d/_[2]/y[2])],v=m?4:1,w=[...u,p,f/v],$=w.length,x=[...c,f,h/v],b=x.length,k=[d,p,h/v],R=[{type:6,data:p},{type:6,data:h},{type:6,data:f}];ct(t,R),R.push(...M(l,w,x));const O=["rank","rank"],T=e.length>2;T&&(R.push(...M(e[2].dims)),O.push("rank")),R.push(...M(k));const ne=ee=>{const Q=l.length,de=ni("batchDims",e[0].dataType,Q,1),V=me(e[0].dataType),ie=E("a",e[0].dataType,$,v),le=E("b",e[1].dataType,b,v),L=N("result",e[0].dataType,k.length,v),te=[ie,le];if(T){const j=s?v:1;te.push(E("bias",e[2].dataType,e[2].dims.length,j))}const H=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];lt(t,H);const K=me(L.type.tensor),X=ut(t,L.type.value,K),A=Ha(v,T,X,[de,ie,le,L],[u,c,l],s);return`
  ${ee.registerUniforms(H).registerInternalVariables(de).declareVariables(...te,L)}
  ${A}
  ${m?nr(y,_,V,de):rr(y,_,V,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${y};${t.activation};${m};${s}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:R}),getShaderSource:ne}}}}),Ka,Ed,ly=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv2d_mm_webgpu.ts"(){q(),Ke(),Z(),pt(),dr(),Id(),pr(),Ka=(e,t,n,r,s=!1,i,a=4,o=4,u=4,c="f32")=>{const l=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},d=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,h=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",m=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",y=e?"row":"col",_=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${y} / outWidth;
    let outCol = ${y} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${xe(a,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${h} && xCol >= 0 && xCol < ${m}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${l(a)}
    }
    return resData;`,v=e?t&&r?`
    let col = colIn * ${a};
    ${g}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${xe(a,c)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${g}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${xe(a,c)}(0.0);`,w=`${d(o)}`,$=xe(u,c),x=xe(e?a:o,c),b=xe(e?o:a,c),k=ut(i,$,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${x} {
      ${e?v:w}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${b} {
      ${e?w:v}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${$}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${oi(s)}
      ${k}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ed=(e,t,n,r,s,i,a,o,u)=>{const c=t.format==="NHWC",l=c?e[0].dims[3]:e[0].dims[1],d=n[0],p=c?n[2]:n[3],f=c?n[1]:n[2],h=c?n[3]:n[1],m=c&&(l%4===0||l%3===0)&&h%4===0,y=c?h:p*f,_=c?p*f:h,g=[8,8,1],v=r<=8?[4,1,1]:[4,4,1],w=[Math.ceil(y/g[0]/v[0]),Math.ceil(_/g[1]/v[1]),Math.ceil(d/g[2]/v[2])];oe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${w}`);const $=m?c&&l%4!==0?3:4:1,x=g[1]*v[1],b=g[0]*v[0],k=Math.max(g[0]*$,g[1]),R=r%x===0,O=s%b===0,T=i%k===0,ne=m?[$,4,4]:[1,1,1],ee=[{type:6,data:r},{type:6,data:s},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ct(t,ee),ee.push(...M(e[0].dims,e[1].dims));const Q=["rank","rank"];a&&(ee.push(...M(e[2].dims)),Q.push("rank")),ee.push(...M(n));const de=V=>{const ie=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];lt(t,ie);const le=m?4:1,L=me(e[0].dataType);let te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${m?`vec4<${L}>`:L}) {
        result[flatIndex] = ${m?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${m?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${m?"/ 4":""}, value);
      }`;const H=E("x",e[0].dataType,e[0].dims.length,$===3?1:$),K=E("w",e[1].dataType,e[1].dims.length,le),X=[H,K],A=N("result",e[0].dataType,n.length,le);if(a){const j=E("bias",e[2].dataType,e[2].dims.length,le);X.push(j),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${m?`vec4<${L}>`:L} {
          return bias[coords.${c?"w":"y"}${m?"/ 4":""}];
        }`}return`
        ${ui("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(ie).declareVariables(...X,A)}
        ${te}
        ${Ka(c,R,O,T,a,t,ne[0],ne[1],ne[2],L)}
        ${m?nr(v,g,L,void 0,!c,k):rr(v,g,L,void 0,!c,k,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${$};${m};${R};${O};${T};${x};${b};${k}`,inputDependencies:Q},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:ee}),getShaderSource:de}}}}),Xa,Rr,qt,Ya,Br,Qa,Td,Cd,dy=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv3d_naive_webgpu.ts"(){q(),Ke(),G(),Z(),pt(),dr(),Xa=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Rr=e=>typeof e=="number"?[e,e,e]:e,qt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ya=(e,t,n,r=1)=>{const s=qt(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)},Br=(e,t,n,r,s)=>{s==null&&(s=Ya(e,t[0],r[0]));const i=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*s>=t[a]&&(i[a]=Math.trunc((e[a]-t[a]+2*s)/r[a]+1));return i},Qa=(e,t,n,r,s,i,a,o,u,c)=>{let l,d,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){l={top:e,bottom:e,left:e,right:e,front:e,back:e};const h=Br([t,n,r,1],[o,u,c],1,[s,i,a],e);d=h[0],p=h[1],f=h[2]}else if(Array.isArray(e)){if(!e.every((m,y,_)=>m===_[0]))throw Error(`Unsupported padding parameter: ${e}`);l={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};const h=Br([t,n,r,1],[o,u,c],1,[s,i,a],e[0]);d=h[0],p=h[1],f=h[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/s),p=Math.ceil(n/i),f=Math.ceil(r/a);const h=(d-1)*s+o-t,m=(p-1)*i+u-n,y=(f-1)*a+c-r,_=Math.floor(h/2),g=h-_,v=Math.floor(m/2),w=m-v,$=Math.floor(y/2),x=y-$;l={top:v,bottom:w,left:$,right:x,front:_,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outDepth:d,outHeight:p,outWidth:f}},Td=(e,t,n,r,s,i=!1,a="channelsLast")=>{let o,u,c,l,d;if(a==="channelsLast")[o,u,c,l,d]=e;else if(a==="channelsFirst")[o,d,u,c,l]=e;else throw new Error(`Unknown dataFormat ${a}`);const[p,,f,h,m]=t,[y,_,g]=Rr(n),[v,w,$]=Rr(r),x=qt(f,v),b=qt(h,w),k=qt(m,$),{padInfo:R,outDepth:O,outHeight:T,outWidth:ne}=Qa(s,u,c,l,y,_,g,x,b,k),ee=i?p*d:p;let Q=[0,0,0,0,0];return a==="channelsFirst"?Q=[o,ee,O,T,ne]:a==="channelsLast"&&(Q=[o,O,T,ne,ee]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:c,inWidth:l,inChannels:d,outDepth:O,outHeight:T,outWidth:ne,outChannels:ee,padInfo:R,strideDepth:y,strideHeight:_,strideWidth:g,filterDepth:f,filterHeight:h,filterWidth:m,effectiveFilterDepth:x,effectiveFilterHeight:b,effectiveFilterWidth:k,dilationDepth:v,dilationHeight:w,dilationWidth:$,inShape:e,outShape:Q,filterShape:t}},Cd=(e,t,n,r,s,i)=>{const a=i==="channelsLast";a?e[0].dims[3]:e[0].dims[1];const o=[64,1,1],u={x:n.map((y,_)=>_)},c=[Math.ceil(Xa(u.x.map(y=>n[y]))/o[0]),1,1];oe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);const l=1,p=[{type:12,data:S.size(n)},{type:12,data:r},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];ct(t,p),p.push(...M(e[0].dims,e[1].dims));const f=["rank","rank"],h=e.length===3;h&&(p.push(...M(e[2].dims)),f.push("rank")),p.push(...M(n));const m=y=>{const _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];lt(t,_);const g=1,v=me(e[0].dataType),w=E("x",e[0].dataType,e[0].dims.length,l),$=E("W",e[1].dataType,e[1].dims.length,g),x=[w,$],b=N("result",e[0].dataType,n.length,g);let k="";if(h){const T=E("bias",e[2].dataType,e[2].dims.length,g);x.push(T),k+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${v} {
          return bias[${a?D("coords",4,5):D("coords",1,5)}];
        }`}const R=xe(l,v),O=ut(t,R,v);return`
            ${k}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${w.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${$.getByIndices("aIndices")};
            }
          ${y.registerUniforms(_).declareVariables(...x,b)}
          ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${b.offsetToIndices("global_idx")};
              let batch = ${D("coords",0,w.rank)};
              let d2 = ${a?D("coords",w.rank-1,w.rank):D("coords",1,w.rank)};
              let xFRCCorner = vec3<u32>(${a?D("coords",1,w.rank):D("coords",2,w.rank)},
              ${a?D("coords",2,w.rank):D("coords",3,w.rank)},
              ${a?D("coords",3,w.rank):D("coords",4,w.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?D("uniforms.x_shape",1,w.rank):D("uniforms.x_shape",2,w.rank)};
              let xShapeZ = ${a?D("uniforms.x_shape",2,w.rank):D("uniforms.x_shape",3,w.rank)};
              let xShapeW = ${a?D("uniforms.x_shape",3,w.rank):D("uniforms.x_shape",4,w.rank)};
              let xShapeU = ${a?D("uniforms.x_shape",4,w.rank):D("uniforms.x_shape",1,w.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${h?"value = value + getBiasByOutputCoords(coords)":""};
              ${O}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${l};${h}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:p}),getShaderSource:m}}}}),zd,Ad,py=C({"web/lib/wasm/jsep/webgpu/ops/conv-grouped.ts"(){q(),G(),Z(),pt(),zd=(e,t,n,r)=>{const s=e.length>2,i=s?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",c=u?n[3]:n[1],l=c/t.group,d=u&&l>=4?fe(c):1,p=S.size(n)/d,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:l}];ct(t,f),f.push(...M(a,[o[0],o[1],o[2],o[3]/d]));const h=s?["rank","rank","rank"]:["rank","rank"];f.push(...M([n[0],n[1],n[2],n[3]/d]));const m=y=>{const _=N("output",e[0].dataType,n.length,d),g=me(_.type.tensor),v=ut(t,_.type.value,g),w=E("x",e[0].dataType,a.length),$=E("w",e[1].dataType,o.length,d),x=[w,$];s&&x.push(E("b",e[2].dataType,e[2].dims,d));const b=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];lt(t,b);const k=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${w.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${$.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${w.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${$.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${y.registerUniforms(b).declareVariables(...x,_)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${k}
    ${i}
    ${v}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:m}},Ad=(e,t,n,r)=>{const s=e.length>2,i=fe(n[3]),a=fe(n[2]),o=S.size(n)/i/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],l=[n[0],n[1],n[2],n[3]/i],d=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ct(t,d),d.push(...M(u,c,l));const p=(a-1)*t.strides[1]+c[1],f=h=>{const m=N("output",e[0].dataType,l.length,i),y=me(m.type.tensor),_=ut(t,m.type.value,y),g=E("x",e[0].dataType,u.length,i),v=E("w",e[1].dataType,c.length,i),w=[g,v];s&&w.push(E("b",e[2].dataType,e[2].dims,i));const $=s?"value += b[output_channel];":"",x=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return lt(t,x),`
  ${h.registerUniforms(x).declareVariables(...w,m)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${p}>;
    var values: array<${m.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
          let w_val = ${v.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${$}
      ${_}
      ${m.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${a};${p};${c[0]};${c[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:f}}}}),ks,Ja,Od,Rd=C({"web/lib/wasm/jsep/webgpu/ops/matmul.ts"(){q(),G(),pr(),Z(),pt(),ks=(e,t,n,r,s=!1,i)=>{const a=e[0].dims,o=e[1].dims,u=a[a.length-2],c=o[o.length-1],l=a[a.length-1],d=fe(c),p=fe(l),f=fe(u),h=S.size(n)/d/f,m=e.length>2,y=r?r.slice(0,-2):n.slice(0,-2),g=[S.size(y),u,c],v=[{type:12,data:h},{type:12,data:u},{type:12,data:c},{type:12,data:l}];ct(t,v),v.push(...M(y,a,o)),m&&v.push(...M(e[2].dims)),v.push(...M(g));const w=$=>{const x=ni("batch_dims",e[0].dataType,y.length),b=E("a",e[0].dataType,a.length,p),k=E("b",e[1].dataType,o.length,d),R=N("output",e[0].dataType,g.length,d),O=me(R.type.tensor),T=ut(t,R.type.value,O),ne=[b,k];let ee="";if(m){const H=s?d:1;ne.push(E("bias",e[2].dataType,e[2].dims.length,H)),ee=`${s?`value += bias[col / ${H}];`:`value += ${R.type.value}(bias[row + i]);`}`}const Q=a.slice(0,-2),de=o.slice(0,-2),V=$n(Q,y),ie=$n(de,y),le=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];lt(t,le);const L=(H,K)=>{const X=H.rank,A=H.name;if(X===2)return`var ${A}_indices = ${H.type.indices}(0u, 0u);`;const j=x.rank;let ae=`var ${A}_indices: ${H.type.indices};`;for(let Re=X-2-1,we=j-1;Re>=0;Re--,we--)ae+=`
${A}_indices[${Re}] = ${j>1?`batch_indices[${we}]`:"batch_indices"};`;return K.forEach(Re=>{ae+=`
${A}_indices[${Re}] = 0;`}),ae+=`${A}_indices[${X-2}] = 0u;
                     ${A}_indices[${X-1}] = 0u;`,ae},te=()=>{let H=`var a_data: ${b.type.value};`;for(let K=0;K<p;K++)H+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${d}];`;for(let K=0;K<f;K++){H+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${p}];`;for(let X=0;X<p;X++)H+=`
            values[${K}] = fma(${k.type.value}(a_data${p===1?"":`[${X}]`}), b_data${X}, values[${K}]);
`}return H};return`
  ${$.registerUniforms(le).registerInternalVariables(x).declareVariables(...ne,R)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${x.offsetToIndices("batch")};`}
    ${L(b,V)}
    let a_offset = ${b.indicesToOffset("a_indices")};
    ${L(k,ie)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${te()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${ee}
      ${T}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${f};${s}`,inputDependencies:m?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:w}},Ja=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Od=e=>{Ja(e.inputs);const t=Bt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");const n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];n<8&&r<8?e.compute(ks(e.inputs,{activation:""},t)):e.compute(ci(e.inputs,{activation:""},t))}}}),eo,An,to,On,Is,Pr,no,ro,Es,fy=C({"web/lib/wasm/jsep/webgpu/ops/conv.ts"(){G(),ly(),dy(),pr(),py(),pt(),Rd(),dt(),eo=(e,t,n,r,s,i)=>{const a=e[0],o=e.slice(i?1:2,i?3:4),u=o.length,c=t[0],d=t.slice(2).map((h,m)=>h+(h-1)*(n[m]-1)),f=o.map((h,m)=>h+r[m]+r[m+u]).map((h,m)=>Math.floor((h-d[m]+s[m])/s[m]));return f.splice(0,0,a),f.splice(i?3:1,0,c),f},An=[2,3,1,0],to=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");const s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},On=(e,t)=>{const n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let i=2;i<t[1].dims.length;++i)n[i-2]===0&&(n[i-2]=t[1].dims[i]);const r=e.pads.slice();er.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);const s=Object.assign({},e);return Object.assign(s,{kernelShape:n,pads:r}),s},Is=e=>{const t=ai(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,i=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,c=e.w_is_const();return{autoPad:r,format:n,dilations:s,group:i,kernelShape:a,pads:o,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Pr=(e,t,n,r)=>{const s=n.format==="NHWC",i=eo(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,s);if(n.group!==1){const x=[t[0]];if(s){const k=e.kernelCustomData.wT??e.compute(Ce(t[1],An),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),x.push(k)}else x.push(t[1]);t.length===3&&x.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Ad(x,n,i,r),{inputs:x}):e.compute(zd(x,n,i,r),{inputs:x});return}const a=t.length===3,o=t[0].dims[s?1:2],u=t[0].dims[s?2:3],c=t[0].dims[s?3:1],l=t[1].dims[2],d=t[1].dims[3],p=i[s?1:2],f=i[s?2:3],h=i[s?3:1],m=s&&l===o&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(m||l===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){const x=i[0];let b,k,R;const O=[];if(s){const ee=e.kernelCustomData.wT??e.compute(Ce(t[1],An),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ee),m){const Q=o*u*c;b=t[0].reshape([1,x,Q]),k=ee.reshape([1,Q,h]),R=[1,x,h]}else b=t[0].reshape([x,o*u,c]),k=ee.reshape([1,c,h]),R=[x,p*f,h];O.push(b),O.push(k)}else b=t[0].reshape([x,c,o*u]),k=t[1].reshape([1,h,c]),R=[x,h,p*f],O.push(k),O.push(b);a&&O.push(t[2]);const T=R[2],ne=O[0].dims[O[0].dims.length-1];T<8&&ne<8?e.compute(ks(O,n,i,R,s,r),{inputs:O}):e.compute(ci(O,n,i,R,s,r),{inputs:O});return}const y=!0,_=e.kernelCustomData.wT??e.compute(Ce(t[1],An),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);const g=[t[0],_];a&&g.push(t[2]);const v=s?p*f:h,w=s?h:p*f,$=l*d*c;e.compute(Ed(g,n,i,v,w,$,a,y,r),{inputs:g})},no=(e,t)=>{const n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);const s=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=On({...t,pads:s,strides:i,dilations:a,kernelShape:o},r);Pr(e,r,u,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},ro=(e,t,n)=>{const r=n.format==="NHWC"?"channelsLast":"channelsFirst",s=On(n,t),i=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=Td(t[0].dims,t[1].dims,n.strides,n.dilations,i,!1,r);e.compute(Cd(t,s,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},Es=(e,t)=>{if(to(e.inputs,t),e.inputs[0].dims.length===3)no(e,t);else if(e.inputs[0].dims.length===5)ro(e,e.inputs,t);else{const n=On(t,e.inputs);Pr(e,e.inputs,n)}}}}),so,Bd,hy=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_backprop_mm_webgpu.ts"(){q(),Ke(),Z(),pt(),dr(),Id(),pr(),so=(e,t=!1,n,r,s=4)=>{const i=_=>{switch(_){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${r}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${_} is not supported.`)}},a=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,o=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,u=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",c=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",l=e?"row":"col",d=e?"col":"row",p=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${l} / outWidth;
      let outCol = ${l} % outWidth;

      let WRow = ${d} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${d} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${u}) || fract(xR) > 0.0) {
        return ${r}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${c}) || fract(xC) > 0.0) {
        return ${r}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${d} % inChannels;
      ${a}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${s}];`,f=e?`
      let col = colIn * ${s};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${p}
      }
      return ${r}(0.0);`:`
      let col = colIn * ${s};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${p}
      }
      return ${r}(0.0);`,h=`
      let col = colIn * ${s};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${i(s)}
      }
      return ${r}(0.0);
      `,m=ut(n,r);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${r} {
    ${e?f:h}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${r} {
    ${e?h:f}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${r}) {
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${o}
      ${oi(t)}
      ${m}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${s}] = value;
    }
  }`},Bd=(e,t,n,r,s,i,a,o)=>{const u=t.format==="NHWC",c=u?e[0].dims[3]:e[0].dims[1],l=n[0],d=u?n[2]:n[3],p=u?n[1]:n[2],f=u?n[3]:n[1],h=u&&c%4===0&&c%3&&f%4===0,m=u?f:d*p,y=u?d*p:f,_=[8,8,1],g=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(y/_[1]/g[1]),Math.ceil(l/_[2]/g[2])];oe("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${v}`);const w=h?4:1,$=Math.max(_[0]*w,_[1]),x=h?4:1,b=[t.kernelShape[u?1:2],t.kernelShape[u?2:3]],k=[b[0]+(t.dilations[0]<=1?0:(b[0]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(b[1]-1)*(t.dilations[1]-1))],R=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:6,data:r},{type:6,data:s},{type:6,data:i},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:b},{type:6,data:R}];ct(t,O),O.push(...M(e[0].dims,e[1].dims));const T=["rank","rank"];a&&(O.push(...M(e[2].dims)),T.push("rank")),O.push(...M(n));const ne=ee=>{const Q=E("x",e[0].dataType,e[0].dims.length,x),de=E("w",e[1].dataType,e[1].dims.length,1),V=N("result",e[0].dataType,n.length,x),ie=[Q,de];let le="";if(a){const H=E("bias",e[2].dataType,e[2].dims.length,x);ie.push(H),le+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${H.type.value} {
            return bias[coords.${u?"w":"y"}${h?"/ 4":""}];
          }`}const L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:b.length},{name:"pads",type:"i32",length:R.length}];lt(t,L);const te=me(e[0].dataType,1);if(te!=="f16"&&te!=="f32")throw new Error(`elemType ${te} is not supported.`);return`
        ${ui("uniforms.result_strides")}
        ${ee.registerUniforms(L).declareVariables(...ie,V)};
        ${le}
        ${so(u,a,t,Q.type.value,w)}
        ${h?nr(g,_,te,void 0,!u,$):rr(g,_,te,void 0,!u,$,!1,void 0,o)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${g};${_};${h}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:O}),getShaderSource:ne}}}}),io,Ts,my=C({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_backprop_webgpu.ts"(){q(),Ke(),G(),Z(),io=(e,t,n,r,s,i=!1,a,o,u=!1)=>{const c=u?1:2,l=u?2:3,d=u?3:1,p=i?2:1;let f=`
  fn setOutputAtIndex(flatIndex : u32, value : ${i?`vec4<${a}>`:a}) {
    result[flatIndex] = ${i?`vec4<${a}>`:a}(value);
  }`;r&&(f+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${i?`vec4<${a}>`:a} {
      return bias[coords.${u?"w":"y"}${i?"/ 4":""}];
    }`);const h=i?4:1,m=E("W",t[1].dataType,t[1].dims.length,h),y=E("Dy",t[0].dataType,t[0].dims.length,h),_=[y,m];r&&_.push(E("bias",t[2].dataType,[n[d]].length,h));const g=N("result",t[0].dataType,n.length,h),v=`{
        let batch: u32 = ${s?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${s?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${s?"global_id.y":"workgroup_id.y"} * ${p};
        let d1: u32 = ${s?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${a}>, ${p}>;
        for (var i = 0; i < ${p}; i++) {
          dotProd[i] = vec4<${a}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${a}(dyCorner.x) + ${a}(wR)) / ${a}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${a}(dyCorner.y) + ${a}(wC)) / ${a}(uniforms.strides.y);
            let dyC2 = (${a}(dyCorner.y) + 1.0 + ${a}(wC)) / ${a}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${y.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${a}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${d}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${m.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${p}; i = i + 1) {
          let value = dotProd[i] + ${r?"bias[c+i]":`vec4<${a}>(0.0)`};
          ${g.set("batch","r","c + i","d1","value")};
        }
      }`,w=`
          let outputIndices = ${g.offsetToIndices("global_idx")};
          let batch = ${g.indicesGet("outputIndices",0)};
          let d1 = ${g.indicesGet("outputIndices",d)};
          let r = ${g.indicesGet("outputIndices",c)};
          let c = ${g.indicesGet("outputIndices",l)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${a}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${a}(dyRCorner) + ${a}(wR)) / ${a}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[${c}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${a}(dyCCorner) + ${a}(wC)) / ${a}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[${l}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${u?y.get("batch","idyR","idyC","inputChannel"):y.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${m.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${r?"bias[d1]":`${a}(0.0)`};
          ${g.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(o).declareVariables(..._,g)}
  ${f}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${i?v:w}}`},Ts=(e,t,n)=>{const r=e.length>2,s=t.outputShape,i=S.size(s),a=[Math.ceil(i/64),1,1];oe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${a}`);const o=t.format==="NHWC",u=["rank","rank"],c=[t.strides[0],t.strides[1]],l=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],d=[t.dilations[0],t.dilations[1]],p=[l[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),l[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],f=[p[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),p[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],h=!1,m=t.group,y=e[1].dims,_=y[0]/m,g=y[1],v=[{type:12,data:i},{type:12,data:c},{type:12,data:l},{type:12,data:d},{type:12,data:p},{type:6,data:f},{type:12,data:_},{type:12,data:g},...M(e[0].dims,e[1].dims)];r&&(v.push(...M(e[2].dims)),u.push("rank")),v.push(...M(s));const w=a[1]===1&&a[2]===1,$=x=>{const b=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:c.length},{name:"filter_dims",type:"u32",length:l.length},{name:"dilations",type:"u32",length:l.length},{name:"effective_filter_dims",type:"u32",length:p.length},{name:"pads",type:"i32",length:f.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],k=me(e[0].dataType);return`${io(x,e,s,r,w,h,k,b,o)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:u},getRunData:()=>({dispatchGroup:{x:a[0],y:a[1],z:a[2]},outputs:[{dims:n?n(s):s,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:$}}}}),ao,oo,uo,Mr,Pd,co,lo,po,fo,Md,gy=C({"web/lib/wasm/jsep/webgpu/ops/conv-transpose.ts"(){hy(),my(),pt(),dt(),ao=(e,t,n,r,s,i)=>(e-1)*t+n+(r-1)*s+1-i,oo=(e,t,n,r,s)=>{const i=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=i,n[s]=e-i):t==="SAME_LOWER"&&(n[r]=e-i,n[s]=i)},uo=(e,t,n,r,s,i,a,o,u,c)=>{const l=e.length-2,d=c.length===0;u.length<l&&u.push(...Array(l-u.length).fill(0));const p=e[0],f=t[o?3:1]*s;for(let h=0,m=e.length-l-(o?1:0);h<l;++h,++m){const y=e[m],_=d?y*a[h]:c[h],g=ao(y,a[h],i[h],t[m],n[h],_);oo(g,r,i,h,h+l),d&&c.push(a[h]*(y-1)+u[h]+(t[m]-1)*n[h]+1-i[h]-i[h+l])}c.splice(0,0,p),c.splice(o?3:1,0,f)},Mr=(e,t)=>{const n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}const r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);const s=e.pads.slice(),i=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims;let u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){const d=t[0].dims.length-2;u=new Array(d).fill(1)}let c=e.strides.slice();if(c.reduce((d,p)=>d+p,0)===0){const d=t[0].dims.length-2;c=new Array(d).fill(1)}uo(o,n,u,e.autoPad,e.group,s,c,r,a,i);const l=Object.assign({},e);return Object.assign(l,{kernelShape:n,pads:s,outputPadding:a,outputShape:i,dilations:u,strides:c}),l},Pd=e=>{const t=ai(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,i=e.group,a=e.kernelShape,o=e.pads,u=e.strides,c=e.wIsConst(),l=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:s,group:i,kernelShape:a,outputPadding:l,outputShape:d,pads:o,strides:u,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},co=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");const s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");const i=e[0].dims.length-2;if(t.dilations.reduce((l,d)=>l+d,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((l,d)=>l+d,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((l,d)=>l+d,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((l,d)=>l+d,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},lo=[2,3,1,0],po=(e,t,n)=>{const r=Mr(n,t),s=n.format==="NHWC",i=r.outputShape,a=i[s?3:1],o=t[0].dims[s?3:1];if(r.group!==1||a===1&&o===1){e.compute(Ts(t,r));return}const u=i[s?1:2],c=i[s?2:3],l=t[1].dims[2],d=t[1].dims[3],p=s?u*c:a,f=s?a:u*c,h=l*d*o,m=!0,y=e.kernelCustomData.wT??e.compute(Ce(t[1],lo),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);const _=[t[0],y],g=t.length===3;g&&(!s&&t[2].dims.length===1?_.push(t[2].reshape([t[2].dims[0],1,1])):_.push(t[2])),e.compute(Bd(_,r,i,p,f,h,g,m),{inputs:_})},fo=(e,t)=>{const n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),i=[1].concat(i),s=[1].concat(s);const u=Mr({...t,pads:o,strides:a,dilations:i,kernelShape:s},r);e.compute(Ts(r,u,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]]))},Md=(e,t)=>{co(e.inputs,t),e.inputs[0].dims.length===3?fo(e,t):po(e,e.inputs,t)}}}),ho,Dd,Nd,yy=C({"web/lib/wasm/jsep/webgpu/ops/cumsum.ts"(){q(),G(),he(),Z(),ho=(e,t,n,r)=>{const s=S.size(t),i=t.length,a=E("input",e,i),o=N("output",e,i),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),c=S.normalizeAxis(u,i),l=d=>{const p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=D("uniforms.input_shape","uniforms.axis",i),h=r.reverse?p+(r.exclusive?" + 1":""):"0",m=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${h};
                  let last : i32 = ${m};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:c},...M(t,t)]}),getShaderSource:l}},Dd=(e,t)=>{const n=e.inputs[0].dims,r=e.inputs[0].dataType,s=e.inputs[1];e.compute(ho(r,n,s,t),{inputs:[0]})},Nd=e=>{const t=e.exclusive===1,n=e.reverse===1;return ue({exclusive:t,reverse:n})}}}),mo,go,yo,jd,Ud,_y=C({"web/lib/wasm/jsep/webgpu/ops/depth-to-space.ts"(){q(),G(),he(),Z(),mo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},go=(e,t,n,r)=>{const s=[];s.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let i=0;i<t;++i)s.push(n.indicesSet("a",e[i],`i[${i}]`));return s.push("return a;}"),s.join(`
`)},yo=(e,t)=>{let n,r,s,i,a,o;const u=t.format==="NHWC",c=t.blocksize,l=t.mode==="DCR";u?([n,r,s,i]=e.dims,a=l?[n,r,s,c,c,i/c**2]:[n,r,s,i/c**2,c,c],o=l?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,s,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=l?[n,c,c,i/c**2,r,s]:[n,i/c**2,c,c,r,s],o=l?[0,3,4,1,5,2]:[0,1,4,2,5,3]);const d=e.reshape(a),p=d.dims.length,f=e.dataType,h=E("a",f,p),m=N("output",f,p),y=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(h,m)}

  ${go(o,p,h,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${m.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${m.setByOffset("global_idx",h.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{const g=u?[n,r*c,s*c,i/c**2]:[n,i/c**2,r*c,s*c],v=S.size(g),w=d.dims,$=S.sortBasedOnPerm(w,o);return{outputs:[{dims:g,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...M(w,$)]}},getShaderSource:y}},jd=(e,t)=>{mo(e.inputs),e.compute(yo(e.inputs[0],t))},Ud=e=>ue({blocksize:e.blocksize,mode:e.mode,format:e.format})}}),Rn,Wt,Dr,_o,vo,wo,$o,Nr,bo,Ld,Vd,vy=C({"web/lib/wasm/jsep/webgpu/ops/einsum.ts"(){q(),G(),he(),Z(),Rn="[a-zA-Z]|\\.\\.\\.",Wt="("+Rn+")+",Dr="^"+Wt+"$",_o="("+Wt+",)*"+Wt,vo="^"+_o+"$",wo=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},$o=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(vo)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{const u=e[o].dims.slice();if(!a.match(RegExp(Dr)))throw new Error("Invalid LHS term");const c=this.processTerm(a,!0,u,o);this.lhs.push(c)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Wt)))throw new Error("Invalid RHS");r.match(RegExp(Rn,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{const o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){const s=n.length;let i=!1,a=[],o=0;if(!e.match(RegExp(Dr))&&!t&&e!=="")throw new Error("Invalid LHS term");const u=e.match(RegExp(Rn,"g")),c=new wo(r);return u?.forEach((l,d)=>{if(l==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;const p=s-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){const h=String.fromCharCode(48+f);c.addSymbol(h,d+f),this.addSymbol(h,n[o++],r)}}else c.addSymbol(l,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(l,n[o++],r)}),c}},Nr=e=>e+"_max",bo=(e,t,n,r)=>{const i=e.map(l=>l.length).map((l,d)=>E(`input${d}`,t,l)),a=S.size(r),o=N("output",t,r.length),u=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),c=l=>{const d=[],p="var prod = 1.0;",f="var sum = 0.0;",h="sum += prod;",m=[],y=[],_=[],g=[],v=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach(($,x)=>{if(n.rhs.symbolToIndices.has(x)){const b=n.rhs.symbolToIndices.get(x)?.[0];b!==void 0&&n.lhs.forEach((k,R)=>{if($.inputIndices.includes(R)){const O=k.symbolToIndices.get(x);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(T=>{d.push(`${i[R].indicesSet(`input${R}Indices`,T,o.indicesGet("outputIndices",b))}`)})}})}else n.lhs.forEach((b,k)=>{if($.inputIndices.includes(k)){const R=b.symbolToIndices.get(x);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(O=>{m.push(`${i[k].indicesSet(`input${k}Indices`,O,`${x}`)}`)}),g.push(`prod *= ${i[k].getByIndices(`input${k}Indices`)};`)}}),y.push(`for(var ${x}: u32 = 0; ${x} < uniforms.${Nr(x)}; ${x}++) {`),_.push("}")});const w=v?[...d,`let sum = ${i.map(($,x)=>$.getByIndices(`input${x}Indices`)).join(" * ")};`]:[...d,f,...y,...m,p,...g,h,..._];return`
            ${l.registerUniforms(u.map($=>({name:`${Nr($)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map(($,x)=>`var input${x}Indices: ${i[x].type.indices};`).join(`
`)}
            ${w.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{const l=u.filter(p=>n.symbolToInfo.has(p)).map(p=>({type:12,data:n.symbolToInfo.get(p)?.dimValue||0}));l.push({type:12,data:a});const d=e.map((p,f)=>[...M(p)]).reduce((p,f)=>p.concat(f),l);return d.push(...M(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}},getShaderSource:c}},Ld=(e,t)=>{const n=new $o(e.inputs,t.equation),r=n.outputDims,s=e.inputs.map((i,a)=>i.dims);e.compute(bo(s,e.inputs[0].dataType,n,r))},Vd=e=>{const t=e.equation.replace(/\s+/g,"");return ue({equation:t})}}}),xo,jr,So,ko,qd,wy=C({"web/lib/wasm/jsep/webgpu/ops/expand.ts"(){q(),G(),Z(),xo=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");const t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number);let r=n.length<t.length?0:n.length-t.length,s=t.length<n.length?0:t.length-n.length;for(;r<n.length&&s<t.length;++r,++s)if(n[r]!==t[s]&&n[r]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},jr=(e,t)=>{const n=e.length-t.length,r=[];for(let s=0;s<n;++s)r.push(e[s]);for(let s=0;s<t.length;++s)r.push(t[s]===1?e[s+n]:t[s]);return r},So=(e,t)=>e.length>t.length?jr(e,t):jr(t,e),ko=e=>{const t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=So(t,n),s=e[0].dataType,i=s===9?4:1,a=Math.ceil(S.size(r)/i),o=c=>{const l=E("input",s,t.length,i),d=N("output",s,r.length,i);let p;if(s===9){const f=(h,m,y="")=>`
          let outputIndices${m} = ${d.offsetToIndices(`outputOffset + ${m}u`)};
          let offset${m} = ${l.broadcastedIndicesToOffset(`outputIndices${m}`,d)};
          let index${m} = offset${m} / 4u;
          let component${m} = offset${m} % 4u;
          ${h}[${m}] = ${y}(${l.getByOffset(`index${m}`)}[component${m}]);
        `;p=`
        let outputOffset = global_idx * ${i};
        var data = vec4<u32>(0);
        ${f("data",0,"u32")}
        ${f("data",1,"u32")}
        ${f("data",2,"u32")}
        ${f("data",3,"u32")}
        ${d.setByOffset("global_idx","data")}
      }`}else p=`
        let outputIndices = ${d.offsetToIndices("global_idx")};
        let inputOffset = ${l.broadcastedIndicesToOffset("outputIndices",d)};
        ${d.setByOffset("global_idx",l.getByOffset("inputOffset"))}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(l,d)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${p}`},u=[{type:12,data:a},...M(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length}`,inputDependencies:["rank"]},getShaderSource:o,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},qd=e=>{xo(e.inputs),e.compute(ko(e.inputs),{inputs:[0]})}}}),Io,Wd,$y=C({"web/lib/wasm/jsep/webgpu/ops/fast-gelu.ts"(){q(),G(),Z(),ii(),Io=e=>{const t=e[0].dataType,n=S.size(e[0].dims),r=S.size(e[1].dims),s=r%4===0,i=a=>{const o=E("x",t,[1],4),u=E("bias",t,[1],4),c=N("y",t,[1],4),l=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=s?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(l).declareVariables(o,u,c)}

    ${xs(be(t))}

    ${a.mainStart(Pt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",Ss("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pt/4)}})}},Wd=e=>{e.inputs.length<2||S.size(e.inputs[1].dims)===0?cd(e):e.compute(Io(e.inputs))}}}),Eo,To,Fd,Gd,by=C({"web/lib/wasm/jsep/webgpu/ops/gather.ts"(){q(),G(),he(),Z(),Eo=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},To=(e,t)=>{const n=e[0].dims,r=e[1].dims,s=n.length,i=S.normalizeAxis(t.axis,s),a=n.slice(0);a.splice(i,1,...r);const o=n[i],u=e[0].dataType===9?4:1,c=Math.ceil(S.size(a)/u),l=[{type:12,data:c},{type:6,data:o},{type:12,data:i},...M(e[0].dims,e[1].dims,a)],d=p=>{const f=E("data",e[0].dataType,e[0].dims.length,u),h=E("inputIndices",e[1].dataType,e[1].dims.length),m=N("output",e[0].dataType,a.length,u),y=g=>{const v=r.length;let w=`var indicesIndices${g}  = ${h.type.indices}(0);`;for(let $=0;$<v;$++)w+=`${v>1?`indicesIndices${g}[${$}]`:`indicesIndices${g}`} = ${a.length>1?`outputIndices${g}[uniforms.axis + ${$}]`:`outputIndices${g}`};`;w+=`
          var idx${g} = ${h.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${f.type.indices};
        `;for(let $=0,x=0;$<s;$++)$===i?(w+=`${s>1?`dataIndices${g}[${$}]`:`dataIndices${g}`} = u32(idx${g});`,x+=v):(w+=`${s>1?`dataIndices${g}[${$}]`:`dataIndices${g}`} = ${a.length>1?`outputIndices${g}[${x}]`:`outputIndices${g}`};`,x++);return w};let _;if(e[0].dataType===9){const g=(v,w,$="")=>`
          let outputIndices${w} = ${m.offsetToIndices(`outputOffset + ${w}u`)};
          ${y(w)};
          let offset${w} = ${f.indicesToOffset(`dataIndices${w}`)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${v}[${w}] = ${$}(${f.getByOffset(`index${w}`)}[component${w}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${m.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${m.offsetToIndices("global_idx")};
      ${y("")};
      let value = ${f.getByIndices("dataIndices")};
      ${m.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,m)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:d}},Fd=e=>ue({axis:e.axis}),Gd=(e,t)=>{const n=e.inputs;Eo(n),e.compute(To(e.inputs,t))}}}),Co,zo,Zd,Hd,xy=C({"web/lib/wasm/jsep/webgpu/ops/gather-block-quantized.ts"(){q(),G(),he(),Z(),Co=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");const n=S.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,s=e[0],i=e[2],a=e.length===4?e[3]:void 0;if(i.dims.length!==s.dims.length||!s.dims.map((o,u)=>u===n?Math.ceil(o/r)===i.dims[u]:o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==i.dims.length||!a.dims.map((o,u)=>o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},zo=(e,t)=>{const n=e[0].dims,r=e[1].dims,s=n.length,i=S.normalizeAxis(t.gatherAxis,s),a=S.normalizeAxis(t.quantizeAxis,s),o=n.slice(0);o.splice(i,1,...r);const u=S.size(o),c=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:i},{type:12,data:t.blockSize},...M(...e.map((h,m)=>h.dims),o)],f=h=>{const m=E("data",e[0].dataType,e[0].dims.length),y=E("inputIndices",e[1].dataType,e[1].dims.length),_=E("scales",e[2].dataType,e[2].dims.length),g=e.length>3?E("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=N("output",c,o.length),w=[m,y,_];g&&w.push(g);const $=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms($).declareVariables(...w,v)}
        ${h.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[i]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${g?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${g.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${g.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${be(c)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,m)=>m!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:c}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},Zd=(e,t)=>{const n=e.inputs;Co(n,t),e.compute(zo(e.inputs,t))},Hd=e=>ue({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}}),Ao,Oo,Kd,Xd,Sy=C({"web/lib/wasm/jsep/webgpu/ops/gather-elements.ts"(){q(),G(),he(),Z(),Ao=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Oo=(e,t)=>{const n=e[0].dims,r=e[0].dataType,s=n.length,i=e[1].dims,a=e[1].dataType,o=S.normalizeAxis(t.axis,s),u=n[o],c=i.slice(0),l=S.size(c),d=E("input",r,s),p=E("indicesInput",a,i.length),f=N("output",r,c.length),h=[{type:12,data:l},{type:6,data:u},{type:12,data:o}];return h.push(...M(n,i,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,p,f)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},Kd=e=>ue({axis:e.axis}),Xd=(e,t)=>{const n=e.inputs;Ao(n),e.compute(Oo(e.inputs,t))}}}),Ro,Bo,Yd,Qd,ky=C({"web/lib/wasm/jsep/webgpu/ops/gemm.ts"(){q(),G(),Z(),Ro=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Bo=(e,t)=>{const n=e[0].dims.slice(),r=e[1].dims.slice(),[s,i,a]=tl.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[s,i];if(!o)throw new Error("Can't use gemm on the given tensors");const u=S.size(o),c=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],l=["type","type"];e.length===3&&(c.push(...M(e[2].dims)),l.push("rank")),c.push(...M(o));const d=p=>{let f="";t.transA&&t.transB?f="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?f="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?f="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(f="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");const h=t.alpha===1?"":"value *= uniforms.alpha;",m=E("a",e[0].dataType,e[0].dims),y=E("b",e[1].dataType,e[1].dims),_=m.type.value;let g=null;const v=[m,y];e.length===3&&(g=E("c",e[2].dataType,e[2].dims.length),v.push(g));const w=N("output",e[0].dataType,o.length);v.push(w);const $=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${p.registerUniforms($).declareVariables(...v)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${_}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${f}
    }

    ${h}
    ${g!=null?`let cOffset = ${g.broadcastedIndicesToOffset("vec2(m, n)",w)}; value += ${_}(uniforms.beta) * ${g.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:d}},Yd=e=>{const t=e.transA,n=e.transB,r=e.alpha,s=e.beta;return{transA:t,transB:n,alpha:r,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Qd=(e,t)=>{Ro(e.inputs),e.compute(Bo(e.inputs,t))}}}),Se,Po,Jd,Ur,Mo,rn,ep,tp=C({"web/lib/wasm/jsep/webgpu/ops/multihead-attention.ts"(){q(),G(),he(),ti(),si(),Z(),dt(),Se=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Po=(e,t)=>{const n=e[0],r=Se(e,1),s=Se(e,2),i=Se(e,3),a=Se(e,4),o=Se(e,5),u=Se(e,6),c=Se(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const l=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4];let f=d,h=0,m=0;const y=Math.floor(p/t.numHeads);if(u&&c&&S.size(u.dims)&&S.size(c.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[3]!==y)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==l||c.dims[1]!==t.numHeads||c.dims[3]!==y)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=u.dims[2],m=u.dims[2]}else if(u&&S.size(u.dims)||c&&S.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&S.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(i&&S.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}const g=h+f;let v=0;if(a&&S.size(a.dims)>0){v=8;const b=a.dims;throw b.length===1?b[0]===l?v=1:b[0]===3*l+2&&(v=3):b.length===2&&b[0]===l&&b[1]===g&&(v=5),v===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let w=!1,$=p;if(s&&S.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(f!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');$=s.dims[2]}else{if(f!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');$=s.dims[1]*s.dims[3],w=!0}}const x=!1;if(a&&S.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&S.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:g,maxSequenceLength:m,inputHiddenSize:0,hiddenSize:p,vHiddenSize:$,headSize:y,vHeadSize:Math.floor($/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:x,passPastInKv:w,qkvFormat:_}},Jd=e=>ue({...e}),Ur=ue({perm:[0,2,1,3]}),Mo=(e,t,n,r,s,i,a)=>{const o=[r,s,i],u=S.size(o),c=[{type:12,data:u},{type:12,data:a},{type:12,data:i}],l=d=>{const p=N("qkv_with_bias",t.dataType,o),f=E("qkv",t.dataType,o),h=E("bias",n.dataType,o),m=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(f,h,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:l},{inputs:[t,n],outputs:[-1]})[0]},rn=(e,t,n,r,s,i,a,o)=>{let u=i;if(a&&S.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Mo(e,i,a,t,r,n*s,o),u=u.reshape([t,r,n,s]),n===1||r===1?u:e.compute(Ce(u,Ur.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,r,n,s])),n===1||r===1?u:e.compute(Ce(u,Ur.perm),{inputs:[u],outputs:[-1]})[0]},ep=(e,t)=>{const n=Po(e.inputs,t),r=e.inputs[0],s=Se(e.inputs,1),i=Se(e.inputs,2),a=Se(e.inputs,3),o=Se(e.inputs,4),u=Se(e.inputs,5),c=Se(e.inputs,6),l=Se(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(s?.dims.length===5)throw new Error("Packed KV is not implemented");const d=s&&i&&s.dims.length===4&&i.dims.length===4,p=rn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(d)return bn(e,p,s,i,o,void 0,c,l,u,n,t);if(!s||!i)throw new Error("key and value must be provided");const f=rn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,s,a,n.hiddenSize),h=rn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,i,a,2*n.hiddenSize);bn(e,p,f,h,o,void 0,c,l,u,n,t)}}}),Lr,Do,No,Cs,np,rp=C({"web/lib/wasm/jsep/webgpu/ops/tile.ts"(){q(),G(),Z(),Lr=e=>Array.from(e.getBigInt64Array(),Number),Do=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Lr(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},No=(e,t)=>{const n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Cs=(e,t)=>{const n=e[0].dims,r=t??Lr(e[1]),s=No(n,r),i=S.size(s),a=e[0].dataType,o=E("input",a,n.length),u=N("output",a,s.length),c=l=>`
      const inputShape = ${o.indices(...n)};
      ${l.registerUniform("output_size","u32").declareVariables(o,u)}
      ${l.mainStart()}
      ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...M(e[0].dims,s)]}),getShaderSource:c}},np=e=>{Do(e.inputs),e.compute(Cs(e.inputs),{inputs:[0]})}}}),jo,Vr,sp,Uo,qr,ip,Iy=C({"web/lib/wasm/jsep/webgpu/ops/group-query-attention.ts"(){q(),G(),he(),si(),Z(),tp(),rp(),dt(),jo=(e,t)=>{const n=e[0],r=e[1],s=e[2],i=e[3],a=e[4];if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const o=!1,u=n.dims[0],c=n.dims[1],l=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4];let d=c,p=0,f=0;const h=Math.floor(l/t.numHeads),m=i&&i.dims.length!==0,y=a&&a.dims.length!==0,_=!0;if(m&&y){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=i.dims[1],f=i.dims[1]}else if(m||y)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g;if(r){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=2,d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==h)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');g=5,d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==h)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=0,d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}const v=0;let w=!1,$=l;if(s){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(d!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');$=s.dims[2]}else{if(d!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');$=s.dims[1]*s.dims[3],w=!0}}const x=p+d;return{batchSize:u,sequenceLength:c,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:x,maxSequenceLength:f,inputHiddenSize:0,hiddenSize:l,vHiddenSize:$,headSize:h,vHeadSize:Math.floor($/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:w,qkvFormat:g,isPastkvBSNH:_}},Vr=(e,t,n,r)=>{const s=[r.batchSize,r.totalSequenceLength,r.kvNumHeads,r.headSize],i=4,a=S.size(s)/i,o=r.totalSequenceLength,u=N("present_kv",n,s.length,i),c=E("new_kv",e.dataType,e.dims.length,i),l=t?E("past_kv",t.dataType,t.dims.length,i):void 0,d=Math.ceil(r.headSize/i),p={x:o,y:e.dims[0],z:1},f=t?["rank","rank"]:["rank"],h=[{type:12,data:a},{type:12,data:r.pastSequenceLength},{type:12,data:r.kvSequenceLength},{type:12,data:r.totalSequenceLength}],m=[c];l?(h.push(...M(e.dims),...M(t.dims),...M(s)),m.push(l)):h.push(...M(e.dims),...M(s));const y=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],_=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,g=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,v=t?`if (s < past_seqlen) {
        ${_}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${g}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${g}
        }`,w=$=>`

  ${$.registerUniforms(y).declareVariables(...m,u)}
  ${$.mainStart([d,r.kvNumHeads,1])}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${u.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${r.kvNumHeads}u;
    let H = ${d}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${r.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${v}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${r.kvNumHeads}${d}${!!t}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:p,programUniforms:h}),getShaderSource:w}},sp=e=>ue({...e}),Uo=ue({perm:[0,2,1,3]}),qr=(e,t,n,r,s)=>{let i=t;const a=r.kvNumHeads,o=r.nReps;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize])),n?i=e.compute(Vr(i,n,i.dataType,r),{inputs:[i,n],outputs:[r.isPastkvBSNH?s:-1]})[0]:i=e.compute(Vr(i,void 0,i.dataType,r),{inputs:[i],outputs:[r.isPastkvBSNH?s:-1]})[0],o!==1&&(i=e.compute(Cs([i],[1,1,1,o]),{inputs:[i],outputs:[-1]})[0],i=i.reshape([r.batchSize,r.totalSequenceLength,a*o,r.headSize])),e.compute(Ce(i,Uo.perm),{inputs:[i],outputs:[-1]})[0]},ip=(e,t)=>{const n=jo(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");const r=rn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,e.inputs[0],void 0,0),s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,i=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,a=qr(e,e.inputs[1],s,n,1),o=qr(e,e.inputs[2],i,n,2);bn(e,r,a,o,void 0,void 0,void 0,void 0,void 0,n,t)}}}),Wr,Lo,Vo,ap,Ey=C({"web/lib/wasm/jsep/webgpu/ops/instance-norm.ts"(){q(),G(),dt(),Z(),Wr=(e,t,n,r,s,i,a,o)=>{const u=fe(i),c=u===1?"f32":`vec${u}f`,l=u===1?"vec2f":`mat2x${u}f`,d=s*a,p=[s,a,i/u],f=[s,a,2],h=["rank","type","type"],m=[];m.push(...M(p,f));const y=_=>{const g=E("x",t.dataType,3,u),v=E("scale",n.dataType,n.dims),w=E("bias",r.dataType,r.dims),$=N("output",1,3,2),x=[g,v,w,$],b=64;return`
  var<workgroup> workgroup_shared : array<${l}, ${b}>;
  const workgroup_size = ${b}u;
  ${_.declareVariables(...x)}
  ${_.mainStart(b)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${g.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${l}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ot("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${ot("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:d},programUniforms:m}),getShaderSource:y},{inputs:[t,n,r],outputs:[-1]})[0]},Lo=(e,t,n)=>{const r=t[0].dims,s=r,i=2,a=r[0],o=r[1],u=S.sizeFromDimension(r,i),c=fe(u),l=S.size(s)/c,d=Wr(e,t[0],t[1],t[2],a,u,o,n.epsilon),p=[a,o,u/c],f=[a,o],h=["type","none"],m=y=>{const _=E("x",t[0].dataType,p.length,c),g=E("scale_shift",1,f.length,2),v=N("output",t[0].dataType,p.length,c),w=[_,g,v];return`
  ${y.registerUniform("output_size","u32").declareVariables(...w)}
  ${y.mainStart()}
  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${v.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${v.type.value}(scale_shift.x) + ${v.type.value}(scale_shift.y);
      ${v.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...M(p,f,p)]}),getShaderSource:m},{inputs:[t[0],d]})},Vo=(e,t,n)=>{const r=t[0].dims,s=r,i=r[0],a=r[r.length-1],o=S.sizeFromDimension(r,1)/a,u=fe(a),c=S.size(s)/u,l=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],d=["type","type"],p=[0,r.length-1];for(let y=0;y<r.length-2;y++)p.push(y+1);const f=e.compute(Ce(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0],h=Wr(e,f,t[1],t[2],i,o,a,n.epsilon),m=y=>{const _=me(t[0].dataType),g=u===1?"vec2f":`mat${u}x2f`,v=x=>{const b=x===0?"x":"y",k=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${_}(${k}(scale.${b}))`;case 2:return`vec2<${_}>(${k}(scale[0].${b}, scale[1].${b}))`;case 4:return`vec4<${_}>(${k}(scale[0].${b}, scale[1].${b}, scale[2].${b}, scale[3].${b}))`;default:throw new Error(`Not supported compoents ${u}`)}},w=E("input",t[0].dataType,t[0].dims,u),$=N("output",t[0].dataType,s,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${w.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${g}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${$.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:m},{inputs:[t[0],h]})},ap=(e,t)=>{t.format==="NHWC"?Vo(e,e.inputs,t):Lo(e,e.inputs,t)}}}),qo,Wo,op,Ty=C({"web/lib/wasm/jsep/webgpu/ops/layer-norm.ts"(){q(),G(),Z(),qo=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Wo=(e,t,n)=>{const r=t.simplified,s=e[0].dims,i=e[1],a=!r&&e[2],o=s,u=S.normalizeAxis(t.axis,s.length),c=S.sizeToDimension(s,u),l=S.sizeFromDimension(s,u),d=S.size(i.dims),p=a?S.size(a.dims):0;if(d!==l||a&&p!==l)throw new Error(`Size of X.shape()[axis:] == ${l}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);const f=[];for(let $=0;$<s.length;++$)$<u?f.push(s[$]):f.push(1);const h=fe(l),m=["type","type"],y=[{type:12,data:c},{type:1,data:l},{type:12,data:Math.floor(l/h)},{type:1,data:t.epsilon}];a&&m.push("type");const _=n>1,g=n>2,v=$=>{const x=me(e[0].dataType),b=[E("x",e[0].dataType,e[0].dims,h),E("scale",i.dataType,i.dims,h)];a&&b.push(E("bias",a.dataType,a.dims,h)),b.push(N("output",e[0].dataType,o,h)),_&&b.push(N("mean_data_output",1,f)),g&&b.push(N("inv_std_output",1,f));const k=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${$.registerUniforms(k).declareVariables(...b)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ws("f32",h)};
    var mean_square_vector = ${ws("f32",h)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${It(x,h,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ot("mean_vector",h)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ot("mean_square_vector",h)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${It(x,h,"x[j + offset]")};
      let f32scale = ${It(x,h,"scale[j]")};
      output[j + offset] = ${b[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${It(x,h,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},w=[{dims:o,dataType:e[0].dataType}];return _&&w.push({dims:f,dataType:1}),g&&w.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${h};${n};${r}`,inputDependencies:m},getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:v}},op=(e,t)=>{qo(e.inputs),e.compute(Wo(e.inputs,t,e.outputCount))}}}),Fo,Go,Zo,up,cp,Cy=C({"web/lib/wasm/jsep/webgpu/ops/matmulnbits.ts"(){q(),G(),he(),Z(),Fo=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");const n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");const s=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,a=e[1];if(!S.areEqual(a.dims,[t.n,s,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");const u=e[2].dims;if(S.size(u)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){const l=e[3].dims,d=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(S.size(l)!==d)throw new Error("zeroPoints input size error.")}},Go=(e,t)=>{const n=e[0].dims,r=n.length,s=n[r-2],i=t.k,a=t.n,o=n.slice(0,r-2),u=S.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=fe(t.k),f=fe(l),h=fe(a),m=o.concat([s,a]),y=s>1&&a/h%2===0?2:1,_=S.size(m)/h/y,g=64,v=[],w=[u,s,i/p],$=S.convertShape(e[1].dims).slice();$.splice(-1,1,l/f),v.push(...M(w)),v.push(...M($)),v.push(...M(e[2].dims)),e.length===4&&v.push(...M(S.convertShape(e[3].dims)));const x=[u,s,a/h];v.push(...M(x));const b=k=>{const R=w.length,O=E("a",e[0].dataType,R,p),T=E("b",12,$.length,f),ne=E("scales",e[2].dataType,e[2].dims.length),ee=[O,T,ne],Q=e.length===4?E("zero_points",12,e[3].dims.length):void 0;Q&&ee.push(Q);const de=x.length,V=N("output",e[0].dataType,de,h),ie=me(e[0].dataType),le=(()=>{switch(p){case 1:return`array<${ie}, 8>`;case 2:return`mat4x2<${ie}>`;case 4:return`mat2x4<${ie}>`;default:throw new Error(`${p}-component is not supported.`)}})(),L=()=>{let K=`
          // reuse a data
            var input_offset = ${O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${O.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let X=0;X<h*y;X++)K+=`
            b_value = ${f===1?`b${X}_data`:`b${X}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(A,j)=>`${ie}(b_value_lower[${j}]), ${ie}(b_value_upper[${j}])`).join(", ")});
            b_dequantized_values = ${p===1?`${le}(${Array.from({length:8},(A,j)=>`(b_quantized_values[${j}] - ${Q?`zero_point${X}`:"zero_point"}) * scale${X}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${Q?`zero_point${X}`:"zero_point"}`).join(",")})) * scale${X};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(X/h)}]${h>1?`[${X%h}]`:""} += ${Array.from({length:8/p},(A,j)=>`${p===1?`a_data[${j}] * b_dequantized_values[${j}]`:`dot(a_data[${j}], b_dequantized_values[${j}])`}`).join(" + ")};
          `;return K},te=()=>{let K=`
            var col_index = col * ${h};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ie}(8);`}
            `;for(let X=0;X<h*y;X++)K+=`
            let scale${X} = ${ne.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${X} = ${ie}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return K},H=()=>{let K=`col_index = col * ${h};`;for(let X=0;X<h*y;X++)K+=`
            let b${X}_data = ${T.getByIndices(`${T.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,K};return`
        var<workgroup> workgroup_shared: array<${V.type.value}, ${y*g}>;
        ${k.declareVariables(...ee,V)}
        ${k.mainStart([g,1,1])}
          let output_indices = ${V.offsetToIndices(`(global_idx / ${g}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${g}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${te()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${H()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${L()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${V.type.value} = ${V.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${g}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${V.setByIndices(`${V.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${h};${y};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:_},programUniforms:v}),getShaderSource:b}},Zo=(e,t)=>{const n=e[0].dims,r=n.length,s=n[r-2],i=t.k,a=t.n,o=n.slice(0,r-2),u=S.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=fe(t.k),f=fe(l),h=o.concat([s,a]),m=128,y=a%8===0?8:a%4===0?4:1,_=m/y,g=_*f*8,v=g/p,w=g/t.blockSize,$=S.size(h)/y,x=[],b=[u,s,i/p],k=S.convertShape(e[1].dims).slice();k.splice(-1,1,l/f),x.push(...M(b)),x.push(...M(k)),x.push(...M(e[2].dims)),e.length===4&&x.push(...M(S.convertShape(e[3].dims)));const R=[u,s,a];x.push(...M(R));const O=T=>{const ne=b.length,ee=E("a",e[0].dataType,ne,p),Q=E("b",12,k.length,f),de=E("scales",e[2].dataType,e[2].dims.length),V=[ee,Q,de],ie=e.length===4?E("zero_points",12,e[3].dims.length):void 0;ie&&V.push(ie);const le=R.length,L=N("output",e[0].dataType,le),te=me(e[0].dataType),H=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${_}>, ${y}>;
        ${T.declareVariables(...V,L)}
        ${T.mainStart([_,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${w} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${w} + local_id.x;
            ${ie?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ie.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${de.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${H()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(K,X)=>`${te}(b_value_lower[${X}]), ${te}(b_value_upper[${X}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(K,X)=>`${`dot(a_data${X}, b_dequantized_values[${X}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${_};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:$},programUniforms:x}),getShaderSource:O}},up=(e,t)=>{Fo(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Zo(e.inputs,t)):e.compute(Go(e.inputs,t))},cp=e=>ue(e)}}),Ho,Ko,Xo,Yo,Qo,Jo,eu,tu,lp,zy=C({"web/lib/wasm/jsep/webgpu/ops/pad.ts"(){q(),G(),Z(),Ho=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ko=(e,t,n)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
            k = i32(${e.indicesGet("indices",s)}) - ${D("uniforms.pads",s,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${D("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${D("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Xo=(e,t,n)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${D("uniforms.pads",s,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${D("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${D("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${D("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Yo=(e,t,n)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${D("uniforms.pads",s,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${D("uniforms.x_shape",s,t)})) {
                  k = i32(${D("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${D("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Qo=(e,t,n)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${D("uniforms.pads",s,n)};
                if (k < 0)  {
                  k += i32(${D("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${D("uniforms.x_shape",s,t)})) {
                  k -= i32(${D("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${D("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Jo=(e,t,n)=>{switch(n.mode){case 0:return Ko(e,t,n.pads.length);case 1:return Xo(e,t,n.pads.length);case 2:return Yo(e,t,n.pads.length);case 3:return Qo(e,t,n.pads.length);default:throw new Error("Invalid mode")}},eu=(e,t)=>{const n=S.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:S.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...M(e[0].dims,n));const o=["rank"],u=c=>{const l=N("output",e[0].dataType,n.length),d=E("x",e[0].dataType,r.length),p=d.type.value,f=Jo(l,r.length,t),h=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&h.push({name:"constant_value",type:a?p:"f32"}),`
            ${c.registerUniforms(h).declareVariables(d,l)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${l.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S.size(n)/64)},programUniforms:i}),getShaderSource:u}},tu=(e,t)=>{if(e.length>1){const n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,i=new Int32Array(2*s).fill(0);if(e.length>=4){const o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)i[Number(o[u])]=Number(n[u]),i[Number(o[u])+s]=Number(n[u+o.length])}else n.forEach((o,u)=>i[Number(u)]=Number(o));const a=[];return i.forEach(o=>a.push(o)),{mode:t.mode,value:r,pads:a}}else return t},lp=(e,t)=>{Ho(e.inputs);const n=tu(e.inputs,t);e.compute(eu(e.inputs,n),{inputs:[0]})}}}),Ft,Fr,Gr,Zr,Hr,nu,ru,Kr,Xr,dp,pp,Yr,fp,hp,Qr,mp,gp,yp,_p,Ay=C({"web/lib/wasm/jsep/webgpu/ops/pool.ts"(){We(),q(),G(),Z(),Ft=e=>{if(ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fr=(e,t,n)=>{const r=t.format==="NHWC",s=e.dims.slice();r&&s.splice(1,0,s.pop());const i=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=i?t.dilations.slice():[],c=t.pads.slice();er.adjustPoolAttributes(n,s,a,o,u,c);const l=er.computePoolOutputShape(n,s,o,u,a,c,t.autoPad),d=Object.assign({},t);i?Object.assign(d,{kernelShape:a,strides:o,pads:c,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:a,strides:o,pads:c,cacheKey:t.cacheKey});const p=l.slice();return p.push(p.splice(1,1)[0]),[d,r?p:l]},Gr=(e,t)=>{const n=t.format==="NHWC",r=S.size(e),s=S.size(t.kernelShape),i=[{type:12,data:r},{type:12,data:s}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){const o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],l=t.pads[t.pads.length-1],d=!!(c+l);i.push({type:12,data:o},{type:12,data:u},{type:12,data:c},{type:12,data:l}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){const f=t.kernelShape[t.kernelShape.length-2],h=t.strides[t.strides.length-2],m=t.pads[t.pads.length/2-2],y=t.pads[t.pads.length-2];p=!!(m+y),i.push({type:12,data:f},{type:12,data:h},{type:12,data:m},{type:12,data:y}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,a,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const o=S.computeStrides(t.kernelShape);i.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});const u=t.pads.reduce((c,l)=>c+l);return[i,a,!!u,!1,!1]}},Zr=(e,t,n,r,s,i,a,o,u,c,l,d)=>{const p=s.format==="NHWC",f=t.type.value,h=N("output",t.type.tensor,r);if(s.kernelShape.length<=2){let m="",y="",_="";const g=n-(p?2:1);if(l?m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,s.kernelShape.length===2){const w=n-(p?3:2);d?y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${w}] < 0 || xIndices[${w}] >= uniforms.x_shape[${w}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${y}
              ${m}
              ${_}
              ${a}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const m=s.kernelShape.length,y=s.pads.length;let _="";return c?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(u).declareVariables(t,h)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${h.offsetToIndices("global_idx")};
              var xIndices = ${h.offsetToIndices("global_idx")};

              var offsets: array<u32, ${m}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${m-1}u; j++) {
                  offsets[j] = offset / ${D("uniforms.kernelStrides","j",m)};
                  offset -= offsets[j] * ${D("uniforms.kernelStrides","j",m)};
                }
                offsets[${m-1}] = offset;

                isPad = false;
                for (var j = ${n-m}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${D("uniforms.strides",`j - ${n-m}u`,m)}
                    + offsets[j - ${n-m}u] - ${D("uniforms.pads","j - 2u",y)};
                  ${_}
              }
              ${a}

              output[global_idx] = value;
            }`}},Hr=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,nu=e=>`${Hr(e)};${e.countIncludePad}`,ru=e=>`${Hr(e)};${e.storageOrder};${e.dilations}`,Kr=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Xr=(e,t,n,r)=>{const[s,i]=Fr(t,r,n),a=E("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;";let c="";s.countIncludePad?c+=`value /= ${o}(uniforms.kernelSize);`:c+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;const[l,d,p,f,h]=Gr(i,s);l.push(...M(t.dims,i));const m=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${h}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(S.size(i)/64)},programUniforms:l}),getShaderSource:y=>Zr(y,a,t.dims.length,i.length,s,u,c,0,d,p,f,h)}},dp=e=>{const t=e.count_include_pad!==0,n=Kr(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");const r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:nu(r)}},pp=(e,t)=>{Ft(e.inputs),e.compute(Xr("AveragePool",e.inputs[0],!1,t))},Yr={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},fp=e=>{const t=e.format;return{format:t,...Yr,cacheKey:t}},hp=(e,t)=>{Ft(e.inputs),e.compute(Xr("GlobalAveragePool",e.inputs[0],!0,t))},Qr=(e,t,n,r)=>{const[s,i]=Fr(t,r,n),a=`
      value = max(x_val, value);
    `,o="",u=E("x",t.dataType,t.dims.length),c=["rank"],[l,d,p,f,h]=Gr(i,s);return l.push(...M(t.dims,i)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${h}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(S.size(i)/64)},programUniforms:l}),getShaderSource:m=>Zr(m,u,t.dims.length,i.length,s,a,o,t.dataType===10?-65504:-1e5,d,p,f,h)}},mp=(e,t)=>{Ft(e.inputs),e.compute(Qr("MaxPool",e.inputs[0],!1,t))},gp=e=>{const t=e.storage_order,n=e.dilations,r=Kr(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");const s={storageOrder:t,dilations:n,...r,cacheKey:""};return{...s,cacheKey:ru(s)}},yp=e=>{const t=e.format;return{format:t,...Yr,cacheKey:t}},_p=(e,t)=>{Ft(e.inputs),e.compute(Qr("GlobalMaxPool",e.inputs[0],!0,t))}}}),su,iu,vp,wp,Oy=C({"web/lib/wasm/jsep/webgpu/ops/quantize-linear.ts"(){q(),G(),he(),Z(),su=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,i)=>i===t.axis||s===e[0].dims[i]).reduce((s,i)=>s&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");const n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},iu=(e,t)=>{const n=S.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,s=r===3,i=e[0].dims,a=e[1].dataType,o=S.size(i),u=r===3||r===2,c=u?[Math.ceil(S.size(e[0].dims)/4)]:e[0].dims,l=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(S.size(d.dims)/4)]:d.dims:void 0,f=l.length===0||l.length===1&&l[0]===1,h=f===!1&&l.length===1,m=fe(o),y=f&&(!u||m===4),_=y?m:1,g=y&&!u?m:1,v=E("input",u?12:r,c.length,g),w=E("scale",a,l.length),$=d?E("zero_point",u?12:r,p.length):void 0,x=N("output",a,i.length,_),b=[v,w];$&&b.push($);const k=[c,l];d&&k.push(p);const R=[{type:12,data:o/_},{type:12,data:n},{type:12,data:t.blockSize},...M(...k,i)],O=T=>{const ne=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${T.registerUniforms(ne).declareVariables(...b,x)}
      ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${x.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${w.getByOffset("0")}`:h?`
            let scale_index = ${x.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${w.getByOffset("scale_index")};`:`
            var scale_indices: ${w.type.indices} = output_indices;
            let index = ${w.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${w.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${w.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${$?f?u?`
                let zero_point_input = ${$.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${$.getByOffset("0")}`:h?u?`
                let zero_point_index = ${x.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${$.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${x.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${$.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${w.indicesToOffset("scale_indices")};
                let zero_point_input = ${$.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${$.getByIndices("scale_indices")};`:`let zero_point_value = ${u?s?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${x.setByOffset("global_idx",`${x.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getShaderSource:O,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:R})}},vp=(e,t)=>{su(e.inputs,t),e.compute(iu(e.inputs,t))},wp=e=>ue({axis:e.axis,blockSize:e.blockSize})}}),au,ou,$p,Ry=C({"web/lib/wasm/jsep/webgpu/ops/range.ts"(){We(),q(),Z(),au=(e,t,n)=>{const r=e===t,s=e<t&&n<0,i=e>t&&n>0;if(r||s||i)throw new Error("Range these inputs' contents are invalid.")},ou=(e,t,n,r)=>{const s=Math.abs(Math.ceil((t-e)/n)),i=[s],a=s,o=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...M(i)],u=c=>{const l=N("output",r,i.length),d=l.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${c.registerUniforms(p).declareVariables(l)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},$p=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ce.webgpu.validateInputContent&&au(t,n,r),e.compute(ou(t,n,r,e.inputs[0].dataType),{inputs:[]})}}}),uu,cu,lu,du,pu,fu,hu,mu,gu,yu,_u,Jr,vu,wu,$u,bu,xu,bp,xp,By=C({"web/lib/wasm/jsep/webgpu/ops/resize.ts"(){q(),G(),he(),Z(),uu=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},cu=(e,t,n)=>{t.every(s=>s>=0&&s<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));const r=new Array(n).fill(1);return t.forEach((s,i)=>r[s]=e[i]),r},lu=(e,t,n,r,s,i)=>{const[a,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(l=>i.push(l));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(l=>r.push(l)),r.length!==0&&r.length!==c&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");uu(r,t),t.axes.length>0&&cu(r,t.axes,c).forEach((l,d)=>r[d]=l)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(l=>s.push(Number(l))),s.length!==0&&s.length!==c&&n>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof s<"u"&&r.length>0&&s.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},du=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",pu=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",fu=(e,t,n)=>{const r=new Array(n).fill(0).concat(new Array(n).fill(1)),s=e.length===0?r:e.slice();return t.length>0?(t.forEach((i,a)=>{r[i]=s[a],r[a+n]=s[t.length+a]}),r):s},hu=(e,t,n,r)=>{let s=[];if(n.length>0)if(r.length>0){if(e.forEach(i=>s.push(i)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((i,a)=>s[i]=n[a])}else n.forEach(i=>s.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((i,a)=>Math.round(i*t[a]))}return s},mu=(e,t,n)=>{const r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);const s=e.slice();return n.axes.length>0?(n.axes.forEach(i=>t[i]=r),n.axes.forEach(i=>s[i]=Math.round(e[i]*t[i]))):(t.fill(r,0,t.length),s.forEach((i,a)=>s[a]=Math.round(i*t[a]))),s},gu=(e,t,n,r,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${D("uniforms.scales","i",r)};
        var roi_low = ${D("uniforms.roi","i",s)};
        var roi_hi = ${D("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${D("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${D("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,yu=(e,t,n,r,s,i,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${D("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${D("uniforms.roi","i",i)};
          var roi_hi = ${D("uniforms.roi",`i + ${n.length}`,i)};
          var input_shape_i = ${D("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${D("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,_u=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${D("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Jr=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",vu=(e,t,n,r,s)=>{const[i,a,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Jr(e,u,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${a}];
      var col:${c} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},wu=(e,t,n,r,s,i,a,o,u,c)=>{const l=n.length===2,[d,p]=l?[0,1]:[2,3],f=e.type.value,h=m=>{const y=m===d?"row":"col";return`
      fn ${y}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",m)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[m]},
        ${r[m]}, ${n[m]}, ${i[m]}, ${i[m]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[m]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${y}: ${f} = originalIdx + ${f}(i);
          if (${y} < 0 || ${y} >= ${n[m]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${y} = max(0, min(${y}, ${n[m]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",m,`u32(${y})`)};
          data[i + 1] = ${m===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${h(d)};
    ${h(p)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},$u=(e,t,n,r,s)=>{const[i,a,o,u,c]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Jr(e,c,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${l} = originalIndices[${a}];
      var height:${l} = originalIndices[${o}];
      var width:${l} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${l} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${l} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${l} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${l} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${l} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${l} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${l} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${l} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${l} = abs(depth - ${l}(depth1));
      var dx2: ${l} = abs(${l}(depth2) - depth);
      var dy1: ${l} = abs(height - ${l}(height1));
      var dy2: ${l} = abs(${l}(height2) - height);
      var dz1: ${l} = abs(width - ${l}(width1));
      var dz2: ${l} = abs(${l}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},bu=(e,t,n,r,s,i)=>{const a=e.dims,o=fu(i,t.axes,a.length);let u=hu(a,r,s,t.axes),c=r.slice();r.length===0&&(c=a.map((g,v)=>g===0?1:u[v]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=mu(a,c,t)));const l=N("output",e.dataType,u.length),d=E("input",e.dataType,a.length),p=S.size(u),f=a.length===u.length&&a.every((g,v)=>g===u[v]),h=t.coordinateTransformMode==="tf_crop_and_resize",m=t.extrapolationValue,y=d.type.value,_=g=>`
      ${f?"":`
      ${du(t.coordinateTransformMode,y)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${_u(d,a)};
              ${pu(t.nearestMode,n,y)};
              ${yu(d,l,a,u,c.length,o.length,h)};
              `;case"linear":return`
              ${gu(l,a,u,c.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${vu(d,l,a,h,m)}`;if(a.length===3||a.length===5)return`${$u(d,l,a,h,m)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${wu(d,l,a,u,c,o,t.cubicCoeffA,h,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",o.length).declareVariables(d,l)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${l.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${c.length>0?c:""}|${s.length>0?s:""}|${o.length>0?o:""}|${f}|${a}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:c},{type:1,data:o},...M(a,u)]})}},xu=e=>{const t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},bp=(e,t)=>{const n=[],r=[],s=[],i=xu(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");lu(e.inputs,t,i,n,r,s),e.compute(bu(e.inputs[0],t,i,n,r,s),{inputs:[0]})},xp=e=>{const t=e.antialias,n=e.axes,r=e.coordinateTransformMode,s=e.cubicCoeffA,i=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return ue({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:s,excludeOutside:i,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:c})}}}),Su,ku,Sp,Py=C({"web/lib/wasm/jsep/webgpu/ops/rotary-embedding.ts"(){q(),G(),he(),Z(),Su=(e,t)=>{const[n,r,s,i]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!S.areEqual(r.dims,[])&&!S.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!S.areEqual(s.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");const u=n.dims[0],c=n.dims[n.dims.length-2],l=s.dims[0],d=S.sizeFromDimension(n.dims,1)/c,p=o===0?s.dims[1]*2:d/a;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(c!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(p/2!==s.dims[1]&&o/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(c>l)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ku=(e,t)=>{const{interleaved:n,numHeads:r,rotaryEmbeddingDim:s,scale:i}=t,a=e[0].dims[0],o=S.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],c=o/u,l=e[2].dims[1],d=s===0?l*2:c/r,p=new Array(a,u,c/d,d-l),f=S.computeStrides(p),h=[{type:1,data:i},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[o,c,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,d,u*d,1]}):[],...M(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],m=y=>{const _=E("input",e[0].dataType,e[0].dims.length),g=E("position_ids",e[1].dataType,e[1].dims.length),v=E("cos_cache",e[2].dataType,e[2].dims.length),w=E("sin_cache",e[3].dataType,e[3].dims.length),$=N("output",e[0].dataType,e[0].dims.length);return y.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${y.declareVariables(_,g,v,w,$)}

        ${y.mainStart(Pt)}
          let half_rotary_emb_dim = uniforms.${v.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",N("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${_.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${w.get("position_id","bsnh[3]")};
            ${$.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${w.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${$.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${$.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ue({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S.size(p)/Pt)},programUniforms:h})}},Sp=(e,t)=>{Su(e.inputs,t),e.compute(ku(e.inputs,t))}}}),Iu,Eu,kp,My=C({"web/lib/wasm/jsep/webgpu/ops/skip-layer-norm.ts"(){q(),G(),Z(),Iu=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");const t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");const s=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){const a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){const a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},Eu=(e,t,n,r)=>{const s=t.simplified,i=e[0].dims,a=S.size(i),o=i,u=a,c=i.slice(-1)[0],l=r?i.slice(0,-1).concat(1):[],d=!s&&e.length>3,p=e.length>4,f=r&&n>1,h=r&&n>2,m=n>3,y=64,_=fe(c),g=[{type:12,data:u},{type:12,data:_},{type:12,data:c},{type:1,data:t.epsilon}],v=$=>{const x=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],b=[E("x",e[0].dataType,e[0].dims,_),E("skip",e[1].dataType,e[1].dims,_),E("gamma",e[2].dataType,e[2].dims,_)];d&&b.push(E("beta",e[3].dataType,e[3].dims,_)),p&&b.push(E("bias",e[4].dataType,e[4].dims,_)),b.push(N("output",e[0].dataType,o,_)),f&&b.push(N("mean_output",1,l)),h&&b.push(N("inv_std_output",1,l)),m&&b.push(N("input_skip_bias_sum",e[0].dataType,o,_));const k=me(e[0].dataType),R=me(1,_);return`

      ${$.registerUniforms(x).declareVariables(...b)}
      var<workgroup> sum_shared : array<${R}, ${y}>;
      var<workgroup> sum_squared_shared : array<${R}, ${y}>;

      ${$.mainStart([y,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${y};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${y};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${y-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":k+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${m?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${It(k,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${y};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ot("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ot("square_sum",_)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${h?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${k}(mean)`}) *
            ${k}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},w=[{dims:o,dataType:e[0].dataType}];return n>1&&w.push({dims:l,dataType:1}),n>2&&w.push({dims:l,dataType:1}),n>3&&w.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${h};${m}`,inputDependencies:e.map(($,x)=>"type")},getShaderSource:v,getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(u/c)},programUniforms:g})}},kp=(e,t)=>{Iu(e.inputs);const r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Eu(e.inputs,t,e.outputCount,!1),{outputs:r})}}}),Tu,Gt,Cu,es,zu,Au,Ip,Ep,Dy=C({"web/lib/wasm/jsep/webgpu/ops/slice.ts"(){q(),G(),he(),Z(),Tu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Gt=(e,t)=>{const n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Cu=(e,t)=>{if(e.length>1){const n=Gt(e,1),r=Gt(e,2);let s=Gt(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),ue({starts:n,ends:r,axes:s})}else return t},es=(e,t,n,r,s)=>{let i=e;return e<0&&(i+=n[r[t]]),s[t]<0?Math.max(0,Math.min(i,n[r[t]]-1)):Math.max(0,Math.min(i,n[r[t]]))},zu=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${D("uniforms.input_shape","i",n.length)};
            let steps_i = ${D("uniforms.steps","i",n.length)};
            let signs_i = ${D("uniforms.signs","i",n.length)};
            let starts_i = ${D("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Au=(e,t)=>{const n=e[0].dims,r=S.size(n),s=t.axes.length>0?S.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()];let i=Gt(e,4);i.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(s.length).fill(1));const a=t.starts.map((_,g)=>es(_,g,n,s,i)),o=t.ends.map((_,g)=>es(_,g,n,s,i));if(s.length!==a.length||s.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==n.length)for(let _=0;_<n.length;++_)s.includes(_)||(a.splice(_,0,0),o.splice(_,0,n[_]),i.splice(_,0,1));const u=i.map(_=>Math.sign(_));i.forEach((_,g,v)=>{if(_<0){const w=(o[g]-a[g])/_,$=a[g],x=$+w*i[g];a[g]=x,o[g]=$,v[g]=-_}});const c=n.slice(0);s.forEach((_,g)=>{c[_]=Math.ceil((o[_]-a[_])/i[_])});const l={dims:c,dataType:e[0].dataType},d=N("output",e[0].dataType,c.length),p=E("input",e[0].dataType,e[0].dims.length),f=S.size(c),h=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],m=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:i},...M(e[0].dims,c)],y=_=>`
      ${_.registerUniforms(h).declareVariables(p,d)}
        ${zu(p,d,n)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[l],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:m})}},Ip=(e,t)=>{Tu(e.inputs,t);const n=Cu(e.inputs,t);e.compute(Au(e.inputs,n),{inputs:[0]})},Ep=e=>{const t=e.starts,n=e.ends,r=e.axes;return ue({starts:t,ends:n,axes:r})}}}),Ou,Ru,Tp,Cp,Ny=C({"web/lib/wasm/jsep/webgpu/ops/softmax.ts"(){q(),G(),he(),dt(),Z(),Ou=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ru=(e,t)=>{const n=e.inputs[0],r=n.dims,s=S.size(r),i=64,a=r.length,o=S.normalizeAxis(t.axis,a),u=o<r.length-1;let c,l=[];u?(l=Array.from({length:a},(b,k)=>k),l[o]=a-1,l[a-1]=o,c=e.compute(Ce(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;const d=c.dims,p=d[a-1],f=s/p,h=fe(p),m=p/h,y=(b,k)=>k===4?`max(max(${b}.x, ${b}.y), max(${b}.z, ${b}.w))`:k===2?`max(${b}.x, ${b}.y)`:k===3?`max(max(${b}.x, ${b}.y), ${b}.z)`:b,_=E("x",c.dataType,c.dims,h),g=N("result",c.dataType,c.dims,h),v=_.type.value,w=me(c.dataType)==="f32"?`var threadMax = ${v}(-3.402823e+38f);`:`var threadMax = ${v}(-65504.0h);`,$=b=>`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${i}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${b.registerUniform("packedCols","i32").declareVariables(_,g)}
      ${b.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${i};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${w}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${v}(${y("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${v}(${ot("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,x=e.compute({name:"Softmax",shaderCache:{hint:`${h}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:$},{inputs:[c],outputs:[u?-1:0]})[0];u&&e.compute(Ce(x,l),{inputs:[x]})},Tp=(e,t)=>{Ou(e.inputs),Ru(e,t)},Cp=e=>ue({axis:e.axis})}}),Bu,Pu,Mu,Du,Nu,zp,Ap,jy=C({"web/lib/wasm/jsep/webgpu/ops/split.ts"(){q(),G(),he(),Z(),Bu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Pu=(e,t)=>{const n=[];let r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>n.push(Number(s))),r=n.length),ue({numOutputs:r,axis:t.axis,splitSizes:n})},Mu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${D("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Du=e=>{const t=e.length,n=[];for(let r=0;r<t;++r){const s=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(s):r===0?n.push(`if (output_number == ${r}u) { ${s} }`):r===t-1?n.push(`else { ${s} }`):n.push(`else if (output_number == ${r}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Nu=(e,t)=>{const n=e[0].dims,r=S.size(n),s=e[0].dataType,i=S.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),o=E("input",s,n.length),u=new Array(t.numOutputs),c=[],l=[];let d=0;const p=[{type:12,data:r}];for(let h=0;h<t.numOutputs;h++){d+=t.splitSizes[h],u[h]=d;const m=n.slice();m[i]=t.splitSizes[h],l.push(m),a[h]=N(`output${h}`,s,m.length),c.push({dims:l[h],dataType:e[0].dataType})}p.push({type:12,data:u},...M(n,...l));const f=h=>`
  ${h.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${Mu(u.length)}
  ${Du(a)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${D("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},zp=(e,t)=>{Bu(e.inputs);const n=e.inputs.length===1?t:Pu(e.inputs,t);e.compute(Nu(e.inputs,n),{inputs:[0]})},Ap=e=>{const t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ue({axis:t,numOutputs:r,splitSizes:n})}}}),ju,Uu,Op,Uy=C({"web/lib/wasm/jsep/webgpu/ops/where.ts"(){q(),G(),Z(),ju=(e,t,n,r,s)=>{const i=N("output_data",s,n.length,4),a=E("a_data",t[1].dataType,t[1].dims.length,4),o=E("b_data",t[2].dataType,t[2].dims.length,4),u=E("c_data",t[0].dataType,t[0].dims.length,4);let c;const l=(d,p,f)=>`select(${p}, ${d}, ${f})`;if(!r)c=i.setByOffset("global_idx",l(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{const d=(p,f,h="")=>{const m=`a_data[index_a${f}][component_a${f}]`,y=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${i.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,i)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,i)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,i)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${h}(${l(m,y,_)});
          `};s===9?c=`
            var data = vec4<u32>(0);
            ${d("data",0,"u32")}
            ${d("data",1,"u32")}
            ${d("data",2,"u32")}
            ${d("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${d("output_data[global_idx]",0)}
            ${d("output_data[global_idx]",1)}
            ${d("output_data[global_idx]",2)}
            ${d("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,o,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},Uu=e=>{const t=e[1].dims,n=e[2].dims,r=e[0].dims,s=e[1].dataType,i=!(S.areEqual(t,n)&&S.areEqual(n,r));let a=t,o=S.size(t);if(i){const c=Bt.calcShape(Bt.calcShape(t,n,!1),r,!1);if(!c)throw new Error("Can't perform where op on the given tensors");a=c,o=S.size(a)}const u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>ju(c,e,a,i,s),getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...M(r,t,n,a)]})}},Op=e=>{e.compute(Uu(e.inputs))}}}),Rp,Ly=C({"web/lib/wasm/jsep/webgpu/op-resolve-rules.ts"(){sy(),si(),iy(),ay(),oy(),uy(),cy(),fy(),gy(),yy(),_y(),vy(),wy(),$y(),by(),xy(),Sy(),ky(),Iy(),Ey(),Ty(),Rd(),Cy(),tp(),zy(),Ay(),Oy(),Ry(),ri(),By(),Py(),My(),Dy(),Ny(),jy(),rp(),dt(),ii(),Uy(),Rp=new Map([["Abs",[Ol]],["Acos",[Rl]],["Acosh",[Bl]],["Add",[hd]],["ArgMax",[Tl,bs]],["ArgMin",[El,bs]],["Asin",[Pl]],["Asinh",[Ml]],["Atan",[Dl]],["Atanh",[Nl]],["Attention",[Cl]],["AveragePool",[pp,dp]],["BatchNormalization",[zl]],["BiasAdd",[Al]],["BiasSplitGelu",[fd]],["Cast",[Ul,jl]],["Ceil",[Vl]],["Clip",[Ll]],["Concat",[Sd,kd]],["Conv",[Es,Is]],["ConvTranspose",[Md,Pd]],["Cos",[ql]],["Cosh",[Wl]],["CumSum",[Dd,Nd]],["DepthToSpace",[jd,Ud]],["DequantizeLinear",[vp,wp]],["Div",[md]],["Einsum",[Ld,Vd]],["Elu",[Fl,nn]],["Equal",[gd]],["Erf",[Gl]],["Exp",[Zl]],["Expand",[qd]],["FastGelu",[Wd]],["Floor",[Hl]],["FusedConv",[Es,Is]],["Gather",[Gd,Fd]],["GatherElements",[Xd,Kd]],["GatherBlockQuantized",[Zd,Hd]],["Gelu",[Kl]],["Gemm",[Qd,Yd]],["GlobalAveragePool",[hp,fp]],["GlobalMaxPool",[_p,yp]],["Greater",[wd]],["GreaterOrEqual",[bd]],["GroupQueryAttention",[ip,sp]],["HardSigmoid",[rd,nd]],["InstanceNormalization",[ap]],["LayerNormalization",[op]],["LeakyRelu",[Xl,nn]],["Less",[$d]],["LessOrEqual",[xd]],["Log",[dd]],["MatMul",[Od]],["MatMulNBits",[up,cp]],["MaxPool",[mp,gp]],["Mul",[yd]],["MultiHeadAttention",[ep,Jd]],["Neg",[Ql]],["Not",[Yl]],["Pad",[lp]],["Pow",[_d]],["QuickGelu",[pd,nn]],["Range",[$p]],["Reciprocal",[Jl]],["ReduceMin",[bl]],["ReduceMean",[yl]],["ReduceMax",[$l]],["ReduceSum",[Sl]],["ReduceProd",[xl]],["ReduceL1",[_l]],["ReduceL2",[vl]],["ReduceLogSum",[Il]],["ReduceLogSumExp",[wl]],["ReduceSumSquare",[kl]],["Relu",[ed]],["Resize",[bp,xp]],["RotaryEmbedding",[Sp]],["Sigmoid",[td]],["Sin",[sd]],["Sinh",[id]],["Slice",[Ip,Ep]],["SkipLayerNormalization",[kp]],["Split",[zp,Ap]],["Sqrt",[ad]],["Softmax",[Tp,Cp]],["Sub",[vd]],["Tan",[od]],["Tanh",[ud]],["ThresholdedRelu",[ld,nn]],["Tile",[np]],["Transpose",[il,al]],["Where",[Op]]])}}),Bp,Vy=C({"web/lib/wasm/jsep/webgpu/program-manager.ts"(){We(),Ke(),Z(),Bp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,s){He(e.programInfo.name);const i=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);const o=[];for(const c of t)o.push({binding:o.length,resource:{buffer:c.buffer}});for(const c of n)o.push({binding:o.length,resource:{buffer:c.buffer}});s&&o.push({binding:o.length,resource:s});const u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){const c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ve(e.programInfo.name)}dispose(){}build(e,t){He(e.name);const n=this.backend.device,r=[];n.features.has("shader-f16")&&r.push("enable f16;");const s=sl(t,this.backend.device.limits),i=e.getShaderSource(s),a=`${r.join(`
`)}
${s.additionalImplementations}
${i}`,o=n.createShaderModule({code:a,label:e.name});oe("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);const u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ve(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){const t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&n<=s&&r<=s)return[t,n,r];const i=t*n*r;let a=Math.ceil(Math.sqrt(i));if(a>s){if(a=Math.ceil(Math.cbrt(i)),a>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}}),Lu,Vu,qu,Pp,qy=C({"web/lib/wasm/jsep/backend-webgpu.ts"(){We(),q(),Ke(),Jc(),ny(),Ly(),Vy(),Lu=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);const n=[];for(let r=0;r<e.length;++r){const s=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${s}`);break}case"rank":{const i=e[r].dims.length;n.push(`${s};${i}`);break}case"dims":{const i=e[r].dims.join(",");n.push(`${s};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Vu=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Lu(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},qu=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Pp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;const n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n};t.features.has("chromium-experimental-timestamp-query-inside-passes")?n.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&n.push("timestamp-query"),t.features.has("shader-f16")&&n.push("shader-f16"),this.device=await t.requestDevice(r),this.adapterInfo=new qu(t.info||await t.requestAdapterInfo()),this.gpuDataManager=el(this),this.programManager=new Bp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Js(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){const e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;He(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{const t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let r=0;r<t.length/2;r++){const s=n[r],i=s.kernelId,a=this.kernels.get(i),o=a.kernelType,u=a.kernelName,c=s.programName,l=s.inputTensorViews,d=s.outputTensorViews,p=t[r*2],f=t[r*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=p);const h=Number(p-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(h)||!Number.isSafeInteger(m))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(y=>({dims:y.dims,dataType:gt(y.dataType)})),outputsMetadata:d.map(y=>({dims:y.dims,dataType:gt(y.dataType)})),kernelId:i,kernelType:o,kernelName:u,programName:c,startTime:h,endTime:m});else{let y="";l.forEach((g,v)=>{y+=`input[${v}]: [${g.dims}] | ${gt(g.dataType)}, `});let _="";d.forEach((g,v)=>{_+=`output[${v}]: [${g.dims}] | ${gt(g.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${u}|${c}" ${y}${_}execution time: ${m-h} ns`)}Xn("GPU",`${c}::${p}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Ve()}run(e,t,n,r,s,i){He(e.name);const a=[];for(let g=0;g<t.length;++g){const v=t[g].data;if(v===0)continue;const w=this.gpuDataManager.get(v);if(!w)throw new Error(`no GPU data for input: ${v}`);a.push(w)}const{outputs:o,dispatchGroup:u,programUniforms:c}=e.getRunData(t),l=n.length===0?o.map((g,v)=>v):n;if(l.length!==o.length)throw new Error(`Output size ${l.length} must be equal to ${o.length}.`);const d=[],p=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(l[g])||l[g]<-3||l[g]>=i)throw new Error(`Invalid output index: ${l[g]}`);if(l[g]===-3)continue;const v=l[g]===-1,w=l[g]===-2,$=v||w?s(o[g].dataType,o[g].dims):r(l[g],o[g].dataType,o[g].dims);if(d.push($),$.data===0)continue;const x=this.gpuDataManager.get($.data);if(!x)throw new Error(`no GPU data for output: ${$.data}`);if(v&&this.temporaryData.push(x),w){let b=this.kernelPersistentData.get(this.currentKernelId);b||(b=[],this.kernelPersistentData.set(this.currentKernelId,b)),b.push(x)}p.push(x)}if(a.length!==t.length||p.length!==d.length){if(p.length===0)return Ve(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(c){let g=0;const v=[];c.forEach(b=>{const k=typeof b.data=="number"?[b.data]:b.data;if(k.length===0)return;const R=b.type===10?2:4;let O,T;b.type===10?(T=k.length>4?16:k.length>2?8:k.length*R,O=k.length>4?16:R*k.length):(T=k.length<=2?k.length*R:16,O=16),g=Math.ceil(g/T)*T,v.push(g);const ne=b.type===10?8:4;g+=k.length>4?Math.ceil(k.length/ne)*O:k.length*R});const w=16;g=Math.ceil(g/w)*w;const $=new ArrayBuffer(g);c.forEach((b,k)=>{const R=v[k],O=typeof b.data=="number"?[b.data]:b.data;if(b.type===6)new Int32Array($,R,O.length).set(O);else if(b.type===12)new Uint32Array($,R,O.length).set(O);else if(b.type===10)new Uint16Array($,R,O.length).set(O);else if(b.type===1)new Float32Array($,R,O.length).set(O);else throw new Error(`Unsupported uniform type: ${gt(b.type)}`)});const x=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(x.buffer,0,$,0,g),this.gpuDataManager.release(x.id),f={offset:0,size:g,buffer:x.buffer}}const h=this.programManager.normalizeDispatchGroupSize(u),m=h[1]===1&&h[2]===1,y=Vu(e,t,m);let _=this.programManager.getArtifact(y);if(_||(_=this.programManager.build(e,h),this.programManager.setArtifact(y,_),oe("info",()=>`[artifact] key: ${y}, programName: ${e.name}`)),c&&_.uniformVariablesInfo){if(c.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${c.length} in program "${_.programInfo.name}".`);for(let g=0;g<c.length;g++){const v=c[g],w=v.type,$=typeof v.data=="number"?1:v.data.length,[x,b]=_.uniformVariablesInfo[g];if(w!==x||$!==b)throw new Error(`Uniform variable ${g} mismatch: expect type ${x} with size ${b}, got type ${w} with size ${$} in program "${_.programInfo.name}".`)}}if(oe("info",()=>`[ProgramManager] run "${e.name}" (key=${y}) with ${h[0]}x${h[1]}x${h[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){const g={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(_,a,p,h,f),Ve(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){const s=Rp.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);const i={kernelType:e,kernelName:r,kernelEntry:s[0],attributes:[s[1],n]};this.kernels.set(t,i)}releaseKernel(e){const t=this.kernelPersistentData.get(e);if(t){for(const n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){const r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);const s=r.kernelType,i=r.kernelName,a=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),oe("info",()=>`[WebGPU] Start to run kernel "[${s}] ${i}"...`);const u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(c){return n.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${i}" failed. ${c}`)),1}finally{u&&n.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${s}] ${i}": ${c.message}`:null));for(const c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));const i=s.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,i);return s.set(t,[a,n]),a}unregisterBuffers(e){const t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){const t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{const r=await vs(this,e,t);return ei(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){oe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){oe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){oe("info","replay"),this.sessionStatus="replaying";const e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){const s=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(i.computePipeline),s.setBindGroup(0,i.bindGroup),s.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}}),Wu,ts,ns,Fu,Mp,Wy=C({"web/lib/wasm/jsep/webnn/tensor-manager.ts"(){Ke(),Wu=1,ts=()=>Wu++,ns=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){return this.tensorEntry?.[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(const[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(const[n,r,s]of this.tensorCache)if(t===n){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[n,r,s],!0}return!1}async ensureTensor(e,t,n){if(this.tensorEntry){const[i,a,o]=this.tensorEntry;if(a===e&&o.every((u,c)=>u===t[c]))return i}for(const[i,a,o]of this.tensorCache)if(a===e&&o.every((u,c)=>u===t[c])){if(n&&this.tensorEntry){oe("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);const u=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(i,u)}return this.tensorEntry=[i,a,o],i}oe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);const r=MLTensorUsage.READ|MLTensorUsage.WRITE,s=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:r});return this.tensorEntry=[s,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&(this.mlContext?.writeTensor(s,this.activeUpload),this.activeUpload=void 0),s}upload(e){if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}this.mlContext?.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},Fu=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){const e=ts();return this.tensorsById.set(e,new ns),e}releaseTensorId(e){const t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(const[n,r]of this.tensorIdsByContext)if(r.has(e)){r.delete(e),r.size===0&&this.tensorIdsByContext.delete(n);break}}}async ensureTensor(e,t,n,r){oe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${n}, copyOld: ${r}}`);const s=this.tensorsById.get(e);if(!s)throw new Error("Tensor not found.");return s.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),this.tensorIdsByContext.get(this.backend.currentContext)?.add(e),s.ensureTensor(t,n,r)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return oe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){const t=this.tensorIdsByContext.get(e);if(t){for(const n of t)this.tensorsById.get(n).destroy(),this.tensorsById.delete(n);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,n,r){for(const[a,o]of this.tensorsById)if(o.trySelectTensor(e,t))return a;const s=ts();this.tensorsById.set(s,new ns(e,[t,n,r]));let i=this.tensorIdsByContext.get(e);return i||(i=new Set,this.tensorIdsByContext.set(e,i)),i.add(s),s}},Mp=(...e)=>new Fu(...e)}}),rs,Dp,Fy=C({"web/lib/wasm/jsep/backend-webnn.ts"(){q(),wt(),Jc(),Wy(),Ke(),rs=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Dp=class{constructor(e){this.tensorManager=Mp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Js(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){const e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e)}onReleaseSession(e){const t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);const n=this.sessionIdsByMLContext.get(t);n.delete(e),n.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){oe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r){const s=rs.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,s,n,r)}uploadTensor(e,t){if(!ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");oe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{const n=await this.tensorManager.download(e);return ei(n,t)}}registerMLTensor(e,t,n){const r=rs.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);const s=this.tensorManager.registerTensor(this.currentContext,e,r,n);return oe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${r}, dimensions: ${n}} -> {tensorId: ${s}}`),s}flush(){}}}}),Np={};cr(Np,{init:()=>jp});var Bn,Gu,jp,Gy=C({"web/lib/wasm/jsep/init.ts"(){q(),qy(),Ke(),G(),Fy(),Bn=class Up{constructor(t,n,r,s){this.module=t,this.dataType=n,this.data=r,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");const t=S.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(S.size(t)!==S.size(this.dims))throw new Error("Invalid new shape");return new Up(this.module,this.dataType,this.data,t)}},Gu=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;const r=e.HEAPU32;let s=n>>>2;this.opKernelContext=r[s++];const i=r[s++];this.outputCount=r[s++],this.customDataOffset=r[s++],this.customDataSize=r[s++];const a=[];for(let o=0;o<i;o++){const u=r[s++],c=r[s++],l=r[s++],d=[];for(let p=0;p<l;p++)d.push(r[s++]);a.push(new Bn(e,u,c,d))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){const n=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,r=t?.outputs??[],s=(a,o,u)=>new Bn(this.module,o,this.output(a,u),u),i=(a,o)=>{const u=kt(a,o);if(!u)throw new Error(`Unsupported data type: ${a}`);const c=u>0?this.backend.gpuDataManager.create(u).id:0;return new Bn(this.module,a,c,o)};return this.backend.run(e,n,r,s,i,this.outputCount)}output(e,t){const n=this.module.stackSave();try{const r=this.module.stackAlloc((1+t.length)*4);let s=r>>2;this.module.HEAPU32[s++]=t.length;for(let i=0;i<t.length;i++)this.module.HEAPU32[s++]=t[i];return this.module._JsepOutput(this.opKernelContext,e,r)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},jp=async(e,t,n,r)=>{const s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){const i=new Pp;await i.initialize(n,r),s("webgpu",[i,a=>i.alloc(a),a=>i.free(a),(a,o,u,c=!1)=>{if(c)oe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${a}, dst=${o}, size=${u}`),i.memcpy(a,o);else{oe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${a}, gpuDataId=${o}, size=${u}`);const l=t.HEAPU8.subarray(a>>>0,(a>>>0)+u);i.upload(o,l)}},async(a,o,u)=>{oe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${o}, size=${u}`),await i.download(a,()=>t.HEAPU8.subarray(o>>>0,(o>>>0)+u))},(a,o,u)=>i.createKernel(a,o,u,t.UTF8ToString(t._JsepGetNodeName(o))),a=>i.releaseKernel(a),(a,o,u,c)=>{oe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${a}, contextDataOffset=${o}`);const l=new Gu(t,i,o);return i.computeKernel(a,l,c)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{const i=new Dp(n);s("webnn",[i,()=>i.reserveTensorId(),a=>i.releaseTensorId(a),async(a,o,u,c)=>i.ensureTensor(a,o,u,c),(a,o)=>{i.uploadTensor(a,o)},async(a,o)=>i.downloadTensor(a,o)])}}}}),Zu,li,di,nt,Hu,sr,pi,fi,ss,hi,mi,gi,Lp=C({"web/lib/wasm/wasm-core-impl.ts"(){ey(),ty(),q(),wt(),Ks(),Qc(),Zu=(e,t)=>{ge()._OrtInit(e,t)!==0&&pe("Can't initialize onnxruntime.")},li=async e=>{Zu(e.wasm.numThreads,Qn(e.logLevel))},di=async(e,t)=>{{const n=(Gy(),Ls(Np)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{const s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);const i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await n("webgpu",ge(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await n("webnn",ge(),e)}}},nt=new Map,Hu=e=>{const t=ge(),n=t.stackSave();try{const r=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,r,r+4)!==0&&pe("Can't get session input/output count."),[t.HEAP32[r/4],t.HEAP32[r/4+1]]}finally{t.stackRestore(n)}},sr=e=>{const t=ge(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},pi=async(e,t)=>{let n,r;const s=ge();Array.isArray(e)?[n,r]=e:e.buffer===s.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=sr(e);let i=0,a=0,o=0,u=[];const c=[],l=[];try{if([a,u]=Yc(t),t?.externalData&&s.mountExternalData){const g=[];for(const v of t.externalData){const w=typeof v=="string"?v:v.path;g.push(Jn(typeof v=="string"?v:v.data).then($=>{s.mountExternalData(w,$)}))}await Promise.all(g)}for(const g of t?.executionProviders??[])if((typeof g=="string"?g:g.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,s.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof g!="string"){const w=g,$=w?.context,x=w?.gpuDevice,b=w?.deviceType,k=w?.numThreads,R=w?.powerPreference;$?s.currentContext=$:x?s.currentContext=await navigator.ml.createContext(x):s.currentContext=await navigator.ml.createContext({deviceType:b,numThreads:k,powerPreference:R})}else s.currentContext=await navigator.ml.createContext();break}i=await s._OrtCreateSession(n,r,a),i===0&&pe("Can't create a session."),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);const[d,p]=Hu(i),f=!!t?.enableGraphCapture,h=[],m=[],y=[];for(let g=0;g<d;g++){const v=s._OrtGetInputName(i,g);v===0&&pe("Can't get an input name."),c.push(v),h.push(s.UTF8ToString(v))}for(let g=0;g<p;g++){const v=s._OrtGetOutputName(i,g);v===0&&pe("Can't get an output name."),l.push(v);const w=s.UTF8ToString(v);m.push(w);{if(f&&t?.preferredOutputLocation===void 0){y.push("gpu-buffer");continue}const $=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[w]??"cpu";if($!=="cpu"&&$!=="cpu-pinned"&&$!=="gpu-buffer"&&$!=="ml-tensor")throw new Error(`Not supported preferred output location: ${$}.`);if(f&&$!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${$}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);y.push($)}}let _=null;return y.some(g=>g==="gpu-buffer"||g==="ml-tensor")&&(o=s._OrtCreateBinding(i),o===0&&pe("Can't create IO binding."),_={handle:o,outputPreferredLocations:y,outputPreferredLocationsEncoded:y.map(g=>_s(g))}),nt.set(i,[i,c,l,_,f,!1]),[i,h,m]}catch(d){throw c.forEach(p=>s._OrtFree(p)),l.forEach(p=>s._OrtFree(p)),o!==0&&s._OrtReleaseBinding(o),i!==0&&s._OrtReleaseSession(i),d}finally{s._free(n),a!==0&&s._OrtReleaseSessionOptions(a),u.forEach(d=>s._free(d)),s.unmountExternalData?.()}},fi=e=>{const t=ge(),n=nt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);const[r,s,i,a,o]=n;a&&(o&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),t.jsepOnReleaseSession?.(e),s.forEach(u=>t._OrtFree(u)),i.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(r),nt.delete(e)},ss=(e,t,n,r,s,i=!1)=>{if(!e){t.push(0);return}const a=ge(),o=e[0],u=e[1],c=e[3];let l,d;if(o==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(c==="gpu-buffer"){const h=e[2].gpuBuffer;d=kt(en(o),u);const m=a.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');l=m(r,s,h,d)}else if(c==="ml-tensor"){const h=e[2].mlTensor;d=kt(en(o),u);const m=a.jsepRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');l=m(h,en(o),u)}else{const h=e[2];if(Array.isArray(h)){d=4*h.length,l=a._malloc(d),n.push(l);let m=l/4;for(let y=0;y<h.length;y++){if(typeof h[y]!="string")throw new TypeError(`tensor data at index ${y} is not a string`);a.HEAPU32[m++]=_e(h[y],n)}}else d=h.byteLength,l=a._malloc(d),n.push(l),a.HEAPU8.set(new Uint8Array(h.buffer,h.byteOffset,d),l)}const p=a.stackSave(),f=a.stackAlloc(4*u.length);try{let h=f/4;u.forEach(y=>a.HEAP32[h++]=y);const m=a._OrtCreateTensor(en(o),l,d,f,u.length,_s(c));m===0&&pe(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(m)}finally{a.stackRestore(p)}},hi=async(e,t,n,r,s,i)=>{const a=ge(),o=nt.get(e);if(!o)throw new Error(`cannot run inference. invalid session id: ${e}`);const u=o[0],c=o[1],l=o[2],d=o[3],p=o[4],f=o[5],h=t.length,m=r.length;let y=0,_=[];const g=[],v=[],w=[],$=a.stackSave(),x=a.stackAlloc(h*4),b=a.stackAlloc(h*4),k=a.stackAlloc(m*4),R=a.stackAlloc(m*4);try{a.jsepOnRunStart?.(u),[y,_]=Xc(i);for(let V=0;V<h;V++)ss(n[V],g,w,e,t[V],p);for(let V=0;V<m;V++)ss(s[V],v,w,e,h+r[V],p);let O=x/4,T=b/4,ne=k/4,ee=R/4;for(let V=0;V<h;V++)a.HEAPU32[O++]=g[V],a.HEAPU32[T++]=c[t[V]];for(let V=0;V<m;V++)a.HEAPU32[ne++]=v[V],a.HEAPU32[ee++]=l[r[V]];if(d&&!f){const{handle:V,outputPreferredLocations:ie,outputPreferredLocationsEncoded:le}=d;if(c.length!==h)throw new Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${c.length}).`);for(let L=0;L<h;L++){const te=t[L];await a._OrtBindInput(V,c[te],g[L])!==0&&pe(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<m;L++){const te=r[L];s[L]?.[3]?a._OrtBindOutput(V,l[te],v[L],0)!==0&&pe(`Can't bind pre-allocated output[${L}] for session=${e}.`):a._OrtBindOutput(V,l[te],0,le[te])!==0&&pe(`Can't bind output[${L}] to ${ie[L]} for session=${e}.`)}nt.set(e,[u,c,l,d,p,!0])}let Q;d?Q=await a._OrtRunWithBinding(u,d.handle,m,k,y):Q=await a._OrtRun(u,b,x,h,R,m,k,y),Q!==0&&pe("failed to call OrtRun().");const de=[];for(let V=0;V<m;V++){const ie=a.HEAPU32[k/4+V];if(ie===v[V]){de.push(s[V]);continue}const le=a.stackSave(),L=a.stackAlloc(16);let te=!1,H,K=0;try{a._OrtGetTensorData(ie,L,L+4,L+8,L+12)!==0&&pe(`Can't access output tensor data on index ${V}.`);let A=L/4;const j=a.HEAPU32[A++];K=a.HEAPU32[A++];const ae=a.HEAPU32[A++],Re=a.HEAPU32[A++],we=[];for(let $e=0;$e<Re;$e++)we.push(a.HEAPU32[ae/4+$e]);a._OrtFree(ae);const Xe=we.reduce(($e,Ie)=>$e*Ie,1);H=gt(j);const Sn=d?.outputPreferredLocations[r[V]];if(H==="string"){if(Sn==="gpu-buffer"||Sn==="ml-tensor")throw new Error("String tensor is not supported on GPU.");const $e=[];let Ie=K/4;for(let et=0;et<Xe;et++){const yi=a.HEAPU32[Ie++],uf=et===Xe-1?void 0:a.HEAPU32[Ie]-yi;$e.push(a.UTF8ToString(yi,uf))}de.push([H,we,$e,"cpu"])}else if(Sn==="gpu-buffer"&&Xe>0){const $e=a.jsepGetBuffer;if(!$e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');const Ie=$e(K),et=kt(j,Xe);if(et===void 0||!Ys(H))throw new Error(`Unsupported data type: ${H}`);te=!0,de.push([H,we,{gpuBuffer:Ie,download:a.jsepCreateDownloader(Ie,et,H),dispose:()=>{a._OrtReleaseTensor(ie)}},"gpu-buffer"])}else if(Sn==="ml-tensor"&&Xe>0){const $e=a.jsepEnsureTensor;if(!$e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kt(j,Xe)===void 0||!Qs(H))throw new Error(`Unsupported data type: ${H}`);const et=await $e(K,j,we,!1);te=!0,de.push([H,we,{mlTensor:et,download:a.jsepCreateMLTensorDownloader(K,H),dispose:()=>{a.jsepReleaseTensorId(K),a._OrtReleaseTensor(ie)}},"ml-tensor"])}else{const $e=Xs(H),Ie=new $e(Xe);new Uint8Array(Ie.buffer,Ie.byteOffset,Ie.byteLength).set(a.HEAPU8.subarray(K,K+Ie.byteLength)),de.push([H,we,Ie,"cpu"])}}finally{a.stackRestore(le),H==="string"&&K&&a._free(K),te||a._OrtReleaseTensor(ie)}}return d&&!p&&(a._OrtClearBoundOutputs(d.handle),nt.set(e,[u,c,l,d,p,!1])),de}finally{a.stackRestore($),g.forEach(O=>a._OrtReleaseTensor(O)),v.forEach(O=>a._OrtReleaseTensor(O)),w.forEach(O=>a._free(O)),y!==0&&a._OrtReleaseRunOptions(y),_.forEach(O=>a._free(O))}},mi=e=>{const t=ge(),n=nt.get(e);if(!n)throw new Error("invalid session id");const r=n[0],s=t._OrtEndProfiling(r);s===0&&pe("Can't get an profile file name."),t._OrtFree(s)},gi=e=>{const t=[];for(const n of e){const r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}}),rt,ze,$t,Zt,Ht,Pn,is,Mn,ft,ht,Ku,Vp,qp,Wp,Fp,Gp,Zp,Hp,Kp=C({"web/lib/wasm/proxy-wrapper.ts"(){We(),Lp(),wt(),lr(),rt=()=>!!ce.wasm.proxy&&typeof document<"u",$t=!1,Zt=!1,Ht=!1,Mn=new Map,ft=(e,t)=>{const n=Mn.get(e);n?n.push(t):Mn.set(e,[t])},ht=()=>{if($t||!Zt||Ht||!ze)throw new Error("worker not ready")},Ku=e=>{switch(e.data.type){case"init-wasm":$t=!1,e.data.err?(Ht=!0,is[1](e.data.err)):(Zt=!0,is[0]()),Pn&&(URL.revokeObjectURL(Pn),Pn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{const t=Mn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Vp=async()=>{if(!Zt){if($t)throw new Error("multiple calls to 'initWasm()' detected.");if(Ht)throw new Error("previous call to 'initWasm()' failed.");if($t=!0,rt())return new Promise((e,t)=>{ze?.terminate(),Hc().then(([n,r])=>{try{ze=r,ze.onerror=i=>t(i),ze.onmessage=Ku,is=[e,t];const s={type:"init-wasm",in:ce};ze.postMessage(s),Pn=n}catch(s){t(s)}},t)});try{await Hs(ce.wasm),await li(ce),Zt=!0}catch(e){throw Ht=!0,e}finally{$t=!1}}},qp=async e=>{if(rt())return ht(),new Promise((t,n)=>{ft("init-ep",[t,n]);const r={type:"init-ep",in:{epName:e,env:ce}};ze.postMessage(r)});await di(ce,e)},Wp=async e=>rt()?(ht(),new Promise((t,n)=>{ft("copy-from",[t,n]);const r={type:"copy-from",in:{buffer:e}};ze.postMessage(r,[e.buffer])})):sr(e),Fp=async(e,t)=>{if(rt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ht(),new Promise((n,r)=>{ft("create",[n,r]);const s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),ze.postMessage(s,i)})}else return pi(e,t)},Gp=async e=>{if(rt())return ht(),new Promise((t,n)=>{ft("release",[t,n]);const r={type:"release",in:e};ze.postMessage(r)});fi(e)},Zp=async(e,t,n,r,s,i)=>{if(rt()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return ht(),new Promise((a,o)=>{ft("run",[a,o]);const u=n,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:i}};ze.postMessage(c,gi(u))})}else return hi(e,t,n,r,s,i)},Hp=async e=>{if(rt())return ht(),new Promise((t,n)=>{ft("end-profiling",[t,n]);const r={type:"end-profiling",in:e};ze.postMessage(r)});mi(e)}}}),as,Xu,Xp,Zy=C({"web/lib/wasm/session-handler-inference.ts"(){We(),Kp(),q(),Zs(),Qc(),as=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Xu=e=>{switch(e[3]){case"cpu":return new ve(e[0],e[2],e[1]);case"gpu-buffer":{const t=e[0];if(!Ys(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);const{gpuBuffer:n,download:r,dispose:s}=e[2];return ve.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:s})}case"ml-tensor":{const t=e[0];if(!Qs(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);const{mlTensor:n,download:r,dispose:s}=e[2];return ve.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},Xp=class{async fetchModelAndCopyToWasmMemory(e){return Wp(await Jn(e))}async loadModel(e,t){He();let n;typeof e=="string"?Et?n=await Jn(e):n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames]=await Fp(n,t),Ve()}async dispose(){return Gp(this.sessionId)}async run(e,t,n){He();const r=[],s=[];Object.entries(e).forEach(d=>{const p=d[0],f=d[1],h=this.inputNames.indexOf(p);if(h===-1)throw new Error(`invalid input '${p}'`);r.push(f),s.push(h)});const i=[],a=[];Object.entries(t).forEach(d=>{const p=d[0],f=d[1],h=this.outputNames.indexOf(p);if(h===-1)throw new Error(`invalid output '${p}'`);i.push(f),a.push(h)});const o=r.map((d,p)=>as(d,()=>`input "${this.inputNames[s[p]]}"`)),u=i.map((d,p)=>d?as(d,()=>`output "${this.outputNames[a[p]]}"`):null),c=await Zp(this.sessionId,s,o,a,u,n),l={};for(let d=0;d<c.length;d++)l[this.outputNames[a[d]]]=i[d]??Xu(c[d]);return Ve(),l}startProfiling(){}endProfiling(){Hp(this.sessionId)}}}}),Yp={};cr(Yp,{OnnxruntimeWebAssemblyBackend:()=>As,initializeFlags:()=>zs,wasmBackend:()=>Qp});var zs,As,Qp,Hy=C({"web/lib/backend-wasm.ts"(){We(),Kp(),Zy(),lr(),zs=()=>{if((typeof ce.wasm.initTimeout!="number"||ce.wasm.initTimeout<0)&&(ce.wasm.initTimeout=0),ce.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ce.wasm.proxy!="boolean"&&(ce.wasm.proxy=!1),typeof ce.wasm.trace!="boolean"&&(ce.wasm.trace=!1),typeof ce.wasm.numThreads!="number"||!Number.isInteger(ce.wasm.numThreads)||ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ce.wasm.numThreads=1;else{const e=typeof navigator>"u"?ys("node:os").cpus().length:navigator.hardwareConcurrency;ce.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}ce.wasm.wasmPaths===void 0&&Ue&&Ue.indexOf("blob:")!==0&&(ce.wasm.wasmPaths=Ue.substring(0,Ue.lastIndexOf("/")+1))},As=class{async init(e){zs(),await Vp(),await qp(e)}async createInferenceSessionHandler(e,t){const n=new Xp;return await n.loadModel(e,t),Promise.resolve(n)}},Qp=new As}});We();We();We();var Ky="1.20.1";{const e=(Hy(),Ls(Yp)).wasmBackend;St("webgpu",e,5),St("webnn",e,5),St("cpu",e,10),St("wasm",e,10)}Object.defineProperty(ce.versions,"web",{value:Ky,enumerable:!0});ce.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/";let Os=null;const Fe=512;async function Xy(){if(Os)return;const e=await caches.open("onnx-models"),t="https://huggingface.co/g-ronimo/lama/resolve/main/lama_fp32.onnx";let n=await e.match(t);n||(console.log("Downloading ONNX model..."),n=await fetch(t),n.ok&&await e.put(t,n.clone()));const r=await n.arrayBuffer();Os=await Gs.create(r)}async function Yy(e,t){if(e.length!==3*Fe*Fe)throw"Invalid image data length";if(t.length!==Fe*Fe)throw"Invalid mask data length";console.log("Creating session..."),await Xy();const n=[1,3,Fe,Fe],r=[1,1,Fe,Fe],s=new ve("float32",e,n),i=new ve("float32",t,r);console.log("Running session...");const o=(await Os.run({image:s,mask:i})).output.cpuData;return console.log("Inference successful:",o),o}async function Qy(e,t){const n=Fe,r=Fe,s=document.createElement("canvas");s.width=n,s.height=r;const i=s.getContext("2d"),a=e.toCanvasElement({withoutTransform:!0,withoutShadow:!0});i.drawImage(a,0,0,n,r);const o=i.getImageData(0,0,n,r),u=document.createElement("canvas");u.width=n,u.height=r;const c=new fabric.StaticCanvas(u),l=fabric.util.invertTransform(e.calcTransformMatrix());let d=0,p=0;e.originX==="center"&&(d=e.width/2),e.originY==="center"&&(p=e.height/2);const f=[1,0,0,1,d,p],h=[n/e.width,0,0,r/e.height,0,0],m=fabric.util.multiplyTransformMatrices(h,fabric.util.multiplyTransformMatrices(f,l));c.setViewportTransform(m),t.stroke="white",t.fill=null,c.add(t),c.renderAll();const y=c.getContext().getImageData(0,0,n,r),_=new Float32Array(3*n*r),g=new Float32Array(n*r);for(let k=0;k<n*r;k++)_[k]=o.data[k*4]/255,_[k+n*r]=o.data[k*4+1]/255,_[k+2*n*r]=o.data[k*4+2]/255,g[k]=y.data[k*4+3]>0?1:0;const v=await Yy(_,g),w=document.createElement("canvas");w.width=n,w.height=r;const $=w.getContext("2d"),x=$.createImageData(n,r);for(let k=0;k<n*r;k++)x.data[k*4]=v[k],x.data[k*4+1]=v[k+n*r],x.data[k*4+2]=v[k+2*n*r],x.data[k*4+3]=255;$.putImageData(x,0,0);const b=new fabric.Image(w,{left:e.left,top:e.top,angle:e.angle,originX:e.originX,originY:e.originY,flipX:e.flipX,flipY:e.flipY});return b.scaleX=e.width*e.scaleX/n,b.scaleY=e.height*e.scaleY/r,b}const Jp=e=>new Promise(t=>setTimeout(t,e)),I=window.canvas=new fabric.Canvas("c",{selection:!0,preserveObjectStacking:!0});I.isDragging=!1;I.lastPosX=0;I.lastPosY=0;let Rs=!1,Tt,Ct=[],fr=[];function ef(){Rs||(Tt&&Ct.push(Tt),Ct.length>20&&Ct.shift(),Tt=JSON.stringify(I.toJSON()),fr=[],nf())}function tf(e,t){e.length!==0&&(Rs=!0,t.push(Tt),Tt=e.pop(),I.loadFromJSON(Tt,()=>{I.renderAll(),Rs=!1}),nf())}function nf(){const e=document.getElementById("btn-undo"),t=document.getElementById("btn-redo");e.disabled=Ct.length===0,t.disabled=fr.length===0,e.disabled?e.style.opacity="0.3":e.style.opacity="1",t.disabled?t.style.opacity="0.3":t.style.opacity="1"}function rf(){I.setWidth(window.innerWidth),I.setHeight(window.innerHeight),I.renderAll()}function sf(e){if(!e||!e.type.startsWith("image/"))return;const t=URL.createObjectURL(e),n=new Image;n.onload=()=>{const s=Math.min(1,600/n.width),i=document.createElement("canvas");i.width=n.width*s,i.height=n.height*s;const a=i.getContext("2d");a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(n,0,0,i.width,i.height);const o=new fabric.Image(i,{left:I.getVpCenter().x,top:I.getVpCenter().y,originX:"center",originY:"center"});I.add(o),I.setActiveObject(o),URL.revokeObjectURL(t)},n.src=t}function af(){const e=I.getActiveObject(),t=document.getElementById("context-bar"),n={activeImage:[document.getElementById("ctx-eraser"),document.getElementById("ctx-split"),document.getElementById("ctx-remove-bg"),document.getElementById("ctx-inpaint")],activeSelection:[document.getElementById("ctx-merge")]};if(!e){t.style.display="none";return}t.style.display="flex",n.activeImage.forEach(c=>{c.style.opacity="0.3"}),n.activeSelection.forEach(c=>{c.style.opacity="0.3"}),e.type==="image"&&n.activeImage.forEach(c=>{c.style.opacity="1"}),e.type==="activeSelection"&&e.getObjects("image").length>1&&n.activeSelection.forEach(c=>{c.style.opacity="1"});const r=e.getBoundingRect(),s=60,i=t.offsetWidth,a=t.offsetHeight;let o=r.top-a-s,u=r.left+r.width/2-i/2;o<10&&(o=r.top+r.height+s),u<10&&(u=10),u+i>window.innerWidth&&(u=window.innerWidth-i-10),t.style.top=`${o}px`,t.style.left=`${u}px`}window.addEventListener("resize",rf);window.addEventListener("paste",e=>{if(!(!e.clipboardData||!e.clipboardData.items))for(const t of e.clipboardData.items)sf(t.getAsFile())});I.on("path:created",async e=>{if(!I.inpaintTarget)return;const t=e.path,n=I.inpaintTarget,r=new fabric.Rect({left:n.left,top:n.top,width:n.getScaledWidth(),height:n.getScaledHeight(),angle:n.angle,originX:n.originX,originY:n.originY,absolutePositioned:!0});t.set({clipPath:r,selectable:!1,evented:!1}),I.isDrawingMode=!1,I.defaultCursor="default",I.inpaintTarget=null,n.hoverCursor="move";const s=document.getElementById("loading-overlay");s.style.display="flex",await Jp(50);try{const i=await Qy(n,t);I.add(i),I.remove(n),I.setActiveObject(i)}catch(i){console.error(i),I.setActiveObject(n)}finally{s.style.display="none",I.remove(t),I.requestRenderAll()}});I.on("erasing:end",e=>{if(!e.targets||e.targets.length===0)return;I.isDrawingMode=!1,I.defaultCursor="default";const t=e.targets[0];t.hoverCursor="move",I.setActiveObject(t),I.requestRenderAll()});I.on("mouse:wheel",e=>{const t=e.e.deltaY;let n=I.getZoom();n*=.999**t,n>20&&(n=20),n<.1&&(n=.1),I.zoomToPoint({x:e.e.offsetX,y:e.e.offsetY},n),e.e.preventDefault(),e.e.stopPropagation()});I.on("mouse:down",e=>{const t=e.e;t.altKey===!0&&(I.isDragging=!0,I.selection=!1,I.lastPosX=t.clientX,I.lastPosY=t.clientY)});I.on("mouse:move",e=>{if(I.isDragging){const t=e.e,n=I.viewportTransform;n[4]+=t.clientX-I.lastPosX,n[5]+=t.clientY-I.lastPosY,I.requestRenderAll(),I.lastPosX=t.clientX,I.lastPosY=t.clientY}});I.on("mouse:up",()=>{I.isDragging&&(I.setViewportTransform(I.viewportTransform),I.isDragging=!1,I.defaultCursor="default",I.selection=!0)});const of={save:["object:added","object:modified","object:removed"],updateCtxBar:["selection:created","selection:updated","selection:cleared","object:moving","object:scaling","object:rotating","mouse:up","mouse:wheel","erasing:end","path:created"]};of.updateCtxBar.forEach(e=>I.on(e,af));of.save.forEach(e=>I.on(e,ef));document.getElementById("ctx-inpaint").onclick=()=>{const e=I.getActiveObject();!e||e.type!=="image"||(I.freeDrawingBrush=new fabric.PencilBrush(I),I.freeDrawingBrush.width=25,I.freeDrawingBrush.color="#6365f17a",I.isDrawingMode=!0,I.inpaintTarget=e,e.hoverCursor="crosshair",I.discardActiveObject(),I.requestRenderAll())};document.getElementById("ctx-remove-bg").onclick=async()=>{const e=I.getActiveObject();if(!e||e.type!=="image")return;const t=document.getElementById("loading-overlay");t.style.display="flex";try{const n=e.getSrc(),r=await Rg(n,{model:"isnet_quint8"}),s=URL.createObjectURL(r);fabric.Image.fromURL(s,i=>{i.set({left:e.left,top:e.top,angle:e.angle,scaleX:e.scaleX,scaleY:e.scaleY,originX:e.originX,originY:e.originY,flipX:e.flipX,flipY:e.flipY}),I.add(i),I.remove(e),I.setActiveObject(i),I.requestRenderAll()})}catch(n){console.error(n)}finally{t.style.display="none"}};document.getElementById("ctx-eraser").onclick=()=>{const e=I.getActiveObject();!e||e.type!=="image"||(I.freeDrawingBrush=new fabric.EraserBrush(I),I.freeDrawingBrush.width=25,I.isDrawingMode=!0,I.getObjects().forEach(t=>{t.erasable=!1}),e.hoverCursor="crosshair",e.erasable=!0,I.discardActiveObject(),I.requestRenderAll())};document.getElementById("ctx-split").onclick=async()=>{const e=I.getActiveObject();if(!e||e.type!=="image")return;const t=document.getElementById("loading-overlay");t.style.display="flex",await Jp(50);try{const n=lf(e);n&&n.length>0&&(n.forEach(r=>I.add(r)),I.remove(e),I.setActiveObject(new fabric.ActiveSelection(n,{canvas:I})),I.requestRenderAll())}catch(n){console.error(n)}finally{t.style.display="none"}};document.getElementById("ctx-merge").onclick=()=>{const e=I.getActiveObject();if(!e||e.type!=="activeSelection")return;const t=e.getObjects("image");if(t.length<2)return;const n=e.toDataURL();fabric.Image.fromURL(n,r=>{r.set({left:e.left,top:e.top,originX:"left",originY:"top"}),I.add(r),I.remove(...t),I.setActiveObject(r),I.requestRenderAll()})};document.getElementById("ctx-delete").onclick=()=>{const e=I.getActiveObject();e&&(e.type==="activeSelection"?e.forEachObject(t=>I.remove(t)):I.remove(e),I.discardActiveObject(),I.requestRenderAll())};document.getElementById("ctx-back").onclick=()=>{const e=I.getActiveObject();e&&(I.sendToBack(e),I.discardActiveObject(),I.requestRenderAll())};document.getElementById("ctx-clone").onclick=()=>{const e=I.getActiveObject();e&&e.clone(t=>{t.set({left:t.left+20,top:t.top+20,evented:!0}),t.type==="activeSelection"?(t.canvas=I,t.forEachObject(r=>{I.add(r)}),t.setCoords()):I.add(t),I.discardActiveObject(),I.setActiveObject(t),I.requestRenderAll()})};document.getElementById("ctx-flip-h").onclick=()=>{const e=I.getActiveObject();e&&(e.set("flipX",!e.flipX),I.requestRenderAll())};document.getElementById("ctx-download").onclick=()=>{const e=I.getActiveObject();if(!e)return;const t=e.toDataURL({format:"png",multiplier:4}),n=document.createElement("a");n.download="image.png",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)};document.getElementById("btn-upload").onchange=e=>{if(!(!e.target||!e.target.files))for(const t of e.target.files)sf(t),e.target.value=""};document.getElementById("btn-add-text").onclick=()=>{document.getElementById("text-input").value="",document.getElementById("text-modal").classList.add("visible"),document.getElementById("text-input").focus()};document.getElementById("btn-undo").onclick=()=>{tf(Ct,fr)};document.getElementById("btn-redo").onclick=()=>{tf(fr,Ct)};document.getElementById("btn-clear").onclick=()=>{confirm("Clear entire canvas?")&&I.clear()};rf();af();ef();const Jy=[{url:"./assets/favicon.svg",x:100,y:-300,width:200},{url:"./assets/tutorial1.png",x:150,y:150,width:600,active:!0},{url:"./assets/tutorial2.png",x:-150,y:-200,width:400}];Jy.forEach(e=>{fabric.Image.fromURL(e.url,t=>{if(!t)return console.error("Failed to load image:",e.url);t.scaleToWidth(e.width),t.set({left:I.getVpCenter().x+e.x,top:I.getVpCenter().y+e.y,originX:"center",originY:"center"}),I.add(t),e.active&&I.setActiveObject(t),I.requestRenderAll()},{crossOrigin:"anonymous"})});window.crossOriginIsolated?console.log("Cross-Origin Isolated: SharedArrayBuffer is enabled."):console.warn("Cross-Origin Isolated: FALSE. Check COOP/COEP headers.");class e_{constructor(t,n){if(!t)throw Error();this.isListening=!1,this.recognition=new t,this.recognition.lang=n,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.onresult=r=>{let s="";for(let a=r.resultIndex;a<r.results.length;a++)r.results[a].isFinal&&(s+=r.results[a][0].transcript);const i=document.getElementById("text-input");s&&(i.value=i.value+(i.value?" ":"")+s)},this.recognition.onerror=r=>{console.error("Speech recognition error:",r.error),this.stopListening()},this.recognition.onend=()=>{this.isListening&&this.recognition.start()}}startListening(){this.isListening=!0,this.recognition.start(),document.getElementById("btn-stt").classList.add("listening")}stopListening(){this.isListening=!1,this.recognition.stop(),document.getElementById("btn-stt").classList.remove("listening")}}function t_(e="en-US"){if(!window.webkitSpeechRecognition&&!window.SpeechRecognition)return document.getElementById("btn-stt").style.display="none",null;const t=window.SpeechRecognition||window.webkitSpeechRecognition;return new e_(t,e)}const st=t_(),Kt=window.canvas,n_=[{name:"Anton",value:"'Anton', sans-serif"},{name:"Indie Flower",value:"'Indie Flower', cursive"},{name:"Londrina Outline",value:"'Londrina Outline', cursive"},{name:"Patua One",value:"'Patua One', serif"},{name:"Pixelify Sans",value:"'Pixelify Sans', sans-serif"},{name:"Rubik Mono One",value:"'Rubik Mono One', monospace"},{name:"Young Serif",value:"'Young Serif', serif"},{name:"Roboto Regular",value:"'Roboto', sans-serif",weight:400},{name:"Roboto Medium",value:"'Roboto', sans-serif",weight:500},{name:"Roboto SemiBold",value:"'Roboto', sans-serif",weight:600},{name:"Roboto Bold",value:"'Roboto', sans-serif",weight:700},{name:"Roboto Black",value:"'Roboto', sans-serif",weight:900},{name:"Roboto Italic",value:"'Roboto', sans-serif",weight:400,style:"italic"},{name:"Roboto Med. Italic",value:"'Roboto', sans-serif",weight:500,style:"italic"},{name:"Roboto Bold Italic",value:"'Roboto', sans-serif",weight:700,style:"italic"},{name:"Roboto Black Italic",value:"'Roboto', sans-serif",weight:900,style:"italic"}];n_.forEach(e=>{const t=document.createElement("option");t.value=e.value,t.textContent=e.name,t.style.fontFamily=e.value,e.weight&&(t.style.fontWeight=e.weight,t.setAttribute("data-weight",e.weight)),e.style&&(t.style.fontStyle=e.style,t.setAttribute("data-style",e.style)),document.getElementById("font-select").appendChild(t)});document.getElementById("text-modal").onclick=e=>{e.target===document.getElementById("text-modal")&&(st&&st.stopListening(),document.getElementById("text-modal").classList.remove("visible"))};document.getElementById("btn-stt").onclick=()=>{st&&(st.isListening?st.stopListening():st.startListening())};document.getElementById("btn-confirm-text").onclick=()=>{st&&st.stopListening();const e=document.getElementById("text-modal"),t=document.getElementById("text-input"),n=document.getElementById("font-select"),r=document.getElementById("text-color"),s=t.value.trim();if(e.classList.remove("visible"),!s)return;const i=n.options[n.selectedIndex],a=i.getAttribute("data-weight"),o=i.getAttribute("data-style"),u=new fabric.IText(s,{left:Kt.getVpCenter().x,top:Kt.getVpCenter().y,originX:"center",originY:"center",fontFamily:n?n.value:"Inter, -apple-system, BlinkMacSystemFont, sans-serif",fontSize:32,fill:r?r.value:"#ff0000",fontWeight:a?parseInt(a):400,fontStyle:o||"normal"});Kt.add(u),Kt.setActiveObject(u),Kt.requestRenderAll()};document.getElementById("text-input").addEventListener("keydown",e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),document.getElementById("btn-confirm-text").click())});
