var user = {
  /**
   * 管理员登陆
   * @param {*} userName 用户名
   * @param {*} password 密码
   * @param {*} callBack 回调函数
   */
  login: function(userName, password, callBack) {
    // alert(userName + password);
    $.post('http://localhost:8000/admin/login', { user_name: userName, password: password }, function(res) {
      debugger;
      // res 是本次请求，从服务器回来的数据
      callBack(res);
    });
  },
  logout: function(callBack) {
    $.post('http://localhost:8000/admin/logout', function(res) {
      callBack(res);
    });
  }
};
