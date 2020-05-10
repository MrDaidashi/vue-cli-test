<template>
    <div class="mybody">
        <div class="col-sm-8" style="padding-top: 20px">
            <div class="input-group" style="margin: 10px 0">
                <span class="input-group-addon" id="basic-addon1">搜索</span>
                <input type="text" class="form-control" v-model.trim="searchString"
                       placeholder="输入姓名搜索" aria-describedby="basic-addon1">
            </div>
            <div style="text-align: left;margin: 10px 0">
                <button @click="addUser"  type="submit" class="btn btn-default">添加</button>
            </div>
            <table class="table table-condensed table-striped table-bordered">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>电话号码</td>
                    <td>部门</td>
                    <td>角色</td>
                    <td>操作</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(tr,index) in filterList" :key="index">
                    <td>{{tr.id}}</td>
                    <td>{{tr.name}}</td>
                    <td>{{tr.gender}}</td>
                    <td>{{tr.age}}</td>
                    <td>{{tr.number}}</td>
                    <td>{{tr.depart}}</td>
                    <td>{{tr.role}}</td>
                    <td>
                        <a @click="del(tr.id)">删除</a>&nbsp;
                        <a @click="editUser(tr.id)">修改</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-4">

        </div>

    </div>
</template>
<script>
    export default {
        name:'user',
        data:function () {
            return{
                tableList:this.$store.state.userList,
                searchString:'',
                addData:{
                    name:'',
                    gender:'',
                    age:'',
                    number:''
                }
            }
        },
        methods:{
            del:function (id) {
                this.$store.commit('delUser',id);
            },
            addUser(){
                this.$router.push({ path: '/addUser' })
            },
            editUser(id){
                this.$router.push({ name: 'editUser' ,params:{pid:id}})
            }
        },
        computed:{
            filterList:function () {
                var datalist = this.tableList,serachString = this.searchString;
                if (!serachString){
                    return datalist;
                }
                serachString = serachString.toLowerCase();
                datalist = datalist.filter(function (item) {
                    if (item.name.toLowerCase().indexOf(serachString) !==-1){
                        return item;
                    }
                })
                return datalist;
            }
        }
    }
</script>
<style scoped lang="css" src="./User.css"></style>
<style>

</style>