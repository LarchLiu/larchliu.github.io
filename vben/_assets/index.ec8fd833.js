let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as s,k as r,w as a}from"./index.8290e95c.js";import"./xlsx.a48e520c.js";import"./Trigger.21b7e0de.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2860402c.js";import{A as n}from"./index.110e07f7.js";import"./RightOutlined.2831d080.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.0008f2c8.js";import"./index.86c9298b.js";import"./index.89f3e1b1.js";import"./UpOutlined.021a5981.js";import"./LeftOutlined.4225b689.js";import"./index.df080ca8.js";import{L as p,a as m}from"./index.4093176c.js";import"./index.7a706ca4.js";import"./RightOutlined.3ee0916a.js";import"./useTimeout.ef74c264.js";import"./resizeEvent.9122a18f.js";import"./domUtils.29cba9bd.js";import"./tsxHelper.f3c0f353.js";import"./animation.59788497.js";import"./index.c2d3be4e.js";import"./propTypes.f1bf2952.js";import d from"./TargetContent.a9366019.js";var l=t({components:{LazyContainer:p,TargetContent:d,Skeleton:m,Alert:n},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},j={class:"lazy-base-demo-wrap"},f=r("h1",null,"向下滚动",-1),x={class:"lazy-base-demo-box"};l.render=function(e,t,n,p,m,d){const l=i("Alert"),u=i("TargetContent"),b=i("Skeleton"),g=i("LazyContainer");return o(),s("div",c,[r(l,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),r("div",j,[f,r("div",x,[r(g,null,{skeleton:a((()=>[r(b,{rows:10})])),default:a((()=>[r(u)])),_:1})])])])};export default l;