import{a as e,r as t,a9 as s,o,j as a}from"./index.274f5b98.js";import"./xlsx.a48e520c.js";import"./useTimeout.7df9e591.js";import{u as l}from"./useApexCharts.b76853d0.js";var r=e({setup(){const e=t(null),{setOptions:o}=l(e);return s((()=>{o({series:[{name:"Income",type:"column",data:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6]},{name:"Cashflow",type:"column",data:[1.1,3,3.1,4,4.1,4.9,6.5,8.5]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}],chart:{height:350,type:"line",stacked:!1},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},title:{text:"XYZ - Stock Analysis (2009 - 2016)",align:"left",offsetX:110},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{horizontalAlign:"left",offsetX:40}})})),{chartRef:e}}});const i={ref:"chartRef",style:{width:"100%"}};r.render=function(e,t,s,l,r,n){return o(),a("div",i,null,512)};export default r;