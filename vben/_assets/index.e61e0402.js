import{a as s,B as o,p as t,i as n,o as e,j as r,q as a,w as l,l as c,s as i,v as p}from"./index.f859e790.js";import{p as d}from"./propTypes.141bb193.js";import{I as u}from"./index.10fbf450.js";var f=s({name:"AButton",inheritAttrs:!1,components:{Button:o,Icon:u},props:{type:d.oneOf(["primary","default","danger","dashed","link"]).def("default"),color:d.oneOf(["error","warning","success",""]),loading:d.bool,disabled:d.bool,preIcon:d.string,postIcon:d.string},setup(s,{attrs:o}){const n=t((()=>"circle"===o.shape)),e=t((()=>{const{color:o,disabled:t}=s;return{[`ant-btn-${o}`]:!!o,"is-disabled":t}}));return{getBindValue:t((()=>({...o,...s}))),getColor:e,getIsCircleBtn:n}}});f.render=function(s,o,t,p,d,u){const f=n("Icon"),g=n("Button");return e(),r(g,a(s.getBindValue,{class:[s.getColor,s.$attrs.class]}),{default:l((o=>[s.preIcon?(e(),r(f,{key:0,icon:s.preIcon,class:{"mr-1":!s.getIsCircleBtn}},null,8,["icon","class"])):c("",!0),i(s.$slots,"default",o),s.postIcon?(e(),r(f,{key:1,icon:s.postIcon,class:{"ml-1":!s.getIsCircleBtn}},null,8,["icon","class"])):c("",!0)])),_:1},16,["class"])};const g=p(f);export{g as B};