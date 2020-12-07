import{a as t,x as e,P as n,U as i,aL as s,E as c,k as o,O as r,C as a,z as l,A as f,F as p,aO as u,I as h,J as d,bM as m}from"./index.274f5b98.js";import{C as g}from"./CheckOutlined.d6702244.js";function v(){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var t=window.document.documentElement;return"flex"in t.style||"webkitFlex"in t.style||"Flex"in t.style||"msFlex"in t.style}return!1}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=t({name:"Steps",mixins:[e],props:{type:n.string.def("default"),prefixCls:n.string.def("rc-steps"),iconPrefix:n.string.def("rc"),direction:n.string.def("horizontal"),labelPlacement:n.string.def("horizontal"),status:n.string.def("process"),size:n.string.def(""),progressDot:i(n.oneOfType([n.looseBool,n.func])),initial:n.number.def(0),current:n.number.def(0),icons:n.shape({finish:n.any,error:n.any}).loose,canClick:n.looseBool},data:function(){return this.calcStepOffsetWidth=s(this.calcStepOffsetWidth,150),{flexSupported:!0,lastStepOffsetWidth:0}},mounted:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth(),v()||t.setState({flexSupported:!1})}))},updated:function(){var t=this;this.$nextTick((function(){t.calcStepOffsetWidth()}))},beforeUnmount:function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},methods:{onStepClick:function(t){this.$props.current!==t&&this.__emit("change",t)},calcStepOffsetWidth:function(){var t=this;if(!v()){var e=this.$data.lastStepOffsetWidth,n=this.$refs.vcStepsRef;n.children.length>0&&(this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcTimeout=setTimeout((function(){var i=(n.lastChild.offsetWidth||0)+1;e===i||Math.abs(e-i)<=3||t.setState({lastStepOffsetWidth:i})})))}}},render:function(){var t,e=this,n=this.prefixCls,i=this.direction,s=this.type,l=this.labelPlacement,f=this.iconPrefix,p=this.status,u=this.size,h=this.current,d=this.progressDot,m=this.initial,g=this.icons,v=this.canClick,y="navigation"===s,x=this.lastStepOffsetWidth,C=this.flexSupported,S=c(this),P=S.length-1,w=d?"vertical":l,j=(O(t={},n,!0),O(t,"".concat(n,"-").concat(i),!0),O(t,"".concat(n,"-").concat(u),u),O(t,"".concat(n,"-label-").concat(w),"horizontal"===i),O(t,"".concat(n,"-dot"),!!d),O(t,"".concat(n,"-navigation"),y),O(t,"".concat(n,"-flex-not-supported"),!C),t);return o("div",{class:j,ref:"vcStepsRef"},[S.map((function(t,s){var c=r(t),o=m+s,l=b({stepNumber:"".concat(o+1),stepIndex:o,prefixCls:n,iconPrefix:f,progressDot:d,icons:g},c);return v&&(l.onStepClick=e.onStepClick),C||"vertical"===i||(y?(l.itemWidth="".concat(100/(P+1),"%"),l.adjustMarginRight=0):s!==P&&(l.itemWidth="".concat(100/P,"%"),l.adjustMarginRight="".concat(-Math.round(x/P+1),"px"))),"error"===p&&s===h-1&&(l.class="".concat(n,"-next-error")),c.status||(l.status=o===h?p:o<h?"finish":"wait"),l.active=o===h,a(t,l)}))])}});function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){return"string"==typeof t}function w(){}var j=t({name:"Step",mixins:[e],props:{prefixCls:n.string,wrapperStyle:n.object,itemWidth:n.string,active:n.looseBool,disabled:n.looseBool,status:n.string,iconPrefix:n.string,icon:n.any,adjustMarginRight:n.string,stepNumber:n.string,stepIndex:n.number,description:n.any,title:n.any,subTitle:n.any,progressDot:i(n.oneOfType([n.looseBool,n.func])),tailContent:n.any,icons:n.shape({finish:n.any,error:n.any}).loose,onClick:n.func,onStepClick:n.func},methods:{onItemClick:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.__emit.apply(this,["click"].concat(e)),this.__emit("stepClick",this.stepIndex)},renderIconNode:function(){var t,e=l(this),n=e.prefixCls,i=e.stepNumber,s=e.status,c=e.iconPrefix,r=e.icons,a=e.progressDot,p=f(this,"icon"),u=f(this,"title"),h=f(this,"description"),d=(S(t={},"".concat(n,"-icon"),!0),S(t,"".concat(c,"icon"),!0),S(t,"".concat(c,"icon-").concat(p),p&&P(p)),S(t,"".concat(c,"icon-check"),!p&&"finish"===s&&r&&!r.finish),S(t,"".concat(c,"icon-close"),!p&&"error"===s&&r&&!r.error),t),m=o("span",{class:"".concat(n,"-icon-dot")},null);return a?o("span",{class:"".concat(n,"-icon")},"function"==typeof a?[a({index:i-1,status:s,title:u,description:h,prefixCls:n})]:[m]):p&&!P(p)?o("span",{class:"".concat(n,"-icon")},[p]):r&&r.finish&&"finish"===s?o("span",{class:"".concat(n,"-icon")},[r.finish]):r&&r.error&&"error"===s?o("span",{class:"".concat(n,"-icon")},[r.error]):p||"finish"===s||"error"===s?o("span",{class:d},null):o("span",{class:"".concat(n,"-icon")},[i])}},render:function(){var t,e=l(this),n=e.prefixCls,i=e.itemWidth,s=e.active,c=e.status,r=void 0===c?"wait":c,a=e.tailContent,p=e.adjustMarginRight,u=e.disabled,h=e.onClick,d=e.onStepClick,m=f(this,"title"),g=f(this,"subTitle"),v=f(this,"description"),b={class:(S(t={},"".concat(n,"-item"),!0),S(t,"".concat(n,"-item-").concat(r),!0),S(t,"".concat(n,"-item-custom"),f(this,"icon")),S(t,"".concat(n,"-item-active"),s),S(t,"".concat(n,"-item-disabled"),!0===u),t)},O={};i&&(O.width=i),p&&(O.marginRight=p);var y={onClick:h||w};return d&&!u&&(y.role="button",y.tabindex=0,y.onClick=this.onItemClick),o("div",C(C({},b),{},{style:O}),[o("div",C(C({},y),{},{class:"".concat(n,"-item-container")}),[o("div",{class:"".concat(n,"-item-tail")},[a]),o("div",{class:"".concat(n,"-item-icon")},[this.renderIconNode()]),o("div",{class:"".concat(n,"-item-content")},[o("div",{class:"".concat(n,"-item-title")},[m,g&&o("div",{title:g,class:"".concat(n,"-item-subtitle")},[g])]),v&&o("div",{class:"".concat(n,"-item-description")},[v])])])])}});function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}y.Step=j;var W=t({name:"ASteps",inheritAttrs:!1,props:u({prefixCls:n.string,iconPrefix:n.string,current:n.number,initial:n.number,labelPlacement:n.oneOf(p("horizontal","vertical")).def("horizontal"),status:n.oneOf(p("wait","process","finish","error")),size:n.oneOf(p("default","small")),direction:n.oneOf(p("horizontal","vertical")),progressDot:i(n.oneOfType([n.looseBool,n.func])),type:n.oneOf(p("default","navigation")),onChange:n.func,"onUpdate:current":n.func},{current:0}),emits:["update:current","change"],setup:function(){return{configProvider:h("configProvider",d)}},Step:k(k({},y.Step),{name:"AStep"}),methods:{handleChange:function(t){this.$emit("update:current",t),this.$emit("change",t)}},render:function(){var t=this,e=k(k({},l(this)),this.$attrs),n=e.prefixCls,i=e.iconPrefix,s=this.configProvider.getPrefixCls,r=s("steps",n),a=s("",i),p=f(this,"progressDot",this,!1),u=k(k({icons:{finish:o(g,{class:"".concat(r,"-finish-icon")},null),error:o(m,{class:"".concat(r,"-error-icon")},null)},iconPrefix:a,prefixCls:r,progressDot:p},e),{canClick:!(!this.onChange&&!this["onUpdate:current"]),onChange:this.handleChange});return o(y,u,{default:function(){return[c(t)]}})}});W.install=function(t){return t.component(W.name,W),t.component(W.Step.name,W.Step),t};export{W as S};