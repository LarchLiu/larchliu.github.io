import{a as e,i,o as t,j as s,k as o}from"./index.5b8fca6f.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.60a11eee.js";import"./index.49cf1809.js";import"./Trigger.683b639d.js";import"./omit.0b0dcf83.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.314965ae.js";import"./CheckOutlined.10d9b6b5.js";import"./index.a6f8a20d.js";import"./index.5baa557b.js";import"./colors.2ddf91dd.js";import"./index.4f955414.js";import"./RightOutlined.070bebe3.js";import"./index.a9925367.js";import"./types.17686283.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ec270df2.js";import"./index.67a17dd1.js";import"./UpOutlined.7e0fbe55.js";import"./LeftOutlined.2b4db0e4.js";import"./DownOutlined.13fa01c5.js";import"./index.45d2546e.js";import"./index.6d39a30b.js";import"./index.2807357c.js";import"./zh_CN.0242bd16.js";import"./index.2d4f6832.js";import"./index.573e3c62.js";import"./CaretDownFilled.17a8256d.js";import"./CheckOutlined.34f88c42.js";import"./CloseOutlined.475fdade.js";import{s as r}from"./EditTableHeaderIcon.ad575ba7.js";import"./index.6cee2f87.js";import"./index.673b0fc4.js";import"./LeftOutlined.3ef3866e.js";import"./functional.3e6c1e76.js";import"./RightOutlined.ee897a38.js";import"./useTimeout.6ae13814.js";import"./useDebounce.0471ae6a.js";import"./useEventListener.ac7cb7e8.js";import"./useBreakpoint.3cbd0aca.js";import"./resizeEvent.028e8d76.js";import"./domUtils.c947d459.js";import"./tsxHelper.4d563b73.js";import"./propTypes.4631211a.js";import"./index.245d2b3c.js";import"./index.b0708075.js";import"./useWindowSizeFn.26af1d48.js";import"./uuid.b9543cb7.js";import"./download.43bbf9d8.js";import"./useForm.4d8251ab.js";import"./useFullScreen.d3a44e2a.js";import"./index.b64a2baa.js";import{getBasicColumns as d,getTreeTableData as p}from"./tableData.a9c3727d.js";var a=e({components:{BasicTable:r},setup:()=>({columns:d(),data:p()})});const m={class:"p-4"};a.render=function(e,r,d,p,a,n){const j=i("BasicTable");return t(),s("div",m,[o(j,{rowSelection:{type:"checkbox"},isTreeTable:!0,title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:e.columns,dataSource:e.data,rowKey:"id",indentSize:20},null,8,["columns","dataSource"])])};export default a;