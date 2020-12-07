import{aA as e,P as t,F as s,a as n,x as o,I as a,J as c,D as i,A as r,L as l,k as f,bM as u,Q as h,R as p,am as d,a5 as b,an as g,aI as O,bN as v,aJ as m,aK as y,bO as w,bP as P,bQ as C,bR as j,a6 as x}from"./index.274f5b98.js";function A(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function D(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?A(Object(s),!0).forEach((function(t){N(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function N(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var V={success:O,info:v,error:m,warning:y},E={success:w,info:P,error:C,warning:j},I=e(n({name:"AAlert",mixins:[o],inheritAttrs:!1,props:{type:t.oneOf(s("success","info","warning","error")),closable:t.looseBool,closeText:t.VNodeChild,message:t.VNodeChild,description:t.VNodeChild,afterClose:t.func.def((function(){})),showIcon:t.looseBool,prefixCls:t.string,banner:t.looseBool,icon:t.VNodeChild,onClose:t.VNodeChild},emits:["close"],setup:function(){return{configProvider:a("configProvider",c)}},data:function(){return{closing:!1,closed:!1}},methods:{handleClose:function(e){e.preventDefault();var t=i(this);t.style.height="".concat(t.offsetHeight,"px"),t.style.height="".concat(t.offsetHeight,"px"),this.setState({closing:!0}),this.$emit("close",e)},animationEnd:function(){this.setState({closing:!1,closed:!0}),this.afterClose()}},render:function(){var e,t=this.prefixCls,s=this.banner,n=this.closing,o=this.closed,a=this.$attrs,c=(0,this.configProvider.getPrefixCls)("alert",t),i=this.closable,O=this.type,v=this.showIcon,m=r(this,"closeText"),y=r(this,"description"),w=r(this,"message"),P=r(this,"icon");v=!(!s||void 0!==v)||v;var C=(y?E:V)[O=s&&void 0===O?"warning":O||"info"]||null;m&&(i=!0);var j=l(c,(N(e={},"".concat(c,"-").concat(O),!0),N(e,"".concat(c,"-closing"),n),N(e,"".concat(c,"-with-description"),!!y),N(e,"".concat(c,"-no-icon"),!v),N(e,"".concat(c,"-banner"),!!s),N(e,"".concat(c,"-closable"),i),e)),A=i?f("button",{type:"button",onClick:this.handleClose,class:"".concat(c,"-close-icon"),tabindex:0},[m?f("span",{class:"".concat(c,"-close-text")},[m]):f(u,null,null)]):null,I=P&&(h(P)?p(P,{class:"".concat(c,"-icon")}):f("span",{class:"".concat(c,"-icon")},[P]))||f(C,{class:"".concat(c,"-icon")},null),S=d("".concat(c,"-slide-up"),{appear:!1,onAfterLeave:this.animationEnd});return o?null:f(g,S,{default:function(){return[b(f("div",D(D({},a),{},{class:[a.class,j],"data-show":!n}),[v?I:null,f("span",{class:"".concat(c,"-message")},[w]),f("span",{class:"".concat(c,"-description")},[y]),A]),[[x,!n]])]}})}}));export{I as A};