import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerMode } from '@/config/env';
import store from '@/store'
import { getStore, getSessionStore, vaildUtil } from '@/util/yun'



import Myiframe from '@/components/iframe/iframe.vue'
import INDEX from '@/page/index/'
import errorPage404 from '@/components/errorPage/404.vue';
const _import = require('./_import');
Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
			return {
				x: 0,
				y: to.meta.savedPosition || 0
			}
		}
	},
});
export const asyncRouterMap = [
	{ path: '/login', name: '登录页', component: _import('login/index') },
	{ path: '*', redirect: '/404', hidden: true },
	{ path: '/404', component: errorPage404, name: '404' },
	{
		path: '/',
		name: '主页',
		redirect: '/wel/'
	},
	{
		path: '/myiframe',
		component: INDEX,
		redirect: '/myiframe',
		children: [
			{
				path: ":routerPath",
				name: 'iframe',
				component: Myiframe,
				props: true
			}
		]

	}, {
		path: '/wel',
		component: INDEX,
		redirect: '/wel/',
		children: [
			{
				path: '/',
				name: '欢迎主页',
				component: _import('wel')
			}
		]
	}, {
		path: '/table',
		component: INDEX,
		redirect: '/table/',
		children: [
			{
				path: '/',
				name: '表格CRUD',
				component: _import('table/index')
			}
		]
	}, {
		path: '/iconfont',
		component: INDEX,
		redirect: '/iconfont/',
		children: [
			{
				path: '/',
				name: '阿里图标',
				component: _import('iconfont/index')
			}
		]
	}, {
		path: '/errlog',
		component: INDEX,
		redirect: '/errlog/',
		children: [
			{
				path: '/',
				name: '错误日志',
				component: _import('errlog/index')
			}
		]
	}, {
		path: '/admin',
		component: INDEX,
		children: [
			{
				path: 'user',
				name: '用户管理',
				component: _import('admin/user/index')
			}, {
				path: 'role',
				name: '角色管理',
				component: _import('admin/role/index')
			}, {
				path: 'menu',
				name: '菜单管理',
				component: _import('admin/menu/index')
			}
		]
	}
]