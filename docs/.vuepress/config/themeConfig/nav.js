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
      {
        text: 'Vue',
        items: [
          { text: '问题记录', link: '/vue/bracket/' },
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
      {
        text: '杂谈',
        items: [
          { text: '杂谈', link: '/any/lock/' },
        ],
      },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/',
    items: [
      {
        text: '算法说明',
        items: [
          { text: 'algorithm', link: '/algorithm/hash/' },
        ],
      },
      {
        text: 'leetCode',
        items: [
          { text: 'leetCode', link: '/leetcode/two-sum/' },
        ],
      },
    ],
  },
  {
    text: '运维',
    link: '/devops/',
    items: [
      {
        text: '代理',
        items: [
          { text: 'Nginx', link: '/nginx/linuxbuild/onepointsixteen' },
        ],
      },
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
