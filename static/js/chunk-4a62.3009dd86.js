(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4a62"],{"/8lg":function(e,t,n){"use strict";n.d(t,"q",function(){return a}),n.d(t,"r",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"i",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"u",function(){return c}),n.d(t,"v",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"a",function(){return p}),n.d(t,"j",function(){return f}),n.d(t,"h",function(){return m}),n.d(t,"l",function(){return h}),n.d(t,"n",function(){return b}),n.d(t,"m",function(){return g}),n.d(t,"k",function(){return v}),n.d(t,"s",function(){return y}),n.d(t,"o",function(){return j}),n.d(t,"p",function(){return O}),n.d(t,"t",function(){return _}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return L}),n.d(t,"b",function(){return C});var r=n("CcjM");function a(e){return Object(r.a)({url:"bzy-upms/authUser/list",method:"get",params:e})}function i(e){return Object(r.a)({url:"bzy-upms/authUser/findUsersByRoleCode",method:"post",data:e})}function o(e){return Object(r.a)({url:"bzy-upms/authUser/getAllUser",method:"get",params:e})}function u(e){return Object(r.a)({url:"bzy-hotel/hotel/listEffective",method:"post",data:e})}function s(e){return Object(r.a)({url:"bzy-hotel/city/hotelAreaResourceList",method:"get",params:e})}function c(e){return Object(r.a)({url:"bzy-upms/user/hotelResource",method:"post",data:e})}function l(e){return Object(r.a)({url:"bzy-upms/user/hotelResource",method:"put",data:e})}function d(e){return Object(r.a)({url:"bzy-upms/user/hotelResource/getResourcesByUserForm",method:"post",data:e})}function p(e,t,n){var a="1"===e?"bzy-upms/user/hotelResource/"+t:"bzy-upms/user/hotelResource/"+t+"?allocationObject="+n;return Object(r.a)({url:a,method:"delete"})}function f(e){return Object(r.a)({url:"bzy-hotel/resource/getReleation/"+e,method:"get"})}function m(){return Object(r.a)({url:"bzy-upms/department/list",method:"get"})}function h(){return Object(r.a)({url:"bzy-upms/department/getSubDepartmentList",method:"get"})}function b(){return Object(r.a)({url:"bzy-upms/department/getSubUserRoleList",method:"get"})}function g(e){return Object(r.a)({url:"bzy-upms/user/hotelResource/querySubUserHotelResourceList",method:"post",data:e})}function v(){return Object(r.a)({url:"bzy-hotel/resource/getReleationHotelEffective",method:"get"})}function y(){return Object(r.a)({url:"bzy-hotel/city/hotelAreaPermissionResourceList",method:"get"})}function j(e){return Object(r.a)({url:"bzy-upms/theater/subList/"+e,method:"get"})}function O(e){return Object(r.a)({url:"bzy-upms/theater/getTheaterNodeDetails/"+e,method:"get",data:e})}function _(e){return Object(r.a)({url:"/bzy-upms/theater",method:"post",data:e})}function w(e){return Object(r.a)({url:"/bzy-upms/theater",method:"put",data:e})}function L(){return Object(r.a)({url:"bzy-upms/theater/queryAll",method:"get"})}function C(e){return Object(r.a)({url:"bzy-upms/theater/"+e,method:"delete"})}},"/cF3":function(e,t,n){"use strict";var r=n("mjud");n.n(r).a},M8SQ:function(e,t,n){"use strict";var r=n("/8lg");t.a={data:function(){return{department:[],hotels:[],needAreaData:!0,props:{value:"id",label:"name",expandTrigger:"hover",checkStrictly:!0},departmentValue:[]}},created:function(){this._getDepartmentList()},methods:{selectDepartment:function(e,t){this.departmentCode=e[0]||"",this.warZoneCode=e[1]||"",this.cityCode=e[2]||""},_getDepartmentList:function(){var e=this;Object(r.h)().then(function(t){e.department=t.data.children})}}}},OWJN:function(e,t){var n;(n=window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}))["zh-cn"]=Object.assign(n["zh-cn"]||{},{a:"无法上传的文件：",b:"Image toolbar",c:"Table toolbar",d:"加粗",e:"倾斜",f:"字体",g:"默认",h:"块引用",i:"插入图片或文件",j:"标题类型",k:"标题",l:"图像小部件",m:"图片通栏显示",n:"图片侧边显示",o:"图片左侧对齐",p:"图片居中",q:"图片右侧对齐",r:"插入图像",s:"编号列表",t:"项目列表",u:"字体大小",v:"极小",w:"小",x:"大",y:"极大",z:"插入表格",aa:"标题列",ab:"左侧插入列",ac:"右侧插入列",ad:"删除本列",ae:"列",af:"标题行",ag:"在下面插入一行",ah:"在上面插入一行",ai:"删除本行",aj:"行",ak:"向上合并单元格",al:"向右合并单元格",am:"向下合并单元格",an:"向左合并单元格",ao:"垂直拆分单元格",ap:"水平分割单元格",aq:"合并单元格",ar:"左对齐",as:"右对齐",at:"居中",au:"两端对齐",av:"对齐",aw:"Text alignment toolbar",ax:"下划线",ay:"删除线",az:"输入图片标题",ba:"上传失败",bb:"媒体小部件",bc:"插入媒体",bd:"URL不可以为空。",be:"不支持此媒体URL。",bf:"黄色标记",bg:"绿色标记",bh:"粉色标记",bi:"蓝色标记",bj:"红色笔",bk:"绿色笔",bl:"清除高亮",bm:"高亮",bn:"Text highlight toolbar",bo:"超链接",bp:"Widget toolbar",bq:"正在上传",br:"Open in a new tab",bs:"Downloadable",bt:"取消超链接",bu:"修改链接",bv:"在新标签页中打开链接",bw:"此链接没有设置网址",bx:"保存",by:"取消",bz:"在输入中粘贴媒体URL",ca:"提示：将URL粘贴到内容中可更快地嵌入",cb:"媒体URL",cc:"链接网址",cd:"撤销",ce:"重做",cf:"Editor toolbar",cg:"富文本编辑器， %0",ch:"Dropdown toolbar",ci:"第 %0 步，共 %1 步",cj:"上一步",ck:"下一步",cl:"黑色",cm:"暗灰色",cn:"灰色",co:"浅灰色",cp:"白色",cq:"红色",cr:"橙色",cs:"黄色",ct:"浅绿色",cu:"绿色",cv:"海蓝色",cw:"青色",cx:"浅蓝色",cy:"蓝色",cz:"紫色",da:"更改图片替换文本",db:"段落",dc:"标题 1",dd:"标题 2",de:"标题 3",df:"标题 4",dg:"标题 5",dh:"标题 6",di:"无法获取重设大小的图片URL",dj:"选择重设大小的图片失败",dk:"无法在当前位置插入图片",dl:"插入图片失败",dm:"替换文本"})},"RU/L":function(e,t,n){n("Rqdy");var r=n("WEpk").Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},Rqdy:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(e,t,n){e.exports={default:n("RU/L"),__esModule:!0}},V7oC:function(e,t,n){"use strict";t.__esModule=!0;var r,a=n("SEkw"),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},Y4Fv:function(e,t,n){"use strict";n.r(t);var r=n("m1cH"),a=n.n(r),i=n("tfjO"),o=n("/uL/"),u=n("KZYO"),s=n.n(u),c=(n("OWJN"),n("4d7F")),l=n.n(c),d=n("iCc5"),p=n.n(d),f=n("V7oC"),m=n.n(f),h=function(){function e(t){p()(this,e),this.loader=t}return m()(e,[{key:"upload",value:function(){var e=this;return this.loader.file.then(function(t){return new l.a(function(n,r){e._initRequest(),e._initListeners(n,r,t),e._sendRequest(t)})})}},{key:"abort",value:function(){this.xhr&&this.xhr.abort()}},{key:"_initRequest",value:function(){var e=this.xhr=new XMLHttpRequest;e.open("POST","https://bzy-fs.hhotel.com/bzy-file-server/uploadfile",!0),e.responseType="json"}},{key:"_initListeners",value:function(e,t,n){var r=this.xhr,a=this.loader,i="Couldn't upload file: "+n.name+".";r.addEventListener("error",function(){return t(i)}),r.addEventListener("abort",function(){return t()}),r.addEventListener("load",function(){var n=r.response;if(!n||n.error)return t(n&&n.error?n.error.message:i);e({default:n.data[0].filePath})}),r.upload&&r.upload.addEventListener("progress",function(e){e.lengthComputable&&(a.uploadTotal=e.total,a.uploaded=e.loaded)})}},{key:"_sendRequest",value:function(e){var t=new FormData;t.append("files",e),t.append("projectType",3),this.xhr.send(t)}}]),e}(),b={mixins:[n("M8SQ").a],data:function(){return{props:{multiple:!0,checkStrictly:!0},editFlag:!1,generateTempArr:[],userList:[],userCodeList:[],departmentCodeList:[],users:[],departmentValue:[],allotType:"1",optionTypes:[{value:"1",label:"按部门选择"},{value:"2",label:"按人选择"}],form:{title:"",content:"",departmentId:"",department:""},formRule:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:1,max:30,message:"最大30 个字符",trigger:"blur"}],content:[{required:!0,message:"请输入正文",trigger:"blur"}],type:[{required:!0,message:"请选择分类",trigger:"change"}],departmentId:[{required:!0,message:"请选择发布部门",trigger:"change"}]},editorConfig:{language:"zh-cn",height:500,extraPlugins:[this.MyCustomUploadAdapterPlugin],removePlugins:["MediaEmbed"],toolbar:{}},editor:s.a}},created:function(){var e=this;Object(o.e)({size:600}).then(function(t){e.userList=t.data?t.data.list:[]}),this._getNoticeDetail()},methods:{editorReady:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},MyCustomUploadAdapterPlugin:function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new h(e)}},handleDepartmentFun:function(e){this.form.department=this.$refs.cascaderDepartment.getOption(e).currentLabel,this.form.departmentId=e},selectUserFun:function(e){var t=this,n=[];e.map(function(e){var r=t.userList.find(function(t){return t.id===e});n.push({receiveId:e,receiveType:"PER",receiveName:r.name})}),this.userCodeList=n},selectDepartmentFun:function(e){var t=[],n=this.$refs.departSelect.getCheckedNodes();e.map(function(e){var r="";e.map(function(e){n.map(function(t){t.value===e&&(r+=t.label+"/")})}),t.push({receiveId:e[e.length-1],receiveType:"DE",receiveName:r.substr(0,r.length-1)})}),this.departmentCodeList=t},previewClick:function(){var e=this;if(this.form.id){var t=this.$router.resolve({path:"/notice/detail/"+this.form.id});window.open(t.href,"_blank")}else this.$message({type:"info",message:"数据未保存",onClose:function(){e.search()}})},submitForm:function(e){var t=this,n=this.form;n.receiverList=[].concat(a()(this.departmentCodeList),a()(this.userCodeList)),this.$refs[e].validate(function(e){if(!e)return!1;n.receiverList.length?(t.loadingFlag=!0,t.editFlag?t._editNotice(n):t._addNotice(n)):t.$message({type:"error",message:"至少选择一项公告查看权限的范围"})})},_addNotice:function(e){var t=this;e.createName=this.$store.state.user.name,Object(i.a)(e).then(function(e){t.$message({type:"success",message:"新增成功",onClose:function(){t.$router.push({name:"noticeIndex"})}})})},_editNotice:function(e){var t=this;e.updateName=this.$store.state.user.name,Object(i.h)(e).then(function(e){t.$message({type:"success",message:"编辑成功",onClose:function(){t.$router.push({name:"noticeIndex"})}})})},_getChildrenDep:function(e,t,n){var r=this,i=[].concat(a()(n)),o=!1;e.children&&e.children.map(function(e){t===e.id?(o=!0,i.push(e.id),r.generateTempArr.push(i)):o||(n.push(e.id),r._getChildrenDep(e,t,n))})},_generateDepartDataShow:function(e){var t=this;this.department.map(function(n){e.receiveId===n.id?t.generateTempArr.push([n.id]):t._getChildrenDep(n,e.receiveId,[n.id])})},_getNoticeDetail:function(){var e=this;if(this.$route.params.id){this.editFlag=!0;var t=[];Object(i.d)(this.$route.params.id).then(function(n){e.form=n.data,n.data.receiverList&&n.data.receiverList.map(function(n){"DE"===n.receiveType?(e._generateDepartDataShow(n),e.departmentCodeList.push(n)):(t.push(n.receiveId),e.userCodeList.push(n))}),e.users=t,e.departmentValue=[].concat(a()(e.generateTempArr))})}}}},g=(n("/cF3"),n("KHd+")),v=Object(g.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout",attrs:{id:"noticeEdit"}},[n("el-form",{ref:"noticeEditForm",attrs:{rules:e.formRule,model:e.form,"label-width":"120px"}},[n("div",{staticClass:"tab-head"},[n("div",{staticClass:"tab-head-list"},[n("el-form-item",{staticStyle:{width:"95%"},attrs:{label:"标题",prop:"title"}},[n("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"95%"},attrs:{label:"正文",prop:"content"}},[n("ckeditor",{staticStyle:{height:"350px"},attrs:{editor:e.editor,config:e.editorConfig},on:{ready:e.editorReady},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1)]),e._v(" "),n("div",{staticClass:"tab-head"},[n("div",{staticClass:"tab-head-list"},[n("el-form-item",{attrs:{label:"发布部门",prop:"departmentId"}},[n("el-select",{ref:"cascaderDepartment",staticStyle:{width:"300px"},attrs:{filterable:"",clearable:"",placeholder:"请选择",placement:"right-start"},on:{change:e.handleDepartmentFun},model:{value:e.form.departmentId,callback:function(t){e.$set(e.form,"departmentId",t)},expression:"form.departmentId"}},e._l(e.department,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"查看权限"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择"},model:{value:e.allotType,callback:function(t){e.allotType=t},expression:"allotType"}},e._l(e.optionTypes,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-select",{directives:[{name:"show",rawName:"v-show",value:"2"===e.allotType,expression:"allotType==='2'"}],ref:"userSelect",staticStyle:{width:"300px"},attrs:{multiple:"",filterable:"",clearable:"",placeholder:"请选择",placement:"right-start"},on:{change:e.selectUserFun},model:{value:e.users,callback:function(t){e.users=t},expression:"users"}},e._l(e.userList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name+"  工号： "+(e.jobNumber||""),value:e.id}})})),e._v(" "),n("el-cascader",{directives:[{name:"show",rawName:"v-show",value:"1"===e.allotType,expression:"allotType==='1'"}],ref:"departSelect",style:{width:"300px"},attrs:{options:e.department,props:e.props,filterable:"",multiple:"",clearable:"",placeholder:"请选择"},on:{change:e.selectDepartmentFun},model:{value:e.departmentValue,callback:function(t){e.departmentValue=t},expression:"departmentValue"}})],1),e._v(" "),e._e(),e._v(" "),n("el-form-item",[n("div",{staticClass:"line"})]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("noticeEditForm")}}},[e._v("发布")]),e._v(" "),n("el-button",{attrs:{type:"info"},on:{click:e.previewClick}},[e._v("预览")])],1)],1)])])],1)},[],!1,null,"7265bfc5",null);v.options.__file="noticeEdit.vue";t.default=v.exports},iCc5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},mjud:function(e,t,n){},tfjO:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"h",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return d});var r=n("CcjM");function a(e){return Object(r.a)({url:"bzy-pt-cms/notice/findByUserPageList",method:"post",data:e})}function i(e){return Object(r.a)({url:"bzy-pt-cms/notice",method:"post",data:e})}function o(e){return Object(r.a)({url:"bzy-pt-cms/notice",method:"put",data:e})}function u(e){return Object(r.a)({url:"bzy-pt-cms/notice/"+e,method:"delete"})}function s(e){return Object(r.a)({url:"bzy-pt-cms/notice/findById/"+e,method:"get"})}function c(e){return Object(r.a)({url:"bzy-pt-cms/notice/findInfoById/"+e,method:"get"})}function l(e){return Object(r.a)({url:"bzy-pt-cms/notice/invisible/"+e.id,method:"post",data:e})}function d(e){return Object(r.a)({url:"bzy-pt-cms/notice/findPageList",method:"post",data:e})}}}]);