import{a as e,u as i,i as t,o as s,j as r,w as o,k as a,q as d}from"./index.5b8fca6f.js";import"./xlsx.a48e520c.js";import"./Trigger.683b639d.js";import"./_baseSlice.1123a25b.js";import"./colors.2ddf91dd.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ec270df2.js";import"./index.67a17dd1.js";import"./index.45d2546e.js";import"./index.b902c8ff.js";import"./index.63af592b.js";import"./CloseOutlined.475fdade.js";import{B as p}from"./index.6cee2f87.js";import"./index.673b0fc4.js";import"./RightOutlined.ee897a38.js";import"./useTimeout.6ae13814.js";import"./useDebounce.0471ae6a.js";import"./resizeEvent.028e8d76.js";import"./domUtils.c947d459.js";import"./tsxHelper.4d563b73.js";import"./animation.5d7ff2fb.js";import"./index.c9616c3e.js";import"./propTypes.4631211a.js";import{D as n}from"./index.c36b11d5.js";import{u as m}from"./useDescription.33644809.js";import"./index.245d2b3c.js";import"./index.b0708075.js";import"./useWindowSizeFn.26af1d48.js";import{getDescSchema as c}from"./data.c62059c8.js";var j=e({name:"ErrorLogDetailModal",components:{BasicModal:p,Description:n},props:{info:{type:Object,default:null}},setup(){const{t:e}=i(),[t]=m({column:2,schema:c()});return{register:t,useI18n:i,t:e}}});j.render=function(e,i,p,n,m,c){const j=t("Description"),f=t("BasicModal");return s(),r(f,d({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:o((()=>[a(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;