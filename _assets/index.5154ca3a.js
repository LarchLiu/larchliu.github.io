let e=document.createElement("style");e.innerHTML=".form-wrap[data-v-46649975]{padding:24px;background:#fff}",document.head.appendChild(e);import{a as o,h as t,a3 as s,a4 as i,i as r,o as n,j as p,k as a,a7 as l,n as d}from"./index.274f5b98.js";import"./xlsx.a48e520c.js";import"./index.1a8a8cab.js";import"./Trigger.bb369bb6.js";import"./omit.2bd5eae0.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.568682e9.js";import"./CheckOutlined.d6702244.js";import{B as m}from"./index.4fb68b2e.js";import"./index.1af41b53.js";import"./colors.c450d53a.js";import"./index.37f872e0.js";import"./RightOutlined.ee3cc200.js";import"./index.6852df8b.js";import"./types.82bf0cff.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b68b3071.js";import"./index.5895f3e1.js";import"./UpOutlined.3372b72b.js";import"./DownOutlined.49b30bd0.js";import"./index.df8df690.js";import"./index.3db133ce.js";import"./index.3c45d3f2.js";import"./CloseOutlined.8d0001bd.js";import"./index.37188031.js";import"./index.3511c911.js";import"./LeftOutlined.743bae50.js";import"./functional.5d4f0514.js";import"./RightOutlined.96a99d9b.js";import"./useTimeout.7df9e591.js";import"./useDebounce.3d086292.js";import"./useEventListener.90838c6f.js";import"./useBreakpoint.ffc2e44e.js";import"./resizeEvent.5c6262c5.js";import"./tsxHelper.5a75e637.js";import"./propTypes.3efdd02c.js";import"./index.130bce63.js";import"./index.5b25260a.js";import"./useWindowSizeFn.55e94158.js";import"./uuid.b9543cb7.js";import"./download.86998f09.js";import{u as c}from"./useForm.9e298691.js";const u=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var b=o({components:{BasicForm:m},setup(){const{createMessage:e}=t(),[o,{validate:s,setProps:i}]=c({labelCol:{span:7},wrapperCol:{span:10},schemas:u,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await s(),i({submitButtonOptions:{loading:!0}}),setTimeout((()=>{i({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(e){}}});return{register:o}}});const f=l("data-v-46649975");s("data-v-46649975");const j=d(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。 "),x={class:"m-5 form-wrap"};i();const g=f(((e,o,t,s,i,l)=>{const d=r("a-page-header"),m=r("BasicForm");return n(),p("div",null,[a(d,{title:"基础表单",ghost:!1},{default:f((()=>[j])),_:1}),a("div",x,[a(m,{onRegister:e.register},null,8,["onRegister"])])])}));b.render=g,b.__scopeId="data-v-46649975";export default b;