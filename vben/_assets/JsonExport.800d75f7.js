import{a as e,i,o as t,j as s,k as o,w as a,n as r}from"./index.ef96accc.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.44b2ad93.js";import"./index.f950ff72.js";import"./Trigger.27bd9767.js";import"./omit.8eb6bcc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.42cf7d36.js";import"./CheckOutlined.d47b14be.js";import"./index.da25d876.js";import"./index.5d20b8c2.js";import"./colors.b9c0493a.js";import"./index.3c1da735.js";import"./RightOutlined.6a0ddb16.js";import"./index.0f955b12.js";import"./types.fa72b1df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.468a5443.js";import"./index.4a75d293.js";import"./UpOutlined.d2623268.js";import"./LeftOutlined.ebf27ae4.js";import"./DownOutlined.8f3aa97e.js";import"./index.2404a83a.js";import"./index.58226668.js";import"./index.806b89ae.js";import"./zh_CN.0242bd16.js";import"./index.dea06830.js";import"./index.3e65348b.js";import"./CaretDownFilled.0c005e44.js";import"./CheckOutlined.5ae0f215.js";import"./CloseOutlined.b3a617ee.js";import{s as d}from"./EditTableHeaderIcon.f9d940e5.js";import"./index.816b8be4.js";import"./index.e6f13207.js";import"./LeftOutlined.0e6572e6.js";import"./functional.1a1cbc2d.js";import"./RightOutlined.1802c0cd.js";import"./useTimeout.c532beda.js";import"./useDebounce.0d4ee276.js";import"./useEventListener.e781ca5c.js";import"./useBreakpoint.2990a3c9.js";import"./resizeEvent.d75db749.js";import"./domUtils.542f8afe.js";import"./tsxHelper.138eeb19.js";import"./propTypes.d7f54775.js";import"./index.21e312d4.js";import"./index.cfd1b77d.js";import"./useWindowSizeFn.e7c57a34.js";import"./uuid.b9543cb7.js";import"./download.9b9bc0a2.js";import"./useForm.752560a4.js";import"./useFullScreen.cbfae147.js";import"./index.d14a57c0.js";import{E as m}from"./index.a8b39aa8.js";import{c as n,d as p,j}from"./data.7596f14f.js";var c=e({components:{BasicTable:d,ExportExcelModel:m},setup:()=>({defaultHeader:function(){j({data:p,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){j({data:p,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:p})});const l={class:"m-4"},u=r("导出：默认头部"),b=r("导出：自定义头部");c.render=function(e,r,d,m,n,p){const j=i("a-button"),c=i("BasicTable");return t(),s("div",l,[o(c,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:a((()=>[o(j,{onClick:e.defaultHeader},{default:a((()=>[u])),_:1},8,["onClick"]),o(j,{onClick:e.customHeader},{default:a((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default c;