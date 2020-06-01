<template>
    <div>
        <p>{{username}}</p>
        <div>
            <p v-for="(msg,index) in messages" :key="index">{{msg}}</p>
        </div>
        <div>
            发送信息<input v-model="sendMessage"/>
        </div>
        <div>
            发送给
            <select v-model="toUser">
                <template v-for="(user,index) in onlineUser" >
                    <option :key="index"  v-if="user!=username">{{user}}</option>
                </template>
            </select>
        </div>
        <div>
            <button @click="websocketSend">发送</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "websocket-demo",
        data(){
            return {
                websocket: null,
                messages:[],
                onlineUser:[],
                sendMessage:"",
                toUser:""
            }
        },
        created(){
            this.initWebsocket();
        },
        destroyed(){
            this.websocket.close();
        },
        methods:{
            initWebsocket(){ //初始化websocket
                if (typeof(WebSocket) == "undefined"){
                    console.log("您的浏览器不支持WebSocket")
                }else if(this.username!=''){
                    console.log("您的浏览器支持WebSocket");
                    let wsuri = "ws://localhost:9999/demo/imserver/"+this.username;
                    if (this.websocket!=null){
                        this.websocket.close();
                        this.websocket = null;
                    }else{
                        this.websocket = new WebSocket(wsuri);
                        this.websocket.onopen = this.websocketonopen;
                        this.websocket.onmessage = this.websocketonmessage;
                        this.websocket.onerror = this.websocketonerror;
                        this.websocket.onclose = this.websocketonclose;
                    }
                }else{
                    alert("请重新登录")
                }
            },
            websocketonopen(){
                console.log("websocket已打开")
            },
            websocketonerror(){
                console.log("websocket发生了错误");
                this.initWebsocket();
            },
            websocketonmessage(msg){
                var data = JSON.parse(msg.data);
                // var data = JSON.parse(msg);
                console.log(data);
                if (data.code == "200"){//socket创建成功，获得在线人数
                    this.onlineUser = data.data;
                    this.messages.push(data.msg)
                }else if (data.code=="100"){
                    this.onlineUser = data.data;
                    this.messages.push(data.msg)
                } else if (data.code=="300"){
                    this.messages.push(data.data)
                }
                // this.messages.push(msg.data);
            },
            websocketonclose(){
                console.log("websocket已关闭");
            },
            websocketSend(){
                var sendData = {
                    "toUserId": this.toUser,
                    "fromUserId":this.username,
                    "contentText":this.sendMessage
                }
                var jsonStr = JSON.stringify(sendData);
                this.websocket.send(jsonStr);
                this.sendMessage = "";
            }
        },
        computed:{
            ...mapState(['username'])
        }
    }
</script>

<style scoped>

</style>