import{a as e,r as t,a9 as a,o as s,j as r}from"./index.8290e95c.js";import"./xlsx.a48e520c.js";import"./useTimeout.ef74c264.js";import{u as o}from"./useApexCharts.7c155cf0.js";var i=e({setup(){const e=t(null),{setOptions:s}=o(e);return a((()=>{s({series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}})})),{chartRef:e}}});const m={ref:"chartRef",style:{width:"100%"}};i.render=function(e,t,a,o,i,n){return s(),r("div",m,null,512)};export default i;