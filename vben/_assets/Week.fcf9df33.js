import{a as e,r as t,a9 as s,i as r,o as a,j as o,w as i,k as n}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./Trigger.b2c026b2.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./index.2b33554d.js";import{C as p}from"./index.91d1a537.js";import"./index.0098ee18.js";import"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./resizeEvent.6c4ea7e2.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import"./animation.a3b0786d.js";import"./index.b4c95b5a.js";import"./propTypes.5d8f5cbe.js";import{u as d}from"./useApexCharts.47f9ca0d.js";var c=e({components:{CollapseContainer:p},setup(){const e=t(null),{setOptions:r}=d(e);return s((()=>{r({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:e}}});const l={ref:"chartRef",style:{width:"100%"}};c.render=function(e,t,s,p,d,c){const m=r("CollapseContainer");return a(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",l,null,512)])),_:1})};export default c;