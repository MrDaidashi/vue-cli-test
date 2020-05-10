<template>
    <div>
        <h1>axios测试</h1>
        <table>
            <tr v-for="(tr,index) in listData" :key="index">
                <td>{{tr.dlzh}}</td>
                <td>{{tr.rymc}}</td>
                <td>{{tr.xbdm}}</td>
                <td>{{tr.zhztbz}}</td>
                <td>{{tr.jgbm}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                listData:[]
            }
        },
        created(){
            this.$axios({
                method:'post',
                url:'http://192.168.3.100/authority-manage/User/getUserMassage',
                headers:{
                    'UserToken':'eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAF2Ry27TQBSG32UkdhHpjDMzTiSkOvGNFiKaxI5beeN77PqS1Jfarrqo1LKGHQuE1BU72HXRDS8DCY-BNRZCYnf0f9_RzDnnBmi5d_U69TMwATcmiILEMcHEBPvPz_sv9z9_PO7vvptgYILcqrx3VrFhVJwMxew6jTPLzXsasZzVUd64jd2yALLEjdu-z3KTMO2lwE56A0HhSCKIpzM6GvFUIFiWJQglScSSTDCzt9cuky98jAw1JnykIl_lDG8by63DI38eXpTKCcHU1a_0zN4tlZ2BqvKUVsFuPWxWZOPWSpTLm0KrTuqFvFgZgqYn6_GwGsMl5lFrE9maXo5foOnGPm3OVM2BS7heQH41xwHfxcpCrctaqPXUOyP-TBm5gcrl6jroGI5Wuc_NivO34RutiEvVmIe1pOrOK_b9pnbbf_MfX5ZpE750sqSH_y2r7A6SWonHot9PD4fnr4dvj4cP7399_GSCWzAAURF218LdpiAiVKCQjJAoj2VRmhEoQJHirp52YmgVYAIxTyk6ohwZgLy0u072foe9evsXI8yR2z-TARxsDQIAAA.I-1UHIwlaEUkVteDqJw9IP5dyL9fRAwvUd4RcLwW_6Y'
                },
                data:{
                    "jgbm": "121A0E6287C74487A65FFE11EED5EF65",
                    "pageNum": 1,
                    "pageSize": 30,
                    "rymc": ""
                }
            }).then((response)=>{

                this.listData = response.data.data.data;
                console.log(this.listData);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>