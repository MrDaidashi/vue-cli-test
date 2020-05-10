<template>
    <div>
        <!--<h3>当前最新的count值为{{$store.state.count}}</h3>-->
        <h3>{{$store.getters.showNum}}</h3>
        <button @click="addCount">+1</button>
        <button @click="addCount3">+3</button>
        <button @click="addCountA">+1 Async</button>
        <button @click="addCountN">+5 Async</button>
    </div>
</template>

<script>
    export default {
        name: "addition",
        data(){
            return {};
        },
        methods:{
            addCount(){
                this.$store.commit('add')
            },
            addCount3(){
                this.$store.commit('addN',3)
            },
            addCountA(){
                //这里的dispatch专门用来触发action
                this.$store.dispatch('addAsync');
            },
            addCountN(){
                this.$store.dispatch('addNAsync',5);
            }
        }
    }
</script>

<style scoped>

</style>