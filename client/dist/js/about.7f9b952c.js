(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1cd1":function(t,e,r){"use strict";var s=r("e283"),o=r.n(s);o.a},"2c0d":function(t,e,r){"use strict";var s=r("96fc"),o=r.n(s);o.a},4609:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("b-row",[r("b-col",[r("h3",[t._v(t._s(t.$t("home.description")))]),r("div",[t._v("\n\t\t\t\t\t"+t._s(t.$t("home.description_content"))+"\n\t\t\t\t")])])],1),r("b-row",[r("b-col",[r("h3",[t._v(t._s(t.$t("home.usage")))]),r("div",[t._v("\n\t\t\t\t\t"+t._s(t.$t("home.usage_content"))+"\n\t\t\t\t")])])],1),r("b-row",[r("b-col",[r("h3",[t._v(t._s(t.$t("home.lot_method")))]),r("div",[t._v("\n\t\t\t\t\t"+t._s(t.$t("home.lot_method_content"))+"\n\t\t\t\t")])])],1),r("b-row",{attrs:{id:"buy_lot"}},[r("b-col",[r("router-link",{staticClass:"btn btn-success",attrs:{to:"/lot"}},[t._v(t._s(t.$t("home.buy")))])],1)],1)],1)],1)},o=[],n={},i=n,a=(r("1cd1"),r("2877")),d=Object(a["a"])(i,s,o,!1,null,null,null);d.options.__file="index.vue";e["default"]=d.exports},"7a13":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loaded?r("b-container",[r("b-row",{attrs:{id:"addr"}},[r("b-col",[r("p",[t._v(t._s(t.$t("result.description")))]),r("div",[t.result.addr1?r("div",[t._v(t._s(t.$t("result.1st"))),r("br"),t._v(" "+t._s(t.result.addr1))]):t._e(),t.result.addr2?r("div",[t._v(t._s(t.$t("result.2nd"))),r("br"),t._v(" "+t._s(t.result.addr2))]):t._e(),t.result.addr3?r("div",[t._v(t._s(t.$t("result.3rd"))),r("br"),t._v(" "+t._s(t.result.addr3))]):t._e(),t.result.addr4?r("div",[t._v(t._s(t.$t("result.4th"))),r("br"),t._v(" "+t._s(t.result.addr4))]):t._e(),t.result.addr5?r("div",[t._v(t._s(t.$t("result.5th"))),r("br"),t._v(" "+t._s(t.result.addr5))]):t._e()])])],1),r("b-row",{attrs:{id:"prize"}},[r("b-col",[r("p",[t._v(t._s(t.$t("result.prize")))]),r("div",[t.result.prize1?r("div",[t._v(t._s(t.$t("result.1st"))+": "+t._s(t._f("satoshiTomBTC")(t.result.prize1))+" "+t._s(t.unit))]):t._e(),t.result.prize2?r("div",[t._v(t._s(t.$t("result.2nd"))+": "+t._s(t._f("satoshiTomBTC")(t.result.prize2))+" "+t._s(t.unit))]):t._e(),t.result.prize3?r("div",[t._v(t._s(t.$t("result.1rd"))+": "+t._s(t._f("satoshiTomBTC")(t.result.prize3))+" "+t._s(t.unit))]):t._e(),t.result.prize4?r("div",[t._v(t._s(t.$t("result.4th"))+": "+t._s(t._f("satoshiTomBTC")(t.result.prize4))+" "+t._s(t.unit))]):t._e(),t.result.prize5?r("div",[t._v(t._s(t.$t("result.5th"))+": "+t._s(t._f("satoshiTomBTC")(t.result.prize5))+" "+t._s(t.unit))]):t._e()])])],1),void 0==!t.result.addr?r("b-row",[r("b-col",[t._v("\n\t\t\t\t"+t._s(t.$t("result.none"))+"\n\t\t\t")])],1):t._e()],1):t._e()],1)},o=[],n={data:function(){return{result:null,loaded:!1,unit:null,display:!0}},methods:{},filters:{satoshiTomBTC:function(t){return t/Math.pow(10,5)}},mounted:function(){var t=this;this.rpc("result","get",null,!0).then(function(e){t.result=e,"BTC"===e.code&&(t.unit="mBTC")}).finally(function(e){t.loaded=!0})}},i=n,a=(r("ff02"),r("2877")),d=Object(a["a"])(i,s,o,!1,null,null,null);d.options.__file="index.vue";e["default"]=d.exports},"7dc7":function(t,e,r){},"96fc":function(t,e,r){},e283:function(t,e,r){},e339:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}]},[r("b-row",[r("b-col",[t.lot?r("div",[r("p",[t._v(t._s(t.$t("lot.description")))]),r("div",[r("div",[t._v(t._s(t.$t("lot.start"))+": "+t._s(t.lot.start))]),r("div",[t._v(t._s(t.$t("lot.end"))+": "+t._s(t.lot.end))]),r("div",{attrs:{id:"prize"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize_description"))),r("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize1"))),r("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize2"))),r("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize3"))),r("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize4"))),r("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("lot.prize5"))+"\n\t\t\t\t\t\t")]),r("div",{attrs:{id:"deposit_addr"}},[t._v(" "+t._s(t.$t("lot.deposit"))+"\n\t\t\t\t\t\t\t"),r("a",{attrs:{href:t.bitcoin_link},model:{value:t.deposit_addr,callback:function(e){t.deposit_addr=e},expression:"deposit_addr"}},[t._v(t._s(t.deposit_addr))]),r("br"),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.deposit_addr,expression:"deposit_addr",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"copy btn btn-success"},[t._v(t._s(t.copy))])]),r("div",{attrs:{id:"balance"}},[t._v("\n\t\t\t\t\t\t\t現在どれぐらいの金額が集まっているかは、以下のURLからわかります。"),r("br"),r("a",{attrs:{href:t.balance_link,target:"_blank"}},[t._v("blockchain.info")])])])]):r("div",[t._v(t._s(t.$t("lot.none")))])])],1),r("b-row",[r("b-col",[r("div",[r("p",[t._v(t._s(t.$t("lot.notify")))]),r("div",{ref:"notify"})])])],1)],1)],1)},o=[],n={data:function(){return{lot:null,deposit_addr:this.$store.getters.deposit_addr,bitcoin_link:"bitcoin:".concat(this.$store.getters.deposit_addr),balance_link:this.$store.getters.balance_link,copy:"Copy address to clipboard",loaded:!1}},methods:{makeHumanRedableTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zh-tw",r=new Date(t),s=r.getMonth(),o=r.getDate(),n=r.getHours(),i=r.getMinutes(),a=r.getDay(),d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];if("zh-tw"===e);else if("zh-cn"===e);else{if("ja"===e)return"".concat(s,"月").concat(o,"日(").concat(d[a],") ").concat(n,"時").concat(i,"分");if("en"===e)return"".concat(d[a]," ").concat(s,"/").concat(o," ").concat(n,":").concat(i)}},onCopy:function(){this.$toasted.show("Copied!",{theme:"bubble",position:"bottom-center",duration:1500});this.copy="Copied!"},onCopyError:function(){this.$toasted.show("Failed",{theme:"outline",position:"bottom-center",duration:1500})}},mounted:function(){var t=this;this.rpc("lot","get",null,!0).then(function(e){null===e.error&&(t.lot=e,t.lot.start=t.makeHumanRedableTime(e.start,"ja"),t.lot.end=t.makeHumanRedableTime(e.end,"ja"))}).finally(function(e){t.loaded=!0});var e=this.$parent.$refs["btn-notify"];this.$refs.notify.appendChild(e)}},i=n,a=(r("2c0d"),r("2877")),d=Object(a["a"])(i,s,o,!1,null,null,null);d.options.__file="index.vue";e["default"]=d.exports},ff02:function(t,e,r){"use strict";var s=r("7dc7"),o=r.n(s);o.a}}]);
//# sourceMappingURL=about.7f9b952c.js.map