import{V as b,a as x,b as K}from"./VRow-C_fn9xde.js";import{i as Q,b as e,m as E,T as Y,j as Z,k as D,l as se,s as j,n as ne,q as re,u as de,r as g,o as U,f as ee,w as t,e as d,c as I,F as T,v as B,V as pe,x as M,a as P,y as ue,z as ce,A as fe,d as N,I as ve,B as $,C as be,D as he,E as q,G as ge,H as Ve,J as Se,_ as _e,p as we,h as ye}from"./index-DUw5DD7G.js";const Fe=Z({target:[Object,Array]},"v-dialog-transition"),Ae=Q()({name:"VDialogTransition",props:Fe(),setup(u,y){let{slots:f}=y;const a={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,F){var h;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),s.style.visibility="";const{x:o,y:p,sx:V,sy:A,speed:r}=J(u.target,s),S=D(s,[{transform:"translate(".concat(o,"px, ").concat(p,"px) scale(").concat(V,", ").concat(A,")"),opacity:0},{}],{duration:225*r,easing:se});(h=W(s))==null||h.forEach(c=>{D(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:j})}),S.finished.then(()=>F())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,F){var h;await new Promise(c=>requestAnimationFrame(c));const{x:o,y:p,sx:V,sy:A,speed:r}=J(u.target,s);D(s,[{},{transform:"translate(".concat(o,"px, ").concat(p,"px) scale(").concat(V,", ").concat(A,")"),opacity:0}],{duration:125*r,easing:ne}).finished.then(()=>F()),(h=W(s))==null||h.forEach(c=>{D(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:j})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>u.target?e(Y,E({name:"dialog-transition"},a,{css:!1}),f):e(Y,{name:"dialog-transition"},f)}});function W(u){var f;const y=(f=u.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:f.children;return y&&[...y]}function J(u,y){const f=re(u),a=de(y),[s,F]=getComputedStyle(y).transformOrigin.split(" ").map(v=>parseFloat(v)),[o,p]=getComputedStyle(y).getPropertyValue("--v-overlay-anchor-origin").split(" ");let V=f.left+f.width/2;o==="left"||p==="left"?V-=f.width/2:(o==="right"||p==="right")&&(V+=f.width/2);let A=f.top+f.height/2;o==="top"||p==="top"?A-=f.height/2:(o==="bottom"||p==="bottom")&&(A+=f.height/2);const r=f.width/a.width,S=f.height/a.height,h=Math.max(1,r,S),c=r/h||0,R=S/h||0,n=a.width*a.height/(window.innerWidth*window.innerHeight),X=n>.12?Math.min(1.5,(n-.12)*10+1):1;return{x:V-(s+a.left),y:A-(F+a.top),sx:c,sy:R,speed:X}}const Re=P("span",{style:{"font-size":"12px",padding:"0 10px"}},"平台",-1),Xe=P("h5",{class:"ml-5 mt-2 pl-2 pr-2 bg-green-accent-1",style:{height:"20px"}}," PT佔比大於50% ",-1),Ne=P("h5",{class:"ml-5 mt-2 pl-2 pr-2 bg-pink-lighten-4",style:{height:"20px"}}," 現金額度已使用完 ",-1),Pe={__name:"materialSetting",emits:["closeDialogVisible"],setup(u,{emit:y}){const f=y,a=[{item1:"全國電子-家的生成式 7月空調九折 日立(SF202-17)",item2:"家的主人",item3:"30",item4:"SF202-17",item5:"07/18~07/18",item6:"000000006100000",item7:"000000006092530+0000000021300000",item8:"07/18~07/21",item9:"25-49M",item10:"2.80",item11:"2.80",item12:"0.00",item13:"07/18",item14:"07/18",item15:"張煌偉",item16:"2024071048",item17:"Y",item18:"1"},{item1:"全國電子-家的生成式 7月空調九折 日立(SF202-17)",item2:"家的主人",item3:"30",item4:"SF202-17",item5:"07/18~07/18",item6:"000000006100000",item7:"000000006092530+0000000021300000",item8:"07/18~07/21",item9:"25-49M",item10:"2.80",item11:"2.80",item12:"0.00",item13:"07/18",item14:"07/18",item15:"張煌偉",item16:"2024071048",item17:"Y",item18:"1"},{item1:"全國電子-家的生成式 7月空調九折 日立(SF202-17)",item2:"家的主人",item3:"30",item4:"SF202-17",item5:"07/18~07/18",item6:"000000006100000",item7:"000000006092530+0000000021300000",item8:"07/18~07/21",item9:"25-49M",item10:"2.80",item11:"2.80",item12:"0.00",item13:"07/18",item14:"07/18",item15:"張煌偉",item16:"2024071048",item17:"Y",item18:"1"},{item1:"全國電子-家的生成式 7月空調九折 日立(SF202-17)",item2:"家的主人",item3:"30",item4:"SF202-17",item5:"07/18~07/18",item6:"000000006100000",item7:"000000006092530+0000000021300000",item8:"07/18~07/21",item9:"25-49M",item10:"2.80",item11:"2.80",item12:"0.00",item13:"07/18",item14:"07/18",item15:"張煌偉",item16:"2024071048",item17:"Y",item18:"1"},{item1:"全國電子-家的生成式 7月空調九折 日立(SF202-17)",item2:"家的主人",item3:"30",item4:"SF202-17",item5:"07/18~07/18",item6:"000000006100000",item7:"000000006092530+0000000021300000",item8:"07/18~07/21",item9:"25-49M",item10:"2.80",item11:"2.80",item12:"0.00",item13:"07/18",item14:"07/18",item15:"張煌偉",item16:"2024071048",item17:"Y",item18:"1"}],s=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],F=()=>{console.log("close"),f("closeDialogVisible",!0)};return(o,p)=>{const V=g("el-button"),A=g("el-input"),r=g("el-radio"),S=g("el-radio-group"),h=g("el-option"),c=g("el-select"),R=g("el-checkbox"),n=g("el-table-column"),X=g("el-table");return U(),ee(K,{style:{"background-color":"white"}},{default:t(()=>[e(b,null,{default:t(()=>[e(x,null,{default:t(()=>[e(b,{cols:"2"},{default:t(()=>[e(A,{modelValue:o.input1,"onUpdate:modelValue":p[0]||(p[0]=v=>o.input1=v),placeholder:"2024/07/01",size:"small"},{prepend:t(()=>[d("補cue日期")]),append:t(()=>[e(V,{type:"primary",size:"small"},{default:t(()=>[d("查詢")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"3"},{default:t(()=>[e(S,{modelValue:o.radio1,"onUpdate:modelValue":p[1]||(p[1]=v=>o.radio1=v)},{default:t(()=>[e(r,{value:"1"},{default:t(()=>[d("停播(不排cue)")]),_:1}),e(r,{value:"2"},{default:t(()=>[d("限定PT")]),_:1}),e(r,{value:"3"},{default:t(()=>[d("限定非PT")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:t(()=>[Re,e(c,{modelValue:o.value,"onUpdate:modelValue":p[2]||(p[2]=v=>o.value=v),placeholder:"Select",style:{width:"100px"}},{default:t(()=>[(U(),I(T,null,B(s,v=>e(h,{key:v.value,label:v.label,value:v.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"3","justify-content":"left",style:{display:"flex"}},{default:t(()=>[Xe,Ne,e(R,{modelValue:o.checked5,"onUpdate:modelValue":p[3]||(p[3]=v=>o.checked5=v),label:"走期內",class:"ml-5 mt-1"},null,8,["modelValue"])]),_:1}),e(b,{cols:"2","justify-content":"end",style:{display:"flex"}},{default:t(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":p[4]||(p[4]=v=>o.value=v),placeholder:"Select",style:{width:"200px"}},{default:t(()=>[(U(),I(T,null,B(s,v=>e(h,{key:v.value,label:v.label,value:v.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(V,{type:"primary",size:"small",class:"ml-5 mt-1"},{default:t(()=>[d("存檔")]),_:1}),e(V,{type:"default",size:"small",class:"ml-5 mt-1",onClick:F},{default:t(()=>[e(pe,null,{default:t(()=>[d("mdi-close")]),_:1})]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(X,{data:a,style:M({height:o.settingVH}),onRowDblclick:o.test2,onRowClick:o.test0},{default:t(()=>[e(n,{width:"360",prop:"item1",label:"材料名稱"}),e(n,{width:"240",prop:"item2",label:"篇名"}),e(n,{width:"60",prop:"item3",label:"秒"}),e(n,{width:"100",prope:"item4",label:"CM材料"}),e(n,{width:"120",prop:"item5",label:"限制日期"}),e(n,{width:"150",prop:"item6",label:"首日限制"}),e(n,{width:"300",prop:"item7",label:"一般限制"}),e(n,{width:"120",prop:"item8",label:"走期"}),e(n,{prop:"item9",label:"Target"}),e(n,{prop:"item10",label:"尚欠"}),e(n,{prop:"item11",label:"GRP"}),e(n,{prop:"item12",label:"已達"}),e(n,{prop:"item13",label:"可補日"}),e(n,{prop:"item14",label:"停播日"}),e(n,{width:"100",prop:"item15",label:"業務員"}),e(n,{width:"120",prop:"item16",label:"評估單號"}),e(n,{prop:"item17",label:"停播"}),e(n,{prop:"item18",label:"序"})]),_:1},8,["style","onRowDblclick","onRowClick"])]),_:1})]),_:1})]),_:1})}}},xe=Z({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ue({origin:"center center",scrollStrategy:"block",transition:{component:Ae},zIndex:2400})},"VDialog"),He=Q()({name:"VDialog",props:xe(),emits:{"update:modelValue":u=>!0,afterLeave:()=>!0},setup(u,y){let{emit:f,slots:a}=y;const s=ce(u,"modelValue"),{scopeId:F}=fe(),o=N();function p(r){var c,R;const S=r.relatedTarget,h=r.target;if(S!==h&&((c=o.value)!=null&&c.contentEl)&&((R=o.value)!=null&&R.globalTop)&&![document,o.value.contentEl].includes(h)&&!o.value.contentEl.contains(h)){const n=Se(o.value.contentEl);if(!n.length)return;const X=n[0],v=n[n.length-1];S===X?v.focus():X.focus()}}ve&&$(()=>s.value&&u.retainFocus,r=>{r?document.addEventListener("focusin",p):document.removeEventListener("focusin",p)},{immediate:!0});function V(){var r;(r=o.value)!=null&&r.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function A(){f("afterLeave")}return $(s,async r=>{var S;r||(await be(),(S=o.value.activatorEl)==null||S.focus({preventScroll:!0}))}),he(()=>{const r=q.filterProps(u),S=E({"aria-haspopup":"dialog","aria-expanded":String(s.value)},u.activatorProps),h=E({tabindex:-1},u.contentProps);return e(q,E({ref:o,class:["v-dialog",{"v-dialog--fullscreen":u.fullscreen,"v-dialog--scrollable":u.scrollable},u.class],style:u.style},r,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,"aria-modal":"true",activatorProps:S,contentProps:h,role:"dialog",onAfterEnter:V,onAfterLeave:A},F),{activator:a.activator,default:function(){for(var c=arguments.length,R=new Array(c),n=0;n<c;n++)R[n]=arguments[n];return e(ge,{root:"VDialog"},{default:()=>{var X;return[(X=a.default)==null?void 0:X.call(a,...R)]}})}})}),Ve({},o)}}),O=u=>(we("data-v-c6aaa84f"),u=u(),ye(),u),ze=O(()=>P("h5",{class:"ml-5 mt-2 pl-2 pr-2 bg-green-accent-1",style:{height:"20px"}}," PT佔比大於50% ",-1)),Ue=O(()=>P("h5",{class:"ml-5 mt-2 pl-2 pr-2 bg-pink-lighten-4",style:{height:"20px"}}," 現金額度已使用完 ",-1)),ke=O(()=>P("span",{style:{"font-size":"12px",padding:"0 10px"}},"日GRP",-1)),De=O(()=>P("span",{style:{"font-size":"12px",padding:"0 10px"}},"預估收視率",-1)),Ee={__name:"cue",setup(u){const y=N("Y"),f=N("All"),a=N(""),s=N(!1),F=N(!1),o=N("64vh"),p=N("64vh"),V=N(!1),A=()=>{H.value.length>0&&(s.value=!0,o.value=s.value?"52vh":"64vh")},r=_=>{H.value.push(_),s.value=!0,o.value=s.value?"52vh":"64vh"},S=_=>{console.log(_.index),H.value.splice(_.index,1)},h=({row:_,rowIndex:m})=>{_.index=m},c=()=>{console.log("close"),V.value=!1},R=_=>{const m=_.used!=="0";F.value=!!m,p.value=F.value?"52vh":"64vh"},n=()=>{V.value=!0},X=[{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"0",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"},{programName:"0855~0955(1棚)0900 東森新聞(六日)",available:"600",used:"500",ramain:"100",other:"200",self:"300"}],v=[{materialName:"日立冷氣",chapter:"(HD)",seconds:"5",sales:"A2.2",scheduleId:"113072132",materialId:"SC090-31"},{materialName:"家樂福-中元",chapter:"(HD)",seconds:"5",sales:"A2.2",scheduleId:"113072132",materialId:"SC090-31"},{materialName:"台灣運彩",chapter:"(HD)",seconds:"5",sales:"A2.2",scheduleId:"113072132",materialId:"SC090-31"},{materialName:"大金空調",chapter:"(HD)",seconds:"5",sales:"A2.2",scheduleId:"113072132",materialId:"SC090-31"}],te=[{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"},{item1:"7-11 飲料抽抽樂(SF204-14)",item2:"單/S1*H2補*RA",item3:"5",item4:"07/11~07/18",item5:"A2.2",item6:"80000",item7:"0.02",item8:"4240",item9:"0.02",item10:"貝立德",item11:"張瑞志",item12:"26.67",item13:"200000",item14:"",item15:"2024071150",item16:"SF204-16",item17:"統一超商",item18:"17",item19:"",item20:"26.67",item21:"0.00",item22:"0.00",item23:"200000",item24:"0",item25:"032800970002822024070741-1"}],H=N([]),ie=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return $(()=>H.value,_=>{console.log(_.length),_.length==0&&(s.value=!1,o.value=s.value?"56vh":"64vh")},{deep:!0}),(_,m)=>{const C=g("el-button"),me=g("el-checkbox"),le=g("el-option"),ae=g("el-select"),w=g("el-input"),z=g("el-radio"),G=g("el-radio-group"),i=g("el-table-column"),k=g("el-table"),L=g("el-drawer"),oe=Pe;return U(),ee(K,null,{default:t(()=>[e(x,{class:"mt-1"},{default:t(()=>[e(b,{cols:"4","justify-content":"left",style:{display:"flex"}},{default:t(()=>[e(C,{size:"large"},{default:t(()=>[d("查詢")]),_:1}),ze,Ue,e(me,{modelValue:_.checked5,"onUpdate:modelValue":m[0]||(m[0]=l=>_.checked5=l),label:"走期內",class:"ml-5 mt-1"},null,8,["modelValue"])]),_:1}),e(b,{cols:"3",offset:"5","justify-content":"right",style:{display:"flex"}},{default:t(()=>[e(ae,{modelValue:_.value,"onUpdate:modelValue":m[1]||(m[1]=l=>_.value=l),placeholder:"Select",size:"large",style:{width:"240px"}},{default:t(()=>[(U(),I(T,null,B(ie,l=>e(le,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(C,{size:"large"},{default:t(()=>[d("印")]),_:1}),e(C,{size:"large",onClick:n},{default:t(()=>[d("材料設定")]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(b,{cols:"2"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[2]||(m[2]=l=>a.value=l),placeholder:"2024/07/01",size:"small"},{prepend:t(()=>[d("補cue日期")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[3]||(m[3]=l=>a.value=l),placeholder:"U5",size:"small"},{prepend:t(()=>[d("頻道")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[5]||(m[5]=l=>a.value=l),placeholder:"1100",size:"small"},{prepend:t(()=>[d("時段")]),append:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[4]||(m[4]=l=>a.value=l),placeholder:"1200",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[6]||(m[6]=l=>a.value=l),placeholder:"150",size:"small"},{prepend:t(()=>[d("應排")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[7]||(m[7]=l=>a.value=l),placeholder:"0",size:"small"},{prepend:t(()=>[d("已排")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[8]||(m[8]=l=>a.value=l),placeholder:"0",size:"small"},{prepend:t(()=>[d("他補")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[9]||(m[9]=l=>a.value=l),placeholder:"195",size:"small"},{prepend:t(()=>[d("自補")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"1"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[10]||(m[10]=l=>a.value=l),placeholder:"-45",size:"small"},{prepend:t(()=>[d("剩餘")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[13]||(m[13]=l=>a.value=l),placeholder:"0.02",size:"small"},{prepend:t(()=>[d("預估值")]),append:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[11]||(m[11]=l=>a.value=l),placeholder:"0.02",size:"small"},null,8,["modelValue"]),e(w,{modelValue:a.value,"onUpdate:modelValue":m[12]||(m[12]=l=>a.value=l),placeholder:"1",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(x,{class:""},{default:t(()=>[e(b,{cols:"4"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[16]||(m[16]=l=>a.value=l),placeholder:"2024070478-2",size:"small"},{prepend:t(()=>[d("事後評估單")]),append:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[14]||(m[14]=l=>a.value=l),placeholder:"MB045-13",size:"small",style:{width:"120px"}},null,8,["modelValue"]),e(w,{modelValue:a.value,"onUpdate:modelValue":m[15]||(m[15]=l=>a.value=l),placeholder:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",size:"small"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:t(()=>[e(w,{modelValue:a.value,"onUpdate:modelValue":m[17]||(m[17]=l=>a.value=l),placeholder:"1.00",size:"small"},{prepend:t(()=>[d("自訂權重值")]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:t(()=>[ke,e(G,{modelValue:y.value,"onUpdate:modelValue":m[18]||(m[18]=l=>y.value=l)},{default:t(()=>[e(z,{value:"Y"},{default:t(()=>[d("顯示")]),_:1}),e(z,{value:"N"},{default:t(()=>[d("不顯示")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"3"},{default:t(()=>[De,e(G,{modelValue:f.value,"onUpdate:modelValue":m[19]||(m[19]=l=>f.value=l)},{default:t(()=>[e(z,{value:"All"},{default:t(()=>[d("全部")]),_:1}),e(z,{value:"New"},{default:t(()=>[d("新估值")]),_:1}),e(z,{value:"Old"},{default:t(()=>[d("舊估值")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(b,{cols:"4"},{default:t(()=>[e(k,{data:X,style:M([{width:"100%"},{height:p.value}]),"cell-style":{padding:0},onRowDblclick:R},{default:t(()=>[e(i,{prop:"programName",label:"節目名稱"}),e(i,{prop:"available",label:"應排",width:"60"}),e(i,{prop:"used",label:"已排",width:"60"}),e(i,{prop:"ramain",label:"剩餘",width:"60"}),e(i,{prop:"other",label:"他補",width:"60"}),e(i,{prop:"self",label:"自補",width:"60"})]),_:1},8,["style"])]),_:1}),e(b,{cols:"8"},{default:t(()=>[e(k,{data:te,style:M({height:o.value}),"cell-style":{padding:0},onRowDblclick:r,onRowClick:A},{default:t(()=>[e(i,{width:"240",prop:"item1",label:"材料名稱"}),e(i,{width:"240",prop:"item2",label:"篇名"}),e(i,{width:"60",prop:"item3",label:"秒"}),e(i,{width:"60",prope:"item4",label:"走期"}),e(i,{width:"100",prop:"item5",label:"Target"}),e(i,{width:"100",prop:"item6",label:"CPRP"}),e(i,{prop:"item7",label:"Rating"}),e(i,{prop:"item8",label:"產值"}),e(i,{prop:"item9",label:"日GRP"}),e(i,{prop:"item10",label:"代理商"}),e(i,{prop:"item11",label:"業務員"}),e(i,{prop:"item12",label:"尚欠"}),e(i,{prop:"item13",label:"預算"}),e(i,{prop:"item14",label:"可補日"}),e(i,{width:"120",prop:"item15",label:"預估單號"}),e(i,{width:"100",prop:"item16",label:"CM材料"}),e(i,{prop:"item17",label:"客戶"}),e(i,{prop:"item18",label:"剩天"}),e(i,{prop:"item19",label:"補檔序"}),e(i,{prop:"item20",label:"GRP"}),e(i,{prop:"item21",label:"合計GRP"}),e(i,{prop:"item22",label:"PT GRP"}),e(i,{prop:"item23",label:"計費金額"}),e(i,{prop:"item24",label:"回沖前期"}),e(i,{width:"240",prop:"item25",label:"組合[產值+剩(天)+尚欠+評估單號]"})]),_:1},8,["style"])]),_:1})]),_:1}),e(L,{modelValue:F.value,"onUpdate:modelValue":m[20]||(m[20]=l=>F.value=l),title:"I am the title","with-header":!1,direction:"btt",size:"20%",modal:!1,class:"drawer2","modal-class":"drawer-modal"},{default:t(()=>[e(k,{data:v,style:{height:"24vh"},"cell-style":{padding:0}},{default:t(()=>[e(i,{width:"180",prop:"materialName",label:"材料名稱"}),e(i,{prop:"chapter",label:"篇名"}),e(i,{width:"60",prop:"seconds",label:"秒數"}),e(i,{width:"60",prope:"sales",label:"銷售"}),e(i,{width:"100",prop:"scheduleId",label:"排期單號"}),e(i,{width:"100",prop:"materialId",label:"材料單號"})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:s.value,"onUpdate:modelValue":m[21]||(m[21]=l=>s.value=l),title:"I am the title","with-header":!1,direction:"btt",size:"20%",modal:!1,class:"drawer","modal-class":"drawer-modal"},{default:t(()=>[e(k,{data:H.value,onRowDblclick:S,"row-class-name":h,"cell-style":{padding:0}},{default:t(()=>[e(i,{width:"240",prop:"item1",label:"材料名稱"}),e(i,{width:"240",prop:"item2",label:"篇名"}),e(i,{width:"60",prop:"item3",label:"秒"}),e(i,{width:"60",prope:"item4",label:"走期"}),e(i,{width:"100",prop:"item5",label:"Target"}),e(i,{width:"100",prop:"item6",label:"CPRP"}),e(i,{prop:"item7",label:"Rating"}),e(i,{prop:"item8",label:"產值"}),e(i,{prop:"item9",label:"日GRP"}),e(i,{prop:"item10",label:"代理商"}),e(i,{prop:"item11",label:"業務員"}),e(i,{prop:"item12",label:"尚欠"}),e(i,{prop:"item13",label:"預算"}),e(i,{prop:"item14",label:"可補日"}),e(i,{width:"120",prop:"item15",label:"預估單號"}),e(i,{width:"100",prop:"item16",label:"CM材料"}),e(i,{prop:"item17",label:"客戶"}),e(i,{prop:"item18",label:"剩天"}),e(i,{prop:"item19",label:"補檔序"}),e(i,{prop:"item20",label:"GRP"}),e(i,{prop:"item21",label:"合計GRP"}),e(i,{prop:"item22",label:"PT GRP"}),e(i,{prop:"item23",label:"計費金額"}),e(i,{prop:"item24",label:"回沖前期"}),e(i,{width:"240",prop:"item25",label:"組合[產值+剩(天)+尚欠+評估單號]"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),e(He,{modelValue:V.value,"onUpdate:modelValue":m[22]||(m[22]=l=>V.value=l),title:"Dialog Title"},{default:t(()=>[e(oe,{onCloseDialogVisible:c})]),_:1},8,["modelValue"])]),_:1})}}},Ie=_e(Ee,[["__scopeId","data-v-c6aaa84f"]]);export{Ie as default};
