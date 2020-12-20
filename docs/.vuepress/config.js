const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js')
const head = require('./config/head.js');
module.exports = {
    title: `Lake's Blog`,
    description:
        '个人技术博客,简洁至上,专注学习与总结。JavaScript,js,ES6,TypeScript,vue,Java,OpenStack,Docker,k8s,Spring,SpringBoot,Mybatis,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
    // base: '/', // '/<github仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },
    // theme: 'vdoing', // 使用依赖包主题
    theme: require.resolve('../../theme-vdoing'), // 使用本地主题
    head,
    themeConfig,
    plugins
    // configureWebpack: {
    //   //webpack别名 如![Image from alias](~@alias/image.png)
    //   resolve: {
    //     alias: {
    //       '@alias': 'path/to/some/dir'
    //     }
    //   }
    // }
}
