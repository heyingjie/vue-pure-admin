import{d as M,J as B,ao as E,y as N,j as o,u as K,F as T,aW as D,aX as c,aY as d,ap as F,T as j,r as L,n as C,z,b as J,g as H,c as W,w as R,h as X,t as A,k as Y}from"./index-ppvmDqDn.js";const i="stay",h="hs-on",f="hs-off",m="hs-range",g="both-left-sides",S="both-right-sides";let w="right",b=[],s=[];const G={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},O=M({name:"ReSelector",props:G,emits:["selectedVal"],setup(l,{emit:_}){const a=F(),y=l.value,q=B(()=>l.disabled),v=B(()=>{const e=[];let t=0,n=y;for(y!==Math.floor(y)&&n--;t<n;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),x=e=>{if(!l.disabled){if(s.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(w="right",D(!1,S,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),m),t++;else for(w="left",D(!0,S,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),m),t--}c(document.querySelector("."+f+e),h)}},u=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),s.length===1){const n=b[0].index;if(e>=n)for(let r=0;r<=e;r++)d(document.querySelector(".hs-select__item"+r),m);else for(;e<=n;)d(document.querySelector(".hs-select__item"+e),m),e++}},V=(e,t)=>{if(l.disabled)return;const n=s.length;n<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(w==="right"?c(document.querySelector(".hs-select__item"+s[1].index),S):c(document.querySelector(".hs-select__item"+s[1].index),g)),n===1&&(w==="right"?_("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):_("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):N(()=>{s.forEach(r=>{d(document.querySelector("."+f+r.index),h,i),d(document.querySelector(".hs-select__item"+r.index),g,S)}),s=[],b=[];for(let r=0;r<=l.max.length;r++){const $=document.querySelector(".hs-select__item"+r);$&&d($,m)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g)})},I=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,n)=>t-n),c(a.refs["hsdiv"+l.HsKey+e[0]],h,i),c(a.refs["hstd"+l.HsKey+e[0]],g),c(a.refs["hsdiv"+l.HsKey+e[1]],h,i),c(a.refs["hstd"+l.HsKey+e[1]],S);e[1]>=e[0];)c(a.refs["hstd"+l.HsKey+e[0]],m),e[0]++}};return E(()=>{N(()=>{I(l.echo)})}),()=>o(T,null,[o("table",{cellspacing:"0",cellpadding:"0"},[o("tbody",null,[o("tr",null,[l.max.map((e,t)=>o("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>x(t),onMouseleave:()=>u(t),onClick:()=>V(t,e),style:{cursor:K(q)?"auto":"pointer",textAlign:"center"},key:t},[o("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[K(v)[t]+t]}`},[o("span",null,[e])])]))])])])])}}),P=j(O),Q={class:"font-medium"},U={key:0,class:"mt-3"},k=M({name:"Selector",__name:"index",setup(l){const _=L(""),a=L([{title:"基本使用",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),y=({left:q,right:v})=>{_.value=`${q}-${v}`};return(q,v)=>{const x=J("el-card");return H(),C("div",null,[(H(!0),C(T,null,z(a.value,(u,V)=>(H(),W(x,{key:V,class:"mb-2",shadow:"never"},{header:R(()=>[X("span",Q,A(u.title),1)]),default:R(()=>[o(K(P),{HsKey:V,echo:u.echo,disabled:u.disabled,onSelectedVal:y},null,8,["HsKey","echo","disabled"]),u.disabled?Y("",!0):(H(),C("h4",U,"选中范围："+A(_.value),1))]),_:2},1024))),128))])}}});export{k as default};
