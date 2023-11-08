module.exports = {
    title: '安卓现代化开发指南',
    description: '这里提供安卓现代化开发参考文档，适合新手和进阶开发。',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        type: 'blog',
        // 内置搜索
        search: false,
        subSidebar: 'auto',
        nav: [
            {text: "首页", link: "/"},
            {
                text: "晴天小庭",
                items: [
                    {text: "掘金主页", link: "https://juejin.cn/user/114798491603527"},
                ]
            },
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{title: "简介", path: "/"}],
            },
            {
                title: "学习目录",
                path: "/blogs/生命周期",
                collapsable: true,
                children: [
                    {title: "生命周期与Lifecycle", path: "/blogs/生命周期"},
                    {title: "状态保存与SavedState", path: "/blogs/状态保存"},
                ]
            }
        ]
    }
}