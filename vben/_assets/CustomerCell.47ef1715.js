import{a as e,i as t,o as i,j as s,k as o,w as r,n as d,m}from"./index.f859e790.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.6e09a6e3.js";import"./index.5fe2d25f.js";import"./Trigger.f2297ccc.js";import"./omit.8e4daa4b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8256482.js";import"./CheckOutlined.64249cc4.js";import"./index.3206ef35.js";import"./index.223f4387.js";import"./colors.58bb4e5f.js";import"./index.19c5bd9b.js";import"./RightOutlined.dc245198.js";import"./index.bbe3572a.js";import"./types.a1d4d6a9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.c12f50b3.js";import"./index.229c446b.js";import"./UpOutlined.60c7015d.js";import"./LeftOutlined.91e396c5.js";import"./DownOutlined.18acc0c2.js";import{T as a}from"./index.dfc81a3b.js";import"./index.715eb602.js";import"./index.0a90c737.js";import"./zh_CN.0242bd16.js";import"./index.da35db89.js";import"./index.eab064a0.js";import"./CaretDownFilled.6e5eaf80.js";import"./CheckOutlined.974f2fae.js";import"./CloseOutlined.1c92dc76.js";import{s as n,b as p}from"./EditTableHeaderIcon.4b4aec3b.js";import"./index.b6acfeff.js";import"./index.9e1744f6.js";import"./LeftOutlined.fd1bf051.js";import"./functional.cb829950.js";import"./RightOutlined.edeec9eb.js";import"./useTimeout.e09907c5.js";import"./useDebounce.5e051d91.js";import"./useEventListener.94e64728.js";import"./useBreakpoint.4f9aed93.js";import"./resizeEvent.2d7ef97e.js";import"./domUtils.c925a98d.js";import"./tsxHelper.4bcbae4e.js";import"./propTypes.141bb193.js";import"./index.10fbf450.js";import"./index.e61e0402.js";import"./useWindowSizeFn.39765513.js";import"./uuid.b9543cb7.js";import"./download.25df16a5.js";import"./useForm.c590e7b5.js";import"./useFullScreen.3858ac43.js";import"./index.2b4e01a2.js";import{u as c}from"./useTable.05069d3a.js";import{d as j}from"./table.76453308.js";const l=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var b=e({components:{BasicTable:n,TableImg:p,Tag:a},setup(){const[e]=c({title:"自定义列内容",api:j,columns:l});return{registerTable:e}}});const u={class:"p-4"};b.render=function(e,a,n,p,c,j){const l=t("Tag"),b=t("TableImg"),f=t("BasicTable");return i(),s("div",u,[o(f,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+m(e.id),1)])),no:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(m(e.no),1)])),_:2},1024)])),img:r((()=>[o(b,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),_:1},8,["onRegister"])])};export default b;