(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f35f"],{"+LZn":function(t,e,a){"use strict";e.a={data:function(){return{currentPage:1,size:20,totalPages:0,searchFnName:"search"}},methods:{handleSizeChange:function(t){this.size=t,this[this.searchFnName]()},handleCurrentChange:function(t){this.currentPage=t,this[this.searchFnName]("pageChange")}}}},"Ch/I":function(t,e,a){"use strict";a.d(e,"f",function(){return l}),a.d(e,"h",function(){return r}),a.d(e,"g",function(){return u}),a.d(e,"d",function(){return c}),a.d(e,"c",function(){return i}),a.d(e,"j",function(){return s}),a.d(e,"e",function(){return o}),a.d(e,"k",function(){return d}),a.d(e,"b",function(){return p}),a.d(e,"a",function(){return b}),a.d(e,"i",function(){return v});var n=a("VLRh"),l=[{value:0,label:"全部"},{value:"T_00000001",label:"酒店图片上传"},{value:"T_00000002",label:"实勘"},{value:"T_00000003",label:"完整设计方案"},{value:"T_00000004",label:"完整方案业主确定"},{value:"T_00000005",label:"下单制作安装"},{value:"T_00000010",label:"酒店图片上传--图片上传"},{value:"T_00000020",label:"实勘--改造评估报告图片上传"},{value:"T_00000030",label:"完整设计方案--整体设计方案图片上传"},{value:"T_00000040",label:"完整方案业主确定--业务确认函图片上传"},{value:"T_00000050",label:"下单制作安装--店招"},{value:"T_00000051",label:"下单制作安装--室内改造"},{value:"T_00000052",label:"下单制作安装--集采物质"}],r=[{value:0,label:"全部"},{value:1,label:"未开始"},{value:2,label:"进行中"},{value:3,label:"已完成"},{value:4,label:"已暂停"},{value:5,label:"已终止"}],u=[{value:0,label:"全部"},{value:"T_00000001",label:"评估照片上传"},{value:"T_00000002",label:"评估报告上传"},{value:"T_00000003",label:"完整设计方案"},{value:"T_00000004",label:"完整方案业主确定"},{value:"T_00000005",label:"下单制作安装"}],c=[{value:0,label:"全部"},{value:n.h,label:"品牌加盟"},{value:n.n,label:"软保底"},{value:n.c,label:"商务咨询"},{value:n.g,label:"加盟保底"}],i=[{value:0,label:"全部"},{value:n.r,label:"待运营"},{value:n.k,label:"运营中"},{value:n.l,label:"已暂停"},{value:n.q,label:"已解约"}],s=[{value:0,label:"全部"},{value:n.p,label:"未分配"},{value:n.a,label:"已分配"},{value:n.b,label:"已到店"}],o=[{value:0,label:"待定"},{value:1,label:"爱马仕橙"},{value:2,label:"孔雀蓝"},{value:3,label:"经典蓝"},{value:4,label:"青春绿"}],d=[{label:"全部",value:0},{label:"一战区",value:1},{label:"二战区",value:2},{label:"三战区",value:3},{label:"四战区",value:4},{label:"五战区",value:5},{label:"六战区",value:6},{label:"七战区",value:7},{label:"八战区",value:8}],p=[{label:"未参加",value:0},{label:"不及格",value:1},{label:"及格",value:2},{label:"良好",value:3},{label:"优秀",value:4}],b=[{label:"未参加",value:0},{label:"未通过",value:1},{label:"通过",value:2}],v=[{label:"全部",value:""},{label:"已派单",value:1},{label:"未派单",value:0}]},VLRh:function(t,e,a){"use strict";a.d(e,"n",function(){return n}),a.d(e,"h",function(){return l}),a.d(e,"c",function(){return r}),a.d(e,"g",function(){return u}),a.d(e,"k",function(){return c}),a.d(e,"r",function(){return i}),a.d(e,"l",function(){return s}),a.d(e,"q",function(){return o}),a.d(e,"f",function(){return d}),a.d(e,"e",function(){return p}),a.d(e,"j",function(){return b}),a.d(e,"s",function(){return v}),a.d(e,"o",function(){return f}),a.d(e,"d",function(){return h}),a.d(e,"p",function(){return m}),a.d(e,"a",function(){return _}),a.d(e,"b",function(){return g}),a.d(e,"m",function(){return j}),a.d(e,"t",function(){return S}),a.d(e,"i",function(){return y});var n="SOLFT_GUARANTEE",l="LOGO_JOIN",r="BUSINESS_CONSULT",u="JOIN_GUARANTEE",c="OPERATIONING",i="WAIT_OPERATION",s="PAUSED",o="VERB",d="EAST_WEST_NORTH",p="EAST",b="NORTH",v="WEST_SOUTH",f="SOUTH",h="CENTRAL",m="UNALLOCATED",_="ALLOCATED",g="ARRIVED",j="PROPRIETOR_CONFIRMED",S="YEAR_GUARANTEE",y="MONTH_GUARANTEE"},fZLi:function(t,e,a){"use strict";var n=a("ibWB");a.n(n).a},ibWB:function(t,e,a){},lY9r:function(t,e,a){"use strict";a.r(e);var n=a("14Xm"),l=a.n(n),r=a("D3Ub"),u=a.n(r),c=a("+LZn"),i=a("wX0E"),s=a("tg1W"),o=a("Ch/I"),d=a("t2Y8"),p={name:"TrProjectManageIndex",mixins:[c.a,d.a],data:function(){return{PATH:"tr-project-manage/index",loading:!1,total:0,projectStage:"",projectStages:o.g,projectStatu:"",projectStatus:o.h,list:[],createDate:"",permissionRoles:[],checked:!1,unbindFlag:!1,searchData:{}}},created:function(){this.permissionRoles=this.$store.state.user.permissionRoles,this.getList()},methods:{getprojectLevel:function(t,e){var a=Number(e);return t.find(function(t){return t.value===a}).label},search:function(t){var e=this;return u()(l.a.mark(function a(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.currentPage="pageChange"===t?e.currentPage:1,a.next=3,e.getList();case 3:case"end":return a.stop()}},a,e)}))()},toDetail:function(t,e,a,n){if("overdueQuantity"!==e.property)this.$router.push({path:"/tr-project-manage/details/"+t.projectCode,jquery:{id:1}});else{if(0===t.overdueQuantity)return;this.$router.push({path:"/tr-project-manage/overdue/"+t.projectCode})}},getList:function(){var t=this,e={bjustOverdue:this.checked,createDate:this.searchData.createDate,page:this.currentPage,projectCode:this.searchData.projectCode,projectManagerCode:"",projectName:this.searchData.projectName,projectStage:this.searchData.projectStage?this.searchData.projectStage:null,projectStatus:this.searchData.projectStatu?this.searchData.projectStatu:null,unbindFlag:this.unbindFlag?1:0,size:this.size};e=Object(s.a)(e),Object(i.f)(e).then(function(e){t.list=e.data.list,t.totalPages=e.data.pages,t.total=e.data.total})}}},b=(a("fZLi"),a("KHd+")),v=Object(b.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{staticClass:"tab-head"},[a("div",{staticClass:"tab-head-list"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tab-list-item"},[a("span",{staticClass:"left_label"},[t._v("项目名称")]),t._v(" "),a("el-input",{staticStyle:{width:"168px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.searchData.projectName,callback:function(e){t.$set(t.searchData,"projectName",e)},expression:"searchData.projectName"}})],1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tab-list-item"},[a("span",{staticClass:"left_label"},[t._v("项目编号")]),t._v(" "),a("el-input",{staticStyle:{width:"168px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.searchData.projectCode,callback:function(e){t.$set(t.searchData,"projectCode",e)},expression:"searchData.projectCode"}})],1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tab-list-item"},[a("span",{staticClass:"left_label"},[t._v("项目状态")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.searchData.projectStatu,callback:function(e){t.$set(t.searchData,"projectStatu",e)},expression:"searchData.projectStatu"}},t._l(t.projectStatus,function(t){return a("el-option",{key:t.value,staticStyle:{width:"168px"},attrs:{label:t.label,value:t.value}})}))],1)])],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"tab-list-item"},[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tab-list-item"},[a("span",{staticClass:"left_label"},[t._v("项目阶段")]),t._v(" "),a("el-select",{staticStyle:{width:"168px"},attrs:{placeholder:"请选择"},model:{value:t.searchData.projectStage,callback:function(e){t.$set(t.searchData,"projectStage",e)},expression:"searchData.projectStage"}},t._l(t.projectStages,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tab-list-item"},[a("span",{staticClass:"left_label"},[t._v("创建日期")]),t._v(" "),a("el-date-picker",{staticStyle:{width:"168px"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:" 请选择"},model:{value:t.searchData.createDate,callback:function(e){t.$set(t.searchData,"createDate",e)},expression:"searchData.createDate"}})],1)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",{staticStyle:{"margin-left":"18px"}}),t._v(" "),a("el-checkbox",{on:{change:t.search},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("只看逾期")]),t._v(" "),t.buttonFilter("bind",t.btnArr)?a("el-checkbox",{on:{change:t.search},model:{value:t.unbindFlag,callback:function(e){t.unbindFlag=e},expression:"unbindFlag"}},[t._v("已解绑")]):t._e()],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"table-content"},[a("el-table",{staticStyle:{width:"100%",cursor:"pointer","border-radius":"8px"},attrs:{data:t.list,"max-height":"500","empty-text":"暂无数据"},on:{"row-click":t.toDetail}},[a("el-table-column",{attrs:{prop:"code",label:"项目状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"status-sty",class:{"done-sty":"3"===e.row.projectStatus,"pause-sty":"4"===e.row.projectStatus,"stop-sty":"5"===e.row.projectStatus}},[t._v(t._s(t.getprojectLevel(t.projectStatus,e.row.projectStatus)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectManagerName",label:"负责人","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建任务时间","min-width":"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectCurrentStageCN",label:"项目阶段","min-width":"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新日期","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"overdueQuantity",label:"逾期记录","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"overdueQuantity",class:{"red-sty":0!==e.row.overdueQuantity},staticStyle:{cursor:"pointer","text-align":"center"}},[t._v(t._s(e.row.overdueQuantity))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"overdueQuantity",label:"解绑状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.unbindFlag?"已解绑":""))])]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"sum"},[t._v("共计"+t._s(t.total)+"条")]),t._v(" "),a("div",{staticClass:"pagination-content"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[20,40,80,100],"page-size":t.size,"page-count":t.totalPages,layout:" sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},[],!1,null,"9300a412",null);v.options.__file="index.vue";e.default=v.exports},t2Y8:function(t,e,a){"use strict";var n=a("QbLZ"),l=a.n(n),r=a("L2JU");function u(t,e){return e.includes(t)}e.a={computed:l()({},Object(r.b)(["name","btnPermissionRoles"])),created:function(){this._initBtnPermission()},methods:{_initBtnPermission:function(){var t=function(t,e){var a=[];if(t.length)return t.map(function(t){var n=t.split(":")[0],l=t.split(":")[1];n===e&&a.push(l)}),a}(this.btnPermissionRoles,this.PATH);this.btnArr=t,this.buttonFilter=u}}}},tg1W:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return i});var n=a("jWXv"),l=a.n(n),r=a("rfXi"),u=a.n(r);function c(t){if(null===t||t){var e={};for(var a in t)void 0!==t[a]&&""!==t[a]&&null!==t[a]&&0!==t[a]&&(e[a]=t[a]);return e}}function i(t){var e="",a=t.map(function(t){return e=-1!==t.indexOf("proprietor")?"proprietor":-1!==t.indexOf("finance")?"finance":-1!==t.indexOf("all")?"all":""}),n=u()(new l.a(a));return e="",n.includes("finance")&&n.includes("proprietor")?e="admin":n.map(function(t){-1!==t.indexOf("finance")?e="finance":-1!==t.indexOf("proprietor")?e="proprietor":-1===t.indexOf("all")||e||(e="all")}),e}},wX0E:function(t,e,a){"use strict";a.d(e,"f",function(){return l}),a.d(e,"d",function(){return r}),a.d(e,"a",function(){return u}),a.d(e,"e",function(){return c}),a.d(e,"k",function(){return i}),a.d(e,"h",function(){return s}),a.d(e,"j",function(){return o}),a.d(e,"b",function(){return d}),a.d(e,"g",function(){return p}),a.d(e,"c",function(){return b}),a.d(e,"i",function(){return v});var n=a("CcjM");function l(t){return Object(n.a)({url:"bzy-tr/project/pageList",method:"post",data:t})}function r(t){return Object(n.a)({url:"bzy-tr/overdue/taskOverdueList",method:"get",params:t})}function u(t){return Object(n.a)({url:"bzy-tr/project",method:"post",data:t})}function c(t){return Object(n.a)({url:"bzy-tr/task/"+t,method:"get"})}function i(t){return Object(n.a)({url:"bzy-tr/task",method:"post",data:t})}function s(t){return Object(n.a)({url:"bzy-tr/project/reset/"+t,method:"get"})}function o(t){return Object(n.a)({url:"bzy-tr/project/updateLevel",method:"post",data:t})}function d(t){return Object(n.a)({url:"bzy-tr/project/findByManagerCode/"+t,method:"get"})}function p(t){return Object(n.a)({url:"bzy-tr/project/unbind",method:"post",data:t})}function b(t){return Object(n.a)({url:"bzy-tr/project/hotelList",method:"get",params:t})}function v(t){return Object(n.a)({url:"bzy-tr/task/changeStatus",method:"post",data:t})}}}]);