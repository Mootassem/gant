(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[36],{1137:function(e,n,t){"use strict";t.r(n);var r=t(6),a=t(0),i=t(34),l=t(3),c=t(13),o=t(97),u=t(803),s=t(552),m=t(555),d=t(553),b=t(1),f=t(150),p=t(706),v=t(616),j=t(707),h=t(1115),O=t(165),g=t(549),x=t(554),y=t(776),q=t(817),C=t(557),E=t(36),w=t(556),S=t(790),B=t(561),M=E.e().shape({email:w.a.email(Object(l.c)("user.fields.email")),roles:w.a.stringArray(Object(l.c)("user.fields.roles"),{required:!0,min:1})}),N=E.e().shape({emails:E.a().label(Object(l.c)("user.fields.emails")).of(E.h().transform((function(e,n){return""===n?null:e})).email(Object(l.c)("user.validations.email")).label(Object(l.c)("user.fields.email")).max(255).required()).required().min(1),roles:w.a.stringArray(Object(l.c)("user.fields.roles"),{required:!0,min:1})}),R=function(e){var n=e.single?M:N,t=Object(a.useState)((function(){return{emails:[],email:"",roles:[]}})),i=Object(f.a)(t,1)[0],c=Object(g.c)({resolver:Object(B.yupResolver)(n),mode:"all",defaultValues:i}),o=function(n){var t=Object.assign({},n);t.email&&(t.emails=[t.email],delete t.email),e.onSubmit(null,t)},u=e.single,s=e.saveLoading;return Object(r.jsx)(C.a,{children:Object(r.jsx)(g.a,Object(b.a)(Object(b.a)({},c),{},{children:Object(r.jsxs)("form",{onSubmit:c.handleSubmit(o),children:[u?Object(r.jsx)(x.a,{name:"email",label:Object(l.c)("user.fields.email"),required:!0,layout:C.b,autoFocus:!0}):Object(r.jsx)(q.a,{name:"emails",label:Object(l.c)("user.fields.emails"),notFoundContent:Object(l.c)("user.new.emailsHint"),required:!0,layout:C.b,autoFocus:!0}),Object(r.jsx)(y.a,{name:"roles",label:Object(l.c)("user.fields.roles"),required:!0,options:S.a.roles.map((function(e){return{value:e,label:Object(l.c)("roles.".concat(e,".label"))}})),mode:"multiple",layout:C.b}),Object(r.jsxs)(h.a.Item,Object(b.a)(Object(b.a)({className:"form-buttons"},C.c),{},{children:[Object(r.jsx)(O.a,{loading:s,type:"primary",onClick:c.handleSubmit(o),icon:Object(r.jsx)(p.a,{}),children:Object(l.c)("common.save")}),Object(r.jsx)(O.a,{disabled:s,onClick:function(){Object.keys(i).forEach((function(e){c.setValue(e,i[e])}))},icon:Object(r.jsx)(v.a,{}),children:Object(l.c)("common.reset")}),e.onCancel&&Object(r.jsx)(O.a,{disabled:s,onClick:function(){return e.onCancel()},icon:Object(r.jsx)(j.a,{}),children:Object(l.c)("common.cancel")})]}))]})}))})};n.default=function(e){var n=Object(i.d)(),t=Object(i.e)(u.a.selectSaveLoading);Object(a.useEffect)((function(){n(o.a.doInit())}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{header:!0,items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("user.menu"),"/user"],[Object(l.c)("user.new.title")]]}),Object(r.jsxs)(s.a,{children:[Object(r.jsx)(d.a,{children:Object(l.c)("user.new.title")}),Object(r.jsx)(R,{saveLoading:t,onSubmit:function(e,t){n(o.a.doAdd(t))},onCancel:function(){return Object(c.b)().push("/user")}})]})]})}},550:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},552:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(135).a.div(a());n.a=i},553:function(e,n,t){"use strict";var r=t(134);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(135).a.h1(a());n.a=i},554:function(e,n,t){"use strict";var r=t(1),a=t(6),i=t(1115),l=t(1118),c=t(549),o=t(0),u=t(550),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,b=e.type,f=e.placeholder,p=e.autoFocus,v=e.autoComplete,j=e.prefix,h=e.externalErrorMessage,O=e.required,g=e.addonAfter,x=Object(c.d)(),y=x.setValue,q=x.watch,C=x.register,E=x.errors,w=x.formState,S=w.touched,B=w.isSubmitted;Object(o.useEffect)((function(){C({name:t})}),[C,t]);var M=u.a.errorMessage(t,E,S,B,h);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,required:O,validateStatus:M?"error":"success",help:M||s,children:Object(a.jsx)(l.a,{id:t,name:t,type:b,value:q(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:f||void 0,autoFocus:p||!1,autoComplete:v||void 0,prefix:j||void 0,addonAfter:g||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},555:function(e,n,t){"use strict";var r=t(6),a=t(597),i=(t(0),t(84));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},556:function(e,n,t){"use strict";var r=t(47),a=t(36),i=t(3),l=t(46),c=t.n(l),o={generic:e=>a.c().label(e),string(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},557:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c}));var r=t(134);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var i=t(135).a.div(a()),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},597:function(e,n,t){"use strict";var r=t(8),a=t.n(r),i=t(16),l=t.n(i),c=t(226),o=t.n(c),u=t(0),s=t(14),m=t.n(s),d=t(91),b=t(560),f=t.n(b),p=t(236),v=t(112),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},h=function(e){var n,t,r=e.prefixCls,i=e.separator,l=void 0===i?"/":i,c=e.children,o=e.overlay,s=e.dropdownProps,m=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,u.useContext(v.b).getPrefixCls)("breadcrumb",r);return n="href"in m?u.createElement("a",a()({className:"".concat(d,"-link")},m),c):u.createElement("span",a()({className:"".concat(d,"-link")},m),c),t=n,n=o?u.createElement(p.a,a()({overlay:o,placement:"bottomCenter"},s),u.createElement("span",{className:"".concat(d,"-overlay-link")},t,u.createElement(f.a,null))):t,c?u.createElement("span",null,n,l&&""!==l&&u.createElement("span",{className:"".concat(d,"-separator")},l)):null};h.__ANT_BREADCRUMB_ITEM=!0;var O=h,g=function(e){var n=e.children,t=(0,u.useContext(v.b).getPrefixCls)("breadcrumb");return u.createElement("span",{className:"".concat(t,"-separator")},n||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var x=g,y=t(521),q=t(80),C=t(39),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function w(e,n,t,r){var a=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?u.createElement("span",null,i):u.createElement("a",{href:"#/".concat(r.join("/"))},i)}var S=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},B=function(e){var n,t=e.prefixCls,r=e.separator,i=void 0===r?"/":r,c=e.style,s=e.className,b=e.routes,f=e.children,p=e.itemRender,j=void 0===p?w:p,h=e.params,g=void 0===h?{}:h,x=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),B=u.useContext(v.b),M=B.getPrefixCls,N=B.direction,R=M("breadcrumb",t);if(b&&b.length>0){var A=[];n=b.map((function(e){var n,t=S(e.path,g);return t&&A.push(t),e.children&&e.children.length&&(n=u.createElement(y.a,null,e.children.map((function(e){return u.createElement(y.a.Item,{key:e.path||e.breadcrumbName},j(e,g,b,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=o()(e),a=S(n,t);return a&&r.push(a),r}(A,e.path,g)))})))),u.createElement(O,{overlay:n,separator:i,key:t||e.breadcrumbName},j(e,g,b,A))}))}else f&&(n=Object(d.a)(f).map((function(e,n){return e?(Object(q.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(C.a)(e,{separator:i,key:n})):e})));var k=m()(R,l()({},"".concat(R,"-rtl"),"rtl"===N),s);return u.createElement("div",a()({className:k,style:c},x),n)};B.Item=O,B.Separator=x;var M=B;n.a=M},616:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},i=t(22),l=function(e,n){return r.createElement(i.a,Object.assign({},e,{ref:n,icon:a}))};l.displayName="UndoOutlined";n.a=r.forwardRef(l)},706:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},i=t(22),l=function(e,n){return r.createElement(i.a,Object.assign({},e,{ref:n,icon:a}))};l.displayName="SaveOutlined";n.a=r.forwardRef(l)},707:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},i=t(22),l=function(e,n){return r.createElement(i.a,Object.assign({},e,{ref:n,icon:a}))};l.displayName="CloseOutlined";n.a=r.forwardRef(l)},776:function(e,n,t){"use strict";var r=t(1),a=t(6),i=t(1115),l=t(635),c=t(0),o=t(550),u=t(549),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,b=e.placeholder,f=e.options,p=e.mode,v=e.autoFocus,j=e.required,h=e.externalErrorMessage,O=e.optionFilterProp,g=Object(u.d)(),x=g.register,y=g.errors,q=g.formState,C=q.touched,E=q.isSubmitted,w=g.setValue,S=g.watch,B=o.a.errorMessage(t,y,C,E,h),M=S(t);return Object(c.useEffect)((function(){x({name:t})}),[x,t]),Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,validateStatus:B?"error":"success",required:j,help:B||s,children:Object(a.jsx)(l.a,{id:t,onChange:function(n){w(t,n,{shouldValidate:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:M,size:d||void 0,placeholder:b||void 0,autoFocus:v||!1,mode:p||void 0,optionFilterProp:O||"children",allowClear:!0,children:f.map((function(e){return Object(a.jsx)(l.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},n.a=s},790:function(e,n,t){"use strict";var r=t(255),a={status:["active","invited","empty-permissions"],roles:Object.keys(r.a.values)};n.a=a},803:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.user.form},i=Object(r.a)([a],(function(e){return e.user})),l={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectUser:i,selectRaw:a};n.a=l},817:function(e,n,t){"use strict";var r=t(1),a=t(6),i=t(1115),l=t(635),c=t(549),o=t(0),u=t(550),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.placeholder,b=e.autoFocus,f=e.notFoundContent,p=e.externalErrorMessage,v=e.required,j=Object(c.d)(),h=j.register,O=j.errors,g=j.formState,x=g.touched,y=g.isSubmitted,q=j.setValue,C=j.watch,E=u.a.errorMessage(t,O,x,y,p);Object(o.useEffect)((function(){h({name:t})}),[h,t]);var w=C(t);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,validateStatus:E?"error":"success",required:v,help:E||s,children:Object(a.jsx)(l.a,{mode:"tags",style:{width:"100%"},value:w,onChange:function(n){q(t,n,{shouldValidate:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},notFoundContent:f,placeholder:d||void 0,autoFocus:b||!1})}))};s.defaultProps={layout:null,tokenSeparators:[","],required:!1},n.a=s}}]);