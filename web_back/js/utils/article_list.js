//管理员模块: 文章列表系统

var articleList = {
    //列表显示
    /**
     * 
     * @param {*} param 参数(以对象形式传参))
     * @param {*} callBack 回调函数
     */
    //内容显示
    show: function (param, callBack) {
        $.get(URLList.articleList_show, param, function (res) {
            callBack(res);
        })
    },
    // 删除内容
    del: function (id, callBack) {
        $.get(URLList.articleList_del, { id: id }, function (res) {
            callBack(res);
        })
    },
    //发布文章
    add: function (fd, callBack) {
        $.ajax({
            url: URLList.release_content,
            type: 'post',
            data: fd,
            processData: false,  //让jQuery不要处理数据,无法处理此对象
            contentType: false,  //不要设置请求头,FormData自带请求头
            success: function (res) {
                callBack(res);
            }
        })
    },

    //编辑文章
    edit: function (fd, callBack) {
        $.ajax({
            url: URLList.release_edit,
            type: 'post',
            data: fd,
            processData: false,  //让jQuery不要处理数据,无法处理此对象
            contentType: false,  //不要设置请求头,FormData自带请求头
            success: function (res) {
                callBack(res);
            }
        })
    }

}