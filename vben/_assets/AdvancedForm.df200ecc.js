import{a as e,i as o,o as i,j as t,k as s,w as l}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./index.6120a69f.js";import"./Trigger.b2c026b2.js";import"./omit.34ab8438.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.21158c32.js";import"./CheckOutlined.90b3bd15.js";import{B as n}from"./index.8a225e00.js";import"./index.5ccfbb51.js";import"./colors.97cac18c.js";import"./index.27035759.js";import"./RightOutlined.0e2e8b7f.js";import"./index.266c9d96.js";import"./types.1e35e349.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./index.2b33554d.js";import"./UpOutlined.51aaae5d.js";import"./DownOutlined.21ee165a.js";import"./index.62015d83.js";import"./index.c0b31f7f.js";import"./index.b155142d.js";import{C as p}from"./index.91d1a537.js";import"./CloseOutlined.479a84fb.js";import"./index.c238656a.js";import"./index.0098ee18.js";import"./LeftOutlined.f98369e1.js";import"./functional.0fd1f942.js";import"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./useDebounce.132f16d3.js";import"./useEventListener.acbae064.js";import"./useBreakpoint.0f2255d9.js";import"./resizeEvent.6c4ea7e2.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import"./animation.a3b0786d.js";import"./index.b4c95b5a.js";import"./propTypes.5d8f5cbe.js";import"./index.a299f0fe.js";import"./index.1ce18683.js";import"./useWindowSizeFn.e9087e97.js";import"./uuid.b9543cb7.js";import"./download.5fbb358f.js";import{u as a}from"./useForm.84d21633.js";var r=e({components:{BasicForm:n,CollapseContainer:p},setup(){const[e]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};r.render=function(e,n,p,a,r,d){const m=o("BasicForm"),f=o("CollapseContainer");return i(),t("div",c,[s(f,{title:"基础收缩示例"},{default:l((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(f,{title:"超过3行自动收起",class:"mt-4"},{default:l((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default r;