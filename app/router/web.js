'use strict';

module.exports = app => {
    const { router, controller } = app;
    const { home } = controller.web;

    // 应用列表
    router.get('/', home.systemlist);

    // ------------------------------浏览器-------------------------------
    // 首页pvuvip数据统计
    router.get('/web/home', home.webhome);

    // 访问页面平均性能
    router.get('/web/pagesavg', home.webpagesavg);

    // 单页面访问页面列表性能
    router.get('/web/pageslist', home.webpageslist);

    // 单个页面详情
    router.get('/web/pagesdetails', home.webpagedetails);
};
