<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <slot name="dyl" :data="item" :string="str" ></slot>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                item: ['空空如也', '悟空', '成都', '七月上', '病变', '走马'],
                str:"123123"
            }
        }
    }
</script>
