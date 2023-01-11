module.exports = {
  base: '/',
  title: '南京买房记录',
  description: '南京买房记录',
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
                title: '南京买房记录',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "关于", path: "/" }
                ]
            },
            {
              title: "目录",
              path: '/playbook',
              collapsable: false, // 不折叠
              children: [
                { title: "计划", path: "/playbook/plan" },
                { title: "价格", path: "/playbook/price" }
              ],
            }
          ]
    }
}
