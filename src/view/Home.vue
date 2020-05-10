<template>
    <div class="row">
        <div class="col-xs-4 col-md-2" style="height: 100%;border: 1px solid rgba(118,116,114,0.4)">
            <mytitle :info="titleInfo"/>
            <ul class="nav nav-pills nav-stacked"  >
                <li role="presentation" v-for="it in menus" :key="it.text"
                    v-bind:class="{active:it.text == activeMenu}"
                    @click="activeMenu = it.text">
                    <router-link :to="it.url" >
                        {{it.text}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-xs-14 col-md-10" >
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import mytitle from "../components/title"
    // import {mapState} from 'vuex'

    const menuList = [{text:'个人信息表单',url:'/form'},{text:'用户信息',url:"/user"},{text:'嵌套路由',url:'/routerTest'},{text:'Vuex计数器',url:'/Vuex1'},{text:"axios",url:"/axios"}];

    export default {
        name: 'App',
        components: {
            mytitle
        },
        data:function () {
            return{
                menus:menuList ,
                activeMenu:"",
                titleInfo:'Vue项目11'
            }
        },
    }
</script>
<style>
    .row{
        height: 100%;
    }
</style>