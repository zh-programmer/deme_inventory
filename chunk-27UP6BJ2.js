import{c as E,d as x,e as y}from"./chunk-UJQTAKBF.js";import{d as k,f as T}from"./chunk-BJDGFUV6.js";import"./chunk-WMEG6PAA.js";import"./chunk-MCRJI3T3.js";import{v as b,w as I}from"./chunk-IFNCDCK6.js";import"./chunk-NSEF77ZJ.js";import{c as u}from"./chunk-EMZ5L7NK.js";import{b as h,f as a,g as m,i as f,j as w}from"./chunk-BKSQ2SB4.js";import{i as g}from"./chunk-62FRKGEW.js";import{g as p}from"./chunk-2R6CW7ES.js";var M=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}",B=M,z=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}",H=z,K=(()=>{let e=class{constructor(t){h(this,t)}onClick(t){let s=this.el.closest("ion-reorder-group");t.preventDefault(),(!s||!s.disabled)&&t.stopImmediatePropagation()}render(){let t=u(this);return a(m,{key:"17adf3165f4e09283d5d6434d7cd47bd23519048",class:t},a("slot",{key:"d00d1cd97c689fc5c7b7175a2051cf697fe22871"},a("ion-icon",{key:"eec219aebde6083de98358be3e75965c5a5dc3d0",icon:t==="ios"?b:I,lazy:!1,class:"reorder-icon",part:"icon","aria-hidden":"true"})))}get el(){return f(this)}};return e.style={ios:B,md:H},e})(),Y=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}",_=Y,L=class{constructor(e){h(this,e),this.ionItemReorder=w(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){return p(this,null,function*(){let e=T(this.el);e&&(this.scrollEl=yield k(e)),this.gesture=(yield import("./chunk-F5F7W64E.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()})}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(e){return Promise.resolve(this.completeReorder(e))}canStart(e){if(this.selectedItemEl||this.state!==0)return!1;let s=e.event.target.closest("ion-reorder");if(!s)return!1;let r=G(s,this.el);return r?(e.data=r,!0):!1}onStart(e){e.event.preventDefault();let t=this.selectedItemEl=e.data,s=this.cachedHeights;s.length=0;let r=this.el,o=r.children;if(!o||o.length===0)return;let i=0;for(let l=0;l<o.length;l++){let c=o[l];i+=c.offsetHeight,s.push(i),c.$ionIndex=l}let n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){let l=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=l.top+S,this.scrollElBottom=l.bottom-S}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(R),E()}onMove(e){let t=this.selectedItemEl;if(!t)return;let s=this.autoscroll(e.currentY),r=this.containerTop-s,o=this.containerBottom-s,i=Math.max(r,Math.min(e.currentY,o)),n=s+i-e.startY,l=i-r,c=this.itemIndexForTop(l);if(c!==this.lastToIndex){let v=d(t);this.lastToIndex=c,x(),this.reorderMove(v,c)}t.style.transform=`translateY(${n}px)`}onEnd(){let e=this.selectedItemEl;if(this.state=2,!e){this.state=0;return}let t=this.lastToIndex,s=d(e);t===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:t,complete:this.completeReorder.bind(this)}),y()}completeReorder(e){let t=this.selectedItemEl;if(t&&this.state===2){let s=this.el.children,r=s.length,o=this.lastToIndex,i=d(t);g(()=>{if(o!==i&&(e===void 0||e===!0)){let n=i<o?s[o+1]:s[o];this.el.insertBefore(t,n)}for(let n=0;n<r;n++)s[n].style.transform=""}),Array.isArray(e)&&(e=A(e,i,o)),t.style.transition="",t.classList.remove(R),this.selectedItemEl=void 0,this.state=0}return e}itemIndexForTop(e){let t=this.cachedHeights;for(let s=0;s<t.length;s++)if(t[s]>e)return s;return t.length-1}reorderMove(e,t){let s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let i=r[o].style,n="";o>e&&o<=t?n=`translateY(${-s}px)`:o<e&&o>=t&&(n=`translateY(${s}px)`),i.transform=n}}autoscroll(e){if(!this.scrollEl)return 0;let t=0;return e<this.scrollElTop?t=-C:e>this.scrollElBottom&&(t=C),t!==0&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}render(){let e=u(this);return a(m,{key:"6ca009dd65302a914d459aec638e62977440db20",class:{[e]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":this.state!==0}})}get el(){return f(this)}static get watchers(){return{disabled:["disabledChanged"]}}},d=e=>e.$ionIndex,G=(e,t)=>{let s;for(;e;){if(s=e.parentElement,s===t)return e;e=s}},S=60,C=10,R="reorder-selected",A=(e,t,s)=>{let r=e[t];return e.splice(t,1),e.splice(s,0,r),e.slice()};L.style=_;export{K as ion_reorder,L as ion_reorder_group};
