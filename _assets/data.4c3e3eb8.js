import"./index.274f5b98.js";import"./xlsx.a48e520c.js";const e=[{percent:50,title:"开发任务一",updateTime:"2020.7.12",desc:"开发任务一简介",status:"active"},{percent:67,title:"开发任务二",updateTime:"2020.3.12",desc:"开发任务二简介",status:"exception"},{percent:100,title:"开发任务三",updateTime:"2020.4.12",desc:"开发任务三简介",status:"success"}],t=[{title:"总用户数",icon:"./_assets/analysis-icon1.97ca7891.svg",price:8e4,up:!0,mom:"环比增长",percent:2.5},{title:"产品数量",icon:"./_assets/analysis-icon2.0bb2b0a8.svg",price:4e3,up:!0,mom:"同比增长",percent:3},{title:"总营业额",icon:"./_assets/analysis-icon3.e43bd299.svg",price:3e6,up:!1,mom:"环比降低",percent:2},{title:"总任务数",icon:"./_assets/analysis-icon4.ce5f8cc6.svg",price:1e4,up:!1,mom:"同比降低",percent:1}],s=function(e){const t=e.slice();let s,c,i=t.length;for(;0!==i;)c=Math.floor(Math.random()*i),i-=1,s=t[i],t[i]=t[c],t[c]=s;return t},c=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46];export{t as growCardList,s as randomizeArray,c as sparklineData,e as taskList};