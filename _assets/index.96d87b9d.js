import{a as e,i as s,o as a,j as t,k as i}from"./index.274f5b98.js";import"./xlsx.a48e520c.js";import"./Trigger.bb369bb6.js";import"./_baseSlice.1123a25b.js";import{A as r}from"./index.1af41b53.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b68b3071.js";import"./index.5895f3e1.js";import"./index.03aaafac.js";import"./index.eaf72ab0.js";import"./index.3511c911.js";import"./RightOutlined.96a99d9b.js";import"./useTimeout.7df9e591.js";import"./resizeEvent.5c6262c5.js";import"./domUtils.483282fc.js";import"./tsxHelper.5a75e637.js";import"./animation.7413df24.js";import"./index.fd15899d.js";import"./propTypes.3efdd02c.js";import{D as o}from"./index.6df72f41.js";import{u as m}from"./useDescription.5d81d8d6.js";const n={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},l=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,s)=>`${s.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=e({components:{Description:o,Alert:r},setup(){const[e]=m({title:"useDescription",data:n,schema:l}),[s]=m({title:"无边框",bordered:!1,data:n,schema:l});return{mockData:n,schema:l,register:e,register1:s}}});const c={class:"p-4"};p.render=function(e,r,o,m,n,l){const p=s("Description");return a(),t("div",c,[i(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),i(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])};export default p;