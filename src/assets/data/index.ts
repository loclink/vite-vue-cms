const menuMap = [
  {
    path: 'dashboard',
    title: '首页'
  },
  {
    path: 'doucment',
    title: '文章管理',
    children: [
      {
        path: 'list',
        title: '文章列表'
      }
    ]
  },
  {
    path: 'system',
    title: '系统管理',
    children: [
      {
        path: 'user-list',
        title: '用户列表'
      },
      {
        path: 'user-role',
        title: '角色管理'
      },
      {
        path: 'menu-list',
        title: '菜单管理'
      }
    ]
  }
];
export {  };
