(this["webpackJsonpbooks-library-react"]=this["webpackJsonpbooks-library-react"]||[]).push([[0],{76:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),i=(a(76),a(70)),o=a(9),j=a(103),l=a(71),u=a(1);var b,d=function(){return Object(u.jsxs)(j.a,{bg:"primary",variant:"dark",children:[Object(u.jsx)(j.a.Brand,{children:"Library"}),Object(u.jsxs)(l.a,{className:"mr-auto",children:[Object(u.jsx)(l.a.Link,{href:"/",children:"Books"}),Object(u.jsx)(l.a.Link,{href:"/authors",children:"Authors"}),Object(u.jsx)(l.a.Link,{href:"/publishers",children:"Publishers"})]})]})},O=a(99),h=a(94),p=a(45),x=a(46),f=x.a.div(b||(b=Object(p.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px 0;\n"]))),v=a(8),m=a(5),y=a(98),g=a(96),C=a(69),k=a(95),S=Object(n.createContext)({}),T=a(15),N={addCollection:"ADD_AUTHORS",add:"ADD_AUTHOR",update:"UPDATE_AUTHOR",delete:"DELETE_AUTHOR"},E={addCollection:"ADD_PUBLISHERS",add:"ADD_PUBLISHER",update:"UPDATE_PUBLISHER",delete:"DELETE_PUBLISHER"},P={addCollection:"ADD_BOOKS",add:"ADD_BOOK",update:"UPDATE_BOOK",delete:"DELETE_BOOK"};function D(e,t){switch(t.type){case N.addCollection:var a=Object.values(t.payload);return Object(v.a)(Object(v.a)({},e),{},{authors:a});case N.add:return Object(v.a)(Object(v.a)({},e),{},{authors:[t.payload].concat(Object(T.a)(e.authors))});case N.update:return Object(v.a)(Object(v.a)({},e),{},{authors:e.authors.reduce((function(e,a){return a.id===t.payload.id?[].concat(Object(T.a)(e),[t.payload]):[].concat(Object(T.a)(e),[a])}),[])});case N.delete:return Object(v.a)(Object(v.a)({},e),{},{authors:e.authors.filter((function(e){return e.id!==t.payload.id}))});case E.addCollection:var n=Object.values(t.payload);return Object(v.a)(Object(v.a)({},e),{},{publishers:n});case E.add:return Object(v.a)(Object(v.a)({},e),{},{publishers:[t.payload].concat(Object(T.a)(e.publishers))});case E.update:return Object(v.a)(Object(v.a)({},e),{},{publishers:e.publishers.reduce((function(e,a){return a.id===t.payload.id?[].concat(Object(T.a)(e),[t.payload]):[].concat(Object(T.a)(e),[a])}),[])});case E.delete:return Object(v.a)(Object(v.a)({},e),{},{publishers:e.publishers.filter((function(e){return e.id!==t.payload.id}))});case P.addCollection:var c=Object.values(t.payload);return Object(v.a)(Object(v.a)({},e),{},{books:c});case P.add:return Object(v.a)(Object(v.a)({},e),{},{books:[t.payload].concat(Object(T.a)(e.books))});case P.update:return Object(v.a)(Object(v.a)({},e),{},{books:e.books.reduce((function(e,a){return a.id===t.payload.id?[].concat(Object(T.a)(e),[t.payload]):[].concat(Object(T.a)(e),[a])}),[])});case P.delete:return Object(v.a)(Object(v.a)({},e),{},{books:e.books.filter((function(e){return e.id!==t.payload.id}))});default:return e}}var B={authors:[],publishers:[],books:[]};var F=function(e){var t=e.children,a=Object(n.useReducer)(D,B),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useCallback)((function(e){s(e)}),[s]);return Object(u.jsx)(S.Provider,{value:{state:r,dispatch:i},children:Object(u.jsx)("div",{children:t})})},w=a(104),L=a(97),A=a(101),I="http://139.162.147.107:3523",U=a(60),H=a.n(U),q=a(67);function Y(){return(Y=Object(q.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<=299)){e.next=2;break}return e.abrupt("return",t.json());case 2:return e.next=4,t.json();case 4:throw a=e.sent,Error(a.message);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return Y.apply(this,arguments)};function z(e,t){return t(!0),fetch(e,{method:"DELETE"}).then(_).finally((function(){return t(!1)}))}var R={addCollection:function(e){return{type:N.addCollection,payload:e}},add:function(e){return{type:N.add,payload:e}},update:function(e){return{type:N.update,payload:e}},delete:function(e){return{type:N.delete,payload:e}}},K={addCollection:function(e){return{type:E.addCollection,payload:e}},add:function(e){return{type:E.add,payload:e}},update:function(e){return{type:E.update,payload:e}},delete:function(e){return{type:E.delete,payload:e}}},V={addCollection:function(e){return{type:P.addCollection,payload:e}},add:function(e){return{type:P.add,payload:e}},update:function(e){return{type:P.update,payload:e}},delete:function(e){return{type:P.delete,payload:e}}};var G=function(e){var t=e.book,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(!1),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useContext)(S).dispatch;return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{className:"ml-3",variant:"outline-danger",size:"sm",onClick:function(){return p(!0)},children:"delete"}),r&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return s("")},dismissible:!0,children:r}),Object(u.jsxs)(A.a,{show:O,onHide:function(){return p(!1)},children:[Object(u.jsx)(A.a.Header,{closeButton:!0,children:Object(u.jsxs)(A.a.Title,{children:["Are you sure delete"," ".concat(t.title),"?"]})}),Object(u.jsxs)(A.a.Footer,{children:[Object(u.jsx)(h.a,{variant:"secondary",onClick:function(){return p(!1)},children:"Close"}),Object(u.jsxs)(h.a,{variant:"primary",onClick:function(){s(""),z("".concat(I,"/books/").concat(t.id),l).then((function(e){return x(V.delete(e))})).catch((function(e){return s(e.message)})),p(!1)},children:["Delete",j&&Object(u.jsx)(g.a,{animation:"grow"})]})]})]})]})};var J=function(e){var t,a,n,c=e.book;return Object(u.jsx)(w.a,{className:"p-3 mb-3",children:Object(u.jsxs)(w.a.Body,{children:[Object(u.jsx)(w.a.Title,{children:c.title}),Object(u.jsx)(w.a.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"12px"},children:c.isbn}),Object(u.jsx)(w.a.Text,{children:"".concat(null===(t=c.author)||void 0===t?void 0:t.firstName," ").concat(null===(a=c.author)||void 0===a?void 0:a.lastName)}),Object(u.jsxs)(w.a.Text,{children:[Object(u.jsx)("span",{children:"Published by: "}),null===(n=c.publisher)||void 0===n?void 0:n.name,Object(u.jsx)("span",{children:" in "}),c.publishmentYear]}),Object(u.jsxs)(L.a,{size:"sm",className:"mt-4",children:[Object(u.jsx)(h.a,{variant:"outline-primary",size:"sm",href:"/books/edit/".concat(c.id),children:"Update"}),Object(u.jsx)(G,{book:c})]})]})})};function $(e,t){return t(!0),fetch(e).then(_).finally((function(){return t(!1)}))}var M=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!1),l=Object(m.a)(j,2),u=l[0],b=l[1],d="".concat(I,"/authors");return Object(n.useEffect)((function(){$(d,b).then((function(e){return c(e)})).catch((function(e){return o(e.message)}))}),[d]),[a,u,i]},Q=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!1),l=Object(m.a)(j,2),u=l[0],b=l[1],d="".concat(I,"/publishers");return Object(n.useEffect)((function(){$(d,b).then((function(e){return c(e)})).catch((function(e){return o(e.message)}))}),[d]),[a,u,i]},W=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!1),l=Object(m.a)(j,2),u=l[0],b=l[1],d="".concat(I,"/books");return Object(n.useEffect)((function(){$(d,b).then((function(e){return c(e)})).catch((function(e){return o(e.message)}))}),[d]),[a,i,u]};var X=function(){var e=Object(n.useContext)(S),t=e.state,a=e.dispatch,c=M(),r=Object(m.a)(c,3),s=r[0],i=r[1],o=r[2],j=Q(),l=Object(m.a)(j,3),b=l[0],d=l[1],O=l[2],h=W(),p=Object(m.a)(h,3),x=p[0],f=p[1],T=p[2];return Object(n.useEffect)((function(){var e=Object.values(x).map((function(e){var t=b[String(e.publisherId)],a=s[e.authorId];return Object(v.a)(Object(v.a)({},e),{},{author:a,publisher:t})}));return a(V.addCollection(e)),function(){return a(V.addCollection([]))}}),[a,x,b,s]),Object(u.jsx)(y.a,{children:f||i||d?Object(u.jsx)(g.a,{animation:"grow"}):Object(u.jsxs)(C.a,{children:[t.books.map((function(e){return Object(u.jsx)(J,{book:e},e.id)})),(T||o||O)&&Object(u.jsxs)(k.a,{variant:"danger",children:[T,o,O]})]})})};var Z=function(){return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(f,{children:Object(u.jsx)(h.a,{variant:"outline-success",href:"books/create",children:"Create book"})}),Object(u.jsx)("h1",{children:"Books"}),Object(u.jsx)(X,{})]})},ee=a(105),te=a(100),ae=a(102);function ne(e,t,a){return a(!0),fetch(e,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(_).finally((function(){return a(!1)}))}var ce=function(e){var t=e.author,a=Object(n.useState)(t.firstName),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(t.lastName),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(""),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useState)(!1),f=Object(m.a)(x,2),v=f[0],y=f[1],C=Object(n.useState)(!1),T=Object(m.a)(C,2),N=T[0],E=T[1],P=Object(n.useContext)(S).dispatch;return Object(u.jsxs)(ae.a,{noValidate:!0,validated:N,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),p(""),e.currentTarget.checkValidity()?ne("".concat(I,"/authors/").concat(t.id),{firstName:r,lastName:j},y).then((function(e){return P(R.update(e))})).catch((function(e){return p(e.message)})).finally((function(){return E(!1)})):E(!0)},children:[Object(u.jsxs)(ae.a.Group,{controlId:"author-first-name",children:[Object(u.jsx)(ae.a.Label,{children:"First name"}),Object(u.jsx)(ae.a.Control,{type:"text",placeholder:"Type first name...",value:r,onChange:function(e){return s(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide first name."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"author-last-name",children:[Object(u.jsx)(ae.a.Label,{children:"Last name"}),Object(u.jsx)(ae.a.Control,{type:"text",placeholder:"Type last name...",value:j,onChange:function(e){return l(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide last name."})]}),Object(u.jsxs)(h.a,{type:"submit",variant:"primary",children:[v&&Object(u.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Save"]}),O&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return p("")},dismissible:!0,children:O})]})};var re=function(e){var t=e.author,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(!1),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useContext)(S).dispatch;return Object(u.jsxs)("div",{className:"mt-4",children:[Object(u.jsx)(h.a,{variant:"outline-danger",size:"sm",onClick:function(){return p(!0)},children:"delete"}),r&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return s("")},dismissible:!0,children:r}),Object(u.jsxs)(A.a,{show:O,onHide:function(){return p(!1)},children:[Object(u.jsx)(A.a.Header,{closeButton:!0,children:Object(u.jsxs)(A.a.Title,{children:["Are you sure delete"," ".concat(t.firstName," ").concat(t.lastName),"?"]})}),Object(u.jsxs)(A.a.Footer,{children:[Object(u.jsx)(h.a,{variant:"secondary",onClick:function(){return p(!1)},children:"Close"}),Object(u.jsxs)(h.a,{variant:"primary",onClick:function(){s(""),z("".concat(I,"/authors/").concat(t.id),l).then((function(e){return x(R.delete(e))})).catch((function(e){return s(e.message)})),p(!1)},children:["Delete",j&&Object(u.jsx)(g.a,{animation:"grow"})]})]})]})]})};var se=function(e){var t=e.author;return Object(u.jsx)(w.a,{className:"p-3 mb-3",children:Object(u.jsx)(w.a.Body,{children:Object(u.jsxs)(ee.a,{defaultActiveKey:"details",id:"uncontrolled-tab-example",children:[Object(u.jsxs)(te.a,{eventKey:"details",title:"Details",children:[Object(u.jsxs)("section",{className:"mt-4",children:[Object(u.jsx)("div",{children:t.firstName}),Object(u.jsx)("div",{children:t.lastName})]}),Object(u.jsx)(re,{author:t})]}),Object(u.jsx)(te.a,{eventKey:"edit",title:"Edit",children:Object(u.jsx)("section",{className:"mt-4",children:Object(u.jsx)(ce,{author:t})})})]})})})};function ie(){var e=Object(n.useContext)(S),t=e.state,a=e.dispatch,c=Object(n.useState)(""),r=Object(m.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(m.a)(o,2),l=j[0],b=j[1];return Object(n.useEffect)((function(){return $("".concat(I,"/authors"),b).then((function(e){return a(R.addCollection(e))})).catch((function(e){return i(e.message)})),function(){return a(R.addCollection([]))}}),[a]),Object(u.jsx)(y.a,{children:l?Object(u.jsx)(g.a,{animation:"grow"}):Object(u.jsxs)(C.a,{children:[t.authors.map((function(e){return Object(u.jsx)(se,{author:e},e.id)})),null!==s&&void 0!==s?s:Object(u.jsx)(k.a,{variant:"danger",children:s})]})})}function oe(e,t,a){return a(!0),fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(_).finally((function(){return a(!1)}))}var je=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(""),l=Object(m.a)(j,2),b=l[0],d=l[1],O=Object(n.useState)(!1),p=Object(m.a)(O,2),x=p[0],f=p[1],v=Object(n.useState)(!1),T=Object(m.a)(v,2),N=T[0],E=T[1],P=Object(n.useContext)(S).dispatch;return Object(u.jsx)(y.a,{className:"my-4",children:Object(u.jsx)(C.a,{children:Object(u.jsxs)(ae.a,{noValidate:!0,validated:N,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),d(""),e.currentTarget.checkValidity())?oe("".concat(I,"/authors"),{firstName:a,lastName:i},f).then((function(e){return P(R.add(e))})).catch((function(e){return d(e.message)})).finally((function(){c(""),o(""),E(!1)})):E(!0)},children:[Object(u.jsxs)(ae.a.Row,{className:"mb-3",children:[Object(u.jsxs)(C.a,{children:[Object(u.jsx)(ae.a.Control,{placeholder:"Type first name...",value:a,onChange:function(e){return c(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide first name."})]}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(ae.a.Control,{placeholder:"Type last name...",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide last name."})]}),Object(u.jsx)(C.a,{children:Object(u.jsxs)(h.a,{type:"submit",variant:"outline-success",children:[x&&Object(u.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Create author"]})})]}),b&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return d("")},dismissible:!0,children:b})]})})})};var le=function(){return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(je,{}),Object(u.jsx)("h1",{children:"Authors"}),Object(u.jsx)(ie,{})]})};var ue=function(){var e=Object(n.useContext)(S).dispatch,t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(""),b=Object(m.a)(l,2),d=b[0],O=b[1],p=Object(n.useState)(!1),x=Object(m.a)(p,2),f=x[0],v=x[1],N=Object(n.useState)(!1),E=Object(m.a)(N,2),P=E[0],D=E[1],B=Object(T.a)(Array((new Date).getFullYear()+1).keys()).reverse();return Object(u.jsx)(y.a,{className:"my-4",children:Object(u.jsx)(C.a,{children:Object(u.jsxs)(ae.a,{noValidate:!0,validated:P,onSubmit:function(t){(t.preventDefault(),t.stopPropagation(),O(""),t.currentTarget.checkValidity())?oe("".concat(I,"/publishers"),{name:c,establishmentYear:o},v).then((function(t){return e(K.add(t))})).catch((function(e){return O(e.message)})).finally((function(){r(""),j(""),D(!1)})):D(!0)},children:[Object(u.jsxs)(ae.a.Row,{className:"mb-3",children:[Object(u.jsxs)(C.a,{children:[Object(u.jsx)(ae.a.Control,{placeholder:"Type name...",value:c,onChange:function(e){return r(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide name."})]}),Object(u.jsxs)(C.a,{children:[Object(u.jsxs)(ae.a.Control,{placeholder:"Type establishment year...",as:"select",value:o,onChange:function(e){return j(Number(e.target.value))},required:!0,children:[Object(u.jsx)("option",{value:"",children:"Select establishmentYear year..."}),B.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide year."})]}),Object(u.jsx)(C.a,{children:Object(u.jsxs)(h.a,{type:"submit",variant:"outline-success",children:[f&&Object(u.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Create publisher"]})})]}),d&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return O("")},dismissible:!0,children:d})]})})})};var be=function(e){var t=e.publisher,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(!1),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useContext)(S).dispatch;return Object(u.jsxs)("div",{className:"mt-4",children:[Object(u.jsx)(h.a,{variant:"outline-danger",size:"sm",onClick:function(){return p(!0)},children:"delete"}),r&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return s("")},dismissible:!0,children:r}),Object(u.jsxs)(A.a,{show:O,onHide:function(){return p(!1)},children:[Object(u.jsx)(A.a.Header,{closeButton:!0,children:Object(u.jsxs)(A.a.Title,{children:["Are you sure delete"," ".concat(t.name),"?"]})}),Object(u.jsxs)(A.a.Footer,{children:[Object(u.jsx)(h.a,{variant:"secondary",onClick:function(){return p(!1)},children:"Close"}),Object(u.jsxs)(h.a,{variant:"primary",onClick:function(){s(""),z("".concat(I,"/publishers/").concat(t.id),l).then((function(e){return x(K.delete(e))})).catch((function(e){return s(e.message)})),p(!1)},children:["Delete",j&&Object(u.jsx)(g.a,{animation:"grow"})]})]})]})]})};var de=function(e){var t=e.publisher,a=Object(n.useState)(t.name),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(t.establishmentYear),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(""),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useState)(!1),f=Object(m.a)(x,2),v=f[0],y=f[1],C=Object(n.useState)(!1),N=Object(m.a)(C,2),E=N[0],P=N[1],D=Object(n.useContext)(S).dispatch,B=Object(T.a)(Array((new Date).getFullYear()+1).keys()).reverse();return Object(u.jsxs)(ae.a,{noValidate:!0,validated:E,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),p(""),e.currentTarget.checkValidity()?ne("".concat(I,"/publishers/").concat(t.id),{name:r,establishmentYear:j},y).then((function(e){return D(K.update(e))})).catch((function(e){return p(e.message)})).finally((function(){return P(!1)})):P(!0)},children:[Object(u.jsxs)(ae.a.Group,{controlId:"author-first-name",children:[Object(u.jsx)(ae.a.Label,{children:"Name"}),Object(u.jsx)(ae.a.Control,{type:"text",placeholder:"Type first name...",value:r,onChange:function(e){return s(e.target.value)},required:!0}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide name."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"establishment-year",children:[Object(u.jsx)(ae.a.Label,{children:"Establishment year"}),Object(u.jsxs)(ae.a.Control,{placeholder:"Type establishment year...",as:"select",value:j,onChange:function(e){return l(Number(e.target.value))},required:!0,children:[Object(u.jsx)("option",{value:"",children:"Select establishmentYear year..."}),B.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide year."})]}),Object(u.jsxs)(h.a,{type:"submit",variant:"primary",children:[v&&Object(u.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Save"]}),O&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return p("")},dismissible:!0,children:O})]})};var Oe=function(e){var t=e.publisher;return Object(u.jsx)(w.a,{className:"p-3 mb-3",children:Object(u.jsx)(w.a.Body,{children:Object(u.jsxs)(ee.a,{defaultActiveKey:"details",id:"uncontrolled-tab-example",children:[Object(u.jsx)(te.a,{eventKey:"details",title:"Details",children:Object(u.jsxs)("section",{className:"mt-4",children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:t.establishmentYear}),Object(u.jsx)(be,{publisher:t})]})}),Object(u.jsx)(te.a,{eventKey:"edit",title:"Edit",children:Object(u.jsx)("section",{className:"mt-4",children:Object(u.jsx)(de,{publisher:t})})})]})})})};function he(){var e=Object(n.useContext)(S),t=e.state,a=e.dispatch,c=Object(n.useState)(""),r=Object(m.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(!1),j=Object(m.a)(o,2),l=j[0],b=j[1];return Object(n.useEffect)((function(){return $("".concat(I,"/publishers"),b).then((function(e){return a(K.addCollection(e))})).catch((function(e){return i(e.message)})),function(){return a(K.addCollection([]))}}),[a]),Object(u.jsx)(y.a,{children:l?Object(u.jsx)(g.a,{animation:"grow"}):Object(u.jsxs)(C.a,{children:[t.publishers.map((function(e){return Object(u.jsx)(Oe,{publisher:e},e.id)})),s&&Object(u.jsx)(k.a,{variant:"danger",children:s})]})})}var pe=function(){return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(ue,{}),Object(u.jsx)("h1",{children:"Publishers"}),Object(u.jsx)(he,{})]})};var xe=function(e){var t=e.saveBook,a=e.bookToUpdate,c=e.error,r=e.isSaving,s=e.setError,i=Object(n.useState)([]),o=Object(m.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)([]),d=Object(m.a)(b,2),O=d[0],p=d[1],x=Object(n.useState)({title:"",isbn:"",authorId:"",publisherId:"",publishmentYear:""}),f=Object(m.a)(x,2),y=f[0],C=f[1],S=Object(n.useState)(!1),N=Object(m.a)(S,2),E=N[0],P=N[1],D=M(),B=Object(m.a)(D,2),F=B[0],w=B[1],L=Q(),A=Object(m.a)(L,2),I=A[0],U=A[1],H=Object(T.a)(Array((new Date).getFullYear()+1).keys()).reverse();return Object(n.useEffect)((function(){a&&C(a)}),[a]),Object(n.useEffect)((function(){var e=Object.values(F);l(e)}),[F]),Object(n.useEffect)((function(){var e=Object.values(I);p(e)}),[I]),Object(u.jsx)("div",{children:w||U?Object(u.jsx)(g.a,{animation:"grow"}):Object(u.jsxs)(ae.a,{onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),e.currentTarget.checkValidity()){var a=y.isbn.replace(/-/g,"");t(Object(v.a)(Object(v.a)({},y),{},{isbn:a})),P(!1)}else P(!0)},noValidate:!0,validated:E,children:[Object(u.jsxs)(ae.a.Group,{controlId:"title",children:[Object(u.jsx)(ae.a.Label,{children:" Book title"}),Object(u.jsx)(ae.a.Control,{type:"text",required:!0,placeholder:"Type book title...",value:y.title,onChange:function(e){return C(Object(v.a)(Object(v.a)({},y),{},{title:e.target.value}))}}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide title."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"isbn",children:[Object(u.jsx)(ae.a.Label,{children:" Book isbn"}),Object(u.jsx)(ae.a.Control,{type:"text",required:!0,pattern:"(^\\d{3}-\\d{1}-\\d{5}-\\d{3}-\\d{1}$)|(^\\d{13}$)",placeholder:"Type book isbn...",value:y.isbn,onChange:function(e){return C(Object(v.a)(Object(v.a)({},y),{},{isbn:e.target.value}))}}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide valid isbn."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"author",children:[Object(u.jsx)(ae.a.Label,{children:"Book author"}),Object(u.jsxs)(ae.a.Control,{required:!0,as:"select",value:y.authorId,onChange:function(e){return C(Object(v.a)(Object(v.a)({},y),{},{authorId:Number(e.target.value)}))},children:[Object(u.jsx)("option",{value:"",children:"Select author..."}),j.map((function(e){return Object(u.jsx)("option",{value:e.id,children:"".concat(e.firstName," ").concat(e.lastName)},e.id)}))]}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide author."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"publisher",children:[Object(u.jsx)(ae.a.Label,{children:"Book publisher"}),Object(u.jsxs)(ae.a.Control,{required:!0,as:"select",value:y.publisherId,onChange:function(e){return C(Object(v.a)(Object(v.a)({},y),{},{publisherId:Number(e.target.value)}))},children:[Object(u.jsx)("option",{value:"",children:"Select publisher..."}),O.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide publisher."})]}),Object(u.jsxs)(ae.a.Group,{controlId:"establishment-year",children:[Object(u.jsx)(ae.a.Label,{children:"Publishing year"}),Object(u.jsxs)(ae.a.Control,{placeholder:"Type establishment year...",required:!0,as:"select",value:y.publishmentYear,onChange:function(e){return C(Object(v.a)(Object(v.a)({},y),{},{publishmentYear:Number(e.target.value)}))},children:[Object(u.jsx)("option",{value:"",children:"Select year..."}),H.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsx)(ae.a.Control.Feedback,{type:"invalid",children:"Please provide year."})]}),Object(u.jsxs)(h.a,{type:"submit",children:[r&&Object(u.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Save book"]}),c&&Object(u.jsx)(k.a,{variant:"danger",onClick:function(){return s("")},dismissible:!0,children:c})]})})};var fe=function(){var e=Object(n.useContext)(S).dispatch,t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),j=i[0],l=i[1],b=Object(o.g)();return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(f,{children:Object(u.jsx)(h.a,{variant:"outline-secondary",href:"/books",children:"Back"})}),Object(u.jsx)("h1",{children:"Create Book"}),Object(u.jsx)(xe,{saveBook:function(t){r(""),oe("".concat(I,"/books"),t,l).then((function(t){e(V.add(t)),b.push("/books")})).catch((function(e){return r(e.message)}))},bookToUpdate:null,error:c,setError:r,isSaving:j})]})};var ve,me=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],j=s[1],l=Object(n.useState)(!1),b=Object(m.a)(l,2),d=b[0],p=b[1],x=Object(n.useState)(!1),v=Object(m.a)(x,2),y=v[0],g=v[1],C=Object(n.useContext)(S).dispatch,k=Object(o.g)(),T=Object(o.h)().id;return Object(n.useEffect)((function(){$("".concat(I,"/books/").concat(T),g).then((function(e){return c(e)})).catch((function(e){return j(e.message)}))}),[T]),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(f,{children:Object(u.jsx)(h.a,{variant:"outline-secondary",href:"/books",children:"Back"})}),Object(u.jsx)("h1",{children:"Update book"}),y||Object(u.jsx)(xe,{saveBook:function(e){j(""),ne("".concat(I,"/books/").concat(a.id),e,p).then((function(e){C(V.update(e)),k.push("/books")})).catch((function(e){return j(e.message)}))},bookToUpdate:a,error:i,setError:j,isSaving:d})]})},ye=a(52),ge=x.a.div(ve||(ve=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"])));var Ce=function(){return Object(u.jsxs)(ge,{children:["Oops...",Object(u.jsx)(ye.a,{href:"/",children:"back to homepage"})]})};var ke=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(d,{})}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(o.a,{to:"/books"})}}),Object(u.jsx)(o.b,{exact:!0,path:"/books",children:Object(u.jsx)(Z,{})}),Object(u.jsx)(o.b,{exact:!0,path:"/books/create",children:Object(u.jsx)(fe,{})}),Object(u.jsx)(o.b,{exact:!0,path:"/books/edit/:id",children:Object(u.jsx)(me,{})}),Object(u.jsx)(o.b,{exact:!0,path:"/authors",children:Object(u.jsx)(le,{})}),Object(u.jsx)(o.b,{exact:!0,path:"/publishers",children:Object(u.jsx)(pe,{})}),Object(u.jsx)(o.b,{path:"*",children:Object(u.jsx)(Ce,{})})]})})]})};var Se=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(F,{children:Object(u.jsx)(ke,{})})})},Te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(91);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Se,{})}),document.getElementById("root")),Te()}},[[92,1,2]]]);
//# sourceMappingURL=main.d0502b31.chunk.js.map