let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,a3 as s,a4 as i,i as a,o as n,j as l,k as o,Z as r,ba as c,m,n as p,a7 as d}from"./index.8290e95c.js";import"./xlsx.a48e520c.js";import"./index.6018ea75.js";import"./Trigger.21b7e0de.js";import"./omit.c53ae31a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2860402c.js";import"./CheckOutlined.a9fe5385.js";import"./RightOutlined.2831d080.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.0008f2c8.js";import"./index.86c9298b.js";import"./LeftOutlined.4225b689.js";import"./index.da8be867.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.b89c92c3.js";import{C as f,S as u}from"./index.4093176c.js";import"./index.7a706ca4.js";import"./RightOutlined.3ee0916a.js";import"./useTimeout.ef74c264.js";import"./resizeEvent.9122a18f.js";import"./domUtils.29cba9bd.js";import"./tsxHelper.f3c0f353.js";import"./animation.59788497.js";import"./index.c2d3be4e.js";import"./propTypes.f1bf2952.js";import{n as j}from"./data.edc06832.js";import{h as x}from"./header.817c2c65.js";var b=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:f,ScrollContainer:u},setup:()=>({newList:j})});const h=d("data-v-1006fc50");s("data-v-1006fc50");const w=o("img",{src:x,class:"news-list__item-avatar"},null,-1),v={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},C={class:"news-list__item-light"},y=p("申请迭代 "),I={class:"news-list__item-light"},z=p("发布 "),S={class:"news-list__item-cnte p-2"},T={class:"news-list__item-cnte__title"},O=o("br",null,null,-1),k=o("br",null,null,-1),M=o("br",null,null,-1);i();const R=h(((t,e,s,i,d,_)=>{const f=a("ListItemMeta"),u=a("ListItem"),j=a("List"),x=a("ScrollContainer"),b=a("CollapseContainer");return n(),l(b,{class:"news-list",title:"动态",canExpan:!1},{default:h((()=>[o(x,null,{default:h((()=>[o(j,null,{default:h((()=>[(n(!0),l(r,null,c(t.newList,(t=>(n(),l(u,{key:t.id,class:"news-list__item"},{default:h((()=>[o(f,null,{avatar:h((()=>[w])),description:h((()=>[o("div",v,[o("div",g,m(t.sendTime),1),o("div",L,[o("span",C,m(t.sender)+" ",1),y,o("span",I," "+m(t.title)+" ",1),z]),o("div",S,[o("span",T,m(t.cnteId),1),O,p(" Status: "+m(t.cnteStas)+" ",1),k,p(" Repository: "+m(t.cnteRepo)+" ",1),M])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));b.render=R,b.__scopeId="data-v-1006fc50";export default b;