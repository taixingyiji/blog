const secret = require('./secret.js');
module.exports = [
    // 插件
    [require('../plugins/love-me/index.js'), { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],
    // [
    //     'vuepress-plugin-sponsor',
    //     {
    //         theme: 'drinks',
    //         alipay: '/sponsor-qrcode/qrcode-alipay.png',
    //         wechat: '/sponsor-qrcode/qrcode-wechat.png',
    //         qq: '/sponsor-qrcode/qrcode-qq.png',
    //         paypal: 'https://www.paypal.me/yokefellow',
    //         duration: 2000
    //     }
    // ],
    [
        'thirdparty-search',
        {
            // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
            thirdparty: [
                // 可选，默认 []
                {
                    title: '在MDN中搜索',
                    frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                    behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                },
                {
                    title: '在Runoob中搜索',
                    frontUrl: 'https://www.runoob.com/?s=',
                },
                {
                    title: '在Vue API中搜索',
                    frontUrl: 'https://cn.vuejs.org/v2/api/#',
                },
                {
                    title: '在Bing中搜索',
                    frontUrl: 'https://cn.bing.com/search?q=',
                },
                {
                    title: '通过百度搜索本站的',
                    frontUrl: 'https://www.baidu.com/s?wd=site%3Ataixingyiji.com%20',
                },
            ],
        },
    ],
    [
        //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
        'flowchart'
    ],
    'vuepress-plugin-baidu-autopush', // 百度自动推送
    'mermaidjs',
    'flowchart',
    [
        'one-click-copy',
        {
            // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },
    ],
    [
        'demo-block',
        {
            // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
            },
        },
    ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
        },
    ],
    [
        'vuepress-plugin-baidu-tongji', // 百度统计
        {
            hm: '7d3d76744a683f1157fd8b41bf73780d',
        },
    ],
    [
        'vuepress-plugin-comment', // 评论
        // {
        //   choosen: 'valine',
        //   options: {
        //     el: '#valine-vuepress-comment',
        //     appId: 'qnS1jobNF7CROIQ0XYWBnVOH-gzGzoHsz',
        //     appKey: 'LIKa0ePqFMkglQfOkN0JNK6c',
        //     avatar: 'monsterid'
        //   }
        // },
        {
            choosen: 'gitalk',
            options: {
                ...secret,
                repo: 'blog-gitalk-comment', // GitHub 仓库
                owner: 'taixingyiji', // GitHub仓库所有者
                admin: ['taixingyiji'], // 对仓库有写权限的人
                // distractionFreeMode: true,
                pagerDirection: 'last', // 'first'正序 | 'last'倒序
                id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                body:
                    '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                proxy: 'https://da.aosijdqioj.tk:4430/login/oauth/access_token'
            },
        },
    ],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                const moment = require('dayjs') // https://momentjs.com/
                return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss')
            },
        },
    ],
]
