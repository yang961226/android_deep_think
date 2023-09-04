module.exports = {
    title: '安卓现代化开发',
    description: '我是描述',
    base: "./",
    theme: 'reco',
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {
                text: "晴天小庭的博客",
                items: [
                    {text: "掘金", link: "https://juejin.cn/user/114798491603527"},
                ]
            },
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{title: "博客简介", path: "/"}],
            },
            {
                title: "基础篇",
                path: "/blogs/1",
                collapsable: true,
                children: [
                    {title: "第一篇", path: "/blogs/1"},
                    {title: "第二篇", path: "/blogs/2"},
                ]
            }
        ]
    }
}