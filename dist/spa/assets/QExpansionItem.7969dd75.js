import{i as j,u as N,x as a,ag as W,ah as X,ae as P,A as Z,r as A,o as v,w as k,v as p,ai as ee,z as te,Q as E,h as ne}from"./index.4f03f91b.js";import{Q as ae,a as q}from"./QItem.a981c44f.js";import{Q as O}from"./QItemLabel.01ad9561.js";import{Q as B}from"./QSeparator.02c5b664.js";import{u as ie,a as oe}from"./use-dark.187236d0.js";import{u as le,a as ue,b as re}from"./use-model-toggle.422ce669.js";import{u as H}from"./uid.42677368.js";var se=j({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:I,emit:T}){let r=!1,m,i,o=null,s=null,d,S;function b(){m&&m(),m=null,r=!1,o!==null&&(clearTimeout(o),o=null),s!==null&&(clearTimeout(s),s=null),i!==void 0&&i.removeEventListener("transitionend",d),d=null}function l(n,u,g){u!==void 0&&(n.style.height=`${u}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,m=g}function c(n,u){n.style.overflowY=null,n.style.height=null,n.style.transition=null,b(),u!==S&&T(u)}function y(n,u){let g=0;i=n,r===!0?(b(),g=n.offsetHeight===n.scrollHeight?0:void 0):(S="hide",n.style.overflowY="hidden"),l(n,g,u),o=setTimeout(()=>{o=null,n.style.height=`${n.scrollHeight}px`,d=f=>{s=null,(Object(f)!==f||f.target===n)&&c(n,"show")},n.addEventListener("transitionend",d),s=setTimeout(d,e.duration*1.1)},100)}function L(n,u){let g;i=n,r===!0?b():(S="show",n.style.overflowY="hidden",g=n.scrollHeight),l(n,g,u),o=setTimeout(()=>{o=null,n.style.height=0,d=f=>{s=null,(Object(f)!==f||f.target===n)&&c(n,"hide")},n.addEventListener("transitionend",d),s=setTimeout(d,e.duration*1.1)},100)}return N(()=>{r===!0&&b()}),()=>a(W,{css:!1,appear:e.appear,onEnter:y,onLeave:L},I.default)}});const x=X({}),de=Object.keys(P);var xe=j({name:"QExpansionItem",props:{...P,...le,...ie,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ue,"click","afterShow","afterHide"],setup(e,{slots:I,emit:T}){const{proxy:{$q:r}}=Z(),m=oe(e,r),i=A(e.modelValue!==null?e.modelValue:e.defaultOpened),o=A(null),s=H(),{show:d,hide:S,toggle:b}=re({showing:i});let l,c;const y=v(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=v(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),u=v(()=>{const t={};return de.forEach(h=>{t[h]=e[h]}),t}),g=v(()=>n.value===!0||e.expandIconToggle!==!0),f=v(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),$=v(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),R=v(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:b,show:d,hide:S})),_=v(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":s,"aria-label":t}});k(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&Q()});function D(t){n.value!==!0&&b(t),T("click",t)}function G(t){t.keyCode===13&&C(t,!0)}function C(t,h){h!==!0&&o.value!==null&&o.value.focus(),b(t),ne(t)}function K(){T("afterShow")}function M(){T("afterHide")}function Q(){l===void 0&&(l=H()),i.value===!0&&(x[e.group]=l);const t=k(i,w=>{w===!0?x[e.group]=l:x[e.group]===l&&delete x[e.group]}),h=k(()=>x[e.group],(w,J)=>{J===l&&w!==void 0&&w!==l&&S()});c=()=>{t(),h(),x[e.group]===l&&delete x[e.group],c=void 0}}function U(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},h=[a(E,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:f.value})];return $.value===!0&&(Object.assign(t,{tabindex:0,..._.value,onClick:C,onKeyup:G}),h.unshift(a("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(q,t,()=>h)}function Y(){let t;return I.header!==void 0?t=[].concat(I.header(R.value)):(t=[a(q,()=>[a(O,{lines:e.labelLines},()=>e.label||""),e.caption?a(O,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(E,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](U()),t}function z(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return g.value===!0&&(t.clickable=!0,t.onClick=D,Object.assign(t,n.value===!0?u.value:_.value)),a(ae,t,Y)}function F(){return p(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:s},te(I.default)),[[ee,i.value]])}function V(){const t=[z(),a(se,{duration:e.duration,onShow:K,onHide:M},F)];return e.expandSeparator===!0&&t.push(a(B,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),a(B,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&Q(),N(()=>{c!==void 0&&c()}),()=>a("div",{class:y.value},[a("div",{class:"q-expansion-item__container relative-position"},V())])}});export{xe as Q};
