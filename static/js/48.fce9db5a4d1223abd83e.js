webpackJsonp([48],{"CG+F":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("Dd8w"),o=e.n(n),a=(e("mjc8"),["/static/img/appstore/eid/QR@2x.png","/static/img/appstore/eid/yiHome@2x.png","/static/img/appstore/eid/yiUser@2x.png"]),i={en:null,"zh-CN":[{introTitle:"",introInfo:""},{introTitle:"",introInfo:""}]},r={preIntro:"download EID for",show:!0,buttons:[{id:"ios",text:"Iphone",url:"https://testflight.apple.com/join/oGdiXolt"},{id:"android",text:"Android",url:"http://d.6boat.com/n1qw"},{id:"miniprogram",text:"MiniProgram",url:"https://mp.weixin.qq.com/a/~w1ku59kBg3hFxoPPTErrnQ~~"}]},l={preIntro:"Browser Extension for",show:!1,buttons:[{id:"chromecrx",text:"Chrome",url:""},{id:"firefox",text:"Firefox",url:""},{id:"edge",text:"Edge",url:""}]},d={preIntro:"BPassword Miner for",show:!1,buttons:[{id:"macOs",text:"Mac",url:"https://github.com/BASChain"},{id:"window",text:"Windows",url:""},{id:"linux",text:"Linux",url:"https://github.com/BASChain"}]},c={name:"EIDDetail",components:{WalletQrCode:e("thPt").a},data:function(){return{appid:1,appName:"易ID",appIntro:"Identity authorization Application based on the BAS blockchain",iconUrl:"/static/icons/app_eid_logo.png",intros:i,imgUrls:a,mobile:r,extensions:l,desktop:d,feats:[{title:"p.AppDetailDownTitle",styleType:"done",labels:["身份认证","授权","鉴权"]},{title:"p.AppDetailToDoTitle",styleType:"undo",labels:[]}]}},computed:o()({},Vuex.mapState(["lang"]),{localeIntros:function(){var t=this.lang;return this.intros[t]?this.intros[t]:this.intros["zh-CN"]}}),methods:{openDownloadTab:function(t,s){t&&window.open(t,s||"_blank")}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container pt-3 pb-3"},[e("div",{staticClass:"body-wrap agent-body-wrapper"},[e("div",{staticClass:"container obil-wrapper"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"bas-app-detail"},[e("div",{staticClass:"row bas-app-header"},[e("div",{staticClass:"bas-app-header--left"},[e("img",{attrs:{src:t.iconUrl}})]),t._v(" "),e("div",{staticClass:"bas-app-header--right"},[e("div",{staticClass:"bas-head-top"},[e("div",{staticClass:"bas-head-top--left"},[e("h1",[t._v(t._s(t.appName))]),t._v(" "),e("div",{staticClass:"bas-min-p"},[t._v("\n                    "+t._s(t.$t(t.appIntro))+"\n                  ")])]),t._v(" "),e("div",{staticClass:"bas-head-top--right"},[t.mobile.show?e("div",{staticClass:"bas-download-button",attrs:{styble:"background-position:bottom right;"}},[t._v("\n                    "+t._s(t.mobile.preIntro)+"\n                    "),t._l(t.mobile.buttons,function(s){return t.mobile.buttons&&t.mobile.buttons.length>0?e("div",{key:s.hash},[e("el-popover",{attrs:{placement:"bottom",width:"150",trigger:"click"}},[Boolean(s.url)?e("div",{staticClass:"bas-qr-con"},[e("WalletQrCode",{attrs:{width:"120",id:"ethbal",tipPlacement:"left",content:s.url}})],1):t._e(),t._v(" "),Boolean(s.url)?t._e():e("div",[t._v("Coming soon.")]),t._v(" "),e("button",{staticClass:"bas-download-button--item",attrs:{slot:"reference"},slot:"reference"},[t._v("\n                          "+t._s(s.text)+"\n                        ")])])],1):t._e()})],2):t._e(),t._v(" "),t.desktop.show?e("div",{staticClass:"bas-download-button--serve"},[t._v("\n                    "+t._s(t.desktop.preIntro)+"\n                    "),t._l(t.desktop.buttons,function(s){return e("button",{key:s.hash,staticClass:"bas-download-button--blue",class:s.url?"":"bas-download-button--disabled",on:{click:function(e){return t.openDownloadTab(s.url,s.text)}}},[t._v("\n                      "+t._s(s.text)+"\n                    ")])})],2):t._e(),t._v(" "),t.extensions.show?e("div",{staticClass:"bas-download-button--serve"},[t._v("\n                    "+t._s(t.extensions.preIntro)+"\n                    "),t._l(t.extensions.buttons,function(s){return e("button",{key:s.hash,staticClass:"bas-download-button--blue",class:s.url?"":"bas-download-button--disabled",on:{click:function(e){return t.openDownloadTab(s.url,s.text)}}},[t._v("\n                      "+t._s(s.text)+"\n                    ")])})],2):t._e()])]),t._v(" "),e("div",{staticClass:"bas-head-line"}),t._v(" "),t._l(t.feats,function(s){return e("div",{key:s.hash,staticClass:"bas-head-fun"},[t._v("\n                "+t._s(t.$t(s.title))+"\n                "),t._l(s.labels,function(n){return e("div",{key:n.hash,class:"done"===s.styleType?"bas-done":""},[e("span",{staticClass:"feat-label",staticStyle:{"margin-left":"0.5rem","font-size":"0.95rem"}},[t._v("\n                    "+t._s(t.$t(n))+"\n                  ")])])})],2)})],2)]),t._v(" "),e("div",{staticClass:"row bas-app-img"},t._l(t.imgUrls,function(t){return e("img",{key:t.hash,attrs:{src:t}})}),0),t._v(" "),t._l(t.localeIntros,function(s){return e("div",{key:s.hash,staticClass:"row bas-app-intro"},[e("div",{staticClass:"section-intro"},[Boolean(s.introTitle)?e("h1",[t._v("\n                "+t._s(s.introTitle)+"\n              ")]):t._e()]),t._v(" "),e("p",[t._v(t._s(s.introInfo))])])})],2)])])])])},staticRenderFns:[]};var u=e("VU/8")(c,p,!1,function(t){e("O43a")},"data-v-4b200450",null);s.default=u.exports},O43a:function(t,s){}});
//# sourceMappingURL=48.fce9db5a4d1223abd83e.js.map