<template>
    <div>
        <!--<h3>当前最新的count值为{{count}}</h3>-->
        <h3>{{showNum}}</h3>
        <button @click="sub">-1</button>
        <button @click="subN(3)">-3</button>
        <button @click="subAsync">-1 Async</button>
        <button @click="subNAsync(3)">-3 Async</button>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default {
        name: "subtraction",
        data(){
            return {};
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['showNum'])
        },
        methods:{
            ...mapMutations(['sub','subN']),
            ...mapActions(['subAsync','subNAsync'])
        }
    }
</script>

<style scoped>

</style>