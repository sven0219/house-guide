module.exports = {
  base: '/',
  title: '买房调研',
  description: '买房记录',
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Link',
                items: [
                    { text: 'Github', link: 'https://github.com/sven0219' },
                    { text: 'Blog',  link: 'https://www.svenshen.com' }
                ]
            }
        ],
   sidebar: [
            {
                title: '买房记录',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "关于", path: "/" }
                ]
            },
            {
              title: "南京",
              path: '/nanjing/why',
              collapsable: true, // 折叠
              children: [
                { title: "计划", path: "/nanjing/plan" },
                { title: "价格", path: "/nanjing/price" }
              ],
            },
            {
              title: "芜湖",
              path: '/wuhu/why',
              collapsable: true, // 折叠
              children: [
                { title: "计划", path: "/wuhu/plan" },
                { title: "价格", path: "/wuhu/price" }
              ],
            }
          ]
    }
}
