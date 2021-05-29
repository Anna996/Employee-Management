(this["webpackJsonpemployee-fullstact-example"]=this["webpackJsonpemployee-fullstact-example"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},201:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(52),s=n.n(r),l=(n(181),n(19)),o=(n(182),n(41)),i=n.n(o),u=n(74),b=n(173),j=n(174),m=n(53),p=n.n(m),d="https://employee-management-serverside.herokuapp.com/api/",f=new(function(){function e(){Object(b.a)(this,e),this.getAllEmployees=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d+"allEmployees",e.next=3,p.a.get("https://employee-management-serverside.herokuapp.com/api/allEmployees");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),this.getEmployeeByID=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^\d+$/.test(t)){e.next=7;break}return n=d+"employee/".concat(t),e.next=4,p.a.get(n,{id:t});case 4:return e.abrupt("return",e.sent);case 7:return alert("ID must be a number"),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEmployeeByFirstName=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d+"employee/firstName/".concat(t),e.next=3,p.a.get(n,{firstName:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEmployeeByLastName=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d+"employee/lastName/".concat(t),e.next=3,p.a.get(n,{lastName:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(j.a)(e,[{key:"addEmployee",value:function(e){return p.a.post("https://employee-management-serverside.herokuapp.com/api/employee",e)}},{key:"updateEmployee",value:function(e){return p.a.put("https://employee-management-serverside.herokuapp.com/api/employee",e)}},{key:"deleteEmployee",value:function(e){var t=d+"employee/".concat(e);return p.a.delete(t,{id:e})}}]),e}()),h=(n(201),n(416)),O=n(33),x=n(2);var y=function(e){var t=e.data,n=e.handleRefreshList,c=Object(a.useState)(t.id),r=Object(l.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(t.firstname),u=Object(l.a)(i,2),b=u[0],j=u[1],m=Object(a.useState)(t.lastname),p=Object(l.a)(m,2),d=p[0],y=p[1],v=Object(a.useState)(!1),N=Object(l.a)(v,2),g=N[0],k=N[1],E=function(){return k(!1)},C=function(){if(""==s)alert("Please enter ID");else if(""==b)alert("Please enter first name");else{if(""!=d)return!0;alert("Please enter last name")}return!1};return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return k(!0)},children:"update"}),Object(x.jsxs)(O.a,{show:g,onHide:E,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(O.a.Header,{closeButton:!0,children:Object(x.jsx)(O.a.Title,{children:"Update employee"})}),Object(x.jsx)(O.a.Body,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("label",{className:"col-sm-3 col-form-label",children:"ID"}),Object(x.jsx)("input",{type:"text",value:s,className:"form-control col-sm-6",onChange:function(e){return o(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("label",{className:"col-sm-3 col-form-label",children:"First name"}),Object(x.jsx)("input",{type:"text",value:b,className:"form-control col-sm-6",onChange:function(e){return j(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("label",{className:"col-sm-3 col-form-label",children:"Last name"}),Object(x.jsx)("input",{type:"text",value:d,className:"form-control col-sm-6",onChange:function(e){return y(e.target.value)}})]})]})}),Object(x.jsxs)(O.a.Footer,{children:[Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",variant:"primary",onClick:function(e){return function(e){if(e.preventDefault(),C()){k(!1);var t={id:s,firstname:b,lastname:d};f.updateEmployee(t).then((function(e){n()})).catch((function(e){return alert(e)}))}}(e)},children:"Update"}),Object(x.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:E,children:"Close"})]})]})]})};var v=function(e){var t=e.specificData,n=e.refreshList,c=e.handleRefreshList,r=Object(a.useState)([]),s=Object(l.a)(r,2),o=s[0],i=s[1];return Object(a.useEffect)((function(){var e,n=t.type,a=t.input,c=!0;switch(n){case"allEmployees":e=f.getAllEmployees();break;case"id":e=f.getEmployeeByID(a);break;case"firstname":e=f.getEmployeeByFirstName(a);break;case"lastname":e=f.getEmployeeByLastName(a);break;default:c=!1}c&&e.then((function(e){null!=e&&function(e){e.data instanceof Array?i(e.data):i([e.data])}(e)})).catch((function(e){return alert(e)}))}),[t,n]),Object(x.jsx)("div",{className:"ListOfEmployees",children:Object(x.jsxs)("table",{className:"ListOfEmployees__table ",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"ID"}),Object(x.jsx)("th",{scope:"col",children:"FirstName"}),Object(x.jsx)("th",{scope:"col",children:"LastName"}),Object(x.jsx)("th",{scope:"col"}),Object(x.jsx)("th",{scope:"col"})]})}),Object(x.jsx)("tbody",{children:o.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[" ",e.id]}),Object(x.jsx)("td",{children:e.firstname}),Object(x.jsx)("td",{children:e.lastname}),Object(x.jsx)("td",{children:Object(x.jsx)(y,{data:e,handleRefreshList:c},e.id)}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{className:"btn btn-primary btn-sm",id:e.id,onClick:function(e){return function(e){var t=e.target.id;f.deleteEmployee(t).then((function(){return c()})).catch((function(e){return alert(e)}))}(e)},children:"delete"},e.id)})]})}))})]})})};n(206);var N=function(e){var t=e.handleRefreshList,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],b=i[1],j=Object(a.useState)(""),m=Object(l.a)(j,2),p=m[0],d=m[1],y=Object(a.useState)(""),v=Object(l.a)(y,2),N=v[0],g=v[1],k=function(){s(!1),b(""),d(""),g("")},E=function(){if(""==u)alert("Please enter ID");else if(""==p)alert("Please enter first name");else{if(""!=N)return!0;alert("Please enter last name")}return!1};return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",className:" addEmployeeBtn btn btn-info",onClick:function(){return s(!0)},children:"Add New Employee"}),Object(x.jsxs)(O.a,{show:r,onHide:k,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(O.a.Header,{closeButton:!0,children:Object(x.jsx)(O.a.Title,{children:"Create a new Employee"})}),Object(x.jsx)(O.a.Body,{children:Object(x.jsxs)(h.a,{className:"addEmployeeBtn__form",children:[Object(x.jsxs)("div",{class:"form-group row",children:[Object(x.jsx)("label",{class:"col-sm-3 col-form-label",children:"ID"}),Object(x.jsx)("input",{type:"text",className:"form-control col-sm-6 ",onChange:function(e){return b(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("label",{className:"col-sm-3 col-form-label",children:"First name"}),Object(x.jsx)("input",{type:"text",className:"form-control col-sm-6",onChange:function(e){return d(e.target.value)}})]}),Object(x.jsxs)("div",{className:"form-group row",children:[Object(x.jsx)("label",{className:"col-sm-3 col-form-label",children:"Last name"}),Object(x.jsx)("input",{type:"text",className:"form-control col-sm-6",onChange:function(e){return g(e.target.value)}})]})]})}),Object(x.jsxs)(O.a.Footer,{children:[Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){if(e.preventDefault(),E()){s(!1);var n={id:u,firstname:p,lastname:N};f.addEmployee(n).then((function(e){""==e.data?alert("The ID number already exists"):t()})).catch((function(e){return alert(e)}))}}(e)},children:"Save"}),Object(x.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:k,children:"Close"})]})]})]})};n(207),n(208);var g=function(e){var t=e.searchBtn,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],b=i[1];return Object(x.jsxs)("form",{className:"searchComponent ",children:[Object(x.jsx)("label",{className:"col-form-label",children:"Search By: "}),Object(x.jsxs)("select",{class:"form-control",onChange:function(e){return function(e){e.preventDefault(),s(e.target.value)}(e)},children:[Object(x.jsx)("option",{value:"select",children:"Select"}),Object(x.jsx)("option",{value:"id",children:"ID"}),Object(x.jsx)("option",{value:"firstname",children:" First name"}),Object(x.jsx)("option",{value:"lastname",children:"Last name"})]}),Object(x.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),"select"!==r&&""!==u&&t({type:r,input:u})}(e)},children:"Search"})]})};n(209);var k=function(){var e={type:"allEmployees",input:null},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(0),o=Object(l.a)(s,2),i=o[0],u=o[1],b=function(){return u(i+1)};return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("header",{className:"app__header",children:"Employee List"}),Object(x.jsx)(g,{className:"app__search",searchBtn:function(e){r(e)}}),Object(x.jsxs)("div",{className:"app__body",children:[Object(x.jsx)(v,{specificData:c,refreshList:i,handleRefreshList:b}),Object(x.jsxs)("div",{className:"app__body__btns",children:[Object(x.jsx)(N,{className:"app__addEmployeeBtn",handleRefreshList:b}),Object(x.jsx)("button",{className:"btn btn-info",onClick:function(){c.type!==e.type&&r(e)},children:"Show All Employees"})]})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,417)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),E()}},[[414,1,2]]]);
//# sourceMappingURL=main.d58502fd.chunk.js.map