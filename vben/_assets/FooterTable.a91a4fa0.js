import{a as e,i,o as t,j as s,k as o}from"./index.8290e95c.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.0db007a7.js";import"./index.6018ea75.js";import"./Trigger.21b7e0de.js";import"./omit.c53ae31a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2860402c.js";import"./CheckOutlined.a9fe5385.js";import"./index.1a60a8f2.js";import"./index.110e07f7.js";import"./colors.27703892.js";import"./index.1ea6ff84.js";import"./RightOutlined.2831d080.js";import"./index.6745827e.js";import"./types.a7e5b605.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.0008f2c8.js";import"./index.86c9298b.js";import"./UpOutlined.021a5981.js";import"./LeftOutlined.4225b689.js";import"./DownOutlined.dd86a1a9.js";import"./index.7cb354f3.js";import"./index.1f571d4f.js";import"./index.da8be867.js";import"./zh_CN.0242bd16.js";import"./index.c71633b9.js";import"./index.815b07eb.js";import"./CaretDownFilled.a6651e73.js";import"./CheckOutlined.c0b52e3c.js";import"./CloseOutlined.c8c7c3ba.js";import{s as r}from"./EditTableHeaderIcon.ca528dc3.js";import"./index.d8860106.js";import"./index.7a706ca4.js";import"./LeftOutlined.4e273375.js";import"./functional.fc04de36.js";import"./RightOutlined.3ee0916a.js";import"./useTimeout.ef74c264.js";import"./useDebounce.d9de1217.js";import"./useEventListener.1e602b27.js";import"./useBreakpoint.858abbe0.js";import"./resizeEvent.9122a18f.js";import"./domUtils.29cba9bd.js";import"./tsxHelper.f3c0f353.js";import"./propTypes.f1bf2952.js";import"./index.8473bbf3.js";import"./index.ffc8d047.js";import"./useWindowSizeFn.2e0ff8cd.js";import"./uuid.b9543cb7.js";import"./download.8798b92d.js";import"./useForm.775abd97.js";import"./useFullScreen.5351add7.js";import"./index.b2c127d4.js";import{u as m}from"./useTable.468ed1b2.js";import{getBasicColumns as n}from"./tableData.b98b2cc8.js";import{d as p}from"./table.05b6028e.js";var d=e({components:{BasicTable:r},setup(){const[e]=m({title:"表尾行合计示例",api:p,rowSelection:{type:"checkbox"},columns:n(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const a={class:"p-4"};d.render=function(e,r,m,n,p,d){const j=i("BasicTable");return t(),s("div",a,[o(j,{onRegister:e.registerTable},null,8,["onRegister"])])};export default d;