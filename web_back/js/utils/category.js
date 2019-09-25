// 管理员模块: 类别管理相关功能
var category = {
    //类别管理显示
    category_show: function (callBack) {
        $.get(URLList.category_show, function (res) {
            callBack(res);
        });
    },
    //类别管理新增功能
    category_add: function (name, slug, callBack) {
        $.post(URLList.category_add, { name: name, slug: slug }, function (res) {
            callBack(res);
        })
    },
    //删除类别功能
    category_del: function (id, callBack) {
        $.post(URLList.category_del, { id: id }, function (res) {
            callBack(res);
        })
    },
    //编辑类别
    category_edit: function (id, name, slug, callBack) {
        $.post(URLList.category_edit, { id: id, name: name, slug: slug }, function (res) {
            callBack(res);
        })
    },

}