(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sign-sign"],{"13b7":function(t,i,n){"use strict";n.r(i);var e=n("b844"),o=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},2262:function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("64aa");var e={props:{src:{type:String,default:uni.$u.props.image.src},mode:{type:String,default:uni.$u.props.image.mode},width:{type:[String,Number],default:uni.$u.props.image.width},height:{type:[String,Number],default:uni.$u.props.image.height},shape:{type:String,default:uni.$u.props.image.shape},radius:{type:[String,Number],default:uni.$u.props.image.radius},lazyLoad:{type:Boolean,default:uni.$u.props.image.lazyLoad},showMenuByLongpress:{type:Boolean,default:uni.$u.props.image.showMenuByLongpress},loadingIcon:{type:String,default:uni.$u.props.image.loadingIcon},errorIcon:{type:String,default:uni.$u.props.image.errorIcon},showLoading:{type:Boolean,default:uni.$u.props.image.showLoading},showError:{type:Boolean,default:uni.$u.props.image.showError},fade:{type:Boolean,default:uni.$u.props.image.fade},webp:{type:Boolean,default:uni.$u.props.image.webp},duration:{type:[String,Number],default:uni.$u.props.image.duration},bgColor:{type:String,default:uni.$u.props.image.bgColor}}};i.default=e},"31b5":function(t,i,n){var e=n("b8fc");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("967d").default;o("3e18ebb3",e,!0,{sourceMap:!1,shadowMode:!1})},"609e":function(t,i,n){"use strict";n.r(i);var e=n("6abd"),o=n("8709");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);var u=n("828b"),r=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=r.exports},"6abd":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("uvImage",{attrs:{src:t.src,mode:t.mode,width:t.width,height:t.height,shape:t.shape,radius:t.radius,lazyLoad:t.lazyLoad,showMenuByLongpress:t.showMenuByLongpress,loadingIcon:t.loadingIcon,errorIcon:t.errorIcon,showLoading:t.showLoading,showError:t.showError,fade:t.fade,webp:t.webp,duration:t.duration,bgColor:t.bgColor,customStyle:t.customStyle},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$emit("click")},error:function(i){arguments[0]=i=t.$handleEvent(i),t.$emit("error")},load:function(i){arguments[0]=i=t.$handleEvent(i),t.$emit("load")}},scopedSlots:t._u([{key:"loading",fn:function(){return[t._t("loading")]},proxy:!0},{key:"error",fn:function(){return[t._t("error")]},proxy:!0}],null,!0)})},o=[]},"6d8b":function(t,i,n){"use strict";n("6a54");var e=n("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(n("a1ed")),a=e(n("2262")),u={name:"u--image",mixins:[uni.$u.mpMixin,a.default,uni.$u.mixin],components:{uvImage:o.default}};i.default=u},8709:function(t,i,n){"use strict";n.r(i);var e=n("6d8b"),o=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},"99fd":function(t,i,n){"use strict";n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={uTransition:n("b6d3").default,uIcon:n("243f").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("u-transition",{attrs:{mode:"fade",show:t.show,duration:t.fade?1e3:0}},[n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"10000px":t.$u.addUnit(t.radius),width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)},attrs:{src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.onErrorHandler.apply(void 0,arguments)},load:function(i){arguments[0]=i=t.$handleEvent(i),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.radius),backgroundColor:this.bgColor,width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}},[t._t("loading",[n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})])],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.radius),width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}},[t._t("error",[n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})])],2):t._e()],1)],1)},a=[]},a1ed:function(t,i,n){"use strict";n.r(i);var e=n("99fd"),o=n("13b7");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("d646");var u=n("828b"),r=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"05b1f4ea",null,!1,e["a"],void 0);i["default"]=r.exports},b844:function(t,i,n){"use strict";n("6a54");var e=n("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(n("2262")),a={name:"u-image",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"10000px":uni.$u.addUnit(this.radius),t.overflow=this.borderRadius>0?"hidden":"visible",uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.show=!0},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){this.loading=!1,this.isError=!1,this.$emit("load"),this.removeBgColor()},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};i.default=a},b8fc:function(t,i,n){var e=n("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-05b1f4ea], uni-scroll-view[data-v-05b1f4ea], uni-swiper-item[data-v-05b1f4ea]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-image[data-v-05b1f4ea]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-05b1f4ea]{width:100%;height:100%}.u-image__loading[data-v-05b1f4ea], .u-image__error[data-v-05b1f4ea]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909193;font-size:%?46?%}',""]),t.exports=i},c5dd:function(t,i,n){"use strict";n.r(i);var e=n("c946"),o=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=o.a},c946:function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("c223");var e=n("289d"),o=n("77af"),a=n("3a55"),u={data:function(){return{latitude:23.099994,longitude:113.32452,photo:"",time:"",token:"",imgUrl:"",beizhu:"",street:"",dakarenInfo:{},allInfo:{},kaoqindaka_info:{}}},onShow:function(){var t=this;(0,e.getToken)().then((function(i){t.token=i.data.data})),uni.getStorage({key:"dakaren_info",success:function(i){console.log(i),t.dakarenInfo=i.data},fail:function(t){uni.navigateTo({url:"/pages/login/login"})}}),uni.getStorage({key:"kaoqindaka_info",success:function(i){console.log(i),t.kaoqindaka_info=i.data}})},onLoad:function(){this.getTime(),this.getLocation()},methods:{postQiniu:function(){var t=this;uni.uploadFile({url:"https://up-z2.qiniup.com",filePath:this.photo,name:"file",method:"POST",formData:{token:this.token},success:function(i){var n=JSON.parse(i.data);console.log(n),t.imgUrl=n.key},fail:function(t){uni.showToast({title:"网络错误",icon:"none"}),uni.hideLoading()}})},goPhoto:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){t.photo=i.tempFilePaths[0],t.postQiniu()}})},clearPhoto:function(){this.photo=""},getTime:function(){var t=this;setInterval((function(){t.time=(0,a.formateDate)(new Date,"h:min:s")}),1e3)},clickSign:function(){this.imgUrl?(uni.showLoading({title:"打卡记录中...",mask:!0}),console.log(this.kaoqindaka_info),this.kaoqindaka_info.beizhu=this.beizhu,this.kaoqindaka_info.waiqin_img=this.imgUrl,this.kaoqindaka_info.waiqin_location="qinyang",this.kaoqindaka_info.is_waiqin=1,this.kaoqindaka_info.dkfs_id=0,(0,e.appkqdaka)(this.kaoqindaka_info).then((function(t){t.data.code?(console.log(t),uni.showLoading({title:"打卡记录中...",mask:!1}),uni.showToast({title:"打卡成功",icon:"none"}),uni.navigateTo({url:"/pages/index/index"})):uni.showToast({title:t.data.msg,icon:"none"})}))):uni.showToast({title:"请拍照后打卡",icon:"none"})},getAdd:function(){var t=this,i="https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(this.latitude,",").concat(this.longitude,"&key=").concat(o.key,"&output=jsonp");this.$jsonp(i).then((function(i){console.log(i),t.street=i.result.address}))},controltap:function(t){this.getLocation()},getLocation:function(){var t=this;uni.showLoading({title:"获取中...",mask:!0}),uni.getLocation({type:"gcj02",altitude:!0,isHighAccuracy:!0,geocode:!0,highAccuracyExpireTime:1e3,success:function(i){console.log(i),uni.hideLoading(),t.latitude=i.latitude,t.longitude=i.longitude,t.scale=17,t.getAdd()},fail:function(i){uni.hideLoading(),t.signText="请检查位置信息",uni.showToast({title:"请检查位置信息状态！",icon:"none",mask:!0,duration:3e3})}})}}};i.default=u},d646:function(t,i,n){"use strict";var e=n("31b5"),o=n.n(e);o.a},d6cc:function(t,i,n){var e=n("fb52");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("967d").default;o("ada95a36",e,!0,{sourceMap:!1,shadowMode:!1})},dd91:function(t,i,n){"use strict";n.r(i);var e=n("eca6"),o=n("c5dd");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("e2d2");var u=n("828b"),r=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"29e36c4f",null,!1,e["a"],void 0);i["default"]=r.exports},e2d2:function(t,i,n){"use strict";var e=n("d6cc"),o=n.n(e);o.a},eca6:function(t,i,n){"use strict";n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={uIcon:n("243f").default,"u-Image":n("609e").default,"u-Input":n("f862").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"sign"},[n("v-uni-view",{staticClass:"mapContainer"},[n("v-uni-map",{staticClass:"map",attrs:{id:"map","show-location":!0,latitude:t.latitude,longitude:t.longitude}})],1),n("v-uni-view",{attrs:{id:"location"}},[n("v-uni-view",{staticClass:"signIte"},[n("v-uni-view",{staticClass:"signTit"},[t._v("我的位置")]),n("v-uni-view",{staticStyle:{color:"#C8C7CC"}},[t._v(t._s(t.street))])],1),n("v-uni-view",{staticClass:"signIte photo"},[n("v-uni-view",{staticClass:"signTit"},[t._v("拍照（必填）")]),t.photo?t._e():n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPhoto.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"close",attrs:{name:"camera",color:"#3296fa",size:"40"}})],1),t.photo?n("v-uni-view",[n("u--image",{attrs:{showLoading:!0,src:t.photo,width:"70upx",height:"70upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}}),n("u-icon",{staticClass:"close",attrs:{name:"close-circle-fill",color:"#3296fa",size:"8"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearPhoto.apply(void 0,arguments)}}})],1):t._e()],1),n("v-uni-view",{staticClass:"signIte"},[n("v-uni-view",{staticClass:"signTit"},[t._v("备注")]),n("v-uni-view",[n("u--input",{staticStyle:{border:"none"},attrs:{placeholder:"请输入备注",clearable:!0},model:{value:t.beizhu,callback:function(i){t.beizhu=i},expression:"beizhu"}})],1)],1),n("v-uni-view",{staticClass:"signIte",staticStyle:{border:"none"}},[n("v-uni-button",{staticStyle:{color:"white","background-color":"#3296fa"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickSign.apply(void 0,arguments)}}},[t._v(t._s(t.time)+" 外勤打卡")])],1)],1)],1)},a=[]},fb52:function(t,i,n){var e=n("c86c");i=e(!1),i.push([t.i,"uni-page-body[data-v-29e36c4f]{width:100%;height:100%}.sign[data-v-29e36c4f]{width:100%;height:100%}.mapContainer[data-v-29e36c4f]{width:100%;height:100%}.map[data-v-29e36c4f]{width:100%;height:100%}#location[data-v-29e36c4f]{position:absolute;background:#fff;z-index:999;bottom:%?30?%;left:%?30?%;width:calc(100% - %?60?%);border-radius:%?10?%;padding:%?15?% %?30?%;box-sizing:border-box}.signIte[data-v-29e36c4f]{padding:%?25?% 0;border-bottom:solid %?2?% #f5f5f5}.signTit[data-v-29e36c4f]{font-size:%?32?%}.photo[data-v-29e36c4f]{display:flex;justify-content:space-between;position:relative}.close[data-v-29e36c4f]{position:absolute;top:8px;right:-4px}",""]),t.exports=i}}]);