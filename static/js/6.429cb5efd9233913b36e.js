webpackJsonp([6],{"BRq+":function(t,e){},EDLo:function(t,e){},QWdN:function(t,e){},"S+iK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("ao7l"),a=n("rppN"),i=n("Xxa5"),o=n.n(i),r=n("exGp"),c=n.n(r),l=n("Dd8w"),u=n.n(l),d=n("Zx67"),p=n.n(d),m=n("Zrlr"),v=n.n(m),f=n("wxAW"),h=n.n(f),g=n("zwoO"),b=n.n(g),_=n("Pf15"),C=n.n(_),w=n("dP9K"),S=n("mon9"),$="/reth",x=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v()(this,e),b()(this,(e.__proto__||p()(e)).call(this,$,t))}return C()(e,t),h()(e,[{key:"getFreeEth",value:function(t){var e=this.endpoint+"/"+S.a.GET_FREE_ETH+"?account="+t;return this.getApi(e)}}]),e}(w.a),k=n("WNEJ"),H=n("JX3P"),T={large:!1,name:"HeaderCarouselEle",data:function(){return{carouselHeight:"66.67vh",declaration:"",banners:[{name:"FirstBanner",img:"banner_670_0.png"},{name:"Second",img:"banner_670_1.png"}],ctrl:{ethLoading:!1,basLoading:!1}}},computed:u()({},Vuex.mapState({isCN:function(t){return"zh-CN"===t.lang}})),mounted:function(){},methods:{initCarousel:function(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;this.screenWith=t},resizeCarousel:function(){},getETHFreeHandle:function(){var t=this;return c()(o.a.mark(function e(){var n,s,a,i,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ctrl.ethLoading){e.next=5;break}return n=t.$t("g.ApplyingTestTokenOrEtn",{text:"ETH"}),t.$message(t.$basTip.error(n)),e.abrupt("return");case 5:if(!t.$store.getters.metaMaskDisabled){e.next=8;break}return t.$metamask(),e.abrupt("return");case 8:if(s=t.$store.getters.web3State,a=s.chainId,i=s.wallet,r="",3===parseInt(a)){e.next=16;break}return r=t.$t("g.OnlyRopstenGetBas"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 16:return c=t,e.prev=17,c.ctrl.ethLoading=!0,e.next=21,Object(k.c)(a,i);case 21:e.sent,(new x).getFreeEth(i).then(function(t){r=c.$t("g.GetTokenOrETHSuccess"),c.$message(c.$basTip.warn(r)),setTimeout(function(){c.ctrl.ethLoading=!1},3e3)}).catch(function(e){return c.ctrl.ethLoading=!1,e.code===H.G?(r=t.$t("code."+H.G),void t.$message(t.$basTip.error(r))):(r=t.$t("g.GetTokenOrETHFail"),void t.$message(t.$basTip.error(r)))}),e.next=44;break;case 26:e.prev=26,e.t0=e.catch(17),c.ctrl.ethLoading=!1,e.t1=e.t0,e.next=e.t1===H.F?32:e.t1===H.i?35:e.t1===H.k?38:e.t1===H.z?41:43;break;case 32:return r=t.$t("g.OnlyRopstenGetBas"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 35:return r=t.$t("g.EnoughEthBalanceCannotApply"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 38:return r=t.$t("g.SenderLackOfEthTip"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 41:return e.abrupt("return");case 43:return e.abrupt("break",44);case 44:case"end":return e.stop()}},e,t,[[17,26]])}))()},getBASFree:function(){var t=this;return c()(o.a.mark(function e(){var n,s,a,i,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",!t.ctrl.basLoading){e.next=5;break}return n=t.$t("p.HomeGetFreeHandlingWarn"),t.$message(t.$basTip.warn(n)),e.abrupt("return");case 5:if(!t.$store.getters.metaMaskDisabled){e.next=8;break}return t.$metamask(),e.abrupt("return");case 8:if(s=t.$store.getters.web3State,a=s.chainId,i=s.wallet,r="",3===parseInt(a)){e.next=16;break}return r=t.$t("p.HomeGetFreeNetworksTips"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 16:return e.prev=16,e.next=19,Object(k.d)(a,i);case 19:e.sent,Object(k.e)(a,i).on("transactionHash",function(e){t.ctrl.basLoading=!0}).on("receipt",function(e){r=t.$t("g.GetBasTokenSuccess"),t.$message(t.$basTip.warn(r)),t.ctrl.basLoading=!1}).on("error",function(e,n){if(t.ctrl.basLoading=!1,e.code===H.G)return r=t.$t("code."+H.G),void t.$message(t.$basTip.error(r))}).catch(function(t){}),e.next=44;break;case 24:e.prev=24,e.t0=e.catch(16),e.t1=e.t0,e.next=e.t1===H.k?30:e.t1===H.F?33:e.t1===H.w?36:e.t1===H.E?39:e.t1===H.l?42:43;break;case 30:return r=t.$t("g.GetBasLackOfEth"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 33:return r=t.$t("g.OnlyRopstenGetBas"),t.$message(t.$basTip.error(r)),e.abrupt("return");case 36:return r=t.$t("code."+e.t0,{minbas:k.b+"BAS"}),t.$message(t.$basTip.error(r)),e.abrupt("return");case 39:return r=t.$t("code."+e.t0),t.$message(t.$basTip.error(r)),e.abrupt("return");case 42:case 43:return e.abrupt("break",44);case 44:case"end":return e.stop()}},e,t,[[16,24]])}))()}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-carousel",{attrs:{interval:1e4,height:t.carouselHeight,id:"HomeCarousel"}},t._l(t.banners,function(e,s){return n("el-carousel-item",{key:s},[n("div",{staticClass:"bas-carousel--inner"},[n("img",{staticClass:"header-carousel",attrs:{src:"/static/img/"+e.img,alt:e.name}}),t._v(" "),0===s?n("div",{staticClass:"bas-carsouel-float d-none d-md-block"},[n("div",{staticClass:"bas-carsouel-inner--container"},[n("div",{staticClass:"bas-carsouel-inner--block"},[n("h1",{staticClass:"text-center",staticStyle:{"font-size":"4.75rem"}},[t._v("\n                "+t._s(t.$t("p.HomeGetFreeTitle"))+"\n              ")]),t._v(" "),n("p",{staticStyle:{margin:".75rem auto","font-size":"1.2rem"}},[t._v("\n                "+t._s(t.$t("p.HomeGetFreeNetworksTips"))+"\n              ")]),t._v(" "),n("div",{staticClass:"bas-carsouel-inner--block"},[n("button",{directives:[{name:"loading",rawName:"v-loading.lock",value:t.ctrl.ethLoading,expression:"ctrl.ethLoading",modifiers:{lock:!0}}],staticClass:"carsouel-btn",attrs:{disabled:t.ctrl.ethLoading},on:{click:t.getETHFreeHandle}},[t._v(t._s(t.$t("p.HomeCarouselGetEth")))]),t._v(" "),n("button",{directives:[{name:"loading",rawName:"v-loading.lock",value:t.ctrl.basLoading,expression:"ctrl.basLoading",modifiers:{lock:!0}}],staticClass:"carsouel-btn",staticStyle:{"margin-left":"1.5rem"},attrs:{disabled:t.ctrl.basLoading},on:{click:t.getBASFree}},[t._v(t._s(t.$t("p.HomeCarouselGetBAS")))])])])])]):t._e(),t._v(" "),1===s&&t.isCN?n("div",{staticClass:"bas-carsouel-float d-none d-md-block"},[n("div",{staticClass:"bas-carsouel-inner--block"},[n("div",{staticClass:"slogan-inner-flex"},[n("div",{staticClass:"bas-slogan-block"},[n("span",{staticClass:"bas-slogan yellow-cn"},[t._v("\n                  区块\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan"},[t._v("\n                  存续\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan mr-1"},[t._v("\n                  历史\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan ml-1"},[t._v("\n                  科技\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan green-cn"},[t._v("\n                  链接\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan"},[t._v("\n                  未来\n                ")])])])])]):t._e(),t._v(" "),1!==s||t.isCN?t._e():n("div",{staticClass:"bas-carsouel-float d-none d-md-block"},[n("div",{staticClass:"bas-carsouel-inner--block"},[n("div",{staticClass:"slogan-inner-flex"},[n("div",{staticClass:"bas-slogan-block"},[n("span",{staticClass:"bas-slogan yellow-cn"},[t._v("\n                  Block\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan"},[t._v("\n                  Records\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan"},[t._v("\n                  History\n                ")])]),t._v(" "),n("div",{staticClass:"bas-slogan-block"},[n("span",{staticClass:"bas-slogan"},[t._v("\n                  Technology\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan green-cn"},[t._v("\n                  Links\n                ")]),t._v(" "),n("span",{staticClass:"bas-slogan"},[t._v("\n                  Future\n                ")])])])])])])])}),1),t._v(" "),n("div",{staticClass:"bas-declare-wrapper"},[n("h6",[t._v(t._s(t.$t("p.HomeDeclaration")))])])],1)},staticRenderFns:[]};var E=n("VU/8")(T,y,!1,function(t){n("nCgx"),n("yVzW")},null,null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container mb-5"},[n("h1",{staticClass:"section-title bas-pt-100"},[t._v(t._s(t.$t("p.HomeAboutSectionTitle")))]),t._v(" "),n("p",{staticClass:"about-desc text-center"},[t._v(t._s(t.$t("p.HomeAboutSectionDesc")))]),t._v(" "),n("p",{staticClass:"about-demo"},[t._v(t._s(t.demoCharacters))]),t._v(" "),n("p",{staticClass:"about-demo-emoji"},[t._v(" "+t._s(t.demoEmoji))])])])},staticRenderFns:[]};var L=n("VU/8")({name:"AboutBas",components:{},data:function(){return{pagination:{pagenumber:1,pagesize:18,total:0},latestes:[],captionTitle:"命名一切",description:"支持世界任意国家语言以及emoji",demoCharacters:"你好/hello/こんにちは/Γειάσου/Здравствулте/Alô/안녕하세요",demoEmoji:"😌/❤️/😂/❤️.👪...",subTitle:"标题",rightDesc:"一段文字描述，一段文字描述，一段文字描述，一段文字描述一段文字 描述，一段文字描述，一段文字描述，一段文字描述，一段文字描述， 一段文字描述一段文字描述，一段文字描述"}},computed:{},mounted:function(){}},F,!1,function(t){n("BRq+")},null,null).exports,B={name:"MileStoneLine",computed:u()({},Vuex.mapState({i18nSuffix:function(t){return t.lang.toLowerCase()}})),data:function(){return{}},mounted:function(){}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mile-stone-container"},[e("div",{staticClass:"milestaone-prefix",class:"left-"+this.i18nSuffix}),this._v(" "),e("div",{staticClass:"milestone-phase ms-panku"}),this._v(" "),e("div",{staticClass:"milestaone-suffix",class:"right-"+this.i18nSuffix})])},staticRenderFns:[]};var N=n("VU/8")(B,D,!1,function(t){n("ZuQ0")},null,null).exports,O=n("woOf"),A=n.n(O),z=n("0xDb"),I=n("1rPB"),W=n("xcTv"),j={name:"HomeFavoriteList",computed:{},data:function(){return{titleI18n:"HomeTop10MostPop",dataItems:[],pager:{pagenumber:1,pagesize:12,total:0},ctrl:{loading:!1},ruleState:{}}},methods:{gotoWhois:function(t){t&&this.$router.push({path:"/domain/detail/"+t})},gotoBuying:function(t){if(this.$store.getters.metaMaskDisabled)this.$metamask();else{var e=Object(I.i)();if(Object(z.s)(t.owner,e.wallet))this.$message(this.$basTip.error("当前域名已在您账户下,不需要购买."));else{var n=t.domaintext,s=t.sellprice;n&&void 0!==s&&this.$router.push({path:"/market/buying/"+n+"/"+s})}}}},mounted:function(){var t=this,e=this.$store.getters["web3/ruleState"];this.ruleState=A()({},e);var n=e.decimals||18;(new W.a).getFavoriteDomains({pagenumber:1,pagesize:12}).then(function(e){if(e.state){var s=e.domains.map(function(t){return t.expireDate=t.expiretime?Object(z.h)(t.expiretime,z.d):"",t.sellprice=t.price||t.price.length<8?Object(z.E)(t.price,n):t.price,t.shortAddress=Object(z.g)(t.owner),t.domaintext=Object(z.w)(t.name),t});t.dataItems=A()(s)}}).catch(function(t){})}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"favorate-top10-wrapper bas-gray-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("h1",{staticClass:"section-title"},[t._v("\n        "+t._s(t.$t("p."+t.titleI18n))+"\n      ")])]),t._v(" "),n("div",{staticClass:"row justify-content-center align-items-center"},[n("div",{staticClass:"col-12 pb-5"},[n("div",{staticClass:"row justify-content-between align-items-lg-baseline"},t._l(t.dataItems,function(e){return n("div",{key:e.hash,staticClass:"col-md-6 col-sm-6"},[n("div",{staticClass:"bas-region-item"},[n("div",{staticClass:"region-item--header"},[n("div",{staticClass:"block"},[n("h4",[t._v(t._s(e.domaintext))]),t._v(" "),n("p",{staticClass:"small"},[t._v(t._s(e.shortAddress))])]),t._v(" "),n("div",{staticClass:"block"}),t._v(" "),n("div",{staticClass:"inline-btn-group"},[n("span",{staticClass:"bas-unit-price year"},[t._v("\n                    "+t._s(e.sellprice)+"\n                  ")])])]),t._v(" "),n("div",{staticClass:"region-item--footer"},[n("div",{staticClass:"block-inline"},[n("p",{staticClass:"small"},[t._v("过期时间:"+t._s(e.expireDate))])]),t._v(" "),n("div",{staticClass:"block-inline"},[n("a",{staticClass:"bas-whois",on:{click:function(n){return t.gotoWhois(e.domaintext)}}},[t._v("\n                    Who is\n                  ")])])])])])}),0)])])])])},staticRenderFns:[]};var V=n("VU/8")(j,R,!1,function(t){n("ZN0m")},null,null).exports,G={name:"DecenterSection",computed:u()({atEndOfList:function(){return this.currentOffset<=-1*this.paginationFactor*(this.items.length-this.windowSize)},atHeadOfList:function(){return 0===this.currentOffset},dataItems:function(){var t=this.$store.state.lang.toLowerCase();return this.items.map(function(e){return e.suffix=t+".png",e})}},Vuex.mapState({i18nSuffix:function(t){return t.lang.toLowerCase()},isCN:function(t){return"zh-CN"===t.lang}})),data:function(){return{currentOffset:0,windowSize:2,paginationFactor:752.5,captionTitle:"完全去中心化",items:[{icon:"home_decenter_wf1",caption:"域名注册",text:"Bas chain可直接注册域名，以实时的记账形式消耗BAS数字货币，并有效避免了传统域名 注册的多层级操作以及时间长、费用高等问题",footBtn:"去注册",captionI18n:"HomeDecentSectionFL1SubTitle",texti18n:"HomeDecentSectionFL1Contents",footBtnI18n:"HomeDecentSectionFL1Btn",operType:"gotoApply",faCls:"fa fa-long-arrow-right"},{icon:"home_decenter_wf2",text:"bas使交易信息更透明化、公开化；域名所有权归秘钥所有者，不必担心被强制变更的风 险；bas更加智能可自动执行合约，无需值守，有效的避免中间商赚取差价的行为；命名 支持任何语言，无法抢注，采用区块链交易，像比特币一样安全",caption:"域名交易",operType:"gotoMarket",footBtn:"去交易",captionI18n:"HomeDecentSectionFL2SubTitle",texti18n:"HomeDecentSectionFL2Contents",footBtnI18n:"HomeDecentSectionFL2Btn",faCls:"fa fa-long-arrow-right"},{icon:"home_decenter_wf3",text:"bas域名信息变更速度更快，通过矿机打包成功即完成一次变更， 时长不超过20s",caption:"加入矿池",footBtn:"去申请",captionI18n:"HomeDecentSectionFL3SubTitle",texti18n:"HomeDecentSectionFL2Contents",footBtnI18n:"HomeDecentSectionFL3Btn",operType:"gotoSupperNode",faCls:"fa fa-long-arrow-right"}]}},mounted:function(){var t=this.$refs.DecenterWrapper.clientWidth;this.paginationFactor=t/2+22.5},methods:{moveCarousel:function(t,e){1!==t||this.atEndOfList?-1!==t||this.atHeadOfList||(this.currentOffset+=this.paginationFactor):this.currentOffset-=this.paginationFactor},gotoWhois:function(t){t&&(this.$store.getters.metaMaskDisabled?this.$metamask():this.$router.push({path:"/domain/detail/"+t}))},gotoDoSomething:function(t){switch(t){case"gotoApply":this.$router.push({path:"/apply"});break;case"gotoMarket":this.$router.push({path:"/market"});break;case"gotoSupperNode":this.$router.push({path:"/agent"})}}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"DecenterWrapper",staticClass:"container d-none d-md-block"},[n("h1",{staticClass:"section-title bas-pt-100"},[t._v(t._s(t.$t("p.HomeDecenterSectionTitle")))]),t._v(" "),n("el-row",{staticClass:"bas-double-wrapper",attrs:{gutter:24}},[n("div",{staticClass:"bas-double--nav"},[n("div",{staticClass:"bas-double--navl-icon",attrs:{disabled:""},on:{click:function(e){return t.moveCarousel(-1,e)}}},[n("img",{attrs:{src:"/static/icons/arrow_left.png"}})]),t._v(" "),n("div",{staticClass:"bas-double--navr-icon",on:{click:function(e){return t.moveCarousel(1,e)}}},[n("img",{attrs:{src:"/static/icons/arrow_right.png"}})])]),t._v(" "),n("div",{staticClass:"bas-double"},[n("div",{staticClass:"bas-double--overflow-container"},[n("div",{staticClass:"bas-double--cards",style:{transform:"translateX("+t.currentOffset+"px)"}},t._l(t.dataItems,function(e,s){return n("div",{key:s,staticClass:"col-6 bas-double--card"},[n("div",[n("img",{staticClass:"img-fluid",attrs:{src:"/static/icons/"+e.icon+"_"+e.suffix}})]),t._v(" "),n("div",{staticClass:"bas-double--card-body"},[n("h5",{staticClass:"inner-top"},[t._v(t._s(t.$t("p."+e.captionI18n)))]),t._v(" "),n("p",[t._v(t._s(t.$t("p."+e.texti18n)))])]),t._v(" "),n("div",{staticClass:"bas-double--card-footer"},[n("a",{staticClass:"bas-text-green",on:{click:function(n){return t.gotoDoSomething(e.operType)}}},[t._v("\n                  "+t._s(t.$t("p."+e.footBtnI18n))+" "),n("i",{staticClass:"fa fa-long-arrow-right"})])])])}),0)])])])],1)},staticRenderFns:[]};var U=n("VU/8")(G,P,!1,function(t){n("QWdN")},null,null).exports,M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-crit-container mt-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-4 col-sm-10"},[n("div",{staticClass:"crit-tipbox"},[n("ul",{staticClass:"home-crit-ul"},[n("li",{staticClass:"home-crit-li-red"},[t._v("\n              "+t._s(t.$t("p.HomeTraNodeTitle"))+"\n              "),n("p",{staticClass:"home-li-content"},[t._v("\n                "+t._s(t.$t("p.HomeTraNodeDesc"))+"\n              ")])])])]),t._v(" "),n("div",{staticClass:"crit-tipbox"},[n("ul",{staticClass:"home-crit-ul"},[n("li",{staticClass:"home-crit-li-green"},[t._v("\n              "+t._s(t.$t("p.HomeBasNodeTitle"))+"\n              "),n("p",{staticClass:"home-li-content"},[t._v("\n                "+t._s(t.$t("p.HomeBasNodeDesc"))+"\n              ")])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-8 col-sm-10"},[e("img",{staticClass:"img-fluid",attrs:{src:"/static/img/crit_bg.png"}})])}]};var J=n("VU/8")({name:"CritSection",data:function(){return{liOne:{title:"HomeTraNodeTitle",content:"HomeTraNodeDesc"},liTwo:{title:"HomeBasNodeTitle",content:"HomeBasNodeDesc"}}}},M,!1,function(t){n("w1ew")},null,null).exports,q=(n("mvHQ"),{name:"FutureSection",data:function(){return{captionTitle:"未来已来",dapps:[{name:"ticketAuthorize",title:"飞机/火车身份认证",icon:"tickets_icon.png",href:""},{name:"medicalAuthorize",title:"医疗就诊挂号",icon:"medical_icon.png",href:""},{name:"websiteAuthorize",title:"网站登录认证",icon:"web_icon.png",href:""},{name:"creditAuthorize",title:"征信身份认证",icon:"credit_icon.png",href:""},{name:"travelAuthorize",title:"酒店/会务认证",icon:"travel_icon.png",href:""},{name:"otherAuthorize",title:"其他任何认证场景",icon:"other_icon.png",href:""}]}},methods:{dappClick:function(t){}}}),Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bas-section"},[n("h1",{staticClass:"section-title"},[t._v(t._s(t.captionTitle))]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row text-center"},t._l(t.dapps,function(e,s){return n("div",{key:s,staticClass:"col-md-4 col-sm-6"},[n("div",{staticClass:"dapp-container",on:{click:function(n){return t.dappClick(e)}}},[n("img",{staticClass:"dapp-icon",attrs:{src:"/static/icons/"+e.icon,alt:e.title}}),t._v(" "),n("p",[t._v(t._s(e.title))])])])}),0)])])},staticRenderFns:[]};var Z=n("VU/8")(q,Q,!1,function(t){n("VmVt")},null,null).exports,K=n("mjc8"),X={name:"SeeNewsSection",computed:u()({},Vuex.mapState({isCN:function(t){return"zh-CN"===t.lang}})),created:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{captionTitle:"全新协议，新世界入口",colSize:12,productions:[{id:"basBrowser",nameI18n:"HomeProdExplorerName",faIcon:"fa-download",href:"",comments:"全新的浏览器，支持全新的httpb协议＋区块 链区块数据浏览",contentI18n:"HomeProdExplorerDesc",icon:"browser_icon.png"},{id:"basExtensions",nameI18n:"HomeProdExtensionName",faIcon:"fa-plug",href:"",comments:"浏览器插件支持区块链域名解析",contentI18n:"HomeProdExtensionDesc",icon:"exte_icon.png"},{id:"basWallet",nameI18n:"HomeProdWalletName",faIcon:"fa-external-link",href:"",comments:"浏览器插件支持区块链域名解析",contentI18n:"HomeProdWalletDesc",icon:"wallet_icon.png"}]}},mounted:function(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<1e3&&(this.colSize=24)},methods:{prodClick:function(t){switch(t){case 0:this.dlBrowser();break;case 1:this.dlExtensions()}},dlBrowser:function(){var t=Object(K.d)(K.c);window.open(t,"Browser for mac")},dlExtensions:function(){var t="Chrome Extension",e=Object(K.e)("firefox");"chrome"===BasRuntime.browser?(e=Object(K.e)("chrome"),window.open(e,t)):(t="Firefox Extension",e=Object(K.e)("firefox"),window.open(e,t))},handleResize:function(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;this.colSize=t<1e3?24:12}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container bas-section"},[n("h1",{staticClass:"section-title"},[t._v(t._s(t.$t("p.HomeSeeNewSectionTitle")))]),t._v(" "),n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{span:t.colSize}},[n("div",{staticClass:"bas-home--seenew--twobox"},[n("img",{attrs:{src:"/static/icons/httpb.png"}}),t._v(" "),n("p",[t._v("\n         "+t._s(t.$t("p.HomeSeeNewSectionProtocolDesc"))+"\n        ")])])]),t._v(" "),n("el-col",{attrs:{span:t.colSize}},[n("div",{staticClass:"bas-home--seenew--twobox"},[n("img",{attrs:{src:t.isCN?"/static/icons/ca_service_zh.png":"/static/icons/ca_service_en.png"}}),t._v(" "),n("p",[t._v("\n         "+t._s(t.$t("p.HomeSeeNewSectionCADesc"))+"\n        ")])])])],1),t._v(" "),n("div",{staticClass:"row justify-content-center align-items-center pt-5"},t._l(t.productions,function(e,s){return n("div",{key:s,staticClass:"col-lg-4 col-md-12",on:{click:function(e){return t.prodClick(s)}}},[n("div",{staticClass:"home-prod-rect",class:"prod-rect-bg-"+s},[n("div",{staticClass:"home-prod-rect--left"},[n("img",{staticClass:"home-prod-icon",attrs:{src:"/static/icons/"+e.icon}})]),t._v(" "),n("div",{staticClass:"home-prod-rect--right"},[n("p",{staticClass:"home-click"},[t._v("\n            "+t._s(t.$t("p."+e.nameI18n))+"\n            "),n("i",{class:"fa "+e.faIcon})]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("p."+e.contentI18n))+"\n          ")])])])])}),0)],1)},staticRenderFns:[]};var tt=n("VU/8")(X,Y,!1,function(t){n("Umqn")},null,null).exports,et={name:"AppSences",computed:u()({},Vuex.mapState({i18nSuffix:function(t){return t.lang.toLowerCase()}})),data:function(){return{rowSize:8,appSencesDesc:"BAS系统不仅可以获取IP地址映射、区块链地址这些基础功能，还可以让物联网设备间不依赖于中心网关 也能相互发现，同时\b\b能进行更安全的身份认证和加密通讯，免于信道劫持的风险； 帮助用户生成和管理包括互联网应用之内的众多账号，并免于泄露密码的风险； 帮助企业和机构管理用户身份，例如征信信息，BAS能使这些信息更加完整，难以伪造，方便获取。",appSences:[{icon:"tickets_icon.png",text:"飞机/火车身份认证",i18n:"p.HomeAppSenceSection1"},{icon:"medical_icon.png",text:"医疗就诊挂号",i18n:"p.HomeAppSenceSection2"},{icon:"web_icon.png",text:"网站登录认证",i18n:"p.HomeAppSenceSection3"},{icon:"credit_icon.png",text:"征信身份认证",i18n:"p.HomeAppSenceSection4"},{icon:"travel_icon.png",text:"酒店/会务认证",i18n:"p.HomeAppSenceSection5"},{icon:"other_icon.png",text:"其他任何认证场景",i18n:"p.HomeAppSenceSection6"}]}},props:{caption:String},mounted:function(){this.rowSize=document.body.clientWidth<=768?12:8}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",[n("h1",{staticClass:"section-title"},[t._v("\n      "+t._s(t.$t("p.HomeFeatureSectionTitle"))+"\n    ")])]),t._v(" "),n("el-row",{staticClass:"row justify-content-center align-items-center ",staticStyle:{"margin-bottom":"1.5rem"},attrs:{gutter:24}},[n("el-col",{attrs:{span:12}},[n("img",{staticClass:"img-fluid",attrs:{src:"/static/icons/bas_app_sences_"+t.i18nSuffix+".png"}})]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h4",[t._v("\n        "+t._s(t.$t("p.HomeFeatureSectionSubTitle"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-4 w-75",staticStyle:{"line-space":"1.25rem"}},[t._v(t._s(t.$t("p.HomeFeatureSectionDesc")))])])],1),t._v(" "),n("el-row",{staticClass:"row justify-content-start align-items-center",attrs:{gutter:24}},t._l(t.appSences,function(e,s){return n("el-col",{key:s,attrs:{lg:8,md:8,sm:12,xs:12}},[n("div",{staticClass:"bas-app-sence--box"},[n("img",{staticClass:"bas-app-sences--icon",attrs:{src:"/static/icons/"+e.icon}}),t._v(" "),n("p",{staticClass:"bas-app-sences--text"},[t._v("\n          "+t._s(t.$t(""+e.i18n))+"\n        ")])])])}),1)],1)},staticRenderFns:[]};var st=n("VU/8")(et,nt,!1,function(t){n("EDLo")},null,null).exports,at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-carousel",{attrs:{interval:2e4,type:"card",height:"200px"}},t._l(3,function(e){return n("el-carousel-item",{key:e,staticClass:"bas-el-carousel-item--wrapper"},[n("h3",{staticClass:"medium"},[t._v(t._s(e))])])}),1)],1)},staticRenderFns:[]};var it=n("VU/8")({name:"TripleEleCards"},at,!1,function(t){n("dUAk")},null,null).exports,ot=n("zmqR"),rt={name:"HomeIndex",components:{VLayout:s.a,PageContainer:a.a,HeaderCarousel:E,AboutSection:L,MileStoneLine:N,FavoriteSection:V,DecenterSection:U,CritSection:J,SeeNewsSection:tt,FutureSection:Z,AppSences:st,FootContainer:ot.a,TripleEleCards:it},data:function(){return{}}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{topbarTheme:"black"}},[e("page-container",{attrs:{keepTop:""}},[e("header-carousel",{attrs:{slot:"header"},slot:"header"}),this._v(" "),e("div",{staticStyle:{"margin-bottom":"2.5rem"},attrs:{slot:"body"},slot:"body"},[e("about-section"),this._v(" "),e("mile-stone-line"),this._v(" "),e("decenter-section"),this._v(" "),e("crit-section"),this._v(" "),e("see-news-section"),this._v(" "),e("app-sences")],1),this._v(" "),e("foot-container",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[]};var lt=n("VU/8")(rt,ct,!1,function(t){n("WJF/")},null,null);e.default=lt.exports},Umqn:function(t,e){},VmVt:function(t,e){},"WJF/":function(t,e){},ZN0m:function(t,e){},ZuQ0:function(t,e){},dUAk:function(t,e){},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},nCgx:function(t,e){},qkKv:function(t,e,n){var s=n("FeBl"),a=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},w1ew:function(t,e){},yVzW:function(t,e){}});
//# sourceMappingURL=6.429cb5efd9233913b36e.js.map