module.exports = {
    base: '/',
    title: '买房调研',
    description: '买房记录',
    themeConfig: {
        lastUpdated: '最后更新于',
        docsRepo: 'sven0219/house-guide',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '欢迎指正',
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
            title: '买房调研',
            path: '/',
            collapsable: false,
            children: [{
                title: "关于",
                path: "/"
            }]
        },
        {
            title: "南京",
            path: '/nanjing/about',
            collapsable: true,
            children: [{
                title: "区域",
                path: "/nanjing/area"

            },{
                title: "政策",
                path: "/nanjing/policy"

            },{
                title: "学区",
                path: "/nanjing/school"

            },
            {
                title: "规划",
                path: "/nanjing/plan"
            },
            {
                title: "价格",
                path: "/nanjing/price"
            }],
        },
        {
            title: "芜湖",
            path: '/wuhu/about',
            collapsable: true,
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
                title: "规划",
                path: "/wuhu/plan"
            },
            {
                title: "价格",
                path: "/wuhu/price"
            }],
        },
        {
            title: "合肥",
            path: '/hefei/about',
            collapsable: true,
            children: [{
                title: "区域",
                path: "/hefei/area"
            },
            {
                title: "政策",
                path: "/hefei/policy"
            },
            {
                title: "学区",
                path: "/hefei/school"
            },
            {
                title: "规划",
                path: "/hefei/plan"
            },
            {
                title: "价格",
                path: "/hefei/price"
            }],
        }]
    }
}
