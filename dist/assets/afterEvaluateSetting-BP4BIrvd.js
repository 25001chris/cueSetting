import{_ as C,r as c,o as f,f as T,d as b,t as E,a as e,w as l,g as $,b as u,c as _,h as N,p as j,e as x,i as h}from"./index-DCp_fKZt.js";import{b as d,a as i,V as g}from"./VRow-VB98ay1s.js";import{_ as V}from"./CommonButton-DG90qVH5.js";import{V as y}from"./VCard-ClW_9v4U.js";import{V as k}from"./VDialog-CmR3P380.js";const R={__name:"checkBoxList",props:{title:{type:String,default:""}},setup(a){const o=a;return(n,t)=>{const p=c("el-checkbox"),s=c("el-checkbox-group");return f(),T("div",null,[b("h5",null,E(o.title),1),e(s,{modelValue:n.checkList,"onUpdate:modelValue":t[0]||(t[0]=U=>n.checkList=U),class:"checkBox"},{default:l(()=>[e(p,{label:"ET-N",value:"ET-N",size:"small"}),e(p,{label:"ETTV",value:"ETTV",size:"small"}),e(p,{label:"YOYO",value:"YOYO",size:"small"}),e(p,{label:"ET-M",value:"ET-M",size:"small"}),e(p,{label:"ET-WM",value:"ET-WM",size:"small"}),e(p,{label:"EFNC",value:"ValueF",size:"small"}),e(p,{label:"ET-D",value:"ET-D",size:"small"}),e(p,{label:"STV",value:"STV",size:"small"})]),_:1},8,["modelValue"])])}}},S=C(R,[["__scopeId","data-v-7f73eb33"]]),L={__name:"textAreaBox",props:{isInput:{type:Boolean,default:!1},title:{type:String,default:""},rowNum:{type:Number,default:5}},setup(a){const o=a,n=$(""),t=$("");return(p,s)=>{const U=c("el-input");return f(),T("div",null,[u(E(a.title)+" ",1),e(U,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=z=>n.value=z),style:{display:"flex"},rows:a.rowNum,type:"textarea",placeholder:"Please input1"},{prepend:l(()=>[]),_:1},8,["modelValue","rows"]),o.isInput?(f(),_(U,{key:0,modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=z=>t.value=z),style:{display:"flex"},placeholder:"Please input",class:"mt-2"},null,8,["modelValue"])):N("",!0)])}}},I={};function D(a,o){return f(),_(g,null,{default:l(()=>[u(" 排期單號(Double Click即可刪除) "),e(d,{cols:"12",class:"box3"},{default:l(()=>[e(i,{class:"box3-1",style:{"background-color":"lightskyblue"}},{default:l(()=>[e(d,{cols:"8"},{default:l(()=>[u("[待補]社團法人中華民國老人福利[1130712-1922]")]),_:1}),e(d,{cols:"2"},{default:l(()=>[u("0")]),_:1}),e(d,{cols:"2"},{default:l(()=>[u("40000")]),_:1})]),_:1})]),_:1}),e(d,{cols:"12",class:"box3"},{default:l(()=>[e(i,{class:"box3-1"},{default:l(()=>[e(d,{cols:"8"},{default:l(()=>[u("[待補]社團法人中華民國老人福利[1130712-1922]")]),_:1}),e(d,{cols:"2"},{default:l(()=>[u("0")]),_:1}),e(d,{cols:"2"},{default:l(()=>[u("40000")]),_:1})]),_:1})]),_:1})]),_:1})}const O=C(I,[["render",D],["__scopeId","data-v-c45b8eb8"]]),q={};function M(a,o){const n=c("el-input");return f(),_(g,null,{default:l(()=>[e(d,{cols:"12",class:"fill-height"},{default:l(()=>[e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[0]||(o[0]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("計費金額")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[1]||(o[1]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("回沖前期")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[2]||(o[2]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("託播預算")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[3]||(o[3]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("GRP")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[4]||(o[4]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("CPRP")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[5]||(o[5]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("佣金回饋")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[6]||(o[6]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("合計")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[7]||(o[7]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("檔次")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[8]||(o[8]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("差異")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[9]||(o[9]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("比例")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[10]||(o[10]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("產值計算")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[11]||(o[11]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("PT GRP")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[12]||(o[12]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("PT比例")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[13]||(o[13]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("審單沖帳")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{style:{"background-color":"#bbb !important"}},{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[14]||(o[14]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("計費(合)")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[15]||(o[15]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("回沖(合)")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[16]||(o[16]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("預算(合)")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{style:{"background-color":"#bbb !important"}},{default:l(()=>[e(d,{cols:"4"}),e(d,{cols:"4"}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[17]||(o[17]=t=>a.input1=t),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("產值(合)")]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}const W=C(q,[["render",M],["__scopeId","data-v-e7b82d6a"]]),Y={},G=a=>(j("data-v-0bc248de"),a=a(),x(),a),F=G(()=>b("span",{style:{"padding-right":"20px"}},"至",-1));function X(a,o){const n=c("el-input"),t=c("el-tag"),p=c("el-checkbox");return f(),_(d,{cols:"12"},{default:l(()=>[e(i,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[0]||(o[0]=s=>a.input1=s),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("年月")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(t,{type:"info",effect:"plain",class:"mr-1"},{default:l(()=>[u("B")]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[1]||(o[1]=s=>a.input1=s),style:{"max-width":"600px"},placeholder:"Please input",size:"small"},{prepend:l(()=>[u("評估單號")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(t,{type:"primary",class:"mr-1"},{default:l(()=>[u("Tag 1")]),_:1}),e(t,{type:"success",class:"mr-1"},{default:l(()=>[u("Tag 2")]),_:1}),e(t,{type:"info",class:"mr-1"},{default:l(()=>[u("Tag 3")]),_:1}),e(t,{type:"warning",class:"mr-1"},{default:l(()=>[u("Tag 4")]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"8"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[3]||(o[3]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 業務員 ")]),append:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[2]||(o[2]=s=>a.input1=s),placeholder:"Please input",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[4]||(o[4]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 填表日期 ")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[6]||(o[6]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 代理商 ")]),append:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[5]||(o[5]=s=>a.input1=s),placeholder:"Please input2",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[8]||(o[8]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 客戶名稱 ")]),append:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[7]||(o[7]=s=>a.input1=s),placeholder:"Please input2",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"9"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[9]||(o[9]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 材料名稱 ")]),append:l(()=>[u(" 材料 ")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"9"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[10]||(o[10]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 篇名秒數 ")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"3"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[11]||(o[11]=s=>a.input1=s),placeholder:"Please input",size:"small"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"9"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[12]||(o[12]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" CM組材料 ")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"8"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[14]||(o[14]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" 走期 ")]),append:l(()=>[F,e(n,{modelValue:a.input1,"onUpdate:modelValue":o[13]||(o[13]=s=>a.input1=s),placeholder:"Please input",size:"small",style:{"background-color":"black","border-radius":"0 !important"}},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(p,{modelValue:a.checked5,"onUpdate:modelValue":o[15]||(o[15]=s=>a.checked5=s),label:"補檔序"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[18]||(o[18]=s=>a.input1=s),placeholder:"Please input",size:"small"},{prepend:l(()=>[u(" TARGET ")]),append:l(()=>[e(n,{modelValue:a.input1,"onUpdate:modelValue":o[16]||(o[16]=s=>a.input1=s),placeholder:"",size:"small"},null,8,["modelValue"]),e(n,{modelValue:a.input1,"onUpdate:modelValue":o[17]||(o[17]=s=>a.input1=s),placeholder:"",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"3",style:{padding:"0px 10px"}},{default:l(()=>[e(p,{modelValue:a.checked5,"onUpdate:modelValue":o[19]||(o[19]=s=>a.checked5=s),label:"每十秒"},null,8,["modelValue"])]),_:1}),e(d,{cols:"3",style:{padding:"0px 10px"}},{default:l(()=>[e(p,{modelValue:a.checked5,"onUpdate:modelValue":o[20]||(o[20]=s=>a.checked5=s),label:"檔購看事後"},null,8,["modelValue"])]),_:1}),e(d,{cols:"3",style:{padding:"0px 10px"}},{default:l(()=>[e(p,{modelValue:a.checked5,"onUpdate:modelValue":o[21]||(o[21]=s=>a.checked5=s),label:"已買到"},null,8,["modelValue"])]),_:1}),e(d,{cols:"3",style:{padding:"0px 10px"}},{default:l(()=>[e(p,{modelValue:a.checked5,"onUpdate:modelValue":o[22]||(o[22]=s=>a.checked5=s),label:"合看已買到"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}const Z=C(Y,[["render",X],["__scopeId","data-v-0bc248de"]]),H=""+new URL("editValue-DEjRZLhP.jpg",import.meta.url).href,J=b("img",{src:H,alt:"adjustment"},null,-1),K={__name:"editValue",setup(a){return(o,n)=>(f(),_(k,{activator:"#editValue","max-width":"1250"},{default:l(({isActive:t})=>[e(y,{title:"調值",height:"600px"},{actions:l(()=>[e(g,null,{default:l(()=>[J,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},Q=""+new URL("addBudget-GpClf-jk.jpg",import.meta.url).href,A=b("img",{src:Q,alt:"adjustment"},null,-1),ee={__name:"addBudget",setup(a){return(o,n)=>(f(),_(k,{activator:"#addBudget","max-width":"680"},{default:l(({isActive:t})=>[e(y,{title:"加預算",height:"400px"},{actions:l(()=>[e(g,null,{default:l(()=>[A,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},le=""+new URL("adjust-DDOOg9R-.jpg",import.meta.url).href,te=b("img",{src:le,alt:"adjustment"},null,-1),ae={__name:"adjustValue",setup(a){return(o,n)=>(f(),_(k,{activator:"#adjustValue","max-width":"1180"},{default:l(({isActive:t})=>[e(y,{title:"調整",height:"800px"},{actions:l(()=>[e(g,null,{default:l(()=>[te,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},oe=""+new URL("splitSchedule-BC0ngCww.jpg",import.meta.url).href,ue=b("img",{src:oe,alt:"adjustment"},null,-1),ne={__name:"splitSchedule",setup(a){return(o,n)=>(f(),_(k,{activator:"#splitSchedule","max-width":"780"},{default:l(({isActive:t})=>[e(y,{title:"拆單",height:"680px"},{actions:l(()=>[e(g,null,{default:l(()=>[ue,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},de=""+new URL("watchTogether-BR-SFlul.jpg",import.meta.url).href,se=b("img",{src:de,alt:"adjustment"},null,-1),pe={__name:"watchTogether",setup(a){return(o,n)=>(f(),_(k,{activator:"#watchTogether","max-width":"1000"},{default:l(({isActive:t})=>[e(y,{title:"合看",height:"820px"},{actions:l(()=>[e(g,null,{default:l(()=>[se,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},ie=""+new URL("combineWatchTogether-BjdMY3oc.jpg",import.meta.url).href,me=b("img",{src:ie,alt:"adjustment"},null,-1),re={__name:"combineWatchTogether",setup(a){return(o,n)=>(f(),_(k,{activator:"#combineWatchTogether","max-width":"450"},{default:l(({isActive:t})=>[e(y,{title:"併合看",height:"420px"},{actions:l(()=>[e(g,null,{default:l(()=>[me,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},fe=""+new URL("chargeOff-XhhdcRys.jpg",import.meta.url).href,Ve=b("img",{src:fe,alt:"adjustment"},null,-1),_e={__name:"chargeOff",setup(a){return(o,n)=>(f(),_(k,{activator:"#chargeOff","max-width":"1225"},{default:l(({isActive:t})=>[e(y,{title:"回沖",height:"920px"},{actions:l(()=>[e(g,null,{default:l(()=>[Ve,e(h,{"button-type":"minor",style:{position:"absolute",color:"aquamarine"},onClick:p=>{t.value=!1}},null,8,["onClick"]),e(i,null,{default:l(()=>[e(d,{class:"center"},{default:l(()=>[e(V,{"button-type":"edit",class:"ma-5",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 確認 ")]),_:2},1032,["onClick"]),e(V,{class:"ma-5","button-type":"cancel",onClick:p=>{t.value=!1}},{default:l(()=>[u(" 取消 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}},ke={__name:"afterEvaluateSetting",setup(a){const o=[{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"},{channel:"ET-N",grp:"4.15",slot:"14"}];return(n,t)=>{const p=c("el-button"),s=Z,U=W,z=O,r=c("el-input"),P=L,v=S,w=c("el-table-column"),B=c("el-table");return f(),_(g,null,{default:l(()=>[e(i,{class:"d-flex ml-5 mt-1",justify:"start"},{default:l(()=>[e(p,{class:"text-editButton"},{default:l(()=>[u("清除")]),_:1}),e(p,{class:"text-editButton"},{default:l(()=>[u("存檔")]),_:1}),e(p,{class:"text-editButton"},{default:l(()=>[u("複製")]),_:1}),e(p,{class:"text-editButton",id:"editValue"},{default:l(()=>[u("調值")]),_:1}),e(p,{class:"text-editButton",id:"splitSchedule"},{default:l(()=>[u("拆單")]),_:1}),e(p,{class:"text-editButton",id:"addBudget"},{default:l(()=>[u("加預算")]),_:1}),e(p,{class:"text-editButton",id:"adjustValue"},{default:l(()=>[u("調整")]),_:1}),e(p,{class:"text-editButton",id:"watchTogether"},{default:l(()=>[u("合看")]),_:1}),e(p,{class:"text-editButton",id:"combineWatchTogether"},{default:l(()=>[u("併合看")]),_:1}),e(p,{class:"text-editButton",id:"chargeOff"},{default:l(()=>[u("回沖")]),_:1}),e(p,{class:"text-editButton"},{default:l(()=>[u("下筆")]),_:1}),e(p,{class:"text-editButton"},{default:l(()=>[u("上筆")]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(s),e(U),e(z)]),_:1}),e(d,{cols:"8"},{default:l(()=>[e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[0]||(t[0]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("可補日期")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[1]||(t[1]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("停播日期")]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(P,{title:"AE備註",rowNum:7})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(P,{title:"備註",isInput:""})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(P,{title:"超買原因",isInput:""})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(d,{cols:"4",class:"mt-5"},{default:l(()=>[e(v,{title:"EBC-主單台別"}),e(v,{title:"EBC-可補台別"}),e(v,{title:"EBC-已買到停補"})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(B,{data:o,style:{width:"100%",height:"440px"},"cell-style":{padding:0},"show-summary":""},{default:l(()=>[e(w,{prop:"channel",label:"channel",width:"120"}),e(w,{prop:"grp",label:"grp",width:"120"}),e(w,{prop:"slot",label:"slot"})]),_:1})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(r,{modelValue:n.input,"onUpdate:modelValue":t[2]||(t[2]=m=>n.input=m),style:{display:"flex"},placeholder:"Please input",class:"mt-2"},null,8,["modelValue"]),e(B,{data:o,style:{width:"100%",height:"400px"},"cell-style":{padding:0},"show-summary":""},{default:l(()=>[e(w,{prop:"channel",label:"channel",width:"120"}),e(w,{prop:"grp",label:"grp",width:"120"}),e(w,{prop:"slot",label:"slot"})]),_:1})]),_:1})]),_:1}),e(i,{class:"mt-3"},{default:l(()=>[e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[3]||(t[3]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("合看單號")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[4]||(t[4]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("結案月份")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[5]||(t[5]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("結案處理日期")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[6]||(t[6]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("結案分類")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[7]||(t[7]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("調整月份")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[8]||(t[8]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("分類調整")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"4",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[9]||(t[9]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("實買產值")]),append:l(()=>[u(" 510D計算至 ")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[10]||(t[10]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("發票金額")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[11]||(t[11]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("預開金額")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[12]||(t[12]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("已沖金額")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[13]||(t[13]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("調整金額")]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"2",class:"settingBox mt-2"},{default:l(()=>[e(r,{modelValue:n.input1,"onUpdate:modelValue":t[14]||(t[14]=m=>n.input1=m),placeholder:"Please input",size:"small"},{prepend:l(()=>[u("回沖金額")]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(K),e(ee),e(ae),e(ne),e(pe),e(re),e(_e)]),_:1})}}};export{ke as default};
