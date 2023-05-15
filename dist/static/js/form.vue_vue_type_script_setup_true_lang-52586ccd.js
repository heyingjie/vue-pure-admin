import{ad as B,by as I,bC as R,d as g,L as S,bD as D,a5 as E,x as v,r as _,c as i,f as b,e as N,w as l,g as e,u as s,i as F,C as V,k as L,an as O,A as P}from"./index-e6b1f01c.js";const $=B({name:[{required:!0,message:"部门名称为必填项",trigger:"blur"}],phone:[{validator:(u,r,n)=>{r===""||I(r)?n():n(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(u,r,n)=>{r===""||R(r)?n():n(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),d=g({name:"ReCol",props:{value:{type:Number,default:24}},render(){const u=this.$attrs,r=this.value;return S(D,{xs:r,sm:r,md:r,lg:r,xl:r,...u},{default:()=>this.$slots.default()})}});function q(){const{isDark:u}=E(),r=v(()=>({"--el-switch-on-color":"#6abe39","--el-switch-off-color":"#e84749"})),n=v(()=>f=>f===1?{"--el-tag-text-color":u.value?"#6abe39":"#389e0d","--el-tag-bg-color":u.value?"#172412":"#f6ffed","--el-tag-border-color":u.value?"#274a17":"#b7eb8f"}:{"--el-tag-text-color":u.value?"#e84749":"#cf1322","--el-tag-bg-color":u.value?"#2b1316":"#fff1f0","--el-tag-border-color":u.value?"#58191c":"#ffa39e"});return{isDark:u,switchStyle:r,tagStyle:n}}const z={key:0},j=g({__name:"form",props:{formInline:{default:()=>({higherDeptOptions:[],parentId:0,name:"",principal:"",phone:"",email:"",sort:0,status:1,remark:""})}},setup(u,{expose:r}){const n=u,f=_(),{switchStyle:x}=q(),a=_(n.formInline);function h(){return f.value}return r({getRef:h}),(A,o)=>{const w=i("el-cascader"),m=i("el-form-item"),p=i("el-input"),y=i("el-input-number"),C=i("el-switch"),U=i("el-row"),k=i("el-form");return b(),N(k,{ref_key:"ruleFormRef",ref:f,model:a.value,rules:s($),"label-width":"82px"},{default:l(()=>[e(U,{gutter:30},{default:l(()=>[e(s(d),null,{default:l(()=>[e(m,{label:"上级部门"},{default:l(()=>[e(w,{class:"w-full",modelValue:a.value.parentId,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.parentId=t),options:a.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级部门"},{default:l(({node:t,data:c})=>[F("span",null,V(c.name),1),t.isLeaf?O("",!0):(b(),L("span",z," ("+V(c.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"部门名称",prop:"name"},{default:l(()=>[e(p,{modelValue:a.value.name,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.name=t),clearable:"",placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"部门负责人"},{default:l(()=>[e(p,{modelValue:a.value.principal,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.principal=t),clearable:"",placeholder:"请输入部门负责人"},null,8,["modelValue"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"手机号",prop:"phone"},{default:l(()=>[e(p,{modelValue:a.value.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>a.value.phone=t),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"邮箱",prop:"email"},{default:l(()=>[e(p,{modelValue:a.value.email,"onUpdate:modelValue":o[4]||(o[4]=t=>a.value.email=t),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"排序"},{default:l(()=>[e(y,{modelValue:a.value.sort,"onUpdate:modelValue":o[5]||(o[5]=t=>a.value.sort=t),min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])]),_:1})]),_:1}),e(s(d),{value:12,xs:24,sm:24},{default:l(()=>[e(m,{label:"部门状态"},{default:l(()=>[e(C,{modelValue:a.value.status,"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.status=t),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:P(s(x))},null,8,["modelValue","style"])]),_:1})]),_:1}),e(s(d),null,{default:l(()=>[e(m,{label:"备注"},{default:l(()=>[e(p,{modelValue:a.value.remark,"onUpdate:modelValue":o[7]||(o[7]=t=>a.value.remark=t),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{j as _,q as u};