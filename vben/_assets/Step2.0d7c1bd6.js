let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,a3 as i,a4 as s,i as o,o as a,j as r,k as n,a7 as d,n as p}from"./index.e1c9b90a.js";import"./xlsx.a48e520c.js";import"./index.b98f1f30.js";import"./Trigger.295c72bc.js";import"./omit.2a47a4ad.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.643328d4.js";import"./CheckOutlined.abd32184.js";import{B as m}from"./index.4346d0cd.js";import"./index.fa4cc95a.js";import"./colors.c38c5d86.js";import"./index.b57c3685.js";import"./RightOutlined.299be40b.js";import"./index.3c26f43b.js";import"./types.59c27293.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.80e9190f.js";import"./index.e9ed4b6b.js";import"./UpOutlined.b894ddea.js";import"./DownOutlined.6386bce8.js";import"./index.32efd4e9.js";import"./index.292f5c81.js";import"./index.8b498f8f.js";import"./CloseOutlined.dcc63d6d.js";import"./index.1b65ea6c.js";import"./index.3e80aa74.js";import"./LeftOutlined.ff22a990.js";import"./functional.4c4840e7.js";import"./RightOutlined.5cc83ac7.js";import"./useTimeout.8f664b31.js";import"./useDebounce.4b98f188.js";import"./useEventListener.bb1cfa76.js";import"./useBreakpoint.0a8068d5.js";import"./resizeEvent.b5aee182.js";import"./tsxHelper.48ee5a03.js";import"./propTypes.4482ed66.js";import"./index.03a2f262.js";import"./index.ab5949d8.js";import"./useWindowSizeFn.2bb1ba39.js";import"./uuid.b9543cb7.js";import"./download.4cc37ad8.js";import{u as c}from"./useForm.92d9d12b.js";import{step2Schemas as u}from"./data.65220c43.js";var l=e({components:{BasicForm:m},emits:["next","prev"],setup(t,{emit:e}){const[i,{validate:s,setProps:o}]=c({labelWidth:80,schemas:u,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:i}}});const j=d("data-v-3e6a7e30");i("data-v-3e6a7e30");const b={class:"step2"},f=p(" ant-design@alipay.com "),x=p(" test@example.com "),g=p(" Vben "),O=p(" 500元 ");s();const v=j(((t,e,i,s,d,p)=>{const m=o("a-alert"),c=o("a-descriptions-item"),u=o("a-descriptions"),l=o("a-divider"),v=o("BasicForm");return a(),r("div",b,[n(m,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),n(u,{column:1,class:"mt-5"},{default:j((()=>[n(c,{label:"付款账户"},{default:j((()=>[f])),_:1}),n(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),n(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),n(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),n(l),n(v,{onRegister:t.register},null,8,["onRegister"])])}));l.render=v,l.__scopeId="data-v-3e6a7e30";export default l;