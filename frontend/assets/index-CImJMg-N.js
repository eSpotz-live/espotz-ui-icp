var af=Object.defineProperty;var rf=Object.getPrototypeOf;var nf=Reflect.get;var lc=e=>{throw TypeError(e)};var sf=(e,t,i)=>t in e?af(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var dc=(e,t,i)=>sf(e,typeof t!="symbol"?t+"":t,i),Bo=(e,t,i)=>t.has(e)||lc("Cannot "+i);var k=(e,t,i)=>(Bo(e,t,"read from private field"),i?i.call(e):t.get(e)),Be=(e,t,i)=>t.has(e)?lc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),at=(e,t,i,a)=>(Bo(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rt=(e,t,i)=>(Bo(e,t,"access private method"),i);var gn=(e,t,i)=>nf(rf(e),i,t);import{R as zr,r as Xr}from"./index-KfWpIQXw.js";import{H as of,M as lf}from"./hls-LbDPrldi.js";import{C as yn}from"./custom-media-element-BTc9lN-c.js";var df=Object.create,Bh=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,cf=Object.getOwnPropertyNames,hf=Object.getPrototypeOf,mf=Object.prototype.hasOwnProperty,Wh=function(e,t){return function(){return e&&(t=e(e=0)),t}},Ke=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},pf=function(e,t,i,a){if(t&&typeof t=="object"||typeof t=="function")for(var r=cf(t),n=0,s=r.length,o;n<s;n++)o=r[n],!mf.call(e,o)&&o!==i&&Bh(e,o,{get:(function(l){return t[l]}).bind(null,o),enumerable:!(a=uf(t,o))||a.enumerable});return e},et=function(e,t,i){return i=e!=null?df(hf(e)):{},pf(!e||!e.__esModule?Bh(i,"default",{value:e,enumerable:!0}):i,e)},At=Ke(function(e,t){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},t.exports=i});function la(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):la(e,t)}var da=Wh(function(){da()});function Fh(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}var Kh=Wh(function(){}),Vh=Ke(function(e,t){var i=Array.prototype.slice;t.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),vf=Ke(function(e,t){da(),t.exports=i;function i(a,r){if(!la(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),ff=Ke(function(e,t){da(),t.exports=i;function i(a,r){if(!la(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),qh=Ke(function(e,t){t.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Yh=Ke(function(e,t){t.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Gh=Ke(function(e,t){t.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),Ef=Ke(function(e,t){Kh(),t.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(u){switch(u.nodeType){case 3:return p(u.data);case 8:return"<!--"+u.data+"-->";default:return r(u)}}function r(u){var m=[],f=u.tagName;return u.namespaceURI==="http://www.w3.org/1999/xhtml"&&(f=f.toLowerCase()),m.push("<"+f+d(u)+o(u)),i.indexOf(f)>-1?m.push(" />"):(m.push(">"),u.childNodes.length?m.push.apply(m,u.childNodes.map(a)):u.textContent||u.innerText?m.push(p(u.textContent||u.innerText)):u.innerHTML&&m.push(u.innerHTML),m.push("</"+f+">")),m.join("")}function n(u,m){var f=Fh(u[m]);return m==="style"&&Object.keys(u.style).length>0?!0:u.hasOwnProperty(m)&&(f==="string"||f==="boolean"||f==="number")&&m!=="nodeName"&&m!=="className"&&m!=="tagName"&&m!=="textContent"&&m!=="innerText"&&m!=="namespaceURI"&&m!=="innerHTML"}function s(u){if(typeof u=="string")return u;var m="";return Object.keys(u).forEach(function(f){var E=u[f];f=f.replace(/[A-Z]/g,function(_){return"-"+_.toLowerCase()}),m+=f+":"+E+";"}),m}function o(u){var m=u.dataset,f=[];for(var E in m)f.push({name:"data-"+E,value:m[E]});return f.length?l(f):""}function l(u){var m=[];return u.forEach(function(f){var E=f.name,_=f.value;E==="style"&&(_=s(_)),m.push(E+'="'+h(_)+'"')}),m.length?" "+m.join(" "):""}function d(u){var m=[];for(var f in u)n(u,f)&&m.push({name:f,value:u[f]});for(var E in u._attributes)for(var _ in u._attributes[E]){var b=u._attributes[E][_],T=(b.prefix?b.prefix+":":"")+_;m.push({name:T,value:b.value})}return u.className&&m.push({name:"class",value:u.className}),m.length?l(m):""}function p(u){var m="";return typeof u=="string"?m=u:u&&(m=u.toString()),m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(u){return p(u).replace(/"/g,"&quot;")}}),jh=Ke(function(e,t){da();var i=Vh(),a=qh(),r=Yh(),n=Gh(),s=Ef(),o="http://www.w3.org/1999/xhtml";t.exports=l;function l(d,p,h){if(!la(this,l))return new l(d);var u=h===void 0?o:h||null;this.tagName=u===o?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=u,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},l.prototype.replaceChild=function(d,p){d.parentNode&&d.parentNode.removeChild(d);var h=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[h]=d,d.parentNode=this,p},l.prototype.removeChild=function(d){var p=this.childNodes.indexOf(d);return this.childNodes.splice(p,1),d.parentNode=null,d},l.prototype.insertBefore=function(d,p){d.parentNode&&d.parentNode.removeChild(d);var h=p==null?-1:this.childNodes.indexOf(p);return h>-1?this.childNodes.splice(h,0,d):this.childNodes.push(d),d.parentNode=this,d},l.prototype.setAttributeNS=function(d,p,h){var u=null,m=p,f=p.indexOf(":");if(f>-1&&(u=p.substr(0,f),m=p.substr(f+1)),this.tagName==="INPUT"&&p==="type")this.type=h;else{var E=this._attributes[d]||(this._attributes[d]={});E[m]={value:h,prefix:u}}},l.prototype.getAttributeNS=function(d,p){var h=this._attributes[d],u=h&&h[p]&&h[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof u!="string"?null:u},l.prototype.removeAttributeNS=function(d,p){var h=this._attributes[d];h&&delete h[p]},l.prototype.hasAttributeNS=function(d,p){var h=this._attributes[d];return!!h&&p in h},l.prototype.setAttribute=function(d,p){return this.setAttributeNS(null,d,p)},l.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},l.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},l.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(d){var p=d.split(" "),h=[];return i(this,function(u){if(u.nodeType===1){var m=u.className||"",f=m.split(" ");p.every(function(E){return f.indexOf(E)!==-1})&&h.push(u)}}),h},l.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var p=[];return i(this.childNodes,function(h){h.nodeType===1&&(d==="*"||h.tagName.toLowerCase()===d)&&p.push(h)}),p},l.prototype.contains=function(d){return i(this,function(p){return d===p})||!1}}),_f=Ke(function(e,t){da();var i=jh();t.exports=a;function a(r){if(!la(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),bf=Ke(function(e,t){t.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),gf=Ke(function(e,t){da();var i=Vh(),a=vf(),r=ff(),n=jh(),s=_f(),o=bf(),l=qh(),d=Yh(),p=Gh();t.exports=h;function h(){if(!la(this,h))return new h;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var u=h.prototype;u.createTextNode=function(m){return new r(m,this)},u.createElementNS=function(m,f){var E=m===null?null:String(m);return new n(f,this,E)},u.createElement=function(m){return new n(m,this)},u.createDocumentFragment=function(){return new s(this)},u.createEvent=function(m){return new o(m)},u.createComment=function(m){return new a(m,this)},u.getElementById=function(m){m=String(m);var f=i(this.childNodes,function(E){if(String(E.id)===m)return E});return f||null},u.getElementsByClassName=n.prototype.getElementsByClassName,u.getElementsByTagName=n.prototype.getElementsByTagName,u.contains=n.prototype.contains,u.removeEventListener=p,u.addEventListener=d,u.dispatchEvent=l}),yf=Ke(function(e,t){var i=gf();t.exports=new i}),Qh=Ke(function(e,t){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=yf(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),t.exports=r});function Tf(e){if(Array.isArray(e))return e}function Af(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(e);!(r=(s=i.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function kf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cl(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function Zh(e,t){if(e){if(typeof e=="string")return cl(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return cl(e,t)}}function oi(e,t){return Tf(e)||Af(e,t)||Zh(e,t)||kf()}var Wr=et(At()),uc=et(At()),Sf=et(At()),wf={now:function(){var e=Sf.default.performance,t=e&&e.timing,i=t&&t.navigationStart,a=typeof i=="number"&&typeof e.now=="function"?i+e.now():Date.now();return Math.round(a)}},Te=wf,Jr=function(){var e,t,i;if(typeof((e=uc.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){i=new Uint8Array(32),uc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var d=l==="x"?i[n]:i[n]&3|8;return n++,d.toString(16)});var s=Te.now(),o=s==null?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},zh=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},vt=function(e){if(e&&typeof e.nodeName<"u")return e.muxId||(e.muxId=zh()),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),(t==null?void 0:t.muxId)||e},Ys=function(e){var t;e&&typeof e.nodeName<"u"?(t=e,e=vt(t)):t=document.querySelector(e);var i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function If(e){if(Array.isArray(e))return cl(e)}function Rf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){return If(e)||Rf(e)||Zh(e)||Cf()}var Yi={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},Df=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,e],l=(i=console.trace).bind.apply(i,ft(o)),d=(a=console.info).bind.apply(a,ft(o)),p=(r=console.debug).bind.apply(r,ft(o)),h=(n=console.warn).bind.apply(n,ft(o)),u=(s=console.error).bind.apply(s,ft(o)),m=t;return{trace:function(){for(var f=arguments.length,E=new Array(f),_=0;_<f;_++)E[_]=arguments[_];if(!(m>Yi.TRACE))return l.apply(void 0,ft(E))},debug:function(){for(var f=arguments.length,E=new Array(f),_=0;_<f;_++)E[_]=arguments[_];if(!(m>Yi.DEBUG))return p.apply(void 0,ft(E))},info:function(){for(var f=arguments.length,E=new Array(f),_=0;_<f;_++)E[_]=arguments[_];if(!(m>Yi.INFO))return d.apply(void 0,ft(E))},warn:function(){for(var f=arguments.length,E=new Array(f),_=0;_<f;_++)E[_]=arguments[_];if(!(m>Yi.WARN))return h.apply(void 0,ft(E))},error:function(){for(var f=arguments.length,E=new Array(f),_=0;_<f;_++)E[_]=arguments[_];if(!(m>Yi.ERROR))return u.apply(void 0,ft(E))},get level(){return m},set level(f){f!==this.level&&(m=f??t)}}},ie=Df("[mux]"),Wo=et(At());function hl(){var e=Wo.default.doNotTrack||Wo.default.navigator&&Wo.default.navigator.doNotTrack;return e==="1"}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}da();function De(e,t){if(!la(e,t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function jt(e,t,i){return t&&Lf(e.prototype,t),e}function S(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ja(e){return ja=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ja(e)}function Mf(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=ja(e),e!==null););return e}function Hn(e,t,i){return typeof Reflect<"u"&&Reflect.get?Hn=Reflect.get:Hn=function(a,r,n){var s=Mf(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},Hn(e,t,i||e)}function ml(e,t){return ml=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ml(e,t)}function xf(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ml(e,t)}function Of(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Kh();function Nf(e,t){return t&&(Fh(t)==="object"||typeof t=="function")?t:P(e)}function Pf(e){var t=Of();return function(){var i=ja(e),a;if(t){var r=ja(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return Nf(this,a)}}var yt=function(e){return en(e)[0]},en=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=e.match(t)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},Fo=et(At()),$f={exists:function(){var e=Fo.default.performance,t=e&&e.timing;return t!==void 0},domContentLoadedEventEnd:function(){var e=Fo.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=Fo.default.performance,t=e&&e.timing;return t&&t.navigationStart}},Gs=$f;function ye(e,t,i){i=i===void 0?1:i,e[t]=e[t]||0,e[t]+=i}function js(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){S(e,r,i[r])})}return e}function Uf(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i}function Id(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Uf(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var Hf=["x-cdn","content-type"],Xh=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],Bf=Hf.concat(Xh);function Rd(e){e=e||"";var t={},i=e.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(Bf.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(t[n]=r.join(": "))}}),t}function Qs(e){if(e){var t=Xh.find(function(i){return e[i]!==void 0});return t?e[t]:void 0}}var Wf=function(e){var t={};for(var i in e){var a=e[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");t[n]=a.VALUE}}return t},Jh=Wf,Tn=function(e){if(!e)return{};var t=Gs.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},or=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return Rd(e.getAllResponseHeaders())},Ff=function(e,t,i){var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(_){var b=parseInt(a.version),T;return b===1&&_.programDateTime!==null&&(T=_.programDateTime),b===0&&_.pdt!==null&&(T=_.pdt),T};if(!Gs.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(_,b){return e.emit(t,_,b)},l=function(_,b){var T=b.levels,v=b.audioTracks,w=b.url,L=b.stats,N=b.networkDetails,B=b.sessionData,j={},X={};T.forEach(function(ve,$e){j[$e]={width:ve.width,height:ve.height,bitrate:ve.bitrate,attrs:ve.attrs}}),v.forEach(function(ve,$e){X[$e]={name:ve.name,language:ve.lang,bitrate:ve.bitrate}});var F=Tn(L),$=F.bytesLoaded,Oe=F.requestStart,Ve=F.responseStart,qe=F.responseEnd;o("requestcompleted",Id(js({},Jh(B)),{request_event_type:_,request_bytes_loaded:$,request_start:Oe,request_response_start:Ve,request_response_end:qe,request_type:"manifest",request_hostname:yt(w),request_response_headers:or(N),request_rendition_lists:{media:j,audio:X,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(_,b){var T=b.details,v=b.level,w=b.networkDetails,L=b.stats,N=Tn(L),B=N.bytesLoaded,j=N.requestStart,X=N.responseStart,F=N.responseEnd,$=T.fragments[T.fragments.length-1],Oe=s($)+n($.duration);o("requestcompleted",{request_event_type:_,request_bytes_loaded:B,request_start:j,request_response_start:X,request_response_end:F,request_current_level:v,request_type:"manifest",request_hostname:yt(T.url),request_response_headers:or(w),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Oe)?void 0:Oe})};i.on(a.Events.LEVEL_LOADED,d);var p=function(_,b){var T=b.details,v=b.networkDetails,w=b.stats,L=Tn(w),N=L.bytesLoaded,B=L.requestStart,j=L.responseStart,X=L.responseEnd;o("requestcompleted",{request_event_type:_,request_bytes_loaded:N,request_start:B,request_response_start:j,request_response_end:X,request_type:"manifest",request_hostname:yt(T.url),request_response_headers:or(v)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var h=function(_,b){var T=b.stats,v=b.networkDetails,w=b.frag;T=T||w.stats;var L=Tn(T),N=L.bytesLoaded,B=L.requestStart,j=L.responseStart,X=L.responseEnd,F=v?or(v):void 0,$={request_event_type:_,request_bytes_loaded:N,request_start:B,request_response_start:j,request_response_end:X,request_hostname:v?yt(v.responseURL):void 0,request_id:F?Qs(F):void 0,request_response_headers:F,request_media_duration:w.duration,request_url:v==null?void 0:v.responseURL};w.type==="main"?($.request_type="media",$.request_current_level=w.level,$.request_video_width=(i.levels[w.level]||{}).width,$.request_video_height=(i.levels[w.level]||{}).height,$.request_labeled_bitrate=(i.levels[w.level]||{}).bitrate):$.request_type=w.type,o("requestcompleted",$)};i.on(a.Events.FRAG_LOADED,h);var u=function(_,b){var T=b.frag,v=T.start,w=s(T),L={currentFragmentPDT:w,currentFragmentStart:n(v)};o("fragmentchange",L)};i.on(a.Events.FRAG_CHANGED,u);var m=function(_,b){var T=b.type,v=b.details,w=b.response,L=b.fatal,N=b.frag,B=b.networkDetails,j=(N==null?void 0:N.url)||b.url||"",X=B?or(B):void 0;if((v===a.ErrorDetails.MANIFEST_LOAD_ERROR||v===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||v===a.ErrorDetails.FRAG_LOAD_ERROR||v===a.ErrorDetails.FRAG_LOAD_TIMEOUT||v===a.ErrorDetails.LEVEL_LOAD_ERROR||v===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||v===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||v===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||v===a.ErrorDetails.SUBTITLE_LOAD_ERROR||v===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||v===a.ErrorDetails.KEY_LOAD_ERROR||v===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:v,request_url:j,request_hostname:yt(j),request_id:X?Qs(X):void 0,request_type:v===a.ErrorDetails.FRAG_LOAD_ERROR||v===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":v===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||v===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":v===a.ErrorDetails.SUBTITLE_LOAD_ERROR||v===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":v===a.ErrorDetails.KEY_LOAD_ERROR||v===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:w==null?void 0:w.code,request_error_text:w==null?void 0:w.text}),L){var F,$="".concat(j?"url: ".concat(j,`
`):"")+"".concat(w&&(w.code||w.text)?"response: ".concat(w.code,", ").concat(w.text,`
`):"")+"".concat(b.reason?"failure reason: ".concat(b.reason,`
`):"")+"".concat(b.level?"level: ".concat(b.level,`
`):"")+"".concat(b.parent?"parent stream controller: ".concat(b.parent,`
`):"")+"".concat(b.buffer?"buffer length: ".concat(b.buffer,`
`):"")+"".concat(b.error?"error: ".concat(b.error,`
`):"")+"".concat(b.event?"event: ".concat(b.event,`
`):"")+"".concat(b.err?"error message: ".concat((F=b.err)===null||F===void 0?void 0:F.message,`
`):"");o("error",{player_error_code:T,player_error_message:v,player_error_context:$})}};i.on(a.Events.ERROR,m);var f=function(_,b){var T=b.frag,v=T&&T._url||"";o("requestcanceled",{request_event_type:_,request_url:v,request_type:"media",request_hostname:yt(v)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,f);var E=function(_,b){var T=b.level,v=i.levels[T];if(v&&v.attrs&&v.attrs.BANDWIDTH){var w=v.attrs.BANDWIDTH,L,N=parseFloat(v.attrs["FRAME-RATE"]);isNaN(N)||(L=N),w?o("renditionchange",{video_source_fps:L,video_source_bitrate:w,video_source_width:v.width,video_source_height:v.height,video_source_rendition_name:v.name,video_source_codec:v==null?void 0:v.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,h),i.off(a.Events.FRAG_CHANGED,u),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,f),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},Kf=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},cc=function(e,t){if(!e||!e.requestEndDate)return{};var i=yt(e.url),a=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),o=new Date(e.requestEndDate).getTime(),l=isNaN(e.duration)?0:e.duration,d=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),p;d.length>0&&(p=Rd(d[d.length-1]._responseHeaders||""));var h=p?Qs(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:h}},Vf=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},qf=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},Yf=function(e){try{var t,i,a=(i=e.getVersion)===null||i===void 0||(t=i.call(e))===null||t===void 0?void 0:t.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},Gf=function(e,t,i){var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=Yf(i),n=function(T,v){return e.emit(t,T,v)},s=function(T){var v=T.type,w=T.data,L=(w||{}).url;n("requestcompleted",{request_event_type:v,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:yt(L),request_url:L})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var v=T.getRequests({state:"executed"});return v.length===0?null:v[v.length-1]},d=function(T){var v=T.type,w=T.fragmentModel,L=T.chunk,N=l(w);p({type:v,request:N,chunk:L})},p=function(T){var v=T.type,w=T.chunk,L=T.request,N=(w||{}).mediaInfo,B=N||{},j=B.type,X=B.bitrateList;X=X||[];var F={};X.forEach(function(St,He){F[He]={},F[He].width=St.width,F[He].height=St.height,F[He].bitrate=St.bandwidth,F[He].attrs={}}),j==="video"?o.video=F:j==="audio"?o.audio=F:o.media=F;var $=cc(L,i),Oe=$.requestStart,Ve=$.requestResponseStart,qe=$.requestResponseEnd,ve=$.requestResponseHeaders,$e=$.requestMediaDuration,kt=$.requestHostname,Ue=$.requestUrl,ht=$.requestId;n("requestcompleted",{request_event_type:v,request_start:Oe,request_response_start:Ve,request_response_end:qe,request_bytes_loaded:-1,request_type:j+"_init",request_response_headers:ve,request_hostname:kt,request_id:ht,request_url:Ue,request_media_duration:$e,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",d);var h=function(T){var v=T.type,w=T.fragmentModel,L=T.chunk,N=l(w);u({type:v,request:N,chunk:L})},u=function(T){var v=T.type,w=T.chunk,L=T.request,N=w||{},B=N.mediaInfo,j=N.start,X=B||{},F=X.type,$=cc(L,i),Oe=$.requestStart,Ve=$.requestResponseStart,qe=$.requestResponseEnd,ve=$.requestBytesLoaded,$e=$.requestResponseHeaders,kt=$.requestMediaDuration,Ue=$.requestHostname,ht=$.requestUrl,St=$.requestId,He=Vf(F,i),Ye=He.currentLevel,it=He.renditionWidth,ua=He.renditionHeight,bn=He.renditionBitrate;n("requestcompleted",{request_event_type:v,request_start:Oe,request_response_start:Ve,request_response_end:qe,request_bytes_loaded:ve,request_type:F,request_response_headers:$e,request_hostname:Ue,request_id:St,request_url:ht,request_media_start_time:j,request_media_duration:kt,request_current_level:Ye,request_labeled_bitrate:bn,request_video_width:it,request_video_height:ua})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",h);var m={video:void 0,audio:void 0,totalBitrate:void 0},f=function(){if(m.video&&typeof m.video.bitrate=="number"){if(!(m.video.width&&m.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=m.video.bitrate;if(m.audio&&typeof m.audio.bitrate=="number"&&(T+=m.audio.bitrate),T!==m.totalBitrate)return m.totalBitrate=T,{video_source_bitrate:T,video_source_height:m.video.height,video_source_width:m.video.width,video_source_codec:qf(m.video.codec)}}},E=function(T,v,w){if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var L=T.mediaType;if(L==="audio"||L==="video"){var N=i.getBitrateInfoListFor(L).find(function(j){var X=j.qualityIndex;return X===T.newQuality});if(!(N&&typeof N.bitrate=="number")){a.warn("missing bitrate info for ".concat(L));return}m[L]=Id(js({},N),{codec:i.getCurrentTrackFor(L).codec});var B=f();B&&n("renditionchange",B)}};i.on("qualityChangeRendered",E);var _=function(T){var v=T.request,w=T.mediaType;v=v||{},n("requestcanceled",{request_event_type:v.type+"_"+v.action,request_url:v.url,request_type:w,request_hostname:yt(v.url)})};i.on("fragmentLoadingAbandoned",_);var b=function(T){var v=T.error,w,L,N=(v==null||(w=v.data)===null||w===void 0?void 0:w.request)||{},B=(v==null||(L=v.data)===null||L===void 0?void 0:L.response)||{};(v==null?void 0:v.code)===27&&n("requestfailed",{request_error:N.type+"_"+N.action,request_url:N.url,request_hostname:yt(N.url),request_type:N.mediaType,request_error_code:B.status,request_error_text:B.statusText});var j="".concat(N!=null&&N.url?"url: ".concat(N.url,`
`):"")+"".concat(B!=null&&B.status||B!=null&&B.statusText?"response: ".concat(B==null?void 0:B.status,", ").concat(B==null?void 0:B.statusText,`
`):"");n("error",{player_error_code:v==null?void 0:v.code,player_error_message:v==null?void 0:v.message,player_error_context:j})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",E),i.off("error",b),i.off("fragmentLoadingAbandoned",_),delete i._stopMuxMonitor}},jf=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},hc=0,Qf=function(){function e(){De(this,e),S(this,"_listeners",void 0)}return jt(e,[{key:"on",value:function(t,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++hc,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],a&&(i=i.bind(a)),this._listeners[t].push(i),i}},{key:"off",value:function(t,i){var a=this._listeners&&this._listeners[t];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(t,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++hc;var n=function(){r.off(t,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before*"]||[],n=this._listeners[t]||[],s=this._listeners["after"+t]||[],o=function(l,d){l=l.slice(),l.forEach(function(p){p.call(a,{type:t},d)})};o(r,i),o(n,i),o(s,i)}}}]),e}(),Zf=Qf,Ko=et(At()),zf=function(){function e(t){var i=this;De(this,e),S(this,"_playbackHeartbeatInterval",void 0),S(this,"_playheadShouldBeProgressing",void 0),S(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(Ko.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return jt(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=Ko.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(Ko.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),Xf=zf,Jf=function e(t){var i=this;De(this,e),S(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(a,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),t.on("aftererror",function(){var a,r,n,s,o;(a=t.data)===null||a===void 0||delete a.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(o=t.data)===null||o===void 0||delete o.player_error_business_exception})},eE=Jf,tE=function(){function e(t){De(this,e),S(this,"_watchTimeTrackerLastCheckedTime",void 0),S(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return jt(e,[{key:"_updateWatchTime",value:function(t,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),ye(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(t,i){this._updateWatchTime(t,i),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),iE=tE,aE=function(){function e(t){var i=this;De(this,e),S(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),S(this,"_lastTime",void 0),S(this,"_isAdPlaying",void 0),S(this,"_callbackUpdatePlaybackTime",void 0),S(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Te.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Te.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return jt(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time,i=Te.now(),a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?a=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i-this._lastTime),a>0&&a<=1e3&&ye(this.pm.data,"view_content_playback_time",a),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=i}}]),e}(),rE=aE,nE=function(){function e(t){De(this,e),S(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return jt(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e}(),sE=nE,mc=5*60*1e3,oE=function e(t){if(De(this,e),!t.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;ye(t.data,"view_rebuffer_duration",s),i=n.viewer_time,t.data.view_rebuffer_duration>mc&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(mc,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){i||(ye(t.data,"view_rebuffer_count",1),i=s.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},lE=oE,dE=function(){function e(t){var i=this;De(this,e),S(this,"_lastCheckedTime",void 0),S(this,"_lastPlayheadTime",void 0),S(this,"_lastPlayheadTimeUpdatedTime",void 0),S(this,"_rebuffering",void 0),S(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Te.now()})}))}return jt(e,[{key:"_checkIfRebuffering",value:function(t,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),e}(),uE=dE,cE=function(){function e(t){var i=this;De(this,e),S(this,"NAVIGATION_START",void 0),S(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var a=t.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Te.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return jt(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),hE=cE,mE=function e(t){var i=this;De(this,e),S(this,"_lastPlayerHeight",void 0),S(this,"_lastPlayerWidth",void 0),S(this,"_lastPlayheadPosition",void 0),S(this,"_lastSourceHeight",void 0),S(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];a.forEach(function(n){t.on(n,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=t.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),d=Math.max(0,1-o);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,l),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,d),ye(t.data,"view_total_content_playback_time",s),ye(t.data,"view_total_upscaling",l*s),ye(t.data,"view_total_downscaling",d*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){t.on(n,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},pE=mE,vE=2e3,fE=function e(t){var i=this;De(this,e),S(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Te.now(),s=(t.data.viewer_time||n)-(a||n);ye(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),i.isSeeking&&s.viewer_time-a<=vE){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,ye(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},EE=fE,pc=function(e,t){e.push(t),e.sort(function(i,a){return i.viewer_time-a.viewer_time})},_E=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],bE=function(){function e(t){var i=this;De(this,e),S(this,"_adHasPlayed",void 0),S(this,"_adRequests",void 0),S(this,"_adResponses",void 0),S(this,"_currentAdRequestNumber",void 0),S(this,"_currentAdResponseNumber",void 0),S(this,"_prerollPlayTime",void 0),S(this,"_wouldBeNewAdPlay",void 0),S(this,"isAdBreak",void 0),S(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),_E.forEach(function(r){return t.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),pc(i._adRequests,n),ye(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ye(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),pc(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&ye(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ye(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),i._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof t.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(t.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(r,n){i._wouldBeNewAdPlay||ye(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){i._wouldBeNewAdPlay||ye(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return jt(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===t)return this._adRequests[i]}},{key:"_updateAdData",value:function(t,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=oi(en(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=oi(en(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id}}]),e}(),gE=bE,vc=et(At()),yE=function e(t){De(this,e);var i,a,r=function(){t.disableRebufferTracking||(ye(t.data,"view_waiting_rebuffer_count",1),i=Te.now(),a=vc.default.setInterval(function(){if(i){var d=Te.now();ye(t.data,"view_waiting_rebuffer_duration",d-i),i=d}},250))},n=function(){t.disableRebufferTracking||i&&(ye(t.data,"view_waiting_rebuffer_duration",Te.now()-i),i=!1,vc.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},TE=yE,AE=function e(t){var i=this;De(this,e),S(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Te.now(),t.on("before*",r)},r=function(n){var s=Te.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(t.emit("devicesleep",{viewer_time:o}),Object.assign(t.data,{viewer_time:o}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},kE=AE,Vo=et(At()),em=function(e){return e()}(function(){var e=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function t(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=e({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var d=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,h=0;h<d.length;h++){var u=d[h].split("="),m=u.slice(1).join("=");m.charAt(0)==='"'&&(m=m.slice(1,-1));try{var f=u[0].replace(p,decodeURIComponent);if(m=i.read?i.read(m,f):i(m,f)||m.replace(p,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch{}if(r===f){o=m;break}r||(o[f]=m)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",e(n,{expires:-1}))},a.withConverter=t,a}return t(function(){})}),tm="muxData",SE=function(e){return Object.entries(e).map(function(t){var i=oi(t,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},wE=function(e){return e.split("&").reduce(function(t,i){var a=oi(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return t[r]=o,t},{})},im=function(){var e;try{e=wE(em.get(tm)||"")}catch{e={}}return e},am=function(e){try{em.set(tm,SE(e),{expires:365})}catch{}},IE=function(){var e=im();return e.mux_viewer_id=e.mux_viewer_id||Jr(),e.msn=e.msn||Math.random(),am(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},RE=function(){var e=im(),t=Te.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=Jr(),e.sst=t),e.sex=t+25*60*1e3,am(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function CE(e,t){var i=t.beaconCollectionDomain,a=t.beaconDomain;if(i)return"https://"+i;e=e||"inferred";var r=a||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var DE=et(At()),rm=function(){var e;switch(nm()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},nm=function(){var e=DE.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};rm.getConnectionFromAPI=nm;var LE=rm,ME={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},xE=sm(ME),OE={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},fc=sm(OE);function sm(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function pl(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&e[a]!==void 0){var n=a.split("_"),s=n[0],o=xE[s];o||(ie.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),fc[l]?o+=fc[l]:Number.isInteger(Number(l))?o+=l:(ie.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var Gi=et(At()),NE=et(Qh()),PE={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},$E=56*1024,UE=["hb","requestcompleted","requestfailed","requestcanceled"],HE="https://img.litix.io",di=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||HE,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},PE,t)};di.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};di.prototype.flushEvents=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(e&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};di.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),Gi.default.clearTimeout(this._sendTimeout)};di.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],pl({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);om(this._beaconUrl,i,!0,function(){})};di.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=Te.now();om(this._beaconUrl,i,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,ie.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=Te.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};di.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};di.prototype._startBeaconSending=function(){var e=this;Gi.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=Gi.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};di.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(Te.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||e}),n=a.length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(ie.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(l){return UE.indexOf(l.e)===-1}),s()),o()||(ie.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var d in l){var p=l[d],h=50*1024;typeof p=="string"&&p.length>h&&(l[d]=p.substring(0,h))}}),s()),a};var BE=typeof NE.default.exitPictureInPicture=="function"?function(e){return e.length<=$E}:function(e){return!1},om=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(Gi.default.fetch){Gi.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:BE(t)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(Gi.default.XMLHttpRequest){var r=new Gi.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},WE=di,FE=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],KE=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],VE=["ad_id","ad_creative_id","ad_universal_id"],qE=["viewstart","error","ended","viewend"],YE=10*60*1e3,GE=function(){function e(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};De(this,e);var r,n,s,o,l,d,p,h,u,m,f,E;S(this,"mux",void 0),S(this,"envKey",void 0),S(this,"options",void 0),S(this,"eventQueue",void 0),S(this,"sampleRate",void 0),S(this,"disableCookies",void 0),S(this,"respectDoNotTrack",void 0),S(this,"previousBeaconData",void 0),S(this,"lastEventTime",void 0),S(this,"rateLimited",void 0),S(this,"pageLevelData",void 0),S(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new WE(CE(this.envKey,this.options));var _;this.sampleRate=(_=this.options.sampleRate)!==null&&_!==void 0?_:1;var b;this.disableCookies=(b=this.options.disableCookies)!==null&&b!==void 0?b:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(d=p.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(u=this.options.platform)===null||u===void 0||(h=u.os)===null||h===void 0?void 0:h.architecture,viewer_os_version:(f=this.options.platform)===null||f===void 0||(m=f.os)===null||m===void 0?void 0:m.version,viewer_connection_type:LE(),page_url:Vo.default===null||Vo.default===void 0||(E=Vo.default.location)===null||E===void 0?void 0:E.href},this.viewerData=this.disableCookies?{}:IE()}return jt(e,[{key:"send",value:function(t,i){if(!(!t||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&hl())return ie.info("Not sending `"+t+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ie.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:RE(),r=Id(js({},this.pageLevelData,i,a,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(t,r),l=pl(o);if(this.lastEventTime=this.mux.utils.now(),s)return ie.info("Not sending event due to sample rate restriction",t,r,l);if(this.envKey||ie.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,l),!this.rateLimited){if(ie.info("Sending event",t,r,l),this.rateLimited=!this.eventQueue.queueEvent(t,l),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&t==="hb"?this.eventQueue.flushEvents(!0):qE.indexOf(t)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",l=pl(r),this.eventQueue.queueEvent(r.event,l),ie.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,i){var a=this,r={},n=i.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=YE)r=js({},i),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=oi(o,2),d=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[d]||FE.indexOf(d)>-1||a.objectHasChanged(s,d,p,a.previousBeaconData[d])||a.eventRequiresKey(t,d))&&(r[d]=p,a.previousBeaconData[d]=p)})}return r}},{key:"objectHasChanged",value:function(t,i,a,r){return!t||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,i){return!!(t==="renditionchange"&&i.indexOf("video_source_")===0||VE.includes(i)&&KE.includes(t))}}]),e}(),jE=function e(t){De(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,d=function(u,m){var f=m.request_start,E=m.request_response_start,_=m.request_response_end,b=m.request_bytes_loaded;n++;var T,v;if(E?(T=E-(f??0),v=(_??0)-E):v=(_??0)-(f??0),v>0&&b&&b>0){var w=b/v*8e3;s++,a+=b,r+=v,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,w),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,T>0&&(i+=T,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,T),t.data.view_average_request_latency=i/s)}},p=function(u,m){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o},h=function(u,m){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l};t.on("requestcompleted",d),t.on("requestfailed",p),t.on("requestcanceled",h)},QE=jE,ZE=60*60*1e3,zE=function e(t){var i=this;De(this,e),S(this,"_lastEventTime",void 0),t.on("before*",function(a,r){var n=r.viewer_time,s=Te.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>ZE){var l=Object.keys(t.data).reduce(function(p,h){return h.indexOf("video_")===0?Object.assign(p,S({},h,t.data[h])):p},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},l)),t.playbackHeartbeat._playheadShouldBeProgressing=d,t.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),a.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},XE=zE,JE=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],e0=new Set(["requestcompleted","requestfailed","requestcanceled"]),t0=function(e){xf(i,e);var t=Pf(i);function i(a,r,n){De(this,i);var s;s=t.call(this),S(P(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),S(P(s),"NAVIGATION_START",void 0),S(P(s),"_destroyed",void 0),S(P(s),"_heartBeatTimeout",void 0),S(P(s),"adTracker",void 0),S(P(s),"dashjs",void 0),S(P(s),"data",void 0),S(P(s),"disablePlayheadRebufferTracking",void 0),S(P(s),"disableRebufferTracking",void 0),S(P(s),"errorTracker",void 0),S(P(s),"errorTranslator",void 0),S(P(s),"emitTranslator",void 0),S(P(s),"getAdData",void 0),S(P(s),"getPlayheadTime",void 0),S(P(s),"getStateData",void 0),S(P(s),"stateDataTranslator",void 0),S(P(s),"hlsjs",void 0),S(P(s),"id",void 0),S(P(s),"longResumeTracker",void 0),S(P(s),"minimumRebufferDuration",void 0),S(P(s),"mux",void 0),S(P(s),"playbackEventDispatcher",void 0),S(P(s),"playbackHeartbeat",void 0),S(P(s),"playbackHeartbeatTime",void 0),S(P(s),"playheadTime",void 0),S(P(s),"seekingTracker",void 0),S(P(s),"sustainedRebufferThreshold",void 0),S(P(s),"watchTimeTracker",void 0),S(P(s),"currentFragmentPDT",void 0),S(P(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=Gs.domContentLoadedEventEnd(),s.NAVIGATION_START=Gs.navigationStart();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(u){return u},emitTranslator:function(){for(var u=arguments.length,m=new Array(u),f=0;f<u;f++)m[f]=arguments[f];return m},stateDataTranslator:function(u){return u}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ie.level=n.debug?Yi.DEBUG:Yi.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new GE(a,n.data.env_key,n),s.data={player_instance_id:Jr(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(P(s));if(s.on("viewinit",function(u,m){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,m),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(u,m){this._resetView(m)}),s.on("programchange",function(u,m){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(m,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(u,m){this.currentFragmentPDT=m.currentFragmentPDT,this.currentFragmentStart=m.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var u=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",u&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var p=function(u){u.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",p)})}s.on("playerready",function(u,m){Object.assign(this.data,m)}),JE.forEach(function(u){s.on(u,function(m,f){u.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,f),this._sanitizeData()}),s.on("after"+u,function(){(u!=="error"||this.errorTracker.viewErrored)&&this.send(u)})}),s.on("viewend",function(u,m){Object.assign(s.data,m)});var h=function(u){var m=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=m-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",h),s.longResumeTracker=new XE(P(s)),s.errorTracker=new eE(P(s)),new kE(P(s)),s.seekingTracker=new EE(P(s)),s.playheadTime=new sE(P(s)),s.playbackHeartbeat=new Xf(P(s)),new pE(P(s)),s.watchTimeTracker=new iE(P(s)),new rE(P(s)),s.adTracker=new gE(P(s)),new uE(P(s)),new lE(P(s)),new hE(P(s)),new TE(P(s)),new QE(P(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return jt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=Hn(ja(i.prototype),"emit",this)).call.apply(n,[this].concat(ft(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=oi(en(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,e0.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if(typeof this.stateDataTranslator=="function")try{a=this.stateDataTranslator(a)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Jr(),n=function(){r===a.data.view_id&&ye(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,Ff(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(Kf(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,Gf(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(jf(this.dashjs),this.dashjs=void 0)}}]),i}(Zf),i0=t0,lr=et(Qh());function a0(){return lr.default&&!!(lr.default.fullscreenElement||lr.default.webkitFullscreenElement||lr.default.mozFullScreenElement||lr.default.msFullscreenElement)}var r0=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],n0={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function s0(e,t,i){var a=oi(Ys(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var h={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var m,f,E,_=((m=(f=this).getPlayheadTime)===null||m===void 0?void 0:m.call(f))||d(r.currentTime),b=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),v={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:a0(),video_poster_url:r.poster,video_source_url:b||T||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(E=r.getVideoPlaybackQuality)===null||E===void 0?void 0:E.call(r).droppedVideoFrames};if(r.getStartDate&&_>0){var w=r.getStartDate();if(w&&typeof w.getTime=="function"&&w.getTime()){var L=w.getTime();if(v.player_program_time=L+_,r.seekable.length>0){var N=L+r.seekable.end(r.seekable.length-1);v.player_live_edge_program_time=N}}}return v}};i=Object.assign(p,i,h),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(m,f){e.emit(n,m,f)},r.mux.updateData=function(m){r.mux.emit("hb",m)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(m){r.removeEventListener(m,r.mux.listeners[m],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(m){var f=oi(Ys(m),3),E=f[0],_=f[1],b=f[2];if(E){if(b!=="video"&&b!=="audio")return e.log.error("The element of `"+_+"` was not a media element.")}else return e.log.error("No element was found with the `"+_+"` query selector.");E.muxId=r.muxId,delete r.muxId,E.mux=E.mux||{},E.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(E.mux.listeners).forEach(function(T){r.removeEventListener(T,E.mux.listeners[T],!1),E.addEventListener(T,E.mux.listeners[T],!1)}),E.mux.swapElement=r.mux.swapElement,E.mux.destroy=r.mux.destroy,delete r.mux,r=E},r.mux.addHLSJS=function(m){e.addHLSJS(n,m)},r.mux.addDashJS=function(m){e.addDashJS(n,m)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(m){e.setEmitTranslator(n,m)},r.mux.setStateDataTranslator=function(m){e.setStateDataTranslator(n,m)},r.mux.setGetPlayheadTime=function(m){m||(m=i.getPlayheadTime),e.setGetPlayheadTime(n,m)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},r0.forEach(function(m){m==="error"&&!i.automaticErrorTracking||(r.mux.listeners[m]=function(){var f={};if(m==="error"){if(!r.error||r.error.code===1)return;f.player_error_code=r.error.code,f.player_error_message=n0[r.error.code]||r.error.message}e.emit(n,m,f)},r.addEventListener(m,r.mux.listeners[m],!1))})}function o0(e,t,i,a){var r=a;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,i)}catch(n){ie.info("safeCall error",n)}return r}var Fr=et(At()),_a;Fr.default&&Fr.default.WeakMap&&(_a=new WeakMap);function l0(e,t){if(!e||!t||!Fr.default||typeof Fr.default.getComputedStyle!="function")return"";var i;return _a&&_a.has(e)&&(i=_a.get(e)),i||(i=Fr.default.getComputedStyle(e,null),_a&&_a.set(e,i)),i.getPropertyValue(t)}function d0(e){return Math.floor(e*1e3)}var Mi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},bo=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};bo.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};bo.prototype.processLine=function(e){var t=e.indexOf(":"),i=m0(e,t),a=i[0],r=i.length===2?Cd(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case Mi.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Mi.PART_INF:{qo(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Mi.SERVER_CONTROL:{qo(this.manifest,i),this.setHoldBack();break}case Mi.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Mi.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Mi.VERSION:{qo(this.manifest,i);break}case Mi.SESSION_DATA:{var o=p0(i[1]),l=Jh(o);Object.assign(this.manifest.sessionData,l)}}};bo.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=a*3),a&&t[n]<o&&(t[n]=o)}};var qo=function(e,t){var i=lm(t[0].replace("#EXT-X-","")),a;h0(t[1])?(a={},a=Object.assign(c0(t[1]),a)):a=Cd(t[1]),e[i]=a},lm=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},Cd=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},u0=function(e){var t={},i=e.split("=");if(i.length>1){var a=lm(i[0]);t[a]=Cd(i[1])}return t},c0=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++){var r=t[a],n=u0(r);i=Object.assign(n,i)}return i},h0=function(e){return e.indexOf("=")>-1},m0=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},p0=function(e){var t={};if(e){var i=e.search(","),a=e.slice(0,i),r=e.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),d=0;d<l.length;d++)l[d]==="DATA-ID"&&(t["DATA-ID"]=l[1-d]),l[d]==="VALUE"&&(t.VALUE=l[1-d])}),{data:t}}},v0=bo,f0={safeCall:o0,safeIncrement:ye,getComputedStyle:l0,secondsToMs:d0,assign:Object.assign,headersStringToObject:Rd,cdnHeadersToRequestId:Qs,extractHostnameAndDomain:en,extractHostname:yt,manifestParser:v0,generateShortID:zh,generateUUID:Jr,now:Te.now,findMediaElement:Ys},E0=f0,_0={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},b0=_0,g0="mux-embed",y0="5.9.0",T0="2.1",fe={},Ri=function(e){var t=arguments;typeof e=="string"?Ri.hasOwnProperty(e)?Wr.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),Ri[e].apply(null,t)},0):ie.warn("`"+e+"` is an unknown task"):typeof e=="function"?Wr.default.setTimeout(function(){e(Ri)},0):ie.warn("`"+e+"` is invalid.")},A0={loaded:Te.now(),NAME:g0,VERSION:y0,API_VERSION:T0,PLAYER_TRACKED:!1,monitor:function(e,t){return s0(Ri,e,t)},destroyMonitor:function(e){var t=oi(Ys(e),1),i=t[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ie.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=vt(e);fe[i]?fe[i].addHLSJS(t):ie.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=vt(e);fe[i]?fe[i].addDashJS(t):ie.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=vt(e);fe[t]?fe[t].removeHLSJS():ie.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=vt(e);fe[t]?fe[t].removeDashJS():ie.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){hl()&&t&&t.respectDoNotTrack&&ie.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=vt(e);fe[i]=new i0(Ri,i,t)},emit:function(e,t,i){var a=vt(e);fe[a]?(fe[a].emit(t,i),t==="destroy"&&delete fe[a]):ie.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=vt(e);fe[i]?fe[i].emit("hb",t):ie.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=vt(e);fe[i]?fe[i].emitTranslator=t:ie.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=vt(e);fe[i]?fe[i].stateDataTranslator=t:ie.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=vt(e);fe[i]?fe[i].getPlayheadTime=t:ie.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:hl,log:ie,utils:E0,events:b0,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Ri,A0);typeof Wr.default<"u"&&typeof Wr.default.addEventListener=="function"&&Wr.default.addEventListener("pagehide",function(e){e.persisted||(Ri.WINDOW_UNLOADING=!0)},!1);var Dd=Ri;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var W=of,re={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},O={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},go=e=>e===re.VIDEO?"playback":e,vi=class gr extends Error{constructor(t,i=gr.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=gr.MEDIA_ERR_NETWORK&&i<=gr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=gr.defaultMessages[this.code])!=null?n:"")}};vi.MEDIA_ERR_ABORTED=1,vi.MEDIA_ERR_NETWORK=2,vi.MEDIA_ERR_DECODE=3,vi.MEDIA_ERR_SRC_NOT_SUPPORTED=4,vi.MEDIA_ERR_ENCRYPTED=5,vi.MEDIA_ERR_CUSTOM=100,vi.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var I=vi,k0=e=>e==null,Ld=(e,t)=>k0(t)?!1:e in t,vl={ANY:"any",MUTED:"muted"},Z={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Kt={MSE:"mse",NATIVE:"native"},yr={HEADER:"header",QUERY:"query",NONE:"none"},Zs=Object.values(yr),ni={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Ec={HLS:ni.M3U8};[...Object.values(ni)];var cA={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},hA={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},mA={DESCENDING:"desc"},S0="en",fl={code:S0},_e=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})};function w0(e,t,i){t&&i>t&&(i=t);for(let a=0;a<e.length;a++)if(e.start(a)<=i&&e.end(a)>=i)return!0;return!1}var Md=e=>{let t=e.indexOf("?");if(t<0)return[e];let i=e.slice(0,t),a=e.slice(t);return[i,a]},yo=e=>{let{type:t}=e;if(t){let i=t.toUpperCase();return Ld(i,Ec)?Ec[i]:t}return I0(e)},dm=e=>e==="VOD"?Z.ON_DEMAND:Z.LIVE,um=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?Number.NaN:0,I0=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return C0(e)?ni.M3U8:"";let r=i.slice(a+1).toUpperCase();return Ld(r,ni)?ni[r]:""},R0="mux.com",C0=({src:e,customDomain:t=R0})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},Ba=e=>{let t=(e??"").split(".")[1];if(t)try{let i=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},D0=({exp:e},t=Date.now())=>!e||e*1e3<t,L0=({sub:e},t)=>e!==t,M0=({aud:e},t)=>!e,x0=({aud:e},t)=>e!==t,cm="en";function M(e,t=!0){var i,a;let r=t&&(a=(i=fl)==null?void 0:i[e])!=null?a:e,n=t?fl.code:cm;return new O0(r,n)}var O0=class{constructor(t,i=(a=>(a=fl)!=null?a:cm)()){this.message=t,this.locale=i}format(t){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=t[a])!=null?r:""})}toString(){return this.message}},N0=Object.values(vl),_c=e=>typeof e=="boolean"||typeof e=="string"&&N0.includes(e),P0=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=_c(a)?a:!!a,o=()=>{r||_e(t,"playing",()=>{r=!0},{once:!0})};if(o(),_e(t,"loadstart",()=>{r=!1,o(),Yo(t,s)},{once:!0}),_e(t,"loadstart",()=>{i||(e.streamType&&e.streamType!==Z.UNKNOWN?n=e.streamType===Z.LIVE:n=!Number.isFinite(t.duration)),Yo(t,s)},{once:!0}),i&&i.once(W.Events.LEVEL_LOADED,(l,d)=>{var p;e.streamType&&e.streamType!==Z.UNKNOWN?n=e.streamType===Z.LIVE:n=(p=d.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(e.startTime)||(i!=null&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&_e(t,"play",()=>{t.preload==="metadata"?i.once(W.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=_c(l)?l:!!l,Yo(t,s))}},Yo=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case vl.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case vl.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{});break}},$0=({preload:e,src:t},i,a)=>{let r=h=>{h!=null&&["","none","metadata","auto"].includes(h)?i.setAttribute("preload",h):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=h=>{r(h);let u=h??i.preload;s||u==="none"||(u==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&t&&(n=!0,a.loadSource(t))};return _e(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),d(e),d};function U0(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(W.Events.MANIFEST_PARSED,function(l,d){o();let p=e.addVideoTrack("main");p.selected=!0;for(let[h,u]of d.levels.entries()){let m=p.addRendition(u.url[0],u.width,u.height,u.videoCodec,u.bitrate);a.set(u,`${h}`),m.id=`${h}`}}),t.on(W.Events.AUDIO_TRACKS_UPDATED,function(l,d){s();for(let p of d.audioTracks){let h=p.default?"main":"alternative",u=e.addAudioTrack(h,p.name,p.lang);u.id=`${p.id}`,p.default&&(u.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var l;let d=+((l=[...e.audioTracks].find(h=>h.enabled))==null?void 0:l.id),p=t.audioTracks.map(h=>h.id);d!=t.audioTrack&&p.includes(d)&&(t.audioTrack=d)}),t.on(W.Events.LEVELS_UPDATED,function(l,d){var p;let h=e.videoTracks[(p=e.videoTracks.selectedIndex)!=null?p:0];if(!h)return;let u=d.levels.map(m=>a.get(m));for(let m of e.videoRenditions)m.id&&!u.includes(m.id)&&h.removeRendition(m)});let r=l=>{let d=l.target.selectedIndex;d!=t.nextLevel&&(t.nextLevel=d)};(i=e.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let l of e.videoTracks)e.removeVideoTrack(l)},s=()=>{for(let l of e.audioTracks)e.removeAudioTrack(l)},o=()=>{n(),s()};t.once(W.Events.DESTROYING,o)}var Go=e=>"time"in e?e.time:e.startTime;function H0(e,t){t.on(W.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let d=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=t.subtitleTracks.findIndex(({lang:u,name:m,type:f})=>u==(d==null?void 0:d.lang)&&m===s.label&&f.toLowerCase()===s.kind),h=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;xd(e,s.kind,s.label,d==null?void 0:d.lang,h,s.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=t.subtitleTracks.findIndex(({lang:l,name:d,type:p,default:h})=>r.id==="default"&&h||l==r.language&&d===r.label&&p.toLowerCase()===r.kind);t.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};e.textTracks.addEventListener("change",i),t.on(W.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=e.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(d=>{var p;(p=o.cues)!=null&&p.getCueById(d.id)||o.addCue(d)}),l&&(o.mode="disabled")}),t.once(W.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=e.querySelector(o),d=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",d)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(W.Events.MANIFEST_LOADED,a),t.once(W.Events.MEDIA_ATTACHED,a)}function xd(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function B0(e,t){let i=Array.prototype.find.call(e.querySelectorAll("track"),a=>a.track===t);i==null||i.remove()}function En(e,t,i){var a;return(a=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===i))==null?void 0:a.track}async function hm(e,t,i,a){let r=En(e,i,a);return r||(r=xd(e,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>Go(s)-Go(n)).forEach(n=>{var s,o;let l=n.value,d=Go(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(d,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let p=Array.prototype.findIndex.call(r==null?void 0:r.cues,f=>f.startTime>=d),h=(s=r==null?void 0:r.cues)==null?void 0:s[p],u=h?h.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,m=(o=r==null?void 0:r.cues)==null?void 0:o[p-1];m&&(m.endTime=d),r==null||r.addCue(new VTTCue(d,u,a==="chapters"?l:JSON.stringify(l??null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var Od="cuepoints",mm=Object.freeze({label:Od});async function pm(e,t,i=mm){return hm(e,t,i.label,"metadata")}var El=e=>({time:e.startTime,value:JSON.parse(e.text)});function W0(e,t={label:Od}){let i=En(e,t.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>El(a)):[]}function vm(e,t={label:Od}){var i,a;let r=En(e,t.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return El(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return El(s||r.activeCues[0])}async function F0(e,t=mm){return new Promise(i=>{_e(e,"loadstart",async()=>{let a=await pm(e,[],t);_e(e,"cuechange",()=>{let r=vm(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)})})}var Nd="chapters",fm=Object.freeze({label:Nd}),_l=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function Em(e,t,i=fm){return hm(e,t,i.label,"chapters")}function K0(e,t={label:Nd}){var i;let a=En(e,t.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>_l(r)):[]}function _m(e,t={label:Nd}){var i,a;let r=En(e,t.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return _l(r.activeCues[0]);let{currentTime:n}=e,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return _l(s||r.activeCues[0])}async function V0(e,t=fm){return new Promise(i=>{_e(e,"loadstart",async()=>{let a=await Em(e,[],t);_e(e,"cuechange",()=>{let r=_m(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)})})}function q0(e,t){if(t){let i=t.playingDate;if(i!=null)return new Date(i.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function Y0(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let i=e.getStartDate();return new Date(i.getTime()+e.currentTime*1e3)}return new Date(NaN)}var Kr={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},G0=e=>{if(e===re.VIDEO)return Kr.VIDEO;if(e===re.DRM)return Kr.DRM},j0=(e,t)=>{var i,a;let r=go(e),n=`${r}Token`;return(i=t.tokens)!=null&&i[r]?(a=t.tokens)==null?void 0:a[r]:Ld(n,t)?t[n]:void 0},zs=(e,t,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let b=M("Your device appears to be offline",r),T,v=I.MEDIA_ERR_NETWORK,w=new I(b,v,!1,T);return w.errorCategory=t,w.muxCode=O.NETWORK_OFFLINE,w.data=e,w}let l="status"in e?e.status:e.code,d=Date.now(),p=I.MEDIA_ERR_NETWORK;if(l===200)return;let h=go(t),u=j0(t,i),m=G0(t),[f]=Md((s=i.playbackId)!=null?s:"");if(!l||!f)return;let E=Ba(u);if(u&&!E){let b=M("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:h}),T=M("Compact JWT string: {token}",r).format({token:u}),v=new I(b,p,!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_TOKEN_MALFORMED,v.data=e,v}if(l>=500){let b=new I("",p,a??!0);return b.errorCategory=t,b.muxCode=O.NETWORK_UNKNOWN_ERROR,b}if(l===403)if(E){if(D0(E,d)){let b={timeStyle:"medium",dateStyle:"medium"},T=M("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:h}),v=M("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",b).format((o=E.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",b).format(d)}),w=new I(T,p,!0,v);return w.errorCategory=t,w.muxCode=O.NETWORK_TOKEN_EXPIRED,w.data=e,w}if(L0(E,f)){let b=M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:h}),T=M("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:h,playbackId:f,tokenPlaybackId:E.sub}),v=new I(b,p,!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_TOKEN_SUB_MISMATCH,v.data=e,v}if(M0(E)){let b=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:h}),T=M("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:h,expectedAud:m}),v=new I(b,p,!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_TOKEN_AUD_MISSING,v.data=e,v}if(x0(E,m)){let b=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:h}),T=M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:h,expectedAud:m,aud:E.aud}),v=new I(b,p,!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_TOKEN_AUD_MISMATCH,v.data=e,v}}else{let b=M("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:h,category:t}),T=M("Specified playback ID: {playbackId}",r).format({playbackId:f}),v=new I(b,p,a??!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_TOKEN_MISSING,v.data=e,v}if(l===412){let b=M("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:f}),v=new I(b,p,a??!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_NOT_READY,v.streamType=i.streamType===Z.LIVE?"live":i.streamType===Z.ON_DEMAND?"on-demand":"unknown",v.data=e,v}if(l===404){let b=M("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:f}),v=new I(b,p,a??!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_NOT_FOUND,v.data=e,v}if(l===400){let b=M("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=M("Specified playback ID: {playbackId}",r).format({playbackId:f}),v=new I(b,p,a??!0,T);return v.errorCategory=t,v.muxCode=O.NETWORK_INVALID_URL,v.data=e,v}let _=new I("",p,a??!0);return _.errorCategory=t,_.muxCode=O.NETWORK_UNKNOWN_ERROR,_.data=e,_},bc=W.DefaultConfig.capLevelController,bm=class gm extends bc{constructor(t){super(t)}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=t)}getMaxLevel(t){let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=gm.minMaxResolution;return r>=n?i:bc.getMaxLevelByMediaSize(a,n*(16/9),n)}};bm.minMaxResolution=720;var Q0=bm,Z0=Q0,Bn={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},z0=e=>{if(e.includes("fps"))return Bn.FAIRPLAY;if(e.includes("playready"))return Bn.PLAYREADY;if(e.includes("widevine"))return Bn.WIDEVINE},X0=e=>{let t=e.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(i=>i.status!==200?Promise.reject(i):i.text())},J0=e=>{let t=e.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let a of t){let r=t_(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},e_=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function t_(e){let t=[...e.matchAll(e_)];return Object.fromEntries(t.map(([,i,a])=>[i,a]))}var i_=e=>{var t,i,a;let r=e.split(`
`),n=(i=((t=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:i.trim(),s=dm(n),o=um(n),l;if(s===Z.LIVE){let d=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(d)l=+d.split(":")[1].split("=")[1]*2;else{let p=r.find(u=>u.startsWith("#EXT-X-TARGETDURATION")),h=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(h??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},a_=async(e,t)=>{if(t===ni.MP4)return{streamType:Z.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===ni.M3U8){let i=await fetch(e);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await X0(a);return{...J0(a),...i_(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},r_=async(e,t,i=yo({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:p}=await a_(e,i),h=p==null?void 0:p["com.apple.hls.chapters"];(h!=null&&h.URI||h!=null&&h.VALUE.toLocaleLowerCase().startsWith("http"))&&Pd((a=h.URI)!=null?a:h.VALUE,t),((r=he.get(t))!=null?r:{}).liveEdgeStartOffset=d,((n=he.get(t))!=null?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=he.get(t))!=null?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Pd=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n==null?void 0:n[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=he.get(t))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(r){console.error(r)}},n_=e=>{var t;let i=e.type,a=dm(i),r=um(i),n,s=!!((t=e.partList)!=null&&t.length);return a===Z.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},s_=(e,t,i)=>{var a,r,n,s,o,l,d,p;let{streamType:h,targetLiveWindow:u,liveEdgeStartOffset:m,lowLatency:f}=n_(e);if(h===Z.LIVE){f?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let E=Object.freeze({get length(){return t.seekable.length},start(_){return t.seekable.start(_)},end(_){var b;return _>this.length||_<0||Number.isFinite(t.duration)?t.seekable.end(_):(b=i.liveSyncPosition)!=null?b:t.seekable.end(_)}});((o=he.get(t))!=null?o:{}).seekable=E}((l=he.get(t))!=null?l:{}).liveEdgeStartOffset=m,((d=he.get(t))!=null?d:{}).targetLiveWindow=u,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=he.get(t))!=null?p:{}).streamType=h,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},gc,yc,o_=(yc=(gc=globalThis==null?void 0:globalThis.navigator)==null?void 0:gc.userAgent)!=null?yc:"",Tc,Ac,kc,l_=(kc=(Ac=(Tc=globalThis==null?void 0:globalThis.navigator)==null?void 0:Tc.userAgentData)==null?void 0:Ac.platform)!=null?kc:"",d_=o_.toLowerCase().includes("android")||["x11","android"].some(e=>l_.toLowerCase().includes(e)),he=new WeakMap,si="mux.com",Sc,wc,ym=(wc=(Sc=W).isSupported)==null?void 0:wc.call(Sc),u_=d_,$d=()=>Dd.utils.now(),c_=Dd.utils.generateUUID,bl=({playbackId:e,customDomain:t=si,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:p=d}={},extraSourceParams:h={}}={})=>{if(!e)return;let[u,m=""]=Md(e),f=new URL(`https://stream.${t}/${u}.m3u8${m}`);return p||f.searchParams.has("token")?(f.searchParams.forEach((E,_)=>{_!="token"&&f.searchParams.delete(_)}),p&&f.searchParams.set("token",p)):(i&&f.searchParams.set("max_resolution",i),a&&(f.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&f.searchParams.set("rendition_order",r),n&&f.searchParams.set("program_start_time",`${n}`),s&&f.searchParams.set("program_end_time",`${s}`),o&&f.searchParams.set("asset_start_time",`${o}`),l&&f.searchParams.set("asset_end_time",`${l}`),Object.entries(h).forEach(([E,_])=>{_!=null&&f.searchParams.set(E,_)})),f.toString()},To=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},Ud=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},h_=e=>{var t,i,a;return(t=e==null?void 0:e.metadata)!=null&&t.video_id?e.metadata.video_id:Cm(e)&&(a=(i=To(e.playbackId))!=null?i:Ud(e.src))!=null?a:e.src},Tm=e=>{var t;return(t=he.get(e))==null?void 0:t.error},m_=e=>{var t;return(t=he.get(e))==null?void 0:t.metadata},gl=e=>{var t,i;return(i=(t=he.get(e))==null?void 0:t.streamType)!=null?i:Z.UNKNOWN},p_=e=>{var t,i;return(i=(t=he.get(e))==null?void 0:t.targetLiveWindow)!=null?i:Number.NaN},Hd=e=>{var t,i;return(i=(t=he.get(e))==null?void 0:t.seekable)!=null?i:e.seekable},v_=e=>{var t;let i=(t=he.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Hd(e);return a.length?a.end(a.length-1)-i:Number.NaN},Bd=.034,f_=(e,t,i=Bd)=>Math.abs(e-t)<=i,Am=(e,t,i=Bd)=>e>t||f_(e,t,i),E_=(e,t=Bd)=>e.paused&&Am(e.currentTime,e.duration,t),km=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(a=(i=t.levels)==null?void 0:i[t.currentLevel])==null?void 0:a.details:(r=t.levels.find(h=>!!h.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),p=e.buffered.end(e.buffered.length-1);return l>d&&l<p},Sm=(e,t)=>e.ended||e.loop?e.ended:t&&km(e,t)?!0:E_(e),__=(e,t,i)=>{wm(t,i,e);let{metadata:a={}}=e,{view_session_id:r=c_()}=a,n=h_(e);a.view_session_id=r,a.video_id=n,e.metadata=a;let s=p=>{var h;(h=t.mux)==null||h.emit("hb",{view_drm_type:p})};e.drmTypeCb=s,he.set(t,{retryCount:0});let o=b_(e,t),l=$0(e,t,o);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?o&&t.mux.addHLSJS({hlsjs:o,Hls:o?W:void 0}):S_(e,t,o),w_(e,t,o),F0(t),V0(t);let d=P0(e,t,o);return{engine:o,setAutoplay:d,setPreload:l}},wm=(e,t,i)=>{let a=t==null?void 0:t.engine;e!=null&&e.mux&&!e.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",Lm),e.removeEventListener("error",yl),e.removeEventListener("durationchange",Dm),he.delete(e),e.dispatchEvent(new Event("teardown")))};function Im(e,t){var i;let a=yo(e);if(a!==ni.M3U8)return!0;let r=!a||((i=t.canPlayType(a))!=null?i:!0),{preferPlayback:n}=e,s=n===Kt.MSE,o=n===Kt.NATIVE;return r&&(o||!(ym&&(s||u_)))}var b_=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=yo(e)===ni.M3U8,d=Im(e,t);if(l&&!d&&ym){let p={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},h=g_(a),u=y_(e),m=[yr.QUERY,yr.HEADER].includes(s)?{useHeaders:s===yr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,f=new W({debug:i,startPosition:r,cmcd:m,xhrSetup:(E,_)=>{var b,T;if(s&&s!==yr.QUERY)return;let v=new URL(_);if(!v.searchParams.has("CMCD"))return;let w=((T=(b=v.searchParams.get("CMCD"))==null?void 0:b.split(","))!=null?T:[]).filter(L=>L.startsWith("sid")||L.startsWith("cid")).join(",");v.searchParams.set("CMCD",w),E.open("GET",v)},capLevelController:Z0,...p,...h,...u,...o});return f.on(W.Events.MANIFEST_PARSED,async function(E,_){var b,T;let v=(b=_.sessionData)==null?void 0:b["com.apple.hls.chapters"];(v!=null&&v.URI||v!=null&&v.VALUE.toLocaleLowerCase().startsWith("http"))&&Pd((T=v==null?void 0:v.URI)!=null?T:v==null?void 0:v.VALUE,t)}),f}},g_=e=>e===Z.LIVE?{backBufferLength:8}:{},y_=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=To(i);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Wn(e,"fairplay"),serverCertificateUrl:Rm(e,"fairplay")},"com.widevine.alpha":{licenseUrl:Wn(e,"widevine")},"com.microsoft.playready":{licenseUrl:Wn(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let d=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=z0(n);return a==null||a(l),o}))}},T_=async e=>{let t=await fetch(e);return t.status!==200?Promise.reject(t):await t.arrayBuffer()},A_=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},k_=(e,t)=>{_e(t,"encrypted",async i=>{try{let a=i.initDataType;if(a!=="skd"){console.error(`Received unexpected initialization data type "${a}"`);return}if(!t.mediaKeys){let l=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(p=>{var h;return(h=e.drmTypeCb)==null||h.call(e,Bn.FAIRPLAY),p}).catch(()=>{let p=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),h=new I(p,I.MEDIA_ERR_ENCRYPTED,!0);h.errorCategory=re.DRM,h.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,dt(t,h)});if(!l)return;let d=await l.createMediaKeys();try{let p=await T_(Rm(e,"fairplay")).catch(h=>{if(h instanceof Response){let u=zs(h,re.DRM,e);return console.error("mediaError",u==null?void 0:u.message,u==null?void 0:u.context),u?Promise.reject(u):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(h)});await d.setServerCertificate(p).catch(()=>{let h=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),u=new I(h,I.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=re.DRM,u.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(u)})}catch(p){dt(t,p);return}await t.setMediaKeys(d)}let r=i.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(l=>{let d;if(l==="internal-error"){let p=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");d=new I(p,I.MEDIA_ERR_ENCRYPTED,!0),d.errorCategory=re.DRM,d.muxCode=O.ENCRYPTED_CDM_ERROR}else if(l==="output-restricted"||l==="output-downscaled"){let p=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");d=new I(p,I.MEDIA_ERR_ENCRYPTED,!1),d.errorCategory=re.DRM,d.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}d&&dt(t,d)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let l=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),d=new I(l,I.MEDIA_ERR_ENCRYPTED,!0);d.errorCategory=re.DRM,d.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED,dt(t,d)}),new Promise(l=>{n.addEventListener("message",d=>{l(d.message)},{once:!0})})]).then(([,l])=>l),o=await A_(s,Wn(e,"fairplay")).catch(l=>{if(l instanceof Response){let d=zs(l,re.DRM,e);return console.error("mediaError",d==null?void 0:d.message,d==null?void 0:d.context),d?Promise.reject(d):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(l)});await n.update(o).catch(()=>{let l=M("Failed to update DRM license. This may be an issue with the player or your protected content."),d=new I(l,I.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=re.DRM,d.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(d)})}catch(a){dt(t,a);return}})},Wn=({playbackId:e,tokens:{drm:t}={},customDomain:i=si},a)=>{let r=To(e);return`https://license.${i.toLocaleLowerCase().endsWith(si)?i:si}/license/${a}/${r}?token=${t}`},Rm=({playbackId:e,tokens:{drm:t}={},customDomain:i=si},a)=>{let r=To(e);return`https://license.${i.toLocaleLowerCase().endsWith(si)?i:si}/appcert/${a}/${r}?token=${t}`},Cm=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if(typeof t!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(t,a).hostname.toLocaleLowerCase();return r.includes(si)||!!i&&r.includes(i.toLocaleLowerCase())},S_=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Dd,muxDataSDKOptions:o={}}=e,l=Cm(e);if(!n&&(r||l)){let{playerInitTime:d,playerSoftwareName:p,playerSoftwareVersion:h,beaconCollectionDomain:u,debug:m,disableCookies:f}=e,E={...e.metadata,video_title:((a=e==null?void 0:e.metadata)==null?void 0:a.video_title)||void 0},_=b=>typeof b.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(b):b;s.monitor(t,{debug:m,beaconCollectionDomain:u,hlsjs:i,Hls:i?W:void 0,automaticErrorTracking:!1,errorTranslator:_,disableCookies:f,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:h,player_init_time:d,...E}})}},w_=(e,t,i)=>{var a,r;let n=Im(e,t),{src:s,customDomain:o=si}=e,l=()=>{t.ended||!Sm(t,i)||(km(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,p,h=()=>{let u=Hd(t),m,f;u.length>0&&(m=u.start(0),f=u.end(0)),(p!==f||d!==m)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=m,p=f};if(_e(t,"durationchange",h),t&&n){let u=yo(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let E=Ud(s),_=new URL(`https://stream.${o}/${E}/metadata.json`);Pd(_.toString(),t)}let m=()=>{if(gl(t)!==Z.LIVE||Number.isFinite(t.duration))return;let E=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(E)},{once:!0}),_e(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(E)})},f=async()=>r_(s,t,u).then(m).catch(E=>{if(E instanceof Response){let _=zs(E,re.VIDEO,e);if(_){dt(t,_);return}}});if(t.preload==="none"){let E=()=>{f(),t.removeEventListener("loadedmetadata",_)},_=()=>{f(),t.removeEventListener("play",E)};_e(t,"play",E,{once:!0}),_e(t,"loadedmetadata",_,{once:!0})}else f();(a=e.tokens)!=null&&a.drm?k_(e,t):_e(t,"encrypted",()=>{let E=M("Attempting to play DRM-protected content without providing a DRM token."),_=new I(E,I.MEDIA_ERR_ENCRYPTED,!0);_.errorCategory=re.DRM,_.muxCode=O.ENCRYPTED_MISSING_TOKEN,dt(t,_)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=he.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",Dm,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",Lm),t.addEventListener("error",yl),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(m=>{m.remove()})},{once:!0}),_e(t,"pause",l),_e(t,"seeked",l),_e(t,"play",()=>{t.ended||Am(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(W.Events.LEVEL_LOADED,(u,m)=>{s_(m.details,t,i),h(),gl(t)===Z.LIVE&&!Number.isFinite(t.duration)&&(i.on(W.Events.LEVEL_UPDATED,h),_e(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(W.Events.LEVELS_UPDATED,h)}))}),i.on(W.Events.ERROR,(u,m)=>{var f,E;let _=I_(m,e);if(_.muxCode===O.NETWORK_NOT_READY){let b=(f=he.get(t))!=null?f:{},T=(E=b.retryCount)!=null?E:0;if(T<6){let v=T===0?5e3:6e4,w=new I(`Retrying in ${v/1e3} seconds...`,_.code,_.fatal);Object.assign(w,_),dt(t,w),setTimeout(()=>{b.retryCount=T+1,m.details==="manifestLoadError"&&m.url&&i.loadSource(m.url)},v);return}else{b.retryCount=0;let v=new I('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',_.code,_.fatal);Object.assign(v,_),dt(t,v);return}}dt(t,_)}),i.on(W.Events.MANIFEST_LOADED,()=>{let u=he.get(t);u&&u.error&&(u.error=null,u.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",yl),_e(t,"waiting",l),U0(e,i),H0(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Dm(e){var t;let i=e.target,a=(t=he.get(i))==null?void 0:t.startTime;if(a&&w0(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Lm(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:i,code:a}=t.error,r=new I(i,a);if(t.src&&a===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Tm(t))!=null?n:t.error;(s==null?void 0:s.code)===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&dt(t,r)},500);return}if(t.src&&(a!==I.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(t.src);r.data={response:{code:n}}}catch{}dt(t,r)}function dt(e,t){var i;t.fatal&&(((i=he.get(e))!=null?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function yl(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof I))return;let a=e.target,r=e.detail;!r||!r.fatal||(((t=he.get(a))!=null?t:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var I_=(e,t)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",e);let n={[W.ErrorTypes.NETWORK_ERROR]:I.MEDIA_ERR_NETWORK,[W.ErrorTypes.MEDIA_ERROR]:I.MEDIA_ERR_DECODE,[W.ErrorTypes.KEY_SYSTEM_ERROR]:I.MEDIA_ERR_ENCRYPTED},s=p=>[W.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?I.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===W.ErrorTypes.KEY_SYSTEM_ERROR)return re.DRM;if(p.type===W.ErrorTypes.NETWORK_ERROR)return re.VIDEO},l,d=s(e);if(d===I.MEDIA_ERR_NETWORK&&e.response){let p=(i=o(e))!=null?i:re.VIDEO;l=(a=zs(e.response,p,t,e.fatal))!=null?a:new I("",d,e.fatal)}else if(d===I.MEDIA_ERR_ENCRYPTED)if(e.details===W.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=M("Attempting to play DRM-protected content without providing a DRM token.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_MISSING_TOKEN}else if(e.details===W.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(e.details===W.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(e.details===W.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=M("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(e.details===W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(e.details===W.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_CDM_ERROR}else if(e.details===W.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new I(p,I.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}else l=new I(e.error.message,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_ERROR;else l=new I("",d,e.fatal);return l.context||(l.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),l.data=e,l},Mm=e=>{throw TypeError(e)},Wd=(e,t,i)=>t.has(e)||Mm("Cannot "+i),Me=(e,t,i)=>(Wd(e,t,"read from private field"),i?i.call(e):t.get(e)),pt=(e,t,i)=>t.has(e)?Mm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ot=(e,t,i,a)=>(Wd(e,t,"write to private field"),t.set(e,i),i),jo=(e,t,i)=>(Wd(e,t,"access private method"),i),R_=()=>{try{return"0.26.1"}catch{}return"UNKNOWN"},C_=R_(),D_=()=>C_,L_=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,y={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},M_=Object.values(y),Ic=D_(),Rc="mux-video",Ct,Tr,Fn,Ar,Kn,Vn,qn,Yn,Gn,kr,Sr,jn,x_=class extends yn{constructor(){super(),pt(this,Sr),pt(this,Ct),pt(this,Tr),pt(this,Fn),pt(this,Ar,{}),pt(this,Kn,{}),pt(this,Vn),pt(this,qn),pt(this,Yn),pt(this,Gn),pt(this,kr,""),ot(this,Fn,$d()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=m_(this.nativeEl),a=(t=this.metadata)!=null?t:{};this.metadata={...i,...a},(i==null?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(ot(this,kr,"default"),this.updateLogo())})}static get NAME(){return Rc}static get VERSION(){return Ic}static get observedAttributes(){var e;return[...M_,...(e=yn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?L_:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${yn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[y.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(y.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Zs.includes(e)?this.setAttribute(y.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Zs.join()}`):this.removeAttribute(y.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(y.PLAYER_INIT_TIME)?+this.getAttribute(y.PLAYER_INIT_TIME):Me(this,Fn)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(y.PLAYER_INIT_TIME):this.setAttribute(y.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Me(this,Yn))!=null?e:Rc}set playerSoftwareName(e){ot(this,Yn,e)}get playerSoftwareVersion(){var e;return(e=Me(this,qn))!=null?e:Ic}set playerSoftwareVersion(e){ot(this,qn,e)}get _hls(){var e;return(e=Me(this,Ct))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Tm(this.nativeEl))!=null?e:null}get errorTranslator(){return Me(this,Gn)}set errorTranslator(e){ot(this,Gn,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(y.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(y.TYPE,e):this.removeAttribute(y.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(y.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(y.DEBUG,""):this.removeAttribute(y.DEBUG))}get disableTracking(){return this.hasAttribute(y.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(y.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(y.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(y.DISABLE_COOKIES,""):this.removeAttribute(y.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(y.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(y.START_TIME):this.setAttribute(y.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(y.PLAYBACK_ID)?this.getAttribute(y.PLAYBACK_ID):(e=Ud(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(y.PLAYBACK_ID,e):this.removeAttribute(y.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(y.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(y.MAX_RESOLUTION,e):this.removeAttribute(y.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(y.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(y.MIN_RESOLUTION,e):this.removeAttribute(y.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(y.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(y.RENDITION_ORDER,e):this.removeAttribute(y.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(y.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(y.PROGRAM_START_TIME):this.setAttribute(y.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(y.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(y.PROGRAM_END_TIME):this.setAttribute(y.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(y.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(y.ASSET_START_TIME):this.setAttribute(y.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(y.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(y.ASSET_END_TIME):this.setAttribute(y.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(y.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(y.CUSTOM_DOMAIN,e):this.removeAttribute(y.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(y.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(y.DRM_TOKEN,e):this.removeAttribute(y.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(y.PLAYBACK_TOKEN))return(e=this.getAttribute(y.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(y.PLAYBACK_ID)){let[,r]=Md((t=this.playbackId)!=null?t:"");return(i=new URLSearchParams(r).get("token"))!=null?i:void 0}if(this.src)return(a=new URLSearchParams(this.src).get("token"))!=null?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(y.PLAYBACK_TOKEN,e):this.removeAttribute(y.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(y.PLAYBACK_TOKEN),t=this.getAttribute(y.DRM_TOKEN);return{...Me(this,Kn),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{}}}set tokens(e){ot(this,Kn,e??{})}get ended(){return Sm(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(y.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(y.ENV_KEY,e):this.removeAttribute(y.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(y.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(y.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(y.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(y.STREAM_TYPE))!=null?e:gl(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(y.STREAM_TYPE,e):this.removeAttribute(y.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(y.TARGET_LIVE_WINDOW)?+this.getAttribute(y.TARGET_LIVE_WINDOW):p_(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(y.TARGET_LIVE_WINDOW):this.setAttribute(y.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(y.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,a-i)}return v_(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(y.LIVE_EDGE_OFFSET))return+this.getAttribute(y.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(y.LIVE_EDGE_OFFSET):this.setAttribute(y.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Hd(this.nativeEl)}async addCuePoints(e){return pm(this.nativeEl,e)}get activeCuePoint(){return vm(this.nativeEl)}get cuePoints(){return W0(this.nativeEl)}async addChapters(e){return Em(this.nativeEl,e)}get activeChapter(){return _m(this.nativeEl)}get chapters(){return K0(this.nativeEl)}getStartDate(){return q0(this.nativeEl,this._hls)}get currentPdt(){return Y0(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(y.PREFER_PLAYBACK);if(e===Kt.MSE||e===Kt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Kt.MSE||e===Kt.NATIVE?this.setAttribute(y.PREFER_PLAYBACK,e):this.removeAttribute(y.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![y.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return i!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...Me(this,Ar)}}set metadata(e){ot(this,Ar,e??{}),this.mux&&this.mux.emit("hb",Me(this,Ar))}get _hlsConfig(){return Me(this,Vn)}set _hlsConfig(e){ot(this,Vn,e)}get logo(){var e;return(e=this.getAttribute(y.LOGO))!=null?e:Me(this,kr)}set logo(e){e?this.setAttribute(y.LOGO,e):this.removeAttribute(y.LOGO)}load(){ot(this,Ct,__(this,this.nativeEl,Me(this,Ct)))}unload(){wm(this.nativeEl,Me(this,Ct),this),ot(this,Ct,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(yn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case y.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=i??void 0;break;case y.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=i??void 0;break;case"src":{let n=!!t,s=!!i;!n&&s?jo(this,Sr,jn).call(this):n&&!s?this.unload():n&&s&&(this.unload(),jo(this,Sr,jn).call(this));break}case"autoplay":if(i===t)break;(a=Me(this,Ct))==null||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;(r=Me(this,Ct))==null||r.setPreload(i);break;case y.PLAYBACK_ID:this.src=bl(this);break;case y.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case y.METADATA_URL:i&&fetch(i).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case y.STREAM_TYPE:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case y.TARGET_LIVE_WINDOW:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case y.LOGO:(i==null||i!==t)&&this.updateLogo();break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(Me(this,kr)||this.logo);e.innerHTML=t}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!Me(this,Ct)&&jo(this,Sr,jn).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Ct=new WeakMap,Tr=new WeakMap,Fn=new WeakMap,Ar=new WeakMap,Kn=new WeakMap,Vn=new WeakMap,qn=new WeakMap,Yn=new WeakMap,Gn=new WeakMap,kr=new WeakMap,Sr=new WeakSet,jn=async function(){Me(this,Tr)||(await ot(this,Tr,Promise.resolve()),ot(this,Tr,null),this.load())};const ta=new WeakMap;class Qo extends Error{}class O_ extends Error{}const N_=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],P_=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const i=t.deref();i&&e(i)})}}:Set;function $_(e){var t,i,a;(i=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function U_(){return globalThis.chrome}function H_(){var i;const e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${e}"]`))return;const t=document.createElement("script");t.src=e,document.head.append(t)}function Ii(){var e,t;return(t=(e=globalThis.cast)==null?void 0:e.framework)==null?void 0:t.CastContext.getInstance()}function Fd(){var e;return(e=Ii())==null?void 0:e.getCurrentSession()}function Kd(){var e;return(e=Fd())==null?void 0:e.getSessionObj().media[0]}function B_(e){return new Promise((t,i)=>{Kd().editTracksInfo(e,t,i)})}function W_(e){return new Promise((t,i)=>{Kd().getStatus(e,t,i)})}function Cc(e){return Ii().setOptions({...xm(),...e})}function xm(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function F_(e){if(!e)return;const t=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=e.match(t);return i?i[1]:null}function K_(e){const t=e.split(`
`),i=[];for(let a=0;a<t.length;a++)if(t[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=t[a+1]?t[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function V_(e){return e.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")}async function q_(e){try{const i=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return N_.some(a=>i===a)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}async function Y_(e){try{const t=await(await fetch(e)).text();let i=t;const a=K_(t);if(a.length>0){const s=new URL(a[0],e).toString();i=await(await fetch(s)).text()}const r=V_(i);return F_(r)}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}const Qn=new P_,ci=new WeakSet;let Ae;$_(()=>{var e,t,i,a;if(!((t=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&t.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}Ae||(Ae=cast.framework,Ii().addEventListener(Ae.CastContextEventType.CAST_STATE_CHANGED,r=>{Qn.forEach(n=>{var s,o;return(o=(s=ta.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),Ii().addEventListener(Ae.CastContextEventType.SESSION_STATE_CHANGED,r=>{Qn.forEach(n=>{var s,o;return(o=(s=ta.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),Qn.forEach(r=>{var n,s;return(s=(n=ta.get(r)).init)==null?void 0:s.call(n)}))});let Dc=0;var Q,fn,Xe,ai,Ji,ea,wi,_o,ne,Pi,Om,Nm,Tl,Pm,Al,$m,kl;class G_ extends EventTarget{constructor(i){super();Be(this,ne);Be(this,Q);Be(this,fn);Be(this,Xe);Be(this,ai);Be(this,Ji,"disconnected");Be(this,ea,!1);Be(this,wi,new Set);Be(this,_o,new WeakMap);at(this,Q,i),Qn.add(this),ta.set(this,{init:()=>rt(this,ne,Al).call(this),onCastStateChanged:()=>rt(this,ne,Tl).call(this),onSessionStateChanged:()=>rt(this,ne,Pm).call(this),getCastPlayer:()=>k(this,ne,Pi)}),rt(this,ne,Al).call(this)}get state(){return k(this,Ji)}async watchAvailability(i){if(k(this,Q).disableRemotePlayback)throw new Qo("disableRemotePlayback attribute is present.");return k(this,_o).set(i,++Dc),k(this,wi).add(i),queueMicrotask(()=>i(rt(this,ne,Nm).call(this))),Dc}async cancelWatchAvailability(i){if(k(this,Q).disableRemotePlayback)throw new Qo("disableRemotePlayback attribute is present.");i?k(this,wi).delete(i):k(this,wi).clear()}async prompt(){var a,r,n,s;if(k(this,Q).disableRemotePlayback)throw new Qo("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new O_("The RemotePlayback API is disabled on this platform.");const i=ci.has(k(this,Q));ci.add(k(this,Q)),Cc(k(this,Q).castOptions),Object.entries(k(this,ai)).forEach(([o,l])=>{k(this,Xe).controller.addEventListener(o,l)});try{await Ii().requestSession()}catch(o){if(i||ci.delete(k(this,Q)),o==="cancel")return;throw new Error(o)}(s=(n=ta.get(k(this,Q)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Q=new WeakMap,fn=new WeakMap,Xe=new WeakMap,ai=new WeakMap,Ji=new WeakMap,ea=new WeakMap,wi=new WeakMap,_o=new WeakMap,ne=new WeakSet,Pi=function(){if(ci.has(k(this,Q)))return k(this,Xe)},Om=function(){ci.has(k(this,Q))&&(Object.entries(k(this,ai)).forEach(([i,a])=>{k(this,Xe).controller.removeEventListener(i,a)}),ci.delete(k(this,Q)),k(this,Q).muted=k(this,Xe).isMuted,k(this,Q).currentTime=k(this,Xe).savedPlayerState.currentTime,k(this,Xe).savedPlayerState.isPaused===!1&&k(this,Q).play())},Nm=function(){var a;const i=(a=Ii())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Tl=function(){const i=Ii().getCastState();if(ci.has(k(this,Q))&&i==="CONNECTING"&&(at(this,Ji,"connecting"),this.dispatchEvent(new Event("connecting"))),!k(this,ea)&&(i!=null&&i.includes("CONNECT"))){at(this,ea,!0);for(let a of k(this,wi))a(!0)}else if(k(this,ea)&&(!i||i==="NO_DEVICES_AVAILABLE")){at(this,ea,!1);for(let a of k(this,wi))a(!1)}},Pm=async function(){var a;const{SESSION_RESUMED:i}=Ae.SessionState;if(Ii().getSessionState()===i&&k(this,Q).castSrc===((a=Kd())==null?void 0:a.media.contentId)){ci.add(k(this,Q)),Object.entries(k(this,ai)).forEach(([r,n])=>{k(this,Xe).controller.addEventListener(r,n)});try{await W_(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}k(this,ai)[Ae.RemotePlayerEventType.IS_PAUSED_CHANGED](),k(this,ai)[Ae.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Al=function(){!Ae||k(this,fn)||(at(this,fn,!0),Cc(k(this,Q).castOptions),k(this,Q).textTracks.addEventListener("change",()=>rt(this,ne,kl).call(this)),rt(this,ne,Tl).call(this),at(this,Xe,new Ae.RemotePlayer),new Ae.RemotePlayerController(k(this,Xe)),at(this,ai,{[Ae.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(at(this,Ji,"connected"),this.dispatchEvent(new Event("connect"))):(rt(this,ne,Om).call(this),at(this,Ji,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[Ae.RemotePlayerEventType.DURATION_CHANGED]:()=>{k(this,Q).dispatchEvent(new Event("durationchange"))},[Ae.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{k(this,Q).dispatchEvent(new Event("volumechange"))},[Ae.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{k(this,Q).dispatchEvent(new Event("volumechange"))},[Ae.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=k(this,ne,Pi))!=null&&i.isMediaLoaded&&k(this,Q).dispatchEvent(new Event("timeupdate"))},[Ae.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{k(this,Q).dispatchEvent(new Event("resize"))},[Ae.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{k(this,Q).dispatchEvent(new Event(this.paused?"pause":"play"))},[Ae.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=k(this,ne,Pi))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&k(this,Q).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=k(this,ne,Pi))==null?void 0:a.playerState]))},[Ae.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=k(this,ne,Pi))!=null&&i.isMediaLoaded&&(await Promise.resolve(),rt(this,ne,$m).call(this))}}))},$m=function(){rt(this,ne,kl).call(this)},kl=async function(){var u,m,f;if(!k(this,ne,Pi))return;const a=(((u=k(this,Xe).mediaInfo)==null?void 0:u.tracks)??[]).filter(({type:E})=>E===chrome.cast.media.TrackType.TEXT),r=[...k(this,Q).textTracks].filter(({kind:E})=>E==="subtitles"||E==="captions"),n=a.map(({language:E,name:_,trackId:b})=>{const{mode:T}=r.find(v=>v.language===E&&v.label===_)??{};return T?{mode:T,trackId:b}:!1}).filter(Boolean),o=n.filter(({mode:E})=>E!=="showing").map(({trackId:E})=>E),l=n.find(({mode:E})=>E==="showing"),d=((f=(m=Fd())==null?void 0:m.getSessionObj().media[0])==null?void 0:f.activeTrackIds)??[];let p=d;if(d.length&&(p=p.filter(E=>!o.includes(E))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((E,_)=>E.length===_.length&&E.every(b=>_.includes(b)))(d,p))try{const E=new chrome.cast.media.EditTracksInfoRequest(p);await B_(E)}catch(E){console.error(E)}};const j_=e=>{var t,i,a,r,n,s,q,Um;return t=class extends e{constructor(){super(...arguments);Be(this,s);Be(this,i,{paused:!1});Be(this,a,xm());Be(this,r);Be(this,n)}get remote(){return k(this,n)?k(this,n):U_()?(this.disableRemotePlayback||H_(),ta.set(this,{loadOnPrompt:()=>rt(this,s,Um).call(this)}),at(this,n,new G_(this))):super.remote}attributeChangedCallback(h,u,m){if(super.attributeChangedCallback(h,u,m),h==="cast-receiver"&&m){k(this,a).receiverApplicationId=m;return}if(k(this,s,q))switch(h){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var _;if(!k(this,s,q))return super.load();const h=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);h.customData=this.castCustomData;const u=[...this.querySelectorAll("track")].filter(({kind:b,src:T})=>T&&(b==="subtitles"||b==="captions")),m=[];let f=0;if(u.length&&(h.tracks=u.map(b=>{const T=++f;m.length===0&&b.track.mode==="showing"&&m.push(T);const v=new chrome.cast.media.Track(T,chrome.cast.media.TrackType.TEXT);return v.trackContentId=b.src,v.trackContentType="text/vtt",v.subtype=b.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,v.name=b.label,v.language=b.srclang,v})),this.castStreamType==="live"?h.streamType=chrome.cast.media.StreamType.LIVE:h.streamType=chrome.cast.media.StreamType.BUFFERED,h.metadata=new chrome.cast.media.GenericMediaMetadata,h.metadata.title=this.title,h.metadata.images=[{url:this.poster}],q_(this.castSrc)){const b=await Y_(this.castSrc);((b==null?void 0:b.includes("m4s"))||(b==null?void 0:b.includes("mp4")))&&(h.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,h.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4)}const E=new chrome.cast.media.LoadRequest(h);E.currentTime=super.currentTime??0,E.autoplay=!k(this,i).paused,E.activeTrackIds=m,await((_=Fd())==null?void 0:_.loadMedia(E)),this.dispatchEvent(new Event("volumechange"))}play(){var h;if(k(this,s,q)){k(this,s,q).isPaused&&((h=k(this,s,q).controller)==null||h.playOrPause());return}return super.play()}pause(){var h;if(k(this,s,q)){k(this,s,q).isPaused||(h=k(this,s,q).controller)==null||h.playOrPause();return}super.pause()}get castOptions(){return k(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(h){this.castReceiver!=h&&this.setAttribute("cast-receiver",`${h}`)}get castSrc(){var h;return this.getAttribute("cast-src")??((h=this.querySelector("source"))==null?void 0:h.src)??this.currentSrc}set castSrc(h){this.castSrc!=h&&this.setAttribute("cast-src",`${h}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(h){this.setAttribute("cast-content-type",`${h}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(h){this.setAttribute("cast-stream-type",`${h}`)}get castCustomData(){return k(this,r)}set castCustomData(h){const u=typeof h;if(!["object","undefined"].includes(u)){console.error(`castCustomData must be nullish or an object but value was of type ${u}`);return}at(this,r,h)}get readyState(){if(k(this,s,q))switch(k(this,s,q).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return k(this,s,q)?k(this,s,q).isPaused:super.paused}get muted(){var h;return k(this,s,q)?(h=k(this,s,q))==null?void 0:h.isMuted:super.muted}set muted(h){var u;if(k(this,s,q)){(h&&!k(this,s,q).isMuted||!h&&k(this,s,q).isMuted)&&((u=k(this,s,q).controller)==null||u.muteOrUnmute());return}super.muted=h}get volume(){var h;return k(this,s,q)?((h=k(this,s,q))==null?void 0:h.volumeLevel)??1:super.volume}set volume(h){var u;if(k(this,s,q)){k(this,s,q).volumeLevel=+h,(u=k(this,s,q).controller)==null||u.setVolumeLevel();return}super.volume=h}get duration(){var h,u;return k(this,s,q)&&((h=k(this,s,q))!=null&&h.isMediaLoaded)?((u=k(this,s,q))==null?void 0:u.duration)??NaN:super.duration}get currentTime(){var h,u;return k(this,s,q)&&((h=k(this,s,q))!=null&&h.isMediaLoaded)?((u=k(this,s,q))==null?void 0:u.currentTime)??0:super.currentTime}set currentTime(h){var u;if(k(this,s,q)){k(this,s,q).currentTime=h,(u=k(this,s,q).controller)==null||u.seek();return}super.currentTime=h}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,q=function(){var h,u;return(u=(h=ta.get(this.remote))==null?void 0:h.getCastPlayer)==null?void 0:u.call(h)},Um=async function(){k(this,i).paused=gn(t.prototype,this,"paused"),gn(t.prototype,this,"pause").call(this),this.muted=gn(t.prototype,this,"muted");try{await this.load()}catch(h){console.error(h)}},dc(t,"observedAttributes",[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),t};var Hm=e=>{throw TypeError(e)},Bm=(e,t,i)=>t.has(e)||Hm("Cannot "+i),Wm=(e,t,i)=>(Bm(e,t,"read from private field"),i?i.call(e):t.get(e)),Fm=(e,t,i)=>t.has(e)?Hm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Km=(e,t,i,a)=>(Bm(e,t,"write to private field"),t.set(e,i),i),Ao=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class e extends Ao{}globalThis.DocumentFragment=e}var Vd=class extends Ao{},Q_=class extends Ao{},Z_={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Vd)}},Zn,z_=class{constructor(t,i={}){Fm(this,Zn),Km(this,Zn,i==null?void 0:i.detail)}get detail(){return Wm(this,Zn)}initCustomEvent(){}};Zn=new WeakMap;function X_(e,t){return new Vd}var J_={document:{createElement:X_},DocumentFragment,customElements:Z_,CustomEvent:z_,EventTarget:Ao,HTMLElement:Vd,HTMLVideoElement:Q_},eb=typeof window>"u"||typeof globalThis.customElements>"u",Zo=eb?J_:globalThis,zn,Lc=class extends j_(lf(x_)){constructor(){super(...arguments),Fm(this,zn)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){let t=this.autoplay;e!==t&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=Wm(this,zn))!=null?e:this.muxCastCustomData}set castCustomData(e){Km(this,zn,e)}};zn=new WeakMap;Zo.customElements.get("mux-video")||(Zo.customElements.define("mux-video",Lc),Zo.MuxVideoElement=Lc);const C={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},G={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Vm={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},qm=Object.entries(Vm),c=qm.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),tb={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},li=qm.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...tb});Object.entries(li).reduce((e,[t,i])=>{const a=c[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});const ib=Object.entries(c).reduce((e,[t,i])=>{const a=li[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Yt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Wa={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},Mc={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},nt={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ti={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ab={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function rb(e){return e==null?void 0:e.map(sb).join(" ")}function nb(e){return e==null?void 0:e.split(/\s+/).map(ob)}function sb(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function ob(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function lb(e){return e==null?void 0:e.map(ub).join(" ")}function db(e){return e==null?void 0:e.split(/\s+/).map(cb)}function ub(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function cb(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function hb(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function qd(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Ym(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}const Gm=e=>new Promise(t=>setTimeout(t,e)),xc=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],mb=(e,t)=>{const i=e===1?xc[t].singular:xc[t].plural;return`${e} ${i}`},Vr=e=>{if(!qd(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&mb(o,l)).filter(o=>o).join(", ")}${i?" remaining":""}`};function Ci(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const pb={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var Oc;const zo={en:pb};let Sl=((Oc=globalThis.navigator)==null?void 0:Oc.language)||"en";const vb=e=>{Sl=e},fb=e=>{var t,i,a;const[r]=Sl.split("-");return((t=zo[Sl])==null?void 0:t[e])||((i=zo[r])==null?void 0:i[e])||((a=zo.en)==null?void 0:a[e])||e},D=(e,t={})=>fb(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`);let jm=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class Qm extends jm{}let Nc=class extends Qm{constructor(){super(...arguments),this.role=null}};class Eb{observe(){}unobserve(){}disconnect(){}}const Zm={createElement:function(){return new tn.HTMLElement},createElementNS:function(){return new tn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},tn={ResizeObserver:Eb,document:Zm,Node:Qm,Element:Nc,HTMLElement:class extends Nc{constructor(){super(...arguments),this.innerHTML=""}get content(){return new tn.DocumentFragment}},DocumentFragment:class extends jm{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},zm=typeof window>"u"||typeof window.customElements>"u",Xm=Object.keys(tn).every(e=>e in globalThis),g=zm&&!Xm?tn:globalThis,Se=zm&&!Xm?Zm:globalThis.document,Pc=new WeakMap,Yd=e=>{let t=Pc.get(e);return t||Pc.set(e,t=new Set),t},Jm=new g.ResizeObserver(e=>{for(const t of e)for(const i of Yd(t.target))i(t)});function Qa(e,t){Yd(e).add(t),Jm.observe(e)}function Za(e,t){const i=Yd(e);i.delete(t),i.size||Jm.unobserve(e)}function tt(e){const t={};for(const i of e)t[i.name]=i.value;return t}function ct(e){var t;return(t=wl(e))!=null?t:tr(e,"media-controller")}function wl(e){var t;const{MEDIA_CONTROLLER:i}=G,a=e.getAttribute(i);if(a)return(t=ko(e))==null?void 0:t.getElementById(a)}const ep=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},_b=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},tp=(e,t)=>_b(e,t)[0],ui=(e,t)=>!e||!t?!1:e!=null&&e.contains(t)?!0:ui(e,t.getRootNode().host),tr=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||tr(e.getRootNode().host,t)};function Gd(e=document){var t;const i=e==null?void 0:e.activeElement;return i?(t=Gd(i.shadowRoot))!=null?t:i:null}function ko(e){var t;const i=(t=e==null?void 0:e.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function ip(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function bb(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((e-i.x)*r+(t-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function ge(e,t){const i=gb(e,a=>a===t);return i||ap(e,t)}function gb(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(t(s.selectorText))return s}}function ap(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];return n!=null&&n.sheet?(n==null||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function se(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function me(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}se(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function K(e,t){return e.hasAttribute(t)}function V(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}K(e,t)!=i&&e.toggleAttribute(t,i)}function oe(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function le(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;oe(e,t,void 0)!==a&&e.setAttribute(t,a)}var rp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hi=(e,t,i)=>(rp(e,t,"read from private field"),i?i.call(e):t.get(e)),yb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},An=(e,t,i,a)=>(rp(e,t,"write to private field"),t.set(e,i),i),We;function Tb(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class So extends g.HTMLElement{constructor(){if(super(),yb(this,We,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[G.MEDIA_CONTROLLER,c.MEDIA_PAUSED]}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===G.MEDIA_CONTROLLER&&(i&&((n=(r=hi(this,We))==null?void 0:r.unassociateElement)==null||n.call(r,this),An(this,We,null)),a&&this.isConnected&&(An(this,We,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=hi(this,We))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var t,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),An(this,We,Ab(this)),this.getAttribute(G.MEDIA_CONTROLLER)&&((i=(t=hi(this,We))==null?void 0:t.associateElement)==null||i.call(t,this)),(a=hi(this,We))==null||a.addEventListener("pointerdown",this),(r=hi(this,We))==null||r.addEventListener("click",this)}disconnectedCallback(){var t,i,a,r;this.getAttribute(G.MEDIA_CONTROLLER)&&((i=(t=hi(this,We))==null?void 0:t.unassociateElement)==null||i.call(t,this)),(a=hi(this,We))==null||a.removeEventListener("pointerdown",this),(r=hi(this,We))==null||r.removeEventListener("click",this),An(this,We,null)}handleEvent(t){var i;const a=(i=t.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(t.type==="pointerdown")this._pointerType=t.pointerType;else if(t.type==="click"){const{clientX:n,clientY:s}=t,{left:o,top:l,width:d,height:p}=this.getBoundingClientRect(),h=n-o,u=s-l;if(h<0||u<0||h>d||u>p||d===0&&p===0)return;const{pointerType:m=this._pointerType}=t;if(this._pointerType=void 0,m===Mc.TOUCH){this.handleTap(t);return}else if(m===Mc.MOUSE){this.handleMouseClick(t);return}}}}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(t){V(this,c.MEDIA_PAUSED,t)}handleTap(t){}handleMouseClick(t){const i=this.mediaPaused?C.MEDIA_PLAY_REQUEST:C.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(i,{composed:!0,bubbles:!0}))}}We=new WeakMap;So.shadowRootOptions={mode:"open"};So.getTemplateHTML=Tb;function Ab(e){var t;const i=e.getAttribute(G.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):tr(e,"media-controller")}g.customElements.get("media-gesture-receiver")||g.customElements.define("media-gesture-receiver",So);var $c=So,jd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Je=(e,t,i)=>(jd(e,t,"read from private field"),i?i.call(e):t.get(e)),Qe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$i=(e,t,i,a)=>(jd(e,t,"write to private field"),t.set(e,i),i),ut=(e,t,i)=>(jd(e,t,"access private method"),i),Xs,ba,an,Pa,Xn,Il,np,wr,Jn,Rl,sp,Cl,op,rn,wo,Io,Qd,za,nn;const x={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function kb(e){return`
    <style>
      
      :host([${c.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${x.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${x.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${x.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${x.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${x.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${x.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${x.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${x.USER_INACTIVE}]:not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_AIRPLAYING}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${x.USER_INACTIVE}]:not([${x.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${x.USER_INACTIVE}][${x.AUTOHIDE_OVER_CONTROLS}]:not([${x.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${x.AUDIO}])[${c.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${$c.shadowRootOptions.mode}">
          ${$c.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Sb=Object.values(c),wb="sm:384 md:576 lg:768 xl:960";function Ib(e){lp(e.target,e.contentRect.width)}function lp(e,t){var i;if(!e.isConnected)return;const a=(i=e.getAttribute(x.BREAKPOINTS))!=null?i:wb,r=Rb(a),n=Cb(r,t);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){e.hasAttribute(`breakpoint${o}`)||(e.setAttribute(`breakpoint${o}`,""),s=!0);return}e.hasAttribute(`breakpoint${o}`)&&(e.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(li.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(o)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(li.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Rb(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function Cb(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}class Ro extends g.HTMLElement{constructor(){if(super(),Qe(this,Il),Qe(this,Rl),Qe(this,Cl),Qe(this,rn),Qe(this,Io),Qe(this,za),Qe(this,Xs,0),Qe(this,ba,null),Qe(this,an,null),Qe(this,Pa,void 0),this.breakpointsComputed=!1,Qe(this,Xn,new MutationObserver(ut(this,Il,np).bind(this))),Qe(this,wr,!1),Qe(this,Jn,i=>{Je(this,wr)||(setTimeout(()=>{Ib(i),$i(this,wr,!1)},0),$i(this,wr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=tt(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){Je(this,ba)&&this.mediaUnsetCallback(Je(this,ba));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[x.AUTOHIDE,x.GESTURES_DISABLED].concat(Sb).filter(t=>![c.MEDIA_RENDITION_LIST,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_CHAPTERS_CUES,c.MEDIA_WIDTH,c.MEDIA_HEIGHT,c.MEDIA_ERROR,c.MEDIA_ERROR_MESSAGE].includes(t))}attributeChangedCallback(t,i,a){t.toLowerCase()==x.AUTOHIDE&&(this.autohide=a)}get media(){let t=this.querySelector(":scope > [slot=media]");return(t==null?void 0:t.nodeName)=="SLOT"&&(t=t.assignedElements({flatten:!0})[0]),t}async handleMediaUpdated(t){t&&($i(this,ba,t),t.localName.includes("-")&&await g.customElements.whenDefined(t.localName),this.mediaSetCallback(t))}connectedCallback(){var t;Je(this,Xn).observe(this,{childList:!0,subtree:!0}),Qa(this,Je(this,Jn));const i=this.getAttribute(x.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(x.USER_INACTIVE,""),lp(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(t=g.window)==null||t.addEventListener("mouseup",this)}disconnectedCallback(){var t;Je(this,Xn).disconnect(),Za(this,Je(this,Jn)),this.media&&this.mediaUnsetCallback(this.media),(t=g.window)==null||t.removeEventListener("mouseup",this)}mediaSetCallback(t){}mediaUnsetCallback(t){$i(this,ba,null)}handleEvent(t){switch(t.type){case"pointerdown":$i(this,Xs,t.timeStamp);break;case"pointermove":ut(this,Rl,sp).call(this,t);break;case"pointerup":ut(this,Cl,op).call(this,t);break;case"mouseleave":ut(this,rn,wo).call(this);break;case"mouseup":this.removeAttribute(x.KEYBOARD_CONTROL);break;case"keyup":ut(this,za,nn).call(this),this.setAttribute(x.KEYBOARD_CONTROL,"");break}}set autohide(t){const i=Number(t);$i(this,Pa,isNaN(i)?0:i)}get autohide(){return(Je(this,Pa)===void 0?2:Je(this,Pa)).toString()}get breakpoints(){return oe(this,x.BREAKPOINTS)}set breakpoints(t){le(this,x.BREAKPOINTS,t)}get audio(){return K(this,x.AUDIO)}set audio(t){V(this,x.AUDIO,t)}get gesturesDisabled(){return K(this,x.GESTURES_DISABLED)}set gesturesDisabled(t){V(this,x.GESTURES_DISABLED,t)}get keyboardControl(){return K(this,x.KEYBOARD_CONTROL)}set keyboardControl(t){V(this,x.KEYBOARD_CONTROL,t)}get noAutohide(){return K(this,x.NO_AUTOHIDE)}set noAutohide(t){V(this,x.NO_AUTOHIDE,t)}get autohideOverControls(){return K(this,x.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(t){V(this,x.AUTOHIDE_OVER_CONTROLS,t)}get userInteractive(){return K(this,x.USER_INACTIVE)}set userInteractive(t){V(this,x.USER_INACTIVE,t)}}Xs=new WeakMap;ba=new WeakMap;an=new WeakMap;Pa=new WeakMap;Xn=new WeakMap;Il=new WeakSet;np=function(e){const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}};wr=new WeakMap;Jn=new WeakMap;Rl=new WeakSet;sp=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-Je(this,Xs)<250)return;ut(this,Io,Qd).call(this),clearTimeout(Je(this,an));const t=this.hasAttribute(x.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&ut(this,za,nn).call(this)};Cl=new WeakSet;op=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(x.USER_INACTIVE);[this,this.media].includes(e.target)&&t?ut(this,rn,wo).call(this):ut(this,za,nn).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t==null?void 0:t.localName))&&ut(this,za,nn).call(this)};rn=new WeakSet;wo=function(){if(Je(this,Pa)<0||this.hasAttribute(x.USER_INACTIVE))return;this.setAttribute(x.USER_INACTIVE,"");const e=new g.CustomEvent(li.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};Io=new WeakSet;Qd=function(){if(!this.hasAttribute(x.USER_INACTIVE))return;this.removeAttribute(x.USER_INACTIVE);const e=new g.CustomEvent(li.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};za=new WeakSet;nn=function(){ut(this,Io,Qd).call(this),clearTimeout(Je(this,an));const e=parseInt(this.autohide);e<0||$i(this,an,setTimeout(()=>{ut(this,rn,wo).call(this)},e*1e3))};Ro.shadowRootOptions={mode:"open"};Ro.getTemplateHTML=kb;g.customElements.get("media-container")||g.customElements.define("media-container",Ro);var dp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ce=(e,t,i)=>(dp(e,t,"read from private field"),i?i.call(e):t.get(e)),dr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},kn=(e,t,i,a)=>(dp(e,t,"write to private field"),t.set(e,i),i),ga,ya,Js,ji,Jt,fi;class Zd{constructor(t,i,{defaultValue:a}={defaultValue:void 0}){dr(this,Jt),dr(this,ga,void 0),dr(this,ya,void 0),dr(this,Js,void 0),dr(this,ji,new Set),kn(this,ga,t),kn(this,ya,i),kn(this,Js,new Set(a))}[Symbol.iterator](){return Ce(this,Jt,fi).values()}get length(){return Ce(this,Jt,fi).size}get value(){var t;return(t=[...Ce(this,Jt,fi)].join(" "))!=null?t:""}set value(t){var i;t!==this.value&&(kn(this,ji,new Set),this.add(...(i=t==null?void 0:t.split(" "))!=null?i:[]))}toString(){return this.value}item(t){return[...Ce(this,Jt,fi)][t]}values(){return Ce(this,Jt,fi).values()}forEach(t,i){Ce(this,Jt,fi).forEach(t,i)}add(...t){var i,a;t.forEach(r=>Ce(this,ji).add(r)),!(this.value===""&&!((i=Ce(this,ga))!=null&&i.hasAttribute(`${Ce(this,ya)}`)))&&((a=Ce(this,ga))==null||a.setAttribute(`${Ce(this,ya)}`,`${this.value}`))}remove(...t){var i;t.forEach(a=>Ce(this,ji).delete(a)),(i=Ce(this,ga))==null||i.setAttribute(`${Ce(this,ya)}`,`${this.value}`)}contains(t){return Ce(this,Jt,fi).has(t)}toggle(t,i){return typeof i<"u"?i?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,i){return this.remove(t),this.add(i),t===i}}ga=new WeakMap;ya=new WeakMap;Js=new WeakMap;ji=new WeakMap;Jt=new WeakSet;fi=function(){return Ce(this,ji).size?Ce(this,ji):Ce(this,Js)};const Db=(e="")=>e.split(/\s+/),up=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Yt.CAPTIONS:Yt.SUBTITLES,language:i,label:r}},Co=(e="",t={})=>Db(e).map(i=>{const a=up(i);return{...t,...a}}),cp=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?up(t):t):typeof e=="string"?Co(e):[e]:[],Dl=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sn=(e=[])=>Array.prototype.map.call(e,Dl).join(" "),Lb=(e,t)=>i=>i[e]===t,hp=e=>{const t=Object.entries(e).map(([i,a])=>Lb(i,a));return i=>t.every(a=>a(i))},qr=(e,t=[],i=[])=>{const a=cp(i).map(hp),r=n=>a.some(s=>s(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},Do=(e,t=()=>!0)=>{if(!(e!=null&&e.textTracks))return[];const i=typeof t=="function"?t:hp(t);return Array.from(e.textTracks).filter(i)},mp=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(c.MEDIA_SUBTITLES_SHOWING)},Mb=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Uc="exitFullscreen"in Se?"exitFullscreen":"webkitExitFullscreen"in Se?"webkitExitFullscreen":"webkitCancelFullScreen"in Se?"webkitCancelFullScreen":void 0,xb=e=>{var t;const{documentElement:i}=e;if(Uc){const a=(t=i==null?void 0:i[Uc])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Ir="fullscreenElement"in Se?"fullscreenElement":"webkitFullscreenElement"in Se?"webkitFullscreenElement":void 0,Ob=e=>{const{documentElement:t,media:i}=e,a=t==null?void 0:t[Ir];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ab.FULLSCREEN?i:a},Nb=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=Ob(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(Ir in s))return ui(n,r);for(;s!=null&&s[Ir];){if(s[Ir]===r)return!0;s=(t=s[Ir])==null?void 0:t.shadowRoot}}return!1},Pb="fullscreenEnabled"in Se?"fullscreenEnabled":"webkitFullscreenEnabled"in Se?"webkitFullscreenEnabled":void 0,$b=e=>{const{documentElement:t,media:i}=e;return!!(t!=null&&t[Pb])||i&&"webkitSupportsFullscreen"in i};let Sn;const zd=()=>{var e,t;return Sn||(Sn=(t=(e=Se)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Sn)},Ub=async(e=zd())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([Hb(e,i.signal),Bb(e,t)]);return i.abort(),a},Hb=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),Bb=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await Gm(10)}return e.volume!==t},Wb=/.*Version\/.*Safari\/.*/.test(g.navigator.userAgent),pp=(e=zd())=>g.matchMedia("(display-mode: standalone)").matches&&Wb?!1:typeof(e==null?void 0:e.requestPictureInPicture)=="function",vp=(e=zd())=>$b({documentElement:Se,media:e}),Fb=vp(),Kb=pp(),Vb=!!g.WebKitPlaybackTargetAvailabilityEvent,qb=!!g.chrome,eo=e=>Do(e.media,t=>[Yt.SUBTITLES,Yt.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),fp=e=>Do(e.media,t=>t.mode===Wa.SHOWING&&[Yt.SUBTITLES,Yt.CAPTIONS].includes(t.kind)),Ep=(e,t)=>{const i=eo(e),a=fp(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)qr(Wa.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:s}=e;if(!(s!=null&&s.noSubtitlesLangPref)){const p=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),h=p?[p,...globalThis.navigator.languages]:globalThis.navigator.languages,u=i.filter(m=>h.some(f=>m.language.toLowerCase().startsWith(f.split("-")[0]))).sort((m,f)=>{const E=h.findIndex(b=>m.language.toLowerCase().startsWith(b.split("-")[0])),_=h.findIndex(b=>f.language.toLowerCase().startsWith(b.split("-")[0]));return E-_});u[0]&&(n=u[0])}const{language:o,label:l,kind:d}=n;qr(Wa.DISABLED,i,a),qr(Wa.SHOWING,i,[{language:o,label:l,kind:d}])}}},Xd=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?Yb(e,t):Object.entries(e).every(([i,a])=>i in t&&Xd(a,t[i])),Yb=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>Xd(r,t[n])):!0},Gb=Object.values(ti);let to;const jb=Ub().then(e=>(to=e,to)),Qb=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof g.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=g.customElements.get(i);a&&t instanceof a||(await g.customElements.whenDefined(i),g.customElements.upgrade(t))}))},Zb=new g.DOMParser,zb=e=>e&&(Zb.parseFromString(e,"text/html").body.textContent||e),Rr={mediaError:{get(e,t){const{media:i}=e;if((t==null?void 0:t.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if((t==null?void 0:t.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if((t==null?void 0:t.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.muted)!=null?t:!1},set(e,t){const{media:i}=t;if(i){try{g.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=g.localStorage.getItem("media-chrome-pref-muted")==="true";Rr.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.volume)!=null?t:1},set(e,t){const{media:i}=t;if(i){try{e==null?g.localStorage.removeItem("media-chrome-pref-volume"):g.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=g.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Rr.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof(t==null?void 0:t.volume)>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i==null?void 0:i.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!qd(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t==null?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return(t==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i==null?void 0:i.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i==null?void 0:i.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[ti.LIVE,ti.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(Gb.includes(r))return r===ti.UNKNOWN?a:r;const n=t.duration;return n===1/0?ti.LIVE:Number.isFinite(n)?ti.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:i}=t,a=Rr.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===ti.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(Rr.mediaStreamType.get(e)===ti.LIVE))return!1;const r=t.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return eo(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return fp(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![Yt.CAPTIONS,Yt.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||Ep(t,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=Do(i,{kind:Yt.CHAPTERS});return Array.from((t=a==null?void 0:a.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:s})=>({text:zb(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",e),n==null||n.addEventListener("load",e),()=>{r==null||r.removeEventListener("load",e),n==null||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?ui(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!Se.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else Se.pictureInPictureElement&&Se.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i==null?void 0:i.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i==null?void 0:i.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a==null?void 0:a.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return Nb(e)},set(e,t){e?Mb(t):xb(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!(i!=null&&i.remote)||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&g.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!Fb||!vp(t))return nt.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!Kb||!pp(t))return nt.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(to===!1||(t==null?void 0:t.volume)==null)return nt.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{to==null&&jb.then(t=>e(t?void 0:nt.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!qb||!((i=a==null?void 0:a.remote)!=null&&i.state))return nt.UNSUPPORTED;if(!(t==null||t==="available"))return nt.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!Vb)return nt.UNSUPPORTED;if((t==null?void 0:t.availability)==="not-available")return nt.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!(i!=null&&i.videoRenditions))return nt.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return nt.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!(a!=null&&a.audioTracks))return nt.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return nt.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},Xb={[C.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:s}=t,o=i??void 0;let l,d;if(s&&o!=null){const[m]=Do(s,{kind:Yt.METADATA,label:"thumbnails"}),f=Array.prototype.find.call((a=m==null?void 0:m.cues)!=null?a:[],(E,_,b)=>_===0?E.endTime>o:_===b.length-1?E.startTime<=o:E.startTime<=o&&E.endTime>o);if(f){const E=/'^(?:[a-z]+:)?\/\//i.test(f.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(f.text,E);d=new URLSearchParams(_.hash).get("#xywh").split(",").map(T=>+T),l=_.href}}const p=e.mediaDuration.get(t);let u=(n=e.mediaChaptersCues.get(t).find((m,f,E)=>f===E.length-1&&p===m.endTime?m.startTime<=o&&m.endTime>=o:m.startTime<=o&&m.endTime>o))==null?void 0:n.text;return i!=null&&u==null&&(u=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:d,mediaPreviewChapter:u}},[C.MEDIA_PAUSE_REQUEST](e,t){e["mediaPaused"].set(!0,t)},[C.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const s="mediaPaused",l=e.mediaStreamType.get(t)===ti.LIVE,d=!((i=t.options)!=null&&i.noAutoSeekToLive),p=e.mediaTargetLiveWindow.get(t)>0;if(l&&d&&!p){const h=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(h){const u=(n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,m=h-u;e.mediaCurrentTime.set(m,t)}}e[s].set(!1,t)},[C.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[C.MEDIA_MUTE_REQUEST](e,t){e["mediaMuted"].set(!0,t)},[C.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[C.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[C.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[C.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",s=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;e[n].set(l,t)},[C.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=eo(t),s=cp(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&g.localStorage.setItem("media-chrome-pref-subtitles-lang",o),qr(Wa.SHOWING,n,s)},[C.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=eo(t),r=i??[];qr(Wa.DISABLED,a,r)},[C.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){Ep(t,i)},[C.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[C.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[C.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[C.MEDIA_EXIT_PIP_REQUEST](e,t){e["mediaIsPip"].set(!1,t)},[C.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){const i="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[i].set(!0,t)},[C.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e["mediaIsFullscreen"].set(!1,t)},[C.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[C.MEDIA_EXIT_CAST_REQUEST](e,t){e["mediaIsCasting"].set(!1,t)},[C.MEDIA_AIRPLAY_REQUEST](e,t){e["mediaIsAirplaying"].set(!0,t)}},Jb=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=Rr,requestMap:r=Xb,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=E=>{E!=null&&(Xd(E,d)||(d=Object.freeze({...d,...E}),o.forEach(_=>_(d))))},h=()=>{const E=Object.entries(a).reduce((_,[b,{get:T}])=>(_[b]=T(l),_),{});p(E)},u={};let m;const f=async(E,_)=>{var b,T,v,w,L,N,B,j,X,F,$,Oe,Ve,qe,ve,$e;const kt=!!m;if(m={...l,...m??{},...E},kt)return;await Qb(...Object.values(E));const Ue=o.length>0&&_===0&&s,ht=l.media!==m.media,St=((b=l.media)==null?void 0:b.textTracks)!==((T=m.media)==null?void 0:T.textTracks),He=((v=l.media)==null?void 0:v.videoRenditions)!==((w=m.media)==null?void 0:w.videoRenditions),Ye=((L=l.media)==null?void 0:L.audioTracks)!==((N=m.media)==null?void 0:N.audioTracks),it=((B=l.media)==null?void 0:B.remote)!==((j=m.media)==null?void 0:j.remote),ua=l.documentElement!==m.documentElement,bn=!!l.media&&(ht||Ue),ju=!!((X=l.media)!=null&&X.textTracks)&&(St||Ue),Qu=!!((F=l.media)!=null&&F.videoRenditions)&&(He||Ue),Zu=!!(($=l.media)!=null&&$.audioTracks)&&(Ye||Ue),zu=!!((Oe=l.media)!=null&&Oe.remote)&&(it||Ue),Xu=!!l.documentElement&&(ua||Ue),Ju=bn||ju||Qu||Zu||zu||Xu,ca=o.length===0&&_===1&&s,ec=!!m.media&&(ht||ca),tc=!!((Ve=m.media)!=null&&Ve.textTracks)&&(St||ca),ic=!!((qe=m.media)!=null&&qe.videoRenditions)&&(He||ca),ac=!!((ve=m.media)!=null&&ve.audioTracks)&&(Ye||ca),rc=!!(($e=m.media)!=null&&$e.remote)&&(it||ca),nc=!!m.documentElement&&(ua||ca),sc=ec||tc||ic||ac||rc||nc;if(!(Ju||sc)){Object.entries(m).forEach(([J,sr])=>{l[J]=sr}),h(),m=void 0;return}Object.entries(a).forEach(([J,{get:sr,mediaEvents:Qv=[],textTracksEvents:Zv=[],videoRenditionsEvents:zv=[],audioTracksEvents:Xv=[],remoteEvents:Jv=[],rootEvents:ef=[],stateOwnersUpdateHandlers:tf=[]}])=>{u[J]||(u[J]={});const Ge=pe=>{const je=sr(l,pe);p({[J]:je})};let we;we=u[J].mediaEvents,Qv.forEach(pe=>{we&&bn&&(l.media.removeEventListener(pe,we),u[J].mediaEvents=void 0),ec&&(m.media.addEventListener(pe,Ge),u[J].mediaEvents=Ge)}),we=u[J].textTracksEvents,Zv.forEach(pe=>{var je,mt;we&&ju&&((je=l.media.textTracks)==null||je.removeEventListener(pe,we),u[J].textTracksEvents=void 0),tc&&((mt=m.media.textTracks)==null||mt.addEventListener(pe,Ge),u[J].textTracksEvents=Ge)}),we=u[J].videoRenditionsEvents,zv.forEach(pe=>{var je,mt;we&&Qu&&((je=l.media.videoRenditions)==null||je.removeEventListener(pe,we),u[J].videoRenditionsEvents=void 0),ic&&((mt=m.media.videoRenditions)==null||mt.addEventListener(pe,Ge),u[J].videoRenditionsEvents=Ge)}),we=u[J].audioTracksEvents,Xv.forEach(pe=>{var je,mt;we&&Zu&&((je=l.media.audioTracks)==null||je.removeEventListener(pe,we),u[J].audioTracksEvents=void 0),ac&&((mt=m.media.audioTracks)==null||mt.addEventListener(pe,Ge),u[J].audioTracksEvents=Ge)}),we=u[J].remoteEvents,Jv.forEach(pe=>{var je,mt;we&&zu&&((je=l.media.remote)==null||je.removeEventListener(pe,we),u[J].remoteEvents=void 0),rc&&((mt=m.media.remote)==null||mt.addEventListener(pe,Ge),u[J].remoteEvents=Ge)}),we=u[J].rootEvents,ef.forEach(pe=>{we&&Xu&&(l.documentElement.removeEventListener(pe,we),u[J].rootEvents=void 0),nc&&(m.documentElement.addEventListener(pe,Ge),u[J].rootEvents=Ge)});const oc=u[J].stateOwnersUpdateHandlers;tf.forEach(pe=>{oc&&Ju&&oc(),sc&&(u[J].stateOwnersUpdateHandlers=pe(Ge,m))})}),Object.entries(m).forEach(([J,sr])=>{l[J]=sr}),h(),m=void 0};return f({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(E){const{type:_,detail:b}=E;if(r[_]&&d.mediaErrorCode==null){p(r[_](a,l,E));return}_==="mediaelementchangerequest"?f({media:b}):_==="fullscreenelementchangerequest"?f({fullscreenElement:b}):_==="documentelementchangerequest"?f({documentElement:b}):_==="optionschangerequest"&&Object.entries(b??{}).forEach(([T,v])=>{l.options[T]=v})},getState(){return d},subscribe(E){return f({},o.length+1),o.push(E),E(d),()=>{const _=o.indexOf(E);_>=0&&(f({},o.length-1),o.splice(_,1))}}}};var Jd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},H=(e,t,i)=>(Jd(e,t,"read from private field"),i?i.call(e):t.get(e)),Zt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mi=(e,t,i,a)=>(Jd(e,t,"write to private field"),t.set(e,i),i),ki=(e,t,i)=>(Jd(e,t,"access private method"),i),Qi,Cr,te,Dr,Dt,es,ts,Ll,Xa,on,is,Ml;const _p=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],Hc=10,R={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class bp extends Ro{constructor(){super(),Zt(this,ts),Zt(this,Xa),Zt(this,is),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,Zt(this,Qi,new Zd(this,R.HOTKEYS)),Zt(this,Cr,void 0),Zt(this,te,void 0),Zt(this,Dr,void 0),Zt(this,Dt,void 0),Zt(this,es,i=>{var a;(a=H(this,te))==null||a.dispatch(i)}),this.associateElement(this);let t={};mi(this,Dr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in t&&t[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new g.CustomEvent(ib[n],{composed:!0,detail:r});this.dispatchEvent(s)}),t=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(R.NO_HOTKEYS,R.HOTKEYS,R.DEFAULT_STREAM_TYPE,R.DEFAULT_SUBTITLES,R.DEFAULT_DURATION,R.LANG)}get mediaStore(){return H(this,te)}set mediaStore(t){var i,a;if(H(this,te)&&((i=H(this,Dt))==null||i.call(this),mi(this,Dt,void 0)),mi(this,te,t),!H(this,te)&&!this.hasAttribute(R.NO_DEFAULT_STORE)){ki(this,ts,Ll).call(this);return}mi(this,Dt,(a=H(this,te))==null?void 0:a.subscribe(H(this,Dr)))}get fullscreenElement(){var t;return(t=H(this,Cr))!=null?t:this}set fullscreenElement(t){var i;this.hasAttribute(R.FULLSCREEN_ELEMENT)&&this.removeAttribute(R.FULLSCREEN_ELEMENT),mi(this,Cr,t),(i=H(this,te))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return K(this,R.DEFAULT_SUBTITLES)}set defaultSubtitles(t){V(this,R.DEFAULT_SUBTITLES,t)}get defaultStreamType(){return oe(this,R.DEFAULT_STREAM_TYPE)}set defaultStreamType(t){le(this,R.DEFAULT_STREAM_TYPE,t)}get defaultDuration(){return se(this,R.DEFAULT_DURATION)}set defaultDuration(t){me(this,R.DEFAULT_DURATION,t)}get noHotkeys(){return K(this,R.NO_HOTKEYS)}set noHotkeys(t){V(this,R.NO_HOTKEYS,t)}get keysUsed(){return oe(this,R.KEYS_USED)}set keysUsed(t){le(this,R.KEYS_USED,t)}get liveEdgeOffset(){return se(this,R.LIVE_EDGE_OFFSET)}set liveEdgeOffset(t){me(this,R.LIVE_EDGE_OFFSET,t)}get noAutoSeekToLive(){return K(this,R.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(t){V(this,R.NO_AUTO_SEEK_TO_LIVE,t)}get noVolumePref(){return K(this,R.NO_VOLUME_PREF)}set noVolumePref(t){V(this,R.NO_VOLUME_PREF,t)}get noSubtitlesLangPref(){return K(this,R.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(t){V(this,R.NO_SUBTITLES_LANG_PREF,t)}get noDefaultStore(){return K(this,R.NO_DEFAULT_STORE)}set noDefaultStore(t){V(this,R.NO_DEFAULT_STORE,t)}attributeChangedCallback(t,i,a){var r,n,s,o,l,d,p,h;if(super.attributeChangedCallback(t,i,a),t===R.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(R.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(t===R.HOTKEYS)H(this,Qi).value=a;else if(t===R.DEFAULT_SUBTITLES&&a!==i)(r=H(this,te))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(R.DEFAULT_SUBTITLES)}});else if(t===R.DEFAULT_STREAM_TYPE)(s=H(this,te))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(t===R.LIVE_EDGE_OFFSET)(o=H(this,te))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(R.LIVE_EDGE_OFFSET)}});else if(t===R.SEEK_TO_LIVE_OFFSET)(l=H(this,te))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(R.SEEK_TO_LIVE_OFFSET):void 0}});else if(t===R.NO_AUTO_SEEK_TO_LIVE)(d=H(this,te))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(R.NO_AUTO_SEEK_TO_LIVE)}});else if(t===R.FULLSCREEN_ELEMENT){const u=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;mi(this,Cr,u),(h=H(this,te))==null||h.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else t===R.LANG&&a!==i&&vb(a)}connectedCallback(){var t,i;!H(this,te)&&!this.hasAttribute(R.NO_DEFAULT_STORE)&&ki(this,ts,Ll).call(this),(t=H(this,te))==null||t.dispatch({type:"documentelementchangerequest",detail:Se}),super.connectedCallback(),H(this,te)&&!H(this,Dt)&&mi(this,Dt,(i=H(this,te))==null?void 0:i.subscribe(H(this,Dr))),this.enableHotkeys()}disconnectedCallback(){var t,i,a,r;(t=super.disconnectedCallback)==null||t.call(this),H(this,te)&&((i=H(this,te))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=H(this,te))==null||a.dispatch({type:C.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),H(this,Dt)&&((r=H(this,Dt))==null||r.call(this),mi(this,Dt,void 0))}mediaSetCallback(t){var i;super.mediaSetCallback(t),(i=H(this,te))==null||i.dispatch({type:"mediaelementchangerequest",detail:t}),t.hasAttribute("tabindex")||(t.tabIndex=-1)}mediaUnsetCallback(t){var i;super.mediaUnsetCallback(t),(i=H(this,te))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(t,i){Fc(this.mediaStateReceivers,t,i)}associateElement(t){if(!t)return;const{associatedElementSubscriptions:i}=this;if(i.has(t))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=ng(t,a,r);Object.values(C).forEach(s=>{t.addEventListener(s,H(this,es))}),i.set(t,n)}unassociateElement(t){if(!t)return;const{associatedElementSubscriptions:i}=this;if(!i.has(t))return;i.get(t)(),i.delete(t),Object.values(C).forEach(r=>{t.removeEventListener(r,H(this,es))})}registerMediaStateReceiver(t){if(!t)return;const i=this.mediaStateReceivers;i.indexOf(t)>-1||(i.push(t),H(this,te)&&Object.entries(H(this,te).getState()).forEach(([r,n])=>{Fc([t],r,n)}))}unregisterMediaStateReceiver(t){const i=this.mediaStateReceivers,a=i.indexOf(t);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",ki(this,is,Ml))}disableHotkeys(){this.removeEventListener("keydown",ki(this,is,Ml)),this.removeEventListener("keyup",ki(this,Xa,on))}get hotkeys(){return oe(this,R.HOTKEYS)}set hotkeys(t){le(this,R.HOTKEYS,t)}keyboardShortcutHandler(t){var i,a,r,n,s;const o=t.target;if(((r=(a=(i=o.getAttribute(R.KEYS_USED))==null?void 0:i.split(" "))!=null?a:o==null?void 0:o.keysUsed)!=null?r:[]).map(u=>u==="Space"?" ":u).filter(Boolean).includes(t.key))return;let d,p,h;if(!H(this,Qi).contains(`no${t.key.toLowerCase()}`)&&!(t.key===" "&&H(this,Qi).contains("nospace")))switch(t.key){case" ":case"k":d=H(this,te).getState().mediaPaused?C.MEDIA_PLAY_REQUEST:C.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?C.MEDIA_UNMUTE_REQUEST:C.MEDIA_MUTE_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?C.MEDIA_EXIT_FULLSCREEN_REQUEST:C.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new g.CustomEvent(C.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const u=this.hasAttribute(R.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(R.KEYBOARD_BACKWARD_SEEK_OFFSET):Hc;p=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-u,0),h=new g.CustomEvent(C.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:p}),this.dispatchEvent(h);break}case"ArrowRight":{const u=this.hasAttribute(R.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(R.KEYBOARD_FORWARD_SEEK_OFFSET):Hc;p=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+u,0),h=new g.CustomEvent(C.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:p}),this.dispatchEvent(h);break}}}}Qi=new WeakMap;Cr=new WeakMap;te=new WeakMap;Dr=new WeakMap;Dt=new WeakMap;es=new WeakMap;ts=new WeakSet;Ll=function(){var e;this.mediaStore=Jb({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(R.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(R.DEFAULT_DURATION)?+this.getAttribute(R.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(R.SEEK_TO_LIVE_OFFSET):this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(R.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(R.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(R.NO_SUBTITLES_LANG_PREF)}})};Xa=new WeakSet;on=function(e){const{key:t}=e;if(!_p.includes(t)){this.removeEventListener("keyup",ki(this,Xa,on));return}this.keyboardShortcutHandler(e)};is=new WeakSet;Ml=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!_p.includes(a)){this.removeEventListener("keyup",ki(this,Xa,on));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(H(this,Qi).contains(`no${a.toLowerCase()}`)||a===" "&&H(this,Qi).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",ki(this,Xa,on),{once:!0})};const eg=Object.values(c),tg=Object.values(Vm),gp=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(g.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const s=(r=(a=(i=e==null?void 0:e.getAttribute)==null?void 0:i.call(e,G.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>eg.includes(o)):[]},ig=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&g.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof g.customElements.get(e.nodeName.toLowerCase()))&&g.customElements.upgrade(e),tg.some(a=>a in e)},xl=e=>ig(e)||!!gp(e).length,Bc=e=>{var t;return(t=e==null?void 0:e.join)==null?void 0:t.call(e,":")},Wc={[c.MEDIA_SUBTITLES_LIST]:sn,[c.MEDIA_SUBTITLES_SHOWING]:sn,[c.MEDIA_SEEKABLE]:Bc,[c.MEDIA_BUFFERED]:e=>e==null?void 0:e.map(Bc).join(" "),[c.MEDIA_PREVIEW_COORDS]:e=>e==null?void 0:e.join(" "),[c.MEDIA_RENDITION_LIST]:rb,[c.MEDIA_AUDIO_TRACK_LIST]:lb},ag=async(e,t,i)=>{var a,r;if(e.isConnected||await Gm(0),typeof i=="boolean"||i==null)return V(e,t,i);if(typeof i=="number")return me(e,t,i);if(typeof i=="string")return le(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=Wc[t])==null?void 0:a.call(Wc,i))!=null?r:i;return e.setAttribute(t,n)},rg=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},Ui=(e,t)=>{if(rg(e))return;const i=(r,n)=>{var s,o;xl(r)&&n(r);const{children:l=[]}=r??{},d=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...d].forEach(h=>Ui(h,n))},a=e==null?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!xl(e)){g.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},Fc=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=gp(a),n=t.toLowerCase();r.includes(n)&&ag(a,n,i)})},ng=(e,t,i)=>{Ui(e,t);const a=p=>{var h;const u=(h=p==null?void 0:p.composedPath()[0])!=null?h:p.target;t(u)},r=p=>{var h;const u=(h=p==null?void 0:p.composedPath()[0])!=null?h:p.target;i(u)};e.addEventListener(C.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(C.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(h=>{const{addedNodes:u=[],removedNodes:m=[],type:f,target:E,attributeName:_}=h;f==="childList"?(Array.prototype.forEach.call(u,b=>Ui(b,t)),Array.prototype.forEach.call(m,b=>Ui(b,i))):f==="attributes"&&_===G.MEDIA_CHROME_ATTRIBUTES&&(xl(E)?t(E):i(E))})};let s=[];const o=p=>{const h=p.target;h.name!=="media"&&(s.forEach(u=>Ui(u,i)),s=[...h.assignedElements({flatten:!0})],s.forEach(u=>Ui(u,t)))};e.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Ui(e,i),e.removeEventListener("slotchange",o),l.disconnect(),e.removeEventListener(C.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(C.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};g.customElements.get("media-controller")||g.customElements.define("media-controller",bp);var sg=bp;const ha={PLACEMENT:"placement",BOUNDS:"bounds"};function og(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class Lo extends g.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var t;if(!ip(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(t=tr(this,"#"+this.bounds))!=null?t:ct(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=o+l,p=n+s,h=a.getPropertyValue("--media-tooltip-offset-x"),u=h?parseFloat(h.replace("px","")):0,m=a.getPropertyValue("--media-tooltip-container-margin"),f=m?parseFloat(m.replace("px","")):0,E=o-n+u-f,_=d-p+u+f;if(E<0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const t=this.placement;delete this.placement,this.placement=t}}static get observedAttributes(){return[ha.PLACEMENT,ha.BOUNDS]}get placement(){return oe(this,ha.PLACEMENT)}set placement(t){le(this,ha.PLACEMENT,t)}get bounds(){return oe(this,ha.BOUNDS)}set bounds(t){le(this,ha.BOUNDS,t)}}Lo.shadowRootOptions={mode:"open"};Lo.getTemplateHTML=og;g.customElements.get("media-tooltip")||g.customElements.define("media-tooltip",Lo);var Kc=Lo,eu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ee=(e,t,i)=>(eu(e,t,"read from private field"),i?i.call(e):t.get(e)),ma=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},wn=(e,t,i,a)=>(eu(e,t,"write to private field"),t.set(e,i),i),lg=(e,t,i)=>(eu(e,t,"access private method"),i),Lt,$a,Si,Ta,as,Ol,yp;const pi={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function dg(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Kc.shadowRootOptions.mode}">
          ${Kc.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function ug(e,t){return`
    <slot></slot>
  `}function cg(){return""}class xe extends g.HTMLElement{constructor(){if(super(),ma(this,Ol),ma(this,Lt,void 0),this.preventClick=!1,this.tooltipEl=null,ma(this,$a,t=>{this.preventClick||this.handleClick(t),setTimeout(Ee(this,Si),0)}),ma(this,Si,()=>{var t,i;(i=(t=this.tooltipEl)==null?void 0:t.updateXOffset)==null||i.call(t)}),ma(this,Ta,t=>{const{key:i}=t;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Ee(this,Ta));return}this.preventClick||this.handleClick(t)}),ma(this,as,t=>{const{metaKey:i,altKey:a,key:r}=t;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Ee(this,Ta));return}this.addEventListener("keyup",Ee(this,Ta),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes),i=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",pi.TOOLTIP_PLACEMENT,G.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",Ee(this,$a)),this.addEventListener("keydown",Ee(this,as)),this.tabIndex=0}disable(){this.removeEventListener("click",Ee(this,$a)),this.removeEventListener("keydown",Ee(this,as)),this.removeEventListener("keyup",Ee(this,Ta)),this.tabIndex=-1}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===G.MEDIA_CONTROLLER?(i&&((n=(r=Ee(this,Lt))==null?void 0:r.unassociateElement)==null||n.call(r,this),wn(this,Lt,null)),a&&this.isConnected&&(wn(this,Lt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ee(this,Lt))==null?void 0:o.associateElement)==null||l.call(o,this))):t==="disabled"&&a!==i?a==null?this.enable():this.disable():t===pi.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i&&(this.tooltipEl.placement=a),Ee(this,Si).call(this)}connectedCallback(){var t,i,a;const{style:r}=ge(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(G.MEDIA_CONTROLLER);n&&(wn(this,Lt,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=Ee(this,Lt))==null?void 0:i.associateElement)==null||a.call(i,this)),g.customElements.whenDefined("media-tooltip").then(()=>lg(this,Ol,yp).call(this))}disconnectedCallback(){var t,i;this.disable(),(i=(t=Ee(this,Lt))==null?void 0:t.unassociateElement)==null||i.call(t,this),wn(this,Lt,null),this.removeEventListener("mouseenter",Ee(this,Si)),this.removeEventListener("focus",Ee(this,Si)),this.removeEventListener("click",Ee(this,$a))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return oe(this,pi.TOOLTIP_PLACEMENT)}set tooltipPlacement(t){le(this,pi.TOOLTIP_PLACEMENT,t)}get mediaController(){return oe(this,G.MEDIA_CONTROLLER)}set mediaController(t){le(this,G.MEDIA_CONTROLLER,t)}get disabled(){return K(this,pi.DISABLED)}set disabled(t){V(this,pi.DISABLED,t)}get noTooltip(){return K(this,pi.NO_TOOLTIP)}set noTooltip(t){V(this,pi.NO_TOOLTIP,t)}handleClick(t){}}Lt=new WeakMap;$a=new WeakMap;Si=new WeakMap;Ta=new WeakMap;as=new WeakMap;Ol=new WeakSet;yp=function(){this.addEventListener("mouseenter",Ee(this,Si)),this.addEventListener("focus",Ee(this,Si)),this.addEventListener("click",Ee(this,$a));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=dg;xe.getSlotTemplateHTML=ug;xe.getTooltipContentHTML=cg;g.customElements.get("media-chrome-button")||g.customElements.define("media-chrome-button",xe);const Vc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function hg(e){return`
    <style>
      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Vc}</slot>
      <slot name="exit">${Vc}</slot>
    </slot>
  `}function mg(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const qc=e=>{const t=e.mediaIsAirplaying?D("stop airplay"):D("start airplay");e.setAttribute("aria-label",t)};class tu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_AIRPLAYING,c.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qc(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_IS_AIRPLAYING&&qc(this)}get mediaIsAirplaying(){return K(this,c.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(t){V(this,c.MEDIA_IS_AIRPLAYING,t)}get mediaAirplayUnavailable(){return oe(this,c.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){le(this,c.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){const t=new g.CustomEvent(C.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}}tu.getSlotTemplateHTML=hg;tu.getTooltipContentHTML=mg;g.customElements.get("media-airplay-button")||g.customElements.define("media-airplay-button",tu);const pg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,vg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function fg(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${pg}</slot>
      <slot name="off">${vg}</slot>
    </slot>
  `}function Eg(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const Yc=e=>{e.setAttribute("aria-checked",mp(e).toString())};class iu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",D("closed captions")),Yc(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_SUBTITLES_SHOWING&&Yc(this)}get mediaSubtitlesList(){return Gc(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){jc(this,c.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Gc(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){jc(this,c.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){this.dispatchEvent(new g.CustomEvent(C.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}iu.getSlotTemplateHTML=fg;iu.getTooltipContentHTML=Eg;const Gc=(e,t)=>{const i=e.getAttribute(t);return i?Co(i):[]},jc=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=sn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};g.customElements.get("media-captions-button")||g.customElements.define("media-captions-button",iu);const _g='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',bg='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function gg(e){return`
    <style>
      :host([${c.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${_g}</slot>
      <slot name="exit">${bg}</slot>
    </slot>
  `}function yg(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const Qc=e=>{const t=e.mediaIsCasting?D("stop casting"):D("start casting");e.setAttribute("aria-label",t)};class au extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_CASTING,c.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Qc(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_IS_CASTING&&Qc(this)}get mediaIsCasting(){return K(this,c.MEDIA_IS_CASTING)}set mediaIsCasting(t){V(this,c.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return oe(this,c.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){le(this,c.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){const t=this.mediaIsCasting?C.MEDIA_EXIT_CAST_REQUEST:C.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new g.CustomEvent(t,{composed:!0,bubbles:!0}))}}au.getSlotTemplateHTML=gg;au.getTooltipContentHTML=yg;g.customElements.get("media-cast-button")||g.customElements.define("media-cast-button",au);var ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ia=(e,t,i)=>(ru(e,t,"read from private field"),t.get(e)),zt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nu=(e,t,i,a)=>(ru(e,t,"write to private field"),t.set(e,i),i),xi=(e,t,i)=>(ru(e,t,"access private method"),i),io,ln,oa,rs,Nl,Pl,Tp,$l,Ap,Ul,kp,Hl,Sp,Bl,wp;function Tg(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function Ag(e){return`
    <slot id="content"></slot>
  `}const ur={OPEN:"open",ANCHOR:"anchor"};class _n extends g.HTMLElement{constructor(){super(),zt(this,rs),zt(this,Pl),zt(this,$l),zt(this,Ul),zt(this,Hl),zt(this,Bl),zt(this,io,!1),zt(this,ln,null),zt(this,oa,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[ur.OPEN,ur.ANCHOR]}get open(){return K(this,ur.OPEN)}set open(t){V(this,ur.OPEN,t)}handleEvent(t){switch(t.type){case"invoke":xi(this,Ul,kp).call(this,t);break;case"focusout":xi(this,Hl,Sp).call(this,t);break;case"keydown":xi(this,Bl,wp).call(this,t);break}}connectedCallback(){xi(this,rs,Nl).call(this),this.role||(this.role="dialog")}attributeChangedCallback(t,i,a){xi(this,rs,Nl).call(this),t===ur.OPEN&&a!==i&&(this.open?xi(this,Pl,Tp).call(this):xi(this,$l,Ap).call(this))}focus(){nu(this,ln,Gd());const t=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(t||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}io=new WeakMap;ln=new WeakMap;oa=new WeakMap;rs=new WeakSet;Nl=function(){if(!ia(this,io)&&(nu(this,io,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=ge(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Pl=new WeakSet;Tp=function(){var e;(e=ia(this,oa))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};$l=new WeakSet;Ap=function(){var e;(e=ia(this,oa))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Ul=new WeakSet;kp=function(e){nu(this,oa,e.relatedTarget),ui(this,e.relatedTarget)||(this.open=!this.open)};Hl=new WeakSet;Sp=function(e){var t;ui(this,e.relatedTarget)||((t=ia(this,ln))==null||t.focus(),ia(this,oa)&&ia(this,oa)!==e.relatedTarget&&this.open&&(this.open=!1))};Bl=new WeakSet;wp=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),s==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=ia(this,ln))==null||n.focus(),this.open=!1))};_n.shadowRootOptions={mode:"open"};_n.getTemplateHTML=Tg;_n.getSlotTemplateHTML=Ag;g.customElements.get("media-chrome-dialog")||g.customElements.define("media-chrome-dialog",_n);var su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ue=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),Le=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ei=(e,t,i,a)=>(su(e,t,"write to private field"),t.set(e,i),i),_t=(e,t,i)=>(su(e,t,"access private method"),i),Mt,Mo,ns,ss,bt,ao,os,ls,ds,ou,Ip,us,Wl,cs,Fl,ro,lu,Kl,Rp,Vl,Cp,ql,Dp,Yl,Lp;function kg(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class ir extends g.HTMLElement{constructor(){if(super(),Le(this,ou),Le(this,us),Le(this,cs),Le(this,ro),Le(this,Kl),Le(this,Vl),Le(this,ql),Le(this,Yl),Le(this,Mt,void 0),Le(this,Mo,void 0),Le(this,ns,void 0),Le(this,ss,void 0),Le(this,bt,{}),Le(this,ao,[]),Le(this,os,()=>{if(this.range.matches(":focus-visible")){const{style:t}=ge(this.shadowRoot,":host");t.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Le(this,ls,()=>{const{style:t}=ge(this.shadowRoot,":host");t.removeProperty("--_focus-visible-box-shadow")}),Le(this,ds,()=>{const t=this.shadowRoot.querySelector("#segments-clipping");t&&t.parentNode.append(t)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes),i=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Ei(this,ns,this.shadowRoot.querySelector("#startpoint")),Ei(this,ss,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",G.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===G.MEDIA_CONTROLLER?(i&&((n=(r=ue(this,Mt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ei(this,Mt,null)),a&&this.isConnected&&(Ei(this,Mt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ue(this,Mt))==null?void 0:o.associateElement)==null||l.call(o,this))):(t==="disabled"||t==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(t),_t(this,us,Wl).call(this)):(this.range.setAttribute(t,a),_t(this,cs,Fl).call(this)))}connectedCallback(){var t,i,a;const{style:r}=ge(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ue(this,bt).pointer=ge(this.shadowRoot,"#pointer"),ue(this,bt).progress=ge(this.shadowRoot,"#progress"),ue(this,bt).thumb=ge(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ue(this,bt).activeSegment=ge(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(G.MEDIA_CONTROLLER);n&&(Ei(this,Mt,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=ue(this,Mt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ue(this,os)),this.shadowRoot.addEventListener("focusout",ue(this,ls)),_t(this,us,Wl).call(this),Qa(this.container,ue(this,ds))}disconnectedCallback(){var t,i;_t(this,cs,Fl).call(this),(i=(t=ue(this,Mt))==null?void 0:t.unassociateElement)==null||i.call(t,this),Ei(this,Mt,null),this.shadowRoot.removeEventListener("focusin",ue(this,os)),this.shadowRoot.removeEventListener("focusout",ue(this,ls)),Za(this.container,ue(this,ds))}updatePointerBar(t){var i;(i=ue(this,bt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(t)*100}%`)}updateBar(){var t,i;const a=this.range.valueAsNumber*100;(t=ue(this,bt).progress)==null||t.style.setProperty("width",`${a}%`),(i=ue(this,bt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(t){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(t!=null&&t.length)),!(t!=null&&t.length))return;const a=[...new Set([+this.range.min,...t.flatMap(n=>[n.start,n.end]),+this.range.max])];Ei(this,ao,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],d=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,h=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,u=Se.createElementNS("http://www.w3.org/2000/svg","rect"),m=ge(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);m.style.setProperty("x",d),m.style.setProperty("width",h),i.append(u)}}getPointerRatio(t){return bb(t.clientX,t.clientY,ue(this,ns).getBoundingClientRect(),ue(this,ss).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(t){switch(t.type){case"pointermove":_t(this,Yl,Lp).call(this,t);break;case"input":this.updateBar();break;case"pointerenter":_t(this,Kl,Rp).call(this,t);break;case"pointerdown":_t(this,ro,lu).call(this,t);break;case"pointerup":_t(this,Vl,Cp).call(this);break;case"pointerleave":_t(this,ql,Dp).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Mt=new WeakMap;Mo=new WeakMap;ns=new WeakMap;ss=new WeakMap;bt=new WeakMap;ao=new WeakMap;os=new WeakMap;ls=new WeakMap;ds=new WeakMap;ou=new WeakSet;Ip=function(e){const t=ue(this,bt).activeSegment;if(!t)return;const i=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${ue(this,ao).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};us=new WeakSet;Wl=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};cs=new WeakSet;Fl=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=g.window)==null||e.removeEventListener("pointerup",this),(t=g.window)==null||t.removeEventListener("pointermove",this)};ro=new WeakSet;lu=function(e){var t;Ei(this,Mo,e.composedPath().includes(this.range)),(t=g.window)==null||t.addEventListener("pointerup",this)};Kl=new WeakSet;Rp=function(e){var t;e.pointerType!=="mouse"&&_t(this,ro,lu).call(this,e),this.addEventListener("pointerleave",this),(t=g.window)==null||t.addEventListener("pointermove",this)};Vl=new WeakSet;Cp=function(){var e;(e=g.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};ql=new WeakSet;Dp=function(){var e,t;this.removeEventListener("pointerleave",this),(e=g.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=ue(this,bt).activeSegment)==null||t.style.removeProperty("transform")};Yl=new WeakSet;Lp=function(e){this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),_t(this,ou,Ip).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!ue(this,Mo))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};ir.shadowRootOptions={mode:"open"};ir.getTemplateHTML=kg;g.customElements.get("media-chrome-range")||g.customElements.define("media-chrome-range",ir);var Mp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},In=(e,t,i)=>(Mp(e,t,"read from private field"),i?i.call(e):t.get(e)),Sg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Rn=(e,t,i,a)=>(Mp(e,t,"write to private field"),t.set(e,i),i),xt;function wg(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class du extends g.HTMLElement{constructor(){if(super(),Sg(this,xt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[G.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===G.MEDIA_CONTROLLER&&(i&&((n=(r=In(this,xt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Rn(this,xt,null)),a&&this.isConnected&&(Rn(this,xt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=In(this,xt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var t,i,a;const r=this.getAttribute(G.MEDIA_CONTROLLER);r&&(Rn(this,xt,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=In(this,xt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=In(this,xt))==null?void 0:t.unassociateElement)==null||i.call(t,this),Rn(this,xt,null)}}xt=new WeakMap;du.shadowRootOptions={mode:"open"};du.getTemplateHTML=wg;g.customElements.get("media-control-bar")||g.customElements.define("media-control-bar",du);var xp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Cn=(e,t,i)=>(xp(e,t,"read from private field"),i?i.call(e):t.get(e)),Ig=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Dn=(e,t,i,a)=>(xp(e,t,"write to private field"),t.set(e,i),i),Ot;function Rg(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function Cg(e,t){return`
    <slot></slot>
  `}class Li extends g.HTMLElement{constructor(){if(super(),Ig(this,Ot,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[G.MEDIA_CONTROLLER]}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===G.MEDIA_CONTROLLER&&(i&&((n=(r=Cn(this,Ot))==null?void 0:r.unassociateElement)==null||n.call(r,this),Dn(this,Ot,null)),a&&this.isConnected&&(Dn(this,Ot,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Cn(this,Ot))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var t,i,a;const{style:r}=ge(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(G.MEDIA_CONTROLLER);n&&(Dn(this,Ot,(t=this.getRootNode())==null?void 0:t.getElementById(n)),(a=(i=Cn(this,Ot))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=Cn(this,Ot))==null?void 0:t.unassociateElement)==null||i.call(t,this),Dn(this,Ot,null)}}Ot=new WeakMap;Li.shadowRootOptions={mode:"open"};Li.getTemplateHTML=Rg;Li.getSlotTemplateHTML=Cg;g.customElements.get("media-text-display")||g.customElements.define("media-text-display",Li);var Op=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Zc=(e,t,i)=>(Op(e,t,"read from private field"),i?i.call(e):t.get(e)),Dg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Lg=(e,t,i,a)=>(Op(e,t,"write to private field"),t.set(e,i),i),Lr;function Mg(e,t){return`
    <slot>${Ci(t.mediaDuration)}</slot>
  `}class Np extends Li{constructor(){var t;super(),Dg(this,Lr,void 0),Lg(this,Lr,this.shadowRoot.querySelector("slot")),Zc(this,Lr).textContent=Ci((t=this.mediaDuration)!=null?t:0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_DURATION]}attributeChangedCallback(t,i,a){t===c.MEDIA_DURATION&&(Zc(this,Lr).textContent=Ci(+a)),super.attributeChangedCallback(t,i,a)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(t){me(this,c.MEDIA_DURATION,t)}}Lr=new WeakMap;Np.getSlotTemplateHTML=Mg;g.customElements.get("media-duration-display")||g.customElements.define("media-duration-display",Np);const xg={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},Og={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},Pp=e=>{var t,i;return e.code===1?null:{title:(t=xg[e.code])!=null?t:`Error ${e.code}`,message:(i=Og[e.code])!=null?i:e.message}};var $p=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ng=(e,t,i)=>($p(e,t,"read from private field"),i?i.call(e):t.get(e)),Pg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$g=(e,t,i,a)=>($p(e,t,"write to private field"),t.set(e,i),i),hs;function Ug(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${Up({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function Hg(e){return e.code&&Pp(e)!==null}function Up(e){var t;const{title:i,message:a}=(t=Pp(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}const zc=[c.MEDIA_ERROR_CODE,c.MEDIA_ERROR_MESSAGE];class xo extends _n{constructor(){super(...arguments),Pg(this,hs,null)}static get observedAttributes(){return[...super.observedAttributes,...zc]}formatErrorMessage(t){return this.constructor.formatErrorMessage(t)}attributeChangedCallback(t,i,a){var r;if(super.attributeChangedCallback(t,i,a),!zc.includes(t))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=Hg(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return Ng(this,hs)}set mediaError(t){$g(this,hs,t)}get mediaErrorCode(){return se(this,"mediaerrorcode")}set mediaErrorCode(t){me(this,"mediaerrorcode",t)}get mediaErrorMessage(){return oe(this,"mediaerrormessage")}set mediaErrorMessage(t){le(this,"mediaerrormessage",t)}}hs=new WeakMap;xo.getSlotTemplateHTML=Ug;xo.formatErrorMessage=Up;g.customElements.get("media-error-dialog")||g.customElements.define("media-error-dialog",xo);var Hp=xo;const Bg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Wg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Fg(e){return`
    <style>
      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Bg}</slot>
      <slot name="exit">${Wg}</slot>
    </slot>
  `}function Kg(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const Xc=e=>{const t=e.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");e.setAttribute("aria-label",t)};class uu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_FULLSCREEN,c.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Xc(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_IS_FULLSCREEN&&Xc(this)}get mediaFullscreenUnavailable(){return oe(this,c.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){le(this,c.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return K(this,c.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){V(this,c.MEDIA_IS_FULLSCREEN,t)}handleClick(){const t=this.mediaIsFullscreen?C.MEDIA_EXIT_FULLSCREEN_REQUEST:C.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new g.CustomEvent(t,{composed:!0,bubbles:!0}))}}uu.getSlotTemplateHTML=Fg;uu.getTooltipContentHTML=Kg;g.customElements.get("media-fullscreen-button")||g.customElements.define("media-fullscreen-button",uu);const{MEDIA_TIME_IS_LIVE:ms,MEDIA_PAUSED:Yr}=c,{MEDIA_SEEK_TO_LIVE_REQUEST:Vg,MEDIA_PLAY_REQUEST:qg}=C,Yg='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function Gg(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ms}]:not([${Yr}])) slot[name=indicator] > *,
      :host([${ms}]:not([${Yr}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ms}]:not([${Yr}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Yg}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const Jc=e=>{const t=e.mediaPaused||!e.mediaTimeIsLive,i=D(t?"seek to live":"playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class Bp extends xe{static get observedAttributes(){return[...super.observedAttributes,ms,Yr]}connectedCallback(){super.connectedCallback(),Jc(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),Jc(this)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(t){V(this,c.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return K(this,c.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){V(this,c.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new g.CustomEvent(Vg,{composed:!0,bubbles:!0})),this.hasAttribute(Yr)&&this.dispatchEvent(new g.CustomEvent(qg,{composed:!0,bubbles:!0})))}}Bp.getSlotTemplateHTML=Gg;g.customElements.get("media-live-button")||g.customElements.define("media-live-button",Bp);var Wp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cr=(e,t,i)=>(Wp(e,t,"read from private field"),i?i.call(e):t.get(e)),eh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hr=(e,t,i,a)=>(Wp(e,t,"write to private field"),t.set(e,i),i),Nt,ps;const Ln={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Fp=500,jg=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Qg(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Fp}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${jg}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class cu extends g.HTMLElement{constructor(){if(super(),eh(this,Nt,void 0),eh(this,ps,Fp),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[G.MEDIA_CONTROLLER,c.MEDIA_PAUSED,c.MEDIA_LOADING,Ln.LOADING_DELAY]}attributeChangedCallback(t,i,a){var r,n,s,o,l;t===Ln.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):t===G.MEDIA_CONTROLLER&&(i&&((n=(r=cr(this,Nt))==null?void 0:r.unassociateElement)==null||n.call(r,this),hr(this,Nt,null)),a&&this.isConnected&&(hr(this,Nt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=cr(this,Nt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var t,i,a;const r=this.getAttribute(G.MEDIA_CONTROLLER);r&&(hr(this,Nt,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=cr(this,Nt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=cr(this,Nt))==null?void 0:t.unassociateElement)==null||i.call(t,this),hr(this,Nt,null)}get loadingDelay(){return cr(this,ps)}set loadingDelay(t){hr(this,ps,t);const{style:i}=ge(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${t}ms)`)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(t){V(this,c.MEDIA_PAUSED,t)}get mediaLoading(){return K(this,c.MEDIA_LOADING)}set mediaLoading(t){V(this,c.MEDIA_LOADING,t)}get mediaController(){return oe(this,G.MEDIA_CONTROLLER)}set mediaController(t){le(this,G.MEDIA_CONTROLLER,t)}get noAutohide(){return K(this,Ln.NO_AUTOHIDE)}set noAutohide(t){V(this,Ln.NO_AUTOHIDE,t)}}Nt=new WeakMap;ps=new WeakMap;cu.shadowRootOptions={mode:"open"};cu.getTemplateHTML=Qg;g.customElements.get("media-loading-indicator")||g.customElements.define("media-loading-indicator",cu);const Zg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,th=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,zg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Xg(e){return`
    <style>
      :host(:not([${c.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${c.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Zg}</slot>
      <slot name="low">${th}</slot>
      <slot name="medium">${th}</slot>
      <slot name="high">${zg}</slot>
    </slot>
  `}function Jg(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const ih=e=>{const t=e.mediaVolumeLevel==="off",i=D(t?"unmute":"mute");e.setAttribute("aria-label",i)};class hu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ih(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_VOLUME_LEVEL&&ih(this)}get mediaVolumeLevel(){return oe(this,c.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){le(this,c.MEDIA_VOLUME_LEVEL,t)}handleClick(){const t=this.mediaVolumeLevel==="off"?C.MEDIA_UNMUTE_REQUEST:C.MEDIA_MUTE_REQUEST;this.dispatchEvent(new g.CustomEvent(t,{composed:!0,bubbles:!0}))}}hu.getSlotTemplateHTML=Xg;hu.getTooltipContentHTML=Jg;g.customElements.get("media-mute-button")||g.customElements.define("media-mute-button",hu);const ah=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function e1(e){return`
    <style>
      :host([${c.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ah}</slot>
      <slot name="exit">${ah}</slot>
    </slot>
  `}function t1(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const rh=e=>{const t=e.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");e.setAttribute("aria-label",t)};class mu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_PIP,c.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rh(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_IS_PIP&&rh(this)}get mediaPipUnavailable(){return oe(this,c.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){le(this,c.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return K(this,c.MEDIA_IS_PIP)}set mediaIsPip(t){V(this,c.MEDIA_IS_PIP,t)}handleClick(){const t=this.mediaIsPip?C.MEDIA_EXIT_PIP_REQUEST:C.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new g.CustomEvent(t,{composed:!0,bubbles:!0}))}}mu.getSlotTemplateHTML=e1;mu.getTooltipContentHTML=t1;g.customElements.get("media-pip-button")||g.customElements.define("media-pip-button",mu);var i1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pa=(e,t,i)=>(i1(e,t,"read from private field"),i?i.call(e):t.get(e)),a1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},_i;const Xo={RATES:"rates"},Kp=[1,1.2,1.5,1.7,2],Ua=1;function r1(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||Ua}x</slot>
  `}function n1(){return D("Playback rate")}class pu extends xe{constructor(){var t;super(),a1(this,_i,new Zd(this,Xo.RATES,{defaultValue:Kp})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:Ua}x`}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Xo.RATES]}attributeChangedCallback(t,i,a){if(super.attributeChangedCallback(t,i,a),t===Xo.RATES&&(pa(this,_i).value=a),t===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?Ua:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return pa(this,_i)}set rates(t){t?Array.isArray(t)?pa(this,_i).value=t.join(" "):typeof t=="string"&&(pa(this,_i).value=t):pa(this,_i).value=""}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,Ua)}set mediaPlaybackRate(t){me(this,c.MEDIA_PLAYBACK_RATE,t)}handleClick(){var t,i;const a=Array.from(pa(this,_i).values(),s=>+s).sort((s,o)=>s-o),r=(i=(t=a.find(s=>s>this.mediaPlaybackRate))!=null?t:a[0])!=null?i:Ua,n=new g.CustomEvent(C.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}_i=new WeakMap;pu.getSlotTemplateHTML=r1;pu.getTooltipContentHTML=n1;g.customElements.get("media-playback-rate-button")||g.customElements.define("media-playback-rate-button",pu);const s1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,o1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function l1(e){return`
    <style>
      :host([${c.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${c.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${s1}</slot>
      <slot name="pause">${o1}</slot>
    </slot>
  `}function d1(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const nh=e=>{const t=e.mediaPaused?D("play"):D("pause");e.setAttribute("aria-label",t)};class vu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),nh(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_PAUSED&&nh(this)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(t){V(this,c.MEDIA_PAUSED,t)}handleClick(){const t=this.mediaPaused?C.MEDIA_PLAY_REQUEST:C.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(t,{composed:!0,bubbles:!0}))}}vu.getSlotTemplateHTML=l1;vu.getTooltipContentHTML=d1;g.customElements.get("media-play-button")||g.customElements.define("media-play-button",vu);const wt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function u1(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const c1=e=>{e.style.removeProperty("background-image")},h1=(e,t)=>{e.style["background-image"]=`url('${t}')`};class fu extends g.HTMLElement{static get observedAttributes(){return[wt.PLACEHOLDER_SRC,wt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,i,a){t===wt.SRC&&(a==null?this.image.removeAttribute(wt.SRC):this.image.setAttribute(wt.SRC,a)),t===wt.PLACEHOLDER_SRC&&(a==null?c1(this.image):h1(this.image,a))}get placeholderSrc(){return oe(this,wt.PLACEHOLDER_SRC)}set placeholderSrc(t){le(this,wt.SRC,t)}get src(){return oe(this,wt.SRC)}set src(t){le(this,wt.SRC,t)}}fu.shadowRootOptions={mode:"open"};fu.getTemplateHTML=u1;g.customElements.get("media-poster-image")||g.customElements.define("media-poster-image",fu);var Vp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},m1=(e,t,i)=>(Vp(e,t,"read from private field"),i?i.call(e):t.get(e)),p1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},v1=(e,t,i,a)=>(Vp(e,t,"write to private field"),t.set(e,i),i),vs;class f1 extends Li{constructor(){super(),p1(this,vs,void 0),v1(this,vs,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_PREVIEW_CHAPTER&&a!==i&&a!=null&&(m1(this,vs).textContent=a,a!==""?this.setAttribute("aria-valuetext",`chapter: ${a}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return oe(this,c.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(t){le(this,c.MEDIA_PREVIEW_CHAPTER,t)}}vs=new WeakMap;g.customElements.get("media-preview-chapter-display")||g.customElements.define("media-preview-chapter-display",f1);var qp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Mn=(e,t,i)=>(qp(e,t,"read from private field"),i?i.call(e):t.get(e)),E1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},xn=(e,t,i,a)=>(qp(e,t,"write to private field"),t.set(e,i),i),Pt;function _1(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Oo extends g.HTMLElement{constructor(){if(super(),E1(this,Pt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}}static get observedAttributes(){return[G.MEDIA_CONTROLLER,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS]}connectedCallback(){var t,i,a;const r=this.getAttribute(G.MEDIA_CONTROLLER);r&&(xn(this,Pt,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(a=(i=Mn(this,Pt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var t,i;(i=(t=Mn(this,Pt))==null?void 0:t.unassociateElement)==null||i.call(t,this),xn(this,Pt,null)}attributeChangedCallback(t,i,a){var r,n,s,o,l;[c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS].includes(t)&&this.update(),t===G.MEDIA_CONTROLLER&&(i&&((n=(r=Mn(this,Pt))==null?void 0:r.unassociateElement)==null||n.call(r,this),xn(this,Pt,null)),a&&this.isConnected&&(xn(this,Pt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Mn(this,Pt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){le(this,c.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewCoords(){const t=this.getAttribute(c.MEDIA_PREVIEW_COORDS);if(t)return t.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(t){if(!t){this.removeAttribute(c.MEDIA_PREVIEW_COORDS);return}this.setAttribute(c.MEDIA_PREVIEW_COORDS,t.join(" "))}update(){const t=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(t&&i))return;const[a,r,n,s]=t,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:d,maxHeight:p,minWidth:h,minHeight:u}=l,m=Math.min(parseInt(d)/n,parseInt(p)/s),f=Math.max(parseInt(h)/n,parseInt(u)/s),E=m<1,_=E?m:f>1?f:1,{style:b}=ge(this.shadowRoot,":host"),T=ge(this.shadowRoot,"img").style,v=this.shadowRoot.querySelector("img"),w=E?"min":"max";b.setProperty(`${w}-width`,"initial","important"),b.setProperty(`${w}-height`,"initial","important"),b.width=`${n*_}px`,b.height=`${s*_}px`;const L=()=>{T.width=`${this.imgWidth*_}px`,T.height=`${this.imgHeight*_}px`,T.display="block"};v.src!==o&&(v.onload=()=>{this.imgWidth=v.naturalWidth,this.imgHeight=v.naturalHeight,L()},v.src=o,L()),L(),T.transform=`translate(-${a*_}px, -${r*_}px)`}}Pt=new WeakMap;Oo.shadowRootOptions={mode:"open"};Oo.getTemplateHTML=_1;g.customElements.get("media-preview-thumbnail")||g.customElements.define("media-preview-thumbnail",Oo);var sh=Oo,Yp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oh=(e,t,i)=>(Yp(e,t,"read from private field"),i?i.call(e):t.get(e)),b1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},g1=(e,t,i,a)=>(Yp(e,t,"write to private field"),t.set(e,i),i),Mr;class y1 extends Li{constructor(){super(),b1(this,Mr,void 0),g1(this,Mr,this.shadowRoot.querySelector("slot")),oh(this,Mr).textContent=Ci(0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_TIME]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_PREVIEW_TIME&&a!=null&&(oh(this,Mr).textContent=Ci(parseFloat(a)))}get mediaPreviewTime(){return se(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){me(this,c.MEDIA_PREVIEW_TIME,t)}}Mr=new WeakMap;g.customElements.get("media-preview-time-display")||g.customElements.define("media-preview-time-display",y1);const va={SEEK_OFFSET:"seekoffset"},Jo=30,T1=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function A1(e,t){return`
    <slot name="icon">${T1(t.seekOffset)}</slot>
  `}function k1(){return D("Seek backward")}const S1=0;class Eu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,va.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,va.SEEK_OFFSET,Jo)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===va.SEEK_OFFSET&&(this.seekOffset=se(this,va.SEEK_OFFSET,Jo))}get seekOffset(){return se(this,va.SEEK_OFFSET,Jo)}set seekOffset(t){me(this,va.SEEK_OFFSET,t),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ep(tp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME,S1)}set mediaCurrentTime(t){me(this,c.MEDIA_CURRENT_TIME,t)}handleClick(){const t=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new g.CustomEvent(C.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}Eu.getSlotTemplateHTML=A1;Eu.getTooltipContentHTML=k1;g.customElements.get("media-seek-backward-button")||g.customElements.define("media-seek-backward-button",Eu);const fa={SEEK_OFFSET:"seekoffset"},el=30,w1=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function I1(e,t){return`
    <slot name="icon">${w1(t.seekOffset)}</slot>
  `}function R1(){return D("Seek forward")}const C1=0;class _u extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,fa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,fa.SEEK_OFFSET,el)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===fa.SEEK_OFFSET&&(this.seekOffset=se(this,fa.SEEK_OFFSET,el))}get seekOffset(){return se(this,fa.SEEK_OFFSET,el)}set seekOffset(t){me(this,fa.SEEK_OFFSET,t),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ep(tp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME,C1)}set mediaCurrentTime(t){me(this,c.MEDIA_CURRENT_TIME,t)}handleClick(){const t=this.mediaCurrentTime+this.seekOffset,i=new g.CustomEvent(C.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}_u.getSlotTemplateHTML=I1;_u.getTooltipContentHTML=R1;g.customElements.get("media-seek-forward-button")||g.customElements.define("media-seek-forward-button",_u);var Gp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tl=(e,t,i)=>(Gp(e,t,"read from private field"),i?i.call(e):t.get(e)),D1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},L1=(e,t,i,a)=>(Gp(e,t,"write to private field"),t.set(e,i),i),Aa;const Hi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},lh=[...Object.values(Hi),c.MEDIA_CURRENT_TIME,c.MEDIA_DURATION,c.MEDIA_SEEKABLE],dh=["Enter"," "],M1="&nbsp;/&nbsp;",Gl=(e,{timesSep:t=M1}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);const o=e.remaining?Ci(0-(s-r)):Ci(r);return e.showDuration?`${o}${t}${Ci(s)}`:o},x1="video not loaded, unknown time.",O1=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",x1);return}const n=e.remaining?Vr(0-(r-i)):Vr(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const s=Vr(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)};function N1(e,t){return`
    <slot>${Gl(t)}</slot>
  `}class jp extends Li{constructor(){super(),D1(this,Aa,void 0),L1(this,Aa,this.shadowRoot.querySelector("slot")),tl(this,Aa).innerHTML=`${Gl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...lh,"disabled"]}connectedCallback(){const{style:t}=ge(this.shadowRoot,":host(:hover:not([notoggle]))");t.setProperty("cursor","var(--media-cursor, pointer)"),t.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",D("playback time"));const i=a=>{const{key:r}=a;if(!dh.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:s}=a;if(r||n||!dh.includes(s)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(t,i,a){lh.includes(t)?this.update():t==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(t,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return K(this,Hi.REMAINING)}set remaining(t){V(this,Hi.REMAINING,t)}get showDuration(){return K(this,Hi.SHOW_DURATION)}set showDuration(t){V(this,Hi.SHOW_DURATION,t)}get noToggle(){return K(this,Hi.NO_TOGGLE)}set noToggle(t){V(this,Hi.NO_TOGGLE,t)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(t){me(this,c.MEDIA_DURATION,t)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){me(this,c.MEDIA_CURRENT_TIME,t)}get mediaSeekable(){const t=this.getAttribute(c.MEDIA_SEEKABLE);if(t)return t.split(":").map(i=>+i)}set mediaSeekable(t){if(t==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,t.join(":"))}update(){const t=Gl(this);O1(this),t!==tl(this,Aa).innerHTML&&(tl(this,Aa).innerHTML=t)}}Aa=new WeakMap;jp.getSlotTemplateHTML=N1;g.customElements.get("media-time-display")||g.customElements.define("media-time-display",jp);var Qp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Re=(e,t,i)=>(Qp(e,t,"read from private field"),i?i.call(e):t.get(e)),It=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ze=(e,t,i,a)=>(Qp(e,t,"write to private field"),t.set(e,i),i),P1=(e,t,i,a)=>({set _(r){Ze(e,t,r)},get _(){return Re(e,t,a)}}),ka,fs,Sa,xr,Es,_s,bs,wa,Bi,gs;class $1{constructor(t,i,a){It(this,ka,void 0),It(this,fs,void 0),It(this,Sa,void 0),It(this,xr,void 0),It(this,Es,void 0),It(this,_s,void 0),It(this,bs,void 0),It(this,wa,void 0),It(this,Bi,0),It(this,gs,(r=performance.now())=>{Ze(this,Bi,requestAnimationFrame(Re(this,gs))),Ze(this,xr,performance.now()-Re(this,Sa));const n=1e3/this.fps;if(Re(this,xr)>n){Ze(this,Sa,r-Re(this,xr)%n);const s=1e3/((r-Re(this,fs))/++P1(this,Es)._),o=(r-Re(this,_s))/1e3/this.duration;let l=Re(this,bs)+o*this.playbackRate;l-Re(this,ka).valueAsNumber>0?Ze(this,wa,this.playbackRate/this.duration/s):(Ze(this,wa,.995*Re(this,wa)),l=Re(this,ka).valueAsNumber+Re(this,wa)),this.callback(l)}}),Ze(this,ka,t),this.callback=i,this.fps=a}start(){Re(this,Bi)===0&&(Ze(this,Sa,performance.now()),Ze(this,fs,Re(this,Sa)),Ze(this,Es,0),Re(this,gs).call(this))}stop(){Re(this,Bi)!==0&&(cancelAnimationFrame(Re(this,Bi)),Ze(this,Bi,0))}update({start:t,duration:i,playbackRate:a}){const r=t-Re(this,ka).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(t),Ze(this,bs,t),Ze(this,_s,performance.now()),this.duration=i,this.playbackRate=a}}ka=new WeakMap;fs=new WeakMap;Sa=new WeakMap;xr=new WeakMap;Es=new WeakMap;_s=new WeakMap;bs=new WeakMap;wa=new WeakMap;Bi=new WeakMap;gs=new WeakMap;var bu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ke=(e,t,i)=>(bu(e,t,"read from private field"),i?i.call(e):t.get(e)),Ie=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$t=(e,t,i,a)=>(bu(e,t,"write to private field"),t.set(e,i),i),Pe=(e,t,i)=>(bu(e,t,"access private method"),i),Ia,aa,no,Gr,so,ys,dn,un,Ra,Ca,Or,gu,Zp,jl,oo,yu,lo,Tu,uo,Au,Ql,zp,cn,co,Zl,Xp;const U1="video not loaded, unknown time.",H1=e=>{const t=e.range,i=Vr(+Jp(e)),a=Vr(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:U1;t.setAttribute("aria-valuetext",r)};function B1(e){return`
    ${ir.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${sh.shadowRootOptions.mode}">
            ${sh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const On=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},Jp=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class ku extends ir{constructor(){super(),Ie(this,Ca),Ie(this,gu),Ie(this,oo),Ie(this,lo),Ie(this,uo),Ie(this,Ql),Ie(this,cn),Ie(this,Zl),Ie(this,Ia,void 0),Ie(this,aa,void 0),Ie(this,no,void 0),Ie(this,Gr,void 0),Ie(this,so,void 0),Ie(this,ys,void 0),Ie(this,dn,void 0),Ie(this,un,void 0),Ie(this,Ra,void 0),Ie(this,jl,a=>{this.dragging||(qd(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),$t(this,no,this.shadowRoot.querySelectorAll('[part~="box"]')),$t(this,so,this.shadowRoot.querySelector('[part~="preview-box"]')),$t(this,ys,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);$t(this,dn,parseInt(i.getPropertyValue("--media-box-padding-left"))),$t(this,un,parseInt(i.getPropertyValue("--media-box-padding-right"))),$t(this,aa,new $1(this.range,ke(this,jl),60))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_DURATION,c.MEDIA_SEEKABLE,c.MEDIA_CURRENT_TIME,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_TIME,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_BUFFERED,c.MEDIA_PLAYBACK_RATE,c.MEDIA_LOADING,c.MEDIA_ENDED]}connectedCallback(){var t;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),Pe(this,Ca,Or).call(this),$t(this,Ia,this.getRootNode()),(t=ke(this,Ia))==null||t.addEventListener("transitionstart",this)}disconnectedCallback(){var t;super.disconnectedCallback(),Pe(this,Ca,Or).call(this),(t=ke(this,Ia))==null||t.removeEventListener("transitionstart",this),$t(this,Ia,null)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),i!=a&&(t===c.MEDIA_CURRENT_TIME||t===c.MEDIA_PAUSED||t===c.MEDIA_ENDED||t===c.MEDIA_LOADING||t===c.MEDIA_DURATION||t===c.MEDIA_SEEKABLE?(ke(this,aa).update({start:On(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Pe(this,Ca,Or).call(this),H1(this)):t===c.MEDIA_BUFFERED&&this.updateBufferedBar(),(t===c.MEDIA_DURATION||t===c.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ke(this,Ra),this.updateBar()))}get mediaChaptersCues(){return ke(this,Ra)}set mediaChaptersCues(t){var i;$t(this,Ra,t),this.updateSegments((i=ke(this,Ra))==null?void 0:i.map(a=>({start:On(this,a.startTime),end:On(this,a.endTime)})))}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(t){V(this,c.MEDIA_PAUSED,t)}get mediaLoading(){return K(this,c.MEDIA_LOADING)}set mediaLoading(t){V(this,c.MEDIA_LOADING,t)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(t){me(this,c.MEDIA_DURATION,t)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(t){me(this,c.MEDIA_CURRENT_TIME,t)}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(t){me(this,c.MEDIA_PLAYBACK_RATE,t)}get mediaBuffered(){const t=this.getAttribute(c.MEDIA_BUFFERED);return t?t.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(t){if(!t){this.removeAttribute(c.MEDIA_BUFFERED);return}const i=t.map(a=>a.join(":")).join(" ");this.setAttribute(c.MEDIA_BUFFERED,i)}get mediaSeekable(){const t=this.getAttribute(c.MEDIA_SEEKABLE);if(t)return t.split(":").map(i=>+i)}set mediaSeekable(t){if(t==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,t.join(":"))}get mediaSeekableEnd(){var t;const[,i=this.mediaDuration]=(t=this.mediaSeekable)!=null?t:[];return i}get mediaSeekableStart(){var t;const[i=0]=(t=this.mediaSeekable)!=null?t:[];return i}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(t){le(this,c.MEDIA_PREVIEW_IMAGE,t)}get mediaPreviewTime(){return se(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(t){me(this,c.MEDIA_PREVIEW_TIME,t)}get mediaEnded(){return K(this,c.MEDIA_ENDED)}set mediaEnded(t){V(this,c.MEDIA_ENDED,t)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var t;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(t=i.find(([o,l])=>o<=n&&n<=l))!=null?t:[];a=On(this,s)}const{style:r}=ge(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=ge(this.shadowRoot,"#current-rail"),a=ge(this.shadowRoot,'[part~="current-box"]'),r=Pe(this,oo,yu).call(this,ke(this,ys)),n=Pe(this,lo,Tu).call(this,r,this.range.valueAsNumber),s=Pe(this,uo,Au).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(t){switch(super.handleEvent(t),t.type){case"input":Pe(this,Zl,Xp).call(this);break;case"pointermove":Pe(this,Ql,zp).call(this,t);break;case"pointerup":case"pointerleave":Pe(this,cn,co).call(this,null);break;case"transitionstart":ui(t.target,this)&&setTimeout(()=>Pe(this,Ca,Or).call(this),0);break}}}Ia=new WeakMap;aa=new WeakMap;no=new WeakMap;Gr=new WeakMap;so=new WeakMap;ys=new WeakMap;dn=new WeakMap;un=new WeakMap;Ra=new WeakMap;Ca=new WeakSet;Or=function(){Pe(this,gu,Zp).call(this)?ke(this,aa).start():ke(this,aa).stop()};gu=new WeakSet;Zp=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ip(this)};jl=new WeakMap;oo=new WeakSet;yu=function(e){var t;const a=((t=this.getAttribute("bounds")?tr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=e.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};lo=new WeakSet;Tu=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};uo=new WeakSet;Au=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+ke(this,dn)){const s=e.range.left-e.bounds.left-ke(this,dn);return`${n-i/2+s}px`}if(n>r-ke(this,un)){const s=e.bounds.right-e.range.right-ke(this,un);return`${n+i/2-s-e.range.width}px`}return 0};Ql=new WeakSet;zp=function(e){const t=[...ke(this,no)].some(p=>e.composedPath().includes(p));if(!this.dragging&&(t||!e.composedPath().includes(this))){Pe(this,cn,co).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=ge(this.shadowRoot,"#preview-rail"),r=ge(this.shadowRoot,'[part~="preview-box"]'),n=Pe(this,oo,yu).call(this,ke(this,so));let s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=Pe(this,lo,Tu).call(this,n,s),l=Pe(this,uo,Au).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(ke(this,Gr))-Math.round(s*i);Math.abs(d)<1&&s>.01&&s<.99||($t(this,Gr,s*i),Pe(this,cn,co).call(this,ke(this,Gr)))};cn=new WeakSet;co=function(e){this.dispatchEvent(new g.CustomEvent(C.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Zl=new WeakSet;Xp=function(){ke(this,aa).stop();const e=Jp(this);this.dispatchEvent(new g.CustomEvent(C.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};ku.shadowRootOptions={mode:"open"};ku.getTemplateHTML=B1;g.customElements.get("media-time-range")||g.customElements.define("media-time-range",ku);const W1=1,F1=e=>e.mediaMuted?0:e.mediaVolume,K1=e=>`${Math.round(e*100)}%`;class V1 extends ir{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME,c.MEDIA_MUTED,c.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const t=this.range.value,i=new g.CustomEvent(C.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume"))}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),(t===c.MEDIA_VOLUME||t===c.MEDIA_MUTED)&&(this.range.valueAsNumber=F1(this),this.range.setAttribute("aria-valuetext",K1(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return se(this,c.MEDIA_VOLUME,W1)}set mediaVolume(t){me(this,c.MEDIA_VOLUME,t)}get mediaMuted(){return K(this,c.MEDIA_MUTED)}set mediaMuted(t){V(this,c.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return oe(this,c.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){le(this,c.MEDIA_VOLUME_UNAVAILABLE,t)}}g.customElements.get("media-volume-range")||g.customElements.define("media-volume-range",V1);var ev=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},U=(e,t,i)=>(ev(e,t,"read from private field"),i?i.call(e):t.get(e)),Bt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ri=(e,t,i,a)=>(ev(e,t,"write to private field"),t.set(e,i),i),Da,Ts,Wi,Nr,bi,gi,yi,Fi,La,As,Et;const uh=1,ch=0,q1=1,Y1={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Tt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Tt?r.element[r.attributeName]=n:r.value=n}}}};class No extends g.DocumentFragment{constructor(t,i,a=Y1){var r;super(),Bt(this,Da,void 0),Bt(this,Ts,void 0),this.append(t.content.cloneNode(!0)),ri(this,Da,tv(this)),ri(this,Ts,a),(r=a.createCallback)==null||r.call(a,this,U(this,Da),i),a.processCallback(this,U(this,Da),i)}update(t){U(this,Ts).processCallback(this,U(this,Da),t)}}Da=new WeakMap;Ts=new WeakMap;const tv=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new j1;for([i,a]of mh(r.value))if(!i)n.append(a);else{const s=new Tt(e,r.name,r.namespaceURI);n.append(s),t.push([a,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===uh&&!(r instanceof HTMLTemplateElement))tv(r,t);else{const n=r.data;if(r.nodeType===uh||n.includes("{{")){const s=[];if(n)for([i,a]of mh(n))if(!i)s.push(new Text(a));else{const o=new ar(e);s.push(o),t.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new rv(e,r);s.push(o),t.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return t},hh={},mh=e=>{let t="",i=0,a=hh[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([ch,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([q1,t.trim()]),t="",r++):t+=n||"";return t&&a.push([ch,(i>0?"{{":"")+t]),hh[e]=a},G1=11;class iv{get value(){return""}set value(t){}toString(){return this.value}}const av=new WeakMap;class j1{constructor(){Bt(this,Wi,[])}[Symbol.iterator](){return U(this,Wi).values()}get length(){return U(this,Wi).length}item(t){return U(this,Wi)[t]}append(...t){for(const i of t)i instanceof Tt&&av.set(i,this),U(this,Wi).push(i)}toString(){return U(this,Wi).join("")}}Wi=new WeakMap;class Tt extends iv{constructor(t,i,a){super(),Bt(this,Fi),Bt(this,Nr,""),Bt(this,bi,void 0),Bt(this,gi,void 0),Bt(this,yi,void 0),ri(this,bi,t),ri(this,gi,i),ri(this,yi,a)}get attributeName(){return U(this,gi)}get attributeNamespace(){return U(this,yi)}get element(){return U(this,bi)}get value(){return U(this,Nr)}set value(t){U(this,Nr)!==t&&(ri(this,Nr,t),!U(this,Fi,La)||U(this,Fi,La).length===1?t==null?U(this,bi).removeAttributeNS(U(this,yi),U(this,gi)):U(this,bi).setAttributeNS(U(this,yi),U(this,gi),t):U(this,bi).setAttributeNS(U(this,yi),U(this,gi),U(this,Fi,La).toString()))}get booleanValue(){return U(this,bi).hasAttributeNS(U(this,yi),U(this,gi))}set booleanValue(t){if(!U(this,Fi,La)||U(this,Fi,La).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}}Nr=new WeakMap;bi=new WeakMap;gi=new WeakMap;yi=new WeakMap;Fi=new WeakSet;La=function(){return av.get(this)};class ar extends iv{constructor(t,i){super(),Bt(this,As,void 0),Bt(this,Et,void 0),ri(this,As,t),ri(this,Et,i?[...i]:[new Text])}get replacementNodes(){return U(this,Et)}get parentNode(){return U(this,As)}get nextSibling(){return U(this,Et)[U(this,Et).length-1].nextSibling}get previousSibling(){return U(this,Et)[0].previousSibling}get value(){return U(this,Et).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const i=t.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===G1?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),ri(this,Et,Q1(U(this,Et)[0].parentNode,U(this,Et),i,this.nextSibling))}}As=new WeakMap;Et=new WeakMap;class rv extends ar{constructor(t,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(t),this.expression=r,this.template=i,this.directive=a}}function Q1(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}const ph={string:e=>String(e)};class nv{constructor(t){this.template=t,this.state=void 0}}const Zi=new WeakMap,zi=new WeakMap,zl={partial:(e,t)=>{t[e.expression]=new nv(e.template)},if:(e,t)=>{var i;if(sv(e.expression,t))if(Zi.get(e)!==e.template){Zi.set(e,e.template);const a=new No(e.template,t,Su);e.replace(a),zi.set(e,a)}else(i=zi.get(e))==null||i.update(t);else e.replace(""),Zi.delete(e),zi.delete(e)}},Z1=Object.keys(zl),Su={processCallback(e,t,i){var a,r;if(i)for(const[n,s]of t){if(s instanceof rv){if(!s.directive){const l=Z1.find(d=>s.template.hasAttribute(d));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=zl[s.directive])==null||a.call(zl,s,i);continue}let o=sv(n,i);if(o instanceof nv){Zi.get(s)!==o.template?(Zi.set(s,o.template),o=new No(o.template,o.state,Su),s.value=o,zi.set(s,o)):(r=zi.get(s))==null||r.update(o.state);continue}o?(s instanceof Tt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Tt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,Zi.delete(s),zi.delete(s))):s instanceof Tt?s.value=void 0:(s.value=void 0,Zi.delete(s),zi.delete(s))}}},vh={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=ph[t])==null?void 0:i.call(ph,e)}};function z1(e){return X1(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function sv(e,t={}){var i,a,r,n,s,o,l;const d=z1(e);if(d.length===0||d.some(({type:p})=>!p))return mr(e);if(((i=d[0])==null?void 0:i.token)===">"){const p=t[(a=d[1])==null?void 0:a.token];if(!p)return mr(e);const h={...t};p.state=h;const u=d.slice(2);for(let m=0;m<u.length;m+=3){const f=(r=u[m])==null?void 0:r.token,E=(n=u[m+1])==null?void 0:n.token,_=(s=u[m+2])==null?void 0:s.token;f&&E==="="&&(h[f]=pr(_,t))}return p}if(d.length===1)return Nn(d[0])?pr(d[0].token,t):mr(e);if(d.length===2){const p=(o=d[0])==null?void 0:o.token,h=vh[p];if(!h||!Nn(d[1]))return mr(e);const u=pr(d[1].token,t);return h(u)}if(d.length===3){const p=(l=d[1])==null?void 0:l.token,h=vh[p];if(!h||!Nn(d[0])||!Nn(d[2]))return mr(e);const u=pr(d[0].token,t);if(p==="|")return h(u,d[2].token);const m=pr(d[2].token,t);return h(u,m)}}function mr(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Nn({type:e}){return["number","boolean","string","param"].includes(e)}function pr(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):Ym(e)?parseFloat(e):t[e]}function X1(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const s in t)a=t[s].exec(e),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var wu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xl=(e,t,i)=>(wu(e,t,"read from private field"),i?i.call(e):t.get(e)),vr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Xi=(e,t,i,a)=>(wu(e,t,"write to private field"),t.set(e,i),i),il=(e,t,i)=>(wu(e,t,"access private method"),i),Fa,ks,Ka,Jl,ov,Ss,ed;const al={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lv=Se.createElement("template");lv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Po extends g.HTMLElement{constructor(){super(),vr(this,Jl),vr(this,Ss),vr(this,Fa,void 0),vr(this,ks,void 0),vr(this,Ka,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(al[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(li.BREAKPOINTS_COMPUTED,this.render),il(this,Jl,ov).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=Xl(this,Fa))!=null?t:this.constructor.template}set template(t){Xi(this,Ka,null),Xi(this,Fa,t),this.createRenderer()}get props(){var t,i,a;const r=[...Array.from((i=(t=this.mediaController)==null?void 0:t.attributes)!=null?i:[]).filter(({name:s})=>al[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=al[s.name])!=null?a:hb(s.name);let{value:l}=s;l!=null?(Ym(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(t,i,a){t==="template"&&i!=a&&il(this,Ss,ed).call(this)}connectedCallback(){il(this,Ss,ed).call(this)}createRenderer(){this.template&&this.template!==Xl(this,ks)&&(Xi(this,ks,this.template),this.renderer=new No(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lv.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}}Fa=new WeakMap;ks=new WeakMap;Ka=new WeakMap;Jl=new WeakSet;ov=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Ss=new WeakSet;ed=function(){var e;const t=this.getAttribute("template");if(!t||t===Xl(this,Ka))return;const i=this.getRootNode(),a=(e=i==null?void 0:i.getElementById)==null?void 0:e.call(i,t);if(a){Xi(this,Ka,t),Xi(this,Fa,a),this.createRenderer();return}J1(t)&&(Xi(this,Ka,t),ey(t).then(r=>{const n=Se.createElement("template");n.innerHTML=r,Xi(this,Fa,n),this.createRenderer()}).catch(console.error))};Po.observedAttributes=["template"];Po.processor=Su;function J1(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function ey(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}g.customElements.get("media-theme")||g.customElements.define("media-theme",Po);function ty({anchor:e,floating:t,placement:i}){const a=iy({anchor:e,floating:t}),{x:r,y:n}=ry(a,i);return{x:r,y:n}}function iy({anchor:e,floating:t}){return{anchor:ay(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function ay(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t==null?void 0:t.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function ry({anchor:e,floating:t},i){const a=ny(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=dv(i),s=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l=e[r]/2-t[r]/2;let d;switch(n){case"top":d={x:s,y:e.y-t.height};break;case"bottom":d={x:s,y:e.y+e.height};break;case"right":d={x:e.x+e.width,y:o};break;case"left":d={x:e.x-t.width,y:o};break;default:d={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":d[a]-=l;break;case"end":d[a]+=l;break}return d}function dv(e){return e.split("-")[0]}function ny(e){return["top","bottom"].includes(dv(e))?"y":"x"}class Iu extends Event{constructor({action:t="auto",relatedTarget:i,...a}){super("invoke",a),this.action=t,this.relatedTarget=i}}class sy extends Event{constructor({newState:t,oldState:i,...a}){super("toggle",a),this.newState=t,this.oldState=i}}var Ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Y=(e,t,i)=>(Ru(e,t,"read from private field"),i?i.call(e):t.get(e)),ee=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ut=(e,t,i,a)=>(Ru(e,t,"write to private field"),t.set(e,i),i),ae=(e,t,i)=>(Ru(e,t,"access private method"),i),Ht,ra,Di,ws,Is,na,hn,td,uv,ho,Rs,id,ad,cv,rd,hv,nd,mv,Va,qa,Ya,mn,mo,Cu,sd,pv,Du,vv,od,fv,Lu,Ev,ld,_v,dd,bv,jr,po,ud,gv,Qr,vo,Cs,cd;function Ja({type:e,text:t,value:i,checked:a}){const r=Se.createElement("media-chrome-menu-item");r.type=e??"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;const n=Se.createElement("span");return n.textContent=t,r.append(n),r}function sa(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function oy(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Oi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class Qt extends g.HTMLElement{constructor(){if(super(),ee(this,td),ee(this,Rs),ee(this,ad),ee(this,rd),ee(this,nd),ee(this,Ya),ee(this,mo),ee(this,sd),ee(this,Du),ee(this,od),ee(this,Lu),ee(this,ld),ee(this,dd),ee(this,jr),ee(this,ud),ee(this,Qr),ee(this,Cs),ee(this,Ht,null),ee(this,ra,null),ee(this,Di,null),ee(this,ws,new Set),ee(this,Is,void 0),ee(this,na,!1),ee(this,hn,null),ee(this,ho,()=>{const t=Y(this,ws),i=new Set(this.items);for(const a of t)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)t.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));Ut(this,ws,i)}),ee(this,Va,()=>{ae(this,Ya,mn).call(this),ae(this,mo,Cu).call(this,!1)}),ee(this,qa,()=>{ae(this,Ya,mn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Ut(this,Is,new MutationObserver(Y(this,ho))),Y(this,Is).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Oi.DISABLED,Oi.HIDDEN,Oi.STYLE,Oi.ANCHOR,G.MEDIA_CONTROLLER]}static formatMenuItemText(t,i){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":ae(this,td,uv).call(this,t);break;case"invoke":ae(this,ad,cv).call(this,t);break;case"click":ae(this,sd,pv).call(this,t);break;case"toggle":ae(this,od,fv).call(this,t);break;case"focusout":ae(this,ld,_v).call(this,t);break;case"keydown":ae(this,dd,bv).call(this,t);break}}connectedCallback(){var t,i;Ut(this,hn,ap(this.shadowRoot,":host")),ae(this,Rs,id).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Ut(this,Ht,wl(this)),(i=(t=Y(this,Ht))==null?void 0:t.associateElement)==null||i.call(t,this),this.hidden||(Qa(pn(this),Y(this,Va)),Qa(this,Y(this,qa)))}disconnectedCallback(){var t,i;Za(pn(this),Y(this,Va)),Za(this,Y(this,qa)),this.disable(),(i=(t=Y(this,Ht))==null?void 0:t.unassociateElement)==null||i.call(t,this),Ut(this,Ht,null)}attributeChangedCallback(t,i,a){var r,n,s,o;t===Oi.HIDDEN&&a!==i?(Y(this,na)||Ut(this,na,!0),this.hidden?ae(this,nd,mv).call(this):ae(this,rd,hv).call(this),this.dispatchEvent(new sy({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===G.MEDIA_CONTROLLER?(i&&((n=(r=Y(this,Ht))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ut(this,Ht,null)),a&&this.isConnected&&(Ut(this,Ht,wl(this)),(o=(s=Y(this,Ht))==null?void 0:s.associateElement)==null||o.call(s,this))):t===Oi.DISABLED&&a!==i?a==null?this.enable():this.disable():t===Oi.STYLE&&a!==i&&ae(this,Rs,id).call(this)}formatMenuItemText(t,i){return this.constructor.formatMenuItemText(t,i)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=ko(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ly)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,i;return(i=(t=this.checkedItems[0])==null?void 0:t.value)!=null?i:""}set value(t){const i=this.items.find(a=>a.value===t);i&&ae(this,Cs,cd).call(this,i)}focus(){if(Ut(this,ra,Gd()),this.items.length){ae(this,Qr,vo).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t==null||t.focus()}handleSelect(t){var i;const a=ae(this,jr,po).call(this,t);a&&(ae(this,Cs,cd).call(this,a,a.type==="checkbox"),Y(this,Di)&&!this.hidden&&((i=Y(this,ra))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var i,a;const{key:r}=t,n=this.items,s=(a=(i=ae(this,jr,po).call(this,t))!=null?i:ae(this,ud,gv).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:t.key==="Home"?l=0:t.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),ae(this,Qr,vo).call(this,n[l]),n[l].focus()}}Ht=new WeakMap;ra=new WeakMap;Di=new WeakMap;ws=new WeakMap;Is=new WeakMap;na=new WeakMap;hn=new WeakMap;td=new WeakSet;uv=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();if(["header","title"].includes(t.name)){const i=this.shadowRoot.querySelector('slot[name="header"]');i.hidden=t.assignedNodes().length===0}t.name||Y(this,ho).call(this)};ho=new WeakMap;Rs=new WeakSet;id=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};ad=new WeakSet;cv=function(e){Ut(this,Di,e.relatedTarget),ui(this,e.relatedTarget)||(this.hidden=!this.hidden)};rd=new WeakSet;hv=function(){var e;(e=Y(this,Di))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Qa(pn(this),Y(this,Va)),Qa(this,Y(this,qa))};nd=new WeakSet;mv=function(){var e;(e=Y(this,Di))==null||e.setAttribute("aria-expanded","false"),Za(pn(this),Y(this,Va)),Za(this,Y(this,qa))};Va=new WeakMap;qa=new WeakMap;Ya=new WeakSet;mn=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=ty({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=pn(this).getBoundingClientRect(),n=r.width-t-e,s=r.height-i-this.offsetHeight,{style:o}=Y(this,hn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),h=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${h}px`)};mo=new WeakSet;Cu=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t==null?void 0:t.querySelector('[role="menu"]'),{style:a}=Y(this,hn);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ae(this,Ya,mn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ae(this,Ya,mn).call(this);a.removeProperty("--media-menu-transition-in")};sd=new WeakSet;pv=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(Y(this,Du,vv))){(t=Y(this,ra))==null||t.focus(),this.hidden=!0;return}const i=ae(this,jr,po).call(this,e);!i||i.hasAttribute("disabled")||(ae(this,Qr,vo).call(this,i),this.handleSelect(e))};Du=new WeakSet;vv=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};od=new WeakSet;fv=function(e){if(e.target===this)return;ae(this,Lu,Ev).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Iu({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ae(this,mo,Cu).call(this,!0)};Lu=new WeakSet;Ev=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};ld=new WeakSet;_v=function(e){var t;ui(this,e.relatedTarget)||(Y(this,na)&&((t=Y(this,ra))==null||t.focus()),Y(this,Di)&&Y(this,Di)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};dd=new WeakSet;bv=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!(o||l||d)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(Y(this,na)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Y(this,ra))==null||n.focus(),Y(this,na)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};jr=new WeakSet;po=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};ud=new WeakSet;gv=function(){return this.items.find(e=>e.tabIndex===0)};Qr=new WeakSet;vo=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Cs=new WeakSet;cd=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};Qt.shadowRootOptions={mode:"open"};Qt.getTemplateHTML=oy;function ly(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e==null?void 0:e.role)}function pn(e){var t;return(t=e.getAttribute("bounds")?tr(e,`#${e.getAttribute("bounds")}`):ct(e)||e.parentElement)!=null?t:e}g.customElements.get("media-chrome-menu")||g.customElements.define("media-chrome-menu",Qt);var Mu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Vt=(e,t,i)=>(Mu(e,t,"read from private field"),t.get(e)),Xt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rl=(e,t,i,a)=>(Mu(e,t,"write to private field"),t.set(e,i),i),Wt=(e,t,i)=>(Mu(e,t,"access private method"),i),Ds,Zr,hd,yv,xu,Tv,Ou,Av,qt,er,vn,md,kv,Ls,pd;function dy(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function uy(e){return""}const st={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class rr extends g.HTMLElement{constructor(){if(super(),Xt(this,hd),Xt(this,xu),Xt(this,Ou),Xt(this,er),Xt(this,md),Xt(this,Ls),Xt(this,Ds,!1),Xt(this,Zr,void 0),Xt(this,qt,()=>{var t,i;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(t=this.submenuElement.checkedItems)==null?void 0:t[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=Se.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[st.TYPE,st.DISABLED,st.CHECKED,st.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),fr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":Wt(this,hd,yv).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":Wt(this,md,kv).call(this,t);break;case"keyup":Wt(this,er,vn).call(this,t);break}}attributeChangedCallback(t,i,a){t===st.CHECKED&&fr(this)&&!Vt(this,Ds)?this.setAttribute("aria-checked",a!=null?"true":"false"):t===st.TYPE&&a!==i?this.role="menuitem"+a:t===st.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(st.DISABLED)||this.enable(),this.role="menuitem"+this.type,rl(this,Zr,vd(this,this.parentNode)),Wt(this,Ls,pd).call(this)}disconnectedCallback(){this.disable(),Wt(this,Ls,pd).call(this),rl(this,Zr,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=ko(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(st.TYPE))!=null?t:""}set type(t){this.setAttribute(st.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(st.VALUE))!=null?t:this.text}set value(t){this.setAttribute(st.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(fr(this))return this.getAttribute("aria-checked")==="true"}set checked(t){fr(this)&&(rl(this,Ds,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){fr(this)||this.invokeTargetElement&&ui(this,t.target)&&this.invokeTargetElement.dispatchEvent(new Iu({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Ds=new WeakMap;Zr=new WeakMap;hd=new WeakSet;yv=function(e){const t=e.target;if(!(t!=null&&t.name))for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?Wt(this,xu,Tv).call(this):Wt(this,Ou,Av).call(this))};xu=new WeakSet;Tv=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Vt(this,qt)),this.submenuElement.addEventListener("addmenuitem",Vt(this,qt)),this.submenuElement.addEventListener("removemenuitem",Vt(this,qt)),Vt(this,qt).call(this)};Ou=new WeakSet;Av=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Vt(this,qt)),this.submenuElement.removeEventListener("addmenuitem",Vt(this,qt)),this.submenuElement.removeEventListener("removemenuitem",Vt(this,qt)),Vt(this,qt).call(this)};qt=new WeakMap;er=new WeakSet;vn=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",Wt(this,er,vn));return}this.handleClick(e)};md=new WeakSet;kv=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",Wt(this,er,vn));return}this.addEventListener("keyup",Wt(this,er,vn),{once:!0})};Ls=new WeakSet;pd=function(){var e;const t=(e=Vt(this,Zr))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};rr.shadowRootOptions={mode:"open"};rr.getTemplateHTML=dy;rr.getSuffixSlotInnerHTML=uy;function fr(e){return e.type==="radio"||e.type==="checkbox"}function vd(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?vd(e,i):t!=null&&t.items?t:vd(t,t==null?void 0:t.parentNode)}g.customElements.get("media-chrome-menu-item")||g.customElements.define("media-chrome-menu-item",rr);function cy(e){return`
    ${Qt.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class Sv extends Qt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ct(this).querySelector("media-settings-menu-button")}}Sv.getTemplateHTML=cy;g.customElements.get("media-settings-menu")||g.customElements.define("media-settings-menu",Sv);function hy(e){return`
    ${rr.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function my(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class $o extends rr{}$o.shadowRootOptions={mode:"open"};$o.getTemplateHTML=hy;$o.getSuffixSlotInnerHTML=my;g.customElements.get("media-settings-menu-item")||g.customElements.define("media-settings-menu-item",$o);class nr extends xe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=ko(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new Iu({relatedTarget:this}))}}g.customElements.get("media-chrome-menu-button")||g.customElements.define("media-chrome-menu-button",nr);function py(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function vy(){return D("Settings")}class Nu extends nr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ct(this).querySelector("media-settings-menu")}}Nu.getSlotTemplateHTML=py;Nu.getTooltipContentHTML=vy;g.customElements.get("media-settings-menu-button")||g.customElements.define("media-settings-menu-button",Nu);var Pu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},wv=(e,t,i)=>(Pu(e,t,"read from private field"),i?i.call(e):t.get(e)),Pn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fd=(e,t,i,a)=>(Pu(e,t,"write to private field"),t.set(e,i),i),$n=(e,t,i)=>(Pu(e,t,"access private method"),i),Pr,fo,Ms,Ed,xs,_d;class fy extends Qt{constructor(){super(...arguments),Pn(this,Ms),Pn(this,xs),Pn(this,Pr,[]),Pn(this,fo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:t===c.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(fd(this,Pr,db(a??"")),$n(this,Ms,Ed).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",$n(this,xs,_d))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",$n(this,xs,_d))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=ct(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return wv(this,Pr)}set mediaAudioTrackList(t){fd(this,Pr,t),$n(this,Ms,Ed).call(this)}get mediaAudioTrackEnabled(){var t;return(t=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){le(this,c.MEDIA_AUDIO_TRACK_ENABLED,t)}}Pr=new WeakMap;fo=new WeakMap;Ms=new WeakSet;Ed=function(){if(wv(this,fo)===JSON.stringify(this.mediaAudioTrackList))return;fd(this,fo,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const i=this.formatMenuItemText(t.label,t),a=Ja({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(sa(this,"checked-indicator")),this.defaultSlot.append(a)}};xs=new WeakSet;_d=function(){if(this.value==null)return;const e=new g.CustomEvent(C.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};g.customElements.get("media-audio-track-menu")||g.customElements.define("media-audio-track-menu",fy);const Ey=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function _y(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ey}</slot>
  `}function by(){return D("Audio")}class $u extends nr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("Audio"))}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=ct(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){le(this,c.MEDIA_AUDIO_TRACK_ENABLED,t)}}$u.getSlotTemplateHTML=_y;$u.getTooltipContentHTML=by;g.customElements.get("media-audio-track-menu-button")||g.customElements.define("media-audio-track-menu-button",$u);var Uu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gy=(e,t,i)=>(Uu(e,t,"read from private field"),i?i.call(e):t.get(e)),nl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yy=(e,t,i,a)=>(Uu(e,t,"write to private field"),t.set(e,i),i),sl=(e,t,i)=>(Uu(e,t,"access private method"),i),Eo,bd,Iv,Os,gd;const Ty=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Ay(e){return`
    ${Qt.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Ty}</slot>
  `}class Rv extends Qt{constructor(){super(...arguments),nl(this,bd),nl(this,Os),nl(this,Eo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_SUBTITLES_LIST&&i!==a?sl(this,bd,Iv).call(this):t===c.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sl(this,Os,gd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sl(this,Os,gd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ct(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return fh(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){Eh(this,c.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return fh(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){Eh(this,c.MEDIA_SUBTITLES_SHOWING,t)}}Eo=new WeakMap;bd=new WeakSet;Iv=function(){var e;if(gy(this,Eo)===JSON.stringify(this.mediaSubtitlesList))return;yy(this,Eo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,i=Ja({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:t});i.prepend(sa(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=Ja({type:"radio",text:this.formatMenuItemText(r.label,r),value:Dl(r),checked:this.value==Dl(r)});n.prepend(sa(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(sa(this,"captions-indicator")),this.defaultSlot.append(n)}};Os=new WeakSet;gd=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(c.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e!=null&&e.length&&i&&this.dispatchEvent(new g.CustomEvent(C.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new g.CustomEvent(C.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Rv.getTemplateHTML=Ay;const fh=(e,t)=>{const i=e.getAttribute(t);return i?Co(i):[]},Eh=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=sn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};g.customElements.get("media-captions-menu")||g.customElements.define("media-captions-menu",Rv);const ky=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Sy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function wy(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ky}</slot>
      <slot name="off">${Sy}</slot>
    </slot>
  `}function Iy(){return D("Captions")}const _h=e=>{e.setAttribute("aria-checked",mp(e).toString())};class Hu extends nr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("closed captions")),_h(this)}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_SUBTITLES_SHOWING&&_h(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=ct(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return bh(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){gh(this,c.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return bh(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){gh(this,c.MEDIA_SUBTITLES_SHOWING,t)}}Hu.getSlotTemplateHTML=wy;Hu.getTooltipContentHTML=Iy;const bh=(e,t)=>{const i=e.getAttribute(t);return i?Co(i):[]},gh=(e,t,i)=>{if(!(i!=null&&i.length)){e.removeAttribute(t);return}const a=sn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};g.customElements.get("media-captions-menu-button")||g.customElements.define("media-captions-menu-button",Hu);var Cv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ma=(e,t,i)=>(Cv(e,t,"read from private field"),i?i.call(e):t.get(e)),ol=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Er=(e,t,i)=>(Cv(e,t,"access private method"),i),Ai,$r,Ns,Ps,yd;const ll={RATES:"rates"};class Ry extends Qt{constructor(){super(),ol(this,$r),ol(this,Ps),ol(this,Ai,new Zd(this,ll.RATES,{defaultValue:Kp})),Er(this,$r,Ns).call(this)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,ll.RATES]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_PLAYBACK_RATE&&i!=a?this.value=a:t===ll.RATES&&i!=a&&(Ma(this,Ai).value=a,Er(this,$r,Ns).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Er(this,Ps,yd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Er(this,Ps,yd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ct(this).querySelector("media-playback-rate-menu-button")}get rates(){return Ma(this,Ai)}set rates(t){t?Array.isArray(t)?Ma(this,Ai).value=t.join(" "):typeof t=="string"&&(Ma(this,Ai).value=t):Ma(this,Ai).value="",Er(this,$r,Ns).call(this)}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,Ua)}set mediaPlaybackRate(t){me(this,c.MEDIA_PLAYBACK_RATE,t)}}Ai=new WeakMap;$r=new WeakSet;Ns=function(){this.defaultSlot.textContent="";for(const e of Ma(this,Ai)){const t=Ja({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(sa(this,"checked-indicator")),this.defaultSlot.append(t)}};Ps=new WeakSet;yd=function(){if(!this.value)return;const e=new g.CustomEvent(C.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};g.customElements.get("media-playback-rate-menu")||g.customElements.define("media-playback-rate-menu",Ry);const $s=1;function Cy(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||$s}x</slot>
  `}function Dy(){return D("Playback rate")}class Bu extends nr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:$s}x`}attributeChangedCallback(t,i,a){if(super.attributeChangedCallback(t,i,a),t===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?$s:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ct(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,$s)}set mediaPlaybackRate(t){me(this,c.MEDIA_PLAYBACK_RATE,t)}}Bu.getSlotTemplateHTML=Cy;Bu.getTooltipContentHTML=Dy;g.customElements.get("media-playback-rate-menu-button")||g.customElements.define("media-playback-rate-menu-button",Bu);var Wu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ur=(e,t,i)=>(Wu(e,t,"read from private field"),i?i.call(e):t.get(e)),Un=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yh=(e,t,i,a)=>(Wu(e,t,"write to private field"),t.set(e,i),i),Ea=(e,t,i)=>(Wu(e,t,"access private method"),i),Hr,Ha,xa,Br,Us,Td;class Ly extends Qt{constructor(){super(...arguments),Un(this,xa),Un(this,Us),Un(this,Hr,[]),Un(this,Ha,{})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_LIST,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t===c.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",Ea(this,xa,Br).call(this)):t===c.MEDIA_RENDITION_LIST&&i!==a?(yh(this,Hr,nb(a)),Ea(this,xa,Br).call(this)):t===c.MEDIA_HEIGHT&&i!==a&&Ea(this,xa,Br).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ea(this,Us,Td))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ea(this,Us,Td))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ct(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Ur(this,Hr)}set mediaRenditionList(t){yh(this,Hr,t),Ea(this,xa,Br).call(this)}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){le(this,c.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return se(this,c.MEDIA_HEIGHT)}set mediaHeight(t){me(this,c.MEDIA_HEIGHT,t)}}Hr=new WeakMap;Ha=new WeakMap;xa=new WeakSet;Br=function(){if(Ur(this,Ha).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Ur(this,Ha).mediaHeight===this.mediaHeight)return;Ur(this,Ha).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Ur(this,Ha).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort((n,s)=>s.height-n.height);for(const n of e)n.selected=n.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const t=!this.mediaRenditionSelected;for(const n of e){const s=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),o=Ja({type:"radio",text:s,value:`${n.id}`,checked:n.selected&&!t});o.prepend(sa(this,"checked-indicator")),this.defaultSlot.append(o)}const i=t?this.formatMenuItemText(`${D("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(D("Auto")),a=Ja({type:"radio",text:i,value:"auto",checked:t}),r=this.mediaHeight>0?`${D("Auto")} (${this.mediaHeight}p)`:D("Auto");a.dataset.description=r,a.prepend(sa(this,"checked-indicator")),this.defaultSlot.append(a)};Us=new WeakSet;Td=function(){if(this.value==null)return;const e=new g.CustomEvent(C.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};g.customElements.get("media-rendition-menu")||g.customElements.define("media-rendition-menu",Ly);const My=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function xy(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${My}</slot>
  `}function Oy(){return D("Quality")}class Fu extends nr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ct(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){le(this,c.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return se(this,c.MEDIA_HEIGHT)}set mediaHeight(t){me(this,c.MEDIA_HEIGHT,t)}}Fu.getSlotTemplateHTML=xy;Fu.getTooltipContentHTML=Oy;g.customElements.get("media-rendition-menu-button")||g.customElements.define("media-rendition-menu-button",Fu);var Dv=e=>{throw TypeError(e)},Ku=(e,t,i)=>t.has(e)||Dv("Cannot "+i),z=(e,t,i)=>(Ku(e,t,"read from private field"),i?i.call(e):t.get(e)),gt=(e,t,i)=>t.has(e)?Dv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Gt=(e,t,i,a)=>(Ku(e,t,"write to private field"),t.set(e,i),i),be=(e,t,i)=>(Ku(e,t,"access private method"),i),Uo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends Uo{}globalThis.DocumentFragment=e}var Vu=class extends Uo{},Ny=class extends Uo{},Py={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Vu)}},Hs,$y=class{constructor(t,i={}){gt(this,Hs),Gt(this,Hs,i==null?void 0:i.detail)}get detail(){return z(this,Hs)}initCustomEvent(){}};Hs=new WeakMap;function Uy(e,t){return new Vu}var Lv={document:{createElement:Uy},DocumentFragment,customElements:Py,CustomEvent:$y,EventTarget:Uo,HTMLElement:Vu,HTMLVideoElement:Ny},Mv=typeof window>"u"||typeof globalThis.customElements>"u",Ft=Mv?Lv:globalThis,qu=Mv?Lv.document:globalThis.document;function Hy(e){let t="";return Object.entries(e).forEach(([i,a])=>{a!=null&&(t+=`${Ad(i)}: ${a}; `)}),t?t.trim():void 0}function Ad(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function xv(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function ze(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Ov(e){let t=By(e).toString();return t?"?"+t:""}function By(e){let t={};for(let i in e)e[i]!=null&&(t[i]=e[i]);return new URLSearchParams(t)}var Nv=(e,t)=>!e||!t?!1:e.contains(t)?!0:Nv(e,t.getRootNode().host),Pv="mux.com",Wy=()=>{try{return"3.5.1"}catch{}return"UNKNOWN"},Fy=Wy(),$v=()=>Fy,Ky=(e,{token:t,customDomain:i=Pv,thumbnailTime:a,programTime:r}={})=>{var n;let s=t==null?a:void 0,{aud:o}=(n=Ba(t))!=null?n:{};if(!(t&&o!=="t"))return`https://image.${i}/${e}/thumbnail.webp${Ov({token:t,time:s,program_time:r})}`},Vy=(e,{token:t,customDomain:i=Pv,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=Ba(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${i}/${e}/storyboard.vtt${Ov({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},Yu=e=>{if(e){if([Z.LIVE,Z.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return Z.LIVE}},qy={crossorigin:"crossOrigin",playsinline:"playsInline"};function Yy(e){var t;return(t=qy[e])!=null?t:xv(e)}var Oa,Na,Fe,Gy=class{constructor(t,i){gt(this,Oa),gt(this,Na),gt(this,Fe,[]),Gt(this,Oa,t),Gt(this,Na,i)}[Symbol.iterator](){return z(this,Fe).values()}get length(){return z(this,Fe).length}get value(){var t;return(t=z(this,Fe).join(" "))!=null?t:""}set value(t){var i;t!==this.value&&(Gt(this,Fe,[]),this.add(...(i=t==null?void 0:t.split(" "))!=null?i:[]))}toString(){return this.value}item(t){return z(this,Fe)[t]}values(){return z(this,Fe).values()}keys(){return z(this,Fe).keys()}forEach(t){z(this,Fe).forEach(t)}add(...t){var i,a;t.forEach(r=>{this.contains(r)||z(this,Fe).push(r)}),!(this.value===""&&!((i=z(this,Oa))!=null&&i.hasAttribute(`${z(this,Na)}`)))&&((a=z(this,Oa))==null||a.setAttribute(`${z(this,Na)}`,`${this.value}`))}remove(...t){var i;t.forEach(a=>{z(this,Fe).splice(z(this,Fe).indexOf(a),1)}),(i=z(this,Oa))==null||i.setAttribute(`${z(this,Na)}`,`${this.value}`)}contains(t){return z(this,Fe).includes(t)}toggle(t,i){return typeof i<"u"?i?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,i){this.remove(t),this.add(i)}};Oa=new WeakMap,Na=new WeakMap,Fe=new WeakMap;var Uv=`[mux-player ${$v()}]`;function ii(...e){console.warn(Uv,...e)}function lt(...e){console.error(Uv,...e)}function Hv(e){var t;let i=(t=e.message)!=null?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${M("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),ii(i)}var Ne={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Ki={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Th=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),jy=Object.values(Ne).filter(e=>Ne.PLAYSINLINE!==e),Qy=Object.values(Ki),Zy=[...jy,...Qy],zy=class extends Ft.HTMLElement{static get observedAttributes(){return Zy}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case Ki.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case Ki.VOLUME:{let n=(a=ze(i))!=null?a:1;this.media&&(this.media.volume=n);return}case Ki.PLAYBACKRATE:{let n=(r=ze(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:Th}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:Th}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=ze(this.getAttribute(Ki.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(Ki.PLAYBACKRATE,`${e}`):this.removeAttribute(Ki.PLAYBACKRATE)}get crossOrigin(){return _r(this,Ne.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Ne.CROSSORIGIN,`${e}`)}get autoplay(){return _r(this,Ne.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(Ne.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(Ne.AUTOPLAY)}get loop(){return _r(this,Ne.LOOP)!=null}set loop(e){e?this.setAttribute(Ne.LOOP,""):this.removeAttribute(Ne.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return _r(this,Ne.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(Ne.MUTED,""):this.removeAttribute(Ne.MUTED)}get playsInline(){return _r(this,Ne.PLAYSINLINE)!=null}set playsInline(e){lt("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Ne.PRELOAD,e):this.removeAttribute(Ne.PRELOAD)}};function _r(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Ah=zy,Xy=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,br=new WeakMap,Jy=class Bv{constructor(t,i){this.element=t,this.type=i,this.element.addEventListener(this.type,this);let a=br.get(this.element);a&&a.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let i=br.get(this.element);i&&i.delete(this.type)}}static for(t){br.has(t.element)||br.set(t.element,new Map);let i=t.attributeName.slice(2),a=br.get(t.element);return a&&a.has(i)?a.get(i):new Bv(t.element,i)}};function eT(e,t){return e instanceof Tt&&e.attributeName.startsWith("on")?(Jy.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function tT(e,t){return t instanceof Wv&&e instanceof ar?(t.renderInto(e),!0):!1}function iT(e,t){return t instanceof DocumentFragment&&e instanceof ar?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function aT(e,t){if(e instanceof Tt){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t)),!0}return e.value=String(t),!0}function rT(e,t){if(e instanceof Tt&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}function nT(e,t){if(typeof t=="boolean"&&e instanceof Tt){let i=e.attributeNamespace,a=e.element.hasAttributeNS(i,e.attributeName);return t!==a&&(e.booleanValue=t),!0}return!1}function sT(e,t){return t===!1&&e instanceof ar?(e.replace(""),!0):!1}function oT(e,t){rT(e,t)||nT(e,t)||eT(e,t)||sT(e,t)||tT(e,t)||iT(e,t)||aT(e,t)}var dl=new Map,kh=new WeakMap,Sh=new WeakMap,Wv=class{constructor(t,i,a){this.strings=t,this.values=i,this.processor=a,this.stringsKey=this.strings.join("")}get template(){if(dl.has(this.stringsKey))return dl.get(this.stringsKey);{let t=qu.createElement("template"),i=this.strings.length-1;return t.innerHTML=this.strings.reduce((a,r,n)=>a+r+(n<i?`{{ ${n} }}`:""),""),dl.set(this.stringsKey,t),t}}renderInto(t){var i;let a=this.template;if(kh.get(t)!==a){kh.set(t,a);let n=new No(a,this.values,this.processor);Sh.set(t,n),t instanceof ar?t.replace(...n.children):t.appendChild(n);return}let r=Sh.get(t);(i=r==null?void 0:r.update)==null||i.call(r,this.values)}},lT={processCallback(e,t,i){var a;if(i){for(let[r,n]of t)if(r in i){let s=(a=i[r])!=null?a:"";oT(n,s)}}}};function Bs(e,...t){return new Wv(e,t,lT)}function dT(e,t){e.renderInto(t)}var uT=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},cT=e=>Bs`
  <style>
    ${uT(e)}
    ${Xy}
  </style>
  ${vT(e)}
`,hT=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return Yu(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},mT={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},pT=Object.values(mT).join(", "),vT=e=>{var t,i,a,r,n,s,o,l,d,p,h,u,m,f,E,_,b,T,v,w,L,N,B,j,X,F,$,Oe,Ve,qe,ve,$e,kt,Ue,ht;return Bs`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${hT(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((i=e.streamType)!=null&&i.includes(Z.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(a=e.audio)!=null?a:!1}"
    style="${(r=Hy({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=e.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=e.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(d=e.defaultDuration)!=null?d:!1}"
    hideduration="${(p=e.hideDuration)!=null?p:!1}"
    title="${(h=e.title)!=null?h:!1}"
    videotitle="${(u=e.videoTitle)!=null?u:!1}"
    proudlydisplaymuxbadge="${(m=e.proudlyDisplayMuxBadge)!=null?m:!1}"
    exportparts="${pT}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${(f=e.targetLiveWindow)!=null?f:!1}"
      stream-type="${(E=Yu(e.streamType))!=null?E:!1}"
      crossorigin="${(_=e.crossOrigin)!=null?_:""}"
      playsinline
      autoplay="${(b=e.autoplay)!=null?b:!1}"
      muted="${(T=e.muted)!=null?T:!1}"
      loop="${(v=e.loop)!=null?v:!1}"
      preload="${(w=e.preload)!=null?w:!1}"
      debug="${(L=e.debug)!=null?L:!1}"
      prefer-cmcd="${(N=e.preferCmcd)!=null?N:!1}"
      disable-tracking="${(B=e.disableTracking)!=null?B:!1}"
      disable-cookies="${(j=e.disableCookies)!=null?j:!1}"
      prefer-playback="${(X=e.preferPlayback)!=null?X:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(F=e.beaconCollectionDomain)!=null?F:!1}"
      player-init-time="${($=e.playerInitTime)!=null?$:!1}"
      player-software-name="${(Oe=e.playerSoftwareName)!=null?Oe:!1}"
      player-software-version="${(Ve=e.playerSoftwareVersion)!=null?Ve:!1}"
      env-key="${(qe=e.envKey)!=null?qe:!1}"
      custom-domain="${(ve=e.customDomain)!=null?ve:!1}"
      src="${e.src?e.src:e.playbackId?bl(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?bl(e):!1}"
      cast-receiver="${($e=e.castReceiver)!=null?$e:!1}"
      drm-token="${(Ue=(kt=e.tokens)==null?void 0:kt.drm)!=null?Ue:!1}"
      exportparts="video"
    >
      ${e.storyboard?Bs`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:Bs``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(ht=e.placeholder)!=null?ht:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Fv=e=>e.charAt(0).toUpperCase()+e.slice(1),fT=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Fv((i=e.errorCategory)!=null?i:"video"),n=go((a=e.errorCategory)!=null?a:re.VIDEO);if(e.muxCode===O.NETWORK_OFFLINE)return M("Your device appears to be offline",t);if(e.muxCode===O.NETWORK_TOKEN_EXPIRED)return M("{category} URL has expired",t).format({category:r});if([O.NETWORK_TOKEN_SUB_MISMATCH,O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING,O.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return M("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===O.NETWORK_TOKEN_MISSING)return M("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===O.NETWORK_NOT_FOUND)return M("{category} does not exist",t).format({category:r});if(e.muxCode===O.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return M("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===I.MEDIA_ERR_NETWORK)return M("Network Error",t);if(e.code===I.MEDIA_ERR_DECODE)return M("Media Error",t);if(e.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return M("Source Not Supported",t)}return M("Error",t)},ET=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Fv((i=e.errorCategory)!=null?i:"video"),n=go((a=e.errorCategory)!=null?a:re.VIDEO);return e.muxCode===O.NETWORK_OFFLINE?M("Check your internet connection and try reloading this video.",t):e.muxCode===O.NETWORK_TOKEN_EXPIRED?M("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH?M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_TOKEN_MALFORMED?M("{category} URL is formatted incorrectly",t).format({category:r}):[O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?M("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[O.NETWORK_TOKEN_MISSING,O.NETWORK_INVALID_URL].includes(e.muxCode)?M("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===O.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===I.MEDIA_ERR_NETWORK||e.code===I.MEDIA_ERR_DECODE||(e.code,I.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},_T=(e,t=!1)=>{let i=fT(e,t).toString(),a=ET(e,t).toString();return{title:i,message:a}},bT=e=>{if(e.muxCode){if(e.muxCode===O.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===O.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===O.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===O.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===O.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===I.MEDIA_ERR_NETWORK)return"";if(e.code===I.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},wh=(e,t)=>{let i=bT(e);return{message:e.message,context:e.context,file:i}},gT=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,kd=qu.createElement("template");"innerHTML"in kd&&(kd.innerHTML=gT);var Ih,Rh,Kv=class extends Po{};Kv.template=(Rh=(Ih=kd.content)==null?void 0:Ih.children)==null?void 0:Rh[0];Ft.customElements.get("media-theme-gerwig")||Ft.customElements.define("media-theme-gerwig",Kv);var yT="gerwig",ei={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge"},Sd=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"];function TT(e,t){var i,a;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.storyboard,storyboardSrc:e.getAttribute(A.STORYBOARD_SRC),placeholder:e.getAttribute("placeholder"),themeTemplate:kT(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(A.NOHOTKEYS),hotKeys:e.getAttribute(A.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(y.TARGET_LIVE_WINDOW),streamType:Yu(e.getAttribute(y.STREAM_TYPE)),primaryColor:e.getAttribute(A.PRIMARY_COLOR),secondaryColor:e.getAttribute(A.SECONDARY_COLOR),accentColor:e.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:ST(e),playbackRates:e.getAttribute(A.PLAYBACK_RATES),customDomain:(i=e.getAttribute(y.CUSTOM_DOMAIN))!=null?i:void 0,title:e.getAttribute(A.TITLE),videoTitle:(a=e.getAttribute(A.VIDEO_TITLE))!=null?a:e.getAttribute(A.TITLE),novolumepref:e.hasAttribute(A.NO_VOLUME_PREF),proudlyDisplayMuxBadge:e.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,...t,extraSourceParams:e.extraSourceParams}}var AT=Hp.formatErrorMessage;Hp.formatErrorMessage=e=>{var t,i;if(e instanceof I){let a=_T(e,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=a.linkText)!=null?t:""} ${M("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return AT(e)};function kT(e){var t,i;let a=e.theme;if(a){let r=(i=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Ft.customElements.get(a);if(n!=null&&n.template)return n.template}}function ST(e){var t;let i=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function Ch(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=e.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},t)}var wT=Object.values(y),IT=Object.values(ei),RT=Object.values(A),Dh=$v(),Lh="mux-player",Mh={isDialogOpen:!1},CT={redundant_streams:!0},Ws,Fs,Ks,Vi,Vs,Ga,ce,Ti,Vv,wd,qi,xh,Oh,Nh,Ph,DT=class extends Ah{constructor(){super(),gt(this,ce),gt(this,Ws),gt(this,Fs,!1),gt(this,Ks,{}),gt(this,Vi,!0),gt(this,Vs,new Gy(this,"hotkeys")),gt(this,Ga,{...Mh,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&be(this,ce,wd).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(Nv(this,qu.activeElement)||e.preventDefault())}}),Gt(this,Ws,$d()),this.attachShadow({mode:"open"}),be(this,ce,Vv).call(this),this.isConnected&&be(this,ce,Ti).call(this)}static get NAME(){return Lh}static get VERSION(){return Dh}static get observedAttributes(){var e;return[...(e=Ah.observedAttributes)!=null?e:[],...IT,...wT,...RT]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=Ch(this))}attributeChangedCallback(e,t,i){switch(be(this,ce,Ti).call(this),super.attributeChangedCallback(e,t,i),e){case A.HOTKEYS:z(this,Vs).value=i;break;case A.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&ii(M("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(i){let a=Ba(i);if(a){let{aud:r}=a,n=Kr.THUMBNAIL;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(i){let a=Ba(i);if(a){let{aud:r}=a,n=Kr.STORYBOARD;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(i){let a=Ba(i);if(a){let{aud:r}=a,n=Kr.DRM;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case y.PLAYBACK_ID:{i!=null&&i.includes("?token")&&lt(M("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case y.STREAM_TYPE:i&&![Z.LIVE,Z.ON_DEMAND,Z.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Hv({file:"invalid-stream-type.md",message:M("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===Z.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[y.PLAYBACK_ID,ei.SRC,A.PLAYBACK_TOKEN].includes(e)&&t!==i&&Gt(this,Ga,{...z(this,Ga),...Mh}),be(this,ce,qi).call(this,{[Yy(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Ft.CustomEvent(C.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(li.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Ft.CustomEvent(C.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((t,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(li.MEDIA_IS_FULLSCREEN,()=>t(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(y.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Zs.includes(e)?this.setAttribute(y.PREFER_CMCD,e):ii(`Invalid value for preferCmcd. Must be one of ${Zs.join()}`):this.removeAttribute(y.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(A.THEME))!=null?e:yT}set theme(e){this.setAttribute(A.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(Sd.includes(i))continue;let a=e.getAttribute(i);t[xv(i)]=a===""?!0:a}return t}set themeProps(e){var t,i;be(this,ce,Ti).call(this);let a={...this.themeProps,...e};for(let r in a){if(Sd.includes(r))continue;let n=e==null?void 0:e[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(Ad(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(Ad(r),n)}}get playbackId(){var e;return(e=this.getAttribute(y.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(y.PLAYBACK_ID,e):this.removeAttribute(y.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=Ni(this,ei.SRC))!=null?e:void 0:(t=this.getAttribute(ei.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(ei.SRC,e):this.removeAttribute(ei.SRC)}get poster(){var e;let t=this.getAttribute(ei.POSTER);if(t!=null)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){ii("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Ky(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||e===""?this.setAttribute(ei.POSTER,e):this.removeAttribute(ei.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(A.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(A.STORYBOARD_SRC,e):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[Z.LIVE,Z.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return Vy(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(e){if(!e){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return z(this,Vs)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return ze(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(A.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(A.VIDEO_TITLE))!=null?e:this.getAttribute(A.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(A.VIDEO_TITLE,e):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var e;return(e=Ni(this,A.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(A.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Ft.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),i))return i}set primaryColor(e){this.setAttribute(A.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Ft.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),i))return i}set secondaryColor(e){this.setAttribute(A.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Ft.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),i))return i}set accentColor(e){this.setAttribute(A.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=ze(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=ze(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return ze(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(y.PLAYER_INIT_TIME)?ze(this.getAttribute(y.PLAYER_INIT_TIME)):z(this,Ws)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(y.PLAYER_INIT_TIME):this.setAttribute(y.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(y.PLAYER_SOFTWARE_NAME))!=null?e:Lh}get playerSoftwareVersion(){var e;return(e=this.getAttribute(y.PLAYER_SOFTWARE_VERSION))!=null?e:Dh}get beaconCollectionDomain(){var e;return(e=this.getAttribute(y.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(y.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(y.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(y.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(y.MAX_RESOLUTION,e):this.removeAttribute(y.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(y.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(y.MIN_RESOLUTION,e):this.removeAttribute(y.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(y.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(y.RENDITION_ORDER,e):this.removeAttribute(y.RENDITION_ORDER))}get programStartTime(){return ze(this.getAttribute(y.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(y.PROGRAM_START_TIME):this.setAttribute(y.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return ze(this.getAttribute(y.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(y.PROGRAM_END_TIME):this.setAttribute(y.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return ze(this.getAttribute(y.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(y.ASSET_START_TIME):this.setAttribute(y.ASSET_START_TIME,`${e}`)}get assetEndTime(){return ze(this.getAttribute(y.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(y.ASSET_END_TIME):this.setAttribute(y.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):CT}set extraSourceParams(e){e==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(y.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(y.CUSTOM_DOMAIN,e):this.removeAttribute(y.CUSTOM_DOMAIN))}get envKey(){var e;return(e=Ni(this,y.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(y.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get debug(){return Ni(this,y.DEBUG)!=null}set debug(e){e?this.setAttribute(y.DEBUG,""):this.removeAttribute(y.DEBUG)}get disableTracking(){return Ni(this,y.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(y.DISABLE_TRACKING,!!e)}get disableCookies(){return Ni(this,y.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(y.DISABLE_COOKIES,""):this.removeAttribute(y.DISABLE_COOKIES)}get streamType(){var e,t,i;return(i=(t=this.getAttribute(y.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?i:Z.UNKNOWN}set streamType(e){this.setAttribute(y.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return(i=(t=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:Z.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(A.DEFAULT_STREAM_TYPE,e):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return ze(Ni(this,y.START_TIME))}set startTime(e){this.setAttribute(y.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(y.PREFER_PLAYBACK);if(e===Kt.MSE||e===Kt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Kt.MSE||e===Kt.NATIVE?this.setAttribute(y.PREFER_PLAYBACK,e):this.removeAttribute(y.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(be(this,ce,Ti).call(this),!this.media){lt("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Ch(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(be(this,ce,Ti).call(this),!this.media){lt("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(be(this,ce,Ti).call(this),!this.media){lt("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(be(this,ce,Ti).call(this),!this.media){lt("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(A.PLAYBACK_TOKEN),t=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return{...z(this,Ks),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(e){Gt(this,Ks,e??{})}get playbackToken(){var e;return(e=this.getAttribute(A.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(A.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(A.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(A.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(A.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(A.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(A.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return xd(n,e,t,i,a)}removeTextTrack(e){var t;let i=(t=this.media)==null?void 0:t.nativeEl;if(i)return B0(i,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(A.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(A.CAST_RECEIVER,e):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){lt("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};Ws=new WeakMap,Fs=new WeakMap,Ks=new WeakMap,Vi=new WeakMap,Vs=new WeakMap,Ga=new WeakMap,ce=new WeakSet,Ti=function(){var e,t,i,a;if(!z(this,Fs)){Gt(this,Fs,!0),be(this,ce,qi).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Ft.HTMLElement))throw""}catch{lt("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{lt("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof sg))throw""}catch{lt("<media-controller> failed to upgrade!")}be(this,ce,xh).call(this),be(this,ce,Oh).call(this),be(this,ce,Nh).call(this),Gt(this,Vi,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(x.USER_INACTIVE))!=null?t:!0),be(this,ce,Ph).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>be(this,ce,qi).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>be(this,ce,qi).call(this))}},Vv=function(){var e,t;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},wd=function(e){Object.assign(z(this,Ga),e),be(this,ce,qi).call(this)},qi=function(e={}){dT(cT(TT(this,{...z(this,Ga),...e})),this.shadowRoot)},xh=function(){let e=t=>{var i,a;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(Sd.includes(r))return;let n=this.getAttribute(t);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Oh=function(){let e=t=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof I)){let{message:n,code:s}=a??{};a=new I(n,s)}if(!(a!=null&&a.fatal)){ii(a),a.data&&ii(`${a.name} data:`,a.data);return}let r=wh(a);r.message&&Hv(r),lt(a),a.data&&lt(`${a.name} data:`,a.data),be(this,ce,wd).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(t={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof I))return t;let n=wh((a=this.media)==null?void 0:a.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):t.player_error_message,player_error_context:n.context?String(n.context):t.player_error_context}})},Nh=function(){var e,t,i,a;let r=()=>be(this,ce,qi).call(this);(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},Ph=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===Z.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(l,d,p=!1)=>{r()||Array.from(l&&l.activeCues||[]).forEach(h=>{if(!(!h.snapToLines||h.line<-5||h.line>=0&&h.line<10))if(!d||this.paused){let u=h.text.split(`
`).length,m=-3;this.streamType===Z.LIVE&&(m=-2);let f=m-u;if(h.line===f&&!p)return;a.has(h)||a.set(h,h.line),h.line=f}else setTimeout(()=>{h.line=a.get(h)||"auto"},500)})},s=()=>{var l,d;n(i,(d=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?d:!1)},o=()=>{var l,d;let p=Array.from(((d=(l=this.mediaController)==null?void 0:l.media)==null?void 0:d.textTracks)||[]).filter(h=>["subtitles","captions"].includes(h.kind)&&h.mode==="showing")[0];p!==i&&(i==null||i.removeEventListener("cuechange",s)),i=p,i==null||i.addEventListener("cuechange",s),n(i,z(this,Vi))};o(),(e=this.textTracks)==null||e.addEventListener("change",o),(t=this.textTracks)==null||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var l,d;let p=(d=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?d:!0;z(this,Vi)!==p&&(Gt(this,Vi,p),n(i,z(this,Vi)))})};function Ni(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var $h=DT,qv=e=>{throw TypeError(e)},Yv=(e,t,i)=>t.has(e)||qv("Cannot "+i),LT=(e,t,i)=>(Yv(e,t,"read from private field"),i?i.call(e):t.get(e)),MT=(e,t,i)=>t.has(e)?qv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),xT=(e,t,i,a)=>(Yv(e,t,"write to private field"),t.set(e,i),i),Ho=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends Ho{}globalThis.DocumentFragment=e}var Gu=class extends Ho{},OT=class extends Ho{},NT={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Gu)}},qs,PT=class{constructor(e,t={}){MT(this,qs),xT(this,qs,t==null?void 0:t.detail)}get detail(){return LT(this,qs)}initCustomEvent(){}};qs=new WeakMap;function $T(e,t){return new Gu}var UT={document:{createElement:$T},DocumentFragment,customElements:NT,CustomEvent:PT,EventTarget:Ho,HTMLElement:Gu,HTMLVideoElement:OT},HT=typeof window>"u"||typeof globalThis.customElements>"u",ul=HT?UT:globalThis;ul.customElements.get("mux-player")||(ul.customElements.define("mux-player",$h),ul.MuxPlayerElement=$h);var Gv=parseInt(zr.version)>=19,Uh={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},BT=e=>e==null,WT=(e,t)=>BT(t)?!1:e in t,FT=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),KT=(e,t)=>{if(!(!Gv&&typeof t=="boolean"&&!t)){if(WT(e,Uh))return Uh[e];if(typeof t<"u")return/[A-Z]/.test(e)?FT(e):e}},VT=(e,t)=>!Gv&&typeof e=="boolean"?"":e,qT=(e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((a,[r,n])=>{let s=KT(r,n);if(!s)return a;let o=VT(n);return a[s]=o,a},{})};function Hh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function YT(...e){return t=>{let i=!1,a=e.map(r=>{let n=Hh(r,t);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Hh(e[r],null)}}}}function GT(...e){return Xr.useCallback(YT(...e),e)}var jT=Object.prototype.hasOwnProperty,QT=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!jT.call(t,i[r])||!Object.is(e[i[r]],t[i[r]]))return!1;return!0},jv=(e,t,i)=>!QT(t,e[i]),ZT=(e,t,i)=>{e[i]=t},zT=(e,t,i,a=ZT,r=jv)=>Xr.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[i==null?void 0:i.current,t]),Rt=zT,XT=()=>{try{return"3.5.1"}catch{}return"UNKNOWN"},JT=XT(),eA=()=>JT,de=(e,t,i)=>Xr.useEffect(()=>{let a=t==null?void 0:t.current;if(!a||!i)return;let r=e,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[t==null?void 0:t.current,i,e]),tA=zr.forwardRef(({children:e,...t},i)=>zr.createElement("mux-player",{suppressHydrationWarning:!0,...qT(t),ref:i},e)),iA=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:p,onVolumeChange:h,onRateChange:u,onResize:m,onWaiting:f,onPlay:E,onPlaying:_,onTimeUpdate:b,onPause:T,onSeeking:v,onSeeked:w,onStalled:L,onSuspend:N,onEnded:B,onError:j,onCuePointChange:X,onChapterChange:F,metadata:$,tokens:Oe,paused:Ve,playbackId:qe,playbackRates:ve,currentTime:$e,themeProps:kt,extraSourceParams:Ue,castCustomData:ht,_hlsConfig:St,...He}=t;return Rt("playbackRates",ve,e),Rt("metadata",$,e),Rt("extraSourceParams",Ue,e),Rt("_hlsConfig",St,e),Rt("themeProps",kt,e),Rt("tokens",Oe,e),Rt("playbackId",qe,e),Rt("castCustomData",ht,e),Rt("paused",Ve,e,(Ye,it)=>{it!=null&&(it?Ye.pause():Ye.play())},(Ye,it,ua)=>Ye.hasAttribute("autoplay")&&!Ye.hasPlayed?!1:jv(Ye,it,ua)),Rt("currentTime",$e,e,(Ye,it)=>{it!=null&&(Ye.currentTime=it)}),de("abort",e,i),de("canplay",e,a),de("canplaythrough",e,r),de("emptied",e,n),de("loadstart",e,s),de("loadeddata",e,o),de("loadedmetadata",e,l),de("progress",e,d),de("durationchange",e,p),de("volumechange",e,h),de("ratechange",e,u),de("resize",e,m),de("waiting",e,f),de("play",e,E),de("playing",e,_),de("timeupdate",e,b),de("pause",e,T),de("seeking",e,v),de("seeked",e,w),de("stalled",e,L),de("suspend",e,N),de("ended",e,B),de("error",e,j),de("cuepointchange",e,X),de("chapterchange",e,F),[He]},aA=eA(),rA="mux-player-react",nA=zr.forwardRef((e,t)=>{var i;let a=Xr.useRef(null),r=GT(a,t),[n]=iA(a,e),[s]=Xr.useState((i=e.playerInitTime)!=null?i:$d());return zr.createElement(tA,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:rA,playerSoftwareVersion:aA,playerInitTime:s,...n})}),RA=nA;export{cA as MaxResolution,I as MediaError,hA as MinResolution,mA as RenditionOrder,RA as default,$d as generatePlayerInitTime,rA as playerSoftwareName,aA as playerSoftwareVersion};
