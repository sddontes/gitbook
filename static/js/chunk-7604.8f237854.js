(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7604"],{"6Max":function(t,e,n){},"6aKk":function(t,e,n){"use strict";n.d(e,"p",function(){return a}),n.d(e,"r",function(){return r}),n.d(e,"q",function(){return l}),n.d(e,"o",function(){return c}),n.d(e,"n",function(){return o}),n.d(e,"v",function(){return i}),n.d(e,"a",function(){return u}),n.d(e,"k",function(){return d}),n.d(e,"h",function(){return p}),n.d(e,"l",function(){return m}),n.d(e,"m",function(){return g}),n.d(e,"b",function(){return h}),n.d(e,"d",function(){return _}),n.d(e,"c",function(){return f}),n.d(e,"e",function(){return v}),n.d(e,"j",function(){return b}),n.d(e,"g",function(){return y}),n.d(e,"f",function(){return w}),n.d(e,"s",function(){return C}),n.d(e,"i",function(){return j}),n.d(e,"t",function(){return O}),n.d(e,"u",function(){return x});var s=n("CcjM");function a(t){return Object(s.a)({url:"bzy-csg-settlement/settlementModel/pageList",method:"post",data:t})}function r(t){return Object(s.a)({url:"bzy-csg-settlement/settlementSubject/rule/pageList",method:"post",data:t})}function l(t){return Object(s.a)({url:"bzy-csg-settlement/settlementSubject/rule/detail/"+t,method:"get"})}function c(t){return Object(s.a)({url:"bzy-csg-settlement/bill/list",method:"post",data:t})}function o(t){return Object(s.a)({url:"bzy-csg-settlement/bill/queryBillDetail/"+t,method:"get"})}function i(t){return Object(s.a)({url:"bzy-csg-settlement/dataSync/serviceFeeExcel",method:"post",data:t})}function u(t){return Object(s.a)({url:"bzy-csg-settlement/settlementSubject/mini/achievement",method:"post",data:t})}function d(t){return Object(s.a)({url:"bzy-csg-settlement/billInfoAdjust/listByMultiselect",method:"post",data:t})}function p(t){return Object(s.a)({url:"bzy-csg-settlement/email/sendLog",method:"post",data:t})}function m(t){return Object(s.a)({url:"bzy-csg-settlement/paybill/pageList",method:"post",data:t})}function g(t){return Object(s.a)({url:"bzy-csg-settlement/email",method:"post",data:t})}function h(t){return Object(s.a)({url:"bzy-csg-settlement/billInfoAdjust/addBillInfoAdjust",method:"post",data:t})}function _(t){return Object(s.a)({url:"bzy-csg-settlement/billExtendConf?"+t,method:"get"})}function f(t){return Object(s.a)({url:"bzy-csg-settlement/billExtendConf",method:"post",data:t})}function v(t,e){return Object(s.a)({url:"bzy-csg-settlement/billExtendConf/"+t,data:e,method:"put",headers:{"Content-Type":"text/plain;charset=UTF-8"}})}function b(t){return Object(s.a)({url:"bzy-csg-settlement/dataSync/billExtend",method:"post",data:t})}function y(t){return Object(s.a)({url:"bzy-csg-settlement/billExtend/hierarchy",params:t,method:"get"})}function w(t){return Object(s.a)({url:"bzy-csg-settlement/billExtend/hotel",params:t,method:"get"})}function C(t){return Object(s.a)({url:"bzy-csg-settlement/settlementModel/list",data:t,method:"post"})}function j(t){return Object(s.a)({url:"bzy-csg-settlement/billInfoAdjust/importBillAdjustExcel",data:t,method:"post"})}function O(t){return Object(s.a)({url:"bzy-csg-settlement/transaction/payment",data:t,headers:{"Content-Type":"text/plain;charset=UTF-8"},method:"post"})}function x(t){return Object(s.a)({url:"bzy-csg-settlement/transaction/receipt",data:t,headers:{"Content-Type":"text/plain;charset=UTF-8"},method:"post"})}},VP7C:function(t,e,n){"use strict";var s=n("6Max");n.n(s).a},wjoS:function(t,e,n){"use strict";n.r(e);var s=n("6aKk"),a={data:function(){return{restartFlag:!1,ruleYear:"2019",assigns:{},tableData:[],PATH:"tr-project-manage/details/*"}},created:function(){this._getSettleAccountsRuleDetail()},methods:{getProjectStatus:function(t){return{1:"未开始",2:"进行中",3:"已完成",4:"已暂停",5:"已终止"}[t]},cancel:function(){this.$message({type:"info",message:"已取消"})},initFun:function(){this.$emit("init")},_getSettleAccountsRuleDetail:function(){var t=this;Object(s.q)(this.$route.query.hotelCode).then(function(e){t.tableData=e.data.miniEnsure,t.assigns=e.data})},_getachievement:function(){var t=this;if(this.ruleYear){var e={hotelCode:this.$route.query.hotelCode,year:this.ruleYear};Object(s.a)(e).then(function(e){t.tableData=e.data})}}}},r=(n("VP7C"),n("KHd+")),l=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content"},[n("el-card",[n("div",{staticClass:"clearfix"},[n("i",{staticClass:"span-left-green"}),t._v(" "),n("span",{staticClass:"span-left-item"},[t._v("查看结算规则")])])]),t._v(" "),n("el-row",{staticClass:"card-content-row",attrs:{gutter:20}},[n("el-col",{attrs:{span:24}})],1),t._v(" "),n("el-card",[n("el-container",{staticStyle:{"min-width":"1000px"}},[n("el-main",{staticStyle:{width:"60%"}},[n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("结算方名称：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.hotelName))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("业务模块：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.moduleName))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("签约主体：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.signCompany))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("合作模式：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.cooperationModeName))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("结算模式：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.settlementModelName))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("结算周期：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.peridName))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("管理服务费费率：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.chargeRate?t.assigns.chargeRate+"%":""))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("管理服务费上限：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t._f("ThousandNum")(t.assigns.chargeUpper))+"元")])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("管理服务费下限：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t._f("ThousandNum")(t.assigns.chargeLower))+"元")])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("超额激励费率：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.excessIncentiveRate?t.assigns.excessIncentiveRate+"%":""))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("是否有保底业绩：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.miniEnsureVoList?"是":"否"))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}},[t._v("计费规则：")]),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}},[t._v(t._s(t.assigns.evalview))])],1),t._v(" "),n("el-row",{staticClass:"card-content-row"},[n("el-col",{attrs:{span:5}}),t._v(" "),n("el-col",{staticClass:"right-color",attrs:{span:19}})],1)],1),t._v(" "),n("el-main",{staticStyle:{width:"40%"}},[n("el-row",[n("el-col",{staticClass:"card-content-row",attrs:{span:4}},[t._v("保底业绩")]),t._v(" "),n("el-col",{staticClass:"card-content-row",staticStyle:{"text-align":"right"},attrs:{span:20}},[t._v("\n            选择年份\n            "),n("el-date-picker",{staticStyle:{width:"120px",float:"right","margin-left":"20px"},attrs:{type:"year",placeholder:"选择年","value-format":"yyyy"},on:{change:t._getachievement},model:{value:t.ruleYear,callback:function(e){t.ruleYear=e},expression:"ruleYear"}})],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{prop:"miniEnsureMonth",label:"月份",align:"center",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"money",label:"金额",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("￥"+t._s(e.row.money))]}}])})],1)],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="settleAccountsRuleDetail.vue";e.default=l.exports}}]);