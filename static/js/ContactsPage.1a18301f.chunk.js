(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{7537:function(){},1786:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var r,a,i,o,c,d,l,s,u,p,x,h=t(168),m=t(5048),f=t(4654),b=t(9782),g=t(6031),j=g.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 80px;\n"]))),v=t(885),Z=t(2791),y=t(3109),k=g.ZP.h2(a||(a=(0,h.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),w=g.ZP.input(i||(i=(0,h.Z)(["\n  padding: 5px;\n  min-width: 280px;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 5px;\n"]))),P=g.ZP.div(o||(o=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),C=t(3329),z=function(n){var e=n.title,t=n.type,r=n.name,a=n.value,i=n.placeholder,o=n.pattern,c=n.onChange;return(0,C.jsxs)(P,{children:[(0,C.jsx)(k,{children:e}),(0,C.jsx)(w,{type:t,name:r,value:a,onChange:c,pattern:o,placeholder:i,autoComplete:"off",required:!0},r)]})},N=t(8748),A=t(5360),I=(t(4719),g.ZP.form(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n  width: 400px;\n  border-radius: 10px;\n  color: #000;\n  background-color: rgba(244, 244, 246, 0.4);\n  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);\n\n  @media screen and (max-width: 479px) {\n    max-width: 300px;\n  }\n"])))),L=g.ZP.button.attrs((function(){return{type:"submit"}}))(d||(d=(0,h.Z)(["\n  position: relative;\n  margin-top: 20px;\n  padding: 5px 10px;\n  display: inline-flex;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #212529;\n    color: #fff;\n  }\n"]))),S=t(9085),_=function(){var n=(0,b.Lr)(),e=(0,v.Z)(n,2),t=e[0],r=e[1].isLoading,a=(0,b.wY)().data,i=(0,Z.useState)(""),o=(0,v.Z)(i,2),c=o[0],d=o[1],l=(0,Z.useState)(""),s=(0,v.Z)(l,2),u=s[0],p=s[1],x=function(n){if(u.length>13)return alert("Please enter correct phone number");void 0===a.find((function(n){return n.name===c}))?t({name:c,number:u}):S.Am.error("".concat(c," is already in contacts."),{position:S.Am.POSITION.TOP_RIGHT,theme:"dark"}),n.preventDefault(),h()},h=function(){d(""),p("")};return(0,C.jsx)(A.E.div,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.9,delay:.5},children:(0,C.jsxs)(I,{onSubmit:x,children:[(0,C.jsx)(z,{onChange:function(n){d(n.currentTarget.value)},title:"Create contact tab",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Jordan Walke"}),(0,C.jsx)(y.ZP,{defaultCountry:"UA",onChange:function(n){p(n)},region:"Europe",title:"Number",type:"tel",name:"number",value:u,placeholder:"Enter phone number",autoComplete:"off",international:!0,className:"inputPhone",maxLength:"16"}),(0,C.jsxs)(L,{disabled:r,onSubmit:x,children:[r&&(0,C.jsx)(N.gy,{color:"#fff",width:"16",height:"16"}),"Add contact"]})]})})},E=t(1538),T=t(2591),O=t(1454),Y=g.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n"]))),K=g.ZP.h2(s||(s=(0,h.Z)(["\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n"]))),R=g.ZP.button.attrs((function(){return{type:"button"}}))(u||(u=(0,h.Z)(["\n  padding: 5px 7px;\n  background-color: transparent;\n  color: #fff;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),$=g.ZP.span(p||(p=(0,h.Z)(["\n  color: #fff;\n  display: inline-block;\n  margin-top: 10px;\n"]))),q=t(6856),B=function(){var n=(0,b.wY)(),e=n.data,t=void 0===e?[]:e,r=n.isFetching,a=(0,b.Nt)(),i=(0,v.Z)(a,1)[0],o=(0,m.v9)(E.zK),c=""===o?t:t.filter((function(n){return n.name.toLowerCase().includes(o)}));return(0,C.jsx)(A.E.div,{initial:{y:300,opacity:0},animate:{y:0,opacity:1},transition:{duration:.9,delay:.6},children:(0,C.jsxs)(Y,{children:[(0,C.jsx)(K,{children:"Contacts"}),r&&(0,C.jsx)(O.a,{}),t.length>0?(0,C.jsxs)(T.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{children:"Contact Name"}),(0,C.jsx)("th",{children:"Phone Number"}),(0,C.jsx)("th",{children:"Remove"})]})}),(0,C.jsx)("tbody",{children:c.map((function(n,e){var t=n.id,r=n.name,a=n.number;return(0,C.jsxs)("tr",{className:"text",children:[(0,C.jsx)("td",{children:r}),(0,C.jsx)("td",{children:a}),(0,C.jsx)("td",{children:(0,C.jsx)(R,{onClick:function(){return i(t)},children:(0,C.jsx)(q.$vK,{size:20})})})]},t)}))})]}):(0,C.jsx)($,{children:"No Contacts"})]})})},D=t(7537),F=t.n(D),G=t(3450),H=function(){var n=(0,b.wY)().data,e=(0,m.v9)(f.Z.getIsLoggedIn);return(0,C.jsx)(J,{children:(0,C.jsxs)(j,{children:[(0,C.jsx)(_,{}),e&&n&&(n.length>1?(0,C.jsx)(F(),{}):""),(0,C.jsx)(B,{})]})})},J=g.ZP.div(x||(x=(0,h.Z)(["\n  background: linear-gradient(\n      335deg,\n      rgba(9, 5, 47, 0.2) 0%,\n      rgba(49, 29, 94, 0.2) 100%\n    ),\n    url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  width: 100%;\n  overflow-y: scroll;\n  max-height: calc(100vh - 56px - 62px);\n"])),G)},3450:function(n,e,t){"use strict";n.exports=t.p+"static/media/contactMainBg.a6d87b9b5c7e2cc2b31f.jpg"}}]);
//# sourceMappingURL=ContactsPage.1a18301f.chunk.js.map