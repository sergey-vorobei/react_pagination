(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),i=t(1);t(10);function l(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var s=t(2),o=t.n(s),j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.itemsOnPage,r=e.onPageChange,i=Math.ceil(a/t),s=l(1,i);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===c}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:r,children:"\xab"})}),s.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:c===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:r,children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:c===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i,onClick:r,children:"\xbb"})})]}),Object(j.jsx)("ul",{children:n.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},u=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(5),s=Object(r.a)(n,2),o=s[0],u=s[1],h=Array.from({length:42},(function(e,a){return a+1})),m=l(1,42).map((function(e){return"Item ".concat(e)})),g=function(e,a,t){var c=(t-1)*a,n=Math.min(c+a,e.length);return e.slice(c,n)},p=g(h,o,t),b=g(m,o,t),O=Math.ceil(42/o),f=p[0],x=p[p.length-1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(f," - ").concat(x," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",value:o,className:"form-control",onChange:function(e){e.preventDefault(),u(+e.target.value),c(1)},children:[3,5,10,20].map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:o,currentPage:t,itemsOnPage:b,onPageChange:function(e){e.preventDefault();var a=e.currentTarget.textContent,n=parseInt(a||"0",10);t!==n&&c(n),"\xab"===a&&t>1&&c(t-1),"\xbb"===a&&t<O&&c(t+1)}})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.85d74413.chunk.js.map