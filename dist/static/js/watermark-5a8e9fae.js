import{d as x,r as c,j as f,k as V,n as $,l as y,a as m,c as W,w as l,o as L,h as o,f as r,u as n,e as d}from"./index-26258e10.js";const B=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," 页面水印功能（将平台主题改为亮白色观察水印效果更明显哦） ")],-1),N=d("span",null," 请输入要创建水印的值：",-1),U=d("span",null,"请选择要创建水印的颜色：",-1),F=d("br",null,null,-1),j=x({name:"WaterMark",__name:"watermark",setup(M){const p=c(),k=c(),i=c("#409EFF"),u=c("vue-pure-admin"),{setWatermark:s,clear:g}=f(),{setWatermark:v,clear:b}=f(p),{setWatermark:_}=f(k);return V(()=>{$(()=>{_("无法删除的水印",{forever:!0,width:187,height:80})})}),y(()=>{g()}),(S,e)=>{const C=m("el-input"),w=m("el-color-picker"),t=m("el-button"),h=m("el-card");return L(),W(h,{shadow:"never"},{header:l(()=>[B]),default:l(()=>[N,o(C,{class:"mb-4 mr-4",style:{width:"200px"},modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a),clearable:""},null,8,["modelValue"]),U,o(w,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),"show-alpha":""},null,8,["modelValue"]),F,o(t,{onClick:e[2]||(e[2]=a=>n(s)(u.value,{fillStyle:i.value}))},{default:l(()=>[r(" 创建整页水印 ")]),_:1}),o(t,{onClick:e[3]||(e[3]=a=>n(s)(u.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[r(" 创建整页渐变水印 ")]),_:1}),o(t,{onClick:e[4]||(e[4]=a=>n(s)(u.value,{rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[r(" 创建整页渐变且水平90度的水印 ")]),_:1}),o(t,{onClick:e[5]||(e[5]=a=>n(s)(u.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:l(()=>[r(" 创建整页渐变且有阴影的水印 ")]),_:1}),o(t,{onClick:e[6]||(e[6]=a=>n(s)(u.value,{globalAlpha:.15,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[r(" 创建整页高透明渐变水印 ")]),_:1}),o(t,{onClick:n(g)},{default:l(()=>[r("清除整页水印")]),_:1},8,["onClick"]),d("div",{ref_key:"local",ref:p,class:"mt-4 mb-4 w-[1080px] h-[400px] border-dotted border-2 border-sky-500"},null,512),o(t,{onClick:e[7]||(e[7]=a=>n(v)("局部水印",{fillStyle:i.value,width:140,height:60}))},{default:l(()=>[r(" 创建局部水印 ")]),_:1}),o(t,{onClick:e[8]||(e[8]=a=>n(v)("局部水印",{width:140,height:60,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[r(" 创建局部渐变水印 ")]),_:1}),o(t,{onClick:e[9]||(e[9]=a=>n(v)("局部水印",{width:140,height:56.5,rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[r(" 创建局部渐变且水平90度的水印 ")]),_:1}),o(t,{onClick:e[10]||(e[10]=a=>n(v)("局部水印",{width:140,height:56.5,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:l(()=>[r(" 创建局部渐变且有阴影的水印 ")]),_:1}),o(t,{onClick:n(b)},{default:l(()=>[r("清除局部水印")]),_:1},8,["onClick"]),d("div",{ref_key:"preventLocal",ref:k,class:"mt-4 mb-4 w-[1080px] h-[400px] border-dotted border-2 border-indigo-500"},null,512)]),_:1})}}});export{j as default};
