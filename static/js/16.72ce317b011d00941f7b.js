webpackJsonp([16],{PMwV:function(t,n){},YERd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("ao7l"),i=e("rppN"),a=e("zmqR"),o={name:"AgentIndex",data:function(){return{header:{title:"超级节点/域名代理",titleI18n:"AgentHeaderTitle"},sdk:{cost:"XXX"}}},components:{VLayout:s.a,PageContainer:i.a,FootContainer:a.a},methods:{gotoAnchor:function(t){void 0!==t&&document.querySelector("#"+t).scrollIntoView(!0)}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",[e("page-container",[e("div",{staticClass:"agent-header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"super-node-header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"agent-header--inner"},[e("h1",[t._v(t._s(t.$t("p.SuperAgent")))])])])]),t._v(" "),e("div",{staticClass:"agent-header-bottom--wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center align-items-center"},[e("div",{staticClass:"col-4 inner-link"},[e("a",{staticClass:"super-header-link",attrs:{href:"#superObligation"},on:{click:function(n){return t.gotoAnchor("obliSection")}}},[e("img",{attrs:{src:"/static/icons/agent_obligation.png"}}),t._v(" "),e("span",[t._v(t._s(t.$t("p.SuperNodeRAndOAnchorTitle")))])])]),t._v(" "),e("div",{staticClass:"col-4 inner-link"},[e("a",{staticClass:"super-header-link",attrs:{href:"#superObligation"},on:{click:function(n){return t.gotoAnchor("domainServiceSection")}}},[e("img",{attrs:{src:"/static/icons/join_agent.png"}}),t._v(" "),e("span",[t._v("\n                 "+t._s(t.$t("p.SuperNodeDoaminServiceTitle"))+"\n               ")])])]),t._v(" "),e("div",{staticClass:"col-4 inner-link"},[e("a",{staticClass:"super-header-link",attrs:{href:"#superObligation"},on:{click:function(n){return t.gotoAnchor("joinAgent")}}},[e("img",{attrs:{src:"/static/icons/domain_sev_icon.png"}}),t._v(" "),e("span",[t._v("\n                 "+t._s(t.$t("p.SuperNodeJoinAgentTitle"))+"\n               ")])])])])])])]),t._v(" "),e("div",{staticClass:"agent-body-wrapper",attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"container obil-wrapper"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-sm-10 inner-container"},[e("div",{staticClass:"obil-left",attrs:{id:"obliSection"}},[e("h2",[t._v("\n                "+t._s(t.$t("p.SuperNodeRAndOAnchorTitle"))+"\n              ")]),t._v(" "),e("h4",[t._v("\n                "+t._s(t.$t("p.SuperNodeRAndOSubTitle1"))+"\n              ")]),t._v(" "),e("p",[t._v("\n               "+t._s(t.$t("p.SuperNodeRAndOSubContents1"))+"\n              ")]),t._v(" "),e("h4",[t._v("\n                "+t._s(t.$t("p.SuperNodeRAndOSubTitle2"))+"\n              ")]),t._v(" "),e("p",[t._v("\n               "+t._s(t.$t("p.SuperNodeRAndOSubContents2"))+"\n              ")])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-10"},[e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:"/static/icons/supnodes_img.png",alt:""}})])])]),t._v(" "),e("div",{staticClass:"row justify-content-start align-items-center"},[e("div",{staticClass:"col-md-6 col-sm-12 d-block inner-container",attrs:{id:"domainServiceSection"}},[e("div",[e("h2",[t._v("\n               "+t._s(t.$t("p.SuperNodeDoaminServiceTitle"))+"\n             ")])]),t._v(" "),e("div",[e("img",{attrs:{src:"/static/img/d_serv_img.png",alt:"domain service"}})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-10"},[e("div",{staticClass:"inner-container"},[e("h4",[t._v("\n                "+t._s(t.$t("p.SuperNodeDSRootSubTitle"))+"\n              ")]),t._v(" "),e("p",[t._v("\n                "+t._s(t.$t("p.SuperNodeDSRootSubContents"))+"\n              ")]),t._v(" "),e("h4",[t._v("\n                 "+t._s(t.$t("p.SuperNodeDSCommRootSubTitle"))+"\n              ")]),t._v(" "),e("p",[t._v("\n                "+t._s(t.$t("p.SuperNodeDSCommRootSubContents"))+"\n              ")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 inner-container"},[e("h2",[t._v(t._s(t.$t("p.SuperNodeJoinAgentTitle")))])])]),t._v(" "),e("div",{staticClass:"join-agent-wrapper"},[e("div",{staticClass:"join-agent-container"},[e("div",{staticClass:"join-inner-left"},[e("div",{staticClass:"d-block"},[e("h2",[t._v("\n                 "+t._s(t.$t("p.SuperNodeAgentDomainTitle"))+"\n               ")]),t._v(" "),e("p",[t._v("\n                 "+t._s(t.$t("p.SuperNodeAgentDomainContents"))+"\n               ")])])])]),t._v(" "),e("div",{staticClass:"join-float-img"},[e("img",{attrs:{src:"/static/img/agency_img.png"}})])]),t._v(" "),e("div",{staticClass:"row justify-content-center align-items-center pt-4 pb-4"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"sdk-inner-box",attrs:{id:"joinAgent"}},[e("div",[e("h2",[t._v("\n                 "+t._s(t.$t("p.SuperNodeSDKTitle"))+"\n               ")]),t._v(" "),e("p",[t._v("\n                 "+t._s(t.$t("p.SuperNodeSDKContentsPrefix"))+"\n                 "),e("span",{staticClass:"bas-number"},[t._v("\n                   "+t._s(t.sdk.cost)+"\n                 ")]),t._v("\n                 "+t._s(t.$t("p.SuperNodeSDKContentsSuffix"))+"\n               ")])])])])])])]),t._v(" "),e("foot-container",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("PMwV"),e("jGQW")},null,null);n.default=c.exports},jGQW:function(t,n){}});
//# sourceMappingURL=16.72ce317b011d00941f7b.js.map