webpackJsonp([29],{"fkZ+":function(t,e){},"lAL+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"WalletDomainIncome",data:function(){return{activeTab:"all",items:[],pageSize:5,tableAll:{currentPage:1},tableIntrans:{currentPage:2},tablePurchase:{currentPage:3}}},computed:{getAllItems:function(){return this.items.filter(function(t,e){return e<=5})},getIntransItems:function(){return this.items.filter(function(t,e){return"buy"==t.state&&e<=5})},getPurchaseItems:function(){return this.items.filter(function(t,e){return"buy"!=t.state&&e<=5})}},methods:{handleTabClick:function(t,e){}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var i=n("VU/8")(r,u,!1,function(t){n("fkZ+")},null,null);e.default=i.exports}});
//# sourceMappingURL=29.bf164d202d720b70615f.js.map