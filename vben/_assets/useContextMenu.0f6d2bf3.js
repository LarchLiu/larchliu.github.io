import{a as e,r as t,p as n,a9 as s,V as o,bz as l,f as i,Y as c,Z as r,d6 as a,k as d,d7 as u,aq as m}from"./index.8290e95c.js";import{M as p}from"./index.6745827e.js";import{D as f}from"./index.1f571d4f.js";import{p as h}from"./propTypes.f1bf2952.js";import{I as y}from"./index.8473bbf3.js";const v={width:h.number.def(156),customEvent:{type:Object,default:null},styles:h.style,showIcon:h.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},b=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%;",onClick:e.handler.bind(null,t)},e.showIcon&&t.icon&&c(y,{class:"mr-2",icon:t.icon}),c("span",null,t.label))};var x=e({name:"ContextMenu",props:v,setup(e){const a=t(null),d=t(!1),u=n((()=>{const{axis:t,items:n,styles:s,width:o}=e,{x:l,y:i}=t||{x:0,y:0},c=40*(n||[]).length,r=o,a=document.body;return{...s,width:`${o}px`,left:`${(a.clientWidth<l+r?l-r:l)+1}px`,top:`${(a.clientHeight<i+c?i-c:i)+1}px`}}));function m(e,t){const{handler:n,disabled:s}=e;s||(d.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function h(t){return t.map((t=>{const{disabled:n,label:s,children:o,divider:l=!1}=t,a=l?c(f,{key:`d-${s}`}):null;return o&&0!==o.length?i(d)?c(p.SubMenu,{key:s,disabled:n,popupClassName:"context-menu__popup"},{title:()=>c(b,{showIcon:e.showIcon,item:t,handler:m}),default:()=>h(o)}):null:c(r,null,c(p.Item,{disabled:n,class:"context-menu__item",key:s},(()=>[c(b,{showIcon:e.showIcon,item:t,handler:m})])),a)}))}return s((()=>{o((()=>d.value=!0))})),l((()=>{const e=i(a);e&&document.body.removeChild(e)})),()=>{const{items:t}=e;return i(d)?c(p,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:a,style:i(u)},(()=>h(t))):null}}});const w={domList:[],resolve:()=>{}},I=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),a)return new Promise((n=>{const s=document.body,o=document.createElement("div"),l={};e.styles&&(l.styles=e.styles),e.items&&(l.items=e.items),e.event&&(l.customEvent=t,l.axis={x:t.clientX,y:t.clientY});const i=d(x,l);u(i,o);const c=function(){w.resolve("")};w.domList.push(o);const r=function(){w.domList.forEach((e=>{try{e&&s.removeChild(e)}catch(e){}})),s.removeEventListener("click",c),s.removeEventListener("scroll",c)};w.resolve=function(...e){r(),n(e[0])},r(),s.appendChild(o),s.addEventListener("click",c),s.addEventListener("scroll",c)}))},k=function(){w&&(w.resolve(""),w.domList=[])};function E(e=!0){return m()&&e&&l((()=>{k()})),[I,k]}export{E as u};