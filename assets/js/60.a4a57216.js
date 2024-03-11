(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{433:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"/img/blog/20220323173546.png"}})]),s._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("本次使用的是 "),a("code",[s._v("CentOS7")]),s._v(" + "),a("code",[s._v("MySQL 5.7.32")]),s._v(" 其他版本的 5.7 MySQL 应该也支持")]),s._v(" "),a("li",[s._v("本次不提供安装包，但提供安装包的下载地址，均为官网下载地址")]),s._v(" "),a("li",[s._v("如果报出权限不足的异常请在涉及到的命令前面加上 "),a("code",[s._v("sudo")]),s._v("，如果无法解决请联系系统管理员分配权限")])]),s._v(" "),a("h3",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("去官网下载rpm包，使用命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://cdn.mysql.com/archives/mysql-5.7/mysql-community-client-5.7.32-1.el7.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://cdn.mysql.com/archives/mysql-5.7/mysql-community-common-5.7.32-1.el7.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://cdn.mysql.com/archives/mysql-5.7/mysql-community-libs-5.7.32-1.el7.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://cdn.mysql.com/archives/mysql-5.7/mysql-community-libs-compat-5.7.32-1.el7.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttps://cdn.mysql.com/archives/mysql-5.7/mysql-community-server-5.7.32-1.el7.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("p",[s._v("为了方便，来"),a("a",{attrs:{href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载页面"),a("OutboundLink")],1),s._v("描述一下我们下载了那些 rpm")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171545.png",alt:"MySQL下载页面截图"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("把他们下载到 CentOS 的 "),a("code",[s._v("/usr/local/src")]),s._v(" 目录下，如图显示")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171610.png",alt:"下载完成后的安装包"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("然后安装这些安装包，注意有依赖，需要联网\n使用命令：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" mysql-community-*-5.7.32-1.el7.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("看到这个画面表示安装成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171649.png",alt:"MySQL安装成功"}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("开启服务器并初始化密码，使用的命令和命令详解：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启MySQL服务器")]),s._v("\nsystemctl start mysqld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看默认生成的密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" password\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("p",[s._v("生成的密码如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171732.png",alt:"生成的密码"}})]),s._v(" "),a("p",[s._v("使用该密码登录本地 MySQL 服务器，使用命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h127.0.0.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后输入以下命令修改默认密码：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码等级")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate_password_length")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate_password_policy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改默认密码，注意替换后面的密码")]),s._v("\nALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您的密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("我们退出后发现密码已经设置完成")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("设置 root 账户远程登陆（此步骤如果不需要可以跳过），进入到 MySQL 命令行使用命令：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("use "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意将密码替换掉")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您的密码'")]),s._v(" WITH GRANT OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意开放 "),a("code",[s._v("3306")]),s._v(" 端口之后在 window 上远程连接可以成功：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171901.png",alt:"远程连接成功"}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("现在我们使用 "),a("code",[s._v("show variables like 'character%';")]),s._v(" 命令查看字符集看到一些字符集默认还是拉丁文，我们需要将他们改成 "),a("code",[s._v("UTF-8")]),s._v("：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323171919.png",alt:"拉丁文的编码字符集"}})]),s._v(" "),a("p",[s._v("我们修改 "),a("code",[s._v("/etc/my.cnf")]),s._v(" 文件来修改这个配置，使用命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改之后：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For advice on how to change settings please see")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncharacter-set-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove leading # and set to the amount of RAM for the most important data")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# innodb_buffer_pool_size = 128M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove leading # to turn on a very important data integrity option: logging")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# changes to the binary log between backups.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log_bin")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove leading # to set options mainly useful for reporting servers.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The server defaults are faster for transactions and fast SELECTs.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Adjust sizes as needed, experiment to find the optimal values.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# join_buffer_size = 128M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sort_buffer_size = 2M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read_rnd_buffer_size = 2M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/mysql.sock\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disabling symbolic-links is recommended to prevent assorted security risks")]),s._v("\nsymbolic-links"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nlog-error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/mysqld.log\npid-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/mysqld/mysqld.pid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("重点注意修改部分：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncharacter-set-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("使用命令 "),a("code",[s._v("systemctl restart mysqld")]),s._v(" 重启MySQL服务器后再查看：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/blog/20220323172027.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("原文地址："),a("a",{attrs:{href:"https://blog.csdn.net/m0_51510236/article/details/113791490",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/m0_51510236/article/details/113791490"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);