<template>
    <div class="hello">
        <div>
            <h1>{{msg}}</h1>
            <dyl-slot>

                <template v-slot:dyl="myData"><!-- 这里的myData值为插槽里使用:设置的值-->
                    <ul >
                        <li v-for="(item,index) in myData.data" :key="index">{{item}}</li>
                    </ul>
                    <p>{{myData}}</p>
                </template>
            </dyl-slot>
        </div>
    </div>

</template>

<script>
    import dylSlot from "@/components/dylSlot"

    export default {
        // components: {SlotDemo},
        name:'hello',
        data(){
            return{
                msg:'dyl的测试组件'
            }
        },
        components:{
            "dyl-slot":dylSlot
        }
    }
</script>