import{a as e,r,a9 as t,o as a,j as o}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./useTimeout.ea9749db.js";import{u as i}from"./useECharts.f9a1efc0.js";import"./useDebounce.132f16d3.js";import"./useEventListener.acbae064.js";import"./useBreakpoint.0f2255d9.js";import{b as s}from"./props.c31746e0.js";var n=e({name:"AnalysisLine",props:s,setup(){const e=r(null),{setOptions:a,echarts:o}=i(e);return t((()=>{a({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{color:"#5B8FF9"},areaStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:1,color:"rgba(118,168,248, 0)"}],!1),shadowColor:"rgba(118,168,248, 0.9)",shadowBlur:20},data:[134,330,132,101,90,230,210,150,230,400,232,234],animationDuration:3e3}]})})),{chartRef:e}}});n.render=function(e,r,t,i,s,n){return a(),o("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default n;