import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import counter from "./components/couter/store.js"

import Info from "./components/info/store.js"
import Pet from "./components/pet/store.js"
import service from "./components/service/store.js"
import services from "./components/services/store.js"
import User from "./components1/user/store.js"
import _Clerk from "./components1/clerk/store.js"
import _Pet from "./components1/shop/pet/store.js"
import _Order from "./components1/order/store.js"

// 用品
import Artical from "./components/artical/store.js"
// 食品
import Foods from "./components/foods/store.js"
// 订单
import order from './components/order/store.js'

Vue.use(ElementUI);
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        Info,
        order,
        Pet,
        service,
        User,
        _Clerk,
        _Pet,
        _Order,
        Artical,
        Foods,
        services
    }
})


