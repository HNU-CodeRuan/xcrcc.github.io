webpackJsonp([1],{"/+Kt":function(t,s){},"1k3Y":function(t,s){},B0GG:function(t,s){},"DL/1":function(t,s){},LH8S:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")({name:"App"},e,!1,function(t){i("B0GG")},null,null).exports,n=i("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"head"},[s("p",{staticClass:"last-modified"},[this._v("最后更新于2020年3月")]),this._v(" "),s("a",{staticClass:"download-pdf",attrs:{href:"../../../static/resume.pdf"}},[this._v("下载 PDF")])])}]},v=i("VU/8")({name:"Head",data:function(){return{}},mounted:function(){},computed:{}},c,!1,null,null,null).exports,o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"root"},[i("swiper",{ref:"mySwiper",attrs:{id:"swiperBox",options:t.swiperOption}},[i("swiper-slide",{staticClass:"swiper-slide"},[i("div",{staticClass:"page1"},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"main"},[i("h1",{staticClass:"main-title"},[t._v("Hi, I'm coderuan")]),t._v(" "),i("p",[t._v("你好，我叫阮成春")]),t._v(" "),i("p",[t._v("很高兴能在茫茫人海中遇到你")]),t._v(" "),i("p",[t._v("来都来了")]),t._v(" "),i("p",[t._v("不如...")]),t._v(" "),i("p",[t._v("来互相认识一下吧？")])])])])]),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},staticRenderFns:[]};var r=i("VU/8")({name:"Aboutus",data:function(){return{}},mounted:function(){},computed:{}},o,!1,function(t){i("nv1S"),i("1k3Y")},"data-v-3b449f1a",null).exports,_={name:"topMenu",data:function(){return{activeIndex2:"1"}},methods:{handleSelect:function(t,s){var i="";if("1"===t){i="root";var a=document.querySelector("."+i).offsetTop;document.documentElement.scrollTop=a-60}if("2"===t){i="title";a=document.querySelector("."+i).offsetTop;document.documentElement.scrollTop=a+750}if("3"===t){i="content-love";a=document.querySelector("."+i).offsetTop;document.documentElement.scrollTop=a+810}if("4"===t){i="content-left";a=document.querySelector("."+i).offsetTop;document.documentElement.scrollTop=a+820}if("5"===t){i="content-right";a=document.querySelector("."+i).offsetTop;document.documentElement.scrollTop=a+1900}}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"menupage"},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[i("p",{staticClass:"logo-title"},[i("i",{staticClass:"el-icon-user"}),t._v("Coderuan")]),t._v(" "),i("el-menu-item",{staticStyle:{"margin-left":"250px"},attrs:{index:"1"}},[t._v("首页")]),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[t._v("个人简介")]),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[t._v("爱好")]),t._v(" "),i("el-menu-item",{attrs:{index:"4"}},[t._v("项目经历")]),t._v(" "),i("el-menu-item",{attrs:{index:"5"}},[t._v("技能")])],1)],1)},staticRenderFns:[]};var m=i("VU/8")(_,d,!1,function(t){i("saOq"),i("/+Kt")},"data-v-48c42aa2",null).exports,u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"content-hd"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("section",{staticClass:"contact"},[i("ul",[i("li",[i("a",{attrs:{href:"",target:"_blank"}},[i("span",{staticClass:"contact-link"},[t._v("我的技术博客（CSDN）")]),t._v(" "),i("span",{staticClass:"iconfont"},[i("svg",{attrs:{width:"16px",height:"16px",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M512 42.581333l-469.333333 469.333333 31.146667 31.146667L170.666667 446.250667l0 438.186667 682.666667 0L853.333333 446.208l96.853333 96.896 31.146667-31.146667L512 42.581333zM426.666667 841.770667l0-298.666667 170.666667 0 0 298.666667L426.666667 841.770667zM810.666667 841.770667l-170.666667 0 0-341.333333L384 500.437333l0 341.333333L213.333333 841.770667 213.333333 403.584l298.666667-298.666667 298.666667 298.666667L810.666667 841.770667z"}})])])])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/XCRCC",target:"_blank"}},[i("span",{staticClass:"contact-link"},[t._v("Github - XCRCC")]),t._v(" "),i("span",{staticClass:"iconfont"},[i("svg",{attrs:{width:"16px",height:"16px",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"}})])])])]),t._v(" "),i("li",[i("a",{attrs:{href:"mailto:2399868430@qq.com",target:"_blank"}},[i("span",{staticClass:"contact-link"},[t._v("2399868430@qq.com")]),t._v(" "),i("span",{staticClass:"iconfont"},[i("svg",{attrs:{width:"16px",height:"16px",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z"}})])])])]),t._v(" "),i("li",[i("a",{attrs:{href:"tel:17809298760",target:"_blank"}},[i("span",{staticClass:"contact-link"},[t._v("186xxxxxxxx")]),t._v(" "),i("span",{staticClass:"iconfont"},[i("svg",{attrs:{width:"16px",height:"16px",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z"}})])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"title"},[s("div",{staticClass:"name"},[s("h1",[this._v("阮成春")])]),this._v(" "),s("div",{staticClass:"job"},[s("h2",[this._v("Java后端工程师 | 全栈工程师")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"info"},[s("ul",[s("li",[this._v("男 / 1999.11")]),this._v(" "),s("li",[s("a",{attrs:{href:"http://www.lnpu.edu.cn/"}},[this._v("辽宁石油化工大学（抚顺石油学院)")])]),this._v(" "),s("li",[this._v("软件工程")]),this._v(" "),s("li",[this._v("本科 / 2022年6月毕业")])])])}]},p=i("VU/8")({name:"BaseInfo",data:function(){return{}},mounted:function(){},computed:{}},u,!1,null,null,null).exports,C=i("7t+N"),h=i.n(C),f={name:"Content",components:{},data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){h()(document).ready(function(){"none"==h()("ol:first").css("list-style-type")&&h()("ol ol").each(function(t,s){var i=(s=h()(s)).closest("li").index()+1;s.children("li").each(function(t,s){s=h()(s);var a=i+"."+(s.index()+1);s.prepend("<span>"+a+"</span>")})})})}},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content-bd"},[i("div",{staticClass:"content-love"},[i("section",{staticClass:"skill"},[i("header",{staticClass:"section-hd"},[i("span",{staticClass:"section-title-l"}),t._v(" "),i("h2",{staticClass:"section-title"},[t._v("个人爱好")]),t._v(" "),i("span",{staticClass:"section-title-r"})]),t._v(" "),i("div",{staticClass:"section-bd"},[i("div",{staticClass:"ui container"},[i("div",{staticClass:"ui stackable grid"},[i("div",{staticClass:"eleven wide column"},[i("div",{staticClass:"ui segment"},[i("img",{staticClass:"ui rounded image",attrs:{src:"https://pic2.zhimg.com/v2-13d9d3e944c4384d22eb848c386f73ab_r.jpg?source=1940ef5c",alt:""}})])]),t._v(" "),i("div",{staticClass:"five wide column"},[i("div",{staticClass:"ui top attached segment"},[i("div",{staticClass:"ui header"},[t._v("关于我")])]),t._v(" "),i("div",{staticClass:"ui attached segment"},[i("p",{staticClass:"m-text"},[t._v("誓将学习无限循环. 希望结识可以共同成长的小伙伴.")])]),t._v(" "),i("div",{staticClass:"ui attached segment"},[i("div",{staticClass:"ui orange basic left pointing label"},[t._v("编程")]),t._v(" "),i("div",{staticClass:"ui orange basic left pointing label"},[t._v("唱歌")]),t._v(" "),i("div",{staticClass:"ui orange basic left pointing label"},[t._v("思考")]),t._v(" "),i("div",{staticClass:"ui orange basic left pointing label"},[t._v("书法")]),t._v(" "),i("div",{staticClass:"ui orange basic left pointing label"},[t._v("文学")]),t._v(" "),i("div",{staticClass:"ui orange basic left pointing label"},[t._v("历史")])]),t._v(" "),i("div",{staticClass:"ui attached segment"},[i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("Java")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("JavaScript")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("Node")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("React")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("Python")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("MYSQL")]),t._v(" "),i("div",{staticClass:"ui teal basic left pointing label m-margin-tb-tiny"},[t._v("...")])])])])])])])]),t._v(" "),i("div",{staticClass:"content-left"},[i("section",{staticClass:"practice"},[i("header",{staticClass:"section-hd"},[i("span",{staticClass:"section-title-l"}),t._v(" "),i("h2",{staticClass:"section-title"},[t._v("项目经历")]),t._v(" "),i("span",{staticClass:"section-title-r"})]),t._v(" "),i("div",{staticClass:"section-bd"},[i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("h3",{staticClass:"item-name"},[t._v("所有项目")]),t._v(" "),i("span",{staticClass:"item-time"},[t._v("2018.01 至 2021.05")]),t._v(" "),i("a",{staticClass:"btn item-more",attrs:{href:"",target:"_blank",title:"点击查看->西安绿豆芽信息科技有限公司百度百科"}},[t._v("项目")])]),t._v(" "),i("ol",{staticClass:"item-project"},[i("li",{staticClass:"project-1"},[i("h3",{staticClass:"project-name"},[i("a",{attrs:{href:"",target:"_blank",title:""}},[t._v("是题霸")])]),t._v(" "),i("ol",[i("li",{staticClass:"project-2"},[i("div",{staticClass:"item-bd"},[i("h3",{staticClass:"project-name-2"},[t._v("是题霸后端")]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【项目简介】")]),t._v(" "),i("p",{staticClass:"item-project-des"},[t._v("\n                        该项目主要分为学生端（学生答题、测试、讨论）、教师端（教师答疑、任务发布、成绩导出与班级管理）与管理端（用户管理、反馈管理）——三端合一的小程序。以Wechat为载体，并依托微信强大的社交与引流能力，以及它所提供的云开发为项目提供技术支撑。")])]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【工作职责】")]),t._v(" "),i("ul",{staticClass:"section-content"},[i("li",[t._v("负责项目框架搭建以及疑难问题解决，为项目成员提供开发思路")]),t._v(" "),i("li",[t._v("主导整个项目正常开发流程，研究了高可用、高并发服务器的架构设计（keepalived+nginx+haproxy）")]),t._v(" "),i("li",[t._v("对常用数据进行缓存处理（Redis），并对[撮合引擎]系统进行了架构设计，采用Redis内存撮合、Rabbit MQ消息队列异步入库实现高性能撮合系统，从而实现撮合引擎弹性伸缩\n                        ")]),t._v(" "),i("li",[t._v("\n                          针对Redis可能出现脏读的问题可以采用消息队列处理，消除多线程同一时间操作同一Redis数据的脏读问题；或可以通过Redis锁解决高并发的脏读问题（不推荐，可能会造成无效等待）\n                        ")])])])])]),t._v(" "),i("li",{staticClass:"project-2"},[i("div",{staticClass:"item-bd"},[i("h3",{staticClass:"project-name-2"},[t._v("是题霸前端")]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【项目简介】")]),t._v(" "),i("p",{staticClass:"item-project-des"},[t._v("该项目前端开发框架采用目前市面流行的Vue.js框架与Element UI\n                        2.0。K线、行情等数据全通过websocket进行数据传输，解决了大量数据通过http请求造成服务端压力过大的问题，也保证了数据的时效性；K线图表采用国外TradingView工具，高效且专业的解决企业在数据图表绘制的问题；在应用数据存储上采用vuex实现多页面数据共享。")])]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【工作职责】")]),t._v(" "),i("ul",{staticClass:"section-content"},[i("li",[t._v("负责项目框架搭建以及疑难问题解决，为项目成员提供开发思路")]),t._v(" "),i("li",[t._v("主导整个项目正常开发流程，研究K线渲染组件TradingView的使用与原理")])])])])])])]),t._v(" "),i("li",{staticClass:"project-1"},[i("h3",{staticClass:"project-name"},[i("a",{attrs:{href:"http://www.bitchang.com",target:"_blank",title:"点击进入->数字货币钱包"}},[t._v("数字货币钱包")])]),t._v(" "),i("ol",[i("li",{staticClass:"project-2"},[i("div",{staticClass:"item-bd"},[i("h3",{staticClass:"project-name-2"},[t._v("厚学LNPU")]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【项目简介】")]),t._v(" "),i("p",{staticClass:"item-project-des"},[t._v("\n                        该项目是一款服务校园的小程序，为辽宁石油化工大学学生提供二手物品交易平台、快递代取、交友社区等便利服务")])]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【工作职责】")]),t._v(" "),i("ul",{staticClass:"section-content"},[i("li",[t._v("负责项目后端接口开发")]),t._v(" "),i("li",[t._v("提供API以及JSON RPC文档实现订单查询、积分兑现、充值等逻辑")])])])])])])]),t._v(" "),i("li",{staticClass:"project-1"},[i("h3",{staticClass:"project-name"},[i("a",{attrs:{href:"http://www.ledianyun.com/",target:"_blank",title:"点击进入->乐店云商城系统"}},[t._v("乐店云商城系统")])]),t._v(" "),i("ol",[i("li",{staticClass:"project-2"},[i("div",{staticClass:"item-bd"},[i("h3",{staticClass:"project-name-2"},[t._v("后台开发(PHP)")]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【项目简介】")]),t._v(" "),i("p",{staticClass:"item-project-des"},[i("a",{attrs:{href:"https://baike.baidu.com/item/%E4%B9%90%E5%BA%97%E4%BA%91",target:"_blank",title:"点击查看->乐店云百度百科"}},[t._v("乐店云")]),t._v("是一个专门为商户提供新零售智慧店铺解决方案的"),i("a",{attrs:{href:"https://www.ledianyun.com/",target:"_blank",title:"乐店云官网"}},[t._v("一站式小程序生成平台")]),t._v("。项目主要采用PHP+Phalcon+Mysql框架，包含分销、砍价、拼团等营销以及基础的商城功能。\n                      ")])]),t._v(" "),i("div",{staticClass:"div-item"},[i("h3",{staticClass:"project-des"},[t._v("【工作职责】")]),t._v(" "),i("ul",{staticClass:"section-content"},[i("li",[t._v("负责拼团功能开发，该功能主要涉及用户与用户共同下单逻辑，需要保证在库存无误的情况下，实现多用户订单的提交与交易的正常进行")]),t._v(" "),i("li",[t._v("负责官网的开发以及官网搜索引擎优化")])])])])])])])])])])])]),t._v(" "),i("div",{staticClass:"content-right"},[i("section",{staticClass:"skill"},[i("header",{staticClass:"section-hd"},[i("span",{staticClass:"section-title-l"}),t._v(" "),i("h2",{staticClass:"section-title"},[t._v("技能")]),t._v(" "),i("span",{staticClass:"section-title-r"})]),t._v(" "),i("div",{staticClass:"section-bd"},[i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("WEB后端开发")]),t._v(" "),i("a",{staticClass:"btn item-more"},[t._v("熟练掌握")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("后端应用Java、Python实际开发经验，掌握Java面向对象思想编程")]),t._v(" "),i("li",[t._v("熟练使用Spring Boot、SpringMVC等主流框架，熟悉Restful 风格API设计")]),t._v(" "),i("li",[t._v("熟练使用数据库操作框架Hibernate JPA，掌握SQL语句增删改查")]),t._v(" "),i("li",[t._v("熟练使用Websocket，并使用websocket进行服务端与客户端实时数据传输")]),t._v(" "),i("li",[t._v("熟练使用Jwt等用户鉴权产品")]),t._v(" "),i("li",[t._v("熟悉API开发基本流程，熟悉Restful 风格API设计")]),t._v(" "),i("li",[t._v("了解Spring cloud，正学习Spring cloud在企业大型应用中的应用，以及大型应用的微服务化及服务治理知识学习")])])])]),t._v(" "),i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("数据库")]),t._v(" "),i("a",{staticClass:"btn item-more"},[t._v("熟练掌握")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("熟悉关系型数据库技术，熟练使用关系型数据库Mysql、Oracle")]),t._v(" "),i("li",[t._v("熟悉非关系型数据库技术，熟练使用非关系型数据库Nosql：Redis")]),t._v(" "),i("li",[t._v("熟练使用Hibernate JPA，了解 MyBatis、JDBC等数据库操作框架使用")])])])]),t._v(" "),i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("服务器|架构")]),t._v(" "),i("a",{staticClass:"btn item-more"},[t._v("熟练掌握")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("熟练掌握Nginx、Tomcat、Apache服务器使用")]),t._v(" "),i("li",[t._v("熟练掌握常用软件（MySQL、Redis等）在服务器的搭建与使用")]),t._v(" "),i("li",[t._v("熟练使用Centos(Linux)云服务器并掌握线上环境和应用的部署")]),t._v(" "),i("li",[t._v("了解Docker使用及Docker应用部署")]),t._v(" "),i("li",[t._v("熟练掌握Git、Github、gradle、maven等工具使用")])])])]),t._v(" "),i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("WEB前端开发")]),t._v(" "),i("a",{staticClass:"btn item-more"},[t._v("掌握")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("有一年以上Android原生开发经验，熟练掌握使用Java SE开发Android原生APP")]),t._v(" "),i("li",[t._v("熟悉前端技术HTML、VUE、JS、CSS、Flutter，有实际项目中的前端开发、维护经验")]),t._v(" "),i("li",[t._v("掌握网页重构所需的CSS、SCSS")]),t._v(" "),i("li",[t._v("掌握前端流行框架Vue")]),t._v(" "),i("li",[t._v("熟知JS基本语法与知识，熟悉JS语法")])])])]),t._v(" "),i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("Python")]),t._v(" "),i("a",{staticClass:"btn item-more"},[t._v("熟悉")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("熟悉Python基本语法与标准库")]),t._v(" "),i("li",[t._v("用Python开发过小型项目服务")])])])]),t._v(" "),i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("独立开发")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("有独自主导并负责的项目开发经验，在项目中可进行独立开发")]),t._v(" "),i("li",[t._v("有良好的编码习惯与编程思想，学习能力强，可快速学习新技术，对新技术、好技术热爱")]),t._v(" "),i("li",[t._v("工作稳定性高，对公司负责，有一定的项目管理经验，有创业经历")])])])])])]),t._v(" "),i("section",{staticClass:"prize"},[i("header",{staticClass:"section-hd"},[i("span",{staticClass:"section-title-l"}),t._v(" "),i("h2",{staticClass:"section-title"},[t._v("奖项/证书")]),t._v(" "),i("span",{staticClass:"section-title-r"})]),t._v(" "),i("div",{staticClass:"section-bd"},[i("div",{staticClass:"item"},[i("header",{staticClass:"item-hd"},[i("span",{staticClass:"item-time"},[t._v("获奖经历")])]),t._v(" "),i("div",{staticClass:"item-bd"},[i("ul",{staticClass:"section-content"},[i("li",[t._v("2021年10月获得辽宁省移动应用开发大赛"),i("span",[t._v("三等奖")])]),t._v(" "),i("li",[t._v("2021年8月获得“竞技世界杯”中国大学生计算机博弈大赛五子棋项目"),i("span",[t._v("全国季军")])]),t._v(" "),i("li",[t._v("2021年8月获得“竞技世界杯”中国大学生计算机博弈大赛爱恩斯坦棋项目"),i("span",[t._v("全国二等奖")])]),t._v(" "),i("li",[t._v("2021年7月通过计算机技术与软件专业技术资格（水平）中级考试获得"),i("span",[t._v("软件设计师中级职称")])]),t._v(" "),i("li",[t._v("2021年5月获得辽宁省计算机设计大赛"),i("span",[t._v("三等奖")])]),t._v(" "),i("li",[t._v("2020年9月获得全国移动互联创新大赛辽宁赛区"),i("span",[t._v("银奖")])]),t._v(" "),i("li",[t._v("2020年8月获得中国高校计算机大赛微信小程序应用开发赛东北赛区"),i("span",[t._v("二等奖")])]),t._v(" "),i("li",[t._v("2020年7月获得辽宁省计算机系统与程序设计大赛"),i("span",[t._v("三等奖")])])])])])])]),t._v(" "),i("section",{staticClass:"thanks"},[i("header",{staticClass:"section-hd"},[i("span",{staticClass:"section-title-l"}),t._v(" "),i("h2",{staticClass:"section-title"},[t._v("致谢")]),t._v(" "),i("span",{staticClass:"section-title-r"})]),t._v(" "),i("div",{staticClass:"section-bd"},[i("div",{staticClass:"item"},[i("h2",{staticStyle:{"font-weight":"bold","line-height":"24px","margin-top":"10px"}},[t._v("\n            感谢您在百忙之中阅读这份履历，诚挚的期望能得到面试的机会，希望有荣幸能为公司效力！再次致以我最诚挚的谢意！！")])])])])])])}]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"github-footer"},[s("a",{staticClass:"footer-link",attrs:{href:"https://github.com/GuoyiZhang/078-Vue-resumeVue"}},[this._v("项目库托管在Github上，欢迎star~")])])}]},w={name:"Resume",components:{"v-head":v,"v-swiper":r,"v-top-menu":m,"v-base-info":p,"v-content":i("VU/8")(f,b,!1,function(t){i("LH8S")},"data-v-5ad96e5f",null).exports,"v-foot":i("VU/8")({name:"foot",data:function(){return{}},computed:{},mounted:function(){}},g,!1,null,null,null).exports},data:function(){return{msg:"Welcome to Your Vue.js App"}}},x={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("v-top-menu"),this._v(" "),s("v-swiper"),this._v(" "),s("main",{staticClass:"content"},[s("v-base-info"),this._v(" "),s("v-content")],1),this._v(" "),s("v-foot")],1)},staticRenderFns:[]},S=i("VU/8")(w,x,!1,null,null,null).exports;a.default.use(n.a);var j=new n.a({mode:"history",routes:[{path:"/",name:"我的简历",component:S},{path:"/resume",name:"我的简历",component:S}]}),y=(i("DL/1"),i("zL8q")),q=i.n(y);i("tvR6");a.default.use(q.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:j,components:{App:l},template:"<App/>"})},nv1S:function(t,s){},saOq:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e46af7ae58bc724d48c6.js.map
