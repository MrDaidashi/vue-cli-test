<template>
    <div class="row">
        <div class="col-xs-4 col-md-2" >
            <mytitle :info="titleInfo"/>
            <ul class="nav nav-pills nav-stacked"  >
                <router-link :to="{name:it.url}" role="presentation"  tag="li"
                             v-for="it in menus" :key="it.text"
                             v-bind:class="{active:it.text == activeMenu}"
                             @click="activeMenu = it.text">
                    <!--<li role="presentation" v-bind:class="{active:it.text == activeMenu}"-->
                        <!--@click="activeMenu = it.text">-->
                        <a >{{it.text}}</a>
                    <!--</li>-->

                </router-link>
            </ul>
        </div>
        <div class="col-xs-14 col-md-10" >
            <router-view/>
        </div>
    </div>

</template>
<script>
    import mytitle from "./title"
    const menuList = [{text:'菜单1',url:'dyl1'},{text:'菜单2',url:"hello1"},{text:'菜单3',url:'dyl1'}];
    export default {
        name:"Menu",
        data:function () {
            return {
                menus:menuList ,
                activeMenu:"",
                titleInfo:'Vue项目11'
            }
        },
        components:{
            mytitle
        },
        methods:{
            checkMenu:function (text,url) {
                this.activeMenu = text;
                this.$router.push(url);
            }
        }
    }
</script>
<style>
</style>