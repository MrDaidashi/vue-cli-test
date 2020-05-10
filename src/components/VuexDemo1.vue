<template>
    <div>
        <my-addition></my-addition>
        <p>------------------------------------</p>
        <my-subtraction></my-subtraction>
    </div>

</template>

<script>
    import Addition from './Addition'
    import Subtraction from './Subtraction'
    export default {
        name: "vuex-demo1",
        data(){
            return {};
        },
        components:{
            'my-addition':Addition,
            'my-subtraction':Subtraction
        }
    }
</script>

<style scoped>

</style>