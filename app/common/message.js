/**
 * Created by zyy on 15/6/26.
 * zhangyuyu@superjia.com
 */
module.exports = {
    //系统错误码
    1001: '暂无数据',
    1002: '没有权限',
    1003: '请求参数错误',
    1004: '无效操作',
    //10xxx和user相关
    10001: '请先登录',
    10002: '该用户已经存在',
    10003: '该邮箱已经存在',
    10004: '该用户不存在',
    10005: '密码不正确',
    10006: '用户名或密码错误',
    //11xxx和team相关
    11001: '请先加入该团队',
    11002: '只有团队创建者才能管理该团队',
    11003: '该团队不存在',
    //12xxx和project相关
    12001: '只有项目创建者才能该管理项目',
    12002: '该项目不存在',
    //13xxx和prd相关
    13001: '只有项目创建者才能该管理PRD',
    13002: '该PRD不存在',
    //15XXXX api 相关
    150001: '添加API失败',
    150002: '删除API失败',
    150003: 'API不存在',
    150004: '同步PRD失败',
    150005: '同步API失败'
}
