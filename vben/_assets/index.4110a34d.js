import{a as e,r as t,f as s,o as a,j as n,a5 as l,a6 as o,k as r,s as c,u as i,i as u,w as m,q as f,v as d}from"./index.4576f530.js";import{x as p}from"./xlsx.a48e520c.js";import{B as x}from"./index.8a225e00.js";import{B as h,u as y}from"./index.c238656a.js";import{u as k}from"./useForm.84d21633.js";var v=e({name:"ImportExcel",emits:["success"],setup(e,{emit:a}){const n=t(null),l=t(!1);function o(e){if(!e||!e["!ref"])return[];const t=[],s=p.utils.decode_range(e["!ref"]),a=s.s.r;for(let n=s.s.c;n<=s.e.c;++n){const s=e[p.utils.encode_cell({c:n,r:a})];let l="UNKNOWN "+n;s&&s.t&&(l=p.utils.format_cell(s)),t.push(l)}return t}function r(e){return l.value=!0,new Promise(((t,s)=>{const n=new FileReader;n.onload=async e=>{try{const s=e.target&&e.target.result,n=function(e){const t=[];for(const s of e.SheetNames){const a=e.Sheets[s],n=o(a),l=p.utils.sheet_to_json(a);t.push({header:n,results:l,meta:{sheetName:s}})}return t}(p.read(s,{type:"array"}));a("success",n),t("")}catch(e){s(e)}finally{l.value=!1}},n.readAsArrayBuffer(e)}))}return{handleUpload:function(){const e=s(n);e&&e.click()},handleInputClick:function(e){const t=e&&e.target.files,a=t&&t[0];a&&async function(e){const t=s(n);t&&(t.value=""),await r(e)}(a)},inputRef:n}}});v.render=function(e,t,s,i,u,m){return a(),n("div",null,[l(r("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick(...t))},null,544),[[o,!1]]),r("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload(...t))},[c(e.$slots,"default")])])};const{t:g}=i(),b=[{field:"filename",component:"Input",label:g("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:g("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}];var B=e({components:{BasicModal:h,BasicForm:x},emits:["success","register"],setup(e,{emit:t}){const[s,{validateFields:a}]=k(),[n,{closeModal:l}]=y();return{schemas:b,handleOk:async function(){const e=await a(),{filename:s,bookType:n}=e;t("success",{filename:`${s.split(".").shift()}.${n}`,bookType:n}),l()},registerForm:s,registerModal:n,t:g}}});B.render=function(e,t,s,l,o,c){const i=u("BasicForm"),d=u("BasicModal");return a(),n(d,f(e.$attrs,{title:e.t("component.excel.exportModalTitle"),onOk:e.handleOk,onRegister:e.registerModal}),{default:m((()=>[r(i,{labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,onRegister:e.registerForm},null,8,["schemas","onRegister"])])),_:1},16,["title","onOk","onRegister"])};const j=d(v),F=d(B);export{F as E,j as I};