import{g as d}from"./chunk-2R6CW7ES.js";var te=t=>{let e=new Map;e.set("web",{name:"web"});let r=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},s=(n,a)=>{r.platforms.set(n,a)},i=n=>{r.platforms.has(n)&&(r.currentPlatform=r.platforms.get(n))};return r.addPlatform=s,r.setPlatform=i,r},re=t=>t.CapacitorPlatforms=te(t),F=re(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ge=F.addPlatform,me=F.setPlatform;var x=function(t){return t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE",t}(x||{}),E=class extends Error{constructor(e,r,s){super(e),this.message=e,this.code=r,this.data=s}},ne=t=>{var e,r;return t?.androidBridge?"android":!((r=(e=t?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},se=t=>{var e,r,s,i,n;let a=t.CapacitorCustomPlatform||null,o=t.Capacitor||{},g=o.Plugins=o.Plugins||{},l=t.CapacitorPlatforms,$=()=>a!==null?a.name:ne(t),y=((e=l?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||$,j=()=>y()!=="web",B=((r=l?.currentPlatform)===null||r===void 0?void 0:r.isNativePlatform)||j,G=c=>{let u=T.get(c);return!!(u?.platforms.has(y())||I(c))},K=((s=l?.currentPlatform)===null||s===void 0?void 0:s.isPluginAvailable)||G,z=c=>{var u;return(u=o.PluginHeaders)===null||u===void 0?void 0:u.find(L=>L.name===c)},I=((i=l?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||z,J=c=>t.console.error(c),Q=(c,u,L)=>Promise.reject(`${L} does not have an implementation of "${u}".`),T=new Map,X=(c,u={})=>{let L=T.get(c);if(L)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),L.proxy;let P=y(),C=I(c),b,Z=()=>d(void 0,null,function*(){return!b&&P in u?b=typeof u[P]=="function"?b=yield u[P]():b=u[P]:a!==null&&!b&&"web"in u&&(b=typeof u.web=="function"?b=yield u.web():b=u.web),b}),N=(f,m)=>{var w,p;if(C){let v=C?.methods.find(h=>m===h.name);if(v)return v.rtype==="promise"?h=>o.nativePromise(c,m.toString(),h):(h,k)=>o.nativeCallback(c,m.toString(),h,k);if(f)return(w=f[m])===null||w===void 0?void 0:w.bind(f)}else{if(f)return(p=f[m])===null||p===void 0?void 0:p.bind(f);throw new E(`"${c}" plugin is not implemented on ${P}`,x.Unimplemented)}},S=f=>{let m,w=(...p)=>{let v=Z().then(h=>{let k=N(h,f);if(k){let A=k(...p);return m=A?.remove,A}else throw new E(`"${c}.${f}()" is not implemented on ${P}`,x.Unimplemented)});return f==="addListener"&&(v.remove=()=>d(void 0,null,function*(){return m()})),v};return w.toString=()=>`${f.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:f,writable:!1,configurable:!1}),w},R=S("addListener"),V=S("removeListener"),ee=(f,m)=>{let w=R({eventName:f},m),p=()=>d(void 0,null,function*(){let h=yield w;V({eventName:f,callbackId:h},m)}),v=new Promise(h=>w.then(()=>h({remove:p})));return v.remove=()=>d(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield p()}),v},D=new Proxy({},{get(f,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return C?ee:R;case"removeListener":return V;default:return S(m)}}});return g[c]=D,T.set(c,{name:c,proxy:D,platforms:new Set([...Object.keys(u),...C?[P]:[]])}),D},Y=((n=l?.currentPlatform)===null||n===void 0?void 0:n.registerPlugin)||X;return o.convertFileSrc||(o.convertFileSrc=c=>c),o.getPlatform=y,o.handleError=J,o.isNativePlatform=B,o.isPluginAvailable=K,o.pluginMethodNoop=Q,o.registerPlugin=Y,o.Exception=E,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},oe=t=>t.Capacitor=se(t),U=oe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),q=U.registerPlugin,he=U.Plugins;var O=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,r){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(r);let n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),s&&this.sendRetainedArgumentsForEvent(e);let a=()=>d(this,null,function*(){return this.removeListener(e,r)});return Promise.resolve({remove:a})}removeAllListeners(){return d(this,null,function*(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,r,s){let i=this.listeners[e];if(!i){if(s){let n=this.retainedEventArguments[e];n||(n=[]),n.push(r),this.retainedEventArguments[e]=n}return}i.forEach(n=>n(r))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,r){this.windowListeners[r]={registered:!1,windowEventName:e,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(e="not implemented"){return new U.Exception(e,x.Unimplemented)}unavailable(e="not available"){return new U.Exception(e,x.Unavailable)}removeListener(e,r){return d(this,null,function*(){let s=this.listeners[e];if(!s)return;let i=s.indexOf(r);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let r=this.retainedEventArguments[e];r&&(delete this.retainedEventArguments[e],r.forEach(s=>{this.notifyListeners(e,s)}))}};var W=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),M=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),_=class extends O{getCookies(){return d(this,null,function*(){let e=document.cookie,r={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[i,n]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=M(i).trim(),n=M(n).trim(),r[i]=n}),r})}setCookie(e){return d(this,null,function*(){try{let r=W(e.key),s=W(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${r}=${s||""}${i}; path=${n}; ${a};`}catch(r){return Promise.reject(r)}})}deleteCookie(e){return d(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}})}clearCookies(){return d(this,null,function*(){try{let e=document.cookie.split(";")||[];for(let r of e)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return d(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}},we=q("CapacitorCookies",{web:()=>new _}),ie=t=>d(void 0,null,function*(){return new Promise((e,r)=>{let s=new FileReader;s.onload=()=>{let i=s.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},s.onerror=i=>r(i),s.readAsDataURL(t)})}),ae=(t={})=>{let e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,n,a)=>(i[n]=t[e[a]],i),{})},le=(t,e=!0)=>t?Object.entries(t).reduce((s,i)=>{let[n,a]=i,o,g;return Array.isArray(a)?(g="",a.forEach(l=>{o=e?encodeURIComponent(l):l,g+=`${n}=${o}&`}),g.slice(0,-1)):(o=e?encodeURIComponent(a):a,g=`${n}=${o}`),`${s}&${g}`},"").substr(1):null,ce=(t,e={})=>{let r=Object.assign({method:t.method||"GET",headers:t.headers},e),i=ae(t.headers)["content-type"]||"";if(typeof t.data=="string")r.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){let n=new URLSearchParams;for(let[a,o]of Object.entries(t.data||{}))n.set(a,o);r.body=n.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){let n=new FormData;if(t.data instanceof FormData)t.data.forEach((o,g)=>{n.append(g,o)});else for(let o of Object.keys(t.data))n.append(o,t.data[o]);r.body=n;let a=new Headers(r.headers);a.delete("content-type"),r.headers=a}else(i.includes("application/json")||typeof t.data=="object")&&(r.body=JSON.stringify(t.data));return r},H=class extends O{request(e){return d(this,null,function*(){let r=ce(e,e.webFetchExtra),s=le(e.params,e.shouldEncodeUrlParams),i=s?`${e.url}?${s}`:e.url,n=yield fetch(i,r),a=n.headers.get("content-type")||"",{responseType:o="text"}=n.ok?e:{};a.includes("application/json")&&(o="json");let g,l;switch(o){case"arraybuffer":case"blob":l=yield n.blob(),g=yield ie(l);break;case"json":g=yield n.json();break;case"document":case"text":default:g=yield n.text()}let $={};return n.headers.forEach((y,j)=>{$[j]=y}),{data:g,headers:$,status:n.status,url:n.url}})}get(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}},be=q("CapacitorHttp",{web:()=>new H});function de(t){return new DataView(Uint8Array.from(t).buffer)}function ue(t){return Array.from(new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function fe(t){return`0000${t.toString(16).padStart(4,"0")}-0000-1000-8000-00805f9b34fb`}function Pe(t){let e=[],r,s,i=1,n=0;for(r=0;r<t.length;r++)s=t.charCodeAt(r),(s>47&&s<58||s>64&&s<71||s>96&&s<103)&&(n=n<<4^(s>64?s+9:s)&15,(i^=1)&&e.push(n&255));return de(e)}function ye(t){return ue(t).map(e=>{let r=e.toString(16);return r.length==1&&(r="0"+r),r}).join("")}function Le(t){if(typeof t=="string")return t;if(typeof t=="number")return fe(t);throw new Error("Invalid UUID")}function Ce(t){let e={};if(t)return t.forEach((r,s)=>{e[s.toString()]=r}),e}export{U as a,q as b,O as c,Pe as d,ye as e,Le as f,Ce as g};
