<template>
    <div>
        <div v-if="substatus == 0">
            <h1>个人信息表单</h1>
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="p_name" class="col-sm-2 control-label">姓名</label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" id="p_name" name="p_name"
                               v-model='formData.name' placeholder="请输入姓名" >
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">性别</label>
                    <div class="col-sm-10" style="text-align: left">
                        <label class="radio-inline">
                            <input type="radio" name="gender" v-model="formData.gender" value="男">男
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="gender" v-model="formData.gender" value="女">女
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="p_area" class="col-sm-2 control-label">地区</label>
                    <div class="col-sm-10" >
                        <select class="form-control" id="p_area" name="p_area" v-model="formData.area">
                            <option v-for="op in selectData" :key="op.text" :value="op.value">{{op.text}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="p_email" class="col-sm-2 control-label">邮件</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" name="p_email" id="p_email"
                               v-model="formData.email" placeholder="请输入您的电子邮件">
                    </div>
                </div>
                <div class="form-group">
                    <label for="p_dsc" class="col-sm-2 control-label">备注</label>
                    <div class="col-sm-10">
                    <textarea class="form-control" rows="3" id="p_dsc" name="p_dsc"
                              v-model='formData.dsc' placeholder="备注信息"></textarea>
                    </div>
                </div>
                <button @click="subData" type="submit" class="btn btn-default">提交表单</button>
            </form>
        </div>
        <div v-else>
            <h1>填写的个人信息</h1>
            <p>姓名：{{formData.name}}</p>
            <p>性别：{{formData.gender}}</p>
            <p>地区：{{formData.area}}</p>
            <p>电子邮件：<span v-text="formData.email"></span></p>
            <p>备注：<span v-html="formData.dsc"></span></p>
        </div>
    </div>
</template>
<script>
    const selectData = [{text:'选择一个地区',value:''},{text:'昆明',value:'昆明'},{text:'玉溪',value:'玉溪'},
        {text:'楚雄',value:'楚雄'},{text:'保山',value:'保山'}]

    export default {
        data:function () {
            return{
                formData:{
                    name:'',
                    gender:'',
                    area:'',
                    email:'',
                    dsc:''
                },
                selectData:selectData,
                substatus:0
            }
        } ,
        methods:{
            subData:function () {
                this.substatus = 1;
            }
        }
    }
</script>
<style>

</style>