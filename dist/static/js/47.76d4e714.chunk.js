(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[47],{1120:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n(34),s=n(28),i=n(3),o=n(191),u=n(5),l=function(e){return e.user.view},j=Object(u.a)([l],(function(e){return e.user})),b={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectUser:j,selectRaw:l},d=n(552),O=n(555),m=n(553),f=n(1),p=n(1115),h=n(167),x=n(255),v=n(572),g=n(766),w=n(816),C=n(1099),y=n(134);function I(){var e=Object(y.a)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]);return I=function(){return e},e}var T=n(135).a.div(I()),U=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(a.jsx)(T,{children:Object(a.jsx)(C.a,{autoplay:!0,vertical:!0,effect:"fade",children:t().map((function(e){return Object(a.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):Object(a.jsx)("p",{children:Object(i.c)("imagesViewer.noImage")})},N=function(e){var t=e.user;return e.loading||!t?Object(a.jsx)(v.a,{}):Object(a.jsxs)(g.a,{children:[t.email&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.email"),children:t.email})),t.firstName&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.firstName"),children:t.firstName})),t.lastName&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.lastName"),children:t.lastName})),t.phoneNumber&&Object(a.jsxs)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.phoneNumber"),children:["+",t.phoneNumber]})),t.avatars&&Boolean(t.avatars.length)&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.avatars"),children:Object(a.jsx)(U,{value:t.avatars})})),t.status&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.status"),children:Object(a.jsx)(w.a,{value:t.status})})),t.roles&&Boolean(t.roles.length)&&Object(a.jsx)(p.a.Item,Object(f.a)(Object(f.a)({},g.b),{},{label:Object(i.c)("user.fields.roles"),children:t.roles.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(h.a,{title:x.a.descriptionOf(e),children:Object(a.jsx)("span",{children:x.a.labelOf(e)})})},e)}))}))]})},P=n(834),R=n(536),k=n(1142),B=n(165),E=n(84),L=n(564),A=n(802),D=n(114),F=function(){var e=Object(s.h)(),t=Object(c.e)(b.selectUser),n=Object(c.e)(D.a.selectPermissionToRead),r=Object(c.e)(A.a.selectPermissionToEdit),o=e.params.id;return Object(a.jsxs)(L.a,{children:[r&&Object(a.jsx)(E.a,{to:"/user/".concat(o,"/edit"),children:Object(a.jsx)(B.a,{type:"primary",icon:Object(a.jsx)(P.a,{}),children:Object(i.c)("common.edit")})}),n&&Object(a.jsx)(E.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(o)),children:Object(a.jsx)(B.a,{icon:Object(a.jsx)(R.a,{}),children:Object(i.c)("auditLog.menu")})}),t&&t.email&&n&&Object(a.jsx)(E.a,{to:"/audit-logs?createdByEmail=".concat(encodeURIComponent(t.email)),children:Object(a.jsx)(B.a,{icon:Object(a.jsx)(k.a,{}),children:Object(i.c)("user.view.activity")})})]})};t.default=function(e){var t=Object(c.d)(),n=Object(s.h)(),u=Object(c.e)(b.selectLoading),l=Object(c.e)(b.selectUser);return Object(r.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{header:!0,items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("user.menu"),"/user"],[Object(i.c)("user.view.title")]]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(m.a,{children:Object(i.c)("user.view.title")}),Object(a.jsx)(F,{}),Object(a.jsx)(N,{loading:u,user:l})]})]})}},552:function(e,t,n){"use strict";var a=n(134);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(135).a.div(r());t.a=c},553:function(e,t,n){"use strict";var a=n(134);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(135).a.h1(r());t.a=c},555:function(e,t,n){"use strict";var a=n(6),r=n(597),c=(n(0),n(84));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},564:function(e,t,n){"use strict";var a=n(134);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(135).a.div(r());t.a=c},572:function(e,t,n){"use strict";var a=n(6),r=n(575);n(0);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},766:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(134);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(135).a.div(r()),s={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},802:function(e,t,n){"use strict";var a=n(5),r=n(31),c=n(61),s=n(137),i=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userEdit)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userDestroy)})),l={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userCreate)})),selectPermissionToImport:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.userImport)})),selectPermissionToDestroy:u};t.a=l},816:function(e,t,n){"use strict";var a=n(6),r=n(3),c=(n(0),n(588));t.a=function(e){var t=e.value;return t?"active"===t?Object(a.jsx)(c.a,{color:"green",children:Object(r.c)("user.status.active")}):"empty-permissions"===t?Object(a.jsx)(c.a,{color:"red",children:Object(r.c)("user.status.empty-permissions")}):Object(a.jsx)(c.a,{color:"gold",children:Object(r.c)("user.status.invited")}):null}}}]);