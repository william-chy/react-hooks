(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),u=(n(11),n(1)),o=(n(12),n(2)),m=n(3),i=function(e){var t={id:null,name:"",age:""},n=Object(a.useState)(t),r=Object(u.a)(n,2),c=r[0],i=r[1],s=function(e){var t=e.target,n=t.name,a=t.value;i(Object(m.a)({},c,Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c.name&&c.age&&(e.addUser(c),i(t))}},l.a.createElement("label",null,"\u6635\u79f0"),l.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:s}),l.a.createElement("label",null,"\u5e74\u9f84"),l.a.createElement("input",{type:"text",name:"age",value:c.age,onChange:s}),l.a.createElement("button",null,"\u6dfb\u52a0"))},s=function(e){var t=Object(a.useState)(e.currentUser),n=Object(u.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){c(e.currentUser)}),[e]);var i=function(e){var t=e.target,n=t.name,a=t.value;c(Object(m.a)({},r,Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(r.id,r)}},l.a.createElement("label",null,"\u6635\u79f0"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:i}),l.a.createElement("label",null,"\u5e74\u9f84"),l.a.createElement("input",{type:"text",name:"age",value:r.age,onChange:i}),l.a.createElement("button",null,"\u66f4\u6539"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"\u53d6\u6d88"))},E=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u6635\u79f0"),l.a.createElement("th",null,"\u5e74\u9f84"),l.a.createElement("th",null,"\u64cd\u4f5c"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.age),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button muted-button"},"\u7f16\u8f91"),l.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"\u5220\u9664")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"\u65e0\u7528\u6237\u4fe1\u606f\uff0c\u8bf7\u6dfb\u52a0"))))},d=function(){var e=Object(a.useState)([{id:1,name:"william",age:21},{id:2,name:"mike",age:21}]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({id:null,name:"",username:""}),o=Object(u.a)(c,2),m=o[0],d=o[1],b=Object(a.useState)(!1),f=Object(u.a)(b,2),g=f[0],h=f[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"CRUD App with Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},g?l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"\u7f16\u8f91"),l.a.createElement(s,{editing:g,setEditing:h,currentUser:m,updateUser:function(e,t){h(!1),r(n.map((function(n){return n.id===e?t:n})))}})):l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,"\u65b0\u589e"),l.a.createElement(i,{addUser:function(e){e.id=e}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"\u7528\u6237\u5217\u8868"),l.a.createElement(E,{users:n,editRow:function(e){var t;h(!0),d((t=e,JSON.parse(JSON.stringify(t))))},deleteUser:function(e){h(!1),r(n.filter((function(t){return t.id!==e})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.a0539b58.chunk.js.map