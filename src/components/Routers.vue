<template>
    <div>
        <button><router-link to="/componentA">componentA</router-link></button>
        <button><router-link to="/componentB">componentB</router-link></button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'routerTest'
    }
</script>