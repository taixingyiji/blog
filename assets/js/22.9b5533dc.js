(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{396:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue-typescript-long类型失去精度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-typescript-long类型失去精度"}},[s._v("#")]),s._v(" Vue-typescript Long类型失去精度")]),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"/img/blog/20210401164822.jpeg",width:"500"}})]),s._v(" "),t("p",[s._v("Vue typescript项目Long类型数据失去精度如何解决")]),s._v(" "),t("h2",{attrs:{id:"一、后台解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、后台解决方案"}},[s._v("#")]),s._v(" 一、后台解决方案")]),s._v(" "),t("p",[s._v("将 "),t("code",[s._v("Long")]),s._v(" 类型转换成 "),t("code",[s._v("String")]),s._v(" 类型然后传给前端")]),s._v(" "),t("p",[s._v("Springboot 代码示例")]),s._v(" "),t("p",[s._v("代码示例：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fasterxml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("databind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JsonSerialize")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fasterxml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("databind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ToStringSerializer")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@JsonSerialize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ToStringSerializer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"二、前端解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、前端解决方案"}},[s._v("#")]),s._v(" 二、前端解决方案")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("json-bigint")]),s._v(" 进行将 "),t("code",[s._v("Long")]),s._v(" 类型转换成 "),t("code",[s._v("String")])]),s._v(" "),t("h3",{attrs:{id:"_1-添加依赖-json-bigint-1-0-0-此处我使用的是-1-0-0-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加依赖-json-bigint-1-0-0-此处我使用的是-1-0-0-版本"}},[s._v("#")]),s._v(" 1. 添加依赖 "),t("code",[s._v('"json-bigint": "^1.0.0"')]),s._v(" ,此处我使用的是 "),t("code",[s._v("1.0.0")]),s._v(" 版本")]),s._v(" "),t("ul",[t("li",[s._v("yarn 安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" json-bigint\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("npm 安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i json-bigint\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-编写json-bigint-d-ts-文件，放入项目中-scr-typings-目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写json-bigint-d-ts-文件，放入项目中-scr-typings-目录下"}},[s._v("#")]),s._v(" 2. 编写"),t("code",[s._v("json-bigint.d.ts")]),s._v(" 文件，放入项目中 "),t("code",[s._v("scr/typings")]),s._v(" 目录下")]),s._v(" "),t("p",[s._v("此步骤是为了让 "),t("code",[s._v("ts")]),s._v(" 可以使用 "),t("code",[s._v("js")]),s._v(" 插件，不是使用 "),t("code",[s._v("ts")]),s._v("，开发的可以略过")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("declare module "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json-bigint'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-在你需要转换的地方使用-json-bigint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-在你需要转换的地方使用-json-bigint"}},[s._v("#")]),s._v(" 3. 在你需要转换的地方使用 "),t("code",[s._v("json-bigint")])]),s._v(" "),t("p",[s._v("此处我是在 "),t("code",[s._v("axios")]),s._v(" 中，从后台获取值转换为json前，先使用  "),t("code",[s._v("json-bigint")])]),s._v(" "),t("ul",[t("li",[s._v("在文件中引入 "),t("code",[s._v("json-bigint")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" JSONBig "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json-bigint'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("修改 "),t("code",[s._v("axios")]),s._v(" 中的 "),t("code",[s._v("transformResponse")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaults"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transformResponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处是使用json-bigint进行json格式化")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" JSONBig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("为方便理解，附上封装的 "),t("code",[s._v("axios")]),s._v(" 部分代码")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" axios "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalAxios")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("axios")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建axios实例")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("axios "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("baseURL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VUE_APP_BASE_API")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("withCredentials")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transResponse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将数据格式化成json")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaults"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transformResponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" JSONBig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);t.default=e.exports}}]);