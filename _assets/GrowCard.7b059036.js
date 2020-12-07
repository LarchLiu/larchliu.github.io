let t=document.createElement("style");t.innerHTML=".grow-card{display:flex;width:calc(100% - 12px);height:158px;padding:16px 16px 12px;cursor:pointer;background:#fff;border-radius:4px;box-shadow:6px 6px 54px 0 rgba(0,0,0,.05);flex-direction:column}.grow-card:hover{box-shadow:6px 6px 54px 0 rgba(0,0,0,.1)}.grow-card-header{display:flex;width:100%;justify-content:space-between}.grow-card__title{font-family:PingFangSC-Regular;font-size:16px;letter-spacing:0;color:rgba(0,0,0,.85);opacity:.7}.grow-card__info span{font-family:NeoSans;font-size:26px;line-height:38px}.grow-card-footer{display:flex;width:100%;margin-top:24px;align-items:center}.grow-card-footer .ant-statistic-content-value{color:#ed6f6f}.grow-card-footer .ant-statistic-content-prefix svg{width:.98rem!important;height:.98rem!important}.grow-card-footer.is-up .ant-statistic-content-value{color:#55d187}.grow-card__mom{display:inline-block;padding-left:10px;font-family:PingFangSC-Regular;font-size:12px;line-height:22px;letter-spacing:0;color:#606060}",document.head.appendChild(t);import{dd as e,de as r,d5 as n,df as o,k as i,a,aO as c,I as s,J as u,A as f,P as l,c1 as p,c0 as d,i as m,o as v,j as g,m as h,w as y}from"./index.274f5b98.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{h as b,c as w,s as O}from"./_stringToArray.943e7f6c.js";import"./animation.7413df24.js";import"./propTypes.3efdd02c.js";import{C as x}from"./index.caf9d91f.js";var j=Math.floor;function S(t,e){var r="";if(!t||e<1||e>9007199254740991)return r;do{e%2&&(r+=t),(e=j(e/2))&&(t+=t)}while(e);return r}var P=e("length"),C="[\\ud800-\\udfff]",_="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",I="[^\\ud800-\\udfff]",D="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",A="(?:"+_+"|"+T+")"+"?",R="[\\ufe0e\\ufe0f]?"+A+("(?:\\u200d(?:"+[I,D,$].join("|")+")[\\ufe0e\\ufe0f]?"+A+")*"),E="(?:"+[I+_+"?",_,D,$,C].join("|")+")",k=RegExp(T+"(?="+T+")|"+E+R,"g");function M(t){return b(t)?function(t){for(var e=k.lastIndex=0;k.test(t);)++e;return e}(t):P(t)}var N=Math.ceil;function H(t,e){var n=(e=void 0===e?" ":r(e)).length;if(n<2)return n?S(e,t):e;var o=S(e,N(t/M(e)));return b(e)?w(O(o),0,t).join(""):o.slice(0,t)}var V=function(t){var e,r=t.value,a=t.formatter,c=t.precision,s=t.decimalSeparator,u=t.groupSeparator,f=void 0===u?"":u,l=t.prefixCls;if("function"==typeof a)e=a({value:r});else{var p=String(r),d=p.match(/^(-?)(\d*)(\.(\d+))?$/);if(d){var m=d[1],v=d[2]||"0",g=d[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,f),"number"==typeof c&&(g=function(t,e,r){t=n(t);var i=(e=o(e))?M(t):0;return e&&i<e?t+H(e-i,r):t}(g,c,"0").slice(0,c)),g&&(g="".concat(s).concat(g)),e=[i("span",{key:"int",class:"".concat(l,"-content-value-int")},[m,v]),g&&i("span",{key:"decimal",class:"".concat(l,"-content-value-decimal")},[g])]}else e=p}return i("span",{class:"".concat(l,"-content-value")},[e])};function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}V.displayName="StatisticNumber";var B={prefixCls:l.string,decimalSeparator:l.string,groupSeparator:l.string,format:l.string,value:{type:[String,Number,Object]},valueStyle:l.style,valueRender:l.any,formatter:l.any,precision:l.number,prefix:l.VNodeChild,suffix:l.VNodeChild,title:l.VNodeChild,onFinish:l.func},J=a({name:"AStatistic",props:c(B,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:s("configProvider",u)}},render:function(){var t=this.$props,e=t.prefixCls,r=t.value,n=void 0===r?0:r,o=t.valueStyle,a=t.valueRender,c=(0,this.configProvider.getPrefixCls)("statistic",e),s=f(this,"title"),u=f(this,"prefix"),l=f(this,"suffix"),p=f(this,"formatter",{},!1),d=U(U({},this.$props),{prefixCls:c,value:n,formatter:p}),m=i(V,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){F(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"data-for-update":Date.now()},d),null);return a&&(m=a(m)),i("div",{class:c},[s&&i("div",{class:"".concat(c,"-title")},[s]),i("div",{style:o,class:"".concat(c,"-content")},[u&&i("span",{class:"".concat(c,"-content-prefix")},[u]),m,l&&i("span",{class:"".concat(c,"-content-suffix")},[l])])])}});function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var q=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function G(t,e){var r=t,i=/\[[^\]]*\]/g,a=(e.match(i)||[]).map((function(t){return t.slice(1,-1)})),c=e.replace(i,"[]"),s=q.reduce((function(t,e){var i=L(e,2),a=i[0],c=i[1];if(-1!==t.indexOf(a)){var s=Math.floor(r/c);return r-=s*c,t.replace(new RegExp("".concat(a,"+"),"g"),(function(t){var e=t.length;return function(t,e,r){t=n(t);var i=(e=o(e))?M(t):0;return e&&i<e?H(e-i,r)+t:t}(s.toString(),e,"0")}))}return t}),c),u=0;return s.replace(i,(function(){var t=a[u];return u+=1,t}))}function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function W(){return(W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function X(t){return p(d)(t).valueOf()}var Z=a({name:"AStatisticCountdown",props:c(B,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){X(this.$props.value)>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),33.333333333333336))},stopTimer:function(){var t=this.$props.value;this.countdownId&&(clearInterval(this.countdownId),this.countdownId=void 0,X(t)<Date.now()&&this.$emit("finish"))},formatCountdown:function(t){var e=t.value,r=t.config,n=this.$props.format;return function(t,e){var r=e.format,n=void 0===r?"":r,o=p(d)(t).valueOf(),i=p(d)().valueOf();return G(Math.max(o-i,0),n)}(e,W(W({},r),{format:n}))},valueRenderHtml:function(t){return t}},render:function(){return i(J,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){Q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:"statistic"},W(W({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});J.Countdown=Z,J.install=function(t){return t.component(J.name,J),t.component(J.Countdown.name,J.Countdown),t};var tt=a({components:{Statistic:J,CountTo:x},props:{info:{type:Object,default:null}},setup:()=>({riseSvg:"./_assets/analysis-rise.8267119c.svg",downSvg:"./_assets/analysis-down.cdc82f65.svg"})});const et={class:"grow-card"},rt={class:"grow-card-header"},nt={class:"grow-card__info"},ot={class:"grow-card__title"},it={class:"grow-card__mom"};tt.render=function(t,e,r,n,o,a){const c=m("CountTo"),s=m("Statistic");return v(),g("div",et,[i("div",rt,[i("div",nt,[i("p",ot,h(t.info.title),1),i(c,{prefix:"$",startVal:1,endVal:t.info.price},null,8,["endVal"])]),i("img",{src:t.info.icon},null,8,["src"])]),i("div",{class:["grow-card-footer",{"is-up":t.info.up}]},[i(s,{value:t.info.percent},{prefix:y((()=>[i("img",{src:t.info.up?t.riseSvg:t.downSvg},null,8,["src"])])),_:1},8,["value"]),i("span",it,h(t.info.mom),1)],2)])};export default tt;