// 管理员模块: 接口URL地址保存在这里
var URLList = {
    //登陆接口
    admin_login: 'http://localhost:8000/admin/login',
    //退出接口
    admin_logout: 'http://localhost:8000/admin/logout',
    //获取登陆管理员信息接口
    admin_ID: 'http://localhost:8000/admin/getuser',

    //类别管理显示
    category_show: 'http://localhost:8000/admin/category_search',
    //类别管理新增
    category_add: 'http://localhost:8000/admin/category_add',
    //删除文章类别
    category_del: 'http://localhost:8000/admin/category_delete',
    //编辑类别
    category_edit: 'http://localhost:8000/admin/category_edit',

    //文章列表显示
    articleList_show: 'http://localhost:8000/admin/search',
    //删除文章
    articleList_del: 'http://localhost:8000/admin/article_delete',
    //发布文章
    release_content: 'http://localhost:8000/admin/article_publish',
    //文字编辑
    release_edit: 'http://localhost:8000/admin/article_edit',
    
}