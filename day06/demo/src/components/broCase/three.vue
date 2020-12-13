<template>
    <div class="one">
        <h1>我是组件CCCCC</h1>
        <h2>骆宾王说----{{msg}}</h2>
        <button @click='sendA'>传送数据给A</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'鹅鹅鹅，曲项向天歌'
        }
    },
    methods: {
        sendA(){
            this.Event.$emit('bb',this.msg)
        }
    },
}
</script>
<style lang="" scoped>
.one{
    border: 2px solid orange;
}    
</style>