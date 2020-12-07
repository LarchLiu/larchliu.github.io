import{a as e,h as s,i as o,o as t,j as i,k as l,w as a,n as r}from"./index.8290e95c.js";import"./xlsx.a48e520c.js";import"./index.6018ea75.js";import"./Trigger.21b7e0de.js";import"./omit.c53ae31a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2860402c.js";import"./CheckOutlined.a9fe5385.js";import{B as n}from"./index.1a60a8f2.js";import"./index.110e07f7.js";import"./colors.27703892.js";import"./index.1ea6ff84.js";import"./RightOutlined.2831d080.js";import"./index.6745827e.js";import"./types.a7e5b605.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.0008f2c8.js";import"./index.86c9298b.js";import"./UpOutlined.021a5981.js";import"./DownOutlined.dd86a1a9.js";import"./index.7cb354f3.js";import"./index.c71633b9.js";import"./index.815b07eb.js";import{C as p}from"./index.4093176c.js";import"./CloseOutlined.c8c7c3ba.js";import"./index.d8860106.js";import"./index.7a706ca4.js";import"./LeftOutlined.4e273375.js";import"./functional.fc04de36.js";import"./RightOutlined.3ee0916a.js";import"./useTimeout.ef74c264.js";import"./useDebounce.d9de1217.js";import"./useEventListener.1e602b27.js";import"./useBreakpoint.858abbe0.js";import"./resizeEvent.9122a18f.js";import"./domUtils.29cba9bd.js";import"./tsxHelper.f3c0f353.js";import"./animation.59788497.js";import"./index.c2d3be4e.js";import"./propTypes.f1bf2952.js";import"./index.8473bbf3.js";import"./index.ffc8d047.js";import"./useWindowSizeFn.2e0ff8cd.js";import"./uuid.b9543cb7.js";import"./download.8798b92d.js";import{u as c}from"./useForm.775abd97.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var d=e({components:{BasicForm:n,CollapseContainer:p},setup(){const{createMessage:e}=s(),[o,{setProps:t}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const u={class:"m-4"},f={class:"mb-4"},b=r("更改labelWidth"),j=r("还原labelWidth"),P=r("更改Size"),C=r("还原Size"),k=r("禁用表单"),h=r("解除禁用"),x=r("紧凑表单"),_=r("还原正常间距"),g=r(" 操作按钮位置 "),v={class:"mb-4"},O=r(" 隐藏操作按钮 "),w=r(" 显示操作按钮 "),B=r(" 隐藏重置按钮 "),S=r(" 显示重置按钮 "),R=r(" 隐藏查询按钮 "),y=r(" 显示查询按钮 "),z=r(" 修改重置按钮 "),F=r(" 修改查询按钮 ");d.render=function(e,s,r,n,p,c){const m=o("a-button"),d=o("BasicForm"),W=o("CollapseContainer");return t(),i("div",u,[l("div",f,[l(m,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),l(m,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[j])),_:1}),l(m,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),l(m,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[C])),_:1}),l(m,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),l(m,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[h])),_:1}),l(m,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[x])),_:1}),l(m,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),l(m,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[g])),_:1})]),l("div",v,[l(m,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[O])),_:1}),l(m,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[w])),_:1}),l(m,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[B])),_:1}),l(m,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),l(m,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[R])),_:1}),l(m,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[y])),_:1}),l(m,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[z])),_:1}),l(m,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[F])),_:1})]),l(W,{title:"useForm示例"},{default:a((()=>[l(d,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default d;