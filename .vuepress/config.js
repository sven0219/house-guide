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
            title: '芜湖买房调研',
            path: '/',
            collapsable: false,
            children: [{
                title: "关于",
                path: "/"
            }]
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
	   title: "工具",
	   path: '/tools',
       collapsable: false,
       children: [{}]

	}]
    }
}
