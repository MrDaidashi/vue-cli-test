<template>
    <div>
        <h1>{{info}}</h1>
        <h3>用户：{{username}}</h3>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:"title",
        props:{
            info:String
        },
        computed:{
            ...mapState(['username'])
        }
    }
</script>