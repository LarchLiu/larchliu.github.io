import{a as e,u as i,i as t,o as s,j as r,w as o,k as a,q as p}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./Trigger.b2c026b2.js";import"./_baseSlice.1123a25b.js";import"./colors.97cac18c.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./index.2b33554d.js";import"./index.62015d83.js";import"./index.91d1a537.js";import"./index.decf49b1.js";import"./CloseOutlined.479a84fb.js";import{B as d}from"./index.c238656a.js";import"./index.0098ee18.js";import"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./useDebounce.132f16d3.js";import"./resizeEvent.6c4ea7e2.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import"./animation.a3b0786d.js";import"./index.b4c95b5a.js";import"./propTypes.5d8f5cbe.js";import{D as n}from"./index.d2d15d9a.js";import{u as m}from"./useDescription.0ce895bd.js";import"./index.a299f0fe.js";import"./index.1ce18683.js";import"./useWindowSizeFn.e9087e97.js";import{getDescSchema as c}from"./data.36f73de3.js";var j=e({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:n},props:{info:{type:Object,default:null}},setup(){const{t:e}=i(),[t]=m({column:2,schema:c()});return{register:t,useI18n:i,t:e}}});j.render=function(e,i,d,n,m,c){const j=t("Description"),l=t("BasicModal");return s(),r(l,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:o((()=>[a(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;