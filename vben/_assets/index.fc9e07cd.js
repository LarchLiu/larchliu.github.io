import{a as e,bc as s,i as o,o as t,j as l,k as r,w as i,n as c}from"./index.5b8fca6f.js";import"./xlsx.a48e520c.js";import"./Trigger.683b639d.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ec270df2.js";import"./index.67a17dd1.js";import{C as a}from"./index.b902c8ff.js";import"./index.673b0fc4.js";import"./RightOutlined.ee897a38.js";import"./useTimeout.6ae13814.js";import"./resizeEvent.028e8d76.js";import"./domUtils.c947d459.js";import"./tsxHelper.4d563b73.js";import"./animation.5d7ff2fb.js";import"./index.c9616c3e.js";import"./propTypes.4631211a.js";var n=e({name:"TabsDemo",components:{CollapseContainer:a},setup(){const{closeAll:e,closeLeft:o,closeRight:t,closeOther:l,closeCurrent:r,refreshPage:i}=s();return{closeAll:e,closeLeft:o,closeRight:t,closeOther:l,closeCurrent:r,refreshPage:i}}});const m={class:"p-4"},p=c("关闭所有"),f=c("关闭左侧"),d=c("关闭右侧"),u=c("关闭其他"),C=c("关闭当前"),j=c("刷新当前");n.render=function(e,s,c,a,n,k){const b=o("a-input"),h=o("CollapseContainer"),g=o("a-button");return t(),l("div",m,[r(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[r(b,{placeholder:"请输入"})])),_:1}),r(h,{class:"mt-4 px-4",title:"标签页操作"},{default:i((()=>[r(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[p])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[d])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[u])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[j])),_:1},8,["onClick"])])),_:1})])};export default n;