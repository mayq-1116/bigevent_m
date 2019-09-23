//  管理员登陆模块: 所有与管理员相关的功能写在这里
var user = {
    //登陆功能
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} userPwd  密码
     * @param {*} callBack 回调函数
     */
    login: function (userName, userPwd, callBack) {
        // 发送ajax请求
        $.post(URLList.admin_login, { user_name: userName, password: userPwd }, function (res) {
            callBack(res);
        })
    },
    
    //退出功能
    logout: function(callBack) {
        $.post(URLList.admin_logout,function(res) {
            callBack(res);
        })
    },

    //获取管理员信息
    adminID: function(callBack) {
        $.get(URLList.admin_ID,function(res) {
            callBack(res);
        } )
    }
}