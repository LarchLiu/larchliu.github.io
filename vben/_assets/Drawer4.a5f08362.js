import{a as e,i,o as t,j as s,w as o,k as r,q as a}from"./index.e1c9b90a.js";import"./xlsx.a48e520c.js";import"./index.b98f1f30.js";import"./Trigger.295c72bc.js";import"./omit.2a47a4ad.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.643328d4.js";import"./CheckOutlined.abd32184.js";import{B as n}from"./index.4346d0cd.js";import"./index.fa4cc95a.js";import"./colors.c38c5d86.js";import"./index.b57c3685.js";import"./RightOutlined.299be40b.js";import"./index.3c26f43b.js";import"./types.59c27293.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.80e9190f.js";import"./index.e9ed4b6b.js";import"./UpOutlined.b894ddea.js";import"./DownOutlined.6386bce8.js";import"./index.32efd4e9.js";import"./index.292f5c81.js";import"./index.8b498f8f.js";import{B as p,a as d}from"./index.2a5ff119.js";import"./CloseOutlined.dcc63d6d.js";import"./index.1b65ea6c.js";import"./index.3e80aa74.js";import"./LeftOutlined.ff22a990.js";import"./functional.4c4840e7.js";import"./RightOutlined.5cc83ac7.js";import"./useTimeout.8f664b31.js";import"./useDebounce.4b98f188.js";import"./useEventListener.bb1cfa76.js";import"./useBreakpoint.0a8068d5.js";import"./resizeEvent.b5aee182.js";import"./tsxHelper.48ee5a03.js";import"./propTypes.4482ed66.js";import"./index.03a2f262.js";import"./index.ab5949d8.js";import"./useWindowSizeFn.2bb1ba39.js";import"./uuid.b9543cb7.js";import"./download.4cc37ad8.js";import{u as m}from"./useForm.92d9d12b.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicDrawer:p,BasicForm:n},setup(){const[e,{setFieldsValue:i}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=d((e=>{i({field2:e.data,field1:e.info})}));return{register:t,schemas:c,registerForm:e}}});j.render=function(e,n,p,d,m,c){const j=i("BasicForm"),l=i("BasicDrawer");return t(),s(l,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(j,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default j;