let e=document.createElement("style");e.innerHTML=".bg-gray-700[data-v-d7d444d6]{background:#4a5568}",document.head.appendChild(e);import{a as s,r as c,h as l,a3 as t,a4 as a,i as n,o as r,j as i,k as o,a7 as d,n as u}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import{B as m}from"./BugOutlined.e543242f.js";import"./CheckOutlined.ee22683e.js";import"./DoubleRightOutlined.06510a22.js";import{R as f}from"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./useDebounce.132f16d3.js";import"./useEventListener.acbae064.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import{B as p}from"./index.e38f47ff.js";var g=s({components:{BasicDragVerify:p,BugOutlined:m,RightOutlined:f},setup(){const{createMessage:e}=l();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:c(null),el2:c(null),el3:c(null),el4:c(null),el5:c(null),handleBtnClick:function(e){e&&e.$.resume()}}}});const y=d("data-v-d7d444d6");t("data-v-d7d444d6");const j={class:"p-10"},h={class:"flex justify-center p-4 items-center bg-gray-700"},k=u("还原"),b={class:"flex justify-center p-4 items-center bg-gray-700"},S=u("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},x=u("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=u("还原"),_={class:"flex justify-center p-4 items-center bg-gray-700"},O={key:0},R=u(" 成功 "),D={key:1},T=u(" 拖动 "),E=u("还原");a();const H=y(((e,s,c,l,t,a)=>{const d=n("BasicDragVerify"),u=n("a-button"),m=n("BugOutlined"),f=n("RightOutlined");return r(),i("div",j,[o("div",h,[o(d,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),o(u,{color:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:y((()=>[k])),_:1})]),o("div",b,[o(d,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),o(u,{color:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:y((()=>[S])),_:1})]),o("div",v,[o(d,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),o(u,{color:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:y((()=>[x])),_:1})]),o("div",B,[o(d,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:y((e=>[e?(r(),i(m,{key:0})):(r(),i(f,{key:1}))])),_:1},8,["onSuccess"]),o(u,{color:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:y((()=>[C])),_:1})]),o("div",_,[o(d,{ref:"el5",onSuccess:e.handleSuccess},{text:y((e=>[e?(r(),i("div",O,[o(m),R])):(r(),i("div",D,[T,o(f)]))])),_:1},8,["onSuccess"]),o(u,{color:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:y((()=>[E])),_:1})])])}));g.render=H,g.__scopeId="data-v-d7d444d6";export default g;