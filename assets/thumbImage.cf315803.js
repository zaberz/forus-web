import{o as t,c as i,s as e,e as h}from"./index-87294201.js";import{t as a}from"./thumbImage.f67e2665.js";import{_ as s}from"./_plugin-vue_export-helper.1b428a4d.js";const d=s({name:"ThumbImage",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},autoFix:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0}},data:()=>({imageWidth:"100%",imageHeight:"100%",thumbImage:""}),mounted(){this.thumbImage=a(this.src,{width:this.width})},methods:{imageLoad(t){if(!this.autoFix)return this.imageWidth="100%",void(this.imageHeight="100%");{let i,e,{width:h,height:a}=t.detail,s=h/a;this.width&&this.width>0?(i=this.width,e=Math.round(i/s)):this.height&&this.height>0?(e=this.height,i=Math.round(e*s)):(i=750,e=Math.round(i/s)),this.imageWidth=i+"rpx",this.imageHeight=e+"rpx"}}},watch:{src(t){this.thumbImage=a(t,{width:this.width})}}},[["render",function(a,s,d,m,o,r){const g=h;return t(),i(g,{src:a.thumbImage,mode:d.mode,onLoad:r.imageLoad,style:e({width:a.imageWidth,height:a.imageHeight}),"lazy-load":""},null,8,["src","mode","onLoad","style"])}]]);export{d as T};
