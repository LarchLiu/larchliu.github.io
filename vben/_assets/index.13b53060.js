import{a as e,h as t,i as n,o as i,j as s,k as o,w as l,n as a}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./Trigger.b2c026b2.js";import"./_baseSlice.1123a25b.js";import"./index.266c9d96.js";import"./types.1e35e349.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./index.2b33554d.js";import"./index.37ca8e38.js";import{C as r}from"./index.91d1a537.js";import"./index.0098ee18.js";import"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./resizeEvent.6c4ea7e2.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import"./animation.a3b0786d.js";import"./index.b4c95b5a.js";import"./propTypes.5d8f5cbe.js";import"./index.a299f0fe.js";import{u as d}from"./useContextMenu.2212c778.js";var p=e({components:{CollapseContainer:r},setup(){const[e]=d(),{createMessage:n}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"ant-design:plus-outlined",handler:()=>{n.success("click new")}},{label:"Open",icon:"ant-design:folder-open-filled",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"ant-design:plus-outlined",children:[{label:"New1-1",icon:"ant-design:plus-outlined",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"ant-design:plus-outlined"}]}]})}}}});const c={class:"p-4"},m=a("Right Click on me"),u=a("Right Click on me");p.render=function(e,t,a,r,d,p){const j=n("a-button"),x=n("CollapseContainer");return i(),s("div",c,[o(x,{title:"Simple"},{default:l((()=>[o(j,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[m])),_:1},8,["onContextmenu"])])),_:1}),o(x,{title:"Multiple",class:"mt-4"},{default:l((()=>[o(j,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])};export default p;