import{k as e,q as t,X as a,a as s,p as o,i as r,o as n,j as l,a7 as p,d3 as i,f as c,d4 as f,aa as d,cj as u,s as b,l as m,v as g}from"./index.e1c9b90a.js";import{T as h}from"./index.e9ed4b6b.js";import{R as y}from"./RightOutlined.5cc83ac7.js";import{g as v}from"./tsxHelper.48ee5a03.js";import{p as x}from"./propTypes.4482ed66.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=function(s,o){var r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){O(e,t,a[t])}))}return e}({},s,o.attrs);return e(a,t(r,{icon:j}),null)};w.displayName="InfoCircleOutlined",w.inheritAttrs=!1;var _=s({name:"BasicArrow",components:{RightOutlined:y},props:{expand:x.bool,top:x.bool,bottom:x.bool},setup:e=>({getClass:o((()=>{const{expand:t,top:a,bottom:s}=e;return["base-arrow",{"base-arrow__active":t,top:a,bottom:s}]}))})});const S=p("data-v-2609b7f5")(((t,a,s,o,p,i)=>{const c=r("RightOutlined");return n(),l("span",{class:t.getClass},[e(c)],2)}));_.render=S,_.__scopeId="data-v-2609b7f5";var z=s({name:"BasicHelp",components:{Tooltip:h},props:{maxWidth:x.string.def("600px"),showIndex:x.bool,color:x.string.def("#ffffff"),fontSize:x.string.def("14px"),placement:x.string.def("right"),absolute:x.bool,text:{type:[Array,String]},position:{type:[Object],default:()=>({position:"absolute",left:0,bottom:0})}},setup(e,{slots:t}){const a=o((()=>({maxWidth:e.maxWidth}))),s=o((()=>({color:e.color,fontSize:e.fontSize}))),r=o((()=>e.absolute?e.position:{})),n=()=>{const t=e.text;return d(t)?i("p",t):u(t)?t.map(((t,a)=>i("p",{key:t},[e.showIndex?`${a+1}. `:"",t]))):null};return()=>i(h,{title:i("div",{style:c(s)},[n()]),overlayClassName:"base-help__wrap",autoAdjustOverflow:!0,overlayStyle:c(a),placement:e.placement,getPopupContainer:()=>f()},{default:()=>i("span",{class:"base-help",style:c(r)},v(t)||i(w))})}}),B=s({name:"BasicTitle",components:{BasicHelp:z},props:{helpMessage:{type:[String,Array],default:""},span:x.bool}});const C=p("data-v-416335e4")(((e,t,a,s,o,p)=>{const i=r("BasicHelp");return n(),l("span",{class:["base-title",{"show-span":e.span&&e.$slots.default}]},[b(e.$slots,"default"),e.helpMessage?(n(),l(i,{key:0,class:"base-title__help",text:e.helpMessage},null,8,["text"])):m("",!0)],2)}));B.render=C,B.__scopeId="data-v-416335e4";const A=g(_),I=g(z),M=g(B);export{M as B,I as a,A as b};