import{a as e,i,o as t,j as s,k as o}from"./index.4576f530.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.b8ce0ba8.js";import"./index.6120a69f.js";import"./Trigger.b2c026b2.js";import"./omit.34ab8438.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.21158c32.js";import"./CheckOutlined.90b3bd15.js";import"./index.8a225e00.js";import"./index.5ccfbb51.js";import"./colors.97cac18c.js";import"./index.27035759.js";import"./RightOutlined.0e2e8b7f.js";import"./index.266c9d96.js";import"./types.1e35e349.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2ecb6ec7.js";import"./index.2b33554d.js";import"./UpOutlined.51aaae5d.js";import"./LeftOutlined.5f79833d.js";import"./DownOutlined.21ee165a.js";import"./index.62015d83.js";import"./index.37ca8e38.js";import"./index.20066b46.js";import"./zh_CN.0242bd16.js";import"./index.c0b31f7f.js";import"./index.b155142d.js";import"./CaretDownFilled.df180f6b.js";import"./CheckOutlined.ee22683e.js";import"./CloseOutlined.479a84fb.js";import{s as r}from"./EditTableHeaderIcon.5a811798.js";import"./index.c238656a.js";import"./index.0098ee18.js";import"./LeftOutlined.f98369e1.js";import"./functional.0fd1f942.js";import"./RightOutlined.4ffc4a17.js";import"./useTimeout.ea9749db.js";import"./useDebounce.132f16d3.js";import"./useEventListener.acbae064.js";import"./useBreakpoint.0f2255d9.js";import"./resizeEvent.6c4ea7e2.js";import"./domUtils.8637ad99.js";import"./tsxHelper.de3d63ca.js";import"./propTypes.5d8f5cbe.js";import"./index.a299f0fe.js";import"./index.1ce18683.js";import"./useWindowSizeFn.e9087e97.js";import"./uuid.b9543cb7.js";import"./download.5fbb358f.js";import"./useForm.84d21633.js";import"./useFullScreen.50ed021c.js";import"./index.28b4cf81.js";import{getBasicColumns as p,getTreeTableData as m}from"./tableData.2970db1b.js";var d=e({components:{BasicTable:r},setup:()=>({columns:p(),data:m()})});const n={class:"p-4"};d.render=function(e,r,p,m,d,a){const j=i("BasicTable");return t(),s("div",n,[o(j,{rowSelection:{type:"checkbox"},isTreeTable:!0,title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:e.columns,dataSource:e.data,rowKey:"id",indentSize:20},null,8,["columns","dataSource"])])};export default d;