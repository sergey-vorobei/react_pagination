(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(11),c=t.n(n),r=t(8),i=t(3);t(0),t(16);function l(e,a){for(var t=[],n=e;n<=a;n+=1)t.push(n);return t}var s=t(9),o=t.n(s),g=t(2),p=function(e){var a=e.total,t=e.perPage,n=e.currentPage,c=e.itemsOnPage,r=e.onPageChange,i=Math.ceil(a/t),s=l(1,i);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{className:o()("page-item",{disabled:1===n}),children:Object(g.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:r,children:"\xab"})}),s.map((function(e){return Object(g.jsx)("li",{className:o()("page-item",{active:n===e}),children:Object(g.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:r,children:e})},e)})),Object(g.jsx)("li",{className:o()("page-item",{disabled:n===i}),children:Object(g.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===i,onClick:r,children:"\xbb"})})]}),Object(g.jsx)("ul",{children:c.map((function(e){return Object(g.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},j=[3,5,10,20],d=l(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Array.from({length:42},(function(e,a){return a+1})),a=Object(r.b)(),t=Object(i.a)(a,2),n=t[0],c=t[1],l=parseInt(n.get("page")||"1",10),s=parseInt(n.get("perPage")||"5",10),o=function(e,a,t){var n=(t-1)*a,c=Math.min(n+a,e.length);return e.slice(n,c)},h=o(e,s,l),m=o(d,s,l),u=Math.ceil(42/s),b=h[0],f=h[h.length-1];return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"Items with Pagination"}),Object(g.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(l," (items ").concat(b," - ").concat(f," of ").concat(42,")")}),Object(g.jsxs)("div",{className:"form-group row",children:[Object(g.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(g.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",value:s,className:"form-control",onChange:function(e){e.preventDefault(),c({page:"1",perPage:e.target.value})},children:j.map((function(e){return Object(g.jsx)("option",{value:e,children:e},e)}))})}),Object(g.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(g.jsx)(p,{total:42,perPage:s,currentPage:l,itemsOnPage:m,onPageChange:function(e){e.preventDefault();var a=e.currentTarget.textContent||"",t=parseInt(a||"0",10);Number.isNaN(t)||l===t||c({page:a,perPage:s.toString()}),"\xab"===a&&l>1&&c({page:(l-1).toString(),perPage:s.toString()}),"\xbb"===a&&l<u&&c({page:(l+1).toString(),perPage:s.toString()})}})]})};c.a.render(Object(g.jsx)(r.a,{children:Object(g.jsx)(h,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4be5ab0.chunk.js.map