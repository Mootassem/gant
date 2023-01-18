(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[44],{1106:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r(150),i=r(6),l=r(165),u=r(549),o=r(19),c=r(31),s=r(3),d=r(0),m=r(34),f=r(84),b=r(609),h=r(611),v=r(610),x=r(682),j=r(554),p=r(556),g=r(36),O=r(561),q=g.e().shape({email:p.a.string(Object(s.c)("user.fields.email"),{required:!0,max:255})});n.default=function(e){var n=Object(m.d)(),r=Object(m.e)(c.a.selectLoadingPasswordResetEmail),p=Object(m.e)(c.a.selectBackgroundImageUrl),g=Object(m.e)(c.a.selectLogoUrl),y=Object(d.useState)((function(){return{email:""}})),w=Object(a.a)(y,1)[0],M=Object(u.c)({resolver:Object(O.yupResolver)(q),mode:"onSubmit",defaultValues:w});return Object(i.jsx)(h.a,{style:{backgroundImage:"url(".concat(p||"/images/forgotPassword.jpg",")")},children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(v.a,{children:g?Object(i.jsx)("img",{src:g,width:"240px",alt:Object(s.c)("app.title")}):Object(i.jsx)("h1",{children:Object(s.c)("app.title")})}),Object(i.jsx)(u.a,Object(t.a)(Object(t.a)({},M),{},{children:Object(i.jsxs)("form",{onSubmit:M.handleSubmit((function(e){var r=e.email;n(o.a.doSendPasswordResetEmail(r)),Object.keys(w).forEach((function(e){M.setValue(e,w[e])}))})),children:[Object(i.jsx)(j.a,{name:"email",size:"large",placeholder:Object(s.c)("user.fields.email"),autoComplete:"email",layout:null,autoFocus:!0}),Object(i.jsx)(l.a,{type:"primary",size:"large",block:!0,htmlType:"submit",loading:r,children:Object(s.c)("auth.passwordResetEmail.message")}),Object(i.jsx)(x.a,{children:Object(i.jsx)(f.a,{to:"/auth/signin",children:Object(s.c)("common.cancel")})})]})}))]})})}},550:function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r(10),a=r(11),i=function(){function e(){Object(t.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,r,t){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!r[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},554:function(e,n,r){"use strict";var t=r(1),a=r(6),i=r(1115),l=r(1118),u=r(549),o=r(0),c=r(550),s=function(e){var n=e.label,r=e.name,s=e.hint,d=e.layout,m=e.size,f=e.type,b=e.placeholder,h=e.autoFocus,v=e.autoComplete,x=e.prefix,j=e.externalErrorMessage,p=e.required,g=e.addonAfter,O=Object(u.d)(),q=O.setValue,y=O.watch,w=O.register,M=O.errors,k=O.formState,C=k.touched,S=k.isSubmitted;Object(o.useEffect)((function(){w({name:r})}),[w,r]);var Y=c.a.errorMessage(r,M,C,S,j);return Object(a.jsx)(i.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:n,required:p,validateStatus:Y?"error":"success",help:Y||s,children:Object(a.jsx)(l.a,{id:r,name:r,type:f,value:y(r),onChange:function(n){q(r,n.target.value,{shouldValidate:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:b||void 0,autoFocus:h||!1,autoComplete:v||void 0,prefix:x||void 0,addonAfter:g||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},556:function(e,n,r){"use strict";var t=r(47),a=r(36),i=r(3),l=r(46),u=r.n(l),o={generic:e=>a.c().label(e),string(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(r=r.required()),r},stringArray(e,n){n=n||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},relationToMany(e,n){n=n||{};var r=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},integer(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},images(e,n){n=n||{};var r=a.a().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},files(e,n){n=n||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},enumerator(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(n.options||[])));return n.required&&(r=r.required(Object(i.c)("validation.string.selected"))),r},email(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},decimal(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},datetime(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return e?u()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(r=r.required()),r},date(e,n){n=n||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return n.required&&(r=r.required()),r}};n.a=o},609:function(e,n,r){"use strict";var t=r(134);function a(){var e=Object(t.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return a=function(){return e},e}var i=r(135).a.div(a());n.a=i},610:function(e,n,r){"use strict";var t=r(134);function a(){var e=Object(t.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return a=function(){return e},e}var i=r(135).a.div(a());n.a=i},611:function(e,n,r){"use strict";var t=r(134);function a(){var e=Object(t.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return a=function(){return e},e}var i=r(135).a.div(a());n.a=i},614:function(e,n,r){"use strict";var t=r(45),a=r(54);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(r(0)),l=t(r(615)),u=t(r(59)),o=function(e,n){return i.createElement(u.default,Object.assign({},e,{ref:n,icon:l.default}))};o.displayName="SearchOutlined";var c=i.forwardRef(o);n.default=c},615:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},682:function(e,n,r){"use strict";var t=r(134);function a(){var e=Object(t.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return a=function(){return e},e}var i=r(135).a.div(a());n.a=i},713:function(e,n,r){"use strict";var t;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=(t=r(614))&&t.__esModule?t:{default:t};n.default=a,e.exports=a}}]);