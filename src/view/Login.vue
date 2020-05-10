<template>
    <div>
        <div class="be-content pre">
            <div class="ioc_text">
                <span>请登录您的用户</span>
            </div>
            <div>
                <form>
                    <div class="br-content">
                        <div class="input-group mb-4 bootint">
                            <div class="input-group-prepend">
                                <input v-model="username" type="text" class="form-control" placeholder="用户名">
                            </div>
                        </div>
                        <div class="input-group mb-4 bootint">
                            <div class="input-group-prepend">
                                <input v-model="password" type="password" class="form-control" placeholder="密码">
                            </div>
                        </div>
                    </div>
                    <div style="padding-top: 10px">
                        <input @click="login" type="button" class="btn" value="登录">
                    </div>
                    <div class="be-con">
                        <span>系统登录</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'login',
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            login(){
                if (this.username == ''){
                    alert("请输入用户名");
                    return false;
                }
                if (this.password == ''){
                    alert("请输入密码");
                    return false;
                }
                this.$store.commit('login',this.username);
                this.$router.push('/Home')


            }
        }
    }
</script>
<style scoped lang="css" src="./Login.css"></style>