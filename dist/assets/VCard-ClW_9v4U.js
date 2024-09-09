import{s,K as c,a1 as J,z as r,a as n,l as b,M as I,bd as K,I as y,a5 as B,F as P,ar as S,V as x,ap as V,a4 as Z,a$ as q,a6 as G,aH as Q,be as U,bf as W,a8 as X,a9 as Y,Z as ee,$ as ae,ab as te,a0 as ne,ad as de,ae as le,af as ie,b1 as se,ag as ce,aJ as re,bg as ue,bh as ve,ah as oe,ak as me,y as T,al as ye,am as be,bi as ge,aR as ke,an as fe}from"./index-DCp_fKZt.js";const Ce=s()({name:"VCardActions",props:c(),setup(e,d){let{slots:t}=d;return J({VBtn:{slim:!0,variant:"text"}}),r(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=b({opacity:[Number,String],...c(),...I()},"VCardSubtitle"),Ie=s()({name:"VCardSubtitle",props:Ve(),setup(e,d){let{slots:t}=d;return r(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ae=K("v-card-title"),he=b({appendAvatar:String,appendIcon:y,prependAvatar:String,prependIcon:y,subtitle:[String,Number],title:[String,Number],...c(),...B()},"VCardItem"),pe=s()({name:"VCardItem",props:he(),setup(e,d){let{slots:t}=d;return r(()=>{var v;const a=!!(e.prependAvatar||e.prependIcon),g=!!(a||t.prepend),u=!!(e.appendAvatar||e.appendIcon),k=!!(u||t.append),f=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(P,null,[e.prependAvatar&&n(S,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[f&&n(Ae,{key:"title"},{default:()=>{var l,i;return[(i=(l=t.title)==null?void 0:l.call(t))!=null?i:e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var l,i;return[(i=(l=t.subtitle)==null?void 0:l.call(t))!=null?i:e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),k&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(P,null,[e.appendIcon&&n(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(S,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Pe=b({opacity:[Number,String],...c(),...I()},"VCardText"),Se=s()({name:"VCardText",props:Pe(),setup(e,d){let{slots:t}=d;return r(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=b({appendAvatar:String,appendIcon:y,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Z(),...c(),...B(),...q(),...G(),...Q(),...U(),...W(),...X(),...Y(),...I(),...ee(),...ae({variant:"elevated"})},"VCard"),Be=s()({name:"VCard",directives:{Ripple:te},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:g}=ne(e),{borderClasses:u}=de(e),{colorClasses:k,colorStyles:f,variantClasses:C}=le(e),{densityClasses:v}=ie(e),{dimensionStyles:l}=se(e),{elevationClasses:i}=ce(e),{loaderClasses:D}=re(e),{locationStyles:L}=ue(e),{positionClasses:N}=ve(e),{roundedClasses:_}=oe(e),o=me(e,t),R=T(()=>e.link!==!1&&o.isLink.value),m=T(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return r(()=>{const F=R.value?"a":e.tag,M=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),H=M||E,O=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),w=H||$||O,z=!!(a.text||e.text!=null);return ye(n(F,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},g.value,u.value,k.value,v.value,i.value,D.value,N.value,_.value,C.value,e.class],style:[f.value,l.value,L.value,e.style],href:o.href.value,onClick:m.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var A;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(Se,{key:"text"},{default:()=>{var h,p;return[(p=(h=a.text)==null?void 0:h.call(a))!=null?p:e.text]}}),(A=a.default)==null?void 0:A.call(a),a.actions&&n(Ce,null,{default:a.actions}),fe(m.value,"v-card")]}}),[[be("ripple"),m.value&&e.ripple]])}),{}}});export{Be as V};
