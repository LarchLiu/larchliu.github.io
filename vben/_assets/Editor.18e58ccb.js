import{a as e,d3 as i,h as t,i as s,o,j as r,k as a,w as d}from"./index.ef96accc.js";import"./xlsx.a48e520c.js";import"./index.f950ff72.js";import"./Trigger.27bd9767.js";import"./omit.8eb6bcc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.42cf7d36.js";import"./CheckOutlined.d47b14be.js";import{B as n}from"./index.da25d876.js";import"./index.5d20b8c2.js";import"./colors.b9c0493a.js";import"./index.3c1da735.js";import"./RightOutlined.6a0ddb16.js";import"./index.0f955b12.js";import"./types.fa72b1df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.468a5443.js";import"./index.4a75d293.js";import"./UpOutlined.d2623268.js";import"./DownOutlined.8f3aa97e.js";import"./index.2404a83a.js";import"./index.dea06830.js";import"./index.3e65348b.js";import{C as m}from"./index.b3ec691d.js";import"./CloseOutlined.b3a617ee.js";import"./index.816b8be4.js";import"./index.e6f13207.js";import"./LeftOutlined.0e6572e6.js";import"./functional.1a1cbc2d.js";import"./RightOutlined.1802c0cd.js";import"./useTimeout.c532beda.js";import"./useDebounce.0d4ee276.js";import"./useEventListener.e781ca5c.js";import"./useBreakpoint.2990a3c9.js";import"./resizeEvent.d75db749.js";import"./domUtils.542f8afe.js";import"./tsxHelper.138eeb19.js";import"./animation.d5ae8557.js";import"./index.b450f8e8.js";import"./propTypes.d7f54775.js";import"./index.21e312d4.js";import"./index.cfd1b77d.js";import"./useWindowSizeFn.e7c57a34.js";import"./uuid.b9543cb7.js";import"./download.9b9bc0a2.js";import{T as p}from"./index.1a37dd2e.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>i(p,{value:e[t],onChange:i=>{e[t]=i}})}];var c=e({components:{BasicForm:n,CollapseContainer:m},setup(){const{createMessage:e}=t();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const j={class:"m-4"};c.render=function(e,i,t,n,m,p){const l=s("BasicForm"),c=s("CollapseContainer");return o(),r("div",j,[a(c,{title:"富文本表单"},{default:d((()=>[a(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;