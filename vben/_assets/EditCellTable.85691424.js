import{a as e,i as t,o as i,j as s,k as o,w as r}from"./index.ef96accc.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.44b2ad93.js";import"./index.f950ff72.js";import"./Trigger.27bd9767.js";import"./omit.8eb6bcc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.42cf7d36.js";import"./CheckOutlined.d47b14be.js";import"./index.da25d876.js";import"./index.5d20b8c2.js";import"./colors.b9c0493a.js";import"./index.3c1da735.js";import"./RightOutlined.6a0ddb16.js";import"./index.0f955b12.js";import"./types.fa72b1df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.468a5443.js";import"./index.4a75d293.js";import"./UpOutlined.d2623268.js";import"./LeftOutlined.ebf27ae4.js";import"./DownOutlined.8f3aa97e.js";import"./index.2404a83a.js";import"./index.58226668.js";import"./index.806b89ae.js";import"./zh_CN.0242bd16.js";import"./index.dea06830.js";import"./index.3e65348b.js";import"./CaretDownFilled.0c005e44.js";import"./CheckOutlined.5ae0f215.js";import"./CloseOutlined.b3a617ee.js";import{s as d,a,c as m}from"./EditTableHeaderIcon.f9d940e5.js";import"./index.816b8be4.js";import"./index.e6f13207.js";import"./LeftOutlined.0e6572e6.js";import"./functional.1a1cbc2d.js";import"./RightOutlined.1802c0cd.js";import"./useTimeout.c532beda.js";import"./useDebounce.0d4ee276.js";import"./useEventListener.e781ca5c.js";import"./useBreakpoint.2990a3c9.js";import"./resizeEvent.d75db749.js";import"./domUtils.542f8afe.js";import"./tsxHelper.138eeb19.js";import"./propTypes.d7f54775.js";import"./index.21e312d4.js";import"./index.cfd1b77d.js";import"./useWindowSizeFn.e7c57a34.js";import"./uuid.b9543cb7.js";import"./download.9b9bc0a2.js";import"./useForm.752560a4.js";import"./useFullScreen.cbfae147.js";import"./index.d14a57c0.js";import{u as n}from"./useTable.58c23dac.js";import{d as p}from"./table.8c3eecd4.js";const c=[{dataIndex:"id",slots:{title:"customId"},customRender:m({dataIndex:"id"})},{dataIndex:"name",slots:{title:"customName"},customRender:m({dataIndex:"name"})},{title:"地址",dataIndex:"address",sorter:!0}];var j=e({components:{BasicTable:d,EditTableHeaderIcon:a},setup(){const[e]=n({title:"可编辑单元格示例",api:p,columns:c,showIndexColumn:!1});return{registerTable:e}}});const l={class:"p-4"};j.render=function(e,d,a,m,n,p){const c=t("EditTableHeaderIcon"),j=t("BasicTable");return i(),s("div",l,[o(j,{onRegister:e.registerTable},{customId:r((()=>[o(c,{title:"Id"})])),customName:r((()=>[o(c,{title:"姓名"})])),_:1},8,["onRegister"])])};export default j;