let e=document.createElement("style");e.innerHTML=".iframe-page .ant-spin-nested-loading[data-v-5c45baaa]{position:relative;height:100%}.iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-5c45baaa]{width:100%;height:100%;padding:10px}.iframe-page__mask[data-v-5c45baaa]{position:absolute;top:0;left:0;width:100%;height:100%}.iframe-page__main[data-v-5c45baaa]{width:100%;height:100%;overflow:hidden;background:#fff;border:0;box-sizing:border-box}",document.head.appendChild(e);import{a,bA as t,r as i,a9 as n,p as s,V as r,f as o,i as d,o as p,j as l,k as c,a7 as m}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./useDebounce.132f16d3.js";import{g as f}from"./domUtils.8637ad99.js";import{u as g}from"./useWindowSizeFn.e9087e97.js";var u=a({name:"IFrame",components:{Spin:t},props:{frameSrc:{type:String}},setup(){const e=i(!1),a=i(50),t=i(window.innerHeight),d=i(null);function p(){const e=o(d);if(!e)return;let{top:i}=f(e);i+=20,a.value=i,t.value=window.innerHeight-i;const n=document.documentElement.clientHeight-i;e.style.height=`${n}px`}function l(){e.value=!1,p()}return g(p,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=o(d);e&&(e.attachEvent?e.attachEvent("onload",(()=>{l()})):e.onload=()=>{l()})}))})),{getWrapStyle:s((()=>({height:`${o(t)}px`}))),loading:e,frameRef:d}}});const h=m("data-v-5c45baaa"),b=h(((e,a,t,i,n,s)=>{const r=d("Spin");return p(),l("div",{class:"iframe-page",style:e.getWrapStyle},[c(r,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[c("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));u.render=b,u.__scopeId="data-v-5c45baaa";export default u;