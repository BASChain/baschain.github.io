webpackJsonp([23],{"E5+r":function(t,a){},Ljmg:function(t,a){},iapr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),i=e.n(s),r=e("exGp"),l=e.n(r),n=e("Dd8w"),c=e.n(n),o=(e("LF9K"),e("0xDb")),m=(e("A77I"),e("JX3P")),u=e("Xyu6"),p=e("82Js"),d=e("c2YU"),b={name:"MailInternalRegistIndex",components:{CircleLoading:e("7Hl/").a},computed:c()({showMailtext:function(){return"@"+this.domaintext}},Vuex.mapState({unitBas:function(t){return Object(o.C)(t.dapp.mailRegGas||2)},maxMailRegYears:function(t){return t.dapp.maxMailRegYears}})),data:function(){return{years:1,domaintext:"",hash:"",owner:"",mailName:"",mailAlias:"",mailActived:!1,inputctrl:{message:""},ctrl:{loading:!1,timeoutId:null}}},methods:{initData:function(t,a,e){this.domaintext=t,this.hash=a,this.owner=e},selectYearsHandle:function(t){this.years=t<=0||t>this.maxMailRegYears?this.maxMailRegYears:t},submitMailName:function(){var t=this;return l()(i.a.mark(function a(){var e,s,r,l,n,c,o,u,b,v,g;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.inputctrl.message){a.next=3;break}return t.$message(t.$basTip.error(t.inputctrl.message)),a.abrupt("return");case 3:if(!t.$store.getters.metaMaskDisabled){a.next=6;break}return t.$metamask(),a.abrupt("return");case 6:if(e=t.$store.getters.web3State,s=e.chainId,r=e.wallet,l=t.mailDomainText,n=t.hash,c=t.mailName,o=t.mailAlias,u="",""!==c&&c.trim().length&&n){a.next=18;break}return u=t.$t("code.888888",{text:t.$t("l.ApplyMailNameLabel")}),t.$message(t.$basTip.error(u)),a.abrupt("return");case 18:if(!Object(d.a)(c)){a.next=22;break}return b=t.$t("code."+m.t,{mailname:c}),t.$message(t.$basTip.error(b)),a.abrupt("return");case 22:return v=t.years,a.prev=23,t.ctrl.loading=!0,a.next=27,Object(p.l)(n,c,v,s,r);case 27:g=a.sent,t.ctrl.loading=!1,g.mailalias=o,g.mailhash,t.$router.push({path:"/mail/registing/"+l+"/"+v+"/"+c,name:"mail.registing",params:{domaintext:l,years:v,mailname:c,commitData:g}}),a.next=63;break;case 34:a.prev=34,a.t0=a.catch(23),t.ctrl.loading=!1,a.t1=a.t0,a.next=a.t1===m.F?40:a.t1===m.l?40:a.t1===m.q?43:a.t1===m.u?46:a.t1===m.z?49:a.t1===m.n?49:a.t1===m.e?49:a.t1===m.v?49:a.t1===m.z?49:51;break;case 40:return u=t.$t("code."+a.t0),t.$message(t.$basTip.error(u)),a.abrupt("return");case 43:return u=t.$t("code."+a.t0,{mailname:c}),t.$message(t.$basTip.error(u)),a.abrupt("return");case 46:return u=t.$t("code."+a.t0,{domaintext:l}),t.$message(t.$basTip.error(u)),a.abrupt("return");case 49:return a.abrupt("return");case 51:return a.abrupt("break",52);case 52:if(a.t0.code!==m.G){a.next=58;break}return u=t.$t("code."+a.t0),t.$message(t.$basTip.error(u)),a.abrupt("return");case 58:if(!a.t0.message.includes(m.y)){a.next=62;break}return u=t.$t("code.-32603"),t.$message(t.$basTip.error(u)),a.abrupt("return");case 62:case 63:case"end":return a.stop()}},a,t,[[23,34]])}))()}},mounted:function(){var t=this.$route.params.domaintext,a=this.$route.query.hash,e=this.$route.query.owner;this.initData(t,a,e),this.mailActived=this.$route.query.mailActived},watch:{mailName:function(t,a){var e=this,s=this.$store.getters.web3State,r=s.chainId;s.wallet,this.owner;if(""!==t&&t!==a){this.inputctrl.message="",this.ctrl.timeoutId&&clearTimeout(this.ctrl.timeoutId);var n=this,c=t+"@"+n.domaintext;this.ctrl.timeoutId=setTimeout(l()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.b)(c,r);case 3:(a=t.sent).state?a.mail.abandoned?n.inputctrl.message=n.$t("code."+m.p,{text:c}):n.inputctrl.message=n.$t("code."+m.q,{text:c}):n.inputctrl.message="",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n.inputctrl.message="";case 12:case"end":return t.stop()}},t,e,[[0,8]])})),1500)}else this.inputctrl.message=""}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bmail-regist-wrapper"},[e("div",{staticClass:"container inner-center-container"},[e("div",{staticClass:"row justify-content-center pt-5 pb-5"},[e("div",{staticClass:"bmail-box-auto bmail-content-card"},[t._m(0),t._v(" "),e("div",{staticClass:"header-title"},[e("h5",{staticClass:"bmail-regist-title"},[t._v("\n             "+t._s(t.$t("l.ApplyMailNameLabel"))+"\n            ")])]),t._v(" "),e("div",{staticClass:"bmail-regist-form-wrapper"},[e("el-form",{staticClass:"bmail-regist-form",attrs:{"label-position":"top","label-width":"120px"}},[e("el-form-item",{staticClass:"w-100",class:Boolean(t.inputctrl.message)||Boolean(t.mailName)?"bmail-account-min-bottom":"",attrs:{"show-message":"false"}},[e("div",{staticClass:"bmail-name-flex"},[e("el-input",{staticClass:"bmail-account",attrs:{placeholder:t.$t("p.MailRegistInputPlaceholder"),type:"text"},model:{value:t.mailName,callback:function(a){t.mailName=a},expression:"mailName"}},[e("div",{staticClass:"bmail-service-suffix",attrs:{slot:"suffix"},slot:"suffix"},[t._v("\n                      "+t._s(t.showMailtext)+"\n                    ")])])],1)]),t._v(" "),Boolean(t.inputctrl.message)||Boolean(t.mailName)?e("div",{staticClass:"bmailname-wrapper",class:Boolean(t.inputctrl.message)?"bas-warn-box":"bas-grass-box"},[e("div",[t._v("\n                  "+t._s(t.inputctrl.message?t.inputctrl.message:t.$t("p.MailRegistNameWarnTip"))+"\n                ")])]):t._e(),t._v(" "),e("el-form-item",[e("label",{staticClass:"bmail-form-label"},[t._v("\n                  "+t._s(t.$t("l.MailAlias"))+"\n                ")]),t._v(" "),e("el-input",{staticClass:"bmail-alias",attrs:{placeholder:t.$t("p.MailRegistAliasPlaceholder")},model:{value:t.mailAlias,callback:function(a){t.mailAlias=a},expression:"mailAlias"}})],1),t._v(" "),e("div",{staticClass:"purchase-label-wrapper"},[e("div",{staticClass:"bmail-form-label"},[t._v(t._s(t.$t("l.PurchaseYears")))])]),t._v(" "),e("div",{staticClass:"years-select-container"},t._l(t.maxMailRegYears,function(a){return e("div",{key:a,staticClass:"bmail-year-selector"},[e("div",{staticClass:"selector-wrapper"},[e("div",{staticClass:"year-inner-box",class:a==t.years?"year-active":"",on:{click:function(e){return t.selectYearsHandle(a)}}},[a==t.years?e("div",[e("div",{staticClass:"year-active-icon"})]):t._e(),t._v(" "),e("div",{staticClass:"bas-total"},[t._v("\n                          "+t._s(a*parseFloat(t.unitBas))+"\n                        ")]),t._v(" "),e("div",{staticClass:"mail-years"},[e("span",[t._v(t._s(a))]),t._v(" "),e("span",[t._v(t._s(1===a?t.$t("l.Year"):t.$t("l.Years")))])])])])])}),0)],1)],1),t._v(" "),e("div",{staticClass:"bmail-regist-btns"},[e("el-button",{staticClass:"bas-btn-primary w-100",attrs:{type:"primary"},on:{click:t.submitMailName}},[t._v("\n              "+t._s(t.$t("l.RegistBtn"))+"\n            ")])],1)])])]),t._v(" "),e("el-dialog",{staticClass:"bas-dialog-nobody",attrs:{width:"320px","close-on-click-modal":!1,"show-close":!1,visible:t.ctrl.loading,top:"35vh"},on:{"update:visible":function(a){return t.$set(t.ctrl,"loading",a)}}},[e("div",{staticClass:"bas-wrapper--valid",attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"logo-container"},[e("CircleLoading")],1),t._v(" "),e("div",{staticClass:"bas-dialog-content"},[e("span",{staticClass:"tip-prefix"},[t._v("\n          "+t._s(t.$t("g.ValidateOnBlockChain"))+"\n        ")]),t._v(" "),e("span",{staticClass:"tip-green"},[t._v("\n           "+t._s(t.mailName)+t._s(t.showMailtext)+"\n        ")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header-logo"},[a("img",{staticClass:"img-fluid",attrs:{src:"/static/icons/logo_header_blk.png"}})])}]};var g=e("VU/8")(b,v,!1,function(t){e("Ljmg"),e("E5+r")},null,null);a.default=g.exports}});
//# sourceMappingURL=23.a31566c8d54c11b557fe.js.map