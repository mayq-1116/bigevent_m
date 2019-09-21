
//  用户操作功能封装
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
        $.post('http://localhost:8000/admin/login', { user_name: userName, password: userPwd }, function (res) {
            callBack(res);
        })
    },
    
    //退出功能
    logout: function(callBack) {
        $.post('http://localhost:8000/admin/logout',function(res) {
            callBack(res);
        })
    }
}