import{r as e,a8 as t,cU as n}from"./index.274f5b98.js";function o(o){const c=e(o||""),a=e(!1),s=e(!1);return t(c,(e=>{n(e)&&(s.value=!0,a.value=function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const c=document.getSelection();let a;c&&c.rangeCount>0&&(a=c.getRangeAt(0));t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(e){throw new Error(e)}n.remove(),a&&c&&(c.removeAllRanges(),c.addRange(a));o&&o.focus();return s}(e))}),{immediate:!!o,flush:"sync"}),{clipboardRef:c,isSuccessRef:a,copiedRef:s}}export{o as u};