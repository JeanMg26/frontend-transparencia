import{j as ke,A as J,w as j,q as oe,u as le,ar as ye,r as I,o as b,as as xe,aa as ge,at as Ce,h as we,t as Q,a6 as Me,au as Se,$ as qe,x as M,e as W,Q as re,av as Re,z as X,ag as Ae,aw as Ve,a as Fe,i as _e,s as ue}from"./index.4f03f91b.js";import{u as Ee,a as Be}from"./use-dark.187236d0.js";import{u as me}from"./uid.42677368.js";import{b as he,c as $e}from"./focus-manager.02955f48.js";function Te({validate:e,resetValidation:t,requiresQForm:u}){const s=ke(ye,!1);if(s!==!1){const{props:f,proxy:d}=J();Object.assign(d,{validate:e,resetValidation:t}),j(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),s.unbindComponent(d)):s.bindComponent(d)}),oe(()=>{f.disable!==!0&&s.bindComponent(d)}),le(()=>{f.disable!==!0&&s.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ie=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,se=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,de=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ie.test(e),hexaColor:e=>se.test(e),hexOrHexaColor:e=>de.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>ie.test(e)||G.test(e),hexaOrRgbaColor:e=>se.test(e)||ee.test(e),anyColor:e=>de.test(e)||G.test(e)||ee.test(e)},Oe=[!0,!1,"ondemand"],Pe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Oe.includes(e)}};function Ie(e,t){const{props:u,proxy:s}=J(),f=I(!1),d=I(null),c=I(null);Te({validate:$,resetValidation:_});let y=0,B;const q=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=b(()=>u.disable!==!0&&q.value===!0),p=b(()=>u.error===!0||f.value===!0),U=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);j(()=>u.modelValue,()=>{N()}),j(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=j(()=>u.rules,()=>{N(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),j(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&O())});function _(){y++,t.value=!1,c.value=null,f.value=!1,d.value=null,O.cancel()}function $(P=u.modelValue){if(x.value!==!0)return!0;const A=++y,H=t.value!==!0?()=>{c.value=!0}:()=>{},D=(S,C)=>{S===!0&&H(),f.value=S,d.value=C||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(P,ne):typeof C=="string"&&ne[C]!==void 0&&(E=ne[C](P)),E===!1||typeof E=="string")return D(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(D(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===y&&D(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return A===y&&D(C!==void 0,C),C===void 0},S=>(A===y&&(console.error(S),D(!0)),!1)))}function N(P){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&O()}const O=xe($,0);return le(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(s,{resetValidation:_,validate:$}),ge(s,"hasError",()=>p.value),{isDirtyModel:c,hasRules:q,hasError:p,errorMessage:U,validate:$,resetValidation:_}}const fe=/^on[A-Z]/;function je(e,t){const u={listeners:I({}),attributes:I({})};function s(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&fe.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)fe.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Ce(s),s(),u}function pe(e,t){return e===void 0?t===!0?`f_${me()}`:void 0:e}function ae(e){return e!=null&&(""+e).length!==0}const ze={...Ee,...Pe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},De=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ne({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:s,proxy:f,vnode:d}=J(),c=Be(u,f.$q);return{requiredForAttr:e,tag:t===!0?b(()=>u.tag):{value:"label"},isDark:c,editable:b(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:je(s,d),targetUid:I(pe(u.for,e)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function Le(e){const{props:t,emit:u,slots:s,attrs:f,proxy:d}=J(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=b(()=>ae(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:i,onControlFocusin:o,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:q,hasError:x,errorMessage:p,resetValidation:U}=Ie(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=b(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),N=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=b(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=b(()=>t.labelSlot===!0||t.label!==void 0),H=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),D=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});j(()=>t.for,l=>{e.targetUid.value=pe(l,e.requiredForAttr)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function C(){he(S)}function E(){$e(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function o(l){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function i(l){we(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{U(),c.platform.is.mobile!==!0&&(B.value=!1)})}function r(){const l=[];return s.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},s.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),x.value===!0&&t.noErrorIcon===!1&&l.push(w("error",[M(re,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(w("inner-loading-append",s.loading!==void 0?s.loading():[M(Re,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(w("inner-clearable-append",[M(re,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),s.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},s.append())),e.getInnerAppend!==void 0&&l.push(w("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):s.rawControl!==void 0?l.push(s.rawControl()):s.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},s.control(D.value))),A.value===!0&&l.push(M("div",{class:H.value},X(s.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(X(s.default))}function v(){let l,h;x.value===!0?p.value!==null?(l=[M("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=X(s.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=X(s.hint),h="q--slot-hint"));const L=t.counter===!0||s.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const k=M("div",{key:h,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?k:M(Ae,{name:"q-transition--field-message"},()=>k),L===!0?M("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():e.computedCounter.value):null])}function w(l,h){return h===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return Me(()=>{m=!0}),Se(()=>{m===!0&&t.autofocus===!0&&d.focus()}),oe(()=>{qe.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${me()}`),t.autofocus===!0&&d.focus()}),le(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:C,blur:E}),function(){const h=e.getControl===void 0&&s.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...h},[s.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},s.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},r()),$.value===!0?v():null]),s.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},s.after()):null])}}const ce={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},be=Object.keys(te);be.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+be.join("")+"])|(.)","g"),ve=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),Ze={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ue(e,t,u,s){let f,d,c,y,B,q;const x=I(null),p=I(_());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,N),j(()=>e.mask,o=>{if(o!==void 0)O(p.value,!0);else{const a=C(p.value);N(),e.modelValue!==a&&t("update:modelValue",a)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&O(p.value,!0)}),j(()=>e.unmaskedValue,()=>{x.value===!0&&O(p.value)});function _(){if(N(),x.value===!0){const o=z(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function $(o){if(o<f.length)return f.slice(-o);let a="",i=f;const r=i.indexOf(V);if(r>-1){for(let g=o-i.length;g>0;g--)a+=V;i=i.slice(0,r)+a+i.slice(r)}return i}function N(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&U(),x.value===!1){y=void 0,f="",d="";return}const o=ce[e.mask]===void 0?e.mask:ce[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(ve,"\\$&"),r=[],g=[],v=[];let w=e.reverseFillMask===!0,m="",l="";o.replace(Ke,(F,n,R,Z,K)=>{if(Z!==void 0){const T=te[Z];v.push(T),l=T.negate,w===!0&&(g.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),w=!1),g.push("(?:"+l+"+)?("+T.pattern+")?")}else if(R!==void 0)m="\\"+(R==="\\"?"":R),v.push(R),r.push("([^"+m+"]+)?"+m+"?");else{const T=n!==void 0?n:K;m=T==="\\"?"\\\\\\\\":T.replace(ve,"\\\\$&"),v.push(T),r.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),L=g.length-1,k=g.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+F):n===L?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+F));c=v,y=F=>{const n=h.exec(e.reverseFillMask===!0?F:F.slice(0,v.length+1));n!==null&&(F=n.slice(1).join(""));const R=[],Z=k.length;for(let K=0,T=F;K<Z;K++){const Y=k[K].exec(T);if(Y===null)break;T=T.slice(Y.shift().length),R.push(...Y)}return R.length!==0?R.join(""):F},f=v.map(F=>typeof F=="string"?F:V).join(""),d=f.split(V).join(a)}function O(o,a,i){const r=s.value,g=r.selectionEnd,v=r.value.length-g,w=C(o);a===!0&&N();const m=z(w),l=e.fillMask!==!1?E(m):m,h=p.value!==l;r.value!==l&&(r.value=l),h===!0&&(p.value=l),document.activeElement===r&&Q(()=>{if(l===d){const k=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(k,k,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const k=r.selectionEnd;let F=g-1;for(let n=B;n<=F&&n<k;n++)f[n]!==V&&F++;A.right(r,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const k=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;r.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const k=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));k===1&&g===1?r.setSelectionRange(k,k,"forward"):A.rightReverse(r,k)}else{const k=l.length-v;r.setSelectionRange(k,k,"backward")}else if(h===!0){const k=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);A.right(r,k)}else{const k=g-1;A.right(r,k)}});const L=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==L&&(e.modelValue!==null||L!=="")&&u(L,!0)}function P(o,a,i){const r=z(C(o.value));a=Math.max(0,f.indexOf(V),Math.min(r.length,a)),B=a,o.setSelectionRange(a,i,"forward")}const A={left(o,a){const i=f.slice(a-1).indexOf(V)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(f[r]===V){a=r,i===!0&&a++;break}if(r<0&&f[a]!==void 0&&f[a]!==V)return A.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const i=o.value.length;let r=Math.min(i,a+1);for(;r<=i;r++)if(f[r]===V){a=r;break}else f[r-1]===V&&(a=r);if(r>i&&f[a-1]!==void 0&&f[a-1]!==V)return A.left(o,i);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const i=$(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(i[r-1]===V){a=r;break}else if(i[r]===V&&(a=r,r===0))break;if(r<0&&i[a]!==void 0&&i[a]!==V)return A.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const i=o.value.length,r=$(i),g=r.slice(0,a+1).indexOf(V)===-1;let v=Math.min(i,a+1);for(;v<=i;v++)if(r[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>i&&r[a-1]!==void 0&&r[a-1]!==V)return A.leftReverse(o,i);o.setSelectionRange(a,a,"forward")}};function H(o){t("click",o),q=void 0}function D(o){if(t("keydown",o),Ve(o)===!0||o.altKey===!0)return;const a=s.value,i=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(q=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&q===void 0&&(q=a.selectionDirection==="forward"?i:r);const g=A[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),g(a,q===i?r:i),o.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(q,v),Math.max(q,v),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&i===r?(A.left(a,i),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&i===r&&(A.rightReverse(a,r),a.setSelectionRange(i,a.selectionEnd,"forward"))}function z(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const a=c;let i=0,r="";for(let g=0;g<a.length;g++){const v=o[i],w=a[g];if(typeof w=="string")r+=w,v===w&&i++;else if(v!==void 0&&w.regex.test(v))r+=w.transform!==void 0?w.transform(v):v,i++;else return r}return r}function S(o){const a=c,i=f.indexOf(V);let r=o.length-1,g="";for(let v=a.length-1;v>=0&&r>-1;v--){const w=a[v];let m=o[r];if(typeof w=="string")g=w+g,m===w&&r--;else if(m!==void 0&&w.regex.test(m))do g=(w.transform!==void 0?w.transform(m):m)+g,r--,m=o[r];while(i===v&&m!==void 0&&w.regex.test(m));else return g}return g}function C(o){return typeof o!="string"||y===void 0?typeof o=="number"?y(""+o):o:y(o)}function E(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:p,hasMask:x,moveCursorForPaste:P,updateMaskValue:O,onMaskedKeydown:D,onMaskedClick:H}}const He={name:String};function Qe(e){return b(()=>e.name||e.for)}function Ye(e,t){function u(){const s=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}const We=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Je=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Xe=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ge=/[a-z0-9_ -]$/i;function et(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Fe.is.firefox===!0?Ge.test(u.data)===!1:We.test(u.data)===!0||Je.test(u.data)===!0||Xe.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ot=_e({name:"QInput",inheritAttrs:!1,props:{...ze,...Ze,...He,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...De,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:s}=J(),{$q:f}=s,d={};let c=NaN,y,B,q=null,x;const p=I(null),U=Qe(e),{innerValue:_,hasMask:$,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:P,onMaskedClick:A}=Ue(e,t,m,p),H=Ye(e,!0),D=b(()=>ae(_.value)),z=et(v),S=Ne(),C=b(()=>e.type==="textarea"||e.autogrow===!0),E=b(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=b(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:L,onFocus:ue};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,$.value===!0&&(n.onKeydown=P,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=w),n}),a=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});j(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),j(()=>e.modelValue,n=>{if($.value===!0){if(B===!0&&(B=!1,String(n)===c))return;O(n)}else _.value!==n&&(_.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Q(l)}),j(()=>e.autogrow,n=>{n===!0?Q(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function i(){he(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function g(n){if($.value===!0&&e.reverseFillMask!==!0){const R=n.target;N(R,R.selectionStart,R.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const R=n.target.value;if(n.target.qComposing===!0){d.value=R;return}if($.value===!0)O(R,!1,n.inputType);else if(m(R),E.value===!0&&n.target===document.activeElement){const{selectionStart:Z,selectionEnd:K}=n.target;Z!==void 0&&K!==void 0&&Q(()=>{n.target===document.activeElement&&R.indexOf(n.target.value)===0&&n.target.setSelectionRange(Z,K)})}e.autogrow===!0&&l()}function w(n){t("animationend",n),l()}function m(n,R){x=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,R===!0&&(B=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(y=!0,d.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=n,q=setTimeout(x,e.debounce)):x()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const R=n.parentNode.style,{scrollTop:Z}=n,{overflowY:K,maxHeight:T}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),Y=K!==void 0&&K!=="scroll";Y===!0&&(n.style.overflowY="hidden"),R.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",Y===!0&&(n.style.overflowY=parseInt(T,10)<n.scrollHeight?"auto":"hidden"),R.marginBottom="",n.scrollTop=Z}})}function h(n){z(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",n.target.value)}function L(n){n!==void 0&&ue(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),y=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=_.value!==void 0?_.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}le(()=>{L()}),oe(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:_,fieldClass:b(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:D,floatingLabel:b(()=>D.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||ae(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:k()}:H.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const F=Le(S);return Object.assign(s,{focus:i,select:r,getNativeElement:()=>p.value}),ge(s,"nativeEl",()=>p.value),F}});export{ot as Q,De as a,Le as b,Ne as c,He as d,Qe as e,ae as f,et as g,je as h,Ye as i,ze as u};