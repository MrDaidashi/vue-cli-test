import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const list = [{"id":1,"name":"张三","gender":"男","age":"25","number":"18745651223","depart":"工程部","role":"技术人员"},
    {"id":2,"name":"李四","gender":"男","age":"35","number":"18123214123","depart":"工程部","role":"技术人员"},
    {"id":3,"name":"刘希","gender":"女","age":"21","number":"18712341223","depart":"工程部","role":"技术人员"},
    {"id":4,"name":"王庭贵","gender":"男","age":"22","number":"13512651223","depart":"工程部","role":"技术人员"},
    {"id":5,"name":"陈杰","gender":"男","age":"36","number":"18312651223","depart":"工程部","role":"技术人员"}];
export default new Vuex.Store({
    state:{
        count:0,
        username:'',
        userList:list
    },
    mutations:{
        add(state){
            state.count++
        },
        addN(state,num){
            state.count +=num
        },
        sub(state){
            state.count--
        },
        subN(state,num){
            state.count -=num
        },
        login(state,username){
            state.username = username
        },
        addUser(state,User){
            state.userList.push(User);
        },
        editUser(state,User){
            var list = state.userList;
            for (var i = 0;i<list.length;i++){
                if (list[i]['id'] == User.id){
                    list[i]['name'] = User.name;
                    list[i]['gender'] = User.gender;
                    list[i]['age'] = User.age;
                    list[i]['number'] = User.number;
                    list[i]['depart'] = User.depart;
                    list[i]['role'] = User.role;
                    break;
                }
            }
        },
        delUser(state,id){
            var index = state.userList.findIndex(item => {
                if (item.id == id) {
                    return true;
                }
            });
            state.userList.splice(index, 1);
        }
    },
    actions:{
        addAsync(context){
            setTimeout(()=>{
                //在Action中不能直接修改 state中的数据
                //必须通过context.commit()触发某个mutation才行
                context.commit('add')
            },1000)
        },
        addNAsync(context,num){
            setTimeout(()=>{
                //在Action中不能直接修改 state中的数据
                //必须通过context.commit()触发某个mutation才行
                context.commit('addN',num)
            },1000)
        },
        subAsync(context){
            setTimeout(()=>{
                //在Action中不能直接修改 state中的数据
                //必须通过context.commit()触发某个mutation才行
                context.commit('sub')
            },1000)
        },
        subNAsync(context,num){
            setTimeout(()=>{
                //在Action中不能直接修改 state中的数据
                //必须通过context.commit()触发某个mutation才行
                context.commit('subN',num)
            },1000)
        }
    },
    getters:{
        showNum(state){
            return '当前最新的数量是【'+state.count+'】'
        }
    }
})