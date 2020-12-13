<template>
    <div class="goodsInfo">
        <h1>我是商品页面</h1>
        <button @click='toFather'>送给父亲</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'五花马千金裘'
        }
    },
    methods: {
        toFather(){
            this.$emit('getGift',this.msg)
        }
    },
}
</script>
<style lang="" scoped>
    .goodsInfo{
        border: 3px solid red;
    }
</style>