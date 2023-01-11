module.exports = {
  base: '/',
  title: '买房调研',
  description: '买房记录',
  themeConfig: {
      lastUpdated: '最后更新于',
      docsRepo: 'sven0219/house-guide',
      docsBranch: 'main',
      nav: [{
          text: '首页',
          link: '/'
      },
      {
          text: 'Link',
          items: [{
              text: 'Github',
              link: 'https://github.com/sven0219'
          },
          {
              text: 'Blog',
              link: 'https://www.svenshen.com'
          }]
      }],
      sidebar: [{
          title: '买房记录',
          path: '/',
          collapsable: false,
          // 不折叠
          children: [{
              title: "关于",
              path: "/"
          }]
      },
      {
          title: "南京",
          path: '/nanjing/why',
          collapsable: true,
          // 折叠
          children: [{
              title: "计划",
              path: "/nanjing/plan"
          },
          {
              title: "价格",
              path: "/nanjing/price"
          }],
      },
      {
          title: "芜湖",
          path: '/wuhu/why',
          collapsable: true,
          // 折叠
          children: [{
              title: "区域",
              path: "/wuhu/area"
          },
          {
              title: "政策",
              path: "/wuhu/policy"
          },
          {
              title: "学区",
              path: "/wuhu/school"
          },
          {
              title: "计划",
              path: "/wuhu/plan"
          },
          {
              title: "价格",
              path: "/wuhu/price"
          }],
      },
      {
          title: "合肥",
          path: '/hefei/why',
          collapsable: true,
          // 折叠
          children: [{
              title: "计划",
              path: "/hefei/plan"
          },
          {
              title: "价格",
              path: "/hefei/price"
          }],
      }]
  }
}
