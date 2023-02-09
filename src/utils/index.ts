import { RouteRecordRaw } from 'vue-router';

const handleMenuMap = (routes: RouteRecordRaw[]) => {
  const rootMenu = routes.find((item) => item.path === '/');
  return rootMenu?.children ?? [];
};

export { handleMenuMap };
