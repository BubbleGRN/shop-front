import{R as y,ad as V,G as h,c as g,Y as n,$ as v,X as o,L as s,aw as d,ai as l,W as u,_ as b,O as w,am as x}from"./index-BQjww6-U.js";import{b as p}from"./route-block-B_A1xBdJ.js";import{V as m,a as A}from"./VRow-B57Qcbvj.js";import{V as D}from"./VDivider-tgJrZ7Tv.js";import{V as B}from"./VDataTable-BOOHD5CO.js";import{V as C}from"./VContainer-D0JmCo6_.js";import"./VPagination-CAyFL_id.js";import"./VList-g4DVk9g1.js";import"./VMenu-BmvrTHVb.js";const L={class:"text-center"},O={__name:"orders",setup(S){const{apiAuth:f}=x(),{t:a}=y(),_=V(),i=h([]),k=g(()=>[{title:"ID",key:"_id"},{title:a("order.account"),key:"user.account"},{title:a("order.createdAt"),key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:a("order.cart"),key:"cart",sortable:!1},{title:a("order.price"),key:"price",value:t=>t.cart.reduce((r,e)=>r+e.product.price*e.quantity,0)}]);return(async()=>{var t,r;try{const{data:e}=await f.get("/order/all");i.value=e.result}catch(e){console.log(e),_({text:a("api."+(((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)||"unknownError")),snackbarProps:{color:"red"}})}})(),(t,r)=>(n(),v(C,null,{default:o(()=>[s(A,null,{default:o(()=>[s(m,{cols:"12"},{default:o(()=>[d("h1",L,l(t.$t("nav.orders")),1)]),_:1}),s(D),s(m,{cols:"12"},{default:o(()=>[s(B,{items:i.value,headers:k.value},{"item.cart":o(e=>[d("ul",null,[(n(!0),u(w,null,b(e.item.cart,c=>(n(),u("li",{key:c._id},l(c.product.name)+" x "+l(c.quantity),1))),128))])]),_:2},1032,["items","headers"])]),_:1})]),_:1})]),_:1}))}};typeof p=="function"&&p(O);export{O as default};
