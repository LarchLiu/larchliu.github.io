import{a as e,r as i,i as t,o,j as r,k as s,w as a,n,m as d}from"./index.f859e790.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.6e09a6e3.js";import"./index.5fe2d25f.js";import"./Trigger.f2297ccc.js";import"./omit.8e4daa4b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8256482.js";import"./CheckOutlined.64249cc4.js";import"./index.3206ef35.js";import"./index.223f4387.js";import"./colors.58bb4e5f.js";import"./index.19c5bd9b.js";import"./RightOutlined.dc245198.js";import"./index.bbe3572a.js";import"./types.a1d4d6a9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.c12f50b3.js";import"./index.229c446b.js";import"./UpOutlined.60c7015d.js";import"./LeftOutlined.91e396c5.js";import"./DownOutlined.18acc0c2.js";import"./index.dfc81a3b.js";import"./index.715eb602.js";import"./index.0a90c737.js";import"./zh_CN.0242bd16.js";import"./index.da35db89.js";import"./index.eab064a0.js";import"./CaretDownFilled.6e5eaf80.js";import"./CheckOutlined.974f2fae.js";import"./CloseOutlined.1c92dc76.js";import{s as p}from"./EditTableHeaderIcon.4b4aec3b.js";import"./index.b6acfeff.js";import"./index.9e1744f6.js";import"./LeftOutlined.fd1bf051.js";import"./functional.cb829950.js";import"./RightOutlined.edeec9eb.js";import"./useTimeout.e09907c5.js";import"./useDebounce.5e051d91.js";import"./useEventListener.94e64728.js";import"./useBreakpoint.4f9aed93.js";import"./resizeEvent.2d7ef97e.js";import"./domUtils.c925a98d.js";import"./tsxHelper.4bcbae4e.js";import"./propTypes.141bb193.js";import"./index.10fbf450.js";import"./index.e61e0402.js";import"./useWindowSizeFn.39765513.js";import"./uuid.b9543cb7.js";import"./download.25df16a5.js";import"./useForm.c590e7b5.js";import"./useFullScreen.3858ac43.js";import"./index.2b4e01a2.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.e7a29bee.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const j={class:"p-4"},u=n(" 开启loading ");c.render=function(e,i,p,m,l,c){const b=t("a-button"),f=t("BasicTable");return o(),r("div",j,[s(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:a((()=>[s(b,{type:"primary",onClick:e.toggleCanResize},{default:a((()=>[n(d(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleBorder},{default:a((()=>[n(d(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleLoading},{default:a((()=>[u])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleStriped},{default:a((()=>[n(d(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default c;