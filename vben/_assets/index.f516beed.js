import{a as e,bc as s,i as o,o as t,j as l,k as r,w as i,n as a}from"./index.e1c9b90a.js";import"./xlsx.a48e520c.js";import"./Trigger.295c72bc.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.80e9190f.js";import"./index.e9ed4b6b.js";import{C as c}from"./index.f6236559.js";import"./index.3e80aa74.js";import"./RightOutlined.5cc83ac7.js";import"./useTimeout.8f664b31.js";import"./resizeEvent.b5aee182.js";import"./domUtils.26818948.js";import"./tsxHelper.48ee5a03.js";import"./animation.86b1a427.js";import"./index.74fbeb6f.js";import"./propTypes.4482ed66.js";var n=e({name:"TabsDemo",components:{CollapseContainer:c},setup(){const{closeAll:e,closeLeft:o,closeRight:t,closeOther:l,closeCurrent:r,refreshPage:i}=s();return{closeAll:e,closeLeft:o,closeRight:t,closeOther:l,closeCurrent:r,refreshPage:i}}});const m={class:"p-4"},p=a("关闭所有"),f=a("关闭左侧"),u=a("关闭右侧"),d=a("关闭其他"),C=a("关闭当前"),j=a("刷新当前");n.render=function(e,s,a,c,n,b){const k=o("a-input"),h=o("CollapseContainer"),g=o("a-button");return t(),l("div",m,[r(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[r(k,{placeholder:"请输入"})])),_:1}),r(h,{class:"mt-4 px-4",title:"标签页操作"},{default:i((()=>[r(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[p])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[d])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[j])),_:1},8,["onClick"])])),_:1})])};export default n;