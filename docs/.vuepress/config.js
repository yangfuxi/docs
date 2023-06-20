module.exports = {
  base: "/docs/",
  title: "Yangfuxi",
  description: "personal blog",
  theme: 'reco',
  themeConfig: {
    author:'yfx',
    type:'blog',
    noFoundPageByTencent:false,
    nav: [
      { text: "首页", link: "/" ,icon:"reco-home"},
      {text:'TimeLine',link:'/timeline/',icon:'reco-date'}
    ],
    // .vuepress/config.js

friendLink: [
  {
    title: "vuepress-theme-reco",
    desc: "A simple and beautiful vuepress Blog & Doc theme.",
    logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    link: "https://vuepress-theme-reco.recoluan.com",
  },
  // ...
],

    blogConfig: {
      category: {
        location: 2,
        text: "博客",
      },
      tag: {
        location: 4,
        text: "Tag",
      }
    },
    subSidebar:'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容官方文档说了，一级标题不会生成侧边栏，正文默认从二级标题开始
  },
  markdown:{
    lineNumbers:true
  }
};
