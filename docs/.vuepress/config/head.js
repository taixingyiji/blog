module.exports = [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', {
        rel: 'icon',
        href: '/img/blog/favicon/favicon.ico'
    }], //favicons，资源放在public文件夹
    ['link', {
        rel: 'stylesheet',
        href: '/img/blog/css/iconfont.css'
    }], //favicons，资源放在public文件夹
    // markdown数学公式支持
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
    [
        'meta',
        {
            name: 'keywords',
            content:
                '个人技术博客,前端,前端开发,前端框架,web前端,技术文档,学习,Java,OpenStack,Docker,k8s,运维,Spring,SpringBoot,Mybatis,Linux,Ubuntu,CentOS,Debian,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
        },
    ],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
    ['meta', {name: 'baidu-site-verification', content: 'code-GiYa4hN56O'}], // 百度统计的站长验证
    ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    [
        'script',
        {
            'data-ad-client': 'ca-pub-5593357339450461',
            async: 'async',
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        },
    ], // 网站关联Google AdSense
    [
        'script',
        {
            async: 'async',
            src: 'https://www.googletagmanager.com/gtag/js?id=G-KE7ENV3SVE',
        },
    ], // Google 分析
    [
        "script",
        {},
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KE7ENV3SVE');
    `
    ],
    //            <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    [
        'script',
        {
            'custom-element': 'amp-ad',
            async: 'async',
            src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
        },
    ], // AMP广告
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
]
