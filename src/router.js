import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Hello from './components/HelloWorld'
import DYL from './components/DylComponent'
import menu from './components/Menu'
import Form from './components/Form'
import User from './view/User'
import editUser from './components/UserEdit'
import routerTest from './components/Routers'
import Vuex1 from './components/VuexDemo1'
import Home from './view/Home'
import Login from './view/Login'
import Ajax from './view/GetData'

// import Admin from './components/admin/admin'

Vue.use(Router)

export default new Router({
    routes: [
        {   path: '/menu',
            component: menu
        },
        {path: '/', name: 'Login', component: Login},
        {path: '/Login', name: 'Login1', component: Login},
        {path: '/Home',
            name: 'Home',
            component: Home,
            children:[
                { path: '/dyl', name: 'Main', component: DYL },
                { path: '/hello',name: 'Hello',component:Hello},
                { path: '/form',name:'Form',component:Form},
                { path: '/user',name:'User',component:User},
                { path: '/editUser',name:'editUser',component:editUser},
                { path: '/addUser',name:'addUser',component:editUser},
                { path: '/Vuex1',name:'Vuex1',component:Vuex1},
                { path: '/axios',name:'axios',component:Ajax},
                {path :'/routerTest',component:routerTest,
                    children:[
                        {
                            name:'componentA',
                            path:'/componentA',
                            component:DYL
                        },{
                            name:'componentB',
                            path:'/componentB',
                            component:Hello
                        }
                    ]
                }
            ]
        }

    ]
})