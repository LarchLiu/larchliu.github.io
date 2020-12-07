import{u as e,a as t,b as s,r as i,a8 as n,a0 as a,p as o,f as r,bB as c,Y as u,aq as l,v as d}from"./index.4576f530.js";import{C as m}from"./CheckOutlined.ee22683e.js";import{D as g}from"./DoubleRightOutlined.06510a22.js";import{u as p}from"./useTimeout.ea9749db.js";import{u as f}from"./useEventListener.acbae064.js";import{h}from"./domUtils.8637ad99.js";import{g as y}from"./tsxHelper.de3d63ca.js";const{t:v}=e(),x={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:v("component.verify.dragText")},successText:{type:[String],default:v("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},w={...x,src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}};var T=t({name:"BaseDargVerify",props:x,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:l}){const d=s({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),h=i(null),v=i(null),x=i(null),w=i(null);n((()=>d.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=d;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),a((()=>{d.isPassing=!!e.value}));const T=o((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return{left:0,width:i,height:i,...s}})),S=o((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,a=parseInt(t);return{width:`${parseInt(s)}px`,height:`${a}px`,lineHeight:`${a}px`,borderRadius:i?a/2+"px":0,...n}})),b=o((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return{height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0,...i}})),D=o((()=>{const{height:t,width:s,contentStyle:i}=e;return{height:`${parseInt(t)}px`,width:`${parseInt(s)}px`,...i}}));function M(e){return e.pageX||e.touches[0].pageX}function P(e){if(d.isPassing)return;const s=r(w);s&&(t("start",e),d.moveDistance=M(e)-parseInt(s.style.left.replace("px",""),10),d.startTime=(new Date).getTime(),d.isMoving=!0)}function $(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function I(s){const{isMoving:i,moveDistance:n}=d;if(i){const i=r(w),a=r(v);if(!i||!a)return;const{offset:o,widthNum:c,actionWidth:u}=$(i),l=M(s)-n;t("move",{event:s,moveDistance:n,moveX:l}),l>0&&l<=o?(i.style.left=`${l}px`,a.style.width=`${l+u/2}px`):l>o&&(i.style.left=c-u+"px",a.style.width=c-u/2+"px",e.isSlot||R())}}function j(s){const{isMoving:i,isPassing:n,moveDistance:a}=d;if(i&&!n){t("end",s);const i=r(w),n=r(v);if(!i||!n)return;const o=M(s)-a,{offset:c,widthNum:u,actionWidth:l}=$(i);o<c?e.isSlot?setTimeout((()=>{if(e.value){const e=r(x);e&&(e.style.width=`${parseInt(n.style.width)}px`)}else O()}),0):O():(i.style.left=u-l+"px",n.style.width=u-l/2+"px",R()),d.isMoving=!1}}function R(){e.isSlot?O():(d.endTime=(new Date).getTime(),d.isPassing=!0,d.isMoving=!1)}function O(){d.isMoving=!1,d.isPassing=!1,d.moveDistance=0,d.toLeft=!1,d.startTime=0,d.endTime=0;const e=r(w),t=r(v),s=r(x);e&&t&&s&&(d.toLeft=!0,p((()=>{d.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=r(D).width)}return f({el:document,name:"mouseup",listener:()=>{d.isMoving&&O()}}),c((e=>{e.resume=O})),()=>u("div",{class:"darg-verify",ref:h,style:r(S),onMousemove:I,onTouchmove:I,onMouseleave:j,onMouseup:j,onTouchend:j},(()=>{const e=["darg-verify-bar"];return d.toLeft&&e.push("to-left"),u("div",{class:e,ref:v,style:r(b)})})(),(()=>{const t=["darg-verify-content"],{isPassing:s}=d,{text:i,successText:n}=e;return s&&t.push("success"),u("div",{class:t,ref:x,style:r(D)},y(l,"text",s)||(s?n:i))})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:s}=d;return t&&e.push("to-left"),u("div",{class:e,onMousedown:P,onTouchstart:P,style:r(T),ref:w},y(l,"actionIcon",s)||u(s?m:g,{class:"darg-verify-action__icon"}))})())}});const S=d(t({name:"ImgRotateDargVerify",inheritAttrs:!1,props:w,emits:["success","change","update:value"],setup(t,{emit:a,attrs:c}){const d=i(null),m=s({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:g}=e();n((()=>m.isPassing),(e=>{if(e){const{startTime:t,endTime:s}=m;a("success",{isPassing:e,time:((s-t)/1e3).toFixed(1)}),a("change",e),a("update:value",e)}}));const f=o((()=>{const{imgWrapStyle:e,imgWidth:s}=t;return{width:`${s}px`,height:`${s}px`,...e}})),y=o((()=>{const{minDegree:e,maxDegree:s}=t;return e===s?Math.floor(1+1*Math.random())/10+1:1}));function v(){m.startTime=(new Date).getTime()}function x(e){m.draged=!0;const{imgWidth:s,height:i,maxDegree:n}=t,{moveX:a}=e,o=Math.ceil(a/(s-parseInt(i))*n*r(y));m.currentRotate=o,m.imgStyle=h("transform",`rotateZ(${m.randomRotate-o}deg)`)}function w(){const{minDegree:e,maxDegree:s}=t,i=Math.floor(e+Math.random()*(s-e));m.randomRotate=i,m.imgStyle=h("transform",`rotateZ(${i}deg)`)}function S(){const{randomRotate:e,currentRotate:s}=m,{diffDegree:i}=t;Math.abs(e-s)>=(i||20)?(m.imgStyle=h("transform",`rotateZ(${e}deg)`),m.toOrigin=!0,p((()=>{m.toOrigin=!1,m.showTip=!0}),300)):(m.isPassing=!0,m.endTime=(new Date).getTime()),m.showTip=!0}function b(){m.showTip=!1;const e=r(d);e&&(m.isPassing=!1,e.$.resume(),w())}const D=l();return D&&(D.resume=b),()=>{const{src:e}=t,{toOrigin:s,isPassing:i,startTime:n,endTime:a}=m,o=[];s&&o.push("to-origin");const l=(a-n)/1e3;return u("div",{class:"ir-dv"},u("div",{class:"ir-dv-img__wrap",style:r(f)},u("img",{src:e,onLoad:w,width:parseInt(t.width),class:o,style:m.imgStyle,onClick:()=>{b()}}),m.showTip&&u("span",{class:["ir-dv-img__tip",m.isPassing?"success":"error"]},m.isPassing?g("component.verify.time",{time:l.toFixed(1)}):g("component.verify.error")),!m.showTip&&!m.draged&&u("span",{class:["ir-dv-img__tip","normal"]},"t('redoTip')")),u(T,{class:"ir-dv-drag__bar",onMove:x,onEnd:S,onStart:v,ref:d,...{...c,...t},value:i,isSlot:!0}))}}})),b=d(T);export{b as B,S as R};