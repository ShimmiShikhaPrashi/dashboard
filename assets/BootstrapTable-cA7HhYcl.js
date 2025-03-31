import{r as g,u as R,j as e,c as w}from"./index-CfiHEeh0.js";import{R as I,C as D}from"./Row-nwg7AR_5.js";import{C as P}from"./Card-DzbOgpl_.js";import{a as C}from"./Form-RXT1Sd5L.js";import{T as $}from"./Table-Dq8K94tP.js";import{m as B}from"./ElementChildren-Cw3hm-9o.js";import{P as b}from"./Pagination-CtF9ZvO_.js";import{B as m}from"./Badge-DCmSYehq.js";import"./Anchor-BZLK0fk8.js";const v=1e3;function q(t,n,a){const s=(t-n)/(a-n)*100;return Math.round(s*v)/v}function S({min:t,now:n,max:a,label:s,visuallyHidden:o,striped:x,animated:c,className:h,style:p,variant:u,bsPrefix:d,...i},j){return e.jsx("div",{ref:j,...i,role:"progressbar",className:w(h,`${d}-bar`,{[`bg-${u}`]:u,[`${d}-bar-animated`]:c,[`${d}-bar-striped`]:c||x}),style:{width:`${q(n,t,a)}%`,...p},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":a,children:o?e.jsx("span",{className:"visually-hidden",children:s}):s})}const y=g.forwardRef(({isChild:t=!1,...n},a)=>{const s={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(s.bsPrefix=R(s.bsPrefix,"progress"),t)return S(s,a);const{min:o,now:x,max:c,label:h,visuallyHidden:p,striped:u,animated:d,bsPrefix:i,variant:j,className:f,children:r,...l}=s;return e.jsx("div",{ref:a,...l,className:w(f,i),children:r?B(r,N=>g.cloneElement(N,{isChild:!0})):S({min:o,now:x,max:c,label:h,visuallyHidden:p,striped:u,animated:d,bsPrefix:i,variant:j},a)})});y.displayName="ProgressBar";const A=[{id:"1",name:"Jithin V G .",department:"11CD",unit:"Old Airport Road",percentile:99.13,quantity:220,balance:"$1200"},{id:"2",name:"Meera James .",department:"WARD",unit:"Panaji",percentile:96.51,quantity:390,balance:"$750"},{id:"3",name:"Elasamma V C .",department:"PICU",unit:"Old Airport Road",percentile:86.46,quantity:170,balance:"$1490"},{id:"4",name:"Srilatha . .",department:"ADMIN",unit:"Miller Road",percentile:88.21,quantity:270,balance:"$810"},{id:"5",name:"John Doe",department:"PICU",unit:"Miller Road",percentile:92.33,quantity:310,balance:"$950"},{id:"6",name:"Jane Smith",department:"WARD",unit:"Panaji",percentile:89.76,quantity:150,balance:"$680"}],M=t=>{switch(t){case"11CD":return e.jsx(m,{bg:"success",children:"11CD"});case"WARD":return e.jsx(m,{bg:"success",children:"WARD"});case"PICU":return e.jsx(m,{bg:"success",children:"PICU"});case"ADMIN":return e.jsx(m,{bg:"success",children:"ADMIN"});default:return e.jsx(m,{bg:"secondary",children:"Unknown"})}},F=()=>{const[t,n]=g.useState(1),[a,s]=g.useState(3),[o,x]=g.useState(""),c=A.filter(r=>r.name.toLowerCase().includes(o.toLowerCase())),h=Math.ceil(c.length/a),p=t*a,u=p-a,d=c.slice(u,p),i=r=>{n(r)},j=r=>{s(Number(r.target.value)),n(1)},f=r=>{x(r.target.value),n(1)};return e.jsx(I,{children:e.jsx(D,{children:e.jsxs(P,{children:[e.jsxs(P.Header,{className:"d-flex justify-content-between align-items-center",children:[e.jsx(P.Title,{as:"h5",children:"Compentency Report"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(C.Control,{type:"text",placeholder:"Search by name...",value:o,onChange:f,style:{width:"200px"}}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{className:"me-2 text-black",children:"Show:"}),e.jsxs(C.Select,{value:a,onChange:j,style:{width:"60%"},children:[e.jsx("option",{value:"3",children:"3"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",children:"10"})]})]})]})]}),e.jsxs(P.Body,{children:[e.jsxs($,{responsive:!0,hover:!0,children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{rowSpan:"2",children:"ID"}),e.jsx("th",{rowSpan:"2",children:"Name"}),e.jsx("th",{rowSpan:"2",children:"Unit"}),e.jsx("th",{rowSpan:"2",children:"Department"}),e.jsxs("th",{rowSpan:"2",children:["Leadership / 36",e.jsx("br",{}),"(Score)"]}),e.jsx("th",{colSpan:"2",children:"Leadership"}),e.jsxs("th",{rowSpan:"2",children:["Relationship Building / 36",e.jsx("br",{}),"(Score)"]}),e.jsx("th",{colSpan:"2",children:"Relationship Building"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"(MH Percentile)"}),e.jsx("th",{children:"(Unit Percentile)"}),e.jsx("th",{children:"(MH Percentile)"}),e.jsx("th",{children:"(Unit Percentile)"})]})]}),e.jsx("tbody",{children:d.map((r,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.id}),e.jsx("td",{children:r.name}),e.jsx("td",{children:r.unit}),e.jsx("td",{children:M(r.department)}),e.jsx("td",{children:r.quantity}),e.jsx("td",{children:e.jsx(y,{now:r.percentile,label:`${r.percentile}%`,variant:"purple"})}),e.jsx("td",{children:r.quantity}),e.jsx("td",{children:r.quantity}),e.jsx("td",{children:e.jsx(y,{now:r.percentile,label:`${r.percentile}%`,variant:"purple"})}),e.jsx("td",{children:r.quantity})]},l))})]}),e.jsxs(b,{className:"justify-content-end",children:[e.jsx(b.Prev,{onClick:()=>i(t-1),disabled:t===1}),[...Array(h)].map((r,l)=>e.jsx(b.Item,{active:l+1===t,onClick:()=>i(l+1),children:l+1},l)),e.jsx(b.Next,{onClick:()=>i(t+1),disabled:t===h})]})]})]})})})};export{F as default};
