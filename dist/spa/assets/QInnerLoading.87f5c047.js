import{i as b,o as t,x as a,ag as v,A as m,av as f}from"./index.4f03f91b.js";import{u as S,a as y}from"./use-dark.187236d0.js";import{u as C,a as h}from"./use-transition.9e1010fb.js";var I=b({name:"QInnerLoading",props:{...S,...C,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:n}){const s=m(),i=y(e,s.proxy.$q),{transitionProps:r,transitionStyle:o}=h(e),u=t(()=>"q-inner-loading absolute-full column flex-center"+(i.value===!0?" q-inner-loading--dark":"")),c=t(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const l=[a(f,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(a("div",{class:c.value,style:e.labelStyle},[e.label])),l}function g(){return e.showing===!0?a("div",{class:u.value,style:o.value},n.default!==void 0?n.default():d()):null}return()=>a(v,r.value,g)}});export{I as Q};
