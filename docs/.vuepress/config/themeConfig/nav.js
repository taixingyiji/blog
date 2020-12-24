module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '博客搭建',
        items: [
          { text: '搜索引擎', link: '/search/baidu/' },
          { text: 'SEO优化', link: '/vuepress/keywords/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/server/',
    items: [
      {
        text: '开发',
        items: [
          { text: 'Spring', link: '/spring/period/' },
        ],
      },
      {
        text: '数据库及中间件',
        items: [
          { text: 'Elasticsearch', link: '/es/build/' },
        ],
      },
    ],
  },
  {
    text: '运维',
    link: '/devops/',
    items: [
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
      { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
