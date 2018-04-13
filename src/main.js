// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/scss/index.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ],
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
// 跳过no-new 的eslint校验
new Vue({
  router,
  el: '#app',
  components: {App},
  template: '<App/>'
}).$mount('#app');

router.push('/goods');
