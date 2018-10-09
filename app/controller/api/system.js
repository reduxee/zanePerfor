'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {

    // 新增系统
    async addNewSystem() {
        const { ctx } = this;
        const result = await ctx.service.web.webSystem.saveSystemData(ctx);
        return result;
    }

    // 修改系统信息
    async updateSystem() {
        const { ctx } = this;
        const result = await ctx.service.web.webSystem.updateSystemData(ctx);
        return result;
    }

    // 根据用户id获取系统列表
    async getSysForUserId() {
        const { ctx } = this;
        const result = await ctx.service.web.webSystem.getSysForUserId(ctx);
        return result;
    }
}

module.exports = SystemController;
