import{i as q,j as k,k as $,m as N,X as D,o as f,x as g,z as K,Y as X,A as R,w as S,q as P,u as H,n as A,Z as F,r as z,$ as U,t as j,a0 as C,a1 as Y,a2 as Z,a3 as G}from"./index.4f03f91b.js";import{g as J,a as ee,b as te,c as E}from"./position-engine.11586397.js";var ae=q({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:i}}=R(),t=k(N,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;D(X,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:o.value},K(p.default))}});const{passive:M}=F,ne=["both","horizontal","vertical"];var oe=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ne.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;S(()=>e.scrollTarget,()=>{a(),v()});function u(){t!==null&&t();const m=Math.max(0,ee(o)),w=te(o),c={top:m-i.position.top,left:w-i.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:m,left:w},i.directionChanged=i.direction!==y,i.delta=c,i.directionChanged===!0&&(i.direction=y,i.inflectionPoint=i.position),p("scroll",{...i})}function v(){o=J(s,e.scrollTarget),o.addEventListener("scroll",l,M),l(!0)}function a(){o!==void 0&&(o.removeEventListener("scroll",l,M),o=void 0)}function l(m){if(m===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[w,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(w),t=null}}}const{proxy:h}=R();return S(()=>h.$q.lang.rtl,u),P(()=>{s=h.$el.parentNode,v()}),H(()=>{t!==null&&t(),a()}),Object.assign(h,{trigger:l,getPosition:()=>i}),A}});function ie(){const e=z(!U.value);return e.value===!1&&P(()=>{e.value=!0}),e}const I=typeof ResizeObserver!="undefined",_=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:p}){let i=null,t,o={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:a,offsetHeight:l}=t;(a!==o.width||l!==o.height)&&(o={width:a,height:l},p("resize",o))}}const{proxy:v}=R();if(I===!0){let a;const l=h=>{t=v.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),u()):h!==!0&&j(()=>{l(!0)})};return P(()=>{l()}),H(()=>{i!==null&&clearTimeout(i),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),A}else{let h=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,F.passive),l=void 0)},m=function(){h(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,F.passive),u())};const a=ie();let l;return P(()=>{j(()=>{t=v.$el,t&&m()})}),H(h),v.trigger=s,()=>{if(a.value===!0)return g("object",{style:_.style,tabindex:-1,type:"text/html",data:_.url,"aria-hidden":"true",onLoad:m})}}}}),se=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:i}){const{proxy:{$q:t}}=R(),o=z(null),s=z(t.screen.height),u=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),a=z(0),l=z(U.value===!0?0:E()),h=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};v.value=d,e.onScroll!==void 0&&i("scroll",d)}}function Q(r){const{height:d,width:x}=r;let T=!1;s.value!==d&&(T=!0,s.value=d,e.onScrollHeight!==void 0&&i("scrollHeight",d),L()),u.value!==x&&(T=!0,u.value=x),T===!0&&e.onResize!==void 0&&i("resize",r)}function O({height:r}){a.value!==r&&(a.value=r,L())}function L(){if(e.container===!0){const r=s.value>a.value?E():0;l.value!==r&&(l.value=r)}}let n=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:a,scrollbarWidth:l,totalWidth:f(()=>u.value+l.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:v,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,d,x){b[r][d]=x}};if(D(N,b),E()>0){let x=function(){r=null,d.classList.remove("hide-scrollbar")},T=function(){if(r===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},V=function(W){r!==null&&W==="remove"&&(clearTimeout(r),x()),window[`${W}EventListener`]("resize",T)},r=null;const d=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),Y(()=>{V("remove")})}return()=>{const r=Z(p.default,[g(oe,{onScroll:y}),g(B,{onResize:Q})]),d=g("div",{class:h.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:o},[g(B,{onResize:O}),g("div",{class:"absolute-full",style:w.value},[g("div",{class:"scroll",style:c.value},[d])])]):d}}}),ue=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:i}){const{proxy:{$q:t}}=R(),o=k(N,$);if(o===$)return console.error("QHeader needs to be child of QLayout"),$;const s=z(parseInt(e.heightHint,10)),u=z(!0),v=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||t.platform.is.ios&&o.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?s.value:0;const n=s.value-o.scroll.value.position;return n>0?n:0}),l=f(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),h=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),m=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const n=o.rows.value.top,b={};return n[0]==="l"&&o.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function c(n,b){o.update("header",n,b)}function y(n,b){n.value!==b&&(n.value=b)}function Q({height:n}){y(s,n),c("size",n)}function O(n){h.value===!0&&y(u,!0),i("focusin",n)}S(()=>e.modelValue,n=>{c("space",n),y(u,!0),o.animate()}),S(a,n=>{c("offset",n)}),S(()=>e.reveal,n=>{n===!1&&y(u,e.modelValue)}),S(u,n=>{o.animate(),i("reveal",n)}),S(o.scroll,n=>{e.reveal===!0&&y(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",a.value),H(()=>{o.instances.header===L&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=G(p.default,[]);return e.elevated===!0&&n.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(g(B,{debounce:0,onResize:Q})),g("header",{class:m.value,style:w.value,onFocusin:O},n)}}});export{ue as Q,se as a,ae as b};