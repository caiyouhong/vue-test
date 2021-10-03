<template>
    <div id="app">
        <p v-for="item in items" :key="item">{{item}}</p>
        <button @click="btn()">添加</button>
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                items:['a', 'b', 'c']
            };
        },
        mounted() {

        },
        methods: {
            btn(){
                this.items[1] = 'd'
                console.log(this.items);
            }
        }
    };
</script>
<style scoped>
.main{
    width:300px;
    height:400px;
    display:flex;
    flex-direction: column;
}
    .top{
        height:100px;
        width:100px;
        background:red;
    }
    .bottom{
        background:blue;
        width:200px;
        height:100%;
    }
</style>