(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{434:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Ubuntu 20.04 盒盖只锁屏")]),s._v(" "),a("h2",{attrs:{id:"一、打开配置文件-logind-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、打开配置文件-logind-conf"}},[s._v("#")]),s._v(" 一、打开配置文件 "),a("code",[s._v("logind.conf")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/logind.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、修改下述内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、修改下述内容"}},[s._v("#")]),s._v(" 二、修改下述内容")]),s._v(" "),a("p",[s._v("将内容：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#HandleLidSwitch=suspend")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改为：(别忘了去掉 "),a("code",[s._v("#")]),s._v(" )")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HandleLidSwitch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ignore\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"三、重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、重启服务"}},[s._v("#")]),s._v(" 三、重启服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" systemd-logind restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);