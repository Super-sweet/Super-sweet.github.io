(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-password-password"],{"0f65":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa");var i={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};t.default=i},"2b35":function(e,t,n){var i=n("7301");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("967d").default;o("46248696",i,!0,{sourceMap:!1,shadowMode:!1})},4151:function(e,t,n){"use strict";var i=n("a6ab"),o=n.n(i);o.a},5862:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0c26"),n("5c47"),n("0506");var i=n("289d"),o={data:function(){return{obj:{password:"",mobile:"",code:""},tips:"",value:""}},methods:{goLogin:function(){if(11===this.obj.mobile.trim().length)if(this.obj.code.trim().length<1)uni.showToast({title:"请输入验证码",icon:"none"});else{/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.obj.password)?(0,i.jsyapprepass)(this.obj).then((function(e){e.data.code?(uni.showToast({title:"修改成功",icon:"none"}),uni.navigateTo({url:"/pages/login/login"})):uni.showToast({title:e.data.msg,icon:"none"})})):uni.showToast({title:"密码格式错误",icon:"none"})}else uni.showToast({title:"请输入正确手机号",icon:"none"})},codeChange:function(e){this.tips=e},getCode:function(){var e=this,t=this.obj.mobile.trim();11===t.length?this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),(0,i.getCode)({mobile:t}).then((function(t){t.data.code?(uni.$u.toast("验证码已发送"),e.$refs.uCode.start()):uni.showToast({title:t.data.msg,icon:"none"})}))):uni.$u.toast("倒计时结束后再发送"):uni.showToast({title:"请输入正确手机号",icon:"none"})},change:function(e){}}};t.default=o},"5fd2":function(e,t,n){"use strict";n.r(t);var i=n("7b29"),o=n("efc8");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("4151");var a=n("828b"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"5bb0dae1",null,!1,i["a"],void 0);t["default"]=u.exports},7301:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-4d11c728], uni-scroll-view[data-v-4d11c728], uni-swiper-item[data-v-4d11c728]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),e.exports=t},"7b29":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={"u-Input":n("f862").default,uIcon:n("243f").default,uCode:n("a392").default,uButton:n("5ee4").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"password"},[n("v-uni-view",[n("v-uni-view",[n("u--input",{attrs:{placeholder:"请输入手机号",prefixIconStyle:"font-size: 22px;color: #909399",border:"bottom"},model:{value:e.obj.mobile,callback:function(t){e.$set(e.obj,"mobile",t)},expression:"obj.mobile"}},[n("u-icon",{attrs:{slot:"prefix",size:"20",name:"http://assets.jzyxxb.cn/FqVNIqWnjELRkQ4YUQyokS4bHWlG"},slot:"prefix"}),n("template",{slot:"suffix"},[n("u-code",{ref:"uCode",attrs:{seconds:"60",changeText:"X秒重新获取"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),n("u-button",{attrs:{text:e.tips,size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}})],1)],2)],1),n("v-uni-view",{staticStyle:{"margin-top":"40upx"}},[n("u--input",{attrs:{placeholder:"请输入验证码",prefixIconStyle:"font-size: 22px;color: #909399",border:"bottom"},model:{value:e.obj.code,callback:function(t){e.$set(e.obj,"code",t)},expression:"obj.code"}},[n("u-icon",{attrs:{slot:"prefix",size:"20",name:"http://assets.jzyxxb.cn/Fky-yXrjH2mmGAU9XrjWSvpztTZ0"},slot:"prefix"})],1)],1),n("v-uni-view",{staticStyle:{"margin-top":"40upx"}},[n("u--input",{attrs:{placeholder:"请输入新密码(6-12,数字字母组合)",prefixIconStyle:"font-size: 22px;color: #909399",border:"bottom",type:"password"},model:{value:e.obj.password,callback:function(t){e.$set(e.obj,"password",t)},expression:"obj.password"}},[n("u-icon",{attrs:{slot:"prefix",size:"20",name:"http://assets.jzyxxb.cn/FprI_mdMh31ajWmOeE3D2DNlb0jO"},slot:"prefix"})],1)],1)],1),n("v-uni-view",{staticClass:"lognbtn"},[n("u-button",{attrs:{type:"primary",shape:"circle",size:"normal",text:"确定"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin()}}})],1)],1)},s=[]},"948d":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa"),n("5c47"),n("a1c1");var o=i(n("0f65")),s={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=s},"9e36":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".password[data-v-5bb0dae1]{padding:0 %?24?%;padding-top:10%}.lognbtn[data-v-5bb0dae1]{margin-top:%?80?%}.more[data-v-5bb0dae1]{display:flex;justify-content:space-between;color:#333;margin-top:%?20?%}",""]),e.exports=t},a392:function(e,t,n){"use strict";n.r(t);var i=n("cc8d"),o=n("fedd");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("ff38");var a=n("828b"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"4d11c728",null,!1,i["a"],void 0);t["default"]=u.exports},a6ab:function(e,t,n){var i=n("9e36");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("967d").default;o("33420613",i,!0,{sourceMap:!1,shadowMode:!1})},cc8d:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"u-code"})},o=[]},efc8:function(e,t,n){"use strict";n.r(t);var i=n("5862"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},fedd:function(e,t,n){"use strict";n.r(t);var i=n("948d"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},ff38:function(e,t,n){"use strict";var i=n("2b35"),o=n.n(i);o.a}}]);