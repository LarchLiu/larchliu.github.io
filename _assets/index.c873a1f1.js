let e=document.createElement("style");e.innerHTML=".app-footer[data-v-18f55fea]{position:fixed;right:0;bottom:0;z-index:99;display:flex;width:100%;align-items:center;padding:0 24px;line-height:44px;background:#fff;border-top:1px solid #f0f0f0;box-shadow:0 -6px 16px -8px rgba(0,0,0,.08),0 -9px 28px 0 rgba(0,0,0,.05),0 -12px 48px 16px rgba(0,0,0,.03);transition:width .4s}.app-footer__left[data-v-18f55fea]{flex:1 1}.high-form[data-v-bfd3b41a]{padding-bottom:48px}",document.head.appendChild(e);import{a as t,a3 as o,a4 as i,o as s,j as r,k as a,s as n,a7 as l,v as p,r as d,i as c,n as f}from"./index.274f5b98.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.d9dd045a.js";import"./index.1a8a8cab.js";import"./Trigger.bb369bb6.js";import"./omit.2bd5eae0.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.568682e9.js";import"./CheckOutlined.d6702244.js";import{B as m}from"./index.4fb68b2e.js";import"./index.1af41b53.js";import"./colors.c450d53a.js";import"./index.37f872e0.js";import"./RightOutlined.ee3cc200.js";import"./index.6852df8b.js";import"./types.82bf0cff.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b68b3071.js";import"./index.5895f3e1.js";import"./UpOutlined.3372b72b.js";import"./LeftOutlined.9fc5f553.js";import"./DownOutlined.49b30bd0.js";import"./index.df8df690.js";import"./index.483dbe1b.js";import"./index.a1c8c56b.js";import"./zh_CN.0242bd16.js";import"./index.3db133ce.js";import"./index.3c45d3f2.js";import"./CaretDownFilled.cc797836.js";import"./CheckOutlined.41ecbbed.js";import"./CloseOutlined.8d0001bd.js";import"./EditTableHeaderIcon.4fa402b3.js";import"./index.37188031.js";import"./index.3511c911.js";import"./LeftOutlined.743bae50.js";import"./functional.5d4f0514.js";import"./RightOutlined.96a99d9b.js";import"./useTimeout.7df9e591.js";import"./useDebounce.3d086292.js";import"./useEventListener.90838c6f.js";import"./useBreakpoint.ffc2e44e.js";import"./resizeEvent.5c6262c5.js";import"./domUtils.483282fc.js";import"./tsxHelper.5a75e637.js";import"./propTypes.3efdd02c.js";import"./index.130bce63.js";import"./index.5b25260a.js";import"./useWindowSizeFn.55e94158.js";import"./uuid.b9543cb7.js";import"./download.86998f09.js";import{u as b}from"./useForm.9e298691.js";import"./useFullScreen.d28d90f1.js";import"./index.925056b5.js";import"./useTable.428c3cf4.js";import u from"./PersonTable.29edce33.js";import{u as j}from"./useMenuSetting.6ace4847.js";var g=t({name:"PageFooter",setup(){const{getCalcContentWidth:e}=j();return{getCalcContentWidth:e}}});const x=l("data-v-18f55fea");o("data-v-18f55fea");const h={class:"app-footer__left"},v={class:"app-footer__right"};i();const P=x(((e,t,o,i,l,p)=>(s(),r("div",{class:"app-footer",style:{width:e.getCalcContentWidth}},[a("div",h,[n(e.$slots,"left")]),a("div",v,[n(e.$slots,"right")])],4))));g.render=P,g.__scopeId="data-v-18f55fea";const _=p(g),C=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],w=[{label:"私密",value:"1"},{label:"公开",value:"2"}],y=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:C},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:C},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:w},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:C},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:C},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:w},required:!0,colProps:{offset:2}}];var q=t({components:{BasicForm:m,PersonTable:u,PageFooter:_},setup(){const e=d(null),[t,{validate:o}]=b({baseColProps:{span:6},schemas:y,showActionButtonGroup:!1}),[i,{validate:s}]=b({baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[t,i]=await Promise.all([o(),s()])}catch(e){}},tableRef:e}}});const k=l("data-v-bfd3b41a");o("data-v-bfd3b41a");const O={class:"high-form"},S=f(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),F={class:"m-5"},R=f("提交");i();const B=k(((e,t,o,i,n,l)=>{const p=c("a-page-header"),d=c("BasicForm"),f=c("a-card"),m=c("PersonTable"),b=c("a-button"),u=c("PageFooter");return s(),r("div",O,[a(p,{title:"高级表单",ghost:!1},{default:k((()=>[S])),_:1}),a("div",F,[a(f,{title:"仓库管理",bordered:!1},{default:k((()=>[a(d,{onRegister:e.register,layout:"vertical"},null,8,["onRegister"])])),_:1}),a(f,{title:"任务管理",bordered:!1,class:"mt-5"},{default:k((()=>[a(d,{onRegister:e.registerTask,layout:"vertical"},null,8,["onRegister"])])),_:1}),a(f,{title:"成员管理",bordered:!1,class:"mt-5"},{default:k((()=>[a(m,{ref:"tableRef"},null,512)])),_:1})]),a(u,null,{right:k((()=>[a(b,{type:"primary",onClick:e.submitAll},{default:k((()=>[R])),_:1},8,["onClick"])])),_:1})])}));q.render=B,q.__scopeId="data-v-bfd3b41a";export default q;