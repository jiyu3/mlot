(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f9b952c"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise(function(e,o){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"2220ad64"}[t]+".css",r=c.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],l=s.getAttribute("data-href");if(l===n||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.request=n,o(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,o[1](i)}a[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"013a":function(t,e,o){t.exports=o.p+"img/logo.53b26aff.png"},"034f":function(t,e,o){"use strict";var n=o("c21b"),r=o.n(n);r.a},"0423":function(t){t.exports={sales:"ビットコインで宝くじが買える！",header:{buy:"くじを買う",result:"結果を見る"},home:{description:"MLotとは",description_content:"MLot とは、ビットコインで宝くじが購入できるサイトです。通常の宝くじでは不可能な高い還元率で、多くの収益が得られる可能性があります。",usage:"利用方法",usage_content:"上記の「くじを買う」というボタンから宝くじのページに移動し、指定のアドレスにビットコインを払い込めばくじが購入できます。くじの募集期間が終わったら上記の「結果を見る」というボタンから当選結果ページに移動し、当否を確認してください。",lot_method:"抽選方法",lot_method_content:"払込の額が高ければ高いほど当選確率はあがります。値段はいくらからでも申し込めるので、無理のない金額でくじを購入することが可能です。なお、公正さを維持するため、当選確率の計算式は公表していません。",buy:"くじを購入する"},lot:{description:"現在購入可能なくじは以下です。",start:"開始",end:"終了",prize_description:"賞金は以下の通りです。",prize1:"１等: 総入金額の50%",prize2:"２等: 総入金額の20%",prize3:"３等: 総入金額の15%",prize4:"４等: 総入金額の10%",prize5:"５等: 総入金額の5%",deposit:"くじを購入される方は、以下のアドレスにビットコインを入金してください。",none:"現在購入可能なくじはありません。",notify:"当選結果の通知を希望する場合は、以下のボタンをクリックして通知を許可する設定にしてください。"},result:{description:"第１回の当選結果は以下の通りです。","1st":"１等","2nd":"２等","3rd":"３等","4th":"４等","5th":"５等",prize:"賞金額は以下の通りです。",none:"現在結果表示可能なくじはありません。"}}},"2c61":function(t){t.exports={sales:"用比特币即可购买乐透！",header:{buy:"购买乐透",result:"观看结果"},home:{description:"什么是MLot？",description_content:"MLot是可以比特币来购买乐透的页面。本乐透之降低率远高于一般乐透，因此购买者将有机会获取更高的利润",usage:"使用方式",usage_content:'点上述"购买乐透"点击进入乐透的页面，将比特币汇入指定比特币地址即可购买乐透。乐透的下注期间截止以后，请点上述“观看结果”按钮，进入开奖结果的页面，以确认是否中奖。',lot_method:"抽奖方式",lot_method_content:"投注总额的多寡与中奖机率高低成正比。而投注金额并无限制，因此您可运用余款来购买乐透。此外，我们不公开中奖机率的计算方式以维持公正度。",buy:"购买乐透"},lot:{description:"目前可购买的乐透如下。",start:"开始",end:"结束",prize_description:"奖金如下。",prize1:"头奖: 投注总额的50%",prize2:"二奖: 投注总额的20%",prize3:"三奖: 投注总额的15%",prize4:"四奖: 投注总额的10%",prize5:"五奖: 投注总额的5%",deposit:"购买者请将比特币汇入以下之比特币地址。",none:"目前并无可购买的乐透。",notify:"若希望接收中奖结果通知，请点选以下按钮，以设定为收到通知。"},result:{description:"首次中奖结果如下。","1st":"头奖","2nd":"二奖","3rd":"三奖","4th":"四奖","5th":"五奖",prize:"奖金的金额如下。",none:"目前并无乐透开奖。"}}},"3dfd":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",[o("div",[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:t.logo}})]),o("router-link",{staticClass:"btn",attrs:{to:"/lot"}},[t._v(t._s(t.$t("header.buy")))]),o("router-link",{staticClass:"btn",attrs:{to:"/result"}},[t._v(t._s(t.$t("header.result")))])],1)]),o("router-view",{attrs:{id:"main"}}),o("div",{ref:"btn-notify",staticClass:"onesignal-customlink-container",attrs:{id:"btn-notify"}}),o("footer",[o("div",{staticClass:"sns"},[o("a",{attrs:{href:t.twitter_link,target:"_blank",title:"Share on Twitter"}},[o("img",{staticClass:"twitter",attrs:{src:t.twitter,alt:"twitter"}})]),o("a",{attrs:{href:t.facebook_link,target:"_blank",title:"Share on Facebook"}},[o("img",{staticClass:"facebook",attrs:{src:t.facebook,alt:"facebook"}})])]),o("div",{staticClass:"to_top"},[o("router-link",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"btn",attrs:{to:"/"}},[t._v("Back to Top")])],1),o("div",{attrs:{id:"locale"}},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.locale="zh-tw"}}},[t._v("繁體中文")]),o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.locale="zh-cn"}}},[t._v("简体中文")]),o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.locale="ja"}}},[t._v("日本語")]),o("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.locale="en"}}},[t._v("English")])]),t._m(0)])],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"contact"}},[o("a",{attrs:{href:"https://twitter.com/mylotgreen",target:"_blank"}},[t._v("Contact")])])}],a=(o("f559"),{data:function(){var t=localStorage.getItem("locale")?localStorage.getItem("locale"):null;if(!t){var e=window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage;t=e.startsWith("en")?"en":e.startsWith("ja")?"ja":e.startsWith("zh-cn")?"zh-cn":"zh-tw"}return this.$i18n.locale=t,{locale:t,logo:o("013a"),twitter:o("457e"),facebook:o("b269"),twitter_link:null,facebook_link:null}},watch:{locale:function(t){this.$i18n.locale=t,localStorage.setItem("locale",t)}},methods:{getLink:function(t){var e=this.$i18n.messages[this.locale].sales,o=location.origin;return"twitter"===t?"https://twitter.com/intent/tweet?text="+encodeURIComponent(e+"\n"+o+"\n #MLot #bitcoin #ビットコイン #仮想通貨 #比特幣 #虛擬貨幣"):"facebook"===t&&"https://www.facebook.com/sharer/sharer.php?u="+o+"&t="+encodeURIComponent(e)}},mounted:function(){this.twitter_link=this.getLink("twitter"),this.facebook_link=this.getLink("facebook")}}),i=a,s=(o("034f"),o("2877")),c=Object(s["a"])(i,n,r,!1,null,null,null);c.options.__file="App.vue";e["a"]=c.exports},"41cb":function(t,e,o){"use strict";o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=o("8c4f");n["default"].use(r["a"]),e["a"]=new r["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return o.e("about").then(o.bind(null,"4609"))},meta:{skipAuth:!0}},{path:"/lot",name:"Lot",component:function(){return o.e("about").then(o.bind(null,"e339"))}},{path:"/result",name:"Result",component:function(){return o.e("about").then(o.bind(null,"7a13"))}}]})},"457e":function(t,e,o){t.exports=o.p+"img/twitter.9fd9b71b.png"},"49f8":function(t,e,o){var n={"./en.json":"edd4","./ja.json":"0423","./zh-cn.json":"2c61","./zh-tw.json":"cb6e"};function r(t){var e=a(t);return o(e)}function a(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="49f8"},"56d7":function(t,e,o){"use strict";o.r(e),function(t){o("cadf"),o("551c"),o("097d");var e=o("2b0e"),n=o("3dfd"),r=o("9225"),a=o("41cb"),i=o("c0d6"),s=o("bc3a"),c=o.n(s),l=o("a7fe"),u=o.n(l),d=o("9062"),f=o.n(d),p=(o("bd0f"),o("9f7b")),h=(o("f9e3"),o("2dd8"),o("a65d")),b=o.n(h),m=o("4eb5"),g=o.n(m);t.title="mlot-client",c.a.defaults.timeout=3e3,e["default"].use(u.a,c.a),e["default"].use(f.a),e["default"].use(p["a"]),e["default"].use(b.a),e["default"].use(g.a),e["default"].config.productionTip=!1,e["default"].mixin({methods:{rpc:function(t,e){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.$store.getters.db_url+t+"/"+e,i={jsonrpc:"2.0",method:"login",params:n},s=0,c=100;return r&&(this.$store.state.loader=this.$loading.show()),new Promise(function(t,e){var r=setInterval(function(){null==n||null!==n.token?(clearInterval(r),o.axios.post(a,i).then(function(e){var o=JSON.parse(e.data).result;t(o)}).catch(function(t){e(t)}).finally(function(t){null!=o.$store.state.loader&&o.$store.state.loader.hide()})):(++s>=3e3/c&&(clearInterval(r),o.$router.push("/")),n.token=o.$store.state.token)},c)})}}}),a["a"].beforeEach(function(t,e,o){null!=i["a"].state.loader&&i["a"].state.loader.hide(),o()}),new e["default"]({i18n:r["a"],router:a["a"],store:i["a"],render:function(t){return t(n["a"])}}).$mount("#app")}.call(this,o("4362"))},"7dc5":function(t){t.exports={development:{db:{base_url:"http://localhost:9999/"},deposit_addr:"2N7kV6frZatpmjJsuoEdVqsmhhEmX6jA7Bi"},production:{db:{base_url:"https://mylot.green/db/"},deposit_addr:"38LThaF8ohTk2Ji4H2MX5qfxT7QpiSN1oT"}}},9225:function(t,e,o){"use strict";o("4917"),o("ac6a");var n=o("2b0e"),r=o("a925");function a(){var t=o("49f8"),e={};return t.keys().forEach(function(o){var n=o.match(/([a-z0-9_-]+)\./i);if(n&&n.length>1){var r=n[1];e[r]=t(o)}}),e}n["default"].use(r["a"]),e["a"]=new r["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:a()})},b269:function(t,e,o){t.exports=o.p+"img/facebook.40c03155.png"},c0d6:function(t,e,o){"use strict";o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=o("2f62");n["default"].use(r["a"]),e["a"]=new r["a"].Store({state:{token:null,config:o("7dc5"),loader:null},mutations:{},getters:{db_url:function(t){return t.config["production"].db.base_url},deposit_addr:function(t){return t.config["production"].deposit_addr},balance_link:function(t){return"https://www.blockchain.com/btc/address/".concat(t.config["production"].deposit_addr)}},actions:{}})},c21b:function(t,e,o){},cb6e:function(t){t.exports={sales:"用比特幣即可購買樂透！",header:{buy:"購買樂透",result:"觀看結果"},home:{description:"什麼是MLot？",description_content:"MLot是可以比特幣來購買樂透的頁面。本樂透之降低率遠高於一般樂透，因此購買者將有機會獲取更高的利益",usage:"使用方式",usage_content:'點上述"購買樂透"點擊進入樂透的頁面，將比特幣匯入指定比特幣地址即可購買樂透。樂透的下注期間截止以後，請點上述“觀看結果”按鈕，進入開獎結果的頁面，以確認是否中獎。',lot_method:"抽獎方式",lot_method_content:"投注總額的多寡與中獎機率高低成正比。而投注金額並無限制，因此您可運用餘款來購買樂透。此外，我們不公開中獎機率的計算方式以維持公正度。",buy:"購買樂透"},lot:{description:"目前可購買的樂透如下。",start:"開始",end:"結束",prize_description:"獎金如下。",prize1:"頭獎: 投注總額的50%",prize2:"貳獎: 投注總額的20%",prize3:"參獎: 投注總額的15%",prize4:"肆獎: 投注總額的10%",prize5:"伍獎: 投注總額的5%",deposit:"購買者請將比特幣匯入以下之比特幣地址。",none:"目前並無可購買的樂透。",notify:"若希望接收中獎結果通知，請點選以下按鈕，以設定為收到通知。"},result:{description:"首次中獎結果如下。","1st":"頭獎","2nd":"貳獎","3rd":"參獎","4th":"肆獎","5th":"伍獎",prize:"獎金的金額如下。",none:"目前並無樂透開獎。"}}},edd4:function(t){t.exports={sales:"Buy lottery with bitcoin!",header:{buy:"Buy Lot",result:"See Result"},home:{description:"What is MLot",description_content:"MLot is the web app that you can buy lottery with bitcoin. The reduction rate is much higher than fiat-base one, so you may be able to get much more benefit.",usage:"Usage",usage_content:'Click "Buy Lot" button on header, go to lottery page, and pay bitcoin to designated address, then you finish to buy lottery. After the recruitment period of lottery, click "See Result" to see resutl.',lot_method:"Lottery method",lot_method_content:"People who pay more are more likely to become winners. You can pay however much you want. We don't publish how to compute winners in order to be fair.",buy:"くじを購入する"},lot:{description:"The detail of current lottery is as below.",start:"Start",end:"End",prize_description:"Prize is as below.",prize1:"1st: 50% of total deposit amount",prize2:"2nd: 20% of total deposit amount",prize3:"3rd: 15% of total deposit amount",prize4:"4th: 10% of total deposit amount",prize5:"5th: 5% of total deposit amount",deposit:"If you want to buy lottery, send bitcoin to below address.",none:"There is no lottery available.",notify:"If you need notification of result, click the below button and allow notification."},result:{description:"The winners of 1st lottery are as below.","1st":"1st","2nd":"2nd","3rd":"3rd","4th":"4th","5th":"5th",prize:"The prize of each winner is as below.",none:"There is no lottery result available."}}}});
//# sourceMappingURL=app.3b748499.js.map