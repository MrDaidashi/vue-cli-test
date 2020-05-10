<template>
    <div style="width: 50%;">
        <h1 v-if="pid">用户信息编辑</h1>
        <h1 v-else>用户信息添加</h1>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="p_name" class="col-sm-2 control-label">ID</label>
                <div class="col-sm-10">
                    <input :readonly="pid" class="form-control" type="text" id="p_id" name="p_id"
                           v-model='formData.id' placeholder="请输入id" >
                </div>
            </div>
            <div class="form-group">
                <label for="p_name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="name" name="name"
                           v-model='formData.name' placeholder="请输入姓名" >
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">性别</label>
                <div class="col-sm-10" style="text-align: left">
                    <label class="radio-inline">
                        <input v-model="formData.gender" type="radio" name="gender"  value="男">男
                    </label>
                    <label class="radio-inline">
                        <input v-model="formData.gender" type="radio" name="gender"  value="女">女
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="age" class="col-sm-2 control-label">年龄</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="age" name="age"
                           v-model='formData.age' placeholder="请输入年龄" >
                </div>
            </div>
            <div class="form-group">
                <label for="p_name" class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="p_name" name="p_name"
                           v-model='formData.number' placeholder="请输入联系电话" >
                </div>
            </div>
            <div class="form-group">
                <label for="depart" class="col-sm-2 control-label">部门</label>
                <div class="col-sm-10">
                    <select v-model="formData.depart" class="form-control" type="text" id="depart" name="depart">
                        <option v-for="de in departs" :key="de.value" :value="de.value">{{de.text}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="role" class="col-sm-2 control-label">角色</label>
                <div class="col-sm-10">
                    <input readonly v-model="formData.role" class="form-control" type="text" id="role" name="role">
                </div>
            </div>
            <button @click="sendForm" type="submit" class="btn btn-default">提交表单</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                formData:{
                    id:this.$route.params.pid,
                    name:'',
                    gender:'',
                    age:'',
                    number:'',
                    depart:'',
                    role:''
                },
                pid: this.$route.params.pid,
                departs:[{text:'销售部',value:'销售部'},{text:'工程部',value:'工程部'},{text:'人事部',value:'人事部'}] ,
                roleInfo:{
                    '销售部':"销售人员",
                    '工程部':"技术人员",
                    '人事部':"人事专员"
                }
            }
        },
        mounted:function(){
            if (this.pid){
                var list = this.$store.state.userList;
                var data ;
                for(var i=0;i<list.length;i++){
                    if (list[i]['id'] == this.pid){
                        data = list[i];
                        break;
                    }
                }
                if (data){
                    this.formData.id = data.id;
                    this.formData.name = data.name;
                    this.formData.gender = data.gender;
                    this.formData.age = data.age;
                    this.formData.number = data.number;
                    this.formData.depart = data.depart;
                    this.formData.role = data.role;
                }
            }
        },
        watch:{
            'formData.depart':function (val) {
                this.formData.depart = val;
                var role = this.roleInfo[val];
                if (role){
                    this.formData.role = role;
                }
            },

        },
        methods:{
            sendForm(){
                if (this.formData.name.trim() == ''){
                    alert("请填写姓名！");
                    return false;
                }
                if (this.formData.gender.trim() == ''){
                    alert("请选中性别！");
                    return false;
                }
                if (this.formData.age.trim() == ''){
                    alert("请填写年龄！");
                    return false;
                }
                if (this.formData.number.trim() == ''){
                    alert("请填写联系电话！");
                    return false;
                }
                if (this.formData.depart.trim() == ''){
                    alert("请选择部门！");
                    return false;
                }
                var newUser= {
                    "id":this.formData.id,
                    "name":this.formData.name.trim(),
                    "gender":this.formData.gender,
                    "age":this.formData.age,
                    "number":this.formData.number,
                    "depart":this.formData.depart,
                    "role":this.formData.role
                };
                if (this.pid){
                    this.$store.commit('editUser',newUser);
                    alert("修改成功");
                }else{
                    this.$store.commit('addUser',newUser);
                    alert("添加成功");
                }
                this.$router.push({ path: '/user' })

            }
        }
    }
</script>

<style scoped>

</style>