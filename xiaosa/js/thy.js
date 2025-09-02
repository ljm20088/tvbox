var rule = {
    title: '桃花源',
    host: 'https://d.thyys.net',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2, //是否启用全局搜索,
    quickSearch: 0, //是否启用快速搜索,
    filterable: 0, //是否启用分类筛选,
    headers: {
        'User-Agent': 'MOBILE_UA', // "Cookie": ""
    },
    //动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    class_parse: '.head_menu_a&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '发布页|TG群组',
    play_parse: true,
    limit: 6,
    // 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    // 如果是双层定位的话,推荐的第2段分号代码也是第2层定位列表代码
    推荐: '.cbox_list;ul&&li;a&&title;a&&data-original;.pic-tag-t&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
    // 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级: '.vodlist&&li;a&&title;a&&data-original;a&&Text;a&&href',
    二级: {
        "title": "h2&&Text",
        "img": ".vodlist_detail .lazyload&&data-original",
        "desc": ".content_detail&&ul:eq(2)&&li:eq(1)&&a:eq(0)&&Text;.content_detail&&ul:eq(2)&&li:eq(2)&&Text;.content_detail&&ul:eq(2)&&li:eq(3)&&Text;.content_detail&&ul:eq(2)&&li:eq(4)&&Text;.content_detail&&ul:eq(2)&&li:eq(5)&&Text",
        "content": ".detail&&Text",
        "tabs": ".playbtn&&a",
        "lists": ".playbtn&&a:eq(0)"
    },
    搜索: '.vodlist&&li;a&&title;a&&data-original;a&&Text;a&&href',
}