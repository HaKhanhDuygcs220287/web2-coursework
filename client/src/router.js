// src/router.js
import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Words from './views/Words.vue';
import New from './views/New.vue';
import Edit from './views/Edit.vue';
import Show from './views/Show.vue';
import TestApi from './views/TestApi.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/words', name: 'words', component: Words },
    { path: '/words/new', name: 'new', component: New },
    { path: '/words/:id/edit', name: 'edit', component: Edit, props: true },
    { path: '/words/:id', name: 'show', component: Show, props: true },
    { path: '*', redirect: '/' },
    {path: '/test-api', name: 'TestApi', component: TestApi },
    { path: '/about', component: About } 

  ]
});
