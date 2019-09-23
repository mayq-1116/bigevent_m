// 管理员模块: 类别管理相关功能
var category = {
    //类别管理显示
    category_show: function (callBack) {
        $.get(URLList.category_show, function (res) {
            callBack(res);
        });
    }

}