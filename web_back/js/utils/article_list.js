//管理员模块: 文字列表

var articleList = {
    //列表显示
    /**
     * 
     * @param {*} param 参数(以对象形式传参))
     * @param {*} callBack 回调函数
     */
    //内容显示
    show: function(param,callBack) {
        $.get(URLList.articleList_show, param , function(res) {
            callBack(res);
        })
    },
    // 删除内容
    del: function(id,callBack) {
        $.get(URLList.articleList_del,{ id: id }, function(res) {
            callBack(res);
        })
    },
    
}