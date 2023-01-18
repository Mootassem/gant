(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[54],{1122:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),o=a(4),s=a(150),i=a(6),c=a(0),p=a(67),u=a(64),l=a(63),d=a(62),m=a(10),h=a(11),f=a(65),g=a(66),b=a(844),y=(a(845),a(77)),x=function(t){Object(f.a)(a,t);var e=Object(g.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).dataProcessor=null,t}return Object(h.a)(a,[{key:"getUsers",value:function(){var t=[{}];return y.a.fetchUsers("","","","").then((function(e){t.shift(),e.count>0&&e.rows.map((function(e,a){var n={key:e.id,label:e.fullName};t.push(n)}))})),t}},{key:"initZoom",value:function(){var t=this.getUsers();b.gantt.config.columns=[{name:"text",label:"Task name",width:120,tree:!0},{name:"start_date",label:"Start time",align:"center"},{name:"duration",label:"Duration",align:"center"},{name:"user_id",label:"User",template:function(e){return function(e){for(var a=0;a<t.length;a++)if(t[a].key==e)return t[a].label;return""}(e.user_id)}},{name:"add",label:"",width:44}],b.gantt.config.lightbox.sections=[{name:"title",height:30,map_to:"text",type:"textarea",focus:!0},{name:"description",height:70,map_to:"description",type:"textarea"},{name:"type",type:"typeselect",map_to:"type"},{name:"time",type:"duration",map_to:"auto"},{name:"users",height:30,map_to:"user_id",type:"select",options:t},{name:"template",height:30,type:"template",map_to:"my_template"}],b.gantt.locale.labels.section_template="Attachement",b.gantt.attachEvent("onBeforeLightbox",(function(t){return b.gantt.getTask(t).my_template="<input type='file' />",!0})),b.gantt.locale.labels.section_users="Users",b.gantt.config.types.project="project",b.gantt.locale.labels.type_project="Project",b.gantt.config.types.module="type_id",b.gantt.locale.labels.type_module="WBS",b.gantt.config.types.task="task",b.gantt.locale.labels.type_task="Standard Task",b.gantt.config.types.milestone="milestone",b.gantt.locale.labels.type_milestone="Milestone Task",b.gantt.config.lightbox.module_sections=[{name:"title",height:30,map_to:"text",type:"textarea",focus:!0},{name:"description",height:70,map_to:"description",type:"textarea"},{name:"type",type:"typeselect",map_to:"type"},{name:"time",height:72,type:"time",map_to:"auto"}],b.gantt.locale.labels.section_title="Titre",b.gantt.locale.labels.section_description="Description",b.gantt.templates.task_class=function(t,e,a){return a.type==b.gantt.config.types.module?"module_task":""},b.gantt.templates.task_text=function(t,e,a){return a.type==b.gantt.config.types.module?"WBS: <b>"+a.text+"</b>":a.text},b.gantt.ext.zoom.init({levels:[{name:"Hours",scale_height:60,min_column_width:30,scales:[{unit:"day",step:1,format:"%d %M"},{unit:"hour",step:1,format:"%H"}]},{name:"Days",scale_height:60,min_column_width:70,scales:[{unit:"week",step:1,format:"Week #%W"},{unit:"day",step:1,format:"%d %M"}]},{name:"Months",scale_height:60,min_column_width:70,scales:[{unit:"month",step:1,format:"%F"},{unit:"week",step:1,format:"#%W"}]}]})}},{key:"setZoom",value:function(t){b.gantt.ext.zoom.getLevels()||this.initZoom(),b.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){var t=this.props.onDataUpdated;this.dataProcessor=b.gantt.createDataProcessor((function(e,a,n,r){return new Promise((function(o,s){return t&&t(e,a,n,r),o()}))}))}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){b.gantt.config.date_format="%Y-%m-%d %H:%i";var t=this.props.tasks;b.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),b.gantt.parse(t)}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),Object(i.jsx)("div",{ref:function(e){t.ganttContainer=e},style:{width:"100%",height:"100%"}})}}]),a}(c.Component),k=(a(846),x),j=function(t){Object(f.a)(a,t);var e=Object(g.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleZoomChange=function(e){t.props.onZoomChange&&t.props.onZoomChange(e.target.value)},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this,e=["Hours","Days","Months"].map((function(e){var a=t.props.zoom===e;return Object(i.jsxs)("label",{className:"radio-label ".concat(a?"radio-label-active":""),children:[Object(i.jsx)("input",{type:"radio",checked:a,onChange:t.handleZoomChange,value:e}),e]},e)}));return Object(i.jsxs)("div",{className:"tool-bar",children:[Object(i.jsx)("b",{children:"Zoom: "}),e]})}}]),a}(c.Component),_=(a(847),j);e.default=function(t){var e=Object(c.useState)("Days"),a=Object(s.a)(e,2),n=a[0],m=a[1],h=[{}],f=[{}],g=Object(c.useState)({}),b=Object(s.a)(g,2),y=(b[0],b[1],Object(c.useState)({})),x=Object(s.a)(y,2),j=x[0],v=x[1],O=Object(c.useState)({}),w=Object(s.a)(O,2),D=w[0],C=w[1],z=Object(c.useState)(!1),P=Object(s.a)(z,2),Z=P[0],S=P[1],U=function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.list("","","","").then((function(t){h.shift(),t.count>0&&(S(!0),t.rows.map((function(t,e){var a={id:t.id,text:t.title,start_date:t.startDate,duration:t.duration,progress:t.progress,parent:t.project?t.project.id:t.module,type:"type_id",description:t.description};h.push(a)})),v(h),S(!1))}));case 2:return t.next=4,l.a.list("","","","").then((function(t){h.shift(),t.count>0&&(S(!0),t.rows.map((function(t,e){var a={id:t.id,text:t.title,start_date:t.startDate,duration:t.duration,progress:t.progress,parent:t.parentId,type:"project",description:t.description,user_id:t.owner};h.push(a)})),v(h),S(!1))}));case 4:return t.next=6,d.a.list("","","","").then((function(t){h.shift(),t.count>0&&(S(!0),t.rows.map((function(t,e){var a={id:t.id,text:t.title,start_date:t.startDate,duration:t.duration,progress:t.progress,parent:t.parentId,type:t.type,description:t.description,user_id:t.owner};h.push(a)})),v(h),S(!1))}));case 6:return t.next=8,p.a.list("","","","").then((function(t){f.shift(),t.count>0&&(S(!0),t.rows.map((function(t,e){var a={id:t.id,source:t.source.id,target:t.target.id,type:t.type};f.push(a)})),C(f),S(!1))}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){U()}),[]);var M={data:j,links:D},W=function(){U()},A=function(){var t=Object(o.a)(r.a.mark((function t(e,a,n,o){var s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("type",e),console.log("action",a),console.log("item",n),console.log("id",o),s={title:n.text,startDate:n.start_date,endDate:n.end_date,duration:n.duration,progress:n.progress,parentId:n.parent,project:n.parent,module:n.parent,type:n.type,description:n.description,owner:n.user_id,parent:"0"===n.parent||0===n.parent?null:n.parent},"create"!==a||"task"!==e){t.next=23;break}if("type_id"!==n.type){t.next=12;break}return t.next=9,u.a.create(s);case 9:W(),t.next=21;break;case 12:if("project"!==n.type){t.next=18;break}return t.next=15,l.a.create(s);case 15:W(),t.next=21;break;case 18:return t.next=20,d.a.create(s);case 20:W();case 21:t.next=58;break;case 23:if("update"!==a||"task"!==e){t.next=41;break}if("type_id"!==n.type){t.next=30;break}return t.next=27,u.a.update(n.id,s);case 27:W(),t.next=39;break;case 30:if("project"!==n.type){t.next=36;break}return t.next=33,l.a.update(n.id,s);case 33:W(),t.next=39;break;case 36:return t.next=38,d.a.update(n.id,s);case 38:W();case 39:t.next=58;break;case 41:if("delete"!==a||"task"!==e){t.next=47;break}return t.next=44,d.a.destroyAll([n.id]);case 44:W(),t.next=58;break;case 47:if("create"!==a||"link"!==e){t.next=54;break}return i={source:n.source,target:n.target,type:n.type},t.next=51,p.a.create(i);case 51:W(),t.next=58;break;case 54:if("delete"!==a||"link"!==e){t.next=58;break}return t.next=57,p.a.destroyAll([n.id]);case 57:W();case 58:case"end":return t.stop()}}),t)})));return function(e,a,n,r){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"zoom-bar",children:Object(i.jsx)(_,{zoom:n,onZoomChange:function(t){m(t)}})}),Z?null:Object(i.jsx)("div",{className:"gantt-container",children:Object(i.jsx)(k,{tasks:M,zoom:n,onDataUpdated:A})})]})}},846:function(t,e,a){},847:function(t,e,a){}}]);