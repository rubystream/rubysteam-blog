import{_ as l}from"./ProseCode.vue.bf8fadd1.js";import{j as n,o as s,N as i,w as o,a as r,R as u,S as g,Q as c}from"./entry.b46ca791.js";const h=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null},style:{type:[String,Object],default:null}},setup(e){return(t,d)=>{const a=l;return s(),i(a,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:o(()=>[r("pre",{class:u(t.$props.class),style:g(e.style)},[c(t.$slots,"default")],6)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{h as default};