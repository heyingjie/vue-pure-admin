import{d as h,b as s,f as m,g as n,n as g,h as c,t as y,u as o,dA as v,j as t,w as e,i as a,dB as u,c as _,k as p,l as f}from"./index-ppvmDqDn.js";const x={class:"mb-2"},w=c("div",{class:"card-header"},"组件方式判断权限",-1),k=c("div",{class:"card-header"},"函数方式判断权限",-1),B=c("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),D=h({name:"PermissionButton",__name:"index",setup(A){return(C,N)=>{const d=s("el-button"),r=s("Auth"),l=s("el-space"),b=s("el-card"),i=m("auth");return n(),g("div",null,[c("p",x,"当前拥有的code列表："+y(o(v)()),1),t(b,{shadow:"never",class:"mb-2"},{header:e(()=>[w]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[t(r,{value:"btn_add"},{default:e(()=>[t(d,{text:"",bg:"",type:"warning"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_edit"]},{default:e(()=>[t(d,{text:"",bg:"",type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(d,{text:"",bg:"",type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,{shadow:"never",class:"mb-2"},{header:e(()=>[k]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[o(u)("btn_add")?(n(),_(d,{key:0,text:"",bg:"",type:"warning"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})):p("",!0),o(u)(["btn_edit"])?(n(),_(d,{key:1,text:"",bg:"",type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):p("",!0),o(u)(["btn_add","btn_edit","btn_delete"])?(n(),_(d,{key:2,text:"",bg:"",type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):p("",!0)]),_:1})]),_:1}),t(b,{shadow:"never"},{header:e(()=>[B]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[f((n(),_(d,{text:"",bg:"",type:"warning"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[i,"btn_add"]]),f((n(),_(d,{text:"",bg:"",type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[i,["btn_edit"]]]),f((n(),_(d,{text:"",bg:"",type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[i,["btn_add","btn_edit","btn_delete"]]])]),_:1})]),_:1})])}}});export{D as default};
