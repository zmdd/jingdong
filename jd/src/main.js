import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import data from "../static/data/data.js";
import index from './components/index.vue';
import Up from './components/Up.vue';
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css"
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router, VueAxios, axios);
Vue.use(IScrollView, IScroll)
Vue.use(Vuex)
Vue.prototype.axios = axios;
var router = new Router({
   linkActiveClass: 'active',
    routes: [{
        name: 'index',
        path: '/',
        component: index
    }]
})

const store = new Vuex.Store({
    state:{data},
    mutations:{
        
    }
})
//console.log(data.index.banner)




var vm = new Vue({
    el: '#app',
    router,
    store,
    VueAxios,
    axios,
  //  render: x => x(Up),
    render: x => x(index)
})