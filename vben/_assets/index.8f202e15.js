let e=document.createElement("style");e.innerHTML=".box[data-v-49e309b4]{width:150px;height:150px;margin-top:20px;background:pink}",document.head.appendChild(e);import{a,r as s,a3 as t,a4 as i,i as o,o as n,j as r,k as l,dg as d,a5 as c,a6 as p,a7 as u,n as m}from"./index.5b8fca6f.js";import"./xlsx.a48e520c.js";import{S as v}from"./index.49cf1809.js";import"./Trigger.683b639d.js";import"./omit.0b0dcf83.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.314965ae.js";import"./CheckOutlined.10d9b6b5.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ec270df2.js";import"./domUtils.c947d459.js";import"./tsxHelper.4d563b73.js";import{F as S,S as b,a as x,b as T,c as f,d as j,e as h,f as R,g as X,h as g,i as Y,E as k,s as y}from"./index.c9616c3e.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var _=a({components:{Select:v,FadeTransition:S,ScaleTransition:b,SlideYTransition:x,ScrollYTransition:T,SlideYReverseTransition:f,ScrollYReverseTransition:j,SlideXTransition:h,ScrollXTransition:R,SlideXReverseTransition:X,ScrollXReverseTransition:g,ScaleRotateTransition:Y,ExpandXTransition:k,ExpandTransition:y},setup(){const e=s("Fade"),a=s(!0);return{options:E,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const w=u("data-v-49e309b4");t("data-v-49e309b4");const F={class:"p-4"},C={class:"flex"},H=m(" start "),O={class:"box"};i();const U=w(((e,a,s,t,i,u)=>{const m=o("Select"),v=o("a-button");return n(),r("div",F,[l("div",C,[l(m,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),l(v,{type:"primary",class:"ml-4",onClick:e.start},{default:w((()=>[H])),_:1},8,["onClick"])]),(n(),r(d(`${e.value}Transition`),null,{default:w((()=>[c(l("div",O,null,512),[[p,e.show]])])),_:1}))])}));_.render=U,_.__scopeId="data-v-49e309b4";export default _;