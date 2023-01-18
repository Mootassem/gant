(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[40],{1119:function(e,n,t){"use strict";t.r(n);var r=t(6),a=t(0),c=t(3),o=t(552),i=t(553),l=t(34),u=t(96),s=function(){var e=Object(l.d)();return Object(a.useEffect)((function(){e(u.a.doFetch())}),[]),null},d=t(588),f=t(684),b=t(165),v=t(784),m=t(84),j=t(19),p=t(190),O=t(5),h={selectLoading:Object(O.a)([function(e){return e.tenant.destroy}],(function(e){return Boolean(e.loading)}))},x=t(88),y=t(258),g=t(147),C=t(31),w=t(61),E=t(137),T={selectPermissionToEdit:Object(O.a)([C.a.selectCurrentUser],(function(e){return function(n){return new w.a(n,e).match(E.a.values.tenantEdit)}})),selectPermissionToDestroy:Object(O.a)([C.a.selectCurrentUser],(function(e){return function(n){return new w.a(n,e).match(E.a.values.tenantDestroy)}})),selectInvitationToken:Object(O.a)([C.a.selectCurrentUser],(function(e){return function(n){if(!e||!e.tenants)return!1;var t=e.tenants.find((function(e){return e.tenant.id===n.id&&"invited"===e.status}));return t?t.invitationToken:null}}))},k=t(589),P=t(579),S=t(174),N=t(40),V=t(26),q=function(e){var n=Object(l.d)(),t=Object(l.e)(g.a.selectLoading),a=Object(l.e)(h.selectLoading),o=Object(l.e)(y.a.selectLoading),i=t||a||o,s=Object(l.e)(g.a.selectRows),O=Object(l.e)(g.a.selectPagination),w=Object(l.e)(T.selectInvitationToken),E=Object(l.e)(T.selectPermissionToEdit),q=Object(l.e)(T.selectPermissionToDestroy),D=Object(l.e)(C.a.selectCurrentTenant),I=[{title:Object(c.c)("tenant.fields.name"),sorter:!0,dataIndex:"name",render:function(e,n){return Object(r.jsxs)(r.Fragment,{children:[n.name,Boolean(w(n))&&Object(r.jsx)(d.a,{color:"gold",style:{marginLeft:"8px"},children:Object(c.c)("tenant.invitation.invited")})]})}},V.a.isEnabled&&{title:Object(c.c)("tenant.fields.url"),sorter:!0,dataIndex:"url",render:function(e,n){return"".concat(n.url,".").concat(N.a.frontendUrl.host)}},N.a.isPlanEnabled&&{title:Object(c.c)("tenant.fields.plan"),sorter:!0,dataIndex:"plan",render:function(e,n){return Object(r.jsx)(d.a,{color:e===S.a.values.free?void 0:"gold",children:Object(c.c)("plan.".concat(e,".label"))})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return w(t)?Object(r.jsxs)("div",{className:"table-actions",children:[Object(r.jsx)(f.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=w(t),void n(x.a.doAccept(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(r.jsx)(b.a,{type:"primary",children:Object(c.c)("tenant.invitation.accept")})}),Object(r.jsx)(f.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=w(t),void n(x.a.doDecline(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(r.jsx)(b.a,{type:"primary",danger:!0,children:Object(c.c)("tenant.invitation.decline")})})]}):Object(r.jsxs)("div",{className:"table-actions",children:[D.id!==t.id&&Object(r.jsx)(b.a,{type:"primary",onClick:function(){return e=t,void n(j.a.doSelectTenant(e));var e},children:Object(c.c)("tenant.select")}),E(t)&&Object(r.jsx)(m.a,{to:"/tenant/".concat(t.id,"/edit"),children:Object(c.c)("common.edit")}),q(t)&&Object(r.jsx)(f.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(p.a.doDestroy(e));var e},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(r.jsx)(k.a,{children:Object(c.c)("common.destroy")})})]})}}].filter(Boolean);return Object(r.jsx)(P.a,{children:Object(r.jsx)(v.a,{rowKey:"id",loading:i,columns:I,dataSource:s,pagination:O,onChange:function(e,t,r){n(u.a.doChangePaginationAndSort(e,r))},scroll:{x:!0}})})},D=t(709),I=t(564),B=function(e){return Object(r.jsx)(I.a,{children:Object(r.jsx)(m.a,{to:"/tenant/new",children:Object(r.jsx)(b.a,{type:"primary",icon:Object(r.jsx)(D.a,{}),children:Object(c.c)("common.new")})})})};n.default=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{style:{marginTop:0},children:[Object(r.jsx)(i.a,{children:Object(c.c)("tenant.list.title")}),Object(r.jsx)(B,{}),Object(r.jsx)(s,{}),Object(r.jsx)(q,{})]})})}},552:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=t(135).a.div(a());n.a=c},553:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=t(135).a.h1(a());n.a=c},558:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(253);var a=t(172),c=t(254);function o(e,n){return Object(r.a)(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return t}}(e,n)||Object(a.a)(e,n)||Object(c.a)()}var i=t(0);function l(e,n){var t=n||{},r=t.defaultValue,a=t.value,c=t.onChange,l=t.postState,u=o(i.useState((function(){return void 0!==a?a:void 0!==r?"function"===typeof r?r():r:"function"===typeof e?e():e})),2),s=u[0],d=u[1],f=void 0!==a?a:s;l&&(f=l(f));var b=i.useRef(!0);return i.useEffect((function(){b.current?b.current=!1:void 0===a&&d(a)}),[a]),[f,function(e){d(e),f!==e&&c&&c(e,f)}]}},559:function(e,n,t){"use strict";var r;function a(e){if("undefined"===typeof document)return 0;if(e||void 0===r){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),a=t.style;a.position="absolute",a.top=0,a.left=0,a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var c=n.offsetWidth;t.style.overflow="scroll";var o=n.offsetWidth;c===o&&(o=t.clientWidth),document.body.removeChild(t),r=c-o}return r}t.d(n,"a",(function(){return a}))},564:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=t(135).a.div(a());n.a=c},579:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  .ant-table th {\n    white-space: nowrap;\n  }\n\n  .ant-table td {\n    white-space: nowrap;\n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"]);return a=function(){return e},e}var c=t(135).a.div(a());n.a=c},583:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0);function a(e,n,t){var a=r.useRef({});return"value"in a.current&&!t(a.current.condition,n)||(a.current.value=e(),a.current.condition=n),a.current.value}},589:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"]);return a=function(){return e},e}var c=t(135).a.button(a());n.a=c},612:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(33),a=t.n(r),c=t(0);function o(){var e=c.useReducer((function(e){return e+1}),0);return a()(e,2)[1]}},684:function(e,n,t){"use strict";var r=t(8),a=t.n(r),c=t(33),o=t.n(c),i=t(0),l=t(14),u=t.n(l),s=t(230),d=t.n(s),f=t(81),b=t(167),v=t(165),m=t(229),j=t(164),p=t(151),O=t(112),h=t(200),x=t(39),y=void 0,g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},C=i.forwardRef((function(e,n){var t=i.useState(e.visible),r=o()(t,2),c=r[0],l=r[1];i.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),i.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var s=function(n,t){"visible"in e||l(n),e.onVisibleChange&&e.onVisibleChange(n,t)},d=function(n){s(!1,n),e.onConfirm&&e.onConfirm.call(y,n)},C=function(n){s(!1,n),e.onCancel&&e.onCancel.call(y,n)},w=i.useContext(O.b).getPrefixCls,E=e.prefixCls,T=e.placement,k=e.children,P=e.overlayClassName,S=g(e,["prefixCls","placement","children","overlayClassName"]),N=w("popover",E),V=w("popconfirm",E),q=u()(V,P),D=i.createElement(j.a,{componentName:"Popconfirm",defaultLocale:p.a.Popconfirm},(function(n){return function(n,t){var r=e.okButtonProps,c=e.cancelButtonProps,o=e.title,l=e.cancelText,u=e.okText,s=e.okType,f=e.icon;return i.createElement("div",{className:"".concat(n,"-inner-content")},i.createElement("div",{className:"".concat(n,"-message")},f,i.createElement("div",{className:"".concat(n,"-message-title")},Object(h.a)(o))),i.createElement("div",{className:"".concat(n,"-buttons")},i.createElement(v.a,a()({onClick:C,size:"small"},c),l||t.cancelText),i.createElement(v.a,a()({onClick:d},Object(m.a)(s),{size:"small"},r),u||t.okText)))}(N,n)}));return i.createElement(b.a,a()({},S,{prefixCls:N,placement:T,onVisibleChange:function(n){e.disabled||s(n)},visible:c,overlay:D,overlayClassName:q,ref:n}),Object(x.a)(k,{onKeyDown:function(e){var n,t;i.isValidElement(k)&&(null===(t=null===k||void 0===k?void 0:(n=k.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===f.a.ESC&&c&&s(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:i.createElement(d.a,null),disabled:!1},n.a=C},709:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=t(22),o=function(e,n){return r.createElement(c.a,Object.assign({},e,{ref:n,icon:a}))};o.displayName="PlusOutlined";n.a=r.forwardRef(o)},712:function(e,n,t){var r=t(257);e.exports=function(e,n){return r(e,n)}}}]);