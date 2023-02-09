import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '@/views/dashboard/index.vue';
import Document from '@/views/document/index.vue';
import DocumentList from '@/views/document/pages/list/index.vue';
import DocumentTag from '@/views/document/pages/tag/index.vue';
import System from '@/views/system/index.vue';
import Login from '@/views/login/index.vue';
import CommonLayout from '@/base-ui/common-layout/index.vue';

import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login',
    component: CommonLayout,
    children: [
      {
        name: '首页',
        path: '/dashboard',
        component: Dashboard,
        meta: {
          icon: 'HomeFilled'
        }
      },
      {
        name: '文章管理',
        path: '/document',
        component: Document,
        redirect: '/document/list',
        meta: {
          icon: 'Document'
        },
        children: [
          {
            name: '文章列表',
            path: '/document/list',
            component: DocumentList
          },
          {
            name: '标签管理',
            path: '/document/tag',
            component: DocumentTag
          }
        ]
      },
      {
        name: '系统管理',
        path: '/system',
        component: System,
        meta: {
          icon: 'Operation'
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/not-found/index.vue') }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
